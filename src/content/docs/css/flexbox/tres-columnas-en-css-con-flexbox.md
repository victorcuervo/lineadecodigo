---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7XDZ5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbZhDhQxA00Lx9Qp5854BDyhhEyRhSjPqFxU09UO2WpAiEAqaxohzD1t6wYPXjA%2FIG%2BhgL5Ll8lIqCRCDAzXqbEZwoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT9f67RBBY05NdI6SrcA3y25R8XT8zydfaqxvPcIVNX07OsK7%2BG49CSULKq2aOzmgZyFglYwBvk18qlaJDtQT7n0zE7fLaRGpmc52trT0jAMMGwKrPKxtUm%2Bu6cV69JJGvzayKPt6asXeWy9%2FaACq82xd90g4LA%2B6jJKQD9nkr4%2FBI7C0GYVq39Jl1Vyhizr7qlWgcMAB8t360gIr6PAxH%2FXdTUY1NY%2BlxrzYYs5V4Yiz3%2F9%2BajFMQi%2B7n9qNv%2BKCW5%2B767y%2BMxHS3rO4yK8lxPzS8JgYBOJed3kVxluVEElCLEWGK4kfQKDU5rkKx2AUjprOZN3ZdzXGosWQhaeZmKqSczPHIcLCK6YrDbWpDKS6sTfP4UgdCgv03EU6ylJQpOwFr6215lXcqknn8jwldS95DQiCVu1Tn700wHFaLNNipzAEQj5y9SXizeJ5%2Fp6Zg%2B0ErxRolESCdOvQDt7vtMhKBIP0lNB1hHzAAAN%2B7tlDFDdQvF38I6RbBiYAThNSntauHNpUBiiquQBDSbkcTZcA2e7WT6AZfXm4o5UN%2B5tDGesxSERJ9kfyMZqNG6FxPmi885s75qM7lmGKncCmM5jEpyL1y%2Bgc3vxLsMP1QPgFGrlPajWfesUye0w7kXcbf8zpbl2SlAHfieMPvs2ckGOqUBMNQut%2B6lKFUkbpns4e9%2BmvNhGn6jcrI5nV3CdsAxXOjd9fBmzlEtFNFPm0G8pnvAyxcFas2dKxkQriuZfb91KusowG9E3Mvqpbex4effshvHRLXFXsev26QTk3EAL4BzllxyXwGrkqOFQdmBiv52L5noYo2MhZvvixB9PEqS59MImSRGEjCZwAuyIMliPzD9R8fuGtwmvAlhZ%2F%2BGaR%2FvKkC7vcea&X-Amz-Signature=e860b5f8f99235ab7864881896b57a7c99fef06a58bc6987c5d1d4c3b185857a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI7XDZ5M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbZhDhQxA00Lx9Qp5854BDyhhEyRhSjPqFxU09UO2WpAiEAqaxohzD1t6wYPXjA%2FIG%2BhgL5Ll8lIqCRCDAzXqbEZwoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIT9f67RBBY05NdI6SrcA3y25R8XT8zydfaqxvPcIVNX07OsK7%2BG49CSULKq2aOzmgZyFglYwBvk18qlaJDtQT7n0zE7fLaRGpmc52trT0jAMMGwKrPKxtUm%2Bu6cV69JJGvzayKPt6asXeWy9%2FaACq82xd90g4LA%2B6jJKQD9nkr4%2FBI7C0GYVq39Jl1Vyhizr7qlWgcMAB8t360gIr6PAxH%2FXdTUY1NY%2BlxrzYYs5V4Yiz3%2F9%2BajFMQi%2B7n9qNv%2BKCW5%2B767y%2BMxHS3rO4yK8lxPzS8JgYBOJed3kVxluVEElCLEWGK4kfQKDU5rkKx2AUjprOZN3ZdzXGosWQhaeZmKqSczPHIcLCK6YrDbWpDKS6sTfP4UgdCgv03EU6ylJQpOwFr6215lXcqknn8jwldS95DQiCVu1Tn700wHFaLNNipzAEQj5y9SXizeJ5%2Fp6Zg%2B0ErxRolESCdOvQDt7vtMhKBIP0lNB1hHzAAAN%2B7tlDFDdQvF38I6RbBiYAThNSntauHNpUBiiquQBDSbkcTZcA2e7WT6AZfXm4o5UN%2B5tDGesxSERJ9kfyMZqNG6FxPmi885s75qM7lmGKncCmM5jEpyL1y%2Bgc3vxLsMP1QPgFGrlPajWfesUye0w7kXcbf8zpbl2SlAHfieMPvs2ckGOqUBMNQut%2B6lKFUkbpns4e9%2BmvNhGn6jcrI5nV3CdsAxXOjd9fBmzlEtFNFPm0G8pnvAyxcFas2dKxkQriuZfb91KusowG9E3Mvqpbex4effshvHRLXFXsev26QTk3EAL4BzllxyXwGrkqOFQdmBiv52L5noYo2MhZvvixB9PEqS59MImSRGEjCZwAuyIMliPzD9R8fuGtwmvAlhZ%2F%2BGaR%2FvKkC7vcea&X-Amz-Signature=7edd561c17a573ca17d3c77b5a0a57939af07e82fbed7fdbe04ab75966bae9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

