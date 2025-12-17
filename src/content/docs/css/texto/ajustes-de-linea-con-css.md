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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNENEM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz9Qcr1iblhotCZsxLMN71dpgOlM%2Fx2hXcfMHj%2FBnf8AIhAJOtyVLwViBJJBEprigjaUC2OxtaVNvPtAgexSgBXdAPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytD2qZ7Oak1QAWd40q3AOnyJuGb6FD6KTSE1p0eVBKnz2ltD5sFm3s543JcOf5OJWvxg1qeLcPV2Lr2SY4usA0dbd6y0ZAOQJJg%2BqPU1iDdjTEqyd3tFKqnEBxzF62qCIq4q1LYXBYf%2BKyI0Jua%2FBZMhdCsIIkkLVUHkeq%2BI0Fm2yyry7PMtHMKDw%2F35EkVQD8NGvcuTi00h0qpi4Nj0iauFbJCL8xFY5%2FP0t8bo81JKFRtXqQAx7ygBLiylKiNtsOIiARp475E8H7MOLSIZssHxvu5nHPzu6nALxXz95EPmM3v8J1gsgT8l7OGBkfcrBlg9a5KtFoHbgJPnRsn6yU3u3RM0yh89M4hxmQQbu9kraFiDIo%2FvqN7QAwTS79SzDRCn4BD1vP%2F1yw7P6UujfQYDPBTYr6cu22MoxMN5vIac%2BpDgnZEleLJK%2B%2F4q9O3veNwqzmABVclTcylz1ZG4%2BGXBxpg%2B%2B%2FG9MR8QcJdJWgsVGU0PxgnKAB3tLudQ%2BBORmY9stj%2F1mNkJT%2FYWIWt%2BkjBzVpAzzeKkTCDsjq8byWnZTQcwkprqL9Z0Kqi7ME4GeFOuz9OBKIUoSQX3N1bRObkz1D%2BEpqIrtZ3gB689DCQ87TLEC%2B9tOM1r8UWZ%2BFFt3XZT7LKeVkSnc2lDCzgIvKBjqkASqwsLyc5oJ1LppLHtIfxWB5dCpogUgw4bfO7JCqfTl8NFcUW3LoG5%2FJKV%2FaRFBvIZ%2BGFKo%2Bl%2F9BXSt3C8w1CsRkHNQ1%2Fxur4HvY%2FcblP09Z0RQetPUTntofZfOSYwvvbNaMZLhY8aGShsFVw5ZbIKAhbfD47XP6YlThQWFMh0K7Ew7n%2Ft5wXkZlpAZdH%2FC%2BYhCP2rPlrboxUQPS2MKj6dT1kZGK&X-Amz-Signature=196bfad0ef2364fcee664387065902eb2b277666a36d43e7d84066f44fd64e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RNENEM4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDz9Qcr1iblhotCZsxLMN71dpgOlM%2Fx2hXcfMHj%2FBnf8AIhAJOtyVLwViBJJBEprigjaUC2OxtaVNvPtAgexSgBXdAPKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytD2qZ7Oak1QAWd40q3AOnyJuGb6FD6KTSE1p0eVBKnz2ltD5sFm3s543JcOf5OJWvxg1qeLcPV2Lr2SY4usA0dbd6y0ZAOQJJg%2BqPU1iDdjTEqyd3tFKqnEBxzF62qCIq4q1LYXBYf%2BKyI0Jua%2FBZMhdCsIIkkLVUHkeq%2BI0Fm2yyry7PMtHMKDw%2F35EkVQD8NGvcuTi00h0qpi4Nj0iauFbJCL8xFY5%2FP0t8bo81JKFRtXqQAx7ygBLiylKiNtsOIiARp475E8H7MOLSIZssHxvu5nHPzu6nALxXz95EPmM3v8J1gsgT8l7OGBkfcrBlg9a5KtFoHbgJPnRsn6yU3u3RM0yh89M4hxmQQbu9kraFiDIo%2FvqN7QAwTS79SzDRCn4BD1vP%2F1yw7P6UujfQYDPBTYr6cu22MoxMN5vIac%2BpDgnZEleLJK%2B%2F4q9O3veNwqzmABVclTcylz1ZG4%2BGXBxpg%2B%2B%2FG9MR8QcJdJWgsVGU0PxgnKAB3tLudQ%2BBORmY9stj%2F1mNkJT%2FYWIWt%2BkjBzVpAzzeKkTCDsjq8byWnZTQcwkprqL9Z0Kqi7ME4GeFOuz9OBKIUoSQX3N1bRObkz1D%2BEpqIrtZ3gB689DCQ87TLEC%2B9tOM1r8UWZ%2BFFt3XZT7LKeVkSnc2lDCzgIvKBjqkASqwsLyc5oJ1LppLHtIfxWB5dCpogUgw4bfO7JCqfTl8NFcUW3LoG5%2FJKV%2FaRFBvIZ%2BGFKo%2Bl%2F9BXSt3C8w1CsRkHNQ1%2Fxur4HvY%2FcblP09Z0RQetPUTntofZfOSYwvvbNaMZLhY8aGShsFVw5ZbIKAhbfD47XP6YlThQWFMh0K7Ew7n%2Ft5wXkZlpAZdH%2FC%2BYhCP2rPlrboxUQPS2MKj6dT1kZGK&X-Amz-Signature=141ea92176cac60c6cae3bacad49830576542e299ab3f49edd842347e58ca319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

