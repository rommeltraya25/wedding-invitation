

/* =========================================================
FLOATING PRIVATE INVITATION NOTICE
========================================================= */

const privateNotice =
    document.getElementById("privateNotice");

const privateNoticeClose =
    document.getElementById("privateNoticeClose");


privateNoticeClose.addEventListener(
    "click",
    () => {

        privateNotice.classList.add("hide");

        setTimeout(() => {

            privateNotice.remove();

        }, 450);

    }
);


/* =========================================================
   INVITATION OPENING
========================================================= */

const hero = document.getElementById("hero");

window.addEventListener("scroll", () => {

    hero.classList.toggle(
        "open",
        window.scrollY > 120
    );

});


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
    new Date("December 18, 2026 00:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance =
        weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            distance / (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


/* Observe elements that already exist */

document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });

/* =========================================================
ENTOURAGE DATA
========================================================= */

/* =========================================================
   ENTOURAGE DATA
========================================================= */

const entourageData = {

    /* -----------------------------------------
       PARENTS
    ----------------------------------------- */

    parents: {
        layout: "two-columns",

        groups: [
            {
                title: "Parents of the Groom",
                people: [
                    {
                        name: "John Rupert Traya",
                        role: "Brother (as Father)"
                    },
                    {
                        name: "Amelita Traya",
                        role: "Mother"
                    }
                ]
            },

            {
                title: "Parents of the Bride",
                people: [
                    {
                        name: "Porferio Almerino",
                        role: "Father"
                    },
                    {
                        name: "Elena Almerino",
                        role: "Mother"
                    }
                ]
            }
        ]
    },


    /* -----------------------------------------
       PRINCIPAL SPONSORS
    ----------------------------------------- */

    principalSponsors: {

        title: "Principal Sponsors",

        layout: "two-columns",

        columns: [

            {
                title: "Ninong",
                people: [
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    },
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    },
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    }
                ]
            },

            {
                title: "Ninang",
                people: [
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    },
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    },
                    {
                        name: "---",
                        role: "Principal Sponsor"
                    }
                ]
            }

        ]
    },


    /* -----------------------------------------
       MAID OF HONOR / BEST MAN
    ----------------------------------------- */

    principalAttendants: {

        layout: "two-columns",

        groups: [

            {
                title: "Best Man",
                people: [
                    {
                        name: "Rhynmark Alere",
                        role: "Best Man"
                    }
                ]
            },

            {
                title: "Maid of Honor",
                people: [
                    {
                        name: "Renalyn Salvador",
                        role: "Maid of Honor"
                    }
                ]
            }

        ]
    },


    /* -----------------------------------------
       GROOMSMEN / BRIDESMAIDS
    ----------------------------------------- */

    weddingParty: {

        layout: "two-columns",

        groups: [

            {
                title: "Groomsmen",
                people: [
                    {
                        name: "Ragy Cyrus Gonzaga",
                        role: "Groomsman"
                    },
                    {
                        name: "Jefflei Realino",
                        role: "Groomsman"
                    },
                    {
                        name: "Andrei Clyde Sacro",
                        role: "Groomsman"
                    },
                    {
                        name: "Dante Tisado Jr.",
                        role: "Groomsman"
                    },
                    {
                        name: "John Clinton Ceballos",
                        role: "Groomsman"
                    },
                    {
                        name: "Philip Kevin Mita",
                        role: "Groomsman"
                    },
                    {
                        name: "Kit Liesly Torremocha",
                        role: "Groomsman"
                    },
                    {
                        name: "Joshua Slim Torres",
                        role: "Groomsman"
                    }
                ]
            },

            {
                title: "Bridesmaids",
                people: [
                    {
                        name: "---",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Je Ann Caidoy",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Jemarie Candela",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Gellie Ann Azores",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Jessa Coral",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Lovely Catantan",
                        role: "Bridesmaid"
                    },
                    {
                        name: "Rachelle Candela",
                        role: "Bridesmaid"
                    },
                    {
                        name: "---",
                        role: "Bridesmaid"
                    }
                ]
            }

        ]
    },


    /* -----------------------------------------
       SECONDARY SPONSORS
    ----------------------------------------- */

    secondarySponsors: {

        title: "Secondary Sponsors",

        layout: "three-columns",

        columns: [

            {
                title: "Candle",
                people: [
                    {
                        name: "Carl Christian T. Alpino",
                        role: "Candle Sponsor"
                    },
                    {
                        name: "Lalaine Calupaz Caidoy",
                        role: "Candle Sponsor"
                    }
                ]
            },

            {
                title: "Cord",
                people: [
                    {
                        name: "Jun C. Lumpas",
                        role: "Cord Sponsor"
                    },
                    {
                        name: "Lynde Grace B. Cagara",
                        role: "Cord Sponsor"
                    }
                ]
            },

            {
                title: "Veil",
                people: [
                    {
                        name: "Lander V. Catantan",
                        role: "Veil Sponsor"
                    },
                    {
                        name: "Aira Mae S. Catantan",
                        role: "Veil Sponsor"
                    }
                ]
            }

        ]
    },


    /* -----------------------------------------
       BEARERS
    ----------------------------------------- */

    bearers: {

        layout: "three-columns",

        groups: [

            {
                title: "Ring Bearer",
                people: [
                    {
                        name: "Zian Mollera",
                        role: "Ring Bearer"
                    }
                ]
            },

            {
                title: "Coin Bearer",
                people: [
                    {
                        name: "Maxwill Luya",
                        role: "Coin Bearer"
                    }
                ]
            },

            {
                title: "Bible Bearer",
                people: [
                    {
                        name: "Aziel Kenn Traya",
                        role: "Bible Bearer"
                    }
                ]
            }

        ]
    },


    /* -----------------------------------------
       FLOWER GIRLS
    ----------------------------------------- */

    flowerGirls: {

        title: "Secondary Entourage",

        layout: "two-columns",

        columns: [

            {
                title: "Flower Girls",
                people: [
                    {
                        name: "Leona Marie Almerino",
                        role: "Flower Girl"
                    },
                    {
                        name: "Leana Grace Almerino",
                        role: "Flower Girl"
                    },
                    {
                        name: "Kristal Flor",
                        role: "Flower Girl"
                    }
                ]
            },

            {
                title: "Flower Girls",
                people: [
                    {
                        name: "Yhance Mollera",
                        role: "Flower Girl"
                    },
                    {
                        name: "Arabella Regis",
                        role: "Flower Girl"
                    }
                ]
            }

        ]
    }

};


