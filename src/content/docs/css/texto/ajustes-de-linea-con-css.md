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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUURQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjk1Hb5jKW68ggP7MLfaWv7a0OVlZKCGrR%2F0zz9eO2wIgaTQBC1FXD%2Ftd44U%2F%2FvQ6w3ymBekY5XSxw2J%2BECcqbd0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNVZlKSMIIMixAbT%2FCrcA7zaATFifNtqyGuK4bB%2BSaIszuX3eyo7IipOeGMRALSsij%2B4lCyNtTbYrRMh8g5rLtYrhgzzUBaCC86rMbTU6V3NWMHfpyoZ5EZfYGXKKPjFugNuJjAq7%2FZypDYjJVqmvbKqZW8uxj%2F9BH6GiZvmjjMDTySF82wjziLYnBs37sTQp49%2FW9YVZZQXGgr3w10ITcYyAN5WLGvmM5%2FvDqV6jQBvojHy91dIataK1QsdEVgtPQ%2FHhknjQBPGROUAxkV5bjeHwnsYIQx7s06P5X5cCIug%2FeJ8RC%2FKCtQdipnqe4vrzXhuKBIHeb%2BzNlTIDOOetZM5H1p7ok%2BY5JhQ4iCfD6WG0O2C6JyXLTAmxBCihqQI5z7yWudAGLo9NWVLJk7KGrqVlxDBEUv65r2W%2BPrCnMmpWlPLXpWAFNpKyyu3tOEMOaSxsg6BByZliHjIuAZyJQ319sDikvMxHyz4k7NLCCcksnVytNVPQb%2FbOvhpHw2dNNE3XDGDwJgrkdG6DxWauTVDS6zA8j8f0FamGJw86uVbhpbLFko0MBjaBA1aCUhqHb%2BNNrMXgHWdEGDgNDb6G5mm5RFQAnWYMNVKspN460%2BGov4efFm1fnhhGiynwOb6KFBx4h2DR7OS4r7bMNCXiMoGOqUB4TBL9L73Tos%2BwK%2BROASvr3XZY2cMCaq9Miy8WrkncmzPKnHvPkTrOwgEg7KxDgEoF9BHD5iBGnqUZ8Rrw3243j9EL2hNfxTZseib4JsM9QC%2BVbbuqCUueoQiITnYL5Jpc5qKBRiQyns%2BoKlP50bL9uqNtkIOtjqaGWHiVFN7r5ScSMlzx%2BgYuws%2B%2BJ6ydi%2BwXEtogxlnCVdmIA33OG%2FXjuK714sy&X-Amz-Signature=106cb296756a2e7559861a89b911a84bcafad58033cb9a8ebf4c76a73d4d3aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUXUURQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxjk1Hb5jKW68ggP7MLfaWv7a0OVlZKCGrR%2F0zz9eO2wIgaTQBC1FXD%2Ftd44U%2F%2FvQ6w3ymBekY5XSxw2J%2BECcqbd0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNVZlKSMIIMixAbT%2FCrcA7zaATFifNtqyGuK4bB%2BSaIszuX3eyo7IipOeGMRALSsij%2B4lCyNtTbYrRMh8g5rLtYrhgzzUBaCC86rMbTU6V3NWMHfpyoZ5EZfYGXKKPjFugNuJjAq7%2FZypDYjJVqmvbKqZW8uxj%2F9BH6GiZvmjjMDTySF82wjziLYnBs37sTQp49%2FW9YVZZQXGgr3w10ITcYyAN5WLGvmM5%2FvDqV6jQBvojHy91dIataK1QsdEVgtPQ%2FHhknjQBPGROUAxkV5bjeHwnsYIQx7s06P5X5cCIug%2FeJ8RC%2FKCtQdipnqe4vrzXhuKBIHeb%2BzNlTIDOOetZM5H1p7ok%2BY5JhQ4iCfD6WG0O2C6JyXLTAmxBCihqQI5z7yWudAGLo9NWVLJk7KGrqVlxDBEUv65r2W%2BPrCnMmpWlPLXpWAFNpKyyu3tOEMOaSxsg6BByZliHjIuAZyJQ319sDikvMxHyz4k7NLCCcksnVytNVPQb%2FbOvhpHw2dNNE3XDGDwJgrkdG6DxWauTVDS6zA8j8f0FamGJw86uVbhpbLFko0MBjaBA1aCUhqHb%2BNNrMXgHWdEGDgNDb6G5mm5RFQAnWYMNVKspN460%2BGov4efFm1fnhhGiynwOb6KFBx4h2DR7OS4r7bMNCXiMoGOqUB4TBL9L73Tos%2BwK%2BROASvr3XZY2cMCaq9Miy8WrkncmzPKnHvPkTrOwgEg7KxDgEoF9BHD5iBGnqUZ8Rrw3243j9EL2hNfxTZseib4JsM9QC%2BVbbuqCUueoQiITnYL5Jpc5qKBRiQyns%2BoKlP50bL9uqNtkIOtjqaGWHiVFN7r5ScSMlzx%2BgYuws%2B%2BJ6ydi%2BwXEtogxlnCVdmIA33OG%2FXjuK714sy&X-Amz-Signature=c441fb6c5703a6e1b2e332371d442bbfceb499c8a9537a72147deebe9bf864fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

