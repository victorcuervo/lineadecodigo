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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDOJSPC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4MLxi5A1dwUEKA6m%2FVfTRQ4t5AMAygUaNvfHb1cCzUAIgYlLeJWDijbribJMwtL9XKuTZvuqFMSTIbqTeqYNjSU8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLS5hqQRnsETIfqILCrcAwFWXlRDT67aupkABIQUVk%2BNSQE5z46knEYH5VtYHwcQc1e6Q1O%2FWEJeqIlHK0psnq05XACzsjAkgBudhnN3Fz9Js6kRFmp3k14k%2FFHcTHyDEDcPEKemHWO063X%2F6UKlzH%2B3BMmDl6iiJlTAhz0iYfKc%2FT%2BwvWkHxEfSqbd5A8YwQfy%2Fa8vtvDImdvBqNcMPRPzxn54jd8xZH9R%2Br5iB77cbIkUnm917faY6hp0SNkGEuGNgwZOc6Xn1FSUHJ4dKd9YsoEGCq%2FsE4AGql%2F38wKfUildd4Zpe8vWuL7rmR8VIgh%2FHmzG74rpbo021lppewXqF4AmE3iTY%2Fl3UPgPBes0AYVaa2Y%2B9SxCJeeA3dYKPv8IGK3uthynjdjTJC0jhxdZNfufJNPGsCyhVLgiiGOzFnduHLwsHXCVwW3qWTE46NspXX2AtNcjyapSxtCyNomg2PUe8fEVfraMgdd4RdVk2FHdkRiKRzs%2FihmNfxq1iFtWowVjvCC8OMA2eeDETw3gl%2FN16RvzlgCV8y%2BeKgwpeYPwC%2BWXKNAT9BY4xcPOZ9n63HTSWEXyUBmHGWHG4hsWjrUli4voa1CDdqk8OyGFFhv4fCNJoDbNh3aa2AeOnsuwbP02LyXqxtpRxMLeHwckGOqUBPpV9BSBl6bNweULb%2B8vONIGfdcOPifnxLYk%2BJS2rJ60twG%2FLIS83N0IVQLowHKn3pKhiirlGTDQ8V%2BwRofPOIeLX4KVzeTdsaRKLtDU269g5OeoNHGf2rSJtzPCSbGiAnu8M00qWTk4Q8y%2F%2Bu2eKHCJYNG8C9qBKAeFY5DRw7L5QsdCrJlb1%2BPqMiA0K5TdvgZMiwiy9EiWDzpQFtueBA9qupIUd&X-Amz-Signature=c8a50b314bba5d879fe720472eefaaaff5e9b4d3b7612f2c9c7dc4e0a4cd1429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBDOJSPC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQD4MLxi5A1dwUEKA6m%2FVfTRQ4t5AMAygUaNvfHb1cCzUAIgYlLeJWDijbribJMwtL9XKuTZvuqFMSTIbqTeqYNjSU8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLS5hqQRnsETIfqILCrcAwFWXlRDT67aupkABIQUVk%2BNSQE5z46knEYH5VtYHwcQc1e6Q1O%2FWEJeqIlHK0psnq05XACzsjAkgBudhnN3Fz9Js6kRFmp3k14k%2FFHcTHyDEDcPEKemHWO063X%2F6UKlzH%2B3BMmDl6iiJlTAhz0iYfKc%2FT%2BwvWkHxEfSqbd5A8YwQfy%2Fa8vtvDImdvBqNcMPRPzxn54jd8xZH9R%2Br5iB77cbIkUnm917faY6hp0SNkGEuGNgwZOc6Xn1FSUHJ4dKd9YsoEGCq%2FsE4AGql%2F38wKfUildd4Zpe8vWuL7rmR8VIgh%2FHmzG74rpbo021lppewXqF4AmE3iTY%2Fl3UPgPBes0AYVaa2Y%2B9SxCJeeA3dYKPv8IGK3uthynjdjTJC0jhxdZNfufJNPGsCyhVLgiiGOzFnduHLwsHXCVwW3qWTE46NspXX2AtNcjyapSxtCyNomg2PUe8fEVfraMgdd4RdVk2FHdkRiKRzs%2FihmNfxq1iFtWowVjvCC8OMA2eeDETw3gl%2FN16RvzlgCV8y%2BeKgwpeYPwC%2BWXKNAT9BY4xcPOZ9n63HTSWEXyUBmHGWHG4hsWjrUli4voa1CDdqk8OyGFFhv4fCNJoDbNh3aa2AeOnsuwbP02LyXqxtpRxMLeHwckGOqUBPpV9BSBl6bNweULb%2B8vONIGfdcOPifnxLYk%2BJS2rJ60twG%2FLIS83N0IVQLowHKn3pKhiirlGTDQ8V%2BwRofPOIeLX4KVzeTdsaRKLtDU269g5OeoNHGf2rSJtzPCSbGiAnu8M00qWTk4Q8y%2F%2Bu2eKHCJYNG8C9qBKAeFY5DRw7L5QsdCrJlb1%2BPqMiA0K5TdvgZMiwiy9EiWDzpQFtueBA9qupIUd&X-Amz-Signature=87963892e0bb79016ee88d921c79ab284dd290a6bf96b156492d325df3a461bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

