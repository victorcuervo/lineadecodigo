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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D76EPMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjq9%2BieQMvaSTLiOB7mI3DmxwkHSxOSSWpvjrx82mZBwIgP85%2BC8xbXG09GfAg9iyW9eRtv3SHIOpdvKvwCH0IAiAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCQU5haMNfvfMSr6UCrcA97CqYQaJMSXGTav18kptoytANEt9iFtKeMwDMQiHedcUjDGVnng57kzG1VHa6WZmiXm%2BYIOHwZVZOcqYPEroddlUd4dP10XPa3i62VtjJ%2BvaVDkkJDOl7kKwLcC3NrRi6MkuAqN%2FDxxoLpfJ%2BUjOa3OnK0treWfvG6%2BmLXqaRBiIf64u8ISFAeYXkVtMusJlwbWEtIJ1w6fphCduwNVpJVGYCv26wS%2BXPEPpz1s51ux7dtHbvnWlwM8gKar%2FEyZIShV5tB5e7lKbA2vdVXG1E8kpEOKk1C5mz6JBh66%2FhmMTXJkp1MFIbuiyoh%2BJ7MONpFUPeXYmBZfFAxlPIV%2BL1u0ePJJnpnmOYnpTzjFd8O5%2Bv%2BW0pGzALkRIlsXztSB4iLvUnGcSS%2BOPBuZigAvPDei%2Bu9rbeg0x1ME69I2tfLQlcWnMNH2jvSznvzwQIMXRv7xCQtvoI%2BOp01PlbgmQ%2FSIQ6iAkCs9W3FEF8GwUB7p9KJRmABZaKN4riensEzqOSASOANQADEEoaoaISCMvdSdTLtvorqXryb%2B3OFB6YRChu2vXq7bNd5skSGdwPD7Smp1Wc6b1tjlsrOg3uUEzrBnWu9ximuR%2B%2FujM2GVJU4ckeeTaBhDQ%2FPK6ZO3MIPSicoGOqUBM8xhsZnpb%2BLLaiQEmZ4xjTTU%2BdxufFC0k6ccPo2gL62QIAA%2B3j%2BgPkGK80XL%2FvHWmSS%2F2wdZCFtwNOLqcXvfFRiXsywKPJgRXOa9jPcviQboqzql7d2DFSuOBllI4B3NngFjskbGHA9P0boZFIQJpkqVnU3eFnX1%2F1rPG3Vo0Gp8jtz3%2FlydUK4t8Cg%2FnuXCHKb6ofln2pkZf9V2qNQ7aZ%2B5%2FmVf&X-Amz-Signature=d2e1827158a1f95b18fdc16f0dc99bcf47c034ed909b9cf0300eec5d0e49f94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D76EPMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjq9%2BieQMvaSTLiOB7mI3DmxwkHSxOSSWpvjrx82mZBwIgP85%2BC8xbXG09GfAg9iyW9eRtv3SHIOpdvKvwCH0IAiAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDCQU5haMNfvfMSr6UCrcA97CqYQaJMSXGTav18kptoytANEt9iFtKeMwDMQiHedcUjDGVnng57kzG1VHa6WZmiXm%2BYIOHwZVZOcqYPEroddlUd4dP10XPa3i62VtjJ%2BvaVDkkJDOl7kKwLcC3NrRi6MkuAqN%2FDxxoLpfJ%2BUjOa3OnK0treWfvG6%2BmLXqaRBiIf64u8ISFAeYXkVtMusJlwbWEtIJ1w6fphCduwNVpJVGYCv26wS%2BXPEPpz1s51ux7dtHbvnWlwM8gKar%2FEyZIShV5tB5e7lKbA2vdVXG1E8kpEOKk1C5mz6JBh66%2FhmMTXJkp1MFIbuiyoh%2BJ7MONpFUPeXYmBZfFAxlPIV%2BL1u0ePJJnpnmOYnpTzjFd8O5%2Bv%2BW0pGzALkRIlsXztSB4iLvUnGcSS%2BOPBuZigAvPDei%2Bu9rbeg0x1ME69I2tfLQlcWnMNH2jvSznvzwQIMXRv7xCQtvoI%2BOp01PlbgmQ%2FSIQ6iAkCs9W3FEF8GwUB7p9KJRmABZaKN4riensEzqOSASOANQADEEoaoaISCMvdSdTLtvorqXryb%2B3OFB6YRChu2vXq7bNd5skSGdwPD7Smp1Wc6b1tjlsrOg3uUEzrBnWu9ximuR%2B%2FujM2GVJU4ckeeTaBhDQ%2FPK6ZO3MIPSicoGOqUBM8xhsZnpb%2BLLaiQEmZ4xjTTU%2BdxufFC0k6ccPo2gL62QIAA%2B3j%2BgPkGK80XL%2FvHWmSS%2F2wdZCFtwNOLqcXvfFRiXsywKPJgRXOa9jPcviQboqzql7d2DFSuOBllI4B3NngFjskbGHA9P0boZFIQJpkqVnU3eFnX1%2F1rPG3Vo0Gp8jtz3%2FlydUK4t8Cg%2FnuXCHKb6ofln2pkZf9V2qNQ7aZ%2B5%2FmVf&X-Amz-Signature=daf9e81b33e9ae93ea54a4a71b75bfad624f8f9caf62002e7a4734ed0722f7f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

