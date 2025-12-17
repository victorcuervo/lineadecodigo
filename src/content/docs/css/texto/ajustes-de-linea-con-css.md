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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKKMO4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpQ4DYCh8l6eUOwU49kdLgufAHBN5uUtac8QY4En0BQIhAIo%2FZAAIXbKj2u2yuoXSkgdYFZT8MZOLywBD8UNh1%2BDVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDIf63YopjZ7H2dCEq3AOtp30ASWnLXSGIP7rmbv5wfgTnhAMHjcypH9B3vbdvjujukVB4WjkwlwXtZcK1DCkjo4ZVzv2INvWGxpkOixaX0pacy0mOouoJd58GZKJ%2FFbQjxJUn5UZNoT%2F57fWiqrQ2DKQJtpntTkE5JE5kSlPKOT%2FCtMILZB5gbmSPj749FvZNVzfUb6jd1jo38wjnjLpeGV4%2FPwFAWj%2Bm%2B6NTdQ8R9KhZLtgQKNNiw%2BTgfbZbXX9FRoIZ4bWP%2BCttCNYRFznbI2zl79zVEaXSmvyzn9XjNU3Ucpuz61GQa1%2Bk%2BwFPBOi5QIXa%2B%2F%2Bydh%2FctCKtC3emVIosHVHQ2uwUd6fBfEH9Ewu3vuGPz5kFvXRhXe0Z%2Bmh7krKpcTL4GUNY1wuVTQcJHI3oZ6jZDhrnv99zz9oLH3IH2yni5rkCksGdoZYGL9gTamI%2FaYmD2gfp%2B2eb%2FOc85EIoJ%2BRMYWavTXHGx%2BLD%2FZpbO8rgrd67wl0IGKmXS%2B1bIoCs21ruxQ2uzYZluU1CkKBSHPwyXWFbqpXUPkDxAY0dzxQ%2F2KPyKYHzvLBe8tqvyY4V0ZQyygLM32jVqcCiBkbTzYOju7voNZsPdySJ3%2FC%2F%2FlJorHeK0%2B0WyyETvEOafRAtfDYwiZ6%2FozCFgIvKBjqkAaNXNLALYOPMkaLEmVyXXUTXNNElneTHATGMvfUE8okHxxI%2F%2F%2F%2BkcmqHbUS9fL588eVVdnA183a4B2M%2BKBMyNrIFIN%2Fw%2FCNWJoXLAaKrPxHrGGtRRetbUzis07BxNHDLYKTEOCObDtR4Cj1Yl%2FfhHPFmAA6HtKq07NjY6D8e8whnlIokh2NNrZkoW0tAhIHp9KkPajeolxY117C7Gy770t8vAUyD&X-Amz-Signature=fad23b04ad3c36449a3df6ef7e0bc5ccf58855b816a3119580cfa7c3cb1f7cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCKKMO4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTpQ4DYCh8l6eUOwU49kdLgufAHBN5uUtac8QY4En0BQIhAIo%2FZAAIXbKj2u2yuoXSkgdYFZT8MZOLywBD8UNh1%2BDVKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDIf63YopjZ7H2dCEq3AOtp30ASWnLXSGIP7rmbv5wfgTnhAMHjcypH9B3vbdvjujukVB4WjkwlwXtZcK1DCkjo4ZVzv2INvWGxpkOixaX0pacy0mOouoJd58GZKJ%2FFbQjxJUn5UZNoT%2F57fWiqrQ2DKQJtpntTkE5JE5kSlPKOT%2FCtMILZB5gbmSPj749FvZNVzfUb6jd1jo38wjnjLpeGV4%2FPwFAWj%2Bm%2B6NTdQ8R9KhZLtgQKNNiw%2BTgfbZbXX9FRoIZ4bWP%2BCttCNYRFznbI2zl79zVEaXSmvyzn9XjNU3Ucpuz61GQa1%2Bk%2BwFPBOi5QIXa%2B%2F%2Bydh%2FctCKtC3emVIosHVHQ2uwUd6fBfEH9Ewu3vuGPz5kFvXRhXe0Z%2Bmh7krKpcTL4GUNY1wuVTQcJHI3oZ6jZDhrnv99zz9oLH3IH2yni5rkCksGdoZYGL9gTamI%2FaYmD2gfp%2B2eb%2FOc85EIoJ%2BRMYWavTXHGx%2BLD%2FZpbO8rgrd67wl0IGKmXS%2B1bIoCs21ruxQ2uzYZluU1CkKBSHPwyXWFbqpXUPkDxAY0dzxQ%2F2KPyKYHzvLBe8tqvyY4V0ZQyygLM32jVqcCiBkbTzYOju7voNZsPdySJ3%2FC%2F%2FlJorHeK0%2B0WyyETvEOafRAtfDYwiZ6%2FozCFgIvKBjqkAaNXNLALYOPMkaLEmVyXXUTXNNElneTHATGMvfUE8okHxxI%2F%2F%2F%2BkcmqHbUS9fL588eVVdnA183a4B2M%2BKBMyNrIFIN%2Fw%2FCNWJoXLAaKrPxHrGGtRRetbUzis07BxNHDLYKTEOCObDtR4Cj1Yl%2FfhHPFmAA6HtKq07NjY6D8e8whnlIokh2NNrZkoW0tAhIHp9KkPajeolxY117C7Gy770t8vAUyD&X-Amz-Signature=dbe9fe1c88aa6404b1b82799b545e8a010b74a50d3c3ab7f8d279a4f494fc472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

