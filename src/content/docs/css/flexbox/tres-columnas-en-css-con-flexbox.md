---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4GGSB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8Lur5p8S6pMw8CjQT1rHkdaJ5r1I0ay9rUUP3%2FDtZQIhAOXjtf2HxdS01kaAUUDhzJyPlk0YWoRYy%2BiJy1IJrSyLKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7KIiOjKsCy0%2BfeN0q3APMyzJjixjw2T%2FA7xCwWVuV%2FfnqittWlSV40j6xSyXH%2BveNhm8YIaxWAeELa0hYXDoB%2BKNYRR02jRLlTPRvDLlHDKxDV9Ond2ZmB48apN8Xri0%2BeFwfaqEvtQDLfAu9y8PZosPgt2nkcRFny%2F9OCr3tlqP%2FsLnHxAioKxrB9z4oi9GFJZ0rpNzVx7E%2FuhoWmlc8UczVd4KlCCM%2BCX1UGhEMOi6PgOZvng4YvMl4itq1IVju5S6Atzdhdm4PAn%2BcrosJ8iTLh1WM2Y%2FpGB5VrcmFccOMcf8N0SQ7yxOGF5ePCWToPph4xa%2BNvun1mU1pOGH%2FWexlKwl4P0qmH4ccKgMHgzxmUSkxPyG4t3tt7WvP8fs%2BSJk1gC96aVAYiOaqzhivtuSnVcKQ1rTbZTPk0ss5hBpXyx%2BYSM61JFN4UWda0Mggr%2Bqo0fCZD7QjusDS1xqwXogUZbWnU52apeaeYQe%2BXDJGH39RSz1o8oTM0VnADdn4h%2BzS3G0xB777Pj2Mv0MVZAke8%2FTUSPtjzcQw3GWjDfiaJwO903Q5n3%2Bpxw2ZAvHjS9QR3hFX3XGsWe2ttzOrowf5hkmdkPtCM4LqItP1Y84yUK5uwwFeZdGK5ItrkYOnhY%2BV0AGIRIpqhjDWptDJBjqkAU97d06O9Zq3NSAW5%2FgbPvVGH2b3STaCM0cPbsv0TcO7YgZHY8yPu3tDYNcxU4W%2F69tFwV0vDGx4rscs68FD1ztXpT3K2PzrW0xLKxzb1ZIh1qN1jjAjuXe4N0JVL6gKiDIs0MRPi4BBv4P3MZnxAGjHmkUkNc2mIcaRtrPisPy%2BrltEzwKaVG%2FSjqYuk3XMqJMTKgmZC%2FHqJbTrD%2Bgi6mXznpzY&X-Amz-Signature=b2b11be4ddec953a8f5fe9802abfa61991cc3ac4c2884e010ef0c076e35c5369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX4GGSB2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8Lur5p8S6pMw8CjQT1rHkdaJ5r1I0ay9rUUP3%2FDtZQIhAOXjtf2HxdS01kaAUUDhzJyPlk0YWoRYy%2BiJy1IJrSyLKv8DCHUQABoMNjM3NDIzMTgzODA1Igz7KIiOjKsCy0%2BfeN0q3APMyzJjixjw2T%2FA7xCwWVuV%2FfnqittWlSV40j6xSyXH%2BveNhm8YIaxWAeELa0hYXDoB%2BKNYRR02jRLlTPRvDLlHDKxDV9Ond2ZmB48apN8Xri0%2BeFwfaqEvtQDLfAu9y8PZosPgt2nkcRFny%2F9OCr3tlqP%2FsLnHxAioKxrB9z4oi9GFJZ0rpNzVx7E%2FuhoWmlc8UczVd4KlCCM%2BCX1UGhEMOi6PgOZvng4YvMl4itq1IVju5S6Atzdhdm4PAn%2BcrosJ8iTLh1WM2Y%2FpGB5VrcmFccOMcf8N0SQ7yxOGF5ePCWToPph4xa%2BNvun1mU1pOGH%2FWexlKwl4P0qmH4ccKgMHgzxmUSkxPyG4t3tt7WvP8fs%2BSJk1gC96aVAYiOaqzhivtuSnVcKQ1rTbZTPk0ss5hBpXyx%2BYSM61JFN4UWda0Mggr%2Bqo0fCZD7QjusDS1xqwXogUZbWnU52apeaeYQe%2BXDJGH39RSz1o8oTM0VnADdn4h%2BzS3G0xB777Pj2Mv0MVZAke8%2FTUSPtjzcQw3GWjDfiaJwO903Q5n3%2Bpxw2ZAvHjS9QR3hFX3XGsWe2ttzOrowf5hkmdkPtCM4LqItP1Y84yUK5uwwFeZdGK5ItrkYOnhY%2BV0AGIRIpqhjDWptDJBjqkAU97d06O9Zq3NSAW5%2FgbPvVGH2b3STaCM0cPbsv0TcO7YgZHY8yPu3tDYNcxU4W%2F69tFwV0vDGx4rscs68FD1ztXpT3K2PzrW0xLKxzb1ZIh1qN1jjAjuXe4N0JVL6gKiDIs0MRPi4BBv4P3MZnxAGjHmkUkNc2mIcaRtrPisPy%2BrltEzwKaVG%2FSjqYuk3XMqJMTKgmZC%2FHqJbTrD%2Bgi6mXznpzY&X-Amz-Signature=f68140465fe4fcf0189bcda715d986556d2c799d15614be0678919bbcf159cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

