---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YW7UWZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCed8em6vxlyFMOXQ1bfmTPmuIoLqRTc6zXdfGpuK6g3gIhAKFozBF7N04GOhYkQ8uQWp%2BPs9Odj8Ew6v54n87h%2B%2F%2F4KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCJaTpbL7t79XmBbAq3AOSSkFdjA4pLlg536ue2Ad4AQVgpPW2nC6R2HcHbOAwj7CBX2DXuaTovUD8WttTz5S0t5ynYC6I%2Fg2Gxv9s5dL5ORNGKQN2c0uIG8th03Wn2Wp%2BuH1pz3Dlabn8Mtuta1863OLsT3hkg%2FTfMinJZCkTd7z4vlJkh0vYQnHWiw8K8YXPWjmHXroHY8SRQ7ZDf7zCX4FyuTfcwtI5VkN659LLTmR0w2E1gReLaGKRYDMNEZPVeK8kx5FjBH%2B4YCaRyUiC5xg%2BiLIfxxgiLxPaJSqwQry65blbJVeFPvjMnSd9qfijzgezwR8HTw4oqnGxb4o3Go0yF%2BSjgVsolS%2BhAs4ZaDzGbKZZprKL27shhWWlfxl4EDXoYOklwltwW0UVyR6QsVaoEzaSWSYxjE4kXr6XPdU7rG2XN1zWv%2FJxmRosTtH5vVwCFJPTOjW72OhVa5zktUNTIO1JLzuFYUBjzFaBeq3xMBumsfAXUEXyQiH0LUZ1uzSnngucxtqGUaJ9U5bXZjOAH0QfVlqIOObctSHYrQ00l5bPNvkRTfa9fgRgPwI5V9O%2FeTWtXNXO26FpTqRFVP%2B5MeoRKYSEL8QpP63ryN17P1xWNjxRx%2BPZM8lNWZPTobm4j99LH81h9jD%2F8trJBjqkAVTkRXacf9HUDvXcI9ZIHQ1zORd4FpATDHaa06wCcgP%2FurcfNCXHU6fswAGNwUzJgAtqHhGRQwqg0UNUu7ykMoiuSkNjlX0tMNy2hvxWMaRUB1dftPFS5uH7B4U9qCfdbimAtQjG9C5NnFNJl9qPQ%2F4snsDfro8JidAxwsSVBWWAXrqB19cfHV3wTpjZFRTdXyHRAvplcGdNiTIPxJCckAvBEkza&X-Amz-Signature=0b3de5c33b1c9f3a5a2e2df28fbcb6ba75c2dfb69c6a41b69159d0c5e3f0739a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YW7UWZO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCed8em6vxlyFMOXQ1bfmTPmuIoLqRTc6zXdfGpuK6g3gIhAKFozBF7N04GOhYkQ8uQWp%2BPs9Odj8Ew6v54n87h%2B%2F%2F4KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCJaTpbL7t79XmBbAq3AOSSkFdjA4pLlg536ue2Ad4AQVgpPW2nC6R2HcHbOAwj7CBX2DXuaTovUD8WttTz5S0t5ynYC6I%2Fg2Gxv9s5dL5ORNGKQN2c0uIG8th03Wn2Wp%2BuH1pz3Dlabn8Mtuta1863OLsT3hkg%2FTfMinJZCkTd7z4vlJkh0vYQnHWiw8K8YXPWjmHXroHY8SRQ7ZDf7zCX4FyuTfcwtI5VkN659LLTmR0w2E1gReLaGKRYDMNEZPVeK8kx5FjBH%2B4YCaRyUiC5xg%2BiLIfxxgiLxPaJSqwQry65blbJVeFPvjMnSd9qfijzgezwR8HTw4oqnGxb4o3Go0yF%2BSjgVsolS%2BhAs4ZaDzGbKZZprKL27shhWWlfxl4EDXoYOklwltwW0UVyR6QsVaoEzaSWSYxjE4kXr6XPdU7rG2XN1zWv%2FJxmRosTtH5vVwCFJPTOjW72OhVa5zktUNTIO1JLzuFYUBjzFaBeq3xMBumsfAXUEXyQiH0LUZ1uzSnngucxtqGUaJ9U5bXZjOAH0QfVlqIOObctSHYrQ00l5bPNvkRTfa9fgRgPwI5V9O%2FeTWtXNXO26FpTqRFVP%2B5MeoRKYSEL8QpP63ryN17P1xWNjxRx%2BPZM8lNWZPTobm4j99LH81h9jD%2F8trJBjqkAVTkRXacf9HUDvXcI9ZIHQ1zORd4FpATDHaa06wCcgP%2FurcfNCXHU6fswAGNwUzJgAtqHhGRQwqg0UNUu7ykMoiuSkNjlX0tMNy2hvxWMaRUB1dftPFS5uH7B4U9qCfdbimAtQjG9C5NnFNJl9qPQ%2F4snsDfro8JidAxwsSVBWWAXrqB19cfHV3wTpjZFRTdXyHRAvplcGdNiTIPxJCckAvBEkza&X-Amz-Signature=d80e3051c0057c98b2916696979f7b9aed60b5d7c2ef127aa8f8087b920c7806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

