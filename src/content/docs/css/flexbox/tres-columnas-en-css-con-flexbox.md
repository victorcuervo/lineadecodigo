---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTWCY2L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDJcPc4bGblSyLvlaUFfWhOAbvgM%2BBAnNZqTlv0U%2BRIGAiEAiRKM1YOzUv2g5ueLZGmp2oqOAVd%2FaiJOfLsLUwFZNHMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB%2FbSBuLmNvEBx2vJircA0%2FtlxoOHbxP041CbNfGUuhc4UrGWXVxfpS3q1R4qkvtoxoZ2ahFx8%2Flr1b1wHQ4i12KQUYpyS1beKeAz%2FypLvYR6pRkGMQ8123bFiFD71cZ6wWPjziHpskGENg14M6ncYlDOyul3rGkn3trVfnE6q%2Bxwx9A1ZtdtIB%2BfF56A5op8Nb3r6AKpR1ut9gyTYs8hSIKhhDGeLKA3rHGs6tBpF0FgUCszWciNHz9vLVUQeC5Wwk5ChVlcmcjcnvr3H3qSaFyFiFbQvx%2F28FUxye7IaD8vOQjRieCMMr9UEgyvymvYFpdvFqkm0OJXLaqE1TUwSxMe8uSqsC9GZ%2BQemNHYybemR%2Bjt0F311JhMOUggVmVOb%2F1w%2FZgCibuhUJi0WuClZl3fQLc6NSONAl5C7Szu35dJ9gUQa%2FnXVqANpvbdb7ZiLbEPlxS4lyPmK3ITJUcykbKZxniIzGdMpA4n%2B28d8jRlLRQIycndgOGPSvpjennOzD%2B4MNcfTid90Ajj%2BkLKLTkakS3qifhswc6OFasx7LDWIi%2BNQQijx7hWtC09qpW74igHg3AzAPLoD987TEriFv4Fapns2t9Ry4z8JoWztumMv2yXOIZd7h59ovT6hQGJJN50cJ1PSRpzSnyMIHnxckGOqUB7CkHRamqrtI1gMzdVwohVW241JJEdX%2B7Iaac%2Ft2DB%2Bfr8EK%2Fy1lDxdOo8FVQKzEN94aR62mDeWGFd5UjMtZRMmuK6zoCRlfAMUIkI9060B5JHcGQrJfq%2FatR9DNcuIvcam06PikdiUwCBE1A3xz%2F5xFuaYqB6mJoFs4%2FrYdABNAsB6ZErIyb8HJJw5H7x8ByrFdKp7%2F3XxjM5PxMVmJMYB2SaSdP&X-Amz-Signature=880c3e8e930f3dbbc8d669d3f7244ef5edb43995c3566ad3715bb51bb4eb608a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWTWCY2L%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIDJcPc4bGblSyLvlaUFfWhOAbvgM%2BBAnNZqTlv0U%2BRIGAiEAiRKM1YOzUv2g5ueLZGmp2oqOAVd%2FaiJOfLsLUwFZNHMq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDB%2FbSBuLmNvEBx2vJircA0%2FtlxoOHbxP041CbNfGUuhc4UrGWXVxfpS3q1R4qkvtoxoZ2ahFx8%2Flr1b1wHQ4i12KQUYpyS1beKeAz%2FypLvYR6pRkGMQ8123bFiFD71cZ6wWPjziHpskGENg14M6ncYlDOyul3rGkn3trVfnE6q%2Bxwx9A1ZtdtIB%2BfF56A5op8Nb3r6AKpR1ut9gyTYs8hSIKhhDGeLKA3rHGs6tBpF0FgUCszWciNHz9vLVUQeC5Wwk5ChVlcmcjcnvr3H3qSaFyFiFbQvx%2F28FUxye7IaD8vOQjRieCMMr9UEgyvymvYFpdvFqkm0OJXLaqE1TUwSxMe8uSqsC9GZ%2BQemNHYybemR%2Bjt0F311JhMOUggVmVOb%2F1w%2FZgCibuhUJi0WuClZl3fQLc6NSONAl5C7Szu35dJ9gUQa%2FnXVqANpvbdb7ZiLbEPlxS4lyPmK3ITJUcykbKZxniIzGdMpA4n%2B28d8jRlLRQIycndgOGPSvpjennOzD%2B4MNcfTid90Ajj%2BkLKLTkakS3qifhswc6OFasx7LDWIi%2BNQQijx7hWtC09qpW74igHg3AzAPLoD987TEriFv4Fapns2t9Ry4z8JoWztumMv2yXOIZd7h59ovT6hQGJJN50cJ1PSRpzSnyMIHnxckGOqUB7CkHRamqrtI1gMzdVwohVW241JJEdX%2B7Iaac%2Ft2DB%2Bfr8EK%2Fy1lDxdOo8FVQKzEN94aR62mDeWGFd5UjMtZRMmuK6zoCRlfAMUIkI9060B5JHcGQrJfq%2FatR9DNcuIvcam06PikdiUwCBE1A3xz%2F5xFuaYqB6mJoFs4%2FrYdABNAsB6ZErIyb8HJJw5H7x8ByrFdKp7%2F3XxjM5PxMVmJMYB2SaSdP&X-Amz-Signature=6470533d21ab49f1ca54e76286e685da8623dad1f3951e42653c0108353febb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

