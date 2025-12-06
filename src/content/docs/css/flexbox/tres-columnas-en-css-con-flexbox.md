---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIPGPL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXnz9UmN5y%2B5vw%2BSz4looYX0Grxn%2BFv4eXbkbc5MIAfgIgZTqSpgsa4cNMcNqkogj5vl9tWEwrIrOzRRX2CK6QOdoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFt4xnBbPYawECXyAyrcAyaew%2BJAUXTzImFBVz%2FHpTOZLWf%2FjM4lrFDZTZNLOVAJwyPlBu1MlAE2%2FVaLYDoDEKcA5J7avhESJEBvup0f%2F8lU9wKerBNQ%2F1hJjE5j4clrRspZnomivu2KSNP8C8kxfUO7aKYLgMlOMvRpLFLCebBe%2F9ciONTRJBNLK2QCwsbbx2bkYU4Cz%2FkdfXmixSSSCz17FAjtzk%2B4gprur3w8JSFgz3J8acFB3YA0IYxWaAev328bIvVkiJLtkzfmLnRSNuNTcSJZKuDGDhWR%2FCP7jZiU7JHSiyaQJJpLW%2B%2BT8nuCXlhg13BH1ufuiBnd%2BXi5UG14p3qVxRxgrj0AZeXrtLhiNIlUhUrCyTFXP1%2F4NgbsC5V81cbE%2B8qV9sB45ncwend%2FZngouvYuWGz8d6facAF0H2pyycJfXESi%2FmH5E%2BVss5GXxcN6fhnky9pSb6oXL%2BLJoAOMlO3%2BrWUDmyDNnIKAnqE7IjCnETZhngf1A9Z4FxsYvWEQp9gzWek2fkXgIbgAaCA17%2FP2lIQRnoU%2FL0alClttBUKtrnCb%2FN8D0vZXnUB067hRIAtiiTBlX2wCuKpmF0dGg5KvIcQaZQ9zdN73uEQVr%2FO3hrWDZzkxoTTq%2BOYjYbuvfFmGOFK9MMLT0skGOqUBVW4lLqVCFNa6q2gVn7%2FhNF%2Bgb8GhDYLCixgb3RFvBp2hnq9scDQuq6N0exFumCD9ensAlRdJ55WfPsP86c4nmiR%2F%2Bg2qW2gZr7%2BYI4AQaHEIX%2BmSWwkcHUOAMn9OHnPUlEt8UW9n5iPLpKgKm0kFMq9I3Q90R7DIpOg%2BKDxEO0pPPTh%2FgMif16tRU4oPwn0x9FgR6oBgTV68dOpIaB1pp0KFJR5x&X-Amz-Signature=7a06f8f7cd9d18b89d9e84999ec0377d8c75d65b1fd064f5d68ce657cbf37f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWIPGPL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXnz9UmN5y%2B5vw%2BSz4looYX0Grxn%2BFv4eXbkbc5MIAfgIgZTqSpgsa4cNMcNqkogj5vl9tWEwrIrOzRRX2CK6QOdoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFt4xnBbPYawECXyAyrcAyaew%2BJAUXTzImFBVz%2FHpTOZLWf%2FjM4lrFDZTZNLOVAJwyPlBu1MlAE2%2FVaLYDoDEKcA5J7avhESJEBvup0f%2F8lU9wKerBNQ%2F1hJjE5j4clrRspZnomivu2KSNP8C8kxfUO7aKYLgMlOMvRpLFLCebBe%2F9ciONTRJBNLK2QCwsbbx2bkYU4Cz%2FkdfXmixSSSCz17FAjtzk%2B4gprur3w8JSFgz3J8acFB3YA0IYxWaAev328bIvVkiJLtkzfmLnRSNuNTcSJZKuDGDhWR%2FCP7jZiU7JHSiyaQJJpLW%2B%2BT8nuCXlhg13BH1ufuiBnd%2BXi5UG14p3qVxRxgrj0AZeXrtLhiNIlUhUrCyTFXP1%2F4NgbsC5V81cbE%2B8qV9sB45ncwend%2FZngouvYuWGz8d6facAF0H2pyycJfXESi%2FmH5E%2BVss5GXxcN6fhnky9pSb6oXL%2BLJoAOMlO3%2BrWUDmyDNnIKAnqE7IjCnETZhngf1A9Z4FxsYvWEQp9gzWek2fkXgIbgAaCA17%2FP2lIQRnoU%2FL0alClttBUKtrnCb%2FN8D0vZXnUB067hRIAtiiTBlX2wCuKpmF0dGg5KvIcQaZQ9zdN73uEQVr%2FO3hrWDZzkxoTTq%2BOYjYbuvfFmGOFK9MMLT0skGOqUBVW4lLqVCFNa6q2gVn7%2FhNF%2Bgb8GhDYLCixgb3RFvBp2hnq9scDQuq6N0exFumCD9ensAlRdJ55WfPsP86c4nmiR%2F%2Bg2qW2gZr7%2BYI4AQaHEIX%2BmSWwkcHUOAMn9OHnPUlEt8UW9n5iPLpKgKm0kFMq9I3Q90R7DIpOg%2BKDxEO0pPPTh%2FgMif16tRU4oPwn0x9FgR6oBgTV68dOpIaB1pp0KFJR5x&X-Amz-Signature=28d567f11aacf7313b00f8a93d13376040476d00588a7dee2780e1c093469504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

