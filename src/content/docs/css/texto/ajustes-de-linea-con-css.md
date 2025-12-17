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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCI4UFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPdXnoo5c2mDT%2FWvK5tTY%2BAOq8kfomQrnHKUrvNp3nWgIhAIXEGz1pZr9eyCDIsIIX%2F9Gvo3uJd6Nat35TIwQV8mQrKv8DCHkQABoMNjM3NDIzMTgzODA1Igx%2F06BGj1Vr8rdrxKkq3APDzpKvkoPwnq%2Fh5BPaxlHk%2B2ZRRCVX766uoY3WBFrBkmgLJ5kKuZ6V9ONR8BaOTkdzqYagwO8WGbTGg%2B%2FphDf2p5%2Fk2WCLRJc4doC4Wc8S7RlP%2FtpGmwRPkwYMq5G2We8v%2BC28KoAyF88qn4MXf8RK0RFSQes4j2AczTXQQM8IMfSG5C8Jyi%2Bylarsilte0hE0L9ExfHsGOWCQn0CCDjv41Wa5dT9f%2B2je5e61gJ9aqbpQiJl%2F050ChFtBQqRvxNwaPyZNpIHKPMbssUXYSFAit2%2BmYfgFvLW9XO2lL10%2BsAurXMB44K74py0hEsy%2Bny8MCpTyzhj0Iv8BpWoqb836QFDTNJXbw6XfNbVT1OOSAF0FLmyjcZTPZVhv1ZK8yM5aH8ICqBA%2BR5otT0QauZA9nMETTwN4XXoUR5aAVvwA%2BCab%2FArzaFqMg4Yir%2BM6UtZm8AxhfzD6ouCUtPwSM90nxzQffTtWQSW6cLAUvVF42MXqyYZ9rReY6nemM51lq75Q2CU1hPKpmyGU6hSRSXuRWWFi3fJtd4kRJE4PNRZE4nivxMXLFhA3qsBVN%2FxXLP1hjUxj075%2Bowodeq5NDvvpMTkabLd2eZ80nLC9FAbA8bax5A0xbW8R%2Fn48DzDRt4nKBjqkAetCQNvvGwPJbHTyo%2FrdwvEfOZv45BVZAYTOubyUL9NFl5mLp%2Fnnj55jUfSSlFtPZQXUS7h6Au5Y%2FWbeyzvZbcNkdjNi9jCLfkLrVDe8YWub5PxJ00frBk1luhpbsHR%2BG39UtHOKXu5oPwNjolSoAry2wTlyDvAmpZmhHb5XTKfx3SS9swIOetf%2FnpzU0Bsw%2Fg87JfrJhGigy%2FGNYWT3QsEkun9D&X-Amz-Signature=7c019f29428b1fa75c1bc57a41cf1618cad73cfd1118dd33c2cad4541a37ba25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCI4UFO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPdXnoo5c2mDT%2FWvK5tTY%2BAOq8kfomQrnHKUrvNp3nWgIhAIXEGz1pZr9eyCDIsIIX%2F9Gvo3uJd6Nat35TIwQV8mQrKv8DCHkQABoMNjM3NDIzMTgzODA1Igx%2F06BGj1Vr8rdrxKkq3APDzpKvkoPwnq%2Fh5BPaxlHk%2B2ZRRCVX766uoY3WBFrBkmgLJ5kKuZ6V9ONR8BaOTkdzqYagwO8WGbTGg%2B%2FphDf2p5%2Fk2WCLRJc4doC4Wc8S7RlP%2FtpGmwRPkwYMq5G2We8v%2BC28KoAyF88qn4MXf8RK0RFSQes4j2AczTXQQM8IMfSG5C8Jyi%2Bylarsilte0hE0L9ExfHsGOWCQn0CCDjv41Wa5dT9f%2B2je5e61gJ9aqbpQiJl%2F050ChFtBQqRvxNwaPyZNpIHKPMbssUXYSFAit2%2BmYfgFvLW9XO2lL10%2BsAurXMB44K74py0hEsy%2Bny8MCpTyzhj0Iv8BpWoqb836QFDTNJXbw6XfNbVT1OOSAF0FLmyjcZTPZVhv1ZK8yM5aH8ICqBA%2BR5otT0QauZA9nMETTwN4XXoUR5aAVvwA%2BCab%2FArzaFqMg4Yir%2BM6UtZm8AxhfzD6ouCUtPwSM90nxzQffTtWQSW6cLAUvVF42MXqyYZ9rReY6nemM51lq75Q2CU1hPKpmyGU6hSRSXuRWWFi3fJtd4kRJE4PNRZE4nivxMXLFhA3qsBVN%2FxXLP1hjUxj075%2Bowodeq5NDvvpMTkabLd2eZ80nLC9FAbA8bax5A0xbW8R%2Fn48DzDRt4nKBjqkAetCQNvvGwPJbHTyo%2FrdwvEfOZv45BVZAYTOubyUL9NFl5mLp%2Fnnj55jUfSSlFtPZQXUS7h6Au5Y%2FWbeyzvZbcNkdjNi9jCLfkLrVDe8YWub5PxJ00frBk1luhpbsHR%2BG39UtHOKXu5oPwNjolSoAry2wTlyDvAmpZmhHb5XTKfx3SS9swIOetf%2FnpzU0Bsw%2Fg87JfrJhGigy%2FGNYWT3QsEkun9D&X-Amz-Signature=7074be733e583db1f19180d738d5d62db2a9e9b08b3065d36df23c0133ddfca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

