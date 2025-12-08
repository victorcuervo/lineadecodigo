---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSOICIL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6aWljOZLPkUU01mBuUwwun9000k%2Bhfj%2F5z1puX6c%2FWwIgWpqT%2Fnk7JsWX0GLm55uJM6l%2BI0T%2FTYM%2FuaTmgktSihAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEY2a9oysVh1YqxVCrcAyK5qDUJyFb%2FtfS7Jnqj8WcWzZs9DyGvG3EyrWOOYC5mG6QnQSUm0zlogALMeC1xkRDzKUpdcYkCYCXwUer5jMf6GabMAPZM%2FG55UJYjhOToAmWrys7FyM7aEq3dhO2dnnEjsQQaTMjGwjObGDUOzW%2BB3hFJvVyq5yUs0gC53J0aRw6cpQ9xf7mZp44ICz1BxO%2FtgGD7Jog1z7mgur2c%2BdW6Ub3p9BnYMuJHFyT5kQAEVTiTEWaZICgtyH0q3HcBnLu4dAiG3PmQ8kYAfOJXaH9y3qUlSod7gk24tRih3e32y4Tv%2FlsGi2nzNcn3w3jS9oT3W%2B1PC1j0CxxJMpMAqLq6Rj%2B4vG2nCcqaaEJ5hj0KtmRhAyJj4JMpHkqpyTaZ7QxFUd1o2hCE10k%2F8B6wPAC%2BbX26umNCT1lnL%2BhuzibQVKamHwuVRubMaF0DQkGhyZEe2ETvxVwziHEyZhB%2BxZHxCSAizEitDJihimxYKmhHGTytSU%2FnrR6yZ82mFgWwQqvX2%2FZw45VhPz39WTbfDOR22ruH7sl6mqGFtauO%2FiIZzsOhFVCpd515NzF92eDabXLL1A%2FTnUpGAhwVfP1Fwgt%2F3RgP1RMWUuS%2F%2F850hkcitl1T8qO8UaFUJac0MJr02skGOqUBoUZjiJ5qcr%2FBdQUUp%2BB22uBztMyN6ehw75lAU%2BkpTy09KxSO4dWmpgBpkCWjTWc5o4KxuOe0Ak3%2BvT1ZaWrJWvqLFVcRQ%2FjNBMYkXSXEY6mX4rlZP5TWvzEEwzY969BLZDR99SuSPPPPbVbp%2Fvc4dI4g1HIeKmuuOrQdwiN7y2Ce4bHmEHslKOOO3SxF2pM6aCkmcoMhbhFTrJsZap5E5q1Xe2%2BC&X-Amz-Signature=650747cb8904ade050455194ad1861f5ee470fa660a7880a583c273cbde827fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPSOICIL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6aWljOZLPkUU01mBuUwwun9000k%2Bhfj%2F5z1puX6c%2FWwIgWpqT%2Fnk7JsWX0GLm55uJM6l%2BI0T%2FTYM%2FuaTmgktSihAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEY2a9oysVh1YqxVCrcAyK5qDUJyFb%2FtfS7Jnqj8WcWzZs9DyGvG3EyrWOOYC5mG6QnQSUm0zlogALMeC1xkRDzKUpdcYkCYCXwUer5jMf6GabMAPZM%2FG55UJYjhOToAmWrys7FyM7aEq3dhO2dnnEjsQQaTMjGwjObGDUOzW%2BB3hFJvVyq5yUs0gC53J0aRw6cpQ9xf7mZp44ICz1BxO%2FtgGD7Jog1z7mgur2c%2BdW6Ub3p9BnYMuJHFyT5kQAEVTiTEWaZICgtyH0q3HcBnLu4dAiG3PmQ8kYAfOJXaH9y3qUlSod7gk24tRih3e32y4Tv%2FlsGi2nzNcn3w3jS9oT3W%2B1PC1j0CxxJMpMAqLq6Rj%2B4vG2nCcqaaEJ5hj0KtmRhAyJj4JMpHkqpyTaZ7QxFUd1o2hCE10k%2F8B6wPAC%2BbX26umNCT1lnL%2BhuzibQVKamHwuVRubMaF0DQkGhyZEe2ETvxVwziHEyZhB%2BxZHxCSAizEitDJihimxYKmhHGTytSU%2FnrR6yZ82mFgWwQqvX2%2FZw45VhPz39WTbfDOR22ruH7sl6mqGFtauO%2FiIZzsOhFVCpd515NzF92eDabXLL1A%2FTnUpGAhwVfP1Fwgt%2F3RgP1RMWUuS%2F%2F850hkcitl1T8qO8UaFUJac0MJr02skGOqUBoUZjiJ5qcr%2FBdQUUp%2BB22uBztMyN6ehw75lAU%2BkpTy09KxSO4dWmpgBpkCWjTWc5o4KxuOe0Ak3%2BvT1ZaWrJWvqLFVcRQ%2FjNBMYkXSXEY6mX4rlZP5TWvzEEwzY969BLZDR99SuSPPPPbVbp%2Fvc4dI4g1HIeKmuuOrQdwiN7y2Ce4bHmEHslKOOO3SxF2pM6aCkmcoMhbhFTrJsZap5E5q1Xe2%2BC&X-Amz-Signature=bb1db41029a3071a6ab87161b6a104d200cad8eede2d6852ebbe63d1a4797145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

