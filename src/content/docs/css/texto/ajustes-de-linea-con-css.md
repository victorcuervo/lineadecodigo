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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2I6ONJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfxOPwmJyaPMdTcxwJL1kH9%2Febwea%2BkZWtlZSkEi7oEAIhAJRvEryzz%2F2YW2oDcK5UDHyyT1nqiIsf8Tjz4bJPlkXHKv8DCH0QABoMNjM3NDIzMTgzODA1IgyxRy0gHlqkt1411L8q3ANRQLfAuhhgdMGMcVgTW6tpLGhBEwhdQ2KETkizOcA2VTty0a514uDSAd7A0t0oGe6sO0%2BypjVEg%2BJdTM5O1cdCN11MahUHa1XAAn%2BdIc7hzVRVAvJ6Cz%2F6RZWoLc%2Fn7bJAQpqpaXHuMJ67CdPGugIL24gBlowXwsjPIt8B1NN0NAjwh%2FKprqA5dRM7fStXdEPaE4BlXvLyO26fWW460MAsfdFB%2Bmp62M2mWsQ5gBmuHKG3zDrUArilvVOvDwf87N69byNgNH2naLmSn2x9T4qEJxeVNF5FicoraF2ccqVTYd4PVAdfKNLGr8hGS890xIC1bD54v2buNXmvs5SJB2BsCf8SJzMt8xR1EpD4%2Fr8L%2F5boB9j7ZOjbjOiM8EeonI%2FDGw2WkKrYlDuUMz9wJ1%2BFWnfceG%2BsYkrDTD4y0v8qQyS%2BIOcYLXKtWv%2B6Yl%2B2aaGhdlBv8KGEyKTjOsICrIat7i6ozLN6CZVbvpQqP82vnWFsAXVztxthM4Ax3n2beGHOWEXv4uefdzvZ3cwJ2CDq5ZJuAsaZHd15%2Bp1k%2B3OOrojYR9mUlRl%2BUQe%2B1m%2Fn%2FOIQL5ERIoTcqpeDKMFVnUTEGp6QOcINulI1lKbQ1fTEvm6MDpqHBwrDLxlqmzDRqorKBjqkAeuSf0Mb2g58uCumhNjuverD3mFFaIu4l2LL2ZkEPUTvPnlW0L6iHdVXGZplnp2WRr0UGpjwhHrKMBrGdSgXVNGhpSqFnidj%2Bahe05yVignI0DJO5UEoMD4y8F8V3v3S3B7HwpkRNI7UKgE%2Bc%2BEOD03OWxX8eMIwbcOFfv887je17lq1%2BTvnt%2Bz%2B8rmbMzO1aQmNURlK7DVpL%2BDlCn7wFqB5%2FR5H&X-Amz-Signature=8e6a016d5f01349a524a62b370df3be5312cb25897a1b994d877e200bbf9efd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2I6ONJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfxOPwmJyaPMdTcxwJL1kH9%2Febwea%2BkZWtlZSkEi7oEAIhAJRvEryzz%2F2YW2oDcK5UDHyyT1nqiIsf8Tjz4bJPlkXHKv8DCH0QABoMNjM3NDIzMTgzODA1IgyxRy0gHlqkt1411L8q3ANRQLfAuhhgdMGMcVgTW6tpLGhBEwhdQ2KETkizOcA2VTty0a514uDSAd7A0t0oGe6sO0%2BypjVEg%2BJdTM5O1cdCN11MahUHa1XAAn%2BdIc7hzVRVAvJ6Cz%2F6RZWoLc%2Fn7bJAQpqpaXHuMJ67CdPGugIL24gBlowXwsjPIt8B1NN0NAjwh%2FKprqA5dRM7fStXdEPaE4BlXvLyO26fWW460MAsfdFB%2Bmp62M2mWsQ5gBmuHKG3zDrUArilvVOvDwf87N69byNgNH2naLmSn2x9T4qEJxeVNF5FicoraF2ccqVTYd4PVAdfKNLGr8hGS890xIC1bD54v2buNXmvs5SJB2BsCf8SJzMt8xR1EpD4%2Fr8L%2F5boB9j7ZOjbjOiM8EeonI%2FDGw2WkKrYlDuUMz9wJ1%2BFWnfceG%2BsYkrDTD4y0v8qQyS%2BIOcYLXKtWv%2B6Yl%2B2aaGhdlBv8KGEyKTjOsICrIat7i6ozLN6CZVbvpQqP82vnWFsAXVztxthM4Ax3n2beGHOWEXv4uefdzvZ3cwJ2CDq5ZJuAsaZHd15%2Bp1k%2B3OOrojYR9mUlRl%2BUQe%2B1m%2Fn%2FOIQL5ERIoTcqpeDKMFVnUTEGp6QOcINulI1lKbQ1fTEvm6MDpqHBwrDLxlqmzDRqorKBjqkAeuSf0Mb2g58uCumhNjuverD3mFFaIu4l2LL2ZkEPUTvPnlW0L6iHdVXGZplnp2WRr0UGpjwhHrKMBrGdSgXVNGhpSqFnidj%2Bahe05yVignI0DJO5UEoMD4y8F8V3v3S3B7HwpkRNI7UKgE%2Bc%2BEOD03OWxX8eMIwbcOFfv887je17lq1%2BTvnt%2Bz%2B8rmbMzO1aQmNURlK7DVpL%2BDlCn7wFqB5%2FR5H&X-Amz-Signature=11092e189cafe0bb36ff090ccbe695bf808e285a1929baa5aa3ce9fb7a9acfbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

