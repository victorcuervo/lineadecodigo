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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX46MB23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuI4vAVHT65mjaYbxhuU4xZMyfEp18lsPJB6AC5%2F0I2AiEA7fo1Twvwry3AvBfsbgAzYQUf7cffH2d%2BevnjvYoyEY0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBqmt3d49HEoVurcpyrcA1M4qGBKrJPvf4PwBrPKL%2Bby5FvB5Ptk4v%2FWLGPJYwYBi1cAExwI%2B%2FpNOb8ErcZEvHkB0R5mrl5d8xnqCm0OyDVWaawBIBYmXrK4JT3ZJQLLsHm223mkrNCmZuxbem4Bfj44%2Fr6NUTzEluSrYE5L1hz0nMNb3tKn6PFwmyZB6bj048wxbbvLzRseLNKfoXcFKbkWps0serKVQjCHqnFY9NjlC4dXfzme8g0KSs5jy2XtC3hv8TSrCa1inwofVKQrgS5l0JFza2oFvbXPpJKCNb2d7uq92Ks%2BDR0j%2BhklhhqUrhsw4tCVPT70xgD3ryVLJ7uLQInwh5i7t3txTkTHFPUlFr2wHrMPJfNmStLSP8MQyP8k4QsPQ6GgEXS39kHGJz0elQe80851L0KAJD4DzJGF%2F0NST%2BMPR0GuiO6PyraxdYmIoWGVdPL1wJMrpNqL9MHQrjtSV532ALlPbHEVCnT7zQbacpNvpeu0bOgUc4pooN00xofVLjnljfrmswiWeYyCc3Nyg%2F9%2BQJaoYRU1FgiSFVo3YgB6vKMXZVCivVnJZQNNfcqfJFGXDSKGzzIXGmBtZs524OR8zxHVlmAQqJLJZUxG3SX6CE0trSsRoYy1mNTIEYqbuDd4w%2FuCMM2ViMoGOqUBitpyh%2Bc2jc2Mmz4HRlx6MHK%2Bgt9pa%2BXjMfRGHI7%2F%2Bv2hJyPG%2F1ERWSvYWLDMYY51ASOs8pDbmmb1RT464zsvwK9ol9rRc4lcnbhxJXLXCvMvGGw5T%2FhRrVO0I8X0Igf1Tk0LdxckpBlQWYZ3f5xteoY2O8s7TqtRdb3t59cWRhSNX5u%2BR%2B6x%2FUztpy7E6RQenuYQBDw2U8fPdo891K67bNCDbfWM&X-Amz-Signature=e54d97f268578ad6596ed56bbf4c9d384b3c077ab9f88335fcfa9f7117cbe9b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX46MB23%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGuI4vAVHT65mjaYbxhuU4xZMyfEp18lsPJB6AC5%2F0I2AiEA7fo1Twvwry3AvBfsbgAzYQUf7cffH2d%2BevnjvYoyEY0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBqmt3d49HEoVurcpyrcA1M4qGBKrJPvf4PwBrPKL%2Bby5FvB5Ptk4v%2FWLGPJYwYBi1cAExwI%2B%2FpNOb8ErcZEvHkB0R5mrl5d8xnqCm0OyDVWaawBIBYmXrK4JT3ZJQLLsHm223mkrNCmZuxbem4Bfj44%2Fr6NUTzEluSrYE5L1hz0nMNb3tKn6PFwmyZB6bj048wxbbvLzRseLNKfoXcFKbkWps0serKVQjCHqnFY9NjlC4dXfzme8g0KSs5jy2XtC3hv8TSrCa1inwofVKQrgS5l0JFza2oFvbXPpJKCNb2d7uq92Ks%2BDR0j%2BhklhhqUrhsw4tCVPT70xgD3ryVLJ7uLQInwh5i7t3txTkTHFPUlFr2wHrMPJfNmStLSP8MQyP8k4QsPQ6GgEXS39kHGJz0elQe80851L0KAJD4DzJGF%2F0NST%2BMPR0GuiO6PyraxdYmIoWGVdPL1wJMrpNqL9MHQrjtSV532ALlPbHEVCnT7zQbacpNvpeu0bOgUc4pooN00xofVLjnljfrmswiWeYyCc3Nyg%2F9%2BQJaoYRU1FgiSFVo3YgB6vKMXZVCivVnJZQNNfcqfJFGXDSKGzzIXGmBtZs524OR8zxHVlmAQqJLJZUxG3SX6CE0trSsRoYy1mNTIEYqbuDd4w%2FuCMM2ViMoGOqUBitpyh%2Bc2jc2Mmz4HRlx6MHK%2Bgt9pa%2BXjMfRGHI7%2F%2Bv2hJyPG%2F1ERWSvYWLDMYY51ASOs8pDbmmb1RT464zsvwK9ol9rRc4lcnbhxJXLXCvMvGGw5T%2FhRrVO0I8X0Igf1Tk0LdxckpBlQWYZ3f5xteoY2O8s7TqtRdb3t59cWRhSNX5u%2BR%2B6x%2FUztpy7E6RQenuYQBDw2U8fPdo891K67bNCDbfWM&X-Amz-Signature=6d232e8a0adfcb68c1c3845e445b34a76dba1190531fe3d19b25e9e9bf159e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

