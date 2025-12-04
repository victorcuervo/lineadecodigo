---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL37VB7D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDxjv8PbZBQLqUzJ9unqpoOT%2B%2BTcXszh1BC2CmYBWrjIQIhAJPr3aLnMriiQItjPdaPmDMoKjqKfPIcHtx%2BOpOVlqFtKv8DCDkQABoMNjM3NDIzMTgzODA1Igy130%2FxNTYWlvjJzQcq3AOj6pdpcb6nz22wlCJNogd%2BRIDzZeWGfFuN3nrASvL351xuGOeiJDoac264qe4g8ro%2Fugpm%2BaVqzaHzn0KakvAn6IhyHU4W1xyAbwzBY8IMZZhBDaD3sGKWzIddDmfmpElmi2ULVIR42RsXN2EwlZk%2FPfJfbowTHTZfbXg6debC30IPeXvDFBMVxgkKwmLpcSrwZ46Pe7RLnCgMo7cdsc1muzn%2FTm8msgqCxUCiUrUR3pvnTzCPCQvUC0xXcFL%2BEz5%2BfZaCgsdRukcg%2BLvhzisQS9iQJvtheA5t70ESZPHajktF2Dbqh9gwnDZ%2BAS8%2F4IVq0rLOaMJuagacPw3N9lFDP85LkFQ7UW8ZLXrft4arXyReN2oBjEskBnFumZPBYESjSP0GinddWU2U8njCavWOgUhHUQyNlMEWT2hG6mBZw5PLUvgiBQGGsKEGemSfbKU9PBgaGEijod7gbnBbOj7Ka%2FROaUAjZb6vE9B%2BkZYCYmop7iSoVaaNK30HGwLJLSxZ0rheyxRzVMyY8V43LESePlUyKjXuSsDH0gMuaHdkFeTLs2hzqETTPqLKd7%2BPEjhOyLWeJQE0E3SDoGvBZB3gndh%2FcGU99GSqF%2BLjxt7odg%2Fh1D0ZiAUVpTBQpzColcPJBjqkAfmG84kAbxQsR6sMqwQw%2Fi9p%2Bh5AVnxdqwm2y%2Bzj9J1Yda6bzUaKjgCzC6oKm1G5jlqlU4KzkY3AT80A%2FjXFcKl93nDLugmQOPE%2BjEvPmxb1QdIwb55f%2FpnYUUCiO7HwDjrdIe7Xb1%2FVEeXv5pNu3DpqHhrHCtE6RMTmFwvCPwVd%2B%2BvhbTSrHzvpUeSya%2FMby5A5V%2Bxuz8KybHDrcJYaN7G26BTZ&X-Amz-Signature=9dbddf57680f7c1e438fa8b353bf393d95be20805bbdab5760ed84c0203ee323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL37VB7D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDxjv8PbZBQLqUzJ9unqpoOT%2B%2BTcXszh1BC2CmYBWrjIQIhAJPr3aLnMriiQItjPdaPmDMoKjqKfPIcHtx%2BOpOVlqFtKv8DCDkQABoMNjM3NDIzMTgzODA1Igy130%2FxNTYWlvjJzQcq3AOj6pdpcb6nz22wlCJNogd%2BRIDzZeWGfFuN3nrASvL351xuGOeiJDoac264qe4g8ro%2Fugpm%2BaVqzaHzn0KakvAn6IhyHU4W1xyAbwzBY8IMZZhBDaD3sGKWzIddDmfmpElmi2ULVIR42RsXN2EwlZk%2FPfJfbowTHTZfbXg6debC30IPeXvDFBMVxgkKwmLpcSrwZ46Pe7RLnCgMo7cdsc1muzn%2FTm8msgqCxUCiUrUR3pvnTzCPCQvUC0xXcFL%2BEz5%2BfZaCgsdRukcg%2BLvhzisQS9iQJvtheA5t70ESZPHajktF2Dbqh9gwnDZ%2BAS8%2F4IVq0rLOaMJuagacPw3N9lFDP85LkFQ7UW8ZLXrft4arXyReN2oBjEskBnFumZPBYESjSP0GinddWU2U8njCavWOgUhHUQyNlMEWT2hG6mBZw5PLUvgiBQGGsKEGemSfbKU9PBgaGEijod7gbnBbOj7Ka%2FROaUAjZb6vE9B%2BkZYCYmop7iSoVaaNK30HGwLJLSxZ0rheyxRzVMyY8V43LESePlUyKjXuSsDH0gMuaHdkFeTLs2hzqETTPqLKd7%2BPEjhOyLWeJQE0E3SDoGvBZB3gndh%2FcGU99GSqF%2BLjxt7odg%2Fh1D0ZiAUVpTBQpzColcPJBjqkAfmG84kAbxQsR6sMqwQw%2Fi9p%2Bh5AVnxdqwm2y%2Bzj9J1Yda6bzUaKjgCzC6oKm1G5jlqlU4KzkY3AT80A%2FjXFcKl93nDLugmQOPE%2BjEvPmxb1QdIwb55f%2FpnYUUCiO7HwDjrdIe7Xb1%2FVEeXv5pNu3DpqHhrHCtE6RMTmFwvCPwVd%2B%2BvhbTSrHzvpUeSya%2FMby5A5V%2Bxuz8KybHDrcJYaN7G26BTZ&X-Amz-Signature=8317fbbdd6b27c56020c744ef83f08e4b0605f110c98c16472f9aa666e05f68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

