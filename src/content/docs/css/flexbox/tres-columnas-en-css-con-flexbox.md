---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QYAUID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCV2FtCHG6I%2BBqSYhWklhJaD6sZ8YqBNSPMfOPf3pkj3wIgKLBjwV2nosClkXs6J792VtwnDMJ%2BK1g0XaPLuEPzQSsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCliOHQQzYj%2B7WVQwyrcA58%2FlWY7g4lRVKgTu9XbUZNUCMPSLBTeteHXt6DxHgpFJgz1taPjgKSpsNOMV%2BQgk9YFatFg%2FR5gDTy1DWLjD4%2BQW2RrDmgAUQoagUUzAwppPLCbhx4Jkvum1nL30xlIAyEvpiztLioHFNvS79CUfCBbaN8RwjCkF%2FaV%2FxVAK2iqLGRkt3DiFysjk4terV%2BTm5EDsAVyUPSaDMxNvcWJ2yuxJpZCowxLEUcSt9eFi0kRCFKUqWlabz2ftShQayMS2PcqDA2rV%2BkCrhTpdnl1mukAd6J9zOtOH7DqoJFYMtu9orZYBjmrZaUOW%2FEEVRz2mFxlyUpvAuVhzFwbGM6CNuQIELmXUpq0f0un93zuMMsJCOa43grqDhX5gaDd0uZOUI6mQyJTPtltAP9iic27ahmhM9Xvg2SssY5hZAp7o4e7wSkl1TXHIdOgjiXkrwnnQFCfLnssUkck6YZSQO1XP3ERkVOuxBoglfDIQbtUmjzd4X1ZG4YFT5RoNP6PIa2DeZ7CRR3nrmzGWncYS25mzCYhBQl3QdZZlNDlexZMMJ61ML7RgfJ6Ehj03TYteWOAfhCPFP2kiKHng5iFSp7i5Qo5wiiDwkgwvN5PSqfqvqNbnIS4yQUyEJfRbTZWMMK1w8kGOqUBMofY2v5KfczyytOzH5WNdATi%2BzqGpmJ9CrxndeM4NXR%2FRzry7QePSPArS4Dzxg24E9CxNo1IQN%2F4KqYgvjtYkKaH5Hq93JkTJPAPzVc8GQNgEfHSOKBI0Mu2r%2BOsN5imPSc2Et7N3l1KY4PaT3l9kNz3SOc%2BrYUslM%2FW28d8Dc0B9frc2H3ZWs%2BbhX3jqnA6lfBURYWdAvUG%2FAWc8tdsFGP3Knph&X-Amz-Signature=3dee4e581deb5bed82b595a36cf1d4972a2996e8a786c86c954c381e7ba16716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7QYAUID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQCV2FtCHG6I%2BBqSYhWklhJaD6sZ8YqBNSPMfOPf3pkj3wIgKLBjwV2nosClkXs6J792VtwnDMJ%2BK1g0XaPLuEPzQSsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCliOHQQzYj%2B7WVQwyrcA58%2FlWY7g4lRVKgTu9XbUZNUCMPSLBTeteHXt6DxHgpFJgz1taPjgKSpsNOMV%2BQgk9YFatFg%2FR5gDTy1DWLjD4%2BQW2RrDmgAUQoagUUzAwppPLCbhx4Jkvum1nL30xlIAyEvpiztLioHFNvS79CUfCBbaN8RwjCkF%2FaV%2FxVAK2iqLGRkt3DiFysjk4terV%2BTm5EDsAVyUPSaDMxNvcWJ2yuxJpZCowxLEUcSt9eFi0kRCFKUqWlabz2ftShQayMS2PcqDA2rV%2BkCrhTpdnl1mukAd6J9zOtOH7DqoJFYMtu9orZYBjmrZaUOW%2FEEVRz2mFxlyUpvAuVhzFwbGM6CNuQIELmXUpq0f0un93zuMMsJCOa43grqDhX5gaDd0uZOUI6mQyJTPtltAP9iic27ahmhM9Xvg2SssY5hZAp7o4e7wSkl1TXHIdOgjiXkrwnnQFCfLnssUkck6YZSQO1XP3ERkVOuxBoglfDIQbtUmjzd4X1ZG4YFT5RoNP6PIa2DeZ7CRR3nrmzGWncYS25mzCYhBQl3QdZZlNDlexZMMJ61ML7RgfJ6Ehj03TYteWOAfhCPFP2kiKHng5iFSp7i5Qo5wiiDwkgwvN5PSqfqvqNbnIS4yQUyEJfRbTZWMMK1w8kGOqUBMofY2v5KfczyytOzH5WNdATi%2BzqGpmJ9CrxndeM4NXR%2FRzry7QePSPArS4Dzxg24E9CxNo1IQN%2F4KqYgvjtYkKaH5Hq93JkTJPAPzVc8GQNgEfHSOKBI0Mu2r%2BOsN5imPSc2Et7N3l1KY4PaT3l9kNz3SOc%2BrYUslM%2FW28d8Dc0B9frc2H3ZWs%2BbhX3jqnA6lfBURYWdAvUG%2FAWc8tdsFGP3Knph&X-Amz-Signature=a6cbb88b523de784395445cc65dd7f2ac6f83fd6f31548e8c9a4b9c12c3e1aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

