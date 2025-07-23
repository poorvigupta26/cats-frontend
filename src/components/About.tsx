

function About() {
  return (
    <div className="flex  justify-between items-center">
        <div className="flex items-center  mr-1 pr-0 w-[90%] h-[70vh] rounded-tr-full rounded-br-full bg-[#D33F49]  text-white">
            <p className="poppins-regular text-xl tracking-wide"> 
                In the never-ending debate over who reigns supreme—cats or dogs—we let artificial intelligence settle the score. This project uses cutting-edge deep learning techniques to classify images of our furry companions with remarkable accuracy. Built on convolutional neural networks (CNNs), our model is trained to detect subtle patterns in fur textures, ear shapes, and even facial expressions, making it capable of distinguishing between cats and dogs with ease. But beyond the adorable images lies a technical showcase of data preprocessing, model training, performance evaluation, and real-world inference. Whether you're a die-hard dog lover or a committed cat person, this project merges the charm of pet rivalry with the power of AI, offering a playful yet educational dive into image classification. So, who wins the battle—Team Meow or Team Woof? Let's see what the algorithm thinks!
            </p>
        </div>
        <div className="flex items-end p-3 m-4">
            <h1 className="poppins-extrabold text-8xl text-[#77BA99] "> Who are we?</h1>
        </div>
    </div>
  )
}

export default About