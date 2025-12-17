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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6KUXTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCRXzNWroiX0lNYCJNwTagyhfqb%2F1kYjj6Osd7HkosOAiEAwqRGorDe%2BrpumhdISeCzxTcKGlXCWobUfI435OZ3nZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAcObaOpa4OjlwDDbCrcA39VLoqGJlcElCfDOsUSrKAs8nRoAefoleuU1Jv68Yxm4SkwHulNx4HfBOr9RsFIb%2FxFhHRRh04ifeGTjtdNuUagYII9BDShONSbXSPq4PtbFZGDl09l649w6H4qwPPKwruO71b0koiMvvfFrq4A6M%2Fpd%2FSmgQ2TR8eNmv2CWpfmXKG3QWy%2FTRNbo2az%2Fba910TtLRT0SjMUjmzJS9N2ZSLkOxF3%2Fzz651DcE0v2NwXyuZiarvMCF%2BH8MzK1KO97142sDQPI5S3%2BMrIXUcWzLQltdXANDzvHCRzYfm40qEiTJldwYJFixmBVFH0FdFc3Jh0G%2BqLeNKXzLmJTTUb7pqzvf6wchoRcXfKeG5mBIvLiAysrBEDYQByqwNQp1VEoymwViZ%2F1FojNp8jnrCdNLHfsL2G1r%2FDTRkTJG%2FzcL39gyaIU5900e%2F1CAvvQCB2Ja0h21LSXlQzTssir4fG4dqDSahYnrq8rWQrY%2FFsVbf6sSbyJG4bW54xffzta67LzJXQUreNUraIC7I6w%2BkAz5ZqwFfOiFhudVrLif2dTOJdcDKwNDV04BDIpWDgs5ODLADJZQPyrfESEtvbRFHkqw3SM3CCQEdAWOdW6zV6R1nQSfHrLCmoIDN159WCRMJ6PisoGOqUBCBGvb085hZGsdTCxVkUX4izB5tylsVB%2BuTZDZVhs16iatQ%2BQIqTCXcQqqjwuTqhbXo4jl48%2Fg45mBcObUE0HMRc6H1975uTZ8ELuLULXC99jhk7jYfDnGe7U05OYVRL7oo6LaNNWLOkdFExADqXlLE0slQJe2UPEKYabyzL5w%2BlEVS40G10jmZdvEeB9povNRanHJXiI9khBACSeu0ywT3Mme2kG&X-Amz-Signature=92884ca979e30551412b4a00f0bd55a7e3c4082fed1961a689888e8171607950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R6KUXTR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCRXzNWroiX0lNYCJNwTagyhfqb%2F1kYjj6Osd7HkosOAiEAwqRGorDe%2BrpumhdISeCzxTcKGlXCWobUfI435OZ3nZ4q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDAcObaOpa4OjlwDDbCrcA39VLoqGJlcElCfDOsUSrKAs8nRoAefoleuU1Jv68Yxm4SkwHulNx4HfBOr9RsFIb%2FxFhHRRh04ifeGTjtdNuUagYII9BDShONSbXSPq4PtbFZGDl09l649w6H4qwPPKwruO71b0koiMvvfFrq4A6M%2Fpd%2FSmgQ2TR8eNmv2CWpfmXKG3QWy%2FTRNbo2az%2Fba910TtLRT0SjMUjmzJS9N2ZSLkOxF3%2Fzz651DcE0v2NwXyuZiarvMCF%2BH8MzK1KO97142sDQPI5S3%2BMrIXUcWzLQltdXANDzvHCRzYfm40qEiTJldwYJFixmBVFH0FdFc3Jh0G%2BqLeNKXzLmJTTUb7pqzvf6wchoRcXfKeG5mBIvLiAysrBEDYQByqwNQp1VEoymwViZ%2F1FojNp8jnrCdNLHfsL2G1r%2FDTRkTJG%2FzcL39gyaIU5900e%2F1CAvvQCB2Ja0h21LSXlQzTssir4fG4dqDSahYnrq8rWQrY%2FFsVbf6sSbyJG4bW54xffzta67LzJXQUreNUraIC7I6w%2BkAz5ZqwFfOiFhudVrLif2dTOJdcDKwNDV04BDIpWDgs5ODLADJZQPyrfESEtvbRFHkqw3SM3CCQEdAWOdW6zV6R1nQSfHrLCmoIDN159WCRMJ6PisoGOqUBCBGvb085hZGsdTCxVkUX4izB5tylsVB%2BuTZDZVhs16iatQ%2BQIqTCXcQqqjwuTqhbXo4jl48%2Fg45mBcObUE0HMRc6H1975uTZ8ELuLULXC99jhk7jYfDnGe7U05OYVRL7oo6LaNNWLOkdFExADqXlLE0slQJe2UPEKYabyzL5w%2BlEVS40G10jmZdvEeB9povNRanHJXiI9khBACSeu0ywT3Mme2kG&X-Amz-Signature=4bb6173a1325ae808dfa22078b9b141426cdd0a05deefdb6df180325a1503bf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

