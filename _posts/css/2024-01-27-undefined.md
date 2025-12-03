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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6AMJAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHZ%2FnhMuyDq3RCFZRXT5xq%2BEoSwZzY1xsrR43EVbN6LNAiAbBhMCkVEZCYMuW%2F33DKFw0D5rVu3guRGNKVIzzsSkyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMakvNoBYzd6fh%2F%2BI0KtwDJVyN%2F1GFb2voWZ7qLolY%2FxdIlA49EbXicJhySSpsYREEQIiBtW7QmycAJph3MPcd8kT5GJET06oSlLN4AG9duxn1RZQlfjRCp0VCaPpL2QQBl6WHLh6xV3mHIZWZEfDdm35mVGhrdszfNe1fms1fW4oosGFsosAyIJqHK5iqwo3mC1PQlFeOTAyoV8Qmu7g4S6b4GjK8g66kDLbAw4W0S3n4%2B0Fn%2FM7SVcKt%2F0%2BvX96ebXl7312uj1iRgo8nS53bdU2j%2BDgaImzFtigRMISVfVvr3bg94z18Ps4%2BBf0S5IRcmwUbNoFOgTc69jwjY7S3wg8rTY4OX1we26i6TUT7DvPFP5t8dSI3U%2F6OpQtnYnTRcGF4dG78dOOG1N85vZKB%2F4iJl1zRibm3cqHXQYYjjXRm%2BJ4Tg2xrA4cs4pfZBT7RkVJhHSnYh6MTuj3hPFApPjQVA%2BmZu3VrRYVFN9%2Bs3J%2FgZEA63YQrYGnPjDzzJd%2BAuK62vxWbshDP2EVLn%2FIHCSZO9l5lBya3nW3kA%2FiVoV1Y4on4aEn9%2BATE%2FK8Pup2lJnbuUmlFzFCnelGohzMja59rUDBHwyzc9wwybuzeejBYLH7%2Bqlog15gBaTJNH1GCqyuV4oRfo%2BwJYmUw1JS%2ByQY6pgH60t%2BbE6eN8SkLqBbDQi9wHYDoX3PcgU9vrKLdjXKRQRSpvuiI8VgNJAjCEuhCz6QLWeKloS1LJR00cVqDzchSq9ClE0bnum3CgXvVA4yXJTcaATa0Ll00AQhvdo8WTrdR9dCXBl4wz8zvQxEn9O0BNmUYZo1E7fjX2GYqamIz22fGn8yEN6nfTC796jFqKhhYnSWCpbYFgX9i%2F%2FpIBMvXu7n7Irju&X-Amz-Signature=1ebf137a98f3ebe24ef7acaac8fea0ce98214d7321f59711016bec63a9c680d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL6AMJAI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHZ%2FnhMuyDq3RCFZRXT5xq%2BEoSwZzY1xsrR43EVbN6LNAiAbBhMCkVEZCYMuW%2F33DKFw0D5rVu3guRGNKVIzzsSkyir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMakvNoBYzd6fh%2F%2BI0KtwDJVyN%2F1GFb2voWZ7qLolY%2FxdIlA49EbXicJhySSpsYREEQIiBtW7QmycAJph3MPcd8kT5GJET06oSlLN4AG9duxn1RZQlfjRCp0VCaPpL2QQBl6WHLh6xV3mHIZWZEfDdm35mVGhrdszfNe1fms1fW4oosGFsosAyIJqHK5iqwo3mC1PQlFeOTAyoV8Qmu7g4S6b4GjK8g66kDLbAw4W0S3n4%2B0Fn%2FM7SVcKt%2F0%2BvX96ebXl7312uj1iRgo8nS53bdU2j%2BDgaImzFtigRMISVfVvr3bg94z18Ps4%2BBf0S5IRcmwUbNoFOgTc69jwjY7S3wg8rTY4OX1we26i6TUT7DvPFP5t8dSI3U%2F6OpQtnYnTRcGF4dG78dOOG1N85vZKB%2F4iJl1zRibm3cqHXQYYjjXRm%2BJ4Tg2xrA4cs4pfZBT7RkVJhHSnYh6MTuj3hPFApPjQVA%2BmZu3VrRYVFN9%2Bs3J%2FgZEA63YQrYGnPjDzzJd%2BAuK62vxWbshDP2EVLn%2FIHCSZO9l5lBya3nW3kA%2FiVoV1Y4on4aEn9%2BATE%2FK8Pup2lJnbuUmlFzFCnelGohzMja59rUDBHwyzc9wwybuzeejBYLH7%2Bqlog15gBaTJNH1GCqyuV4oRfo%2BwJYmUw1JS%2ByQY6pgH60t%2BbE6eN8SkLqBbDQi9wHYDoX3PcgU9vrKLdjXKRQRSpvuiI8VgNJAjCEuhCz6QLWeKloS1LJR00cVqDzchSq9ClE0bnum3CgXvVA4yXJTcaATa0Ll00AQhvdo8WTrdR9dCXBl4wz8zvQxEn9O0BNmUYZo1E7fjX2GYqamIz22fGn8yEN6nfTC796jFqKhhYnSWCpbYFgX9i%2F%2FpIBMvXu7n7Irju&X-Amz-Signature=41ad592df025b161dbdf744449df10f87b95545cbfc8ce6976aefec6ae0767ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

