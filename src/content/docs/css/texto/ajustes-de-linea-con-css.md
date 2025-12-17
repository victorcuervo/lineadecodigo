---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNW5GMBV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbJdMmCjesjtxmo2ym1%2FQldIPC0FXR2zXBIec4cPioCAiA6PTzkOXuE4VySRtSOjTsTG0P7n0MBCv1TMYRUPICBvCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtgx3uuSaz%2B2jguPnKtwDqztAhJ7CvkdqT2MgB9aX9KVWnYQe0BPA7mtPBEDWQzIZAeDfYbQEaca8PZNPHQq%2Fxzf1EBk17c%2BVJ2IgHtl4l32aJ9Z8POy4iboY60itPxzzhKqONfRxVy2HbXUcI3l8BTYqf7fFsNC8f4yQlsU2BevOUJ3%2FuPU1q2XS%2FGkfGRcQSqjmKTiPADB10GCNh%2Bx3c3y4qq9J%2B6lcCFUxl7z8%2FChvnp6CfjsBOSLYDcYjOIj3WY1MzoTFZWyq%2FtjV4kSG6IUdK4FVyL3rPXkdJ9mHiNQo6QCv8tZ7WO0v3s0ViAXRYprUdRqYkAy7lDUYn2zrRT9V2lEbJ%2BFnij1XjwSPkqMGAnRL3eTnJM%2FqQjclhLp50i4fqK0t6uvhNZ%2BSV7pMei7NITIiowprzoVnKl0zugztDpyvkFOWKI3dL%2FS9e3rKS2WXGu48K6xun0LQCRdDdqC9N84SSqT2R%2BTRRCnIQnAeXQ1E3cleQkImEUE7HQ%2FtbJB4EKm6VE8pIPPTCNTMcmfyn5yoo868tH6G4SVSVMc1JRWuI6gScTT%2FEw%2FwzaumIz5qDcACkajmNxKnc0rt1EuRm2dZYSTUXuoJoA%2BhoZI7EeytEr%2Bkj3G8%2BBKU4T1Cd%2FggeM5Z3WN12g8wm6CLygY6pgF9AwH7hVEZalR8e582%2BHkw7US0XFcauMiYF1aVxd9APIeqf2NW4Y9N4ooSrepSP5t%2FRNZPZziJ22JlPAya3FR4ohlfep2CG5sWg5C4buzwAj7JVlByXeXHVpUtAUysAZ6EzT8ItoTZKvWapk9F3lbWRkG2Q0SToqXaTZywQjvLVv5XbHayqTM18dzmO9%2BYzX9ENjGoGFUDlLrpaxnU3xKKLD8D6VwV&X-Amz-Signature=ddefc405031dd50e9738e5332c0d2b8263d81c140f25791d31c67a90ed63213f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNW5GMBV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEbJdMmCjesjtxmo2ym1%2FQldIPC0FXR2zXBIec4cPioCAiA6PTzkOXuE4VySRtSOjTsTG0P7n0MBCv1TMYRUPICBvCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtgx3uuSaz%2B2jguPnKtwDqztAhJ7CvkdqT2MgB9aX9KVWnYQe0BPA7mtPBEDWQzIZAeDfYbQEaca8PZNPHQq%2Fxzf1EBk17c%2BVJ2IgHtl4l32aJ9Z8POy4iboY60itPxzzhKqONfRxVy2HbXUcI3l8BTYqf7fFsNC8f4yQlsU2BevOUJ3%2FuPU1q2XS%2FGkfGRcQSqjmKTiPADB10GCNh%2Bx3c3y4qq9J%2B6lcCFUxl7z8%2FChvnp6CfjsBOSLYDcYjOIj3WY1MzoTFZWyq%2FtjV4kSG6IUdK4FVyL3rPXkdJ9mHiNQo6QCv8tZ7WO0v3s0ViAXRYprUdRqYkAy7lDUYn2zrRT9V2lEbJ%2BFnij1XjwSPkqMGAnRL3eTnJM%2FqQjclhLp50i4fqK0t6uvhNZ%2BSV7pMei7NITIiowprzoVnKl0zugztDpyvkFOWKI3dL%2FS9e3rKS2WXGu48K6xun0LQCRdDdqC9N84SSqT2R%2BTRRCnIQnAeXQ1E3cleQkImEUE7HQ%2FtbJB4EKm6VE8pIPPTCNTMcmfyn5yoo868tH6G4SVSVMc1JRWuI6gScTT%2FEw%2FwzaumIz5qDcACkajmNxKnc0rt1EuRm2dZYSTUXuoJoA%2BhoZI7EeytEr%2Bkj3G8%2BBKU4T1Cd%2FggeM5Z3WN12g8wm6CLygY6pgF9AwH7hVEZalR8e582%2BHkw7US0XFcauMiYF1aVxd9APIeqf2NW4Y9N4ooSrepSP5t%2FRNZPZziJ22JlPAya3FR4ohlfep2CG5sWg5C4buzwAj7JVlByXeXHVpUtAUysAZ6EzT8ItoTZKvWapk9F3lbWRkG2Q0SToqXaTZywQjvLVv5XbHayqTM18dzmO9%2BYzX9ENjGoGFUDlLrpaxnU3xKKLD8D6VwV&X-Amz-Signature=dff970a7211a695d02b4868a4371f46b76471a0bc0c438d243bd0ddb55220306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

