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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23Z5SWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnlVYW5uxe97kXukv0G1e7iwYTAXEl4wLXUA2VQMgnBAIhAJHPZYaoT0DBrJqh0%2B0ebbQve%2B6AdMU7%2BJMRBl1ObmocKv8DCHEQABoMNjM3NDIzMTgzODA1IgyeOoRJkLj8yEK7Eg8q3AMiQucmf6w6BLlWTfbIeE0VWyp5Ttb%2Bg9ooDUs37NISxen95CbW1l319QQWQlKhAEQ1BZXTBJXpXSd3coIE3hH%2BMVk%2Ft8XlFfIjzos6c17Hy1NNRWfKQxiLAnljygefdDfwjzXwUYosPMBe1J%2BmgrHKtNFnsYyov%2FLQ%2BAObJoA75ak%2FuIHlwppwUSlyGbWw2%2BisTXakZBksLtocsqOpwNopsF6k%2Fg%2FQ48uOpVE8KhNzhBpIeTKzCiISAZ4%2BJvpgeHftGsMGyv3L%2FzcLjwGPOr0Ntyny4GddcGcMa5otCA3E6dmlcqXyi8guX42kjbHmQNSGVPewu2xKqqCcbpKB2j%2B9WI1a%2F3Z%2BNpK3AEVnc%2FQlDZLws8pKliOgcwCByh7wMdbUWWJ7ZXUmF5LnhsZikWTfC%2B0qhNiO8HJ6rPJqfxpgRbsqdovieCYF2r8qHQAD13dUALPbp%2B6Aqyn92KPwdKmhoOytH8Qmo5U58ryq1700HL5pWjQhhVe0CK8c1FINpVzFDvzFGI%2F0AGzQOgWiZnuibZVFeTzQQl6tBc0RLgDbP3fNb2gxQcLQXAoKjGIbqlRyTxIpDrOMPNz4zRu6EZhWUDXBxQgP9EtfcDcZfcSeQVymK0A6%2FwEQlLqITjCu34fKBjqkAUYKwuC5pu1LDSTbK02OyjKOHhsAPlgkBCBJM%2Fq46UCFt4QOmnOLicrxC6B1rM5R68Aq%2F09gWBIc4stuFl9F4Xe99WgW0LuMIqLD%2FMidUFiRcq4TpmRO5iSqZYjRCig%2F%2F5NWbQCgXnm5SuHSS8UWIGOj9HMDal%2BiZ9Hmm70d3sKBK2%2FexP94%2FvQjiwOB6atXZH%2B36WqWBMhp5hImjnVkH904q624&X-Amz-Signature=6b766d6366ba48c6716abfca08765d2d80aec2a5bc8cfff34061e45438b22f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W23Z5SWB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnlVYW5uxe97kXukv0G1e7iwYTAXEl4wLXUA2VQMgnBAIhAJHPZYaoT0DBrJqh0%2B0ebbQve%2B6AdMU7%2BJMRBl1ObmocKv8DCHEQABoMNjM3NDIzMTgzODA1IgyeOoRJkLj8yEK7Eg8q3AMiQucmf6w6BLlWTfbIeE0VWyp5Ttb%2Bg9ooDUs37NISxen95CbW1l319QQWQlKhAEQ1BZXTBJXpXSd3coIE3hH%2BMVk%2Ft8XlFfIjzos6c17Hy1NNRWfKQxiLAnljygefdDfwjzXwUYosPMBe1J%2BmgrHKtNFnsYyov%2FLQ%2BAObJoA75ak%2FuIHlwppwUSlyGbWw2%2BisTXakZBksLtocsqOpwNopsF6k%2Fg%2FQ48uOpVE8KhNzhBpIeTKzCiISAZ4%2BJvpgeHftGsMGyv3L%2FzcLjwGPOr0Ntyny4GddcGcMa5otCA3E6dmlcqXyi8guX42kjbHmQNSGVPewu2xKqqCcbpKB2j%2B9WI1a%2F3Z%2BNpK3AEVnc%2FQlDZLws8pKliOgcwCByh7wMdbUWWJ7ZXUmF5LnhsZikWTfC%2B0qhNiO8HJ6rPJqfxpgRbsqdovieCYF2r8qHQAD13dUALPbp%2B6Aqyn92KPwdKmhoOytH8Qmo5U58ryq1700HL5pWjQhhVe0CK8c1FINpVzFDvzFGI%2F0AGzQOgWiZnuibZVFeTzQQl6tBc0RLgDbP3fNb2gxQcLQXAoKjGIbqlRyTxIpDrOMPNz4zRu6EZhWUDXBxQgP9EtfcDcZfcSeQVymK0A6%2FwEQlLqITjCu34fKBjqkAUYKwuC5pu1LDSTbK02OyjKOHhsAPlgkBCBJM%2Fq46UCFt4QOmnOLicrxC6B1rM5R68Aq%2F09gWBIc4stuFl9F4Xe99WgW0LuMIqLD%2FMidUFiRcq4TpmRO5iSqZYjRCig%2F%2F5NWbQCgXnm5SuHSS8UWIGOj9HMDal%2BiZ9Hmm70d3sKBK2%2FexP94%2FvQjiwOB6atXZH%2B36WqWBMhp5hImjnVkH904q624&X-Amz-Signature=3d4ab5811ba0a4c7003f3cf1c8c09e423fee307df3999222de9544e2c308d2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

