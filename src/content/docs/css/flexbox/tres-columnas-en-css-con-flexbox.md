---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6OWKS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJ1bGhQymvxioh1fdv7OzqJ8jTNP%2Fr5Wopg0fpOVLEAiEApno7OATbmtz1wbL3qROREfoxpsaTrnce55BMnfxST%2BAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtZ1D2u67eOJgr1eCrcA7YyYfYIiMzsaJefC3Rq15LO3Xn3HLW9ftwZw1Qj71jcoe7QbdKX8mRUkXURxhYtLBjioRb83eWJ%2FYUIM%2BAM82n0p5zbfIWJ%2FVjICDTZcnotYi1%2FSw2DHSjc%2B2l4QzoS3vzOiaYca94fe3GY7r6BVjlXssGYzCiDmW0IrfJ14s7WWnerVDtqyo9oPPptEW99aK5tFqRVnu4qYKZCzCHppRc7RMbkZP5B5xO34ItzkmpC9i2fDRvnffO%2F9GMFPscrhKtJUuJ5b064vRbdAP3Dmsker3%2FU1ekDU0oT1aHwcoIcja2QYmPQko%2BFjitEX%2BrYiG29RFqjZpg6Kc1nnrloZ%2FB8lzryJAfsRKsTWyTAusaWlJ%2B77MGbTStRBJ7tBAEzNfqVusfRSqkqMzAHJrx76j7lMBorI39%2F51XWC5SSrdz8CarxJb76MUBVkdtkZRHAZnBrHQx4STWEV59tf0vJqRwoFX5j3wumlntPdmIiT%2Byq1LwJlTCPoIqiY6VaiPvdu%2Bvg00LWB0Yhk0FjE0yZPONRe6mLeB%2BiKzsAiiOMQNhIBy3XgWsLMvrNg4HHoDrWDlS5yez9DlkHyRFvCdJ3TDVQkw6Pa5tSybNkw97zSXaWruPio4cAQTW%2FUkRMMJXk28kGOqUBzf2uAfmCyAkrZbRo81%2BQbSDzOKE8PSwxFVueOuxC5fg6zSBwR0o9mKGcdEf4P7qo5FK8RjaFTk6TINPhoSHrur7O7CoZWRud2Qgu2rRh8SD5O3kteOVPNG4S8HzepDLjocd5ByUzbvBqME3Um5ZrJ7eGIEQIKcqcUgCXkBxmK75M%2FzLbaaX2yELsqJffp7IqEotr%2FFyQsSpDXp9X0hMVkXzXlwUj&X-Amz-Signature=8fae85055f17b2db140526c0d4b6367e16f2419a3b949cbd418eecbb2572d56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6OWKS7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T163749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHJ1bGhQymvxioh1fdv7OzqJ8jTNP%2Fr5Wopg0fpOVLEAiEApno7OATbmtz1wbL3qROREfoxpsaTrnce55BMnfxST%2BAqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCtZ1D2u67eOJgr1eCrcA7YyYfYIiMzsaJefC3Rq15LO3Xn3HLW9ftwZw1Qj71jcoe7QbdKX8mRUkXURxhYtLBjioRb83eWJ%2FYUIM%2BAM82n0p5zbfIWJ%2FVjICDTZcnotYi1%2FSw2DHSjc%2B2l4QzoS3vzOiaYca94fe3GY7r6BVjlXssGYzCiDmW0IrfJ14s7WWnerVDtqyo9oPPptEW99aK5tFqRVnu4qYKZCzCHppRc7RMbkZP5B5xO34ItzkmpC9i2fDRvnffO%2F9GMFPscrhKtJUuJ5b064vRbdAP3Dmsker3%2FU1ekDU0oT1aHwcoIcja2QYmPQko%2BFjitEX%2BrYiG29RFqjZpg6Kc1nnrloZ%2FB8lzryJAfsRKsTWyTAusaWlJ%2B77MGbTStRBJ7tBAEzNfqVusfRSqkqMzAHJrx76j7lMBorI39%2F51XWC5SSrdz8CarxJb76MUBVkdtkZRHAZnBrHQx4STWEV59tf0vJqRwoFX5j3wumlntPdmIiT%2Byq1LwJlTCPoIqiY6VaiPvdu%2Bvg00LWB0Yhk0FjE0yZPONRe6mLeB%2BiKzsAiiOMQNhIBy3XgWsLMvrNg4HHoDrWDlS5yez9DlkHyRFvCdJ3TDVQkw6Pa5tSybNkw97zSXaWruPio4cAQTW%2FUkRMMJXk28kGOqUBzf2uAfmCyAkrZbRo81%2BQbSDzOKE8PSwxFVueOuxC5fg6zSBwR0o9mKGcdEf4P7qo5FK8RjaFTk6TINPhoSHrur7O7CoZWRud2Qgu2rRh8SD5O3kteOVPNG4S8HzepDLjocd5ByUzbvBqME3Um5ZrJ7eGIEQIKcqcUgCXkBxmK75M%2FzLbaaX2yELsqJffp7IqEotr%2FFyQsSpDXp9X0hMVkXzXlwUj&X-Amz-Signature=8634f5fb9aa310369bb28bd1509710466d28cfd10d681e745ca9c5dfbb1e56e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

