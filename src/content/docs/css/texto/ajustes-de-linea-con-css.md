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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YYP6MC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkaJrxlgCW9%2BbIBxq2fncUBi3ruK9KYZmWByenieOU5QIgU%2BFiYBdtiRR%2B5XXDTHD9uB2Om%2FMeop5N2CCfYa3mf48q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDz%2Fqo5ybVKXjih8cCrcA13TdYCmSs0YrjKK9L%2F63SIl196SOr8HO3bDoXGAYwKoX6bg7HJe8MUVzLEsM4aGpaXauRsVEwrFHgjc5n2ojmqshgPrwVTApHJrtVd8yiWOwYF8FrCgzu3cRiG3J%2BIotv8IafKCOatkboinJWNvKlyXohd%2F1mUOF1EHxqcqgd%2BAq4Ydt54LxiTL5hrN%2FY5owPpS1NJWKaHivWE5V8Q5lXIw%2FO1SCTIQY0GPz2vGz%2F3tFoSBZ2w23XQUvB9PWVoAQMzNPMFnwrbu52bkpDQR8AaZz1%2BhjvmaSi8UVY5WtvhLBLt8iq9eiPfb4ysP%2FYElcY9RKsecQR9bDR9U5il%2FaQZue6ECRS%2B0icEVPeW%2B4hQ2Pu0SpwfXPeQbB7EsVouDZFQFeV7my6My%2Bbu8L4M5DKxgW3PvvzPqXq5kWTmUZsv5EPj1bJlYEeUXO1ei3Q5zphWEqghbNEJR60ZKHkOpwWHRioVGjoM4gZT3gv%2BaTG5q5zC5CcryQ8qwkdmRy17RkgXLp7hKSdi4tJ7rODCbEECuum3CWbnsyQ%2BcrlW33NvokD8ZBgqqOUSF7pz2j1%2F8Z0MYHNb0Dl7%2F8E2ZhtClVzcjpkg3XlF3vNs%2F5feJcUYPK2n1ImdR6TiI05U2MI6risoGOqUBgbaj4Pg72YnoBWwMtRY4ODIKDiWvEnNCTEXR0GFyJgKngvTYRDe44G9el%2BFC3Wr96tWRBcWNMxupt5RbgUUpgOuyG6YY5zRkDXcaMdITOtg%2FSj5LBGeJ%2Ftv6nprHEFiOAOK58X3H1XtcieVEzevhbxmMapgYiAxEEHetvg6c3uzIwTXyD59pMKhX08zikK6rf10YMQ0J0%2Bzh868VoqUxIQgTXqQI&X-Amz-Signature=61a70b19b5c01f901b27346b072849a1d55d1a8c1c3c3f6d7d2f08bf064ec270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5YYP6MC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkaJrxlgCW9%2BbIBxq2fncUBi3ruK9KYZmWByenieOU5QIgU%2BFiYBdtiRR%2B5XXDTHD9uB2Om%2FMeop5N2CCfYa3mf48q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDz%2Fqo5ybVKXjih8cCrcA13TdYCmSs0YrjKK9L%2F63SIl196SOr8HO3bDoXGAYwKoX6bg7HJe8MUVzLEsM4aGpaXauRsVEwrFHgjc5n2ojmqshgPrwVTApHJrtVd8yiWOwYF8FrCgzu3cRiG3J%2BIotv8IafKCOatkboinJWNvKlyXohd%2F1mUOF1EHxqcqgd%2BAq4Ydt54LxiTL5hrN%2FY5owPpS1NJWKaHivWE5V8Q5lXIw%2FO1SCTIQY0GPz2vGz%2F3tFoSBZ2w23XQUvB9PWVoAQMzNPMFnwrbu52bkpDQR8AaZz1%2BhjvmaSi8UVY5WtvhLBLt8iq9eiPfb4ysP%2FYElcY9RKsecQR9bDR9U5il%2FaQZue6ECRS%2B0icEVPeW%2B4hQ2Pu0SpwfXPeQbB7EsVouDZFQFeV7my6My%2Bbu8L4M5DKxgW3PvvzPqXq5kWTmUZsv5EPj1bJlYEeUXO1ei3Q5zphWEqghbNEJR60ZKHkOpwWHRioVGjoM4gZT3gv%2BaTG5q5zC5CcryQ8qwkdmRy17RkgXLp7hKSdi4tJ7rODCbEECuum3CWbnsyQ%2BcrlW33NvokD8ZBgqqOUSF7pz2j1%2F8Z0MYHNb0Dl7%2F8E2ZhtClVzcjpkg3XlF3vNs%2F5feJcUYPK2n1ImdR6TiI05U2MI6risoGOqUBgbaj4Pg72YnoBWwMtRY4ODIKDiWvEnNCTEXR0GFyJgKngvTYRDe44G9el%2BFC3Wr96tWRBcWNMxupt5RbgUUpgOuyG6YY5zRkDXcaMdITOtg%2FSj5LBGeJ%2Ftv6nprHEFiOAOK58X3H1XtcieVEzevhbxmMapgYiAxEEHetvg6c3uzIwTXyD59pMKhX08zikK6rf10YMQ0J0%2Bzh868VoqUxIQgTXqQI&X-Amz-Signature=7322139a92a69a5bd0979d2b5cd2b3c3430da2f3a5b85931d0dea33f9f5b8240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

