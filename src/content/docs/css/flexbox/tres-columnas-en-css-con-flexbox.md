---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M75M7P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWSQJpTALlGMbukVJFXAL0DL3oWrvb8noCpYRGEEfOLQIgIg6p1ZPZqUaz%2FNrbwZvJhT6yT5ovYzOr8oOG%2FF5RMboqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9IaYE34TqqJiiaPSrcA5augDrioqcbsOdjBLqhFf0CYGLTPK1ETtcltzaLbF0CY9nxNvgqZfEZwk%2Fcpw2teGWR2%2F2QddzvLRHSHvKCRtE9wMIJ%2BkdFTu2Vo9wjQThmIMOBjoGch5O7%2BU49dgNbuZqbBpME6vWnAXtJEUrKAJQNReSq%2FWRXmSNppWwlNosAo0TwcdfY51vFpT7Fj2YAp85S2ywvgeOKWgRGsHP%2FEnTQwWUgoFaXPkiVflQuGKndqYLb9EA5Ezx3fvMhG3AaCb8aAaBVQrXH3AScWczSIosgQV6AXPGC%2F7Ch3R7SJxen1hWLwpEpiIlEL94rOTTjIeG5hQ5XlNtlM5Yrhj2b04pdmBjAqSegDgOrI5xd6VnfknnHh%2BddUVi6UI%2FK9dOseYZy0yIHoY%2B5k16vnywRqDWGcAB0Lkieu651%2FfEJftGA%2BCxxiLle3A77af8BEDe66PtwoIF6DyhfCskwBrAF8iyFFX5KNrDB18QRWI%2FjTorDGwPX84d9AdEbq8rBJf0fi8wxtPpa9odDhRpeq2pDTKtFXZYiZgwDxeSVrhkAiJe8Qp0PF8Hc%2FZX2JaX%2F1658fC2S2hvLrxG6bUgGLikv6Q8XVtYJFcbNmY5jRHZJ9HuIyzkadyGQYu8NyNCzMPaj1MkGOqUBXPel3GqGz7Y%2FLpFmu1H%2FoAV7DrotYKiQTHZywtA5%2F1jt4wgWsqwJeNH1SedE1WdoMlg8ftQR9OkhO1hGu5%2FBrq7KLGL8yrilJ4iV6KvPtWwPoASr4M9nGqetsKHpdn1vxsuS7y2wkA3tmasi4b3EbsfuUCgIP0Qf2AqXQs9qKLiKHG6u%2BaYD24REwJVzE3Z5LGaD6MkIohyaWPQuDLPIegJkCdBw&X-Amz-Signature=6d5636b0febc12b166ff9bd4771715bb4900f3ae2d323e00eb1948165b0564f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6M75M7P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T054813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWSQJpTALlGMbukVJFXAL0DL3oWrvb8noCpYRGEEfOLQIgIg6p1ZPZqUaz%2FNrbwZvJhT6yT5ovYzOr8oOG%2FF5RMboqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO9IaYE34TqqJiiaPSrcA5augDrioqcbsOdjBLqhFf0CYGLTPK1ETtcltzaLbF0CY9nxNvgqZfEZwk%2Fcpw2teGWR2%2F2QddzvLRHSHvKCRtE9wMIJ%2BkdFTu2Vo9wjQThmIMOBjoGch5O7%2BU49dgNbuZqbBpME6vWnAXtJEUrKAJQNReSq%2FWRXmSNppWwlNosAo0TwcdfY51vFpT7Fj2YAp85S2ywvgeOKWgRGsHP%2FEnTQwWUgoFaXPkiVflQuGKndqYLb9EA5Ezx3fvMhG3AaCb8aAaBVQrXH3AScWczSIosgQV6AXPGC%2F7Ch3R7SJxen1hWLwpEpiIlEL94rOTTjIeG5hQ5XlNtlM5Yrhj2b04pdmBjAqSegDgOrI5xd6VnfknnHh%2BddUVi6UI%2FK9dOseYZy0yIHoY%2B5k16vnywRqDWGcAB0Lkieu651%2FfEJftGA%2BCxxiLle3A77af8BEDe66PtwoIF6DyhfCskwBrAF8iyFFX5KNrDB18QRWI%2FjTorDGwPX84d9AdEbq8rBJf0fi8wxtPpa9odDhRpeq2pDTKtFXZYiZgwDxeSVrhkAiJe8Qp0PF8Hc%2FZX2JaX%2F1658fC2S2hvLrxG6bUgGLikv6Q8XVtYJFcbNmY5jRHZJ9HuIyzkadyGQYu8NyNCzMPaj1MkGOqUBXPel3GqGz7Y%2FLpFmu1H%2FoAV7DrotYKiQTHZywtA5%2F1jt4wgWsqwJeNH1SedE1WdoMlg8ftQR9OkhO1hGu5%2FBrq7KLGL8yrilJ4iV6KvPtWwPoASr4M9nGqetsKHpdn1vxsuS7y2wkA3tmasi4b3EbsfuUCgIP0Qf2AqXQs9qKLiKHG6u%2BaYD24REwJVzE3Z5LGaD6MkIohyaWPQuDLPIegJkCdBw&X-Amz-Signature=cb488a4707baa021e945939de87b0a3fce709c4cc44dfaa17a467a59a952f202&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

