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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMLF4W3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0MbKlICP6DSmfme1xZpvUQCnGusiOZZVJ0mIZKM8DoAIhAKY7povAURhjDppTPMk4M7cpWbGTYa3flJr%2F8vzWiQMnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6Bu49mhkjwdhrKsq3ANS3MGundQWVdw2EYcI7%2Brxer4g%2FjiXbHu6fdXhjzkVq3WFZ2P2qSY40aTiPChGMv8OwfKELA0jP2EOrFr8NhK1SHwpuuGMCtMfnKg0N8Thxyua7fjCOpkEQpdy6FKieU%2BuzwiWLhpshRl75J3WT%2FQwvxwlDHQ2%2BV%2FIxIAp4C5wniDQ9jncR278S98k72zA%2FILXvbIYW1eRtqGpBilcJCET2xfSgXbNSW22S%2Fndlc%2BkVl%2Frfw%2FNeeFMkBGIbs6aC6Ld3z%2BQ4gE8Hadt8AnQo9YBy%2B7%2FA5%2BW6ZNpfqIFMmNDcQ7f3LQfxHlig1XYCkgIES33Pcc%2BWuespq74cE3qvFrMw%2FFGlW4oluyk2sxlVr45fzsfT7jP6Z%2B7MDlFz5MYnmnxEJncukTAOJidUysiqqkuFdRAI58zIjrK1SiJiUXK1g6XyRC8CKTSBrrlWvTbZ3uuW1nYEnKvtSTw%2FI9iaD43cOMqPdNaoWMnKnDPETXTvzFcedyqjbDWG498tusxmgW%2B01XF2eCMSMYw5zx18klEoDyIWNdE9n%2FsoCsmTgm8pvDZYvc6KztHVXI4KWqznbQZ%2BU2WKhDjUMJ59UQJOoLYpXpakMW4hkld2xpTOKz26G4PcqVyZ6agDK8UmzCkn4vKBjqkAagna%2Bpa6rwvckhqkiGHaxs22GvwtBFNJkm8%2F00Hhgv48%2BHl6AmfPZ0wxg6cG7qFetV9pR2wh3L8UNiSdELgFO5uZyv4kAqKzGuFRHEqW18LzrUdDOb8WoDwv59iRgjNsOyypV7NYWWcUNVv6enXjTuAm8ilhJXDD86Oxtnc8WkCCInDwdD7M0MgYc4%2B%2FYetULMU6iEese22PfDzU8PtxrYeWSso&X-Amz-Signature=5581fb26f31b716e115450951b28e61885a4139b9592c46849559b475c7cd02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJMLF4W3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T161757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0MbKlICP6DSmfme1xZpvUQCnGusiOZZVJ0mIZKM8DoAIhAKY7povAURhjDppTPMk4M7cpWbGTYa3flJr%2F8vzWiQMnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igye6Bu49mhkjwdhrKsq3ANS3MGundQWVdw2EYcI7%2Brxer4g%2FjiXbHu6fdXhjzkVq3WFZ2P2qSY40aTiPChGMv8OwfKELA0jP2EOrFr8NhK1SHwpuuGMCtMfnKg0N8Thxyua7fjCOpkEQpdy6FKieU%2BuzwiWLhpshRl75J3WT%2FQwvxwlDHQ2%2BV%2FIxIAp4C5wniDQ9jncR278S98k72zA%2FILXvbIYW1eRtqGpBilcJCET2xfSgXbNSW22S%2Fndlc%2BkVl%2Frfw%2FNeeFMkBGIbs6aC6Ld3z%2BQ4gE8Hadt8AnQo9YBy%2B7%2FA5%2BW6ZNpfqIFMmNDcQ7f3LQfxHlig1XYCkgIES33Pcc%2BWuespq74cE3qvFrMw%2FFGlW4oluyk2sxlVr45fzsfT7jP6Z%2B7MDlFz5MYnmnxEJncukTAOJidUysiqqkuFdRAI58zIjrK1SiJiUXK1g6XyRC8CKTSBrrlWvTbZ3uuW1nYEnKvtSTw%2FI9iaD43cOMqPdNaoWMnKnDPETXTvzFcedyqjbDWG498tusxmgW%2B01XF2eCMSMYw5zx18klEoDyIWNdE9n%2FsoCsmTgm8pvDZYvc6KztHVXI4KWqznbQZ%2BU2WKhDjUMJ59UQJOoLYpXpakMW4hkld2xpTOKz26G4PcqVyZ6agDK8UmzCkn4vKBjqkAagna%2Bpa6rwvckhqkiGHaxs22GvwtBFNJkm8%2F00Hhgv48%2BHl6AmfPZ0wxg6cG7qFetV9pR2wh3L8UNiSdELgFO5uZyv4kAqKzGuFRHEqW18LzrUdDOb8WoDwv59iRgjNsOyypV7NYWWcUNVv6enXjTuAm8ilhJXDD86Oxtnc8WkCCInDwdD7M0MgYc4%2B%2FYetULMU6iEese22PfDzU8PtxrYeWSso&X-Amz-Signature=b000b00f8d1db98172277de9a28946e713b1a1b0ec950251734868ddcaa1336b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

