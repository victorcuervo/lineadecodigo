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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX72NAKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAn0RxC1i03rQtTsCF2TA0VfPR1hgFrKaW8TtKbpT6%2FQIhAP9%2B9GHMbOBfu3pdQ1vYn%2FhJ1Xvug94dJVW8hg61pxBwKv8DCHcQABoMNjM3NDIzMTgzODA1Igyja2NMMhNTHYiLaKIq3AMYps1FtsPi990dds4055FlgZugBQQLtMe%2B4N77YqS%2BOKoyBn2RYZfezuHGCcNVdMaNhDsjmYCsksthUiCX0hDS3YXylPnbMz4QCWr1Ktwph80NBalgD2G9BUYnRFE3F5axx2lR6u5Re%2FZpSMVYibop24tEuZuvP%2FIF2yQC%2Bryqcdm6lGK9Y4eB1gB6p7CqNvNYbtR6vIuVg4NxAESaBNr5BbjOLbALP0ygnt8YltyxcAQwfMPuRhwcNIZHRehwMjXWtLlD%2F00V9XfC4vj%2BlQJVlWYzZiVwydEH7CsO8G4XW%2BDLlVtHiFwcW0UnCzCEF0q8YewnXnfcZwh5e4MDKZOJTOaZQGdmnG6GvUoSjWgCFKplOG9XtUrQVkUjvJ15ozz5zohQlyfPrKl%2FhP8rH9Fv3r0kMy%2F33we6%2BYt0ipMLBiF9aRYEiU99mAcpLjyhrs7SmXh2yIqUF%2FlhOAxCWdczZyfYA4rU7%2B3oh0TkoiMIZRRF9QzXumZ7X%2FAZlEeBuh4%2BxG9AQ2Euiia6xwpDXYepojcISn3HaeoFQnKatJRYI0VqcYhPR59RzUNzim800JrOKdTV9T4fLy4MENU%2FP5N0KVUdlaZgt%2Boeh4a5tLfhYFiytc7uFrwpgg0khjDwgYnKBjqkAYN8%2F2mZenOiH8t%2BbGb3umE9M6luB0uExvR47aoBCHB4o3JDkq5lewcc%2B5SFvfscLIeZsiJeYoR54BBXPkC1tdCIqmZo9XEW0%2FBwlMGYwll1qs0BjfH4yMmSW0%2FQSpPT%2BLHPvoLHQrq5%2B936ijTaLqQiJxMjtLm0081wrSy2VvhdlS7CKgSIKuKfcvnlk%2FvOnVfgTYGzOmYDyQ5IoXdlhn1a50UN&X-Amz-Signature=801099df9b80353095d086c1ffdff1fe2d57ad10d7f7f66dc5efe1bf3a908eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX72NAKJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAn0RxC1i03rQtTsCF2TA0VfPR1hgFrKaW8TtKbpT6%2FQIhAP9%2B9GHMbOBfu3pdQ1vYn%2FhJ1Xvug94dJVW8hg61pxBwKv8DCHcQABoMNjM3NDIzMTgzODA1Igyja2NMMhNTHYiLaKIq3AMYps1FtsPi990dds4055FlgZugBQQLtMe%2B4N77YqS%2BOKoyBn2RYZfezuHGCcNVdMaNhDsjmYCsksthUiCX0hDS3YXylPnbMz4QCWr1Ktwph80NBalgD2G9BUYnRFE3F5axx2lR6u5Re%2FZpSMVYibop24tEuZuvP%2FIF2yQC%2Bryqcdm6lGK9Y4eB1gB6p7CqNvNYbtR6vIuVg4NxAESaBNr5BbjOLbALP0ygnt8YltyxcAQwfMPuRhwcNIZHRehwMjXWtLlD%2F00V9XfC4vj%2BlQJVlWYzZiVwydEH7CsO8G4XW%2BDLlVtHiFwcW0UnCzCEF0q8YewnXnfcZwh5e4MDKZOJTOaZQGdmnG6GvUoSjWgCFKplOG9XtUrQVkUjvJ15ozz5zohQlyfPrKl%2FhP8rH9Fv3r0kMy%2F33we6%2BYt0ipMLBiF9aRYEiU99mAcpLjyhrs7SmXh2yIqUF%2FlhOAxCWdczZyfYA4rU7%2B3oh0TkoiMIZRRF9QzXumZ7X%2FAZlEeBuh4%2BxG9AQ2Euiia6xwpDXYepojcISn3HaeoFQnKatJRYI0VqcYhPR59RzUNzim800JrOKdTV9T4fLy4MENU%2FP5N0KVUdlaZgt%2Boeh4a5tLfhYFiytc7uFrwpgg0khjDwgYnKBjqkAYN8%2F2mZenOiH8t%2BbGb3umE9M6luB0uExvR47aoBCHB4o3JDkq5lewcc%2B5SFvfscLIeZsiJeYoR54BBXPkC1tdCIqmZo9XEW0%2FBwlMGYwll1qs0BjfH4yMmSW0%2FQSpPT%2BLHPvoLHQrq5%2B936ijTaLqQiJxMjtLm0081wrSy2VvhdlS7CKgSIKuKfcvnlk%2FvOnVfgTYGzOmYDyQ5IoXdlhn1a50UN&X-Amz-Signature=3272c06901ae102b40c073403d97ff1920e0d1d4022bb4e3356efae782b7add8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

