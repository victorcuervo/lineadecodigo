---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFAY6CY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGJhoyRLztlvvHrHrHnlZZnYnbo8A1jXBnMjW39RRtmQIhANzeX4r7wqXR0xOYT6xjsD0cEtKaAxtYzxQKG1uN0cXVKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbsJOk7Vt7iTYpybYq3ANJnbbevmKYUpUUmWhUeWAV1cY2qAZ41l2YsP8zwGH0A%2B9FgyOiYiN8O7tvQcwINRn3CFbh0wizrfaJSWAQXR8wA03e0p5ZYK%2BD8ZPnE68nVWpDhq7FBvNdwNUeyyh8MoAS6Ftt7v2rYOS48vx7ZfgVUMc6Oo6fHXjg3QF0Tm4J1AQiaEHSc6p0NtZbZ4zUcnYRoDfKGu49v9udg8%2BkP6dpBi0xkINESFXgvChcd3S1uUX0xGgJnQ0leL60uJOOUr8t4FE6OqsP3uTDEXDKJl5uiJcQ6wdob2J7oK4TxptEUT9V5TLGI60hC%2Bmj15U%2B4QgwZA1sjaMLJvrn4%2Bus%2FkjjPAZ0jD6O5jZLi22wORaqbm2mTehrErtLRB9UxLdu0WXGR8lFAHRqlMC3Eaoc9RWIaS6bX0sCbL9wLV4S6%2Bz%2BmXCY0WYQcd1td0hMva8ugQ4aRF9DQ9x%2BMhWuTZUIRYqglbmNK5ff8MPYw%2BTLFsDHMRmEuoee8%2Fz1yt1kxWZSIcl4P4aInqItEIhK4i44ZJxZmeSbVhlUcuMnu5rQvY5pWtpwiubWYD7pCeFHhffAs6sLTojkGHRFHpYvfvgWoyT03TiA0MJhMIXLVPC7MN4iqnx2uZzx8yRb26BxFDDl3NzJBjqkARtQyzXEjFsE9vscvdGZznJkqg7uuxD%2FNSTi0KdLbpXqA%2BQlJvCr79pA5Y0RSlgm3PI%2Bb6q8I5cPMoWcZYPXAqO1S%2F9rLlH%2B8gXuu51oxca0dpGDodFArhmZ9J%2FPHbGezsyDgDqvy%2BmnTkMgXr3mFG9tNuy6aaOXcQUbps2%2Ft8bdP10FUxrM4OhYnB%2B%2BjhCJym5vjtSgKptilG0%2BRD5HmtwLaiM2&X-Amz-Signature=a5556dc09a09debb9891bc48243a21dae6db8feb82e87c24723fd0687ef98bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THFAY6CY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGJhoyRLztlvvHrHrHnlZZnYnbo8A1jXBnMjW39RRtmQIhANzeX4r7wqXR0xOYT6xjsD0cEtKaAxtYzxQKG1uN0cXVKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbsJOk7Vt7iTYpybYq3ANJnbbevmKYUpUUmWhUeWAV1cY2qAZ41l2YsP8zwGH0A%2B9FgyOiYiN8O7tvQcwINRn3CFbh0wizrfaJSWAQXR8wA03e0p5ZYK%2BD8ZPnE68nVWpDhq7FBvNdwNUeyyh8MoAS6Ftt7v2rYOS48vx7ZfgVUMc6Oo6fHXjg3QF0Tm4J1AQiaEHSc6p0NtZbZ4zUcnYRoDfKGu49v9udg8%2BkP6dpBi0xkINESFXgvChcd3S1uUX0xGgJnQ0leL60uJOOUr8t4FE6OqsP3uTDEXDKJl5uiJcQ6wdob2J7oK4TxptEUT9V5TLGI60hC%2Bmj15U%2B4QgwZA1sjaMLJvrn4%2Bus%2FkjjPAZ0jD6O5jZLi22wORaqbm2mTehrErtLRB9UxLdu0WXGR8lFAHRqlMC3Eaoc9RWIaS6bX0sCbL9wLV4S6%2Bz%2BmXCY0WYQcd1td0hMva8ugQ4aRF9DQ9x%2BMhWuTZUIRYqglbmNK5ff8MPYw%2BTLFsDHMRmEuoee8%2Fz1yt1kxWZSIcl4P4aInqItEIhK4i44ZJxZmeSbVhlUcuMnu5rQvY5pWtpwiubWYD7pCeFHhffAs6sLTojkGHRFHpYvfvgWoyT03TiA0MJhMIXLVPC7MN4iqnx2uZzx8yRb26BxFDDl3NzJBjqkARtQyzXEjFsE9vscvdGZznJkqg7uuxD%2FNSTi0KdLbpXqA%2BQlJvCr79pA5Y0RSlgm3PI%2Bb6q8I5cPMoWcZYPXAqO1S%2F9rLlH%2B8gXuu51oxca0dpGDodFArhmZ9J%2FPHbGezsyDgDqvy%2BmnTkMgXr3mFG9tNuy6aaOXcQUbps2%2Ft8bdP10FUxrM4OhYnB%2B%2BjhCJym5vjtSgKptilG0%2BRD5HmtwLaiM2&X-Amz-Signature=4a155cddd6131ae67006bcf99e7349ce4b37e426fced24d2b110f1f8fc0bf7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

