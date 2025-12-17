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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZXV2Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHfHWcY5cfSddf1BDDmr35Hhq4ucDBMZoiR5s8jnMwAiBiOtUFHnWKLIHZboDtdOUlhKKvwOrJbvWrpx6DHVj08iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvZf4cJSbsViKAIxKtwDUYX4EIVtL2uJzh%2FpAnH97D4pZ8DVJUPxc7t0CniYwq8V9ZSGQy3xFdcePiBYVjZRcZsx5lamJ%2BIdr%2FQhpLnTRNFYyXUI7DesIMxOMPVbxf6TiSeG1hMK7D2qNqnaDFiafAgxw%2BboHjfh%2BrqPNFgt3B0fWpZqS%2Fn%2FM5qU7yBb%2F4CXaD5jZVmitZd8dcn5MePOKJBDCXTBkxmpleXvCtfnds6Vph%2FZCVeAveG%2B8C04GOc%2BOjfEnfWMUGVzykxgFkCQlNlRc%2BvJkOyrKqyzNylUiWDfNhsbU2Gyt6DLwkDCW8zOHMz3ERjfZ3hLe4qtFRv5SNC3%2FK5cmkJjIJZ%2BWus%2B25opakJV5h%2Bpbx%2FPls61Sr%2Fx7YZKIbZ5qftl8DmDp5wzlYrA2VW9YxgyJUafvuHqGtLbW5KkOBCeQqIsaLVk%2F%2FPu%2FtigeDARaVNAIcBk1%2BgEoxjzwOBQMS8DS5fGSirzqjoPkUOBNrOxcniOxKhbwgyv%2FIS77JCmKSqqiDRCo9dMU8nh6FfOuTN0CmcPdkVWm4r82jGDb5BPU0Oxj6yMUTwslVm7IRWyWGCZnIOWNXsyDa2vwCqEwugTxoWCqA7omjg54q6%2FOiaYlUKhxCF1pNfMHdDKX9uPugHhqGMw64CLygY6pgGPQEOOMCR9PXxwKyFPIxVNguY3O4%2FIm1aHCmCm5kgOKuuA9Ho5Y1%2FkMXtl9V9xuJEWHkz9yYrw53IDwPX3qxy%2BnveJMDr93DLz%2Fs6jv3GJcIfr6e%2FmvrgW5AnL3gMtUr8JqJoa5I5oDcj6VVRaNoFquiqVaBR6I91Onhh07C8%2B87qR%2BRRLnUTVTBlwPMtchz9I2SqeUwtig1F0eqgmrACViDJ9XN54&X-Amz-Signature=53f6adcfe4c5ff5576685f6f788284b56f173e030e140145d2b5bed774e18fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3ZXV2Z6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDHfHWcY5cfSddf1BDDmr35Hhq4ucDBMZoiR5s8jnMwAiBiOtUFHnWKLIHZboDtdOUlhKKvwOrJbvWrpx6DHVj08iqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkvZf4cJSbsViKAIxKtwDUYX4EIVtL2uJzh%2FpAnH97D4pZ8DVJUPxc7t0CniYwq8V9ZSGQy3xFdcePiBYVjZRcZsx5lamJ%2BIdr%2FQhpLnTRNFYyXUI7DesIMxOMPVbxf6TiSeG1hMK7D2qNqnaDFiafAgxw%2BboHjfh%2BrqPNFgt3B0fWpZqS%2Fn%2FM5qU7yBb%2F4CXaD5jZVmitZd8dcn5MePOKJBDCXTBkxmpleXvCtfnds6Vph%2FZCVeAveG%2B8C04GOc%2BOjfEnfWMUGVzykxgFkCQlNlRc%2BvJkOyrKqyzNylUiWDfNhsbU2Gyt6DLwkDCW8zOHMz3ERjfZ3hLe4qtFRv5SNC3%2FK5cmkJjIJZ%2BWus%2B25opakJV5h%2Bpbx%2FPls61Sr%2Fx7YZKIbZ5qftl8DmDp5wzlYrA2VW9YxgyJUafvuHqGtLbW5KkOBCeQqIsaLVk%2F%2FPu%2FtigeDARaVNAIcBk1%2BgEoxjzwOBQMS8DS5fGSirzqjoPkUOBNrOxcniOxKhbwgyv%2FIS77JCmKSqqiDRCo9dMU8nh6FfOuTN0CmcPdkVWm4r82jGDb5BPU0Oxj6yMUTwslVm7IRWyWGCZnIOWNXsyDa2vwCqEwugTxoWCqA7omjg54q6%2FOiaYlUKhxCF1pNfMHdDKX9uPugHhqGMw64CLygY6pgGPQEOOMCR9PXxwKyFPIxVNguY3O4%2FIm1aHCmCm5kgOKuuA9Ho5Y1%2FkMXtl9V9xuJEWHkz9yYrw53IDwPX3qxy%2BnveJMDr93DLz%2Fs6jv3GJcIfr6e%2FmvrgW5AnL3gMtUr8JqJoa5I5oDcj6VVRaNoFquiqVaBR6I91Onhh07C8%2B87qR%2BRRLnUTVTBlwPMtchz9I2SqeUwtig1F0eqgmrACViDJ9XN54&X-Amz-Signature=f62a51cd82b6a7038688442357ad565564f42f3d552098440ba58110af90eb86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

