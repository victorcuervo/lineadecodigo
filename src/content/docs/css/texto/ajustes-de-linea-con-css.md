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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXYZGRKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ONZlLqjV6zoyP34KKyBTBMIdGYdb1dhkWR%2BjZFWu7wIgcKP0qi0nEHraaY7jt8KMAPRPWm%2BQnMAF5C7Wp2p37JUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIZODhANf%2BDSutRQXSrcA3hEi6vG4LV%2Fyy4gL32WPBQAiA%2B7T1k61id3N3elF1W1GdpQ3txOeaR178JvVMZSyGaKwpdQ91IW3qV941FJ5TLGewsT9ommknhtek64zl8aJkv0%2F%2FkmepiqeicCFAoN2wzxw4ulIHHTMbTxafmLPQScuYLPKs7eony%2FabaGIqLZd8%2BRdM57O15IzDP4AzoD51OcLpfKddY3Qse9zTQ3zL8zcxufTIh1ZMizl5Ak%2FAO3mu%2F9XaLgNSDJS0j7AdY9v2q2V%2Fwen3%2BtsX3bm4u4%2B6Q3Rl2yo9xyCxbP8Ti1EFudJ6ya0krZlMY8P17u7s1%2B2pxn04pLpDq3z9y%2BTrfEkNEfHHsBjW2%2BWh%2BOWOLog6Ri4qy6g12bYf7kd0qTMny10dGuR83%2BXb9U8hKDxQyCPoUIbzfyUJhd0BDUxNxfaUBW3XbQY%2FQKKjTKuKj%2BHunGoKbxoIZ84zoP%2Bi8AWwE2Dxaq1UYnrGFZ%2BkGgnxN660HxS%2FnImcj2SM8SqdSG%2B%2Benh9rbF6l84ODg%2Bzpr4awL5qFm%2BRXmRL6FheKBvrAx2MLTWvoeL75Hj7QxmobcyBOeSGtPW9tpf9x13MitAVJE7bdo3k1fLlHGUuI%2FPVy7v7Hsw6ZtPIS5sYZn6E6oMKzfh8oGOqUB4vuijYuzXJctUuOKooV34zLfU94vv5odp38JFrYFxLM8FXkvEuoV8D9MIoRFK0tK4eySc4rSwsfwCVaRqEWVngRyLmSDkHPKrZZ0P5Z0lEZQJ45Rwk3C9zkzcQ3t6z50mS4Y270kCbwt1iM7v09NfmtdwnU2qdFgRq%2BEKWQPeP2pjMxAp3IqesXpbvCWhoMB47KO7JX%2FSKku7lpbzqCzzoj3riCc&X-Amz-Signature=1598bdcf9f45180a36dd0fbc935b894e7b7e8fcdf1bb7a2cf429a362c00a6c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXYZGRKP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ONZlLqjV6zoyP34KKyBTBMIdGYdb1dhkWR%2BjZFWu7wIgcKP0qi0nEHraaY7jt8KMAPRPWm%2BQnMAF5C7Wp2p37JUq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIZODhANf%2BDSutRQXSrcA3hEi6vG4LV%2Fyy4gL32WPBQAiA%2B7T1k61id3N3elF1W1GdpQ3txOeaR178JvVMZSyGaKwpdQ91IW3qV941FJ5TLGewsT9ommknhtek64zl8aJkv0%2F%2FkmepiqeicCFAoN2wzxw4ulIHHTMbTxafmLPQScuYLPKs7eony%2FabaGIqLZd8%2BRdM57O15IzDP4AzoD51OcLpfKddY3Qse9zTQ3zL8zcxufTIh1ZMizl5Ak%2FAO3mu%2F9XaLgNSDJS0j7AdY9v2q2V%2Fwen3%2BtsX3bm4u4%2B6Q3Rl2yo9xyCxbP8Ti1EFudJ6ya0krZlMY8P17u7s1%2B2pxn04pLpDq3z9y%2BTrfEkNEfHHsBjW2%2BWh%2BOWOLog6Ri4qy6g12bYf7kd0qTMny10dGuR83%2BXb9U8hKDxQyCPoUIbzfyUJhd0BDUxNxfaUBW3XbQY%2FQKKjTKuKj%2BHunGoKbxoIZ84zoP%2Bi8AWwE2Dxaq1UYnrGFZ%2BkGgnxN660HxS%2FnImcj2SM8SqdSG%2B%2Benh9rbF6l84ODg%2Bzpr4awL5qFm%2BRXmRL6FheKBvrAx2MLTWvoeL75Hj7QxmobcyBOeSGtPW9tpf9x13MitAVJE7bdo3k1fLlHGUuI%2FPVy7v7Hsw6ZtPIS5sYZn6E6oMKzfh8oGOqUB4vuijYuzXJctUuOKooV34zLfU94vv5odp38JFrYFxLM8FXkvEuoV8D9MIoRFK0tK4eySc4rSwsfwCVaRqEWVngRyLmSDkHPKrZZ0P5Z0lEZQJ45Rwk3C9zkzcQ3t6z50mS4Y270kCbwt1iM7v09NfmtdwnU2qdFgRq%2BEKWQPeP2pjMxAp3IqesXpbvCWhoMB47KO7JX%2FSKku7lpbzqCzzoj3riCc&X-Amz-Signature=cb804d99bf950bd640cc8bf09809892ce06ab7e9e7d88e510c5559371b6f1bf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

