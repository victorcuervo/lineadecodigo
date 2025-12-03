---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZC4Q5G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCinewZ6LaJ2%2F4wkwUKfrGSZ5WKmKxKy6glXzzPIqgyiQIgE2lmoLaWdS5m0sH8OwHwOxyhbUQBAjOxkTAyM1lPSPgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFybaf%2B3FR%2Bhr0fACyrcA6ROAQGoEXfB7QBzx5cnXqjx1gzVv%2BfqXZjL9at%2B7fPZNF5eVaU6p3xMK%2FPmiTHcZBgdh17q%2FnI265w3mA6N%2BnvGFAy4Vrc1bR1zFKq5RRHu2YEwCjQB0zJxoBIkdr060U7mEsmzZ2fX0c0nGItNAjS5v4Bp3GymQOIsqOS7X5qVCc0ImKX3TVYOFjPUeySIIvnMWGHM%2BwTrpaFIqtns6HpqXmtmcP2iHZztmGOEq3frGQi3nObvXAP3xzWbDNhVL9HHSR2Xya5i3%2F3pqbXaEiGv%2F%2FZd4cLlQrNEtpzg8mBeJfdPNhTwec8VXUmDrGCSxFAg1DmKIwMplzneQvqubMzMm0hor6YG%2BJ6SIficfQR0IdV7mSQZ%2BktiO2%2Fb9sbXK3ntnjOwZVNTEGb%2BVXIArEDFn9zbvpCt6zbJcNjTqFzi67liJgXqAXPiEJTP2rXpkmtM261tQjrAWkgKWkP8moRZsnjmkHADEZQUFL7RvdbbL%2ByFfePJNGQKlanwN2lWZF0gLTvKAqL32h6JgYF3sVZLwBHzm9XFT4VvR039KWBxOGDrYnG2Q2Rbbf%2B7hY%2BWn346wV99Y21%2Bo68vum7UA%2F7JPxgezqCyiUv%2BD1Gj8qOS2AbREUt5LEevS2X9MM74wskGOqUB72V6%2FfA2BFPWXg30j0YXhKsOyPiZgd47YoP1Ucpg2ObzFdq7du06qID9wYTogh1K4sq1DMBuJw14YaRsPXrbXyddPc2eXLwLWs5HtfbDj03p65We2LPUB4WYYOoTG1J6w2yAmMBSC6cVLJOfO9ba0vW4XsYhYdZ4ImfiAguwyc%2FGOsTbqZBWIVKYZTHHxUd5K9CgYZYTR7btZITqym0u87c03y0r&X-Amz-Signature=f02a2d831efce2e942e2b23004977d865595ab4b3d9c494e62cdd882ccea00bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZC4Q5G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQCinewZ6LaJ2%2F4wkwUKfrGSZ5WKmKxKy6glXzzPIqgyiQIgE2lmoLaWdS5m0sH8OwHwOxyhbUQBAjOxkTAyM1lPSPgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDFybaf%2B3FR%2Bhr0fACyrcA6ROAQGoEXfB7QBzx5cnXqjx1gzVv%2BfqXZjL9at%2B7fPZNF5eVaU6p3xMK%2FPmiTHcZBgdh17q%2FnI265w3mA6N%2BnvGFAy4Vrc1bR1zFKq5RRHu2YEwCjQB0zJxoBIkdr060U7mEsmzZ2fX0c0nGItNAjS5v4Bp3GymQOIsqOS7X5qVCc0ImKX3TVYOFjPUeySIIvnMWGHM%2BwTrpaFIqtns6HpqXmtmcP2iHZztmGOEq3frGQi3nObvXAP3xzWbDNhVL9HHSR2Xya5i3%2F3pqbXaEiGv%2F%2FZd4cLlQrNEtpzg8mBeJfdPNhTwec8VXUmDrGCSxFAg1DmKIwMplzneQvqubMzMm0hor6YG%2BJ6SIficfQR0IdV7mSQZ%2BktiO2%2Fb9sbXK3ntnjOwZVNTEGb%2BVXIArEDFn9zbvpCt6zbJcNjTqFzi67liJgXqAXPiEJTP2rXpkmtM261tQjrAWkgKWkP8moRZsnjmkHADEZQUFL7RvdbbL%2ByFfePJNGQKlanwN2lWZF0gLTvKAqL32h6JgYF3sVZLwBHzm9XFT4VvR039KWBxOGDrYnG2Q2Rbbf%2B7hY%2BWn346wV99Y21%2Bo68vum7UA%2F7JPxgezqCyiUv%2BD1Gj8qOS2AbREUt5LEevS2X9MM74wskGOqUB72V6%2FfA2BFPWXg30j0YXhKsOyPiZgd47YoP1Ucpg2ObzFdq7du06qID9wYTogh1K4sq1DMBuJw14YaRsPXrbXyddPc2eXLwLWs5HtfbDj03p65We2LPUB4WYYOoTG1J6w2yAmMBSC6cVLJOfO9ba0vW4XsYhYdZ4ImfiAguwyc%2FGOsTbqZBWIVKYZTHHxUd5K9CgYZYTR7btZITqym0u87c03y0r&X-Amz-Signature=ead0ca10f1e40b87c036c84bb36cb0837636157b26a3c99d68e47ebfe83a837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

