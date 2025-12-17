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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BZANMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxxN9TgrjdOsEv629N13y0ZcjiyCeXU%2BNoQ7yqdp%2BacAIhALDU71WunWI8puI7POfVz4nPQD8EQs3oHrQCZF0QPluRKv8DCHoQABoMNjM3NDIzMTgzODA1IgzUpqwaWiMUix6N1fYq3AN%2F1ksCMkEfjte4y6LncPl1iYYxj38LnRDW%2BD85Gwty9T6IaTjXegWbKX8i3yMvrBHPDa73TOL5VQ%2BAiL0FkR%2Fex5WRDJ4qk%2FDxZhzPEoNAhly9dyHd7sKL%2Fgu4RE2AoNJp%2FArlx770598RCUttoBAJHaVp9rwgwlhIE%2B2FoSz%2FSYOVdIRw%2FRDM0vQqd4jHmS07zQfpmiJ8Kck7NyVBrbPxnmETZoy3CsuYNh2ZOYJkFX8wAlu0JRb%2Bp3sfwYMxsdmyOO8MnUqCwsNdaAEk00jbSSYAwu24m8uVSp1QxsBlBtj6hX6Tp8pMmKF1u0hJGGmPhl2JdosFeIxdx0rWLlTOHHKE2aRrWv4%2FxUtwC52fOR%2FBXRZwzla5MN6%2BD%2B%2FsIJ2s0z%2FgAM0JhJojxDOTakwh%2Bc%2FrACI%2FwsAbazkGG2XozMnD94aM%2FY2zYkMZHDBo23KGO2a5qnOmhmuazgMFQYv0BuEftXzvTu3ZUvlheYP9AG6emhliNCNMeKoCWCWuxVPEkx1nYUosAn9xw9xM5STke5ej28PjEv4rx5IMTScpSReuK5syhn58GI0fCKzBVc3jFz6jzPGMcplfSxhBkX4SxnEP6H%2Bre3GzoXHMPXiyTps41J363OMzKsVc9TCB04nKBjqkAcG2HKf3oH9fn5H2TIYFpndb8DtDUCyoS6NA%2FWgI36SDFSBvQljdzSe5kPvx0%2BR502aPr0EVi1%2B85HVUfaQAJPCunjghiITkFrIbmp3QHNiuAxHfZbfJqko0OGA9x%2FQQHPBBWJsL2ay0%2FbvEl9GTBvbt8LDKfzW%2FMHzY7KWb00k3u5RBc%2BAUdJ9ZyoxDEZIb%2F5aFrFc4q79CjBuQ2S97nyOvKnbO&X-Amz-Signature=c2152d0a0457564bf3229a7f21f8c0c8cba1c839fab1da3221d6739550486f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664BZANMS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxxN9TgrjdOsEv629N13y0ZcjiyCeXU%2BNoQ7yqdp%2BacAIhALDU71WunWI8puI7POfVz4nPQD8EQs3oHrQCZF0QPluRKv8DCHoQABoMNjM3NDIzMTgzODA1IgzUpqwaWiMUix6N1fYq3AN%2F1ksCMkEfjte4y6LncPl1iYYxj38LnRDW%2BD85Gwty9T6IaTjXegWbKX8i3yMvrBHPDa73TOL5VQ%2BAiL0FkR%2Fex5WRDJ4qk%2FDxZhzPEoNAhly9dyHd7sKL%2Fgu4RE2AoNJp%2FArlx770598RCUttoBAJHaVp9rwgwlhIE%2B2FoSz%2FSYOVdIRw%2FRDM0vQqd4jHmS07zQfpmiJ8Kck7NyVBrbPxnmETZoy3CsuYNh2ZOYJkFX8wAlu0JRb%2Bp3sfwYMxsdmyOO8MnUqCwsNdaAEk00jbSSYAwu24m8uVSp1QxsBlBtj6hX6Tp8pMmKF1u0hJGGmPhl2JdosFeIxdx0rWLlTOHHKE2aRrWv4%2FxUtwC52fOR%2FBXRZwzla5MN6%2BD%2B%2FsIJ2s0z%2FgAM0JhJojxDOTakwh%2Bc%2FrACI%2FwsAbazkGG2XozMnD94aM%2FY2zYkMZHDBo23KGO2a5qnOmhmuazgMFQYv0BuEftXzvTu3ZUvlheYP9AG6emhliNCNMeKoCWCWuxVPEkx1nYUosAn9xw9xM5STke5ej28PjEv4rx5IMTScpSReuK5syhn58GI0fCKzBVc3jFz6jzPGMcplfSxhBkX4SxnEP6H%2Bre3GzoXHMPXiyTps41J363OMzKsVc9TCB04nKBjqkAcG2HKf3oH9fn5H2TIYFpndb8DtDUCyoS6NA%2FWgI36SDFSBvQljdzSe5kPvx0%2BR502aPr0EVi1%2B85HVUfaQAJPCunjghiITkFrIbmp3QHNiuAxHfZbfJqko0OGA9x%2FQQHPBBWJsL2ay0%2FbvEl9GTBvbt8LDKfzW%2FMHzY7KWb00k3u5RBc%2BAUdJ9ZyoxDEZIb%2F5aFrFc4q79CjBuQ2S97nyOvKnbO&X-Amz-Signature=6674a4e0e3b693ea3a21b16fd19c2f9a4148c7788b9d29914ad70f8b9394d0b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

