---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7W27JU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFddJKg1qPU3U57DAkqFWkyuuanTDIwOXCzwbrvd%2BrbUAiEAu0mFFn7xGKKhBiaeyP0gYoyhLih2USGORFlgTzDvMO8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOuDEyRCLTxLhDST6ircA8%2F7MDxzlbkdUnU7W%2BD7B45a5g7Dz3RiA8COaJVVZcz8wc9R%2FvXGZJd6VxguHgmTXWx1M21bsodd7WGYQV%2FwESfuvUkREOCWnMmgBWXRYMqf%2BKFkeyK7vwmvXMm7wwl0k4QI9apW8DfwZ08eTh4oNeCXqzQW%2FEa8HUWUaAkz7BDbHZkcqdRMEDnLNIh81hZ3LXAomrECCu4WeR8t7jtuvWBouq%2B5V6mIrTLaJTi1%2BMEO7etDD1P3guMOy3ust1Vi%2Bm9GOZhayghyoazNyg01HKNulCE1rhvir%2FC%2B8S9iQnn%2BMeL%2FvNJpUcWngQ4gih9UswlNmN%2FEiqP6Ogmhre9UQ62ejPQCU%2FuURDcZJl4P2CzGZnsOAixeTxj2S%2Fe8Gz7enjt8Zo6Brndbf1489CQMpZn5pfby3Ukyr%2BZrpitAg7zWBQNgL6rgKpd88AG24CkmYpzPKl7Z8JIt6QHlOe14Qan5k%2Fl1Nz2KNlCo%2BNvYtKlzXV8I1jMHk7b%2BxqDeP1m9U8gOn9cc4B%2Bb41rkkuIS7GcWnFiM46Jr7zQlJFuIMpWRUISvQltTVxjnVzbi4QLDE42JqCZtzzX%2B6qPyDKDOGntoJHJDkPDrK4GVjvli%2BQ6RhwcpAVQMo0dQP8vuMKm%2FxskGOqUBufD3kmaKFBqNlBvUOI%2BMYGYlmD7etEpF7KGEEn2RaVY4pR6hGCvads2xUXmYKf6s%2F%2BOr9Wjzo%2Fb7%2BAXaBiC2aaUpnNebISQL2kUaYRiFt%2F6ef2QFYyPkJb3yzklMJaEFwDk8dTtivhkkpeogc71LpMpaFz3iOSO6UTZpX2Ty0eOJ5icKgM4zfdbhOgesCuhtYnC%2Bnmjr%2BL3M2dvEOgcpTtvFhWxi&X-Amz-Signature=30e21ad9fad10586c394e27712a807f2aeb13243000a9d00a999927bf812bfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N7W27JU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIFddJKg1qPU3U57DAkqFWkyuuanTDIwOXCzwbrvd%2BrbUAiEAu0mFFn7xGKKhBiaeyP0gYoyhLih2USGORFlgTzDvMO8q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOuDEyRCLTxLhDST6ircA8%2F7MDxzlbkdUnU7W%2BD7B45a5g7Dz3RiA8COaJVVZcz8wc9R%2FvXGZJd6VxguHgmTXWx1M21bsodd7WGYQV%2FwESfuvUkREOCWnMmgBWXRYMqf%2BKFkeyK7vwmvXMm7wwl0k4QI9apW8DfwZ08eTh4oNeCXqzQW%2FEa8HUWUaAkz7BDbHZkcqdRMEDnLNIh81hZ3LXAomrECCu4WeR8t7jtuvWBouq%2B5V6mIrTLaJTi1%2BMEO7etDD1P3guMOy3ust1Vi%2Bm9GOZhayghyoazNyg01HKNulCE1rhvir%2FC%2B8S9iQnn%2BMeL%2FvNJpUcWngQ4gih9UswlNmN%2FEiqP6Ogmhre9UQ62ejPQCU%2FuURDcZJl4P2CzGZnsOAixeTxj2S%2Fe8Gz7enjt8Zo6Brndbf1489CQMpZn5pfby3Ukyr%2BZrpitAg7zWBQNgL6rgKpd88AG24CkmYpzPKl7Z8JIt6QHlOe14Qan5k%2Fl1Nz2KNlCo%2BNvYtKlzXV8I1jMHk7b%2BxqDeP1m9U8gOn9cc4B%2Bb41rkkuIS7GcWnFiM46Jr7zQlJFuIMpWRUISvQltTVxjnVzbi4QLDE42JqCZtzzX%2B6qPyDKDOGntoJHJDkPDrK4GVjvli%2BQ6RhwcpAVQMo0dQP8vuMKm%2FxskGOqUBufD3kmaKFBqNlBvUOI%2BMYGYlmD7etEpF7KGEEn2RaVY4pR6hGCvads2xUXmYKf6s%2F%2BOr9Wjzo%2Fb7%2BAXaBiC2aaUpnNebISQL2kUaYRiFt%2F6ef2QFYyPkJb3yzklMJaEFwDk8dTtivhkkpeogc71LpMpaFz3iOSO6UTZpX2Ty0eOJ5icKgM4zfdbhOgesCuhtYnC%2Bnmjr%2BL3M2dvEOgcpTtvFhWxi&X-Amz-Signature=d5a41d552d53dce94b64be778815b0cc9e4ea06c5d5f0a2a631791612c7b0865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

