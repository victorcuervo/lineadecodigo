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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTV4MMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneCMCjQBQH0o6HO3TWjKgAk5DVGuQKRS6BlG8NohMFAiEAs8DBdmQcTgYQ0bqCMjxYZ0vtvQmTc63AJYVpt9ArKawq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNneTmVIn80U%2Bx2jVCrcA8BxPe3WxL0fhsmMaYoR%2BEuzkDVpiZwTVwjhZUjLDq%2FMCDlYI4FeIWDYJ%2Fxr9LhDHG%2Ff%2BczaxXRNS89%2BdRhjUZNo%2B9mvsbmJ3oG2bGPWuYsbij%2FtdAkI3hVFoLkaZtU8oKUbj2FT16DD%2F4%2Ftbx9sPheAjQWVvnhBs7AUtz61OgcELZJ5vu2pMZMsESSTfBOsv1rMHzbT60onTkqhDLFoeV4OVAh1bGG4dF8WlkfSevqu0nkjDlW77thfOGz1ATV42LPnfPNf%2FoX2ikLS0IG53UJLUIsHXySnHFyif0NPxaXcqYpdnfNj2BepMKSa1S2XTB6TZOhwrAltUhMQ4Hc7r6Wf47G5UwD5ZjGMQnD6zfOKIamGSDi7QbU6FZcJxYEXSoYwtGnQnIwLokn30ix1AfLj5Y2FtpChKaNR9diJuzXphLa%2BgUvD2SSgOUFv0aeFfPfk2Ev9gV9Mt3CB3NPdvx9nNG5W2TZM5LWczA%2FiWdLVYAft6kU7TUqTy4e6yoyrLytist1tV11SmUAGePMhKt2HEHFsY0ARsVJ9Hbie6Qv0IClCUZWORvm0QP4Axh9lx44kwxKtL7H5lB66tZ6%2Fs%2FwLtMXz52kWKSLY%2BpX6q5T21TPdnzPklwKUF8C2ML3GisoGOqUBVBA7%2F9CMqu7h%2FkJhD3WCS8riFho1SJgrgJ1Lzfxt0sEwcGDmyu351%2BR%2B%2B%2FjXSprPbpXnVXHRDzZi9vXluDVt%2BV6AYoVSbjf4GXhN4NXEJ3kl3UBCYQtclKFTxKI8dVlAOopEv5KNYtrdLFWLDHr5T1l5CYciWl3usZy7HPEwsV4qXSyZy8lo4mxn44jo%2B6mBJ2Kmi6hGFBoNWonrVGwXDFqXI1zQ&X-Amz-Signature=65c83e7f9893e95baac812795a6f76fb9213b0f000bdc39c6ddaf2e7349f4567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCTV4MMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAneCMCjQBQH0o6HO3TWjKgAk5DVGuQKRS6BlG8NohMFAiEAs8DBdmQcTgYQ0bqCMjxYZ0vtvQmTc63AJYVpt9ArKawq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNneTmVIn80U%2Bx2jVCrcA8BxPe3WxL0fhsmMaYoR%2BEuzkDVpiZwTVwjhZUjLDq%2FMCDlYI4FeIWDYJ%2Fxr9LhDHG%2Ff%2BczaxXRNS89%2BdRhjUZNo%2B9mvsbmJ3oG2bGPWuYsbij%2FtdAkI3hVFoLkaZtU8oKUbj2FT16DD%2F4%2Ftbx9sPheAjQWVvnhBs7AUtz61OgcELZJ5vu2pMZMsESSTfBOsv1rMHzbT60onTkqhDLFoeV4OVAh1bGG4dF8WlkfSevqu0nkjDlW77thfOGz1ATV42LPnfPNf%2FoX2ikLS0IG53UJLUIsHXySnHFyif0NPxaXcqYpdnfNj2BepMKSa1S2XTB6TZOhwrAltUhMQ4Hc7r6Wf47G5UwD5ZjGMQnD6zfOKIamGSDi7QbU6FZcJxYEXSoYwtGnQnIwLokn30ix1AfLj5Y2FtpChKaNR9diJuzXphLa%2BgUvD2SSgOUFv0aeFfPfk2Ev9gV9Mt3CB3NPdvx9nNG5W2TZM5LWczA%2FiWdLVYAft6kU7TUqTy4e6yoyrLytist1tV11SmUAGePMhKt2HEHFsY0ARsVJ9Hbie6Qv0IClCUZWORvm0QP4Axh9lx44kwxKtL7H5lB66tZ6%2Fs%2FwLtMXz52kWKSLY%2BpX6q5T21TPdnzPklwKUF8C2ML3GisoGOqUBVBA7%2F9CMqu7h%2FkJhD3WCS8riFho1SJgrgJ1Lzfxt0sEwcGDmyu351%2BR%2B%2B%2FjXSprPbpXnVXHRDzZi9vXluDVt%2BV6AYoVSbjf4GXhN4NXEJ3kl3UBCYQtclKFTxKI8dVlAOopEv5KNYtrdLFWLDHr5T1l5CYciWl3usZy7HPEwsV4qXSyZy8lo4mxn44jo%2B6mBJ2Kmi6hGFBoNWonrVGwXDFqXI1zQ&X-Amz-Signature=534447da6bf3a69715746e17b7016b3f22d1d3001d27aeef92d76a6c6c342fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

