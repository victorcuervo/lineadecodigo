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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYW5KVMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw2mHi3nEX9Gcmwyc8yM4j%2F1aQYa0qVftQfla0p%2BtnRAiEAul%2Bq3kLtnGD%2FXdn5CrXWDfBsJgaGzRyYe897E60Lhm4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMp%2FKqUlveSZCi1WVircA8ne2gEdAG8go9USYKwO69G6CMgUudSB%2FFZC0WBA3UZvyIfBxdYiSLGT5Whilp8KUPNRx4cBUG%2FFGTFu8Kbwn9exFC%2Bz1E1SSZA4xnwQZzwjKbwIENqgqLxGxaMx0Sxxmmc4NbkSg1oFXRaktffpiNu1HE1UKzvp85tvikmz6OVjqDloWwPlWTG1lVuclcNAZEYMIY5memc%2F0ggTfSzEKJgswHovPszPj7r7O0BGZHq6PIoxUigoMou1s6fBj70y3DeLNuMJURd1WyawSVy6DJIX4N%2B39eYSs0VA2JFIs8Og8cg8LBgGQCbYEE0ILlQZHMrHKEL02LOZLJtMJdcDv9etextbaKuuNddIUhxSBmvlR4M934wugi0kSMNUvwKjzz%2Bcg7Dh9QfoisxfPDpgzpDaz7EyWi5TxfNFVXx1O2kmcARpCGxcqgD3qIgjgCXjVGvTsJjagxbaOsFlksNC3wRMsWlMqDaJagRTKjku%2FC3w5JLeQR%2FNtybtAhXucxYw7H43nWppX4Q3cfn5feqzDCavGTB6E8t1urg0hg7g9j9jtvDN8aNK9%2Baj6I1O00qCxjNP10tmBiTdTErebmk0vGrmFhJYdskiVMK9HSgMXhJExjTY3dmMRPTmYkwvMK%2BqisoGOqUBPR2ZMGlWfmiqjJpqLXykmv2serw7U6hmsCMUxs5%2BQpZrt5CtmEa%2FdMvqjrwPXcYyhWGhqpaOhreuV%2FK%2Bd5%2Fm0vBucNxsfWkyMqx6fSw1YOlI%2BY9RSxwnZ95Ykpanw8yTbr17%2B45JwlUsyDflENH8nqW6UAvWoXjpKY2G%2Flp6aV%2BN3LjVWFqOHegnmydSRwKbRn9EQ7rrHBAZ89fQdtwWPYBr3UJH&X-Amz-Signature=17719b598478986435ebe8cf3cefd7a0ea6eed4e88d321a16f9e1e1cc4e88c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYW5KVMD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw2mHi3nEX9Gcmwyc8yM4j%2F1aQYa0qVftQfla0p%2BtnRAiEAul%2Bq3kLtnGD%2FXdn5CrXWDfBsJgaGzRyYe897E60Lhm4q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMp%2FKqUlveSZCi1WVircA8ne2gEdAG8go9USYKwO69G6CMgUudSB%2FFZC0WBA3UZvyIfBxdYiSLGT5Whilp8KUPNRx4cBUG%2FFGTFu8Kbwn9exFC%2Bz1E1SSZA4xnwQZzwjKbwIENqgqLxGxaMx0Sxxmmc4NbkSg1oFXRaktffpiNu1HE1UKzvp85tvikmz6OVjqDloWwPlWTG1lVuclcNAZEYMIY5memc%2F0ggTfSzEKJgswHovPszPj7r7O0BGZHq6PIoxUigoMou1s6fBj70y3DeLNuMJURd1WyawSVy6DJIX4N%2B39eYSs0VA2JFIs8Og8cg8LBgGQCbYEE0ILlQZHMrHKEL02LOZLJtMJdcDv9etextbaKuuNddIUhxSBmvlR4M934wugi0kSMNUvwKjzz%2Bcg7Dh9QfoisxfPDpgzpDaz7EyWi5TxfNFVXx1O2kmcARpCGxcqgD3qIgjgCXjVGvTsJjagxbaOsFlksNC3wRMsWlMqDaJagRTKjku%2FC3w5JLeQR%2FNtybtAhXucxYw7H43nWppX4Q3cfn5feqzDCavGTB6E8t1urg0hg7g9j9jtvDN8aNK9%2Baj6I1O00qCxjNP10tmBiTdTErebmk0vGrmFhJYdskiVMK9HSgMXhJExjTY3dmMRPTmYkwvMK%2BqisoGOqUBPR2ZMGlWfmiqjJpqLXykmv2serw7U6hmsCMUxs5%2BQpZrt5CtmEa%2FdMvqjrwPXcYyhWGhqpaOhreuV%2FK%2Bd5%2Fm0vBucNxsfWkyMqx6fSw1YOlI%2BY9RSxwnZ95Ykpanw8yTbr17%2B45JwlUsyDflENH8nqW6UAvWoXjpKY2G%2Flp6aV%2BN3LjVWFqOHegnmydSRwKbRn9EQ7rrHBAZ89fQdtwWPYBr3UJH&X-Amz-Signature=0c8668027b096bc3f0edde67f6d8708d3f08dfaad58b9437a7a732023a4b8f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

