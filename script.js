<!-- Circular Progress Bar for Skills -->
<div class="skills">
  <div class="skill html-css">
    <div class="progress-bar html-progress"></div>
    <div class="skill-info">
      <p class="html-progress-value">HTML/CSS</p>
    </div>
  </div>
  <div class="skill javascript">
    <div class="progress-bar javascript-progress"></div>
    <div class="skill-info">
      <p class="javascript-progress-value">JavaScript</p>
    </div>
  </div>
  <div class="skill reactjs">
    <div class="progress-bar reactjs-progress"></div>
    <div class="skill-info">
      <p class="reactjs-progress-value">ReactJS</p>
    </div>
  </div>
  <div class="skill python">
    <div class="progress-bar python-progress"></div>
    <div class="skill-info">
      <p class="python-progress-value">Python</p>
    </div>
  </div>
  <div class="skill ml-ai">
    <div class="progress-bar ml-ai-progress"></div>
    <div class="skill-info">
      <p class="ml-ai-progress-value">Machine Learning</p>
    </div>
  </div>
</div>

<!-- Update the Skill Progress Bars with Your Proficiency -->
<script>
// HTML/CSS Progress Bar (Change percentage if needed)
let htmlProgress = document.querySelector(".html-css"),
  htmlValue = document.querySelector(".html-progress-value");

let htmlStartValue = 0,
  htmlEndValue = 85, // Update to your level
  htmlspeed = 30;

let progresshtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue == htmlEndValue) {
    clearInterval(progresshtml);
  }
}, htmlspeed);

// JavaScript Progress Bar
let javascriptProgress = document.querySelector(".javascript"),
  javascriptValue = document.querySelector(".javascript-progress-value");

let javascriptStartValue = 0,
  javascriptEndValue = 75, // Update to your level
  jsspeed = 30;

let progressjs = setInterval(() => {
  javascriptStartValue++;
  javascriptValue.textContent = `${javascriptStartValue}%`;
  javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${javascriptStartValue * 3.6}deg, #ededed 0deg)`;
  if (javascriptStartValue == javascriptEndValue) {
    clearInterval(progressjs);
  }
}, jsspeed);

// ReactJS Progress Bar
let reactProgress = document.querySelector(".reactjs"),
  reactValue = document.querySelector(".reactjs-progress-value");

let reactStartValue = 0,
  reactEndValue = 60, // Update to your level
  rjsspeed = 30;

let progressreact = setInterval(() => {
  reactStartValue++;
  reactValue.textContent = `${reactStartValue}%`;
  reactProgress.style.background = `conic-gradient(#3f396d ${reactStartValue * 3.6}deg, #ededed 0deg)`;
  if (reactStartValue == reactEndValue) {
    clearInterval(progressreact);
  }
}, rjsspeed);

// Python Progress Bar
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress-value");

let pythonStartValue = 0,
  pythonEndValue = 70, // Update to your level
  pythonspeed = 30;

let progresspython = setInterval(() => {
  pythonStartValue++;
  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#20c997 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
  if (pythonStartValue == pythonEndValue) {
    clearInterval(progresspython);
  }
}, pythonspeed);

// Machine Learning / AI Progress Bar
let mlAIProgress = document.querySelector(".ml-ai"),
  mlAIValue = document.querySelector(".ml-ai-progress-value");

let mlAIStartValue = 0,
  mlAIEndValue = 50, // Update to your level
  mlAIspeed = 30;

let progressmlAI = setInterval(() => {
  mlAIStartValue++;
  mlAIValue.textContent = `${mlAIStartValue}%`;
  mlAIProgress.style.background = `conic-gradient(#f39c12 ${mlAIStartValue * 3.6}deg, #ededed 0deg)`;
  if (mlAIStartValue == mlAIEndValue) {
    clearInterval(progressmlAI);
  }
}, mlAIspeed);
</script>

<!-- Filter Projects -->
<div class="project-filters">
  <button class="filter-item" data-filter="all">All</button>
  <button class="filter-item" data-filter="web">Web Development</button>
  <button class="filter-item" data-filter="ml">Machine Learning</button>
  <button class="filter-item" data-filter="app">App Development</button>
</div>

<!-- Projects Section -->
<div class="projects">
  <div class="post web">
    <h3>AI Ethics Research Paper</h3>
    <p>Description...</p>
  </div>
  <div class="post ml">
    <h3>ML-Based Fitness Tracker</h3>
    <p>Description...</p>
  </div>
  <div class="post app">
    <h3>Quantum Convolutional Neural Network for Pest Detection</h3>
    <p>Description...</p>
  </div>
  <!-- Add more posts as needed -->
</div>

<script>
  $(document).ready(function () {
    $(".filter-item").click(function () {
      const value = $(this).attr("data-filter");
      if (value == "all") {
        $(".post").show("1000");
      } else {
        $(".post")
          .not("." + value)
          .hide("1000");
        $(".post")
          .filter("." + value)
          .show("1000");
      }
    });
  });
</script>

<!-- Sticky Navbar -->
<script>
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
        document.body.style.paddingTop = '0';
      } 
  });
});
</script>

<!-- Back to Top Button -->
<script>
let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
</script>
