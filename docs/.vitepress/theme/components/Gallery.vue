<template>
<div class="gallery">
    <ul class="slides">
        <li v-for="img in images">
            <img loading="lazy" :src="img" :alt="alt" style="width:100%">
        </li>  
    </ul>
    <ul class="nav-indicators">
        <li v-for="img in images"></li>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        alt: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        const list = document.querySelector(".gallery .slides");
        const items = Array.from(document.querySelectorAll(".gallery .slides li"));
        const indicators = Array.from(document.querySelectorAll(".nav-indicators li"));

        const observer = new IntersectionObserver(onIntersectionObserved, {
          root: list,
          threshold: 0.6
        });

        function onIntersectionObserved(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
                const intersectingIndex = items.indexOf(entry.target);
                activateIndicator(intersectingIndex);
                }
            });
        }

        function activateIndicator(index) {
            indicators.forEach((indicator, i) => {
                indicator.classList.toggle("active", i === index);
            });
        }

        items.forEach(item => {
            observer.observe(item);
        });
    }
};
</script>

<style>
.gallery {
  position: relative;
  overflow: hidden;

  display: flex;
  justify-content: center;
}

.gallery .slides {
  height: 300px;
  width: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  border-radius: 8px;
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
  scroll-snap-type: x mandatory;
}
@media only screen and (max-width: 600px) {
  .gallery .slides {
    height: 190px;
  }
}
/* Hide scrollbar */
.gallery .slides::-webkit-scrollbar {
  display: none;
}
.gallery .slides {
  -ms-overflow-style: none; 
  scrollbar-width: none;
}

.gallery .slides li {
  margin: 0;
  height: 100%;
  flex: 1 0 100%;
  scroll-snap-align: start;
  scroll-snap-stop: always;
}

.gallery .slides img {
  height: 100%;
  object-fit: cover;
}

.gallery .nav-indicators {
  position: absolute;
  bottom: 0;
  margin: 8px 0;
  padding: 4px;
  display: flex;
  border: 1.6px solid color-mix(in srgb, var(--vp-c-gray-1) 70%, transparent);;
  border-radius: 8px;
  position: absolute;
  list-style: none;
  background-color: color-mix(in srgb, var(--vp-c-bg-alt) 50%, transparent);
}

.gallery .nav-indicators li {
  width: 5px;
  height: 5px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: var(--vp-c-gray-1);
}

.gallery .nav-indicators .active {
  background-color: var(--vp-c-brand-1);
}

</style>