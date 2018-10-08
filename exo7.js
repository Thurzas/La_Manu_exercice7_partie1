function Hello(){
  var pointure=parseFloat(document.getElementById("pointure").value);
  var naissance=parseInt(document.getElementById("AnneeNaissance").value);

  if(isNaN(pointure) || isNaN(naissance))
    alert("Error:not a number !");
  else{
    var res=pointure*2;
    res+=5;
    res*=50;
    res-=naissance;
    res+=1768;
    alert(res);
  }
};
