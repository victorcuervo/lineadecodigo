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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEVBLEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BYKiNLblJG3EPHVmz%2FHTZbU3JYSeprDgo4R3vwopSsAiB0ZKLowiba%2FjDvORPQib7zg%2FZLrtZL4JTCyxOmR%2Be9DCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMWD8vRW68M3cJAbZ1KtwDbQjOsL0K6J%2FwkppMa8lDAesX4naT8uNJKuV4%2BjP%2BTmezFDFANWxHehqLqwgZermenly6UJiw%2FNIH%2F%2FjRWf9CerZn0Mqkm99rkBADvtecsD5xE0e331daf5%2FSCKdHVVwE6txvSEH0E2peD9LSIWJZOArej%2B2nqA9mmd2DQwHNyp0aELY4bdXU4B9TTysZWOBm5XgrKwZorI3gP7T7yDMBbXrHY17Rn4vyJLO0ZaBzQD1JkiX4bVsNGyqMR40lyN65Ew9hcbjlEz1Mf6fs%2FCT6LCfgTeX4eZG6WM9mMW%2Fg4hnTdf7TUTZcehqUoOojOXhlysBZMU%2F3Mp29UHwO9v1plsid7M3wMF5KaHR%2F0Aw9zFlUZ5%2Bg0uVrDY8KCy00aYnh4L%2BAg%2FLNQE7s%2B55baWfc4AEPgsPxl5TGFqPm2bMY8ETPotBiMzv%2Bb7GZXOMDR%2BavW4uVHMlv3eB5gjSa3B6ytwoMrIa1JPqeB7QRhK0YRY1sXHXWbA4bSZm4yf0vx5vbrTq1kmySTeHjsMaAYIK5TZE%2FdFZ%2FcNdKBn5lQ2XHTA%2BqQEaM7yxUyRevVySSJD68pLVZie9OF%2B0Ffa0uSFpGAjcEOsv3oPfw%2F5zc6v%2B7Wpf%2BDnh%2BAayB%2FVLS4PEw6fCJygY6pgHrGTxrxX9fMGJiHQ4DOCj7wIUN0TS8F1yJq%2BRY1Sk0XJWjVpOaLahjciWP617jUFGFG3dMwFpUfdd1bFJkAwuXA%2FgKFMR8HUnnwTDQevfNTu3%2B7pFzzb4cM6vzG4a3okJ%2FpFyelU7UuJmH43FjqwbCNqD6djmH6QWhWfldVJdNMGjTz0iRpxn09ZR4OisjVKe3jCoUAzTJhUXN6NhsL5v74FOX%2FO3O&X-Amz-Signature=c42b5d57f52e4865767f56d1100b0569baf5ed9d8dac31cd8019639344c48f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DEVBLEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2BYKiNLblJG3EPHVmz%2FHTZbU3JYSeprDgo4R3vwopSsAiB0ZKLowiba%2FjDvORPQib7zg%2FZLrtZL4JTCyxOmR%2Be9DCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMWD8vRW68M3cJAbZ1KtwDbQjOsL0K6J%2FwkppMa8lDAesX4naT8uNJKuV4%2BjP%2BTmezFDFANWxHehqLqwgZermenly6UJiw%2FNIH%2F%2FjRWf9CerZn0Mqkm99rkBADvtecsD5xE0e331daf5%2FSCKdHVVwE6txvSEH0E2peD9LSIWJZOArej%2B2nqA9mmd2DQwHNyp0aELY4bdXU4B9TTysZWOBm5XgrKwZorI3gP7T7yDMBbXrHY17Rn4vyJLO0ZaBzQD1JkiX4bVsNGyqMR40lyN65Ew9hcbjlEz1Mf6fs%2FCT6LCfgTeX4eZG6WM9mMW%2Fg4hnTdf7TUTZcehqUoOojOXhlysBZMU%2F3Mp29UHwO9v1plsid7M3wMF5KaHR%2F0Aw9zFlUZ5%2Bg0uVrDY8KCy00aYnh4L%2BAg%2FLNQE7s%2B55baWfc4AEPgsPxl5TGFqPm2bMY8ETPotBiMzv%2Bb7GZXOMDR%2BavW4uVHMlv3eB5gjSa3B6ytwoMrIa1JPqeB7QRhK0YRY1sXHXWbA4bSZm4yf0vx5vbrTq1kmySTeHjsMaAYIK5TZE%2FdFZ%2FcNdKBn5lQ2XHTA%2BqQEaM7yxUyRevVySSJD68pLVZie9OF%2B0Ffa0uSFpGAjcEOsv3oPfw%2F5zc6v%2B7Wpf%2BDnh%2BAayB%2FVLS4PEw6fCJygY6pgHrGTxrxX9fMGJiHQ4DOCj7wIUN0TS8F1yJq%2BRY1Sk0XJWjVpOaLahjciWP617jUFGFG3dMwFpUfdd1bFJkAwuXA%2FgKFMR8HUnnwTDQevfNTu3%2B7pFzzb4cM6vzG4a3okJ%2FpFyelU7UuJmH43FjqwbCNqD6djmH6QWhWfldVJdNMGjTz0iRpxn09ZR4OisjVKe3jCoUAzTJhUXN6NhsL5v74FOX%2FO3O&X-Amz-Signature=1a807c8e137b4258aa4513d8f6df10967509a93b7b67537cb6e9b2de54674cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

