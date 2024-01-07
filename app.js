
var listaFilmes = ["https://uploads.jovemnerd.com.br/wp-content/uploads/2023/11/f_1pwghxkaax39m__9bfxp2-760x760.jpeg","https://upload.wikimedia.org/wikipedia/pt/thumb/6/69/The_Avengers_Cartaz.jpg/250px-The_Avengers_Cartaz.jpg","https://upload.wikimedia.org/wikipedia/pt/d/da/Minha_M%C3%A3e_%C3%A9_uma_Pe%C3%A7a.jpg","https://br.web.img3.acsta.net/pictures/18/03/01/20/26/0577579.jpg","https://br.web.img3.acsta.net/medias/nmedia/18/90/57/96/20121842.jpg","https://i.ibb.co/FxHf1rm/img-4718-854x540.jpg","https://br.web.img2.acsta.net/pictures/19/07/05/17/30/5167951.jpg","https://upload.wikimedia.org/wikipedia/pt/9/9f/Sonic_the_Hedgehog_2019.jpg","https://br.web.img3.acsta.net/pictures/17/06/29/14/58/351355.jpg","https://pipocanamadrugada.com.br/site/wp-content/uploads/2016/07/velozes-e-furiosos-7_pipoca-na-madrugada-1.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqpIWaMFXvpWWM7vYJuHGpUsQrD3HcvQ9xVA&usqp=CAU","https://upload.wikimedia.org/wikipedia/pt/4/41/Fast_%26_Furious_9_The_Fast_Saga.jpg","https://br.web.img2.acsta.net/pictures/23/05/16/22/53/0156803.jpg"]
var nomeFilmes = ["Aquaman","Os vingadores","Minha Mãe é uma Peça","Um lugar Silencioso","Batman Cavaleiro das Trevas","Titãs","Homem-Aranha Longe de Casa","Sonic","Dupla Explosiva","Velozes e Furiosos 7","Velozes e Furiosos 8","Velozes e Furiosos 9","Veloses e Furioso 10"]

for (var i = 0; i < listaFilmes.length; i++) {
   document.write("<div style='display: inline-block; margin: 10px;'>");
 //document.write("<div>");
 
  document.write("<img src=" + listaFilmes[i] + ">");
   document.write("<p style='color: red; font-size:13px'>" + nomeFilmes[i] + "</p>");
  document.write("</div>");
}

