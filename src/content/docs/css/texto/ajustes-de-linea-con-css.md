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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGL2CWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvOr88OXeyDcZSTixBr1B0IaCslq7UttjDFiIW8FjqgIhAMj1r4NRdBGaDUjKlla5iln0%2FA5uIS7OjCrtluykEcvyKv8DCHkQABoMNjM3NDIzMTgzODA1Igxbyanj59uWYUEaPakq3AOx4qVd088YJ0X02DHIYLspZFqH2vZ5Bt7ENd4PhiRY%2FT0xuh2Q7aSk5CH%2B2ne4E5pTq5hg%2BVASAjRVLJIKL1bR1Y%2BkwAtNxanyW8kZtb9h2FiU2ZqqVGzDqV%2Fr6hB7yj6njmvU6EKezJ1T9uLIGn2u%2BHGeiqgUQDsX0oq8kGjcYVMDFpBpAro0qJoq6O1h7k6T8CTqWNypG2RugMoOkEq4rlQEq%2FGpaKPKX5tZG4CGS2XvFstDBgSb3dt7UQnXOoSIdmQ85cHBOWtHMrrG2ZNCNAP5rRA6Ug4FuX%2BEBlgL%2FKaPqRNGwfp8dRHDAGsqCu4vCtEI%2BLES6hPRBpnnwF5c7LXTJfhUPIZ5LrVbdv9Qtmyc20ApKGbsrAaQkPm5%2BadKTRietvw6Yx4sMUXVl25P%2FW6oBZRC0Owxnb0Mn%2Fl5oREvAdvjkEH04JYXH%2BlJg26vvl8CcYKvYsp5UySfv%2BPBnJePzB3U1ZIg7ua2D%2B2jhWEH45w%2BINAsqQhgJzCKsWQE1NZ42UKOKVHGfpyYZ9K10UhBFVyKSjie042W9FydVwAbRECwHySQtDOKKgHg02dZvFMEwQFqGmsK2MtMGxorOYZgW%2FA9RZNnMM3MEbRswE3BJIUpZX8Cz5uchTD%2F0InKBjqkAVj67t4SLBCJkG463VpazJb4c4Ut0vjXn7Ox37R6N3ewScw7rCxDw63ppECqnVzijmgfC3YZdkhJtEIUSoVC2kiqUSERo%2Fi9BfkMR7dAQTVsP11frmz%2BiV9DWr5DjQf56xpVxKDIpHLDO9FnjbMBW4vhbpzo9HWMwmQw6GhEPMJ5WCGH1B22C8TTH0q7k7RyCeujrCvzie%2BHpr3D72JcXWbKENrC&X-Amz-Signature=e0d5ce2648ef9b8f179d5aa5b7d1e9a30412be2730b9c6a1d39ef94f7c339f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXGL2CWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfvOr88OXeyDcZSTixBr1B0IaCslq7UttjDFiIW8FjqgIhAMj1r4NRdBGaDUjKlla5iln0%2FA5uIS7OjCrtluykEcvyKv8DCHkQABoMNjM3NDIzMTgzODA1Igxbyanj59uWYUEaPakq3AOx4qVd088YJ0X02DHIYLspZFqH2vZ5Bt7ENd4PhiRY%2FT0xuh2Q7aSk5CH%2B2ne4E5pTq5hg%2BVASAjRVLJIKL1bR1Y%2BkwAtNxanyW8kZtb9h2FiU2ZqqVGzDqV%2Fr6hB7yj6njmvU6EKezJ1T9uLIGn2u%2BHGeiqgUQDsX0oq8kGjcYVMDFpBpAro0qJoq6O1h7k6T8CTqWNypG2RugMoOkEq4rlQEq%2FGpaKPKX5tZG4CGS2XvFstDBgSb3dt7UQnXOoSIdmQ85cHBOWtHMrrG2ZNCNAP5rRA6Ug4FuX%2BEBlgL%2FKaPqRNGwfp8dRHDAGsqCu4vCtEI%2BLES6hPRBpnnwF5c7LXTJfhUPIZ5LrVbdv9Qtmyc20ApKGbsrAaQkPm5%2BadKTRietvw6Yx4sMUXVl25P%2FW6oBZRC0Owxnb0Mn%2Fl5oREvAdvjkEH04JYXH%2BlJg26vvl8CcYKvYsp5UySfv%2BPBnJePzB3U1ZIg7ua2D%2B2jhWEH45w%2BINAsqQhgJzCKsWQE1NZ42UKOKVHGfpyYZ9K10UhBFVyKSjie042W9FydVwAbRECwHySQtDOKKgHg02dZvFMEwQFqGmsK2MtMGxorOYZgW%2FA9RZNnMM3MEbRswE3BJIUpZX8Cz5uchTD%2F0InKBjqkAVj67t4SLBCJkG463VpazJb4c4Ut0vjXn7Ox37R6N3ewScw7rCxDw63ppECqnVzijmgfC3YZdkhJtEIUSoVC2kiqUSERo%2Fi9BfkMR7dAQTVsP11frmz%2BiV9DWr5DjQf56xpVxKDIpHLDO9FnjbMBW4vhbpzo9HWMwmQw6GhEPMJ5WCGH1B22C8TTH0q7k7RyCeujrCvzie%2BHpr3D72JcXWbKENrC&X-Amz-Signature=ab3174fe60bb17d23f7905b9944e9d6e553a80177773c8113ba907a510191cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

