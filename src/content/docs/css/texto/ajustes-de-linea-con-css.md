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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUCCCEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYcbF%2FrCbMtT6EK4PMmvoE1qD1KVyDxTtXJXQdemDpDAiAvGidKW47OkqcLZG7HUj5yHMIvJZvQahKea1FtR%2FS8HCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMjV7BXIXlv1znLlhBKtwDYFN5Fv700d8IgodWcQ9k9p%2FjIV%2FvNQG9WK5Y9hSKLcZCV0XT%2Fwgn04zdDGhVkXbycU7k0sRBuKMpMl91VHE6oaVl4IN92hdG07BGTzA9yhD21hxKwv3XwG8pm0k8N90sp1jjnPNExrT%2F85WbwhNzBcLr3udI%2BPAPiSgBvrAcCXJLe2K4qPUF88LHS%2BSnxLcgBD1qwQieObe5kdXa3XCl6BiVq%2Ft1IZPjXiMuQmvMmicMuQJUEgKTpnAWd6WrZ3d%2FTiXuiTSaJHz%2F1iELhYlD6B12iQoHNqdJo4vXWXBCzaxNiAglaC9yfH9VTZm5IB5Q5pFrQHf7yiAUNPF64quAnFB6vnsNPnUtfAA7FeWKtpmRWTYIeIGlLde%2FTZhYoQCkM6sEFQrYbV8XEf8kyXZA7as3duvQ7ACRVvm6yRozweMkXwaXe2fIrB3lqKLqCfnaWi%2FsgNHzFUuY1gQ5Pj14EVzdOqZ0OTwU2wimTGCKjR9XOi6nlVt7NX2WCfePon0ZY0otBHO7CVQhVDbyBUEgUALg3XfmIegFnWqWe0kQYwbf5R%2BMa7HJsrQ6xcEspSreBX1clW6949%2B%2BdnrY6B7RK3y7j1rwty4gP%2BbFkfSz0ic7hsu%2BBH554QW6uZ0wi%2F2HygY6pgElRvWA23hAfEhKceGslj3c7e4rptLXB7cKr3V0nuFABohvo6rAEGC4oMcpSYNY8%2BS9EpRDAp8AjLltuReACQTiVkK%2B1zctTX8fTmQOxy88ovKQb6q6okrI0A18lKE2122IgDOysGjPDDpy3x%2BQ%2F6CoUspFkeLKz9Em2Gv2CdZZdSKVfDeO88FUp3IdibFo2sBNxLJNmwtVrr9ZSdKfJ9pyknrMg5Jz&X-Amz-Signature=27d27795be51e087f5a6139480575b8a9a5112efd9ecfb294284ab1ef782c2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMUCCCEX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYcbF%2FrCbMtT6EK4PMmvoE1qD1KVyDxTtXJXQdemDpDAiAvGidKW47OkqcLZG7HUj5yHMIvJZvQahKea1FtR%2FS8HCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMjV7BXIXlv1znLlhBKtwDYFN5Fv700d8IgodWcQ9k9p%2FjIV%2FvNQG9WK5Y9hSKLcZCV0XT%2Fwgn04zdDGhVkXbycU7k0sRBuKMpMl91VHE6oaVl4IN92hdG07BGTzA9yhD21hxKwv3XwG8pm0k8N90sp1jjnPNExrT%2F85WbwhNzBcLr3udI%2BPAPiSgBvrAcCXJLe2K4qPUF88LHS%2BSnxLcgBD1qwQieObe5kdXa3XCl6BiVq%2Ft1IZPjXiMuQmvMmicMuQJUEgKTpnAWd6WrZ3d%2FTiXuiTSaJHz%2F1iELhYlD6B12iQoHNqdJo4vXWXBCzaxNiAglaC9yfH9VTZm5IB5Q5pFrQHf7yiAUNPF64quAnFB6vnsNPnUtfAA7FeWKtpmRWTYIeIGlLde%2FTZhYoQCkM6sEFQrYbV8XEf8kyXZA7as3duvQ7ACRVvm6yRozweMkXwaXe2fIrB3lqKLqCfnaWi%2FsgNHzFUuY1gQ5Pj14EVzdOqZ0OTwU2wimTGCKjR9XOi6nlVt7NX2WCfePon0ZY0otBHO7CVQhVDbyBUEgUALg3XfmIegFnWqWe0kQYwbf5R%2BMa7HJsrQ6xcEspSreBX1clW6949%2B%2BdnrY6B7RK3y7j1rwty4gP%2BbFkfSz0ic7hsu%2BBH554QW6uZ0wi%2F2HygY6pgElRvWA23hAfEhKceGslj3c7e4rptLXB7cKr3V0nuFABohvo6rAEGC4oMcpSYNY8%2BS9EpRDAp8AjLltuReACQTiVkK%2B1zctTX8fTmQOxy88ovKQb6q6okrI0A18lKE2122IgDOysGjPDDpy3x%2BQ%2F6CoUspFkeLKz9Em2Gv2CdZZdSKVfDeO88FUp3IdibFo2sBNxLJNmwtVrr9ZSdKfJ9pyknrMg5Jz&X-Amz-Signature=8112f6a23a5d6c5335c003fb246e38a168a90a0876dbb1e323c96ac99d87c156&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

