function showCity() {
  // 1. Récupérer la valeur courante du menu
  // Pour ça on va faire :
  let nomVilleSelectionnee = document.getElementById("listeVilles").value;

  console.log(nomVilleSelectionnee);

  // 2. Récupérer la liste de toutes les div correspondant à une div de météo
  // Pour ça on va faire :
  let cities = document.getElementsByClassName("city");

  // 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
  // TODO : definir l : la taille max de votre tableau cities
  for (i = 0; i < cities.length; i++) {
    if (cities[i].id == nomVilleSelectionnee) {
      cities[i].style.display = "inline";
    } else {
      cities[i].style.display = "none";
    }
  }
}

/*
      
      
      //let villeCourante=["Paris","Lyon","Mareseille"];

      let cities = document.getElementsByClassName("city");
      

      
      let villeCourante = document.getElementsByClassName("ville");
      let l = cities.length;

      /* for (let i = 0; i < villeCourante.length; i++) {
        window.setInterval(function () {
          cities[i].classList.toggle(cities[i].hide());
        })
      } */
//if(villeCourante===cities[i]){}*/

/*showCity(cities[i]).element.style.display="";
					function showCity().onclick{element.style.display= "true"}*/
