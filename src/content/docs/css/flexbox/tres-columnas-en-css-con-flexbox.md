---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VW5CH7J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRKQ4g7cieBlazDMr1Mf13Pa25Sl5M25%2FoURBdZkpWyAiEAldNaSrr9GgpopZUNNTe%2FdFwnDgolCl9oEvOt5poYF30qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4q4rtnckasE0DQcyrcA9DFgfJpD%2Fng9ktpBqpOukfi87QxIFQKRZhL6JOx15a1kEJeLErkDFiylHhF1S4XjXs8yqlw%2FIdm4ODs3%2FaJO1b776I865e9TtSfyZn2oAULwFs4mj5M6yryvcopIGKtDWUbA%2BctXaM7EJA%2F58z3rTMwp5NOgYdlaIVqrk7ivepC3s6CP3uQO%2F17IqP40BUo%2Fl8DMOV0pfNwIqpGMlMl3Tz3w4nd5CXRmNHqPA6eKDsnXoYU5QFDzvjibnrnugnJkPZhZitpcNp2Ip9TehiMvs7P96HdSwvpobmbUPXWYyzJGSWEOEnBme6z62wfrsaxKg5hfV0byN%2BrmnQeph0XTzgZy0OSzPmHo0GxkDJ5KRwnTCQq9oj47fMjuos0nkXvZR2A2L66Xb374hqhye01IQh7FPbLaGe8fFOC0%2FoyyWInnzH6kzopcBOh2c3GAeIUKEqzPYfXhXO1irCBVGOwvcsDp7oG57K9wsnKGuhIvQ3xaI0%2BRosUlrmA5tEETLG5u%2B8lHfHxmxrMNauOiy9Eh%2BQKRjjWm6Rn7VTTozczh4glHtblTc5tFCrO6SDG5uTJg4Ow9FJJ%2BrHNtl%2F8TQIJqhwCwdsrviJCtWuP8YtLHCBLMMahiM2Az5lIN3YuMPXH18kGOqUBwzP%2FBXZdsqFB2UGvCDGy4YEarsLCvhc%2FRK4U7aeCO0hlNjDAq4%2BvfmzYOdfjSvRZ5XwN7%2F8WXKocNYufDNqHNj2KXIK6tCCV6fXMkWh5Tz5dyczhJFm4U7R0lxm5l9msVROHBr1vuqUmWJAbQWbdTBOpOkavUDrZIErAEbUUVKTNgR7%2BJdb8KLhdIeC7rw6WuBWyO0Pt7zpV0%2F8I0iFFDQevVaUT&X-Amz-Signature=839d569c937c4b48c9f4caa751b9c9ff637a0f1e1cae67c4023f53a577d85c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VW5CH7J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRKQ4g7cieBlazDMr1Mf13Pa25Sl5M25%2FoURBdZkpWyAiEAldNaSrr9GgpopZUNNTe%2FdFwnDgolCl9oEvOt5poYF30qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN4q4rtnckasE0DQcyrcA9DFgfJpD%2Fng9ktpBqpOukfi87QxIFQKRZhL6JOx15a1kEJeLErkDFiylHhF1S4XjXs8yqlw%2FIdm4ODs3%2FaJO1b776I865e9TtSfyZn2oAULwFs4mj5M6yryvcopIGKtDWUbA%2BctXaM7EJA%2F58z3rTMwp5NOgYdlaIVqrk7ivepC3s6CP3uQO%2F17IqP40BUo%2Fl8DMOV0pfNwIqpGMlMl3Tz3w4nd5CXRmNHqPA6eKDsnXoYU5QFDzvjibnrnugnJkPZhZitpcNp2Ip9TehiMvs7P96HdSwvpobmbUPXWYyzJGSWEOEnBme6z62wfrsaxKg5hfV0byN%2BrmnQeph0XTzgZy0OSzPmHo0GxkDJ5KRwnTCQq9oj47fMjuos0nkXvZR2A2L66Xb374hqhye01IQh7FPbLaGe8fFOC0%2FoyyWInnzH6kzopcBOh2c3GAeIUKEqzPYfXhXO1irCBVGOwvcsDp7oG57K9wsnKGuhIvQ3xaI0%2BRosUlrmA5tEETLG5u%2B8lHfHxmxrMNauOiy9Eh%2BQKRjjWm6Rn7VTTozczh4glHtblTc5tFCrO6SDG5uTJg4Ow9FJJ%2BrHNtl%2F8TQIJqhwCwdsrviJCtWuP8YtLHCBLMMahiM2Az5lIN3YuMPXH18kGOqUBwzP%2FBXZdsqFB2UGvCDGy4YEarsLCvhc%2FRK4U7aeCO0hlNjDAq4%2BvfmzYOdfjSvRZ5XwN7%2F8WXKocNYufDNqHNj2KXIK6tCCV6fXMkWh5Tz5dyczhJFm4U7R0lxm5l9msVROHBr1vuqUmWJAbQWbdTBOpOkavUDrZIErAEbUUVKTNgR7%2BJdb8KLhdIeC7rw6WuBWyO0Pt7zpV0%2F8I0iFFDQevVaUT&X-Amz-Signature=4f670014422805bc451681d8532cc6ab33fd14085d7d36f08ccebc501b55b24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

