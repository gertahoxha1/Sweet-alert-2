document.getElementById('normal').addEventListener('click', function() {
    alert('Im a normal alert');
})

document.getElementById('sweet').addEventListener('click', function() {
    Swal.fire({
        title: "Custom width, padding, color, background.",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("/cat-nyan-cat.gif")
          left top
          no-repeat
        `
      });  
})

// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });


// Swal.fire({
//    title: "Custom animation with Animate.css",
//    showClass: {
//      popup: `
//        animate__animated
//        animate__bounce
//        animate__faster
//      `
//    },
//    hideClass: {
//      popup: `
//        animate__animated
//        animate__fadeOutDown
//        animate__faster
//      `
//    }
//  });

// Swal.fire({
    //     title: "Do you want to save the changes?",
    //     showDenyButton: true,
//     showCancelButton: true,
//     confirmButtonText: "Save",
//     denyButtonText: `Don't save`
//   }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
        //       Swal.fire("Saved!", "", "success");
        //     } else if (result.isDenied) {
            //       Swal.fire("Changes are not saved", "", "info");
//     }
//   });
