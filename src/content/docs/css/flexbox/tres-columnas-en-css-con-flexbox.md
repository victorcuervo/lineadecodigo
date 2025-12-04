---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDO2CSF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFH%2BxNiV27jlLid0dem8BDxUVmoEIaDLt5WVrou7K6WAAiB1BGqRStsxupUrt062ZtB35LEDPkDrL0KQL%2FnplgjVHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMsZgHjoctcCu0dEQAKtwD0f5AvSkFGzOmcv%2FLaklkOuWzmVsXoBXO6FTWHuz5hJOUfUNHeUlxHjb7LVXZh%2BsmzdV4fBjRPHHZCtVOFF3wtdxI0T45%2F2YoUWb8%2FKNdQowtL4W3O5pAULX%2Fpa%2B1cEnoT7QvMvpIvNROxsmAaAL%2BXWUTc0FidNRkXw9ePX%2B0SK1EcYKHIRi%2BlZK5lcBIYxPUZ%2B7xnPFzDLWFVdcM0N96DF0pXlFcpvEAKNd0oEp6bVsCkiiTy3FM1qSzyRAPNX%2FBNv1qruRe%2FXeQ7%2FEvI1xVPVkIN0w3Yf9oB3TuIRkvBIzUdqTlbwt0jeYZ8AYGiXFBNKKp%2BiwAca8pdZzYDlH1LgjafH6sD00MAv2prMFlNx1sTYolkSBV8M5H4nQZa2nhQCktNmnYFovB%2Bm%2FDlNFbQiKRUbwM8Giueb6MX8F0wlcLBPy%2FnV9jptgw4qTbQSDZHky5IPn5Y7gc563yiQCQD8bzKa5GB90TNO8EOcRxEQ2kCXr7ER0oRNIh5FLM%2Fuy2oiKRkkdFBTQ4Ur%2FJFgpGPpkoRXWYlPNSR%2FdFMQ4stE64lE0VEaA2ViAe30n%2FTuQSp%2B0RpW3fYRB%2BjzoVHQogLpqGgoZnjH1a3wAjgy7b7L%2Bx%2BmqDdPggHLDKTbQwkoTGyQY6pgF15CJL5xnzCSKMxfUUvGBi9kA0VfW15CPQV3hyU2MH9pv3AAHjsPpsh60Ka4YKRvMNLeSjK3rycGS%2Fxeh2eaSF80GH9xxTwJbsEF856J%2BMB%2BHn8nlZP0hIxvCstfOLDS8DDAgZ6d0j3qigTODbGhKRoz3Thn72ADGTVFR16bP1a8vuLXwf2I5ObaD1l1H4OinmIbWvCxZ0QWNJQbgE%2B5NWxGSFttSF&X-Amz-Signature=038009ff7c1046b50091a217f7a5578bd5324b6d575aac6cf5f7df93ee29797e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLDO2CSF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFH%2BxNiV27jlLid0dem8BDxUVmoEIaDLt5WVrou7K6WAAiB1BGqRStsxupUrt062ZtB35LEDPkDrL0KQL%2FnplgjVHyr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMsZgHjoctcCu0dEQAKtwD0f5AvSkFGzOmcv%2FLaklkOuWzmVsXoBXO6FTWHuz5hJOUfUNHeUlxHjb7LVXZh%2BsmzdV4fBjRPHHZCtVOFF3wtdxI0T45%2F2YoUWb8%2FKNdQowtL4W3O5pAULX%2Fpa%2B1cEnoT7QvMvpIvNROxsmAaAL%2BXWUTc0FidNRkXw9ePX%2B0SK1EcYKHIRi%2BlZK5lcBIYxPUZ%2B7xnPFzDLWFVdcM0N96DF0pXlFcpvEAKNd0oEp6bVsCkiiTy3FM1qSzyRAPNX%2FBNv1qruRe%2FXeQ7%2FEvI1xVPVkIN0w3Yf9oB3TuIRkvBIzUdqTlbwt0jeYZ8AYGiXFBNKKp%2BiwAca8pdZzYDlH1LgjafH6sD00MAv2prMFlNx1sTYolkSBV8M5H4nQZa2nhQCktNmnYFovB%2Bm%2FDlNFbQiKRUbwM8Giueb6MX8F0wlcLBPy%2FnV9jptgw4qTbQSDZHky5IPn5Y7gc563yiQCQD8bzKa5GB90TNO8EOcRxEQ2kCXr7ER0oRNIh5FLM%2Fuy2oiKRkkdFBTQ4Ur%2FJFgpGPpkoRXWYlPNSR%2FdFMQ4stE64lE0VEaA2ViAe30n%2FTuQSp%2B0RpW3fYRB%2BjzoVHQogLpqGgoZnjH1a3wAjgy7b7L%2Bx%2BmqDdPggHLDKTbQwkoTGyQY6pgF15CJL5xnzCSKMxfUUvGBi9kA0VfW15CPQV3hyU2MH9pv3AAHjsPpsh60Ka4YKRvMNLeSjK3rycGS%2Fxeh2eaSF80GH9xxTwJbsEF856J%2BMB%2BHn8nlZP0hIxvCstfOLDS8DDAgZ6d0j3qigTODbGhKRoz3Thn72ADGTVFR16bP1a8vuLXwf2I5ObaD1l1H4OinmIbWvCxZ0QWNJQbgE%2B5NWxGSFttSF&X-Amz-Signature=c0a31e26c753200890534340dd7d970276ef19496267a17824b43b1bd1ebd101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

