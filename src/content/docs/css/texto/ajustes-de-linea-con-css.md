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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EZR2IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMdCdFEf0C703WHICLuAabI6xMLUVTyZ5gE10a9TtdSgIgCuFC58t52IXOcrxPiJDBcqb7LKdNA6714BxnuTgjeS4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3yUNzHnD5wNBiv1yrcAxKMmKRPsqJTiAQ5LicNy1g54oJTZ7kGNp%2Bv5KO3Auq3nyyKqfIOGD59y%2B7XVlUkuj%2FGiw%2FOOpbZexZ6QNhI4BSXKB6UvOfl1aPPI6lefp%2BXGo2vt11eMeHOZ5nNj9PpCJ32YdVTFsjD9tm0usOHOF2uMsyPAuxD5gnD%2BPYXzKEc1Ai5PR2hQqNg3xnhvsd0hERTf4UMoycmWpXfqgziBtTW47LpU4RQfHeyjwY21DPRytL3HG6vJo%2FvFP7KLwwa%2BzF82uK%2BPuSyJc6kC4wQzbeKsHlfUO6R3DirAIvkNo3GYo1orEOLMqVDAw9el9QsqYjCA9RFQMgMhuM6au4tcowvTCIHJa0wu0RF0%2BgCaCSck3zhuo%2BaZ1W0A%2B2bpEsKRnFrRT%2BRRznDbKLZ6LFfPPEBntd5bAGVOsk6KybI7jCTr9ZZcIv%2B0iQgMmq%2BBSAH%2BCpiWRCXjLnTfrgNNM6vCRLM4cKVyTfovdCvmyZZ4BKagDofQRFnpw42E1gvHpG6G3L3AC0g74c%2BW%2BKVz3Y2WBV2C551xoscIhz1DG9W%2BtrJnvKJbBSG1wxBTSxI4W%2BnGAjbfugYqfCU2QMEDlQ5mVtUsbC%2F%2BLrc5RrMmLuznRhy1erzvnovjm8sugf4MPiAi8oGOqUB9V6JCjZ3byJzYf%2FB1sJvTDCkwgPiq2jmGlK2n74KgHoLEaB7tvXB884ypSqZoCPc5CVfGTDx0c1vt68nV1gAHdlq8TTfk%2F5jARc%2B%2FlmOU%2BimubEawCLPABWrsFFY0aV6SbBaLay1HJp70WjY5cRUKPckCAYXRfpAfM76r9F%2B1DXfrpyyq4CJerCM%2FhrSFtmN9KnhsERSlKB0YceLqhCIVuTco4yp&X-Amz-Signature=00e0374fe86b84fd3180f8ffe7ce2621daaa6ba3fa7a1880e7d4cdd320d38b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3EZR2IU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMdCdFEf0C703WHICLuAabI6xMLUVTyZ5gE10a9TtdSgIgCuFC58t52IXOcrxPiJDBcqb7LKdNA6714BxnuTgjeS4qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3yUNzHnD5wNBiv1yrcAxKMmKRPsqJTiAQ5LicNy1g54oJTZ7kGNp%2Bv5KO3Auq3nyyKqfIOGD59y%2B7XVlUkuj%2FGiw%2FOOpbZexZ6QNhI4BSXKB6UvOfl1aPPI6lefp%2BXGo2vt11eMeHOZ5nNj9PpCJ32YdVTFsjD9tm0usOHOF2uMsyPAuxD5gnD%2BPYXzKEc1Ai5PR2hQqNg3xnhvsd0hERTf4UMoycmWpXfqgziBtTW47LpU4RQfHeyjwY21DPRytL3HG6vJo%2FvFP7KLwwa%2BzF82uK%2BPuSyJc6kC4wQzbeKsHlfUO6R3DirAIvkNo3GYo1orEOLMqVDAw9el9QsqYjCA9RFQMgMhuM6au4tcowvTCIHJa0wu0RF0%2BgCaCSck3zhuo%2BaZ1W0A%2B2bpEsKRnFrRT%2BRRznDbKLZ6LFfPPEBntd5bAGVOsk6KybI7jCTr9ZZcIv%2B0iQgMmq%2BBSAH%2BCpiWRCXjLnTfrgNNM6vCRLM4cKVyTfovdCvmyZZ4BKagDofQRFnpw42E1gvHpG6G3L3AC0g74c%2BW%2BKVz3Y2WBV2C551xoscIhz1DG9W%2BtrJnvKJbBSG1wxBTSxI4W%2BnGAjbfugYqfCU2QMEDlQ5mVtUsbC%2F%2BLrc5RrMmLuznRhy1erzvnovjm8sugf4MPiAi8oGOqUB9V6JCjZ3byJzYf%2FB1sJvTDCkwgPiq2jmGlK2n74KgHoLEaB7tvXB884ypSqZoCPc5CVfGTDx0c1vt68nV1gAHdlq8TTfk%2F5jARc%2B%2FlmOU%2BimubEawCLPABWrsFFY0aV6SbBaLay1HJp70WjY5cRUKPckCAYXRfpAfM76r9F%2B1DXfrpyyq4CJerCM%2FhrSFtmN9KnhsERSlKB0YceLqhCIVuTco4yp&X-Amz-Signature=4a09f8fe1215ec2f04745b380cdec66e5adabe79b7b316cf51e285067fef8c6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

