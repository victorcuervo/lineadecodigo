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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AVMTMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy21lPQU1C7bEdkTs3PuIwQIQc4%2B4FFuzs9JLzK6Fx3QIgS%2BaSMC78qhadSTRfi7MTtwuvuV6XNKocU1MPJTfKpqsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAmZe5ywoxgI3C769CrcAxbRZVrflA1uRyWD6KRwr1RsMD2tF8VET5FtZW4FqNi2MfuLHdlch%2BaoY%2FocXhzi1CrXObt743zPvie%2BgcwAerAkRDeViBwoHuYBVvaV5JGX7lwEnuSNsCsFxrhi5kJmSGYk%2FpA8fYzhtmaZqf2nscWtNlueGWlQLGs8ziqFAMsYLT31V3oIWUGp7e8BmX8YD%2F3EWFCi9csZqsIXNF59%2BG4ic4BB6qY3jZ1J5XawdotMSjNN6rGSoPOSEAgrrlXp0voNyCwtXWr37c%2FyMTHLmCDNEzxh6ATbIgy5fELfaopHJ5%2BDj4HR7aj%2BrUOO7HJTjOeQvs7ffSAjfWTXB%2FMAjOgENSiIQX8StUWnJX8zBwcOGwsVRllJBoUr%2BkDyOXIW6Ikma6PsNLOGaVviug1fmuK1DC%2BmigolSlx%2BE%2BDMrlHw42Ic8YurgBPJ%2B5Dx9gjTf7KnpMzkkYWCumJg2RGUhSbGOnBzcJAv4rgUJ6cQQJFvMzxj5TJ5jz5UVIzZe5nqM8qnWJZAdBBi9J1mBMOaQWgMjKuHftPbNrT3NiPitXurZXaOOLFBKqUpeP27Zi9asWr4N%2ByBVGU6ZF0pI70oWghuNo0%2Fns3WnPA5VXoioU5m7Wl0p9k9rtUAEj85MJfSicoGOqUBXdZ9Z7gvaCKVo7YE9pJ97S4hY88jsFhpCUFffsWWdKvfgnGej76ohd1vK9KBi0yxKWKafwz8wnOpy3AxwJs3WVK8A1LAnJgSMlzHiHxwd0zXmSMKn7D5e%2FUuTJKsIUlOvQb87%2FwGnoaforid39IvcbbSFoGKG00wIBKTS4AAJ3E%2B7KL3VPt7aDlxfnwrpd8lJbHr1TZyZ3lL%2B7TVTR%2Fv%2FDCgTtwi&X-Amz-Signature=d95d180719796438be7cd7813c384bdb34467dde3c6632b4387c7d0444e4866b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3AVMTMY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy21lPQU1C7bEdkTs3PuIwQIQc4%2B4FFuzs9JLzK6Fx3QIgS%2BaSMC78qhadSTRfi7MTtwuvuV6XNKocU1MPJTfKpqsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAmZe5ywoxgI3C769CrcAxbRZVrflA1uRyWD6KRwr1RsMD2tF8VET5FtZW4FqNi2MfuLHdlch%2BaoY%2FocXhzi1CrXObt743zPvie%2BgcwAerAkRDeViBwoHuYBVvaV5JGX7lwEnuSNsCsFxrhi5kJmSGYk%2FpA8fYzhtmaZqf2nscWtNlueGWlQLGs8ziqFAMsYLT31V3oIWUGp7e8BmX8YD%2F3EWFCi9csZqsIXNF59%2BG4ic4BB6qY3jZ1J5XawdotMSjNN6rGSoPOSEAgrrlXp0voNyCwtXWr37c%2FyMTHLmCDNEzxh6ATbIgy5fELfaopHJ5%2BDj4HR7aj%2BrUOO7HJTjOeQvs7ffSAjfWTXB%2FMAjOgENSiIQX8StUWnJX8zBwcOGwsVRllJBoUr%2BkDyOXIW6Ikma6PsNLOGaVviug1fmuK1DC%2BmigolSlx%2BE%2BDMrlHw42Ic8YurgBPJ%2B5Dx9gjTf7KnpMzkkYWCumJg2RGUhSbGOnBzcJAv4rgUJ6cQQJFvMzxj5TJ5jz5UVIzZe5nqM8qnWJZAdBBi9J1mBMOaQWgMjKuHftPbNrT3NiPitXurZXaOOLFBKqUpeP27Zi9asWr4N%2ByBVGU6ZF0pI70oWghuNo0%2Fns3WnPA5VXoioU5m7Wl0p9k9rtUAEj85MJfSicoGOqUBXdZ9Z7gvaCKVo7YE9pJ97S4hY88jsFhpCUFffsWWdKvfgnGej76ohd1vK9KBi0yxKWKafwz8wnOpy3AxwJs3WVK8A1LAnJgSMlzHiHxwd0zXmSMKn7D5e%2FUuTJKsIUlOvQb87%2FwGnoaforid39IvcbbSFoGKG00wIBKTS4AAJ3E%2B7KL3VPt7aDlxfnwrpd8lJbHr1TZyZ3lL%2B7TVTR%2Fv%2FDCgTtwi&X-Amz-Signature=3c04140e252ee4e06d254bdb8134f872c4bddeb566ba5d4cebeb87380d79d35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

