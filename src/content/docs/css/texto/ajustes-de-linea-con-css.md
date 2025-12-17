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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2J3SIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUxml5QbTwcwc6DcGKPzVsEVEhGyceMw8y3T3bqjQPZAiEA8Dc7fxaKffZw272%2F8H4NCvLHdj7VWYOYBQlKGeBH37Eq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBEUBNaNb12nvBOPCircAzb15MaB%2Flk1c6Mm8oNhs4PeIiigVPH3%2BLSQwFQTvDVP8Vu0BIIXdxVtL%2BUfrO0kIV0FS%2BKubxSG9OYagNaHwCxXMDS8oUasR6HbXkq1eAEol1ENOYTF5Pym8NcgKO5jr%2BnJov%2F4BmjtG5aWa7UnlXU1n3aUzVf0k4IF9irJNU%2FqbsSpWCRFSkgSgGIbcQrDFxNnviUlFJqGGpqyAmHsHmPmOqLDeB6Auej3AS8DaL55HQf7VxESd%2FeFa9%2FapoGNC6zL96jVf6Y3U40iZ5kI%2Fd2SUEXDdYMjVXFEjggvp18ko4td0NxZGFrluAOndpZain08c%2BCTeyquMZqAULekFjATAlqA4SBuv%2BknrN3zYk7jBIJ11Oj%2FPuBRMtF100pIEFGFwfgEhZspwA9811S%2BT9DRE5eZCGoG%2Bzy1rK4H2vJJgauVM8G0q0U47iM9J0H7YFs%2Bmuauzks%2FGqebprAbsCUzU9%2Bts1XIvWrraM8YgUKBgsqAHmT1WS%2Bex2pFa7HkRm491ZPkjKmP1MHtPNdFDc9zgUkglI3%2BLNl3MNI61qeMsKQW2iKhX6w7nk1btUUdxylV1ghNfGUzS8XQeaNp30PLkW4Z5Yn2M7lSGtImE94JidJhoSth%2BLWY5sSoML%2BqisoGOqUBg22AOdrsF3dcbGL8PcWE6S%2BSLVBVIYVCTln5a%2FKiWzkYHqcLhyAB7DSqYcXE9OdoKBd8VwHCnDqrF5TgIAp3jcu2z0FeuxJWZaAJXg5E1zkLx0FHWi5LYEYwjxziRwMBRm5zhB5xOgEesU%2BhD2FwHNdnMu3fZPqeNUZ%2FUi77%2F1kGdwcAPDo%2Bi%2FNuDazIg8uOTjRy6Q5Dmyz7f50asqI3jGr3fi59&X-Amz-Signature=3d625bd0126722ccfe14ee3e52564d1190d6cc81eb281fef0eee118521705a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX2J3SIG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUxml5QbTwcwc6DcGKPzVsEVEhGyceMw8y3T3bqjQPZAiEA8Dc7fxaKffZw272%2F8H4NCvLHdj7VWYOYBQlKGeBH37Eq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDBEUBNaNb12nvBOPCircAzb15MaB%2Flk1c6Mm8oNhs4PeIiigVPH3%2BLSQwFQTvDVP8Vu0BIIXdxVtL%2BUfrO0kIV0FS%2BKubxSG9OYagNaHwCxXMDS8oUasR6HbXkq1eAEol1ENOYTF5Pym8NcgKO5jr%2BnJov%2F4BmjtG5aWa7UnlXU1n3aUzVf0k4IF9irJNU%2FqbsSpWCRFSkgSgGIbcQrDFxNnviUlFJqGGpqyAmHsHmPmOqLDeB6Auej3AS8DaL55HQf7VxESd%2FeFa9%2FapoGNC6zL96jVf6Y3U40iZ5kI%2Fd2SUEXDdYMjVXFEjggvp18ko4td0NxZGFrluAOndpZain08c%2BCTeyquMZqAULekFjATAlqA4SBuv%2BknrN3zYk7jBIJ11Oj%2FPuBRMtF100pIEFGFwfgEhZspwA9811S%2BT9DRE5eZCGoG%2Bzy1rK4H2vJJgauVM8G0q0U47iM9J0H7YFs%2Bmuauzks%2FGqebprAbsCUzU9%2Bts1XIvWrraM8YgUKBgsqAHmT1WS%2Bex2pFa7HkRm491ZPkjKmP1MHtPNdFDc9zgUkglI3%2BLNl3MNI61qeMsKQW2iKhX6w7nk1btUUdxylV1ghNfGUzS8XQeaNp30PLkW4Z5Yn2M7lSGtImE94JidJhoSth%2BLWY5sSoML%2BqisoGOqUBg22AOdrsF3dcbGL8PcWE6S%2BSLVBVIYVCTln5a%2FKiWzkYHqcLhyAB7DSqYcXE9OdoKBd8VwHCnDqrF5TgIAp3jcu2z0FeuxJWZaAJXg5E1zkLx0FHWi5LYEYwjxziRwMBRm5zhB5xOgEesU%2BhD2FwHNdnMu3fZPqeNUZ%2FUi77%2F1kGdwcAPDo%2Bi%2FNuDazIg8uOTjRy6Q5Dmyz7f50asqI3jGr3fi59&X-Amz-Signature=9da1a4ed516cd3d5aa44bb45d530fb88903f100e23790ec284efd71aac1c68c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

