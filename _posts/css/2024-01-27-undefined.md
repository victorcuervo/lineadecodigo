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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J647QS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAzgKgsRZsvIU72tcX5oZwoFRvS97EoSNBt40hrzI%2FKZAiEAqn%2Bed3RsU0plWYsVeYBKvyMZZ22x%2F5DNy9duoKVwWkQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOyGzBvwQmgXCpRHJircA%2FH%2FWwCCxHRML7xMrzukYLPaoOTBY04PiA9afGTZ7xOsrZMcQP9emp9TRT2GyG0eZAJYHRkChb7KvbpIk8oAiZBaK6hcAqXAx4CpX0xggSLI4K3I7fTJpt7X9JVr8Dd9%2FTzKCXoZ%2F3xe9BHV20ppPK9bm7TTRqoeIJ4o9jKgBQjEfdVec0U2UL9v1jMXNQcNlcTLxptAn8k0Tom5dQHIIQtn%2BVd9kGD4GVL88%2FnynSK3etk6kRSjemw8jNmq0MgbiXINkOMP5iGNcGDmIeq9M0qgCE7cr%2FfaWam8qmxt%2Fm%2FKfJeidu8K0%2FA%2FGiWX8wdtUSwXAWa0GvF%2FXAj7Ucft5%2BxNiBGR3Qw%2BaYEThYss4ks8gJc2EBfIhgnmg7YTLFQc4ctiAWCdNmCUVvtq7L5tsFIojRvKoMA2QFVIQoXg5IEk7NWbw2Z5dmqjlayi%2FdRAPQC0b8Qbr7Ok9m1wUYYPy%2BIxoXQOCT3RshdMA6222%2Fcu8RQ4f5OCRPvLr4huHA2KRkWuSmYmZo%2F3FlhV6abeS1ROWF345FN26elY%2B8Fq0KwY9sQPki2dehyROlsbwXtwt11ImxgAnGbpsvpKKl2BcB1KkWJA9m2WgAgUFLmGSGbT%2FN0H7rtxggDd0YszMM2mwckGOqUBR%2FrgujgKfYRL6F8AtI3PaFWTczN8o1KKJhWfnt9VeTSCogCdqRN6txrvr%2FVrSG1NObNJmUAGgSPHROTWiPE%2FJTD%2FhOpbrlHadcotgjysaVSAUB4djm37%2BG4oJE78tAADGug%2Fr8QXx%2FCU8SKeZywbZ3%2FfJag%2FC5RcKRZmnIH%2Fpl8m5q4EzV18g%2FDIIlD7AL%2B2AA7QYZtCCCT57Bqp%2B0rsqA22Zx3n&X-Amz-Signature=30843ebe86c0215c6af285f21af7cff8190253eb66b03562001a2e9b4f1ae8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647J647QS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIAzgKgsRZsvIU72tcX5oZwoFRvS97EoSNBt40hrzI%2FKZAiEAqn%2Bed3RsU0plWYsVeYBKvyMZZ22x%2F5DNy9duoKVwWkQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOyGzBvwQmgXCpRHJircA%2FH%2FWwCCxHRML7xMrzukYLPaoOTBY04PiA9afGTZ7xOsrZMcQP9emp9TRT2GyG0eZAJYHRkChb7KvbpIk8oAiZBaK6hcAqXAx4CpX0xggSLI4K3I7fTJpt7X9JVr8Dd9%2FTzKCXoZ%2F3xe9BHV20ppPK9bm7TTRqoeIJ4o9jKgBQjEfdVec0U2UL9v1jMXNQcNlcTLxptAn8k0Tom5dQHIIQtn%2BVd9kGD4GVL88%2FnynSK3etk6kRSjemw8jNmq0MgbiXINkOMP5iGNcGDmIeq9M0qgCE7cr%2FfaWam8qmxt%2Fm%2FKfJeidu8K0%2FA%2FGiWX8wdtUSwXAWa0GvF%2FXAj7Ucft5%2BxNiBGR3Qw%2BaYEThYss4ks8gJc2EBfIhgnmg7YTLFQc4ctiAWCdNmCUVvtq7L5tsFIojRvKoMA2QFVIQoXg5IEk7NWbw2Z5dmqjlayi%2FdRAPQC0b8Qbr7Ok9m1wUYYPy%2BIxoXQOCT3RshdMA6222%2Fcu8RQ4f5OCRPvLr4huHA2KRkWuSmYmZo%2F3FlhV6abeS1ROWF345FN26elY%2B8Fq0KwY9sQPki2dehyROlsbwXtwt11ImxgAnGbpsvpKKl2BcB1KkWJA9m2WgAgUFLmGSGbT%2FN0H7rtxggDd0YszMM2mwckGOqUBR%2FrgujgKfYRL6F8AtI3PaFWTczN8o1KKJhWfnt9VeTSCogCdqRN6txrvr%2FVrSG1NObNJmUAGgSPHROTWiPE%2FJTD%2FhOpbrlHadcotgjysaVSAUB4djm37%2BG4oJE78tAADGug%2Fr8QXx%2FCU8SKeZywbZ3%2FfJag%2FC5RcKRZmnIH%2Fpl8m5q4EzV18g%2FDIIlD7AL%2B2AA7QYZtCCCT57Bqp%2B0rsqA22Zx3n&X-Amz-Signature=a1978bb2f6bfabb6c1bcb741e68aa42893d1c046a6913fbabb01baa52357f5d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

