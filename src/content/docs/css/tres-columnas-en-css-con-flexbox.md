---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72X5SB7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQClEpT4lxuqOyeLKNYe%2FZ8Ad8zpH00w1nD5OHowOkKBVgIhANW7lNIpw40GIVa%2FoslY5i%2Fls70SIjwItcC8Q5%2Fqxs%2BcKv8DCDcQABoMNjM3NDIzMTgzODA1IgwG%2FcruOSe%2FlYjcFyUq3ANmK0jbv1kBgPqlRdBheWMqTTBEedZioB2e2jSienzHhZe28JsWmY2c76N2ARFnuWb0GqE%2BXPZgzNqFfaDmjjn5Rdrj9KIaRipJeUqUU1A72xLG6Y%2FHoq0lYK5FjeToJL4UoZidwPpMpPdYjZN3SGOIs%2BMtZWt07ag1ETh2vQ3PgyEh1uw3htSutAyXsIUETHGug%2FXo2TGi4Nva33mK%2BcT5RjAaeaNPASLEsvLDWLaVNZWIQ12rTZLf%2B6WJpV9ls55fjU39hALvKRSkkdWlhPZfu8jxgndr3521G248fEk3Rwn%2F05S2qXZuZBVWaVbNbnNotA8MrfyQA%2FgAt968n6cMxVbHqYi8NZ5iyEK0Hpue4IJkkUvaD2jzV0eQyiOvlrTK14V4oXUzYzD4JYmpfHHQs9AIjzMnclehoEFwmDY7LYW4GHJ6eiKf10%2Bes1RpMbpdM4AM3wn8s0tUfRelUuE5RXGJseuosZeaRo1KeLjCg6Ay1BSfsTLORwGu7qNlv%2BH00NiVLpB6ayR5jjIc%2F3jn333CS339%2FjqTbPLRqeuIPeVXEoGkKkyCntxFdKMKBnPF7V%2FdW66C%2FEZtdPqizCNmmaJd4OcqmtePrjVJz4zF2F2savABuBZX%2F80YyDCS3cLJBjqkAWsIP2tcey41IQbeSLT7iFd7kzyuInqLbw%2FPTjkq86s0jsOQcpry42fdrlCS9RYjXx6soGb1a0E0hEz67OqqkSAPHdepzlxAks%2BVq1rQH%2Ffrhlvyx7xNLocy9YqhL53dx9R5JMN0M8vyLA%2BXdI6dzV%2BpQlpnM817GXaTVpM4Hxzx50b4Q3FD6qpCc1JIhtuLLOHxSa0v7I2RXvoNipPjQv9H5XAx&X-Amz-Signature=bdc3f4cdffd74b8b57dccf263ffa607c8c2802ff69acfda6b46339d140d96087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V72X5SB7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQClEpT4lxuqOyeLKNYe%2FZ8Ad8zpH00w1nD5OHowOkKBVgIhANW7lNIpw40GIVa%2FoslY5i%2Fls70SIjwItcC8Q5%2Fqxs%2BcKv8DCDcQABoMNjM3NDIzMTgzODA1IgwG%2FcruOSe%2FlYjcFyUq3ANmK0jbv1kBgPqlRdBheWMqTTBEedZioB2e2jSienzHhZe28JsWmY2c76N2ARFnuWb0GqE%2BXPZgzNqFfaDmjjn5Rdrj9KIaRipJeUqUU1A72xLG6Y%2FHoq0lYK5FjeToJL4UoZidwPpMpPdYjZN3SGOIs%2BMtZWt07ag1ETh2vQ3PgyEh1uw3htSutAyXsIUETHGug%2FXo2TGi4Nva33mK%2BcT5RjAaeaNPASLEsvLDWLaVNZWIQ12rTZLf%2B6WJpV9ls55fjU39hALvKRSkkdWlhPZfu8jxgndr3521G248fEk3Rwn%2F05S2qXZuZBVWaVbNbnNotA8MrfyQA%2FgAt968n6cMxVbHqYi8NZ5iyEK0Hpue4IJkkUvaD2jzV0eQyiOvlrTK14V4oXUzYzD4JYmpfHHQs9AIjzMnclehoEFwmDY7LYW4GHJ6eiKf10%2Bes1RpMbpdM4AM3wn8s0tUfRelUuE5RXGJseuosZeaRo1KeLjCg6Ay1BSfsTLORwGu7qNlv%2BH00NiVLpB6ayR5jjIc%2F3jn333CS339%2FjqTbPLRqeuIPeVXEoGkKkyCntxFdKMKBnPF7V%2FdW66C%2FEZtdPqizCNmmaJd4OcqmtePrjVJz4zF2F2savABuBZX%2F80YyDCS3cLJBjqkAWsIP2tcey41IQbeSLT7iFd7kzyuInqLbw%2FPTjkq86s0jsOQcpry42fdrlCS9RYjXx6soGb1a0E0hEz67OqqkSAPHdepzlxAks%2BVq1rQH%2Ffrhlvyx7xNLocy9YqhL53dx9R5JMN0M8vyLA%2BXdI6dzV%2BpQlpnM817GXaTVpM4Hxzx50b4Q3FD6qpCc1JIhtuLLOHxSa0v7I2RXvoNipPjQv9H5XAx&X-Amz-Signature=25060f95bb95038b39d35d7c9f00263698dc612ed00432d446e59c5ec84237d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

