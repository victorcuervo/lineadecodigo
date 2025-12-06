---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIGN76C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqXP3rk4k6o4z8TFiZ%2FXf2J4HvGm0%2BMwZSzuB6eDxZ9gIhAPeSm%2FdpfloYgrd0xNR6ZCsoIVXofShPeozu6yTnqtYzKv8DCGwQABoMNjM3NDIzMTgzODA1IgxR4mUWHhgh2W9NXVIq3AMxXZUvCJ81GXgIuOxDW7n4kZ4oF%2BFBZb%2FVxcqHt0GrgmKqcxLiSP8KZ1n%2Fnw3Y4MPDjXEYRJgTpZnahjy3DEZ0DN5X0Ebbn7X8JA4qK6rTpRlk7Kq2TE7K0vIi5hhTdJE1i7hsSTarSb1tgSZ6ZiX7tv7391I8ojF3FvO98teOqn3kZjrtMfWdK1Qit3W6SxHqcKqW7Tty9pY7KiJotQ2W1oeetMT6dCEwukSIqPiPzEv2GUsePKJE12cuZLGzVe9JLaVyo21cIAqZlTLI2zunW9uagFOqSgk%2BqdymDWwoaRSscYC%2BdII6MoVSxm6GWL5Z8teRO1Jn8qsiIBOHf18HtQiFWhxNw%2FB9AZ2UuwsUqnjs%2BBRUT3SyFCMukiPNDKyeqtbBaHGRmT28JOvcQTUvKtOA%2F9F3OteB4ioO%2B2s419wlm6Y2wsmQZePVxaTrDsHglFiRtq9QDRmXcXtiq3QKDCHhychTbqCaLWFUqU%2FusS%2FERU65SxkMdfOa%2Bo9y5QuNMUO5OV%2FbO5T%2BlIN%2F%2B%2FELZ%2BkJg7dySUWwXHT8Y4P2CiCfabb%2BvDWbLvr3DvBaEwyf5344zxXVmlbmqibeh9Jv5yFsM%2BOn0O%2F2I9H2lORAS7sCCn7QlIgWjU%2FB%2FDC4ws7JBjqkAZOMof9sacxpQupVsZd1Tww%2Fff6i5AInRXGBb81JWZz096zhDFHYuLJJc8%2BMPstCGP4NKZohDPDeZW0YzAwNPKgpLKDypWJnj%2BVuTpbCI9oMjut4pUoKQ6VH9UML8vOWFcanmm020AagZBtFXTGmQ9TyGsW01wDrJsV%2FEUUJzznRHCS02ega15eci2YqOBeWAX6JYVNvxOz%2BxekzWyv1LAix8bDM&X-Amz-Signature=bf9e2e171d59fa130f63cd11e3fa2d043a012f4248fa914fd422eea5486c362f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIGN76C%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqXP3rk4k6o4z8TFiZ%2FXf2J4HvGm0%2BMwZSzuB6eDxZ9gIhAPeSm%2FdpfloYgrd0xNR6ZCsoIVXofShPeozu6yTnqtYzKv8DCGwQABoMNjM3NDIzMTgzODA1IgxR4mUWHhgh2W9NXVIq3AMxXZUvCJ81GXgIuOxDW7n4kZ4oF%2BFBZb%2FVxcqHt0GrgmKqcxLiSP8KZ1n%2Fnw3Y4MPDjXEYRJgTpZnahjy3DEZ0DN5X0Ebbn7X8JA4qK6rTpRlk7Kq2TE7K0vIi5hhTdJE1i7hsSTarSb1tgSZ6ZiX7tv7391I8ojF3FvO98teOqn3kZjrtMfWdK1Qit3W6SxHqcKqW7Tty9pY7KiJotQ2W1oeetMT6dCEwukSIqPiPzEv2GUsePKJE12cuZLGzVe9JLaVyo21cIAqZlTLI2zunW9uagFOqSgk%2BqdymDWwoaRSscYC%2BdII6MoVSxm6GWL5Z8teRO1Jn8qsiIBOHf18HtQiFWhxNw%2FB9AZ2UuwsUqnjs%2BBRUT3SyFCMukiPNDKyeqtbBaHGRmT28JOvcQTUvKtOA%2F9F3OteB4ioO%2B2s419wlm6Y2wsmQZePVxaTrDsHglFiRtq9QDRmXcXtiq3QKDCHhychTbqCaLWFUqU%2FusS%2FERU65SxkMdfOa%2Bo9y5QuNMUO5OV%2FbO5T%2BlIN%2F%2B%2FELZ%2BkJg7dySUWwXHT8Y4P2CiCfabb%2BvDWbLvr3DvBaEwyf5344zxXVmlbmqibeh9Jv5yFsM%2BOn0O%2F2I9H2lORAS7sCCn7QlIgWjU%2FB%2FDC4ws7JBjqkAZOMof9sacxpQupVsZd1Tww%2Fff6i5AInRXGBb81JWZz096zhDFHYuLJJc8%2BMPstCGP4NKZohDPDeZW0YzAwNPKgpLKDypWJnj%2BVuTpbCI9oMjut4pUoKQ6VH9UML8vOWFcanmm020AagZBtFXTGmQ9TyGsW01wDrJsV%2FEUUJzznRHCS02ega15eci2YqOBeWAX6JYVNvxOz%2BxekzWyv1LAix8bDM&X-Amz-Signature=4aea31ddc7e09f7306ea0955d5e18f4d762142ff8e678d316bd03c5e341db438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

