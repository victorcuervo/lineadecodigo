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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OB42KE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD699CJu2WJjSyjzQnbaCUD7Rt0zlk2kAwCNCf3R4P%2FdwIgXxE1UEDNjJWLdY8eSKdwvbdZ8DWzJiSjoNFImnjwpfIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFP8iaGH%2BRYO0Ufn0SrcA7luRuwrXoIsMBcj63d7eMPx1K1AhX5ZEyl7gLtfq1CWAS7DNakYOpXm3Qy5M%2FpPfVSjhOC%2FDzmPrz7W06qpXttsETX3ANJVUWi4RqV0KMCkwhV3WkUEhu9B2UPUIehFH5Uk3mMIsY1sVSAqw0H5c70txYFvcgm9p%2FPnbvOk5n1JbuXNDrn9%2BGAuiPVoUfnA%2FyklxxoUlKv6K7%2B6Vacm91Bd%2FHCnve691Cf2FVXnOYAFStU3ygEa7W%2BV0eBa1Ma2C215GUJWFgmayBGQ5spgx1P1LsC5%2Fg1TwrLVPI%2BqCA%2F%2FZIdJrjSZbRFaDezjad2O7ntykNbx1Y7szI1za%2FReU%2BjLfDvgkO0SbP2e8uMPHWqnEYVkm2euFimMTELVYeMs15EZSaagjBzliF4pyFMYcV2aX5BDHFYJDSYZJrKxfjfHA2jnDgFaME3AKJ0vOTOUvriZACtkk8EmQ%2BJkNRVTG0wqqs9FK12Ai7pvnv387TWGG5BdMvh7c5Ak18Y9Bo3YY8Sbiq9zjxtkluVN2blrXOE%2B0KFG%2FCyHySML4m0bbgkGw%2BYGzAu5yMSb4vfgPsCqtwPUBOG5j1Eejdv0iKxKpJxmvtYIWBrbuuIK%2FNGlooByK3%2FDAvkytvrdX94sMIWDicoGOqUBLNYnJWCF9Y8FppfBvn%2B4jrLwhyMOYBOKna4Vv4%2BvgwdONWhG9o639eqABGQP%2FxtdZPtBlFfKMHV6Z7whJP9BXgDn%2B7Z%2FZoNoDf193g2Wwa5F5FltbNg56WhxiPVeaEXfUc5j45Q6Yqt%2B64TdeGbaHNwr42h2hwEz%2Fota4%2BRh06LRCV7NXqbnetP6pZADq0K8HOkYYzFmQxOGLEdu10auC7B2BlVc&X-Amz-Signature=8ea9c21f68633f3d88907dc3d030a5fe479219eb5a7d23dea8e936d51c0b1243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633OB42KE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD699CJu2WJjSyjzQnbaCUD7Rt0zlk2kAwCNCf3R4P%2FdwIgXxE1UEDNjJWLdY8eSKdwvbdZ8DWzJiSjoNFImnjwpfIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFP8iaGH%2BRYO0Ufn0SrcA7luRuwrXoIsMBcj63d7eMPx1K1AhX5ZEyl7gLtfq1CWAS7DNakYOpXm3Qy5M%2FpPfVSjhOC%2FDzmPrz7W06qpXttsETX3ANJVUWi4RqV0KMCkwhV3WkUEhu9B2UPUIehFH5Uk3mMIsY1sVSAqw0H5c70txYFvcgm9p%2FPnbvOk5n1JbuXNDrn9%2BGAuiPVoUfnA%2FyklxxoUlKv6K7%2B6Vacm91Bd%2FHCnve691Cf2FVXnOYAFStU3ygEa7W%2BV0eBa1Ma2C215GUJWFgmayBGQ5spgx1P1LsC5%2Fg1TwrLVPI%2BqCA%2F%2FZIdJrjSZbRFaDezjad2O7ntykNbx1Y7szI1za%2FReU%2BjLfDvgkO0SbP2e8uMPHWqnEYVkm2euFimMTELVYeMs15EZSaagjBzliF4pyFMYcV2aX5BDHFYJDSYZJrKxfjfHA2jnDgFaME3AKJ0vOTOUvriZACtkk8EmQ%2BJkNRVTG0wqqs9FK12Ai7pvnv387TWGG5BdMvh7c5Ak18Y9Bo3YY8Sbiq9zjxtkluVN2blrXOE%2B0KFG%2FCyHySML4m0bbgkGw%2BYGzAu5yMSb4vfgPsCqtwPUBOG5j1Eejdv0iKxKpJxmvtYIWBrbuuIK%2FNGlooByK3%2FDAvkytvrdX94sMIWDicoGOqUBLNYnJWCF9Y8FppfBvn%2B4jrLwhyMOYBOKna4Vv4%2BvgwdONWhG9o639eqABGQP%2FxtdZPtBlFfKMHV6Z7whJP9BXgDn%2B7Z%2FZoNoDf193g2Wwa5F5FltbNg56WhxiPVeaEXfUc5j45Q6Yqt%2B64TdeGbaHNwr42h2hwEz%2Fota4%2BRh06LRCV7NXqbnetP6pZADq0K8HOkYYzFmQxOGLEdu10auC7B2BlVc&X-Amz-Signature=befe9c05e83be56a1f0c98cfc0e5fb867fc1df2f5335b5072b64af52683c6e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

