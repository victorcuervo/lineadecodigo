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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCVDDD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19kx30bCqGRnD%2FO%2BYbTscsC9NbJluE6m2RTHANaI7%2FAIhANCxRF8wnFvnyb%2B1ceO3x8IjXQv29G4BlRWq5LA8opzwKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcZxHNqVnfel6K%2BX8q3APgmUQfNMs4cy%2FTqLUEQ%2F2zTCYNrFfh%2B6mBe1cggl4Y1KjdSURbcm%2BpWd9F5bfdd9zal0xO48838jPHOWGQFwEytLYtg2meP5JKcZJpVsnte21r9dlxj%2FwaswHPjDK0LrscKUxkpRCfdc6Yha62kdODa%2BIfwnsjhbQCMSe6gGVVDaVp9ozb%2FvBNZeLmeZxcBaW122X3tZRQHMgLaVCC9418SmeA2CBc3jxQa2m4I%2BoOgOhk%2F%2B2WAd6EySnZJfK9OSsgUOKoeffO%2F2lhiCHsEI3MYMFybTrpfXBIP9cXM6Wns822yArC5wgGnajmVZptBacBJu2hhBqMbsXCjZEqWoktPM6dDNFwJ5o3gkKLVdBn47eCj67W72iYlM79A28xpRbegxXshuZdth5Fgh2VanlC7%2B47oaOe%2FYoH1LQMCSToM7IBeo9QXDLnZ4zD6O%2Fq5u0nI%2F1RJ8ERIzdJxvq2q7VrGmxT4zR3KGGZB5A4X38zvqeJ%2FFJPUv4h5JrzYscwPmvX3Ov4kiKx1COsRHlenWsLjU1OUub2EpQGSVipWge%2BE7KL3eLbX3rqF81HRY3DHZwNaVQsC4qGkWoAJwdpVCEFPnCjnt8t80n9EFyffyx2Fnys6KG%2Fs82j3iogRTCw%2BofKBjqkAYdFSAU4CfngFM%2B8rSB9V3CqSdsQgkInmOvWXpv57ISs494iXE%2F0tUiHsFcY8ThzlgrngAwCDKWo21SF8SPguX7mQKsINiRx5eGi7XOZm0xVPFLucS7rzdDHwQCmRgBi5V70fBc5zcBOE1wcwV%2FVgdxHBT6QYNSVqg14%2B4RjA4vG1f6Xzy6mmhyHuoBc2HAGDNlJbIDucDICeNTAmWH4VWPJyXMt&X-Amz-Signature=2ac79bd8161b3ae165831865a1095cf463516e3d392a39ec69235d6ce8e9ba01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXCVDDD3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD19kx30bCqGRnD%2FO%2BYbTscsC9NbJluE6m2RTHANaI7%2FAIhANCxRF8wnFvnyb%2B1ceO3x8IjXQv29G4BlRWq5LA8opzwKv8DCHIQABoMNjM3NDIzMTgzODA1IgzcZxHNqVnfel6K%2BX8q3APgmUQfNMs4cy%2FTqLUEQ%2F2zTCYNrFfh%2B6mBe1cggl4Y1KjdSURbcm%2BpWd9F5bfdd9zal0xO48838jPHOWGQFwEytLYtg2meP5JKcZJpVsnte21r9dlxj%2FwaswHPjDK0LrscKUxkpRCfdc6Yha62kdODa%2BIfwnsjhbQCMSe6gGVVDaVp9ozb%2FvBNZeLmeZxcBaW122X3tZRQHMgLaVCC9418SmeA2CBc3jxQa2m4I%2BoOgOhk%2F%2B2WAd6EySnZJfK9OSsgUOKoeffO%2F2lhiCHsEI3MYMFybTrpfXBIP9cXM6Wns822yArC5wgGnajmVZptBacBJu2hhBqMbsXCjZEqWoktPM6dDNFwJ5o3gkKLVdBn47eCj67W72iYlM79A28xpRbegxXshuZdth5Fgh2VanlC7%2B47oaOe%2FYoH1LQMCSToM7IBeo9QXDLnZ4zD6O%2Fq5u0nI%2F1RJ8ERIzdJxvq2q7VrGmxT4zR3KGGZB5A4X38zvqeJ%2FFJPUv4h5JrzYscwPmvX3Ov4kiKx1COsRHlenWsLjU1OUub2EpQGSVipWge%2BE7KL3eLbX3rqF81HRY3DHZwNaVQsC4qGkWoAJwdpVCEFPnCjnt8t80n9EFyffyx2Fnys6KG%2Fs82j3iogRTCw%2BofKBjqkAYdFSAU4CfngFM%2B8rSB9V3CqSdsQgkInmOvWXpv57ISs494iXE%2F0tUiHsFcY8ThzlgrngAwCDKWo21SF8SPguX7mQKsINiRx5eGi7XOZm0xVPFLucS7rzdDHwQCmRgBi5V70fBc5zcBOE1wcwV%2FVgdxHBT6QYNSVqg14%2B4RjA4vG1f6Xzy6mmhyHuoBc2HAGDNlJbIDucDICeNTAmWH4VWPJyXMt&X-Amz-Signature=296de7093cc6eab042e261fea67a695a0de87e86db19f98b61a9fd3e7acc7cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

