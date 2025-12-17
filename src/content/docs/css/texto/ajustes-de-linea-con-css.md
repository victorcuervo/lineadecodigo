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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HIZDG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRct7SPD%2BUOykoeOPtpELvhx6aBElM2HyNEv1Y2FBuoAiBpO9HdVtfSHY%2B56U8qEfBd1mx0bAPnNyeXTPgmLIDRUSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMuOs4f%2BU7MwklEOj%2BKtwDx7L8ucVOJsexdq%2BCcCeg5FCjSV%2FmOgXGlw6bf7iamE52iCX%2B3vP8vq5Q0WL1imgPI%2BDBbNdhmlXmRLwau5n1TcvTDyVMMX%2BH0DmGR3M70mMhNFzB1qU1sXdNIpyDFi%2FI1NfIn7Ujxllb6UgKRNFB2bmlCnVAgdr9rqdM1d9eOn8jm7RIIqszfmIFfMQcLpL0xIFoOJI1ddZFa25W4Z9EiW4uviCbjBUsImdpGj8ve004vBc6zxoDWftH4maRFL616P%2FJrXdaxy8OsXDwAQgqVF1UfaUyyU%2FCcnEkK4YPMJDtw4XlW99fCBnw3haKHhMgeueCHrgkWuGcDt2GopgW68Uq6oJo40Fj%2BVR8ZydNJCm7Jad3P3f6CzBxQpx6kfOusF9BiueaVxcccsDkMx7rTTRJkR16itTccsvioj5kqAp%2F7OBhugHblSdlfZMISeIiwICcVBVZoJYVUxj4cyoQWuKGxRkvOIYDikifTMqK8k0YAAmK4F4R16rkWxkJkjxhflkzLemf7ObUDNZKEUtgL%2BHObXcLaUIg3nqaOgc1FiMA7xNj0PPBqWKrFEECfzUA4tUIPW%2BsgdMLLVsFYNpbqGI31YEHtupoxM7HLQe7BvnWA4dkqwaOiLyoLT0wo%2BGKygY6pgFmQG4hcDvOmN69TxcoJzuDygwmGfWzH56giN52kQpoK37A358B1C9%2BIo5aF0ltoVRbgN30DPKaYZOCMqCYkKMju1h5eUDMbGlgLB1YAWBeahm9eH29uwzI%2FG0hcEsmEd27cm7d0KY%2BQy31KKi4fqKpiy5mS%2BEvqph15aJz8S5W7s3qrybwbal3tmvm5BKADMs2zfqkTdIUNieANkHQ1hf8hgWIb2lj&X-Amz-Signature=4d7a9314d9e2d574656be5d278933480be03a2950a6b37fff8d820bc88b7cbd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4HIZDG2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICRct7SPD%2BUOykoeOPtpELvhx6aBElM2HyNEv1Y2FBuoAiBpO9HdVtfSHY%2B56U8qEfBd1mx0bAPnNyeXTPgmLIDRUSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMuOs4f%2BU7MwklEOj%2BKtwDx7L8ucVOJsexdq%2BCcCeg5FCjSV%2FmOgXGlw6bf7iamE52iCX%2B3vP8vq5Q0WL1imgPI%2BDBbNdhmlXmRLwau5n1TcvTDyVMMX%2BH0DmGR3M70mMhNFzB1qU1sXdNIpyDFi%2FI1NfIn7Ujxllb6UgKRNFB2bmlCnVAgdr9rqdM1d9eOn8jm7RIIqszfmIFfMQcLpL0xIFoOJI1ddZFa25W4Z9EiW4uviCbjBUsImdpGj8ve004vBc6zxoDWftH4maRFL616P%2FJrXdaxy8OsXDwAQgqVF1UfaUyyU%2FCcnEkK4YPMJDtw4XlW99fCBnw3haKHhMgeueCHrgkWuGcDt2GopgW68Uq6oJo40Fj%2BVR8ZydNJCm7Jad3P3f6CzBxQpx6kfOusF9BiueaVxcccsDkMx7rTTRJkR16itTccsvioj5kqAp%2F7OBhugHblSdlfZMISeIiwICcVBVZoJYVUxj4cyoQWuKGxRkvOIYDikifTMqK8k0YAAmK4F4R16rkWxkJkjxhflkzLemf7ObUDNZKEUtgL%2BHObXcLaUIg3nqaOgc1FiMA7xNj0PPBqWKrFEECfzUA4tUIPW%2BsgdMLLVsFYNpbqGI31YEHtupoxM7HLQe7BvnWA4dkqwaOiLyoLT0wo%2BGKygY6pgFmQG4hcDvOmN69TxcoJzuDygwmGfWzH56giN52kQpoK37A358B1C9%2BIo5aF0ltoVRbgN30DPKaYZOCMqCYkKMju1h5eUDMbGlgLB1YAWBeahm9eH29uwzI%2FG0hcEsmEd27cm7d0KY%2BQy31KKi4fqKpiy5mS%2BEvqph15aJz8S5W7s3qrybwbal3tmvm5BKADMs2zfqkTdIUNieANkHQ1hf8hgWIb2lj&X-Amz-Signature=e875665de67071db5e63338e606818027bac0fc442adc9ab405dbe7e23be3c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

