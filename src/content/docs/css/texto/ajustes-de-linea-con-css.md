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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5V4C52V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1Kq9EgS6SHhQOLQhM3mIaFl24uB%2BNqwHR2NB2JLwDngIhAI9ZrAY4IBaus7fF9B6Cy6FRixIkf0KaXr2hmaYDjvhWKv8DCHYQABoMNjM3NDIzMTgzODA1Igw1qSQ22g%2FAJVz0SsMq3ANgu2SSkd%2F77ArHXA8GVlgx4WaIooUZg%2BKSLK%2FIhKk0ZqnfkSEopYOkRrb%2FFfUAyrPof03q3ZhrwmWLe0u6QKWuuQoiN3%2F4hnM85ub%2FXcEy745RdU%2FmqOWQvpAmA7z%2FI8IxAbBxjnKSMo4GL4x7TkBADR2UkqKKo0RbR1NV0KxCJcdPbbi9cnOHZla14suCpFdWsp9nx8XK3bEa9Olf3EJjp7JVD6uMQijAxz%2FvcTNJCFQDyyuV%2B1XBzji9g2Rw0WpkYRBEZRlsVk2%2F20HbwIXgpqSzcDeDiZyLWZ1HTDfRO3NbIXeygx2nHiUjirvuVHywTdZx%2BYXRtR6vydevd16aWV8AMcmvJ47fiM0hKxYoEmKCw4y4T2wsDHJQjDqjT2leQW0TpEX1lzFUKC2HzTdXEg6aO6LSw03X63iuQHQzeCGlpPUlAc39TkO4H5ARdxL3GpWbijUxPuigddzalQrX9jeFyhlyjzo5%2FSpxf1ZWdMxnDYLzgRcbFwXo3bb1R%2BYtsduo769OMpsE3P1taDY3R9CCRhFpl3MXHm57oLQbr1fA0M46snN%2FTNs4L3WQEWRzr8d8LNoxr5OVYH6CLP0wzCPRgiMDfTyUhWcMOU7Cj8vyNhOD%2FHA2QXmTZzCF6ojKBjqkAYH%2BqDeO1q92Ai143GE%2BpFjqLj6So137JJmYn3m1RXhSm1cYtS67%2BxPk%2BL5DM4luli80m0tZIX%2Bwp%2FyQM7%2FKAGZ4MeytB%2FZIesgSrZOVnak3fcc%2Bjy3u8AjfiNAGm9EoS73xOvkuxSH3dtn3UrMGxIZbvb4eJPXeNEPpdY1TVKsjMxg7dsbygLplsjoY5zy6QFE5wPbVkF9jxRdNnFMS9kqxIN8U&X-Amz-Signature=30906382907eebdc5b0a304c552fa805d09122608cffac7ca7d09c5ce0f15769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5V4C52V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1Kq9EgS6SHhQOLQhM3mIaFl24uB%2BNqwHR2NB2JLwDngIhAI9ZrAY4IBaus7fF9B6Cy6FRixIkf0KaXr2hmaYDjvhWKv8DCHYQABoMNjM3NDIzMTgzODA1Igw1qSQ22g%2FAJVz0SsMq3ANgu2SSkd%2F77ArHXA8GVlgx4WaIooUZg%2BKSLK%2FIhKk0ZqnfkSEopYOkRrb%2FFfUAyrPof03q3ZhrwmWLe0u6QKWuuQoiN3%2F4hnM85ub%2FXcEy745RdU%2FmqOWQvpAmA7z%2FI8IxAbBxjnKSMo4GL4x7TkBADR2UkqKKo0RbR1NV0KxCJcdPbbi9cnOHZla14suCpFdWsp9nx8XK3bEa9Olf3EJjp7JVD6uMQijAxz%2FvcTNJCFQDyyuV%2B1XBzji9g2Rw0WpkYRBEZRlsVk2%2F20HbwIXgpqSzcDeDiZyLWZ1HTDfRO3NbIXeygx2nHiUjirvuVHywTdZx%2BYXRtR6vydevd16aWV8AMcmvJ47fiM0hKxYoEmKCw4y4T2wsDHJQjDqjT2leQW0TpEX1lzFUKC2HzTdXEg6aO6LSw03X63iuQHQzeCGlpPUlAc39TkO4H5ARdxL3GpWbijUxPuigddzalQrX9jeFyhlyjzo5%2FSpxf1ZWdMxnDYLzgRcbFwXo3bb1R%2BYtsduo769OMpsE3P1taDY3R9CCRhFpl3MXHm57oLQbr1fA0M46snN%2FTNs4L3WQEWRzr8d8LNoxr5OVYH6CLP0wzCPRgiMDfTyUhWcMOU7Cj8vyNhOD%2FHA2QXmTZzCF6ojKBjqkAYH%2BqDeO1q92Ai143GE%2BpFjqLj6So137JJmYn3m1RXhSm1cYtS67%2BxPk%2BL5DM4luli80m0tZIX%2Bwp%2FyQM7%2FKAGZ4MeytB%2FZIesgSrZOVnak3fcc%2Bjy3u8AjfiNAGm9EoS73xOvkuxSH3dtn3UrMGxIZbvb4eJPXeNEPpdY1TVKsjMxg7dsbygLplsjoY5zy6QFE5wPbVkF9jxRdNnFMS9kqxIN8U&X-Amz-Signature=12afb0f6752463130d276818ebedd7b051a4bbb19beaeed22f02f9c41a2cfe5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

