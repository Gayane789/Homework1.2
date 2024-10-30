function createHomeLayout() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement("header", { class: "header" }, [
      UI.createElement("a", { href: "index.html" }, "Log In"),
      UI.createElement("a", { href: "registration.html" }, "Sign Up"),
    ]),

    UI.createElement("main", { class: "main-section" }, [
      UI.createElement("nav", { class: "sidebar" }, [
        UI.createElement("div", { class: "blogger" }, [
          UI.createElement( "img", {src: "https://www.w3schools.com/howto/img_avatar2.png", class: "img_avatar", alt: "ImgAvatar" }, null),
          UI.createElement("a", { href: "#" }, "Alice Johnson")]),

        UI.createElement("div", { class: "blogger" }, [
          UI.createElement( "img", { src: "https://www.w3schools.com/w3images/avatar2.png", class: "img_avatar", alt: "ImgAvatar" }, null),
          UI.createElement("a", { href: "#" }, "Bob  Smith") ]),

        UI.createElement("div", { class: "blogger" }, [
          UI.createElement( "img", {src: "https://www.w3schools.com/w3images/avatar6.png", class: "img_avatar", alt: "ImgAvatar" },null),
          UI.createElement("a", { href: "#" }, "Monica  Brown")]),
        ]),
        UI.createElement("div", { class: "section" }, [
          UI.createElement("section", { class: "box" }, [
            UI.createElement("div", {class: "authorName"}, [
                UI.createElement("h2", {}, "Lewis Carroll"),
                UI.createElement("h2", {}, "The Adventures of Alice in Wonderland"),
            ]),
           UI.createElement("div", {class: "description"}, [
            UI.createElement("p", {class: "story"}, "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations."),
            UI.createElement( "img", { src: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/84f9dc39-0868-4cec-aeaa-2356387f37ce/Alice%E2%80%99s%20Adventures%20in%20Wonderland%20-%20Header.png", class: "img_story", alt:"Imgstory" })
        ]) 
        ]),

        UI.createElement("section", { class: "box" }, [
            UI.createElement("div", {class: "authorName"}, [
                UI.createElement("h2", {}, "J.R.R. Tolkien"),
                UI.createElement("h2", {}, "The Lord of the Rings: The Fellowship of the Ring"),
            ]),
           UI.createElement("div", {class: "description"}, [
            UI.createElement("p", {class: "story"}, "One ring to rule them all, one ring to find them, one ring to bring them all and in the darkness bind them, in the Land of Mordor where the Shadows lie."),
            UI.createElement( "img", { src: "https://img.hulu.com/user/v3/artwork/3c4e0a9f-c6f2-44f4-a703-a18c6be2a937?base_image_bucket_name=image_manager&base_image=243fcf14-8e45-4441-96a8-be510660958a&size=600x338&format=webp", class: "img_story", alt:"Imgstory" })
        ]) 
        ]),

        UI.createElement("section", { class: "box" }, [
            UI.createElement("div", {class: "authorName"}, [
                UI.createElement("h2", {}, "Jane Austen"),
                UI.createElement("h2", {}, "Pride and Prejudice"),
            ]),
           UI.createElement("div", {class: "description"}, [
            UI.createElement("p", {class: "story"}, "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife."),
            UI.createElement( "img", { src: "https://wellsvillesun.com/wp-content/uploads/2024/01/pride-and-prejudice-book-summary.jpg.webp", class: "img_story", alt:"Imgstory" })
        ]) 
        ]),
          
          UI.createElement("footer", { class: "footer" }, "footer"),
        
      ]),
    ]),
  ]);

  UI.render(container, document.querySelector("body"));
}
createHomeLayout();





// function createFooter() {
//     return UI.createElement("footer", { class: "footer" }, [
//         UI.createElement("p", {}, `Current Date: ${new Date().toLocaleString()}`)
//     ]);
// }

// setInterval(() => {
//     if (document.querySelector("div.section")) {
//         document
//             .querySelector("div.section")
//             .removeChild(document.querySelector("footer.footer"));
//     }
//     UI.render(createFooter(), document.querySelector("div.section"));
// }, 1000);

// createHomeLayout();
