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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5OSLXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrIWk1unWW%2BQV4oDWqU9z6C43REEAWdTZJ%2Bs%2BUuZmoMAiAfhsyv9kXpCoCOVLVv13hCaUhYIlimAR7UvUKukhe%2BZCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsTUeDncDEejniVvFKtwDRg7Tsy8Py%2B5F%2BRDG3aTJ6%2FY8WBR0m56l%2FSpvu9P98rDoHwlffB3wFMxrwE8QE0xg%2F9gtf8NmrImE8WIqGzJr%2FZHPjRNROzd8b1TBCIAqeilVPiv4x72VUi5a1Puy4GGnKIwLQuwUArmtd%2BvvsowvNPAgfSGX5jLsDEN9dgjQv3xWYMD9Yl05W6QY%2Ft463wdmA%2FsJoL0JphANRz%2Fxvalb7Ob0y2ysVRHun6rRSjMQjsEnUvBCptt29%2FMrzdhZvOgWBqCf74WHWNPTEv0O1avGOu2bI3GYunVMB4VelzRb4V0Pq8VUFdKo3Sf43WiqxcPRnmDPp4iHPn8UdAjkb0EzeDV6%2Fofu0UDQoKID33SN3072TXdrfySCTxbZ%2Bz7hScdFAwxqtvD1VLwvtoBGPECWW7R7E2Avzx4n1WAAibTUcTfb60bpJAYgGVk8XfocnwzuGIF%2FfzOnAr8hd3cVAiBDcmRKNNOJqaWHLOn9jNm5kUsIkQmr7flL7amstFb3XSGNt8C19vQv5l7il1jg954n0YkW9NpErFB5bXO4BwhejCrnMqFxaFOe5bbX6g%2FYX5Bk%2BpU3o%2FvSia1HLMr1z2kONOj0SkhQNdW9Lk5ut3Jz0rRysIuS9bCEx1YK37Iwt5aIygY6pgF4nxfDEZ1Y9S3Q7Mi7zR1yxjgJzn5yrRyHdmMB%2BBMA4zAglw02ObGIvrjsXmWx33P6jQ4zquLo4ME3yDWJdEz00WHj44IMZ0ywD5IXgaZFqlvedAnAxfJ6QZlCduOON3P9S2D39nsqx93t17Y%2F1wXNyrVqY8kEToNxe9pUV4DxyUysB6N9oLqWjs6uRprJ8iypBzv6LZ4ulVg2%2BEYbvF%2F%2BVxcHqe9i&X-Amz-Signature=956c524794012233fcb8cb9e03c91a3591c1c4e0343261324897f33af2007a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE5OSLXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrIWk1unWW%2BQV4oDWqU9z6C43REEAWdTZJ%2Bs%2BUuZmoMAiAfhsyv9kXpCoCOVLVv13hCaUhYIlimAR7UvUKukhe%2BZCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsTUeDncDEejniVvFKtwDRg7Tsy8Py%2B5F%2BRDG3aTJ6%2FY8WBR0m56l%2FSpvu9P98rDoHwlffB3wFMxrwE8QE0xg%2F9gtf8NmrImE8WIqGzJr%2FZHPjRNROzd8b1TBCIAqeilVPiv4x72VUi5a1Puy4GGnKIwLQuwUArmtd%2BvvsowvNPAgfSGX5jLsDEN9dgjQv3xWYMD9Yl05W6QY%2Ft463wdmA%2FsJoL0JphANRz%2Fxvalb7Ob0y2ysVRHun6rRSjMQjsEnUvBCptt29%2FMrzdhZvOgWBqCf74WHWNPTEv0O1avGOu2bI3GYunVMB4VelzRb4V0Pq8VUFdKo3Sf43WiqxcPRnmDPp4iHPn8UdAjkb0EzeDV6%2Fofu0UDQoKID33SN3072TXdrfySCTxbZ%2Bz7hScdFAwxqtvD1VLwvtoBGPECWW7R7E2Avzx4n1WAAibTUcTfb60bpJAYgGVk8XfocnwzuGIF%2FfzOnAr8hd3cVAiBDcmRKNNOJqaWHLOn9jNm5kUsIkQmr7flL7amstFb3XSGNt8C19vQv5l7il1jg954n0YkW9NpErFB5bXO4BwhejCrnMqFxaFOe5bbX6g%2FYX5Bk%2BpU3o%2FvSia1HLMr1z2kONOj0SkhQNdW9Lk5ut3Jz0rRysIuS9bCEx1YK37Iwt5aIygY6pgF4nxfDEZ1Y9S3Q7Mi7zR1yxjgJzn5yrRyHdmMB%2BBMA4zAglw02ObGIvrjsXmWx33P6jQ4zquLo4ME3yDWJdEz00WHj44IMZ0ywD5IXgaZFqlvedAnAxfJ6QZlCduOON3P9S2D39nsqx93t17Y%2F1wXNyrVqY8kEToNxe9pUV4DxyUysB6N9oLqWjs6uRprJ8iypBzv6LZ4ulVg2%2BEYbvF%2F%2BVxcHqe9i&X-Amz-Signature=a4e4ea0ca6dd98ffd35bb6c0c2b900885c3b06dc38f0455b40aaf0c1a906722f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

