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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FLZYZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWIfGuoUmQ01TLwaBe0cQbBiNcx1MLHLlGhtTTAck3bAiB6x0MDoTS%2BAn%2FuOAShI7M1M7cLcCFm3KsOon0IP9wV1ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdZc6EDEEe416sQdDKtwD6qU03aAgV4vB631fE1hBIOetBAz9FeDLuPF9vumySTieEF7fIbfeOQi3rMvZDIq%2FfDboUxB49m7VoYghNI%2BbUfEmyTmGICnCxvsV193kQAP%2FlmwNyXpdWOjQvYr1bpwAGP38lW6i3vF3leZ2L9Zlu2SoFtrxYpvBBtrjxdMeb4eUm1tNj8S4rxCB%2BpC8VOv7yYOkvmS09Wz%2B9ir6GjJ%2FL6peMku7o7yZVws2grYkz7uIrtBVtK9MLu1wZhOWhZwC21jHeqIqKHCzGnFNkDNDfIwu62nI2ivu0jtvHmDhsAcwLIFjxeWlRyvXBCcGSPGN2%2FXFeyrAe1xtmlCD2uDHatWiFC6NSNO89ndhzW6L7ZVkTr0x6iRNQ%2FhrLU92RxN7hYv3NHZT0XfTVzzcwuju%2BkApKW33hp8JywBELlVQrPUHIavzCaWzSzrMCix6U5cIdv5vwYoHP6MFmyayf6P2LUMYN9xUComKwowMatzTI3Umv6mJbmFpHue9vit3i6g0hJk1sYVPmNQByVQ%2FwU6YGEKIKAcqzjeDZT%2BGJeI%2BJ900x5SrtGea0GoRNXDy6B0e0Brqkrl%2BmHN0NjSIJWv7sfjuTExwNSOfOdglSXj95%2BgxwPJ5PVv28iDhWlwwp4%2BKygY6pgGqFPT13BOVs%2BADPxaoMXBCs0q0vfZmgdeqVjYteSjRVuX%2BfE8aUQ9H56ZQrxFuIHtgUOvSpX8BdPF2iAXOjQJGhSb0%2BKk0s0bRV9q9lra%2Fi9TyZkHWFrXnZ3Yrqel%2FgMBqSt6SYBxWVMad966zWyPPdK7LuXaDDmLSl37FN1l9rnqWZp87cvSS9AgPufnpN6%2F22zAQRIKAB1TrFI1Cm%2BSGQtSMfll%2F&X-Amz-Signature=10f4cad86fa11d236e944c8308d2db3d0cd8a1bf963eb451ac44f6faefcc82bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5FLZYZ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWIfGuoUmQ01TLwaBe0cQbBiNcx1MLHLlGhtTTAck3bAiB6x0MDoTS%2BAn%2FuOAShI7M1M7cLcCFm3KsOon0IP9wV1ir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMdZc6EDEEe416sQdDKtwD6qU03aAgV4vB631fE1hBIOetBAz9FeDLuPF9vumySTieEF7fIbfeOQi3rMvZDIq%2FfDboUxB49m7VoYghNI%2BbUfEmyTmGICnCxvsV193kQAP%2FlmwNyXpdWOjQvYr1bpwAGP38lW6i3vF3leZ2L9Zlu2SoFtrxYpvBBtrjxdMeb4eUm1tNj8S4rxCB%2BpC8VOv7yYOkvmS09Wz%2B9ir6GjJ%2FL6peMku7o7yZVws2grYkz7uIrtBVtK9MLu1wZhOWhZwC21jHeqIqKHCzGnFNkDNDfIwu62nI2ivu0jtvHmDhsAcwLIFjxeWlRyvXBCcGSPGN2%2FXFeyrAe1xtmlCD2uDHatWiFC6NSNO89ndhzW6L7ZVkTr0x6iRNQ%2FhrLU92RxN7hYv3NHZT0XfTVzzcwuju%2BkApKW33hp8JywBELlVQrPUHIavzCaWzSzrMCix6U5cIdv5vwYoHP6MFmyayf6P2LUMYN9xUComKwowMatzTI3Umv6mJbmFpHue9vit3i6g0hJk1sYVPmNQByVQ%2FwU6YGEKIKAcqzjeDZT%2BGJeI%2BJ900x5SrtGea0GoRNXDy6B0e0Brqkrl%2BmHN0NjSIJWv7sfjuTExwNSOfOdglSXj95%2BgxwPJ5PVv28iDhWlwwp4%2BKygY6pgGqFPT13BOVs%2BADPxaoMXBCs0q0vfZmgdeqVjYteSjRVuX%2BfE8aUQ9H56ZQrxFuIHtgUOvSpX8BdPF2iAXOjQJGhSb0%2BKk0s0bRV9q9lra%2Fi9TyZkHWFrXnZ3Yrqel%2FgMBqSt6SYBxWVMad966zWyPPdK7LuXaDDmLSl37FN1l9rnqWZp87cvSS9AgPufnpN6%2F22zAQRIKAB1TrFI1Cm%2BSGQtSMfll%2F&X-Amz-Signature=9aff344fe03dca646817d969bb50171715c1845b8408f9bb352753b070fd1fed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

