---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQE4GA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDweb9NXNSeSSdi3l7RcOaZ0PR1Xs%2Bn3tA7g0o7AFot3AIgYRqJekzpT5GpV3QMJN8fiIJk%2BROSbX1KwJkFSEBGIbMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHxOxu2GncVeBMgYiircA662uQm41ByHdQmJvgUIy0axLISMj%2BDjMorQW9t9xXJ8YFiUGXxV%2FhY5uxoZPlQ6giL%2FxPHQUK%2B18oKnqCtckgsHaAoJRZAm1RTmbPtt1Pe2eRtoQET0FItZCvcgr5kfnfKEyHs9Sa9BH0Pu3lbc8NB2iHGNoXdQkoh7lTAcVD%2BfSUKwF5JSbHC%2FaUpyw%2Fg7geJx5Cj7SceYtBhqod%2BT%2FjZzweUsO1WGvqTZoQfrs%2BrwSN%2Fod2zM3KJXt7JXTRzt6PwHWJA04737kdwWQbpGfcjB8cl2JgsSJgORq8%2BDdtEonmJIq1FFe2oZ6gXTKLoOytrYDC3FrxxQI2MuOD4H%2F5TvHw4bOuaHAOSAcpeJxeE230VEPqPYjwwYLOgBxDeTDtXAQ5g9KuX%2Ftw8dFe0qSyiz5GgJGXQswQlmv1krR6g3R8QT3l1ncH4b5fs5IAYtVxoajeFlo2Zoz47bTKHXwd%2FRx6CImDFiLwX%2F8SEM6mVjRSEzgjzWBaQCAH3ldGR8sC5WURD8Kpm3eQ77Bmd0rFlqBaFOymIiLrdo6F2B4JRGfiGf%2BaXlAiAYHJ3HogLHWzzUdGa9E%2BEwspI3EvchiSL8XXPtSqnFEbTlpZqe2MCSoli%2BDArgsdoqkwBzMNqgxskGOqUBfrIyg7mwcYXs1V2Ok216qWWIWQ%2FxQUA0xLWRjvBfu6NkLsKmhBWzzLxWoZbBcO%2Fxxjas2iFHE8YoJH5DK32KPzh3HQr9VPueTc5H3zQmMRk4kGqMRLomXhLfPKwoLaQG6AFqGcJxXDEw7f94jgRgbse%2B%2FSveRH%2FRkjPRpnyMPuJGo2v2iW1SoPNrQsawVQ6pL1AyG1qtEJxWCXC5L1Nsvdxp0Fmk&X-Amz-Signature=25a75adf3e2107ec29170e41d56a3e6df5caaa017e3af2ddf67708035d6b6023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4JQE4GA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDweb9NXNSeSSdi3l7RcOaZ0PR1Xs%2Bn3tA7g0o7AFot3AIgYRqJekzpT5GpV3QMJN8fiIJk%2BROSbX1KwJkFSEBGIbMq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDHxOxu2GncVeBMgYiircA662uQm41ByHdQmJvgUIy0axLISMj%2BDjMorQW9t9xXJ8YFiUGXxV%2FhY5uxoZPlQ6giL%2FxPHQUK%2B18oKnqCtckgsHaAoJRZAm1RTmbPtt1Pe2eRtoQET0FItZCvcgr5kfnfKEyHs9Sa9BH0Pu3lbc8NB2iHGNoXdQkoh7lTAcVD%2BfSUKwF5JSbHC%2FaUpyw%2Fg7geJx5Cj7SceYtBhqod%2BT%2FjZzweUsO1WGvqTZoQfrs%2BrwSN%2Fod2zM3KJXt7JXTRzt6PwHWJA04737kdwWQbpGfcjB8cl2JgsSJgORq8%2BDdtEonmJIq1FFe2oZ6gXTKLoOytrYDC3FrxxQI2MuOD4H%2F5TvHw4bOuaHAOSAcpeJxeE230VEPqPYjwwYLOgBxDeTDtXAQ5g9KuX%2Ftw8dFe0qSyiz5GgJGXQswQlmv1krR6g3R8QT3l1ncH4b5fs5IAYtVxoajeFlo2Zoz47bTKHXwd%2FRx6CImDFiLwX%2F8SEM6mVjRSEzgjzWBaQCAH3ldGR8sC5WURD8Kpm3eQ77Bmd0rFlqBaFOymIiLrdo6F2B4JRGfiGf%2BaXlAiAYHJ3HogLHWzzUdGa9E%2BEwspI3EvchiSL8XXPtSqnFEbTlpZqe2MCSoli%2BDArgsdoqkwBzMNqgxskGOqUBfrIyg7mwcYXs1V2Ok216qWWIWQ%2FxQUA0xLWRjvBfu6NkLsKmhBWzzLxWoZbBcO%2Fxxjas2iFHE8YoJH5DK32KPzh3HQr9VPueTc5H3zQmMRk4kGqMRLomXhLfPKwoLaQG6AFqGcJxXDEw7f94jgRgbse%2B%2FSveRH%2FRkjPRpnyMPuJGo2v2iW1SoPNrQsawVQ6pL1AyG1qtEJxWCXC5L1Nsvdxp0Fmk&X-Amz-Signature=84697113b1175aae5ab501a43c2b4344c27a66ee33004085d291fc8ed41d3320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

