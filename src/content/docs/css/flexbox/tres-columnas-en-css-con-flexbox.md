---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKIICHC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiL6gdoAiKRatI0aBrsC88GgWP%2FcSWZCBR3z%2BY2JIxAIgF846jGbRwhaLDERxiqkmADzdMQKCIh7W5p0SbEwnvrcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIV1DRdChUzNPgXLSrcA8Hd4vbLPWZVSwLtZlkJ2CLGC%2Fh3bb7tQ36Vl0Y3P9RKdBWr1r1Nlz3gsS7FNK7CNTK3aPulR9kZm5Gkos0EwO4xMbPNDbbZ6R0gDvcBsEAgmZU1lCTjR07abMrGhaWeIk6bNJMGXJ5d%2BwiYjBA%2FnU80%2FtGnNX%2F5d9ygZ1NdCfVClwNUjmHJQN6mYYSBStbjCAnFiJRoBB73P8GAf4IluYls8ZgPhvCNHTPvFFDkP1k25FFy6mRC0q34nxGAaUt%2B91xV8z8Xkt0S3KuwLoPmhUPPZ3PvUmAugqrURfv91VNOPd5R2gZOcHG%2Bt0uLerRB5IW33eED%2FL9%2F7%2Fah%2BJz7I6nd1cYIfM3pxngMjJ%2BAzxL%2BI%2BwRJZ7bZa4j5lrfFfaNrA6APjxoicXvy09bmgI2h3KEdAgfuFhFnxwmeJJC3JBfD3Y1z6YIIJccXJ2LJQ3ef2zMTUaH%2FSn%2BPgqb1rv15PRJNwnWVLi5pLQWbqDyamS%2FSaH5zkn5CXf5EUzx4qJnir%2FaPqVD7%2Ffv256dcBR7LKs5FDM4jK9rxT%2Fd5k%2FADZY32WDemjjIqbgU74Ud5ZJowAtXwV4f3bg%2F76sO60xKBJH%2BCxGaagQHLuHv1%2BQ2Gok8RyvDzZj6OS6CXtkiMIHt2ckGOqUB3iodHohYinUinFMcRqPVWSso2GPLujmI5KdyGPyOpH3HvUIa3wcpQIheWlvD1A%2ByMpXX9AHBZzQQTdTWd3%2FYufXby%2BD74bteGUvqn57ASh4Y71NrL1QyYKM6xq%2FfLC%2BjYfXJELvuxJrcs4bklpAlIcsfBomE3rJzoij5p6Y06yTWBTwhEbiUUaFmZNtxVRknkBOdNmj8S3HNhTxaH9ZtvVk%2F%2F78X&X-Amz-Signature=ba76adc13e47178be4e8390864470e1f929841c6eee7c15180b1739ae008cb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKIICHC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJiL6gdoAiKRatI0aBrsC88GgWP%2FcSWZCBR3z%2BY2JIxAIgF846jGbRwhaLDERxiqkmADzdMQKCIh7W5p0SbEwnvrcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIV1DRdChUzNPgXLSrcA8Hd4vbLPWZVSwLtZlkJ2CLGC%2Fh3bb7tQ36Vl0Y3P9RKdBWr1r1Nlz3gsS7FNK7CNTK3aPulR9kZm5Gkos0EwO4xMbPNDbbZ6R0gDvcBsEAgmZU1lCTjR07abMrGhaWeIk6bNJMGXJ5d%2BwiYjBA%2FnU80%2FtGnNX%2F5d9ygZ1NdCfVClwNUjmHJQN6mYYSBStbjCAnFiJRoBB73P8GAf4IluYls8ZgPhvCNHTPvFFDkP1k25FFy6mRC0q34nxGAaUt%2B91xV8z8Xkt0S3KuwLoPmhUPPZ3PvUmAugqrURfv91VNOPd5R2gZOcHG%2Bt0uLerRB5IW33eED%2FL9%2F7%2Fah%2BJz7I6nd1cYIfM3pxngMjJ%2BAzxL%2BI%2BwRJZ7bZa4j5lrfFfaNrA6APjxoicXvy09bmgI2h3KEdAgfuFhFnxwmeJJC3JBfD3Y1z6YIIJccXJ2LJQ3ef2zMTUaH%2FSn%2BPgqb1rv15PRJNwnWVLi5pLQWbqDyamS%2FSaH5zkn5CXf5EUzx4qJnir%2FaPqVD7%2Ffv256dcBR7LKs5FDM4jK9rxT%2Fd5k%2FADZY32WDemjjIqbgU74Ud5ZJowAtXwV4f3bg%2F76sO60xKBJH%2BCxGaagQHLuHv1%2BQ2Gok8RyvDzZj6OS6CXtkiMIHt2ckGOqUB3iodHohYinUinFMcRqPVWSso2GPLujmI5KdyGPyOpH3HvUIa3wcpQIheWlvD1A%2ByMpXX9AHBZzQQTdTWd3%2FYufXby%2BD74bteGUvqn57ASh4Y71NrL1QyYKM6xq%2FfLC%2BjYfXJELvuxJrcs4bklpAlIcsfBomE3rJzoij5p6Y06yTWBTwhEbiUUaFmZNtxVRknkBOdNmj8S3HNhTxaH9ZtvVk%2F%2F78X&X-Amz-Signature=7d61a962daaeb09bdda68e1d4ec1bc8b0d1a5ddb32c1a8b48b407ca042791bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

