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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSUEBZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ6rguvUYWxoul%2FC5KwqAf5rMYmarqfZJNBV%2FtDDJFgAiApsMsrzsgElHoWuMES41vElcfwKcUKN1yZiJH86gP73Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5CfmCcp2MiuUb7XqKtwD0Grok9uAMkv%2BfbHhH%2BDjdPHF9pGlHXvZ2RARKG%2FL4f7cm%2F7MLEWJXRHY7KMDYPjvJuYLytamCk57Pv%2FWcwLt1aUB05yvz5R4KgY77OQ2EQmK54DczZPy%2FVR0PYy%2FRWmI5MUzN22E%2BvEUXyq%2BAVU2QHmmvbk%2B45fnuy%2Fw5wywZW%2Bx%2FJkZKyrYMGHJv9uUW9VrNKcgDa7s0FTp0xf3KxH7BByvXDoXItRwm7cl9W6rjzjGPAkCTxI7zV5lmld8NsuVfZQN5M1gOVDZ%2BHbGUiOtemCSSQzPs4VyskgKrANaoo6DLxgTJ%2BNpUZh96IyNj8DYxTvt%2BBWu8UJFXkTuEBYOFoyqQz3%2FQOF75%2FQ9SubUDXxI87ZZU6%2FmY75kHHV5cu0NJ1JyyMkWtFX36MjwasJo%2FxG0%2FGcIiThOAN5eUOtmsc8%2F0OxoSI%2BDkLOnlpVPxF%2FCnUjsGtbZv3kfmvkGv3Z%2BYwIw8hB0Iy3vgR9QOwebHsHp8%2BuWlfCArOcyjkUOHNrQ4%2BkBLiCw2nW7qWRvxezkLKOlxPHy3eKNc9D%2Bv9iPMwxMjXk%2FVldaqpY3AqQt0mhgUJBPoRqAwkyIkeCn05%2F2HrrhYO7sCdcJTpG99BRHsJf%2FbpVLrZXv2NpXiTIwo7KIygY6pgG2DmmkXScVsODovqiePvFlvL7XgJRa58x3bbY2DBUwFVdc80I7meS3sbowrF1dOKD8K8UG0JW4PwTWVeaobl7nL1QbGWDmeXf4r%2FM7qQxo5lfA1JARBPHDOEzOukw3gxRT9uAgNKM8JQIlFqGZXh8vXT%2BdCgQv8fsZY3MG7TgM3ECX6QFj9Es1B48VbrcxEgNsxpF9zLgxul1KfBtYNFAMhRWZab3u&X-Amz-Signature=a8926ed4533a0822fab35c953b855883fcfabb42e53795744467054dea780308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HSUEBZT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZ6rguvUYWxoul%2FC5KwqAf5rMYmarqfZJNBV%2FtDDJFgAiApsMsrzsgElHoWuMES41vElcfwKcUKN1yZiJH86gP73Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM5CfmCcp2MiuUb7XqKtwD0Grok9uAMkv%2BfbHhH%2BDjdPHF9pGlHXvZ2RARKG%2FL4f7cm%2F7MLEWJXRHY7KMDYPjvJuYLytamCk57Pv%2FWcwLt1aUB05yvz5R4KgY77OQ2EQmK54DczZPy%2FVR0PYy%2FRWmI5MUzN22E%2BvEUXyq%2BAVU2QHmmvbk%2B45fnuy%2Fw5wywZW%2Bx%2FJkZKyrYMGHJv9uUW9VrNKcgDa7s0FTp0xf3KxH7BByvXDoXItRwm7cl9W6rjzjGPAkCTxI7zV5lmld8NsuVfZQN5M1gOVDZ%2BHbGUiOtemCSSQzPs4VyskgKrANaoo6DLxgTJ%2BNpUZh96IyNj8DYxTvt%2BBWu8UJFXkTuEBYOFoyqQz3%2FQOF75%2FQ9SubUDXxI87ZZU6%2FmY75kHHV5cu0NJ1JyyMkWtFX36MjwasJo%2FxG0%2FGcIiThOAN5eUOtmsc8%2F0OxoSI%2BDkLOnlpVPxF%2FCnUjsGtbZv3kfmvkGv3Z%2BYwIw8hB0Iy3vgR9QOwebHsHp8%2BuWlfCArOcyjkUOHNrQ4%2BkBLiCw2nW7qWRvxezkLKOlxPHy3eKNc9D%2Bv9iPMwxMjXk%2FVldaqpY3AqQt0mhgUJBPoRqAwkyIkeCn05%2F2HrrhYO7sCdcJTpG99BRHsJf%2FbpVLrZXv2NpXiTIwo7KIygY6pgG2DmmkXScVsODovqiePvFlvL7XgJRa58x3bbY2DBUwFVdc80I7meS3sbowrF1dOKD8K8UG0JW4PwTWVeaobl7nL1QbGWDmeXf4r%2FM7qQxo5lfA1JARBPHDOEzOukw3gxRT9uAgNKM8JQIlFqGZXh8vXT%2BdCgQv8fsZY3MG7TgM3ECX6QFj9Es1B48VbrcxEgNsxpF9zLgxul1KfBtYNFAMhRWZab3u&X-Amz-Signature=7e692c2ded616fe648346f322ac1d1257404fd74570e45917dd394984edcce30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

