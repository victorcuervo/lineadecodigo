---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTB7MST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsnepOJSci7gmbF9nTSIGuCCa4Sw0T8aa7F1XIJdxvzgIgQczlgli3i9UWHy0NgkvbMNjnJGdKQKK1H1oLxjNXDxAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnH2Mnuix6oB2vMVircA9on9G9AyxovchG9jNzk%2FbK1H2tXwu4pK1EFYc3mJl%2B%2Fich6A7R22%2F%2FYGCzrXa5IbWkmec6bx1KlqqHqpEc5dz2mpeezjOvqBJrialQ%2B6wptR310r62CadgGZ6qWxNHjaeqqhGFvla6OKX4ZG5e444bF%2FYjHoU9wLviEFFB2XXWHolQcx6zRosfOYy5RfBvoBkl3yNmsLTAn3OpfeXo%2FNRNdC4ELu9L3rqOitSccZNochJLLsXVlJkK1jRqTsxqBBGhlf3hcGqhwrd5pbWgWlLL0emaw7H76KjpBVd7%2BYTDil25L7%2B8%2ByWmZzUkATOxNXaeNVwbrrFC%2FPzm00VYnTjYJtAZrQLLZyYNNgVv%2B77TSn0Fhp1Uh0ap%2BtKywwuwuxHZI181Dnlf4UnYDqFywRbwHXWXJsMQRG9mFr36rrNpZrVzSpNsefCYUK1rwKRMnfZeduiXUgxSxUMCgCWTVwjKfo0JcrBM1fz%2FMGRxSTzoBdkyYXHNQyklMNtrO3CnXNp4ApxRYgqXOTzGiux5q8ddzAy7c2PuQK8Z9tAerSiMY9IDrJnmm56q2FFYM00Ss7SuZe3XL12yH4Q6Fr3a4Sj3YO9n%2BKzYV81D9R9xxBDQ5KUviHBADcyyLWVV8MM790skGOqUBzbTP0cJY6w8FlRGIXrFSiq23fsBGmeF0kTsftXQyWgEOf7SfSo3%2FnpAzJgDlYimkiHVC%2BvpvpExBTWfIozRW4UtF21a3EkFwokseHAmqXYbQwgC50cTCjwkQ2vldnZTxI67Y5OSfWjIq2%2B%2BI6McoZvPzrtoSEDIFt03nTPvet33ku%2F8KB3%2Bbwt4k%2BQwsrs7qatHZjjs1ZXLVi20VWbxOIHRxSWwW&X-Amz-Signature=4620c8e4118da943d5835ed37332aa730e8208237c8c957cf31227bdcd2c9e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MTB7MST%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsnepOJSci7gmbF9nTSIGuCCa4Sw0T8aa7F1XIJdxvzgIgQczlgli3i9UWHy0NgkvbMNjnJGdKQKK1H1oLxjNXDxAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnH2Mnuix6oB2vMVircA9on9G9AyxovchG9jNzk%2FbK1H2tXwu4pK1EFYc3mJl%2B%2Fich6A7R22%2F%2FYGCzrXa5IbWkmec6bx1KlqqHqpEc5dz2mpeezjOvqBJrialQ%2B6wptR310r62CadgGZ6qWxNHjaeqqhGFvla6OKX4ZG5e444bF%2FYjHoU9wLviEFFB2XXWHolQcx6zRosfOYy5RfBvoBkl3yNmsLTAn3OpfeXo%2FNRNdC4ELu9L3rqOitSccZNochJLLsXVlJkK1jRqTsxqBBGhlf3hcGqhwrd5pbWgWlLL0emaw7H76KjpBVd7%2BYTDil25L7%2B8%2ByWmZzUkATOxNXaeNVwbrrFC%2FPzm00VYnTjYJtAZrQLLZyYNNgVv%2B77TSn0Fhp1Uh0ap%2BtKywwuwuxHZI181Dnlf4UnYDqFywRbwHXWXJsMQRG9mFr36rrNpZrVzSpNsefCYUK1rwKRMnfZeduiXUgxSxUMCgCWTVwjKfo0JcrBM1fz%2FMGRxSTzoBdkyYXHNQyklMNtrO3CnXNp4ApxRYgqXOTzGiux5q8ddzAy7c2PuQK8Z9tAerSiMY9IDrJnmm56q2FFYM00Ss7SuZe3XL12yH4Q6Fr3a4Sj3YO9n%2BKzYV81D9R9xxBDQ5KUviHBADcyyLWVV8MM790skGOqUBzbTP0cJY6w8FlRGIXrFSiq23fsBGmeF0kTsftXQyWgEOf7SfSo3%2FnpAzJgDlYimkiHVC%2BvpvpExBTWfIozRW4UtF21a3EkFwokseHAmqXYbQwgC50cTCjwkQ2vldnZTxI67Y5OSfWjIq2%2B%2BI6McoZvPzrtoSEDIFt03nTPvet33ku%2F8KB3%2Bbwt4k%2BQwsrs7qatHZjjs1ZXLVi20VWbxOIHRxSWwW&X-Amz-Signature=bab43deb6f5e21772a7859849b3320231aeaed587b890c13c00007abe8357fe8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

