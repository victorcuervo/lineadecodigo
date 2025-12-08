---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD74BMDJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfkTUSDR334iegiSLPxFgnq3L7myKEBZPc%2FJLGXs3ehAiEA0faUlPtMBRuiF5XZKcti6XlVMfcXPvBPt9vU9yyA%2F1oqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdJmXW5wEZbpJDwISrcA3Nq1ZS5%2B1NtcKdn4tAPqg5mczOQCkT677WrwGLl4Xe1%2BLMjBFUlLyzPVOnvtR7TO%2BpiKvxFTCENP1fU%2FnJEizJSKVhm6%2FdI7avCJaxVlKJBtdqBEZAIBpp%2Fm3LW2ZSTH3eI%2FtuSwVh%2BtpicTiqC3SQWxJTKA4V9I%2BzNZlvs%2FAzjCE7w2quvXeJ9Y6TLaX60lkLEHA9s%2BgZb6dXxnROd60dHmCPgjjz2gt0abWUtYdtQ1P47%2FPZzYAjfYW8S0etBFWBy33%2Bov8fhXu2zfiow%2Fw53VtxoHCGu4%2BUT7h3wF%2FCQtc9h%2BvL4ZqytrQA15EEPyzFMlh8ZoEiziBepozAHSRxPYY8THQw6HqcoNa6F7t96bHxc%2F2svM2X82vfOlcKOTYzGkUCuOw26dOkqI2NNoD3qj8iNnYUTUoBv9cWm6oBYTPeEn4n5dcMnyTx3W748bOPmMECKvYDZ5mHvaaDClaRXX7iZLEIbJWY6nRaIvlI8eo1DsZcC4JCu26eFW%2BV2UmlbkmuPGnygoXr0Z3UL4BgSKB4Wxyp2sQIkAquT3rBRkXGI%2BUr0Nn3ZhKPRxtP3Q6HBHQ3Jt8F7%2FZX1CUt%2BzIADBKdst4dxP%2F6kt33i%2B70ylL%2B0fk%2Fbhq3CNtyhMMbk28kGOqUBl5q2S7BRF%2FQw%2FDTBo8f1M9Lmv%2FBVz6FA8wdjTxOL57fhpmIl6zr9KEPF7pHHzIyoV9FueFM65ELf4bDq27ehqZOb9CyFmq4NRw48OY4Z8ytwrmLVeGY7TUGEAH6SQmSWoLDOTWnAPQfm%2FDS5hbrO9TMnEodROSgK0J5%2FdDFNVTxIClvqweki1wNQsxVMO5TqJWsqV9%2FfTv%2BJGgDvFvDBJ5XkrTQt&X-Amz-Signature=89b423349f1985e9517fac1e261f0d6db8a14dde3dca666994a03e073e6cc12d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD74BMDJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfkTUSDR334iegiSLPxFgnq3L7myKEBZPc%2FJLGXs3ehAiEA0faUlPtMBRuiF5XZKcti6XlVMfcXPvBPt9vU9yyA%2F1oqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdJmXW5wEZbpJDwISrcA3Nq1ZS5%2B1NtcKdn4tAPqg5mczOQCkT677WrwGLl4Xe1%2BLMjBFUlLyzPVOnvtR7TO%2BpiKvxFTCENP1fU%2FnJEizJSKVhm6%2FdI7avCJaxVlKJBtdqBEZAIBpp%2Fm3LW2ZSTH3eI%2FtuSwVh%2BtpicTiqC3SQWxJTKA4V9I%2BzNZlvs%2FAzjCE7w2quvXeJ9Y6TLaX60lkLEHA9s%2BgZb6dXxnROd60dHmCPgjjz2gt0abWUtYdtQ1P47%2FPZzYAjfYW8S0etBFWBy33%2Bov8fhXu2zfiow%2Fw53VtxoHCGu4%2BUT7h3wF%2FCQtc9h%2BvL4ZqytrQA15EEPyzFMlh8ZoEiziBepozAHSRxPYY8THQw6HqcoNa6F7t96bHxc%2F2svM2X82vfOlcKOTYzGkUCuOw26dOkqI2NNoD3qj8iNnYUTUoBv9cWm6oBYTPeEn4n5dcMnyTx3W748bOPmMECKvYDZ5mHvaaDClaRXX7iZLEIbJWY6nRaIvlI8eo1DsZcC4JCu26eFW%2BV2UmlbkmuPGnygoXr0Z3UL4BgSKB4Wxyp2sQIkAquT3rBRkXGI%2BUr0Nn3ZhKPRxtP3Q6HBHQ3Jt8F7%2FZX1CUt%2BzIADBKdst4dxP%2F6kt33i%2B70ylL%2B0fk%2Fbhq3CNtyhMMbk28kGOqUBl5q2S7BRF%2FQw%2FDTBo8f1M9Lmv%2FBVz6FA8wdjTxOL57fhpmIl6zr9KEPF7pHHzIyoV9FueFM65ELf4bDq27ehqZOb9CyFmq4NRw48OY4Z8ytwrmLVeGY7TUGEAH6SQmSWoLDOTWnAPQfm%2FDS5hbrO9TMnEodROSgK0J5%2FdDFNVTxIClvqweki1wNQsxVMO5TqJWsqV9%2FfTv%2BJGgDvFvDBJ5XkrTQt&X-Amz-Signature=c0807034f5520fdae5614dbf79a3417bb56884925174619b37b3856fadc6ca69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

