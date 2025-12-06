---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GIHATE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDu9DiZzcYmW2ykjzlqAjH9P5%2FU36hDpGcjnmJbiSDVuAh8tY3c7IdigPb%2BjSaL9IvOQIIdI7dV46iTFNutwMgrsKv8DCHAQABoMNjM3NDIzMTgzODA1IgzvXsNHaD241k6d01Yq3AOlmFlYUO2eWrNFHMlAfE77WK0pohz%2FfEi2KpY8vDvsA%2FzgWNxkNTLp9UsCB%2FsSKnAB8RIzdRZ%2BKMLTUOpXRZxUlksxmlz7E6pox7p%2FdQP%2BEjZKVSEF8ieF5StA9p%2F48k4auHrbf5EX6VQTFig5tlPsRZQiimMnVi5sGXlQ1tVqZjAgwnJMDLw5fRiKziS2SzR3x5lbbR7mJNPVGKtTrSCkwsChX1Wmq001nAobXGiipxwFpimtn0xiiyR0%2BS4dah2DNsG2z55wHHmHPDjEQW7qtti5Mtskz%2B5yr5fl%2BwbkY1a6D52Z1uNUwRJGzKzY6nxd1Af3uWzr74JioX%2FlMWWsFiofQnyBTlz6c58zEOCc%2Fx4sDQL5E%2FM%2B9cMUIH6REN4pFyOzIGIDojUpp%2Bo6VBUknubSXHLMZyx%2Bt%2BedwstEIF0pAi93BkEnw12pdjo8Uys9qd%2B0AMJdqFMSqRBaxCpvJLNgX7w5wlq5l8WarI8jM7QfGIf2fZkExQ%2FYZXtoNtX892jyYq9aoYmGoFiSpcFwhB%2F1yFmv2fz2wGFNpPljSdVuC7v48NNzW4hPtJ6QbmLEIXUEyRryRQv3lkoC6Mga3GltyL3WWlW9%2BJiSwMmLLTBW%2BkL4sc3ihmOpNzCJns%2FJBjqnAYHIQqtkPCAUlsRWGtUpMt6fTZPiwA8j0%2BaLUvV9L1oGhhxWoKAAgXbhzP6C5Cc4HUGQ90i69ixRpku9h3OA28p23AfMkAXwcg2EjAi3I8cpg2bihT3jSmpRLysQAVRZaofDNEMSipSeTv2BjxclOA23YJZdcNfd75NM869tj8ICrTewa%2BkNd%2FsyirIL0uIPkjIGDSX0eqSGG5cARoaqKI4x3r2ZfmXC&X-Amz-Signature=58a6819d93b6f8b287c2bc42e5f525a946451535aaa86a1b90fe4983644e752b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677GIHATE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIDu9DiZzcYmW2ykjzlqAjH9P5%2FU36hDpGcjnmJbiSDVuAh8tY3c7IdigPb%2BjSaL9IvOQIIdI7dV46iTFNutwMgrsKv8DCHAQABoMNjM3NDIzMTgzODA1IgzvXsNHaD241k6d01Yq3AOlmFlYUO2eWrNFHMlAfE77WK0pohz%2FfEi2KpY8vDvsA%2FzgWNxkNTLp9UsCB%2FsSKnAB8RIzdRZ%2BKMLTUOpXRZxUlksxmlz7E6pox7p%2FdQP%2BEjZKVSEF8ieF5StA9p%2F48k4auHrbf5EX6VQTFig5tlPsRZQiimMnVi5sGXlQ1tVqZjAgwnJMDLw5fRiKziS2SzR3x5lbbR7mJNPVGKtTrSCkwsChX1Wmq001nAobXGiipxwFpimtn0xiiyR0%2BS4dah2DNsG2z55wHHmHPDjEQW7qtti5Mtskz%2B5yr5fl%2BwbkY1a6D52Z1uNUwRJGzKzY6nxd1Af3uWzr74JioX%2FlMWWsFiofQnyBTlz6c58zEOCc%2Fx4sDQL5E%2FM%2B9cMUIH6REN4pFyOzIGIDojUpp%2Bo6VBUknubSXHLMZyx%2Bt%2BedwstEIF0pAi93BkEnw12pdjo8Uys9qd%2B0AMJdqFMSqRBaxCpvJLNgX7w5wlq5l8WarI8jM7QfGIf2fZkExQ%2FYZXtoNtX892jyYq9aoYmGoFiSpcFwhB%2F1yFmv2fz2wGFNpPljSdVuC7v48NNzW4hPtJ6QbmLEIXUEyRryRQv3lkoC6Mga3GltyL3WWlW9%2BJiSwMmLLTBW%2BkL4sc3ihmOpNzCJns%2FJBjqnAYHIQqtkPCAUlsRWGtUpMt6fTZPiwA8j0%2BaLUvV9L1oGhhxWoKAAgXbhzP6C5Cc4HUGQ90i69ixRpku9h3OA28p23AfMkAXwcg2EjAi3I8cpg2bihT3jSmpRLysQAVRZaofDNEMSipSeTv2BjxclOA23YJZdcNfd75NM869tj8ICrTewa%2BkNd%2FsyirIL0uIPkjIGDSX0eqSGG5cARoaqKI4x3r2ZfmXC&X-Amz-Signature=da66970cc22ac1dbd4047f590f19356c10b11ee94ac34101c87b573b09ac5130&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

