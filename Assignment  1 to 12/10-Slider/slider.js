::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Open Sans", sans-serif;
  background-color: hsl(210, 36%, 96%);
  color: hsl(209, 61%, 16%);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
img:not(.person-img) {
  width: 100%;
}
img {
  display: block;
}
h1,
h2,
h3,
h4 {
  letter-spacing: 0.25rem;
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
  font-family: "Roboto", sans-serif;
}
h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: hsl(210, 22%, 49%);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/* global classes */
.btn {
  text-transform: uppercase;
  background-color: transparent;
  color: black;
  padding: 0.375rem 0.75rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid black;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
}
.btn:hover {
  color: white;
  background-color: black;
}
/* section */
.section {
  padding: 5rem 0;
}
main {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
/* Slider container */
.slider-container {
  border: 6px solid #f6b93b;
  width: 80vw;
  margin: 0 auto;
  height: 40vh;
  max-width: 80rem;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  margin-top: 4rem;
}
.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #38ada9;
  color: white;
  display: grid;
  place-items: center;
  transition: all 0.25s ease-in-out;
  text-align: center;
}
.slide-img {
  height: 100%;
  object-fit: cover;
}
.slide h1 {
  font-size: 5rem;
}
.person-img {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-bottom: 1rem;
}
.slide:nth-child(1) h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.slide:nth-child(3) {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(./pic/img2.jpg) center/cover no-repeat;
}
/* .slide:nth-child(4) {
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(./pic/img3.jpg) center/cover no-repeat;
} */
.btn-container {
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
}
.prevbtn,
.nextbtn {
  background-color: transparent;
  border-color: transparent;
  font-size: 2rem;
  cursor: pointer;
  margin: 0 0.25rem;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: #1e3799;
  transition: all 0.3s linear;
  box-shadow: 2px 2px 5px black;
  border-radius: 0.875rem;
}
.prevbtn:hover,
.nextbtn:hover {
  color: #4b4b4b;
}
@media screen and (min-width: 576px) {
  .slider-container {
    height: 45vh;
  }
}
@media screen and (min-width: 768px) {
  .slider-container {
    height: 55vh;
  }
}
@media screen and (min-width: 992px) {
  .slider-container {
    height: 65vh;
  }
}
/* .slide:nth-child(1) {
  left: 0;
}
.slide:nth-child(2){
  left: 100%;
}
.slide:nth-child(3){
  left: 200%;
}
.slide:nth-child(4){
  left: 300%;
}
.slide{
  transform: translateX(0%);
} */