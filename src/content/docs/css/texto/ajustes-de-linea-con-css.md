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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDARXBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fw6v6SJXGCR8%2BJlSCvCfGZfnxco8RAHTvbPp2kPPCiwIhAPhXTPS%2BYG09%2FlT70YdB%2F8rtlMCIFuvmjDoPMKpjOsdwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIcLX0dbWXRY44fr8q3AOrwkWNONt1xRJChn1SmkpFcMuPjP7iw099q0oZRU1Q4WAmWeZDOOZgZBsr0C8MPYNcAkCScQUCz9v4%2BzksjjZjYkCTKS12QkCArGJLktSXyftWne6Dg5%2FuzjjseiSr%2FLzEr0dwJQ06gvb3S0gWqNRAVjkDTclGoVP77F10sBdI3x5eeNWTEEZvWiFkbOs14XDrWhJ5I2KPovlp5M%2Bm8bYkjMDW%2FbHNZHM9ECY4Wb7l%2FGiLRsnrB9NpbABMyzyhYqHv%2BSdCop9q74IvC1MGQ1bmzjEqcPMfgvT9Xn5WJBTNNtvGVbEno5VMLA%2FIH60qQnxKCqXOrntkeOLON%2FTyVYMs4clGWHcM8McQEeR1Gtj9Lt4Ce65%2Bm8%2FS6DC1FbViS035kHVqn2n%2BjDNFBrKc5BD0Nhzle%2BPKGbrjXEcowv6f2jK%2FmJBhQ6F2%2B8YCiTHLM5%2FdR7BvSd5gwMtQJmTunGGKMFPFbRkv1vjshczVtaDv8R8HMB9L%2FGLbMSWinWK49ETdETLSTRnov0vha2ZV%2FMmskuITCovSv9tn1B3oiv%2FIH7C92wCay4%2BoWLHO6WRjerSlta8oiOU0KczZ%2FS0BSuEROCPkwwcYoCmnVnnYeXCnuEThdGUsKs47o3uhuTC6iozKBjqkAfQcIY%2FHmXbM%2BMV9FW4NsrG7aG%2Foe%2F%2BcFxqPLo0I3D%2BlDe9fGX6fE%2BDDy7KsDYEVJ%2BVyU6Vb9RXBLrXZ%2BUymDc8N92qr%2BSOQi0JS9dCHJjEZImMORft0RYnAqelm55cJN1s1avVHlbcpYQY6L7VEFBqwpCxJ%2BKU5z7nY1oW4MTkZBnZkXBuUwar17FOliAZx27TUYI4vDWqfvYzUAmp%2BORxED5Om&X-Amz-Signature=f0db53689647189201499277d09719b13b470def8e5fd950886c6adce2efd40f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDARXBY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2Fw6v6SJXGCR8%2BJlSCvCfGZfnxco8RAHTvbPp2kPPCiwIhAPhXTPS%2BYG09%2FlT70YdB%2F8rtlMCIFuvmjDoPMKpjOsdwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIcLX0dbWXRY44fr8q3AOrwkWNONt1xRJChn1SmkpFcMuPjP7iw099q0oZRU1Q4WAmWeZDOOZgZBsr0C8MPYNcAkCScQUCz9v4%2BzksjjZjYkCTKS12QkCArGJLktSXyftWne6Dg5%2FuzjjseiSr%2FLzEr0dwJQ06gvb3S0gWqNRAVjkDTclGoVP77F10sBdI3x5eeNWTEEZvWiFkbOs14XDrWhJ5I2KPovlp5M%2Bm8bYkjMDW%2FbHNZHM9ECY4Wb7l%2FGiLRsnrB9NpbABMyzyhYqHv%2BSdCop9q74IvC1MGQ1bmzjEqcPMfgvT9Xn5WJBTNNtvGVbEno5VMLA%2FIH60qQnxKCqXOrntkeOLON%2FTyVYMs4clGWHcM8McQEeR1Gtj9Lt4Ce65%2Bm8%2FS6DC1FbViS035kHVqn2n%2BjDNFBrKc5BD0Nhzle%2BPKGbrjXEcowv6f2jK%2FmJBhQ6F2%2B8YCiTHLM5%2FdR7BvSd5gwMtQJmTunGGKMFPFbRkv1vjshczVtaDv8R8HMB9L%2FGLbMSWinWK49ETdETLSTRnov0vha2ZV%2FMmskuITCovSv9tn1B3oiv%2FIH7C92wCay4%2BoWLHO6WRjerSlta8oiOU0KczZ%2FS0BSuEROCPkwwcYoCmnVnnYeXCnuEThdGUsKs47o3uhuTC6iozKBjqkAfQcIY%2FHmXbM%2BMV9FW4NsrG7aG%2Foe%2F%2BcFxqPLo0I3D%2BlDe9fGX6fE%2BDDy7KsDYEVJ%2BVyU6Vb9RXBLrXZ%2BUymDc8N92qr%2BSOQi0JS9dCHJjEZImMORft0RYnAqelm55cJN1s1avVHlbcpYQY6L7VEFBqwpCxJ%2BKU5z7nY1oW4MTkZBnZkXBuUwar17FOliAZx27TUYI4vDWqfvYzUAmp%2BORxED5Om&X-Amz-Signature=9601b0230e99d6c8ff5cd87e77ae71572691ad276d7688e9b45cca53fea80eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

