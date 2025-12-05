---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ILG3TF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAERgR4Bq%2BGroAqKVUAGO7ok4SCqhj8vvOuc8XNKgt%2FpAiEAyXRL9Kc0H1cU3ZE8abJ9J%2BqSszBqSbDaVbZSDLjUn4cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDD8D%2FKMna9xXG%2FEqNyrcA1c9zctp1OkFswsB7qAm7hsdq1kfh5WGPojBHDfO3PPSdcDxtITUt84h8hOEuQZRahcn0yBJ%2BkVEVXPezv1dj4WdUDQ7gUDM8rBZSluNO%2Fbs4ooDL6gnNU8Gnk4wMNDcOJ4%2FBjZvzqjR%2Fg7Ft1CN87uwEq14CH5IlXl6XVtkDJUQpK93vRObJO3jwUt3FJOYr8vFBD8DtmDDaoDt1OxDZtN3juSmGf2HVtKJIR%2FO6KjdadIQYhVUmab3UcOqQoy8yrthvAniguwWiaDhzm4KVBuoZqpyTswJGS8BKSSZmUIE7ha%2BMpGRZ%2BLvIudZlwoBCr1t00Q%2FQqyYZPmEw6lGsSGQWu1ByR97mbXs854t%2FkXsITd3AKSBzyYW6zePQETP8ggw5H9Xt8AaqLN4hwvIA%2BQV9yxtJetu0RwmG3oJ67tfcQ9VigYNUSuUrB9VJtHIvwBsYDhCtxMGq%2FaIGDrxpAq5FAbcf6l0V%2BitrXi2tP3TqRS%2F3eJsmfufdtdwGAWKMLtIHtk%2BagmZS5FPvCcl5ayJ1luYcIv30dB0b9TkmC399HC6bnC6zrM%2FsP2O%2Bdw2m4odQQ25mvQagXOzeZrYT5ooHDKAWOcVSeyYb1%2BFJLr7FGJ4rtqDIIu95v7EMOmpyckGOqUBDKE9Yj7H3PtavDc50IkOX%2BeaTT%2Bcp9yKQJNjywHLp3mWwkMJZYK1xs%2FhWCVNG6PWz9EfccFwTXoXuSjwM1blZFtGcFWjyhZ%2Br0EBeeQ0QY8nqvb7JoBlo6S%2BmfZkeQgy%2BYQwpW53BJjHsotFWN2qLxPeNFvAK24DHEGG0uAMulDLP7LpWJQjR5IbFMqcmKnD2jKpAliWTlb6U0gthegfjdf%2FVd2v&X-Amz-Signature=c45ac6999c70bc33b615aeb97a7357bd4edd767f69bde57fe3ef66790f0910fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ILG3TF%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAERgR4Bq%2BGroAqKVUAGO7ok4SCqhj8vvOuc8XNKgt%2FpAiEAyXRL9Kc0H1cU3ZE8abJ9J%2BqSszBqSbDaVbZSDLjUn4cq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDD8D%2FKMna9xXG%2FEqNyrcA1c9zctp1OkFswsB7qAm7hsdq1kfh5WGPojBHDfO3PPSdcDxtITUt84h8hOEuQZRahcn0yBJ%2BkVEVXPezv1dj4WdUDQ7gUDM8rBZSluNO%2Fbs4ooDL6gnNU8Gnk4wMNDcOJ4%2FBjZvzqjR%2Fg7Ft1CN87uwEq14CH5IlXl6XVtkDJUQpK93vRObJO3jwUt3FJOYr8vFBD8DtmDDaoDt1OxDZtN3juSmGf2HVtKJIR%2FO6KjdadIQYhVUmab3UcOqQoy8yrthvAniguwWiaDhzm4KVBuoZqpyTswJGS8BKSSZmUIE7ha%2BMpGRZ%2BLvIudZlwoBCr1t00Q%2FQqyYZPmEw6lGsSGQWu1ByR97mbXs854t%2FkXsITd3AKSBzyYW6zePQETP8ggw5H9Xt8AaqLN4hwvIA%2BQV9yxtJetu0RwmG3oJ67tfcQ9VigYNUSuUrB9VJtHIvwBsYDhCtxMGq%2FaIGDrxpAq5FAbcf6l0V%2BitrXi2tP3TqRS%2F3eJsmfufdtdwGAWKMLtIHtk%2BagmZS5FPvCcl5ayJ1luYcIv30dB0b9TkmC399HC6bnC6zrM%2FsP2O%2Bdw2m4odQQ25mvQagXOzeZrYT5ooHDKAWOcVSeyYb1%2BFJLr7FGJ4rtqDIIu95v7EMOmpyckGOqUBDKE9Yj7H3PtavDc50IkOX%2BeaTT%2Bcp9yKQJNjywHLp3mWwkMJZYK1xs%2FhWCVNG6PWz9EfccFwTXoXuSjwM1blZFtGcFWjyhZ%2Br0EBeeQ0QY8nqvb7JoBlo6S%2BmfZkeQgy%2BYQwpW53BJjHsotFWN2qLxPeNFvAK24DHEGG0uAMulDLP7LpWJQjR5IbFMqcmKnD2jKpAliWTlb6U0gthegfjdf%2FVd2v&X-Amz-Signature=422a61bbf4184d0fea2734cec066fe94c010b9c91be68576e4a631e9e57dad46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

