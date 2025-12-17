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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYABNIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHFGFgn9CQWaBPbr0%2BMc3Murffe6mSvh4OMZvzAkHBjAiEA2b2QjhqEINSfFJ9lsaHYwcdbGq9JVhdL13J0k4kNeVgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3QQmdK4UXSfffnrSrcA0TULBCmV9eLT%2Bep2eTQpIwhlaBCyic%2BYlzhWAOvcDT8T7Dfr9IV4CTE%2BYBEqIVMBsZpNvOUP5ipHsVWJMZ0yBIEzNI51L1%2FAoX9x75DCglkm5itGWMGPf8ruB34K1ToEjGIbBnH5%2FGknOt%2FLSmEdUB7A2PBRzVAXf15sdGc%2FnDXHu%2F5NKAR6i68QE3I37BqfjxyPgcYh65UUInXreNPTAV%2B5TQR98asoHyE8F%2Fi06BuwG22vytYRKrXU9%2BVPoKdhQ5H7mV%2BMewCNCUA8BrC8%2BFNL7myqrS56nCWfEPBRegHwFUjWv1wBDIpwxkuFzHPJ1XrSjiay2YjgaUbu01AOOdtc4ygpR5%2BymLavhKijsN0b1jQfsqWfBxRlRituZC17LqGgpj1P1Z%2BJxGvwgM7g7juPLxtvq1MoPeN8U86bIweJ7psgrUQrkl6HL5FN7hJw8GKoz%2FIXYTXiYFu2ammY2hCpt3VDsmIDeskklbb%2BlAp3NpCjhvcGZKv2yV86W0Q9bkwWV23GPOxxPHlHYBysDSq7xBytZkKP1UOoXM8nAhA%2Fa6chPq0Z5fj9OhMWR9qZF1a0la%2B%2BtT1YdbelidN%2FaZCn5OPjFPSxiFt%2B5OAOp4ZDivTYZO5su0b8s%2FvMKufi8oGOqUB8tXPnMHb2%2FOdz388kpNpBcDEweZYVrtuhiQPgBrNcNhurcn%2FMN77d%2BsLrmWhl%2FkA3PFEdP%2Bdr7J8rBi9iKpCy410Da2q%2BjSLRwi0hH1Rx1HLK1mYN82z6sTtFjWrgBZ%2BntrnEh%2B89wDRctPCZye%2BusL534SEf2kNJn0wj9KG8dVDvkdFmpm%2BWCfHGkYiZvaNE7LqOIlWdTqRCNFwtQ9lYqZ43v0p&X-Amz-Signature=f55cd2c281cc1d78252917be545d477a5960c95bc5173d3ceeb7888f248c86b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJYABNIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHFGFgn9CQWaBPbr0%2BMc3Murffe6mSvh4OMZvzAkHBjAiEA2b2QjhqEINSfFJ9lsaHYwcdbGq9JVhdL13J0k4kNeVgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3QQmdK4UXSfffnrSrcA0TULBCmV9eLT%2Bep2eTQpIwhlaBCyic%2BYlzhWAOvcDT8T7Dfr9IV4CTE%2BYBEqIVMBsZpNvOUP5ipHsVWJMZ0yBIEzNI51L1%2FAoX9x75DCglkm5itGWMGPf8ruB34K1ToEjGIbBnH5%2FGknOt%2FLSmEdUB7A2PBRzVAXf15sdGc%2FnDXHu%2F5NKAR6i68QE3I37BqfjxyPgcYh65UUInXreNPTAV%2B5TQR98asoHyE8F%2Fi06BuwG22vytYRKrXU9%2BVPoKdhQ5H7mV%2BMewCNCUA8BrC8%2BFNL7myqrS56nCWfEPBRegHwFUjWv1wBDIpwxkuFzHPJ1XrSjiay2YjgaUbu01AOOdtc4ygpR5%2BymLavhKijsN0b1jQfsqWfBxRlRituZC17LqGgpj1P1Z%2BJxGvwgM7g7juPLxtvq1MoPeN8U86bIweJ7psgrUQrkl6HL5FN7hJw8GKoz%2FIXYTXiYFu2ammY2hCpt3VDsmIDeskklbb%2BlAp3NpCjhvcGZKv2yV86W0Q9bkwWV23GPOxxPHlHYBysDSq7xBytZkKP1UOoXM8nAhA%2Fa6chPq0Z5fj9OhMWR9qZF1a0la%2B%2BtT1YdbelidN%2FaZCn5OPjFPSxiFt%2B5OAOp4ZDivTYZO5su0b8s%2FvMKufi8oGOqUB8tXPnMHb2%2FOdz388kpNpBcDEweZYVrtuhiQPgBrNcNhurcn%2FMN77d%2BsLrmWhl%2FkA3PFEdP%2Bdr7J8rBi9iKpCy410Da2q%2BjSLRwi0hH1Rx1HLK1mYN82z6sTtFjWrgBZ%2BntrnEh%2B89wDRctPCZye%2BusL534SEf2kNJn0wj9KG8dVDvkdFmpm%2BWCfHGkYiZvaNE7LqOIlWdTqRCNFwtQ9lYqZ43v0p&X-Amz-Signature=5388328e5881a46e806d93cbb24a7a1cf9d8ebc223762c814ab9ff9aaf6e28f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