/* =========================================================
   DISPLAY ENTOURAGE
========================================================= */

/* =========================================================
   RENDER ENTOURAGE
========================================================= */

const entourageContainer =
    document.getElementById("entourage-container");


function createPerson(person) {

    return `
    <div class="entourage-person">

      <span class="person-name">
        ${person.name}
      </span>

      <span class="entourage-role">
        ${person.role}
      </span>

    </div>
  `;

}


function createGroup(group) {

    return `
    <div class="entourage-group reveal">

      <h3 class="entourage-group-title">
        ${group.title}
      </h3>

      <div class="entourage-list">

        ${group.people
            .map(createPerson)
            .join("")}

      </div>

    </div>
  `;

}


function createSection(section, title = "") {

    let html = `
    <div class="entourage-row ${section.layout}">
  `;


    if (title) {

        html += `
      <h2 class="entourage-main-title">
        ${title}
      </h2>
    `;

    }


    /*
      GROUPS
      Used for parents, best man/maid of honor,
      groomsmen/bridesmaids, and bearers.
    */

    if (section.groups) {

        section.groups.forEach(group => {

            html += createGroup(group);

        });

    }


    /*
      COLUMNS
      Used for Ninong/Ninang,
      Candle/Cord/Veil,
      Flower Girls.
    */

    if (section.columns) {

        section.columns.forEach(column => {

            html += `
        <div class="entourage-group reveal">

          <h3 class="entourage-group-title">
            ${column.title}
          </h3>

          <div class="entourage-list">

            ${column.people
                    .map(createPerson)
                    .join("")}

          </div>

        </div>
      `;

        });

    }


    html += `
    </div>
  `;

    return html;

}


/* =========================================================
   BUILD ENTourage
========================================================= */

