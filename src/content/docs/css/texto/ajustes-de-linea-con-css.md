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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5AE4R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdzT%2FMrMK%2B%2BavLAi8VBxdMiyZFKmQ6s28fThbg%2Bqk%2B2AiEAh7tf%2FXsiQzcoFenYQ2pzOItnOYg4As0BN1jjZDUBGfUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAsU3qvguImyIDuYnCrcAwY1vCUxyp9lnjInuBrgXuT47VjZV7jD2Z3xFnvka1XdrVHjKh4UaOZwd19wA%2FetDTA4ylbgK6dYdsVfUdGtf86D2bmqSRMaVXwvFp1cbUbS%2BmNa9HknvaMX%2F0kfp%2B%2By%2FHjA6dnsPw4FVboIMg5QaCaWbArTPmwdhSDAcj6%2BV0jiEqYaclw%2FkwCz2L%2B7BFV5c6LgCdCG2csr%2BxBPj2l1uMRiz6iuR%2FvCmYjULQkmsl%2FKJ5fpDcHj7cdFukcYQM32ip50uR%2BmzqJY8t0bChrqy%2FuBexlweic62auOlYFXFRkfQaILpzISGYzOoxZBOk9CK10D%2BV2dNUjWeLwsR91bKu5IA2dYGnaNFfgtkXHbFc6Lku1lknQzzwgtoBD%2B8cK963xUJERjnUFU%2BUq3NBEEyvKy1V3xbX5PNJO6sPwFwyJ8QP4R5pZV%2BLMGZAzHg%2BSGVtEKN11I7R28E38c%2F7JxuDBZ8p4AnEaxiNcUfgcxAGcxTgK6uwesmfR%2FrfEhd8TMO2d%2BFCKA9D0lUwaWuZpPdPalFpBYW7%2BLVHQ%2FanYXdfpaPM4jg%2FnwK8AA2ZLXmCnm8vv2SrZG25par2MrinmG7apJ0JkVe9SIEd4W8%2FsedQWodyQo7CAOf9Bx2KW5MObpiMoGOqUBDMdFQmIsr7IcEHID3mAnkrYKChf6s%2BDexs8ih82jT37HFU6f0469cKdm%2FuhC%2FQlVB0BQhW5C5%2Fsc4S4P%2FNBNzM%2BU77bhmLhyHcRNJ0sOhaj%2Fio%2FxWXXzbf0yOwG3Kds7aAQD6ZQaHWstTVd0CqEAe7QeWQLVK4Iasf%2FI6ZwN4bZ6WqDC47XCvdq2rbg76h05WXfKFVkvNczWJqqIMhnzxi4OddN4&X-Amz-Signature=8639fef9889084a014f8044744b106bab1967eebf682846eed4e2ab58666eb6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J5AE4R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdzT%2FMrMK%2B%2BavLAi8VBxdMiyZFKmQ6s28fThbg%2Bqk%2B2AiEAh7tf%2FXsiQzcoFenYQ2pzOItnOYg4As0BN1jjZDUBGfUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDAsU3qvguImyIDuYnCrcAwY1vCUxyp9lnjInuBrgXuT47VjZV7jD2Z3xFnvka1XdrVHjKh4UaOZwd19wA%2FetDTA4ylbgK6dYdsVfUdGtf86D2bmqSRMaVXwvFp1cbUbS%2BmNa9HknvaMX%2F0kfp%2B%2By%2FHjA6dnsPw4FVboIMg5QaCaWbArTPmwdhSDAcj6%2BV0jiEqYaclw%2FkwCz2L%2B7BFV5c6LgCdCG2csr%2BxBPj2l1uMRiz6iuR%2FvCmYjULQkmsl%2FKJ5fpDcHj7cdFukcYQM32ip50uR%2BmzqJY8t0bChrqy%2FuBexlweic62auOlYFXFRkfQaILpzISGYzOoxZBOk9CK10D%2BV2dNUjWeLwsR91bKu5IA2dYGnaNFfgtkXHbFc6Lku1lknQzzwgtoBD%2B8cK963xUJERjnUFU%2BUq3NBEEyvKy1V3xbX5PNJO6sPwFwyJ8QP4R5pZV%2BLMGZAzHg%2BSGVtEKN11I7R28E38c%2F7JxuDBZ8p4AnEaxiNcUfgcxAGcxTgK6uwesmfR%2FrfEhd8TMO2d%2BFCKA9D0lUwaWuZpPdPalFpBYW7%2BLVHQ%2FanYXdfpaPM4jg%2FnwK8AA2ZLXmCnm8vv2SrZG25par2MrinmG7apJ0JkVe9SIEd4W8%2FsedQWodyQo7CAOf9Bx2KW5MObpiMoGOqUBDMdFQmIsr7IcEHID3mAnkrYKChf6s%2BDexs8ih82jT37HFU6f0469cKdm%2FuhC%2FQlVB0BQhW5C5%2Fsc4S4P%2FNBNzM%2BU77bhmLhyHcRNJ0sOhaj%2Fio%2FxWXXzbf0yOwG3Kds7aAQD6ZQaHWstTVd0CqEAe7QeWQLVK4Iasf%2FI6ZwN4bZ6WqDC47XCvdq2rbg76h05WXfKFVkvNczWJqqIMhnzxi4OddN4&X-Amz-Signature=98298cadd6abc7c55acf5d5e1b690965de04cc32652d080ad8bc38608f579393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

