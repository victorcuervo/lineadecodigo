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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WLOUY4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDitPKWJnvY3sf8udB%2Fz2Ps7gRJFtqrSYrWg2KU8i%2BqYAIgcDIblzHnN2TZnache1Mvr8gvmcamJvDgDDog%2FbsOpiwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGMz2mo9wn%2FdfowDNCrcAxQRY%2FUpqFcV%2BWjWefGvNHo8XNJ0rT6rvQYJqCfw%2FiVrGNzY5V8sbZbXN%2FV%2BlMzQzRkO7xG6OHi0PIWHE6r89yS7NVysYH8UxrWsltWTeDhG49%2FcfAA969xbQsdGLXUfuf%2B5ZUP7vd%2Fq70qxp5zfyvO33XaZC0DnxVFoOaj7WOFAoy31ejUouiRTR2KLoaA0NCOYX2zaH0uD9JyDQ%2BuPTxV5VK3bp%2F%2FpqP8XmWBYJ6%2BbnQsRGMTUvV9NnlH7SkDW4vfZpsotZcDJGyzTqXxcuVW19eilDQrNVlIcUh%2FO3S2bLLwuqQ7C6odR07y37k%2FoTFpX%2B8OzwSmAMQG%2FtXZeJ1e65Ne%2FvqL9LURgegrXpggBO6wA70vgCG2o7zDcMLZwgAbFLs9DDpFGX78f9EiybAAq2wzqSqcXyQsXJJj16W%2B5BH5CRjj5%2FlF5%2B0ItFB3b2heHAYbyn4H6pyi8KI5kgTMbMfInB0DsV7KwZlMDaN63tSlV4RyY1VWeuM9OJGCixITBjZn3NZfKAvEvkCCZwGuUAE%2BUqA56fzH5KNOkPqHkEKIZQQWhMC8yI3nnWJolNBx%2BdSOEXORQ4jOJ2Ycb7%2B%2FN56OSVgaKbuPsESvGcP7MnfONmRuXp2s9HNsPMPaVvskGOqUB9TKyeHOz%2Fccur3ZNi572%2BpKZA1y%2B%2BLI2WHnxJMtEycERCiCjWv2NuK2aAaqIpm2VoNBZZu1kzgnisAyzOJ1UoiCj4qasXylxJXtCAfeXDdDe6CDQ9PU%2FXqpRAHnjDyymSsPSs3AZ8KtiWpm%2FbhrTqzmxkVIkZuo7eSi1UBozwDxn14qj9DXrSkTyc4QlkMUaygFCYzCMsb2vU71rI0J3YGFfILBo&X-Amz-Signature=1091d9d5c51901f642fc808951572b14fe34cfc49bb6c9298f72dd4b2adf3f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626WLOUY4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDitPKWJnvY3sf8udB%2Fz2Ps7gRJFtqrSYrWg2KU8i%2BqYAIgcDIblzHnN2TZnache1Mvr8gvmcamJvDgDDog%2FbsOpiwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDGMz2mo9wn%2FdfowDNCrcAxQRY%2FUpqFcV%2BWjWefGvNHo8XNJ0rT6rvQYJqCfw%2FiVrGNzY5V8sbZbXN%2FV%2BlMzQzRkO7xG6OHi0PIWHE6r89yS7NVysYH8UxrWsltWTeDhG49%2FcfAA969xbQsdGLXUfuf%2B5ZUP7vd%2Fq70qxp5zfyvO33XaZC0DnxVFoOaj7WOFAoy31ejUouiRTR2KLoaA0NCOYX2zaH0uD9JyDQ%2BuPTxV5VK3bp%2F%2FpqP8XmWBYJ6%2BbnQsRGMTUvV9NnlH7SkDW4vfZpsotZcDJGyzTqXxcuVW19eilDQrNVlIcUh%2FO3S2bLLwuqQ7C6odR07y37k%2FoTFpX%2B8OzwSmAMQG%2FtXZeJ1e65Ne%2FvqL9LURgegrXpggBO6wA70vgCG2o7zDcMLZwgAbFLs9DDpFGX78f9EiybAAq2wzqSqcXyQsXJJj16W%2B5BH5CRjj5%2FlF5%2B0ItFB3b2heHAYbyn4H6pyi8KI5kgTMbMfInB0DsV7KwZlMDaN63tSlV4RyY1VWeuM9OJGCixITBjZn3NZfKAvEvkCCZwGuUAE%2BUqA56fzH5KNOkPqHkEKIZQQWhMC8yI3nnWJolNBx%2BdSOEXORQ4jOJ2Ycb7%2B%2FN56OSVgaKbuPsESvGcP7MnfONmRuXp2s9HNsPMPaVvskGOqUB9TKyeHOz%2Fccur3ZNi572%2BpKZA1y%2B%2BLI2WHnxJMtEycERCiCjWv2NuK2aAaqIpm2VoNBZZu1kzgnisAyzOJ1UoiCj4qasXylxJXtCAfeXDdDe6CDQ9PU%2FXqpRAHnjDyymSsPSs3AZ8KtiWpm%2FbhrTqzmxkVIkZuo7eSi1UBozwDxn14qj9DXrSkTyc4QlkMUaygFCYzCMsb2vU71rI0J3YGFfILBo&X-Amz-Signature=c382d9ee3c7592a243058c7c6bb8971cbe6e112122fcb5569847ba31b8f91bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

