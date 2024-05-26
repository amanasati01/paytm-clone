type credentiaalType ={
    placeholder : string,
    type : string,
    name : string,
    //Todo Add a nice state type 
    state : any
}
export default function InputBox({placeholder,type,name,state}:credentiaalType){
    return(
    <div>
    <div className="mb-6 w-full">
    <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 text-lg ">{name}</label>
    <input type={type} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} onChange={(e)=>{
        const value = e.target.value
        state(value);
    }}/>
     </div>
        </div>
    )
}