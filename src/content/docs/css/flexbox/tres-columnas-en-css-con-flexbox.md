---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3NAE46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC16RDVLNzYdnMuDcjZUjnKinsNOvMiPrYmtgyEu6ytLQIhALpI42bPV2OEyb0mwNooQIIgB36Fe7%2FAI0r8FCP%2BTHYtKv8DCGYQABoMNjM3NDIzMTgzODA1IgyXB%2BbQogv3giq8CXwq3AOwx3nf0i5fp7X0374xFO6ez%2FvHCA5cYRfwmpTAnSp4Dg1ZrEn0wH93kpksrCWSXd8zfwHL9xRDcW125QCZR1v2qvQa8g0Qgly%2FCS4FfrdQIas6Yi%2BjyrUyade3K9iFZ9y2d%2Fx42AISxXSrmOasijTmboBcng7o4jaFDJDN3P4ZcZIX7v1jBu%2BqgZ8mdp%2FoltNtdmRJ1e4Bdnw6LrV2VKwqUokgScZwnkWTD3D9xUTxZlluoplvJ5fHyQY4sQtLiZZjclc8kUYWzJzKxv6ibIDaSl5pXvsgU9KyExpIDEucGG5F7M8h8PR7XbpnRRtZnvc%2FPwWcyXb09PbFplUKX52hm187bjPYT%2F0nfCFjDqyKltyfs%2BbpKIWe5bTBdBwKlfnCSf0Xzr7I4qGQ2lI%2BTFdfv5%2F64ubPuzXVFu73hwkQnN%2FAcaVbwy6UGI8JrSzp7YAQt8SAlnp5uKnvWOhfJKsBUbxzbbOQC1rw3QcyGmrLMr76iV52wuydI9vxq4ZIJHZkH6W1QjieXcaica%2F78k5cNPeDzm5uS7b5FyxHB83RBDeBAk3yl%2BNrnSvImkCZr4vhsBTDgv1JbhsVVeVZo8eGfM0KWVaUpbAn6nBpDP5p37LJJ4DvzsoDLifVRzCims3JBjqkAYd%2F5WkknafBTbo7t39XU35Zrhu%2FbpCfuTGr9vRyX96mtzW%2FShaLm0jFXpOlvXCVj15ZTU6R1wDcSBNKud3daxtuJQynFUaG3xM%2B3jUqNCsQCVRgH1n2L5L%2BHHqHhv9XnGZ%2FVOZ2sSiAkullZ8prx92LEToepWfZcW1yRbNNjFqm4TxQGQy1D6tAW%2FnO8No2IOGMPJ0GuM98nrqZLFscZGs2Gf8L&X-Amz-Signature=ba1b159822244aa30520c4a2aa48fd9df32435db4d7a0299df6a01226826b6b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B3NAE46%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T225553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC16RDVLNzYdnMuDcjZUjnKinsNOvMiPrYmtgyEu6ytLQIhALpI42bPV2OEyb0mwNooQIIgB36Fe7%2FAI0r8FCP%2BTHYtKv8DCGYQABoMNjM3NDIzMTgzODA1IgyXB%2BbQogv3giq8CXwq3AOwx3nf0i5fp7X0374xFO6ez%2FvHCA5cYRfwmpTAnSp4Dg1ZrEn0wH93kpksrCWSXd8zfwHL9xRDcW125QCZR1v2qvQa8g0Qgly%2FCS4FfrdQIas6Yi%2BjyrUyade3K9iFZ9y2d%2Fx42AISxXSrmOasijTmboBcng7o4jaFDJDN3P4ZcZIX7v1jBu%2BqgZ8mdp%2FoltNtdmRJ1e4Bdnw6LrV2VKwqUokgScZwnkWTD3D9xUTxZlluoplvJ5fHyQY4sQtLiZZjclc8kUYWzJzKxv6ibIDaSl5pXvsgU9KyExpIDEucGG5F7M8h8PR7XbpnRRtZnvc%2FPwWcyXb09PbFplUKX52hm187bjPYT%2F0nfCFjDqyKltyfs%2BbpKIWe5bTBdBwKlfnCSf0Xzr7I4qGQ2lI%2BTFdfv5%2F64ubPuzXVFu73hwkQnN%2FAcaVbwy6UGI8JrSzp7YAQt8SAlnp5uKnvWOhfJKsBUbxzbbOQC1rw3QcyGmrLMr76iV52wuydI9vxq4ZIJHZkH6W1QjieXcaica%2F78k5cNPeDzm5uS7b5FyxHB83RBDeBAk3yl%2BNrnSvImkCZr4vhsBTDgv1JbhsVVeVZo8eGfM0KWVaUpbAn6nBpDP5p37LJJ4DvzsoDLifVRzCims3JBjqkAYd%2F5WkknafBTbo7t39XU35Zrhu%2FbpCfuTGr9vRyX96mtzW%2FShaLm0jFXpOlvXCVj15ZTU6R1wDcSBNKud3daxtuJQynFUaG3xM%2B3jUqNCsQCVRgH1n2L5L%2BHHqHhv9XnGZ%2FVOZ2sSiAkullZ8prx92LEToepWfZcW1yRbNNjFqm4TxQGQy1D6tAW%2FnO8No2IOGMPJ0GuM98nrqZLFscZGs2Gf8L&X-Amz-Signature=e452e2cc71b30748c37b68f832a88d5160abad43a5bb174e4035befec4fa8362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

