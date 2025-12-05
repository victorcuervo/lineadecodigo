---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNUPGMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwuKzKGBwBhGaWjYeWsGe98mOj3LklEk1soQ9HlczpKgIhAKV7kr2Kqs5nYavOOFoEZnPtEYSYeyQJeuh7RjzOd5NSKv8DCFsQABoMNjM3NDIzMTgzODA1IgyuIQICkUq80umrtf0q3AO8gWNybGGWeeqXpYGFJRSLnAr%2FVTmwt79gWoZbbxwB3VBM1OC23YkVTp%2Fm4FtXxGzpLWe%2FV6LOqExKRmx%2BRMb62aJzuUR68A8yooYIEPSSuwdFMr9wtTnCBff5OyY%2Bf%2F48ITiJTreEXSx05kfaWBwnZU4BdxFq9W06GgIg3h6%2FwfVjdgqyM8Gbc7ZQ77%2Fh5nJzNNhl4TS0MiiG9MMJXlf9r1jmPuiQWmS7M1Xu9jvCQCwWcgiQyqfXPWmMwmYCsdnaeScyegV1rR5thfksDxh6YWcsQk9SkfALlMeVN7oEf1qrlACabVZEjK5cJpEAMq%2FWRW1julT%2Feen01UuabqsS2hDjsNg6gnZNAuiYNmhdenTS0WNFjcNg51qExDMM49hNEDHbw52YWNuZ1vLm1QknS1O2wi3eLVDb530%2F%2BrOLMPw5ZXrDntHvjha0OfAjB0eTlDuEhkvwayDrYl8vsctikPoOYpxzOMsD64IVSw2mL0ipM6PgBK0wjdEhVr77gqvLbhcBL6kO4%2FwRyOFrTOVYLGFpzeT8ncJUcefzSAEGTkuJMsNh%2ByMIyxLTRNe6amDJPHKg0oV5stp%2FIL7FriGst%2Bsk611TvxLmAKMBymEKgHcl8iVB0cJcVXYwdzCAzsrJBjqkAZ5kiRYyg7O5D7%2FWI3wcnTWkfrnkxeiL8mF9glIZO8lLCHs2preQhjn8K%2BmCYVInM9Fg70ZA8rqw60jNDXazwyeGRwETfG4re1nHCMnznxhdyVUq%2Fx1aAGRUyLr2c5iCimXW4p3HjS%2F6JAEfmtQVcF6lgh%2BIRxr9p%2BX1pDGAMw%2Fd6p3XAS36bEFKl4y8nnJbN6sJSgvIyxQ0aZmJRgqGfUWeTIN9&X-Amz-Signature=b239f8bdced763c34f798d263cb5bcce7ade1da10bd34b8c3ff6116e3c8e35c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZNUPGMR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwuKzKGBwBhGaWjYeWsGe98mOj3LklEk1soQ9HlczpKgIhAKV7kr2Kqs5nYavOOFoEZnPtEYSYeyQJeuh7RjzOd5NSKv8DCFsQABoMNjM3NDIzMTgzODA1IgyuIQICkUq80umrtf0q3AO8gWNybGGWeeqXpYGFJRSLnAr%2FVTmwt79gWoZbbxwB3VBM1OC23YkVTp%2Fm4FtXxGzpLWe%2FV6LOqExKRmx%2BRMb62aJzuUR68A8yooYIEPSSuwdFMr9wtTnCBff5OyY%2Bf%2F48ITiJTreEXSx05kfaWBwnZU4BdxFq9W06GgIg3h6%2FwfVjdgqyM8Gbc7ZQ77%2Fh5nJzNNhl4TS0MiiG9MMJXlf9r1jmPuiQWmS7M1Xu9jvCQCwWcgiQyqfXPWmMwmYCsdnaeScyegV1rR5thfksDxh6YWcsQk9SkfALlMeVN7oEf1qrlACabVZEjK5cJpEAMq%2FWRW1julT%2Feen01UuabqsS2hDjsNg6gnZNAuiYNmhdenTS0WNFjcNg51qExDMM49hNEDHbw52YWNuZ1vLm1QknS1O2wi3eLVDb530%2F%2BrOLMPw5ZXrDntHvjha0OfAjB0eTlDuEhkvwayDrYl8vsctikPoOYpxzOMsD64IVSw2mL0ipM6PgBK0wjdEhVr77gqvLbhcBL6kO4%2FwRyOFrTOVYLGFpzeT8ncJUcefzSAEGTkuJMsNh%2ByMIyxLTRNe6amDJPHKg0oV5stp%2FIL7FriGst%2Bsk611TvxLmAKMBymEKgHcl8iVB0cJcVXYwdzCAzsrJBjqkAZ5kiRYyg7O5D7%2FWI3wcnTWkfrnkxeiL8mF9glIZO8lLCHs2preQhjn8K%2BmCYVInM9Fg70ZA8rqw60jNDXazwyeGRwETfG4re1nHCMnznxhdyVUq%2Fx1aAGRUyLr2c5iCimXW4p3HjS%2F6JAEfmtQVcF6lgh%2BIRxr9p%2BX1pDGAMw%2Fd6p3XAS36bEFKl4y8nnJbN6sJSgvIyxQ0aZmJRgqGfUWeTIN9&X-Amz-Signature=e54f74f54460ae1ce584ced858455a1b4b4b623ba550739c2ae447564deacacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

