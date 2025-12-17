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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTYS465%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BHKgATbl%2BXZD39k3IiB16jbI9MP%2BLJUpBQnRf41wwLAIhAJkDwqWhdbCYtlJ2GTkjx%2FuXC4V6EhCCS%2FioboRtKjFwKv8DCHEQABoMNjM3NDIzMTgzODA1Igw3vWDoLmhrf4hCVCIq3AN2kPAViAV7ADGTNi1OpRWSrZnspXMRezl%2BaiPPCQTHbJFH7IWq%2F2LeO7CGiJbsrWreZS3XgbFpV1R7odHNsXT2hMVC8s6sQhTsdU75KxSbjellIZz8AMKDByFCN9QpjTUzzS3EoXiXYjL%2FWd%2FPbl3kYUBr1jMbwIGGHMP7Cmrje9vlRhCp9iGJhJm%2FSy3nCrOpWg7oXGHgCiQ6Q1oxcCLvF244SLAy5ylPul5QZV65hP7M7GYZaPyvGQJIVVgi48yli7VPGAzifxqDSP%2FO3rczkY4sZ%2F3xWi9Yy1OulWtnu0say364F32nKBmnxX5UZf%2FAbqFkyg0TcOZdYH9T586fwdid%2FLyc%2BzGfC%2F8afmso%2BlJn0Vbx0HZX5z%2FcxZwdqTDbiroTtrv2f3FfkQmxSx3GhisoA6rvDLzt6GYnyLyCGfLooJ3eeovz62KQPK0f2bNeve11foEvRVAlpyOr5n8%2FcBzybaXFE4zCN62RnqnlB4x7jPSiXzO0KqlZtMUDJ%2Fo0SuR14Alh0OHQH7CBq7MmhgV%2BD2JcuCVh7dShfTRyufoYdfHovy%2FuNfuPT4hEwUXmMb%2BosnSuibjsg%2Fk%2FUcEwm0pWSW8HcZ3TW0QohSdo9WTA%2Faqnqn2h8amJQTDd3ofKBjqkAWLWPhlAZyxwFHsI9UWWyoaoLZbpUk3DQWv0KcXz%2BWVyEWBM1vnbgMYxYXH%2B5v9dFhckmCajZLOCYJOA1PGbn9lubkUxf0WlLFXV7jxOSj7lH3ZFk3TbpI1cXzzWx8alIeG6Mey44e5tDA2pVn%2BGaMvGs7pQbBZNFQjNka8APRArrQUJjM%2B2KOhM8veRd%2Fy%2B%2F2KBnXyBRLgR4H%2FPWPvgc0WpgsmT&X-Amz-Signature=84be07ed4214f33e4bbdbcf2045d5fd6d34c00780bfc2519803b1d833335332a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TTYS465%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BHKgATbl%2BXZD39k3IiB16jbI9MP%2BLJUpBQnRf41wwLAIhAJkDwqWhdbCYtlJ2GTkjx%2FuXC4V6EhCCS%2FioboRtKjFwKv8DCHEQABoMNjM3NDIzMTgzODA1Igw3vWDoLmhrf4hCVCIq3AN2kPAViAV7ADGTNi1OpRWSrZnspXMRezl%2BaiPPCQTHbJFH7IWq%2F2LeO7CGiJbsrWreZS3XgbFpV1R7odHNsXT2hMVC8s6sQhTsdU75KxSbjellIZz8AMKDByFCN9QpjTUzzS3EoXiXYjL%2FWd%2FPbl3kYUBr1jMbwIGGHMP7Cmrje9vlRhCp9iGJhJm%2FSy3nCrOpWg7oXGHgCiQ6Q1oxcCLvF244SLAy5ylPul5QZV65hP7M7GYZaPyvGQJIVVgi48yli7VPGAzifxqDSP%2FO3rczkY4sZ%2F3xWi9Yy1OulWtnu0say364F32nKBmnxX5UZf%2FAbqFkyg0TcOZdYH9T586fwdid%2FLyc%2BzGfC%2F8afmso%2BlJn0Vbx0HZX5z%2FcxZwdqTDbiroTtrv2f3FfkQmxSx3GhisoA6rvDLzt6GYnyLyCGfLooJ3eeovz62KQPK0f2bNeve11foEvRVAlpyOr5n8%2FcBzybaXFE4zCN62RnqnlB4x7jPSiXzO0KqlZtMUDJ%2Fo0SuR14Alh0OHQH7CBq7MmhgV%2BD2JcuCVh7dShfTRyufoYdfHovy%2FuNfuPT4hEwUXmMb%2BosnSuibjsg%2Fk%2FUcEwm0pWSW8HcZ3TW0QohSdo9WTA%2Faqnqn2h8amJQTDd3ofKBjqkAWLWPhlAZyxwFHsI9UWWyoaoLZbpUk3DQWv0KcXz%2BWVyEWBM1vnbgMYxYXH%2B5v9dFhckmCajZLOCYJOA1PGbn9lubkUxf0WlLFXV7jxOSj7lH3ZFk3TbpI1cXzzWx8alIeG6Mey44e5tDA2pVn%2BGaMvGs7pQbBZNFQjNka8APRArrQUJjM%2B2KOhM8veRd%2Fy%2B%2F2KBnXyBRLgR4H%2FPWPvgc0WpgsmT&X-Amz-Signature=8c0e31d85fa1cca2d45b3cda1ea3107ebdee1e4641f38d5bba2dfbef7a18bb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

