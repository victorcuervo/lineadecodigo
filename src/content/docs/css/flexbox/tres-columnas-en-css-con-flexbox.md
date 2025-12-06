---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623K6EA2T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLIq08xOCYq9Ja1T1jakyDVYqA4PFBC6XOUalwjBVCDAiAka3oL8sxEAFK61o7pUjWg6N2mdMGvLwKAuPKZ95Fa9yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMQBdIWRyp8kfL9Xi4KtwDjhht5AF9ZpM5B1AcQfvoXKtzqFdYwbhKMhPfEpah1gdvcYIpSbYiIVzmtUfqQSFpwXz2aTOD5NAFUoBAktEfETsyUaHHe9frD8hVB7JRkf7eJEd%2FZPM4RRrHQCW6ScKelS8%2BraHphQNLOBKzkevCn8ZD0GWBTgCnCUP8vt9fRMpgwYAs69V%2B0wQL0twufYcqeyqCvlUS%2B4O2oW6w4EDCASc3%2BuUOwMOl59esZnqqrCMZskOTTZbTyShN4OSoqmMpBZ%2FMQQ7VaU62%2FsSHgj6pmmc6fXM81wrKpqYDcwavTGzLGiFQClK3uY6Mykvzp%2BLt4S0P18qXHML6xFL0s3ZCTlWkZ4MMQN0BeAMV8yWlzzYIFEiCqKOOMzD6HVSrs6%2BVLbcMEIG1j%2BWhRmImQ9QZUfF0Z7M%2FSGUSAlFhh3JhZOiKu8zOgmLxww8JmhXR3MxmpYGM%2BPrzdi0JdMQ8%2BAvBKe26ifMl2AterP3YllGqls83XGuTdokfLfAgYS95GzU5DzfLhPBtzvWBQ%2FF6dARthKipOiPsdq8Ens3Xl6OybK%2FIHLZgsO8S4LYDMiiRF43wvQTRvda8O1rIzRD7%2BKuZ15Tt77VRyfvjK7apvl3ipVmGkFFldsOO70fGwHUw2%2BjNyQY6pgHMI5pzyRi1tUoV3V7AZC%2BDlkvfz214yr%2Bi5VrbE0EkDFXoZY8r25MKlAMfw7GMBxWQGHn%2BTUJD6l6DQWndSAEL3M%2Bn%2FbFoWKSZRp91AJ1Yi69A60O9njGfugcik1QbWeyd%2FWb7A4u3zyqiH%2FJQiPWYMfzuzQitOgmOvbHtcHcRzDtex0Z3KZJxS5s0YMAxxGvCmL%2FPS1P1O3WKkJ6%2F0x9SVu30Yhix&X-Amz-Signature=8c282ecc40a03320a8ec29ef8310b6b12a15feb3e17adc36c929dd2582ca33d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623K6EA2T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLIq08xOCYq9Ja1T1jakyDVYqA4PFBC6XOUalwjBVCDAiAka3oL8sxEAFK61o7pUjWg6N2mdMGvLwKAuPKZ95Fa9yr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMQBdIWRyp8kfL9Xi4KtwDjhht5AF9ZpM5B1AcQfvoXKtzqFdYwbhKMhPfEpah1gdvcYIpSbYiIVzmtUfqQSFpwXz2aTOD5NAFUoBAktEfETsyUaHHe9frD8hVB7JRkf7eJEd%2FZPM4RRrHQCW6ScKelS8%2BraHphQNLOBKzkevCn8ZD0GWBTgCnCUP8vt9fRMpgwYAs69V%2B0wQL0twufYcqeyqCvlUS%2B4O2oW6w4EDCASc3%2BuUOwMOl59esZnqqrCMZskOTTZbTyShN4OSoqmMpBZ%2FMQQ7VaU62%2FsSHgj6pmmc6fXM81wrKpqYDcwavTGzLGiFQClK3uY6Mykvzp%2BLt4S0P18qXHML6xFL0s3ZCTlWkZ4MMQN0BeAMV8yWlzzYIFEiCqKOOMzD6HVSrs6%2BVLbcMEIG1j%2BWhRmImQ9QZUfF0Z7M%2FSGUSAlFhh3JhZOiKu8zOgmLxww8JmhXR3MxmpYGM%2BPrzdi0JdMQ8%2BAvBKe26ifMl2AterP3YllGqls83XGuTdokfLfAgYS95GzU5DzfLhPBtzvWBQ%2FF6dARthKipOiPsdq8Ens3Xl6OybK%2FIHLZgsO8S4LYDMiiRF43wvQTRvda8O1rIzRD7%2BKuZ15Tt77VRyfvjK7apvl3ipVmGkFFldsOO70fGwHUw2%2BjNyQY6pgHMI5pzyRi1tUoV3V7AZC%2BDlkvfz214yr%2Bi5VrbE0EkDFXoZY8r25MKlAMfw7GMBxWQGHn%2BTUJD6l6DQWndSAEL3M%2Bn%2FbFoWKSZRp91AJ1Yi69A60O9njGfugcik1QbWeyd%2FWb7A4u3zyqiH%2FJQiPWYMfzuzQitOgmOvbHtcHcRzDtex0Z3KZJxS5s0YMAxxGvCmL%2FPS1P1O3WKkJ6%2F0x9SVu30Yhix&X-Amz-Signature=d57c24db199e0dc61b3a9e3e98657b6d3b81a0e45d986ebcfd6260740cf592c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

