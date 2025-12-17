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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4J3JURB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB0UJq9E0sZIgA9O22ZrX3btW%2BGL9ntA%2BV5792InCYSAiAPeDHtE%2BBII52zunXbb%2FihRM9h6UBG%2Fx2NNY%2Fen8BtJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMWLCafMMXMb8dFAM3KtwDQL8s4bT1%2BkIb1OS%2BFF2WXvzw6SVQgQdWL4R7sOQO1PmGQiGj5cs7CtMhXwudiTLfgpMtJNSyz%2FHuF0CE51vSc7XUkUfnYQkh5KWBSR6wpxwzt5SPSzvsolIwKWR81k%2BsZVahirEnuhuzec2WjygX5bCvKO4pexMLadLeWpa6sdsAn%2FGxPpib%2FdzvWTVNTFlWx28JKxkXrPBLP%2BoXs1x%2FIv9KZXwhWViyB6pw7WWxPTPY%2Fw89M0rdQJVl0C6gvmfcZrcmJbnhtcnPu3e1T9eeJTGJr2Zhf1lvMqjNSE57oo2woSp2TgqWAcxyWCPrSwCB6eT%2BaI5FOOG1HPSINBU6M%2FrNIt3mqpU5N6%2BfEIXoUjrsae8a3x9erbRFwFYLAD19kCeXHBxI4ipt096bLP6A4dWWvnFgupUzfomHE3YZifIUEYtoC95zY73cGjFyCZsZGfIQCKsyljeRvdSIk3ktKU%2BfP8o2CQrCuTA2AAVs%2FgL7H8cP3Mkvd31vrz9bI2BdQEE9uK9RAt8mUkSogr2M2PLlDLXN6o%2Ff1QCd%2BAnwLa8NLXXkyus5emtdbrIvKrUt5KqIu42%2Fr%2B09K%2BPFAT75MtIlvWQeaTvQV%2F1SmOtmBLrB094CUwBKSkSpL2IwjuGKygY6pgFeiuZtwKIDpkpcsw%2FNUV5dl7BpyGClm8aEBM6lzdVM8QBNS%2BJIT6esu1ZieCIBqx87IuP9Imb1j%2BdXRO3tf1n%2FrHGNWhy%2BoaV6X6RAA64yeY2XCxtWi7qMJlCHrEdwv7A1X1RUHrsXUh5e%2FySxDGw43RYGVRRYla74l5w07yACRUBrP2usf3s7JlIqmoti%2F%2FldhjBe5iJFtrZeULkMQXe2tMZ1Aq2H&X-Amz-Signature=af08e87be62847fb4363b62406ce36e4af8d9f843f9704d0338910b0b70b21d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4J3JURB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDB0UJq9E0sZIgA9O22ZrX3btW%2BGL9ntA%2BV5792InCYSAiAPeDHtE%2BBII52zunXbb%2FihRM9h6UBG%2Fx2NNY%2Fen8BtJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMWLCafMMXMb8dFAM3KtwDQL8s4bT1%2BkIb1OS%2BFF2WXvzw6SVQgQdWL4R7sOQO1PmGQiGj5cs7CtMhXwudiTLfgpMtJNSyz%2FHuF0CE51vSc7XUkUfnYQkh5KWBSR6wpxwzt5SPSzvsolIwKWR81k%2BsZVahirEnuhuzec2WjygX5bCvKO4pexMLadLeWpa6sdsAn%2FGxPpib%2FdzvWTVNTFlWx28JKxkXrPBLP%2BoXs1x%2FIv9KZXwhWViyB6pw7WWxPTPY%2Fw89M0rdQJVl0C6gvmfcZrcmJbnhtcnPu3e1T9eeJTGJr2Zhf1lvMqjNSE57oo2woSp2TgqWAcxyWCPrSwCB6eT%2BaI5FOOG1HPSINBU6M%2FrNIt3mqpU5N6%2BfEIXoUjrsae8a3x9erbRFwFYLAD19kCeXHBxI4ipt096bLP6A4dWWvnFgupUzfomHE3YZifIUEYtoC95zY73cGjFyCZsZGfIQCKsyljeRvdSIk3ktKU%2BfP8o2CQrCuTA2AAVs%2FgL7H8cP3Mkvd31vrz9bI2BdQEE9uK9RAt8mUkSogr2M2PLlDLXN6o%2Ff1QCd%2BAnwLa8NLXXkyus5emtdbrIvKrUt5KqIu42%2Fr%2B09K%2BPFAT75MtIlvWQeaTvQV%2F1SmOtmBLrB094CUwBKSkSpL2IwjuGKygY6pgFeiuZtwKIDpkpcsw%2FNUV5dl7BpyGClm8aEBM6lzdVM8QBNS%2BJIT6esu1ZieCIBqx87IuP9Imb1j%2BdXRO3tf1n%2FrHGNWhy%2BoaV6X6RAA64yeY2XCxtWi7qMJlCHrEdwv7A1X1RUHrsXUh5e%2FySxDGw43RYGVRRYla74l5w07yACRUBrP2usf3s7JlIqmoti%2F%2FldhjBe5iJFtrZeULkMQXe2tMZ1Aq2H&X-Amz-Signature=783f1199e2be48b473c69eb3e53527e5cd9b3737563976a50061f8a1f13bc1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

