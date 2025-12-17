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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJASKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiNdqzOAabUBgLJHv0p4YqLGdmGDX1K9ebck04SxPW5AiBZ2UiD%2FpEBl%2FDLhPzz%2FWfHytf3u75lGgQba5M3ZCxzbCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM2AUlLWkJToX4ytumKtwD8c3uNb2XPIHhXZNVM%2BKMv%2Fsf8h3SAaLjWqlTH5TjX%2BLPflicS3Bb1R9JnCg82xpAaACkWmR2gjGZOEn19Cj%2BkhbFn0MNHT0ZBDCdTAufHtFF3pMnIaTpYspiL11fb7hi6AQHYdiOWV%2FS0lcTGendrLjTViwV86EHEUH7efyQnhpJ%2FF3Z9KujFtOHm4MV9sKq1OLKsxPFzudzBN8OkL1rCVgiVEdGQfP4HQ0iRS29bKkUJCOfb6ZRHP5PTkcceL%2FftQX65frnqb%2FWkSO%2BYa4pgP%2BRjyxCnr8Q%2BITCkyMBS8kJDSjf1o3n5ogpzOyjTTXvEy8Bp2%2Fi04nyiLhVrIP9R%2BhsegXSLgv8ynjbOVEg5%2FfbmMTQTce1ljkxyIGGr2%2FvYf08ZZSn1KX0v2Sz2DVTrAQVbH%2FfpvppXKCD6relaaZ5kffHkDrx%2B8MeFBkpNzOqfvTRCDHr8XkcJrXXd%2F3lQjOkZ%2FqOV3kWSbk38H%2BMNG6R1J4ui8vEazWSUTFoDHhST8t95Ij74zp54luf%2FOMqj9u0grcX3GRB5yQ9YpOPlvNThzR%2BKNVHb8I1yMYNey8suXX%2BU1aBD%2Bsnd9VYae%2Fz%2FUb0hEKq%2FD8fWIxw7uE7fB%2FXtODrHhwP35rHUD8wvLGIygY6pgErKB7AGHUWeHCRlkVm2BnoHdeqYjYi5YJlOfFcpv4SDGr2VglGomrMpmFUWO0AeRSNQEwcqYy%2FZKAM4Fbxxq%2FiTnJbGdM7C7rCK1O5iAjkI%2BDivj5cld0Tnkr6muiz%2FrGqtKR5T0ApOjgioD%2FinSHV9vPHPeR59BxiXTq2%2BCGj1dkDLqxdguikvPdCeqLTW0UYnCfTVzoFFPTA5TdzzcycZQVf1USD&X-Amz-Signature=76132a57cb8f34a824748d0040938ed0ef3bee01c1390c08dbea88905c7908c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LRJASKO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiNdqzOAabUBgLJHv0p4YqLGdmGDX1K9ebck04SxPW5AiBZ2UiD%2FpEBl%2FDLhPzz%2FWfHytf3u75lGgQba5M3ZCxzbCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM2AUlLWkJToX4ytumKtwD8c3uNb2XPIHhXZNVM%2BKMv%2Fsf8h3SAaLjWqlTH5TjX%2BLPflicS3Bb1R9JnCg82xpAaACkWmR2gjGZOEn19Cj%2BkhbFn0MNHT0ZBDCdTAufHtFF3pMnIaTpYspiL11fb7hi6AQHYdiOWV%2FS0lcTGendrLjTViwV86EHEUH7efyQnhpJ%2FF3Z9KujFtOHm4MV9sKq1OLKsxPFzudzBN8OkL1rCVgiVEdGQfP4HQ0iRS29bKkUJCOfb6ZRHP5PTkcceL%2FftQX65frnqb%2FWkSO%2BYa4pgP%2BRjyxCnr8Q%2BITCkyMBS8kJDSjf1o3n5ogpzOyjTTXvEy8Bp2%2Fi04nyiLhVrIP9R%2BhsegXSLgv8ynjbOVEg5%2FfbmMTQTce1ljkxyIGGr2%2FvYf08ZZSn1KX0v2Sz2DVTrAQVbH%2FfpvppXKCD6relaaZ5kffHkDrx%2B8MeFBkpNzOqfvTRCDHr8XkcJrXXd%2F3lQjOkZ%2FqOV3kWSbk38H%2BMNG6R1J4ui8vEazWSUTFoDHhST8t95Ij74zp54luf%2FOMqj9u0grcX3GRB5yQ9YpOPlvNThzR%2BKNVHb8I1yMYNey8suXX%2BU1aBD%2Bsnd9VYae%2Fz%2FUb0hEKq%2FD8fWIxw7uE7fB%2FXtODrHhwP35rHUD8wvLGIygY6pgErKB7AGHUWeHCRlkVm2BnoHdeqYjYi5YJlOfFcpv4SDGr2VglGomrMpmFUWO0AeRSNQEwcqYy%2FZKAM4Fbxxq%2FiTnJbGdM7C7rCK1O5iAjkI%2BDivj5cld0Tnkr6muiz%2FrGqtKR5T0ApOjgioD%2FinSHV9vPHPeR59BxiXTq2%2BCGj1dkDLqxdguikvPdCeqLTW0UYnCfTVzoFFPTA5TdzzcycZQVf1USD&X-Amz-Signature=aab84d9d74ff83f71d445348ddd589ad34dfadd1f7fd0de52291f507c78f6c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

