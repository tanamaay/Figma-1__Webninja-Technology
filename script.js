


//  owl carousel script
// $("#owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: true,
//     dots: true,
//     navText: [
//       `<img src="img/arrow-left.png" alt="">`,
//       `<img src="img/arrow-right.png" alt="">`,
//     ],
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 4,
//       },
//     },
// });
  
$("#owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  // navText: [
  //   `<img src="images/vector-left.png" alt="">`,
  //   `<img src="images/vector-right.png" alt="">`,
  // ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 4,
    },
  },
});