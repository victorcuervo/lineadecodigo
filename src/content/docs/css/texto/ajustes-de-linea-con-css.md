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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A2KYWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2R5r6hq%2BZ65PofensubkYlrJgB2omZqo%2B0%2F%2F1WatQ7gIhAO%2F7TXO5B%2FTW8N3xWH7Y6xDAy0L2njbbGMDzyxEhJqbNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2emR%2BgAPbyug1Hxwq3AOg%2FnIEt5HHTXuEU9LcYdFjogsSkO9ALcUYQs77grE%2BoK8kWQaKhyFuRhMrXmF7Tk2Eqg6Us%2BupV00TCjSMPcccgAsKjHbZ2g%2BHqjcSIcG85RQ%2FF2cFN6tw%2FIBi2gW3Imeok8%2Fli1iVj7moydsE724aRqNBHP7DNan2iAzBcWEDl6bG%2BPe0W%2FMxOo2lRuTGS5CbsgyXNFpjBZUJvs2ht81ev4eoM8YxCzVmUNuFQ2ko8mKicfYgwoEiJW6w612tiDuede2y%2FEvQN0B3sce9Gd596EMCRxNdfLAzvDMBXpZfULyPcvy6VGvcANNHi%2BZYdCew0ouCjmkUsjBVD68%2B1UfEKZqzTTH9Ik68CjYNPdMNxuBITAt8621QKRKQtaY%2BC%2F6e6b0zx4aIs434bUqPaxAcokJ3Dfjjpw9CdsMyD0yV9PlK2RzmvKK0dHfdpRDEIcvjlKdD4BrjXinlAa33httdJXaxP4A4Rjd7zkravloQuRot%2Bp0wbyIOgxLtayF8Pi1IEbC6NtxTOO01EPLlt%2FSrxckgzaz0Gk8YU1FmpieCDQarD%2BQjrkJsnJmHhE7jtLSQaQcYlIuvkCBmPiciWPLnLSCos1BQyFu36bLZf%2Be2a8Qa37aMWEJXfhf2YDCyjIzKBjqkARa711ayunVz%2B7O5QR71ZaQrFNVqKJ20J1taRAy%2BZxTuwrMe4EPA4kKPR6eLFHU1Yrt%2F4v%2FwTOVD8ijkHV0fhgR1acM%2F8TDE4rKLfy1CMcgznYEZ9R6gkHAjomIBqyKOhg1rwxQBRUqGMZZg1fQpE9ZLpiUN3Ib6LgqOIYNF3ivwYgfBXyhGdfIgpI8SqfNq%2FiQ367Lf0QIsYRmKl0KBcax%2Bw6jO&X-Amz-Signature=7f2d443a575f8b885e17ab607b756ccc851c2bf3d5e6eb7c038eebcb4fc69845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2A2KYWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2R5r6hq%2BZ65PofensubkYlrJgB2omZqo%2B0%2F%2F1WatQ7gIhAO%2F7TXO5B%2FTW8N3xWH7Y6xDAy0L2njbbGMDzyxEhJqbNKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2emR%2BgAPbyug1Hxwq3AOg%2FnIEt5HHTXuEU9LcYdFjogsSkO9ALcUYQs77grE%2BoK8kWQaKhyFuRhMrXmF7Tk2Eqg6Us%2BupV00TCjSMPcccgAsKjHbZ2g%2BHqjcSIcG85RQ%2FF2cFN6tw%2FIBi2gW3Imeok8%2Fli1iVj7moydsE724aRqNBHP7DNan2iAzBcWEDl6bG%2BPe0W%2FMxOo2lRuTGS5CbsgyXNFpjBZUJvs2ht81ev4eoM8YxCzVmUNuFQ2ko8mKicfYgwoEiJW6w612tiDuede2y%2FEvQN0B3sce9Gd596EMCRxNdfLAzvDMBXpZfULyPcvy6VGvcANNHi%2BZYdCew0ouCjmkUsjBVD68%2B1UfEKZqzTTH9Ik68CjYNPdMNxuBITAt8621QKRKQtaY%2BC%2F6e6b0zx4aIs434bUqPaxAcokJ3Dfjjpw9CdsMyD0yV9PlK2RzmvKK0dHfdpRDEIcvjlKdD4BrjXinlAa33httdJXaxP4A4Rjd7zkravloQuRot%2Bp0wbyIOgxLtayF8Pi1IEbC6NtxTOO01EPLlt%2FSrxckgzaz0Gk8YU1FmpieCDQarD%2BQjrkJsnJmHhE7jtLSQaQcYlIuvkCBmPiciWPLnLSCos1BQyFu36bLZf%2Be2a8Qa37aMWEJXfhf2YDCyjIzKBjqkARa711ayunVz%2B7O5QR71ZaQrFNVqKJ20J1taRAy%2BZxTuwrMe4EPA4kKPR6eLFHU1Yrt%2F4v%2FwTOVD8ijkHV0fhgR1acM%2F8TDE4rKLfy1CMcgznYEZ9R6gkHAjomIBqyKOhg1rwxQBRUqGMZZg1fQpE9ZLpiUN3Ib6LgqOIYNF3ivwYgfBXyhGdfIgpI8SqfNq%2FiQ367Lf0QIsYRmKl0KBcax%2Bw6jO&X-Amz-Signature=27bec4a860c3dd9db9fe90dbd234a0b74b0923fbc47cc12ed76bd1cfe09e04fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

