---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3DAORV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhqNN%2FOwTgNm5eig64I50fINAyKyhIyoQ4RUac9aP6MAiEAjE%2F6gnaczACIg0oSj1cDJwGxPgeAD5qYhvUfIk4%2FmJUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMyZHEQBxGUd93BlJircA2YZXIIrUK3xeqb8ovSpwKhPifAxpU4tx61n11khLnA8SmbP0kTxXsveuIs0HMBGE1nvXA0Edm5zQDVn3MOuVxb5ooiC6Ynjk3%2B0Z%2BsDcgFAQ5mmPym0R4eXtPYcJn8noXQPgB5rGbZ8o0BJ9VRAI0vKKxnATfYsbXz7nEX4I5944HaewEhn34vVCkFJ2Lq%2FcvVCMQZWMIueSx7vU3LBrnbist7zgTRmw%2FALipqfzp%2FYoFKRfFtHDH0waxPzKDli7G6vJfWHQE3lbS8A2bvTbFXhkQtSH%2Bav1EPb%2FBsu5BBjBtGL7GpK2xgRpYOXxUGqz%2FVjIR2FMnxR79Mj2Ay13P5OBWBYfxT2e%2FEMCi6b24va4oqYVRgJSDriu%2F3DvobDW0DziLg2URVgSPdJF3AVpHHivm83GC%2B5Y%2B2hwjj34A3elIdYYdUpmDymDnXB%2FhQNA%2FzGj%2BcKyjQ20puGIzy8WtLYBU4aMF7BWJ9bTw2txzlzoD16UqV9jTSfVx1wPSQFp14viCLw5QRB4ivzvA%2FYBundDzLPbUe1ZU%2BRoQwp%2BbnPxLYsBa9ppSI5YP3jpSKbweiHpedOdBgKGnBxs51U2vR2zGtTlvAWefgPjdYTdSUQTOX%2Fy0c7FfbyDMuGMJiK0MkGOqUBJiffO9kUVC4cDDSCM4%2BqNzfKUe2tDl%2BV4vwmwVniz5hgae%2BOOQYc%2F4PKHUuUx1t9U3hyssu2fSL%2FI33%2FtbGDcUDDQnLS1nurrKFBBmkbG37bJpHnTzNLyoLHPXVRP3lyFRbyTbmLKI21U7zAe%2FDj5kCFLgSGv8s12baQYUZ185f9bueNmXrU1Pqk4a7yBY%2F%2BSV%2BGUrwHvIODvKa6raP16wx5JTK3&X-Amz-Signature=b20d205040cb6047217f2b33b64074c08e959a5ee2d051888374903cf13664ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3DAORV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGhqNN%2FOwTgNm5eig64I50fINAyKyhIyoQ4RUac9aP6MAiEAjE%2F6gnaczACIg0oSj1cDJwGxPgeAD5qYhvUfIk4%2FmJUq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMyZHEQBxGUd93BlJircA2YZXIIrUK3xeqb8ovSpwKhPifAxpU4tx61n11khLnA8SmbP0kTxXsveuIs0HMBGE1nvXA0Edm5zQDVn3MOuVxb5ooiC6Ynjk3%2B0Z%2BsDcgFAQ5mmPym0R4eXtPYcJn8noXQPgB5rGbZ8o0BJ9VRAI0vKKxnATfYsbXz7nEX4I5944HaewEhn34vVCkFJ2Lq%2FcvVCMQZWMIueSx7vU3LBrnbist7zgTRmw%2FALipqfzp%2FYoFKRfFtHDH0waxPzKDli7G6vJfWHQE3lbS8A2bvTbFXhkQtSH%2Bav1EPb%2FBsu5BBjBtGL7GpK2xgRpYOXxUGqz%2FVjIR2FMnxR79Mj2Ay13P5OBWBYfxT2e%2FEMCi6b24va4oqYVRgJSDriu%2F3DvobDW0DziLg2URVgSPdJF3AVpHHivm83GC%2B5Y%2B2hwjj34A3elIdYYdUpmDymDnXB%2FhQNA%2FzGj%2BcKyjQ20puGIzy8WtLYBU4aMF7BWJ9bTw2txzlzoD16UqV9jTSfVx1wPSQFp14viCLw5QRB4ivzvA%2FYBundDzLPbUe1ZU%2BRoQwp%2BbnPxLYsBa9ppSI5YP3jpSKbweiHpedOdBgKGnBxs51U2vR2zGtTlvAWefgPjdYTdSUQTOX%2Fy0c7FfbyDMuGMJiK0MkGOqUBJiffO9kUVC4cDDSCM4%2BqNzfKUe2tDl%2BV4vwmwVniz5hgae%2BOOQYc%2F4PKHUuUx1t9U3hyssu2fSL%2FI33%2FtbGDcUDDQnLS1nurrKFBBmkbG37bJpHnTzNLyoLHPXVRP3lyFRbyTbmLKI21U7zAe%2FDj5kCFLgSGv8s12baQYUZ185f9bueNmXrU1Pqk4a7yBY%2F%2BSV%2BGUrwHvIODvKa6raP16wx5JTK3&X-Amz-Signature=3bf70ed7dea91fbf31581f65b979893db99a2e6f9c364c41f76cc0157c4bc610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