entourageContainer.innerHTML = `

  ${createSection(entourageData.parents)}

  ${createSection(entourageData.principalAttendants)}

  ${createSection(entourageData.weddingParty)}

  
  ${createSection(
    entourageData.principalSponsors,
    entourageData.principalSponsors.title
)}
  ${createSection(
    entourageData.secondarySponsors,
    entourageData.secondarySponsors.title
)}

  ${createSection(
    entourageData.flowerGirls,
    entourageData.flowerGirls.title
)}
    
  ${createSection(entourageData.bearers)}
`;


/* =========================================================
   RE-INITIALIZE SCROLL REVEAL
   Because these elements were created by JavaScript
========================================================= */

const entourageRevealElements =
    entourageContainer.querySelectorAll(".reveal");


const entourageObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    entourageObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


entourageRevealElements.forEach(element => {

    entourageObserver.observe(element);

});



/* =========================================================
 FAQ DATA
========================================================= */

const faqData = [

    {
        question: "What time should we arrive?",
        answer:
            "We kindly ask our guests to arrive at least 30 minutes before the ceremony so everyone can be comfortably seated before the celebration begins."
    },

    {
        question: "Where will the ceremony be held?",
        answer:
            "The wedding ceremony will be held at Saint Francis Xavier Parish at 1:00 PM."
    },

    {
        question: "Where will the reception be held?",
        answer:
            "The reception will follow at Putyokan San Abuyog at 3:00 PM."
    },

    {
        question: "What should I wear?",
        answer:
            "Our dress code is elegant sage green for the ladies and champagne brown tones for the gentlemen."
    },

    {
        question: "Can I bring a plus-one?",
        answer:
            "If they’re not on the invitation, they’re not on the guest list. We love surprises, just not expensive ones. 😂"
    },

    {
        question: "Are children invited?",
        answer:
            "Children who are specifically included in the invitation are warmly welcome to celebrate with us."
    },

    {
        question: "Do I need to RSVP?",
        answer:
            "Yes, please confirm your attendance through the RSVP form so we can properly prepare for your arrival."
    },

    {
        question: "Is there parking available?",
        answer:
            "Yes, parking will be available near the wedding venues. Please allow some extra time for parking and getting to your seat."
    },

    {
        question: "Can I take photos during the ceremony?",
        answer:
            "We would love for you to capture the celebration, but we kindly ask everyone to keep phones and cameras unobtrusive during the ceremony."
    },

    {
        question: "What if I have other questions?",
        answer:
            "If you have any questions that are not answered here, please feel free to reach out to the couple or a member of the wedding party."
    }

];


/* =========================================================
   DISPLAY FAQ
========================================================= */

const faqContainer =
    document.getElementById("faq-container");


