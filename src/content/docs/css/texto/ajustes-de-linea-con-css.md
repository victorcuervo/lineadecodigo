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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NB3IBPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICM60p51fh1nDLSirotiCG4hCbQoBXfDXirgOb%2FtmchGAiEAlfX%2BtTPYF6Yz70izJK0CwcoHGaKF%2FeXcF%2BqhcJTmaGIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB3GVslPN4b72K%2BKzCrcA32Zhb6pTU7CLrjKfwSK6dMZ2ekyVnQjAZdH2%2B%2FvayGuNsdTy6zJkfv6ONnMRg5rDHit9ll%2FnCgEMCwQDZSfcusmG0V7O20H9IWZh5aDqcsuo4IGn3i5ODtd4JwR%2B5MpxGp8eqiBG%2FOJ%2BENIZ3oz61P%2Bam9R3QuSuw1glJmBeqIVNCJtlFOtSWCtDCGq6CPouY%2BhcX3gz1ShOGJdhacBkn%2BohOmBl7bSqFF7wK1KrUT8LEIzHdCWvUQ7KJLlpa5RJqVfpAh8xEpRF1K9TJs0M6f%2F%2BktyBPyaqQ3%2FN%2BHrSayePRvmDkC%2FtH6CdvjVq7C6WETUm9AknPlWyOsc3UwzMdBkgjeiYCyhz%2B2J7XYCjsvLpqYriCt%2Bmq58h3ItwZVEEqbDo%2BaOugENQlDBjcUtBd1V55%2BurJYs9xcdLcotwLuwQ3nxzSFvArdz0pHDPC0RV1FKgVS4ixKm0rpHwMsmOQFOMK6I2ee9Rg9ex%2BGU5%2Bj1X5em8zBhqRRQ%2BAyhoyLm4ObDU7ZAGXy4Eb2d42TL8XzworaaVy4iAC%2Bh6y7TAreAe0d4WpjXi11AgaiG4YKJMS0y0upRB4xO4Jwb8tyDDAicQdKY%2BF6USDGVkg6n8oUVlfOYZc0AGTImFYRyMNrqiMoGOqUB%2FrWkHjnvoH44ySH%2FOD0W4xLPGTWY5Ka1oC5OSfzIe33STRmxIvcW2eyEzr1lmJGniaD6ranXOJqAOb%2BysUJB%2FaaU4uu%2Bfg5QKnZ8jVNvKn02IQggKAvBKO67feQFHvQn80sBj%2B6fby1yhz3cBbQYvIILWDFaD16m34Ckng61902%2Fb8Ve2B9%2FTk91DjFB%2FJP7j%2Bo%2FqiD90T1ZXnlyGWkLco%2FW6CJW&X-Amz-Signature=fa1b02f894d20bbd412b18ff9f78a8f23489a9e3709a995870b6508c1ecde189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NB3IBPK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICM60p51fh1nDLSirotiCG4hCbQoBXfDXirgOb%2FtmchGAiEAlfX%2BtTPYF6Yz70izJK0CwcoHGaKF%2FeXcF%2BqhcJTmaGIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDB3GVslPN4b72K%2BKzCrcA32Zhb6pTU7CLrjKfwSK6dMZ2ekyVnQjAZdH2%2B%2FvayGuNsdTy6zJkfv6ONnMRg5rDHit9ll%2FnCgEMCwQDZSfcusmG0V7O20H9IWZh5aDqcsuo4IGn3i5ODtd4JwR%2B5MpxGp8eqiBG%2FOJ%2BENIZ3oz61P%2Bam9R3QuSuw1glJmBeqIVNCJtlFOtSWCtDCGq6CPouY%2BhcX3gz1ShOGJdhacBkn%2BohOmBl7bSqFF7wK1KrUT8LEIzHdCWvUQ7KJLlpa5RJqVfpAh8xEpRF1K9TJs0M6f%2F%2BktyBPyaqQ3%2FN%2BHrSayePRvmDkC%2FtH6CdvjVq7C6WETUm9AknPlWyOsc3UwzMdBkgjeiYCyhz%2B2J7XYCjsvLpqYriCt%2Bmq58h3ItwZVEEqbDo%2BaOugENQlDBjcUtBd1V55%2BurJYs9xcdLcotwLuwQ3nxzSFvArdz0pHDPC0RV1FKgVS4ixKm0rpHwMsmOQFOMK6I2ee9Rg9ex%2BGU5%2Bj1X5em8zBhqRRQ%2BAyhoyLm4ObDU7ZAGXy4Eb2d42TL8XzworaaVy4iAC%2Bh6y7TAreAe0d4WpjXi11AgaiG4YKJMS0y0upRB4xO4Jwb8tyDDAicQdKY%2BF6USDGVkg6n8oUVlfOYZc0AGTImFYRyMNrqiMoGOqUB%2FrWkHjnvoH44ySH%2FOD0W4xLPGTWY5Ka1oC5OSfzIe33STRmxIvcW2eyEzr1lmJGniaD6ranXOJqAOb%2BysUJB%2FaaU4uu%2Bfg5QKnZ8jVNvKn02IQggKAvBKO67feQFHvQn80sBj%2B6fby1yhz3cBbQYvIILWDFaD16m34Ckng61902%2Fb8Ve2B9%2FTk91DjFB%2FJP7j%2Bo%2FqiD90T1ZXnlyGWkLco%2FW6CJW&X-Amz-Signature=f215f2d6c904981eaf316ebd9772cebdc4fb52719cb42c47d34e54388118cba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

