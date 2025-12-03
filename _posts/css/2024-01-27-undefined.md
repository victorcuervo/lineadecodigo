---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNVGQH6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGTu3qckDNrQJeGa1o2ODDCLemXn7hCkfgu7E3aeQJcDAiEAyibi79SbRaWrXLHpegA9OjJaGLoOhpSR%2FsEK2Gyi5dMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCcG3%2BLbU%2BuTLkO2bCrcA1PAXtmlW%2BDDs22HDAzVk14dbHNn3bxJVtcdNHP4N26d7RGMeu7IQUo4xlFTR4IB4dK5DDfaw3mM9gMnXmm%2FukzcwDlbumgf7aC3nybCFbCXxjzf4IHkUu3pm1sjW2RzL8sSod7EbnOIs4y%2FHEY0eBUikRwrMo5Er5ml6CQrD3%2BOVLvm6gKPXSioGujUnl7wJZcgGXFwGrNc5Ok49zgG%2BjjQM2tOJQAHZhBx4T7af%2FC91WUIYllKdjTdt9GmpyDsTLurVdY2lcldTIkd2TKLQCeHfMLW7bEISV%2FdaksLV4ndT8J%2B%2FuysPgRP%2FeZGA%2FO9MlleYF7MR9slUt6%2B3qZDPngEFByiVpSIgzgb0Ags5fVpGP9FDt5FhlqxzkbimpqFIBCV9wbt7iHvrZrYEVXasifviH60GJEtOYQJ%2BSADyw1hN%2Fm0If1uP9S3ieJemmjJBipfXFItdP99%2BvgPG7w6PwYwzNlEC73iCV9EgCycJWppNyZbwI%2B5SUTbkhmxgoNILRTE0YR2lLn5RL1cKQZVhW2Fq%2FXmkVRgc0odc6xeITbm8IKisaPyaX8NACRls47seDF2BnLDMdgkGrHAC1xZ%2F0ThQ0ZL2C9vhtMlkHiz55ikzQcpq1FJ3B4k7F6kMM2WvskGOqUBGHifjPpqlVShGIu%2BQIl0ew0JuNexmsOZvxwaEXGvewus7MWYBHwkCo7gD6NaQOVigSXpzkFcQAmdwCsKfMj1fONf8BhGLmG3l%2F7pAGzebjEEdXG5RgJ7ilhLDk2g7QpkYyZw2al262LK13%2B4iPyzVNvRY1%2F%2F%2FAr5ghXmuhR%2Bz6LMLJFaOcaE%2BXt8D%2BgqLYBl6bJJHrVDOFAvdK71Mhsfkn5vGVKm&X-Amz-Signature=fe3239478ea20c5ca2669fe571ed66030552559b362e3b5accd36d07146daf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUNVGQH6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIGTu3qckDNrQJeGa1o2ODDCLemXn7hCkfgu7E3aeQJcDAiEAyibi79SbRaWrXLHpegA9OjJaGLoOhpSR%2FsEK2Gyi5dMq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDCcG3%2BLbU%2BuTLkO2bCrcA1PAXtmlW%2BDDs22HDAzVk14dbHNn3bxJVtcdNHP4N26d7RGMeu7IQUo4xlFTR4IB4dK5DDfaw3mM9gMnXmm%2FukzcwDlbumgf7aC3nybCFbCXxjzf4IHkUu3pm1sjW2RzL8sSod7EbnOIs4y%2FHEY0eBUikRwrMo5Er5ml6CQrD3%2BOVLvm6gKPXSioGujUnl7wJZcgGXFwGrNc5Ok49zgG%2BjjQM2tOJQAHZhBx4T7af%2FC91WUIYllKdjTdt9GmpyDsTLurVdY2lcldTIkd2TKLQCeHfMLW7bEISV%2FdaksLV4ndT8J%2B%2FuysPgRP%2FeZGA%2FO9MlleYF7MR9slUt6%2B3qZDPngEFByiVpSIgzgb0Ags5fVpGP9FDt5FhlqxzkbimpqFIBCV9wbt7iHvrZrYEVXasifviH60GJEtOYQJ%2BSADyw1hN%2Fm0If1uP9S3ieJemmjJBipfXFItdP99%2BvgPG7w6PwYwzNlEC73iCV9EgCycJWppNyZbwI%2B5SUTbkhmxgoNILRTE0YR2lLn5RL1cKQZVhW2Fq%2FXmkVRgc0odc6xeITbm8IKisaPyaX8NACRls47seDF2BnLDMdgkGrHAC1xZ%2F0ThQ0ZL2C9vhtMlkHiz55ikzQcpq1FJ3B4k7F6kMM2WvskGOqUBGHifjPpqlVShGIu%2BQIl0ew0JuNexmsOZvxwaEXGvewus7MWYBHwkCo7gD6NaQOVigSXpzkFcQAmdwCsKfMj1fONf8BhGLmG3l%2F7pAGzebjEEdXG5RgJ7ilhLDk2g7QpkYyZw2al262LK13%2B4iPyzVNvRY1%2F%2F%2FAr5ghXmuhR%2Bz6LMLJFaOcaE%2BXt8D%2BgqLYBl6bJJHrVDOFAvdK71Mhsfkn5vGVKm&X-Amz-Signature=7121e172068a270488a353159e705b14cf2c463b733c50ed3e6ad622a3c4e000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

