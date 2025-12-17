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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOFSKOF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9W9aJutp9RKUOoOpk1akeNHcXnfnqf7muP1cuDqB5oAiBP2MxzURVFX%2B45upav6AlVQvrp2zc7p3ncgVSi9uXQayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMv8wn0opR7Yh0VhcIKtwDMndhrBMRwgbQJGaabiCYIoOrhCh5iE87dJN0TnJQXcy9QVcFI%2F5bZkkbaciuZDefGlDWWzI2kHqxw9BjdJLJxAt5W9xxOcdP6%2FjxjcuEaTsjmOk8wRuDY0mlqOuehjccHddC7NQMyZhRvbssNpM1Ch4GPihOFkyLOvX2l5iPicEulro6wEe%2B24oZzFqAJzbZWQBm3lBmQU6Uhnqi%2BaoFsXkE3SZ%2BzkCbypdCq6wGjHBgFeb3ZXUsiD5NvHMW%2F0n3swWFgSwP2dndY7JtL%2B6UteS1vUCT0%2Fa%2FDB%2BkySZvY5Pt7j9yoYqMQTj0fXGcWJHAuW5vD4nkiw3Q3V2IrHQVoTcVqPIvBzMV%2FWEqqiwYPTBr%2BiVjvza%2BEiYckmngeCS%2F6Xy4iX0iyv4PeTHR6JKU0y%2B99VXMXpV4vgMmCwHxnSTwg2ECk%2BlXz3rPN%2BavtR3ckeXLDYmkrweBhvSF3RMo6rQ%2Fd3P8y0xBCGuCV21I5ynaz4GDjmDMTERuwOWKj568NQyRI8RWjC4HYG5M2IQTF6HQg1OcFD4nzVS8jLhYls881ZJZIxWKazHZ23CCbhc2Ep6oJ8hGFJZmmuNey11oPN%2FM3pt9hCnK7NLV68blHsq45P%2FMXVLgO3huBpAwrPqHygY6pgG7GJcm0lJ2uXv8r4suJBkFfVLpnIYHBE0GLibllJy9s2FBIISGJAu%2B6np3DMnoU44I9aqC%2Be3U8L76HhLSkMHLHnOcS9ijDEr3DFIzW3tsRhCVWySpM4ZCgjx9QJ0nbgTHSYrIKKplrMNlpuvJJwPeCa0BDr%2B5XJ4EnxgOcZaYqJYHh%2FwWP3CDmJmRlLi0KpOxvpAm49KA071FI5RdVGLo3YnaC3j5&X-Amz-Signature=f065c04993e461c9f71a2c3e2e5a7d43439959233a57c3a4a938aac3696277ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFOFSKOF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9W9aJutp9RKUOoOpk1akeNHcXnfnqf7muP1cuDqB5oAiBP2MxzURVFX%2B45upav6AlVQvrp2zc7p3ncgVSi9uXQayr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMv8wn0opR7Yh0VhcIKtwDMndhrBMRwgbQJGaabiCYIoOrhCh5iE87dJN0TnJQXcy9QVcFI%2F5bZkkbaciuZDefGlDWWzI2kHqxw9BjdJLJxAt5W9xxOcdP6%2FjxjcuEaTsjmOk8wRuDY0mlqOuehjccHddC7NQMyZhRvbssNpM1Ch4GPihOFkyLOvX2l5iPicEulro6wEe%2B24oZzFqAJzbZWQBm3lBmQU6Uhnqi%2BaoFsXkE3SZ%2BzkCbypdCq6wGjHBgFeb3ZXUsiD5NvHMW%2F0n3swWFgSwP2dndY7JtL%2B6UteS1vUCT0%2Fa%2FDB%2BkySZvY5Pt7j9yoYqMQTj0fXGcWJHAuW5vD4nkiw3Q3V2IrHQVoTcVqPIvBzMV%2FWEqqiwYPTBr%2BiVjvza%2BEiYckmngeCS%2F6Xy4iX0iyv4PeTHR6JKU0y%2B99VXMXpV4vgMmCwHxnSTwg2ECk%2BlXz3rPN%2BavtR3ckeXLDYmkrweBhvSF3RMo6rQ%2Fd3P8y0xBCGuCV21I5ynaz4GDjmDMTERuwOWKj568NQyRI8RWjC4HYG5M2IQTF6HQg1OcFD4nzVS8jLhYls881ZJZIxWKazHZ23CCbhc2Ep6oJ8hGFJZmmuNey11oPN%2FM3pt9hCnK7NLV68blHsq45P%2FMXVLgO3huBpAwrPqHygY6pgG7GJcm0lJ2uXv8r4suJBkFfVLpnIYHBE0GLibllJy9s2FBIISGJAu%2B6np3DMnoU44I9aqC%2Be3U8L76HhLSkMHLHnOcS9ijDEr3DFIzW3tsRhCVWySpM4ZCgjx9QJ0nbgTHSYrIKKplrMNlpuvJJwPeCa0BDr%2B5XJ4EnxgOcZaYqJYHh%2FwWP3CDmJmRlLi0KpOxvpAm49KA071FI5RdVGLo3YnaC3j5&X-Amz-Signature=b93755e2825e00177ab934dede5147ce73bef4bd6c82cb16bcc060ccc994254f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

