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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q7IG6I7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg1qA%2Bqvjl7rqlHZcRaEs5xU5nGyIUxOJx7GcxlQjkaAIgVPwQf3RRcmnoC4InIeCMWlJMdsYrmyWHHhRakL4O7gEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDId8gPkIOBWZtpMLuCrcA2iEsKaas4u8irBVQDIsxvJ%2FYCoqdLRaPrkws6OYiv%2BA00oll6tdhP0%2FxEKjlw8WvGABemfeCLjZ%2BzRCqB%2BhhcQ0NhUferXZeNcAC5HVetFeEJsaM%2F2WkVWqDiemgXIm85cRHKfR3qawQgNl6y7uLF3K1Fic7UTz4Blt3MBHy8orz6cu%2FY8Nc1oY34M%2FKqm%2B2eDWUATd06Q7KLqzBbBMPxsxdr5zDrpQPih0oLi0JESALbVrvfHLfZOmhaHTOTgZ%2BccpKaaG%2B8%2BKAPQ3VtyLDTl9h2ycuGcg60n6hpxFIQ8bgYS5lytSD8KKDC79Oq2MprnpdG9g7btfN84j6YLdz5pdLprU1XLD8qoZO5gL2mJ47NkAgWzuFQYo%2FOke5fR6JTzZGziGWVw00YkZcaGv2O9VGWDYjDJDiNbKgLve5w8xpu2HvSJ%2FLRxHyOzx58ZNQIEbc2O9gyOptM%2BlB9qCzspAQVdbrcioyCxpJTVGorSdX1k8KahMv%2BKtId8OFBZFq3DtPav60X9MMsA7LVMV%2BLZufqTUhsMs5IQRfDe5eB25ccr%2FFVLj6kdzrVOwe2OJ%2Fsv7Lf5cgEtX6JOBXDwxH69e9DVodsojhovdXTyRxh4UlSJGoKQKDraaE%2FAoMKnhisoGOqUBFbeYRzqWcKDyZIvLbUR%2F7p1IYn0BQCmTevwJg5jv%2BOv6x5qn0juSn6J%2FTpnN3ls8AYGzP9lAjUAtRN0bgdHqi4mY5qfCvRFPrS95CWQQuEzHdlvPUj2%2FY8%2BpdIi6qvfqget1WhbVa0telMkEDZgxkLBgCNZ7%2F3aWAzOhmgEnkKqu%2FrZJOgS4mOARAOIZdIrLGnx79eDQI%2B8XKTM24upNmtML5K%2B5&X-Amz-Signature=9d91d4d547a06a1bcc4e3f875e23fb92d3ffd7712f03f43b9f749e4e1c166249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q7IG6I7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDg1qA%2Bqvjl7rqlHZcRaEs5xU5nGyIUxOJx7GcxlQjkaAIgVPwQf3RRcmnoC4InIeCMWlJMdsYrmyWHHhRakL4O7gEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDId8gPkIOBWZtpMLuCrcA2iEsKaas4u8irBVQDIsxvJ%2FYCoqdLRaPrkws6OYiv%2BA00oll6tdhP0%2FxEKjlw8WvGABemfeCLjZ%2BzRCqB%2BhhcQ0NhUferXZeNcAC5HVetFeEJsaM%2F2WkVWqDiemgXIm85cRHKfR3qawQgNl6y7uLF3K1Fic7UTz4Blt3MBHy8orz6cu%2FY8Nc1oY34M%2FKqm%2B2eDWUATd06Q7KLqzBbBMPxsxdr5zDrpQPih0oLi0JESALbVrvfHLfZOmhaHTOTgZ%2BccpKaaG%2B8%2BKAPQ3VtyLDTl9h2ycuGcg60n6hpxFIQ8bgYS5lytSD8KKDC79Oq2MprnpdG9g7btfN84j6YLdz5pdLprU1XLD8qoZO5gL2mJ47NkAgWzuFQYo%2FOke5fR6JTzZGziGWVw00YkZcaGv2O9VGWDYjDJDiNbKgLve5w8xpu2HvSJ%2FLRxHyOzx58ZNQIEbc2O9gyOptM%2BlB9qCzspAQVdbrcioyCxpJTVGorSdX1k8KahMv%2BKtId8OFBZFq3DtPav60X9MMsA7LVMV%2BLZufqTUhsMs5IQRfDe5eB25ccr%2FFVLj6kdzrVOwe2OJ%2Fsv7Lf5cgEtX6JOBXDwxH69e9DVodsojhovdXTyRxh4UlSJGoKQKDraaE%2FAoMKnhisoGOqUBFbeYRzqWcKDyZIvLbUR%2F7p1IYn0BQCmTevwJg5jv%2BOv6x5qn0juSn6J%2FTpnN3ls8AYGzP9lAjUAtRN0bgdHqi4mY5qfCvRFPrS95CWQQuEzHdlvPUj2%2FY8%2BpdIi6qvfqget1WhbVa0telMkEDZgxkLBgCNZ7%2F3aWAzOhmgEnkKqu%2FrZJOgS4mOARAOIZdIrLGnx79eDQI%2B8XKTM24upNmtML5K%2B5&X-Amz-Signature=aa8d376f34cbd27e2452c8992e421a84a22dbb8f6442536a2a8943c41edb302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

