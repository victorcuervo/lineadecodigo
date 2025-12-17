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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVYYGVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHKPjGqfUjVVVIwy%2BjvyICL%2BA46LUaCVjUeyQioN4MbwIhAIfh0Z3tj0ACM%2FGaPP9ozUepcveRr2x4c0JGOpR0Z1FAKv8DCH0QABoMNjM3NDIzMTgzODA1IgyPkDun5TGdzY%2BPQrcq3AMU%2BpyCZCey1ihy91Cig0AAie%2F1yrc8%2ByJmD1RE3Oe9N8S7Xs5C1Ky%2Bl2v%2F3IJ7PSi03SFoOqdz8pVAwMFulanh190pfhfdhnb8Gz3VcRjc7%2FAoDoMXS6GYwKUp50p4YOv20s%2BLweJFNoiClRUYZ%2BfEzMFGh2eHv2%2FiNOmA4GJnyq%2BdXKzPxyqBH6StjyAokerzfGnDgU8zJV4%2FWKza07UzF1h241aZIn76K6tsksQ0UWxvv9y8bER%2F4S2thsJrWpEKlzSHuIi%2FmfoVD9Ly7sfkrrKRmhOesApqMrEB%2BuhrYsshS3K4oR0zcbJcffHFyVyM4XvLHam0EHiixMMgto%2FuY9%2BjIhu5Lym28EiYBSXSP76%2Bx%2BsD1UoSEDjQeSKyen91lCr1TzQ%2FSyKCWGkvmh7fNjB4JjxKaW6T38fkrtqhAy1cYGQPK%2BAy0xQ53OmdR7m7XmnxgQQKou99dWkq9eppzgfe4M%2Ftk7pBjv%2FQiA3375%2BRXaaWsjC24uFbq5M5xMkPX11k99uwcpL2W%2B3qRpAeIS1ZbWtWqs5CfZamQ0e%2FRAUv7P8dB2tiV2%2FiJzRjIidHzDh3P6R5gvXGoBPEabAsnsQmyKLqOBVEp1nXkUNf53LCFOQ6WcsDoLCxYDD3qorKBjqkAX%2FnFLjhK6M6KiP3Ge1rZPWnWNEUdf9LOvKJVAEWLZQvr5jJWyLL2GhBUDt2LZH1DgNnP00XD4wLCzaaCZj0hJ7kC1KDIBvGz1g9eoxW87geDOFFcmjmkyPTAX19wG6FNPK29ZxzOaQin%2BjUPA40iPQcS%2FVZWDG94gpdYQEQHXPPg4GwWZRNx0Rgtis6xL3bICTw7f%2F6EbUphl20ywI1O8tPUjpb&X-Amz-Signature=3162f4245d2abec54777d41052e17a8df2880c12c9276167bc4f6f149f7a7148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNVYYGVD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHKPjGqfUjVVVIwy%2BjvyICL%2BA46LUaCVjUeyQioN4MbwIhAIfh0Z3tj0ACM%2FGaPP9ozUepcveRr2x4c0JGOpR0Z1FAKv8DCH0QABoMNjM3NDIzMTgzODA1IgyPkDun5TGdzY%2BPQrcq3AMU%2BpyCZCey1ihy91Cig0AAie%2F1yrc8%2ByJmD1RE3Oe9N8S7Xs5C1Ky%2Bl2v%2F3IJ7PSi03SFoOqdz8pVAwMFulanh190pfhfdhnb8Gz3VcRjc7%2FAoDoMXS6GYwKUp50p4YOv20s%2BLweJFNoiClRUYZ%2BfEzMFGh2eHv2%2FiNOmA4GJnyq%2BdXKzPxyqBH6StjyAokerzfGnDgU8zJV4%2FWKza07UzF1h241aZIn76K6tsksQ0UWxvv9y8bER%2F4S2thsJrWpEKlzSHuIi%2FmfoVD9Ly7sfkrrKRmhOesApqMrEB%2BuhrYsshS3K4oR0zcbJcffHFyVyM4XvLHam0EHiixMMgto%2FuY9%2BjIhu5Lym28EiYBSXSP76%2Bx%2BsD1UoSEDjQeSKyen91lCr1TzQ%2FSyKCWGkvmh7fNjB4JjxKaW6T38fkrtqhAy1cYGQPK%2BAy0xQ53OmdR7m7XmnxgQQKou99dWkq9eppzgfe4M%2Ftk7pBjv%2FQiA3375%2BRXaaWsjC24uFbq5M5xMkPX11k99uwcpL2W%2B3qRpAeIS1ZbWtWqs5CfZamQ0e%2FRAUv7P8dB2tiV2%2FiJzRjIidHzDh3P6R5gvXGoBPEabAsnsQmyKLqOBVEp1nXkUNf53LCFOQ6WcsDoLCxYDD3qorKBjqkAX%2FnFLjhK6M6KiP3Ge1rZPWnWNEUdf9LOvKJVAEWLZQvr5jJWyLL2GhBUDt2LZH1DgNnP00XD4wLCzaaCZj0hJ7kC1KDIBvGz1g9eoxW87geDOFFcmjmkyPTAX19wG6FNPK29ZxzOaQin%2BjUPA40iPQcS%2FVZWDG94gpdYQEQHXPPg4GwWZRNx0Rgtis6xL3bICTw7f%2F6EbUphl20ywI1O8tPUjpb&X-Amz-Signature=07ed70266db65784bd93502617ddf0faec2dcc2106a4f1cda01f60286af159cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

