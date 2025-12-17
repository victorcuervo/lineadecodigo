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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6RCUR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2B1SYa3N24S9VHqHGFzyZj2y5IhVy0jO5xoff3tGHawIhALAXNw7PrEpEmEpg2DmSRUNKe8CRANIExol9cioUVW8bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRz9fNNiQEazCs2UQq3AMvWox14HocV5rLZKl96fRSQj7MmY5UZ0btstFX%2BS%2BNbZ7YnFPgMlUi2lA%2FbfGJvjz9QJhMJ72vwv2LuDs%2BJR8Mco5orWJ98qNRd2wKGkzVMJ%2Fxg6%2BUQcJ%2F3rWv6AMUVXbCSYYekEYAGIzDyrcYF1oPXKS7NXjEUq6GgPK8QmLrLYVn3TDXghthniJEr8vVMVDvPqiK0jC2wb7B1kjYb8kVwCGn69bwWRnyOcYSAdXyZOa00DwEg7htGlhacmCUut%2Bam%2BlA4VnwGTQkwjK6KtuKMJ6TG6qFV0y0myJvnWxpUZLoIYjqNp0RfVtW2%2Fh0P2Reti339jFRwS4ritRSkKo53UgJkcY%2BbI9nmqWw7oJmE95RePsK%2B%2Foo%2BbxSdcFCZyXpbEDBkBrCDFCimzvJ4ifTx%2Fuf1CWotsClWwGqrFMLfqcH9N5zJFWMFdPzhTqJc4iA77qzeu7q9NbGOx5N3gflohPu3jaFyq2X6HgPTIdBKB4uqJoULkltmeIHe1P76NQw%2FCm0SJ4%2FywtiVPb5HwuDKLyLW8vvWtNlieO7K3KECcMOpOeYEs5PhFAnVnsSt64jjXmF2yx73q6EOI9cMR1e5eu80K01KTlHsKueaghec21EWwjhb1JCd7IsSDDMnovKBjqkARpbBi4tF%2FtFGgxKgc9O7vzaK517Iwd2Q%2BxbR2VeOo1zTwiJ%2FHjaR9ZXtRo%2FtkWtclpWecT9O4cT5m0YIixQCBx5xPZYM9Gxc0ReYH9ZSYY0rvHbZTRrIaYOslCML5yUxWkea5wtXZmzXWG8MkKfoes%2FG8%2BkRVwn2s2BBEcCGGpAYWyH%2BBTMWCmchlR8bNtk%2FQx%2Btr9KLTGhx0TYOWtO0mFm8GLb&X-Amz-Signature=1352f69e8df5064820e44925daa0dc62107c1ffd4af1767050e555e4f385902a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N6RCUR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F%2B1SYa3N24S9VHqHGFzyZj2y5IhVy0jO5xoff3tGHawIhALAXNw7PrEpEmEpg2DmSRUNKe8CRANIExol9cioUVW8bKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRz9fNNiQEazCs2UQq3AMvWox14HocV5rLZKl96fRSQj7MmY5UZ0btstFX%2BS%2BNbZ7YnFPgMlUi2lA%2FbfGJvjz9QJhMJ72vwv2LuDs%2BJR8Mco5orWJ98qNRd2wKGkzVMJ%2Fxg6%2BUQcJ%2F3rWv6AMUVXbCSYYekEYAGIzDyrcYF1oPXKS7NXjEUq6GgPK8QmLrLYVn3TDXghthniJEr8vVMVDvPqiK0jC2wb7B1kjYb8kVwCGn69bwWRnyOcYSAdXyZOa00DwEg7htGlhacmCUut%2Bam%2BlA4VnwGTQkwjK6KtuKMJ6TG6qFV0y0myJvnWxpUZLoIYjqNp0RfVtW2%2Fh0P2Reti339jFRwS4ritRSkKo53UgJkcY%2BbI9nmqWw7oJmE95RePsK%2B%2Foo%2BbxSdcFCZyXpbEDBkBrCDFCimzvJ4ifTx%2Fuf1CWotsClWwGqrFMLfqcH9N5zJFWMFdPzhTqJc4iA77qzeu7q9NbGOx5N3gflohPu3jaFyq2X6HgPTIdBKB4uqJoULkltmeIHe1P76NQw%2FCm0SJ4%2FywtiVPb5HwuDKLyLW8vvWtNlieO7K3KECcMOpOeYEs5PhFAnVnsSt64jjXmF2yx73q6EOI9cMR1e5eu80K01KTlHsKueaghec21EWwjhb1JCd7IsSDDMnovKBjqkARpbBi4tF%2FtFGgxKgc9O7vzaK517Iwd2Q%2BxbR2VeOo1zTwiJ%2FHjaR9ZXtRo%2FtkWtclpWecT9O4cT5m0YIixQCBx5xPZYM9Gxc0ReYH9ZSYY0rvHbZTRrIaYOslCML5yUxWkea5wtXZmzXWG8MkKfoes%2FG8%2BkRVwn2s2BBEcCGGpAYWyH%2BBTMWCmchlR8bNtk%2FQx%2Btr9KLTGhx0TYOWtO0mFm8GLb&X-Amz-Signature=8ce0c33478dae73a1c5dedf621dd57571ffa6efebef236ff741be65f863ef5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

