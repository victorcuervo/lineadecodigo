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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TE4FDQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPAvUGr%2BaSpfNjO6m2kaZ4FFpGZJ%2FP0pwTK7brr1IRrAiEAleUSQ3%2B7WPFNFV3Vr41yVA6EAwwUna7Xk%2BO3M3%2Ba%2FWYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgkh9H2W6A6ZeAjSSrcA%2FN7p0czBh0FIaualjD6RLBjw7HMCHYSjHelRshJmWZ6df4aaL5Ki5CPz4nFKDCGKn3i6mgAvnxmGhDUQ0lmp9litY8JsneDzbVEtZKynmFVz3C6ZhurSmgPJQGQ26EkA7dVrRya9cOHjSer2RD9uB%2B9H1H%2Bi3rfx1yIFluFRTcT6xnXIt9oGpFiZWNXCIBQWSZ3zoOxAclshd3K%2B4iAob88yUVtpDmq2OEYevCmJFFqzcgdDbxIxETabBCbABkttrC9UqIyJ%2Ffi0ZGJQ0SYlIlSdNNl8lTdQ4xFm2swn7gC6nyqrMwPoEcPNYD2YNiidIBlEZqJhCD%2FZ4QzhtowzkjlNpt5X5roIEal1xUl6orP1Nuym8XkXQFpwvFy7Jj4AnmHjmTvRLl727a6vFLiUFxQNRLAKXlFsrbSDByCW7aaGbTipdvKthSHni1rOZTi1O%2Fo5Ew30reGMMT7NHdoX9gakeJNlkoCjIRntRbiUZUqTyvCD3U6VOXuwfgQfsv2ljdj%2BtyrJCRZjxJxEjtbOD2QDj21vspgkqnYOU8djzjM5zcRFrRdfeOh7YsV7wD%2BDG8oYru5PsjIlzqi8cbqIy0V9wgvZacUDFWAkpcoPHaq%2FcsNsunsFJSe6KwnMKCfi8oGOqUBxtBS4FGKjgndHu6eA36l4iqVWQgBFVA56ylBOg3YftNW9OE5QIxjjzjyFrvqdsGpQ1FlNoOtpFishAiuPREU%2B42aRn8jLy8b5ixecGppgieQd9VD5JWnJNVwtIp6YAY5XH1KuMQV7yzeXHY0MmJSAxQ5hGaSQu9GzKQe15n9cbpSOgGNhcP23gEkOWeprmnyJwDDm2YhV%2B6f1RV3wb%2BzmqnXZJEc&X-Amz-Signature=16fd6fe4d092b3bb1c3097ac429b58eee0762a22c84bb7ff062badfb09753c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TE4FDQK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPAvUGr%2BaSpfNjO6m2kaZ4FFpGZJ%2FP0pwTK7brr1IRrAiEAleUSQ3%2B7WPFNFV3Vr41yVA6EAwwUna7Xk%2BO3M3%2Ba%2FWYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgkh9H2W6A6ZeAjSSrcA%2FN7p0czBh0FIaualjD6RLBjw7HMCHYSjHelRshJmWZ6df4aaL5Ki5CPz4nFKDCGKn3i6mgAvnxmGhDUQ0lmp9litY8JsneDzbVEtZKynmFVz3C6ZhurSmgPJQGQ26EkA7dVrRya9cOHjSer2RD9uB%2B9H1H%2Bi3rfx1yIFluFRTcT6xnXIt9oGpFiZWNXCIBQWSZ3zoOxAclshd3K%2B4iAob88yUVtpDmq2OEYevCmJFFqzcgdDbxIxETabBCbABkttrC9UqIyJ%2Ffi0ZGJQ0SYlIlSdNNl8lTdQ4xFm2swn7gC6nyqrMwPoEcPNYD2YNiidIBlEZqJhCD%2FZ4QzhtowzkjlNpt5X5roIEal1xUl6orP1Nuym8XkXQFpwvFy7Jj4AnmHjmTvRLl727a6vFLiUFxQNRLAKXlFsrbSDByCW7aaGbTipdvKthSHni1rOZTi1O%2Fo5Ew30reGMMT7NHdoX9gakeJNlkoCjIRntRbiUZUqTyvCD3U6VOXuwfgQfsv2ljdj%2BtyrJCRZjxJxEjtbOD2QDj21vspgkqnYOU8djzjM5zcRFrRdfeOh7YsV7wD%2BDG8oYru5PsjIlzqi8cbqIy0V9wgvZacUDFWAkpcoPHaq%2FcsNsunsFJSe6KwnMKCfi8oGOqUBxtBS4FGKjgndHu6eA36l4iqVWQgBFVA56ylBOg3YftNW9OE5QIxjjzjyFrvqdsGpQ1FlNoOtpFishAiuPREU%2B42aRn8jLy8b5ixecGppgieQd9VD5JWnJNVwtIp6YAY5XH1KuMQV7yzeXHY0MmJSAxQ5hGaSQu9GzKQe15n9cbpSOgGNhcP23gEkOWeprmnyJwDDm2YhV%2B6f1RV3wb%2BzmqnXZJEc&X-Amz-Signature=dd9f7800ee6dd54b89f462f4006656494e97a8667f688489a9d97bbefa285dd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

