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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHG4BVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAtMVR24gmIRY7gTtYq0wK%2BRfLYVImHdhccYuBxei60AiEA%2B2atX2tk3LmKSjrAtLzSVuuLcskzcC7RYhBYQfrnUuYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHccbfqLWUu5X9GgqyrcAyRz9b6dhMicZaEMYblwR2qTlWVNdsKOt58vBhv5ji5LV7iq2ebuuXzZlZ1%2BVnjTDqN7qgfCjFbMusxpLtoOtjCBn5YVswWNmt1crmbBnJ%2FrAiJNvGCgbmQuxRJM1Jm%2F4pSjItkMdWi3WKf2gizuOVQnvWQuDvObOKRg2CApaB3Z34kt6vd4DNO3OUB2ggIfxvFb%2BE4I6eaPK0xa%2BqIqz%2F%2B6CzF7GhBJousD2k9LvNnrXgSPnFy7Fz%2FU47rw%2BPGEA95HlZpEEQ5IgsyU9ck%2FcCx0hQ0dSQAN2rOiEd%2FMCrVjwB%2Bfy4PHO7bJTF6luPAwVlTe%2BUsmRVemS7bnwPMP47EBUFDQpfUuerNf%2B4ABu3d2F6fATwiLMYDkXh%2FsYHcEZWf1VG3%2BltvReiEcaTTmeg0hKEGE0x6dMCJRxx%2F2JSlmm8nXgPhij0ObTeXWYrcU2Xp9x2n8QmZhFvDXJedFf%2FMUM2jfyRq4JUH4ma2aYZnaW8jiu8MX%2FMTWrGKAGe22pYgnUJw%2FVxswK2mSznK2c9J2YkZB8sThrgBt56iIwpVKE%2BOnoCEmOTCCLbxIlMbVg1Pi0PtP78J5UekNF2gt9aRlpjhlvD%2FdU4jnl%2BnxqOCTQwYKU75KAp6dm1BOMJzpiMoGOqUB0fOn%2BcGlEFuV%2F3ErDQXrdQS8XiOlwKCLqbZF9GOzbGazwf7F6dIRqWhjgtCNiAqGq0Tm79gaZun3p3aRHocKE7iX9cWDLkDCyEt9CwMyyfQ%2BjrnFo6qlHV%2BnI7joiqzHIKpjj9zJZE8z%2B76plJtXESagnYeJTNUyHkVn69ae%2BCCK86p9GgeggPJ8nBiAg17PvuPbrUBj2Yyj3J%2F5%2FkBM67Slr4G5&X-Amz-Signature=50ea54a6344da67530b7191f10b1fda7056de224a7bc2b59f5d35b49f602e8dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJHG4BVF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICAtMVR24gmIRY7gTtYq0wK%2BRfLYVImHdhccYuBxei60AiEA%2B2atX2tk3LmKSjrAtLzSVuuLcskzcC7RYhBYQfrnUuYq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDHccbfqLWUu5X9GgqyrcAyRz9b6dhMicZaEMYblwR2qTlWVNdsKOt58vBhv5ji5LV7iq2ebuuXzZlZ1%2BVnjTDqN7qgfCjFbMusxpLtoOtjCBn5YVswWNmt1crmbBnJ%2FrAiJNvGCgbmQuxRJM1Jm%2F4pSjItkMdWi3WKf2gizuOVQnvWQuDvObOKRg2CApaB3Z34kt6vd4DNO3OUB2ggIfxvFb%2BE4I6eaPK0xa%2BqIqz%2F%2B6CzF7GhBJousD2k9LvNnrXgSPnFy7Fz%2FU47rw%2BPGEA95HlZpEEQ5IgsyU9ck%2FcCx0hQ0dSQAN2rOiEd%2FMCrVjwB%2Bfy4PHO7bJTF6luPAwVlTe%2BUsmRVemS7bnwPMP47EBUFDQpfUuerNf%2B4ABu3d2F6fATwiLMYDkXh%2FsYHcEZWf1VG3%2BltvReiEcaTTmeg0hKEGE0x6dMCJRxx%2F2JSlmm8nXgPhij0ObTeXWYrcU2Xp9x2n8QmZhFvDXJedFf%2FMUM2jfyRq4JUH4ma2aYZnaW8jiu8MX%2FMTWrGKAGe22pYgnUJw%2FVxswK2mSznK2c9J2YkZB8sThrgBt56iIwpVKE%2BOnoCEmOTCCLbxIlMbVg1Pi0PtP78J5UekNF2gt9aRlpjhlvD%2FdU4jnl%2BnxqOCTQwYKU75KAp6dm1BOMJzpiMoGOqUB0fOn%2BcGlEFuV%2F3ErDQXrdQS8XiOlwKCLqbZF9GOzbGazwf7F6dIRqWhjgtCNiAqGq0Tm79gaZun3p3aRHocKE7iX9cWDLkDCyEt9CwMyyfQ%2BjrnFo6qlHV%2BnI7joiqzHIKpjj9zJZE8z%2B76plJtXESagnYeJTNUyHkVn69ae%2BCCK86p9GgeggPJ8nBiAg17PvuPbrUBj2Yyj3J%2F5%2FkBM67Slr4G5&X-Amz-Signature=127fe9ad813cd80af9a4df55c73533f16bf60cbb6624e266ae79e120c712db29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

