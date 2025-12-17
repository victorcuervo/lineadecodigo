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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQR27JL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8i3qU4%2BHNKFLSdsq%2BD9oD2JajHgccjOOQ6myioZj0wIhAI7oBakDVWnJ%2FXCPqwTxi6p2Wf%2FIbJsL9z%2BqWMC0MjogKv8DCHgQABoMNjM3NDIzMTgzODA1IgzO%2FDXhnBBy8%2BlV1aIq3APNUDHCyX0lV766pagGnI4BdDKg7FFhGwx79XzXQ1PDm24lVLR%2BKggwSBnPhRzD2n98qr9y%2Fbu8lnoOLgjZ%2BDd1fWN3fmcIn7tjhABZVzT7mWJBKlwQgZoyOcifBQkW6mCvif16S0zi47bgZCCVXo2AiqLv8vH%2FdX02y%2BL5gos%2BjAbYos4rJhpcwnvZHC0F8CAFZuy8jDpR4x0X1nOWCTp2a%2Fyr5UeDLqIEr8TeJEbnxO4lZ841OenkjP7BjYjrQfZURxnFeAoKhYfKmfHWcr8Twr2D0fZNDboGhf5NHe%2BI4GQDQzrazWQflj%2BP2bM%2BLi05FZ4W3XyYdqFpP%2FwF40Mymhj5Lm4mp1BuiI1TVPDQ6RWtYgTZeXtyKbjv22uT3%2BW4448%2BEmTm5%2BQdGSOQfESG2zGvQ4Eso7x84JBKAEvQyXYpxkkEZKjAxSIPdJdbTE3l77%2B%2Fu6EEniZuNvIyNYwRBjiBbSn2Jusy%2Fwa6IEzqpl6w3xpDJDrEhwnafAxH3VXH3cQsv8C0ncn4LpyXMSfd2q1L%2B3YeHMotUGyrNdsG8UhwDUyI17Usz5epkamkuVdYcjh3VraiIJh5pImAyZFljmwHJJ7hynyZDFPFPd5y79mZgGO9XyEm%2BKrN7zCOnonKBjqkAWMRu7B0jQG41%2FfXU1%2BdfItubU1MErZdsEaQqRaVz6kvD4RDNVCs1T5uz%2Fx9yaW%2BBJH0vt0a%2FyaoGILKg%2B%2FqjPDKvn1HHfmsgLO2zTGibkyCMW21DLkvsrjLDB8flFwuLxdu8271a%2FQbhaNLujyi8b1dLO9fJX0jZnciqEUtr5t8z9QVhYT228fP8KdtX9yd5J9ERZ%2F8noHkPwpRU4bMhoB01Kiq&X-Amz-Signature=b01866eae04fd18d49c0e2048111d25d577a29372c64c36ca3f4a0a57ba0280d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQQR27JL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8i3qU4%2BHNKFLSdsq%2BD9oD2JajHgccjOOQ6myioZj0wIhAI7oBakDVWnJ%2FXCPqwTxi6p2Wf%2FIbJsL9z%2BqWMC0MjogKv8DCHgQABoMNjM3NDIzMTgzODA1IgzO%2FDXhnBBy8%2BlV1aIq3APNUDHCyX0lV766pagGnI4BdDKg7FFhGwx79XzXQ1PDm24lVLR%2BKggwSBnPhRzD2n98qr9y%2Fbu8lnoOLgjZ%2BDd1fWN3fmcIn7tjhABZVzT7mWJBKlwQgZoyOcifBQkW6mCvif16S0zi47bgZCCVXo2AiqLv8vH%2FdX02y%2BL5gos%2BjAbYos4rJhpcwnvZHC0F8CAFZuy8jDpR4x0X1nOWCTp2a%2Fyr5UeDLqIEr8TeJEbnxO4lZ841OenkjP7BjYjrQfZURxnFeAoKhYfKmfHWcr8Twr2D0fZNDboGhf5NHe%2BI4GQDQzrazWQflj%2BP2bM%2BLi05FZ4W3XyYdqFpP%2FwF40Mymhj5Lm4mp1BuiI1TVPDQ6RWtYgTZeXtyKbjv22uT3%2BW4448%2BEmTm5%2BQdGSOQfESG2zGvQ4Eso7x84JBKAEvQyXYpxkkEZKjAxSIPdJdbTE3l77%2B%2Fu6EEniZuNvIyNYwRBjiBbSn2Jusy%2Fwa6IEzqpl6w3xpDJDrEhwnafAxH3VXH3cQsv8C0ncn4LpyXMSfd2q1L%2B3YeHMotUGyrNdsG8UhwDUyI17Usz5epkamkuVdYcjh3VraiIJh5pImAyZFljmwHJJ7hynyZDFPFPd5y79mZgGO9XyEm%2BKrN7zCOnonKBjqkAWMRu7B0jQG41%2FfXU1%2BdfItubU1MErZdsEaQqRaVz6kvD4RDNVCs1T5uz%2Fx9yaW%2BBJH0vt0a%2FyaoGILKg%2B%2FqjPDKvn1HHfmsgLO2zTGibkyCMW21DLkvsrjLDB8flFwuLxdu8271a%2FQbhaNLujyi8b1dLO9fJX0jZnciqEUtr5t8z9QVhYT228fP8KdtX9yd5J9ERZ%2F8noHkPwpRU4bMhoB01Kiq&X-Amz-Signature=053461e39815d772e913e4aa4abd2f96c7bc7a6d0d04b1b972ce29790e4651d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

