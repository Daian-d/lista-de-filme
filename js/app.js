//Lista de URLs da imagem das séries
var listaSeries = [
    "https://infinitasvidas.files.wordpress.com/2020/06/peaky-blinders.png?w=640", 
    "https://upload.wikimedia.org/wikipedia/pt/2/25/Suits_temporada_7.jpg", 
    "https://portal.megabrasil.com.br/imagens/20200811_5f32a9012dc4e.jpg", 
    "https://t.ctcdn.com.br/YbDUBMmb1gDALkZFBg7lyAhxtVQ=/320x180/smart/i618290.jpeg", 
    "https://br.web.img3.acsta.net/pictures/15/02/11/14/18/481673.jpg", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2RVPlFxOiW7OO8btD8uW-DCua88g119v7GVdeel4Ux_ANY7O9IIuvW6Fe4dALGqrxuQ&usqp=CAU", 
    "https://pm1.aminoapps.com/6497/2a86ad8755fecb5b26054998dcfb20f7461a869e_hq.jpg", 
    "https://br.web.img2.acsta.net/pictures/23/09/14/22/21/5601463.png", 
    "https://poltronanerd.com.br/wp-content/uploads/2019/01/poltrona-Sex-education-poster.jpg", 
    "https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTqR7dxmp3kkmGcOt7NS-p7jmaHjBAnSatMf22KgkuHYBhoAwIdCmEbmkuO2XGfEuvTp13b6aJGnWiwn1Lpr4fIsUCU8mO2RFskpGOoKS-hfed1LgX9N_0kEP6aq1tKMIVClEw.jpg?r=3ea", 
    "https://img.elo7.com.br/product/zoom/4AA1F61/quadro-decorativo-serie-the-witcher-serie.jpg",
    "https://i.ibb.co/FxHf1rm/img-4718-854x540.jpg"];

//Lista do nomes das séries
var nomeSeries = ["Peaky Blinders","Suits","Lucifer","Casa do Dragão", "Lobo Adolescente", "Bridgerton", "Grimm", "One Piece", "Sex Education", "Vaganarok", "The Witcher","Titans"];

// Lista de URLs dos trailers
var listaTrailers = [
    "https://www.youtube.com/watch?v=K-RoN7MA5V8", // Trailer de Peaky Blinders
    "https://www.youtube.com/watch?v=B1OL4ZQf70c", // Trailer de Suits
    "https://www.youtube.com/watch?v=wYljG3jiv-s", // Trailler de Lucifer
    "https://www.youtube.com/watch?v=6ZdBiDGMMGI", // Trailerr da Casa do Draão
    "https://www.youtube.com/watch?v=TLqKaFrjjNk", // Trailer de Teen Wolf
    "https://www.youtube.com/watch?v=pyi8QAlHR8k", // Trailer de  Bridgerton
    "https://www.youtube.com/watch?v=iVJ0FLNd2uQ", // Trailer de Grimm
    "https://www.youtube.com/watch?v=YC8SLpnxsL4", //Trailler de Once Piece
    "https://www.youtube.com/watch?v=nGe-uZEQh3g", // Trailer de Sex Education
    "https://www.youtube.com/watch?v=DsZNcQSGRr8", // Trailer de Raganorck
    "https://www.youtube.com/watch?v=tjujvMkqWe4", //Trailer de The Witcher 
    "https://www.youtube.com/watch?v=iH44Z0QwrWQ"];//Trailer de Titans


for (var i = 0; i < listaSeries.length; i++) {
    document.write("<div style='display: inline-block; margin: 10px;'>");
    document.write("<a href='" + listaTrailers[i] + "' target='_blank'>"); // Define o link do trailer como o link de destino do <a>
    document.write("<img src=" + listaSeries[i] + ">");
    document.write("</a>"); // Fecha a tag <a>  
    document.write("<p style='color:red;font-size:15px'>" + nomeSeries[i] + "</p>");
    document.write("</div>");
}


