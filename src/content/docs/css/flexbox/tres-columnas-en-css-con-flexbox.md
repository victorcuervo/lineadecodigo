---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEB2VG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiTgSFHRqycEOAYPuOuZ1HPFrEw0To2qe7TsplRy3x%2FAiEAix7lgfBAUca%2BCIdNXMIO5s7sKpeUmXcWdnJ4hAaa%2BP8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJiic5WYR2c7DKzyrcA45bYsBKG4IgcOOsiqLQmns2zyMB3uMvS29RSmxWBrXtQAJwdwzbqpun%2FWjdoMHxWph2mBruvXwbgG%2F3slytUbrbRZ%2FryF8y3JelPtAcwsj9TumszmZoXbWHERCS97n17SgbbTGpDEjUfEQO4b2nwqLwtppJdF7KFSLd3QhsXggysVmV2J93fI%2FFaDWf4OYkt%2BAqdqAFFYx5dnK6OO28OsYnPNwpCCC2LKqZsw6IY385s%2FdvJtE7DnqK9%2FXRnyG7xW7wEpU3o3Ob4qoAtx35dX12MShgsxfBRKMzhv0FPV09DJoEYGwL0%2FfRqmnFZO%2BOnV9dtxIpk2HTbTlXhVMSn0cOGm%2B2H39yVRQOA7ob%2BbtI2td66DIRq5S5dgJ3ThQK%2FGeD3pFUdmyl9KvH7ASEmfzB%2BxWCRPI0wyV1W129FZcYDZBVQU1Is0EdmuRn0mO6utH6u%2FcmRFX7nXICv9PoQ%2Fv%2BVAeBmccWL7nXqnw8tJOaLU7LIwTawjeRNy4JS%2BvL7U%2FPwBwQu9sboX4AdXtIr7Uh8HnNNMz%2BU0wIX0igmpL1iIFqEG7612m0cWgTYbpI4JvniPfDw7E06huafY7ZilAicqcPekdK%2Ba02B4ZVIcMKiHcQ%2Fiz1eWrm4goDMOez3MkGOqUBuoz3ul9KYnXsyahlu64Qa9S8IdysCabdGXTCI7q78G9T9uEKiiM5y%2BnouDtG%2B9k5S4kDNcozSDmg7w7KGc0qtJSktYB7YMVBSW0LPXeL2rNbkEhi%2B25vR%2F126zaG2AMScq5gD%2Fj%2BXBJQCRiQwUB4dBQJeZPiGfI7fLrcQfJJTfCfl%2BWjKwRdBxhLGRDDMzHFGCLSS4wHqjTRjK4QKeJFMZbyKeND&X-Amz-Signature=dfdaea5fa8ffe54d529207abf457c9ef9ff3b9b11299dd3150a4e2b387161e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNEB2VG6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiTgSFHRqycEOAYPuOuZ1HPFrEw0To2qe7TsplRy3x%2FAiEAix7lgfBAUca%2BCIdNXMIO5s7sKpeUmXcWdnJ4hAaa%2BP8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BJiic5WYR2c7DKzyrcA45bYsBKG4IgcOOsiqLQmns2zyMB3uMvS29RSmxWBrXtQAJwdwzbqpun%2FWjdoMHxWph2mBruvXwbgG%2F3slytUbrbRZ%2FryF8y3JelPtAcwsj9TumszmZoXbWHERCS97n17SgbbTGpDEjUfEQO4b2nwqLwtppJdF7KFSLd3QhsXggysVmV2J93fI%2FFaDWf4OYkt%2BAqdqAFFYx5dnK6OO28OsYnPNwpCCC2LKqZsw6IY385s%2FdvJtE7DnqK9%2FXRnyG7xW7wEpU3o3Ob4qoAtx35dX12MShgsxfBRKMzhv0FPV09DJoEYGwL0%2FfRqmnFZO%2BOnV9dtxIpk2HTbTlXhVMSn0cOGm%2B2H39yVRQOA7ob%2BbtI2td66DIRq5S5dgJ3ThQK%2FGeD3pFUdmyl9KvH7ASEmfzB%2BxWCRPI0wyV1W129FZcYDZBVQU1Is0EdmuRn0mO6utH6u%2FcmRFX7nXICv9PoQ%2Fv%2BVAeBmccWL7nXqnw8tJOaLU7LIwTawjeRNy4JS%2BvL7U%2FPwBwQu9sboX4AdXtIr7Uh8HnNNMz%2BU0wIX0igmpL1iIFqEG7612m0cWgTYbpI4JvniPfDw7E06huafY7ZilAicqcPekdK%2Ba02B4ZVIcMKiHcQ%2Fiz1eWrm4goDMOez3MkGOqUBuoz3ul9KYnXsyahlu64Qa9S8IdysCabdGXTCI7q78G9T9uEKiiM5y%2BnouDtG%2B9k5S4kDNcozSDmg7w7KGc0qtJSktYB7YMVBSW0LPXeL2rNbkEhi%2B25vR%2F126zaG2AMScq5gD%2Fj%2BXBJQCRiQwUB4dBQJeZPiGfI7fLrcQfJJTfCfl%2BWjKwRdBxhLGRDDMzHFGCLSS4wHqjTRjK4QKeJFMZbyKeND&X-Amz-Signature=19d2c441cbcc63ea8e55765c19cd057a57b5e09b30bb77ebded4a53905fde3f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

