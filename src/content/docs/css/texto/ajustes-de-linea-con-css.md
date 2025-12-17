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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNLZ2AW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH60qqXw02TkD704dJiyL1sbjRQXBcxKTWOpUmc8yRKYAiEAspJc0guiTuDeetHBvTPBi4kClzeiBrDd0DYoq7Bxrawq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2BZj4l6B5rKdzEMSCrcAyOyJsU0uEi4UtpomXER5m0QZswdk8XglLIDAvFTb8k6sogjG29l2a8zuVt%2BqQCyffMkWPPftBmc3aDqpAlg6UGZ9dCID1MA5p1S71gfR8tqNEzlaTgqQPQNAhII3K0mTM7ok%2FiFfjW%2F3Gc5grIsOdGXaKKL%2BaaGBTY724Eg3HA3tHtMS0idugeQ%2BLkmtp6ofOEeQNIozrdPCIeWCriWGErQ9ptHa39MfXgBx1ZmudjlQItPL%2B62yDU8hXduhTJ%2BbATSs8yO48KNcHiIwKugcrMtnHrdKLsPKNWvtr6P0WfdMdtHJfoSNfyom3uKQNKAAW14plb7riS1WR3zbpEce%2FhFhOwG6lHdai6lCcu34WnNA97V6HvBXCzwLvKyrVXwY%2BrvNwOi2wL5w41%2Fzd%2FeK%2F9iELqsvTvMBR7cYRm5R2fWmr6gLfGgaJK0d6R1P1J5yMIB6znBRxOqF7h0fi0lgnx3odp7PrLtMsohdpvh9MhDTfJ77GjWScusIgo4yqm%2Fgee2BAf84RIPvQ3mHM69xpR5uL1R3hynK%2BYZXDwjd4uUxTiL8FznyY4uLzYSCd83gCYyk4YusHEuSb5K0MQfkROhsIj3W9Gnb2lbbkbFBbnrOatcp96oxnucPjLxMI%2FPiMoGOqUB9joo3N8MLMQBvRsYpOfdQ6ezCUjxOxxGDDLV4hdCxZQHpEU3iAVwrXs%2BhiESkjRYlzFtprAiY9PAMjgfqIEaUpyZr3gUddw%2FwrkQnZiSyuhpLfnXnKpW03CDcdiEHQIa7FHTcUyC%2Bg3U9yM1NZtlI43uWSINMpiDK7ppwOC0Ls%2Fy3j49FD3HzjO2pACbtIMl4%2BA0eVETKQ8D3%2FKu6dMWjKFB9a%2Bz&X-Amz-Signature=8aa807d263e04b26a9e7003cf5bafa0fefe4e7699206625ec76c049a282129c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFNLZ2AW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH60qqXw02TkD704dJiyL1sbjRQXBcxKTWOpUmc8yRKYAiEAspJc0guiTuDeetHBvTPBi4kClzeiBrDd0DYoq7Bxrawq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDL%2BZj4l6B5rKdzEMSCrcAyOyJsU0uEi4UtpomXER5m0QZswdk8XglLIDAvFTb8k6sogjG29l2a8zuVt%2BqQCyffMkWPPftBmc3aDqpAlg6UGZ9dCID1MA5p1S71gfR8tqNEzlaTgqQPQNAhII3K0mTM7ok%2FiFfjW%2F3Gc5grIsOdGXaKKL%2BaaGBTY724Eg3HA3tHtMS0idugeQ%2BLkmtp6ofOEeQNIozrdPCIeWCriWGErQ9ptHa39MfXgBx1ZmudjlQItPL%2B62yDU8hXduhTJ%2BbATSs8yO48KNcHiIwKugcrMtnHrdKLsPKNWvtr6P0WfdMdtHJfoSNfyom3uKQNKAAW14plb7riS1WR3zbpEce%2FhFhOwG6lHdai6lCcu34WnNA97V6HvBXCzwLvKyrVXwY%2BrvNwOi2wL5w41%2Fzd%2FeK%2F9iELqsvTvMBR7cYRm5R2fWmr6gLfGgaJK0d6R1P1J5yMIB6znBRxOqF7h0fi0lgnx3odp7PrLtMsohdpvh9MhDTfJ77GjWScusIgo4yqm%2Fgee2BAf84RIPvQ3mHM69xpR5uL1R3hynK%2BYZXDwjd4uUxTiL8FznyY4uLzYSCd83gCYyk4YusHEuSb5K0MQfkROhsIj3W9Gnb2lbbkbFBbnrOatcp96oxnucPjLxMI%2FPiMoGOqUB9joo3N8MLMQBvRsYpOfdQ6ezCUjxOxxGDDLV4hdCxZQHpEU3iAVwrXs%2BhiESkjRYlzFtprAiY9PAMjgfqIEaUpyZr3gUddw%2FwrkQnZiSyuhpLfnXnKpW03CDcdiEHQIa7FHTcUyC%2Bg3U9yM1NZtlI43uWSINMpiDK7ppwOC0Ls%2Fy3j49FD3HzjO2pACbtIMl4%2BA0eVETKQ8D3%2FKu6dMWjKFB9a%2Bz&X-Amz-Signature=4cd968f8df84c3e442c12c68ee3b7affab0229eff7c40f2492ffc1c6dad202a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

