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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSOO5M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUmRqjUXZCoDBpPnmm9fhKmAA5c1d%2FbPJqd5OGWHGpiAiBRrhIDVGLHGnqMLtSxGg%2FkS2FRk86QfOyhG9rRCqfozCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLw%2FVg6wDZUMPpPDTKtwDLUUDxnC%2BMDL%2BRyYxrnsMQC68PiZG4ej7A9FZferUlyOsHpjgNfGHFe7%2Fftwd3yQL5uA%2FcCtArSBdrBkli34iPk42JcToAEmGgxFNUaUAIY5%2Bs%2FzH5aO%2F2N5AuiOYIZ%2BOERRlyc%2FQOtcfugfQuc4TVR0rXxSwywRba4M%2Fv1f2fJISd0y2k1kaLkL1VKBv9GLCVKhi9eUWktGQv0JdjY0fzFHHAfplluxGxbf2Idt4XN4czsgZtfYKWPvLVRVuTb16WPUZXKZi3mCdlQmQ2izTP4PAJDTyrQxJOaitq3j5o1E%2BIRQlqKUEQ3B%2BeaeYjBQL6clPxAXqQiYolLmK0NhfxzjFWfCYSDhlvrxXYaydl9G%2FxzG7SzRiEnLp0IOfyXkjS866WyZo7vthUQEGCHnOmFGgPgiMIOoJRI33m0vXwfBY84zVBf7KfFaf50pHVzqDSiV6ey%2BhdQqCXC2lSWjsSPl%2B%2FGWEH0JwkwObulrrDrX3WONVAvT9o9HyLwNYSaeYdIV7UzTGDYsm8VpHAtdd7LqLevmbpC7MVyfaoRBJNtJJZR9gCq3UlhU0fOIkFCgbAIGX%2FSZzg5%2BRChFHQez8K7fpGYlaNH5C9OgZkQRnJoJQ7c5SO5j8qdUYUbswm5%2BLygY6pgEc3%2BJNJ2cV3YVrAJUCkp3e5A6X0pvvmAJxxocXfrdpaxQeu0ttTsvaxPlcYgTcnhuaQH1509IEs3IbUcd7fom%2FZWA4jJHWwAZGZzEphXQBbO0xP41Ds7l7Yw58wUSa4UExw%2By70VTzAOjeE2%2BueRce%2Fgw1NE1SNh8ao5f428DAkyBOgaGSQUn16sH7nHiNhRrG1wGDTYUXhiRuXUn939Jx%2BC%2FcoJS5&X-Amz-Signature=2e118945edc9010728591ca0062ae887ca5de10f2868fd8c06ce1fb33683f494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZSOO5M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUmRqjUXZCoDBpPnmm9fhKmAA5c1d%2FbPJqd5OGWHGpiAiBRrhIDVGLHGnqMLtSxGg%2FkS2FRk86QfOyhG9rRCqfozCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLw%2FVg6wDZUMPpPDTKtwDLUUDxnC%2BMDL%2BRyYxrnsMQC68PiZG4ej7A9FZferUlyOsHpjgNfGHFe7%2Fftwd3yQL5uA%2FcCtArSBdrBkli34iPk42JcToAEmGgxFNUaUAIY5%2Bs%2FzH5aO%2F2N5AuiOYIZ%2BOERRlyc%2FQOtcfugfQuc4TVR0rXxSwywRba4M%2Fv1f2fJISd0y2k1kaLkL1VKBv9GLCVKhi9eUWktGQv0JdjY0fzFHHAfplluxGxbf2Idt4XN4czsgZtfYKWPvLVRVuTb16WPUZXKZi3mCdlQmQ2izTP4PAJDTyrQxJOaitq3j5o1E%2BIRQlqKUEQ3B%2BeaeYjBQL6clPxAXqQiYolLmK0NhfxzjFWfCYSDhlvrxXYaydl9G%2FxzG7SzRiEnLp0IOfyXkjS866WyZo7vthUQEGCHnOmFGgPgiMIOoJRI33m0vXwfBY84zVBf7KfFaf50pHVzqDSiV6ey%2BhdQqCXC2lSWjsSPl%2B%2FGWEH0JwkwObulrrDrX3WONVAvT9o9HyLwNYSaeYdIV7UzTGDYsm8VpHAtdd7LqLevmbpC7MVyfaoRBJNtJJZR9gCq3UlhU0fOIkFCgbAIGX%2FSZzg5%2BRChFHQez8K7fpGYlaNH5C9OgZkQRnJoJQ7c5SO5j8qdUYUbswm5%2BLygY6pgEc3%2BJNJ2cV3YVrAJUCkp3e5A6X0pvvmAJxxocXfrdpaxQeu0ttTsvaxPlcYgTcnhuaQH1509IEs3IbUcd7fom%2FZWA4jJHWwAZGZzEphXQBbO0xP41Ds7l7Yw58wUSa4UExw%2By70VTzAOjeE2%2BueRce%2Fgw1NE1SNh8ao5f428DAkyBOgaGSQUn16sH7nHiNhRrG1wGDTYUXhiRuXUn939Jx%2BC%2FcoJS5&X-Amz-Signature=5d4179bbc805aced41a3a11f4603ad34a9997a4bc355143dbf1600681386202e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