faqData.forEach((faq, index) => {

    const faqItem =
        document.createElement("div");

    faqItem.className =
        "faq-item reveal";


    observer.observe(faqItem);


    faqItem.innerHTML = `

    <button
      class="faq-question"
      type="button"
      aria-expanded="false"
    >

      <span>
        ${faq.question}
      </span>

      <span class="faq-icon">
        +
      </span>

    </button>


    <div class="faq-answer">

      <div class="faq-answer-inner">

        ${faq.answer}

      </div>

    </div>

  `;


    faqContainer.appendChild(
        faqItem
    );


    /* =====================================================
       FAQ ACCORDION
    ===================================================== */

    const question =
        faqItem.querySelector(".faq-question");


    question.addEventListener(
        "click",
        () => {

            const isOpen =
                faqItem.classList.contains("active");


            /* Close all other FAQs */

            document
                .querySelectorAll(".faq-item.active")
                .forEach((item) => {

                    item.classList.remove(
                        "active"
                    );

                    item
                        .querySelector(".faq-question")
                        .setAttribute(
                            "aria-expanded",
                            "false"
                        );

                });


            /* Open clicked FAQ */

            if (!isOpen) {

                faqItem.classList.add(
                    "active"
                );

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        }
    );

});



/* =========================================================
   RSVP DEMO
   Replace this with your backend / Google Form / Formspree
   when you are ready.
========================================================= */

//     document
//       .getElementById("rsvpForm")
//       .addEventListener("submit", async function (event) {

//         event.preventDefault();

//         const rsvpData = {
//           id: "rsvpForm",
//           name: document.getElementById("guestName").value.trim(),
//           attendance: document.getElementById("attendance").value,
//           message: document.getElementById("guestMessage").value.trim()
//         };

//         console.log("RSVP Submitted:", rsvpData);

//         try {

//           // await submitAttendance(rsvpData);

//           alert(
//             "Thank you for confirming your RSVP! ♡"
//           );

//           this.reset();

//         } catch (error) {

//           console.error("Submission failed:", error);

//           alert(
//             "Something went wrong while submitting your RSVP. Please try again."
//           );

//         }

//       });


//     const url =
//   "https://script.google.com/macros/s/AKfycbxeNHjRydpALs4B975Rcad4RlcDz5g93fyYpI5RA61uTLkmIVNyrfrgc3e4mqXf_PgN0g/exec";


// async function submitAttendance(rsvpData) {

//   const formData = new URLSearchParams();

//   formData.append("Name", rsvpData.name);
//   formData.append("Attendance", rsvpData.attendance);
//   formData.append("Message", rsvpData.message);

//   // Date + time
//   formData.append(
//     "Date",
//     new Date().toISOString()
//   );

//   console.log(
//     "Sending RSVP to Google Sheets:",
//     Object.fromEntries(formData)
//   );

//   await fetch(url, {
//     method: "POST",
//     mode: "no-cors",
//     body: formData
//   });

//   console.log("RSVP request sent.");
// }





/* =========================================================
WEDDING REMINDERS DATA
========================================================= */

const remindersData = [

    {
        title: "Keep Our Invitation Private",
        text: "This invitation is intended for our invited guests. Kindly refrain from sharing the invitation link with others, as our arrangements are based on our confirmed guest list."
    },

    {
        title: "Please Observe the Guest Limit",
        text: "We kindly ask that only guests specifically included in the invitation attend the celebration. Thank you for understanding our carefully planned arrangements."
    },

    {
        title: "Please Arrive on Time",
        text: "We encourage everyone to arrive early and be seated before the ceremony begins so you can share in this meaningful moment from the very beginning."
    },

    {
        title: "Keep Phones on Silent",
        text: "During the ceremony, please place mobile phones and other devices on silent so everyone can remain fully present."
    },

    {
        title: "Give Our Photographers Space",
        text: "Please allow our official photographers and videographers enough room to capture the special moments of our day without interruption."
    },

    {
        title: "Share the Joy Respectfully",
        text: "We are happy for you to take photos and share memories. We simply ask that everyone remain mindful of the ceremony, the couple, and our other guests."
    }

];


/* =========================================================
   DISPLAY WEDDING REMINDERS
========================================================= */

const remindersContainer =
    document.getElementById("reminders-container");


remindersData.forEach((reminder, index) => {

    const reminderItem =
        document.createElement("div");

    reminderItem.className =
        "reminder-item reveal";


    reminderItem.innerHTML = `

    <div class="reminder-icon">
      ✦
    </div>

    <div class="reminder-content">

      <h3>
        ${reminder.title}
      </h3>

      <p>
        ${reminder.text}
      </p>

    </div>

  `;


    remindersContainer.appendChild(
        reminderItem
    );


    /* Observe dynamically-created reveal element */

    observer.observe(reminderItem);

});


/* =========================================================
DRESS CODE IMAGE LIGHTBOX
========================================================= */

const lightbox =
    document.getElementById("imageLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");


/* Select only dress-code images */

const dressCodeImages =
    document.querySelectorAll(
        ".dress-code .detail-card img"
    );


dressCodeImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightboxImage.src =
            image.src;

        lightboxImage.alt =
            image.alt;

        /*
          Use the card title as the
          elegant lightbox caption.
        */

        const title =
            image
                .closest(".detail-card")
                .querySelector("h3");

        lightboxCaption.textContent =
            title
                ? title.textContent
                : image.alt;

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        /* Prevent background scrolling */

        document.body.style.overflow =
            "hidden";

    });

});


/* Close button */

lightboxClose.addEventListener(
    "click",
    closeLightbox
);


/* Click outside image */

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {
            closeLightbox();
        }

    }
);


/* Escape key */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("active")
        ) {
            closeLightbox();
        }

    }
);


function closeLightbox() {

    lightbox.classList.remove(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

    /*
      Clear the image after the
      closing animation.
    */

    setTimeout(() => {

        if (
            !lightbox.classList.contains("active")
        ) {

            lightboxImage.src = "";

        }

    }, 400);

}
