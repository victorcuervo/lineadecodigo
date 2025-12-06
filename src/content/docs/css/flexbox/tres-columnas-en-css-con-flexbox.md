---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S45CAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwbzWoM0AfyqVhwYTiHmQ%2BaqhBiCxXfxPCI10%2Bi%2F3q6AiEA%2F9%2FgPu%2BqhCGnwH%2F0hMIiuo%2Fvk4N9QMmx0gvJreNS4DEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCrOQxC8Q4ia%2BSsG4CrcA32HgnKmxyh0FvnIUNgWDuWM5OY%2FQPOhQt8IhJHca5eUQ5jM4cPthM4ylDzTjXmLoLg%2B1HUB7nWIEJ3nHTEVgaSi6me0KXmFo%2Ffymz%2Bg0efwwrLU6ffzZDMQ7SjXhQmVMfzGGtpMYNySIJtDgKPPu%2B2KHk63ZNjJUeZNMpjnn2pnkwi2jG8WhMbS27eDeOwppvI6vro8if%2BRs%2BMfQnWntlmV%2FZ6RuQX23aRBAXg7TLvtpJfsTVT13Ooz3FdoE0ktr2e0bf8%2FMBPG4TZG2054gb2Fj0msNt1yIzR9PCWH54FWJuCnrr4Wnlaj9eDCVHTAxzDsrDjLkKGXZHQ6uu25NWbxXAgT%2FpJpUU66naxEF9tB9%2BRfaXdog%2B2SaXMGTO2l1O%2FyuExgTkTh5pE%2BMgGzIUsx0kzUGEPVQm%2FESdnnIRgUpOnue1Dorq4iuLoXSSTXgXCnFV7Semk4WIovXoaYG0bvxqC5XYFWeD5v0LtwbbtjEOL03NF6XwG5xSJouS93wUpVS6W2AJlmt0bdZfR%2BiPmnRft2GV05wp9KIXCaxAoh0Ik7X6hIvQnGtt24PsI%2BLocagsexM2wAtlIu3UJkIX1HFukNQlAHQhwP4HzI1HbDavmWe0X%2BLc%2FLMTsYMJGfz8kGOqUBxNTnK%2B5QJ6PtBPa7zy3AIaqznkD%2FAEnljYRlp6hXwSIvpXshPXb2%2BW4jnWzLlTYYw0RR9HTrw3ZCX00%2F0PpcCDXV3twGKyWXZFNdEkuqvniLE1NRCc28ghHhXSonizJA3W6%2F7%2BteEl78jt%2F4y8eYepX1iXu4m7VZyyIhd7tCoZfHmcNQqd16%2BY6nkCA8vMLtOFttvc70IVCGyYq%2BtYJV1KMvJWYf&X-Amz-Signature=3951953000a3ac0690ce904cd7014906ef57c91d32bb868e40aed3bdb07183cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663S45CAI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICwbzWoM0AfyqVhwYTiHmQ%2BaqhBiCxXfxPCI10%2Bi%2F3q6AiEA%2F9%2FgPu%2BqhCGnwH%2F0hMIiuo%2Fvk4N9QMmx0gvJreNS4DEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCrOQxC8Q4ia%2BSsG4CrcA32HgnKmxyh0FvnIUNgWDuWM5OY%2FQPOhQt8IhJHca5eUQ5jM4cPthM4ylDzTjXmLoLg%2B1HUB7nWIEJ3nHTEVgaSi6me0KXmFo%2Ffymz%2Bg0efwwrLU6ffzZDMQ7SjXhQmVMfzGGtpMYNySIJtDgKPPu%2B2KHk63ZNjJUeZNMpjnn2pnkwi2jG8WhMbS27eDeOwppvI6vro8if%2BRs%2BMfQnWntlmV%2FZ6RuQX23aRBAXg7TLvtpJfsTVT13Ooz3FdoE0ktr2e0bf8%2FMBPG4TZG2054gb2Fj0msNt1yIzR9PCWH54FWJuCnrr4Wnlaj9eDCVHTAxzDsrDjLkKGXZHQ6uu25NWbxXAgT%2FpJpUU66naxEF9tB9%2BRfaXdog%2B2SaXMGTO2l1O%2FyuExgTkTh5pE%2BMgGzIUsx0kzUGEPVQm%2FESdnnIRgUpOnue1Dorq4iuLoXSSTXgXCnFV7Semk4WIovXoaYG0bvxqC5XYFWeD5v0LtwbbtjEOL03NF6XwG5xSJouS93wUpVS6W2AJlmt0bdZfR%2BiPmnRft2GV05wp9KIXCaxAoh0Ik7X6hIvQnGtt24PsI%2BLocagsexM2wAtlIu3UJkIX1HFukNQlAHQhwP4HzI1HbDavmWe0X%2BLc%2FLMTsYMJGfz8kGOqUBxNTnK%2B5QJ6PtBPa7zy3AIaqznkD%2FAEnljYRlp6hXwSIvpXshPXb2%2BW4jnWzLlTYYw0RR9HTrw3ZCX00%2F0PpcCDXV3twGKyWXZFNdEkuqvniLE1NRCc28ghHhXSonizJA3W6%2F7%2BteEl78jt%2F4y8eYepX1iXu4m7VZyyIhd7tCoZfHmcNQqd16%2BY6nkCA8vMLtOFttvc70IVCGyYq%2BtYJV1KMvJWYf&X-Amz-Signature=e1f89d9bb4e092df151faea9ac958b857f0db527bea88de09d41e5e51ef9c9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

