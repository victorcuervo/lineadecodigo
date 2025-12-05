---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R3YPM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZtdOecl1IIpWYgUCiyr8pHs7wAaa0DLsbGwd%2FxGDUvAiEA93QULMIv2xXlMo53aKkDoyKvb6awvDdCHsRMgSwOmDMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCpQNNPN9MRJ2ZZNlCrcAzC6rpc0nZCwimKmRrwcD3NlZE5AJ%2BNNRKXHTpRrn6xVSAFhOldafu9Vb93SWHYe6FqH9VBYv4J%2FgG9p8vpGAUXX9OyhxP2UXiOrSHl6UUvaJGySu7yQGWpgRjzSviN0KwR5RNsG5DHOrbf30CVQV7PiSrtWm3CG5ei8ugYBlB3pruV3LlrjFpGtTRXDJzuLKL8TpN2SjsFJRFCo64blpzXvCjSDZeSTVt2tJH8QCq1xqjbQnV9h%2BvFg8C3GvbmwclZbROS35xUhdWmpMWKZnlaQ94hMp%2FyEdF6kYsuRN2XRSbA9SymzfgdhAg9SMuqiS%2B93K9VXaJjhQxpUNodkieX%2FnzbHeVtNOToIHZy8dnSOhvsTRGU5nN6wmkoFD6%2FhwCFTTCWUu%2B2ZlraqkInY90QzWsyvSbwHStD4MpSuW2vI1Fb7nAKMMTvKs9xAOhfhmhB5sKmXbCRznx5wZ4xQtalgc16JMSxksDrANTQ6Qq%2FPQF4AYs1XluOvADXIMOQm1IW2DwES2Zj80nnKN6yslrbYoFXpUhlJDSLu%2Bk%2BxzctB%2Fxzf2lGHGnlCXLtY4opmFl0IoRV8n0ZEhc91YKLlmIlh8VeWZ7EvqoSY%2Fgz6nWa8va6edmHUK6WQgXL%2FMPn0y8kGOqUB5K9ITmQtJEaWbRJ6YUUeRwvThuvGzm6LU8Z%2FD0Dvs4YOFTHDfNQum866GJoybP8E4Y%2B11frVYQzHnqY6Qn5UgWWc%2BNlZY9KCxGSFUWzTvIh8GFJfjRzyFCB%2B9FxLkYyrYHJYbGztBtxmDe8XyohHF5QHwSeDoTgMFx4Evrzj9WsF%2F3Zvdz7wLN7bF%2BFdC%2Flrnosb1gTGJNHgXmwOCvyiRQSG1bX6&X-Amz-Signature=be914a81a7ae72a664ba26848d6dd9b9205b56533c02df3e3cf3573035596a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R44R3YPM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHZtdOecl1IIpWYgUCiyr8pHs7wAaa0DLsbGwd%2FxGDUvAiEA93QULMIv2xXlMo53aKkDoyKvb6awvDdCHsRMgSwOmDMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDCpQNNPN9MRJ2ZZNlCrcAzC6rpc0nZCwimKmRrwcD3NlZE5AJ%2BNNRKXHTpRrn6xVSAFhOldafu9Vb93SWHYe6FqH9VBYv4J%2FgG9p8vpGAUXX9OyhxP2UXiOrSHl6UUvaJGySu7yQGWpgRjzSviN0KwR5RNsG5DHOrbf30CVQV7PiSrtWm3CG5ei8ugYBlB3pruV3LlrjFpGtTRXDJzuLKL8TpN2SjsFJRFCo64blpzXvCjSDZeSTVt2tJH8QCq1xqjbQnV9h%2BvFg8C3GvbmwclZbROS35xUhdWmpMWKZnlaQ94hMp%2FyEdF6kYsuRN2XRSbA9SymzfgdhAg9SMuqiS%2B93K9VXaJjhQxpUNodkieX%2FnzbHeVtNOToIHZy8dnSOhvsTRGU5nN6wmkoFD6%2FhwCFTTCWUu%2B2ZlraqkInY90QzWsyvSbwHStD4MpSuW2vI1Fb7nAKMMTvKs9xAOhfhmhB5sKmXbCRznx5wZ4xQtalgc16JMSxksDrANTQ6Qq%2FPQF4AYs1XluOvADXIMOQm1IW2DwES2Zj80nnKN6yslrbYoFXpUhlJDSLu%2Bk%2BxzctB%2Fxzf2lGHGnlCXLtY4opmFl0IoRV8n0ZEhc91YKLlmIlh8VeWZ7EvqoSY%2Fgz6nWa8va6edmHUK6WQgXL%2FMPn0y8kGOqUB5K9ITmQtJEaWbRJ6YUUeRwvThuvGzm6LU8Z%2FD0Dvs4YOFTHDfNQum866GJoybP8E4Y%2B11frVYQzHnqY6Qn5UgWWc%2BNlZY9KCxGSFUWzTvIh8GFJfjRzyFCB%2B9FxLkYyrYHJYbGztBtxmDe8XyohHF5QHwSeDoTgMFx4Evrzj9WsF%2F3Zvdz7wLN7bF%2BFdC%2Flrnosb1gTGJNHgXmwOCvyiRQSG1bX6&X-Amz-Signature=05cae27f24ad2118ca8962e8dddf4947a3b057bb95b204055b0a36f57b3baae2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

