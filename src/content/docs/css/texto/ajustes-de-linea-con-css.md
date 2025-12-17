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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMDNW4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL8cKjVL%2BB3ZIlAZu%2F1pGdkmmgzF7gp6yORkn9fmKQigIhAOIjtM4Jvutzj9f8wHxk%2FWo5Fl%2FUQP4TYp2Tnjb3fgb9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxggCF%2BwOMSL4fQQFgq3AOaYuTxM5BhJlEUx%2FEG3zmg%2B7RWGtZsoNInxAk68Mc1dVxzu7Wo2xPpC9KyvXcKPOG%2BhMb%2BR9zyCU8qK7goQ9obolgXVeSsB1J2MZoz0fCQ0bwMOysgZcLVNTYJeCaxghcIoIh2kiZHMMUqwrzQDtIEHEQ58sul29ubCGbi%2BxOO8quIM%2BtJKKYlCqvuIfav%2FoRnijzNvPJSJ3Fbu9IQ6cHVH1VZkHP4vwpnLFd%2FkK1R5vOLUPx8Ms3ht5PDIzsfZ%2FGyr7oAYOtytlpMYCFaq8s7SrMmaElWrPe6HNzvX63PksA%2BKqio91IBsL0g2D%2FlsceykEsZN9oGOgnzahID8iYgx8Kw%2BqiUo7T3JAkBeVeRAJNPnMncAffBDJZOodGIHP0%2Fug%2Fa%2BvNehvkuGK%2FJWlqrvYsXqYmPvUK8laWjlGsH%2FOhUV%2Bt%2FbnWvpZFu3kV%2BICb%2B%2FFXIxB5WFaSiKnTRD%2FodEs4fHnrVB8Xz3SOrD%2FTZ%2BRVL7WGIzNCGnoxr1qaTV3zto91fzHNuxyUSBEsdVs%2FFLVE4uqv73DKB64Xr8V6FONrPnpdL5f98Bd9%2F2Fj6jy7vxTOuTHp4i9xnWNWzoGz1duSuPggtR%2Fc7aYcdgkGR9YF1QFOV%2FMjNBLe9lDDFqorKBjqkATI5lXas%2BljUvHYUEwtjygPGPmmcIFWJqJdia2J%2FlxnAdh5JE5XUm9HkhrsTm4t8t10pHK0cQNAAOkE%2FCMAdVbQQjrduQhIQJbUhwa%2FXVArhjsOxQlOD5GXhNFkMWEUfNTYXnDMPZsTKgA792hlCZvVruS9%2FtQF0jbIZ7d96oPqqgax%2B07vOEUrL3PfT8mLySvidBBw4AqqIGBxKUvlqE%2Fnsm%2FAt&X-Amz-Signature=3dac7d7b891522d6cafc4f7e12d02e0bf5880fd8b6af001a24bb0f1199bd3031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMDNW4H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCL8cKjVL%2BB3ZIlAZu%2F1pGdkmmgzF7gp6yORkn9fmKQigIhAOIjtM4Jvutzj9f8wHxk%2FWo5Fl%2FUQP4TYp2Tnjb3fgb9Kv8DCH0QABoMNjM3NDIzMTgzODA1IgxggCF%2BwOMSL4fQQFgq3AOaYuTxM5BhJlEUx%2FEG3zmg%2B7RWGtZsoNInxAk68Mc1dVxzu7Wo2xPpC9KyvXcKPOG%2BhMb%2BR9zyCU8qK7goQ9obolgXVeSsB1J2MZoz0fCQ0bwMOysgZcLVNTYJeCaxghcIoIh2kiZHMMUqwrzQDtIEHEQ58sul29ubCGbi%2BxOO8quIM%2BtJKKYlCqvuIfav%2FoRnijzNvPJSJ3Fbu9IQ6cHVH1VZkHP4vwpnLFd%2FkK1R5vOLUPx8Ms3ht5PDIzsfZ%2FGyr7oAYOtytlpMYCFaq8s7SrMmaElWrPe6HNzvX63PksA%2BKqio91IBsL0g2D%2FlsceykEsZN9oGOgnzahID8iYgx8Kw%2BqiUo7T3JAkBeVeRAJNPnMncAffBDJZOodGIHP0%2Fug%2Fa%2BvNehvkuGK%2FJWlqrvYsXqYmPvUK8laWjlGsH%2FOhUV%2Bt%2FbnWvpZFu3kV%2BICb%2B%2FFXIxB5WFaSiKnTRD%2FodEs4fHnrVB8Xz3SOrD%2FTZ%2BRVL7WGIzNCGnoxr1qaTV3zto91fzHNuxyUSBEsdVs%2FFLVE4uqv73DKB64Xr8V6FONrPnpdL5f98Bd9%2F2Fj6jy7vxTOuTHp4i9xnWNWzoGz1duSuPggtR%2Fc7aYcdgkGR9YF1QFOV%2FMjNBLe9lDDFqorKBjqkATI5lXas%2BljUvHYUEwtjygPGPmmcIFWJqJdia2J%2FlxnAdh5JE5XUm9HkhrsTm4t8t10pHK0cQNAAOkE%2FCMAdVbQQjrduQhIQJbUhwa%2FXVArhjsOxQlOD5GXhNFkMWEUfNTYXnDMPZsTKgA792hlCZvVruS9%2FtQF0jbIZ7d96oPqqgax%2B07vOEUrL3PfT8mLySvidBBw4AqqIGBxKUvlqE%2Fnsm%2FAt&X-Amz-Signature=022cac11a46a8b0ad7dab7a613fb6d2d37c832c6cee1771498750207c64e0b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

