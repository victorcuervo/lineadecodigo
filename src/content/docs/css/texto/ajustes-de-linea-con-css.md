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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIDI44Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9mcTn9gt3cwEsiYyuJoGJOGUn1celUKiImAiipJZ4gIhAPQJfCXpTbT9Ly8ZVA0ifTGwrleOVBbRkzV1rRury8glKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZqkiRh8dLWrsPOYq3AM1DEqF%2FDY2Acyh7U2tAHRY73Ilz37OK8K6VG6c6WvhH07OuHw4WgbKeFbVkUE6ZRuBOTeVcrwCfplEt6HwWBTDDjG0Z38xz4fJlufbyxZgcNbjgHxfmHz54eqnY0XT7TicATAkwnj8CShdAEKY9tvy6K%2FhU6XkI1SkOlhQZ931gjYLAuIz8Qs3tzxD5lDcKduKtQYAxwQrW7oYYO6YycH8yzlcrB2ig1p1BHoJmGvlWgrTfziuY6oeEZYmxLBV%2F%2F5Ee7LVlZWXNJT71jrow38TbxFDff9TCoXhc1tUL3utjIXMoZk8DkqFl4i4hXhexB%2BCEf3ekjWRtq9YjT%2Fm9IPDvJiRQ6ZBA5TQ8u7kZ2YoZx5iDR49fGrP4URPAszs7JrNHdU%2BLPVdoF%2Bco%2FIDBtw4LqsuxwXiufRpDPbggEKwWHVyNFmCNFPpw4c0OV2M%2B2NhvgAXbXzuhwsBNGVP4Qeosk7bYVdesXAC8SEE0Y5XjKeE%2FoZ6puohLDuBTFmzNVMY8BnAY4%2FrxAIBHZh2zKXiTDyEyf3OoLNDloPVnhS%2BdE7HDTFy4ovfIpsuP5ammvy6OY4INnME39zW5u%2F7%2FOBBTYPzAhvXZZFpwtPgS%2FYW2Dl3p3dBIX70crCaZzDa%2F4rKBjqkAUeKwvAW0NCwQOeCJtYqt9kBe0xbDWSQQ9wP%2FsLbpOTX0%2FMO6bJneprGN84KVsPuJvtai0ZASTRPRqm8lEn10K5aoJAePZNcxyIuvn1R7acklsoFIK%2B5Mf5bMvHMhzu0sibA2m83nFzoRGSkhAv5SHQgvEpUEpCZgDSN4N%2FxWCJ5D1%2FD7EPXiaHvYCOQ03rCgU0ahrI5tSzQsppFv%2BXmf5H7GJ6b&X-Amz-Signature=256ab0a2dc6765943ec793d7e4f4456e4886dbf04791a1996c016b48b147fbc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWIDI44Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo9mcTn9gt3cwEsiYyuJoGJOGUn1celUKiImAiipJZ4gIhAPQJfCXpTbT9Ly8ZVA0ifTGwrleOVBbRkzV1rRury8glKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZqkiRh8dLWrsPOYq3AM1DEqF%2FDY2Acyh7U2tAHRY73Ilz37OK8K6VG6c6WvhH07OuHw4WgbKeFbVkUE6ZRuBOTeVcrwCfplEt6HwWBTDDjG0Z38xz4fJlufbyxZgcNbjgHxfmHz54eqnY0XT7TicATAkwnj8CShdAEKY9tvy6K%2FhU6XkI1SkOlhQZ931gjYLAuIz8Qs3tzxD5lDcKduKtQYAxwQrW7oYYO6YycH8yzlcrB2ig1p1BHoJmGvlWgrTfziuY6oeEZYmxLBV%2F%2F5Ee7LVlZWXNJT71jrow38TbxFDff9TCoXhc1tUL3utjIXMoZk8DkqFl4i4hXhexB%2BCEf3ekjWRtq9YjT%2Fm9IPDvJiRQ6ZBA5TQ8u7kZ2YoZx5iDR49fGrP4URPAszs7JrNHdU%2BLPVdoF%2Bco%2FIDBtw4LqsuxwXiufRpDPbggEKwWHVyNFmCNFPpw4c0OV2M%2B2NhvgAXbXzuhwsBNGVP4Qeosk7bYVdesXAC8SEE0Y5XjKeE%2FoZ6puohLDuBTFmzNVMY8BnAY4%2FrxAIBHZh2zKXiTDyEyf3OoLNDloPVnhS%2BdE7HDTFy4ovfIpsuP5ammvy6OY4INnME39zW5u%2F7%2FOBBTYPzAhvXZZFpwtPgS%2FYW2Dl3p3dBIX70crCaZzDa%2F4rKBjqkAUeKwvAW0NCwQOeCJtYqt9kBe0xbDWSQQ9wP%2FsLbpOTX0%2FMO6bJneprGN84KVsPuJvtai0ZASTRPRqm8lEn10K5aoJAePZNcxyIuvn1R7acklsoFIK%2B5Mf5bMvHMhzu0sibA2m83nFzoRGSkhAv5SHQgvEpUEpCZgDSN4N%2FxWCJ5D1%2FD7EPXiaHvYCOQ03rCgU0ahrI5tSzQsppFv%2BXmf5H7GJ6b&X-Amz-Signature=bd528cf899220d9df1a4c00a655cab9d924bd236ad37dd4df57e97547ff65b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

