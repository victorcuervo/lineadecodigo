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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWAGVEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtjHWwxl8n3ZwHFNmRWpiWis5SGTsN2W6%2BFqGNlu3KAIgEGv7f1MpDvSSqBPRPXlwUwTQ1jCHUi80uIzKJ8J%2F%2F0Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMIrCRShCaWNQqvCZSrcA8XH105pfxgDwlzbuvc69m4NZf%2FHyYqQPc0C2fUHiGFSKA5cZOWkEdZ0VvSPAjb7jGrCDeGzp1ZN2DGcI8wJj1YxVQiDU7zCGdovgzCRtWI%2B5wW1%2FrnGlUr9DM6rfXtnZLpwiOQBxm8h92XkVUIzm%2BgHZ32QPggfTa%2Bw9zGaLCLbyD5Te3BENLlUVstWIf3JzeVy1I6UQgxlmxHjcUcfh0%2BzLm3VeGZmEGNICbYR6tQekm0SJZ41jRZ9Q9p7%2BHZcGRp%2Bs8Oa0Ziazhox7Lh%2F1OOxtgIfAzZRmKufNBSalrE6UK3LknkEtYEfqIaCaSoq4dCfqGG6xDCP3MaGzA6QaZVG6l7D7NKRvCgeBm9gPAvn3wKplPOnzFYRK4NQDAIDEFWGAyyIebq%2FVuakBL4u5dfrpHaqtXcL7zmJfluujIkbKIwDfTA%2FE1WxZYqxc1b%2BKZ7olS2KVNhUNXAdL9bqC1iiLByOgHVnoHw%2BaqoxoTWpkNgaqocOYb2kuJQK2BkHwUMvpWN0pooZV3I4blKogVx1LLAkLbIqj3fHiR90pFSHTvJI7Cw757cRUlurso1To5ik2rBzwdqcnDLrUvDEAZlkL4hwoDkFVYlexwhfvpWiL9FWRgPR1evbF2eaMKCPisoGOqUB%2FHzK%2BHyz7L%2F2zSDQnC2z3KT5AT%2Fl%2B0%2BaOg9i4Lc2raDJJhGnGHM5z5EaBzxCwXlUBScRAWR%2B8LiNZhQhyVfwL7Utllw3DhphlwEe3LbjYmgI29%2FoEIBU8qXqRQmxYriUQv%2BiGgiUSANyihtEthGR7XXcheRqi85cvXuw44WEHVOnjWHG27dfZ9IyvZegy2UUxegUNYx7prm2L53JVeGvHCI1lVY9&X-Amz-Signature=91e1a6efc6ca1fcd13587e3203d403aa8eb56de9f25045694d612864751b4c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HWAGVEP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmtjHWwxl8n3ZwHFNmRWpiWis5SGTsN2W6%2BFqGNlu3KAIgEGv7f1MpDvSSqBPRPXlwUwTQ1jCHUi80uIzKJ8J%2F%2F0Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMIrCRShCaWNQqvCZSrcA8XH105pfxgDwlzbuvc69m4NZf%2FHyYqQPc0C2fUHiGFSKA5cZOWkEdZ0VvSPAjb7jGrCDeGzp1ZN2DGcI8wJj1YxVQiDU7zCGdovgzCRtWI%2B5wW1%2FrnGlUr9DM6rfXtnZLpwiOQBxm8h92XkVUIzm%2BgHZ32QPggfTa%2Bw9zGaLCLbyD5Te3BENLlUVstWIf3JzeVy1I6UQgxlmxHjcUcfh0%2BzLm3VeGZmEGNICbYR6tQekm0SJZ41jRZ9Q9p7%2BHZcGRp%2Bs8Oa0Ziazhox7Lh%2F1OOxtgIfAzZRmKufNBSalrE6UK3LknkEtYEfqIaCaSoq4dCfqGG6xDCP3MaGzA6QaZVG6l7D7NKRvCgeBm9gPAvn3wKplPOnzFYRK4NQDAIDEFWGAyyIebq%2FVuakBL4u5dfrpHaqtXcL7zmJfluujIkbKIwDfTA%2FE1WxZYqxc1b%2BKZ7olS2KVNhUNXAdL9bqC1iiLByOgHVnoHw%2BaqoxoTWpkNgaqocOYb2kuJQK2BkHwUMvpWN0pooZV3I4blKogVx1LLAkLbIqj3fHiR90pFSHTvJI7Cw757cRUlurso1To5ik2rBzwdqcnDLrUvDEAZlkL4hwoDkFVYlexwhfvpWiL9FWRgPR1evbF2eaMKCPisoGOqUB%2FHzK%2BHyz7L%2F2zSDQnC2z3KT5AT%2Fl%2B0%2BaOg9i4Lc2raDJJhGnGHM5z5EaBzxCwXlUBScRAWR%2B8LiNZhQhyVfwL7Utllw3DhphlwEe3LbjYmgI29%2FoEIBU8qXqRQmxYriUQv%2BiGgiUSANyihtEthGR7XXcheRqi85cvXuw44WEHVOnjWHG27dfZ9IyvZegy2UUxegUNYx7prm2L53JVeGvHCI1lVY9&X-Amz-Signature=4dabec751dc1a0a8cdb1db05b32bc72ff603233cff4beb493110f3c647b83864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

