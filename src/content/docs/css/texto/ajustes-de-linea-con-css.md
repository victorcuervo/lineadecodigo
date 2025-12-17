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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQPDE5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmplqlCcMFhhuupERLqnOWCaC%2B4Smejm8pysMJXU8LMAiEAhmgxfOZHusHW5ZSqFKZmXI7Lq2vz9E1FV5U7atHYXFUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM0SYn2rl2eC0JnGyrcAzIz8AEE8mN%2BlYubr6H872RK7DV2bc%2FGWHAmo%2FHRJ%2FB3VIhh3QAHqQQhCOIMUhX758r48vipkKNaV%2FaW5bFkEygwJHuUH1smPGHQ5vZ%2FiHwRJPLqGXlgcg%2FkoEppY%2BXWggRBhk4XzBX252hoEgSrAfTHoJy%2FCciRpErz53w9kp2n1xvnSBMcP%2FES0k7M7AVs9GhyV68YUejRqsi7ME%2FxB07JdrlPDzPcAKe3hyukXzBX4GVD%2BOtFH10CVJGs3s2MqW6zxmCU6mP5ChLCcxEt01Mw6PYFCSRzQ5i6a1rqhy848KqF68lU96fjpRN8Vrw9t4TglrnLLrOOApzrhUTm8NsBNbaCUQASVvjBJKZVBK%2BUBCiYOnZEuzXtpOq8tSrBePcIP1weBbGcA%2BQrDCwKVKp5fDV5NAVHDrGckIepWyum5sey7ZYxxePUhN2CtkyGfZRD9q5NTHvo8Bng9P%2B9uiu%2FCi0RW4zj8U8A%2B4ACK7dvp4CeMfg8ZQB5tdiaxG%2B%2Fgz03I3YmAXSnXEZxp%2BABS7NHLW5JxcfoMVLiLU8HIB7hwFcCZwVLyEuTLGIstAiTKW%2B%2BiN%2FL5h2ptw29x3cY23hjZXilyJrnKBE2pl2yyyZIDPTkc6vg%2BZN6Q8Q%2BMISLjMoGOqUBmH3tk2hfFOKlKp8o6ncRFXw9BmmC3svvrTaIIxzjesYLxUF0Kdf4Vp1nMEyv4qCs5DdBiGyu3h8fZTlQ4S4e%2BQDp3mGRDML26ZjlfSKiTzOTER108VlgHQ83mgv%2FAKYCZfpv1lMGtEWYXMsYKYJMfcml0toUZZwSVxwEe5XmzBaOXSSPmYwJFlOfNX%2FxjmI%2BRZkV%2F2CPpKSHJTAw2JqJLuD6d3pA&X-Amz-Signature=c02d9dab89c08a477711ce522c32b37c92517f854c6987cd03cd11b31be72bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FQPDE5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmplqlCcMFhhuupERLqnOWCaC%2B4Smejm8pysMJXU8LMAiEAhmgxfOZHusHW5ZSqFKZmXI7Lq2vz9E1FV5U7atHYXFUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMM0SYn2rl2eC0JnGyrcAzIz8AEE8mN%2BlYubr6H872RK7DV2bc%2FGWHAmo%2FHRJ%2FB3VIhh3QAHqQQhCOIMUhX758r48vipkKNaV%2FaW5bFkEygwJHuUH1smPGHQ5vZ%2FiHwRJPLqGXlgcg%2FkoEppY%2BXWggRBhk4XzBX252hoEgSrAfTHoJy%2FCciRpErz53w9kp2n1xvnSBMcP%2FES0k7M7AVs9GhyV68YUejRqsi7ME%2FxB07JdrlPDzPcAKe3hyukXzBX4GVD%2BOtFH10CVJGs3s2MqW6zxmCU6mP5ChLCcxEt01Mw6PYFCSRzQ5i6a1rqhy848KqF68lU96fjpRN8Vrw9t4TglrnLLrOOApzrhUTm8NsBNbaCUQASVvjBJKZVBK%2BUBCiYOnZEuzXtpOq8tSrBePcIP1weBbGcA%2BQrDCwKVKp5fDV5NAVHDrGckIepWyum5sey7ZYxxePUhN2CtkyGfZRD9q5NTHvo8Bng9P%2B9uiu%2FCi0RW4zj8U8A%2B4ACK7dvp4CeMfg8ZQB5tdiaxG%2B%2Fgz03I3YmAXSnXEZxp%2BABS7NHLW5JxcfoMVLiLU8HIB7hwFcCZwVLyEuTLGIstAiTKW%2B%2BiN%2FL5h2ptw29x3cY23hjZXilyJrnKBE2pl2yyyZIDPTkc6vg%2BZN6Q8Q%2BMISLjMoGOqUBmH3tk2hfFOKlKp8o6ncRFXw9BmmC3svvrTaIIxzjesYLxUF0Kdf4Vp1nMEyv4qCs5DdBiGyu3h8fZTlQ4S4e%2BQDp3mGRDML26ZjlfSKiTzOTER108VlgHQ83mgv%2FAKYCZfpv1lMGtEWYXMsYKYJMfcml0toUZZwSVxwEe5XmzBaOXSSPmYwJFlOfNX%2FxjmI%2BRZkV%2F2CPpKSHJTAw2JqJLuD6d3pA&X-Amz-Signature=025a3a5208955e507f60e40b6f8c8af8e417eeb50d5cb49b0ba30ae7210667c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

