---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HGQP2Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMVDqYGBRYcItC33L96l3l4PQDdWdzD915zx7Ydn%2BQqAIgRoVsTWG%2BgAXk2M70lJA6W7wbAadubvvgDfgof5S%2Bz48q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ4QHCZaT4XOZcJtbCrcA0H2%2Ft1WUTOrEuuJZeX%2Fj7qhHX1k%2BFPVsxkFcVnIgH1E9FkIJBYVj9p2iedUWoiordnfXsrgdmaNYRV3PakDqqbrkttR5aB9O4hmcg9BbiY%2F7Eh7dme3EV8vFUASntdPGq%2BgnBTqlo%2FzBJr0dg1XCp5RRjzzGB8otk%2FjneISb0QQLVOiJmQKLH5fEKcQdgnAi0UXOhbOXtI40hG%2Fcd61VCAtSdFfUJbOqJYujdY8l%2FUUqK%2BZXyqTcFlYZitVbIq0rGkh5vZfOuQgO7vifDzCPyaQ7IWm0aKcgc%2FAigTmzk%2FIzs5PaneZO%2F%2BBk0kE%2BRyXk2RtXvKGpSzq72zZHZjpOlt6R2RfJzWsMv1Wh5M5v4OqlhY963HxqK38ocnBtG203GppZBs4CD%2BBMOfQ04J1pJ%2BLVN5nJdFTjNXR9ccgGjgl9kSNAWl9mpVnkIbgZd4iF%2FBtAHW%2BnE7qYFYbRLzb49qacv1KbIaols9j4z0aco%2Fn4LU%2B2JjSvIxLXPsyOksZ3vOg0i4VdVhpbSp4SmZomztihX9Kd51fD07sDZ2WkvlJu7UJ2mX9g1nZH5grAsU%2FaqVhYIj%2BP7Q00AoI3g1MsDdBeK4a0j61ZC1I5CYsu0daPAUyKQjZdqvwqd8vMIvUyskGOqUBB7BvuP6gjvPwk1yPP1g3AIaW1JohvOfgs%2BZe4hume5VzuxTQnATSRNrV4CTYEQqpWrCCssrUFf2ODa8063fgsELB5oJfWQWnwCQSk9elJWl2ufE53XUgkf8wfjeTZclrCa8%2FGsHmfkutBjl%2FcUMfrwcZ%2FrDVhfvvBTAgSfw007b5YngxpCmYzfH%2F4ESLU3yuf7XJ205SPMs4%2BphUPcBr7mJMeFF%2B&X-Amz-Signature=4b5e78b90267095617e83172f37802fc2aa44071ce241531c35214e88347478d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6HGQP2Q%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMVDqYGBRYcItC33L96l3l4PQDdWdzD915zx7Ydn%2BQqAIgRoVsTWG%2BgAXk2M70lJA6W7wbAadubvvgDfgof5S%2Bz48q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJ4QHCZaT4XOZcJtbCrcA0H2%2Ft1WUTOrEuuJZeX%2Fj7qhHX1k%2BFPVsxkFcVnIgH1E9FkIJBYVj9p2iedUWoiordnfXsrgdmaNYRV3PakDqqbrkttR5aB9O4hmcg9BbiY%2F7Eh7dme3EV8vFUASntdPGq%2BgnBTqlo%2FzBJr0dg1XCp5RRjzzGB8otk%2FjneISb0QQLVOiJmQKLH5fEKcQdgnAi0UXOhbOXtI40hG%2Fcd61VCAtSdFfUJbOqJYujdY8l%2FUUqK%2BZXyqTcFlYZitVbIq0rGkh5vZfOuQgO7vifDzCPyaQ7IWm0aKcgc%2FAigTmzk%2FIzs5PaneZO%2F%2BBk0kE%2BRyXk2RtXvKGpSzq72zZHZjpOlt6R2RfJzWsMv1Wh5M5v4OqlhY963HxqK38ocnBtG203GppZBs4CD%2BBMOfQ04J1pJ%2BLVN5nJdFTjNXR9ccgGjgl9kSNAWl9mpVnkIbgZd4iF%2FBtAHW%2BnE7qYFYbRLzb49qacv1KbIaols9j4z0aco%2Fn4LU%2B2JjSvIxLXPsyOksZ3vOg0i4VdVhpbSp4SmZomztihX9Kd51fD07sDZ2WkvlJu7UJ2mX9g1nZH5grAsU%2FaqVhYIj%2BP7Q00AoI3g1MsDdBeK4a0j61ZC1I5CYsu0daPAUyKQjZdqvwqd8vMIvUyskGOqUBB7BvuP6gjvPwk1yPP1g3AIaW1JohvOfgs%2BZe4hume5VzuxTQnATSRNrV4CTYEQqpWrCCssrUFf2ODa8063fgsELB5oJfWQWnwCQSk9elJWl2ufE53XUgkf8wfjeTZclrCa8%2FGsHmfkutBjl%2FcUMfrwcZ%2FrDVhfvvBTAgSfw007b5YngxpCmYzfH%2F4ESLU3yuf7XJ205SPMs4%2BphUPcBr7mJMeFF%2B&X-Amz-Signature=ec5532c77f1d101b84c8926845656fa8003db990a66051f0678cb6c0980ee0e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

