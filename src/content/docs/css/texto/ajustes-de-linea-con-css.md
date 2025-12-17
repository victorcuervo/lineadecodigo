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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULR7FIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8kwiBWE0%2B%2F318j%2BQ2xDswTqaFpwVsquUMS2W2UB69MAiBSWiN4dGSoekSdv9M1FNl0MPSwpNZbekSz7q%2FWxYnZ4ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflwW9ziUMom5sJbqKtwDFDDGJGhRfvt94iQtXb0gBN5i752aoujashfZZ2HcR6Mtz8h%2BHiXf9jTIBD1GOA%2Bzm2PJE5TsZ4a7TkmzmbGxoguMSeDB5Cq3UoPrc8p%2Ftwu41qwS5o7%2FYXij9hTJoWOKoKrmrVc6Bnr71wDMpNUsp7wMQs%2F4wgB88fLttcF0Bsolc8IavFQVgvIUilkAqtzYyyucrvmnwLEZj%2BRCNLSx9m5nX2Sv1RJB61Hg%2B4AppURkQxkwYRtVPtQkeCFJFlBxRNRrNbT%2B9Rbao%2BcBQxjHjPdANmdFpiBalnRGnBF%2BsvqbWY3stYLE126xV%2BhMBMEBl9WI%2BBRZJN0jT8u9alQGyMHych81R78rKvPK289grto%2BZAZ1AZrc47NaguBAV%2BD4djcH0y3gAQwA2dat%2FO61tC8z%2F71TjBQbLXfE988GcV%2B8vfIRVRciNfmvp2D3DdMJzuQ1MBR3M6ruBcEkImq2XY8sOlCEkHTJGN7YK%2FMeGLFTe8J3jAVsM4%2BkP%2FOTU4JqlYOE2qjLocrjK%2FMHyveqnkACDrb3NiWoB3V4OKdFAgP2vyauK6Lx8lhqtZyN%2FSt7MoFJlWyI%2FgSHYr8mP%2BicCc2puvkb7KdfDHOoAgTXWoaC3GgVKH5eWFWbSqMw9oGJygY6pgGDySWN5PEIqgbKelJUMGvopYZRZxN%2B8Lqt%2BoA0vTRkngHjpHzXtULSpdh%2FCoZfhQ12lVvJTL3dikKmaBWkKkxyAuFjd343ABVaH8Gg8CJbuLRtA8PfLIbgC970w1jJO%2FWxaKjw2puxHi%2BuN1eCj61e3PAmBJA%2FzZJ53MpX0lr3ly9IrDTypG01uD1ybD%2Fng967NDlk%2BO7iDLXvcwfnJJShQHEDSWPY&X-Amz-Signature=cebdc36c1e8c2da4e5e00eb9faeef086fda97d054eaaa231fb7fff632133d9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YULR7FIS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8kwiBWE0%2B%2F318j%2BQ2xDswTqaFpwVsquUMS2W2UB69MAiBSWiN4dGSoekSdv9M1FNl0MPSwpNZbekSz7q%2FWxYnZ4ir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMflwW9ziUMom5sJbqKtwDFDDGJGhRfvt94iQtXb0gBN5i752aoujashfZZ2HcR6Mtz8h%2BHiXf9jTIBD1GOA%2Bzm2PJE5TsZ4a7TkmzmbGxoguMSeDB5Cq3UoPrc8p%2Ftwu41qwS5o7%2FYXij9hTJoWOKoKrmrVc6Bnr71wDMpNUsp7wMQs%2F4wgB88fLttcF0Bsolc8IavFQVgvIUilkAqtzYyyucrvmnwLEZj%2BRCNLSx9m5nX2Sv1RJB61Hg%2B4AppURkQxkwYRtVPtQkeCFJFlBxRNRrNbT%2B9Rbao%2BcBQxjHjPdANmdFpiBalnRGnBF%2BsvqbWY3stYLE126xV%2BhMBMEBl9WI%2BBRZJN0jT8u9alQGyMHych81R78rKvPK289grto%2BZAZ1AZrc47NaguBAV%2BD4djcH0y3gAQwA2dat%2FO61tC8z%2F71TjBQbLXfE988GcV%2B8vfIRVRciNfmvp2D3DdMJzuQ1MBR3M6ruBcEkImq2XY8sOlCEkHTJGN7YK%2FMeGLFTe8J3jAVsM4%2BkP%2FOTU4JqlYOE2qjLocrjK%2FMHyveqnkACDrb3NiWoB3V4OKdFAgP2vyauK6Lx8lhqtZyN%2FSt7MoFJlWyI%2FgSHYr8mP%2BicCc2puvkb7KdfDHOoAgTXWoaC3GgVKH5eWFWbSqMw9oGJygY6pgGDySWN5PEIqgbKelJUMGvopYZRZxN%2B8Lqt%2BoA0vTRkngHjpHzXtULSpdh%2FCoZfhQ12lVvJTL3dikKmaBWkKkxyAuFjd343ABVaH8Gg8CJbuLRtA8PfLIbgC970w1jJO%2FWxaKjw2puxHi%2BuN1eCj61e3PAmBJA%2FzZJ53MpX0lr3ly9IrDTypG01uD1ybD%2Fng967NDlk%2BO7iDLXvcwfnJJShQHEDSWPY&X-Amz-Signature=f09a4698d6a78a2feee4f72733035bc237dc28c87c61b483a3e0c09722bddc5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

