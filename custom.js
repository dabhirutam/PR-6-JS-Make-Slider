
const data = [

    {

        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",

        author: "Nelson Mandela",

        imgurl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAmwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAFAwQGBwABAgj/xAA8EAACAQMDAgQCCQEHBAMAAAABAgMABBEFEiExQQYTUWEicQcUMkKBkaGxwfAVI0NS0eHxYoKSwhYlM//EABkBAAMBAQEAAAAAAAAAAAAAAAACAwQBBf/EACIRAAICAgIBBQEAAAAAAAAAAAABAhEDIRIxQQQTIlFxQv/aAAwDAQACEQMRAD8AqbNdA0y80dMmuWmUdzmp8CnNBRDW5GAFCvrZxW1maQ9a5wY3NMIRguT6UtCpEq/Okrc4HNOoBvnUHpml8jPoLfVzMhJPAHfoT6UO1G2uI5WMqMcADco4PoM/lUi0vS/P2zAljjLIBwD2z/XaudXthbxjzGK5O7AyQfXHvVEiREbu1xE2YzHL1MbdaGiEq2M8FtoIFSZbE6i3lx+ZLMnIHJyOOp7HHrRGx0mQq4ntwkUuSfgJx2xj1pk3RyiLvp7xlSrZUADOD86a3MaoUyMgdc9hVgpoxitnhdHyBjco5b+hUY1vTNokktgQgfAGOD1rlhRHBnoOMcn2pTznKFc59M1s20sShnDqGGQT3/Gk0CF+/PQUwoT0zDyxkjABwQaf6nYGAJMuFD9s5PzpjocUtzcKOcj73p6VZEljC8QinjxvUYIXrxg8+nWlaseLogFvIUGQSCKlnhvV2WQRyPkHjmorJEIZ5YQ2RG5UH1wetOLKTy5lI7Go9Fk9l0WhzAmKXoVolx52nRt3wM0TGcVVFjzxHZqqkda4axyeKVilJ9adKMMOTQ2ZEkC5bYRKQetJQKQ1EL0U2XAwK7eha2PIetFtLtTM5cnC5A6ZOc+lCoxntUn0TMcgKMplIzgnsB+1Iux5dEjtrWSC0aR5FG4gBj8JPv8ArQK5f69diOaJXZfhUdTj29PnRTVNVAtWiHlja2V2MT/vUat3d5fMHXPembGhjsn+laYkLp5SlFON2/vx/wA1IRYI0HDA7HwcjkdOtRDTdVcgK46cYB6fKj1lrTyTANkduT1pPdXRT2JCOowrbXBfbvOGGM8ZOKi+tWkLRoscWR/iMv3jjHT+anN5iVmwA+796Dx24Ea5CspQ7lOCR8vxFNyRNwaK117TfKK9Sp+wpPbtz+NATGsbBWXPb3NWZqlgl67I2dqL8I7E/OopqOmwxF3aJVUElMv9r3/SuqQjiN9AtXupRC2QpHGenr261Z9hYTxWsTxws5RQGMjbsDHPH8VEvBvlR33KlDtGW2Z/bp6VbEEbPbQPIuVC5KIh549O9UirFZS/iq1FtqrhIyikc8cE+o/DFC4Tgj1zU++k6GINDJGrjLlcsRzx1xVerkPzxioTWykWWb4Ruw9mqFuRUsVhtFVv4Ru0jbDnFTVdQh2j4hXU9GiJQazqBxmnMM+/FMEQucCnUKeWw5qjMcWxzdMmwZ60Pj5bPbNOLw5FN0Pw0A3sfxNyM9KmPhy2QJ58ag+YuCT3HaoZayIGjaQZCkEj1qWyMdGtZfJG5JJF8s55TcCRj86ROnRSnJDS/UCeTawB3cADGK4tztKgDOaSti8rb2yWJ6k55p9FbvvDN1HTIrknRoxoLWQL4/iiiKVYfHj0BFMbKFg6s4O31UZ/SpDZF9hMLKwJ7j+sVnNfg6gkugo8ts8dCDSF488OfM4HsMd6dtPG0ohuY9hAOWSUdaZX8kRiGBIfTd/rmui0gTJchGdo2I3HnHrQPUJBcz5m+zF0TocU8upNu9EBHfDUHupCSzDO40+OyWWMaJx4CtfMuJHjLtHK2GXC/wA9u9TZ8W06CPgfZLc7eR/r7VXngS8kt5xEi7g/UAZ5qyJZpGglFwi/GgCKDls9j6da1Y+jFkjTIT4/tnk0SOR1hUpc5+H7QBB/nnFV39X3HPFT3xfatHpW7ehUEMd78/Iev/FQ6IL1JqGW7KYkq2O9FtiH4OKki2zbRyaDaPIguOtSZbiHaORUHZrgo0UgN0LfEOacx7mwx6V06GVwx5pVY8CtbZ50UIyjcpplG2x2yOM0TERfgV0NOLDmi0Di2xlFIuOTxUy12VJLfS40w2+BJmIPQ7do/mo4uktjii0CCSe3gXgxQqpJ9eaVtN2Ux2tM7sF2uC/OMgL7+tSG3DpiTyy0R456ig628sUjf3Zx1G7ofajEV9qtjIIrPTUnikQB5mziMk4ycdsf1xU5fI1w+K2GLVojtZSRxkkc4ovFLG7BmALL98dfzqL3M/kzukccLL082DOxj6+3yojpc4aPG1gT92pPReOwu4S4ZmmaN1xlSygGh2opFEn9yXR/u7TXVzPFbxuyyBX7ZNCzcTumYSJAWz0zQnZ16YE1HzBvywPsV/mg5+EHcMZ6j0qTXAml3F4dqg85XbQHUBGzGSMDg9BVoGfISbwKT9bi7gHnjPr0/Kpfq0zQzO/1geWow0crcdOn9etV14cvn06+idIw7henOeT+9SO5E89097dXEkUQJbaxGNn9YqikorZlnFyeiN+K9caeP6lHgAHn4s7fYexqNCeQYAJ9qcXwa7vJrgsWLMSCfTtTnRdOe8u1BBwp9KOSZPjJOhXTZ5IuWB+dEf7WA9alkPh60eMBl5xiu/8A4rZelLosoSKpjiFKCIGuQ+GGOlLK2aRsFRnlhegpWMVgwRW1O00rOoXUVmnoTqL5yMbea7V93GK1ZyKmoOD1bbiux8jKrRMLaz+tIrrg7OMnA/KnHlzLH5IJyRxkDildLjUw7Np5HXNEkhtrJJJv7tT26kj/AHqKZtaI5JavAZHkbdkY+L37Ci2kiNozO4G0LwKDX959dvFWKQyLnH2cUeSBbfTwxQ7iOKJs7EB6lGl4xVcr8WC2OgoalvMonGnXLrdIQI2Y42+pYEcjFE7IgTHeScnnPvRC705XIlU5Y9Spwf0poySElHkR+/v7+W1STUEj87kER8A/rzxUad9oZsHYW6mpreaScEuxY+p5IFRjWY4oUkWMYyc496rCSsjki0hTwpHJda1C+0+TGyvM2PsjPFHfpE1Hy5E023ZdxG+bH3R2X+aD+DtUg0ey1C/v/wD8Zl8tEHV2HTH40CN5LqF3LczsWklbJz+g/KuTVyJqVQ/RxY2zzMqjnNT/AMP6EbWLe2QWFCfCenbphI6jA5FT0DAAHSpOTKwgqsRitsU4FvW0PNK0cmUpHn4Uoj4pJ3WPl2A+ZptJqEC/Z3OfQDFXps8+0gqjZGa3LcRRLmWRVPuaj02ozOMIfLHt1NM2Ys2WJJ9zmmWM48gek12JMiGNn924Fa0e6mubmSWVtzKQfkKAk0S0GTbeFM48xCB8+op+KS0KptyVlq2OrRpBGcncw4UdTWXhnuUYyMQSp2rn7P8AvQgyokdrdL9nyzj58Zpa01KKWYLJII2x8IY9fesrh5R6SyeGFLaO0gSBidsqt8QYc1IL+8hewCxHJA9aGW8CzRE4Ux+nUGkr2xgiZSi/D6BjwaRor+A66jlsrqI5BMhAIz3NSTT79XgBxkjqD2oGzQCQODlhwNxJxWlm+p3G77kox8jR+BSXYQ1GZmUtvIB7ZqvfFFwkaMQ3xHpUm1jUcQkRscniq01m7M92yg5Vf3q+GLu2ZfU5ElSE4rp2EccrswX7AJ4Widq+GBU5oEOevWnVrctbkYG5e61WcbMUJ12Wb4Y1ZYXVJDgVN0vYmUEMDVQ6VfQXJAjfDgfYbrUls714scmsslT2bsc7RPo5dxyKXEnFRzTdUVhh6MrcxlQciuIqebCSx5OaysrK3HkGVlZW1GaANGlIHMcgdScqcjFJnrXSnBBoAsKDzBZxxyICSouE+L7pHxY9aXnsluIhvJ3L0cdfnRvQtO/tjwHZXFvGZLqzjyu0fEdpwy/iB09qFWsnG1+QwyvvS5sft00bME1NUx/omm3ceWtr9I2H+HIpKv8AlSeralqtm5juTbOQeI4+f4pMfWICTBIwUnJHpXR8yUbppN2f1qN/aNNa0DY572fcWiRec5YnPrTyPdctGJTgKctn25P4VqbLfArKoHVz0Uf60O+tS30kWl6RbvLLK21cZzIf8zN2UflTKLlpInKajtsH+ItQSPc0Y5IKxg9/+qocTmpn9IlrDppsrCHa7opaWYdZWHGflycfKoWOtXcOHxMM583ZlKRHjFdKo2YrSDFcEO95TkZHuDRjTteuIMLJ/er6N1oORkYrqPAeuNJ9nYycXaLF0jVbO72hZRHIf8N+tSFGO0Yc1UQkCYI7e9Ok1i7RQq3EwA6ANUJenvpmqPqmltAMVsjitDrWzWgyHNdJWAZrsAelAHJrleDXZWucelAF3fQhe+bo01qSM29yceuGAI/XNSfxV4AW/eTUdEZYbl/ie3Y4Rz6r/lP6fKq7+hCYpq+oQryzxRsoz1IYj/2q373xjY6bqn9lzxTrdBUcl1wpVmABGMk9fTsRV5VLGrJpyjO4lTTvdadK9rqVnNDPGcOrLn9RwePemk2pHadsJx2wtWdqN9p2qOo1eCFJm2qrxu64BkZQdxUf5ckZ7/jXfh3w/wCGNRdZoZTcttD+S0oYYPTpweO1Z3h+javUvjsrWw8N6x4jdFij8q3PxMWzj/uP8CrJ0rwxZeGtNkmQK9yyYkmIwceijsP6NTWO3it41SKNURRgKo4FQ/xvqQWLywcRxoZJD6ADNasEUnoyZMrmUF4/vfrfiK4CnKxYjH7n96jSdaWu5ZLid5ZTl5GLsfc8mk1XjNQnLlJsZaFk56Vxjk+1bQ5PPStkfEeDSgbUc813KgHTNckYwa3v3jGKAOYyaVwaS2lTxSwzjlhn5UAMq2a0Kw0AbXrXfU1wtd5z1oA01cgc124xz1Fc96AJx9EV15Pje0h3bPrEbxK3o2Nyn81q5fpB8PHxDo66lp6//ZWYZo1GNzD70fPfIyPce9ee/CNybXxPo9wrbdl7FuOexcA/oa9PTwXCXbTW7t5cqETRjoHHRvy6/IVbGuSonN07Kx0bWItWRbO9WQXKyLlQxycSs33zjgMOhPStvrjaTcw6VocU09/5cS5j+0WMQwAeem4ng4yDn3enRml8Y3WoWqqs9vzLCqtsLFSpbAHJ+NTjsQaOfRdY2hbV7qUK+q/W2EkjDLiMgbeTyAR6emO1ccadD8vjZIdIl1xNFiGvNbvfn7Qg7egPYkd8cVX30jXZtPDmpTMW82cCEA8Ebjj9gatoRqZzx0X9apP6e7hov7Osmfd5sjTE45wowM/+R/KrRmowZFblZTpzn4jmsz6Vtutc9ayFxSPrS5G0AnHNIwilSCTigBPvSkfWkjwaUTrQAs3atZrhyTSyQMyg56+1AA7pW15PNZWUAdisHWsrKAM+11rWKysoAVtmKToynBV1I/OvXk87w6Ze3SY8yO2eQZHG4KTWqynj0yeTtEO8AWKT6KbyVt1xcSbnkMUZbJ2FudvOT656/KkPo/tI7Hx7rKQcK9mjEbVAzlfQD361lZXRmWLKcJKR1215++nqVm8WW0R+zHaLt/E1lZR/LJQ7KwatDrWVlTLscx8Yrcp2nisrKAEie9LIOAa3WUAdxjLjNEGcoxVQMCtVlAH/2Q==",

        birthPlace: "Mvezo, South Africa"

    },

    {

        quote: "The way to get started is to quit talking and begin doing.",

        author: "Walt Disney",

        imgurl: "data:image/jpeg;base64,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",

        birthPlace: "Chicago, Illinois, USA"

    },

    {

        quote: "Your time is limited, so don't waste it living someone else's life.",

        author: "Steve Jobs",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKgyR9kW2zoJPFrhsuS4Gk_wdrxZPRPaMdfA&s",

        birthPlace: "San Francisco, California, USA"

    },

    {

        quote: "If life were predictable it would cease to be life, and be without flavor.",

        author: "Eleanor Roosevelt",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TibvU4yZ-pcoYIHEG_o-7JuXZKfKl5IMng&s",

        birthPlace: "New York City, New York, USA"

    },

    {

        quote: "If you look at what you have in life, you'll always have more.",

        author: "Oprah Winfrey",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOu7eCJl2_CfsDx3IExwLwhsxxYW6iAvhTGg&s",

        birthPlace: "Kosciusko, Mississippi, USA"

    },

    {

        quote: "Life is what happens when you're busy making other plans.",

        author: "John Lennon",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhpirY-vX5gdDs2jlai14ijKNR27AXTDl8Q&s",

        birthPlace: "Liverpool, England"

    },

    {

        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",

        author: "Mother Teresa",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuZMl-qoMmxemWn_msRT3uuaNDI5HEXp2dQ&s",

        birthPlace: "Skopje, North Macedonia"

    },

    {

        quote: "When you reach the end of your rope, tie a knot in it and hang on.",

        author: "Franklin D. Roosevelt",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DFpPOAUOn8TJ6fz_IyIesZZBsn0y5dGByQ&s",

        birthPlace: "Hyde Park, New York, USA"

    },

    {

        quote: "Always remember that you are absolutely unique. Just like everyone else.",

        author: "Margaret Mead",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp0QqralqgBYdVD2ThXLUgaw1YVp1TJQM3OA&s",

        birthPlace: "Philadelphia, Pennsylvania, USA"

    },

    {

        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",

        author: "Robert Louis Stevenson",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiQrjRVcL1maCD7DiSEK0gUPxXoKEksS5IUg&s",

        birthPlace: "Edinburgh, Scotland"

    },

    {

        quote: "The future belongs to those who believe in the beauty of their dreams.",

        author: "Eleanor Roosevelt",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7hld0tm2sxBNxI-g9oWBypWB__HONwSodJw&s",

        birthPlace: "New York City, New York, USA"

    },

    {

        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",

        author: "Benjamin Franklin",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeKMlO2IlC34PCRDuQ8BuV2-GwzPNlrycww&s",

        birthPlace: "Boston, Massachusetts, USA"

    },

    {

        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",

        author: "Helen Keller",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIT3e11Oo7vReXhLQcb1Gn_SeDVuI__t1KA&s",

        birthPlace: "Tuscumbia, Alabama, USA"

    },

    {

        quote: "It is during our darkest moments that we must focus to see the light.",

        author: "Aristotle",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqEFWXl_IQhv42Is7JqRE-GmWNCWkuX4u8Nw&s",

        birthPlace: "Stagira, Greece"

    },

    {

        quote: "Whoever is happy will make others happy too.",

        author: "Anne Frank",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMn5Ya-Gn2xx1A30A_hFvJuHMojFp5TCEJg&s",

        birthPlace: "Frankfurt, Germany"

    },

    {

        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",

        author: "Ralph Waldo Emerson",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGstugELy6wHUXfzyyyMiQHMSk-eGi7K50QA&s",

        birthPlace: "Boston, Massachusetts, USA"

    },

    {

        quote: "You will face many defeats in life, but never let yourself be defeated.",

        author: "Maya Angelou",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsd4TuuqDPpLk1RzHIJSQUvLbXH3PuCozXJA&s",

        birthPlace: "St. Louis, Missouri, USA"

    },

    {

        quote: "In the end, it's not the years in your life that count. It's the life in your years.",

        author: "Abraham Lincoln",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlYjLCOfU3fF9vE5iyhcy7zA_zlsle_jH1uQ&s",

        birthPlace: "Hodgenville, Kentucky, USA"

    },

    {

        quote: "Never let the fear of striking out keep you from playing the game.",

        author: "Babe Ruth",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBr2MMxwsLCwaPH_Jv0XYC0N42c6p7vRflg&s",

        birthPlace: "Baltimore, Maryland, USA"

    },

    {

        quote: "Life is either a daring adventure or nothing at all.",

        author: "Helen Keller",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZIT3e11Oo7vReXhLQcb1Gn_SeDVuI__t1KA&s",

        birthPlace: "Tuscumbia, Alabama, USA"

    },

    {

        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",

        author: "Thomas A. Edison",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKpyUZikrgsc2SxPxva-J9KLvv_R0_EAhKw&s",

        birthPlace: "Milan, Ohio, USA"

    },

    {

        quote: "You have within you right now, everything you need to deal with whatever the world can throw at you.",

        author: "Brian Tracy",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIF9d5iPPuNyNtYjfQwjPP_JxkMWlMqjZHaQ&s",

        birthPlace: "Charlottetown, Canada"

    },

    {

        quote: "Believe you can and you're halfway there.",

        author: "Theodore Roosevelt",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbXHIPEsNEetw2cwgsLtFPKevgVmzgEVPv1w&s",

        birthPlace: "New York City, New York, USA"

    },

    {

        quote: "Act as if what you do makes a difference. It does.",

        author: "William James",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3yR6Bia-A_pdqJ5i2SCmLfJNuhygoezoA3g&s",

        birthPlace: "New York City, New York, USA"

    },

    {

        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",

        author: "Winston Churchill",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdBfS-SEZiwDTC0jRxVs13llhLoaMvyULV9A&s",

        birthPlace: "Woodstock, England"

    },

    {

        quote: "You are never too old to set another goal or to dream a new dream.",

        author: "C.S. Lewis",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCSXF51wS8hleh3bNHwOin_P-B1gWRAC3upw&s",

        birthPlace: "Belfast, Ireland"

    },

    {

        quote: "At any given moment you have the power to say: this is not how the story is going to end.",

        author: "Christine Mason Miller",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmrnIdy6jquoTZA72_esZ4nDCKt8iJZsFHw&s",

        birthPlace: "Unknown"

    },

    {

        quote: "You don't have to be great to start, but you have to start to be great.",

        author: "Zig Ziglar",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmtSkEBw_U0ExLoz7lpoHjpAHjYTY2ibOb2A&s",

        birthPlace: "Coffee County, Alabama, USA"

    },

    {

        quote: "I have not failed. I've just found 10,000 ways that won't work.",

        author: "Thomas A. Edison",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKpyUZikrgsc2SxPxva-J9KLvv_R0_EAhKw&s",

        birthPlace: "Milan, Ohio, USA"

    },

    {

        quote: "Don't watch the clock; do what it does. Keep going.",

        author: "Sam Levenson",

        imgurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVIW0o2TYflJpZTzLBLuH0_2gW6X3DYraiDQ&s",

        birthPlace: "New York City, New York, USA"

    }

];

let api = document.getElementById('api');

data.forEach(element => {
    api.innerHTML += `<div class="col-4">
                    <div class="card p-3 text-center" style="height: 500px;">
                        <img class="rounded-circle img-flude px-5 mt-4" style="height: 230px;aspect-ratio: 1/1;" src="${element.imgurl}" class="card-img-top">
                        <div class="card-body">
                            <h3 class="mt-3">${element.author}</h3>
                            <p class="text-secondary">${element.birthPlace}</p>
                            <p class="text-secondary fs-6">${element.quote}</p>
                        </div>
                    </div>
                </div>`
});