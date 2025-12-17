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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TV52NCZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIRPK%2BH3WPEkWKr%2FTGTNS%2BptV0OOnIoSDn5sTJdtZ3fQIhAL4BboMaRjH9REYYHsUEhSpUzTiPVIjyHtGSL5El3L8WKv8DCHcQABoMNjM3NDIzMTgzODA1Igxwufk1y1MYSfNAfNIq3AOrZlvbeAjj%2BkYVbazCVXOA6XXc7oqId0FdmmKti2j%2B%2BDSc91xIf7RrPa1A6yxLvny1gkM9BE4Vq5SZMigqbYHBuYTseRlboufDTay3lMQQHnpvrwcfk2dgjyqOVo%2B04bxqwfSqrIbCdzRed83TispawbePv5rCSrqlxOdZYPyv%2B9LVEdUiJxsuS2noNSA%2B4hwmVKmExPMvKE9Sbskhq7%2BTzLRqlRXuyX7lee%2Br5kIvLYUdEGLuSlGZYquAl4yhdVXPZC%2BKbkwc6H%2FtBdMQFZnRBA89R5j5h78CABQDbwq8n9xgYdypEkxoZ5NW5v8TFtNZKe%2FC4LNK6gJbaLjv3H1Axokmn38yIsvnkf6j11uAxhHq50qm1dVgODtuUdFWKZHv3zbmKaPKjJEpL3lz1oorkm%2B401EKUbcFs%2FmK%2B6IxXYCGTupVSMVwM5cHB%2Bwyve9wXi8yNjmVif4349Rdo%2Bj8XnYknWzmXQqTxFsyZz4caZLnZ6zpKe0WLcMW3YTYZZFybLPUR1xSV%2BhCIk%2BO1RwIVNQT%2Bg8Hc4bOHnXKvKINY95fIHc1M8h9l58AgVAzk5A2Dcn1bbG6BqlLst5VEBUabdrhiJ%2FgjirkoIoH9O%2BfAKdT4JmdJQ1rsPH02TD9gonKBjqkATagNRztZTUwvT4EkO7sKXvi%2F3BdNPHZeb%2BlRHfr2QsRAJPeCw4aYGWCL659qUUddxrST8rBaUaPUIM%2B9I1v7BqcgRA3p%2BnCVte7NJ%2B944v8%2Fo%2BwNg8IURi6gwrqOFyEBmT0AnDCc90yof9zPwmzTPzOqSznQORlCm9h%2FvVc4hBMxNEONv50Fmv9F%2FwH5711ZhwKElMcTY9pEMNmRJvs2YGAthIR&X-Amz-Signature=b2c617b78871403164bf74b3aa7855bb929432dee00cf11f7a8679d0b86c720c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TV52NCZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIRPK%2BH3WPEkWKr%2FTGTNS%2BptV0OOnIoSDn5sTJdtZ3fQIhAL4BboMaRjH9REYYHsUEhSpUzTiPVIjyHtGSL5El3L8WKv8DCHcQABoMNjM3NDIzMTgzODA1Igxwufk1y1MYSfNAfNIq3AOrZlvbeAjj%2BkYVbazCVXOA6XXc7oqId0FdmmKti2j%2B%2BDSc91xIf7RrPa1A6yxLvny1gkM9BE4Vq5SZMigqbYHBuYTseRlboufDTay3lMQQHnpvrwcfk2dgjyqOVo%2B04bxqwfSqrIbCdzRed83TispawbePv5rCSrqlxOdZYPyv%2B9LVEdUiJxsuS2noNSA%2B4hwmVKmExPMvKE9Sbskhq7%2BTzLRqlRXuyX7lee%2Br5kIvLYUdEGLuSlGZYquAl4yhdVXPZC%2BKbkwc6H%2FtBdMQFZnRBA89R5j5h78CABQDbwq8n9xgYdypEkxoZ5NW5v8TFtNZKe%2FC4LNK6gJbaLjv3H1Axokmn38yIsvnkf6j11uAxhHq50qm1dVgODtuUdFWKZHv3zbmKaPKjJEpL3lz1oorkm%2B401EKUbcFs%2FmK%2B6IxXYCGTupVSMVwM5cHB%2Bwyve9wXi8yNjmVif4349Rdo%2Bj8XnYknWzmXQqTxFsyZz4caZLnZ6zpKe0WLcMW3YTYZZFybLPUR1xSV%2BhCIk%2BO1RwIVNQT%2Bg8Hc4bOHnXKvKINY95fIHc1M8h9l58AgVAzk5A2Dcn1bbG6BqlLst5VEBUabdrhiJ%2FgjirkoIoH9O%2BfAKdT4JmdJQ1rsPH02TD9gonKBjqkATagNRztZTUwvT4EkO7sKXvi%2F3BdNPHZeb%2BlRHfr2QsRAJPeCw4aYGWCL659qUUddxrST8rBaUaPUIM%2B9I1v7BqcgRA3p%2BnCVte7NJ%2B944v8%2Fo%2BwNg8IURi6gwrqOFyEBmT0AnDCc90yof9zPwmzTPzOqSznQORlCm9h%2FvVc4hBMxNEONv50Fmv9F%2FwH5711ZhwKElMcTY9pEMNmRJvs2YGAthIR&X-Amz-Signature=773be7a8f131f6e70c9911789629246c7cc6802e6b281aa3b9d1f29ab8250b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

