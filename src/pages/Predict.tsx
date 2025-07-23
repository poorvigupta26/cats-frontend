import { useEffect, useState, type ChangeEvent } from "react"


function Predict() {
    const [file, setFile] = useState<File | null>(null)
    const [preview, setPreview] = useState<string | null>(null)
    const [result, setResult]= useState("")
    useEffect(()=>{
        return()=>{
            if(preview){
                URL.revokeObjectURL(preview)
            }
            setResult("");
        }
    }, [preview])

    const HandleChange=(e: ChangeEvent<HTMLInputElement>)=>{
       if(e.target.files && e.target.files.length > 0){
            const selectedFile = e.target.files[0]
             setFile(selectedFile);
             setPreview(URL.createObjectURL(selectedFile));
             
       }
       
    }
    const HandleClick=async (e:React.FormEvent)=>{
        e.preventDefault();
        if(!file) return;

        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await fetch('http://127.0.0.1:10000/predict/',{
                method:'POST',
                body:formData
            })
    
            const data = await res.json();
            setResult(data.prediction);
        } catch (error) {
            console.log("error", error);
        }
    }
  return (
    <div className="flex flex-col">
    <div className="flex flex-col justify-center items-center bg-[#D7C0D0] rounded-b-full">
        <div className="mt-40 flex justify-between items-center">
            <form action="post">
                <label htmlFor="upload" className="bg-[#EFF0D1] rounded-lg cursor-pointer px-5 py-4 hover:bg-[#77BA99]">
                    Upload Image
                </label>
            <input type="file" className="hidden" onChange={(event)=>HandleChange(event)} name="" id="upload" placeholder="Upload Image" content="image"/>
            
            <div className="flex">
                { preview && (
                    <img src={preview} className="w-40 h-40 m-2" alt="" />
                )
            }
                </div>
            <div className="flex">
                <button className="bg-[#D33F49] h-10 w-20 rounded-sm poppins-medium cursor-pointer text-white ml-2 mt-10 hover:invert" type="submit" onClick={HandleClick}> Go!</button>
                </div>
        </form>
        </div>
        <div className="h-14">
            {result && (
            <div className="bg-amber-200">
                <h1 className="poppins-extrabold text-4xl">{result}</h1>
            </div>
        )}
        </div>
        
    </div>
    </div>

  )
}

export default Predict