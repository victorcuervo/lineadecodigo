---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOASBK4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgcIPl%2Bp2cZ%2BP37CM4NuovtT8PYrCQw%2Fd%2FiFV4LxSogIgMqcekd1cfDs5%2Fe9dHcufCcO5kKDEezKUliWfKuZTURIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz7Erzb%2BWC3Dw9gRSrcA%2FMyYbm3YqjCCddhhz0Ls4YPK2Fn92YCNMH%2BLmvfyEEAV9wBpU78nUo7j6tfqTQHLdqGlSEZLEL9T%2BS8qFu%2FDV8Y%2FbSurrf5Tc4xE6LzT4DPdMJLwnpKmnMeA36gvaPursx9HvNZEHgLc%2FMN4mcrFNyDj51v3NysZJTsQWnArn1%2Bl1M4ffa8PDfLNt87I7tIT9RqBVsD1JaEqxVDoGUACxrrPfSuYpn%2FLHVqco7csB8GjpcrS1Caknt2BxZOGDofZXPb3xjtOn9q7qk8Peb83Z3JNEAbQVl0htToAjpsJfANMPCH1Nt9rRq0ZP6lXXimCtNhLxsAdktVVKmfQxwCDGMy1W96Vq%2FSOdjXyUaS7THsHsfNh29ke0L4buV%2Bn9MTnvHkmAJpAy18Nk35I%2FsOGzjhosh5o7ThiJ2LfSflfgoegLKiumf6xE8Lqk%2BTWFAhPwwkF7h7Izt3Jl%2FlJjFouItLskiBHa0xjA1uE7M9d2y1jJMwTPDuwBedyIzlflHMmsvazKjWdoX%2FL8Pcrcl5jJExQbOOilH7kGOl4toHH5aHVUGdWRkZCV1FxH6n3KNTu1nS7lwExkqQPMNf5O%2F%2BdErhM7xAlFZJNz6%2BRowfCnZiw01W1AIoLUQFl8XOMMeZ1ckGOqUBbPclzLhYcVruwRgkDyM2qO%2BEDUr5m5HgFT28nvZADt40dA%2B6rvcO9olvW0VIYSGqFMngLtWK1EPv9bFimGtVfMr65f4%2FdHKS1fok93gCIGHzGejKdIJZi1Nf68zOwLxQeK4WJm8%2B2QRr%2BSvMGhd5CzoJBN40gvUSSvuQTlHCHwnwRZ5fN3MvadEqzAS4cI8qVasTaaUpBqQ4o7g05FcDCnboe%2Fzz&X-Amz-Signature=a63bd52005a2a879d15728b4373fb021ad5998eb70aa638e4b04b1f259bcddd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOASBK4O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgcIPl%2Bp2cZ%2BP37CM4NuovtT8PYrCQw%2Fd%2FiFV4LxSogIgMqcekd1cfDs5%2Fe9dHcufCcO5kKDEezKUliWfKuZTURIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNz7Erzb%2BWC3Dw9gRSrcA%2FMyYbm3YqjCCddhhz0Ls4YPK2Fn92YCNMH%2BLmvfyEEAV9wBpU78nUo7j6tfqTQHLdqGlSEZLEL9T%2BS8qFu%2FDV8Y%2FbSurrf5Tc4xE6LzT4DPdMJLwnpKmnMeA36gvaPursx9HvNZEHgLc%2FMN4mcrFNyDj51v3NysZJTsQWnArn1%2Bl1M4ffa8PDfLNt87I7tIT9RqBVsD1JaEqxVDoGUACxrrPfSuYpn%2FLHVqco7csB8GjpcrS1Caknt2BxZOGDofZXPb3xjtOn9q7qk8Peb83Z3JNEAbQVl0htToAjpsJfANMPCH1Nt9rRq0ZP6lXXimCtNhLxsAdktVVKmfQxwCDGMy1W96Vq%2FSOdjXyUaS7THsHsfNh29ke0L4buV%2Bn9MTnvHkmAJpAy18Nk35I%2FsOGzjhosh5o7ThiJ2LfSflfgoegLKiumf6xE8Lqk%2BTWFAhPwwkF7h7Izt3Jl%2FlJjFouItLskiBHa0xjA1uE7M9d2y1jJMwTPDuwBedyIzlflHMmsvazKjWdoX%2FL8Pcrcl5jJExQbOOilH7kGOl4toHH5aHVUGdWRkZCV1FxH6n3KNTu1nS7lwExkqQPMNf5O%2F%2BdErhM7xAlFZJNz6%2BRowfCnZiw01W1AIoLUQFl8XOMMeZ1ckGOqUBbPclzLhYcVruwRgkDyM2qO%2BEDUr5m5HgFT28nvZADt40dA%2B6rvcO9olvW0VIYSGqFMngLtWK1EPv9bFimGtVfMr65f4%2FdHKS1fok93gCIGHzGejKdIJZi1Nf68zOwLxQeK4WJm8%2B2QRr%2BSvMGhd5CzoJBN40gvUSSvuQTlHCHwnwRZ5fN3MvadEqzAS4cI8qVasTaaUpBqQ4o7g05FcDCnboe%2Fzz&X-Amz-Signature=4e486061581a5847aaf0f62776c7b3da5bf7856d888a1107380e105b85870ac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

