---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQDMGVX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHHmFFAoYjkgCLpilnrLFtqYIuL0NZNWKXhvUz%2Fqi%2FJBAiEAmWdTwW1q%2FBQYia4rY8XXjTAWmcHMlSC7YIXHhHJTSLkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD6pN8l6uGlXOEq9yyrcA2JCeK0CYHSu2s8HT6gFdWm2%2FS3k1L%2F1U%2Bd423FZgiUwqYGEP5p1TSEtW6Oc34l4MeFOTR1t%2BZ4nrQphlWUJnuEFd9hNHOBBORpD1JuV7vAmrYLCTOXsKdAZMSVwLkDSuqnc2Z%2FTlxn6T6DU3oNy%2FOZK9YhtmBT%2F8Y0B%2FSei8iV7BNSlYVC7rdOzhO893EFYlePE6%2F4iRzZctVBfWe7L4qPsUt67YfVM0vRml%2FHfB35AoW%2BEsdonpGOm60gHOM8LfaQBBmhwwFv3TBogbH%2BFLS53AvwNqUPfcRzDfoKrwv9Ilyd1KU4fRe6%2BlHZUenDc0HTr4Ry7Cp1ayAbsUqYL%2F6PqkVLvCGbIxXhEq4A9VD0pZiZwDg%2BZVTzbYpU95%2FXfaKnhJNRTOgr8QJGhK1gmRhahT%2FA77ayH6myNAKZ%2BfGwRS4Ng9lIpLceUa2DsFidk6ORbmovy5z3DwjaT9d9R%2FnIGuvi5uIR6mqp9L%2FnwFaV3X3XwXQ41D5VV6QRGpQvG45AxPtULjMuNiVTD7QUMRzG%2BKmHmtN0Gl2WY4cBhLux03SazILBGhTg1P%2FUZ1k5Qecrjnv2ypLUhCgC9fayQxz8AMDR%2FRTrQmB68MNpheUZaB5Myj9PGuBH%2FKXETMM7awckGOqUBnlYljYtiupOwBwuYcFEKMbnsFYLQpHX0XKnldMQI9b15Zpc7mhbgxm1uhQL%2Fm593ablodFztm6O73HGqXLv78xz1BUbyuxF%2BDNWgeWYT2Xmr53ZD1%2BWlCQ5DdX86UWgtW3%2BkPtfRBCq902eIbv9sS75iDCwN47nn424Xr%2FgdUAd2j7N1eZ1HZO2p2sV4WC5PwQVbIlJdGC1r4cXeK2k7VLtcpqpt&X-Amz-Signature=e0f8ad6a0503c975102033e3ae851727a3abc12a88036864cee9aba2b8274487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTQDMGVX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHHmFFAoYjkgCLpilnrLFtqYIuL0NZNWKXhvUz%2Fqi%2FJBAiEAmWdTwW1q%2FBQYia4rY8XXjTAWmcHMlSC7YIXHhHJTSLkq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDD6pN8l6uGlXOEq9yyrcA2JCeK0CYHSu2s8HT6gFdWm2%2FS3k1L%2F1U%2Bd423FZgiUwqYGEP5p1TSEtW6Oc34l4MeFOTR1t%2BZ4nrQphlWUJnuEFd9hNHOBBORpD1JuV7vAmrYLCTOXsKdAZMSVwLkDSuqnc2Z%2FTlxn6T6DU3oNy%2FOZK9YhtmBT%2F8Y0B%2FSei8iV7BNSlYVC7rdOzhO893EFYlePE6%2F4iRzZctVBfWe7L4qPsUt67YfVM0vRml%2FHfB35AoW%2BEsdonpGOm60gHOM8LfaQBBmhwwFv3TBogbH%2BFLS53AvwNqUPfcRzDfoKrwv9Ilyd1KU4fRe6%2BlHZUenDc0HTr4Ry7Cp1ayAbsUqYL%2F6PqkVLvCGbIxXhEq4A9VD0pZiZwDg%2BZVTzbYpU95%2FXfaKnhJNRTOgr8QJGhK1gmRhahT%2FA77ayH6myNAKZ%2BfGwRS4Ng9lIpLceUa2DsFidk6ORbmovy5z3DwjaT9d9R%2FnIGuvi5uIR6mqp9L%2FnwFaV3X3XwXQ41D5VV6QRGpQvG45AxPtULjMuNiVTD7QUMRzG%2BKmHmtN0Gl2WY4cBhLux03SazILBGhTg1P%2FUZ1k5Qecrjnv2ypLUhCgC9fayQxz8AMDR%2FRTrQmB68MNpheUZaB5Myj9PGuBH%2FKXETMM7awckGOqUBnlYljYtiupOwBwuYcFEKMbnsFYLQpHX0XKnldMQI9b15Zpc7mhbgxm1uhQL%2Fm593ablodFztm6O73HGqXLv78xz1BUbyuxF%2BDNWgeWYT2Xmr53ZD1%2BWlCQ5DdX86UWgtW3%2BkPtfRBCq902eIbv9sS75iDCwN47nn424Xr%2FgdUAd2j7N1eZ1HZO2p2sV4WC5PwQVbIlJdGC1r4cXeK2k7VLtcpqpt&X-Amz-Signature=a080e50b34cf0eb19ab8ec6b437604e6d74caaab5ded30c2303c0f0a4eeaf074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

