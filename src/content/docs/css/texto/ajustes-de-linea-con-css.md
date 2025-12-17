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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632V3OPNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAaVfwD6OqJXx%2B7xnNnSsRknNbgm1ke%2B3zl%2FycxhRTJwIhAMWcKrfUUM4%2BoCHuOACdZesfze5V5fVdtDRPJ46VhibOKv8DCHkQABoMNjM3NDIzMTgzODA1IgzovgJBd%2F0wijPrrJMq3AMYkZJaj2TVpkL%2FOmus1Q810HbHej4eLHhl%2BSqWrT%2BCHoVetZfmLRT1r5AVSb7pbgphx8vTGwlfJYaS6sdMrvze7%2FkUhhIeQBhU%2BoXvm5%2FLrLMhk0l9UERMjfwByyP9FGrhIkI%2BKkZPqT1zE1UaBofodHnfAQxNv7aOSJnlwt%2FpF38py6inj2Fg8fkupkYM%2BPbRdSkAKzOUBYWIw0DVdtsPZBggLol129v8m%2FFOUS%2FrrvrWL42PDNEL2pXMz66GGcMabIHavNmcNdgut1WH3qQ0r9FRcmT%2BOG59sZflw6x%2FqtZIHxtPEzMFbcEkzBCc7WOqzqamy80S3NloL6E6lIQrsVwmSWOuO0YCklY7b9LOYMhm%2BDWnoCQhmmmMHDIca8bgNDW31L43anGXShpst9SMUEdQKUzD7680uNDHCHKW%2B9b2q0eYvFz6jzpWQ32YSR6NU%2F4pvtsQNmMyTo4LooKU%2F%2B3R%2F3bAVsXO%2BZ5ufnLmQk%2FZDuwCqevGhiO7xK4oxKbTBt0mHg9z0Emod4Pd6nE8ln4HBb3HZcInCs%2FMW0ndkA4BOCXCMT%2BhDT51sVz%2FPXRoWU95SHpGdU26gdMZL6FP4tXdBPiY9xWhVJQ356wMfsNzrwDdGlsJoBlAOjCiuInKBjqkAdcGGMZ36ljDG0PqmWGJlsBvJSju%2Fe0791dCSHGQBNhNl3YWVoEApQcdhdD4jEd919ZzfPg7oDvsXE5Oed5pcjf2kG6%2FUtW4mIN7Sxo9gZwb6NYmys1V1JhU4cKFPzmZjrz%2Fv77JYtHzwa9s8IrUX2abhu3l9JniR%2BwzNzDyU4xhlNOpJ%2FtqPFuYYerDJzPTR8J03ovKcrSJD%2BKsOGi1%2FIFw%2B83Y&X-Amz-Signature=178b2dd60547c399bc59a415eae2bacb3ef3ffa6f828f008a6882d2fdadc94c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632V3OPNC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAaVfwD6OqJXx%2B7xnNnSsRknNbgm1ke%2B3zl%2FycxhRTJwIhAMWcKrfUUM4%2BoCHuOACdZesfze5V5fVdtDRPJ46VhibOKv8DCHkQABoMNjM3NDIzMTgzODA1IgzovgJBd%2F0wijPrrJMq3AMYkZJaj2TVpkL%2FOmus1Q810HbHej4eLHhl%2BSqWrT%2BCHoVetZfmLRT1r5AVSb7pbgphx8vTGwlfJYaS6sdMrvze7%2FkUhhIeQBhU%2BoXvm5%2FLrLMhk0l9UERMjfwByyP9FGrhIkI%2BKkZPqT1zE1UaBofodHnfAQxNv7aOSJnlwt%2FpF38py6inj2Fg8fkupkYM%2BPbRdSkAKzOUBYWIw0DVdtsPZBggLol129v8m%2FFOUS%2FrrvrWL42PDNEL2pXMz66GGcMabIHavNmcNdgut1WH3qQ0r9FRcmT%2BOG59sZflw6x%2FqtZIHxtPEzMFbcEkzBCc7WOqzqamy80S3NloL6E6lIQrsVwmSWOuO0YCklY7b9LOYMhm%2BDWnoCQhmmmMHDIca8bgNDW31L43anGXShpst9SMUEdQKUzD7680uNDHCHKW%2B9b2q0eYvFz6jzpWQ32YSR6NU%2F4pvtsQNmMyTo4LooKU%2F%2B3R%2F3bAVsXO%2BZ5ufnLmQk%2FZDuwCqevGhiO7xK4oxKbTBt0mHg9z0Emod4Pd6nE8ln4HBb3HZcInCs%2FMW0ndkA4BOCXCMT%2BhDT51sVz%2FPXRoWU95SHpGdU26gdMZL6FP4tXdBPiY9xWhVJQ356wMfsNzrwDdGlsJoBlAOjCiuInKBjqkAdcGGMZ36ljDG0PqmWGJlsBvJSju%2Fe0791dCSHGQBNhNl3YWVoEApQcdhdD4jEd919ZzfPg7oDvsXE5Oed5pcjf2kG6%2FUtW4mIN7Sxo9gZwb6NYmys1V1JhU4cKFPzmZjrz%2Fv77JYtHzwa9s8IrUX2abhu3l9JniR%2BwzNzDyU4xhlNOpJ%2FtqPFuYYerDJzPTR8J03ovKcrSJD%2BKsOGi1%2FIFw%2B83Y&X-Amz-Signature=210f1a9095a3f0c0d8ddf0907405edf0bcbd0d15b4922c3337671f8fd2f134fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

