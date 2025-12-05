---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIPI2KN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCddO2WiLT2HFj96tiRwVmMLno6hbMDwQQfbtwLqr4cgQIgY4NJqayNaviaoNOOno44afTXZm2kkFgsUMAOnuQKEyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKEd4op0W51ckkMNrSrcAy5Aiu7DR5HOakEbGjmnArq03zPslKdyUI3ede20XNmCCH9J08mMDUKVh7hmWckumkW8xrkdSB8St6PRjf7xqJhuhSqRxcj8B6jCZ%2BduPeOlBflvqWJ%2BBYltLPOXbhwGrsONOWuKrV%2BbFFdPRG7B4zETthhqMRsBPbALhK1YSY%2FcmCPYFvK0TElrDcNeIuoVLGD9G0JdMV8HTc%2BiUopJTh53rMJMKnJGMQekf9aGyycR1wgsIckymyg6keda%2BUaxFfAOXjmO0BLSgtZ%2BDGKge4oDrLEr0gDx0dRy%2BsVXYkpXIDFCOEUqKUHlDiPPATUKZD5Ph4Ok4B6yDeYDk4sdwGwXs9wmX6r6YN4uZ2miXitIWg0nX4R5MFSXS6yQeBgi4E8ApwA%2F0xeqGoT8epXPPdccJG0ORsTVCgJTIQ456daCnBH6GmRTcoVxqpYaQLUpzlHYHpy8Cni%2BBoJx01mieteZqVo9Fst%2BEgBtTts5fDjalfVsrlCL1z1h9AHxp%2FYwSoqgLhotxX4YbIJVX5%2BjMvSZWMj6T%2BHCH9ERd7Mm%2BmQitRqbcBWXYZ71%2BLMo3SBZLjIQFnKA4v44N9tNn2920bxsceiLvWDOwp%2BoyQNrmq5LPOvWBq09o4NaNXVZMK7SyskGOqUBEnWNHU077Z5W2i2c2Rc4o%2FRIuJlQjTXBVist%2FsvlljzRhw00rzA4toeMcijcieDzVzqDKSoq0x4w1sRVOb7OO5GmSECV%2BrLJDfvGcJdRfZNPBWg6nTwbzcUUcvFsPhUkC%2FXicBtphzyuk5n2BbhRKhdHk1eAZwNB1mBbIaWyOULFKCRjlMq8zMVCEcFxiBhboTdcIYhY0CkhLLVd3TDpGlV8wyCJ&X-Amz-Signature=5ff288dadb9862d4b2a748d01484af343b4fec8116c64a534fc8f4923fc2aebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZIPI2KN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T124106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCddO2WiLT2HFj96tiRwVmMLno6hbMDwQQfbtwLqr4cgQIgY4NJqayNaviaoNOOno44afTXZm2kkFgsUMAOnuQKEyAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKEd4op0W51ckkMNrSrcAy5Aiu7DR5HOakEbGjmnArq03zPslKdyUI3ede20XNmCCH9J08mMDUKVh7hmWckumkW8xrkdSB8St6PRjf7xqJhuhSqRxcj8B6jCZ%2BduPeOlBflvqWJ%2BBYltLPOXbhwGrsONOWuKrV%2BbFFdPRG7B4zETthhqMRsBPbALhK1YSY%2FcmCPYFvK0TElrDcNeIuoVLGD9G0JdMV8HTc%2BiUopJTh53rMJMKnJGMQekf9aGyycR1wgsIckymyg6keda%2BUaxFfAOXjmO0BLSgtZ%2BDGKge4oDrLEr0gDx0dRy%2BsVXYkpXIDFCOEUqKUHlDiPPATUKZD5Ph4Ok4B6yDeYDk4sdwGwXs9wmX6r6YN4uZ2miXitIWg0nX4R5MFSXS6yQeBgi4E8ApwA%2F0xeqGoT8epXPPdccJG0ORsTVCgJTIQ456daCnBH6GmRTcoVxqpYaQLUpzlHYHpy8Cni%2BBoJx01mieteZqVo9Fst%2BEgBtTts5fDjalfVsrlCL1z1h9AHxp%2FYwSoqgLhotxX4YbIJVX5%2BjMvSZWMj6T%2BHCH9ERd7Mm%2BmQitRqbcBWXYZ71%2BLMo3SBZLjIQFnKA4v44N9tNn2920bxsceiLvWDOwp%2BoyQNrmq5LPOvWBq09o4NaNXVZMK7SyskGOqUBEnWNHU077Z5W2i2c2Rc4o%2FRIuJlQjTXBVist%2FsvlljzRhw00rzA4toeMcijcieDzVzqDKSoq0x4w1sRVOb7OO5GmSECV%2BrLJDfvGcJdRfZNPBWg6nTwbzcUUcvFsPhUkC%2FXicBtphzyuk5n2BbhRKhdHk1eAZwNB1mBbIaWyOULFKCRjlMq8zMVCEcFxiBhboTdcIYhY0CkhLLVd3TDpGlV8wyCJ&X-Amz-Signature=62a589700ecc59a6d69c3488fd0d230a1b4642e1ac623d9451180cd0ecada1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

