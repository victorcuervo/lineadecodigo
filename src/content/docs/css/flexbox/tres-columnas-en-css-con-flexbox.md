---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3OUA33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbS2Tqx8TwvBYtj78oF%2FRhv2zpIxUZLk6EnZFoQAYGAIgcCJ0OY3KNepDd2hosJDj6WANrymakA92boaW%2F8qVOLYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5hq6IwyL3Y9LXCuircA4rRqFsvpqzNE%2F%2FvwPQFngOUcpyde4qwb3xvIs%2BQH6cqii2F3EvxyHUBHgCFmWqnbD6uDmWVJ06ybmJ0oKHQLrHz390UogWxxJQEVfUCFv9RFrmwrG7aOpXHPXLjmcOYJy%2BLOBaVY1xDxsXXwXf4dHhJGetUiTY3lk35Oq7YM4ZfYerHWjRK9%2FgpS5Nn7VQZdlh31xraRVLf1%2BtV98Rz3hQUe0XhTJ%2FSazcBEDzZUXv1p%2FNSEQlwvQM0m1vHHUnBp5%2BIyBpDZbpAdaDR%2FTvuF2KloRG5zDMlhbkMbSI05%2FzgxlvBI%2FrBIuv0lClZPjeHBKPn7BEd1jIwqh%2BEZ9ceOAWRIFA%2FPCbjceFAJkYL7qgva5KxQf%2B2wNlSGVHO29Wspp55kn84CGhbJd1pRy5ur2le%2F%2Fi%2Bjf%2B0BZPYRdHcyNY8NE7idqw8%2Fe1GxAafx28nS5RZ5K2LsxzgcL8TD18BulxRSubzsRYCXFoLmjNsOix74vEUYW8gkOx4tDyXgT28Ys7naoWM9JNSz2FTyQ3OCy0sGDF1PcXSdj6SAFHUlR%2FhVXSDEdmyCCjaEqwavYwk4q6DNPsbWlG7yM3teWOBUz3Xo8KrvpBCKGu3XnxDGlWMQXrFOpFu9ptLsx7IMNOZ1ckGOqUBOp6elogiSTTUY0lrx1xss9R%2F0P%2FLFAWItxLyEGD3vwO1x1d0u9qrYwdmQA1hpnrCZ8V94A34fcMa774e9stxAGmGD%2F3is1drTaaHGBZjYdvCVBdJa4t05MT1Riqc%2BEs9anpp2lqvPgMiJthr1eGkOPeyUlQYHqWbe%2FkRl7oQZ20vZqC7dC2Nn33kUsNj24CupsjgFHSqfEE4jVWc3ldiqW8p7nfO&X-Amz-Signature=0bb45a68140d6a1aabe743b627b3f8042bb1588581cf1f429152733d8d476716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN3OUA33%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCcbS2Tqx8TwvBYtj78oF%2FRhv2zpIxUZLk6EnZFoQAYGAIgcCJ0OY3KNepDd2hosJDj6WANrymakA92boaW%2F8qVOLYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5hq6IwyL3Y9LXCuircA4rRqFsvpqzNE%2F%2FvwPQFngOUcpyde4qwb3xvIs%2BQH6cqii2F3EvxyHUBHgCFmWqnbD6uDmWVJ06ybmJ0oKHQLrHz390UogWxxJQEVfUCFv9RFrmwrG7aOpXHPXLjmcOYJy%2BLOBaVY1xDxsXXwXf4dHhJGetUiTY3lk35Oq7YM4ZfYerHWjRK9%2FgpS5Nn7VQZdlh31xraRVLf1%2BtV98Rz3hQUe0XhTJ%2FSazcBEDzZUXv1p%2FNSEQlwvQM0m1vHHUnBp5%2BIyBpDZbpAdaDR%2FTvuF2KloRG5zDMlhbkMbSI05%2FzgxlvBI%2FrBIuv0lClZPjeHBKPn7BEd1jIwqh%2BEZ9ceOAWRIFA%2FPCbjceFAJkYL7qgva5KxQf%2B2wNlSGVHO29Wspp55kn84CGhbJd1pRy5ur2le%2F%2Fi%2Bjf%2B0BZPYRdHcyNY8NE7idqw8%2Fe1GxAafx28nS5RZ5K2LsxzgcL8TD18BulxRSubzsRYCXFoLmjNsOix74vEUYW8gkOx4tDyXgT28Ys7naoWM9JNSz2FTyQ3OCy0sGDF1PcXSdj6SAFHUlR%2FhVXSDEdmyCCjaEqwavYwk4q6DNPsbWlG7yM3teWOBUz3Xo8KrvpBCKGu3XnxDGlWMQXrFOpFu9ptLsx7IMNOZ1ckGOqUBOp6elogiSTTUY0lrx1xss9R%2F0P%2FLFAWItxLyEGD3vwO1x1d0u9qrYwdmQA1hpnrCZ8V94A34fcMa774e9stxAGmGD%2F3is1drTaaHGBZjYdvCVBdJa4t05MT1Riqc%2BEs9anpp2lqvPgMiJthr1eGkOPeyUlQYHqWbe%2FkRl7oQZ20vZqC7dC2Nn33kUsNj24CupsjgFHSqfEE4jVWc3ldiqW8p7nfO&X-Amz-Signature=9a0d90b7b34bf9381475b682ac187e23a351bcabbe75df88ad32398787a22e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

