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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGRWJYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvuH%2F88ogctaOu7OBALrqS4XaZNYls3rCaqwVijy9XAiEAsVVbz5PwnYaAAvpVe2yVzY8mXoChFdfbi%2FmZD%2Fwlg2Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPY65NS5IPNbmtAnFircA6txOZGu1o1xreRtJDPPxM5xKzELyz0Lbl%2BWIYQBYCG9rCBEFf6NZ94uNIluiS4r4V1%2FWjD5jKAJex32u4bnEWJjXSTuM0%2FRC%2BTNvjxQivwxtVud%2Fhbi0QuxmGc%2F9MYy7R48xB2UqAOIngxN8zOwekaaTnl%2F%2Fj4hLhzBOerAowH5nfOWJtugCDNOcrtmXHZUChO7BlQnU1MdGCcJSmebHLw0n6L9%2FaQeTp6hUonlvmNSevdSQdMe2%2B2xnXpgv%2FRuUjPuiLHIWPovU7%2BL6O5IQiz2P92V%2FFc79PEKxSdDTWwHeryC6fhXXD9vPDMcupnxWd40b7yaxwGhGrKPrI0T0cJymGt3DtH%2BtxgUXuZrRNIXsIV8ABm0eXRRF0fG%2FglEP5jxHKIfPQZWWi0nJFqqZJgrUcUlrsQS3SmYNaSKFoeEbsulU3t9W0Zuxmznp7N3z13Xr9ASqop6hAgOv8FJLQHImGPY2GF%2BsDkZdP9%2FvjrniOQSldJPALF38mFM%2F0Rkmd%2B3KmrBFxGnJc5cWpUamwWP%2FvsQuLarfJ93O3ZkO2VUvb3Ka31s2Y%2BxjIWyHMR4%2F6Hmv5fPeAQYVHJZ%2FAsLCK2QHjYtJybZFcNoocNedsu6S5kiiR%2FIvvjsw3ZyMIXOiMoGOqUBkpwuaP0SWWNQOIkkQGYPxP%2BEC3AEJAlIP9b2wAUm%2BLaYvs2%2Fz4zahyZAJOQy11QzrfbN64EU2p0XYSBgojDp0EyfYuq%2BOhag8ZPIS3Ab3j0VxKoEePfeZmFL38NQRUQLZG1VJR%2FelsYaOHipV6iYgtB%2BKD9o7HHmSBAHJcYkVNj9PdjjWSXr%2F9d%2BsDtBpmcR17PomIbY%2BcwdWhlow4O7B8ygA7O%2F&X-Amz-Signature=2d3dcad7e3411d589acc72983b08ff336a241d0b10db98d26dc20f77165abf65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TGRWJYY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqvuH%2F88ogctaOu7OBALrqS4XaZNYls3rCaqwVijy9XAiEAsVVbz5PwnYaAAvpVe2yVzY8mXoChFdfbi%2FmZD%2Fwlg2Aq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPY65NS5IPNbmtAnFircA6txOZGu1o1xreRtJDPPxM5xKzELyz0Lbl%2BWIYQBYCG9rCBEFf6NZ94uNIluiS4r4V1%2FWjD5jKAJex32u4bnEWJjXSTuM0%2FRC%2BTNvjxQivwxtVud%2Fhbi0QuxmGc%2F9MYy7R48xB2UqAOIngxN8zOwekaaTnl%2F%2Fj4hLhzBOerAowH5nfOWJtugCDNOcrtmXHZUChO7BlQnU1MdGCcJSmebHLw0n6L9%2FaQeTp6hUonlvmNSevdSQdMe2%2B2xnXpgv%2FRuUjPuiLHIWPovU7%2BL6O5IQiz2P92V%2FFc79PEKxSdDTWwHeryC6fhXXD9vPDMcupnxWd40b7yaxwGhGrKPrI0T0cJymGt3DtH%2BtxgUXuZrRNIXsIV8ABm0eXRRF0fG%2FglEP5jxHKIfPQZWWi0nJFqqZJgrUcUlrsQS3SmYNaSKFoeEbsulU3t9W0Zuxmznp7N3z13Xr9ASqop6hAgOv8FJLQHImGPY2GF%2BsDkZdP9%2FvjrniOQSldJPALF38mFM%2F0Rkmd%2B3KmrBFxGnJc5cWpUamwWP%2FvsQuLarfJ93O3ZkO2VUvb3Ka31s2Y%2BxjIWyHMR4%2F6Hmv5fPeAQYVHJZ%2FAsLCK2QHjYtJybZFcNoocNedsu6S5kiiR%2FIvvjsw3ZyMIXOiMoGOqUBkpwuaP0SWWNQOIkkQGYPxP%2BEC3AEJAlIP9b2wAUm%2BLaYvs2%2Fz4zahyZAJOQy11QzrfbN64EU2p0XYSBgojDp0EyfYuq%2BOhag8ZPIS3Ab3j0VxKoEePfeZmFL38NQRUQLZG1VJR%2FelsYaOHipV6iYgtB%2BKD9o7HHmSBAHJcYkVNj9PdjjWSXr%2F9d%2BsDtBpmcR17PomIbY%2BcwdWhlow4O7B8ygA7O%2F&X-Amz-Signature=5cdf2395f0c25cccfe0446a08628f5a2944fcabf12551b48b72f2bd78304801c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

