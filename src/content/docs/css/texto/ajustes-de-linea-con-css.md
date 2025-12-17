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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJDEPEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDV4Vgw%2BwJNOtT%2FIUVK8Ba8RxciJV7YM4q7vLgEFIgoAiEArt7FQp8k09L4QhiS7PonpXLV2wQ46N7js1R9XdRwnnsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDERCUDehQfiOC843GyrcA%2FtA9hzi%2BV51wgd5FVOjmnTQPV9zhVARJ%2B83AgD%2BWcB3N%2B2B9gVoWq4IfuKVw7dyUHdLiuPQeHNAF14mcvdA6K%2BKeaZM7CT6EoKRniPGwwETzMCjcQD%2FEpQ9CgFvPSOPZdEmFyzP%2F7lfOYI%2FOn8cet6iID%2F7LvAeq6DB3Uz5W%2BxaFU4mAzo%2BnsBHMaJ0MIBM2j4hkOIrewzQ%2FfQYjtniBEbRcpNZwVG%2FhBKCIFVzUvWUY2giSIbYXTU%2Bfe%2Fy9kyszUAaSY52uHl5TB2HygP788CSgQwtW9TdW6v4WmPUmGvUEfU2TGYyQgNKgbCqTMQL%2B8Ovn8ffbkcKYKPLXrqoPZi5g9roXR7gBLOU4WP2YJnmgWKXW7AL9hx0ijB8Y%2BZ3SZm8v4gtinmYnSYIgOBcku87hMtWmwjOrv%2FFK%2BhQoPrVBAIOb2ZvkeX9eEciD8swbm8dU2qKhC1EAW1Gs1kNRdv%2BshbbDyRIA2oFTReRyMK5iyiWoiW2EUVISPNUS1Dw%2FL7j5Nyt%2B6YPTBDxG0YtTXkf0mC6ffCOZHr8VaXzusduGxYOqmItd2R1h4Z3FFEmfOXkW3PoUwMiR8RZggr5djmcaewF9EcxikhHsN0rjY%2FvWkYTruUyF%2FkcZxHYMOnwicoGOqUBebsPnFhOf3uX%2FfZ61Y%2F6B84g2BYPqdbEEMomIF3wfA6pBlzKPYPfP%2BTOyzVnLF63acgmVVy6An5VS%2Bnyle%2FMLWcZllwL0mrZOfy%2FRuMBGEMJFehkgNUoppqGzyyHAlboSTUbBRGvmTHWlNgpFHzGl2cMs1vhhnYck5cWo9NsChAeUvUCCl439ZN7%2F8CB3dng6Aun7vgZ1g64dO93NSV%2BlHFhlagk&X-Amz-Signature=934c3b9e4ff2d286869e7d370cc71a6f5daace18ff5aebc8ae52360ee22ec46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJDEPEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDV4Vgw%2BwJNOtT%2FIUVK8Ba8RxciJV7YM4q7vLgEFIgoAiEArt7FQp8k09L4QhiS7PonpXLV2wQ46N7js1R9XdRwnnsq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDERCUDehQfiOC843GyrcA%2FtA9hzi%2BV51wgd5FVOjmnTQPV9zhVARJ%2B83AgD%2BWcB3N%2B2B9gVoWq4IfuKVw7dyUHdLiuPQeHNAF14mcvdA6K%2BKeaZM7CT6EoKRniPGwwETzMCjcQD%2FEpQ9CgFvPSOPZdEmFyzP%2F7lfOYI%2FOn8cet6iID%2F7LvAeq6DB3Uz5W%2BxaFU4mAzo%2BnsBHMaJ0MIBM2j4hkOIrewzQ%2FfQYjtniBEbRcpNZwVG%2FhBKCIFVzUvWUY2giSIbYXTU%2Bfe%2Fy9kyszUAaSY52uHl5TB2HygP788CSgQwtW9TdW6v4WmPUmGvUEfU2TGYyQgNKgbCqTMQL%2B8Ovn8ffbkcKYKPLXrqoPZi5g9roXR7gBLOU4WP2YJnmgWKXW7AL9hx0ijB8Y%2BZ3SZm8v4gtinmYnSYIgOBcku87hMtWmwjOrv%2FFK%2BhQoPrVBAIOb2ZvkeX9eEciD8swbm8dU2qKhC1EAW1Gs1kNRdv%2BshbbDyRIA2oFTReRyMK5iyiWoiW2EUVISPNUS1Dw%2FL7j5Nyt%2B6YPTBDxG0YtTXkf0mC6ffCOZHr8VaXzusduGxYOqmItd2R1h4Z3FFEmfOXkW3PoUwMiR8RZggr5djmcaewF9EcxikhHsN0rjY%2FvWkYTruUyF%2FkcZxHYMOnwicoGOqUBebsPnFhOf3uX%2FfZ61Y%2F6B84g2BYPqdbEEMomIF3wfA6pBlzKPYPfP%2BTOyzVnLF63acgmVVy6An5VS%2Bnyle%2FMLWcZllwL0mrZOfy%2FRuMBGEMJFehkgNUoppqGzyyHAlboSTUbBRGvmTHWlNgpFHzGl2cMs1vhhnYck5cWo9NsChAeUvUCCl439ZN7%2F8CB3dng6Aun7vgZ1g64dO93NSV%2BlHFhlagk&X-Amz-Signature=c3fea34a938b6bd2c5d27668e19720a59ed495facb11325515f293419d24c9b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

