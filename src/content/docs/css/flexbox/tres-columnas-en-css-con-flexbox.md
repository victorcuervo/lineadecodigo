---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECB6KFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FkcLn%2FiHy%2FETV3srM5lxrkffafx9NfpBtLVOnUd2XgIhAMQHTRWD2Dnn%2F1oEPKlGKDBKZOOtUkAK%2BOG6HZSOx9SlKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg7a%2Fh9oh%2F7p1vabMq3AOh7AzQIaLD8VCS6O7erab5cOrb82osb78Gek2L5iUG61jrTZIfByao31sBy6BdJ2bYHdjOhsJWim7Jik6f60DWgqB3U43A5%2Bl%2B%2FcpetIfE%2B%2Fv6trSl%2B2LkmqTlN6wqE%2B7Rjo3FGUVh%2FGa1ZoUumz6qhp3KruHe9TCBF9cep0GMu7BDy0Xw%2B6W4YDaBS1OQNwVCVlZnGtK82uXLjFZeotbrkN708ZiWWEDI1VtV4WepN%2F%2BbjfRKRP5wT8XycHecgbpsiZNo7hubhZWpycbs9MpcL0%2FXZ5n853%2FP45DAd5ZgQxdYGt4tv3QOkolrIn7%2BItVHzjuv00ezBdhZ%2BnKxmz7E0HTHC99FgbH4ntQMGnvYfwyOFIC9mL%2BIGVTvNztgEfU2B%2BXLP3Ko69rmnGS%2FuS6hElkrGSBkF66SmmukEzJJ326QJon2pENC5%2BWXBO%2BuCILJ8lLsYlHq%2F4%2BadcU7hYTlLXIbPsJ4fnTsdW4xkHj1ixkU1AJssizq5KsjRwwyI%2ByzT2vVIqHDP43Wv3SrExkXv9C5sEX8uK8F12rhwjo%2FsbmX%2FaxjP8vQuvuEzebW9e2rba3fgR6I7O%2FopSwel26MhO8Tt5yEpeOMunq1kilGj6JcIbbzb6LUbOsy%2FjDDlNnJBjqkAbbkZTCx1KRqLZsTb4OP8LIGtiTOIxiM68QRKEoJbqZZ4Iu5cYpNoPnB6gtcbdqFEVvFbQjJN5QUI5gsL%2BaxNypmjAj6qUX5faeanjvmylRkxTpsW5P4SU8oDFj4riPLoRW0fnYJAR8dDuJHsNUAqm1NKUkc8kGM4ebD2%2BL62TVDpCyK7KxAYlhsRDLpEJQNrCAfVGNNceSvU4exH3sKvL456C9x&X-Amz-Signature=9fab23111bc7391599de8913b8d2c07f4a4da837676d3cea57c3e875f498e6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECB6KFP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FkcLn%2FiHy%2FETV3srM5lxrkffafx9NfpBtLVOnUd2XgIhAMQHTRWD2Dnn%2F1oEPKlGKDBKZOOtUkAK%2BOG6HZSOx9SlKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwg7a%2Fh9oh%2F7p1vabMq3AOh7AzQIaLD8VCS6O7erab5cOrb82osb78Gek2L5iUG61jrTZIfByao31sBy6BdJ2bYHdjOhsJWim7Jik6f60DWgqB3U43A5%2Bl%2B%2FcpetIfE%2B%2Fv6trSl%2B2LkmqTlN6wqE%2B7Rjo3FGUVh%2FGa1ZoUumz6qhp3KruHe9TCBF9cep0GMu7BDy0Xw%2B6W4YDaBS1OQNwVCVlZnGtK82uXLjFZeotbrkN708ZiWWEDI1VtV4WepN%2F%2BbjfRKRP5wT8XycHecgbpsiZNo7hubhZWpycbs9MpcL0%2FXZ5n853%2FP45DAd5ZgQxdYGt4tv3QOkolrIn7%2BItVHzjuv00ezBdhZ%2BnKxmz7E0HTHC99FgbH4ntQMGnvYfwyOFIC9mL%2BIGVTvNztgEfU2B%2BXLP3Ko69rmnGS%2FuS6hElkrGSBkF66SmmukEzJJ326QJon2pENC5%2BWXBO%2BuCILJ8lLsYlHq%2F4%2BadcU7hYTlLXIbPsJ4fnTsdW4xkHj1ixkU1AJssizq5KsjRwwyI%2ByzT2vVIqHDP43Wv3SrExkXv9C5sEX8uK8F12rhwjo%2FsbmX%2FaxjP8vQuvuEzebW9e2rba3fgR6I7O%2FopSwel26MhO8Tt5yEpeOMunq1kilGj6JcIbbzb6LUbOsy%2FjDDlNnJBjqkAbbkZTCx1KRqLZsTb4OP8LIGtiTOIxiM68QRKEoJbqZZ4Iu5cYpNoPnB6gtcbdqFEVvFbQjJN5QUI5gsL%2BaxNypmjAj6qUX5faeanjvmylRkxTpsW5P4SU8oDFj4riPLoRW0fnYJAR8dDuJHsNUAqm1NKUkc8kGM4ebD2%2BL62TVDpCyK7KxAYlhsRDLpEJQNrCAfVGNNceSvU4exH3sKvL456C9x&X-Amz-Signature=6dc6cf5faa8c2dc25418943fa951dfcbebd773af878efc680982e5b61d95f9a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

