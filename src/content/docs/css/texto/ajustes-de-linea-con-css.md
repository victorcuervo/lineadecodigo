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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZI7CVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt8io12SbQ%2BB29sEPhsarFL3%2BymA0VQDJEEqFqxtXlEAiATACsUD67tlzV0Av33uC3f7H4ndxAuQZgq1aaY1qGzwyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM64q7N9J0440PwgZWKtwDwf0zMPQCmjoJO6pMwy97mFxSFkOoa333nN59UWh4XufQuJN7zI8qkae9qT9fBVhia%2BOadznRJSeWuoBC8%2FM%2BmaKFZijyO9jDjEfSZWbeW30fB0DvlyKYSuiig2ZvkHB5H8KJ7GM4ED9cN1aHZTqwVnEXwM5lA6EaYgZw4AB59Ei%2BHTxjVf%2But7UZnln8wnIGp%2FKwLygdCjIvC1B7HUvM0Chcbg%2FY0s7MNhb366qef2rmtc6dhnRhcwPpw%2BEwiCwRnxmGvkffw0m2u7LA%2FBZMfbgsZ%2FIUMN27TJnI6F2KT4vyllljz63bu434rvu%2F8n0Fxk%2BYRsJqt3XwIh6%2B8aajGgEjN2fhE6bozmwdv7EeQYlmSILsfn%2B%2BrSTGnM3lk6YrusOo6qUPTpQ68429uuVnLEIkzu9GlLYnwn2S4Ykqo9ZB%2F8sGFDPPGHt6oOVUDu3qhMpp1mABp1y%2BRfZW9RDiF1XIkd724BQTHb6nlrz92hoFVRRyXPgRursM68h7pmnSa3fBzcXAL%2FWiR62NKJhDG5PpKVcvWU0u5AglRsOi9%2FYqAm3q%2Fz6WxsONpHyvx8Oh%2B4es%2Bmz1zp8Fi3BzE5qdERSK8xnIiPBTAhBL9G6S5JCpQnNwi5HzcLZXyc4wjreJygY6pgEusHr4vx1n0Oqfq3CKKDlui71u74vDUNtbceaULxVKPt2kiaPneGY3Q%2BJt9AMEm3FFOtTuje2VEZYn78fIPjQBnOOCrPcEg1zzS2l65rso%2BEUymKITkr4cR7tCSH9l94TWum%2BrL9qHL7tPNbnkYlvtlLL8Vee%2B%2B2vLXyEWefv0uJbAP8IUe5T22acZQlZMIuXUhS7nxrnpsTQL5j5FTn58XKJyiXGC&X-Amz-Signature=03a29ac6b294305fc486ceebbf1191169586a3d87728cbcbab442e563bb914ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKZI7CVS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt8io12SbQ%2BB29sEPhsarFL3%2BymA0VQDJEEqFqxtXlEAiATACsUD67tlzV0Av33uC3f7H4ndxAuQZgq1aaY1qGzwyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM64q7N9J0440PwgZWKtwDwf0zMPQCmjoJO6pMwy97mFxSFkOoa333nN59UWh4XufQuJN7zI8qkae9qT9fBVhia%2BOadznRJSeWuoBC8%2FM%2BmaKFZijyO9jDjEfSZWbeW30fB0DvlyKYSuiig2ZvkHB5H8KJ7GM4ED9cN1aHZTqwVnEXwM5lA6EaYgZw4AB59Ei%2BHTxjVf%2But7UZnln8wnIGp%2FKwLygdCjIvC1B7HUvM0Chcbg%2FY0s7MNhb366qef2rmtc6dhnRhcwPpw%2BEwiCwRnxmGvkffw0m2u7LA%2FBZMfbgsZ%2FIUMN27TJnI6F2KT4vyllljz63bu434rvu%2F8n0Fxk%2BYRsJqt3XwIh6%2B8aajGgEjN2fhE6bozmwdv7EeQYlmSILsfn%2B%2BrSTGnM3lk6YrusOo6qUPTpQ68429uuVnLEIkzu9GlLYnwn2S4Ykqo9ZB%2F8sGFDPPGHt6oOVUDu3qhMpp1mABp1y%2BRfZW9RDiF1XIkd724BQTHb6nlrz92hoFVRRyXPgRursM68h7pmnSa3fBzcXAL%2FWiR62NKJhDG5PpKVcvWU0u5AglRsOi9%2FYqAm3q%2Fz6WxsONpHyvx8Oh%2B4es%2Bmz1zp8Fi3BzE5qdERSK8xnIiPBTAhBL9G6S5JCpQnNwi5HzcLZXyc4wjreJygY6pgEusHr4vx1n0Oqfq3CKKDlui71u74vDUNtbceaULxVKPt2kiaPneGY3Q%2BJt9AMEm3FFOtTuje2VEZYn78fIPjQBnOOCrPcEg1zzS2l65rso%2BEUymKITkr4cR7tCSH9l94TWum%2BrL9qHL7tPNbnkYlvtlLL8Vee%2B%2B2vLXyEWefv0uJbAP8IUe5T22acZQlZMIuXUhS7nxrnpsTQL5j5FTn58XKJyiXGC&X-Amz-Signature=9616376b7e185657069a3fbf596dcbc7edf49482e0c9d0430af03f3fb809356b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

