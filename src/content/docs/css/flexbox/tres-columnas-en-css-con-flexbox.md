---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHSH2HZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVGfCpQpFrcX8ArrhvGH4mxlEZJNdOOUTbztPL1fmCaAiEAzg7HZk62WZclzfywTpWlQfVfhIeGiWB4JkYWdnK0qlMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMY1xseB882QpiQ58ircA5StBv5uMOsSEoDceNs%2BCZDSVdw6EIsqy%2B3WKt5XsqNb3LeRZjky%2B4AId%2FvfhuR7ylYAb3ZwIAMMwv1Opd6HiXeZKL4PVYM9LK46TUUf%2FuPCKT%2FoT%2FZNLkeCrA8wkbCaXQuoCGtx77mQJnhSCCcL6qVGzG6njXoU93G7wkYaTkwxJ%2BMs0wKV%2Bg5pJZJQoEQfC4WGPzNAbQqepOrfyCpFPwRwUtRn%2B6Kdacz9x3cNPvCqNoXuZy5aX%2BOBKliopGZiPLQC0o2J3ZPnphSGwMKUhFpHLdt91Ql%2FF%2FIbCLAqlkitTauWxOE6Hb8rb8JeFk88zdvRmInqKSXzG67JoP9JPJd9MDXwFiHNs57%2FM5XavITBw5H8tKn4TtVSh%2BTp42KVc4kOMcCvMyDMMV0JT28cNinzogYD833YdaQ8bxoGOqTQsnA8h3ERBKTzCHZhbGZm4vhAK2coQYCAWMtqjgUXPQ7a3jgG73WU%2B0F%2BIP%2BoI3T3XX7ae9jrzbzuHZpslockV6qlbABLgd6phQMoTX7HzoTtP1CN9Cc2zHTVrFW%2BDFVt06Csgei9RXV0%2BlioiZ6ED8OxUzY%2FrnfiN%2BdAZnVInfDcA2dng4CtL3gVRvqwLZDzRVMN4Il3tcU6SidRMJXDzskGOqUBRSyclLyMim9bU6cIEw%2BZl9pLeLL1IvMi7FzmlDZA8mH7SSXh%2BpI%2FTtLOTWYNnrLU%2BjwuY1vWfpiy1qPIZxnInSzZvh%2F7CkVxgqLQFssvXNsMl3%2BSlt%2FQChkgDVUqJ1nwJ9jSdkJhwhZDIANPavHqgC8LppHrHVPsyhZopqmAem3A1yFH6z8s%2BVqSpKzWEYrRR%2FgruIAFJFzJ0%2FyHvPRV5l%2FDb1B2&X-Amz-Signature=922e8e58b28dd7d0a2240be6ed440378cb85208366dd3185f1153570446b62ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YHSH2HZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFVGfCpQpFrcX8ArrhvGH4mxlEZJNdOOUTbztPL1fmCaAiEAzg7HZk62WZclzfywTpWlQfVfhIeGiWB4JkYWdnK0qlMq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMY1xseB882QpiQ58ircA5StBv5uMOsSEoDceNs%2BCZDSVdw6EIsqy%2B3WKt5XsqNb3LeRZjky%2B4AId%2FvfhuR7ylYAb3ZwIAMMwv1Opd6HiXeZKL4PVYM9LK46TUUf%2FuPCKT%2FoT%2FZNLkeCrA8wkbCaXQuoCGtx77mQJnhSCCcL6qVGzG6njXoU93G7wkYaTkwxJ%2BMs0wKV%2Bg5pJZJQoEQfC4WGPzNAbQqepOrfyCpFPwRwUtRn%2B6Kdacz9x3cNPvCqNoXuZy5aX%2BOBKliopGZiPLQC0o2J3ZPnphSGwMKUhFpHLdt91Ql%2FF%2FIbCLAqlkitTauWxOE6Hb8rb8JeFk88zdvRmInqKSXzG67JoP9JPJd9MDXwFiHNs57%2FM5XavITBw5H8tKn4TtVSh%2BTp42KVc4kOMcCvMyDMMV0JT28cNinzogYD833YdaQ8bxoGOqTQsnA8h3ERBKTzCHZhbGZm4vhAK2coQYCAWMtqjgUXPQ7a3jgG73WU%2B0F%2BIP%2BoI3T3XX7ae9jrzbzuHZpslockV6qlbABLgd6phQMoTX7HzoTtP1CN9Cc2zHTVrFW%2BDFVt06Csgei9RXV0%2BlioiZ6ED8OxUzY%2FrnfiN%2BdAZnVInfDcA2dng4CtL3gVRvqwLZDzRVMN4Il3tcU6SidRMJXDzskGOqUBRSyclLyMim9bU6cIEw%2BZl9pLeLL1IvMi7FzmlDZA8mH7SSXh%2BpI%2FTtLOTWYNnrLU%2BjwuY1vWfpiy1qPIZxnInSzZvh%2F7CkVxgqLQFssvXNsMl3%2BSlt%2FQChkgDVUqJ1nwJ9jSdkJhwhZDIANPavHqgC8LppHrHVPsyhZopqmAem3A1yFH6z8s%2BVqSpKzWEYrRR%2FgruIAFJFzJ0%2FyHvPRV5l%2FDb1B2&X-Amz-Signature=8261a99b62239937be78edc5ff6044f4c15920235d46eac8c4c7748fe58d8fc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

