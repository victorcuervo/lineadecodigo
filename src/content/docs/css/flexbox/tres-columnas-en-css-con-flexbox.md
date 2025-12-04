---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HEQOMPT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICHbi5bH1BqSonKRCI8XKOmALtd1uxmDvHk8C6xFeJIrAiA0D9yIhcw9An1Je9ynYAbnZnpQfUK%2BIAKWNZw3CovCqyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1jTEP9JfaJFhiHrkKtwDfnS3TZ00LepiZOV68N06k3elc2eezrP9ht3pXNbi%2B2TorcO1C02f9%2FExhNM4HqjXMta8g9sRLLKKTgmARGHHIog9J5MTn2qXIYlAxhEJ9EPKcwEZqNibLAS2gIY%2F1LkdjrIGHRJ65ASRBwgPYVQTuFHEcEVO2QGp22mNXyGy1b1mBVgRqrGpwCE6bXgyzMeMzHedMj13aX8UszJw8xT9imYo4s%2Fkh8mmXx22%2FZNx8MHCjuetntM%2FCQkFU7kCb8kLUd5gPvgqnCCwycJsah5OKkD6WdXryeaIWKb5WU8dJ53a9JHi9qMJsgkiOoG6K6ARQkAK2iFn7ytu3L2wz51J3pSsbTBma%2BDoLr2EL3quqfcBedBbD6Io%2BwG7IR1FhlHIYxFs57Xi%2FQNAjIVlGgAYf312sl7JXkzl6%2B%2FZm22n182cEQCalw%2FEYI72J4S3sd%2B7waD416oj3w1dSVZW9HT2U2oUOX%2F6XfaEJmCEFlnVm%2BnIX9K2HDQpwA%2FdumGVwODYx0lVk%2BWOrSsl%2B99gSfqBy0RjGhNkaHGfWrUCTdjDhIC3tkdWuO5CZvzdc0yIm1j6ATyMI9K0ODUo4pkmRtjmMKIjGa8pmAA47QnWsVgQ4eeDJpAZ7TZN3mwjdiwwuKvFyQY6pgG4zeUbFW%2FxWBEB0dF%2FRJv0LZfTabpoT7Nr9Dk96bbHRnaZR32I2mCitpWFlXlg9i6cKILu5PzxYKpDftn5eQdhusLHjXKV0MFC3U4lakriHxxMHRzqUy3wK7WCiOOuuYYGNZpES9JdUYWrWPLS6qyPYRYa3biZg3VvA5N%2FpY3%2FGAA%2BUOZNMxzyl7OzY%2B2iM577V1cHY%2FrEGy1a7NtoAlZkhV4ky%2BxX&X-Amz-Signature=72749d57894380f9c64a0977c427d2cbdabe3a6b32f7fb7363c73f495e40539b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HEQOMPT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T100634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCICHbi5bH1BqSonKRCI8XKOmALtd1uxmDvHk8C6xFeJIrAiA0D9yIhcw9An1Je9ynYAbnZnpQfUK%2BIAKWNZw3CovCqyr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIM1jTEP9JfaJFhiHrkKtwDfnS3TZ00LepiZOV68N06k3elc2eezrP9ht3pXNbi%2B2TorcO1C02f9%2FExhNM4HqjXMta8g9sRLLKKTgmARGHHIog9J5MTn2qXIYlAxhEJ9EPKcwEZqNibLAS2gIY%2F1LkdjrIGHRJ65ASRBwgPYVQTuFHEcEVO2QGp22mNXyGy1b1mBVgRqrGpwCE6bXgyzMeMzHedMj13aX8UszJw8xT9imYo4s%2Fkh8mmXx22%2FZNx8MHCjuetntM%2FCQkFU7kCb8kLUd5gPvgqnCCwycJsah5OKkD6WdXryeaIWKb5WU8dJ53a9JHi9qMJsgkiOoG6K6ARQkAK2iFn7ytu3L2wz51J3pSsbTBma%2BDoLr2EL3quqfcBedBbD6Io%2BwG7IR1FhlHIYxFs57Xi%2FQNAjIVlGgAYf312sl7JXkzl6%2B%2FZm22n182cEQCalw%2FEYI72J4S3sd%2B7waD416oj3w1dSVZW9HT2U2oUOX%2F6XfaEJmCEFlnVm%2BnIX9K2HDQpwA%2FdumGVwODYx0lVk%2BWOrSsl%2B99gSfqBy0RjGhNkaHGfWrUCTdjDhIC3tkdWuO5CZvzdc0yIm1j6ATyMI9K0ODUo4pkmRtjmMKIjGa8pmAA47QnWsVgQ4eeDJpAZ7TZN3mwjdiwwuKvFyQY6pgG4zeUbFW%2FxWBEB0dF%2FRJv0LZfTabpoT7Nr9Dk96bbHRnaZR32I2mCitpWFlXlg9i6cKILu5PzxYKpDftn5eQdhusLHjXKV0MFC3U4lakriHxxMHRzqUy3wK7WCiOOuuYYGNZpES9JdUYWrWPLS6qyPYRYa3biZg3VvA5N%2FpY3%2FGAA%2BUOZNMxzyl7OzY%2B2iM577V1cHY%2FrEGy1a7NtoAlZkhV4ky%2BxX&X-Amz-Signature=168a34e7055425d8ab33f0a1488828dd97210d65d8363092b59098124b141c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

