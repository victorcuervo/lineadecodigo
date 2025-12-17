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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHZ2XCT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP7IbimOqcNIp47K5RGtGWN2ztCEXrR9NjGkh0mZ%2FE0gIhANMRswWfDhyMJzNH4jBPhhriKvrF%2BgR5%2FN5n8qenbS2MKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynb3ODOrrhTTAe2swq3ANmoW4ZnnDP7DUoRNdLzViDkCOx%2BnN1DmVuaXgG1Q5A9v4UZQL5g3yVN1N2rMM%2BZ9vvPZbypehBDRKKSBD1%2FTga4YEoGTYHU%2BQgfMiRrgl%2BP%2BFnP01PmPsZtJlRRlauGaRziTowr5U1kp5n0NxS%2BKQxP6gDUxDiDPmyxFskmc9M5XkNCzHRTwawkFf4g%2BXw3qFtTdJWda2Q9JiqQ4X3BszfEc0KU1AoasHxY%2FtUptoZu5Rq%2BXnM5gCzXoItxETjTvTWmk9w0%2FXqgniLKXO8%2Fo2lbxCyl%2BKTGsVyDwZPX1YHRNsITg5OuwKytFFCzJJw4rTDFoz1IiRHYW5qHCEdYoNJ3cqurs645bgFuCIthIbCz02OQdHqO2QL9JU1RUuZX9QorMazs8eXpyxVg4%2F%2FPTSJEctzfe9YzlZ72McvdAsVIw3Pl6bMhhNHWCP3Otdtb7FlQB81O8nhDqvZy%2FqSIlZOi7c2Gjno9eoDn1AFJXwrtetGjmtOYJJYcu74qGcm6miV0CvnQU7%2B1JHpKTngtNxs1%2FqIYATvBMVEhNj75PZX9dN%2FCRMJ9kL%2FuTD1d%2Fa1AhFPNvTVz7krAL2KF2eBwPkW9uxMB6cumNnY6ejsilnxHk7mgSLPj08PwGIuczCwn4vKBjqkAc9442DxOkvxOeLMhFHLdcJg5fMHTJ2MnfPwAJfB9wtn2zxzz2d%2BCbr6nnDbp9IaX0Xao5ARloLHVHFyC7KlZJQT8RFwtQM41l2LsUJMvWWIjKxSW1e1tijUXLC8VnPVONt8xXBLyKLk%2Bxrcr2h7kqW%2FaocruOWcYvDpfe7pYJi5OZZEnQ3nk1jwJyeQ6wFb20uQ2RStnkdAKquCJxmY66%2F0hUZz&X-Amz-Signature=356cdf9f5e905a50f385519d54940fb72611759ab664be24d9ae343d23e2ae6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLHZ2XCT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T162831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCP7IbimOqcNIp47K5RGtGWN2ztCEXrR9NjGkh0mZ%2FE0gIhANMRswWfDhyMJzNH4jBPhhriKvrF%2BgR5%2FN5n8qenbS2MKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igynb3ODOrrhTTAe2swq3ANmoW4ZnnDP7DUoRNdLzViDkCOx%2BnN1DmVuaXgG1Q5A9v4UZQL5g3yVN1N2rMM%2BZ9vvPZbypehBDRKKSBD1%2FTga4YEoGTYHU%2BQgfMiRrgl%2BP%2BFnP01PmPsZtJlRRlauGaRziTowr5U1kp5n0NxS%2BKQxP6gDUxDiDPmyxFskmc9M5XkNCzHRTwawkFf4g%2BXw3qFtTdJWda2Q9JiqQ4X3BszfEc0KU1AoasHxY%2FtUptoZu5Rq%2BXnM5gCzXoItxETjTvTWmk9w0%2FXqgniLKXO8%2Fo2lbxCyl%2BKTGsVyDwZPX1YHRNsITg5OuwKytFFCzJJw4rTDFoz1IiRHYW5qHCEdYoNJ3cqurs645bgFuCIthIbCz02OQdHqO2QL9JU1RUuZX9QorMazs8eXpyxVg4%2F%2FPTSJEctzfe9YzlZ72McvdAsVIw3Pl6bMhhNHWCP3Otdtb7FlQB81O8nhDqvZy%2FqSIlZOi7c2Gjno9eoDn1AFJXwrtetGjmtOYJJYcu74qGcm6miV0CvnQU7%2B1JHpKTngtNxs1%2FqIYATvBMVEhNj75PZX9dN%2FCRMJ9kL%2FuTD1d%2Fa1AhFPNvTVz7krAL2KF2eBwPkW9uxMB6cumNnY6ejsilnxHk7mgSLPj08PwGIuczCwn4vKBjqkAc9442DxOkvxOeLMhFHLdcJg5fMHTJ2MnfPwAJfB9wtn2zxzz2d%2BCbr6nnDbp9IaX0Xao5ARloLHVHFyC7KlZJQT8RFwtQM41l2LsUJMvWWIjKxSW1e1tijUXLC8VnPVONt8xXBLyKLk%2Bxrcr2h7kqW%2FaocruOWcYvDpfe7pYJi5OZZEnQ3nk1jwJyeQ6wFb20uQ2RStnkdAKquCJxmY66%2F0hUZz&X-Amz-Signature=e57035796ce2ea68d4432428bd74b4351ef35c9f76f17916dab301528e5d4f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

