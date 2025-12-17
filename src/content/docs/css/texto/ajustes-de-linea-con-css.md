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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK7N4MH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg17lhK1aayIwJ28nWZEsXTLsiXek6bPPLH11yggenCwIhALA597b0v8v8xTxSMVszk2iTawBQle0GuRIgCvXpK3wkKv8DCH8QABoMNjM3NDIzMTgzODA1IgxN1uuy%2F5MiByP3Llcq3AMoZr6Oq6a%2FrbVgvdVIknosT1nu9q7EpN6%2B6DQXfNi7l3SmEvdnxyyEpV8kKh1m1FZaPWYvhgLd1e6Lfp8oA5gI1dzMSBOsGZrDuQHPIhsTCpGi0R24xCSGD9eqLIGqi4OKp%2BonGVeLWh93TEWG7ZF0uhTW%2FqLnfA0S1t7I0OCHvr1QXvSOqalisivLqwAN5hHsW4mVzwsYUp2olVVBdKE%2B2sTtyRpLAAuLyQgKSPuJjh77BM8XCf4azoYClVuOGAqBpIeB9UU6U0sceavPwtY1dWUWpg0me6hER1TPzyg3RadN6ZymDEg1mnzOnH3r%2BsVnrHV6mUYNzKzDTIjrPTAEqqUDwQNpgjYdWP1sJL7Gbj8HS3QhkRLTAHCqUp5CihTsdGmmLj1GnvRSpbGn0CHQ8CFY6xgB%2B6SWDxR0JoOloMh8b5p%2F2UMSm80jxJNR9RBIB0jKSzCZoPLW%2BBRriw4G3fOnYVTmh%2BLcaLnnnA8%2Bf120hW1KMJBfAJd0q01LG37eev9F%2Bn5UE%2BaRoSClgLphkGVofO2xlTTeWxegmXPaSncO%2F4NbE44JR3BTK5jH6uZBMOfBuPCwUwKz%2Fs1NV7%2B%2F62%2FB5TQ7Z8ew38bE7vy%2Bb%2BfDBbfI8Wf9ZiQN%2FjDp4YrKBjqkAXrC8lY8HHqRbZ1S2qal4VRNw%2FnS1X93Ehse6u0GOT5QeNy%2Bb6z73x5rFqrkp5wBmfOyLr6bKfQbk%2FjixyW7zA0JtgIgRwJoJC4hqkn5pyK%2BgL4e%2B5deaLzLc3N9hy7QuF3s8UmnTQb68%2FPRB9yVTrlZNycpfXOIhZHmaDkTYT%2B19%2Bh9LSq5HGSmLKjYUcomghN6fA9Fmlkk7qabI%2Bf0B6rTy8vH&X-Amz-Signature=d74cddf890531aa1f47d036c3697da59c675c39b64527081071701e1b644dcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQK7N4MH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg17lhK1aayIwJ28nWZEsXTLsiXek6bPPLH11yggenCwIhALA597b0v8v8xTxSMVszk2iTawBQle0GuRIgCvXpK3wkKv8DCH8QABoMNjM3NDIzMTgzODA1IgxN1uuy%2F5MiByP3Llcq3AMoZr6Oq6a%2FrbVgvdVIknosT1nu9q7EpN6%2B6DQXfNi7l3SmEvdnxyyEpV8kKh1m1FZaPWYvhgLd1e6Lfp8oA5gI1dzMSBOsGZrDuQHPIhsTCpGi0R24xCSGD9eqLIGqi4OKp%2BonGVeLWh93TEWG7ZF0uhTW%2FqLnfA0S1t7I0OCHvr1QXvSOqalisivLqwAN5hHsW4mVzwsYUp2olVVBdKE%2B2sTtyRpLAAuLyQgKSPuJjh77BM8XCf4azoYClVuOGAqBpIeB9UU6U0sceavPwtY1dWUWpg0me6hER1TPzyg3RadN6ZymDEg1mnzOnH3r%2BsVnrHV6mUYNzKzDTIjrPTAEqqUDwQNpgjYdWP1sJL7Gbj8HS3QhkRLTAHCqUp5CihTsdGmmLj1GnvRSpbGn0CHQ8CFY6xgB%2B6SWDxR0JoOloMh8b5p%2F2UMSm80jxJNR9RBIB0jKSzCZoPLW%2BBRriw4G3fOnYVTmh%2BLcaLnnnA8%2Bf120hW1KMJBfAJd0q01LG37eev9F%2Bn5UE%2BaRoSClgLphkGVofO2xlTTeWxegmXPaSncO%2F4NbE44JR3BTK5jH6uZBMOfBuPCwUwKz%2Fs1NV7%2B%2F62%2FB5TQ7Z8ew38bE7vy%2Bb%2BfDBbfI8Wf9ZiQN%2FjDp4YrKBjqkAXrC8lY8HHqRbZ1S2qal4VRNw%2FnS1X93Ehse6u0GOT5QeNy%2Bb6z73x5rFqrkp5wBmfOyLr6bKfQbk%2FjixyW7zA0JtgIgRwJoJC4hqkn5pyK%2BgL4e%2B5deaLzLc3N9hy7QuF3s8UmnTQb68%2FPRB9yVTrlZNycpfXOIhZHmaDkTYT%2B19%2Bh9LSq5HGSmLKjYUcomghN6fA9Fmlkk7qabI%2Bf0B6rTy8vH&X-Amz-Signature=17ba817bae6f0e79e6e4c5fb23e14fce9e71836486f006ba3de82c20f1ca6e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

