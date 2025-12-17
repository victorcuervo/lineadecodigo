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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U427B7CJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5DqTxFCMz0P5N7r7OtsILkWmY8sqUrkywUN0xUBuAkQIgCQTwcjXYE7NqFGZq7BgRBtHh%2F8MwomD1rUj72MDBxBcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKSxiCkdERw1EDjF3CrcA7H1QdlE9dn%2F7dj926%2FvwOfttKqtSuEF6PDF%2BaJw2bCXv0cFcy%2Fsd9Ope1abc1A2VzzCKmoFhzJSGza%2FYe327bEVq4qVhLZ5zWCmtG4uw4DZmjcsFx0lKshe8SeCVUWUGwqjNeDx1uSc7jrYSxs5ylRCxnFnLTaignbNZkELRy%2BuIH2zAgapX3K8fHX8BpjhNQ4ZPttq7RfbhKnXCk4s8WahTwDG4HYUPBiMffqK6L5Ejc4lXKW1KEcBXangczQG2ooqADlrpaJ4v1rbFbkYK03sSu97DpIWYFov9ZmznWr%2B%2FusZOQpir26kwbzNpkH5saGMojf%2BHViE3etuySK6m7tPTivBSNYUaqy7kRCB1K1k6IKjIubi0g2%2BRUmBcDi%2BG44X2rQ1E6bOEsRLnJveuCV85c84on9R52%2BOmF8kLKajM8nuAMTiLGN2YqrlqpWbtKICbJ%2F6bXv27pbETea%2FNLP0gpYwGRGnO1omzfAYcoJ5WI6aDPT0SO%2Fxk%2BWgDhmM%2FKRJ6rCrIu2RPCk8ELY01e2v9QdpG3RYFQANn3WLDaYmEKFVbtcXkKc7Iu%2BJdC8xFjsdVySUaisNtLiMX10nfff2mazxru5JWSTTqs%2Bvrs2sIlubtBIl0%2BroCUNMMLydicoGOqUBc8rNpoW3e6xLpYQR44HP2xn5MQH7F4Nb0PrF5hHeXkdD24ALOr1OO4gvw%2BYcJyZuEdkcAoDPlxcL35UUxukXsXexP2s1nCU4DLRLQ3RXJATALK%2BKM5n2I0zjjwT3ZUCVNGgsuCFbXAuhwtqPxL3jTWtbXEl98IuNCyngcnG%2F5rGbfQp3pOZx3Z9%2FboeoRmWsXYHzMgcjur59jUfadyRA1Nize4h4&X-Amz-Signature=d4fd06f27f63ce1973fd50cacac145b8cf35578d6dcd18b443b7347ef0bee786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U427B7CJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5DqTxFCMz0P5N7r7OtsILkWmY8sqUrkywUN0xUBuAkQIgCQTwcjXYE7NqFGZq7BgRBtHh%2F8MwomD1rUj72MDBxBcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKSxiCkdERw1EDjF3CrcA7H1QdlE9dn%2F7dj926%2FvwOfttKqtSuEF6PDF%2BaJw2bCXv0cFcy%2Fsd9Ope1abc1A2VzzCKmoFhzJSGza%2FYe327bEVq4qVhLZ5zWCmtG4uw4DZmjcsFx0lKshe8SeCVUWUGwqjNeDx1uSc7jrYSxs5ylRCxnFnLTaignbNZkELRy%2BuIH2zAgapX3K8fHX8BpjhNQ4ZPttq7RfbhKnXCk4s8WahTwDG4HYUPBiMffqK6L5Ejc4lXKW1KEcBXangczQG2ooqADlrpaJ4v1rbFbkYK03sSu97DpIWYFov9ZmznWr%2B%2FusZOQpir26kwbzNpkH5saGMojf%2BHViE3etuySK6m7tPTivBSNYUaqy7kRCB1K1k6IKjIubi0g2%2BRUmBcDi%2BG44X2rQ1E6bOEsRLnJveuCV85c84on9R52%2BOmF8kLKajM8nuAMTiLGN2YqrlqpWbtKICbJ%2F6bXv27pbETea%2FNLP0gpYwGRGnO1omzfAYcoJ5WI6aDPT0SO%2Fxk%2BWgDhmM%2FKRJ6rCrIu2RPCk8ELY01e2v9QdpG3RYFQANn3WLDaYmEKFVbtcXkKc7Iu%2BJdC8xFjsdVySUaisNtLiMX10nfff2mazxru5JWSTTqs%2Bvrs2sIlubtBIl0%2BroCUNMMLydicoGOqUBc8rNpoW3e6xLpYQR44HP2xn5MQH7F4Nb0PrF5hHeXkdD24ALOr1OO4gvw%2BYcJyZuEdkcAoDPlxcL35UUxukXsXexP2s1nCU4DLRLQ3RXJATALK%2BKM5n2I0zjjwT3ZUCVNGgsuCFbXAuhwtqPxL3jTWtbXEl98IuNCyngcnG%2F5rGbfQp3pOZx3Z9%2FboeoRmWsXYHzMgcjur59jUfadyRA1Nize4h4&X-Amz-Signature=4c9a7f328425da8aee38b48036d115d1cbfec6edbb66cd64b288129b9427051d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

