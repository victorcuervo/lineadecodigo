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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSCB4WO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB2xtBvyB3wS6CmxSGS8qMRADOwhQ3buOju0UosTZ8gIgeSJgSBumME7lnr8bG%2BLgaFFoqTF0xBod7vI%2Bepqi9iQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw1k1UOy8F8x4v5NSrcA3UJJrPXKQ0tLY7eEc3isBnZOTdc0PdwI8V%2FBYymGj91CT98Z9MN6mDH2US04qJSU8Bm7e0F8Feo6QTuEGrGSf2IBckvSPtbUjZF%2FVE5xtTmpEuA%2FLdFA47Crq2UwO7D7KzCCflVSb7fQWgK2heFVQOCuRL8GF1A%2FP%2BslnylXb3v520W%2FQVQDVzqYoCUdwXNy6glJrHP4FJHvKJKW%2F0B98TcGkvB%2BLAaompca2Wbn2eyq1cIlkvcwkPwrS5cIgmSzukoT6y6ebsM764%2FdJ3OINWYKHb4Uxe%2B7H9pVTi%2Bg7n1pvTpmfor7y5dZqmfhlZcmw8ED537Zvou3nIn3dVL7rFPv05%2B%2FJgE7FuRzOJWV%2B38zsmz8Yv797Sc1ZeRbRhlU2Ndu2akAtWNTDIXwvOwv%2Bjc5wIrXhQlVoc%2FFwTRrNssuF892oGlyKJ30uCxLVeAbis3SGee3RPOX%2BQU8BSb1%2FCtvVwacj3bMyD13JIuqWlfACbgq21Kls1Dy7%2B0X1IPlpOpFmYm0GFnY3VhbyleOls0jUMOaa301%2Fja1uRrtLN1ac3M4EYRSgzJp2cj8g2ycB00kXZZTWxkoTVkm9y7qmQk5x%2F%2F4NZw4%2FSj5e%2FTuLIJUmw4nOpcRthVBau0MMrhisoGOqUB0K%2BMINd83MkiN1evgv%2FOcetxliAjvOxcUuRm4VhUHTy7rtyT8gsq75F0AAWsJOcd3cYLoB9T9NfVBLwTAbHsoXoaD5RUU%2FqZEeCKDVs5JLCDgCwprSaiWpjYkU6cJ2rYZt3YvxAU3TsN6%2F9qUuEAFpljYeNo8fTRpSeC5E70zLumvZ0v%2BpwXJ7dmkLNAEwBDlnpnoAEyIJtdFDKbWYykksN6bxzJ&X-Amz-Signature=475d392e814e3891c3159d06e62a17b363e70f58452357b149503e3c08c37a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NSCB4WO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvB2xtBvyB3wS6CmxSGS8qMRADOwhQ3buOju0UosTZ8gIgeSJgSBumME7lnr8bG%2BLgaFFoqTF0xBod7vI%2Bepqi9iQq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDNw1k1UOy8F8x4v5NSrcA3UJJrPXKQ0tLY7eEc3isBnZOTdc0PdwI8V%2FBYymGj91CT98Z9MN6mDH2US04qJSU8Bm7e0F8Feo6QTuEGrGSf2IBckvSPtbUjZF%2FVE5xtTmpEuA%2FLdFA47Crq2UwO7D7KzCCflVSb7fQWgK2heFVQOCuRL8GF1A%2FP%2BslnylXb3v520W%2FQVQDVzqYoCUdwXNy6glJrHP4FJHvKJKW%2F0B98TcGkvB%2BLAaompca2Wbn2eyq1cIlkvcwkPwrS5cIgmSzukoT6y6ebsM764%2FdJ3OINWYKHb4Uxe%2B7H9pVTi%2Bg7n1pvTpmfor7y5dZqmfhlZcmw8ED537Zvou3nIn3dVL7rFPv05%2B%2FJgE7FuRzOJWV%2B38zsmz8Yv797Sc1ZeRbRhlU2Ndu2akAtWNTDIXwvOwv%2Bjc5wIrXhQlVoc%2FFwTRrNssuF892oGlyKJ30uCxLVeAbis3SGee3RPOX%2BQU8BSb1%2FCtvVwacj3bMyD13JIuqWlfACbgq21Kls1Dy7%2B0X1IPlpOpFmYm0GFnY3VhbyleOls0jUMOaa301%2Fja1uRrtLN1ac3M4EYRSgzJp2cj8g2ycB00kXZZTWxkoTVkm9y7qmQk5x%2F%2F4NZw4%2FSj5e%2FTuLIJUmw4nOpcRthVBau0MMrhisoGOqUB0K%2BMINd83MkiN1evgv%2FOcetxliAjvOxcUuRm4VhUHTy7rtyT8gsq75F0AAWsJOcd3cYLoB9T9NfVBLwTAbHsoXoaD5RUU%2FqZEeCKDVs5JLCDgCwprSaiWpjYkU6cJ2rYZt3YvxAU3TsN6%2F9qUuEAFpljYeNo8fTRpSeC5E70zLumvZ0v%2BpwXJ7dmkLNAEwBDlnpnoAEyIJtdFDKbWYykksN6bxzJ&X-Amz-Signature=1e6277e6c723a6d6ab3a6aa4ecef9ed0deb55bf8be3b6b4c3217d315769c62f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

