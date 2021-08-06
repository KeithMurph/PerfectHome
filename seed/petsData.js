

const petsdata = [
    {
        name: "Calvin" ,
        description:"Calvin is a fun loving guy who loves to play ball! They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog" ,
        breed: "German Shepard",
        size: "Large" ,
        age: "Adult",
        house_size: "Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws: true,
        spayed: true,
        special_needs: false ,
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2021/01/06191159/German-Shepherd-Dog-head-portrait-indoors-500x486.jpeg"
    },
    {
        name: "Json",
        description:"Json is a happy go lucky pup who will protect your home.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "German Shepard",
        size: "Large" ,
        age: "Young",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws: true,
        spayed: true,
        special_needs: false,
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F15%2Frunning-german-shepherd-1147953994-2000.jpg"
    },
    {
        name: "Khalessi",
        description: "She is an excitable puppy who loves to play with her littermates. She was born blind and will need special care.They are good with children, dogs,and cats. He is neutered with special needs.",
        type: "Large",
        breed: "German Shepard",
        size: "Large" ,
        age: "Baby" ,
        house_size: "Large",
        good_with_children:true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws: true,
        spayed: true,
        special_needs:true,
        image_url:"https://www.purinaproclub.com/sites/g/files/auxxlc346/files/styles/large/public/German%20Shepherd%201%20gsd_043007_hp_md_2.jpg"
    },
    {
        name: "Sarge" ,
        description: "Sarge is a senior bulldog who loves to cuddle and play fetch.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Bulldog" ,
        size: "Medium" ,
        age: "Senior",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws: true,
        spayed: true,
        special_needs: false,
        image_url:"https://figopetinsurance.com/sites/default/files/styles/blog_detail/public/imagedogsenglish-bulldog-just-being-adorable-porchblog.jpg?itok=BYHC4a-o"
    },
    {
        name: "Arya",
        description: "Arya loves to go for walks and play with her stuffed toys. The squeakier the better!They are good with children, dogs,and cats. She is neutered with special needs.",
        type: "Dog" ,
        breed: "Bulldog",
        size: "Medium",
        age: "Young",
        house_size:"Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws: true,
        spayed: true,
        special_needs:true,
        image_url: "https://scx2.b-cdn.net/gfx/news/hires/2021/someenglishb.jpg"
    },
    {
        name: "Paola",
        description: "She is an adult bulldog who loves nothing more than to sit on the couch and get bellyrubs!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Bulldog" ,
        size: "Medium",
        age: "Adult",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://vetstreet.brightspotcdn.com/dims4/default/e23e4d4/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F1f%2F92%2Feb11c793404c89e0cab23d9da64a%2FAP-0RHRMQ-ph645080113.jpg"
    },
    {
        name: "Noodles" ,
        description: "A young puppy who is a little shy at first but warms up quickly.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed:"Toy Poodle" ,
        size: "Small",
        age: "Baby",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.petlandflorida.com/wp-content/uploads/2021/01/Petland_Florida_Toy_Poodle.jpg"
    },
    {
        name: "Arthur",
        description: "Arthur is an older gentleman who loves his treats and to lay in the sun.They are good with children, dogs,and cats. He is neutered with special needs.",
        type: "Dog" ,
        breed: "Toy Poodle" ,
        size: "Small" ,
        age: "Senior",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://www.bil-jac.com/media/0eqnqiyn/toy-poodle-1140459180.jpg"
    },
    {
        name: "TaterTot",
        description: "Tater is an adult pup with a heart of gold.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Toy Poodle" ,
        size:"Small" ,
        age: "Adult",
        house_size:"Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.allthingsdogs.com/wp-content/uploads/2019/08/Toy-Poodle-Feature.jpg"
    },
    {
        name: "Nessa",
        description: "She loves nothing more than a romp around the park and then a nap on the couch!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Labrador Retriever" ,
        size: "Small",
        age: "Adult",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://thumbs-prod.si-cdn.com/omtxDUbVWafbhOTsDFJnOW3gFiw=/fit-in/1600x0/filters:focal(2135x711:2136x712)/https://public-media.si-cdn.com/filer/77/8b/778bb007-831c-4c81-a475-05487cd7b53b/adult-brown-labrador-retriever-1010121_3.jpg"
    },
    {
        name: "Midnight",
        description: "Midnight loves to swim and play in the water.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Labrador Retriever" ,
        size: "Large",
        age: "Adult",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.bil-jac.com/media/j1hodeqf/labrador-962177576.jpg"
    },
    {
        name: "Cracker" ,
        description: "A big boy who loves to run and play.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Labrador Retriever",
        size: "Large",
        age: "Senior",
        house_size:"Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://s36700.pcdn.co/wp-content/uploads/2019/01/Yellow-Labrador-Retriever-happy-in-grass--600x400.jpg.optimal.jpg"
    },
    {
        name: "Munchkin" ,
        description: "A small pup with huge dreams.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Labrador Retriever" ,
        size: "Large",
        age: "Baby",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws: true,
        spayed: true,
        special_needs:true,
        image_url:"https://www.keystonepuppies.com/wp-content/uploads/2019/04/Simba-Yellow-Lab-2-1024x730.jpg"
    },
    {
        name: "Shorty",
        description: "A little girl with big energy.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Chihuahua" ,
        size: "Small",
        age: "Adult",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws: true,
        spayed: true,
        special_needs: false,
        image_url:"https://s36700.pcdn.co/wp-content/uploads/2015/05/shutterstock_1741426311.jpg.optimal.jpg"
    },
    {
        name: "Oscar",
        description:"Named for Oscar the Grouch, he is a grumpy little man who loves his family but takes time to warm up to strangers.They are good with children, dogs,and cats. He is neutered with special needs.",
        type: "Dog",
        breed: "Chihuahua",
        size:"Small" ,
        age: "Senior" ,
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://www.thesprucepets.com/thmb/Kh-xt27-hqeQzhyr9288cl_P64I=/1396x1396/smart/filters:no_upscale()/twenty20_f84c633e-705e-4bf8-a724-00cdea750d8d-590b51893df78c92837b18d6.jpg"
    },
    {
        name: "Katya",
        description: "She is a young girl who loves to play.They are good with children, dogs,and cats. She is neutered with no special needs. ",
        type: "Dog",
        breed: "Chihuahua",
        size: "Small" ,
        age: "Young",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F09%2Fchihuahua-laying-down-wooden-floor-1675701502-2000.jpg"
    },
    {
        name: "Edgar",
        description: "Edgar is a goofy boy who loves to play. He knows basic commands to sit and laydown!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Chihuahua",
        size: "Small",
        age: "Adult",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.loveyourdog.com/wp-content/uploads/2020/04/Chihuahua-Relaxing-Indoors.jpg"
    },
    {
        name: "Sansa",
        description:"A beautiful girl who loves the sun.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Golden Retriever",
        size: "Large",
        age: "Young" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg"
    },
    {
        name: "Tarzan",
        description: "Tarzan is a large man who loves to go on hikes and long walks.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Golden Retriever",
        size: "Large",
        age: "Adult",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://media1.popsugar-assets.com/files/thumbor/fe_TEBbRM3ZlH2WR2P-pI5hbqSI/876x0:4381x3505/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/12/18/763/n/46902966/4759e2855dfa5f7c857892.88399573_/i/what-kind-health-problems-do-golden-retrievers-have.jpg"
    },
    {
        name: "Cheddar",
        description: "A goofy girl who loves belly rubs. She has trouble hearing but that doesn't slow her down.They are good with children, dogs,and cats. She is neutered with special needs.",
        type: "Dog",
        breed: "Golden Retriever" ,
        size:"Large" ,
        age: "Young",
        house_size: "Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws: true,
        spayed: true,
        special_needs:true,
        image_url:"https://nationaltoday.com/wp-content/uploads/2020/02/national-golden-retriever-day.jpg"
    },
    {
        name: "Hermione",
        description: "A smart pup who loves to learn.They are good with children, dogs,and cats. She is neutered with special needs.",
        type: "Dog" ,
        breed: "French Bulldog" ,
        size: "Small",
        age: "Baby",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs: true,
        image_url:"https://cdn11.bigcommerce.com/s-fduu8evurl/product_images/uploaded_images/blue.jpg"
    },
    {
        name: "Calico" ,
        description: "A fun loving girl!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "French Bulldog" ,
        size: "Small",
        age: "Adult" ,
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs: false,
        image_url:"https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg"
    },
    {
        name: "Arnold" ,
        description: "An older man who likes to take it easy.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "French Bulldog" ,
        size: "Small",
        age: "Senior",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.thesprucepets.com/thmb/7nOH4fSTB7GIL6ApI6cxjE7OYf4=/1500x844/smart/filters:no_upscale()/breed_profile_frenchbulldog_1117966_hero_1653-3e51f64b939c411e8f5d68d1d2a5aad2.jpg"
    },
    {
        name: "Jon Snow" ,
        description: "He loves the snow!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Husky",
        size: "Medium",
        age:"Young" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.loveyourdog.com/wp-content/uploads/2020/04/Siberian-Husky-in-Snow-900x500.jpg"
    },
    {
        name: "Schnee",
        description:"Schnee means snow in german because this girl loves to romp in the cold!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Husky" ,
        size: "Medium",
        age: "Adult",
        house_size:"Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.insidedogsworld.com/wp-content/uploads/2016/12/husky10.jpg"
    },
    {
        name: "Yeti",
        description:"Watch out for the zoomies!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Husky",
        size: "Medium",
        age: "Young" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://vetstreet-brightspot.s3.amazonaws.com/a9/f54ad0a80611e0a0d50050568d634f/file/Siberian-Husky-4-645mk062811.jpg"
    },
    {
        name: "Diamond",
        description:"Look at the picture and you can see this is a silly girl!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Pug",
        size: "Small" ,
        age: "Young",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i1.wp.com/nypost.com/wp-content/uploads/sites/2/2020/04/pugs-coronavirus.jpg?quality=80&strip=all&ssl=1"
    },
    {
        name: "Weasley" ,
        description: "A chill older dog.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed:"Pug" ,
        size: "Small",
        age: "Senior",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F16%2Fpug-sleeping-868008896-2000.jpg"
    },
    {
        name: "River",
        description:"Look at this sweetie!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed:"Pug" ,
        size: "Small",
        age:"Adult" ,
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.guim.co.uk/img/media/504ea0b829df61cbc2ac689e07fbe5ff76cd4afe/2_391_2011_1207/master/2011.jpg?width=1200&quality=85&auto=format&fit=max&s=796761e4c2b8674a813c2dc702d93042"
    },
    {
        name: "Speckle",
        description: "A short girl with big personality.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Daschund",
        size: "Small" ,
        age: "Young" ,
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://a-z-animals.com/media/2018/09/Dachshund-on-bed.jpg"
    },
    {
        name: "Juniper",
        description: "A spunky young pup!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Daschund",
        size: "Small" ,
        age: "Baby",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://formydachshund.com/wp-content/uploads/2019/12/Depositphotos_320885450_ots_photo_web-800x600.jpg"
    },
    {
        name: "Pippin",
        description:"A fool of a pup.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed:"Daschund" ,
        size:"Small" ,
        age:"Baby" ,
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.pinimg.com/736x/f8/9f/b4/f89fb42694a53fafb1c098973319653b.jpg"
    },
    {
        name: "Xena",
        description:"A sweet young girl. They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed:"Cattle Dog" ,
        size: "Medium" ,
        age: "Adult",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws: false,
        spayed: true,
        special_needs: false,
        image_url:"https://media-be.chewy.com/wp-content/uploads/2021/06/16153832/AustralianCattleDog-FeaturedImage.jpg"
    },
    {
        name: "Elsa",
        description: "She loves to run and let it go!They are good with children, dogs,and cats. She is neutered with special needs.",
        type: "Dog" ,
        breed: "Cattle Dog" ,
        size: "Medium" ,
        age: "Adult" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://res.cloudinary.com/petrescue/image/upload/v1624335566/bwhapydgiwju69hsyr4d.jpg"
    },
    {
        name: "Red",
        description: "A gorgeous red girl with a beautiful coat!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Cattle Dog",
        size: "Medium",
        age: "Senior" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://homesteadontherangesite.files.wordpress.com/2021/04/c0ac1-acdog2.jpg"
    },
    {
        name: "Snowflake",
        description: "A small puff of fur with a big personality!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Samoyed" ,
        size: "Medium",
        age: "Baby",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://dogtime.com/assets/uploads/gallery/samoyed-dogs-and-puppies/samoyed-dogs-puppies-1.jpg"
    },
    {
        name: "Gremlin",
        description: "A fiesty older dog.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Samoyed",
        size: "Medium",
        age: "Senior",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.purinaproclub.com/sites/g/files/auxxlc346/files/styles/social_share_large/public/Kegs_Thumbnail.jpg?itok=yIRyCEyu"
    },
    {
        name: "Charlie",
        description:"Eager to learn and treat motivated!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Yorkshire Terrier",
        size:"Small",
        age: "Adult",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://highlandcanine.com/wp-content/uploads/2021/05/yorkshire-terrier-sitting-on-decking.jpg"
    },
    {
        name: "Yoko Ono",
        description: "A small girl with a lot of spunk!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Yorkshire Terrier" ,
        size: "Small",
        age: "Young",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://www.espree.com/sites/default/files/2019-10/YorkshireTerrier.jpg.png"
    },
    {
        name: "Coco Chanel",
        description:"A glamorous pup who loves to have her fur brushed.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Yorkshire Terrier",
        size: "Small",
        age: "Senior",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/01125304/Yorkshire-Terrier-laying-down-outdoors.jpg"
    },
    {
        name: "Courage",
        description: "A brave dog who loves his people.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Rottweiler",
        size: "Large",
        age: "Adult",
        house_size: "Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://vetstreet.brightspotcdn.com/dims4/default/016b763/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fde%2F7def60a7fb11e0a0d50050568d634f%2Ffile%2FRottweiler-5-645mk062811.jpg"
    },
    {
        name:"Hagrid" ,
        description:"A small pup with big personality. He loves other animals!They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Rottweiler" ,
        size: "Large",
        age: "Baby",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkPUNsnem0b7KvR5g6R2oFChGvLf-wvUf0Wg&usqp=CAU"
    },
    {
        name: "Gollem",
        description:"A big dog with an even bigger heart.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Great Dane",
        size: "Large" ,
        age: "Adult",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/02173451/Great-Dane-standing-in-a-fenced-field.jpg"
    },
    {
        name: "Patches",
        description: "A gentle giant.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog" ,
        breed: "Great Dane",
        size: "Large" ,
        age: "Senior",
        house_size: "Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://petkeen.com/wp-content/uploads/2021/06/great-dane_Earl-Wilkerson_Shutterstock.jpg"
    },
    {
        name: "Shorty",
        description: "A big bundle of love.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Great Dane" ,
        size: "Large",
        age: "Young",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://chfa.net/images/2020_blogs/Gastropexy/harlie_gastropexy_bloat_great_dane_2.png"
    },
    {
        name: "Teddy",
        description: "A fiesty little ball of fluff.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Pomeranian",
        size: "Small",
        age: "Young" ,
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://media-be.chewy.com/wp-content/uploads/2021/06/02102132/Pomeranian_Featured-Image.jpg"
    },
    {
        name: "Manatee",
        description: "A sweet young pup.They are good with children, dogs,and cats. He is neutered withspecial needs.",
        type: "Dog",
        breed: "Pomeranian",
        size: "Small",
        age: "Adult",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"chttps://vetstreet-brightspot.s3.amazonaws.com/58/35/8cdde1f54ad986b94f1cdfebd990/pomeranian-AP-0BISNY-645sm8513.jpg"
    },
    {
        name: "Shadow",
        description: "Dark as night but sweet as sunshine.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "Pomeranian",
        size: "Small",
        age: "Senior" ,
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url: "https://www.allthingsdogs.com/wp-content/uploads/2019/12/Black-Pomeranian-Feature.jpg"
    },
    {
        name: "Muppet",
        description:"She loves to get dressed up!They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed:"Pomeranian" ,
        size: "Small",
        age: "Baby",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws: true,
        spayed: true,
        special_needs:false,
        image_url:"https://www.thesprucepets.com/thmb/dbGjqFB3KmYs6UXZYiAG7FN8hxs=/897x862/filters:fill(auto,1)/Capture-1cf88e4ad81548fe90a3887b81df64c2.PNG"
    },
    {
        name: "Dulce",
        description: "Look at this hat wearing cool pup! They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed: "German Shepard" ,
        size: "Large",
        age: "Senior",
        house_size: "Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:true ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/26KNGmdc/dulce.jpg"
    },
    {
        name: "Lola" ,
        description:"A shy girl but super sweet. They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Cat" ,
        breed: "Domestic" ,
        size: "Small",
        age: "Adult",
        house_size:"Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/G2DzZx3c/IMG-20210803-135405853.jpg"
    },
    {
        name: "Honey",
        description: "Just looking for belly rubs.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog" ,
        breed:"Labrador Retriever" ,
        size: "Large",
        age: "Young",
        house_size:"Large" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/KYMnzc6f/IMG-20210707-152506202.jpg"
    },
    {
        name: "Tank",
        description: "A tank of a smol boy.They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Yorkshire Terrier",
        size: "Small",
        age: "Baby",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://i.postimg.cc/3N0NCtGG/20200525-173917.jpg"
    },
    {
        name: "Buddy",
        description: "A lazy buddy. They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Labrador Retriever" ,
        size: "Large",
        age: "Young" ,
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://i.postimg.cc/Gm03Rcjd/IMG-20190818-010521251.jpg"
    },
    {
        name: "Flea",
        description:"The alpha of any home. They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog" ,
        breed: "Chihuahua",
        size: "Small",
        age: "Senior",
        house_size: "Small" ,
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard:false ,
        has_claws:true,
        spayed: true,
        special_needs:true,
        image_url:"https://i.postimg.cc/XJd7rr6K/20200525-163826.jpg"
    },
    {
        name: "Dan Dan",
        description:"A smart pup who loves agility tricks. They are good with children, dogs,and cats. He is neutered with no special needs.",
        type: "Dog",
        breed: "Border Collie",
        size: "Medium",
        age: "Young",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/gYRJ47Zx/DanDan.jpg"
    },
    {
        name: "Coco",
        description:"A bundle of fun.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Goldendoodle" ,
        size: "Medium",
        age: "Baby",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/t4j3CdnQ/ED93-AD1-D-8060-45-FD-8-F79-63-AB9-B7-DD2-E1.jpg"
    },
    {
        name: "Nessa" ,
        description: "Give me all the walks and snacks.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Dog",
        breed: "Labrador Retriever" ,
        size: "Large",
        age: "Young",
        house_size: "Large",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: true ,
        has_claws:true,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/QC77jVXd/0-EF7-CE45-C063-4-D7-E-AC33-31-ECCE8-EB6-EB.jpg"
    },
    {
        name: "Izzy" ,
        description:"Loves to be the only pet.They are good with children, dogs,and cats. She is neutered with no special needs.",
        type: "Cat" ,
        breed: "Domestic",
        size: "Small",
        age: "Senior",
        house_size: "Small",
        good_with_children: true,
        good_with_dogs:true,
        good_with_cats:true,
        has_yard: false ,
        has_claws:false,
        spayed: true,
        special_needs:false,
        image_url:"https://i.postimg.cc/NM3yCY1q/18-C1-A68-B-4-F0-B-4-BA9-B96-D-BF0750634-FAD.jpg"
    }
]



module.exports = petsdata