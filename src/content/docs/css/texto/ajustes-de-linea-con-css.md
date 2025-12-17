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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BULTXRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQpBhjIciPOXLs4D6dduvkGJsI5H1XtXmtwSaRZG2SOAiB8SiF%2BkrZNuZU6uxfp9EqLBotVseiy%2Bl9dOIukXGslWir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9grJS8hO8E96YI0iKtwDy4sp0tuNkSq3xZ5UcBWfOfKk0PF8VXsCPYy6DQD3MWqEzClv6g5gpRKudX4goszMykpJWzkAouDzpu4wexhevhfw%2FGHiNKtG2OMNskvRHPINYVJOQ7XbJR2h7oJa5jePIhbAF5ru2TNfYifnlEH0bqFhbANmMZ9wU3XgdtTbPZyyJz8GlSoqYqEjj2OgeVUJWtDtXduECE5FxAAtfHfQHJ0RdPcSTaHJx1p8Mz0fVBpjg%2BT53dbixeB8HqIhuyNu9qaVZRH9n01x%2Fbp8Wllvn2uPAy192ZQL3uwEebgAYieCocHntEp6IoZ7cE5rJUlyDMB%2FsCJFn%2BZ6FJ%2BHVJnjL%2FU%2BRZ7muTMtXFHOEt0kduD1hZIbre0xcAtv%2Fw3mPxcOX7yYCIIXc2jxAX9AfAX4PNaijYr2ONoNLxeFxd7iMHM5ctXP1R8ju9daulIqn5G6cdkktpD8Bm8pFnkUJYs0znbRAs4s57pHzVfTaE6vGYS7Nre2Y8NeRI46Mmav%2B2XOSxVm7z6gzXfQWjseX32AwVZCG8bWwa1XPn%2FRJ85GfUNXF%2FHFz2RnV30uC2QqgjBbFec06DNcIBsn5bd4mjcStgvTJ1SIdVETfclWAvZ6eunqxICy1FZP6cwPccowvPGJygY6pgHodl6HQI03Vr8jJyVr30BeztcKsCSs2Tu5OPlbhayYB54Frh%2B8nRZo3Hng82cUO4bMO32E5rDFgZ1MlPAloffI5rY3x%2FoM%2FzOfLqV9P9ELFAqngSYo29sckcjoEYmvy5VRDiP%2FK3JKhcvjhMjrJWLarxvo0lNP1UHkuk0ay39DMb0eHndA96RQUNLy40Fe3u47MNtvs52ThlWtuqvj%2F3gbjakXQ1Q7&X-Amz-Signature=0d6ef04a1369833672795d7985a0a590ad2bf2d6340d58ef64a928074221c670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BULTXRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQpBhjIciPOXLs4D6dduvkGJsI5H1XtXmtwSaRZG2SOAiB8SiF%2BkrZNuZU6uxfp9EqLBotVseiy%2Bl9dOIukXGslWir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM9grJS8hO8E96YI0iKtwDy4sp0tuNkSq3xZ5UcBWfOfKk0PF8VXsCPYy6DQD3MWqEzClv6g5gpRKudX4goszMykpJWzkAouDzpu4wexhevhfw%2FGHiNKtG2OMNskvRHPINYVJOQ7XbJR2h7oJa5jePIhbAF5ru2TNfYifnlEH0bqFhbANmMZ9wU3XgdtTbPZyyJz8GlSoqYqEjj2OgeVUJWtDtXduECE5FxAAtfHfQHJ0RdPcSTaHJx1p8Mz0fVBpjg%2BT53dbixeB8HqIhuyNu9qaVZRH9n01x%2Fbp8Wllvn2uPAy192ZQL3uwEebgAYieCocHntEp6IoZ7cE5rJUlyDMB%2FsCJFn%2BZ6FJ%2BHVJnjL%2FU%2BRZ7muTMtXFHOEt0kduD1hZIbre0xcAtv%2Fw3mPxcOX7yYCIIXc2jxAX9AfAX4PNaijYr2ONoNLxeFxd7iMHM5ctXP1R8ju9daulIqn5G6cdkktpD8Bm8pFnkUJYs0znbRAs4s57pHzVfTaE6vGYS7Nre2Y8NeRI46Mmav%2B2XOSxVm7z6gzXfQWjseX32AwVZCG8bWwa1XPn%2FRJ85GfUNXF%2FHFz2RnV30uC2QqgjBbFec06DNcIBsn5bd4mjcStgvTJ1SIdVETfclWAvZ6eunqxICy1FZP6cwPccowvPGJygY6pgHodl6HQI03Vr8jJyVr30BeztcKsCSs2Tu5OPlbhayYB54Frh%2B8nRZo3Hng82cUO4bMO32E5rDFgZ1MlPAloffI5rY3x%2FoM%2FzOfLqV9P9ELFAqngSYo29sckcjoEYmvy5VRDiP%2FK3JKhcvjhMjrJWLarxvo0lNP1UHkuk0ay39DMb0eHndA96RQUNLy40Fe3u47MNtvs52ThlWtuqvj%2F3gbjakXQ1Q7&X-Amz-Signature=78d92366477e333d1c1f45c8720a90927bee07362ba8c5ab32efc00f8eb44efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

