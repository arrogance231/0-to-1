import Image from "next/image"

const page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-white overflow-x-hidden">
        <Image src="/evaluation.svg" alt="Evaluation summary" className="w-full h-auto" width={1000} height={1000} />
    </div>
  )
}

export default page