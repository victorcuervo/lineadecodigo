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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZCUQDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJYqDKWNtSq%2B%2BsOs%2BJzWlX47t1HKsGnQqHfLKRHUdlIAiBBlGZZ3GUQymKU3scInd3qbgsQuW9izMCnxPtm0C93dir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMnCpWhjXQJVn4Q5%2ByKtwD1Os8K%2B9jz%2F%2FXtoILV1CXgsiFpvmT3HR2pfx1q1p2lALEr03Y5Pso2Yv0qlFaNzo0%2FXpMIG3r3u3Rv1wWMeYiuqBKlQDLkbjn%2Blx3aSrFIA8B3989obpG1HQHk84a0w8MJPn7GvxS3z7%2B%2BSynM4%2FHhwCQxONY%2BaSyo8R5k1DK8OGIuJaBfVqPxiEdo73iTVFleOUkgc%2BdN%2Bj9KHxGCorrfrOErJHEefJcjiLGLGRmjIly7zyd4vtDGOeYGL5r1Nq0IcC7tz7vJs6gaX9a0tCccMBnRXbaHM0wyq8fYLefot5qDTDFrCbzJCB6qsTSKdJREdLXnsxSdDaR6f3zKDCnjt3vPPEycQPG0Ux%2FhlcpWdP2Nmc0Dq3oRnQJdyicGVN16Nygkw0G4JiZfrrBksEXKP99QVbQz1Lq39JGJTk3i2Th2uwzzrbn3%2B9UWpbbFSpGAHFT9AOoxfRtnizjcnB80MTmS5LfxaXKH%2BCXOitZwoMDVTwSs395yVk6TnWU%2Bmoze2cIOzjfH4rQHP29HQabtrl0%2Fe%2BAz0j64n9KRza7X5WIIfivcA2Gzccp66FnaDVBHvfmGZG8cBWfm3hJTaRUcXgIr%2B6NFmI6YLh9P8DwqgK0EzJc5lmcbTUqeVcwq4KJygY6pgEHJd2VH16aBGmrV%2F%2FvM78GiXM2a6NpMMn5SblwCLsgf61VhREzdqgGZ9ID97zzIDktlOJPNbWstg0aPHmrWGa5j1mRxB4ZoMvrfS%2F2ShmKpYfcTX7v%2F7s7Vw4y%2FDLRN7sGlgDx6G1a4IAiAm6FBpjUepI1EFw9y2nyKpol%2FrnHpUrVGxUIR7WgsNIxx4HzNkKIsTejoCTE0RfkGAQ%2BtduxKgjmcUH%2B&X-Amz-Signature=89ee92beece765425d6fa462d0da4522133f496cb1108c46b2493d627ad9b16d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZCUQDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJYqDKWNtSq%2B%2BsOs%2BJzWlX47t1HKsGnQqHfLKRHUdlIAiBBlGZZ3GUQymKU3scInd3qbgsQuW9izMCnxPtm0C93dir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMnCpWhjXQJVn4Q5%2ByKtwD1Os8K%2B9jz%2F%2FXtoILV1CXgsiFpvmT3HR2pfx1q1p2lALEr03Y5Pso2Yv0qlFaNzo0%2FXpMIG3r3u3Rv1wWMeYiuqBKlQDLkbjn%2Blx3aSrFIA8B3989obpG1HQHk84a0w8MJPn7GvxS3z7%2B%2BSynM4%2FHhwCQxONY%2BaSyo8R5k1DK8OGIuJaBfVqPxiEdo73iTVFleOUkgc%2BdN%2Bj9KHxGCorrfrOErJHEefJcjiLGLGRmjIly7zyd4vtDGOeYGL5r1Nq0IcC7tz7vJs6gaX9a0tCccMBnRXbaHM0wyq8fYLefot5qDTDFrCbzJCB6qsTSKdJREdLXnsxSdDaR6f3zKDCnjt3vPPEycQPG0Ux%2FhlcpWdP2Nmc0Dq3oRnQJdyicGVN16Nygkw0G4JiZfrrBksEXKP99QVbQz1Lq39JGJTk3i2Th2uwzzrbn3%2B9UWpbbFSpGAHFT9AOoxfRtnizjcnB80MTmS5LfxaXKH%2BCXOitZwoMDVTwSs395yVk6TnWU%2Bmoze2cIOzjfH4rQHP29HQabtrl0%2Fe%2BAz0j64n9KRza7X5WIIfivcA2Gzccp66FnaDVBHvfmGZG8cBWfm3hJTaRUcXgIr%2B6NFmI6YLh9P8DwqgK0EzJc5lmcbTUqeVcwq4KJygY6pgEHJd2VH16aBGmrV%2F%2FvM78GiXM2a6NpMMn5SblwCLsgf61VhREzdqgGZ9ID97zzIDktlOJPNbWstg0aPHmrWGa5j1mRxB4ZoMvrfS%2F2ShmKpYfcTX7v%2F7s7Vw4y%2FDLRN7sGlgDx6G1a4IAiAm6FBpjUepI1EFw9y2nyKpol%2FrnHpUrVGxUIR7WgsNIxx4HzNkKIsTejoCTE0RfkGAQ%2BtduxKgjmcUH%2B&X-Amz-Signature=9c61b121c38aa1cbafdbf0f4a3d370100c7780c6b70abece84654ebd65e32b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

