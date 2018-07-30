 	
	var nomElt=document.getElementById('nom');
	nomElt.addEventListener("focus", function(){
       var aideN=document.getElementById('aideNom');
       aideN.textContent="Veuillez saisir votre nom";
       aideN.style.color="blue";
	});
	nomElt.addEventListener("blur", function(){

		document.getElementById('aideNom').textContent="";
	});



	var prenomElt=document.getElementById('prenom');
    var aideP=document.getElementById('aidePrenom');
	prenomElt.addEventListener("focus", function(){
       
       aideP.textContent="Veuillez saisir votre prenom";
       aideP.style.color="blue";
	});
	prenomElt.addEventListener("blur", function(){

		document.getElementById('aidePrenom').textContent="";
	});

    var mdpElt=document.getElementById('mdp');
mdpElt.addEventListener("input",function(e){

    var longueurMdp="faible";
    var couleur="red";
    var aideM=document.getElementById('aideMdp');
    var Mdp=e.target.value //valeur saisie dans le mot de passe;
    if (Mdp.length>=8) {
    	longueurMdp="suffisante";
    	couleur="green";
    }else if(Mdp.length>=4){
         longueurMdp="moyenne";
         couleur="blue";
    }
    aideM.textContent="Longueur:"+longueurMdp;
   aideM.style.color=couleur;

});

var mailElt=document.getElementById('pseudo');
 mailElt.addEventListener("blur",function(e){
       
         var regexCourriel=/.+@.+\..+/ ;
          var validiteCourriel="Ok";
document.getElementById("aideCourriel").style.color="green";
 document.getElementById("aideCourriel").textContent=validiteCourriel;
         if (!regexCourriel.test(e.target.value)){

               validiteCourriel="Adresse mail non valide";
               document.getElementById("aideCourriel").style.color="red";
               document.getElementById("aideCourriel").textContent=validiteCourriel;
         }

             
 });

   document.getElementById('nationalite').addEventListener("change",function(e){
          
        var paysChoix=e.target.value;
        
  });
