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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKI2JDNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC00kO1frx2Dr3rtqtoVednH9kgKpC7DR13PuCZVQjSbAiEAvs%2FEpVZa5al3FCcwRJkpLza78%2B8nfiyo2AAq%2FskfBokq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGN1CB1TpO6d18qICCrcA6Shu2IB9ZTaMExhbpbAb4xKXcRyXNVtFyp7zQ3qGcR4FdW9bKgw0XdqxGfxMPhoNQzQ01eojVU0o2rooR5Y%2F%2BoJSzuQd1HsE6MsDQaY1cvqEd6K2St0b%2FPakq5bXysyriWBHoLx3hgcFnWe6G1vDNoVPNvA6bIqnC3U0LHoQeeajjZcrBuXIYseOS4p2Lz%2F4pN3AsTln0QobcHF8tkgaU6gr5ud3H%2FuXmZYqBC%2FCTCTrihjw5AOlg5msvEieZbiqg4iecxibneJBf%2BsVfsYM8y%2FiTDQZd5OguHayLtRRIEgAutIU0%2FcIjlSUF9vRxZl6t%2Fy%2BHc8WwJQqT5hZ5EYg9nmyPZaCqdcdGNgiTC3rdvaVXEzkclJyXmcw0cDJnKp14puRXOZOsHUlG2dh4sRwIHqg60XsTvalXz16Om%2FA9WIslJlgbG7Zrbm6Gg3aKebaM%2BQhXoXpIQZysU15C9UysZexii9mkvD0R5E5FqlA9kLFZtbGmhSrzrhe%2Banv8hirm7N%2FBWWieZwSfmeK8hc%2BLUQ27wOjkZ4Dy8JpIdJUvEVb2hW7xZUExgUvhB42R13ejqi7IsnC%2FbeiedTVtgCH4h9YRI8Xj6fb99HOfzdixXYZ1TR7%2B6mjpgC5E%2FsMNf7h8oGOqUBBrKIKMV4gGJNYeMGv7%2FlJb3o9w25Nhdb1hQqFb83tpWCK3gZBWkjb5fubfuvyh7tgoZrrcELvHuPjpXQKGichV2MsCshF4NAeMnPbnlvfOnzXpKfF4PR%2FaonRhioh%2BRwa5MmwMpjmrzOjRJlGHvEUug6wHysuavNe2SqYbtAqRaekmrxTv%2BmG896aQcDG%2BxHvTWeV2Nvs923RMGdI6Jw9nCwhU6L&X-Amz-Signature=f7403b57704dbf753d058edee4617f7ef136846483d6e5a193803a71f00d4929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKI2JDNO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC00kO1frx2Dr3rtqtoVednH9kgKpC7DR13PuCZVQjSbAiEAvs%2FEpVZa5al3FCcwRJkpLza78%2B8nfiyo2AAq%2FskfBokq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDGN1CB1TpO6d18qICCrcA6Shu2IB9ZTaMExhbpbAb4xKXcRyXNVtFyp7zQ3qGcR4FdW9bKgw0XdqxGfxMPhoNQzQ01eojVU0o2rooR5Y%2F%2BoJSzuQd1HsE6MsDQaY1cvqEd6K2St0b%2FPakq5bXysyriWBHoLx3hgcFnWe6G1vDNoVPNvA6bIqnC3U0LHoQeeajjZcrBuXIYseOS4p2Lz%2F4pN3AsTln0QobcHF8tkgaU6gr5ud3H%2FuXmZYqBC%2FCTCTrihjw5AOlg5msvEieZbiqg4iecxibneJBf%2BsVfsYM8y%2FiTDQZd5OguHayLtRRIEgAutIU0%2FcIjlSUF9vRxZl6t%2Fy%2BHc8WwJQqT5hZ5EYg9nmyPZaCqdcdGNgiTC3rdvaVXEzkclJyXmcw0cDJnKp14puRXOZOsHUlG2dh4sRwIHqg60XsTvalXz16Om%2FA9WIslJlgbG7Zrbm6Gg3aKebaM%2BQhXoXpIQZysU15C9UysZexii9mkvD0R5E5FqlA9kLFZtbGmhSrzrhe%2Banv8hirm7N%2FBWWieZwSfmeK8hc%2BLUQ27wOjkZ4Dy8JpIdJUvEVb2hW7xZUExgUvhB42R13ejqi7IsnC%2FbeiedTVtgCH4h9YRI8Xj6fb99HOfzdixXYZ1TR7%2B6mjpgC5E%2FsMNf7h8oGOqUBBrKIKMV4gGJNYeMGv7%2FlJb3o9w25Nhdb1hQqFb83tpWCK3gZBWkjb5fubfuvyh7tgoZrrcELvHuPjpXQKGichV2MsCshF4NAeMnPbnlvfOnzXpKfF4PR%2FaonRhioh%2BRwa5MmwMpjmrzOjRJlGHvEUug6wHysuavNe2SqYbtAqRaekmrxTv%2BmG896aQcDG%2BxHvTWeV2Nvs923RMGdI6Jw9nCwhU6L&X-Amz-Signature=a31d1018a6e6db38ffa827fffd8f2bc3867ed515fc85b7dc34a914b2f6b87bdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

