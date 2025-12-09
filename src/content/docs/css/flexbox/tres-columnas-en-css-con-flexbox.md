---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OJ7VGJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfO8lHcVsBX1aG2WPMVmoGqSHWlrxSN7TEcCWbWKoBQIga34FQ6Fx2kMLxmeot4QjJdUEz6Q5Cpeiqry3GaWAKzUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Btq%2FQxDq2LX7y91SrcA96mQhfiekCJQPG2Hgzn9Cf%2Bq9IktizLTJyt5OMaE0rEatIGy9uvsqsT0aS5M2hpu9kqy8lVJww6huELm6zTDNt4pZQgGFzcQtO6JXdFR16Bw1rvMF4uf5qlhrvchxr9vhop1IcF9%2BrqMQSvM%2BBkI9CtydxgGwLXMNdwiaH8z68JrrwhjPBiYlB9NrENPte7WJE3KSu5VOBWttS8IpwJTzRErdRy2QDI%2BIzkc0Sd%2FFuT1Htv9gsL0apOtAIS0u9F2bLDT7pAGsgHt10zf9le7lLIW1KNKoUkWu3xUjBaxdCxjaK%2FqJgdBz6MhnHhh8n1QxGnRlGd7KXCsx%2FNEA7IVEehFVtV3e65osOgT6pZ1lsCh47jafGwzEz1Y9O5Y8CxVUcwAYykweNdzS0SKmZRXbeGpY5h9ceLco2IRTDIftjbWBSzX%2BP57SCk0wNIxb1%2Bv95EBY8dcFOis%2BK3ZYiPfMzyVKlBfKfduf9y2TBoxB82N%2FfQCeKxs2Vbw7ZiyIteHGz%2BlBVaJulExXVRsuczbkOKBcJXkNIXJ6%2BfP3ZtBu6HHDWu0gRQLVdN9VFHZ49CX0kxJeSoMia2SK0IP8Xxyb6BuVvUjqsGftn8c3o7NG7PmQhUqgAG9dzoUIRjMKfJ3skGOqUBf4lWIx0PK8k%2FhXTys0aB0dzbTfesn%2FGAuhAvK2r6JBiMaeKSmqksICiVB5JQTv6JSvnHZK7fja4z%2F4bbZrWN26aH6rRjs3VRzfbf2PWVOA7wRVpK4Mqs4O1Ltv%2F83TOKDGQSbj0e%2BJBcSBDu7szZ31WD8XeDETrRvqOK90l3A0S9SP9hIOuyYWu5AlfSixbwMImRQ35rv43bwbMQ83mnejBj%2F7QL&X-Amz-Signature=3e4227de996a72fbf9ae714f835df24b16a7d6f654a1c67cb98efa1a8208dd94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4OJ7VGJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgfO8lHcVsBX1aG2WPMVmoGqSHWlrxSN7TEcCWbWKoBQIga34FQ6Fx2kMLxmeot4QjJdUEz6Q5Cpeiqry3GaWAKzUqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2Btq%2FQxDq2LX7y91SrcA96mQhfiekCJQPG2Hgzn9Cf%2Bq9IktizLTJyt5OMaE0rEatIGy9uvsqsT0aS5M2hpu9kqy8lVJww6huELm6zTDNt4pZQgGFzcQtO6JXdFR16Bw1rvMF4uf5qlhrvchxr9vhop1IcF9%2BrqMQSvM%2BBkI9CtydxgGwLXMNdwiaH8z68JrrwhjPBiYlB9NrENPte7WJE3KSu5VOBWttS8IpwJTzRErdRy2QDI%2BIzkc0Sd%2FFuT1Htv9gsL0apOtAIS0u9F2bLDT7pAGsgHt10zf9le7lLIW1KNKoUkWu3xUjBaxdCxjaK%2FqJgdBz6MhnHhh8n1QxGnRlGd7KXCsx%2FNEA7IVEehFVtV3e65osOgT6pZ1lsCh47jafGwzEz1Y9O5Y8CxVUcwAYykweNdzS0SKmZRXbeGpY5h9ceLco2IRTDIftjbWBSzX%2BP57SCk0wNIxb1%2Bv95EBY8dcFOis%2BK3ZYiPfMzyVKlBfKfduf9y2TBoxB82N%2FfQCeKxs2Vbw7ZiyIteHGz%2BlBVaJulExXVRsuczbkOKBcJXkNIXJ6%2BfP3ZtBu6HHDWu0gRQLVdN9VFHZ49CX0kxJeSoMia2SK0IP8Xxyb6BuVvUjqsGftn8c3o7NG7PmQhUqgAG9dzoUIRjMKfJ3skGOqUBf4lWIx0PK8k%2FhXTys0aB0dzbTfesn%2FGAuhAvK2r6JBiMaeKSmqksICiVB5JQTv6JSvnHZK7fja4z%2F4bbZrWN26aH6rRjs3VRzfbf2PWVOA7wRVpK4Mqs4O1Ltv%2F83TOKDGQSbj0e%2BJBcSBDu7szZ31WD8XeDETrRvqOK90l3A0S9SP9hIOuyYWu5AlfSixbwMImRQ35rv43bwbMQ83mnejBj%2F7QL&X-Amz-Signature=8f3126d1a3b439b3b43198cba98d995ead6baa861e954641f6355921c29d3156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

