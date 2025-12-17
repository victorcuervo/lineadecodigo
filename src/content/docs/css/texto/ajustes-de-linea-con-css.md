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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4V2GR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgHYYgemj3HkWtDkEIkr%2FjTNjZq%2BdQHxugo%2B6oz8RjhAiEA1RcUlshpWOBDacsmHzvu0pRPpYd1PwKPp%2FhVvwCrgUwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCYJWrL7rfpidX7nKyrcA9hTmjy7N%2B68%2FJFziakz2pV%2B%2FnC%2BRKI1%2BznpAsxsPvQyG6y6w5neCoNfUT3nQjAkoKa04EOpEuCQBzl5LTGA3idYXcS8T76vGNHAyyoKtM7wo4muadZXmX7HFVTEH%2FWdWhqB6xyCTFWF3dJLYSuOZwPbpmOt16VbV11RG30hRGikWUpqHKRXSTg%2BXbYyE1C8mqBJ0MJnDOFjtKtcf%2BZMHeVbLpIkgI8LzXD7YkgCDJNc6JYr3t6qmvaly502mfPQo8hpXXZfuxBNZUQkDSFqQbSGDlK6DgODDX9ZzuHX9WFn2fRM5H17I%2BWyMekoC898VkuXs7FJwYMPlmZprRFez6PFshFYBsXrnaUKSemIEWEHLtH2pB1kJocXWOTQPC9j4ic2%2Ffrvbl%2FG0ms74pokkdGAQNJO66QX5RTFqHvm1RR4hR5l1bSQG6tc6TcC4BPDZ4%2B5Z3zLvSbhE5AHv%2Bo1DHRD88KrKvHhO8ZiX2nm3ddxqJJ5fmLHMF7Tj5pKgLk9UsXrJCJ0Iix5L1co1kIpR%2F%2FcjPbfFKImhAdcRA%2FGF0weBzViXpgylbHo02prAsFmX2zhOiu8dsLQb1KuBAsjSAI20EV3cO637zO6%2FI7YMvECDinv7IH%2BA9IhVT%2FsMMz6h8oGOqUBSm8kJ6sp2Tzoj3ybdUnk5PNj1CbJkC4l89EvVZU4ga%2BOsohV3JdcJbP5oMXRqGm4AXE36zPhf1NLk59GBBEZDXebc%2Fh4lw%2FuFSG70fswg7q%2BgJYmYUcLJfVn6iUilqKk4zcvAxotZ%2FiiIiYP2uoJuTLco%2BgPPom6f55WISzAO9bLkkbx%2Ff2o0u4uO7pIFFQFmXn4QvGc%2FcGdHcyuO7NB38deLKX8&X-Amz-Signature=2dccc01d590b5ba6c97482a5b968fefb810c9c8e5585bc51ad253996e5371588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDC4V2GR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGgHYYgemj3HkWtDkEIkr%2FjTNjZq%2BdQHxugo%2B6oz8RjhAiEA1RcUlshpWOBDacsmHzvu0pRPpYd1PwKPp%2FhVvwCrgUwq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCYJWrL7rfpidX7nKyrcA9hTmjy7N%2B68%2FJFziakz2pV%2B%2FnC%2BRKI1%2BznpAsxsPvQyG6y6w5neCoNfUT3nQjAkoKa04EOpEuCQBzl5LTGA3idYXcS8T76vGNHAyyoKtM7wo4muadZXmX7HFVTEH%2FWdWhqB6xyCTFWF3dJLYSuOZwPbpmOt16VbV11RG30hRGikWUpqHKRXSTg%2BXbYyE1C8mqBJ0MJnDOFjtKtcf%2BZMHeVbLpIkgI8LzXD7YkgCDJNc6JYr3t6qmvaly502mfPQo8hpXXZfuxBNZUQkDSFqQbSGDlK6DgODDX9ZzuHX9WFn2fRM5H17I%2BWyMekoC898VkuXs7FJwYMPlmZprRFez6PFshFYBsXrnaUKSemIEWEHLtH2pB1kJocXWOTQPC9j4ic2%2Ffrvbl%2FG0ms74pokkdGAQNJO66QX5RTFqHvm1RR4hR5l1bSQG6tc6TcC4BPDZ4%2B5Z3zLvSbhE5AHv%2Bo1DHRD88KrKvHhO8ZiX2nm3ddxqJJ5fmLHMF7Tj5pKgLk9UsXrJCJ0Iix5L1co1kIpR%2F%2FcjPbfFKImhAdcRA%2FGF0weBzViXpgylbHo02prAsFmX2zhOiu8dsLQb1KuBAsjSAI20EV3cO637zO6%2FI7YMvECDinv7IH%2BA9IhVT%2FsMMz6h8oGOqUBSm8kJ6sp2Tzoj3ybdUnk5PNj1CbJkC4l89EvVZU4ga%2BOsohV3JdcJbP5oMXRqGm4AXE36zPhf1NLk59GBBEZDXebc%2Fh4lw%2FuFSG70fswg7q%2BgJYmYUcLJfVn6iUilqKk4zcvAxotZ%2FiiIiYP2uoJuTLco%2BgPPom6f55WISzAO9bLkkbx%2Ff2o0u4uO7pIFFQFmXn4QvGc%2FcGdHcyuO7NB38deLKX8&X-Amz-Signature=c04411309ffcac915664a60ba958b804524dc12ac2d842c9aa280ac01351e173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

