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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKOSL37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1lr52i0my2uhIUSTRJNNpbEwqcDS4FJQIy52G4ubPwIgJl5CqJZeDTyt8YZH55WtCpRI5kCWXX0TCAVNZr59NP8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPIlNOPSKjr1WHV0%2FyrcA%2BTHChREfLTnpdlkdNlU6%2FYYFfVsPLudmB78QueZXCITzzTOkLL%2F9NRMxufoYpIeNo4VxUMQE5fbKHRPFFaxEQbu4ZckOXAsrqYgP03zSlWR9eBIEjmSY%2Bw9DRKP6DOxAHf0yQMmw9cTZimfSW4cBT6ZAxcFaNiCjwTWdOvm06gBpb7ikVEZpgPDmhojN2m752NTYcrskIelCX462GZIzdSWtdYj1t4b7omLCByGDz0TZqrcFN%2BHc7v7qkjUzoXH%2F7lot3mwFMffJoAvA55UwDlx22M9JzT%2FvFG8qt%2FZQJBrNE%2BRJbpUH05FojILVmbJoq%2FEYoE%2BnQcsiVtyc8oqVh%2BfBGhGA9JbxaiCPxfa5wofH4hj2YWZG6NiyYcWUcp389JJ1%2BBCSfV5%2Fox9Q0it6qpLeI%2BUNP7CIAq8Hx%2FC12xJnjjFM6Yyt2iOqNtP310k6tAMSy4JU1XKKrmylMigiHR9va4nw1J9lxuuDS%2Fr8wn2ugK6SZx2isDiFdmjAQq4NWoBOugXdgJyyRib0Jmbk1BEOONoRNwU4opoPLgHyEjmTWjJ8UUXm%2FP8Kz8dMlvlcw50H4ACpUXssb8GI2TVpuxQkeWRM8P3fLB1v0k5SBKonGnoZALLRt7QjL81MOLSicoGOqUBF3NU1VAIqImQKJ142ia8bV64x4%2BJAJRsNJbbWfwdzvgndSyl1eOz%2FYF1mfPzD9QhhuulOkGAz%2Bb%2Bl4pDPueAaby%2FHOohNKgFpkfIquNP6rx8Fh5C423ueknD%2FL8gPMYsDluB0hqoFdCS23ylwuCsLh4yCKtljD4hPPFtEQMh%2BW5r1YT7mguUqcjOcJQCwy3WoqbUvsglTN8VCLuhZl6XM0aEc4Fh&X-Amz-Signature=04108e5b74e2be95e0f39fd7778dfa5d90309dc40ca61149c42caede7ab3d5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLKOSL37%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ1lr52i0my2uhIUSTRJNNpbEwqcDS4FJQIy52G4ubPwIgJl5CqJZeDTyt8YZH55WtCpRI5kCWXX0TCAVNZr59NP8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPIlNOPSKjr1WHV0%2FyrcA%2BTHChREfLTnpdlkdNlU6%2FYYFfVsPLudmB78QueZXCITzzTOkLL%2F9NRMxufoYpIeNo4VxUMQE5fbKHRPFFaxEQbu4ZckOXAsrqYgP03zSlWR9eBIEjmSY%2Bw9DRKP6DOxAHf0yQMmw9cTZimfSW4cBT6ZAxcFaNiCjwTWdOvm06gBpb7ikVEZpgPDmhojN2m752NTYcrskIelCX462GZIzdSWtdYj1t4b7omLCByGDz0TZqrcFN%2BHc7v7qkjUzoXH%2F7lot3mwFMffJoAvA55UwDlx22M9JzT%2FvFG8qt%2FZQJBrNE%2BRJbpUH05FojILVmbJoq%2FEYoE%2BnQcsiVtyc8oqVh%2BfBGhGA9JbxaiCPxfa5wofH4hj2YWZG6NiyYcWUcp389JJ1%2BBCSfV5%2Fox9Q0it6qpLeI%2BUNP7CIAq8Hx%2FC12xJnjjFM6Yyt2iOqNtP310k6tAMSy4JU1XKKrmylMigiHR9va4nw1J9lxuuDS%2Fr8wn2ugK6SZx2isDiFdmjAQq4NWoBOugXdgJyyRib0Jmbk1BEOONoRNwU4opoPLgHyEjmTWjJ8UUXm%2FP8Kz8dMlvlcw50H4ACpUXssb8GI2TVpuxQkeWRM8P3fLB1v0k5SBKonGnoZALLRt7QjL81MOLSicoGOqUBF3NU1VAIqImQKJ142ia8bV64x4%2BJAJRsNJbbWfwdzvgndSyl1eOz%2FYF1mfPzD9QhhuulOkGAz%2Bb%2Bl4pDPueAaby%2FHOohNKgFpkfIquNP6rx8Fh5C423ueknD%2FL8gPMYsDluB0hqoFdCS23ylwuCsLh4yCKtljD4hPPFtEQMh%2BW5r1YT7mguUqcjOcJQCwy3WoqbUvsglTN8VCLuhZl6XM0aEc4Fh&X-Amz-Signature=a867beffe476571048719893d95fc932b70a022f37cb28552ac1a33bba99457a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

