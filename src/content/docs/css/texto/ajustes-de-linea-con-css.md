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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNECCICC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ1yrdzrGztKtcc%2F0zdBcRlMWzLCRlDGePepU5Rx5XFgIgbzHnvospl5JzGmjuFZRnlTX09f2uPSXGCVEoIf6QaDUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBdtHgjR2QQF7isFpCrcA4keYuvN9zyLkH%2FTc1HmzKvlXDCTbOFwpRVOxI5a7t5h%2B17pBX2JiCBcDFP2GZ8Nuo1BWZVSoVGg%2F93FbfLAHBMbWSrXL3thO6NFQn%2FCd%2BNJfBD1Oh1hXPCfj23cCcpmjtGbheQFDH%2FMDFcnvBt73aXO7NtFH0d6UoAWaV5LSPFY%2FL6sx%2BSpJhdOZ0oOQ%2FXTaoQMdev%2BaGRyhKstQwJ%2FcnZJ21SAS9wVTj9rneWSlY6vCc61u%2FObD0y4Qbb%2BzEk2J8j4Srn4y3KDVrybxE22u9H4pfPnx5XNVr77oChr3%2FmKCxXjhz8hkPpvjdlyPX20nDqi7Yt%2Birdq5wNFdlkh6jlfTpkS5s4IcD%2B1wl9g3c%2F3RqxkCB27IX6zIHZFPhvJ63VNqw4jwOq%2FiEAKWREc7fNUGqE6tWYGgRerp2%2B4qJTG8wXseP6zXnjttItrrTS8jE8dYylrjEKuv7rniYg%2B8HP7lZMby7QSuJrNCD9FsuewrJbO78RADOxKDL%2BKW44Ih0MiK4TY9E2f5JlHETqFzNVw9239QLZsTevC%2FdOkb%2BDrtIUOP0SK9rJ9%2FGLzmRKBPhGnOqUx6ekI8BjwI%2BFxwNR6QydWK868OIK6XLgVcW62QvpGix4G73DNBneIMPreh8oGOqUBUJP9%2BI1a3MgiI0QBQzK%2FnFa1v2l%2FD5XjoafNyD7qVirGo1pt7jlP9aog%2B05Wsv9NRQO0tnPRIVlPc0oQvsE1fkcXzTKezZAOZBgX0vnJGLNiPDDdWcwXIGGTgejxTHoeSEmnapGYBDs%2BAbHe6Hks2c4aZGf4vIcMOHaeoYJNgSzkMqE97Sem%2BGMO4kNCcfPjG0ckfIpV0P%2FUk1YMvMoCPIZQneXP&X-Amz-Signature=fa19831ae5e7473b5a8dac089fbbc283d5405ea693df8bf3509dcc0eabb82f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNECCICC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ1yrdzrGztKtcc%2F0zdBcRlMWzLCRlDGePepU5Rx5XFgIgbzHnvospl5JzGmjuFZRnlTX09f2uPSXGCVEoIf6QaDUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBdtHgjR2QQF7isFpCrcA4keYuvN9zyLkH%2FTc1HmzKvlXDCTbOFwpRVOxI5a7t5h%2B17pBX2JiCBcDFP2GZ8Nuo1BWZVSoVGg%2F93FbfLAHBMbWSrXL3thO6NFQn%2FCd%2BNJfBD1Oh1hXPCfj23cCcpmjtGbheQFDH%2FMDFcnvBt73aXO7NtFH0d6UoAWaV5LSPFY%2FL6sx%2BSpJhdOZ0oOQ%2FXTaoQMdev%2BaGRyhKstQwJ%2FcnZJ21SAS9wVTj9rneWSlY6vCc61u%2FObD0y4Qbb%2BzEk2J8j4Srn4y3KDVrybxE22u9H4pfPnx5XNVr77oChr3%2FmKCxXjhz8hkPpvjdlyPX20nDqi7Yt%2Birdq5wNFdlkh6jlfTpkS5s4IcD%2B1wl9g3c%2F3RqxkCB27IX6zIHZFPhvJ63VNqw4jwOq%2FiEAKWREc7fNUGqE6tWYGgRerp2%2B4qJTG8wXseP6zXnjttItrrTS8jE8dYylrjEKuv7rniYg%2B8HP7lZMby7QSuJrNCD9FsuewrJbO78RADOxKDL%2BKW44Ih0MiK4TY9E2f5JlHETqFzNVw9239QLZsTevC%2FdOkb%2BDrtIUOP0SK9rJ9%2FGLzmRKBPhGnOqUx6ekI8BjwI%2BFxwNR6QydWK868OIK6XLgVcW62QvpGix4G73DNBneIMPreh8oGOqUBUJP9%2BI1a3MgiI0QBQzK%2FnFa1v2l%2FD5XjoafNyD7qVirGo1pt7jlP9aog%2B05Wsv9NRQO0tnPRIVlPc0oQvsE1fkcXzTKezZAOZBgX0vnJGLNiPDDdWcwXIGGTgejxTHoeSEmnapGYBDs%2BAbHe6Hks2c4aZGf4vIcMOHaeoYJNgSzkMqE97Sem%2BGMO4kNCcfPjG0ckfIpV0P%2FUk1YMvMoCPIZQneXP&X-Amz-Signature=362213713524fa483ad1be5f12d445fbf357c78c368422070a66c7d0100ac819&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

