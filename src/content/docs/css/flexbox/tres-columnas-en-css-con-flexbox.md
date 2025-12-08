---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WANBVB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFErCWz8aB%2Bi0oLGUZ%2B0YwEy38SS%2BFeeV5WWIw8GqjU3AiBoe59nWRPKUY%2FF66Pa2sMEiaRPPHonTxJO0QjxjPoJBSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkWQlyMahb7FGJi0BKtwDBDRcl9F4TAvWbhH%2Fz2DfBYWmp9zhd%2BzXh7mAJWDrpCGCqDGXy6RCYxV8ze4fj0l8InS8LXlxgyi34jmMxeyHvd8dUuow7A1je2iHMv4z3kdU0V6OStN8KfuNxqTwXmHKVKxgeoi6B8RbqUTwbcSxinbt%2F66mh1NbreYH47ZU%2Bx3rUsu2SOXGPohd%2Fj5ccQ1AIosBhkvepuQTpxz7eT5EyJwPveh4wg9BepaDKTdYDdh7aBoLpk9zGaYYjjV5s5j3Spzp9%2FEVN6ZKFXiRJ%2Ba1pqyIewaFjKlvCuN7wDw71CWTRaFZ0y%2Bnzu9uhV%2BiPnqy%2BhHDaYwUbcQW7T60hoMCcdoXIJz81lqTqeSL1IICT8Y%2FciQVzzD840MwliVhUX79cEcbE6mpODeL%2B0qvvvODBD%2BiNskao0AJjedafCDiJrELEsXjgAYGwbrCHmhISXc%2F9YXQmYSQCspD7zw7cWak62jyPMKbjMspOdP18XYYgAowjrp%2FL8r%2BYLn609l%2BHdS0b02yS4F2B1LvTXhPESWqeLSbC%2F%2BRxD9alMh%2F3bKkcxdVMs2qrkGYQmTne4NNvQ1lF15W50KqM5%2FHyLh56LGw28%2B4Nd36EclYCxmkML3i4DrvafUB5%2FIqHUKz79QwmMLbyQY6pgEiPt%2BMATtDV9adWYUKdVNoJwgmTjgDXkaAQ9yrBv1OHez77BQe74wOfys5pv%2BPmgdO%2BPwZJE9coqYRUr6w3pvfLIbgsKLorcqFC0Dw%2BaqZZ8e5wcQO66O7YyngPsVoxfaYfbv5fAy42bsaUpSrNnARJqsw7cCrKD%2FLGEL4qaHdHtku9i2WtgZ9SuRLW8XJf5iVam2j9V74XvqBeTIYbrzz9qwrGOqo&X-Amz-Signature=2ce923ee47cfa5d823a41ed3c4e8980e6453292d8213b0c84291774ab756f6fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WANBVB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFErCWz8aB%2Bi0oLGUZ%2B0YwEy38SS%2BFeeV5WWIw8GqjU3AiBoe59nWRPKUY%2FF66Pa2sMEiaRPPHonTxJO0QjxjPoJBSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkWQlyMahb7FGJi0BKtwDBDRcl9F4TAvWbhH%2Fz2DfBYWmp9zhd%2BzXh7mAJWDrpCGCqDGXy6RCYxV8ze4fj0l8InS8LXlxgyi34jmMxeyHvd8dUuow7A1je2iHMv4z3kdU0V6OStN8KfuNxqTwXmHKVKxgeoi6B8RbqUTwbcSxinbt%2F66mh1NbreYH47ZU%2Bx3rUsu2SOXGPohd%2Fj5ccQ1AIosBhkvepuQTpxz7eT5EyJwPveh4wg9BepaDKTdYDdh7aBoLpk9zGaYYjjV5s5j3Spzp9%2FEVN6ZKFXiRJ%2Ba1pqyIewaFjKlvCuN7wDw71CWTRaFZ0y%2Bnzu9uhV%2BiPnqy%2BhHDaYwUbcQW7T60hoMCcdoXIJz81lqTqeSL1IICT8Y%2FciQVzzD840MwliVhUX79cEcbE6mpODeL%2B0qvvvODBD%2BiNskao0AJjedafCDiJrELEsXjgAYGwbrCHmhISXc%2F9YXQmYSQCspD7zw7cWak62jyPMKbjMspOdP18XYYgAowjrp%2FL8r%2BYLn609l%2BHdS0b02yS4F2B1LvTXhPESWqeLSbC%2F%2BRxD9alMh%2F3bKkcxdVMs2qrkGYQmTne4NNvQ1lF15W50KqM5%2FHyLh56LGw28%2B4Nd36EclYCxmkML3i4DrvafUB5%2FIqHUKz79QwmMLbyQY6pgEiPt%2BMATtDV9adWYUKdVNoJwgmTjgDXkaAQ9yrBv1OHez77BQe74wOfys5pv%2BPmgdO%2BPwZJE9coqYRUr6w3pvfLIbgsKLorcqFC0Dw%2BaqZZ8e5wcQO66O7YyngPsVoxfaYfbv5fAy42bsaUpSrNnARJqsw7cCrKD%2FLGEL4qaHdHtku9i2WtgZ9SuRLW8XJf5iVam2j9V74XvqBeTIYbrzz9qwrGOqo&X-Amz-Signature=4d531b5b71a9287bd5bb5a0a5169d0653b19d461f73e063f73eaab3492901cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

