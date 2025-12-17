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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAPOFST%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5lSdQV%2FA%2FB%2BqtQnL7b30ErVT%2BlhB1yvo1Rm%2Btkie%2BwIgGTDFERMVVreyl7ATfcWw3o0E7MURFEbjUzNZeuvcO7Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPdzpjqB7XUzY%2BT4SrcA9M%2Fl0o70csgozxZtG9VdopcRDRyTQsUWf4xGJGxmmlP1bR1Jrr2on7T5k9ILWS53gLgvqHuolhUR9iCFKvUlB0mKMDUHbFObTy%2BwNbbh8v4%2B5X%2B5ichn1qw%2FJb%2Bf7dBRCNAvCTePVQSKqfvDdqMxz%2FajR2V%2FBswaipVHbDlU3noq4lzXuPEI6nYLG%2BLlJdn%2Fbw%2FMoZpzjgpVwaquumCrTOjsGfllfFXzebxRM%2FuhiVFpIs%2BHcQ%2FzhUYi8sd03BHIwjuvz7j2d2uUfAjg3GjBMpsZU6xaioPf05yyRU8gqARVs5knYw1FdnJQjPfqOp%2FT0HfeuGNYbDP3lBbgf3Vvvo7JiLeU7xmrzFhuQK8jFPt6KNf4nkTnbprPANmaEmVE05xF203yGgikXyd0NOlQdX3S9dJljb7LSk5aUFbwkDAFTCh5gezEduzMZTIU21WpN4bPfhl7LbaaIfTpzGP2bQuS5ApW1%2BWNgWbh9lDoRGm9mSBUMOgKPkslrik6Zdu96zh5Lu1smZ%2F95McVZ%2FdnsPaomr7soWIbePVFk8LFxKhuihaJBM4CynX8zKY%2FqdcSutUM3bMH35NH%2FT%2B9DgsbAEGY3wxuqMEDkoldtG%2Fz6qy1PnQDiqoOlHC3DtKMIzfh8oGOqUB%2BTM6IMdPPzACcx28RMW1IxzE%2F0DCj6hBGtUvT91VIXaBISJ2mH07lSH%2B0ftQFE4LLPi1td6xL0qgLSJpEhuX1%2Fjl7dFuMVcP8Rpcxa8UvStePxOMpKJ1PpaueHgoXySvTmT%2BRK%2FTKy3mXVh8T2F6jZR38mt3W4w8gV2AOvcwzf1hRls9Qi%2Bytm%2Fo42CgUFHLUgVbvZOuQ9xZhp9glDela%2FCYYzG%2B&X-Amz-Signature=97020c75c17844ccc694241929ffac0ab041a3e8260ec07758382bc0da2e7991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWAPOFST%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX5lSdQV%2FA%2FB%2BqtQnL7b30ErVT%2BlhB1yvo1Rm%2Btkie%2BwIgGTDFERMVVreyl7ATfcWw3o0E7MURFEbjUzNZeuvcO7Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOPdzpjqB7XUzY%2BT4SrcA9M%2Fl0o70csgozxZtG9VdopcRDRyTQsUWf4xGJGxmmlP1bR1Jrr2on7T5k9ILWS53gLgvqHuolhUR9iCFKvUlB0mKMDUHbFObTy%2BwNbbh8v4%2B5X%2B5ichn1qw%2FJb%2Bf7dBRCNAvCTePVQSKqfvDdqMxz%2FajR2V%2FBswaipVHbDlU3noq4lzXuPEI6nYLG%2BLlJdn%2Fbw%2FMoZpzjgpVwaquumCrTOjsGfllfFXzebxRM%2FuhiVFpIs%2BHcQ%2FzhUYi8sd03BHIwjuvz7j2d2uUfAjg3GjBMpsZU6xaioPf05yyRU8gqARVs5knYw1FdnJQjPfqOp%2FT0HfeuGNYbDP3lBbgf3Vvvo7JiLeU7xmrzFhuQK8jFPt6KNf4nkTnbprPANmaEmVE05xF203yGgikXyd0NOlQdX3S9dJljb7LSk5aUFbwkDAFTCh5gezEduzMZTIU21WpN4bPfhl7LbaaIfTpzGP2bQuS5ApW1%2BWNgWbh9lDoRGm9mSBUMOgKPkslrik6Zdu96zh5Lu1smZ%2F95McVZ%2FdnsPaomr7soWIbePVFk8LFxKhuihaJBM4CynX8zKY%2FqdcSutUM3bMH35NH%2FT%2B9DgsbAEGY3wxuqMEDkoldtG%2Fz6qy1PnQDiqoOlHC3DtKMIzfh8oGOqUB%2BTM6IMdPPzACcx28RMW1IxzE%2F0DCj6hBGtUvT91VIXaBISJ2mH07lSH%2B0ftQFE4LLPi1td6xL0qgLSJpEhuX1%2Fjl7dFuMVcP8Rpcxa8UvStePxOMpKJ1PpaueHgoXySvTmT%2BRK%2FTKy3mXVh8T2F6jZR38mt3W4w8gV2AOvcwzf1hRls9Qi%2Bytm%2Fo42CgUFHLUgVbvZOuQ9xZhp9glDela%2FCYYzG%2B&X-Amz-Signature=2bb1927a0d188973b9dd0c0002ba990304e820141f9e29831f1104655e04f3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

