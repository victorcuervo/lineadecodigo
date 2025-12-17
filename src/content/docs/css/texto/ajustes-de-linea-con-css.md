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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVC4TNYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlQ2eh85dqkfj4KU0%2BQGriTg78QAiQCEeok20GsIzFpQIhAJZRuOwZB2YUjo%2Bd0YTmbCC8RVzP2Pumti3CiJoXzChnKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKKV7hRT3Ly%2FM7fssq3APZvxnG2XligmHtjlbrikE9tsKyzqE5ytjYsUOAVne06slmzVsJY2EWuFkJaJPunSZ1sA6pWhxs2rKh7dBYAeCZrX5hQGlGP0TEcse2kOET%2BhXESVIDqO8DlIActv669WvfxgWZeEBM1rJyaSuBHNUuUAm4QqVDo40Qtmg3Tby%2Fa7RCRCNTPtoX2Yqjk5m9GPcXMv98GH43A%2FxA1%2Flk1eXR8LEYRutiwEEC8%2F6%2B6KBPC5qcvJndeNvtESxIlp8TShT%2BlpXrx07O%2Bk9AulUlOHUa4K4sBz70IlDqaswc2VYZr7N4uWJPapGbJAbJQbHT2ptdWI8wUx%2BrH70IgKF7BS89jVLsgttsYmqWM%2BcbLeLHhMh8UWy3bjxLYo7UI8ogml5IWh3oNseIErcAIeXlXDCC1dHV%2F6ZIt%2FZG9z8PD3%2FUQGxnIhn75kXyKqcWzet3QrwsC%2FcFiIUsAgKR7UaPCKy2Fa%2Fe4ql7EFuTP1z4WhR%2FYnj48nuJeXlE7y5viG73t7Ab7IoIDdWLR34%2FMo5e1%2FNOB5Z2%2FaO0VM0kF2CtmA%2BLgND%2BPIIwrJxVcF0U3L4YgfkjC3WAyiCSmX8bZewG8Yo1Rlmu3bZCkDGL%2BycrOngOU423x4ojShAuO2hELTDQi4zKBjqkAZ0mZVLAIyNJgVyy8hsWk2GO4MPJ6%2FcsLnVj39BC08oSpbeulH95VzpZMpI7WQBO3ioUGbQRBY5cmhGu3j1jXSqTp8mDa%2Brk%2B0%2BErkJOTRXeoyUtL4mkGjSuJTbCgwCpVSBd%2BnAT15zrlKX%2Bo3sl%2BGxzSk5ELf%2FcxLffuBkGZSev5BYInU8JQLjno1tGXyRGACMEC6IdhCZ6fMqeTMdigk7BqmtQ&X-Amz-Signature=4ce951d3c95ec0afc6aad39197428a3870b49f96ec5bb0ceb2200cdf7be6d466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVC4TNYJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlQ2eh85dqkfj4KU0%2BQGriTg78QAiQCEeok20GsIzFpQIhAJZRuOwZB2YUjo%2Bd0YTmbCC8RVzP2Pumti3CiJoXzChnKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxKKV7hRT3Ly%2FM7fssq3APZvxnG2XligmHtjlbrikE9tsKyzqE5ytjYsUOAVne06slmzVsJY2EWuFkJaJPunSZ1sA6pWhxs2rKh7dBYAeCZrX5hQGlGP0TEcse2kOET%2BhXESVIDqO8DlIActv669WvfxgWZeEBM1rJyaSuBHNUuUAm4QqVDo40Qtmg3Tby%2Fa7RCRCNTPtoX2Yqjk5m9GPcXMv98GH43A%2FxA1%2Flk1eXR8LEYRutiwEEC8%2F6%2B6KBPC5qcvJndeNvtESxIlp8TShT%2BlpXrx07O%2Bk9AulUlOHUa4K4sBz70IlDqaswc2VYZr7N4uWJPapGbJAbJQbHT2ptdWI8wUx%2BrH70IgKF7BS89jVLsgttsYmqWM%2BcbLeLHhMh8UWy3bjxLYo7UI8ogml5IWh3oNseIErcAIeXlXDCC1dHV%2F6ZIt%2FZG9z8PD3%2FUQGxnIhn75kXyKqcWzet3QrwsC%2FcFiIUsAgKR7UaPCKy2Fa%2Fe4ql7EFuTP1z4WhR%2FYnj48nuJeXlE7y5viG73t7Ab7IoIDdWLR34%2FMo5e1%2FNOB5Z2%2FaO0VM0kF2CtmA%2BLgND%2BPIIwrJxVcF0U3L4YgfkjC3WAyiCSmX8bZewG8Yo1Rlmu3bZCkDGL%2BycrOngOU423x4ojShAuO2hELTDQi4zKBjqkAZ0mZVLAIyNJgVyy8hsWk2GO4MPJ6%2FcsLnVj39BC08oSpbeulH95VzpZMpI7WQBO3ioUGbQRBY5cmhGu3j1jXSqTp8mDa%2Brk%2B0%2BErkJOTRXeoyUtL4mkGjSuJTbCgwCpVSBd%2BnAT15zrlKX%2Bo3sl%2BGxzSk5ELf%2FcxLffuBkGZSev5BYInU8JQLjno1tGXyRGACMEC6IdhCZ6fMqeTMdigk7BqmtQ&X-Amz-Signature=c9ad5b41f7739ee0aef44ad71ec83edcccb67947c5294f833109bfcfb290592b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

