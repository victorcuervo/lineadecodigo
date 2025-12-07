---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKMUOAX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7kXL7Ty6eAa6HHiHEKBMno5vRLZdOZn8HDBnMcEw98AiBOwmdsftkcYEXsCBAUKJaDU6bQwK4lfk6oi05xka9dByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbLyse2q2iCdkBRzKtwDCr0f1CESe4xa9n6mnN7h%2Fm0Yh8maebWt2d9%2F4wp6H1DFjwpqLbt97gYkyKxVfWMckHGQNS8ggxwBUI894o1MiorYnyRxVU7AMHTQ7f4Hj2XLaWGVZy6nXXriNgfNw6TtQKZkfHYHdB3thrlltlHGqK9b8uwYCW8ouYQDeKFWqiftvy46WFa6%2FpAUH4cf0MbcuMXhSqtM2az%2BhUP7SgVZ80laovz5EN0DcgU72VT%2F0W8XOmQfh1UUtlUsZ4Sx%2F%2BPbrGBVeX0PvB7MuWzFVZRlJw%2FwmXLdE8IXDQVmFEJSordUCkGfLG4P2Cw%2BboYq06NcWea3V7KdEh2RW%2BxVCYbjrtcOW0FasytP5at1PsBfbtnfAJHqxHsQEx0L%2FuKQmXyKNrzDU48n0tNLbxrLZmHiQBbgg0%2Fugx604FkToeSKPiPoiRxjUz7p56WUXh7S7pvZQT%2B0w3RnS685AjQbDDn%2F7Mlz8Ca0bDk3rP%2FcgWeJ%2BLTE2Wl6CVHBFlwYycG9sn2HAy%2F49P%2FKbRd8ZMc8KjuxtH3pg6UgHH4jff9wHSA77IJcV4aPJ7YVtY7hURQHl37v9hq3zJjpGbIlbGy%2BXkAn8Xi0Y6N8YmjHDR7p00%2FCjUiRzscdTvUFjjELIpQwhsfXyQY6pgFMjbDGzkdwrYMKSsMOrt3divuSyV52AFqQ628Ije3XD%2FGTbUDdTvLpP6FQBp3A%2FTTEKtLd0scy4nHmjUciaZfhAZunbGI2SN8e3cvbwBKz6OMGArzDMXQN%2Fxaol7ak2fWsKrdroz51qaNolUoKJT8cBTdU4d3c5zfpEcecNuUQ15V71Piv5a8PTcVhZzbZ%2F1a4uPQUuNDtviLBumA9ZOGNOr4Un6Np&X-Amz-Signature=8307062560582169104aeab30fa806837157797a259346c1f4b51fae2fb4c121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKMUOAX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7kXL7Ty6eAa6HHiHEKBMno5vRLZdOZn8HDBnMcEw98AiBOwmdsftkcYEXsCBAUKJaDU6bQwK4lfk6oi05xka9dByqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbbLyse2q2iCdkBRzKtwDCr0f1CESe4xa9n6mnN7h%2Fm0Yh8maebWt2d9%2F4wp6H1DFjwpqLbt97gYkyKxVfWMckHGQNS8ggxwBUI894o1MiorYnyRxVU7AMHTQ7f4Hj2XLaWGVZy6nXXriNgfNw6TtQKZkfHYHdB3thrlltlHGqK9b8uwYCW8ouYQDeKFWqiftvy46WFa6%2FpAUH4cf0MbcuMXhSqtM2az%2BhUP7SgVZ80laovz5EN0DcgU72VT%2F0W8XOmQfh1UUtlUsZ4Sx%2F%2BPbrGBVeX0PvB7MuWzFVZRlJw%2FwmXLdE8IXDQVmFEJSordUCkGfLG4P2Cw%2BboYq06NcWea3V7KdEh2RW%2BxVCYbjrtcOW0FasytP5at1PsBfbtnfAJHqxHsQEx0L%2FuKQmXyKNrzDU48n0tNLbxrLZmHiQBbgg0%2Fugx604FkToeSKPiPoiRxjUz7p56WUXh7S7pvZQT%2B0w3RnS685AjQbDDn%2F7Mlz8Ca0bDk3rP%2FcgWeJ%2BLTE2Wl6CVHBFlwYycG9sn2HAy%2F49P%2FKbRd8ZMc8KjuxtH3pg6UgHH4jff9wHSA77IJcV4aPJ7YVtY7hURQHl37v9hq3zJjpGbIlbGy%2BXkAn8Xi0Y6N8YmjHDR7p00%2FCjUiRzscdTvUFjjELIpQwhsfXyQY6pgFMjbDGzkdwrYMKSsMOrt3divuSyV52AFqQ628Ije3XD%2FGTbUDdTvLpP6FQBp3A%2FTTEKtLd0scy4nHmjUciaZfhAZunbGI2SN8e3cvbwBKz6OMGArzDMXQN%2Fxaol7ak2fWsKrdroz51qaNolUoKJT8cBTdU4d3c5zfpEcecNuUQ15V71Piv5a8PTcVhZzbZ%2F1a4uPQUuNDtviLBumA9ZOGNOr4Un6Np&X-Amz-Signature=5cd3813a369e73f0508009ac72b29ff3ebda5c374b5eea0a32da1c4c9eb9b0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

