---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCA3DL3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJN8HV2fQsikv35x9HRYZMSFJwij%2FnlEOm1uTbQQg5QIhAMyYnUW%2BAnEsy8kgi6Ra7rYSUa9HS77bW3lg23F9%2FNcJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW4YMwluRbgUh7o9Iq3APLckmXoW4bVFu3gaO1yk68edhXeWYkD4P%2BhmqBbUse1VKfNYxpYjup1K%2FTRJMX5Y5B8mwvYhA9aLNygD8WP0YXMR9Nc83BXzG8VKmYW5TMyVBuSJe2Tk02GPnToloQJN3RKlMBwLcHtXICJo8nTHbvxfWPWJGgQvoLCFSa7ZY5YNlPZ5cLNZYyJphpK8mXm4V6dnwzSK58bgpHrCkwHnQSJcHylAwFMBph5flKg4wmXZYibOS0RenDl7VyCqBdA%2BLkaTdpDHaaZMDq%2BS2Y5B50Dk0zR5ibObUyHMZFKDt6ESg3LB6qrbtMHyg6pvMDourQ8m3hkC01n1gr3q00AxV1V3Y8Dv7AymoDSTR%2FZxvRDQS4jcprzCRMI%2BXaQEvgtDxXDKoQHAhw2Xck3YHdCpCdETA507ELOzvUQGhHo6WkRW7y36rn02N0mtmORERZEW2StkgUbvFgGoJyQCKL%2Bvr6t9GLX4J%2FdsmA8%2FgZM%2F6oQCLzkh67ws7rGWd%2BO%2Byvdx16gt2RtLJaMCrDnX9YQFDyA5RINsRIhunZO6d0d0fcjW%2B5BYQaShHIYjO5lMlyGqWvw%2Bn7%2Bl9DJ8Tv2eNMvslSBnNzxj8Qa5LzM1WaEemjV2PGLWNuyCYKeI5MTTCZ%2FdLJBjqkAed%2FuNkY698PJi%2BghuvqLzx4oyvrqysWW8YtsHEvKbjql29lEKJ%2BlU8cDEyrAFkxBcpO6DEA%2FVRLTohWeSVixg5%2FKVdbkP3WsByKrsh9rMI4NWibDjX1HRrlnbiDRiccI8PtOISWSUBpmmzEjZqLjesQLWwoMxyo2M15xcTdEkYLwFgwFJG37sDpbafHvZv7rsYZ1SpR00ts2a%2Brmstcb4OzONfv&X-Amz-Signature=ce6fbaef6b93e0e400bf766ea714eae808c945d1e735421673f18d2b520a00b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCA3DL3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNJN8HV2fQsikv35x9HRYZMSFJwij%2FnlEOm1uTbQQg5QIhAMyYnUW%2BAnEsy8kgi6Ra7rYSUa9HS77bW3lg23F9%2FNcJKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW4YMwluRbgUh7o9Iq3APLckmXoW4bVFu3gaO1yk68edhXeWYkD4P%2BhmqBbUse1VKfNYxpYjup1K%2FTRJMX5Y5B8mwvYhA9aLNygD8WP0YXMR9Nc83BXzG8VKmYW5TMyVBuSJe2Tk02GPnToloQJN3RKlMBwLcHtXICJo8nTHbvxfWPWJGgQvoLCFSa7ZY5YNlPZ5cLNZYyJphpK8mXm4V6dnwzSK58bgpHrCkwHnQSJcHylAwFMBph5flKg4wmXZYibOS0RenDl7VyCqBdA%2BLkaTdpDHaaZMDq%2BS2Y5B50Dk0zR5ibObUyHMZFKDt6ESg3LB6qrbtMHyg6pvMDourQ8m3hkC01n1gr3q00AxV1V3Y8Dv7AymoDSTR%2FZxvRDQS4jcprzCRMI%2BXaQEvgtDxXDKoQHAhw2Xck3YHdCpCdETA507ELOzvUQGhHo6WkRW7y36rn02N0mtmORERZEW2StkgUbvFgGoJyQCKL%2Bvr6t9GLX4J%2FdsmA8%2FgZM%2F6oQCLzkh67ws7rGWd%2BO%2Byvdx16gt2RtLJaMCrDnX9YQFDyA5RINsRIhunZO6d0d0fcjW%2B5BYQaShHIYjO5lMlyGqWvw%2Bn7%2Bl9DJ8Tv2eNMvslSBnNzxj8Qa5LzM1WaEemjV2PGLWNuyCYKeI5MTTCZ%2FdLJBjqkAed%2FuNkY698PJi%2BghuvqLzx4oyvrqysWW8YtsHEvKbjql29lEKJ%2BlU8cDEyrAFkxBcpO6DEA%2FVRLTohWeSVixg5%2FKVdbkP3WsByKrsh9rMI4NWibDjX1HRrlnbiDRiccI8PtOISWSUBpmmzEjZqLjesQLWwoMxyo2M15xcTdEkYLwFgwFJG37sDpbafHvZv7rsYZ1SpR00ts2a%2Brmstcb4OzONfv&X-Amz-Signature=bfc5bc1ef5d60613b57f79b68369bf11fcaba660836487971b2a4e8d50496002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

