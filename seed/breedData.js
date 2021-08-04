const breedData = [
    {
        breed:"Laborador Retriever",
        size:"Large",
        home_requirement:"A home with a yard would be best.",
        temperament:"Known to be kind, pleasant and outgoing in nature.They were bred to retrieve game. the lab makes a great family dog. They are high energy and require exercise often.",
        image_url:"https://www.animalkingdomaz.com/wp-content/uploads/labrador-retriever-adults.jpg"
    },
    {
        breed:"French Bulldog",
        size:"Small",
        home_requirement:"They can be kept in homes or apartments. They do not require a yard.",
        temperament:"Bred to be companion dogs, they are friendly with a mild-mannered temperament.",
        image_url:"https://dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/1-puppy.jpg"
    },
    {
        breed:"German Shepherd",
        size:"Large",
        home_requirement:"They are large dogs who require more room to run. A larger home is best with a yard.",
        temperament:"Working dogs known for strength, intelligence,trainability, and obedience. They are used for work including police dogs. They are known for protectiveness over their family.",
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F08%2F15%2Fstanding-german-shepherd-151533956-2000.jpg"
    },
    {
        breed:"Golden Retriever",
        size:"Large",
        home_requirement:"Large",
        temperament:"Sweet natured dogs who are highly intelligent and love to learn. They make excellent family dogs but can be hgih energy.",
        image_url:"https://www.petmd.com/sites/default/files/2020-11/picture-of-golden-retriever-dog_0.jpg"
    },
    {
        breed:"Bulldog",
        size:"Medium",
        home_requirement:"They can be raised in an apartment or home.",
        temperament:"Bulldogs are usually friendly, patient and stubborn in nature. They are good family pets and form bonds with children.",
        image_url:"https://www.thesprucepets.com/thmb/FEsGt1xpqpRi_YzoMCuzPEWcvso=/872x654/smart/filters:no_upscale()/1024px-Bulldog_inglese-cf544d354159462c8c0d93db5f1adbe6.jpg"
    },
    {
        breed:"Poodle",
        size:"Can be small or large depending on type.",
        home_requirement:"Small toy poodles can be happy in adpartments but larger standard poodles are happier in a larger home.",
        temperament:"Toy poodles were bred to be companion dogs while standard poodles were bred to retrieve game.They are highly intelligent, energetic, and sociable.",
        image_url:"https://vetstreet.brightspotcdn.com/dims4/default/b5fcb62/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F38%2Fec%2Ffd4eecbe4f57a282b707f097ef33%2Fpoodle-ap-1j99ae-645-x-380.jpg"
    },
    {
        breed:"Beagle",
        size:"Small",
        home_requirement:"They can be happy in houses or apartments.",
        temperament:"They have a great sense of smell and tracking instincts.They are popular for their good temper and lack of health problems.",
        image_url:"https://www.thesprucepets.com/thmb/WxVsARRPU_8Wx8iS3iqDxP3_iK4=/3881x2911/smart/filters:no_upscale()/beagle-RolfKopfle-Photolibrary-Getty-135631212-56a26b1d3df78cf772756667.jpg"
    },
    {
        breed:"Rottweiler",
        size:"Medium to large",
        home_requirement:"They can be in apartments if given sufficient exercise.",
        temperament:"They are commonly used as search and resuce dogs, guard dogs, and police dogs. They are known to be devoted, obedient, and eager to work.",
        image_url:"https://vetstreet-brightspot.s3.amazonaws.com/e5/88/d93f3d544570b968c0c36f0cdf62/rottweiler-ap-pven0l-645.jpg"
    },
    {
        breed:"Pointer",
        size:"Medium to large",
        home_requirement:"A home with a yard is best because they can be extremely active.",
        temperament:"The are adaptable, obedient, and even-tempered dogs. They were bred to help with hunting",
        image_url:"https://www.thesprucepets.com/thmb/ZxXNeVk5uKAmB_VGb7Y6Ci0AVzA=/4000x2250/smart/filters:no_upscale()/GettyImages-941329520-4d4983d95d994c7d8c9d6e02db25bffa.jpg"
    },
    {
        breed:"Daschund",
        size:"Small",
        home_requirement:"They are comfortable in apartments or houses.",
        temperament:"They are known to be playful but often stubborn.They can be hard to train and often bark.",
        image_url:"https://media-be.chewy.com/wp-content/uploads/2021/05/21111223/Dachshund-FeaturedImage.jpg"
    },
    {
        breed:"Corgi",
        size:"Small",
        home_requirement:"They are comfortable in a house or apartment.",
        temperament:"They are intilligent dogs who are friendly and smart.",
        image_url:"https://i0.wp.com/readysetpuppy.com/wp-content/uploads/2019/09/Corgi-at-home.jpg?fit=998%2C463&ssl=1&resize=1280%2C720"
    },
    {
        breed:"Australian Shepherd",
        size:"Medium",
        home_requirement:"They are active dogs who would be best in a home with a yard.",
        temperament:"They are intelligent, active, loyal, protective, playful, and adaptive. They have a strong herding instinct.",
        image_url:"https://www.bubblypet.com/wp-content/uploads/2021/02/Blue-merle-short-haired-Australian-Shepherd.jpg"
    },
    {
        breed:"Yorkshire Terrier",
        size:"Small",
        home_requirement:"They are small dogs who can be happy in apartments.",
        temperament:"They are playful and energetic dogs. People often have two dogs because they can have seperation anxiety.",
        image_url:"https://petkeen.com/wp-content/uploads/2021/05/Yorkshire-Terrier-standin-on-a-wooden-table_Mr.-SUTTIPON-YAKHAM_Shutterstock.jpg"
    },
    {
        breed:"Boxer",
        size:"Medium to Large",
        home_requirement:"They are larger dogs who require more space.",
        temperament:"They are bright,energetic and playful dogs who are good with children. they are patient but also protective of their families.",
        image_url:"https://vetstreet.brightspotcdn.com/dims4/default/f91b648/2147483647/crop/0x0%2B0%2B0/resize/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Ff6%2F9983d09e9011e0a2380050568d634f%2Ffile%2Fboxer-2-645mk062411.jpg"
    },
    {
        breed:"Great Dane",
        size:"Extra Large",
        home_requirement:"They are very large dogs with with low energy. A large home would be best but they can stay in apartments.",
        temperament:"Despite their size, they are known to be friendly and laid back dogs. They are referred to as gentle giants and are good with other pets.",
        image_url:"https://vetstreet-brightspot.s3.amazonaws.com/5b/52/49deed4f440ea965d0ff16fca655/great-dane-AP-PFYPXJ-645sm12913.jpg"
    },
    {
        breed:"Siberian Husky",
        size:"Medium to Large",
        home_requirement:"They are very energetic dogs who need lots of room.",
        temperament:"They energetic and athletic dogs who needs room to run. They can be mischevious without enough exercise.",
        image_url:"https://vetstreet-brightspot.s3.amazonaws.com/5b/52/49deed4f440ea965d0ff16fca655/great-dane-AP-PFYPXJ-645sm12913.jpg"
    },
    {
        breed:"Cavalier King Charles Spaniel",
        size:"Small",
        home_requirement:"They are small dogs who are okay in apartments.",
        temperament:"They are generally friendly and good with children and other animals. They require lots of interaction with people and are good family dogs.",
        image_url:"https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/cavalier-king-charles-spaniel-detail.jpg?bust=1535565465&width=355"
    },
    {
        breed:"Doberman",
        size:"Large",
        home_requirement:"They are large dogs who need a yard.",
        temperament:"They are intelligent,alert and loyal companions. They require training but are known to be loving and devoted dogs.",
        image_url:"https://www.petplace.com/static/d4eb1d31d9e22d830a0097e3e8dcdf3d/98569/AdobeStock_142438416.jpg"
    },
    {
        breed:"Schnauzer",
        size:"Standard are large dogs while mini are small to medium.",
        home_requirement:"Mini schnauzers are good in apartments but larger standard dogs need more room.",
        temperament:"They are highly intelligent and beed early training and daily exercise.",
        image_url:"https://cdn.britannica.com/s:300x169,c:crop/46/79546-050-1B8F54F4/Miniature-schnauzer.jpg"
    },
    {
        breed:"Shih Tzu",
        size:"Small",
        home_requirement:"They are small and good in apartments or houses.",
        temperament:"They have a fun and playful personality and a calm and friendly temperment. They are independent and not a very obedient breed.",
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/15123017/Shih-Tzu-in-the-grass.jpg"
    },
    {
        breed:"Boston Terrier",
        size:"Small",
        home_requirement:"They are good in apartments or houses.",
        temperament:"They are very intelligent and easily trained. They are also strong, happy-go-lucky and friendly dogs. They can be protective of their owners.",
        image_url:"https://www.thesprucepets.com/thmb/NH7zs9miLolHdxkjBH8yfwtxTTk=/1000x1000/smart/filters:no_upscale()/breed_profile_boston_terrier_4689861_hero_1795-d61d4975c7694c528efae043187a5a95.jpg"
    },
    {
        breed:"Bernese Mountain Dog",
        size:"Large",
        home_requirement:"They are large dogs who would do best with a yard.",
        temperament:"They are good natured, friendly, and docile dogs. They are protective of their owners but not aggressive.",
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11160320/Bernese-Mountain-Dog-sitting-in-a-field.jpg"
    },
    {
        breed:"Pomeranian",
        size:"Small",
        home_requirement:"They can be happy in apartments or houses.",
        temperament:"They are typically friendly, lively and playful. They can be aggressive with other dogs and people.",
        image_url:"https://media-be.chewy.com/wp-content/uploads/2021/06/02102132/Pomeranian_Featured-Image.jpg"
    },
    {
        breed:"Cocker Spaniel",
        size:"Medium",
        home_requirement:"They are happy in houses or apartments",
        temperament:"They are good family dogs who are friendly and outgoing.",
        image_url:"https://thehappypuppysite.com/wp-content/uploads/2019/04/Cocker-Spaniel-Lifespan-long.jpg"
    },
    {
        breed:"Pug",
        size:"Small",
        home_requirement:"They can be happy in smaller spaces",
        temperament:"They are even tempered and charming.They are strong willed but not aggressive and make good family dogs.",
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2020%2F12%2F14%2FPug-dog-care.jpg"
    },
    {
        breed:"Border Collie",
        size:"Medium",
        home_requirement:"They are high energy dogs who would do best with a yard.",
        temperament:"They are very intelligent and energetic dogs. They are trained for herding and dog agility.",
        image_url:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F02%2Fborder-collie-green-field-268313239-2000.jpeg"
    },
    {
        breed:"English Mastiff",
        size:"Extra Large",
        home_requirement:"They are very large dogs who would do best with a yard.",
        temperament:"They are known to be gentle and loving. They are very loyal family dogs.",
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/15141849/Mastiff-standing-outdoors.jpg"
    },
    {
        breed:"Chihuahua",
        size:"Small",
        home_requirement:"They are happy in smaller homes and apartments.",
        temperament:"They are known to display aggression towards people and other dogs due top their size. They also are known to bark frequently.",
        image_url:"https://www.thesprucepets.com/thmb/Kh-xt27-hqeQzhyr9288cl_P64I=/1396x1396/smart/filters:no_upscale()/twenty20_f84c633e-705e-4bf8-a724-00cdea750d8d-590b51893df78c92837b18d6.jpg"
    },
    {
        breed:"Basset Hound",
        size:"Medium",
        home_requirement:"They are happy in any size home.",
        temperament:"They are friendly,outgoing,playful and tolerant of children and other pets. They are extremely vocal.",
        image_url:"https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13001044/Basset-Hound-On-White-03.jpg"
    },
    {
        breed:"Collie",
        size:"Medium",
        home_requirement:"They have a herding instinct and do best with a yard and exercise.",
        temperament:"They are very trainable and obedient. They fit well into a family with an active lifestyle.",
        image_url:"https://assets.orvis.com/is/image/orvisprd/Collie?wid=1023&src=is($object$:7-3)"
    }
];

module.exports = breedData