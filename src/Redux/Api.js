// let url = "http://localhost:8000/Categories_children";

// export const FetchData = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };
let url = "http://localhost:4000/users"

export const jsonData = async()=>{
    try{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        return data
    } catch(e){
        console.log(e);
    }
}