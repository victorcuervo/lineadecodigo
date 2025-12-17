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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOJEIKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvu9tPwBxHqg75HXkWaWgC6HkbZxFwNyLYLZJX5IObDAIhALFsPFyXzjVyNOS8lTCViAJpXsRm4QofgF8tZheGXGlIKv8DCHIQABoMNjM3NDIzMTgzODA1IgwaozZfQlHJUUMs23Aq3AMyImMdrr7MHQMmT8vFajgPI5I7Ci%2FBPqjzXQH9RdAZgBMrjACIWXVFFgvFD6pLdQ6nKUCKwB2uWeqaMJt6jQsuvgdLpj%2BngkeAw2mChz9n2%2B3yTB%2FnqydIMQX58nPhQwLWlLbVpaFOWfJLwECcvSmohkcHGfC99jQk15ZSzQC9%2F3X0UugfykQb9RemebE08ABQh36tenI8u7nD0rQNVIyq1iy7e6%2FSLbvWo65rhqUMG8CdNhahTEJg5m69HrXm0IRu43ymdSS2YnmbmJxv3fYwYoMjyK9nkOp5aoUurL6CkC9dv075XieHoHAq7eJ0xjKvB%2BGZPFpuW02WtCDrFsBvQWPu4QMTsWkJspY%2B94qlliyPSPK8Oynivi5F3QhlBD54yicX2WE79Ek%2B%2FgDoudk8yUFkN%2B3LBsEZLgeP0EHV7GfGu2i8VN%2B7OR8ZrZWdok3Za4eZDkhuu0GYUXrja%2BFN8PRDbxXuGdB3mKiD1oPbO9fwoPwg4O%2FT3aPdbzMZZrsz%2BivXVgC8OoqICB6djrdTk6SbWvdPE%2FPao6mmhoTyWhhtUPi3igbc40bi36JTPM8ofS5xTii3VJFW3Q9IoxLpF5%2FeiXqhi%2BnneUfiK1WUxqRbo14xSakofkLV9zDC%2B4fKBjqkAbRmsalAbElz2HsowtL8iUwTHsDByNeZbKt5HG%2B%2Bf2AOXF0%2Fwus0YQP8qgG8HxHgerjIYCEHkcxhStdZ2%2Bk%2BKu8Zxes6jcMrWvsufOkAetKurUoh959nUZ0leES05%2BAzUFdsD8Lg9LtCn4BH4Iq8eiP%2BQTrhtShRwpOa20ukbVHko39DTjwwCtmILHqvB3gFB%2BnDHrWLE2zIz7GGUoJ1p3CGbDBj&X-Amz-Signature=4afa5ba27fffd69c05d979ce590f08efc29bfcb3c8e21c25aa5b9a7b61bf1f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AOJEIKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvu9tPwBxHqg75HXkWaWgC6HkbZxFwNyLYLZJX5IObDAIhALFsPFyXzjVyNOS8lTCViAJpXsRm4QofgF8tZheGXGlIKv8DCHIQABoMNjM3NDIzMTgzODA1IgwaozZfQlHJUUMs23Aq3AMyImMdrr7MHQMmT8vFajgPI5I7Ci%2FBPqjzXQH9RdAZgBMrjACIWXVFFgvFD6pLdQ6nKUCKwB2uWeqaMJt6jQsuvgdLpj%2BngkeAw2mChz9n2%2B3yTB%2FnqydIMQX58nPhQwLWlLbVpaFOWfJLwECcvSmohkcHGfC99jQk15ZSzQC9%2F3X0UugfykQb9RemebE08ABQh36tenI8u7nD0rQNVIyq1iy7e6%2FSLbvWo65rhqUMG8CdNhahTEJg5m69HrXm0IRu43ymdSS2YnmbmJxv3fYwYoMjyK9nkOp5aoUurL6CkC9dv075XieHoHAq7eJ0xjKvB%2BGZPFpuW02WtCDrFsBvQWPu4QMTsWkJspY%2B94qlliyPSPK8Oynivi5F3QhlBD54yicX2WE79Ek%2B%2FgDoudk8yUFkN%2B3LBsEZLgeP0EHV7GfGu2i8VN%2B7OR8ZrZWdok3Za4eZDkhuu0GYUXrja%2BFN8PRDbxXuGdB3mKiD1oPbO9fwoPwg4O%2FT3aPdbzMZZrsz%2BivXVgC8OoqICB6djrdTk6SbWvdPE%2FPao6mmhoTyWhhtUPi3igbc40bi36JTPM8ofS5xTii3VJFW3Q9IoxLpF5%2FeiXqhi%2BnneUfiK1WUxqRbo14xSakofkLV9zDC%2B4fKBjqkAbRmsalAbElz2HsowtL8iUwTHsDByNeZbKt5HG%2B%2Bf2AOXF0%2Fwus0YQP8qgG8HxHgerjIYCEHkcxhStdZ2%2Bk%2BKu8Zxes6jcMrWvsufOkAetKurUoh959nUZ0leES05%2BAzUFdsD8Lg9LtCn4BH4Iq8eiP%2BQTrhtShRwpOa20ukbVHko39DTjwwCtmILHqvB3gFB%2BnDHrWLE2zIz7GGUoJ1p3CGbDBj&X-Amz-Signature=e27a53639b7ef9826018cf057450f427da8f704f7db1d8e1f4fd129f6af886e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

