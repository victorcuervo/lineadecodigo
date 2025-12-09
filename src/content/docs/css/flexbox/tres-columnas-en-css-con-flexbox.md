---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBFJLRA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjhpLFeo0D0QU1NQq8M0nowGYVh%2BEZlUFUBpvFh%2FcRzAIgS2%2BEL0VaqWPQOOtH1ROQ2QFOxDJtjDiU4vfuGtresxoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM1E6pa3pSyJNhs3CrcAyC%2B%2BwK8dsXQplPwaz6BPYBYQi6vkSdpwfQzSM%2FJdoNQndShIMVi%2F9cYfcaZFZa1jsdNLPCHGZWeolvfojjNw6CJ8%2BacAN014WXtMdJxuKOW%2BkOY%2BUJq1vGeoZZs%2FlB6AdeZSzy%2FG34gXOeF06JWHOYDKGvr4CR0RXwfBTrABrqzZc%2B57yo9N6u4GX03kG22etZcOXPj8dCfcwE38dG9wB6xrYlKqhjrjemlJCpdmqIYLqgPkuKAgysBf%2FItrRfK%2FuOAsNh37KOT4m50MAaEuVfOWQuZmlWFZnFtv29FXZZZ9wW3ARO2er%2FUPRvGcSb%2BqDtmnYDnMchgGHk5f9yUAqteWWBfCU9shCVqo27KIjhexpR%2B2i0%2FBbqT6J3GoSA%2FieYE5kKAPxa%2BebSM8ueAMh5YvEsi4a8%2FXDnPE8rvyDYW1Lgoe5UEgUdihZgDJ2%2F%2Bdj7ZWV5FD%2FA8vOEaFvQwkrYumIHvKK5ILiYyW8tCLIWq8vaOC8Mi0dKYc7WbLh3Uk7n0H7CI8NKTWNReJHAN8WG1cjvKkphXCfGWJb5%2F9Qxlf5sbQi1JErBt6J%2FTtXIAF6ZoqVgXs1%2Bs8mxEdOPBw%2FhEOXi9EO0AFu2ME%2FVuapHpMNXQK3ilZan8byYFMODa3ckGOqUBKtPS34n%2BW%2FqVAmbg0qrNzom9I4dN20HHOBVffkIRro3YAyAOEiuGZjmFM7mXyt9d3ULAHpyfp8uIyOa%2FCoygRte8WtD4J9rCQNBq7aJswdAeM8obfwoch1%2Byc775%2BFyPbyJCFqQ0CFHkDfIjJZxLiucCgv247AzBAa68BEAG0p196ZhODRluPXaz7i7oDMn1Xt2tvZL5wmxrLrPg473tFC%2FUkyUX&X-Amz-Signature=8cb3c82f1e196af1c75e3535ef7e4f3cdd37a6a35ac16dadd17b3565c503eafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVBFJLRA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjhpLFeo0D0QU1NQq8M0nowGYVh%2BEZlUFUBpvFh%2FcRzAIgS2%2BEL0VaqWPQOOtH1ROQ2QFOxDJtjDiU4vfuGtresxoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJM1E6pa3pSyJNhs3CrcAyC%2B%2BwK8dsXQplPwaz6BPYBYQi6vkSdpwfQzSM%2FJdoNQndShIMVi%2F9cYfcaZFZa1jsdNLPCHGZWeolvfojjNw6CJ8%2BacAN014WXtMdJxuKOW%2BkOY%2BUJq1vGeoZZs%2FlB6AdeZSzy%2FG34gXOeF06JWHOYDKGvr4CR0RXwfBTrABrqzZc%2B57yo9N6u4GX03kG22etZcOXPj8dCfcwE38dG9wB6xrYlKqhjrjemlJCpdmqIYLqgPkuKAgysBf%2FItrRfK%2FuOAsNh37KOT4m50MAaEuVfOWQuZmlWFZnFtv29FXZZZ9wW3ARO2er%2FUPRvGcSb%2BqDtmnYDnMchgGHk5f9yUAqteWWBfCU9shCVqo27KIjhexpR%2B2i0%2FBbqT6J3GoSA%2FieYE5kKAPxa%2BebSM8ueAMh5YvEsi4a8%2FXDnPE8rvyDYW1Lgoe5UEgUdihZgDJ2%2F%2Bdj7ZWV5FD%2FA8vOEaFvQwkrYumIHvKK5ILiYyW8tCLIWq8vaOC8Mi0dKYc7WbLh3Uk7n0H7CI8NKTWNReJHAN8WG1cjvKkphXCfGWJb5%2F9Qxlf5sbQi1JErBt6J%2FTtXIAF6ZoqVgXs1%2Bs8mxEdOPBw%2FhEOXi9EO0AFu2ME%2FVuapHpMNXQK3ilZan8byYFMODa3ckGOqUBKtPS34n%2BW%2FqVAmbg0qrNzom9I4dN20HHOBVffkIRro3YAyAOEiuGZjmFM7mXyt9d3ULAHpyfp8uIyOa%2FCoygRte8WtD4J9rCQNBq7aJswdAeM8obfwoch1%2Byc775%2BFyPbyJCFqQ0CFHkDfIjJZxLiucCgv247AzBAa68BEAG0p196ZhODRluPXaz7i7oDMn1Xt2tvZL5wmxrLrPg473tFC%2FUkyUX&X-Amz-Signature=5d675228a6a100d815798ec91e8c79be82b17946a1a37fdf14e56eacf8094186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

