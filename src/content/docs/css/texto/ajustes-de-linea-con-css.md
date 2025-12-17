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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJ2FOHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkCim1uo80HSVIl%2BjWkJAPtLlcU1zlzhmLghYYNWVuygIgQGpRWFZcXFVTF3K%2B%2BCvk%2BiRACfZYq%2BYHznZnniIgvZ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFKQt85FoKRM8mjyLSrcA%2BLrVTtV3he9OBZHUeMuR%2BmjhNlfOXYRp6BaClO1VwzBinl6PBVf%2FXYEQ66ZSOGeS%2B8GRa2AgyegVBucBGLNOrKqE2dmzi7VdeQkzOaHsE%2BINL0ASYRmOVOPp7X9%2FTpr6IvnUWLdlsnsLlClKwx7XFS8IRVRh5L%2Ff4JA2uC3%2FnMUNgv2bPKxDE%2BJP6mYhvVZfRSHp6a9yGwBxRJb9A%2B38b177TPR6U%2BLx46HkAYYzi0MWs04YMDHsm28x2LdOKbgN2IeSevqrAdUShNw%2BszWgFwSkIKtaLzpsPKruu6xe1SIc2X1GdSyg3HpTQqQ%2F11UVX4bwOHPJGfw6JxzuAVF%2BxlrHgw8UprThYXPvFsIlqN9KyCmVF8lX6MkXT7cUl%2Fz6wMAQYg6%2B38q%2F%2F3Ewn9pVSDggd4PRNpjfnk3KhvxPgqOniPh08YP6bE7xUBogYy7xbWHTDJiDfptK%2Bowk5z6n%2Fip1tFTxAFuMIPYItH%2FulWuKD4UKSRsciDDUL66u8yE1MAwckPhDjBymEnKyMDaVWlkZddIuuBgrUtz9OKFEmc09WMpcYGcLZRyMWQy4q4WhH6VYwcWrVDyLjZPuedfhPbXvLGjySlPop%2F%2Fg%2Fw6n62AcSZ0kH30T4TdccbjMOvwicoGOqUBfmNZx2AF29btjgBxbKxQ3txgksB7uRhie3IiXakSp7xp82fkr9MOAbG3096tQYdpf8vYabIE49WsjxwDzSWK55LfDpn7RZZ4y8ZcVYYr%2BJf%2F0AFO3%2FYFyupo2pL6HT1AVMDzoNZ5wRtIgVDpFLRMlbdE9ftmaPCovKYRWhvwZwqmKq%2FB1jPcvd3CZSpNaumHShTuITzRcBaB6jp%2BAvsm8zMK%2BlML&X-Amz-Signature=38929356f9ea810d77f4a03f9789bd22f14a55285fd01c40f00bf233f0083b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUJ2FOHI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkCim1uo80HSVIl%2BjWkJAPtLlcU1zlzhmLghYYNWVuygIgQGpRWFZcXFVTF3K%2B%2BCvk%2BiRACfZYq%2BYHznZnniIgvZ0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFKQt85FoKRM8mjyLSrcA%2BLrVTtV3he9OBZHUeMuR%2BmjhNlfOXYRp6BaClO1VwzBinl6PBVf%2FXYEQ66ZSOGeS%2B8GRa2AgyegVBucBGLNOrKqE2dmzi7VdeQkzOaHsE%2BINL0ASYRmOVOPp7X9%2FTpr6IvnUWLdlsnsLlClKwx7XFS8IRVRh5L%2Ff4JA2uC3%2FnMUNgv2bPKxDE%2BJP6mYhvVZfRSHp6a9yGwBxRJb9A%2B38b177TPR6U%2BLx46HkAYYzi0MWs04YMDHsm28x2LdOKbgN2IeSevqrAdUShNw%2BszWgFwSkIKtaLzpsPKruu6xe1SIc2X1GdSyg3HpTQqQ%2F11UVX4bwOHPJGfw6JxzuAVF%2BxlrHgw8UprThYXPvFsIlqN9KyCmVF8lX6MkXT7cUl%2Fz6wMAQYg6%2B38q%2F%2F3Ewn9pVSDggd4PRNpjfnk3KhvxPgqOniPh08YP6bE7xUBogYy7xbWHTDJiDfptK%2Bowk5z6n%2Fip1tFTxAFuMIPYItH%2FulWuKD4UKSRsciDDUL66u8yE1MAwckPhDjBymEnKyMDaVWlkZddIuuBgrUtz9OKFEmc09WMpcYGcLZRyMWQy4q4WhH6VYwcWrVDyLjZPuedfhPbXvLGjySlPop%2F%2Fg%2Fw6n62AcSZ0kH30T4TdccbjMOvwicoGOqUBfmNZx2AF29btjgBxbKxQ3txgksB7uRhie3IiXakSp7xp82fkr9MOAbG3096tQYdpf8vYabIE49WsjxwDzSWK55LfDpn7RZZ4y8ZcVYYr%2BJf%2F0AFO3%2FYFyupo2pL6HT1AVMDzoNZ5wRtIgVDpFLRMlbdE9ftmaPCovKYRWhvwZwqmKq%2FB1jPcvd3CZSpNaumHShTuITzRcBaB6jp%2BAvsm8zMK%2BlML&X-Amz-Signature=445da616083c73c5095515a7ba008d50bd9998da7ebe540de00a21399c577ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

