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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR63R2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZvwxkVwot%2BrCzK2PXXy%2FXOxuLK09pnL5bQ62Iso0KkQIgbIYp3eP6I5jMoN9b9AzAJtSt7Cclor%2Fm9xhkpnY6sOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfuT8G1Xh3%2B3ewpCyrcA2E3TXV%2FdLEje5nkeV8YKdG93tdn2JxCAhEJCaoICjzTRS7390Jyh%2FX%2Bfe8d0lr2evDmwDiKiBZrmzeBQvWscbkZuWWNsLVjipqLanbllPjUqjSNNvbj1dfWv%2FGQW%2BvecwRZCKTQEc14MMvDe%2BIjx1zahq00epD0lHng%2F5A706%2BxkEjjRisANJpMsLn%2BvUbFyf%2BAa5wIm%2B4qENhLtAW1zOyHi1MjXTP%2B6VEWCIt%2Fr%2BaTaLzY7kXNCoLliQ3pQNq%2BAXFOSR5gAtn6nVGxVlW4Kp0k5aP45vq955nJH%2FOuqe%2FU5jeN%2B3lmAEVbzL1%2FiPD5O4HXuMw9N2eafw6agvPBwTR7nEfc9DwJIPzWdWDLCSLjCekOQEXMXiPOGPKd%2FB4yao9wmnp6qmft%2BUdGVjACIC7G4Iol47Fjl6E8STITYDfuqdqD%2BeIru5ymPKIFHmZo55a5kNNS%2BcKiIwbVtQpEA1jmserz4Y04qNzx0Ng%2FcQjMBDYiHtjj%2F%2BKYtodQiBm7WeNZPEII1erD%2FGy4wKy52xTRaB35mDNqJ7boM2TDQ7XL%2FUAzxxe3yyTrWLEh5YdnKoti8q9k7Ha1LsknGEBgEVLvFW%2B7MeyWLaeJWkYSV7SELfAd8LkpMNPfa74OMLiujMoGOqUBtR3mT0e9qStA%2FSKxcSQbH8TgwOkFMA0A%2Fs0zO4Ic695aw44OZNlW3SeEK3EUYzpRqjbXn%2BfxtCoPkVnHTYBGyZjZG9HLX1td9zazSZHO4umHMVkBSm69jda01rWrjmVHQ2Xt0MZbQVTmrLqwo5CJtIfwSo4l1gHPtLAhDDhFOQ%2BGPWMbemCxVqtIgc8ekHcR5EDfBOqJ3Gn6GfTwxSkBbcmm%2FG4M&X-Amz-Signature=779cfa18c27f154bc7bd92929e31b350ebb91a43debb43451a5c16160b4be51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR63R2Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZvwxkVwot%2BrCzK2PXXy%2FXOxuLK09pnL5bQ62Iso0KkQIgbIYp3eP6I5jMoN9b9AzAJtSt7Cclor%2Fm9xhkpnY6sOgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfuT8G1Xh3%2B3ewpCyrcA2E3TXV%2FdLEje5nkeV8YKdG93tdn2JxCAhEJCaoICjzTRS7390Jyh%2FX%2Bfe8d0lr2evDmwDiKiBZrmzeBQvWscbkZuWWNsLVjipqLanbllPjUqjSNNvbj1dfWv%2FGQW%2BvecwRZCKTQEc14MMvDe%2BIjx1zahq00epD0lHng%2F5A706%2BxkEjjRisANJpMsLn%2BvUbFyf%2BAa5wIm%2B4qENhLtAW1zOyHi1MjXTP%2B6VEWCIt%2Fr%2BaTaLzY7kXNCoLliQ3pQNq%2BAXFOSR5gAtn6nVGxVlW4Kp0k5aP45vq955nJH%2FOuqe%2FU5jeN%2B3lmAEVbzL1%2FiPD5O4HXuMw9N2eafw6agvPBwTR7nEfc9DwJIPzWdWDLCSLjCekOQEXMXiPOGPKd%2FB4yao9wmnp6qmft%2BUdGVjACIC7G4Iol47Fjl6E8STITYDfuqdqD%2BeIru5ymPKIFHmZo55a5kNNS%2BcKiIwbVtQpEA1jmserz4Y04qNzx0Ng%2FcQjMBDYiHtjj%2F%2BKYtodQiBm7WeNZPEII1erD%2FGy4wKy52xTRaB35mDNqJ7boM2TDQ7XL%2FUAzxxe3yyTrWLEh5YdnKoti8q9k7Ha1LsknGEBgEVLvFW%2B7MeyWLaeJWkYSV7SELfAd8LkpMNPfa74OMLiujMoGOqUBtR3mT0e9qStA%2FSKxcSQbH8TgwOkFMA0A%2Fs0zO4Ic695aw44OZNlW3SeEK3EUYzpRqjbXn%2BfxtCoPkVnHTYBGyZjZG9HLX1td9zazSZHO4umHMVkBSm69jda01rWrjmVHQ2Xt0MZbQVTmrLqwo5CJtIfwSo4l1gHPtLAhDDhFOQ%2BGPWMbemCxVqtIgc8ekHcR5EDfBOqJ3Gn6GfTwxSkBbcmm%2FG4M&X-Amz-Signature=4bad6e6a833ce926dd9aefa507796137f54e2e4acff8a8f3546a61a1e6e6e040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

