---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKJP4VN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLGg8YDR3B4JZz9oYODBWXj77erNyrcqLESkzqAr4lQIhAI87%2F03aoy2ieIF%2BMMJHeTxCR%2Byg3jlEKKqc8r0G%2BxwYKv8DCHUQABoMNjM3NDIzMTgzODA1IgznObneZNOveKT1Qz4q3AOibT9c2vQy4F8Et4BPvxN3Em3nqftrioFaKfEfNNd2SoGiRvVyC25hA4qkVDwiPBXjEegeoKoe9FORjbv5E7eH819ldup5RPb9K%2FbQ6%2BBq8q9MvgEiIfLerqqIW%2FAt4xVYrbeEWjIJLWM3MQeiqVpKLzKn0EnqjdAHUej3a9uKmLFwA%2FUlelhMEaVQ0gyUk0625hNaProuRw4WyfSGOk1XjFzQXHAmcJYxoCeLIWWxGQ7PDlJYqM3RewIZRtMAq3jGzLtcEf06pewyRiQK6x5jsiItS9IslctJIuljo81ot1uGlEIV6x9kgMZ2NH2kk2QG0FRo%2BEhJlf0ELgTPjDpxaPX9p2gPGBOOpj9YomYn8t0qV9YFEFUgaeaVTVUpP93s9HTTcKUOXOT9%2FM58M335JZwjsbn4OxqV9MGF1agfZaS9ajOriQqDa4yx%2BQQwcw75G1lqMYFxcY5u3OCKimwHE2EM761TAYS%2BUmkPZF0x30OfvKLzsk00CL9NfRGI2g%2BJ%2FOCRBfxVEQU6Mqwv32CzIzpYPEB2e2kdJdeDohiacfZx2stUWxr0dMhLOw4UvFYgtrEbb0TBg1dDuDAXSVWx6RXIjd3DyiE90hSnLt331fZBDT93jkttpf5pYzDrptDJBjqkASG24kRRLFfBtc2JXO4z4d65Chd7qF8PhwjVvMWBVfBrMAZTwg%2B25a%2Fkhn1zWFWyzKrIwWCRUeWk7C%2ByUg3uamef6WtmIgclv3Cs6rAvdQAZgIcr4n6foEL9GEPp%2B4Hyb3ZaIbnNyvaF1RsTprgvPCu97zbOqwKvTf2O4HkSixHb170AFIXZLAvVRVDNF5XN4WicJvjUoEUlUbl%2F8Mgoju2MIAF0&X-Amz-Signature=e167fbe1f451ad31a2839284c5e3d6be77a5c0182f15d560ec6db1bc20cc775f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVKJP4VN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmLGg8YDR3B4JZz9oYODBWXj77erNyrcqLESkzqAr4lQIhAI87%2F03aoy2ieIF%2BMMJHeTxCR%2Byg3jlEKKqc8r0G%2BxwYKv8DCHUQABoMNjM3NDIzMTgzODA1IgznObneZNOveKT1Qz4q3AOibT9c2vQy4F8Et4BPvxN3Em3nqftrioFaKfEfNNd2SoGiRvVyC25hA4qkVDwiPBXjEegeoKoe9FORjbv5E7eH819ldup5RPb9K%2FbQ6%2BBq8q9MvgEiIfLerqqIW%2FAt4xVYrbeEWjIJLWM3MQeiqVpKLzKn0EnqjdAHUej3a9uKmLFwA%2FUlelhMEaVQ0gyUk0625hNaProuRw4WyfSGOk1XjFzQXHAmcJYxoCeLIWWxGQ7PDlJYqM3RewIZRtMAq3jGzLtcEf06pewyRiQK6x5jsiItS9IslctJIuljo81ot1uGlEIV6x9kgMZ2NH2kk2QG0FRo%2BEhJlf0ELgTPjDpxaPX9p2gPGBOOpj9YomYn8t0qV9YFEFUgaeaVTVUpP93s9HTTcKUOXOT9%2FM58M335JZwjsbn4OxqV9MGF1agfZaS9ajOriQqDa4yx%2BQQwcw75G1lqMYFxcY5u3OCKimwHE2EM761TAYS%2BUmkPZF0x30OfvKLzsk00CL9NfRGI2g%2BJ%2FOCRBfxVEQU6Mqwv32CzIzpYPEB2e2kdJdeDohiacfZx2stUWxr0dMhLOw4UvFYgtrEbb0TBg1dDuDAXSVWx6RXIjd3DyiE90hSnLt331fZBDT93jkttpf5pYzDrptDJBjqkASG24kRRLFfBtc2JXO4z4d65Chd7qF8PhwjVvMWBVfBrMAZTwg%2B25a%2Fkhn1zWFWyzKrIwWCRUeWk7C%2ByUg3uamef6WtmIgclv3Cs6rAvdQAZgIcr4n6foEL9GEPp%2B4Hyb3ZaIbnNyvaF1RsTprgvPCu97zbOqwKvTf2O4HkSixHb170AFIXZLAvVRVDNF5XN4WicJvjUoEUlUbl%2F8Mgoju2MIAF0&X-Amz-Signature=b90aced78a7579b5fe8972f2cae1d070b8e29b5e1e697f1cc329acb3de1b1497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

