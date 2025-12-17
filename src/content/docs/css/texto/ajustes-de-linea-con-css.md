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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YHLZFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIonJEMUI1EqxX2omsEAzDLel07YfJt886T5cXIvSB%2BQIgbAyqiHDLbi6CrmkFPiY364yAKyktpwnGt16IsJWrCPcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBhZv8yxyT0O%2BZ3R9ircA8tRvNMI5%2BABViiKogpBFeIunm1Qgh1o7uXLnwOwFeOYujNdOoKa2tDPe4jsz%2Fyc6llonT7AXy5FVBN%2FBYzHsKFUVm%2FmyfJzGQSDIp3jlrVcLVogjutlNuicoSeMobHQKvnlf9o8kHxf8xqb9iT93n96lf0U8l7tnfGa4A2g6v7W3IKuG8u2ztdutd2W9XqAqS2K4QDGimcz8fAfDL5ieqwIySrehNWzR1FoerSXbSIefQ1P41Ed0GQZBhF29uDYDqowJmZhsOuI9DTGLmvInIDUdFSnao9jdblIybPfoURCfnNVGLM9RjqEKxvip2FjOb5vdGNtw45tUkSfncYiJuwRZjok1YaaW0y5%2BQhCj1ooxmL%2Fiy0BceuJz0hfs4YUlRXicvXXGMMGmUyvawMbwe4LSwBtDeDfDSxIHFtIr4RFRWPP1g5CcmOO7aagpj03sSDpnk9og%2FrlDdnCtNZ5oOZEGOaPHAcBQyoL2%2B4D%2BxbvruDnY7ueQY4dw6KgejFUrT9P2Zt0IE2XBS%2FDyoUc%2BBqoOxNmF3aKLqtn0uAgZCkgu2EewyBQdQ5oZTmWORpghlV8QuRZ%2Fd%2F2vo2Y1f4AddimP6ALAPcZZEY9MvbxiW5FsmiYZDSGffl39OOwMMiyiMoGOqUBPOz5ugn9Ec3Rgpk22rsNzf63u6gx9fn4%2FvOEAweP7u%2B9LCmYzj%2Bq%2Fk9janVA9ys1Trae4qLBGjcMF4FRpfL3QZegkvCeMWxgwAo70rDP0H%2FAXRS9ftklh8%2BxgfcpATt%2FOjJGHVLmV5rBlrYIZeKroYnjRYDEsWv7yosk1LrpBvTtyyGE%2Fw4bW0aEL9LhgZA1hbRzymJWkVyAAe98ZXf0M%2Bz2SOKQ&X-Amz-Signature=009841d286338bfcb91a642ddb0a30ed9a9e93d9c31dc40b8b78a86bd1229aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YHLZFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIonJEMUI1EqxX2omsEAzDLel07YfJt886T5cXIvSB%2BQIgbAyqiHDLbi6CrmkFPiY364yAKyktpwnGt16IsJWrCPcq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDBhZv8yxyT0O%2BZ3R9ircA8tRvNMI5%2BABViiKogpBFeIunm1Qgh1o7uXLnwOwFeOYujNdOoKa2tDPe4jsz%2Fyc6llonT7AXy5FVBN%2FBYzHsKFUVm%2FmyfJzGQSDIp3jlrVcLVogjutlNuicoSeMobHQKvnlf9o8kHxf8xqb9iT93n96lf0U8l7tnfGa4A2g6v7W3IKuG8u2ztdutd2W9XqAqS2K4QDGimcz8fAfDL5ieqwIySrehNWzR1FoerSXbSIefQ1P41Ed0GQZBhF29uDYDqowJmZhsOuI9DTGLmvInIDUdFSnao9jdblIybPfoURCfnNVGLM9RjqEKxvip2FjOb5vdGNtw45tUkSfncYiJuwRZjok1YaaW0y5%2BQhCj1ooxmL%2Fiy0BceuJz0hfs4YUlRXicvXXGMMGmUyvawMbwe4LSwBtDeDfDSxIHFtIr4RFRWPP1g5CcmOO7aagpj03sSDpnk9og%2FrlDdnCtNZ5oOZEGOaPHAcBQyoL2%2B4D%2BxbvruDnY7ueQY4dw6KgejFUrT9P2Zt0IE2XBS%2FDyoUc%2BBqoOxNmF3aKLqtn0uAgZCkgu2EewyBQdQ5oZTmWORpghlV8QuRZ%2Fd%2F2vo2Y1f4AddimP6ALAPcZZEY9MvbxiW5FsmiYZDSGffl39OOwMMiyiMoGOqUBPOz5ugn9Ec3Rgpk22rsNzf63u6gx9fn4%2FvOEAweP7u%2B9LCmYzj%2Bq%2Fk9janVA9ys1Trae4qLBGjcMF4FRpfL3QZegkvCeMWxgwAo70rDP0H%2FAXRS9ftklh8%2BxgfcpATt%2FOjJGHVLmV5rBlrYIZeKroYnjRYDEsWv7yosk1LrpBvTtyyGE%2Fw4bW0aEL9LhgZA1hbRzymJWkVyAAe98ZXf0M%2Bz2SOKQ&X-Amz-Signature=fa23b655d15a1f78dc3c1c65c743ce0c842aad51efdb4864225b267a297dd0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

