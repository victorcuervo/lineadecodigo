---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XE6MIXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaDB4use58Ffx5TWQNocNGIIvaH%2FO2g9NKC2gQAg3EKgIgXcgfeuX7onLX6cMyW%2FFutlVkf7%2B5EwIdlieYMxKneBQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvJsQXyjWhHJP6circA8Y%2Fhib1ErtZZBYFmnBEZr4mXY42WYo%2BK%2FwWXjUnUzgl%2FQ6Iu5Ms9%2F%2FnQuF4zZ1n9bSVPRwZl5SZaiZ0dq8sptaErN8PL9sy9oAW4EOEJQqnXw0%2BagcIukJ2Kjs5tfMglcOjVtbonzEWXRauqNi7A%2B%2BQz4GDoIbk6s55u3OtS8lx0qQjXfFJKno6h4nD0KQC6Q2ggqKlcQZJA1jbIxXJKbpCtT8xb48gZgcFHQ2JsXGpDTVGYNBrrznPOYvUV8S5t392Wql4owUWNVmQieWZpqTYX1ctuBUg8lKwzPGEM6KRMvhvjub0uvnkg947e1yu3MYxDBiJpS1NuklzFAFzA2As7XvKdgIOhizaofI4gTs1jL15c0ThI731AjU2FnLjcLznCAN3BjHwERc8TZ3XLa6iErGdP3z6gIzK0O6DuaSki%2FEiAzwnIR66%2FwbrqKpd8PHGJxe77KR9EZwgFOTE8sr%2F%2F%2FlOClqaBy8L1AQaIdFbJtq%2BYBNcONZOaD4%2Bpdv%2B5tdeSdM%2BGRADOqv%2BqSJmBY%2FHMfPXZRH0QwxWccriAFoP%2FaJY%2FlyrQofzM8Gz3rGklxf07SOoeHkh4aE4upoZYGikRd6A3AAQkMaSdmDh3jTN9Fz4X%2FGZefcyNkh7MMma1ckGOqUBoImmraIfVihk%2F37D9aqb%2Fuazwzxqd%2FoKRKsYllqpvjaPHJeu9h38cmV16Qk2ZSsiRrvukqW%2FBsXvTWNk5KGDyE4ojRLA11xNtTHdTWzZO6UpcvMML%2B4QKOVj3dx%2Bc3Dh9Bvy8gPc7DMPP0l5vAwNR5rh43IHBGesT0UDMo1qImOqdN3thbwqFawrLRBzKN7FnnjKm3Pxc3BhafHywKYLfXmK83K1&X-Amz-Signature=226c32e3dfd308a2ea0a64bc11427ece349b7672aa16072fc09f4c2944b3ae5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XE6MIXW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaDB4use58Ffx5TWQNocNGIIvaH%2FO2g9NKC2gQAg3EKgIgXcgfeuX7onLX6cMyW%2FFutlVkf7%2B5EwIdlieYMxKneBQqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYvJsQXyjWhHJP6circA8Y%2Fhib1ErtZZBYFmnBEZr4mXY42WYo%2BK%2FwWXjUnUzgl%2FQ6Iu5Ms9%2F%2FnQuF4zZ1n9bSVPRwZl5SZaiZ0dq8sptaErN8PL9sy9oAW4EOEJQqnXw0%2BagcIukJ2Kjs5tfMglcOjVtbonzEWXRauqNi7A%2B%2BQz4GDoIbk6s55u3OtS8lx0qQjXfFJKno6h4nD0KQC6Q2ggqKlcQZJA1jbIxXJKbpCtT8xb48gZgcFHQ2JsXGpDTVGYNBrrznPOYvUV8S5t392Wql4owUWNVmQieWZpqTYX1ctuBUg8lKwzPGEM6KRMvhvjub0uvnkg947e1yu3MYxDBiJpS1NuklzFAFzA2As7XvKdgIOhizaofI4gTs1jL15c0ThI731AjU2FnLjcLznCAN3BjHwERc8TZ3XLa6iErGdP3z6gIzK0O6DuaSki%2FEiAzwnIR66%2FwbrqKpd8PHGJxe77KR9EZwgFOTE8sr%2F%2F%2FlOClqaBy8L1AQaIdFbJtq%2BYBNcONZOaD4%2Bpdv%2B5tdeSdM%2BGRADOqv%2BqSJmBY%2FHMfPXZRH0QwxWccriAFoP%2FaJY%2FlyrQofzM8Gz3rGklxf07SOoeHkh4aE4upoZYGikRd6A3AAQkMaSdmDh3jTN9Fz4X%2FGZefcyNkh7MMma1ckGOqUBoImmraIfVihk%2F37D9aqb%2Fuazwzxqd%2FoKRKsYllqpvjaPHJeu9h38cmV16Qk2ZSsiRrvukqW%2FBsXvTWNk5KGDyE4ojRLA11xNtTHdTWzZO6UpcvMML%2B4QKOVj3dx%2Bc3Dh9Bvy8gPc7DMPP0l5vAwNR5rh43IHBGesT0UDMo1qImOqdN3thbwqFawrLRBzKN7FnnjKm3Pxc3BhafHywKYLfXmK83K1&X-Amz-Signature=1a0be7f2587819b7d358ca3e0d312201ba18a4a951a54a50100dce10b07ed2b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

