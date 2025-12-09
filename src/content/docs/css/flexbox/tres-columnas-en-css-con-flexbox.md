---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5H5T6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNtDns9BeCNq4wmud4pZ5aHHA8iZBp70tMtPD7x6FuoAIhAPwjWpxafjjcFJ81zf%2FhGZByBnvyyiudCd8gIlXKlBF8KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwQPnLju1Dg22QfjYq3ANwbevVusX3KfVPBPLJYmVUE0mey9n54kOz0IHtsJzuFWVdPNhMFzK%2BGFEzo%2BmINrTgrplzx2QEkPh1hoFwUcMW0Uaa%2FARvrnvkMpGBM%2B1zjvb7nVMQ6%2FaMWPONrtfHh9inTZvBQZkwuMadHLy2bWGrqRpav%2By8BOpjF9mh3Fpl4W6uUDQBepRNCRSo%2Fzt5eCsGJP8OLtgO2TTFgqVrxNqauoLkaXXB%2F%2BtesQMyrF5aLCGsBbbfhfXMHL3psdy1tGKKDvx0fu83JXbdfz9RubV13x8MTQJfRAYHoryNfaw2ZE8q2Tn7FPsDs46hHAvaOYxJxzYWKKC0cN%2Bejvq9aLYb%2BSrkLgX%2F5I6RnANZOmsEeDjA6EDzmd5yLmdBAOOm0Cl0DUWpet8Tn5914vFWPhVDSq972axxUPNY%2FLP3acShZ1ENxx%2BWvkGxlNGVl2Cslihjnmm0T2IZrOmHdt5hIK3lctCKRNQknmKtz8RL%2FRdgLwYC5WHYgUerRSj5R7juo49ggsPklDmg0RXoRaF8EKHDZhKDa2ZbV78nbmaL5alJGGurRxeX3h0WH1EsnNQLcWzh4j%2B%2B418QFuHoxzNo4SiFVV2%2F7qE3bLR%2BBPFEn9PpqM4woJT1E%2BwMJd0%2FHjDR6d3JBjqkARi266hnWygo9cZqYSgK8AyOdymaWuIDOzLJCYJSDGfKtGt0P9ZiAmcagDbKYNYJcLLQ5nJ5sJTE461ma9rNmrnTyRhIeUOu%2FZtuWat8aJnUtglGfVJlyqtuS%2BcEpn5t3X3cu7a8PDe4V1S7V8MkUTFiQzSN9K8IcFPZzCl9NL8TP573uK6QbRWDD70WkzqBKWpu1XAmfZw5gvLuxLt34Ew3gizA&X-Amz-Signature=da27dfc4a0251f4935ddb3fb5a02ce60bf4a49d5aca3725ddac00e5a3ba960d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5H5T6A%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNtDns9BeCNq4wmud4pZ5aHHA8iZBp70tMtPD7x6FuoAIhAPwjWpxafjjcFJ81zf%2FhGZByBnvyyiudCd8gIlXKlBF8KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwQPnLju1Dg22QfjYq3ANwbevVusX3KfVPBPLJYmVUE0mey9n54kOz0IHtsJzuFWVdPNhMFzK%2BGFEzo%2BmINrTgrplzx2QEkPh1hoFwUcMW0Uaa%2FARvrnvkMpGBM%2B1zjvb7nVMQ6%2FaMWPONrtfHh9inTZvBQZkwuMadHLy2bWGrqRpav%2By8BOpjF9mh3Fpl4W6uUDQBepRNCRSo%2Fzt5eCsGJP8OLtgO2TTFgqVrxNqauoLkaXXB%2F%2BtesQMyrF5aLCGsBbbfhfXMHL3psdy1tGKKDvx0fu83JXbdfz9RubV13x8MTQJfRAYHoryNfaw2ZE8q2Tn7FPsDs46hHAvaOYxJxzYWKKC0cN%2Bejvq9aLYb%2BSrkLgX%2F5I6RnANZOmsEeDjA6EDzmd5yLmdBAOOm0Cl0DUWpet8Tn5914vFWPhVDSq972axxUPNY%2FLP3acShZ1ENxx%2BWvkGxlNGVl2Cslihjnmm0T2IZrOmHdt5hIK3lctCKRNQknmKtz8RL%2FRdgLwYC5WHYgUerRSj5R7juo49ggsPklDmg0RXoRaF8EKHDZhKDa2ZbV78nbmaL5alJGGurRxeX3h0WH1EsnNQLcWzh4j%2B%2B418QFuHoxzNo4SiFVV2%2F7qE3bLR%2BBPFEn9PpqM4woJT1E%2BwMJd0%2FHjDR6d3JBjqkARi266hnWygo9cZqYSgK8AyOdymaWuIDOzLJCYJSDGfKtGt0P9ZiAmcagDbKYNYJcLLQ5nJ5sJTE461ma9rNmrnTyRhIeUOu%2FZtuWat8aJnUtglGfVJlyqtuS%2BcEpn5t3X3cu7a8PDe4V1S7V8MkUTFiQzSN9K8IcFPZzCl9NL8TP573uK6QbRWDD70WkzqBKWpu1XAmfZw5gvLuxLt34Ew3gizA&X-Amz-Signature=73f56212c0e0b08a02ea8d49aa82b1a09697e2bc5d7c63e1a99a4d3a5a1ccb57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

