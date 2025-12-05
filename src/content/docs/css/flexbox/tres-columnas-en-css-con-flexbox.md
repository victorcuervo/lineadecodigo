---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ5UJSH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRNwOVIfoDNfqbhFbpmdDyi2qIxGq80XVrkzfpLUoDowIhAJgRmAwDV5Z8a%2Fzqa%2FkCTXrHx6DlhKwqyf%2FGvUKo8IIPKv8DCFUQABoMNjM3NDIzMTgzODA1Igwwt0gMBbgZyxHC9coq3AOJkjFho0Otc4BXsD4jDcln3Nyd4WuJW0YWYJhRsDzmwFGm4RjCrWzXfCdCwgOSZ6KYSFnl%2Bg9m7juesFIVvKPK9z6A0U9YgYfi3Dc5wUyNiBPChLIJBtcJX8vGiALeAYJ%2Bf7MSJuY7uKT6BE8FGydDjquEjKRYGrRLrwEGZYsVwFE16VhpR%2FZ%2Fhkf1ydvrbrKAvzkELNwglkTPNvogopl7A43BinB8GBe3krTr%2BcRgaRqTgypuMny0Wy1LM1uIb9KxywVa6g30w4oCY6HkYgGJnCJ30y75YJUZsb6pbm%2BZoI%2FfG%2FGBPo4GtM2M%2FSouMnxthebFSznBxNUYTZ0q6XD3%2FzGGxmXYj1ZXP92iMCRpuPurQqEhJ35C7QfnzmN5%2FAq7i4Fdi3LqWOQqM16Zx70SnAZEGFiqRuzrvhIe3ggLlwzAJwhmMXQCAwDueEO%2FS2Vca9zIPLPWMdlH3sQqatrkclLQtun4YmLnMKQKOfjhUkoBt0rwlwcmK%2FMNR02zK49Zhv1tlCuwzeEaVCkHQzSAlFoSMt4IGmduqo%2BUCoaw2xxGtT6TLki%2B7pkpUg0N2RNCqCz5rbwQJvrU4U4JSrCP2QyyZUifmQr5rX5cx%2FomhPjO08%2Fnp4Z4pnOi%2BjC5r8nJBjqkAfVssOYf9hVXgeasGlUoz%2F4nXEGl11oFxxMCmuLQnTxveYmvFMX3Aly43ckUtIa9oELN7HJCLgxD0Uzf8vFgLp1McdLCkVf2MVklZ%2Fd%2BTgsCeTzvhE02Mp59St7QGspbUi9nIWX4ixNpP1uem0%2FfSUK624LWee8AJfLHVK%2FhakbHGa6haZ8rh5lKt8fGUQ0J0o9aNGmo3mdt2YH3tbxs%2FcE5Mi4v&X-Amz-Signature=ee8ebafcdb38c296312fb0fa3afaac224084f951122a393d16ec8471de230b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMJ5UJSH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRNwOVIfoDNfqbhFbpmdDyi2qIxGq80XVrkzfpLUoDowIhAJgRmAwDV5Z8a%2Fzqa%2FkCTXrHx6DlhKwqyf%2FGvUKo8IIPKv8DCFUQABoMNjM3NDIzMTgzODA1Igwwt0gMBbgZyxHC9coq3AOJkjFho0Otc4BXsD4jDcln3Nyd4WuJW0YWYJhRsDzmwFGm4RjCrWzXfCdCwgOSZ6KYSFnl%2Bg9m7juesFIVvKPK9z6A0U9YgYfi3Dc5wUyNiBPChLIJBtcJX8vGiALeAYJ%2Bf7MSJuY7uKT6BE8FGydDjquEjKRYGrRLrwEGZYsVwFE16VhpR%2FZ%2Fhkf1ydvrbrKAvzkELNwglkTPNvogopl7A43BinB8GBe3krTr%2BcRgaRqTgypuMny0Wy1LM1uIb9KxywVa6g30w4oCY6HkYgGJnCJ30y75YJUZsb6pbm%2BZoI%2FfG%2FGBPo4GtM2M%2FSouMnxthebFSznBxNUYTZ0q6XD3%2FzGGxmXYj1ZXP92iMCRpuPurQqEhJ35C7QfnzmN5%2FAq7i4Fdi3LqWOQqM16Zx70SnAZEGFiqRuzrvhIe3ggLlwzAJwhmMXQCAwDueEO%2FS2Vca9zIPLPWMdlH3sQqatrkclLQtun4YmLnMKQKOfjhUkoBt0rwlwcmK%2FMNR02zK49Zhv1tlCuwzeEaVCkHQzSAlFoSMt4IGmduqo%2BUCoaw2xxGtT6TLki%2B7pkpUg0N2RNCqCz5rbwQJvrU4U4JSrCP2QyyZUifmQr5rX5cx%2FomhPjO08%2Fnp4Z4pnOi%2BjC5r8nJBjqkAfVssOYf9hVXgeasGlUoz%2F4nXEGl11oFxxMCmuLQnTxveYmvFMX3Aly43ckUtIa9oELN7HJCLgxD0Uzf8vFgLp1McdLCkVf2MVklZ%2Fd%2BTgsCeTzvhE02Mp59St7QGspbUi9nIWX4ixNpP1uem0%2FfSUK624LWee8AJfLHVK%2FhakbHGa6haZ8rh5lKt8fGUQ0J0o9aNGmo3mdt2YH3tbxs%2FcE5Mi4v&X-Amz-Signature=059ce9919f2a939b154920b824ad691255e965dba3662ca228476f442c9a81c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

