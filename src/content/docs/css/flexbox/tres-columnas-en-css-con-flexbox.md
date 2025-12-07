---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3MVW4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdldCct6YUQglvtnVfRmFxtQb7ADRD8q5LoKcnfGYtHAiAiUtHCKa6WLxp1Hd3%2FyXSMcwpssGT9Bb4UsUmZXwnS0SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHuJ%2FHzQboKXsTN%2BNKtwD1jeDUxLqkmds259TfypIh5AaUInJKeKnXbizmsNkF0bHcvqnwoJhUX17oQm5Ie6wrsDd1INUwubdUcoXjrnQNnLXBpFEDYl%2F4PZz5ZAiOn104ocRNlbb41hhzW8Lh6FEfsBVAf6dxQUn17a%2F70ZO5b7809roW8K51Y%2BVDojmprPj0DbfIqWQaYib5gWN2V6ugt0xBBHl4zggx0yytWw9S34dvvzcqMp9SlVdbRdfD902REqguMcFNRAQB4pnBtMuPIlkngYjpzyT6xEXH3dPnAcFVNlfnwE858spdd69CBNXl2EntnjUioJfMrvXBYtaJf1DVbhYoS5CaiGSuBF2TTeIwAJNhgxXQf%2BMhfsJGvkVqNaosKqLxPuUJ1omli1TtfCOqqU8RRoUVHsn4O1woOFxhmEarurFoRFyBNUZWRrqSe0FcnQIyJE1CLGNpAUdpH7BIG%2BEI41ylolXDpJLHmwrnrkQJQMtaEuN5rWd8lID4acBC3Nr6EYjcOI8YXpxwfMooTBqp25ELx0tGUYzZkd1aFc8koFtgycRvxy4ZJtWWu2f%2FK6Xf6XKLMY9hU6v0JZT7bfi26J2fCO7JrvRe1lEqXqXEsdM4uE7FfSOslp7QiCFUiMkbsphIDow3%2F3SyQY6pgG3tvaN5DC2KIaHg6DrcWxJjn2R%2B2wt5iwFJ9zjjgmh4wE5qvxZHtc97fzyxVGaZjqundK5U0%2BwI0nTcQpSxALZ9ztXfwy%2FPuDLYMDtd2X%2BAGDqkzu3cf1FGFYi1GbDPQ8Ckv31JjCxnBHjU9NoIPmxDCKlzf%2Fd1vlPKTh%2B2FZuO%2FNGfsYDGTXlWPsAXEkO9dp3hSDGoLVKZ73P%2FzPD9JPI2KZd%2BMj9&X-Amz-Signature=108ca53e0cc041e898d666bc2dbf78097bbac082a206c707206dde4510e16d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3MVW4X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T041146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdldCct6YUQglvtnVfRmFxtQb7ADRD8q5LoKcnfGYtHAiAiUtHCKa6WLxp1Hd3%2FyXSMcwpssGT9Bb4UsUmZXwnS0SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHuJ%2FHzQboKXsTN%2BNKtwD1jeDUxLqkmds259TfypIh5AaUInJKeKnXbizmsNkF0bHcvqnwoJhUX17oQm5Ie6wrsDd1INUwubdUcoXjrnQNnLXBpFEDYl%2F4PZz5ZAiOn104ocRNlbb41hhzW8Lh6FEfsBVAf6dxQUn17a%2F70ZO5b7809roW8K51Y%2BVDojmprPj0DbfIqWQaYib5gWN2V6ugt0xBBHl4zggx0yytWw9S34dvvzcqMp9SlVdbRdfD902REqguMcFNRAQB4pnBtMuPIlkngYjpzyT6xEXH3dPnAcFVNlfnwE858spdd69CBNXl2EntnjUioJfMrvXBYtaJf1DVbhYoS5CaiGSuBF2TTeIwAJNhgxXQf%2BMhfsJGvkVqNaosKqLxPuUJ1omli1TtfCOqqU8RRoUVHsn4O1woOFxhmEarurFoRFyBNUZWRrqSe0FcnQIyJE1CLGNpAUdpH7BIG%2BEI41ylolXDpJLHmwrnrkQJQMtaEuN5rWd8lID4acBC3Nr6EYjcOI8YXpxwfMooTBqp25ELx0tGUYzZkd1aFc8koFtgycRvxy4ZJtWWu2f%2FK6Xf6XKLMY9hU6v0JZT7bfi26J2fCO7JrvRe1lEqXqXEsdM4uE7FfSOslp7QiCFUiMkbsphIDow3%2F3SyQY6pgG3tvaN5DC2KIaHg6DrcWxJjn2R%2B2wt5iwFJ9zjjgmh4wE5qvxZHtc97fzyxVGaZjqundK5U0%2BwI0nTcQpSxALZ9ztXfwy%2FPuDLYMDtd2X%2BAGDqkzu3cf1FGFYi1GbDPQ8Ckv31JjCxnBHjU9NoIPmxDCKlzf%2Fd1vlPKTh%2B2FZuO%2FNGfsYDGTXlWPsAXEkO9dp3hSDGoLVKZ73P%2FzPD9JPI2KZd%2BMj9&X-Amz-Signature=0c7aae7e0b77035b36f5a2020f214ce59ff2093c705336b86e07933ef3c95bcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

