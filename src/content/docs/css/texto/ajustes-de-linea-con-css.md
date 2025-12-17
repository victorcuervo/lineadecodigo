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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N44HEKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHIGsIhPmGOTIiIfR0jOLjXcGCMpaKZ6qfEka5xudaQQIhAMNZKVPW8MKejQkGKhrs91yG7PqTwKSZY%2BnlnrqGQTcLKv8DCHwQABoMNjM3NDIzMTgzODA1Igw1Bob9%2Fr8QiRCRoCEq3AObACzV5KG2otjUvGBnJe%2FH4TYHK2G2Mlyi5RztZsBb1fJAw3knDF2%2Bdk431pYwfN%2BIVNoVNolOQtSlrAcvONcvkLsSN8iePtLcN6rUF8Qcz1oy7aMnr4l0RO%2FOewC3YdbtHXI74nGEaYxNt7zjckTGVhEcHy1LcGkH4lJ%2FgsEAVvXom9cZs1uNDzPgGchCE0PkofjVsnK0%2BIMZ6qC7ZgUmJbKYx7lRlGN1OThEkB%2BsBWv2LKIWP2uCfufrY%2FTQYMl2YZxF%2FZJ0FSFo44qmH3LS6zoUxkSfHlU88vZJK2KN%2Bf%2BWjMY0Clb1C4x1HMzSZS%2B0NP2%2FMj21ULujQjak6GJGPgztvdfJxXuu73%2Bff6tt5F8zFeLVcL7ZXMhaBxyIhJZAAHAWD0zDd01GF49lkHgBmgx0hpCEm2FiSZ27lUQknxCRHLQlZRhJR%2BzcWggHfaKRhLxLSlg6r2Xl0PyGQ1VJn%2F4rGodc%2FfbkUq38KqROILDzvMe1rB1IDlyyAEFi9ZT4lhtSNKRiusgEZqhfCrKt4%2B%2FW7H2aR%2B7c2AuWT%2FYIFfHnAdI2dcTQwII5c1QyuP9V8aP1A4YkiTx1CZRs%2B4%2FV2SPnMaRjHV6fxnCthtfe54BS1fbERcesSHUH8zD%2FjorKBjqkATjF3D%2FaAtpxDnshLB%2BDOrZf5LBTzmxQbaiFtBpyGjXTebDNIvoIfZ5GCoA69kEqeKTE1WXHYXOpb40bxSa0ZOyUrSJ7KZwOLMiqtxoAzNSug277ZuvH8pAycFYKBjBtSydhnIDet4q39YC4kMIn1j5HaFzERMiitCfO4nE1p8HrCoE3t0SyXN93zmy3AIzpmvtCJEA7MNtkfNyizhM3HmdTTPmb&X-Amz-Signature=72951ce0061393bcf8c2377cf4c5f5a1735dc447af734bf2504e339241886872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N44HEKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHIGsIhPmGOTIiIfR0jOLjXcGCMpaKZ6qfEka5xudaQQIhAMNZKVPW8MKejQkGKhrs91yG7PqTwKSZY%2BnlnrqGQTcLKv8DCHwQABoMNjM3NDIzMTgzODA1Igw1Bob9%2Fr8QiRCRoCEq3AObACzV5KG2otjUvGBnJe%2FH4TYHK2G2Mlyi5RztZsBb1fJAw3knDF2%2Bdk431pYwfN%2BIVNoVNolOQtSlrAcvONcvkLsSN8iePtLcN6rUF8Qcz1oy7aMnr4l0RO%2FOewC3YdbtHXI74nGEaYxNt7zjckTGVhEcHy1LcGkH4lJ%2FgsEAVvXom9cZs1uNDzPgGchCE0PkofjVsnK0%2BIMZ6qC7ZgUmJbKYx7lRlGN1OThEkB%2BsBWv2LKIWP2uCfufrY%2FTQYMl2YZxF%2FZJ0FSFo44qmH3LS6zoUxkSfHlU88vZJK2KN%2Bf%2BWjMY0Clb1C4x1HMzSZS%2B0NP2%2FMj21ULujQjak6GJGPgztvdfJxXuu73%2Bff6tt5F8zFeLVcL7ZXMhaBxyIhJZAAHAWD0zDd01GF49lkHgBmgx0hpCEm2FiSZ27lUQknxCRHLQlZRhJR%2BzcWggHfaKRhLxLSlg6r2Xl0PyGQ1VJn%2F4rGodc%2FfbkUq38KqROILDzvMe1rB1IDlyyAEFi9ZT4lhtSNKRiusgEZqhfCrKt4%2B%2FW7H2aR%2B7c2AuWT%2FYIFfHnAdI2dcTQwII5c1QyuP9V8aP1A4YkiTx1CZRs%2B4%2FV2SPnMaRjHV6fxnCthtfe54BS1fbERcesSHUH8zD%2FjorKBjqkATjF3D%2FaAtpxDnshLB%2BDOrZf5LBTzmxQbaiFtBpyGjXTebDNIvoIfZ5GCoA69kEqeKTE1WXHYXOpb40bxSa0ZOyUrSJ7KZwOLMiqtxoAzNSug277ZuvH8pAycFYKBjBtSydhnIDet4q39YC4kMIn1j5HaFzERMiitCfO4nE1p8HrCoE3t0SyXN93zmy3AIzpmvtCJEA7MNtkfNyizhM3HmdTTPmb&X-Amz-Signature=9f36485ff5ed7d3550e9de6053f15952cfad23d388efb98affadf14ecfdb0b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

