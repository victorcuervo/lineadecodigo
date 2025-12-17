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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CLYM5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClZzwCDGfkuyg7jubg9lBX7k6qCcRkLyDcBrWccbLBnAiEAoIB9He1roTri5afxfLi3FPziXtu7P7d7fKklWVpJD1MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSPuhL26oIOxTUvSCrcA7hnSd3b3FMOEa14GmSarnFErA7ckZHKzqnLP8948VTZX27hTnPWv%2BN6mmdRB8YIVdUd%2BQHufe9k1NOZESLLPLGA%2Bl4oGR1pM7vXna3Rm9F5xoElinOY181EXsMJhyet%2BSD3ekOp6dJlZqvshXD91QF9KLGj7SQy101b%2BSIvQj7vtxaZdUFD0f%2B8rDcaLaGJtNIcfQpgpDIgf3jrbyGRJSELsscjHI2cCA4U6QUoOH8qULQ0HE4b1KG9Pgd7%2B7h6Q88v13Z4%2BfwtI8Clew%2BuQ1i8E1Hcq1Osos9Gq48x6LRauBHnEVu2r2JWxgVVVJBEyG9G6zCnAzr0KNfL9A72f0ava3sLv0gpStV%2Bd19lSBFHpzExSdil4jKEJrC4Mvames8ufmKQMBoWIEB0Tjc9SJeYqXBPAXTfVi%2F1YG2JYk8qcIwbD1daJHX2cdTcXlojzSDnR1yEhNe4wTDwO74XdpjPAIU%2FK%2BZYDqgjYgT6r5f0BE4NgGBnZ%2F7K2EQxg7QrLyEEfIlMTs4eF9ZyeYUyR0GEcs%2FvG3YAFfAVBRP%2FbvE2FpanAp%2BMifE3YpnyPPxPckNRRmT0cBj1n%2B7l1ONbwSCUrV91fVyYoGn48qH%2FoSik17sUya3Gdx9DINGCMM6ei8oGOqUBuJEVQCWiDcAVEifRlBm7j%2BIkb1UJ4gnYtu3zbGPhav9iF9mrUto41aLOzVB%2BlIopUcFluO8JqQ2rATRv9oUzmdS7yywlk9XVM4ViC5i%2Fl0iYI1oAPhKsPT2uguFeFdT1PufDnDG1vES5MBxLLiZxK%2FLc2NABqt18dAFHiq%2FZo7aoguoqCqoixiJJrW20PPyZQTMK5CnazRS%2FBJZEV58SKcFYo6BY&X-Amz-Signature=1330b3664a1ae695d03e913209d9fa6fe44f0dfced2e02328695f760b2a96116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4CLYM5D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClZzwCDGfkuyg7jubg9lBX7k6qCcRkLyDcBrWccbLBnAiEAoIB9He1roTri5afxfLi3FPziXtu7P7d7fKklWVpJD1MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMSPuhL26oIOxTUvSCrcA7hnSd3b3FMOEa14GmSarnFErA7ckZHKzqnLP8948VTZX27hTnPWv%2BN6mmdRB8YIVdUd%2BQHufe9k1NOZESLLPLGA%2Bl4oGR1pM7vXna3Rm9F5xoElinOY181EXsMJhyet%2BSD3ekOp6dJlZqvshXD91QF9KLGj7SQy101b%2BSIvQj7vtxaZdUFD0f%2B8rDcaLaGJtNIcfQpgpDIgf3jrbyGRJSELsscjHI2cCA4U6QUoOH8qULQ0HE4b1KG9Pgd7%2B7h6Q88v13Z4%2BfwtI8Clew%2BuQ1i8E1Hcq1Osos9Gq48x6LRauBHnEVu2r2JWxgVVVJBEyG9G6zCnAzr0KNfL9A72f0ava3sLv0gpStV%2Bd19lSBFHpzExSdil4jKEJrC4Mvames8ufmKQMBoWIEB0Tjc9SJeYqXBPAXTfVi%2F1YG2JYk8qcIwbD1daJHX2cdTcXlojzSDnR1yEhNe4wTDwO74XdpjPAIU%2FK%2BZYDqgjYgT6r5f0BE4NgGBnZ%2F7K2EQxg7QrLyEEfIlMTs4eF9ZyeYUyR0GEcs%2FvG3YAFfAVBRP%2FbvE2FpanAp%2BMifE3YpnyPPxPckNRRmT0cBj1n%2B7l1ONbwSCUrV91fVyYoGn48qH%2FoSik17sUya3Gdx9DINGCMM6ei8oGOqUBuJEVQCWiDcAVEifRlBm7j%2BIkb1UJ4gnYtu3zbGPhav9iF9mrUto41aLOzVB%2BlIopUcFluO8JqQ2rATRv9oUzmdS7yywlk9XVM4ViC5i%2Fl0iYI1oAPhKsPT2uguFeFdT1PufDnDG1vES5MBxLLiZxK%2FLc2NABqt18dAFHiq%2FZo7aoguoqCqoixiJJrW20PPyZQTMK5CnazRS%2FBJZEV58SKcFYo6BY&X-Amz-Signature=4a72ec37dc0348b139347e28308c173e8ebf786d82afb0222a1b46ce65f2720c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

