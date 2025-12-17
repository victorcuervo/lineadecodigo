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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPVRDVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCknOSRWl3UeRXCrCenuXFAoOX8nakgL9bPBGtafftEHgIhAItfqRyYHAnG76itaBHG1JDqJrOx7g7EDTXGSRwbc4TwKv8DCHwQABoMNjM3NDIzMTgzODA1IgxpXOsLPrnvbaYEX1Eq3AMP7%2BccvUuRXU8SeJMUAwuyfv72uaSKvyRGxkTiXIkNPEPEZTYTznKUfEKW2puybM%2FenAVAC1lG2c0dKQ0%2BWBmhuirJkiqHQ3%2B4BV6JXYOuVSeFpmD%2F93fAl56LmUqDyZIHso6SXugI1RB%2BTbML2YnanNhFmqiDbiWSPouMMAtODhYD1eQ5D5yyafEaHryEYEgh6CBijgSZSbGphjnDmGoNfETFAzKvVz9PqhNUCKyHV0FYaB9LJJksJQm5jhiDiwPOdw6JaokdM4S20D5PYlNcoXAwgGAnEbTa6bHVk5YsyhNjF%2FOOAYH17dqU0nFpDHFKKOwYHHoQSx5rsHfqcb%2FuBvupXv8iBfUI7YR4svcM7f3kNOPb81POxkTIlyaI0rafTM7Eb3FHKTnt%2FYzLy4vujHgziBXNQL1BNJbxZy2CgxPsfCDxumh1%2BeMpT41xjrE0ArqjCcLSlPjZvXWErdaDLmTq8zu6hNryRpi%2FrKuj1%2BwQFv5chS%2Bu68P8hqZkFKm4s1G3IHNr%2Fx3tj6UtYO%2BZvKoTU3vPyEa%2BVj30Qkmp3y%2FI%2BkTWQWSjaay83vbobYdZknesVdtJSba9iThZIORMQ6Ca1XCZ0C4Zff8VIcxg4Sfl0clvv4%2FjMNYnqTCzj4rKBjqkAQF3j%2F%2FPPFt4%2FP5brarQIUTBi1Lx3Wrhco8DglnIENiJEqrY8glw4m3Wxq9m2emXfuxc62AdYg5H%2FuoCQ6n7oDF6SWGePWByzDhf5njHxxRbk%2BhOa%2FLSZ0uHMOtMy5SIM4%2BydUIA4yiv5kQ3D0vBAjckXM6hhti3%2F4TTV28%2BzLuRGVeaDzPMazu1RTbhpUXM%2FQPcCwNhwcFaCzpgVB96xLjM9NGx&X-Amz-Signature=2b8c6dbc5e4b9d31367c1c8610b47838f9bc5b232c50f3c0a59def0ab55c7f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKPVRDVG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCknOSRWl3UeRXCrCenuXFAoOX8nakgL9bPBGtafftEHgIhAItfqRyYHAnG76itaBHG1JDqJrOx7g7EDTXGSRwbc4TwKv8DCHwQABoMNjM3NDIzMTgzODA1IgxpXOsLPrnvbaYEX1Eq3AMP7%2BccvUuRXU8SeJMUAwuyfv72uaSKvyRGxkTiXIkNPEPEZTYTznKUfEKW2puybM%2FenAVAC1lG2c0dKQ0%2BWBmhuirJkiqHQ3%2B4BV6JXYOuVSeFpmD%2F93fAl56LmUqDyZIHso6SXugI1RB%2BTbML2YnanNhFmqiDbiWSPouMMAtODhYD1eQ5D5yyafEaHryEYEgh6CBijgSZSbGphjnDmGoNfETFAzKvVz9PqhNUCKyHV0FYaB9LJJksJQm5jhiDiwPOdw6JaokdM4S20D5PYlNcoXAwgGAnEbTa6bHVk5YsyhNjF%2FOOAYH17dqU0nFpDHFKKOwYHHoQSx5rsHfqcb%2FuBvupXv8iBfUI7YR4svcM7f3kNOPb81POxkTIlyaI0rafTM7Eb3FHKTnt%2FYzLy4vujHgziBXNQL1BNJbxZy2CgxPsfCDxumh1%2BeMpT41xjrE0ArqjCcLSlPjZvXWErdaDLmTq8zu6hNryRpi%2FrKuj1%2BwQFv5chS%2Bu68P8hqZkFKm4s1G3IHNr%2Fx3tj6UtYO%2BZvKoTU3vPyEa%2BVj30Qkmp3y%2FI%2BkTWQWSjaay83vbobYdZknesVdtJSba9iThZIORMQ6Ca1XCZ0C4Zff8VIcxg4Sfl0clvv4%2FjMNYnqTCzj4rKBjqkAQF3j%2F%2FPPFt4%2FP5brarQIUTBi1Lx3Wrhco8DglnIENiJEqrY8glw4m3Wxq9m2emXfuxc62AdYg5H%2FuoCQ6n7oDF6SWGePWByzDhf5njHxxRbk%2BhOa%2FLSZ0uHMOtMy5SIM4%2BydUIA4yiv5kQ3D0vBAjckXM6hhti3%2F4TTV28%2BzLuRGVeaDzPMazu1RTbhpUXM%2FQPcCwNhwcFaCzpgVB96xLjM9NGx&X-Amz-Signature=a0f8799d2dc022706c1bb34f8c5cda42fea2b5d9d9eacc9bec40d60d18eebb04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

