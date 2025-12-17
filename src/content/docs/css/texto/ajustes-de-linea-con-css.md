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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3CU2KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DeR8A2O%2BjJYREEB3kN1RkSaOZxqV0Zc674Sk2moEWAiByyi3Hbk8NKJzS58e%2FESiAUcoGZ25Xa0GWgUTDlGRP6Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2F%2F5PY3t44bSJCSjKtwDOhxCcU26r5Dh6H%2Bz7IlNoZwujZL1sSGOaaifI8eCjMF%2BDyZCwWit6dymZRrcH4wod8FJY3vB93nf41ZBBRCurfmmjqRAcOeaPMFXNVuD%2BoFePWG5ekuV1A0Rhkqc8K1iVL5EdS3faCz7u4O5PF3J0hoQhKmztsntTd38kFsR9MCpKw8gzKlbQyO508LkMUpN1MX%2FL64PHrtcRDrZ1q8ORyPn7d%2B4iI2n9AE0xR%2Fp3Hij3TgejzBy98q7aexomBNMxAsA7E9u4egfz0qBX%2Ft2J87t6zi%2BhiFm2XDVX5LMtZzCIlYdbhK8YUKJk54t9wACw%2B7BswsfmPbcGAyTM%2FXLDnxAai%2F9iJv4pam%2Fb6lxITJuueTfB72x3BFPkc9LHPMkbq%2Fhs6ccibhgcQy9xm7BQWB0CeKkXpTjJ4GXxfggD%2B8h0UkGy8iWxbVH9%2Bi2o3csVU6lOUzp74Kww%2FSoUjSed64%2FjKEbQvc4BArD8ZpWdSZ1btCCHMm9DJXQeke%2B1vi2hd2roULV5JJRfr2FPkwDtgUhbxKdH0KzorGQSefJ30DjV2H%2BGUjtOxSknUE1or3%2BtLqrbINPdc9Nl7%2B4jR%2BppSEYMxTRmdV5FOkhM0kCOwOZZLBa0ftb1I4X0SIwmNKJygY6pgEj4DvKXoQiEacRtLo46Q5BsH6BzTKpN8adiRkCcbQ2c8BHdhLRzyWYxcIC%2FUF61jlIS9XOcZjTLF333oBqHJ3RG8TV1hZvephoG%2BgE8s8uggF6lPWRi5PIrys5Yp52xqnbFPkb5LlCz2xAipFZloQ3GdVIfL8cMGKnqEUNIGA65musg4M%2FhMkjz%2B6b4dFgLTo1%2BjiGVI8XbEHb%2FLFPy%2BnLVCO0%2Bx0%2B&X-Amz-Signature=04126ef85aca4a46add69b76341ac262aa228e1c5019a872a3920c0695ebf528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX3CU2KV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1DeR8A2O%2BjJYREEB3kN1RkSaOZxqV0Zc674Sk2moEWAiByyi3Hbk8NKJzS58e%2FESiAUcoGZ25Xa0GWgUTDlGRP6Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMr%2F%2F5PY3t44bSJCSjKtwDOhxCcU26r5Dh6H%2Bz7IlNoZwujZL1sSGOaaifI8eCjMF%2BDyZCwWit6dymZRrcH4wod8FJY3vB93nf41ZBBRCurfmmjqRAcOeaPMFXNVuD%2BoFePWG5ekuV1A0Rhkqc8K1iVL5EdS3faCz7u4O5PF3J0hoQhKmztsntTd38kFsR9MCpKw8gzKlbQyO508LkMUpN1MX%2FL64PHrtcRDrZ1q8ORyPn7d%2B4iI2n9AE0xR%2Fp3Hij3TgejzBy98q7aexomBNMxAsA7E9u4egfz0qBX%2Ft2J87t6zi%2BhiFm2XDVX5LMtZzCIlYdbhK8YUKJk54t9wACw%2B7BswsfmPbcGAyTM%2FXLDnxAai%2F9iJv4pam%2Fb6lxITJuueTfB72x3BFPkc9LHPMkbq%2Fhs6ccibhgcQy9xm7BQWB0CeKkXpTjJ4GXxfggD%2B8h0UkGy8iWxbVH9%2Bi2o3csVU6lOUzp74Kww%2FSoUjSed64%2FjKEbQvc4BArD8ZpWdSZ1btCCHMm9DJXQeke%2B1vi2hd2roULV5JJRfr2FPkwDtgUhbxKdH0KzorGQSefJ30DjV2H%2BGUjtOxSknUE1or3%2BtLqrbINPdc9Nl7%2B4jR%2BppSEYMxTRmdV5FOkhM0kCOwOZZLBa0ftb1I4X0SIwmNKJygY6pgEj4DvKXoQiEacRtLo46Q5BsH6BzTKpN8adiRkCcbQ2c8BHdhLRzyWYxcIC%2FUF61jlIS9XOcZjTLF333oBqHJ3RG8TV1hZvephoG%2BgE8s8uggF6lPWRi5PIrys5Yp52xqnbFPkb5LlCz2xAipFZloQ3GdVIfL8cMGKnqEUNIGA65musg4M%2FhMkjz%2B6b4dFgLTo1%2BjiGVI8XbEHb%2FLFPy%2BnLVCO0%2Bx0%2B&X-Amz-Signature=7933e6ce8aaf0ce057e1990d1c7c38ef3168b0b855ac2d8ceb6e4e141c3a90b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

