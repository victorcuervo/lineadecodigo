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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QK3Z6KH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYJGpNNoi5bGoPlz%2FyU6uVFA6l5YCTXwz0gRkK9abetAIhAN8x2TEKzZO9uFo5BmlP1iC%2FKtqLUDnqytsmLvcEtgbnKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQV8R4gvnNIVWQjcq3AMi784kT%2BUAK7UfW%2BG1khJ8GHvaMLf0BLxb3k0YU11thOJFLna9ihJtb1XPe5dnRyzDuq%2FSvsS8Ct%2FTNy2K1wLbGTAc%2F2mMYWS20XSOaFhIBYgHYW%2BXXbjREMh4ggelDeQs7JDmCH16rxhP%2FH13RJclQgO2dqNuB6QMXA7GeqztIqTfqQRFcBe%2F7DdnFgrMkXw2ShhV3FUq186AWB3JUzp9mIXwt2wHgWB0k9Jo2%2FAUvbkOHecoTfFKwWDpwuiVmU8JNRD%2FTBpB%2BIfvuzu19fj7fhjtH9xW1XWPlVBaEoIC%2FhkLSs%2F%2BySQiKOhji2%2BOHz4bzDlh3W9%2BQjUJ8tBZvRrFJmDwoPLc05v0DhS%2FNS7mIeFRbX4HyJMIp7FSQ8JQfh%2FuLu9klYu88hdCrUfgrLGTBqVno9PuC85DmRK5CsOGJmkxU1SYzsokqJ2wWz9rPRe46vqMvWiHg2ZKlzDQ%2F6rU96tFaEUY5Q2DhhR5U6rwjW78PJWesWcivDcAXliHcZguHyCn%2Bmt0AiPep%2F8XIJ7Fw5%2BmEtNMzF1LBGk1EOtXrD%2B7u5LP3oVLEPaIm%2BUjx6lo4mzecG2Qh5jdyEjOF88zQJwSh4o4Ymbwn9pR54nwAN4Gz64DInw2a4YYMzDSrYzKBjqkAVIE7obVZNXpJNYcIeElS2cxzPphGY%2FzIXEF1fMLsbOwSfPDFUmpox7K2c0wJd2X%2FjzJWygiYa6HwXs%2FUNNsFa89b1nKdwn%2BQCKxH9kD7CUqCBHuB1i7XZL%2B%2Bg8LQu%2BUHP00wu7xKJAWMokwCXu9iTjSUPd4qu9I63syC05bSElViEJ0g%2Fb0hyFlN3NoyYnP4fPtytEpAFdymi7otkHGqep0b87e&X-Amz-Signature=e565590164629e3fad76def220c8b75b9ba6b3e4c0a336f7e0728e3325ba9e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QK3Z6KH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYJGpNNoi5bGoPlz%2FyU6uVFA6l5YCTXwz0gRkK9abetAIhAN8x2TEKzZO9uFo5BmlP1iC%2FKtqLUDnqytsmLvcEtgbnKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwxQV8R4gvnNIVWQjcq3AMi784kT%2BUAK7UfW%2BG1khJ8GHvaMLf0BLxb3k0YU11thOJFLna9ihJtb1XPe5dnRyzDuq%2FSvsS8Ct%2FTNy2K1wLbGTAc%2F2mMYWS20XSOaFhIBYgHYW%2BXXbjREMh4ggelDeQs7JDmCH16rxhP%2FH13RJclQgO2dqNuB6QMXA7GeqztIqTfqQRFcBe%2F7DdnFgrMkXw2ShhV3FUq186AWB3JUzp9mIXwt2wHgWB0k9Jo2%2FAUvbkOHecoTfFKwWDpwuiVmU8JNRD%2FTBpB%2BIfvuzu19fj7fhjtH9xW1XWPlVBaEoIC%2FhkLSs%2F%2BySQiKOhji2%2BOHz4bzDlh3W9%2BQjUJ8tBZvRrFJmDwoPLc05v0DhS%2FNS7mIeFRbX4HyJMIp7FSQ8JQfh%2FuLu9klYu88hdCrUfgrLGTBqVno9PuC85DmRK5CsOGJmkxU1SYzsokqJ2wWz9rPRe46vqMvWiHg2ZKlzDQ%2F6rU96tFaEUY5Q2DhhR5U6rwjW78PJWesWcivDcAXliHcZguHyCn%2Bmt0AiPep%2F8XIJ7Fw5%2BmEtNMzF1LBGk1EOtXrD%2B7u5LP3oVLEPaIm%2BUjx6lo4mzecG2Qh5jdyEjOF88zQJwSh4o4Ymbwn9pR54nwAN4Gz64DInw2a4YYMzDSrYzKBjqkAVIE7obVZNXpJNYcIeElS2cxzPphGY%2FzIXEF1fMLsbOwSfPDFUmpox7K2c0wJd2X%2FjzJWygiYa6HwXs%2FUNNsFa89b1nKdwn%2BQCKxH9kD7CUqCBHuB1i7XZL%2B%2Bg8LQu%2BUHP00wu7xKJAWMokwCXu9iTjSUPd4qu9I63syC05bSElViEJ0g%2Fb0hyFlN3NoyYnP4fPtytEpAFdymi7otkHGqep0b87e&X-Amz-Signature=4ba920702fb33e99f7e2b206eecc1be99120745811917becd54e33f393a7893b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

