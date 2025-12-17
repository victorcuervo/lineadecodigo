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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3F3F2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiJThdDKhGm1Zz5GWbBS080ybjhEJABX9EyrS2SvI4rAiEArQOP1wMJG57rj%2BG%2BJKrQKdD0uRjAHyV7F3%2BbL3J2b2Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPtLS4ofkknTwAG2ZircA83BfOFt4p%2FG2UO%2F0pG4pIVGbIEpyPWJtsi9Lfxy5jGJrKemO4qqBbqF89oI0cGXbhGnI%2F%2BRpU4y4z1YNh3M09yhHtT4uKe49WFhig%2BIgJ0zFG2gbM0%2BDmKRVWn6DR5m6DFeiLUtSy17qK0oFz7ACkwOMLFr2gJEzJClWEvvwbOXy2PcH9CehNjYEfgJYbPPS4P83byLxaqhWXubTWWKExyvP2tz9Libsp%2FK7akgut6oGk%2BdUH7Qn0IuA2OQ32sfYS3xhZl6pzCgpvvvJbsX0AzOySbgcN%2Fzkz9OeMFJ%2BsOr0gA1nQpR7m5o0mWGzTvUkhMvA7WIzC8wjhbkWrqy58Nv%2FJZzSWKP%2B2CGCmUN79WvRVke6xjvP%2BjIn1TrpZ89kHa0eKOEAh96kbS7KFCG2r1H35uixIdDkBK2nixqQ2HaavT%2Br8v9un5%2FC8yEcUIxBi4mpGmokObabgv62ocArSdOyX%2B8Chl3VT6tPWxrN61C8dPmbsem2I5BLOCfyIX5J%2FOAjnMlwDLS1KKxrTzufR26DfAWugOH50nEU1vMG5Q%2FHAOHDifSX5NLfFTScwRuCgFhmOkvhafmcY8U%2FggE3s8LOqTLNuZvnzpt0n3PyLLL01aav4V4TmFxToF3MMrhisoGOqUBRADKGEFJW5772DWjGeeVU%2FE1lGJTX2DT5hqmXlzlvrYWKcv76CI%2Buk4hi304JpXt%2BjWBMcPBdFuoVMtg43GwLzoUagql7De%2BcXVux5qshKqseVcGHFC%2BfNCeQ%2FEYQlj1Nkq2rQ8i8wifqOLIhYsBjSWLGi0z5buTBrecyLqr7nYlO24Q9204mQ6Ppvo%2BfFBOIdnmnf9grtuJGsD5Ie5ASdiglZ3u&X-Amz-Signature=075c211fff59fa2e7bdc6d38430622ada04c5bfa3ff76150eb8832528e4f2ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3F3F2DA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiJThdDKhGm1Zz5GWbBS080ybjhEJABX9EyrS2SvI4rAiEArQOP1wMJG57rj%2BG%2BJKrQKdD0uRjAHyV7F3%2BbL3J2b2Eq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDPtLS4ofkknTwAG2ZircA83BfOFt4p%2FG2UO%2F0pG4pIVGbIEpyPWJtsi9Lfxy5jGJrKemO4qqBbqF89oI0cGXbhGnI%2F%2BRpU4y4z1YNh3M09yhHtT4uKe49WFhig%2BIgJ0zFG2gbM0%2BDmKRVWn6DR5m6DFeiLUtSy17qK0oFz7ACkwOMLFr2gJEzJClWEvvwbOXy2PcH9CehNjYEfgJYbPPS4P83byLxaqhWXubTWWKExyvP2tz9Libsp%2FK7akgut6oGk%2BdUH7Qn0IuA2OQ32sfYS3xhZl6pzCgpvvvJbsX0AzOySbgcN%2Fzkz9OeMFJ%2BsOr0gA1nQpR7m5o0mWGzTvUkhMvA7WIzC8wjhbkWrqy58Nv%2FJZzSWKP%2B2CGCmUN79WvRVke6xjvP%2BjIn1TrpZ89kHa0eKOEAh96kbS7KFCG2r1H35uixIdDkBK2nixqQ2HaavT%2Br8v9un5%2FC8yEcUIxBi4mpGmokObabgv62ocArSdOyX%2B8Chl3VT6tPWxrN61C8dPmbsem2I5BLOCfyIX5J%2FOAjnMlwDLS1KKxrTzufR26DfAWugOH50nEU1vMG5Q%2FHAOHDifSX5NLfFTScwRuCgFhmOkvhafmcY8U%2FggE3s8LOqTLNuZvnzpt0n3PyLLL01aav4V4TmFxToF3MMrhisoGOqUBRADKGEFJW5772DWjGeeVU%2FE1lGJTX2DT5hqmXlzlvrYWKcv76CI%2Buk4hi304JpXt%2BjWBMcPBdFuoVMtg43GwLzoUagql7De%2BcXVux5qshKqseVcGHFC%2BfNCeQ%2FEYQlj1Nkq2rQ8i8wifqOLIhYsBjSWLGi0z5buTBrecyLqr7nYlO24Q9204mQ6Ppvo%2BfFBOIdnmnf9grtuJGsD5Ie5ASdiglZ3u&X-Amz-Signature=baebe1e6346de44a5194d1b1e2f39694583a9600fdddf3bae19f583a9b2c917f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

