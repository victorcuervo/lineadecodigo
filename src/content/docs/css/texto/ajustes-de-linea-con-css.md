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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MU4E2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwATSJy8YNCHUAUDD0OJe7Vfr82178xp8y3CyGFjkaAiEAtk1g222B4sUtLoPeICU53XbdgNQF2lTIgEgPtraDuEQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN2ymQ3WbT%2BwpJw2QSrcA6MSD7HuxoNMaE9dy2eHTXg2MUy2q8ib2TF3qq2TVUZaKZl%2F4T%2FabfNNXSE2OFGbxgnRnAA9b59cN2iJAcgUffPvA3Jy5LQ1QE%2FEhcVcDRLa8NTmMoyELUDrZIYEOzJCqB7ojX2Al4ezWqFP7TmDbFIJuBzF6vC0oKIgny4Os72BPPyzQq%2Fm%2Fm%2FfzdZ7P9FdOawKY4PzqlF8QB1m1gzC0QgnHlguLb1v1i%2BQxBLMA1PPDF7dqfKnptuLx6vjgW43cwxVbrXpeuxUYVhidVfott1bCspLzGPKVTDMq6xEVXMKQ1Dvy5OPIsq%2BxQxYwqD%2BZUU4rDt0bgOnQ52f8UlCunBbP56Lzv21Wy3vSWe%2Byq7GSuZBt6iA9dTdgeZoMcNTNeiprYFWy53BLCDfLqiWZ7wBMI5Ngvbatp0Aqw65vKxdisDgYy6wROGO0QyG59aPwUtwPRBiUwDZU1nIXN2CiNgwiZG%2BdUUwFVVqUKG0%2FSLVgmQR7w9%2B0cAzRr3ZYmLC1V%2BG7QOcPNpPJVNauf8dPV%2FJGzxAtvHnXOFKCZkxsRonwjV5GwnGVncQRE%2Fm9PadYrgz1VPD1MEUEQAPkLzkWHVPc0Bg%2FzjaoY%2F7%2Fc2GnYJP1AO4pN7uRv1twMzUMMHhisoGOqUBLHp%2Fv6oBRHCY%2BZMSkUmLYdwBm9kkmwE4JwdOgLJqLv2x6HPOKcIYwOg7WrDfWyIxazOLHmm4T3n7JNi2h6Asbryv2XNadGPHjV0R5YTNh%2BMypkzVbEVrLhfqxPW9LK1bgOJGQEF1cIEELonQJUxrlUkH5Zurlagw5fOod%2FUmjydbVlex1VRxvtoIjW0PHVi7js2elfPNLdNm2rINfeA8gFSdZd5T&X-Amz-Signature=2a5d74877833dc6552d3afbc445c10dc897e2138c4bc90b8552d2b3d42dcda7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5MU4E2Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGwATSJy8YNCHUAUDD0OJe7Vfr82178xp8y3CyGFjkaAiEAtk1g222B4sUtLoPeICU53XbdgNQF2lTIgEgPtraDuEQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDN2ymQ3WbT%2BwpJw2QSrcA6MSD7HuxoNMaE9dy2eHTXg2MUy2q8ib2TF3qq2TVUZaKZl%2F4T%2FabfNNXSE2OFGbxgnRnAA9b59cN2iJAcgUffPvA3Jy5LQ1QE%2FEhcVcDRLa8NTmMoyELUDrZIYEOzJCqB7ojX2Al4ezWqFP7TmDbFIJuBzF6vC0oKIgny4Os72BPPyzQq%2Fm%2Fm%2FfzdZ7P9FdOawKY4PzqlF8QB1m1gzC0QgnHlguLb1v1i%2BQxBLMA1PPDF7dqfKnptuLx6vjgW43cwxVbrXpeuxUYVhidVfott1bCspLzGPKVTDMq6xEVXMKQ1Dvy5OPIsq%2BxQxYwqD%2BZUU4rDt0bgOnQ52f8UlCunBbP56Lzv21Wy3vSWe%2Byq7GSuZBt6iA9dTdgeZoMcNTNeiprYFWy53BLCDfLqiWZ7wBMI5Ngvbatp0Aqw65vKxdisDgYy6wROGO0QyG59aPwUtwPRBiUwDZU1nIXN2CiNgwiZG%2BdUUwFVVqUKG0%2FSLVgmQR7w9%2B0cAzRr3ZYmLC1V%2BG7QOcPNpPJVNauf8dPV%2FJGzxAtvHnXOFKCZkxsRonwjV5GwnGVncQRE%2Fm9PadYrgz1VPD1MEUEQAPkLzkWHVPc0Bg%2FzjaoY%2F7%2Fc2GnYJP1AO4pN7uRv1twMzUMMHhisoGOqUBLHp%2Fv6oBRHCY%2BZMSkUmLYdwBm9kkmwE4JwdOgLJqLv2x6HPOKcIYwOg7WrDfWyIxazOLHmm4T3n7JNi2h6Asbryv2XNadGPHjV0R5YTNh%2BMypkzVbEVrLhfqxPW9LK1bgOJGQEF1cIEELonQJUxrlUkH5Zurlagw5fOod%2FUmjydbVlex1VRxvtoIjW0PHVi7js2elfPNLdNm2rINfeA8gFSdZd5T&X-Amz-Signature=fb0946c2f42ae712ffe7373b1d495d8cd3200d9ce5d9c2dc9228078dcce3ed64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

