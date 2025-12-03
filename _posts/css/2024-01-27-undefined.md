---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32R6QVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCxsNWoORkPOUhnbaqr9%2FTv5U1q06gmZD4AtnRQJKmO0QIhAPOl6tcW4IFIlFmGxq1k%2BH7rv4%2B%2FbPGnMefcCumWGFjhKv8DCCcQABoMNjM3NDIzMTgzODA1IgxXRa5jX77b52vbcFcq3ANO3i9I%2BRuDEmrBsKOMjHsEwF%2B%2BfY4dcI2DLU13hmA2dKT1ESspp0bfxKTu6SqEoi5xCppH7a2JOdzerddFODhevibNTuYGD4L9shAvSN7DZbiZFapdtci8mHPE5KoaYBL6PrPjQajOr6evJaj0L1Uu9Io6vIfNTvBeHYxoa8iY9JX1ZKIYAlmT2UzIZRkBS8gRrA%2FsspGRoFRdMIpQDb4Wi3JkBSbuGbMqh69MTTLzkVGIq0sOp%2F6TODks9RKwhgSqAOZZL4JxnDwKbInlK5egEQN89o6R5PznO4ZQf9xRiRVBN6%2FMMWDaXxrV1UNvNAwpry6pLM1%2BvwktuOHG2l%2F7KH8HNGV2OAuRJS9O9gbZ3GAPqdWlIx5rgGK7Ts5HB%2Fii2cK2n4xjI4B0smv1GHXsbz76i98OqWHwrinrZdGxJPtWfUqWVPEiZp5siOGZRmfK1xwJA59ogt7qpmtNIgeHPCCkERGuUHeBD6pAI9HtauCkH9g5wq2QYycptzcRzCFdzvtLIRasccwt%2FApWjkAzyNXI%2BJXFrRCZ4jVe5jMmk440ZYOhkTvjMffO0WGeL6lYW4ZfkLClxYBvihqwgtafH8vP9ac1AmMLlGzdieGE%2BhbIq7pn6cP6OawYuzCHm7%2FJBjqkAWhjQnl9ZUDAJ1y94ptDYYB1IrDhNkHeZ4Jm4MgaUtbpcETPynlMGBG3jpSpfIoJCiKRQh%2F59DyRbglhOPEp5xpZZmwri3H5n0OQUl5KjOqra7UaPSh259%2B78ubKNkqbXdHE44r%2FWdjxmQWw0h4x6Hr5dxPeC9AoQY83%2BOLcZ4RiYjXYGDsYOE9ZmDuMRZCoEVYEH9Dvh8F%2F4sFV9mm1QtEGZhD9&X-Amz-Signature=d4256afda9fb583b04c91c6b94a84e2d69f62fcbd33625c722dc7d607346fc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X32R6QVD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCxsNWoORkPOUhnbaqr9%2FTv5U1q06gmZD4AtnRQJKmO0QIhAPOl6tcW4IFIlFmGxq1k%2BH7rv4%2B%2FbPGnMefcCumWGFjhKv8DCCcQABoMNjM3NDIzMTgzODA1IgxXRa5jX77b52vbcFcq3ANO3i9I%2BRuDEmrBsKOMjHsEwF%2B%2BfY4dcI2DLU13hmA2dKT1ESspp0bfxKTu6SqEoi5xCppH7a2JOdzerddFODhevibNTuYGD4L9shAvSN7DZbiZFapdtci8mHPE5KoaYBL6PrPjQajOr6evJaj0L1Uu9Io6vIfNTvBeHYxoa8iY9JX1ZKIYAlmT2UzIZRkBS8gRrA%2FsspGRoFRdMIpQDb4Wi3JkBSbuGbMqh69MTTLzkVGIq0sOp%2F6TODks9RKwhgSqAOZZL4JxnDwKbInlK5egEQN89o6R5PznO4ZQf9xRiRVBN6%2FMMWDaXxrV1UNvNAwpry6pLM1%2BvwktuOHG2l%2F7KH8HNGV2OAuRJS9O9gbZ3GAPqdWlIx5rgGK7Ts5HB%2Fii2cK2n4xjI4B0smv1GHXsbz76i98OqWHwrinrZdGxJPtWfUqWVPEiZp5siOGZRmfK1xwJA59ogt7qpmtNIgeHPCCkERGuUHeBD6pAI9HtauCkH9g5wq2QYycptzcRzCFdzvtLIRasccwt%2FApWjkAzyNXI%2BJXFrRCZ4jVe5jMmk440ZYOhkTvjMffO0WGeL6lYW4ZfkLClxYBvihqwgtafH8vP9ac1AmMLlGzdieGE%2BhbIq7pn6cP6OawYuzCHm7%2FJBjqkAWhjQnl9ZUDAJ1y94ptDYYB1IrDhNkHeZ4Jm4MgaUtbpcETPynlMGBG3jpSpfIoJCiKRQh%2F59DyRbglhOPEp5xpZZmwri3H5n0OQUl5KjOqra7UaPSh259%2B78ubKNkqbXdHE44r%2FWdjxmQWw0h4x6Hr5dxPeC9AoQY83%2BOLcZ4RiYjXYGDsYOE9ZmDuMRZCoEVYEH9Dvh8F%2F4sFV9mm1QtEGZhD9&X-Amz-Signature=6180a63a59283263f4c2994a4d9060ccefc501ca2bcc955b166226a051789c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

