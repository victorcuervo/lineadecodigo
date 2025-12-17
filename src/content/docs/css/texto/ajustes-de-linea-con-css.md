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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624H4QCY2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSaUeGpOMRskkfALaygq3gGW7BwfPJBTnOVNkTlq0UOgIgIsLd4bvIoX9DCvGsVLpajKtb55mYZITaVJ8yfx1o%2FsQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlqe7tBRea0idsi8SrcA5bwsE2GOhnYi0MLRUKJe2MyJ3VzP5UoSA48Nk7f4JjA%2FeN5HQ8mjBVwMoRv%2BvUr%2FMxksnC5TAIXFz7PUrEqdfke9nE3aETqrKj4d7OSTwYyL0pSerhK%2Fsb3%2Fjep73R5ZFeh95TIqE3SICigVPCZEDPN4z%2F4ge3rOmmlyudEGzyeWcLgOrUtak%2BJNTx11FoC5AETDxm6Ls1y94njcpFUIHjzTxdWXPRUmKaofRnT6IZDrfroMKSrX6%2FaNOMLfuWLzB2xpQtqhCYIOP0RyJPYRPUAUarRtWMkQOiMuSVabhMG5Ch8nIhKYfnBBfFgm1FY5eSBDnnGYhEvgLNwjUy1CzO%2FY20S%2FpRnQaKALY5KdcbbXQxyhYTEDJZYHeErnVACuxuiZ0sIFrPgKFtB1vi8v9Do8Qk1OWVkQP6q%2BPjeykircWcZ0Ms1gzmz1AxDf5Q6ysn%2FbFuxWCJsSiEgA%2BwTnTzboG%2FaOIrAQvPOiexIBgJ%2Ffw3tPg2PPRckiGbpF9ummu2U3I762Xb7cog%2FLe2fnR2b646oRuAXw1QkvgpGa%2F%2BO0ZfrNuLUQUpTjHZQ9Aq4Yg0qWiZrItqj7sBEigvXppkPLtbhxnz1%2B2g%2BEJzRol7JZ0cCX675dxs0xvViMI2ujMoGOqUBkBGEkcqs3y12s7VL6s1uxk7d9laE63x6SuX1riVQUYVvNBKOjRnezMVW5fIc%2F09BaPaWI3uc7LY29XKbGMHfDSD3zAvO4Wmwc568aUCpc7rAP68AzsHxVNvBWL0luG9GXhbV2X%2FxPpGxaHAk2MN38xw08JFo2oWFAmZRU%2Bhv0BcMsSHCTd5z3igidwFdifDeYmTQ1jrk7EWiMYgdPF2ZIvlIiorL&X-Amz-Signature=1214e2fae32cc7f2d42a06a0d4d471868b4e43ea7e548aadff6e4255f9f1c100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624H4QCY2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSaUeGpOMRskkfALaygq3gGW7BwfPJBTnOVNkTlq0UOgIgIsLd4bvIoX9DCvGsVLpajKtb55mYZITaVJ8yfx1o%2FsQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlqe7tBRea0idsi8SrcA5bwsE2GOhnYi0MLRUKJe2MyJ3VzP5UoSA48Nk7f4JjA%2FeN5HQ8mjBVwMoRv%2BvUr%2FMxksnC5TAIXFz7PUrEqdfke9nE3aETqrKj4d7OSTwYyL0pSerhK%2Fsb3%2Fjep73R5ZFeh95TIqE3SICigVPCZEDPN4z%2F4ge3rOmmlyudEGzyeWcLgOrUtak%2BJNTx11FoC5AETDxm6Ls1y94njcpFUIHjzTxdWXPRUmKaofRnT6IZDrfroMKSrX6%2FaNOMLfuWLzB2xpQtqhCYIOP0RyJPYRPUAUarRtWMkQOiMuSVabhMG5Ch8nIhKYfnBBfFgm1FY5eSBDnnGYhEvgLNwjUy1CzO%2FY20S%2FpRnQaKALY5KdcbbXQxyhYTEDJZYHeErnVACuxuiZ0sIFrPgKFtB1vi8v9Do8Qk1OWVkQP6q%2BPjeykircWcZ0Ms1gzmz1AxDf5Q6ysn%2FbFuxWCJsSiEgA%2BwTnTzboG%2FaOIrAQvPOiexIBgJ%2Ffw3tPg2PPRckiGbpF9ummu2U3I762Xb7cog%2FLe2fnR2b646oRuAXw1QkvgpGa%2F%2BO0ZfrNuLUQUpTjHZQ9Aq4Yg0qWiZrItqj7sBEigvXppkPLtbhxnz1%2B2g%2BEJzRol7JZ0cCX675dxs0xvViMI2ujMoGOqUBkBGEkcqs3y12s7VL6s1uxk7d9laE63x6SuX1riVQUYVvNBKOjRnezMVW5fIc%2F09BaPaWI3uc7LY29XKbGMHfDSD3zAvO4Wmwc568aUCpc7rAP68AzsHxVNvBWL0luG9GXhbV2X%2FxPpGxaHAk2MN38xw08JFo2oWFAmZRU%2Bhv0BcMsSHCTd5z3igidwFdifDeYmTQ1jrk7EWiMYgdPF2ZIvlIiorL&X-Amz-Signature=2aea533b45552ee15e971d9f4dd02baab49253a9e08f248716dede1b3c8ea40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

