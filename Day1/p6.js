const fs=require('fs');
const append=()=>{
    const data="i am prajjwal Singh";
    fs.appendFile('./data.txt',data,(err)=>{

        if(err) console.log(err);
        else console.log("file updtaed")

})
}
append();
