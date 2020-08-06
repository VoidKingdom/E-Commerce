# Fayaz Sheikh - E-Commerce website

This website is meant to be a variation of a video game store and the location on google map is for the location gameworld which has been closed down otherwise i didn't feel comfotable chosing a random location.

## html file standard

All my html files have a standard which I will discuss here. Each come with the same header and footer which contains the nav and the social media stuff. The nav uses an onclick built into the html(which I know isn't standard practice ,but was easier for my head to wrap around)to toggle the mobile nav menu. The function is called from `nav.js`. All the styling is pre-existing and the menu goes over the prebuilt website so it doesn't break anything.

```
.mobilenav a {
    clear: left;
    color: #fff;
    font-size: 22px;
    display: block;
    font-family: Roboto, sans-serif;
    text-decoration: none;
    text-align: center;
    padding: 2em 0;
}

.mobilenav a:hover {
    background: rgba(255, 255, 255, .1);
}
```
Clicking the menu changes the height from 0 to 100vh which allows it to be seen. Clicking it again hides it back to 0. Thing to note is that although this is a mobile website, I try to code mobile without css grid and attempt to use flexbox instead so if a device can't support css grid as it is not compatible on all browsers then they can at least use the mobile variation. This is why I added the hover function as well.
#index.html Slider

I wanted to design a responsive image slider which transitioned on its own but could also be changed by the user. This was extremely difficult to program and unfortunately I have to dumb it down to just a css key animation slider that it is now. Issue was that even max screen size, the slide would be slightly off every time it moved, I couldn't figure out why but it became a consistant issue with every itteration I tried. Even with this itteration I couldn't figure out why it was slightly off but you can see my fix below.

```
.slider figure {
        position: relative;
        float: left;
        width: 500%;
        animation: 20s slider infinite;
    }

    .slider figure img {
        width: 20%;
    }

    @keyframes slider {
        0% {
            left: 0;
        }
        20% {
            left: 0;
        }
        25% {
            left: -100.3%;
        }
        45% {
            left: -100.3%;
        }
        50% {
            left: -200.6%;
        }
        70% {
            left: -200.6%;
        }
        75% {
            left: -300.9%;
        }
        95% {
            left: -300.9%;
        }
        100% {
            left: 0;
        }
    }

```
Even thought he values are even, everytime the slide itterated, it would be slightly off. I came to the conclusion it must be a margin that was not cleared out by my css code at the start of the style sheet. To fix it I increased the transition percentage by 0.3% which mostly counteracted it. Regardless of the issues, its now completely functional and enchances the website greatly.
## help.html google api

The help page uses the google api to plot a location(as I said before) at the old gameworld in town which has recently shut. The most difficult part of this was getting all the website stuff done and linking up my google wallet to the project page just to get the api to work. After that was done, the api was really wellmade and easy to figure out.
```
/*This is for the google api. lat and lng are for the store laction which use to be game world */
function initMap() {
    var location = {lat: 52.637289, lng: -1.133807};
    var map = new google.maps.Map(
        /*The zoom sets the default view for the google map and the location is set from the previous var */
        document.getElementById('map'), {zoom: 16, center: location});
    var marker = new google.maps.Marker({position: location, map: map});
}
```
Most of the stuff is explained in the code so there isn't much to discuss about it other than don't spam it 10,000 times or else the api will stop because I haven't paid.

## Refrences
CSS image slider [Video](https://www.youtube.com/watch?v=pGHOaY4dhAA)
Google Maps API [Tutorial](https://developers.google.com/maps/documentation/javascript/adding-a-google-map)

