---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRXWBS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPQLqfUFysY1O89ryIS8mXpg9rcSjpFbi9KIO7NVkl4QIgaWI%2BwQc5vihT5HKPicTOyyTnsXMD5bUVIbuA2%2FOk1Ckq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPJ2akltQsBU9fKbiSrcA7QmUy8jXKpfr45PtMDGdQoGXJQc%2B8sMiMISuJtUeBekta44g7gIVrf%2Bw%2Bk0Rg64V1i501ulx1FHHfUnKB4M5rHWi9PAiZWkL%2FncJ9p0AB%2FtbKPFohSf3GK8hFUCxhNr%2F3IPp2XL0ZsGBPv42f9tJcZ%2Fntl6%2BR07wamrMkvM3ph9cQz57h0mPYYtBivx6sHbvrtypCSbuT9hLIZbmj4q3gHbMPlLGxF8DOfeq8HEcC5prvjoyfoE9ldv40i1DTw5UG4JCPZnFJLUIKy27iJdJCerkNeAo4qKADy2FbcFqKvhGaAWvkunCle9LbGXxbro989aeVskBFyOR2dBt0DieKC%2BPnH8N3RgiSTYRcSXqdi8jKn2EtwyJ9iRBw4wzFmfCxH0bdaks24bJv9Ol%2Bua0EeoGZ%2BlRSHJ91pEGM6ozc4S7vTvCmCQAIF6McMMts1xCkjLlvk7b2qa6NGxrzDRNM2bstoozLoOCUyTwOpdvFfgsIwblipjhgqFJ%2FOM1v2Z9Ug1dihdNB7ZRvHhevXbocYp9dIDwfyVA8zJRFab5SZL7TnR4Um6sY3tkfyIRjNPlLfaFxuoYzGBwAd%2FJLGaEySBGbXvU%2Fp%2BHqEtL5FtbGVsmg7wRQ20jjXfDZHkMPe%2BwskGOqUB9euSdUGpNjCGrqn7mwuHELtClNL3vEGMRLD0s88wzVO6NbQ5QbZI2xbkrqHa3Zf6L0n9SC5H11pF%2B%2FChQwHKb4PJvAvF%2FeRIz0dnxgz4J0Rx8xJXTRVdFG3CfsF8phOpBxkAKuCIxAQ%2BHIj0oEfFG6w%2Bo3KDn4JSU5H3ONnbuIj99LexxFieoHL3QhCRibjXXH6CLdJEBqVsl%2Bi5O5o8y5%2BBQXXm&X-Amz-Signature=a782684ad2e0df27bbf1f52ee506cc4eac0b55d9f54358a0545726f2a914f9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRXWBS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPQLqfUFysY1O89ryIS8mXpg9rcSjpFbi9KIO7NVkl4QIgaWI%2BwQc5vihT5HKPicTOyyTnsXMD5bUVIbuA2%2FOk1Ckq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPJ2akltQsBU9fKbiSrcA7QmUy8jXKpfr45PtMDGdQoGXJQc%2B8sMiMISuJtUeBekta44g7gIVrf%2Bw%2Bk0Rg64V1i501ulx1FHHfUnKB4M5rHWi9PAiZWkL%2FncJ9p0AB%2FtbKPFohSf3GK8hFUCxhNr%2F3IPp2XL0ZsGBPv42f9tJcZ%2Fntl6%2BR07wamrMkvM3ph9cQz57h0mPYYtBivx6sHbvrtypCSbuT9hLIZbmj4q3gHbMPlLGxF8DOfeq8HEcC5prvjoyfoE9ldv40i1DTw5UG4JCPZnFJLUIKy27iJdJCerkNeAo4qKADy2FbcFqKvhGaAWvkunCle9LbGXxbro989aeVskBFyOR2dBt0DieKC%2BPnH8N3RgiSTYRcSXqdi8jKn2EtwyJ9iRBw4wzFmfCxH0bdaks24bJv9Ol%2Bua0EeoGZ%2BlRSHJ91pEGM6ozc4S7vTvCmCQAIF6McMMts1xCkjLlvk7b2qa6NGxrzDRNM2bstoozLoOCUyTwOpdvFfgsIwblipjhgqFJ%2FOM1v2Z9Ug1dihdNB7ZRvHhevXbocYp9dIDwfyVA8zJRFab5SZL7TnR4Um6sY3tkfyIRjNPlLfaFxuoYzGBwAd%2FJLGaEySBGbXvU%2Fp%2BHqEtL5FtbGVsmg7wRQ20jjXfDZHkMPe%2BwskGOqUB9euSdUGpNjCGrqn7mwuHELtClNL3vEGMRLD0s88wzVO6NbQ5QbZI2xbkrqHa3Zf6L0n9SC5H11pF%2B%2FChQwHKb4PJvAvF%2FeRIz0dnxgz4J0Rx8xJXTRVdFG3CfsF8phOpBxkAKuCIxAQ%2BHIj0oEfFG6w%2Bo3KDn4JSU5H3ONnbuIj99LexxFieoHL3QhCRibjXXH6CLdJEBqVsl%2Bi5O5o8y5%2BBQXXm&X-Amz-Signature=6dc3aa314380d726e5ca29cf4a01e599a45ea66449c810048a8a81ce2d712ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

