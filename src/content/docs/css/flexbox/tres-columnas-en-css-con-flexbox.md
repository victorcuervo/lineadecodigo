---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5ZFWTK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2yWRGDV2YcmmNPWBAvqLGzEJSQl5ZW4CkP1rB8fNYSQIhAM0XnE%2BlnwpSlbvfEjkOIWL41mS4aXPVuM5UREREBzYcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEKVHlMsUbAdm5b4wq3AP%2FOQnHrleQndE0bTXEeumhNUbIksFRhJvF0Y1Xt3YEwGhvimJQgKAAsGxHdnU8OKy8olQeZ03OgjnXtAQ7iWzQSZ39oK%2BBRvrCMe2ED1IsA7mHWWPNN7CZ3WQPle7k3RzvBntX350YXu84qouIpLzuO%2FEor30VPtYZ9Z0T5IDNuI7XCBHmVkhDft0S33p%2BQoCMAg73xRLZjWGX1k7Vy3uJfGdCV84gorO7mcO66tTJcph6seD81FF%2Bs7skkcwgdJceeS5CBDtEttrZzee4y%2FNEcXkG6K7nZ9QVp%2Bev0IRffMikfH4LgSXzfQGdtr6w3ZPAnELh0mGfwhJpehZR4laGk0mMS2%2F7STjS5COAShJh8Fqa3IQhHW1ljtnD4FeXh64%2BdLDrhqp9kGmuFC0QfMzum8nKbmGkGvl%2BmIA1hwkIisJ3VxMe5l7Wy2BgxC0oGhj1NwN54G4MBzQXpblE5Y18iMqG7r6WZKkdCZcx%2FDZaYJudYAmu6%2Bkj%2F3jXxz9syWCj8iXCTtLW7l6r250%2FTY%2FNafjS6H3%2BLAFLjv95JCpHRRL8WAvWAb5IyRqmwkulMqhNs5JUq%2Bnzqj1ErJ6q1fzkBMux4MYim6p%2FLGM5PE6k89i90YaqQEGnqrJn4zDBhtzJBjqkAXtQ8Cgl%2B7wUQGAUE46cK4rHAVA8JIsa%2BNTRV%2FxzbQdxeWqnhnqp0GUN%2F4GN%2FVmj464KlUVU8YNmH1Ma12Z%2BmU1BYUEWPbrA134sCjQYwlXjy2ZbshvXw33qxy7r1k3R04gLsI0pjmf6SvWaFabbUHGW8mH%2BgK2KxAGU3GP27EBZaiqPmwW%2B1WFiiJGkn6uBgICMOOYAhkEszlwuycibKHuZpNn%2B&X-Amz-Signature=6c0ad174d87061af8bfc201516fa0f4f59f4998ffa4d9d376f5826042bf81a32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO5ZFWTK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2yWRGDV2YcmmNPWBAvqLGzEJSQl5ZW4CkP1rB8fNYSQIhAM0XnE%2BlnwpSlbvfEjkOIWL41mS4aXPVuM5UREREBzYcKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEKVHlMsUbAdm5b4wq3AP%2FOQnHrleQndE0bTXEeumhNUbIksFRhJvF0Y1Xt3YEwGhvimJQgKAAsGxHdnU8OKy8olQeZ03OgjnXtAQ7iWzQSZ39oK%2BBRvrCMe2ED1IsA7mHWWPNN7CZ3WQPle7k3RzvBntX350YXu84qouIpLzuO%2FEor30VPtYZ9Z0T5IDNuI7XCBHmVkhDft0S33p%2BQoCMAg73xRLZjWGX1k7Vy3uJfGdCV84gorO7mcO66tTJcph6seD81FF%2Bs7skkcwgdJceeS5CBDtEttrZzee4y%2FNEcXkG6K7nZ9QVp%2Bev0IRffMikfH4LgSXzfQGdtr6w3ZPAnELh0mGfwhJpehZR4laGk0mMS2%2F7STjS5COAShJh8Fqa3IQhHW1ljtnD4FeXh64%2BdLDrhqp9kGmuFC0QfMzum8nKbmGkGvl%2BmIA1hwkIisJ3VxMe5l7Wy2BgxC0oGhj1NwN54G4MBzQXpblE5Y18iMqG7r6WZKkdCZcx%2FDZaYJudYAmu6%2Bkj%2F3jXxz9syWCj8iXCTtLW7l6r250%2FTY%2FNafjS6H3%2BLAFLjv95JCpHRRL8WAvWAb5IyRqmwkulMqhNs5JUq%2Bnzqj1ErJ6q1fzkBMux4MYim6p%2FLGM5PE6k89i90YaqQEGnqrJn4zDBhtzJBjqkAXtQ8Cgl%2B7wUQGAUE46cK4rHAVA8JIsa%2BNTRV%2FxzbQdxeWqnhnqp0GUN%2F4GN%2FVmj464KlUVU8YNmH1Ma12Z%2BmU1BYUEWPbrA134sCjQYwlXjy2ZbshvXw33qxy7r1k3R04gLsI0pjmf6SvWaFabbUHGW8mH%2BgK2KxAGU3GP27EBZaiqPmwW%2B1WFiiJGkn6uBgICMOOYAhkEszlwuycibKHuZpNn%2B&X-Amz-Signature=3b1e45d5c599db968ccc85350b6b7df0bec35b80a77371c53679f22818b1a365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

