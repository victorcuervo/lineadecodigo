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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZWUH3M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJieoVaVVLx1970n%2BhurYtsM0eM%2BWb3S1rtjxuK6r21gIhAIXnb52pTRWjR1%2FWsNVkrBdhD12NncTlXJuv1h%2Fko642Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwhUkbQMowHmBrV6i8q3AP%2Fo%2F%2FQ4FeF2%2FP775B2js%2BD4Py%2B%2Bqv1aqGX%2Fu6yUn13i0TwyMXRuvMya5K77Wo%2Bs3Tvh8Ow7q7SXijKfsgAZmSchLM54EpDO%2BwFhbqGePxQ0V1cmnC5X2MEW9avC1a8PkR%2FmQ3VwhP6FraMIFThX3xaNsyvaEPYsoyVcDiayhIHJ9jEu8aZfnVqKJ3y2Ev2W7dldbIJpsI%2Bxzh%2BVHsulmDWJMgKX%2FQuGgiHS8opCucVJae21tZSXDNfwC0%2F8SM7waV22h3jDY8wcDX7uLJURwAFPuywHJo%2BoqR7q5TBmsbziXbxsb%2BoYv2ptaBW1TlChw3qg6cNLd7nN3NgPWD2tTUlhqHyjXqgQrPLmwaRj57uxsI7NQS9%2FGPXU45wNw0BMZu1hNOu9fM6yXXzaWDWTrLi86i56e0CkChd1iP1KNUgfF0%2BCFkYgOBSR88rq%2F7Q%2FU0Hqd%2FFLsTWIH9F4ocHJxlKckK3zcYml3Ak7F5B83AeY7sNnWfoX4XOxZx78gXBwZkDYTCevicd0BRrvtl%2FNkdUJBIKHDV6nDAA98Sj2Q52b6eAOg%2FKxBGBAnJLIrqeCYc1PNPB%2BGXzksFpXea3wB5xrg%2BFOHT3ZMrpQV7ilk4KKsO0CVWX3iObqIHxsTDE%2B4fKBjqkAfo4TOMrFJ1eRH%2BHs7WvItsZ2v4iIjUFmVMDMu5%2BcnwiwcmUTYD7l1D4bUk5XZAabfKmdl7brgLDv8U6ZbjWLQaWVm%2FdHAAfglCGyG%2FMQ5ECpgQHbmQt80i6VIx18Mgd%2BbQDdVBORZ%2FmtcvWRXVJJg%2Bhy9ZccmHhN8E88HNcYcTGyhviUx80CjFXo1uMQYCWDbI7GJVWr%2FIkqt9Z%2BZhucWVv9IhP&X-Amz-Signature=13adaada0621623dcdd02390034c83d4d4b662e5eff81cb93b33889720aeb9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCZWUH3M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJieoVaVVLx1970n%2BhurYtsM0eM%2BWb3S1rtjxuK6r21gIhAIXnb52pTRWjR1%2FWsNVkrBdhD12NncTlXJuv1h%2Fko642Kv8DCHIQABoMNjM3NDIzMTgzODA1IgwhUkbQMowHmBrV6i8q3AP%2Fo%2F%2FQ4FeF2%2FP775B2js%2BD4Py%2B%2Bqv1aqGX%2Fu6yUn13i0TwyMXRuvMya5K77Wo%2Bs3Tvh8Ow7q7SXijKfsgAZmSchLM54EpDO%2BwFhbqGePxQ0V1cmnC5X2MEW9avC1a8PkR%2FmQ3VwhP6FraMIFThX3xaNsyvaEPYsoyVcDiayhIHJ9jEu8aZfnVqKJ3y2Ev2W7dldbIJpsI%2Bxzh%2BVHsulmDWJMgKX%2FQuGgiHS8opCucVJae21tZSXDNfwC0%2F8SM7waV22h3jDY8wcDX7uLJURwAFPuywHJo%2BoqR7q5TBmsbziXbxsb%2BoYv2ptaBW1TlChw3qg6cNLd7nN3NgPWD2tTUlhqHyjXqgQrPLmwaRj57uxsI7NQS9%2FGPXU45wNw0BMZu1hNOu9fM6yXXzaWDWTrLi86i56e0CkChd1iP1KNUgfF0%2BCFkYgOBSR88rq%2F7Q%2FU0Hqd%2FFLsTWIH9F4ocHJxlKckK3zcYml3Ak7F5B83AeY7sNnWfoX4XOxZx78gXBwZkDYTCevicd0BRrvtl%2FNkdUJBIKHDV6nDAA98Sj2Q52b6eAOg%2FKxBGBAnJLIrqeCYc1PNPB%2BGXzksFpXea3wB5xrg%2BFOHT3ZMrpQV7ilk4KKsO0CVWX3iObqIHxsTDE%2B4fKBjqkAfo4TOMrFJ1eRH%2BHs7WvItsZ2v4iIjUFmVMDMu5%2BcnwiwcmUTYD7l1D4bUk5XZAabfKmdl7brgLDv8U6ZbjWLQaWVm%2FdHAAfglCGyG%2FMQ5ECpgQHbmQt80i6VIx18Mgd%2BbQDdVBORZ%2FmtcvWRXVJJg%2Bhy9ZccmHhN8E88HNcYcTGyhviUx80CjFXo1uMQYCWDbI7GJVWr%2FIkqt9Z%2BZhucWVv9IhP&X-Amz-Signature=1a1f3d78de5a5caa6ff8a28ac4774c7cbd7105b6e3f74849edce26ad07de1ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

