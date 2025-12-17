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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6GZLLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXplro%2Bue3FuMOLa8CUHJo%2Fe87wK7mb0l%2B3a2Dw8XbCAiBE%2BnkGLIbX2OrK6TZtpBI7iFw5WNKpBVkYmu2dySMumCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMd%2Ftef07VYC8wvSJuKtwDqHDnmrxNfi5KLT%2BrSxkm4mXwzmOmGw85iVXQQdInob%2FdvrwKV%2FQg4Xbbq5y4xQbIE3PZgwmSywf3AcrLhUKw4KvypCPln%2BcQ7OXgEqYOzQfdrF%2BMEQdPuCQA29QvhwqtmTsKhojjp7taeNalY3hlRkWUN%2FyQZaR0qmoEsUh%2BkeYByNSTh0ycxyZterC3cbVzld8N4xaSJ5jsg53oFi6mnIqqbWqSqZSBwO%2FiiTaUHRMd%2BTqKNQUV7VAU%2F7T7aO%2BoO11deu%2Bhu%2BpMo8K9gSWDHJr1fWOpHEW7saw5U3CjGEefOayRXkxp1Gk41WFxxUwTAMSe0WjfT5cs8FZNCYJ5RI5hWVI87FV7G72HASXaHZxCn29qfoRyoVzoygS8g6QBDCUOVFMZVYdED4pmzsJRdnJfXJcOfmMw0D49gSBrvYeGFL1NjnWXkBUC%2FZnNAYD7VQdrjxfSa%2FkNmji58kzk9tnvWVSUMaO3ojTptmbl9gwkzNhvevGbfvg5Vx65wxAAveUkKhHYjNABbpV2og1nTp6ZCI6xf%2B9hU5foiwbcZ73I%2FE62JtO1cgS3oOcTxktW9TuYXH0hrdvbownnuly0A%2BFQ6mDty14XGtsuOhWgC7%2FPK5m7UVPlpikHoHow%2Bc2IygY6pgHlCYfmYfygVS5T8NvxQ2aSl19zFe93kBU1yuppzpV00yPWZSvs6o2UoAfPIGHR1RnHpQ5SV4AKNlg1f0yHYHtfXqQT55rqMSwpuCAd2WwK5R%2BtZQID435PvbQlTKiLibsrOd8y0X1LCb5Pejzq%2FqIUQt7da7cShueaYbWXFQchDAnEQZU1OAGf6a9cML5AIldCJztkcJTIooYpdQo8EjSXIa1Dvn69&X-Amz-Signature=3045356145c6975a9d2fe40fddb19f3f1df1b1b00b5b20ad989467df796547a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UY6GZLLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXplro%2Bue3FuMOLa8CUHJo%2Fe87wK7mb0l%2B3a2Dw8XbCAiBE%2BnkGLIbX2OrK6TZtpBI7iFw5WNKpBVkYmu2dySMumCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMd%2Ftef07VYC8wvSJuKtwDqHDnmrxNfi5KLT%2BrSxkm4mXwzmOmGw85iVXQQdInob%2FdvrwKV%2FQg4Xbbq5y4xQbIE3PZgwmSywf3AcrLhUKw4KvypCPln%2BcQ7OXgEqYOzQfdrF%2BMEQdPuCQA29QvhwqtmTsKhojjp7taeNalY3hlRkWUN%2FyQZaR0qmoEsUh%2BkeYByNSTh0ycxyZterC3cbVzld8N4xaSJ5jsg53oFi6mnIqqbWqSqZSBwO%2FiiTaUHRMd%2BTqKNQUV7VAU%2F7T7aO%2BoO11deu%2Bhu%2BpMo8K9gSWDHJr1fWOpHEW7saw5U3CjGEefOayRXkxp1Gk41WFxxUwTAMSe0WjfT5cs8FZNCYJ5RI5hWVI87FV7G72HASXaHZxCn29qfoRyoVzoygS8g6QBDCUOVFMZVYdED4pmzsJRdnJfXJcOfmMw0D49gSBrvYeGFL1NjnWXkBUC%2FZnNAYD7VQdrjxfSa%2FkNmji58kzk9tnvWVSUMaO3ojTptmbl9gwkzNhvevGbfvg5Vx65wxAAveUkKhHYjNABbpV2og1nTp6ZCI6xf%2B9hU5foiwbcZ73I%2FE62JtO1cgS3oOcTxktW9TuYXH0hrdvbownnuly0A%2BFQ6mDty14XGtsuOhWgC7%2FPK5m7UVPlpikHoHow%2Bc2IygY6pgHlCYfmYfygVS5T8NvxQ2aSl19zFe93kBU1yuppzpV00yPWZSvs6o2UoAfPIGHR1RnHpQ5SV4AKNlg1f0yHYHtfXqQT55rqMSwpuCAd2WwK5R%2BtZQID435PvbQlTKiLibsrOd8y0X1LCb5Pejzq%2FqIUQt7da7cShueaYbWXFQchDAnEQZU1OAGf6a9cML5AIldCJztkcJTIooYpdQo8EjSXIa1Dvn69&X-Amz-Signature=6ee9684e6605b4ada173d30b9456cde910e66654acdc8c838ce04c539e49e2df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

