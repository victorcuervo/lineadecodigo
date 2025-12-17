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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHB42SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu4ZFe1R1FNj2eBCHRlwq9FKYWzV%2BnR5M4UuTYPyhvRgIhAPePI6DChbrlkOSiMfMXCMe2T6qAi4DvBHgZhWDQs605Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwnJbHxI4h8zMUhi3wq3AOjO2K%2FsiHMeEtO%2BgGk%2FlmfkpzONzv%2B562Aj%2F%2BAjluqqSKHz7RThvchIlZ6Y0ms3o8Ks3W6F618Dw7P%2FsKLI0WG%2FNMMCRl%2FrgNXbxQbL9zqC8rl7a7mO%2Byb7OGTtoRt62Aw8ArxQIcvbZMYeHcfrEZs8HblGS0gFlUkgkJLDdoXyjowc9ZPuzsIGxzFgEwlsUMirpUjkfgGs%2FrTj4ZTOf8c8CiYTeC%2BfrlWbwKXyqXTxjLZGEfhzTsseQzZo1iG8AL%2B4qiCBsLnNiARMdokMCwwUskHHzOL28YcU8OtfHWU0fJTF6ZZ%2BpZrHe6SXI2x6YdZeWa%2BQHem0wEhsI9UayIaXhuXErIE0FTUbKCNOhjk8aCoPDlpMpJKLqeUg%2FJaUSDlrQG5Mr1Y1x7MphuGP8GDjp639eUhhemDt8d%2FBhzP92oa0fwXxhVhb7oA91mPKFhvguKS%2Bkj9fBUWo%2FQNwbqbJOoNRA4SFcTEUINF2Puk3%2FtcMkaQJqldBjGAzatIzfvTXnhe6xHas0l4Awjk5mjMFMwuhb%2BKqEXXVGdAPle2FCOc9xf3JHa1Lo8x3ifhZq2aOdYSPO%2Bq7S7u1h2itTHN8lFQlX%2BM%2BOjprgrPfICGdE60iMSBtMTRXxP5vzChzojKBjqkAfWYtHP4hGXt3X533BNjk5RzTwr571c3PE0LlWkUuK6sWEKTlmzuxTN31aXU4jjIf501kpkywNRGntTecIXNrV8rQIoLCcsaXoqyhupOHzj7UG9t7nqoj4dxxraMlCGK7%2FmRBTYYqnfapCiJVbYmtsuheOkxqSB2t5T%2FPgna%2F0n7xExBwhWjQUcXwSF6wOnCn6AuLlVN11smhL5Q8UvHAQm55X%2BO&X-Amz-Signature=c1cc5fb107e1db17479eee10a7c2957fd7f95b0ca08708cc58214c663321a89c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKHB42SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu4ZFe1R1FNj2eBCHRlwq9FKYWzV%2BnR5M4UuTYPyhvRgIhAPePI6DChbrlkOSiMfMXCMe2T6qAi4DvBHgZhWDQs605Kv8DCHUQABoMNjM3NDIzMTgzODA1IgwnJbHxI4h8zMUhi3wq3AOjO2K%2FsiHMeEtO%2BgGk%2FlmfkpzONzv%2B562Aj%2F%2BAjluqqSKHz7RThvchIlZ6Y0ms3o8Ks3W6F618Dw7P%2FsKLI0WG%2FNMMCRl%2FrgNXbxQbL9zqC8rl7a7mO%2Byb7OGTtoRt62Aw8ArxQIcvbZMYeHcfrEZs8HblGS0gFlUkgkJLDdoXyjowc9ZPuzsIGxzFgEwlsUMirpUjkfgGs%2FrTj4ZTOf8c8CiYTeC%2BfrlWbwKXyqXTxjLZGEfhzTsseQzZo1iG8AL%2B4qiCBsLnNiARMdokMCwwUskHHzOL28YcU8OtfHWU0fJTF6ZZ%2BpZrHe6SXI2x6YdZeWa%2BQHem0wEhsI9UayIaXhuXErIE0FTUbKCNOhjk8aCoPDlpMpJKLqeUg%2FJaUSDlrQG5Mr1Y1x7MphuGP8GDjp639eUhhemDt8d%2FBhzP92oa0fwXxhVhb7oA91mPKFhvguKS%2Bkj9fBUWo%2FQNwbqbJOoNRA4SFcTEUINF2Puk3%2FtcMkaQJqldBjGAzatIzfvTXnhe6xHas0l4Awjk5mjMFMwuhb%2BKqEXXVGdAPle2FCOc9xf3JHa1Lo8x3ifhZq2aOdYSPO%2Bq7S7u1h2itTHN8lFQlX%2BM%2BOjprgrPfICGdE60iMSBtMTRXxP5vzChzojKBjqkAfWYtHP4hGXt3X533BNjk5RzTwr571c3PE0LlWkUuK6sWEKTlmzuxTN31aXU4jjIf501kpkywNRGntTecIXNrV8rQIoLCcsaXoqyhupOHzj7UG9t7nqoj4dxxraMlCGK7%2FmRBTYYqnfapCiJVbYmtsuheOkxqSB2t5T%2FPgna%2F0n7xExBwhWjQUcXwSF6wOnCn6AuLlVN11smhL5Q8UvHAQm55X%2BO&X-Amz-Signature=8d327a1e5097ec26203a7e568a03b93a814bfaa72f4a8caed0ebe7c73a7001a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

