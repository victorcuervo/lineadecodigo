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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4OIHNIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzqxMsFy3SeI83dbmHNbfKT4qhWtpyHk2ksd6f9VP5QCIQDK2r04%2BPKK8vE16gQQVnN79h0HPK3jX9mO38HyL7w7WSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ZxQE1H4r3OczxzCKtwDACW0fuE53qnqCbgUivK9jQRzabTVs%2B6F39bXL%2FRxgjhGgS3z5Y5VJYBbewnSN8d5TnVhGhzNA1ZjqccaKGHqyPSU2mBZ0a3lYccTQpYGvdQrkSQ99PdfXxDyWQ%2FZ0vu59hGB%2Bz%2BcPe1ln9H7NQ27KAMExKtoAtXxXW2DEsLFHV4ob8rahierRciFSppQ8naI0UbjTDeHn7xZer8qpAKThVRx%2B4NnGY2lnNCHUj55J84VPXx5PFfBn1f8gNHlRiSoipRMt7z9XpYeeWYTahIsLhBYbIfYm9rZqfqjkKVVaWddTbnkf8BNdSfJ9jSp124%2Ft61jmQX3FJSoNQ7yaRVtGXYc1Rf%2BDL6Ye8eozrXy5U01Tpke5APUYS6ZSYttitnb09neLlfmxFsGraMb8lkNXr%2BCM7jqM1TyifZOigA23or28aaVCVgIHe5vYsEPv2QjiF%2B%2BPl%2FNPhM0zBhYVzkMdZhuuenBZ%2FptydtVlVhacckS7A6jcSD%2Bkh8qrWl9HhPPZ0%2FR37kuvOGcFoa%2FMQZz%2BGR6SQsfC0AFVCUHwEYhxxU2tJx0aGtKtNAconou4QiAPwSEpsw2Hzsk3zebz3jE5eNKEdCimXJMJzvhHbLPJgOjy34dI0VAnvG%2BGs4wuYqMygY6pgHfJUg1iUahN3V3OcnuuwbnHGakjo5%2Bi1FFscojGZ9kIFgGKMDT8svV%2FOqGWM7dzH2HUnjYqMnEpfEOiqWLC0LO%2FsXDM7C2cMmA1Dv83baeVvgMm9sLxO%2BLZ9H67NeA4TjKNow6GsVr4EexzWudygpM1sAOIPqwLzKpYB%2FeNyVcUUXpliGblnoLUQS3Vtt0KMbBIxIloUdHma7L49OI7XfeDoyq0D3d&X-Amz-Signature=74cbe27cf140dd594ee19c7e58ce81bfdb5be2f3289af4aab23199850b1bd0b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4OIHNIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHzqxMsFy3SeI83dbmHNbfKT4qhWtpyHk2ksd6f9VP5QCIQDK2r04%2BPKK8vE16gQQVnN79h0HPK3jX9mO38HyL7w7WSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4ZxQE1H4r3OczxzCKtwDACW0fuE53qnqCbgUivK9jQRzabTVs%2B6F39bXL%2FRxgjhGgS3z5Y5VJYBbewnSN8d5TnVhGhzNA1ZjqccaKGHqyPSU2mBZ0a3lYccTQpYGvdQrkSQ99PdfXxDyWQ%2FZ0vu59hGB%2Bz%2BcPe1ln9H7NQ27KAMExKtoAtXxXW2DEsLFHV4ob8rahierRciFSppQ8naI0UbjTDeHn7xZer8qpAKThVRx%2B4NnGY2lnNCHUj55J84VPXx5PFfBn1f8gNHlRiSoipRMt7z9XpYeeWYTahIsLhBYbIfYm9rZqfqjkKVVaWddTbnkf8BNdSfJ9jSp124%2Ft61jmQX3FJSoNQ7yaRVtGXYc1Rf%2BDL6Ye8eozrXy5U01Tpke5APUYS6ZSYttitnb09neLlfmxFsGraMb8lkNXr%2BCM7jqM1TyifZOigA23or28aaVCVgIHe5vYsEPv2QjiF%2B%2BPl%2FNPhM0zBhYVzkMdZhuuenBZ%2FptydtVlVhacckS7A6jcSD%2Bkh8qrWl9HhPPZ0%2FR37kuvOGcFoa%2FMQZz%2BGR6SQsfC0AFVCUHwEYhxxU2tJx0aGtKtNAconou4QiAPwSEpsw2Hzsk3zebz3jE5eNKEdCimXJMJzvhHbLPJgOjy34dI0VAnvG%2BGs4wuYqMygY6pgHfJUg1iUahN3V3OcnuuwbnHGakjo5%2Bi1FFscojGZ9kIFgGKMDT8svV%2FOqGWM7dzH2HUnjYqMnEpfEOiqWLC0LO%2FsXDM7C2cMmA1Dv83baeVvgMm9sLxO%2BLZ9H67NeA4TjKNow6GsVr4EexzWudygpM1sAOIPqwLzKpYB%2FeNyVcUUXpliGblnoLUQS3Vtt0KMbBIxIloUdHma7L49OI7XfeDoyq0D3d&X-Amz-Signature=e59e022a5344c6db0b5eca8f4ce1a24909b950b11c217b0dafc6ee16673deadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

