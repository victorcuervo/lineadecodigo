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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYIIBRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBOt4iVpXpovzMgQ%2FlCj9l%2BOk1NYpnr7hjL2epHsjUuAiEA%2BMeKtl1W9HjgOR4g7LS1jSIFN5e7r0QlX0SdlpxmuSQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDImVV%2FtSUOnT1C5nIyrcA7UGgEBxnzZ0AH1E%2Bk5q3g%2FIZap4%2FhX7Tgx8AE5NE%2Bw4Mxry8FKg7WKBbVHq74DwFYeDjm8B%2FLxV6ZuqblKSiT6YXeb8eA3yyJGtxOSOfubOWLZ3GPVkkUVl3Dyhg3fl7DXgHdXgSf8qm%2BjxlyXZu%2B3svl0yyHlrAKlM2McYDFkU1YCAfeBMsYq3LBV06mxD0jEA8xMqN3Kp%2FppDGqs9T7q43XQ7p2CYjBkVQ1C0dXlfrMy84iLxpAAMvl3xFgCrTqKtYcsvy3OU0F2Hpr0M3sZW57xp2VXtOAbP89EyD19WUK9Uw4y8ce7eUwYjyIo7JK9ThzcjnIal%2F0PbfA8WMfUtZXv7UEeGTsccp125dvuL23az0v41%2F7IFu17SLRITTYTzUdbVCjFTztg03XyWaT96bw9AqV9DEgh7pOWkGCrNE9sFRLyvGt%2Bac3iKRXBfvXc7Yu9g%2B9cnyT%2Bd%2B7r8H22vjpJbLOIrkLQoBOaYqMUljTfyxR4Nw%2FTOg3fP%2FpFVdaLh94kSmFxilCVATRE8nxhWCEfSuXj1NWpEZwKQVB0u4%2Bnjj8Yk1FtFHC6UVMpx9FGBQZb5uKkmB4joC53PiacM5Hd%2F2KYb%2FFOGki8exgxbKNSjTPtrIENydss2MIirisoGOqUBsJURJgO1cEPW8qQwLjySNol6GCov0pD9LGbSV35OS0goB2REdBD8Al09kh6XMBJVh9vex5upHBK9guWE6HQj433aGMQuoV6mdcePhwBlTE3gMLDelKfpGZ0AZjwtOw3kl1A11uOaymiqTe2k1l3N4UjFQbgLujo2sJ3Q9dHXRHvwxsrRrKVWmyXEfDiS1ChCSYQLb%2Bq5iLQgkdC8uGnZ0XPYyc1Y&X-Amz-Signature=570bb98d93be1aa25d40a56ecb5dc39c092dd2ec72a10990cd3ed99b1a95adb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYYIIBRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBOt4iVpXpovzMgQ%2FlCj9l%2BOk1NYpnr7hjL2epHsjUuAiEA%2BMeKtl1W9HjgOR4g7LS1jSIFN5e7r0QlX0SdlpxmuSQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDImVV%2FtSUOnT1C5nIyrcA7UGgEBxnzZ0AH1E%2Bk5q3g%2FIZap4%2FhX7Tgx8AE5NE%2Bw4Mxry8FKg7WKBbVHq74DwFYeDjm8B%2FLxV6ZuqblKSiT6YXeb8eA3yyJGtxOSOfubOWLZ3GPVkkUVl3Dyhg3fl7DXgHdXgSf8qm%2BjxlyXZu%2B3svl0yyHlrAKlM2McYDFkU1YCAfeBMsYq3LBV06mxD0jEA8xMqN3Kp%2FppDGqs9T7q43XQ7p2CYjBkVQ1C0dXlfrMy84iLxpAAMvl3xFgCrTqKtYcsvy3OU0F2Hpr0M3sZW57xp2VXtOAbP89EyD19WUK9Uw4y8ce7eUwYjyIo7JK9ThzcjnIal%2F0PbfA8WMfUtZXv7UEeGTsccp125dvuL23az0v41%2F7IFu17SLRITTYTzUdbVCjFTztg03XyWaT96bw9AqV9DEgh7pOWkGCrNE9sFRLyvGt%2Bac3iKRXBfvXc7Yu9g%2B9cnyT%2Bd%2B7r8H22vjpJbLOIrkLQoBOaYqMUljTfyxR4Nw%2FTOg3fP%2FpFVdaLh94kSmFxilCVATRE8nxhWCEfSuXj1NWpEZwKQVB0u4%2Bnjj8Yk1FtFHC6UVMpx9FGBQZb5uKkmB4joC53PiacM5Hd%2F2KYb%2FFOGki8exgxbKNSjTPtrIENydss2MIirisoGOqUBsJURJgO1cEPW8qQwLjySNol6GCov0pD9LGbSV35OS0goB2REdBD8Al09kh6XMBJVh9vex5upHBK9guWE6HQj433aGMQuoV6mdcePhwBlTE3gMLDelKfpGZ0AZjwtOw3kl1A11uOaymiqTe2k1l3N4UjFQbgLujo2sJ3Q9dHXRHvwxsrRrKVWmyXEfDiS1ChCSYQLb%2Bq5iLQgkdC8uGnZ0XPYyc1Y&X-Amz-Signature=8a825a24a1dcbf5d657dc77c897d2cf325d94a0da508933e18deca5ee36002bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

