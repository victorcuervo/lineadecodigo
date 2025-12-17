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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME6X4O5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZFoVp8RN%2F%2FtMbFFFV0sro7JK7EPI43hJZAg1FMC0AAIhAM6ySOgou0WBwHi4uYUokEukEvdE%2FEnGeApQKGjp1D%2BWKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoqrwC%2BLbj2ayBzLUq3AOruhMl4LCRZT2Nhh9fZIAhFseyUKl4r6UETIcL4Hg72L7%2BndRzE14hFpeGMQ8cDxYGt4oZ59xYX1J%2FDTZ5vpNbRAiqtIJnvYg9vVePYIvpba5Uom3WmXFrF0Vm7xVAmSa8e3kyG5dr3I%2FBw4m2zqIoJpyxp%2BG84qwmr%2FZQzbikgJDqMs7F5c7lW1zmY4eajy71RNbY9U40lvl2epyt8%2BRAaAmYwopW%2BFthZR33TReP5qoMWRUl9Eh%2FQqtrIWGCd6pxoErDP8qw5uHTZeHPIazIPiQzyTvm0U7IL0m2iywvAgewWn%2BccK2dpEGJ7d70Ft09FGln4uh%2BKnTutKmi2zy14Di05Zmkj938HxSLhU7tUBxj16kVzGrBUcOlQH4WtzNUNX%2FIWYc6y57Q4AdhG2SxBsUZsx4wvVCqJ%2FigD50kN2m%2FfjCi1Yp1zmrY2ytdArFhlLrLZ694kHnxh2wVt2C%2FYNnqtyi%2BAfRwtVjDpL7fi6ikzg50mX606U5pKDWGFTS66joxP5gfnEuTw2km%2BgxKhXrPVQYXVY4A6mGwv%2BUDFMHBt%2FTDy6UQtrO9k7JdtuewE4pQ4HDKXMnaR7OlJDit5rAxUN829Yh62ukOsXszOS6lbiILoAHUZszTIDDrgIvKBjqkAa6k9J0FuyAVQXyx5x0GMAe8HCqZwMp7n5dFRHuCDABzQpjrS1FHbVEUAWGxPwUhY0TP184Feveo49rKo5KJ7JejKNgMnBvpiAxAJ%2Bt5OcaZL1ZubJhNOWpYkgssJnYo7laMApTezosIwlMZt9%2B9EqdwjQHS%2BAgCvdIlYm8RIHZgwV30RmwDhPDOaP2v0WEY3pk00HMOghSRwqUrHIdHS4Gx%2BJDF&X-Amz-Signature=4a0d666d469a26d9d146a3cb963aa60e2aad0e99631ff02c4116a4176118af9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YME6X4O5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0ZFoVp8RN%2F%2FtMbFFFV0sro7JK7EPI43hJZAg1FMC0AAIhAM6ySOgou0WBwHi4uYUokEukEvdE%2FEnGeApQKGjp1D%2BWKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoqrwC%2BLbj2ayBzLUq3AOruhMl4LCRZT2Nhh9fZIAhFseyUKl4r6UETIcL4Hg72L7%2BndRzE14hFpeGMQ8cDxYGt4oZ59xYX1J%2FDTZ5vpNbRAiqtIJnvYg9vVePYIvpba5Uom3WmXFrF0Vm7xVAmSa8e3kyG5dr3I%2FBw4m2zqIoJpyxp%2BG84qwmr%2FZQzbikgJDqMs7F5c7lW1zmY4eajy71RNbY9U40lvl2epyt8%2BRAaAmYwopW%2BFthZR33TReP5qoMWRUl9Eh%2FQqtrIWGCd6pxoErDP8qw5uHTZeHPIazIPiQzyTvm0U7IL0m2iywvAgewWn%2BccK2dpEGJ7d70Ft09FGln4uh%2BKnTutKmi2zy14Di05Zmkj938HxSLhU7tUBxj16kVzGrBUcOlQH4WtzNUNX%2FIWYc6y57Q4AdhG2SxBsUZsx4wvVCqJ%2FigD50kN2m%2FfjCi1Yp1zmrY2ytdArFhlLrLZ694kHnxh2wVt2C%2FYNnqtyi%2BAfRwtVjDpL7fi6ikzg50mX606U5pKDWGFTS66joxP5gfnEuTw2km%2BgxKhXrPVQYXVY4A6mGwv%2BUDFMHBt%2FTDy6UQtrO9k7JdtuewE4pQ4HDKXMnaR7OlJDit5rAxUN829Yh62ukOsXszOS6lbiILoAHUZszTIDDrgIvKBjqkAa6k9J0FuyAVQXyx5x0GMAe8HCqZwMp7n5dFRHuCDABzQpjrS1FHbVEUAWGxPwUhY0TP184Feveo49rKo5KJ7JejKNgMnBvpiAxAJ%2Bt5OcaZL1ZubJhNOWpYkgssJnYo7laMApTezosIwlMZt9%2B9EqdwjQHS%2BAgCvdIlYm8RIHZgwV30RmwDhPDOaP2v0WEY3pk00HMOghSRwqUrHIdHS4Gx%2BJDF&X-Amz-Signature=d174a192f0647b78b0dc320a0b211847fa020b4da5e3a4b1e687ef18cf2e977a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

