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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G57WKWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUnR8Rjm8nREPwl%2BOOx%2BLu3EJqHZSt%2FxMu2kzUtsjurAiEAsrQ5%2By52TGoRRGa8Tl7gcfjR%2FWPGUlxohZv3tUKpZ%2BgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJVn4z8gJeliV8WNCrcA90otIy%2BETAxupwbJ6PiKDSIUhgVNsR2pU0vroMe%2FwhSWqzCsqj5mhY1fMx8XZii0pG%2Fq1aJM4yYkm%2F05cFrDOWZXNS8GKuzZLT107Cdr6kw%2FNUfm3U0xfpiXA153JXFNprdtN0R4%2Fp3rn2lt%2BvLGMYUFTc3GtKIDln0KcwlIWa3q%2B7Nyf%2BmAWz4e1xLRDwSURvjC%2Bp%2FGdjNjDXcdHUxEnjjiy1yOGBclBr%2FWRdQzSsA7yM8muxbYZ13MtiAmTLj7wUW%2B%2BoRHmgdDUhXc%2BHC6XKScby4yeBClZmD6qRGF6ya0ys%2BqQ30nTfWdw8jAaVj9XJcubFTCDC8cwn39fpx5vz6F1rzHJhC6g0I%2F19f%2Bdwz3nhxZANvJEQHUDWSQUhFUmxXErWdhwxMbQMbysd1HhU0tIlYtFw0ud2bty2bi4G5DqYGC0E%2BqtkxBmhWz3Q%2FLJWLYRiv2jJ1%2FK2bzGEigtgwivzFiC%2FoNBNljp%2BjEaACSMjF1F2XEkiMtu2%2B8di%2FasPB5tjMgZCQR34%2FHJeITcscQJTxfhl5FdsL0BlsmG2B8MEu9l6kc7I5RqdsrRE%2FDfnX5tlgq%2FsxmE5rho14dq5c5IAAba1hDAxfTmlHfc%2FJLd%2BZSBxg5q8aTXKrML%2BLjMoGOqUBlj5LU%2BcMsL%2FhSZBbgtHsX0HwY9LzhblinjAZeBpvxAYnSRQWVxCZjRnYK9e9qwGIXndkycY3H6URdxnjaCesdLN0HCcgeluQqNc8PiGzkM%2FI4Gp%2BQT1OwDjjMlEAgD9SbE9Hoq6yRhtliXfajBXYgFsbgVhiCaAFSXiGumzRdPYiXWJcz%2BXZe2yYCk1Jj5YR5wdwq7IZmnabVbCzKyX92F17vm7q&X-Amz-Signature=b353a9e049e124568d796d422b488dd0b421e3e81848c67d0a5f85d2cdbf1296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G57WKWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUnR8Rjm8nREPwl%2BOOx%2BLu3EJqHZSt%2FxMu2kzUtsjurAiEAsrQ5%2By52TGoRRGa8Tl7gcfjR%2FWPGUlxohZv3tUKpZ%2BgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJVn4z8gJeliV8WNCrcA90otIy%2BETAxupwbJ6PiKDSIUhgVNsR2pU0vroMe%2FwhSWqzCsqj5mhY1fMx8XZii0pG%2Fq1aJM4yYkm%2F05cFrDOWZXNS8GKuzZLT107Cdr6kw%2FNUfm3U0xfpiXA153JXFNprdtN0R4%2Fp3rn2lt%2BvLGMYUFTc3GtKIDln0KcwlIWa3q%2B7Nyf%2BmAWz4e1xLRDwSURvjC%2Bp%2FGdjNjDXcdHUxEnjjiy1yOGBclBr%2FWRdQzSsA7yM8muxbYZ13MtiAmTLj7wUW%2B%2BoRHmgdDUhXc%2BHC6XKScby4yeBClZmD6qRGF6ya0ys%2BqQ30nTfWdw8jAaVj9XJcubFTCDC8cwn39fpx5vz6F1rzHJhC6g0I%2F19f%2Bdwz3nhxZANvJEQHUDWSQUhFUmxXErWdhwxMbQMbysd1HhU0tIlYtFw0ud2bty2bi4G5DqYGC0E%2BqtkxBmhWz3Q%2FLJWLYRiv2jJ1%2FK2bzGEigtgwivzFiC%2FoNBNljp%2BjEaACSMjF1F2XEkiMtu2%2B8di%2FasPB5tjMgZCQR34%2FHJeITcscQJTxfhl5FdsL0BlsmG2B8MEu9l6kc7I5RqdsrRE%2FDfnX5tlgq%2FsxmE5rho14dq5c5IAAba1hDAxfTmlHfc%2FJLd%2BZSBxg5q8aTXKrML%2BLjMoGOqUBlj5LU%2BcMsL%2FhSZBbgtHsX0HwY9LzhblinjAZeBpvxAYnSRQWVxCZjRnYK9e9qwGIXndkycY3H6URdxnjaCesdLN0HCcgeluQqNc8PiGzkM%2FI4Gp%2BQT1OwDjjMlEAgD9SbE9Hoq6yRhtliXfajBXYgFsbgVhiCaAFSXiGumzRdPYiXWJcz%2BXZe2yYCk1Jj5YR5wdwq7IZmnabVbCzKyX92F17vm7q&X-Amz-Signature=c5bb733772cde0c37b3eaaec550f16a63af789575a0d6bb5a2c94dcd450e4c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

