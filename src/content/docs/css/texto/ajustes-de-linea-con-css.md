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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJFXS4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4h4Y0BbYBk1UZ0qMDIUqUNS5zMtcJy4OxK4dOcXwtCQIhAKsRTzWAH277ej6u81USSLhOIprVeRkmAvglg3zbxhrgKv8DCH4QABoMNjM3NDIzMTgzODA1Igzy%2F1ox7xlWRAb6QkIq3ANMeOq9%2BG8Zl58cAPktQ9d33zTbKpWdnrbLMiUUMswgnpKxH0htjjtB%2B7ldtl%2BJLXvlVHFFfprQeBkh04ZU0uPVh0g7aIJ1qW%2F%2FIBIszkzd6ilf89hrTnbV2Grd%2B3Kl4jDTBeSksRr82S7nGTi9p2bAZOFt5RkebaiVdpY6%2FG%2FJKXOSB6yYXDh1a4IxJK7wnb%2FAOZTJ%2FNly6W6tmm8yklJVFI%2FuOEWi4mepdq7o3K2bgj2rRgoujJHbmP3Vm3zxJGcBNVh7wYFVS7UepY9AtbstTQbmEaYJg7vNMt0dkfCwpKLF56DDaQU5GBEmPVQORZ%2BXtJtaGO0dHRt%2F7bCMsj3fCJvhZTaa06%2BiVnFiiZ3MMB6GGfC0Rd1mzaaEfe6bPP9NSnE%2BxYGGU7p2GmnckTs0SqMuuiPvsXbGKzjbFuoE1EO6xu8GmBsBsdllGySnV2TWYvXPj4Wy%2BhI0%2BigmsU6u7ThGdPAdHVPoIk%2BGLhG7%2BwcO0hfqUvMtAY7OhLp4ETs%2F37CYlkA%2Bh8IKeoZrL1mpkYWWhUZQfQNeYISYFtzBzYoYtNOBwF17a9Jaraa9UPnJm%2BOfzQi5quasT95bL9VOVDxa61P1ILpLKZKKJ%2FUSuwWUS09hPYipwfe6nzDExorKBjqkAXyZoK9RUhD8oaNzgIMcC7EboU%2F%2BmNKtm%2FBiCwCnRubKECgppOJh20yY8v1AZiZQ7urSvEFJuLoR9%2B0eIOUJ3rQDgBSv51v68LcsMc%2BN%2FzeXkmuAE70uL1qhiGJtpW4aGdZS0%2Fai7QKV%2BHKcaG14JKx0fLyJKGpX7X5X%2BC9grj4gnTcsUp%2BCBkVAE%2B7XHIkLsvclFMxK0UNI7pSZcgMiInocTRt6&X-Amz-Signature=be92e8a8687f9b5b59aa0cfc78fe3f33d68cfb214999b4b6c796d64d49ae7a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFJFXS4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4h4Y0BbYBk1UZ0qMDIUqUNS5zMtcJy4OxK4dOcXwtCQIhAKsRTzWAH277ej6u81USSLhOIprVeRkmAvglg3zbxhrgKv8DCH4QABoMNjM3NDIzMTgzODA1Igzy%2F1ox7xlWRAb6QkIq3ANMeOq9%2BG8Zl58cAPktQ9d33zTbKpWdnrbLMiUUMswgnpKxH0htjjtB%2B7ldtl%2BJLXvlVHFFfprQeBkh04ZU0uPVh0g7aIJ1qW%2F%2FIBIszkzd6ilf89hrTnbV2Grd%2B3Kl4jDTBeSksRr82S7nGTi9p2bAZOFt5RkebaiVdpY6%2FG%2FJKXOSB6yYXDh1a4IxJK7wnb%2FAOZTJ%2FNly6W6tmm8yklJVFI%2FuOEWi4mepdq7o3K2bgj2rRgoujJHbmP3Vm3zxJGcBNVh7wYFVS7UepY9AtbstTQbmEaYJg7vNMt0dkfCwpKLF56DDaQU5GBEmPVQORZ%2BXtJtaGO0dHRt%2F7bCMsj3fCJvhZTaa06%2BiVnFiiZ3MMB6GGfC0Rd1mzaaEfe6bPP9NSnE%2BxYGGU7p2GmnckTs0SqMuuiPvsXbGKzjbFuoE1EO6xu8GmBsBsdllGySnV2TWYvXPj4Wy%2BhI0%2BigmsU6u7ThGdPAdHVPoIk%2BGLhG7%2BwcO0hfqUvMtAY7OhLp4ETs%2F37CYlkA%2Bh8IKeoZrL1mpkYWWhUZQfQNeYISYFtzBzYoYtNOBwF17a9Jaraa9UPnJm%2BOfzQi5quasT95bL9VOVDxa61P1ILpLKZKKJ%2FUSuwWUS09hPYipwfe6nzDExorKBjqkAXyZoK9RUhD8oaNzgIMcC7EboU%2F%2BmNKtm%2FBiCwCnRubKECgppOJh20yY8v1AZiZQ7urSvEFJuLoR9%2B0eIOUJ3rQDgBSv51v68LcsMc%2BN%2FzeXkmuAE70uL1qhiGJtpW4aGdZS0%2Fai7QKV%2BHKcaG14JKx0fLyJKGpX7X5X%2BC9grj4gnTcsUp%2BCBkVAE%2B7XHIkLsvclFMxK0UNI7pSZcgMiInocTRt6&X-Amz-Signature=8e94fd79d4124b0fa4b10251f244e7a57ad7cd97842e9af488dd1d4606650965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

