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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SII4EQN4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSHpe%2BV0K00tlFbGZm25Ym2qwYJRy%2Ffb%2BpEevhjl6I8AiEAsnWwczd9SOqY1Mu8WADiNkEAJMXeI8ymlwgnb9QzdwAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ9A4IIu99G2k9teRyrcAyXYjye2zm0ZKtoZuaBjJ%2BMPCcfzHBoIhzZKT%2BULwD3A95cSkH5usMBSOj8h2e9IrmV8uInsjHhvxQwxbdqG%2BZuriGFZX53vMaIVmxubzdCAVCqdyphzbwuf80e%2B8qNHcAUvUEs0Up%2FQVW3uw%2FwEHA17%2Fuq49EKaEWkXIT9MGZoRXGYTF2tR1wQ2V1aQsKsfhSb06DwZlYudGyMALJLKaCzqKI%2FY9TCg0wLSTqO3737frGQ9cuSQXYmmF71NcYbO1oFKWZfOc5NoEg5seWopxpYR4bngHjunr%2BgxlNhRBxhj%2BfYdugmrqrXSnGHhh8I3fI24OIs%2Bu2Wscq1UrY7VZNaIMLRtT4YUoTu6lQ9ckgctVhFi0AKSF1sq2rwL6rbOk6IX%2BAmwhPyzQbPe55NJNp4auJ8V4NAM4uAcjH6JDpC%2BocYJ8i2lzIIXxd0enw7kuRdbqLMnPFUfJIEDzBP0aUveEIlyK%2FJw5lvr%2Bw7g9sOz3r3EO3fIl8jYpCfRlz5miCKq7mUJF%2FHxlEIALejXiLXfUw6BIQRZ897EII0kvUOvLMjDEDnISUsgQ6sqcOysixhzT8DVTp%2B2%2Bz11Q5IHFuzRTsLvPmJsnPppYGd0Au7NSGQA%2BTeAH9%2B7uAaFMNKcicoGOqUBr4AXBH1%2BB19zyvlcUV3UlAjdKrKXCFsWjDYOU27%2FJXTKH2OQ%2B5Fg0oQXbnuDU4MI1X4pMtl0uH%2F8GYi0zKSCg7zVS6Fhc35uqBoTRySIRpY%2BrBJjcedRzHdh5Csmd6%2BHIGNw7newtKhWJALlDp9IZmEIA%2BjKncMw8ynL1v4gDFNEJ8KL4dIYYT7CVf7mrwdRnAcUZtP1ZCrwdtuFvnPu4mL5KujD&X-Amz-Signature=c835d9786f315f8f081b444bf6a8400b2466326f10b4dea08472a36d0dc011bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SII4EQN4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICSHpe%2BV0K00tlFbGZm25Ym2qwYJRy%2Ffb%2BpEevhjl6I8AiEAsnWwczd9SOqY1Mu8WADiNkEAJMXeI8ymlwgnb9QzdwAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDJ9A4IIu99G2k9teRyrcAyXYjye2zm0ZKtoZuaBjJ%2BMPCcfzHBoIhzZKT%2BULwD3A95cSkH5usMBSOj8h2e9IrmV8uInsjHhvxQwxbdqG%2BZuriGFZX53vMaIVmxubzdCAVCqdyphzbwuf80e%2B8qNHcAUvUEs0Up%2FQVW3uw%2FwEHA17%2Fuq49EKaEWkXIT9MGZoRXGYTF2tR1wQ2V1aQsKsfhSb06DwZlYudGyMALJLKaCzqKI%2FY9TCg0wLSTqO3737frGQ9cuSQXYmmF71NcYbO1oFKWZfOc5NoEg5seWopxpYR4bngHjunr%2BgxlNhRBxhj%2BfYdugmrqrXSnGHhh8I3fI24OIs%2Bu2Wscq1UrY7VZNaIMLRtT4YUoTu6lQ9ckgctVhFi0AKSF1sq2rwL6rbOk6IX%2BAmwhPyzQbPe55NJNp4auJ8V4NAM4uAcjH6JDpC%2BocYJ8i2lzIIXxd0enw7kuRdbqLMnPFUfJIEDzBP0aUveEIlyK%2FJw5lvr%2Bw7g9sOz3r3EO3fIl8jYpCfRlz5miCKq7mUJF%2FHxlEIALejXiLXfUw6BIQRZ897EII0kvUOvLMjDEDnISUsgQ6sqcOysixhzT8DVTp%2B2%2Bz11Q5IHFuzRTsLvPmJsnPppYGd0Au7NSGQA%2BTeAH9%2B7uAaFMNKcicoGOqUBr4AXBH1%2BB19zyvlcUV3UlAjdKrKXCFsWjDYOU27%2FJXTKH2OQ%2B5Fg0oQXbnuDU4MI1X4pMtl0uH%2F8GYi0zKSCg7zVS6Fhc35uqBoTRySIRpY%2BrBJjcedRzHdh5Csmd6%2BHIGNw7newtKhWJALlDp9IZmEIA%2BjKncMw8ynL1v4gDFNEJ8KL4dIYYT7CVf7mrwdRnAcUZtP1ZCrwdtuFvnPu4mL5KujD&X-Amz-Signature=4601affc3cf28e998d366b5e1e4fc780beab923259aabb83704927be0caeed2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

