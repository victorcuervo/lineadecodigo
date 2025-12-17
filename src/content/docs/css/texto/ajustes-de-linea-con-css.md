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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPAX36QD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2BHSnqsrsVEHRQm279EHlGggnhAPDWrJVTkvidOKkcAIgX4fzcQ6XmW02Q6N%2F2RwYRM7d06gCXJkS3dxBSGqBa7wq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH%2FtdaX6IoRngQrGCircAwhlmIcRZgy5lRvEuSOgYwgjVuZuXCNaE6JBS24XSR%2BVvpHohQHHpUkTY1iS%2B1qtepIlgRgZeJZsPpvkNH2GgBAywifVpYlEl8jW02NyeLNxpBKkFu1TuWuzNd6pk1JYbkhvIs%2BX2D4byFWM5%2F8jFa0f0q%2Fm3Kfs49ffIQJ54qi6alguZPytvh7XxIBw3wKghqfVqzCEuRgp4InHxVqubVv%2Bu%2BPHQc1G96SVSeGErARGWbIVntAe3yBnhNkXWC0k7OwJ5d4czSs%2FF4ZUV2RcSoqX4nV2%2F194rJfiaXuWk2zERdPJc800AG%2BIaEbGaeZnFEaAdcHIL6j4zHgjrIzWY0Hgm%2FJHBPsV8bF7kRSC2%2FU0%2FY%2BRO4n7X7spHtKaaVo7eq5P5v6czyCm%2FRJa8krnldjOgsf4aMnCkFPwlRDJByv91H4UQsjfKts9fNGuJ21mx3Of1ob5%2F2lRMf2aTt%2Fbg%2BCS7lzMiN8Jh2Bg3OC7z8DX2CsKpTnsZtJiQoFB4hvef9lnIMbTfDC7MXwP%2FpUEYGh689JuGGiTMDh3Iqi5tQwK6yer%2F3e3A8u4qIkGt2UBzthI%2Bsn%2FEc12Lu6a9vF4wJ9PhYWqflSSf36bPFj6msyvcHiDFspRcJ7%2FiybKMJnRicoGOqUBeuytgeSX%2Fmd2BoEWvP3KxU6BuOryGQdpsZ%2BOATOgd1MeuOh1T3O22%2FNb4YPwLqfnHce701n3aa3k3uzV8TrYshHeM3a%2FzbDWtmnkL44HZ1AQC5nY2dmphc1vzlUUa4dGAlKIzd1av1KBBSGOePDnKpDBvmwJT1x3JYmR0lXyn3eyEtf%2F1QYz2tBU%2FCqYNva1CUAcjV5gyu9SwB9iHvBwclKSyB2b&X-Amz-Signature=8701df5f14984bf0d0fa55196e3dc6a4255f9fb4e48fb9c34bef6fafc4faf0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPAX36QD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2BHSnqsrsVEHRQm279EHlGggnhAPDWrJVTkvidOKkcAIgX4fzcQ6XmW02Q6N%2F2RwYRM7d06gCXJkS3dxBSGqBa7wq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDH%2FtdaX6IoRngQrGCircAwhlmIcRZgy5lRvEuSOgYwgjVuZuXCNaE6JBS24XSR%2BVvpHohQHHpUkTY1iS%2B1qtepIlgRgZeJZsPpvkNH2GgBAywifVpYlEl8jW02NyeLNxpBKkFu1TuWuzNd6pk1JYbkhvIs%2BX2D4byFWM5%2F8jFa0f0q%2Fm3Kfs49ffIQJ54qi6alguZPytvh7XxIBw3wKghqfVqzCEuRgp4InHxVqubVv%2Bu%2BPHQc1G96SVSeGErARGWbIVntAe3yBnhNkXWC0k7OwJ5d4czSs%2FF4ZUV2RcSoqX4nV2%2F194rJfiaXuWk2zERdPJc800AG%2BIaEbGaeZnFEaAdcHIL6j4zHgjrIzWY0Hgm%2FJHBPsV8bF7kRSC2%2FU0%2FY%2BRO4n7X7spHtKaaVo7eq5P5v6czyCm%2FRJa8krnldjOgsf4aMnCkFPwlRDJByv91H4UQsjfKts9fNGuJ21mx3Of1ob5%2F2lRMf2aTt%2Fbg%2BCS7lzMiN8Jh2Bg3OC7z8DX2CsKpTnsZtJiQoFB4hvef9lnIMbTfDC7MXwP%2FpUEYGh689JuGGiTMDh3Iqi5tQwK6yer%2F3e3A8u4qIkGt2UBzthI%2Bsn%2FEc12Lu6a9vF4wJ9PhYWqflSSf36bPFj6msyvcHiDFspRcJ7%2FiybKMJnRicoGOqUBeuytgeSX%2Fmd2BoEWvP3KxU6BuOryGQdpsZ%2BOATOgd1MeuOh1T3O22%2FNb4YPwLqfnHce701n3aa3k3uzV8TrYshHeM3a%2FzbDWtmnkL44HZ1AQC5nY2dmphc1vzlUUa4dGAlKIzd1av1KBBSGOePDnKpDBvmwJT1x3JYmR0lXyn3eyEtf%2F1QYz2tBU%2FCqYNva1CUAcjV5gyu9SwB9iHvBwclKSyB2b&X-Amz-Signature=4af43919113478fa86f523fec831b00f3ecf3893603b0c42e6b5c1eddbcce152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

