
export const Expertise = () => {
  return (
    <div className="flex flex-col w-auto md:h-96 items-center border-2 border-collapse rounded-2xl px-6 pb-2 space-y-6">
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-16 h-16  md:w-20 md:h-20 rounded-full">
                <img src="/assets/dev.png" className="w-full h-full object-cover" alt="mon expertise" />
            </div>
            <h3>Programmation</h3>
            <p className="text-lg lg:text-xl text-center px-4">
                Simplifier en automatisant des taches par des algorithmes
            </p>
        </div>
        <div className="text-base lg:text-xl text-center px-4 flex justify-center items-center">
            <p><strong>Keywords : </strong> Python, JavaScript, Java, C, SQL, Ruby, Scala</p>
        </div>
    </div>
  )
}
