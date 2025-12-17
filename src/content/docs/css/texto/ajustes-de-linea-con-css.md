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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLD325LL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8XB7CSB4hPnE0yvHj3DU5hVfOTW4xwJiKGtwnN9lU3AiApCXAaf8G3hD2m8VKxCtlKg61Jn4xsb723j01OGZOIZCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQuXsjaTluPQyISUAKtwDWeSNImKx5WFkzyfo%2BDgK5WpovAxtyGcaH2lNz7C2lI35oXShYhJGxnbi%2FC%2B6l454BBm6Y4Jne8BcapG6b8rH%2Fy39eHBW70NO0dP2EMISMLVX5A7hCAvWhQuF9Ek47sjZqLikgTutWQNfYoWaK4giLvJIp6icl2ads8s%2Fr%2BpTqQBFh2I8VeIpfqQR%2FKpljXuQAdevPevYPGOr3X4tYt4jjZGf2qkhVCCiPx4J0dKaUJ9%2BVfwWQLSrJqcBpv%2BG%2Fe366%2BCLfupDjHLWH48Okd1nXhi3HXZvlMqL75NhtI%2FKmtdeknltvqo%2FZ16eFGfryIaJ73rt6ZppgBXYsrZsk2jkEyw0lh0mvd6BIvskmTwDWafh%2BxWBxhrmdE%2Bs4eRl%2FUmFWM6nj5zc8Cv97Jh52YxK6BXdgCveJwyx8erNPzl2aKvMugf0M3pGiTFRjGf1KXhISS7SU9Gyvf3jm7CiYE%2FELMIJ8LEUynr5qGaZwgvvGreJ78aok%2Bb%2BXeezeB27izz5SaIBkChjsJTbbyV8b7aZvp9tmUob8BDrh1669b2CHZrbEU7XjeUelPUyPn71nRJfXtcDZ3QiUn%2F6OXHIXbda%2FHs9EIdhk4SgF24G4A0lQ6NeWgWSRtw6h7kdYXAwqK6MygY6pgElMGGA%2F%2B8Aaz1gcw5gDZJEuNYJN9Bv0VpVHOWd4yFxt3xe9NxqInqM160%2BSmxnAXNK97J0puPdGntDiuXJqKIo69Cs47PKVC%2FG%2BNAs%2F%2BX6kH86s8OT4VWsIQGa7lPCrlwAdC6yMvqn2Csnf9yGBrhUUBW11B2BIcY9x8c2EV4Jrd4Z%2FVWDrDNSYzW5vg0j1pnFRdYyUdwcPYn3T%2FFRSojnPsNMtCR2&X-Amz-Signature=b1499e7580e0daf236ed3379cda61ffc52d71106bd400c9984b1ac7d1787c30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLD325LL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC8XB7CSB4hPnE0yvHj3DU5hVfOTW4xwJiKGtwnN9lU3AiApCXAaf8G3hD2m8VKxCtlKg61Jn4xsb723j01OGZOIZCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQuXsjaTluPQyISUAKtwDWeSNImKx5WFkzyfo%2BDgK5WpovAxtyGcaH2lNz7C2lI35oXShYhJGxnbi%2FC%2B6l454BBm6Y4Jne8BcapG6b8rH%2Fy39eHBW70NO0dP2EMISMLVX5A7hCAvWhQuF9Ek47sjZqLikgTutWQNfYoWaK4giLvJIp6icl2ads8s%2Fr%2BpTqQBFh2I8VeIpfqQR%2FKpljXuQAdevPevYPGOr3X4tYt4jjZGf2qkhVCCiPx4J0dKaUJ9%2BVfwWQLSrJqcBpv%2BG%2Fe366%2BCLfupDjHLWH48Okd1nXhi3HXZvlMqL75NhtI%2FKmtdeknltvqo%2FZ16eFGfryIaJ73rt6ZppgBXYsrZsk2jkEyw0lh0mvd6BIvskmTwDWafh%2BxWBxhrmdE%2Bs4eRl%2FUmFWM6nj5zc8Cv97Jh52YxK6BXdgCveJwyx8erNPzl2aKvMugf0M3pGiTFRjGf1KXhISS7SU9Gyvf3jm7CiYE%2FELMIJ8LEUynr5qGaZwgvvGreJ78aok%2Bb%2BXeezeB27izz5SaIBkChjsJTbbyV8b7aZvp9tmUob8BDrh1669b2CHZrbEU7XjeUelPUyPn71nRJfXtcDZ3QiUn%2F6OXHIXbda%2FHs9EIdhk4SgF24G4A0lQ6NeWgWSRtw6h7kdYXAwqK6MygY6pgElMGGA%2F%2B8Aaz1gcw5gDZJEuNYJN9Bv0VpVHOWd4yFxt3xe9NxqInqM160%2BSmxnAXNK97J0puPdGntDiuXJqKIo69Cs47PKVC%2FG%2BNAs%2F%2BX6kH86s8OT4VWsIQGa7lPCrlwAdC6yMvqn2Csnf9yGBrhUUBW11B2BIcY9x8c2EV4Jrd4Z%2FVWDrDNSYzW5vg0j1pnFRdYyUdwcPYn3T%2FFRSojnPsNMtCR2&X-Amz-Signature=ad7e2fd3a2badd0f7e850318912d5d777605afee6e767d43a231aea3ad0510b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

