  //Lista de filmes
   var listaFilmes = [
    "https://uploads.jovemnerd.com.br/wp-content/uploads/2023/11/f_1pwghxkaax39m__9bfxp2-760x760.jpeg", //Aquqmqn
    "https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg", //Os Vingadores
    "https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg", //Minha mãeé uma peça
    "https://br.web.img3.acsta.net/pictures/18/03/01/20/26/0577579.jpg", //Um lugar silencioso
    "https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg",  //Batman
    "https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg", //Homem Aranha longe de casa
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKH0yi10DPgDYbgGLDi5LeyQM8a8epz6ztHQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo5Zh9HAjLtTyORUI0AdctkhzBSny2C4-gOA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_bqu36FpZlMelvb3tlwe5CDK0kZTGSXy3zg&s"

  ]; //Velozes e furiosos 10
  
  //lista do nome do filme  
  var nomeFilmes = ["Aquaman",
   "Os vingadores", 
   "Minha Mãe é uma Peça", 
   "Um lugar Silencioso", 
   "Batman Cavaleiro das Trevas", 
   "Homem-Aranha Longe de Casa",
   "Donzela", 
   "Oppenheimer",
   "Dungeons & Dragons"
  
  ];
  
  // Lista de URLs dos trailers
  var listaTrailers = [
      "https://www.youtube.com/watch?v=yJnzCBt5j1M", // Trailer de Aquaman
      "https://www.youtube.com/watch?v=KeNEGtsCWEk", // Trailer de Os Vingadores
      "https://www.youtube.com/watch?v=HrST-4WLlbA", // Trailer de Minha Mãe é uma Peça
      "https://www.youtube.com/watch?v=ENocUCWoGHA", // Trailer de Um lugar silenciso
      "https://www.youtube.com/watch?v=zqfz04yCTnE", // Trailer Batman o cavaleiro das trevas
      "https://www.youtube.com/watch?v=L8qtbebt-y0", // Trailer do Hommem-Aranha longe de casa
      "https://www.youtube.com/watch?v=WvFHERDoBVg", // Tailer da Donzela
      "https://www.youtube.com/watch?v=F3OxA9Cz17A", // Tailer do Oppenheimer
      "https://www.youtube.com/watch?v=PtewyAANr34"  //Trailer do Dungeons & Dragons
    ]; 
  
  for (var i = 0; i < listaFilmes.length; i++) {
      document.write("<div style='display: inline-block; margin: 10px;'>");
      document.write("<a href='" + listaTrailers[i] + "' target='_blank'>"); // Define o link do trailer como o link de destino do <a>
      document.write("<img src=" + listaFilmes[i] + ">");
      document.write("</a>"); // Fecha a tag <a>  
      document.write("<p style='color:red;font-size:15px'>" + nomeFilmes[i] + "</p>");
      document.write("</div>");
  }
  