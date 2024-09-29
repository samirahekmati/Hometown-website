console.log("hello")

var images, my_current_index, counter, item;


images = ['https://touringhighlights.com/wp-content/uploads/2022/04/Birmingham-UK-1.jpg', 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_822,q_80,w_1220/https://entiretydmsmedia.newmindmedia.com/wsimgs/lib1_429466231.jpg', 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,f_avif,h_547,q_65,w_970/v1/clients/birmingham/VB_Only_Brum_40c0ce84-b5a3-4f23-810c-2cce8a4b9572.jpg'];
let element_carousel_image = document.getElementById('carousel-image');
element_carousel_image.setAttribute("src", images[0]);
my_current_index = 0;


document.getElementById('next-button').addEventListener('click', (event) => {
  my_current_index = (typeof my_current_index === 'number' ? my_current_index : 0) + 1;
  if (my_current_index == 3) {
    my_current_index = 0;
  }
  let element_carousel_image2 = document.getElementById('carousel-image');
  counter = 0;
  images.forEach((item) => {
    if (counter == my_current_index) {
      element_carousel_image2.setAttribute("src", item);
    }
    counter = (typeof counter === 'number' ? counter : 0) + 1;
  });

});

document.getElementById('prev-button').addEventListener('click', (event) => {
  my_current_index = (typeof my_current_index === 'number' ? my_current_index : 0) + -1;
  if (my_current_index == -1) {
    my_current_index = 2;
  }
  let element_carousel_image3 = document.getElementById('carousel-image');
  counter = 0;
  images.forEach((item) => {
    if (counter == my_current_index) {
      element_carousel_image3.setAttribute("src", item);
    }
    counter = (typeof counter === 'number' ? counter : 0) + 1;
  });

});