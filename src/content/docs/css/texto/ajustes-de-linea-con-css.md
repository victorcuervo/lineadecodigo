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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTCNVO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbHzR637V5Cs9WniZMVH2SZM4Yn2xmkJ%2BINpBy867zrAiEAo07%2Bcu0zQZ0Go5RBptXUSkQ37%2BsWcw%2FRcndJx1qglZUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh%2Fh1uCsp1r3XF4CSrcA0QLdT81tCMtYxaY8DfI0%2BvEl7204oB1sWDd3T773xCQoqvHVps%2FiRNxzRUiyEpK5yA6WuUrsmsdpI1BUf3ALbnwAAeAc7H7zJMd8Yr3j6ptyhocnOWJb0x%2FDL1%2BQhMTIC4v%2BLF1GSu5p0mC3PgkK2%2FqKxukkqTzel6UEFshISoAvQMVvnYSEDt9Ag0do1CSPPdRcbfK%2F0EnQ27184NmmNAozNrP1LCaFK5ecGVsx9W4522OpLFtRVI5nJoFIoNe%2BxOBAUCKwNJSspMY4jITAc4RejYvCMs1bTtSPl0QHp8GZmnU4swmfKpG1biabWGiw8k2BeGhIpySBgj58OOdKd3k9r5Y5WwRtIOSTVRV0JERWuEqJFD7%2BwqG61gTUuMDvvGApHmC5nYpHPB0X7LPdgfl3Y2b1uDXeTSORpEOvE%2B1EzGPLKLpSISLtmyJW3Gnakn8G9%2FRajmi7StcytYFNBHHwAliJ9hdPQMXX3PWEEAqXV0Vx2a9WqaC%2FIkpO0MHWFV6FSip4bE6ZWLsM6fyBZ7AVyUpc6nphJOksz590c58w%2B25kt2h8gH4hYZ1ZNbBSQleKBeart7SKq0aUZPBcdxLzLBxANN6MgGmVoxIr1TDn5ZCscD2gOyJw8FIMM2tjMoGOqUBRX0i514poOItsZM35yDOJog%2B%2F0%2FB0nAEkym43pj621iu1UJjjOkBPKnk4b30f4VSxLhzT6zKCA6Pgaj%2B9KbC16pla30OpbD98FgZiZMpDGCACzMAFkClrZ9%2BwJA%2F3htSAZMnLGmAtIbEBKs9ziqNycovo3e8Gt2YtHIkwoJD%2FZ8hmi7sa4NwTsgXxAH52meN9bvtwU72mj3paWqyTLtZ8ed%2F2Lqj&X-Amz-Signature=20b7f4ecaa706ed6df6f57400aa9ec9b71c9b667ac632e5fd649d1faf15e2c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XTCNVO7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbHzR637V5Cs9WniZMVH2SZM4Yn2xmkJ%2BINpBy867zrAiEAo07%2Bcu0zQZ0Go5RBptXUSkQ37%2BsWcw%2FRcndJx1qglZUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMh%2Fh1uCsp1r3XF4CSrcA0QLdT81tCMtYxaY8DfI0%2BvEl7204oB1sWDd3T773xCQoqvHVps%2FiRNxzRUiyEpK5yA6WuUrsmsdpI1BUf3ALbnwAAeAc7H7zJMd8Yr3j6ptyhocnOWJb0x%2FDL1%2BQhMTIC4v%2BLF1GSu5p0mC3PgkK2%2FqKxukkqTzel6UEFshISoAvQMVvnYSEDt9Ag0do1CSPPdRcbfK%2F0EnQ27184NmmNAozNrP1LCaFK5ecGVsx9W4522OpLFtRVI5nJoFIoNe%2BxOBAUCKwNJSspMY4jITAc4RejYvCMs1bTtSPl0QHp8GZmnU4swmfKpG1biabWGiw8k2BeGhIpySBgj58OOdKd3k9r5Y5WwRtIOSTVRV0JERWuEqJFD7%2BwqG61gTUuMDvvGApHmC5nYpHPB0X7LPdgfl3Y2b1uDXeTSORpEOvE%2B1EzGPLKLpSISLtmyJW3Gnakn8G9%2FRajmi7StcytYFNBHHwAliJ9hdPQMXX3PWEEAqXV0Vx2a9WqaC%2FIkpO0MHWFV6FSip4bE6ZWLsM6fyBZ7AVyUpc6nphJOksz590c58w%2B25kt2h8gH4hYZ1ZNbBSQleKBeart7SKq0aUZPBcdxLzLBxANN6MgGmVoxIr1TDn5ZCscD2gOyJw8FIMM2tjMoGOqUBRX0i514poOItsZM35yDOJog%2B%2F0%2FB0nAEkym43pj621iu1UJjjOkBPKnk4b30f4VSxLhzT6zKCA6Pgaj%2B9KbC16pla30OpbD98FgZiZMpDGCACzMAFkClrZ9%2BwJA%2F3htSAZMnLGmAtIbEBKs9ziqNycovo3e8Gt2YtHIkwoJD%2FZ8hmi7sa4NwTsgXxAH52meN9bvtwU72mj3paWqyTLtZ8ed%2F2Lqj&X-Amz-Signature=12d91788907fed13f421c836c730d802cbe645a4862c987dca8f4c9d7cf4b07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

