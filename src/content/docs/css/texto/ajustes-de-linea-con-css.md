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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLGOQRT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTe8ko8AW8kLS91LAd%2FVCw3V2aBUq2BTCCFhB0qcfs%2FAIgOGYR5%2BpHETy%2Bv2eYb4u22kATMcMayUeFqGa3PPXLY8Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE%2Fa6zl075Wwr9jd8SrcAwTjnh0nsq%2F457sFiW8ZHRDBssZDIyS5pJra5PBCgyiw65ZLIx43cc7dNZe%2Fen1JCOb9%2FbDUqX1x79hfdXL6%2BlbQod8k0nLwRyXH1awpsJJSGkvLfYK0jRMRd%2FvBnSgTzCuF%2FbjHzHFIaJNf3wdQHUbNSKiUaDfT2HXDkyFeuBMZk5%2F6aYO7aaXLULW2iHNGl0G8wqmdycqQnvRCLH8ArBG1wjwyXQT0sANqLCp3XDqCKsnHxCFriUuHf0rdUaah2l%2F2dnP1hn%2FL%2BLwqX%2F3te%2F%2FtN3QHqEbDoovG7I115FBQgqF%2F7NoNZEFz4iQso8BoCyT1qUSDyDMnIW8MbTaVMjDiH4rOr184N9bmcvz6W%2FxoXV1SLcRrjhoorvz8UlGpMep01y%2BixCfpeyad%2BzDNemW2b77nI3kN5M1CIrgB6QsVpoQD8smgELnZk4xQCdzuPfH0CHQZFUu6%2FuiKvqNy3OSRZNfGmOSZw%2Ba0epIEdmW%2FsQNw5bkUAzIqoGI7HiyVmLCqAzYTGA571dGfeIDO%2FYo3HuAgnCeXJX4jcji%2FDcArC9tlTFuiV9bDW9%2B4QZhx7Z3iG5Ymc%2FR22JyECo54xHsC%2FDSMnCTK1TOhNHb9foU5whuS3Nm8k9i7ul%2BhMJ7fh8oGOqUBkR9%2Bre37nDVeXr%2FQ5KrGyrkZSOS2TN7n1Y2SBRai6GajQlEcirgcc%2Fs%2FzGYdVAjmpXQEw2QFfdYXufGiR1mrP0CrUEkKMejRXq7LFHcWstIZl2jnXDSnASgXTBm0stmbVKMwrn08pAERAe9yub5mo9Y38myA6ah9jUVAAJtFBEnibJd1XWgmXwfm62x9%2B%2FzM0rg9vFxJh%2FH7Zqj9R6OVWHxP3tVj&X-Amz-Signature=63c7d49eaaa9dd93ec62501ce76f2e3e4e853f76d1e96144f30a61022c719c4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLGOQRT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTe8ko8AW8kLS91LAd%2FVCw3V2aBUq2BTCCFhB0qcfs%2FAIgOGYR5%2BpHETy%2Bv2eYb4u22kATMcMayUeFqGa3PPXLY8Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDE%2Fa6zl075Wwr9jd8SrcAwTjnh0nsq%2F457sFiW8ZHRDBssZDIyS5pJra5PBCgyiw65ZLIx43cc7dNZe%2Fen1JCOb9%2FbDUqX1x79hfdXL6%2BlbQod8k0nLwRyXH1awpsJJSGkvLfYK0jRMRd%2FvBnSgTzCuF%2FbjHzHFIaJNf3wdQHUbNSKiUaDfT2HXDkyFeuBMZk5%2F6aYO7aaXLULW2iHNGl0G8wqmdycqQnvRCLH8ArBG1wjwyXQT0sANqLCp3XDqCKsnHxCFriUuHf0rdUaah2l%2F2dnP1hn%2FL%2BLwqX%2F3te%2F%2FtN3QHqEbDoovG7I115FBQgqF%2F7NoNZEFz4iQso8BoCyT1qUSDyDMnIW8MbTaVMjDiH4rOr184N9bmcvz6W%2FxoXV1SLcRrjhoorvz8UlGpMep01y%2BixCfpeyad%2BzDNemW2b77nI3kN5M1CIrgB6QsVpoQD8smgELnZk4xQCdzuPfH0CHQZFUu6%2FuiKvqNy3OSRZNfGmOSZw%2Ba0epIEdmW%2FsQNw5bkUAzIqoGI7HiyVmLCqAzYTGA571dGfeIDO%2FYo3HuAgnCeXJX4jcji%2FDcArC9tlTFuiV9bDW9%2B4QZhx7Z3iG5Ymc%2FR22JyECo54xHsC%2FDSMnCTK1TOhNHb9foU5whuS3Nm8k9i7ul%2BhMJ7fh8oGOqUBkR9%2Bre37nDVeXr%2FQ5KrGyrkZSOS2TN7n1Y2SBRai6GajQlEcirgcc%2Fs%2FzGYdVAjmpXQEw2QFfdYXufGiR1mrP0CrUEkKMejRXq7LFHcWstIZl2jnXDSnASgXTBm0stmbVKMwrn08pAERAe9yub5mo9Y38myA6ah9jUVAAJtFBEnibJd1XWgmXwfm62x9%2B%2FzM0rg9vFxJh%2FH7Zqj9R6OVWHxP3tVj&X-Amz-Signature=be525560eef492121699cbeaa44f3ea708eeadcbfe2b6b174a30d400c13d60e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

