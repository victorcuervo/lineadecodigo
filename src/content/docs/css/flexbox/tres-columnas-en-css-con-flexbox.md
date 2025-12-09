---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3MTNUZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo23wPrKIx2NwfgR7OoVPaHq92yloGZhRmJCEAsYeSqAiEApwBI2fX%2BUQCG9%2B44JEKezKvTaTMyjSZ72oau%2BlcPDeMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWhGmL%2FjJeBStLhFSrcA8q7lG4%2B%2FnWxwsmCLIOaLmvLkYRZ3BupSlk2U1ZK8pQL1P%2BsU9hMUYj2dtkOHUsVsj1IDqzT%2BGXNfLY5n%2BoTdc%2BeZjUQ9GZuK3KA85ItK0II30I%2BnPCcx3WluF85AAhN1ELtH1XO2xz8LnteWdMM7%2BF%2BAeZGWrsL%2BY3mnrvbzTyoigJ39GFuSZd3lQ%2F8QwRNR1MjMEN2BGNDnEBQArnC8SHx8ZYYSKKslD9izRJOfyRuAAZAEBvEpmsHFPbI7PQpqjZFhBuzYTU%2FWd1PtqSSsv%2BOy%2FOaD4vLCS77u9qSf%2B0Wxq%2B5xDLZ3ykfMQid7tBf%2FhQLQrf5uoAih7CPgn5nh1NVkE5B6jaP9VGkO7x4EzqlL3Mp166Q5Ta%2BfbeujQffFMGJk0uf0n0xz58Xr6x%2F4Pk5rHxIAIgWTGqEUAx4a%2FN2Xvgo2Ga114NRYEWfojxB6TDqS%2BLQQuUrXqpiv%2Bjr38xfDHSfLPXcBXCb3tGS6AZ9zcR7bvarzftE7cQEs8WFDY9xYDkbq0zz188kqSGu21C7nbahgUWHpXsOCXhRRoTbxoheUz7gmo7xCIKSKEAdZWLY2NDW2rEVhKapWVvTYCUEGi01C%2FmWeTttu%2FmP8Z73V3L4orcwM29TuUjkMOLC3ckGOqUBN7RDl3tK8HZxyOgVT5yyuMhAJWq0%2BH2clF5v8Hr7217oWQ8oHIQwlQ1BFcbxdslhcBw9HHqc3ucPYLIqPaObm%2FfmaUATUbT2ZxdHRfJGHaRlTjnbctwj30xKRpY95aBNC9%2FVKS6jFkveyH%2BnqYqVj1y%2Fp8f1P5gq4N0iX3X5Bgu0fFnfM1fdV1%2BUrmH30VsE%2FHUR6n%2FL%2BJ1G7L%2FmF8odqHF54KhB&X-Amz-Signature=89669acc43bd2ed4477483ca21f73f8c9c33c5ac5e7b3b7f626a8d7912478a74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TA3MTNUZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGo23wPrKIx2NwfgR7OoVPaHq92yloGZhRmJCEAsYeSqAiEApwBI2fX%2BUQCG9%2B44JEKezKvTaTMyjSZ72oau%2BlcPDeMqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWhGmL%2FjJeBStLhFSrcA8q7lG4%2B%2FnWxwsmCLIOaLmvLkYRZ3BupSlk2U1ZK8pQL1P%2BsU9hMUYj2dtkOHUsVsj1IDqzT%2BGXNfLY5n%2BoTdc%2BeZjUQ9GZuK3KA85ItK0II30I%2BnPCcx3WluF85AAhN1ELtH1XO2xz8LnteWdMM7%2BF%2BAeZGWrsL%2BY3mnrvbzTyoigJ39GFuSZd3lQ%2F8QwRNR1MjMEN2BGNDnEBQArnC8SHx8ZYYSKKslD9izRJOfyRuAAZAEBvEpmsHFPbI7PQpqjZFhBuzYTU%2FWd1PtqSSsv%2BOy%2FOaD4vLCS77u9qSf%2B0Wxq%2B5xDLZ3ykfMQid7tBf%2FhQLQrf5uoAih7CPgn5nh1NVkE5B6jaP9VGkO7x4EzqlL3Mp166Q5Ta%2BfbeujQffFMGJk0uf0n0xz58Xr6x%2F4Pk5rHxIAIgWTGqEUAx4a%2FN2Xvgo2Ga114NRYEWfojxB6TDqS%2BLQQuUrXqpiv%2Bjr38xfDHSfLPXcBXCb3tGS6AZ9zcR7bvarzftE7cQEs8WFDY9xYDkbq0zz188kqSGu21C7nbahgUWHpXsOCXhRRoTbxoheUz7gmo7xCIKSKEAdZWLY2NDW2rEVhKapWVvTYCUEGi01C%2FmWeTttu%2FmP8Z73V3L4orcwM29TuUjkMOLC3ckGOqUBN7RDl3tK8HZxyOgVT5yyuMhAJWq0%2BH2clF5v8Hr7217oWQ8oHIQwlQ1BFcbxdslhcBw9HHqc3ucPYLIqPaObm%2FfmaUATUbT2ZxdHRfJGHaRlTjnbctwj30xKRpY95aBNC9%2FVKS6jFkveyH%2BnqYqVj1y%2Fp8f1P5gq4N0iX3X5Bgu0fFnfM1fdV1%2BUrmH30VsE%2FHUR6n%2FL%2BJ1G7L%2FmF8odqHF54KhB&X-Amz-Signature=4c8fabaa6f347ecd772509fd0fdbe291dea1a4a979088fdb335e01a57f191e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

