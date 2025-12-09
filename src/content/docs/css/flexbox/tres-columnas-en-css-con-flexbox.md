---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQRLJ4B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkIK6OqIaBH3%2FpyPwEpdWufY2%2Bytw0LhUkmUN1WQr1bAiAoJoIb4F1U7gR6g15Gn98Pc1z2pvM4NEVHqRHZVzdRniqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMqRRAvqltQvjCcE2KtwD42eHMsb0NEH3BdXYXx%2FkNCfvI%2FNGa5Hclumi8YrqB9%2F7nUqN5%2BJ1so4Nm20WjsPwP88YmhqGFucwp%2FM8NIeatHrsiAlzlTijUt8unmegccw3i9ZUzdS79%2F%2B1NYqV53AhglvxP9lk%2F2K1td9N6RCSXndW4rhpST3abDJQIzZhjxBhG98UAYXwYa7zX%2BZBN2LpXEfzWjHb2OZeOOQ0WcmxGOnvmQIFzQLLpiwNd01iBF6IlfAfmfXLEckiMyoisLk3bDeE67Obh3dy%2FmN4A0JZlrF8YD5sGZ%2BnQyNMP3fgVdOGHHWv9ppu3BveeEgsD5pve%2BzLE8ZjQYMFyA9YLT%2FQwJ54925BcF0cgq3UjLdrSGUtwrQ8OhNHAYAvgwXEEH%2Bit5HzokkdwugXgzad8YTwcmicks29JjTrvnMqjwzM%2FS2JthfB%2BXnMzmSDUGlliKm9168WCL%2B6Q5gnHxto6df82%2BLmDOwz7KJkplmRRgsWjZQfsAkBN6qDhnwRoDC2%2BY9iPAdsJ%2Bto8SuodpfDx36UfvXVHuVqY1LwECHJy2XZDtEnJm4k7HPAAAAktQ8VLfVTArPACNanlMMCfXJ1NKN9YHXllrfDBjz5saP%2B1HB6LRHTxNQui27ISb6At9gw8K3eyQY6pgGRQMlzyntBqJitJDia9uReBiM98X5hLK9uhctXgtQtamJSyKpui2Dknks%2BkS9ugOhcJYXTDaS6fTxoIKzlLQdIgpQiZyrybipN6G1PGSyP%2F07EHhtSqADarDpJH7e7nc0Xs0JKCrQBfqjSjHcLCOyf%2BYxp9nyx0UwQL12LpxubunTPwkZA0xj2Uqqu%2BE%2ByaAIYAoNky3gH3QwfeoMwYrqGeIjgVkLt&X-Amz-Signature=d4dc0bad89b673e4e1ba967609a60111ff9d8e9db584b424ec3ac7d7324bba71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IQRLJ4B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkIK6OqIaBH3%2FpyPwEpdWufY2%2Bytw0LhUkmUN1WQr1bAiAoJoIb4F1U7gR6g15Gn98Pc1z2pvM4NEVHqRHZVzdRniqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMqRRAvqltQvjCcE2KtwD42eHMsb0NEH3BdXYXx%2FkNCfvI%2FNGa5Hclumi8YrqB9%2F7nUqN5%2BJ1so4Nm20WjsPwP88YmhqGFucwp%2FM8NIeatHrsiAlzlTijUt8unmegccw3i9ZUzdS79%2F%2B1NYqV53AhglvxP9lk%2F2K1td9N6RCSXndW4rhpST3abDJQIzZhjxBhG98UAYXwYa7zX%2BZBN2LpXEfzWjHb2OZeOOQ0WcmxGOnvmQIFzQLLpiwNd01iBF6IlfAfmfXLEckiMyoisLk3bDeE67Obh3dy%2FmN4A0JZlrF8YD5sGZ%2BnQyNMP3fgVdOGHHWv9ppu3BveeEgsD5pve%2BzLE8ZjQYMFyA9YLT%2FQwJ54925BcF0cgq3UjLdrSGUtwrQ8OhNHAYAvgwXEEH%2Bit5HzokkdwugXgzad8YTwcmicks29JjTrvnMqjwzM%2FS2JthfB%2BXnMzmSDUGlliKm9168WCL%2B6Q5gnHxto6df82%2BLmDOwz7KJkplmRRgsWjZQfsAkBN6qDhnwRoDC2%2BY9iPAdsJ%2Bto8SuodpfDx36UfvXVHuVqY1LwECHJy2XZDtEnJm4k7HPAAAAktQ8VLfVTArPACNanlMMCfXJ1NKN9YHXllrfDBjz5saP%2B1HB6LRHTxNQui27ISb6At9gw8K3eyQY6pgGRQMlzyntBqJitJDia9uReBiM98X5hLK9uhctXgtQtamJSyKpui2Dknks%2BkS9ugOhcJYXTDaS6fTxoIKzlLQdIgpQiZyrybipN6G1PGSyP%2F07EHhtSqADarDpJH7e7nc0Xs0JKCrQBfqjSjHcLCOyf%2BYxp9nyx0UwQL12LpxubunTPwkZA0xj2Uqqu%2BE%2ByaAIYAoNky3gH3QwfeoMwYrqGeIjgVkLt&X-Amz-Signature=073c430032341a0b5fae32122e66f1c17ff1e21550e7e8a266e264f7177b921c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

