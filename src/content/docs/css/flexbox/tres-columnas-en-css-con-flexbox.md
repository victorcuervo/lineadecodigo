---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH6HINV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4bcTMCTJ6J8jemPFiYgLBE%2BtIhrZpBxLBgRypeE4fAIgZxl8G5FlZPCnF8pmamcexhsKn7Vj15ijA4tfK1AI%2FNQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPmoT8rCGBP4qd%2F1gCrcAwBom4GN1NygHw4phyik8DzNmay8N2TVBSS22VHyZu6pO2PX2aV0DNdvwpI9CNH1lzE3G%2FfZrCef7KAx8vj6C6sA8sft4JLjImWh1J%2FP8Y4G8Dl3yVB4Q8w3nKF2rEUtjY18eX9hZnX6cKep%2BMY%2Bfg5CClB0AhaVldmV3XOIpK3i%2BF7DmOvP45%2BcCqww7evWGf7UaHhKm241HhAz5GVu74ZNd5kZxpegnlLo%2FF45QD%2BViKGmymFNMijxY1If1kXFh%2F0OGCDJycIlNKBHc7aOTeZDyu8B9BPfkp%2FR%2FdQuf6KH2jaL0HxmCvaizyUjMlFD%2BIYsQAonYqYVSrZRzkhgz%2FmJa3w%2BItm45O3P82WK03ntWOg1chrJPPiwT4xVDnotRbxtKTxUntPt6BaCeRFXQr0FwMO2AFq5QObH2MCAtz2MgnxMbYisq7Pn4GUr2SfjhrNc74Fz4qLjJQgdm3kTQOmyfzrci4ceZVGd%2FyGAokIIZgNbAwkd02VXFo6%2FB%2F9F9CNH8v9lu5AnhnjdUv9EZIMyD2gC8Eth11k7dwz%2FjAvGsKrfTx0WiDH4m%2BwppNsIdWYlt5v2TIrLze%2BeZVIUdWwzoTQU58icjcWIhJGyFYyNknL4YERddMS3tHFWMKq8z8kGOqUBh9R61s5CnRUhS8IlztwUQeYCBVAvfrkKGY0AEQt%2Bq0ADCMhTqjQpIugFbEySIw48mmw%2BcrMtBMs3gjYrN%2BHB1blFsX5BZvwW%2FBwwh9gEJYCyilQD3u%2FtM5lMsPjr4PS0%2BzzI9xD%2B01rVh7oY5ceB%2B8yCpIFadl1S25vqJYO3A2Ltv9TOFAPOr2Id9sKzS5giBdrxVnCeORQiA3q%2FP7J1q2Gie8i3&X-Amz-Signature=3bae22e12c8e07d0c5679f42e14a40292875a1d2fb59d116d3ab33b8d883ef65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLH6HINV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr4bcTMCTJ6J8jemPFiYgLBE%2BtIhrZpBxLBgRypeE4fAIgZxl8G5FlZPCnF8pmamcexhsKn7Vj15ijA4tfK1AI%2FNQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPmoT8rCGBP4qd%2F1gCrcAwBom4GN1NygHw4phyik8DzNmay8N2TVBSS22VHyZu6pO2PX2aV0DNdvwpI9CNH1lzE3G%2FfZrCef7KAx8vj6C6sA8sft4JLjImWh1J%2FP8Y4G8Dl3yVB4Q8w3nKF2rEUtjY18eX9hZnX6cKep%2BMY%2Bfg5CClB0AhaVldmV3XOIpK3i%2BF7DmOvP45%2BcCqww7evWGf7UaHhKm241HhAz5GVu74ZNd5kZxpegnlLo%2FF45QD%2BViKGmymFNMijxY1If1kXFh%2F0OGCDJycIlNKBHc7aOTeZDyu8B9BPfkp%2FR%2FdQuf6KH2jaL0HxmCvaizyUjMlFD%2BIYsQAonYqYVSrZRzkhgz%2FmJa3w%2BItm45O3P82WK03ntWOg1chrJPPiwT4xVDnotRbxtKTxUntPt6BaCeRFXQr0FwMO2AFq5QObH2MCAtz2MgnxMbYisq7Pn4GUr2SfjhrNc74Fz4qLjJQgdm3kTQOmyfzrci4ceZVGd%2FyGAokIIZgNbAwkd02VXFo6%2FB%2F9F9CNH8v9lu5AnhnjdUv9EZIMyD2gC8Eth11k7dwz%2FjAvGsKrfTx0WiDH4m%2BwppNsIdWYlt5v2TIrLze%2BeZVIUdWwzoTQU58icjcWIhJGyFYyNknL4YERddMS3tHFWMKq8z8kGOqUBh9R61s5CnRUhS8IlztwUQeYCBVAvfrkKGY0AEQt%2Bq0ADCMhTqjQpIugFbEySIw48mmw%2BcrMtBMs3gjYrN%2BHB1blFsX5BZvwW%2FBwwh9gEJYCyilQD3u%2FtM5lMsPjr4PS0%2BzzI9xD%2B01rVh7oY5ceB%2B8yCpIFadl1S25vqJYO3A2Ltv9TOFAPOr2Id9sKzS5giBdrxVnCeORQiA3q%2FP7J1q2Gie8i3&X-Amz-Signature=26bd86b225c4f93a1bcaa0fd4a0eba5d49c3679ebad680a2536f802122b26903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

