---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHCFDEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc2CJS%2FMmKuUk9xIxq8EiZW7vBGueQelkm0F2SUofMyQIgQxaFzQCOtbkfzDaUrnHazVDP7a0HQbtyHXR3uuC7gcoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoEtl9DOY%2FCizEzZSrcA91SVdoG2W%2BFy9UwKoaxHv%2B8RM0efkUJUSLUDtRRNtidZpqFbL9Uj%2BeGCes%2B45cGX0v88lJLhIFEmJvtKYt7Eadon%2Fnjhtr6J5nh3zbZ9dlEP99nsJLz0boIJvg3Zr7MYwAjFeTkwJy2h08VooMLrCogo6hVKNOvGHQz2n5gqIPCO4A%2FOqExFar3%2FzeBIDujoCPkAc0lCyIW%2FAoBOFuCkw4TVnGEiQQRkxBr8YtMf7KJsRNY4TET5FNoHRBM8C31M0esKmwdRv3mbRUDrntzr19iuy%2F38XRYkCpNzPobEpkKBOsmAtSDy3%2BkIzKHLzyjCeKR42KFxEKVWNr2iexONSH%2B6bPdEpwMX13NM3I42IqnPbFqXogVvBINqPbFSnszE3Cr4OKKErN20vPXpDjS8OJKVf51Rh4fGW5vGrh14naXJlvwLX434jP3ivxBFvQpWPNsKjJmem7iKsIQnZZydu1iczkeEb2aA%2BUEvUHELeIAgahyD5dTclhg6ZLAF7akI9%2B9HR84VsRvtjF5RUggSvpwmvCVqjWSUxvISNQD%2FzJDOjqLckjbkAHVyr9XUH9tx44nc3Cc9r0Ji3f7NUiEVpPaOWDH2rd0Sb6hKkxVHeNmnNnobciuoHkOnw6vMJLm3skGOqUBmf842ieO4svfUoQZpRGpn2%2Fuf5uq0D7f69GIL%2BfGRMd9vsle%2Fs0Zrz%2Fj3zR%2BWzBoMmcV4DYGCmXDPi8AS6RPc%2FZFcu7v55Up2woGgOmJ%2F5wDQiF4jMOYj75GEECSyOhmodE4%2BeaOlouXZ0YVRT0E7UTx0RzwQkAJ8cvwvOcBML851P64iGPNumAuinZueuQFRH%2BIOLvYm57asbVRXtsKLQv3LZEj&X-Amz-Signature=e30cd120227325af426f0c8a8675172c5294c9b2d86e540aa75b20cef5098d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EHCFDEW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc2CJS%2FMmKuUk9xIxq8EiZW7vBGueQelkm0F2SUofMyQIgQxaFzQCOtbkfzDaUrnHazVDP7a0HQbtyHXR3uuC7gcoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoEtl9DOY%2FCizEzZSrcA91SVdoG2W%2BFy9UwKoaxHv%2B8RM0efkUJUSLUDtRRNtidZpqFbL9Uj%2BeGCes%2B45cGX0v88lJLhIFEmJvtKYt7Eadon%2Fnjhtr6J5nh3zbZ9dlEP99nsJLz0boIJvg3Zr7MYwAjFeTkwJy2h08VooMLrCogo6hVKNOvGHQz2n5gqIPCO4A%2FOqExFar3%2FzeBIDujoCPkAc0lCyIW%2FAoBOFuCkw4TVnGEiQQRkxBr8YtMf7KJsRNY4TET5FNoHRBM8C31M0esKmwdRv3mbRUDrntzr19iuy%2F38XRYkCpNzPobEpkKBOsmAtSDy3%2BkIzKHLzyjCeKR42KFxEKVWNr2iexONSH%2B6bPdEpwMX13NM3I42IqnPbFqXogVvBINqPbFSnszE3Cr4OKKErN20vPXpDjS8OJKVf51Rh4fGW5vGrh14naXJlvwLX434jP3ivxBFvQpWPNsKjJmem7iKsIQnZZydu1iczkeEb2aA%2BUEvUHELeIAgahyD5dTclhg6ZLAF7akI9%2B9HR84VsRvtjF5RUggSvpwmvCVqjWSUxvISNQD%2FzJDOjqLckjbkAHVyr9XUH9tx44nc3Cc9r0Ji3f7NUiEVpPaOWDH2rd0Sb6hKkxVHeNmnNnobciuoHkOnw6vMJLm3skGOqUBmf842ieO4svfUoQZpRGpn2%2Fuf5uq0D7f69GIL%2BfGRMd9vsle%2Fs0Zrz%2Fj3zR%2BWzBoMmcV4DYGCmXDPi8AS6RPc%2FZFcu7v55Up2woGgOmJ%2F5wDQiF4jMOYj75GEECSyOhmodE4%2BeaOlouXZ0YVRT0E7UTx0RzwQkAJ8cvwvOcBML851P64iGPNumAuinZueuQFRH%2BIOLvYm57asbVRXtsKLQv3LZEj&X-Amz-Signature=ee6db1982d0966c921e4d528176a65664fcb9663a381491cd44b4183d876aead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

