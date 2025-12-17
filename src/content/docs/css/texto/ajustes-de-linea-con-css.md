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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467IYEP5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUt1qpAWxFTEhoKU1p1Fe0FtEmFS8RA%2B5pE1YGleqeAiB81EE6Q%2F%2FVXMjbxcfTCWeb3CC%2BWDEBIV5Lw41w1DtiEir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZtcISQDR4YP3aI6gKtwDB0uq%2BNP%2FBIahxhnWZxjLagtR0x6rlVvxF%2BVTWk7FGgXpz9w0xkggZ6yMnzDXIAASvmWaYT2XTkEURXlGRuy8s0G%2FfdZfXXSbsqi9G7FmBp7zM%2FihV3RtDISqZc5ac9%2FFfgxJ9Qy4%2FtAeuEMuGMCR6IJIfYeC3IUSV2NMnCt8vrPcl2MsW%2FePdBgrEHGIvVeHu3OCCVFy0WY9HfZ9kdpbb6BIRrfUx%2Fb4%2Fl4A5dPTj%2BIMfj2vfxdb%2BgzwcWO20ZpG%2BAYytSrpvc6voo8Tdn4DKIBatdp79YGdf%2F7DjCYtiVobTxS4Sq45gf1y65x6SY9HKFrwXZHxTsPzpOl02OD4Ytd%2B19U2Nzcpqd6ezgbDPYLGWvVaR%2Fz4RW25kKpiHj1OpguJjec0I3mapCsIHn2im780glXzIFytlc6K7immLqi0fDZVd5fNh%2Fkoj5AcKp8ZiZFxnWj5CHGTbaJ477ZKSSujRkVdrIVHI9%2Bpz0fpk11kdeIFRNpw%2FcKR%2Bb9bXW0jGckhjcE8yjiDzaDZMd8KqprAR6HIoWSgVCy7wVRWEDxVMuxSLkkF6DjlL%2FbTRQvoIKT5Iq2i4yeklSXj1AV7HaiRD3TgaAn3Vd7EUdJneb%2B6S%2B437E49g3wVMEIw7uCKygY6pgFypogjefJxjmw9Nz0qIDKUWRz%2BbBGmYPD3JTjJH5I36IeIALXZ%2BOm%2FKRrXA9WZ8MOBvvxA%2FZLORaI6WzyItztK6abjYd6Yl1nwN4u49XQJmIrrvwzBXCW49njxXE1rJB%2BvxfKwhxMCBQ0d7QWGENU6BJdOmlI0rJcWDs8rur5JrRNI3IPBYmXGetL%2BJSiZXO%2FFKijbHTWU2BU9ldrncFM2jGqUjc9R&X-Amz-Signature=3809c0d4eb3550935ff7cc7110f21bbae8e1fd36085537c6d37a5d3a6b28067d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466467IYEP5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkUt1qpAWxFTEhoKU1p1Fe0FtEmFS8RA%2B5pE1YGleqeAiB81EE6Q%2F%2FVXMjbxcfTCWeb3CC%2BWDEBIV5Lw41w1DtiEir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMZtcISQDR4YP3aI6gKtwDB0uq%2BNP%2FBIahxhnWZxjLagtR0x6rlVvxF%2BVTWk7FGgXpz9w0xkggZ6yMnzDXIAASvmWaYT2XTkEURXlGRuy8s0G%2FfdZfXXSbsqi9G7FmBp7zM%2FihV3RtDISqZc5ac9%2FFfgxJ9Qy4%2FtAeuEMuGMCR6IJIfYeC3IUSV2NMnCt8vrPcl2MsW%2FePdBgrEHGIvVeHu3OCCVFy0WY9HfZ9kdpbb6BIRrfUx%2Fb4%2Fl4A5dPTj%2BIMfj2vfxdb%2BgzwcWO20ZpG%2BAYytSrpvc6voo8Tdn4DKIBatdp79YGdf%2F7DjCYtiVobTxS4Sq45gf1y65x6SY9HKFrwXZHxTsPzpOl02OD4Ytd%2B19U2Nzcpqd6ezgbDPYLGWvVaR%2Fz4RW25kKpiHj1OpguJjec0I3mapCsIHn2im780glXzIFytlc6K7immLqi0fDZVd5fNh%2Fkoj5AcKp8ZiZFxnWj5CHGTbaJ477ZKSSujRkVdrIVHI9%2Bpz0fpk11kdeIFRNpw%2FcKR%2Bb9bXW0jGckhjcE8yjiDzaDZMd8KqprAR6HIoWSgVCy7wVRWEDxVMuxSLkkF6DjlL%2FbTRQvoIKT5Iq2i4yeklSXj1AV7HaiRD3TgaAn3Vd7EUdJneb%2B6S%2B437E49g3wVMEIw7uCKygY6pgFypogjefJxjmw9Nz0qIDKUWRz%2BbBGmYPD3JTjJH5I36IeIALXZ%2BOm%2FKRrXA9WZ8MOBvvxA%2FZLORaI6WzyItztK6abjYd6Yl1nwN4u49XQJmIrrvwzBXCW49njxXE1rJB%2BvxfKwhxMCBQ0d7QWGENU6BJdOmlI0rJcWDs8rur5JrRNI3IPBYmXGetL%2BJSiZXO%2FFKijbHTWU2BU9ldrncFM2jGqUjc9R&X-Amz-Signature=0d35f8691f7f5cb21a4c0f82567058c845712c80429bcec2a553095333038539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

