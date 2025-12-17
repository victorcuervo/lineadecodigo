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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4ANUIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6mTkZDtkdtRPOpx5Pi15iP26LvNQJkSCZyE4RtRnbFAIgKg2j4k5w1tRYh2h1BNP4zN%2BV3D7WFqkfmGHGNKtuTjwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB%2FtxlJpgS9LjeSz1ircAz5z1XeaKqKs3ZE8CfTgFualI%2BruEKDDIstn%2FpRd0Nt09MMUrzizJaaKZuWfS3K4LfkQoQHiqetxzHqmDnmhVGvj5Sh%2BSwRg%2B6I52A6Ed9VeCkk%2FTiEblyxIyQtw5YLyojLBk9XgYZNANLxcoHCll%2Ft9lAF%2FZNmzkk7ZLDnPoeyiI3t1QOJ1s7fJ6fL346hBXb3SnCo%2FsG8k6ERao6wS6JVUlYV3LqZsy1TSpSU%2BQnuka5hjxgtiR1vyApls%2F0dErAjqE5FJf1BeNUCiCHVjHubXU7okJ5TfiD0Ytk9Gz4EBbvRtLDGBSRtvGy4GKaG%2FaVkpwoLzmLjVOmRT6KxZ2P4hsIMFMZlnKrVjqAmjpyyRoiae9bsah5seP%2BeQlvt2gnHTykrOU20PJFFMgzBOMFoQobGykiesexP6ENR6NlRrtq6RNv32fP%2Boigt42B4c%2F5%2FJsV0BidiVr4PP3GsW8iPuMu2YDfje7vi5oVeyaqiSFZazJJ76esRDT4xl%2FQ1DTRZJFoy2CGXUwHjneQGN3XZKcm9xGmSk5i7kEKr86rLLtkI86GtQRYa5xDcLFtrRkB3V0JYoTBaBzYCn8jL3Y%2FD1g6dNH7%2Fs8CvjDgemvKdx0nP3TLZPoZdN5dijMLiDicoGOqUBToItL2q1M9bmuFs63XGafZIKxg0%2BV3ivnDAAHxn4tiyPxQWFx6obcGlNeiXZl4Me6Kyr748G%2Fa63gHMzIMiiTA6ysG5XqOUoks19F0qZPtB3PGDgPByucU5KvFq11LICzMwFfzuZTXWbrYdaCNyGe2Nstg4yjWSWQAZMbfC6cmcyt471uifXrgWi5jYEhr1diLwOWgyKJr1U%2FkuHs8PJUPQkQsax&X-Amz-Signature=752670d9611145401efc8617d9d4b99102707c3eb56d1c1df5ea78d00aae6be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ4ANUIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6mTkZDtkdtRPOpx5Pi15iP26LvNQJkSCZyE4RtRnbFAIgKg2j4k5w1tRYh2h1BNP4zN%2BV3D7WFqkfmGHGNKtuTjwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDB%2FtxlJpgS9LjeSz1ircAz5z1XeaKqKs3ZE8CfTgFualI%2BruEKDDIstn%2FpRd0Nt09MMUrzizJaaKZuWfS3K4LfkQoQHiqetxzHqmDnmhVGvj5Sh%2BSwRg%2B6I52A6Ed9VeCkk%2FTiEblyxIyQtw5YLyojLBk9XgYZNANLxcoHCll%2Ft9lAF%2FZNmzkk7ZLDnPoeyiI3t1QOJ1s7fJ6fL346hBXb3SnCo%2FsG8k6ERao6wS6JVUlYV3LqZsy1TSpSU%2BQnuka5hjxgtiR1vyApls%2F0dErAjqE5FJf1BeNUCiCHVjHubXU7okJ5TfiD0Ytk9Gz4EBbvRtLDGBSRtvGy4GKaG%2FaVkpwoLzmLjVOmRT6KxZ2P4hsIMFMZlnKrVjqAmjpyyRoiae9bsah5seP%2BeQlvt2gnHTykrOU20PJFFMgzBOMFoQobGykiesexP6ENR6NlRrtq6RNv32fP%2Boigt42B4c%2F5%2FJsV0BidiVr4PP3GsW8iPuMu2YDfje7vi5oVeyaqiSFZazJJ76esRDT4xl%2FQ1DTRZJFoy2CGXUwHjneQGN3XZKcm9xGmSk5i7kEKr86rLLtkI86GtQRYa5xDcLFtrRkB3V0JYoTBaBzYCn8jL3Y%2FD1g6dNH7%2Fs8CvjDgemvKdx0nP3TLZPoZdN5dijMLiDicoGOqUBToItL2q1M9bmuFs63XGafZIKxg0%2BV3ivnDAAHxn4tiyPxQWFx6obcGlNeiXZl4Me6Kyr748G%2Fa63gHMzIMiiTA6ysG5XqOUoks19F0qZPtB3PGDgPByucU5KvFq11LICzMwFfzuZTXWbrYdaCNyGe2Nstg4yjWSWQAZMbfC6cmcyt471uifXrgWi5jYEhr1diLwOWgyKJr1U%2FkuHs8PJUPQkQsax&X-Amz-Signature=e8fdc84c16451ad312a9fb2263a5d4220b1c33bd52819b95d496848252a41718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

