---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZGWCZP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHXuHtn54ktzw2rP5O3wqX%2FKwoSTqtWG6yXWbLgrtivAiEAhxQza8gKUrhBArAW1Mjs%2BowuG%2FetzcOQmGRjRRZm%2Bc0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8vDPoOvHgt%2FBTlircA1y51yKQOu3ihgdcE%2FtA50u6R1sFyRLfFYe%2FIeWrRHHuDraPXajT0O2yO0SdAoEiKHshTMvSEiqzw84G2O9Q0WYX1RNdKgejJMHGZKbihhIsNLPOUEhKHUpq4brBR0oy0amV8YJisZ%2F60ax1AulIush1vSKpNp6yvYVNVkWaGLpyJUMP0%2F7iUPcHP9D6I9Os0jx6RTP8qplmJ3XpfJ9NK7vZEAark%2FoY%2BBs42Lcr0F%2BkEf4QKCp4esEqoZwrSdfbkhv%2B6QFplsT%2FJSJVTJE7mF%2B2KfFYVZgJwn80MQsKAdwYhaC2lqAxVDn8HDk2N1%2BJ6BOI47ZwBX8l6Uo63TWPMs5mY0FEEHJA2q9RavEjF%2FtpUaH1TcrjiM%2BvUsG0i6kUeCdyRb0LwuQTJT4gigo2n9P05J5972PIbwmetI3KtKqokBLGAyAMcp8xEgj3cZf9j8NLRGNP6tCOXppUrYX4TLUu5S3Ps02Uri9WYg8BhFCnXP61IuLPUVJ6O1mocG2OCSE2rNh52Pgxq0WYmnY5UGD8hOwCw2fxJOv6Han%2FYY6tjRywQecAgjFI0iiATRK4%2Bgsv44BDwrC1jj%2BtOefMugBZcGMuLiEwSx%2F%2FWKKbUjwJNQtBLnOvVZEAwzWfMM%2B81skGOqUBfNP9NpLJLD06YNMFQL1%2B%2BdSQWO5CXr2sisPoc31O0aS51spXGi8IKft3%2BJa8WsyhSLuVwdXJ62%2BEs33Q1oA1t4FAMDkXNbvu9ULRMCWmt5jzK2UBvyNhfKRlFhX2%2FrqU7eVzZHesYwhnQfsN16qv7pcXzN4rXZYahmIQ8bfW%2FPspGbX7X8b0pR%2BdyX1Lku8AVqUB%2FZFiBRISkloM58%2BzZETtoZAH&X-Amz-Signature=77cf154d22f0f7150cdbb0d288ce7491954a4918f2237ff50e3f8834ae38f12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664ZGWCZP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHXuHtn54ktzw2rP5O3wqX%2FKwoSTqtWG6yXWbLgrtivAiEAhxQza8gKUrhBArAW1Mjs%2BowuG%2FetzcOQmGRjRRZm%2Bc0qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIp8vDPoOvHgt%2FBTlircA1y51yKQOu3ihgdcE%2FtA50u6R1sFyRLfFYe%2FIeWrRHHuDraPXajT0O2yO0SdAoEiKHshTMvSEiqzw84G2O9Q0WYX1RNdKgejJMHGZKbihhIsNLPOUEhKHUpq4brBR0oy0amV8YJisZ%2F60ax1AulIush1vSKpNp6yvYVNVkWaGLpyJUMP0%2F7iUPcHP9D6I9Os0jx6RTP8qplmJ3XpfJ9NK7vZEAark%2FoY%2BBs42Lcr0F%2BkEf4QKCp4esEqoZwrSdfbkhv%2B6QFplsT%2FJSJVTJE7mF%2B2KfFYVZgJwn80MQsKAdwYhaC2lqAxVDn8HDk2N1%2BJ6BOI47ZwBX8l6Uo63TWPMs5mY0FEEHJA2q9RavEjF%2FtpUaH1TcrjiM%2BvUsG0i6kUeCdyRb0LwuQTJT4gigo2n9P05J5972PIbwmetI3KtKqokBLGAyAMcp8xEgj3cZf9j8NLRGNP6tCOXppUrYX4TLUu5S3Ps02Uri9WYg8BhFCnXP61IuLPUVJ6O1mocG2OCSE2rNh52Pgxq0WYmnY5UGD8hOwCw2fxJOv6Han%2FYY6tjRywQecAgjFI0iiATRK4%2Bgsv44BDwrC1jj%2BtOefMugBZcGMuLiEwSx%2F%2FWKKbUjwJNQtBLnOvVZEAwzWfMM%2B81skGOqUBfNP9NpLJLD06YNMFQL1%2B%2BdSQWO5CXr2sisPoc31O0aS51spXGi8IKft3%2BJa8WsyhSLuVwdXJ62%2BEs33Q1oA1t4FAMDkXNbvu9ULRMCWmt5jzK2UBvyNhfKRlFhX2%2FrqU7eVzZHesYwhnQfsN16qv7pcXzN4rXZYahmIQ8bfW%2FPspGbX7X8b0pR%2BdyX1Lku8AVqUB%2FZFiBRISkloM58%2BzZETtoZAH&X-Amz-Signature=560783d40c4fb94b4b81655c71ecd6e68101c1b895de7f0dd05d2159dfb7f43a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

