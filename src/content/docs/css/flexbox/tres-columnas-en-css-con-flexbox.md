---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PVXF63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5M5AWO7QLNTvplv4C5YT05SrwqN9VAzVOZWobQR93nAiBngByDMUy3cQz0VBt7IY%2Bt9UCz8hPQeyIYRTkm8cGTTyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsNyNJzco0gPKRJfKtwD8FuoIL1g5%2FosQav3IhbTJBvM7Ae%2FM6vAtrL3AQPGYMyIARqsBvdXjYC96RZnmPlaw8CGE7268P7M2AKEPS%2BG5YVrHUgRXLylAQ8iSVXtHCnGWxzXaj5YOZy4gEUCr%2BWM8M51rr0AaxZ8ejWGv%2BPxxZvQ2VWPkiUjGE7Iw7GWA8BZGIFOEyqc878tG5rFPYFKsFsvBUexOmgGLoqPdip4Pg%2BMllrlDrcmOfY5FWn2ZjOr7ZaL5YNkeWmDPsiGCr1jSeLuwumUkSH%2BDlXMCGctlFs81yo8MQCPTQay%2FKScyKtKg3khjrVqYOMdiWE2OceGwTMNcpzRrWE1X6dW9DoQQep1xpnDLgEaWG3Sx2N9Dd8nW6w7W3KVIr7p7J%2BcopzZ9S6x8S9ysx2eHRZxk0%2BSkhXOSj%2BkPXDpGXtdZSACf8G5aP4P6aUCgHQNfFuQZjfd%2Flt4jNqbgxzqaNFMTczSre574SC%2B8PAMReRxKi6x0E%2BBmQ6cpccU6P9RTcgXFvXCwHzurK%2B5tyvNoc%2FiAYIY308CHOHrOYiAva8ihrCJXpAAHXuyQQnV8ui3zjWKaSSMGaxyi7GtR5pPhKfLFKDPYx80Oi27iuUl7x8zAEJEF%2BykybjiDCYJ6gFX58sw6f%2FcyQY6pgHGCXqu7VuA3%2B1Y%2FTDnABlVSaXuHKLUUkfGCO1k9Pa2gdRvhvnqK8XWYUcxlMmz%2BenlHyjOA9%2BHsBLcvJqJPk72DoxWc7cXCkIb9oj9ZYfN37YTltlvQVBjDc8x1Qjmc733L%2FcYiQiKDaRR%2BWgigvM1DajKijPaAa4dDEdT5VtzpeATcK9coqs864%2FLASyH3dvjtuZAvkMSrG3pdq9flvlEGiAsLywi&X-Amz-Signature=88bb62d7c0d6363315740fa096e0f1ceff776c2ac321409e5baf6db34aea73ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7PVXF63%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5M5AWO7QLNTvplv4C5YT05SrwqN9VAzVOZWobQR93nAiBngByDMUy3cQz0VBt7IY%2Bt9UCz8hPQeyIYRTkm8cGTTyqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNsNyNJzco0gPKRJfKtwD8FuoIL1g5%2FosQav3IhbTJBvM7Ae%2FM6vAtrL3AQPGYMyIARqsBvdXjYC96RZnmPlaw8CGE7268P7M2AKEPS%2BG5YVrHUgRXLylAQ8iSVXtHCnGWxzXaj5YOZy4gEUCr%2BWM8M51rr0AaxZ8ejWGv%2BPxxZvQ2VWPkiUjGE7Iw7GWA8BZGIFOEyqc878tG5rFPYFKsFsvBUexOmgGLoqPdip4Pg%2BMllrlDrcmOfY5FWn2ZjOr7ZaL5YNkeWmDPsiGCr1jSeLuwumUkSH%2BDlXMCGctlFs81yo8MQCPTQay%2FKScyKtKg3khjrVqYOMdiWE2OceGwTMNcpzRrWE1X6dW9DoQQep1xpnDLgEaWG3Sx2N9Dd8nW6w7W3KVIr7p7J%2BcopzZ9S6x8S9ysx2eHRZxk0%2BSkhXOSj%2BkPXDpGXtdZSACf8G5aP4P6aUCgHQNfFuQZjfd%2Flt4jNqbgxzqaNFMTczSre574SC%2B8PAMReRxKi6x0E%2BBmQ6cpccU6P9RTcgXFvXCwHzurK%2B5tyvNoc%2FiAYIY308CHOHrOYiAva8ihrCJXpAAHXuyQQnV8ui3zjWKaSSMGaxyi7GtR5pPhKfLFKDPYx80Oi27iuUl7x8zAEJEF%2BykybjiDCYJ6gFX58sw6f%2FcyQY6pgHGCXqu7VuA3%2B1Y%2FTDnABlVSaXuHKLUUkfGCO1k9Pa2gdRvhvnqK8XWYUcxlMmz%2BenlHyjOA9%2BHsBLcvJqJPk72DoxWc7cXCkIb9oj9ZYfN37YTltlvQVBjDc8x1Qjmc733L%2FcYiQiKDaRR%2BWgigvM1DajKijPaAa4dDEdT5VtzpeATcK9coqs864%2FLASyH3dvjtuZAvkMSrG3pdq9flvlEGiAsLywi&X-Amz-Signature=445a462a55002d98ec089ae8ed63e739fcc4695577169b85e38fe1733e0d913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

