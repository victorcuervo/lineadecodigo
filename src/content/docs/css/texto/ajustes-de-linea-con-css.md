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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPDD3EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYGTNhfbT%2FKlkQyyCcApGiftPjR5DYmqYej2%2BFxWln%2FAiEAl5PIZCEu1LDyrZSwvdXhkFbUBlgDX75Req2sFkwErMkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKobzV3Lv%2FFO5NpMnyrcA6SEwTGDYPlLlftS2ItVkAkUdXxdX5nGLq4hkK%2BS8o2z8OfS2xx9V7%2B33ChDLYn1zVw2Pt2fSgQuTk6VYBKekuRdH032GukqdzDSDNTfgkjaV1brtHpy2%2BfULXLOu6n38JQ95A7RDvTIzTKow5N0Nq45L8mM4EN90HTmffqHdCC8VcJNf7xFPKW9z08vxZcc6is7lauFvxesr4XlN96gqn9Ek04c91NyIuyu%2B4sMBMdfYLyifOVL9DJ%2FO8ANU%2F0W0lR2qvKuBXdUFeOQI69O%2Fa%2BfkOhMXmhO9p%2BxWmr108EM63f7XrtCVUTg7IHXiykntlwqgz34i%2FV3rYhL2BgatSXQlI4YtxY2B%2B7NsSdl%2B6n7tHBPdmfEGskqXSOcU%2F81l80ATzLEp0mZ6liz0uwdmT7eUotLItf9VQncjxdV2pT%2F%2BEj2eB6LAvnVDcg%2BDlWZecJn1ckWXliRFLQ1dVXF%2BNHrdcxF5boup5qLboG8a1JMq6qN4VV0R0POzOGTctf%2FkprDwyY7%2FKrq1QDQdWu7m9XK96wvxM5tIPaEWlYiI0P4PGuYHDPF%2F0f8SIsMvyjTBgSn5zTihcz%2BuAQQmkSzwLp4F0Pnogp1%2FEe2U%2FuaqsNEX34eTZCORgyYUMMVMOuOisoGOqUBdBKA9LOWY%2FPbYBqhwA%2Fdmwyznd2UGiTwDavOtOiTyuaLebMe7yGEc641jT6IrSEgn00T0OeHdNHKjL9U9E%2B6PWfsrsoLhjG%2Bs3So%2BbtFwxlNUdnFiHGJh6UNqqU89OEuXh0C%2FPa2ct02%2F5J70lYPgPOrtqeRAxsiQPrffKfqUCx4tN7f%2F06VKAs9%2F66Z%2FCfHNoEip0UaeciLl6nn8DRgOQsvM3A%2B&X-Amz-Signature=0b84bf5dc2a386dae8444807ca2fdad48c2de7f6ed9accfbbf4dcb5af39d37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRPDD3EQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYGTNhfbT%2FKlkQyyCcApGiftPjR5DYmqYej2%2BFxWln%2FAiEAl5PIZCEu1LDyrZSwvdXhkFbUBlgDX75Req2sFkwErMkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKobzV3Lv%2FFO5NpMnyrcA6SEwTGDYPlLlftS2ItVkAkUdXxdX5nGLq4hkK%2BS8o2z8OfS2xx9V7%2B33ChDLYn1zVw2Pt2fSgQuTk6VYBKekuRdH032GukqdzDSDNTfgkjaV1brtHpy2%2BfULXLOu6n38JQ95A7RDvTIzTKow5N0Nq45L8mM4EN90HTmffqHdCC8VcJNf7xFPKW9z08vxZcc6is7lauFvxesr4XlN96gqn9Ek04c91NyIuyu%2B4sMBMdfYLyifOVL9DJ%2FO8ANU%2F0W0lR2qvKuBXdUFeOQI69O%2Fa%2BfkOhMXmhO9p%2BxWmr108EM63f7XrtCVUTg7IHXiykntlwqgz34i%2FV3rYhL2BgatSXQlI4YtxY2B%2B7NsSdl%2B6n7tHBPdmfEGskqXSOcU%2F81l80ATzLEp0mZ6liz0uwdmT7eUotLItf9VQncjxdV2pT%2F%2BEj2eB6LAvnVDcg%2BDlWZecJn1ckWXliRFLQ1dVXF%2BNHrdcxF5boup5qLboG8a1JMq6qN4VV0R0POzOGTctf%2FkprDwyY7%2FKrq1QDQdWu7m9XK96wvxM5tIPaEWlYiI0P4PGuYHDPF%2F0f8SIsMvyjTBgSn5zTihcz%2BuAQQmkSzwLp4F0Pnogp1%2FEe2U%2FuaqsNEX34eTZCORgyYUMMVMOuOisoGOqUBdBKA9LOWY%2FPbYBqhwA%2Fdmwyznd2UGiTwDavOtOiTyuaLebMe7yGEc641jT6IrSEgn00T0OeHdNHKjL9U9E%2B6PWfsrsoLhjG%2Bs3So%2BbtFwxlNUdnFiHGJh6UNqqU89OEuXh0C%2FPa2ct02%2F5J70lYPgPOrtqeRAxsiQPrffKfqUCx4tN7f%2F06VKAs9%2F66Z%2FCfHNoEip0UaeciLl6nn8DRgOQsvM3A%2B&X-Amz-Signature=498e2b8465673fe05492c1b6e74484405e6c0cb2eb98a976c20bbd6b5befc18f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

