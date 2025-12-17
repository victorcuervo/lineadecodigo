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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGLSVSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqat59AhyXGkbvSGT8WoJyJO7V%2BKPiftAUMs8ul4YF2AiAtwWCUrFNpLC7Mr4jBwTKr%2B60w8nqVjVZ9f9w2uTzaRir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsA5Cv2IxnOv3ZgRxKtwDpDhs0jof%2FuCCXs1G5rpqyskTD%2Fii%2FqveBVDuE9Q2rEjiot62W63Ts3c2OAHJW6I%2BWiObsRYl9dcDrD6IGpnfPIrNOnO9DEVseRHcUU3gtaYA4a2EclqbBMMpySb3sMJWwr1MsjIkvCxM3qaPMHWXWv22A1%2BdVJU%2F9oS3Sk74h%2Fj31V09u6dY0lhB1HvHSSC%2Ft4%2FsbxXEc2SeZbtmP4bJLV48xb2pyGe7bMC5TWleubt%2FVvIwdhDST1agPivIBjWSbGKXTVpUeMdJWqfyLVlCJ7rVMGFTr4%2Bx2zW6Ru7cctc2VfgX%2BlXUtd4L59MszxS%2BaDsTLxT%2F2zHli%2FPIGFClni2Hyn3JHpsUiOA1O9kcelO%2BBv9bfW8WC475dU9C3LqP89yjZGEpG5zZhXOEqOYUWScCG2syjz58Jzv3fIqeyIrI5tsD62uEA%2FEoKNDw3VSkswKxEAM%2FxMfJPXoF1z2mZbGOJk43%2FCI23MkdNMCC4D9Tb%2Fx1%2BJrCPUvkOuEXjvFzTVUyzVTw1sFUCRpQZ4XwYuIArnGxGYn1VYzQ%2BwHYfP8XBKGimupz%2BS7JcBhplzg4v15%2FsfAAgnGbfIwJhmirGVUjM6Tf8hx%2BYYmwYSLk250uAwU09BfzvlteZuUw9ZeIygY6pgHKrMw%2FoKINwsVYonxD7s0n1HdAWxez2DmjSeThtEd3SPbsaYr1aCjjK0W1UBif4JG%2FEjfIzit57hiK1fn6hncvhc6fT5feUi%2FVEyBTRm6m080Q6%2FxSsn3smX2anXO%2BY3u3BgMjIl7FamaZ4qgslrhRsMbq%2FWF3Xn2do7QI8hpWO7polNRY%2FmuA%2BCUDKleTFF3%2BaQvKQK9HdLWhG02%2BR2gHX5QV8%2BbP&X-Amz-Signature=ab93a14775ab56a9ce21de924942d72971e3785688bf5a0f941d40f7890c6e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGLSVSM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDqat59AhyXGkbvSGT8WoJyJO7V%2BKPiftAUMs8ul4YF2AiAtwWCUrFNpLC7Mr4jBwTKr%2B60w8nqVjVZ9f9w2uTzaRir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMsA5Cv2IxnOv3ZgRxKtwDpDhs0jof%2FuCCXs1G5rpqyskTD%2Fii%2FqveBVDuE9Q2rEjiot62W63Ts3c2OAHJW6I%2BWiObsRYl9dcDrD6IGpnfPIrNOnO9DEVseRHcUU3gtaYA4a2EclqbBMMpySb3sMJWwr1MsjIkvCxM3qaPMHWXWv22A1%2BdVJU%2F9oS3Sk74h%2Fj31V09u6dY0lhB1HvHSSC%2Ft4%2FsbxXEc2SeZbtmP4bJLV48xb2pyGe7bMC5TWleubt%2FVvIwdhDST1agPivIBjWSbGKXTVpUeMdJWqfyLVlCJ7rVMGFTr4%2Bx2zW6Ru7cctc2VfgX%2BlXUtd4L59MszxS%2BaDsTLxT%2F2zHli%2FPIGFClni2Hyn3JHpsUiOA1O9kcelO%2BBv9bfW8WC475dU9C3LqP89yjZGEpG5zZhXOEqOYUWScCG2syjz58Jzv3fIqeyIrI5tsD62uEA%2FEoKNDw3VSkswKxEAM%2FxMfJPXoF1z2mZbGOJk43%2FCI23MkdNMCC4D9Tb%2Fx1%2BJrCPUvkOuEXjvFzTVUyzVTw1sFUCRpQZ4XwYuIArnGxGYn1VYzQ%2BwHYfP8XBKGimupz%2BS7JcBhplzg4v15%2FsfAAgnGbfIwJhmirGVUjM6Tf8hx%2BYYmwYSLk250uAwU09BfzvlteZuUw9ZeIygY6pgHKrMw%2FoKINwsVYonxD7s0n1HdAWxez2DmjSeThtEd3SPbsaYr1aCjjK0W1UBif4JG%2FEjfIzit57hiK1fn6hncvhc6fT5feUi%2FVEyBTRm6m080Q6%2FxSsn3smX2anXO%2BY3u3BgMjIl7FamaZ4qgslrhRsMbq%2FWF3Xn2do7QI8hpWO7polNRY%2FmuA%2BCUDKleTFF3%2BaQvKQK9HdLWhG02%2BR2gHX5QV8%2BbP&X-Amz-Signature=7bed8a0e1b68b041837c5b2e72294c868b35f706dcc7d31640ecaf06e21ae3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

