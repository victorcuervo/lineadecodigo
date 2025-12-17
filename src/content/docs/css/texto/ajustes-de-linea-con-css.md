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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EG2PQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbJVuXGWk3yBhPjR49VNR7NloMTmP%2Fy6x09ZUWlclwTAiEArEWhLN41DsMxl%2FDtVuZYb%2BTC7RLPHVG%2BXjKtA8n95aMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLYHTyMdZDiudOQvnyrcA5TbRgyCP2eRMUuRB87DX3gQ59obJacQb%2BlnidKI%2FzYaF5B96cYBTMVP9U4hC09Mj%2FtGkbm7MH9D1W%2FlNnTwwJy3HhodjGvNspFcc9vfzNidBGtFu3JDuxkRqggNwBRZreedYuSZfvgccEP%2FvSLIrGzl2C28iRdKjnzysoWIB3uEkEI2kwyjpZiQnWz0erTv3KSd9EwTrAG1PYnoKw%2FlUZVMy4BU5%2B9rwUpKY6jaJ%2BqVo0V3wt64jaidtLrWiU8c8nhvpmXB1LY9bX1qJ8Y0Qa6BB8%2FImBItM8ff3RTFkVv92OAvnMTOB8o7ljyjndUEWYFWE7gvxRJDsy04mBY%2FgTu5tOTeCPu1plnIOz7lRd5scFZG%2FDgfb5laNe7xfkS21Din6XVv31pdM0CGHN97rFyre7akMwFCcMDjAgNHUymrzkT4W%2FQQRG3Zd%2FAOvxXaT5%2FSNSq%2FzSBO%2BO%2FvR%2FvY%2BL1B8kfH4d3Lvxyufj%2FRSCiXxHVzDyLViy%2Bm3glzj4wt8gwX9B9wDHftkLxdblL94SNiIPES19NMsNtRKJvAYt%2BKCmM%2BcmvOp%2Bb9AqqmqUNjHXJFaM5AwFS2Q2WL18S5%2BMdNTWyIu7syXLnL6BnrpiPlrw50rtFp074tfD93MNSdicoGOqUBEuZObUbB1CVr3a%2BcdjtPtIDkcwZs53gg5%2BSfA%2BDC7NRFWanriJ6uAerKOUZr7bBIQ2%2FwhabRjPXtPT4FGjyN13uv9YY0Z%2F2IVCofkjk%2BQBpTvV1HgeQoZJ7Co1UkvJZE11Y%2BgO74dNAGXWREFDoJGQtkTwGTbeBiDzbEH0Eh1TUV3DQ27RPPIbqLQrVeMdU%2FPTI52XkWkP4IchEWtzHKCR423LUF&X-Amz-Signature=4d135533a9582e85f842717e19589740af57c887862741ad31d5bc698ad818c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633EG2PQF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDbJVuXGWk3yBhPjR49VNR7NloMTmP%2Fy6x09ZUWlclwTAiEArEWhLN41DsMxl%2FDtVuZYb%2BTC7RLPHVG%2BXjKtA8n95aMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLYHTyMdZDiudOQvnyrcA5TbRgyCP2eRMUuRB87DX3gQ59obJacQb%2BlnidKI%2FzYaF5B96cYBTMVP9U4hC09Mj%2FtGkbm7MH9D1W%2FlNnTwwJy3HhodjGvNspFcc9vfzNidBGtFu3JDuxkRqggNwBRZreedYuSZfvgccEP%2FvSLIrGzl2C28iRdKjnzysoWIB3uEkEI2kwyjpZiQnWz0erTv3KSd9EwTrAG1PYnoKw%2FlUZVMy4BU5%2B9rwUpKY6jaJ%2BqVo0V3wt64jaidtLrWiU8c8nhvpmXB1LY9bX1qJ8Y0Qa6BB8%2FImBItM8ff3RTFkVv92OAvnMTOB8o7ljyjndUEWYFWE7gvxRJDsy04mBY%2FgTu5tOTeCPu1plnIOz7lRd5scFZG%2FDgfb5laNe7xfkS21Din6XVv31pdM0CGHN97rFyre7akMwFCcMDjAgNHUymrzkT4W%2FQQRG3Zd%2FAOvxXaT5%2FSNSq%2FzSBO%2BO%2FvR%2FvY%2BL1B8kfH4d3Lvxyufj%2FRSCiXxHVzDyLViy%2Bm3glzj4wt8gwX9B9wDHftkLxdblL94SNiIPES19NMsNtRKJvAYt%2BKCmM%2BcmvOp%2Bb9AqqmqUNjHXJFaM5AwFS2Q2WL18S5%2BMdNTWyIu7syXLnL6BnrpiPlrw50rtFp074tfD93MNSdicoGOqUBEuZObUbB1CVr3a%2BcdjtPtIDkcwZs53gg5%2BSfA%2BDC7NRFWanriJ6uAerKOUZr7bBIQ2%2FwhabRjPXtPT4FGjyN13uv9YY0Z%2F2IVCofkjk%2BQBpTvV1HgeQoZJ7Co1UkvJZE11Y%2BgO74dNAGXWREFDoJGQtkTwGTbeBiDzbEH0Eh1TUV3DQ27RPPIbqLQrVeMdU%2FPTI52XkWkP4IchEWtzHKCR423LUF&X-Amz-Signature=d470c07d3af8eb2d595c290a9ccf7959e597126047959c7e4a13e5e5ce8cf410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

