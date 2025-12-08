---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROJNITJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0GvX1ZK5bf6kPLoHvhbZhJ9gEWa2X1gX1lT7eXHVKwIgTPhpFFpi9d1deS4CwZwmTg5iLi1cQXILhdKddFnHg3gqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUM2wWZxnmKst4D8ircA8Th8tHS11%2B7%2B9zicG4Nng%2FxZTdXPSQtmds82XgH%2FL4vvHgDQ4EuyNXmm2vvi%2FpolyFoV80goBi2MtTSsdMVhkwsdlcYYjmUb1GhawV9%2FqdCADi3WK1gPwLYAR0zJ5K3QD7V117th7B1MGr514Qikzqf9%2Bjm%2BdKhHbqcOly94k1OxzT%2BdhzPeDZZbmrf7CrVhSNoTXfJE350lbgvKWQ%2Fs%2Bd81hWJM6eJSdM5QvQA3iBS%2B82vswwJdvUQgfUoaChY6Wvsp%2BKMBrp0%2BSwkaPiMG%2BXaENMpCbDk1GxXN8GjkLwJWrp1JhiT1lSYVqPBLMv1LyGQuN8z39GYT9xOH1rPCHbqHKL56Co04wR2A9qF33pA4qtpTbQJW1OVfNgda3xu804m7U9psg4q360hJZCMF5gcIQPNh0%2FJSWTBndkropJ7tpSWRU%2F3PF37JTbFhz1DNAxpj7p4DucqCnBqWQddXJ%2F4dWwguKx6KzS9xMPb6lLslWwiLmud1PT6aQcpqNakDIva0bTILleut0iwVcv5YuVzHfLfS4LwxPfZKKXP5LiKjdN7Hdt0ICl31xYaSrGbM3HVpV66K%2Fs7JYT%2BTcXWcxc307CgigdlJluz568wycEoYIp8Z5Nj2I%2F5TDnEMP%2Ft2ckGOqUBXplRZ3SmpPoVqH1UF8eVHMbD16S9fgxC46LevmZ6kZ%2BH0LOz1Nv%2FySKjdM7dmdkCol8DRUpk5Sq3H%2FWfNaj2cRZ03RI5MugmbsjIPN6nPbT%2BjsdzjBSgpzsyGpkgvoRzLPSfXPfMlEMjLyF8Ifln7h6ELvAY29RYHYxcdpAErDqv31BMbXZ%2BXgM0AWIqZUV2FY6w8kqJX1tZ0DP6LWriENYK16nw&X-Amz-Signature=a2493e632024fe0294b8a73b11d047d3857bbb7050cdf237c64e7abe65f73fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ROJNITJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDP0GvX1ZK5bf6kPLoHvhbZhJ9gEWa2X1gX1lT7eXHVKwIgTPhpFFpi9d1deS4CwZwmTg5iLi1cQXILhdKddFnHg3gqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUM2wWZxnmKst4D8ircA8Th8tHS11%2B7%2B9zicG4Nng%2FxZTdXPSQtmds82XgH%2FL4vvHgDQ4EuyNXmm2vvi%2FpolyFoV80goBi2MtTSsdMVhkwsdlcYYjmUb1GhawV9%2FqdCADi3WK1gPwLYAR0zJ5K3QD7V117th7B1MGr514Qikzqf9%2Bjm%2BdKhHbqcOly94k1OxzT%2BdhzPeDZZbmrf7CrVhSNoTXfJE350lbgvKWQ%2Fs%2Bd81hWJM6eJSdM5QvQA3iBS%2B82vswwJdvUQgfUoaChY6Wvsp%2BKMBrp0%2BSwkaPiMG%2BXaENMpCbDk1GxXN8GjkLwJWrp1JhiT1lSYVqPBLMv1LyGQuN8z39GYT9xOH1rPCHbqHKL56Co04wR2A9qF33pA4qtpTbQJW1OVfNgda3xu804m7U9psg4q360hJZCMF5gcIQPNh0%2FJSWTBndkropJ7tpSWRU%2F3PF37JTbFhz1DNAxpj7p4DucqCnBqWQddXJ%2F4dWwguKx6KzS9xMPb6lLslWwiLmud1PT6aQcpqNakDIva0bTILleut0iwVcv5YuVzHfLfS4LwxPfZKKXP5LiKjdN7Hdt0ICl31xYaSrGbM3HVpV66K%2Fs7JYT%2BTcXWcxc307CgigdlJluz568wycEoYIp8Z5Nj2I%2F5TDnEMP%2Ft2ckGOqUBXplRZ3SmpPoVqH1UF8eVHMbD16S9fgxC46LevmZ6kZ%2BH0LOz1Nv%2FySKjdM7dmdkCol8DRUpk5Sq3H%2FWfNaj2cRZ03RI5MugmbsjIPN6nPbT%2BjsdzjBSgpzsyGpkgvoRzLPSfXPfMlEMjLyF8Ifln7h6ELvAY29RYHYxcdpAErDqv31BMbXZ%2BXgM0AWIqZUV2FY6w8kqJX1tZ0DP6LWriENYK16nw&X-Amz-Signature=478cd1e3e95b4dd8fffefb058efe98d242e2dcbe1b3a0610f227326fb6941c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

