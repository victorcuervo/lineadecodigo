---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5PCZ3B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHctDqymTRk4q5yRn5UerSxg4RmkvG07aXI6LJgd7fWCAiEA9nZ7FfwK%2BKNBF4XfAz6BNSB9JcLG840doe4e6smg9%2Fsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIqbQ%2FjJPzUpG3BGZSrcA2uzl6ebx2RSWPkgneq9fuYUEyjNj%2BdyAKf6TvOy8%2BC%2F6ZqBN6%2FoS4XHFMxcmDqV3kj6MPfN1OJtRpFgkIxHUqCdiiXjU%2FA8Z7BoGj93POTZH9dBkBUAnW0J83jTfBDjA4xmZGv34UrVefujlNjvrG0jk%2F6javuRXHkmAjv1H5JmqzQhUFE9xXnrnNyK7kmNqGGensb00FJjiaamo4%2BE9w7nkoE5flEnPWZPd8YcjaSleFfBMrh0wXF%2Bp9ra0YfuF8z5D49qp89hS369Cf%2BzXY1SENGu2FnmvGNjQniUGUth5qPUcU%2F5LTX5y1u3nLZCalseuSS3ZLWokF6NZzz%2Btm5wRFTVPg9B7403vRJ0wrlteef6G5VJafZW2JcY9DIS%2FRI26Dfmc2rrry%2BRqoGXTOYw07hiL4QXDINNRRmBeeFTS2bdqot%2BkFXy2SgJ1xQHZrq6X6hPcaD9A%2Bbw0CtLacVZSfO4lB%2BpxtNVnlnymBvrIGPFzDK6fTiXzjufj0Um9xKfNf4h1egtB6bcZTWdYtwVNqJB%2FR1v%2BM96pPCMeQU%2FhzPpqM0xK22CgEHwzFAfH2pADAwRKP1AFEu1PjXCXhipXlAXU%2FbYHM2ZB9Z%2BqQI4raOPv7RRyUaBWUiOML6ez8kGOqUBjX%2FtKJRtf16IX3K4YvFflt7nBiLxH52lS1C1OaS0EyZxUUMno7J%2BVhhHUxMZUWxkb8bZxureBhTmkgZt0PasREVu7Ow13vus0gsoH3J6bU%2F9kuGf73g%2FXeGetZr6khHY0K2UHSy%2FtLy%2FJx0z7NmuiT3hUbrXSJLmK4N%2FXw4IYtZWrK8pBuHX3VJdgo0eKDAWxJBIGRGeySmvwB1xQXa1oA1Jt%2FdB&X-Amz-Signature=3d3dba07b558e1e77bc85673d6c877a693f35ff636beb91a4393d0682de79f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJ5PCZ3B%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHctDqymTRk4q5yRn5UerSxg4RmkvG07aXI6LJgd7fWCAiEA9nZ7FfwK%2BKNBF4XfAz6BNSB9JcLG840doe4e6smg9%2Fsq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDIqbQ%2FjJPzUpG3BGZSrcA2uzl6ebx2RSWPkgneq9fuYUEyjNj%2BdyAKf6TvOy8%2BC%2F6ZqBN6%2FoS4XHFMxcmDqV3kj6MPfN1OJtRpFgkIxHUqCdiiXjU%2FA8Z7BoGj93POTZH9dBkBUAnW0J83jTfBDjA4xmZGv34UrVefujlNjvrG0jk%2F6javuRXHkmAjv1H5JmqzQhUFE9xXnrnNyK7kmNqGGensb00FJjiaamo4%2BE9w7nkoE5flEnPWZPd8YcjaSleFfBMrh0wXF%2Bp9ra0YfuF8z5D49qp89hS369Cf%2BzXY1SENGu2FnmvGNjQniUGUth5qPUcU%2F5LTX5y1u3nLZCalseuSS3ZLWokF6NZzz%2Btm5wRFTVPg9B7403vRJ0wrlteef6G5VJafZW2JcY9DIS%2FRI26Dfmc2rrry%2BRqoGXTOYw07hiL4QXDINNRRmBeeFTS2bdqot%2BkFXy2SgJ1xQHZrq6X6hPcaD9A%2Bbw0CtLacVZSfO4lB%2BpxtNVnlnymBvrIGPFzDK6fTiXzjufj0Um9xKfNf4h1egtB6bcZTWdYtwVNqJB%2FR1v%2BM96pPCMeQU%2FhzPpqM0xK22CgEHwzFAfH2pADAwRKP1AFEu1PjXCXhipXlAXU%2FbYHM2ZB9Z%2BqQI4raOPv7RRyUaBWUiOML6ez8kGOqUBjX%2FtKJRtf16IX3K4YvFflt7nBiLxH52lS1C1OaS0EyZxUUMno7J%2BVhhHUxMZUWxkb8bZxureBhTmkgZt0PasREVu7Ow13vus0gsoH3J6bU%2F9kuGf73g%2FXeGetZr6khHY0K2UHSy%2FtLy%2FJx0z7NmuiT3hUbrXSJLmK4N%2FXw4IYtZWrK8pBuHX3VJdgo0eKDAWxJBIGRGeySmvwB1xQXa1oA1Jt%2FdB&X-Amz-Signature=15ecab73fca9fad581565174ccb80651b8f337d9822cb99ba57118aa3432f79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

