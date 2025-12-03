---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4PUTOL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDaMUWiJTd93owW1LpphdGCSuayTwFAAeDLQqs%2Bx8y26AIhALPmhwHY4rtNUNh4gx3M%2FlL9FGkWCeRqMWwRm5nquc4eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwHd%2Bysi3GMQ%2BjK6hAq3ANIJMG4opKLI4a27wHvc3w4idfUSQSZfWqQWr8qtL2DVO%2BrxDy8QthtRs0nMn8Hw51GsRQZNgDztLoWwT9JLHSUh6%2BG9%2Bt9RJrli0LQBiflwSr3geOe5ZYxaRSyMtLEbFBfUX8rUkFG00p2aQX2hyxk%2FpA2hznT264fgR%2FSRQTANjCmV%2Fn45GRSaDBwSMrZ5n7kCTUoqjPKeuRB761i8mo1%2Fop0Di61Q2VQKI%2BawN%2Fx8TTl20v867HwrVXPtBO47Wu7gqo9%2Bot1ZYTRHZIkFZlYezzmMEjHBwDIXMnz1oVUpSAGhKd3SUMLeJUWcifhOkYV9WONYdiOj%2Fzf96FQX7Gz3IUHpUObkDkDji1Mm4wKOvEznR6WtTQDFKe2jZIie8ldjaaFFLoKQ5lFFgBHyc19wv7%2F7ZcNW%2F29qWJg5LEXBYLtph%2FGTUE8CFYHwyuNZ3HcWxZp3h70Syh%2Fv9BkJpcydqA7EWttT8OgI8xaA95rmRN5RWBTp0jqV7wkLfmxK4Jhc6%2FeZv1gMwcqhmyaLTq7V8c7kRxl653jI4%2B6fIollDxQYloqleowy1WrWEXfalGSvGPDQc0JtdEZkUrbhsRdiF3rUsWD6lrTvwfK03z9%2FVUpOzWL0VPrkEMBizCik8DJBjqkAbfV0hEGUCyiSNrl0rq9rFXuaFsc0GIMrRwEJq7und%2BCcSoujeHQtSl1CEasT6UKF2K4wY8EE%2F3rmd0Ngeneu4rUsbwbSUAk%2FLHsXPWWdm0aLtU%2F30HzBVOvkEz%2FzGqA1AgjZRoBhZLh2qDboJ1MJjfWJv3RkD2jt2729Wi3%2BK6p4qd3s3%2BuryJk5%2BPvslm%2FqX1jj91dN%2B%2BOtFbouT1%2B5PySz5kr&X-Amz-Signature=ec0611b90c7bf6a5725cb5fbe3943a10824ad46f693331837007048364601291&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS4PUTOL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDaMUWiJTd93owW1LpphdGCSuayTwFAAeDLQqs%2Bx8y26AIhALPmhwHY4rtNUNh4gx3M%2FlL9FGkWCeRqMWwRm5nquc4eKv8DCCsQABoMNjM3NDIzMTgzODA1IgwHd%2Bysi3GMQ%2BjK6hAq3ANIJMG4opKLI4a27wHvc3w4idfUSQSZfWqQWr8qtL2DVO%2BrxDy8QthtRs0nMn8Hw51GsRQZNgDztLoWwT9JLHSUh6%2BG9%2Bt9RJrli0LQBiflwSr3geOe5ZYxaRSyMtLEbFBfUX8rUkFG00p2aQX2hyxk%2FpA2hznT264fgR%2FSRQTANjCmV%2Fn45GRSaDBwSMrZ5n7kCTUoqjPKeuRB761i8mo1%2Fop0Di61Q2VQKI%2BawN%2Fx8TTl20v867HwrVXPtBO47Wu7gqo9%2Bot1ZYTRHZIkFZlYezzmMEjHBwDIXMnz1oVUpSAGhKd3SUMLeJUWcifhOkYV9WONYdiOj%2Fzf96FQX7Gz3IUHpUObkDkDji1Mm4wKOvEznR6WtTQDFKe2jZIie8ldjaaFFLoKQ5lFFgBHyc19wv7%2F7ZcNW%2F29qWJg5LEXBYLtph%2FGTUE8CFYHwyuNZ3HcWxZp3h70Syh%2Fv9BkJpcydqA7EWttT8OgI8xaA95rmRN5RWBTp0jqV7wkLfmxK4Jhc6%2FeZv1gMwcqhmyaLTq7V8c7kRxl653jI4%2B6fIollDxQYloqleowy1WrWEXfalGSvGPDQc0JtdEZkUrbhsRdiF3rUsWD6lrTvwfK03z9%2FVUpOzWL0VPrkEMBizCik8DJBjqkAbfV0hEGUCyiSNrl0rq9rFXuaFsc0GIMrRwEJq7und%2BCcSoujeHQtSl1CEasT6UKF2K4wY8EE%2F3rmd0Ngeneu4rUsbwbSUAk%2FLHsXPWWdm0aLtU%2F30HzBVOvkEz%2FzGqA1AgjZRoBhZLh2qDboJ1MJjfWJv3RkD2jt2729Wi3%2BK6p4qd3s3%2BuryJk5%2BPvslm%2FqX1jj91dN%2B%2BOtFbouT1%2B5PySz5kr&X-Amz-Signature=6e607d59b5fa070c626e2bcb7bd715ca5f491d37222d7e5d4e80305020005f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

