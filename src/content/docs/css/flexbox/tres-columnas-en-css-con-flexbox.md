---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOW7PJAM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA42nbI%2B7rSNBeecgrnBo31%2BTCjafm3FUW4SBM0cIBmhAiEA7uN56EbRA44Rcx0f0m0hDBc7cujm1xGPHYpYJA4wGTgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPuqIQOykM7bxx0uWCrcA%2B6R1DY0xkFIB4mxPHnv5xUNWMHXbDqdaxiQPSVGBmISjE8XJVp9FFh%2B6NPrKvFAtUr9ET4C5rHFWabTiZP3RbZv3EEYbY%2Be6w%2BwH%2BPxwuR1PmLEuOfP6l%2BUefugLjVd8CRP%2BFFjlHR7FQMt44%2BwWQ5kxiKoWV00iWkhsj8m4yrq1X33Xlp1jpjabPXqdQXdBzoELx%2FyQCgsfCqaRu3ahTfe0PINH4yCWSNfCw3Hrpvw0uvx3kKnJrkFb4cuyHov9VvIhHnhfLbJdo33TiJJUsdat5ac0lv%2FsEmxCTCfWcp6MkaAZyM%2BFIksrwSYueqGny0SfdmFZ2kMbsMmAcI9fv%2BUESmHGgYlAxojIzeesHZRTbIPaHKwoLZIzew1vSAbm%2FkZtsezu0G57i0RchgexnvUp%2FN2yIHm61OUcP%2BThZKUMGAm36m6AmVZLe7avPe6N7qoKLqXEEgDDB4ZXCa4Nlt4XmE20ZfC%2FO%2FDS0GXSyV6cJWVy6yOVkP637Tq8dFX2YEZnMqXDkMb91MMYcHWBVfl4908ogWqWrpW6QBvM%2BaFHFNH%2BXBPNFGyqTkS4vSqQy1Nk66FWooKTpmHgQC7Rhrg6308ro8bJfB5h0r7oGrXvHxDfKXLgV40HZJAMN2tyckGOqUBwRTie%2FwSwc6wlPrCEan2OefeyZ%2FRUumrXYw%2BID8bYeQx19VMGdZFgJC3kVKknlZ%2FC6fR1ukHbty%2BWO9wXrXO4AwxQBhabpH%2Bszupa1lQyg3te%2BjAT2VjoosdsynqKjKHz1stNJP9wDNCtUWaEo4iXuR1njF7sYV%2BRaLnPohltwtLMzn8fLEdHO3O13hNVXRb0I58%2BRbSeZGRaPF7p59FFTiDL7YP&X-Amz-Signature=4394919ccdf9d22546cb2b6367fc92f3e46d5e97172f5b57fb0fe1e190fadf8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOW7PJAM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA42nbI%2B7rSNBeecgrnBo31%2BTCjafm3FUW4SBM0cIBmhAiEA7uN56EbRA44Rcx0f0m0hDBc7cujm1xGPHYpYJA4wGTgq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPuqIQOykM7bxx0uWCrcA%2B6R1DY0xkFIB4mxPHnv5xUNWMHXbDqdaxiQPSVGBmISjE8XJVp9FFh%2B6NPrKvFAtUr9ET4C5rHFWabTiZP3RbZv3EEYbY%2Be6w%2BwH%2BPxwuR1PmLEuOfP6l%2BUefugLjVd8CRP%2BFFjlHR7FQMt44%2BwWQ5kxiKoWV00iWkhsj8m4yrq1X33Xlp1jpjabPXqdQXdBzoELx%2FyQCgsfCqaRu3ahTfe0PINH4yCWSNfCw3Hrpvw0uvx3kKnJrkFb4cuyHov9VvIhHnhfLbJdo33TiJJUsdat5ac0lv%2FsEmxCTCfWcp6MkaAZyM%2BFIksrwSYueqGny0SfdmFZ2kMbsMmAcI9fv%2BUESmHGgYlAxojIzeesHZRTbIPaHKwoLZIzew1vSAbm%2FkZtsezu0G57i0RchgexnvUp%2FN2yIHm61OUcP%2BThZKUMGAm36m6AmVZLe7avPe6N7qoKLqXEEgDDB4ZXCa4Nlt4XmE20ZfC%2FO%2FDS0GXSyV6cJWVy6yOVkP637Tq8dFX2YEZnMqXDkMb91MMYcHWBVfl4908ogWqWrpW6QBvM%2BaFHFNH%2BXBPNFGyqTkS4vSqQy1Nk66FWooKTpmHgQC7Rhrg6308ro8bJfB5h0r7oGrXvHxDfKXLgV40HZJAMN2tyckGOqUBwRTie%2FwSwc6wlPrCEan2OefeyZ%2FRUumrXYw%2BID8bYeQx19VMGdZFgJC3kVKknlZ%2FC6fR1ukHbty%2BWO9wXrXO4AwxQBhabpH%2Bszupa1lQyg3te%2BjAT2VjoosdsynqKjKHz1stNJP9wDNCtUWaEo4iXuR1njF7sYV%2BRaLnPohltwtLMzn8fLEdHO3O13hNVXRb0I58%2BRbSeZGRaPF7p59FFTiDL7YP&X-Amz-Signature=6c78690318ed2c99a2f4083b889e8a40c3e41b59474b71011f99e3692ca6a2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

