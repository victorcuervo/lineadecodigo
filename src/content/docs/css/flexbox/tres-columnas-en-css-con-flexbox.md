---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3SSPOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOLRLNMJKjVXfyEhOcrcKikDdFyG4wy6fGc5jdikL%2FAIgLLpuWqzzSQm%2FPI%2Fd4lrj3JkLOhuIRzMnRs0S3eZcU3EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICaG%2BPQ4LJEO1hCYCrcA8NOUEnKCZrWaQdLxsW36Ff3pXHb4tI7Kv%2BEC81Qk3qdwKynUw820z3MJKKqVMoRApaUpvXA%2Br%2FPsvgrISuwzHkze6%2Brh5Qcsw44QMpWQM9Ld2FiGD7xFFY5G%2BS05wEo4RcYl%2Fl9KJI2%2FZTbMoq8FhEMKpeDDEchaYlL3R28IOg1Pkr79vxPSQZ9VYgPTMMEoneKj57%2FscLHUKW1l3tqtXwe1AH1kK0U9A2RtkcbUw01A1HlS2u85OlH6Og9DWD0g0tokwbtv9HLQD8PMF3qmNW%2BYEiWA89g2yQVV2RFDfGS4scDQ3jg4AQhW2eQp%2BgD2myM92zq7rDaEpru6ZSIWr5sSinGfHhvMLp2%2BJAyo0tMIzLgN5rRPeijiYhuavFWqI2bYBGOFW3rsHLceDIsolkSm%2BW8mros4pVn8TlpOi3KfVQZl1wWAX1qUBOpbzsPeTHDxau1fJdGz8glL7oN29znhDcd6XfkyC263Nc9sJLPDp3W8JXPtRC%2FJpDzBAYY3T7ZafCBr6eb1Lc6vPX8crIZb9p8FOvmQvYUuuk%2F9GvvA%2Fd8sOebkebMDPUzbUPumQYJpkeytQl4X3O%2FbfXlvQQES%2Bd7k3grtlM%2FlXoB3vSCGJC%2BMS5qvwP2UUd3MKD90skGOqUBZ3B2%2B%2BJ%2F%2BmY7n3JQESC%2FGHCFWQ6Iuxq2ZD4xuMrTbRaeJRc3YrFxyeT7IaPvLUq%2FDVZTE4oCsTQp4qIWQgPA5FYb1Q%2F%2B%2F%2FhQBGrs83IeXzvi0U3hgdeEcv9NMzYPHgBl%2F3JQ%2BE9AG7APt78P5xaqlzjYnjLeiU%2B2Ph7aoGlrCYOc5m4UaB%2B40JExYSgq%2FAY2Sa%2BuQZ%2FvVw8tyf8prC0Daa6rydw7&X-Amz-Signature=f76a70f56a490bd5f6ebc5235900a30ed3142342d8285d538423056d7f1402cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM3SSPOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvOLRLNMJKjVXfyEhOcrcKikDdFyG4wy6fGc5jdikL%2FAIgLLpuWqzzSQm%2FPI%2Fd4lrj3JkLOhuIRzMnRs0S3eZcU3EqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICaG%2BPQ4LJEO1hCYCrcA8NOUEnKCZrWaQdLxsW36Ff3pXHb4tI7Kv%2BEC81Qk3qdwKynUw820z3MJKKqVMoRApaUpvXA%2Br%2FPsvgrISuwzHkze6%2Brh5Qcsw44QMpWQM9Ld2FiGD7xFFY5G%2BS05wEo4RcYl%2Fl9KJI2%2FZTbMoq8FhEMKpeDDEchaYlL3R28IOg1Pkr79vxPSQZ9VYgPTMMEoneKj57%2FscLHUKW1l3tqtXwe1AH1kK0U9A2RtkcbUw01A1HlS2u85OlH6Og9DWD0g0tokwbtv9HLQD8PMF3qmNW%2BYEiWA89g2yQVV2RFDfGS4scDQ3jg4AQhW2eQp%2BgD2myM92zq7rDaEpru6ZSIWr5sSinGfHhvMLp2%2BJAyo0tMIzLgN5rRPeijiYhuavFWqI2bYBGOFW3rsHLceDIsolkSm%2BW8mros4pVn8TlpOi3KfVQZl1wWAX1qUBOpbzsPeTHDxau1fJdGz8glL7oN29znhDcd6XfkyC263Nc9sJLPDp3W8JXPtRC%2FJpDzBAYY3T7ZafCBr6eb1Lc6vPX8crIZb9p8FOvmQvYUuuk%2F9GvvA%2Fd8sOebkebMDPUzbUPumQYJpkeytQl4X3O%2FbfXlvQQES%2Bd7k3grtlM%2FlXoB3vSCGJC%2BMS5qvwP2UUd3MKD90skGOqUBZ3B2%2B%2BJ%2F%2BmY7n3JQESC%2FGHCFWQ6Iuxq2ZD4xuMrTbRaeJRc3YrFxyeT7IaPvLUq%2FDVZTE4oCsTQp4qIWQgPA5FYb1Q%2F%2B%2F%2FhQBGrs83IeXzvi0U3hgdeEcv9NMzYPHgBl%2F3JQ%2BE9AG7APt78P5xaqlzjYnjLeiU%2B2Ph7aoGlrCYOc5m4UaB%2B40JExYSgq%2FAY2Sa%2BuQZ%2FvVw8tyf8prC0Daa6rydw7&X-Amz-Signature=5ee464cf283a0f698e8cc369c2896e83ecdbd2cce270f8e5be3d1e21d3880156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

