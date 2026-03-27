function Hello(){
  var myName ="Arfan";
  let fullName=()=>
  {
    return 'Arfan Siddiqee'
  }

  return <>
  <div><h3>
    Hello this is the future speaking {myName}
  </h3>
  <p> show full name {fullName()}</p>
  </div>
  </>
}
export default Hello;