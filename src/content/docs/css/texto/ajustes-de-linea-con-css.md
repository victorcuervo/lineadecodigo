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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZQVPP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn5SSF6ObCDkMVttSzAfMo4b6loxA0OQZ7fmiUEns%2B9AiB%2FL9HTrNX7Em5FDq0tyXB7D8%2FiB0HzMKLGy2y3Xvta6Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMb%2FnNxIRGBd4mSfeEKtwDr0duXaqi5Dnp%2Fqf09mfm5lc4Csk9XBTbW8ZFPD%2FeTn6Ah0EeutmgYGSYDOnxHO2s2Ln9WasZ5%2F8C2lfLz7yhDjX7M3YeBKE%2BbWeu40utK03JLk1CzC0SYh5apCLyr64VHmdRuGu0w%2FkjfPWgIo6U7v3PBxkRaa1%2BfKmbLnwCBgaBJ6JNNxrI6gKpXphIGkG%2BLhJL0pwveUXax5ntzwoZkPeU3nb2QLopkIgkNOy86Ta7uxsXAjFYmXa4RXPdeoqCHZVrO%2Bx6JS66UQG19QtojwdCifOOA3kC4ew3NLNPCcglIFb3Ow0DUWR18fJLFhdMqGhSrknrUjC1ZSvPShPOiz9%2B%2FHUPIOXdxH11T6ZXliHeccz6ZH5vblH6yWSDBJrwZTMvqTfKJy4WUzlT85KNvjX%2FWPDrwqk%2BDZeY%2FqdFPQ2Jsj86BmA0R5Pj1uRJnXY3ICs8QWKEeavafR42OIgwgO5pFJwnOfojg7vV5TO8xDBnWVPnDDKCpmPafmXxcUT1LVEMIlrzLWM7FKfdfJzpgzkFSIN%2Fe9RDXJI8XNtBHatsODqT8Ngb%2BbFLUsgs08SxKbsdFZ4bjDVM%2B8j%2BuVxXX2ieQvll5TmGjJ7aMKgCa%2Bsv%2Bal2%2BwVmwNhPEy0wkquKygY6pgEV84ZJsymuzC4EjRYxwbTeoMXEtEg6nm%2Bl%2BrsKj1egPOHN5f0VZxpQy%2FMRfMiXU4gnAgRPSSk4RgVqHb39kkU4Kw9sAiRhpSR%2Fl7ZpXLAxcqCX8YHHjY17VeIR93hLsWIQ5VzfynzZdDkQfrYWcJtOdjrNAUGNgx%2BRNn9M9RwuEcLCn7jP1CXnza0MABq9SruJ9Vv0rwrPDKlSN7PPVXKH5R2FtoZu&X-Amz-Signature=8884cb4c49d8e465f369008e1f2984116af28bb4385bfecc14184c6f8e82c1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CZQVPP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGn5SSF6ObCDkMVttSzAfMo4b6loxA0OQZ7fmiUEns%2B9AiB%2FL9HTrNX7Em5FDq0tyXB7D8%2FiB0HzMKLGy2y3Xvta6Cr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMb%2FnNxIRGBd4mSfeEKtwDr0duXaqi5Dnp%2Fqf09mfm5lc4Csk9XBTbW8ZFPD%2FeTn6Ah0EeutmgYGSYDOnxHO2s2Ln9WasZ5%2F8C2lfLz7yhDjX7M3YeBKE%2BbWeu40utK03JLk1CzC0SYh5apCLyr64VHmdRuGu0w%2FkjfPWgIo6U7v3PBxkRaa1%2BfKmbLnwCBgaBJ6JNNxrI6gKpXphIGkG%2BLhJL0pwveUXax5ntzwoZkPeU3nb2QLopkIgkNOy86Ta7uxsXAjFYmXa4RXPdeoqCHZVrO%2Bx6JS66UQG19QtojwdCifOOA3kC4ew3NLNPCcglIFb3Ow0DUWR18fJLFhdMqGhSrknrUjC1ZSvPShPOiz9%2B%2FHUPIOXdxH11T6ZXliHeccz6ZH5vblH6yWSDBJrwZTMvqTfKJy4WUzlT85KNvjX%2FWPDrwqk%2BDZeY%2FqdFPQ2Jsj86BmA0R5Pj1uRJnXY3ICs8QWKEeavafR42OIgwgO5pFJwnOfojg7vV5TO8xDBnWVPnDDKCpmPafmXxcUT1LVEMIlrzLWM7FKfdfJzpgzkFSIN%2Fe9RDXJI8XNtBHatsODqT8Ngb%2BbFLUsgs08SxKbsdFZ4bjDVM%2B8j%2BuVxXX2ieQvll5TmGjJ7aMKgCa%2Bsv%2Bal2%2BwVmwNhPEy0wkquKygY6pgEV84ZJsymuzC4EjRYxwbTeoMXEtEg6nm%2Bl%2BrsKj1egPOHN5f0VZxpQy%2FMRfMiXU4gnAgRPSSk4RgVqHb39kkU4Kw9sAiRhpSR%2Fl7ZpXLAxcqCX8YHHjY17VeIR93hLsWIQ5VzfynzZdDkQfrYWcJtOdjrNAUGNgx%2BRNn9M9RwuEcLCn7jP1CXnza0MABq9SruJ9Vv0rwrPDKlSN7PPVXKH5R2FtoZu&X-Amz-Signature=5c1fc8ac6c024cc73149d4ace65b2ea011108e87b9e58a4b0f97a2b213f5a6b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

