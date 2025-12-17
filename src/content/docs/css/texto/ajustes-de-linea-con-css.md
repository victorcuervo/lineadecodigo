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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QPYN4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkv8uxSo65B5nHJdnJ9INBqVUbTqUn078L%2FRBvt36M9AiB33ZbvYBZGJAw5Y9shS2MqrbTtmO6aPI%2FvxPRxR5thLCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM1dFAc7L7re46PtPpKtwDK%2F55z0dLCn%2BPYenhNMLYy5EXotcJBT3Ir7sfdYAkTOCF%2FzkOyOqq6J3Sv1HyXq4jhx9VmJN3hXdVuhRD%2BmmkDbagpfbrhkUhyUmO4zTCyAi54u97moq9YPscgvOiQtPy4bUAFGn%2FUjZY9WNrmU9Np2cLaeFDYkNe0hV%2BlZ6KadPKOn49c1LiMIVPooX8SJ77qrriOC7YVEh6bpUxEyvHXNX9ryChT4TNzbjjIgbxzLfXrlTHXig8XjW4Xdf23lwmdVCjWOIGYsoI4DYnczWXc1xgAzz0%2B42yNgCWtNAllNh5Ry0954lOq7jCsv5KctqGX95XSA56oEJRt0xu0nFAqDd7SGZGuF%2F%2BIIrPbco%2BV%2Bze0OYPiiqZzm%2BGxFKjTF1L9gokWUAh1MeGU76qwnVa52Us1OpDOpFYv8ES4N73Kv%2Bl4JPE%2B1aIgtp2UpcY2pjKaXkq2gELCjlVbHJgcLo282LSKHTnRw%2BGiWxJhZhl9E%2FBZMk5o383u7IXqlZZweJCiogID7MexWM1lTjN4U%2Foc2cURNWXZ%2Bvm2hZfM9Nf4o3s38j%2FwAqNp19XZQ2owud7cobOgOKEL7uI8hP4WY7ggMPpRbkAffPxRD2ENiLIkKyq98jVe%2BXbBXsc0jQwzbKIygY6pgH%2BhaokbDtvtfZKAs2xmZe0Ekt3N8pQQL0EbB8OpIQHBzgLySxXEsjN5T5cNfmsTaOX6opd7bDc4tgKgmU1xBpEKyqH3FNYzqjgZiqlCosVrOxM4LYAQq4LNP79KD%2FIds3Do48xY9U9LlgVcD37BPKUnHA6Cee1EVlU4vX%2FoWFssQJro49Q4P5M8szq0hzGD6sC2T4SitGN%2F8I81yDS%2BSfneFr0qVmu&X-Amz-Signature=e65ad4711ffe87009f7d07a83c6b616445ccd43ffdd875b9588cf49ec2121f04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6QPYN4O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICkv8uxSo65B5nHJdnJ9INBqVUbTqUn078L%2FRBvt36M9AiB33ZbvYBZGJAw5Y9shS2MqrbTtmO6aPI%2FvxPRxR5thLCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM1dFAc7L7re46PtPpKtwDK%2F55z0dLCn%2BPYenhNMLYy5EXotcJBT3Ir7sfdYAkTOCF%2FzkOyOqq6J3Sv1HyXq4jhx9VmJN3hXdVuhRD%2BmmkDbagpfbrhkUhyUmO4zTCyAi54u97moq9YPscgvOiQtPy4bUAFGn%2FUjZY9WNrmU9Np2cLaeFDYkNe0hV%2BlZ6KadPKOn49c1LiMIVPooX8SJ77qrriOC7YVEh6bpUxEyvHXNX9ryChT4TNzbjjIgbxzLfXrlTHXig8XjW4Xdf23lwmdVCjWOIGYsoI4DYnczWXc1xgAzz0%2B42yNgCWtNAllNh5Ry0954lOq7jCsv5KctqGX95XSA56oEJRt0xu0nFAqDd7SGZGuF%2F%2BIIrPbco%2BV%2Bze0OYPiiqZzm%2BGxFKjTF1L9gokWUAh1MeGU76qwnVa52Us1OpDOpFYv8ES4N73Kv%2Bl4JPE%2B1aIgtp2UpcY2pjKaXkq2gELCjlVbHJgcLo282LSKHTnRw%2BGiWxJhZhl9E%2FBZMk5o383u7IXqlZZweJCiogID7MexWM1lTjN4U%2Foc2cURNWXZ%2Bvm2hZfM9Nf4o3s38j%2FwAqNp19XZQ2owud7cobOgOKEL7uI8hP4WY7ggMPpRbkAffPxRD2ENiLIkKyq98jVe%2BXbBXsc0jQwzbKIygY6pgH%2BhaokbDtvtfZKAs2xmZe0Ekt3N8pQQL0EbB8OpIQHBzgLySxXEsjN5T5cNfmsTaOX6opd7bDc4tgKgmU1xBpEKyqH3FNYzqjgZiqlCosVrOxM4LYAQq4LNP79KD%2FIds3Do48xY9U9LlgVcD37BPKUnHA6Cee1EVlU4vX%2FoWFssQJro49Q4P5M8szq0hzGD6sC2T4SitGN%2F8I81yDS%2BSfneFr0qVmu&X-Amz-Signature=7ebe9516a156d9e87e93a1710b0e0b5760760327c874d49a73df2aefe6999fee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

