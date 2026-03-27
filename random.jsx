function Random(){
  var number= Math.random () * 90;

  return <h1 style={{'background-color':'#415bd0'}}>ramdom number is : {Math.round(number)}</h1>
}
export default Random;