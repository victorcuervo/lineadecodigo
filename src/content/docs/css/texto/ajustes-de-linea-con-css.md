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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFRAS5S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPZYLvnHee%2FC5aq%2FutZwbTo9VF%2BD5mc%2BvEhnp13INiqAiBNgO5VIyHc8%2BbMuM5sr6dtIa078EWnRMWWuP%2BrR2SIsSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmpUwY%2FVn%2BnZQ2nzQKtwD1sKMohwJ2rj68an%2FsV38ks6El3eQkAaFze1Ur%2BnBizBqCmS9PYuzGDzw9ROofLZyA4hfeCe%2F1w9t9h%2FJaTpfwbI8PeGSW35NKMF17gGiCDRRv89n4u1v1z%2FTQAofuCEYogxY9EoodNCJ8a1IKmipEBZeURhQtJdlvU9NBmLIzC7OZCyF5KCY86MeqHtS3M5cFkSVsGF%2FopY7DJiNV7h7nc0NWuiiQ1VIm17SBU0EbT2ThSbUSB4DCx57B8lILBoOoRbwSRl74OdqDQ6GutySx5REAmBl%2BHzVxmO%2FL4e64kgEuvKVm06fS8YQ6FQ20jOVBogtrU1bL7tp0ONSea6NYvchJ5ho9hSIasTsSRUt3OAYgITnA0eAntSM7WZvfT8%2FEChrRUKnRvK7u8wn02x7D99kspZNP1OeC9PFqF%2FcvZHEOuH3GLLOnNhwA4rVIvr78%2BozdAn5eD7z3N9d3u0gLhL68ICPtpXg3nakbUSv35d7xBtePh21ZDvaZxLnVcNqg1g5KZmt9%2FbSYcRX72v4qzH4EW0dmPuOhUhs%2BKxsPI9bZR%2BmxhvgF5x5VGE2SAYys1V1aUOoEPydy%2Frcm9HTXwbPkjU7%2Bet9g%2FByu%2FpxjUyCEPHdSYH2oqi4rzQw7OCKygY6pgFIy33oyeZCPQujCSi6OxYrQOdBughv0r0gypnK39iC03lEWkgKM5r98f7yOCC4cG%2B3eBmHit8Q4uumw9DreyVeUEiDdxkGZVYDj3rZJ11c8O59vpiuritsYK2eCdd1IZSC0nOIkXbKpErD768kINyiz45LqkUbnIOLI7fQxiKjWUrRdxmEP3hJXGA8CCgDghYzdfbPftxQyubfHiiW25BiiGXUM0mH&X-Amz-Signature=7475301dfe5630f21314403c9fafddf12e32ecb1687954dee4430d34015f43aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMFRAS5S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGPZYLvnHee%2FC5aq%2FutZwbTo9VF%2BD5mc%2BvEhnp13INiqAiBNgO5VIyHc8%2BbMuM5sr6dtIa078EWnRMWWuP%2BrR2SIsSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmpUwY%2FVn%2BnZQ2nzQKtwD1sKMohwJ2rj68an%2FsV38ks6El3eQkAaFze1Ur%2BnBizBqCmS9PYuzGDzw9ROofLZyA4hfeCe%2F1w9t9h%2FJaTpfwbI8PeGSW35NKMF17gGiCDRRv89n4u1v1z%2FTQAofuCEYogxY9EoodNCJ8a1IKmipEBZeURhQtJdlvU9NBmLIzC7OZCyF5KCY86MeqHtS3M5cFkSVsGF%2FopY7DJiNV7h7nc0NWuiiQ1VIm17SBU0EbT2ThSbUSB4DCx57B8lILBoOoRbwSRl74OdqDQ6GutySx5REAmBl%2BHzVxmO%2FL4e64kgEuvKVm06fS8YQ6FQ20jOVBogtrU1bL7tp0ONSea6NYvchJ5ho9hSIasTsSRUt3OAYgITnA0eAntSM7WZvfT8%2FEChrRUKnRvK7u8wn02x7D99kspZNP1OeC9PFqF%2FcvZHEOuH3GLLOnNhwA4rVIvr78%2BozdAn5eD7z3N9d3u0gLhL68ICPtpXg3nakbUSv35d7xBtePh21ZDvaZxLnVcNqg1g5KZmt9%2FbSYcRX72v4qzH4EW0dmPuOhUhs%2BKxsPI9bZR%2BmxhvgF5x5VGE2SAYys1V1aUOoEPydy%2Frcm9HTXwbPkjU7%2Bet9g%2FByu%2FpxjUyCEPHdSYH2oqi4rzQw7OCKygY6pgFIy33oyeZCPQujCSi6OxYrQOdBughv0r0gypnK39iC03lEWkgKM5r98f7yOCC4cG%2B3eBmHit8Q4uumw9DreyVeUEiDdxkGZVYDj3rZJ11c8O59vpiuritsYK2eCdd1IZSC0nOIkXbKpErD768kINyiz45LqkUbnIOLI7fQxiKjWUrRdxmEP3hJXGA8CCgDghYzdfbPftxQyubfHiiW25BiiGXUM0mH&X-Amz-Signature=e1716174dfb773f511da279c6547e665ace59249bed8d9458a12c4670a2e13aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

