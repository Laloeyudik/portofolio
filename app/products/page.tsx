export default async function Product() {
   await new Promise((resolve)=> setTimeout(resolve, 3000))
    return <div className="mt-72">Ini Halaman Product</div>
}