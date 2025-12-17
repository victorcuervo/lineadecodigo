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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JH6CV4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSL92KlIkxiARUC9F5nTjMayueaUk9xatheP34hUyfxAiAUkhk0BG3VzG0aD04jVHhtENY71buenQVe6fIqoHPZ%2FiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0sAT2V2kYzCVSDkKtwDSNL%2BGmHD6xRbcQmel2xuG44OQzImsxWg7tU5QcoP%2FfJBpxh6PHEU8vmdzs6tkrfRCzWdBODvmYjWSMtHd6nRReg7bm3DKoO2SLFXyrS%2FvS9s%2Bx2PCMn9zGduR6ftcYiB2obDdn7G6WkrwI4jJ8Ajfb6oHCeeVfH%2FMsMz1e3f53MGhhX%2FvbnWCTQHSmiG8UVQIEIC5GMlVF4agUXbw7orIz2KwLjdBy4m2Euui8H%2Fhwm57s5rU17kdviJwACFu5r%2BnhXijH7B5qeQf8LDqydYe5hWNyoaUl9qLFW5z8IAWTCWK37h%2FSvkSwDurSrYqmi0%2BcuRhzl1kx2M3e9zCDVu8fPUFNc%2FC2LMlkoi%2B%2Fw5ahjoLZPihkA6PadBhR%2F6fR57RmZAO5sYEPnhyyBGRi3XmO3vJMZpl86s%2BRUZE3Ith12OZOhDEnKP%2BSqYPrECSpao%2FuFHdp7TquXdCHExrXhWkI75bmPdPWQ9%2BN23g70zTCeP1q51%2FAiidcml99CU%2F7PAg12f7eMimVxSJsgpfibE1zGfLDFZ4Cx35g82GJzyCszuzpuEWFqr31dIj5lEfR%2FPHKgfp5YoO6XxMDl%2BBFh9SLc4d7mjizCAPK4jlM%2FqCl4LFSlhg2LBSVFDtHow3K2MygY6pgHs%2Beog7h4T1K2eIALXVK2KbrvahCNisKYOJkX%2FG1BlSoouskU0WudhT8UJOD6qrwfls9p2xlLlYb%2B4ssLGaC2W612%2B8H77s81aRjI8p6rhyjU%2B%2BfGW4XeKGBh01eT6g592gANSyJoBUG3fMersAQ%2F7ReCu%2BFefxurO3qDcnhsGlu%2FM20%2B9yyheX2zHyZV2NRblvJyFTZMEXLFx8twT1c1cU5VNiSTI&X-Amz-Signature=cad18900d9dccc97676a22d7b44e9f602d5558ea4db95e558c17b8fa8a6b086a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JH6CV4X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSL92KlIkxiARUC9F5nTjMayueaUk9xatheP34hUyfxAiAUkhk0BG3VzG0aD04jVHhtENY71buenQVe6fIqoHPZ%2FiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr0sAT2V2kYzCVSDkKtwDSNL%2BGmHD6xRbcQmel2xuG44OQzImsxWg7tU5QcoP%2FfJBpxh6PHEU8vmdzs6tkrfRCzWdBODvmYjWSMtHd6nRReg7bm3DKoO2SLFXyrS%2FvS9s%2Bx2PCMn9zGduR6ftcYiB2obDdn7G6WkrwI4jJ8Ajfb6oHCeeVfH%2FMsMz1e3f53MGhhX%2FvbnWCTQHSmiG8UVQIEIC5GMlVF4agUXbw7orIz2KwLjdBy4m2Euui8H%2Fhwm57s5rU17kdviJwACFu5r%2BnhXijH7B5qeQf8LDqydYe5hWNyoaUl9qLFW5z8IAWTCWK37h%2FSvkSwDurSrYqmi0%2BcuRhzl1kx2M3e9zCDVu8fPUFNc%2FC2LMlkoi%2B%2Fw5ahjoLZPihkA6PadBhR%2F6fR57RmZAO5sYEPnhyyBGRi3XmO3vJMZpl86s%2BRUZE3Ith12OZOhDEnKP%2BSqYPrECSpao%2FuFHdp7TquXdCHExrXhWkI75bmPdPWQ9%2BN23g70zTCeP1q51%2FAiidcml99CU%2F7PAg12f7eMimVxSJsgpfibE1zGfLDFZ4Cx35g82GJzyCszuzpuEWFqr31dIj5lEfR%2FPHKgfp5YoO6XxMDl%2BBFh9SLc4d7mjizCAPK4jlM%2FqCl4LFSlhg2LBSVFDtHow3K2MygY6pgHs%2Beog7h4T1K2eIALXVK2KbrvahCNisKYOJkX%2FG1BlSoouskU0WudhT8UJOD6qrwfls9p2xlLlYb%2B4ssLGaC2W612%2B8H77s81aRjI8p6rhyjU%2B%2BfGW4XeKGBh01eT6g592gANSyJoBUG3fMersAQ%2F7ReCu%2BFefxurO3qDcnhsGlu%2FM20%2B9yyheX2zHyZV2NRblvJyFTZMEXLFx8twT1c1cU5VNiSTI&X-Amz-Signature=2b1a60af008d7323c58efe43f6bd6e6e841d827c185d83eb633af1e49256cacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

