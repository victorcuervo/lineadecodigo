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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN7Z6WW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWrpa6R4gs0fNXAKKpGxvQ1wU59rKhRe51gG%2Fd%2FcjzNAiEA%2F19V3pzRZsQU4oLNqBCRPS8RkjBa%2BaoloLmptRZFXPkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBGtNKoaTRJEafpU6ircAwb88Vcdp%2FRsAMAXX6ZRzmKYQTKD%2BHAfB54k6g4VCsYXMKuTkiY%2BuPH14ZTxu4hXJf%2FXEb7VB5ymJ6KjApEf5Wu0TGNWTdh3ZebItaWLBxjuJ3%2B23YPIW%2BeC%2BSnmQRwIjmBZFBzie9nphyXB1o0v4liPZ%2BZigVL8pFpnjEd57NkK2wDuuIqgKZ8PISx3yaz1G6AT51qRm4DB6pxGBWuhs8E2XiD0LYAP3CKtuMHoW97jG6Tq%2FYQnzPEFCWE46cZxQLoCjD9MMS0MV8LHPqkPp53VDPd5hFJqTNBhjQPYQmq5alEiFHJMXUuudqXotPQUhV4gJHx9RMjkuh8hBkOzGTLmwnRe6jhJT7SkVGxQxquFvanyOjr%2Bo4nkB7yRfgMcKb%2BgJQfvlqNmVeY8YEJPQEDp%2BZUoUMumlvwIlDm4UaC1oyrcCGg1vdViyRj73U0gb2Pfkew1nJZSKCNenp7cF5u3EmzjPnyGEpCppgtaoSB9wzeVy0hPMJgi81WaGfOmXZ5ccUu0V682oGSKIvgGqfg1WK7emWCZQm%2FpzmsQLpAqz6i6mkZTF59YVXRi6tDRt6MUrSjogOEz5xP8cq1dGqvjx2nHqQs8BVgyHgxveHC6lQQ5CinmmC2RylVKMMyViMoGOqUBuqQ4ytCmJJrYlfiNpuVZw9DeD%2FQdbVn4WZfq371VqkWF1nKHbhHI4ZgEi9Rs6%2FCSqtSVF0%2BK7PaezCkTm3XKkm4%2BsCTVoRgoR%2FGSbc0wQKfoYrswHtv4t2oJeCfZvgxl8TfW7dGGEo9JbUtvdD0HZji1gdgYCXRnKVLIX5hVFDnzp7LxchFvO%2BlmzvbwnkCTFgD9WRpqC7ZCfN%2BwH1rDHfGI2spU&X-Amz-Signature=e8ca010d46065041b94359f0bf56ecf0444b7b562c61e342cacfe53d2b74613d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HN7Z6WW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGWrpa6R4gs0fNXAKKpGxvQ1wU59rKhRe51gG%2Fd%2FcjzNAiEA%2F19V3pzRZsQU4oLNqBCRPS8RkjBa%2BaoloLmptRZFXPkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBGtNKoaTRJEafpU6ircAwb88Vcdp%2FRsAMAXX6ZRzmKYQTKD%2BHAfB54k6g4VCsYXMKuTkiY%2BuPH14ZTxu4hXJf%2FXEb7VB5ymJ6KjApEf5Wu0TGNWTdh3ZebItaWLBxjuJ3%2B23YPIW%2BeC%2BSnmQRwIjmBZFBzie9nphyXB1o0v4liPZ%2BZigVL8pFpnjEd57NkK2wDuuIqgKZ8PISx3yaz1G6AT51qRm4DB6pxGBWuhs8E2XiD0LYAP3CKtuMHoW97jG6Tq%2FYQnzPEFCWE46cZxQLoCjD9MMS0MV8LHPqkPp53VDPd5hFJqTNBhjQPYQmq5alEiFHJMXUuudqXotPQUhV4gJHx9RMjkuh8hBkOzGTLmwnRe6jhJT7SkVGxQxquFvanyOjr%2Bo4nkB7yRfgMcKb%2BgJQfvlqNmVeY8YEJPQEDp%2BZUoUMumlvwIlDm4UaC1oyrcCGg1vdViyRj73U0gb2Pfkew1nJZSKCNenp7cF5u3EmzjPnyGEpCppgtaoSB9wzeVy0hPMJgi81WaGfOmXZ5ccUu0V682oGSKIvgGqfg1WK7emWCZQm%2FpzmsQLpAqz6i6mkZTF59YVXRi6tDRt6MUrSjogOEz5xP8cq1dGqvjx2nHqQs8BVgyHgxveHC6lQQ5CinmmC2RylVKMMyViMoGOqUBuqQ4ytCmJJrYlfiNpuVZw9DeD%2FQdbVn4WZfq371VqkWF1nKHbhHI4ZgEi9Rs6%2FCSqtSVF0%2BK7PaezCkTm3XKkm4%2BsCTVoRgoR%2FGSbc0wQKfoYrswHtv4t2oJeCfZvgxl8TfW7dGGEo9JbUtvdD0HZji1gdgYCXRnKVLIX5hVFDnzp7LxchFvO%2BlmzvbwnkCTFgD9WRpqC7ZCfN%2BwH1rDHfGI2spU&X-Amz-Signature=f828d9d9e6f7855b20c8632ebc7d6ce2cdce9f20cb1ca4cb9f82e838c6561424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

