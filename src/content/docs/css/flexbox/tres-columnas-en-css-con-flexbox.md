---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5DJOMF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZz9B6M75hfpaDCQVaPmJNia4DPSlM%2BQz%2FZErc7Oa4SAiEAsN0SUmlJTwrr5quiQ9%2B6xWWJ%2FmAmO3%2FKVWxvQV97SDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4TMlrVICftqG1lNyrcAzJ%2F%2FK%2Fj4MCvkPLLR7uoKqQ%2BvkjQ8G0zgoN8ntSAG5L1GrX4W%2BUjPa%2BHgSrGL84lzg8cSPaaeUVYHMn8TjjSYYK8Kz7dk%2FT3WIUpYSp5wwBYOShiSVbeMUnj1tQxXo5bA1p7RFqY0D0ubY%2BBXGB8f9X5mQ6MQ3Sae1Qz5S4wlHWF6iVd12q5JX0%2BBp2fD1YY9clmYWEkhyE1V6b7Ha8XRkHWq7Ys2FxSyMxI68cRqdRTf%2BIYgXwUjdmnuZebsRfaaeuRhlN6wO8DgrP2KDVd9VQcqiS12XlWFKD1L7pjt8qEbYQPtmnlZjIhiwYw8PB0S8umjXqoo6k2NN5E%2Br13j7GcO%2BdUB0p7xNr7oE1aEmQN8%2BxlftSkFfeVtcZPSxnHX6Kbopemln2iukJeuCKLGrGLJXtxSm%2FLag6V2ASSLTdZrUmIIFhBARCw50HEZSFOOA2%2F%2BEgZ45dchbbdWVyrx2PguJGUYy5bRYHmR5iiKM4IKGZ89X%2BkxXcGLBO%2Bp0zqq0%2Fkzn44IGCiYDAg3voA6cEcn1FABjrLOjiWssirf5QHV57BW75ilgghE8Ls8ZUNe%2FWIiAS3pCS8EPXRCzw339NcIfAG2aGi0ew3OF5p1Af%2FttULtxklg1bg%2BbFwMK7%2B0skGOqUB1bmBIZ6p%2FHij8UGP0TlR3WUpzOLEjq%2Fw8RlX6tZHBI3f9eedcrXuV%2Bj7mWMkiNSrFS6bkgzjhOnBe577qQ86sdJtlKc%2BGJpbqBBw%2Bpold%2FpP%2Bjqp4Kgh4M4aa2btfbt7rhYDH%2B1qIYOh5t7lCCu%2BSpUzVhIxanaaWkh1Yo%2B3BnTXflp39P0O5oDRzGIyXWPkHQ4qIhrL1BjuPGZEF9QLAcSVTe4Z&X-Amz-Signature=c703bc2f6a92b8f6eecd839bf18ee261042a6438f871600e31e696f4313210f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF5DJOMF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T031414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZz9B6M75hfpaDCQVaPmJNia4DPSlM%2BQz%2FZErc7Oa4SAiEAsN0SUmlJTwrr5quiQ9%2B6xWWJ%2FmAmO3%2FKVWxvQV97SDAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP4TMlrVICftqG1lNyrcAzJ%2F%2FK%2Fj4MCvkPLLR7uoKqQ%2BvkjQ8G0zgoN8ntSAG5L1GrX4W%2BUjPa%2BHgSrGL84lzg8cSPaaeUVYHMn8TjjSYYK8Kz7dk%2FT3WIUpYSp5wwBYOShiSVbeMUnj1tQxXo5bA1p7RFqY0D0ubY%2BBXGB8f9X5mQ6MQ3Sae1Qz5S4wlHWF6iVd12q5JX0%2BBp2fD1YY9clmYWEkhyE1V6b7Ha8XRkHWq7Ys2FxSyMxI68cRqdRTf%2BIYgXwUjdmnuZebsRfaaeuRhlN6wO8DgrP2KDVd9VQcqiS12XlWFKD1L7pjt8qEbYQPtmnlZjIhiwYw8PB0S8umjXqoo6k2NN5E%2Br13j7GcO%2BdUB0p7xNr7oE1aEmQN8%2BxlftSkFfeVtcZPSxnHX6Kbopemln2iukJeuCKLGrGLJXtxSm%2FLag6V2ASSLTdZrUmIIFhBARCw50HEZSFOOA2%2F%2BEgZ45dchbbdWVyrx2PguJGUYy5bRYHmR5iiKM4IKGZ89X%2BkxXcGLBO%2Bp0zqq0%2Fkzn44IGCiYDAg3voA6cEcn1FABjrLOjiWssirf5QHV57BW75ilgghE8Ls8ZUNe%2FWIiAS3pCS8EPXRCzw339NcIfAG2aGi0ew3OF5p1Af%2FttULtxklg1bg%2BbFwMK7%2B0skGOqUB1bmBIZ6p%2FHij8UGP0TlR3WUpzOLEjq%2Fw8RlX6tZHBI3f9eedcrXuV%2Bj7mWMkiNSrFS6bkgzjhOnBe577qQ86sdJtlKc%2BGJpbqBBw%2Bpold%2FpP%2Bjqp4Kgh4M4aa2btfbt7rhYDH%2B1qIYOh5t7lCCu%2BSpUzVhIxanaaWkh1Yo%2B3BnTXflp39P0O5oDRzGIyXWPkHQ4qIhrL1BjuPGZEF9QLAcSVTe4Z&X-Amz-Signature=0aec24254bec5d8f1ccd0353fd4f2ad8a2dc94775e24bb90d5100023ecf564a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

