---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUWDIIR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdKoIiGA9q59qkcCfZLKxvF9j7%2F19gRwni96Iij%2FmoNAIgUhg5KahgieFVTEOjIr8M13oqBeAwupI0CSxSKkqXYOIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxxsE%2B5U9eExLIO1SrcA%2BIazLpHidE6fpziO7Oir7x4iCeHhytSg2W5QAi8kG4bKDsXnvcFf7%2BUsolq7SS9X5ZwuCQquSnS8HYajz4gLWfNq3aObXgU2nVadx5G6pakRXgojfrzSmUseTagdnse8xrIUxhYYO0KtrbeXEANWBVO%2BLTQkphq0ccOOuFi9g%2BjGnsNEqwTPWIMBxpW1h83eoOY0VBXQiV%2BHyBrhF7NBfPtQHa%2B7CGV4PtGPAwummttnEijm6Ts7Pr7y332G%2B9Bo9egMMseNYxTk%2FlGVVM3Bu%2BUFH7AXM%2Ffi7FVK1ztlDzhn%2FPsqKMtWU58aYdRg8f11W9GvrToFQ1x2JKdl9ctxi7sz%2BbAPy20OT1ufhE9HXw5fjNktrCrEEOQGHRWvLV25GcdI3QSpJhOeOX2ta%2BANwZnFmKx7Aq1%2FnYuTOKXrvqIrr%2Bo8ZhC7CY5uJFvE4fUJnC%2B2SSUPeVpl2vXPyyMq0HIjt2tNvw21s5vHKxBAo0JiDR%2FWnqk8YKi6ID%2Fn4D9eOiwj%2FE2%2FzT%2FEN8%2B5DbEDQCs7OEyj9DKHoodWiM%2BCtOZPCcRr500XjZHvodIb2NwbflFROT6ZHEzgL4%2FRfDyfqNVCawsSaVCaqTZ96SVty0fIUJU%2FvBpD6CXIA5IMLK91skGOqUBoqzmXU0ksrZ2BlJ4OizFbwkQp5Foa55gq58oR%2FW2nUCjWugzVONdQvzwrQ97tlXtO9kGcvHR1gBTJySN0ckFZfwVEq7zuG5yENWD%2FyHWziogrQstPDYYKCm%2BPXWd0hiGSBTrxR%2BgCB6C0R%2FZY1IACXdCTn6LtaBDCzdX06kqmHnZKr%2FTbIbv%2FOliJ8079MVs05KQ0ZNUu3%2BP3wHT8DJWcQUFe3TJ&X-Amz-Signature=5a3403ad7a833579cd316c54c5b038d89a9ed7ed0293eddf891abfb7dd899c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XUWDIIR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdKoIiGA9q59qkcCfZLKxvF9j7%2F19gRwni96Iij%2FmoNAIgUhg5KahgieFVTEOjIr8M13oqBeAwupI0CSxSKkqXYOIqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFxxsE%2B5U9eExLIO1SrcA%2BIazLpHidE6fpziO7Oir7x4iCeHhytSg2W5QAi8kG4bKDsXnvcFf7%2BUsolq7SS9X5ZwuCQquSnS8HYajz4gLWfNq3aObXgU2nVadx5G6pakRXgojfrzSmUseTagdnse8xrIUxhYYO0KtrbeXEANWBVO%2BLTQkphq0ccOOuFi9g%2BjGnsNEqwTPWIMBxpW1h83eoOY0VBXQiV%2BHyBrhF7NBfPtQHa%2B7CGV4PtGPAwummttnEijm6Ts7Pr7y332G%2B9Bo9egMMseNYxTk%2FlGVVM3Bu%2BUFH7AXM%2Ffi7FVK1ztlDzhn%2FPsqKMtWU58aYdRg8f11W9GvrToFQ1x2JKdl9ctxi7sz%2BbAPy20OT1ufhE9HXw5fjNktrCrEEOQGHRWvLV25GcdI3QSpJhOeOX2ta%2BANwZnFmKx7Aq1%2FnYuTOKXrvqIrr%2Bo8ZhC7CY5uJFvE4fUJnC%2B2SSUPeVpl2vXPyyMq0HIjt2tNvw21s5vHKxBAo0JiDR%2FWnqk8YKi6ID%2Fn4D9eOiwj%2FE2%2FzT%2FEN8%2B5DbEDQCs7OEyj9DKHoodWiM%2BCtOZPCcRr500XjZHvodIb2NwbflFROT6ZHEzgL4%2FRfDyfqNVCawsSaVCaqTZ96SVty0fIUJU%2FvBpD6CXIA5IMLK91skGOqUBoqzmXU0ksrZ2BlJ4OizFbwkQp5Foa55gq58oR%2FW2nUCjWugzVONdQvzwrQ97tlXtO9kGcvHR1gBTJySN0ckFZfwVEq7zuG5yENWD%2FyHWziogrQstPDYYKCm%2BPXWd0hiGSBTrxR%2BgCB6C0R%2FZY1IACXdCTn6LtaBDCzdX06kqmHnZKr%2FTbIbv%2FOliJ8079MVs05KQ0ZNUu3%2BP3wHT8DJWcQUFe3TJ&X-Amz-Signature=78b56dcb9fe4d616ca721737d5b9dec3965ee1c4a3cfac9d82e50cf6a7013ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

