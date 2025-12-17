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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGW52PJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH50%2B3BpB24LP%2FKXYmmCMDmfezq46cuG%2BM7bJ%2BNVyVyyAiBTK2YU6yMNMou86aZauKQVEw%2BvGHsszlmlgHHaXQnCoiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBSo%2Bxpgmg4PtKiH8KtwDZbBMLZzRTioRBbSYzlOCnDgok1UAMi%2BJoSgmfc6V%2BF%2FNnjULH9JciV8zbmAmNbrltO9hkaawiIQSg%2BEz5X76QfEF3LydHGqBxvBeEG7UP0x9guozFPKbJHQFnX5%2FDIdRgv%2B8iDYUP0cL24JP%2FpDhnshOyrOpxpfJd6f63urpcLe31OuORexRL66mpU6LfeBteJYl2JXYDwQECRHL4YBBvCqseXpnSTsHd7%2FznCuIfOQUT9VBc3h5peswrFi7NsBnIPIkoGqR%2BYl0YdikyNXkC%2FWf3VJgk7kxiL%2FcV3QQQNgQ0Ygyx76hf1phTUKvBtM0AuMu2e8C1mCdI%2BZr7tOT06vbEvVrBHXbSxX5AzfL24Mp0%2BJiHzNf4IUI6F7m1hWo67qHiuQ8MnQsy5wghLbgd4cnIujQZUmawk1NLKnzsknUBpLAFbjpMGK5ZbQNyN4sPv4Sq892H7bNs4ELZTgzEXI%2FcE%2FgWnI0fF4FrrM5Lz1QbZatO%2FbnymaV3u1g0HFFwp%2FW8bn8LGI0j%2FmHzg95geQjKD1oGq318CDsucqbOVOvntVvHD4sE6T%2B8phPKAuC%2FEy9FzYsstgg5T2%2FzvV8vnHLTQt3MbI%2BqDaN20fPYmoHdqpARukkgAaZGMwwnaCLygY6pgH8jdHdFcVr3%2FkXp7R5MN3wnUKFf9Up2S%2ByWnLsi9lZvn48xfGyHgI83BZQ1dosoNbVOHJRFG%2BcjWQw4ZHl2gyQ3we6Ib%2BCeLMSZ8b68Agusme4nu8JCPHXX0mFUAt49Z341dfB3nxoa7Ye%2FV9EC86Z0RAT4GEgtyrDQo29fhEZRdgkeDlx3ub%2FvNsDflDI%2F4MzG678am2dDfRuq57bxHk%2BOWzxEcS5&X-Amz-Signature=127c9c8a2312a54ef52d9df3ed04cf1263ecf6ed3915d7966c045a44afe4fbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWGW52PJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH50%2B3BpB24LP%2FKXYmmCMDmfezq46cuG%2BM7bJ%2BNVyVyyAiBTK2YU6yMNMou86aZauKQVEw%2BvGHsszlmlgHHaXQnCoiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBSo%2Bxpgmg4PtKiH8KtwDZbBMLZzRTioRBbSYzlOCnDgok1UAMi%2BJoSgmfc6V%2BF%2FNnjULH9JciV8zbmAmNbrltO9hkaawiIQSg%2BEz5X76QfEF3LydHGqBxvBeEG7UP0x9guozFPKbJHQFnX5%2FDIdRgv%2B8iDYUP0cL24JP%2FpDhnshOyrOpxpfJd6f63urpcLe31OuORexRL66mpU6LfeBteJYl2JXYDwQECRHL4YBBvCqseXpnSTsHd7%2FznCuIfOQUT9VBc3h5peswrFi7NsBnIPIkoGqR%2BYl0YdikyNXkC%2FWf3VJgk7kxiL%2FcV3QQQNgQ0Ygyx76hf1phTUKvBtM0AuMu2e8C1mCdI%2BZr7tOT06vbEvVrBHXbSxX5AzfL24Mp0%2BJiHzNf4IUI6F7m1hWo67qHiuQ8MnQsy5wghLbgd4cnIujQZUmawk1NLKnzsknUBpLAFbjpMGK5ZbQNyN4sPv4Sq892H7bNs4ELZTgzEXI%2FcE%2FgWnI0fF4FrrM5Lz1QbZatO%2FbnymaV3u1g0HFFwp%2FW8bn8LGI0j%2FmHzg95geQjKD1oGq318CDsucqbOVOvntVvHD4sE6T%2B8phPKAuC%2FEy9FzYsstgg5T2%2FzvV8vnHLTQt3MbI%2BqDaN20fPYmoHdqpARukkgAaZGMwwnaCLygY6pgH8jdHdFcVr3%2FkXp7R5MN3wnUKFf9Up2S%2ByWnLsi9lZvn48xfGyHgI83BZQ1dosoNbVOHJRFG%2BcjWQw4ZHl2gyQ3we6Ib%2BCeLMSZ8b68Agusme4nu8JCPHXX0mFUAt49Z341dfB3nxoa7Ye%2FV9EC86Z0RAT4GEgtyrDQo29fhEZRdgkeDlx3ub%2FvNsDflDI%2F4MzG678am2dDfRuq57bxHk%2BOWzxEcS5&X-Amz-Signature=b17410fe019b124e174c3307b175106902e00f2c6aeaba6bbfbae39dbf5d1b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

