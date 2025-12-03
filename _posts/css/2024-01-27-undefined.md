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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3722TX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB3YcF9RBXCSQEHqOwbOdI8OhtiA5fVCgMpdIJVme%2BAuAiANmio8fRzFnHf21Z0kpe1Evs8b5wdKS9K46envtUJL5ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMp9nSpgeGANQNTjNqKtwD722LS5cvFTxHpBGiCnDjUA9m5pmeKetX8vjOWwT%2BDCwg3ixhTG4MjlCt7u%2Bt4LBp99SfNY56E%2BaEZ8bpE3oVoquIZ4PWfR4kdjQUn8nt46Cru9gTTkL3%2BqUQ6OX2%2FG%2FkjNK1%2F%2B1u2Td2fuxt4y%2FupjfHSINk9Nrw3BsI4y%2B1%2B1jc8UwpyUlKGB%2BV%2Bff4lbtzVGkc%2BuEEtSHJ3LfNiQSDI%2BnFAQWV4hz%2F0NBtVWTxqRCeWUvqAr28Ojch2d3091sborrpSI68Z4DsrfFPd16AsawMr0BXtDNpz%2BlHkZTxA4e%2BT59AtylT7aFxoX8%2Bw2QdYsq2RP3DunTaDBXVJKmI4ygWGiVL528NZJ7Fyq1VGfCAYLIVR%2FKMYDLbaeDQu19SiuzGpwmBVZkucxweyrH7Hc1vK%2FWlSBObNEihXNnA%2FGyn40pkW5ZWFb36enOlQSluFpoI3yTGi659jmYEGA9Mu9OcXBzZIlyISWpYyNLUV3Ud%2F%2B%2B7%2FD9f6zE3qr4T0cWE12kHTkUtYN3RwoIC9wjGS24thxHkdg7HGXnoEEQsvSreFSRpEbgDKUkcBA6vtf3yh2s%2BTFWn9C7bkk9j17i5858P9MBHsnInmhwuIOXAmg%2FAYxLkbL3iim4DyVgwyJS%2ByQY6pgFl%2B4rhYgnzxY%2FSbbMIQ1VYI%2FnHn6UTOh4Su50s94qojx1oTd8j4kAHncIgXkf6K95MRPDpZh4t7lJWPUyKHPSsuwY1IW35MJeX6%2Bn%2BlNV0Rkitn%2BQOnZeCrJ81inFqZwxI6nBbSPqPIt677HYwbkQAoXaHjpz%2FDMwFimureyaWlSCW%2F2cHShZCTIYawurJ6ujA5h1cgTIgbmqQCh7GOJ%2F%2BJysUwED3&X-Amz-Signature=7d7da26b328c1ed0a97fde834db62d0d4c70599b47663f5a246af60b0c73fe1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3722TX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIB3YcF9RBXCSQEHqOwbOdI8OhtiA5fVCgMpdIJVme%2BAuAiANmio8fRzFnHf21Z0kpe1Evs8b5wdKS9K46envtUJL5ir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMp9nSpgeGANQNTjNqKtwD722LS5cvFTxHpBGiCnDjUA9m5pmeKetX8vjOWwT%2BDCwg3ixhTG4MjlCt7u%2Bt4LBp99SfNY56E%2BaEZ8bpE3oVoquIZ4PWfR4kdjQUn8nt46Cru9gTTkL3%2BqUQ6OX2%2FG%2FkjNK1%2F%2B1u2Td2fuxt4y%2FupjfHSINk9Nrw3BsI4y%2B1%2B1jc8UwpyUlKGB%2BV%2Bff4lbtzVGkc%2BuEEtSHJ3LfNiQSDI%2BnFAQWV4hz%2F0NBtVWTxqRCeWUvqAr28Ojch2d3091sborrpSI68Z4DsrfFPd16AsawMr0BXtDNpz%2BlHkZTxA4e%2BT59AtylT7aFxoX8%2Bw2QdYsq2RP3DunTaDBXVJKmI4ygWGiVL528NZJ7Fyq1VGfCAYLIVR%2FKMYDLbaeDQu19SiuzGpwmBVZkucxweyrH7Hc1vK%2FWlSBObNEihXNnA%2FGyn40pkW5ZWFb36enOlQSluFpoI3yTGi659jmYEGA9Mu9OcXBzZIlyISWpYyNLUV3Ud%2F%2B%2B7%2FD9f6zE3qr4T0cWE12kHTkUtYN3RwoIC9wjGS24thxHkdg7HGXnoEEQsvSreFSRpEbgDKUkcBA6vtf3yh2s%2BTFWn9C7bkk9j17i5858P9MBHsnInmhwuIOXAmg%2FAYxLkbL3iim4DyVgwyJS%2ByQY6pgFl%2B4rhYgnzxY%2FSbbMIQ1VYI%2FnHn6UTOh4Su50s94qojx1oTd8j4kAHncIgXkf6K95MRPDpZh4t7lJWPUyKHPSsuwY1IW35MJeX6%2Bn%2BlNV0Rkitn%2BQOnZeCrJ81inFqZwxI6nBbSPqPIt677HYwbkQAoXaHjpz%2FDMwFimureyaWlSCW%2F2cHShZCTIYawurJ6ujA5h1cgTIgbmqQCh7GOJ%2F%2BJysUwED3&X-Amz-Signature=9010f9fd5c7ef2e9452ba7a10243bc6e72aed4217abc0c2725afe7bb1f17dabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

