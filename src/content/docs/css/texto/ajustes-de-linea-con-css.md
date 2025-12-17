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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6MWQ2U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLhENbs%2FmrRZfdVOnO0g28lXFvYr2sjD1XObkhqF%2FzPAiAOP8DeL1Kumnl7q4NuSh30E1Ki4UrtZnLwcNmGKDRcIyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78TPjCH6hMEZBiw0KtwDEOV1dh1XPUS%2FPE%2FklCnVWrxbx1UcVQoSFL7W%2B0c7VwXQmw7cx29c9melfdSnlPLauVOjMXJ9pAZAVJjlQL2heJjyySm28GaWRc%2Bp4MJPfKXNsXGG58oc5AH5KkZlYOefLmg7z%2F0pBpfhAqIX6AwN52UzR%2BSHDofCU7QuQ%2FqxrcZnBT1xzfBg5t%2Fud98XyBWpWdd35xvMcXkXqYa4NlPaKH4eDt2FpP6%2F0%2BgvSu5wcC4xyKnNYkn4mk6unoNVbFIXX%2Fv%2BqcY2nfDEWJnCUph4B9iCoNaOS%2F4ogPFDDajCHqGmWS47ibGwnsd2jc6aO5V737bztR8zdVWNUTpXt2Sc6yMpZDz266TYIFo5JcPMiF%2Fv50Fwa4f%2BZnsnilzZSznqIpqw5KJaZOhTBhtXWAm0rIbETydVxsXaubzRa34ieRkMRfzq0pJ9yurNsVkiOA78pSYrP968JN8jnJPD27VSnD3ouDcOGH05C5r6L8qLwuv7Ma8Aycy9lJa8vsNGtndqh8esFvLhLervyoCZax%2FybMoG5YJvwbEzE1bLBvUpIvJiOH1z%2FdEBtBfeCHzGVDbqtjsaZyN7szhnXkTTOZMW%2F5Jtk7TQPaVZkNI7%2B2VSaAnIhk7r%2BX7p2WZm6WYw%2F%2F%2BKygY6pgH706RCgILOKAlJhm%2F28wFSl9Ef7s9rf%2FcX0HQtkDswrbGxfrXaPaC0Y2M4emmKfw7hwwFU%2B2K%2Fc4wbOQ0wTOALI3vcLORzepR8gNgTX5Q8jv8r6A0wJ6egkH%2BgcRxe%2FkE5bxJhU%2BIKjOiqiyLrTnn0XE8im9fQt%2FqNAJufaY%2BbHic4XoO2P2r5ZEihLRuZLRmQqnPHhCPv5n%2BqHoJsZ%2F86kdDS%2Fp3t&X-Amz-Signature=7d5814280357f585b67c162b175105d9e9037ac4f36cee390a4131dc01a4f39c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6MWQ2U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLhENbs%2FmrRZfdVOnO0g28lXFvYr2sjD1XObkhqF%2FzPAiAOP8DeL1Kumnl7q4NuSh30E1Ki4UrtZnLwcNmGKDRcIyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM78TPjCH6hMEZBiw0KtwDEOV1dh1XPUS%2FPE%2FklCnVWrxbx1UcVQoSFL7W%2B0c7VwXQmw7cx29c9melfdSnlPLauVOjMXJ9pAZAVJjlQL2heJjyySm28GaWRc%2Bp4MJPfKXNsXGG58oc5AH5KkZlYOefLmg7z%2F0pBpfhAqIX6AwN52UzR%2BSHDofCU7QuQ%2FqxrcZnBT1xzfBg5t%2Fud98XyBWpWdd35xvMcXkXqYa4NlPaKH4eDt2FpP6%2F0%2BgvSu5wcC4xyKnNYkn4mk6unoNVbFIXX%2Fv%2BqcY2nfDEWJnCUph4B9iCoNaOS%2F4ogPFDDajCHqGmWS47ibGwnsd2jc6aO5V737bztR8zdVWNUTpXt2Sc6yMpZDz266TYIFo5JcPMiF%2Fv50Fwa4f%2BZnsnilzZSznqIpqw5KJaZOhTBhtXWAm0rIbETydVxsXaubzRa34ieRkMRfzq0pJ9yurNsVkiOA78pSYrP968JN8jnJPD27VSnD3ouDcOGH05C5r6L8qLwuv7Ma8Aycy9lJa8vsNGtndqh8esFvLhLervyoCZax%2FybMoG5YJvwbEzE1bLBvUpIvJiOH1z%2FdEBtBfeCHzGVDbqtjsaZyN7szhnXkTTOZMW%2F5Jtk7TQPaVZkNI7%2B2VSaAnIhk7r%2BX7p2WZm6WYw%2F%2F%2BKygY6pgH706RCgILOKAlJhm%2F28wFSl9Ef7s9rf%2FcX0HQtkDswrbGxfrXaPaC0Y2M4emmKfw7hwwFU%2B2K%2Fc4wbOQ0wTOALI3vcLORzepR8gNgTX5Q8jv8r6A0wJ6egkH%2BgcRxe%2FkE5bxJhU%2BIKjOiqiyLrTnn0XE8im9fQt%2FqNAJufaY%2BbHic4XoO2P2r5ZEihLRuZLRmQqnPHhCPv5n%2BqHoJsZ%2F86kdDS%2Fp3t&X-Amz-Signature=38d0f39a9965e2634c9b9c29703060783ed78b005d7aa26875cea120ec0ee325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

