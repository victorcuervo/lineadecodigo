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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNVLXGPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqT07Q2QpjKWL8xxqyrKQwiGWysisZdzyIn0ZrLiOsiAIhAOFM821Qaixy1nCZwqb%2FMe3gCsHfqi6VTxYiAcwg5o8HKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9nKgSratwi9FB5sq3AM9OfSq2IpEcBotgWx7%2BwofUGbkzZegNvJq4gsVC5KIAFGrPAlTtwp1j%2BmEZMM8rQxQi4dRmQB4Z6LCQrmBDfwNGm%2Bfzkrhh7qeOAGdeCAHNBGVBIBL8zcYxAy6S%2FwEoznEg%2FUYRqrS8FiTXEda5ind8KVi%2Bsjx0DX7SfwA2ioazUpJQ2WyRnJ7gu4Qk%2FItWHSF6i2CISkt6f8LQw5R7jiS%2FRwLR7SzW16UmCejKHltg1tHlYxi2u3xjGQhbFxStKRFFmo4mOio1SHFataK4%2BFVfXF5B1g9wfEfstmiQCUk%2B2NnEBrxHYPY2YWrGGKhLH6hgXZcdvIi7KgONQcmnE4E9vw6e74PHV5YkYvbLCqEdO599TLRYxCbKFuWuyiA%2F0QiYuwKdwnOar%2F94ygKQ9YjkWbwnCxUmtXW9DmBhtnabjh16ZhNiB618rNojROVmwFmlZCRIvUmcWYpMzt511xZL%2B7SpnV4HmXKHejhziVHcoIA9lTMFE9fJwg%2Fq1FTpbZRHTdvqppBf7YkhRczir%2BZxTcDghhSVSe0X0XqCYzYetyB5%2FTyKq4vbsBLW4lwm4lrniGGnatOc4BF2YBe998Yvm%2BN5ByJQ%2BKu77LYApsCICzsheH%2BRd%2BbhRt8MzC1n4vKBjqkAUIXFxpOxjTT5io8c%2BxBHUgiur4uXMEwknoNrGeOeXx7NF4dILwL5oolf%2F6Yjba1u1zjfjBfRrec0wdTEDKzxuVxRK4Ml4x88lOl7Lb1EbPf66pF4r8VY54FjdxnU%2B62zNENeMvd5ruZ8lehagpA%2FQXaZM8FQgrMdHLns3Egyf21cTszN9Xojt2vZJ7mtAacg6MuTGF9mabfLnlnoa4UgSRboC2Q&X-Amz-Signature=abb909c61a36c2482904a329cbdbd14af48874da8a7d02a9ec827bc30fb5e137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNVLXGPZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqT07Q2QpjKWL8xxqyrKQwiGWysisZdzyIn0ZrLiOsiAIhAOFM821Qaixy1nCZwqb%2FMe3gCsHfqi6VTxYiAcwg5o8HKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzm9nKgSratwi9FB5sq3AM9OfSq2IpEcBotgWx7%2BwofUGbkzZegNvJq4gsVC5KIAFGrPAlTtwp1j%2BmEZMM8rQxQi4dRmQB4Z6LCQrmBDfwNGm%2Bfzkrhh7qeOAGdeCAHNBGVBIBL8zcYxAy6S%2FwEoznEg%2FUYRqrS8FiTXEda5ind8KVi%2Bsjx0DX7SfwA2ioazUpJQ2WyRnJ7gu4Qk%2FItWHSF6i2CISkt6f8LQw5R7jiS%2FRwLR7SzW16UmCejKHltg1tHlYxi2u3xjGQhbFxStKRFFmo4mOio1SHFataK4%2BFVfXF5B1g9wfEfstmiQCUk%2B2NnEBrxHYPY2YWrGGKhLH6hgXZcdvIi7KgONQcmnE4E9vw6e74PHV5YkYvbLCqEdO599TLRYxCbKFuWuyiA%2F0QiYuwKdwnOar%2F94ygKQ9YjkWbwnCxUmtXW9DmBhtnabjh16ZhNiB618rNojROVmwFmlZCRIvUmcWYpMzt511xZL%2B7SpnV4HmXKHejhziVHcoIA9lTMFE9fJwg%2Fq1FTpbZRHTdvqppBf7YkhRczir%2BZxTcDghhSVSe0X0XqCYzYetyB5%2FTyKq4vbsBLW4lwm4lrniGGnatOc4BF2YBe998Yvm%2BN5ByJQ%2BKu77LYApsCICzsheH%2BRd%2BbhRt8MzC1n4vKBjqkAUIXFxpOxjTT5io8c%2BxBHUgiur4uXMEwknoNrGeOeXx7NF4dILwL5oolf%2F6Yjba1u1zjfjBfRrec0wdTEDKzxuVxRK4Ml4x88lOl7Lb1EbPf66pF4r8VY54FjdxnU%2B62zNENeMvd5ruZ8lehagpA%2FQXaZM8FQgrMdHLns3Egyf21cTszN9Xojt2vZJ7mtAacg6MuTGF9mabfLnlnoa4UgSRboC2Q&X-Amz-Signature=047ea2f3a29982c7634d7ce317a891bdf1235a031d91e061fd48658ee3d71181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

