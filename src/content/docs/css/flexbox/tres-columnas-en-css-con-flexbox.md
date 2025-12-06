---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVBFTSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqh%2FHFRcotV139ALnwJRmb3HQeRtccYnxOSaBoLPCcygIhAKipqWOkpxJtf9Irvi%2B9k7b5bFDuy24%2BoG21wLaV4BXZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwX9gKCboDjaRVuKyEq3AOSSADBJ1priJYogOBkLUI8LySJ4jl6xQ3zDoIuW%2FPFUKX73%2FXId5HCcFjfeqYp7lKWPN5xcVOTrzoWW7sAo3bG%2FXh5dQo8X3Uor4F7w5AodLIq3gIJYYdZb6pim3qIuhH9yXrADORgWgLHzLbXElbbf5gs0IjCy8a8kVDU45Xamz68KmelK9ieeL2LoAzFhUsDZMdvv%2FGMYKOOBjo6vSM0TmUlfxPUPjham1PihZogXrimP1uhuKY%2FrlRpuPbdpEHaX%2FAOUomeGaIeUGLuURfXxrpYXDU0RzEiXYtx4JmM3W8pzMuxNiY8rgfUxkAbY34s%2BeZxFphEEQzwRfUhbEUIPTpE6TnECCwPlNskPpYzuWAcCn7Uz1fDv4O4YgpC4AmuLRbevtWcmXnSAyCkL12j6l2hgnm8CDG3PnwhU0RTlPRGQyTyWa8E4kJKUL3c7hO8CwD1WN9aaMVB6UOzyVMILkiqL0wsL%2Fjn9gLtRpeBB7KBRxkYDeoLISVrVvu9%2FMuuKbRsU9FX8oefipz7voB8OwSktjw01fKL0J7d6lvLPfrndIVe1HrQ%2B8TP3Cof0uMGtQGWkYluBtK26KDWQF7FPePVI6o1dMHtHiFQ9CEEIDDwZmaxqbJ%2FonxbuTC2idDJBjqkAYxuROIaGWwpQzzC5RgqEV6tqX6ZfdF8h2yNz5T1Q0EtJ%2BVjik%2F1odYg%2B5cBtxkzz2auK0WfqM%2BHNz%2FapHz6IesXGcfL%2Fcru%2Bik2w0BQt6qIVUo2H7VjFYhzVpk6lEORq42HbUZjOPV9zzqpqRaK80cpXa4m8FCRpN7CxqaA%2FpJN5t1Jk1kDCTI2Cankgw0%2Bv2a%2FcaXaS7QkAQn5pptAxzemND2l&X-Amz-Signature=b04da64b93a5a4a73169391f226f4152822b41f14629da656fcadc9805972fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFVBFTSV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqh%2FHFRcotV139ALnwJRmb3HQeRtccYnxOSaBoLPCcygIhAKipqWOkpxJtf9Irvi%2B9k7b5bFDuy24%2BoG21wLaV4BXZKv8DCHQQABoMNjM3NDIzMTgzODA1IgwX9gKCboDjaRVuKyEq3AOSSADBJ1priJYogOBkLUI8LySJ4jl6xQ3zDoIuW%2FPFUKX73%2FXId5HCcFjfeqYp7lKWPN5xcVOTrzoWW7sAo3bG%2FXh5dQo8X3Uor4F7w5AodLIq3gIJYYdZb6pim3qIuhH9yXrADORgWgLHzLbXElbbf5gs0IjCy8a8kVDU45Xamz68KmelK9ieeL2LoAzFhUsDZMdvv%2FGMYKOOBjo6vSM0TmUlfxPUPjham1PihZogXrimP1uhuKY%2FrlRpuPbdpEHaX%2FAOUomeGaIeUGLuURfXxrpYXDU0RzEiXYtx4JmM3W8pzMuxNiY8rgfUxkAbY34s%2BeZxFphEEQzwRfUhbEUIPTpE6TnECCwPlNskPpYzuWAcCn7Uz1fDv4O4YgpC4AmuLRbevtWcmXnSAyCkL12j6l2hgnm8CDG3PnwhU0RTlPRGQyTyWa8E4kJKUL3c7hO8CwD1WN9aaMVB6UOzyVMILkiqL0wsL%2Fjn9gLtRpeBB7KBRxkYDeoLISVrVvu9%2FMuuKbRsU9FX8oefipz7voB8OwSktjw01fKL0J7d6lvLPfrndIVe1HrQ%2B8TP3Cof0uMGtQGWkYluBtK26KDWQF7FPePVI6o1dMHtHiFQ9CEEIDDwZmaxqbJ%2FonxbuTC2idDJBjqkAYxuROIaGWwpQzzC5RgqEV6tqX6ZfdF8h2yNz5T1Q0EtJ%2BVjik%2F1odYg%2B5cBtxkzz2auK0WfqM%2BHNz%2FapHz6IesXGcfL%2Fcru%2Bik2w0BQt6qIVUo2H7VjFYhzVpk6lEORq42HbUZjOPV9zzqpqRaK80cpXa4m8FCRpN7CxqaA%2FpJN5t1Jk1kDCTI2Cankgw0%2Bv2a%2FcaXaS7QkAQn5pptAxzemND2l&X-Amz-Signature=107603a98ca7a4e25167c4b327f91fc19cfe790c7a37e31cfcfef06332746db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

