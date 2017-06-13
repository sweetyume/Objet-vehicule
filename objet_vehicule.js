var Vehicule = function (modele, kilometrage, moteur, couleur)  {
  this.modele = modele;
  this.kilometrage = kilometrage;
  this.moteur = moteur || 'serie'
  this.couleur = couleur || 'couleur';
  this.voyage = function (x) {

    this.kilometrage += x;
  }

};

Ferrari = new Vehicule ('F40', 600, 'V8', 'red');
Twingo = new Vehicule ('Twingo', 200, 'essence', 'red' );
Twingo.voyage(200);
Opel = new Vehicule (' Opel Corsa', 3000, 'diesel', 'blue');
Opel.voyage(500);
Clio = new Vehicule ('Clio 3', 12500, 'essence', 'green');
Mini = new Vehicule ('Mini Cooper', 4000, 'diesel', 'white');
Mini
