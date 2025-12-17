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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZQB5X2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn3cecC%2BkbavI30u6bA%2B3W1b5ArnWa9k2wM9iv1ytECAIgCfSL2w38jSzjDnOUuHpCRnrWnT4sWfSupVmgFtO2Jw4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiFaQcTHMZ7EvJrCrcA1UZQYdNC%2FbYUMX9YXPyoweewZCeLE2%2BRMnDmbLWmikb94MV54fFkwn%2FKBVPEani3pq6ju8LZj5v3jRNjDFDsSd4wVVKoGKxAQQDO%2BiZfObd0UTBA0muJoPRzenwpCfRLTfgbrkOTFVMmbUM5p%2B7b9J2lJAkHTZT4Em7KuDgVPinoB8whlN0xjccDRxwYuYGIe1r7eK4Eq9%2BXoksDsah%2BQBJ6NDx8OFuBLHFprjFkBtvKMvd3LLTHBaM%2F18mvzChuIlUAa3RWwerU%2F5hhj7GISr45hSbt1c2zklZVzF9JJEeZ3pijMDVplXhv6uI%2BGOlf9bapscVTturasZOB8hG%2BSWueumlLLOEshGtVP7Y5zv9WgZ5b6sKpIiBLwTE4hZMF5cTgJUKd92TUKg3bx4E7DgAXXB4mvUQVA%2BFwey9w%2B99qDT1RsP1A5vhvbAXo0RC6mlqJltGvCQkaWhGr%2BNICBU6y0LsFrr1ZRI2w%2FPRxwr1i9hTc8JUz1ci0e6gmU9BEG3uqCA%2FW6DvdzCb4Dkl3uquBFtj7UUR1mFOGac8mSmQKm7tpz2b%2FiwMefKfAblRiDzjhDTV4dpyyNgWq91yEIK0bp5CFxo%2BjCM8CFWFf8QHXGLHn6wkO7He59rVMPSBi8oGOqUBNlkBef7EydB4CHkS76EdPyvdMKLxyGcCGQBHW3tERpcUN%2FG06tsrDZDdwq1zwsZrn0qePqCTQRXlHKeC2QNgvemz1Pgd%2FNMdnczYjoFAqoNtmgtLJubMJau9k0Oy%2FyCqyDsLIBuImRN0JpcUwzmvAPCJNnACX4HgrORcJrDSHvnBkB5RZ8nyoplphoiSKOn1HI7rAtnZz38GoXikwPKyuwAUnthz&X-Amz-Signature=1b10560031409fac462ecbd0cc4aceea5b8c12b6d7a7e4f859ebfaa746feb8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKZQB5X2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDn3cecC%2BkbavI30u6bA%2B3W1b5ArnWa9k2wM9iv1ytECAIgCfSL2w38jSzjDnOUuHpCRnrWnT4sWfSupVmgFtO2Jw4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyiFaQcTHMZ7EvJrCrcA1UZQYdNC%2FbYUMX9YXPyoweewZCeLE2%2BRMnDmbLWmikb94MV54fFkwn%2FKBVPEani3pq6ju8LZj5v3jRNjDFDsSd4wVVKoGKxAQQDO%2BiZfObd0UTBA0muJoPRzenwpCfRLTfgbrkOTFVMmbUM5p%2B7b9J2lJAkHTZT4Em7KuDgVPinoB8whlN0xjccDRxwYuYGIe1r7eK4Eq9%2BXoksDsah%2BQBJ6NDx8OFuBLHFprjFkBtvKMvd3LLTHBaM%2F18mvzChuIlUAa3RWwerU%2F5hhj7GISr45hSbt1c2zklZVzF9JJEeZ3pijMDVplXhv6uI%2BGOlf9bapscVTturasZOB8hG%2BSWueumlLLOEshGtVP7Y5zv9WgZ5b6sKpIiBLwTE4hZMF5cTgJUKd92TUKg3bx4E7DgAXXB4mvUQVA%2BFwey9w%2B99qDT1RsP1A5vhvbAXo0RC6mlqJltGvCQkaWhGr%2BNICBU6y0LsFrr1ZRI2w%2FPRxwr1i9hTc8JUz1ci0e6gmU9BEG3uqCA%2FW6DvdzCb4Dkl3uquBFtj7UUR1mFOGac8mSmQKm7tpz2b%2FiwMefKfAblRiDzjhDTV4dpyyNgWq91yEIK0bp5CFxo%2BjCM8CFWFf8QHXGLHn6wkO7He59rVMPSBi8oGOqUBNlkBef7EydB4CHkS76EdPyvdMKLxyGcCGQBHW3tERpcUN%2FG06tsrDZDdwq1zwsZrn0qePqCTQRXlHKeC2QNgvemz1Pgd%2FNMdnczYjoFAqoNtmgtLJubMJau9k0Oy%2FyCqyDsLIBuImRN0JpcUwzmvAPCJNnACX4HgrORcJrDSHvnBkB5RZ8nyoplphoiSKOn1HI7rAtnZz38GoXikwPKyuwAUnthz&X-Amz-Signature=19f3d41598d4da6be0453d6ee73409da19f95787930a7234ab7879dbf7f53d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

