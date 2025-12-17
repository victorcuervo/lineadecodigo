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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNZUF5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIp2xSMNA0Mp4bpWoqkdhug%2FVGSjgFoJk4DPODWH8RGgIhAI%2B9lQck8L5GzoRe2QakUTw2Pe7RRm24stqJdrkhna86Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyMQAqmrMnEx9XW2rkq3APRA0u%2BNhn2inGaIuepZfnje28lRFAPjFHa8wHWIt0mzdFYFMEDv7z2PcjhDqtEQpsOqv2%2Bib4Wgrjz2rHYoxWbna6%2FTKaIP%2FTXj%2F%2BnseLbwErjtrEVC%2FrxD3ObB1ao4JJLFyK6U14wy8hK2vvFNMG1LggTuBCAkx8LyAha9EbaG%2FtM886wfqp2Rj5Y%2FEyexvlEcsqMBv6hLL7Zsxu1b9QcC%2FYQ%2BkVxpZJIqPL2S7m0VvIKe1OmAW1zCumUqrdbp%2BY0xVqzNBNAJcRnhY2wfI7s3mA9k0YdzxvVIxLndarX0%2Bhrtb9WEO1zIr0MGK4LVyblwrjw9PrAuWptVKdiJ723uckgWSkWsdSVPsk4XORYam0z26sKZFOLgAFkQGyBVFPh787baCOixP4qp5i8sUVOYbb%2Fm9tsJiXtwGA00Pxq8NRuzUsChIFt13dZyDL4ZxSWldHSIjjOXI7%2FCytzsDnelTBiF4CQHhK8oMkFQWnfzwTF08c3y53RcCWFYw%2BiM4Tiqe97p%2BejLavrM8%2BtirlcUEdzhXIQCXccdTvSDTJAU25ULKv29CLXF%2BDVvCpPEcrySVVbk6Lvg5TK7i43fle28222d4k%2B0FKlNOn6rBo2jpUdR5ZaQi6WqBjK6TCN0onKBjqkAZQNCOselbpOqI%2FzY%2Bwg%2FPxIEY687w%2FdvZDp5d8%2F7zNxfotKLB3jWtY%2BbnF4PGRfrJrET4Ye5X60MFfvMS9bqrrJKRXhX74XChyeWOmwhXfGfB%2Fmh3F2fMOxF5XNQGL9yG1HNghexc6z1Xb3n2Obn6SaqNH4lhKKHJvlwiSjAfEoJ1FPePOt0kis%2BAv8A4aT33KEc3QW8BMDBuPJbMtqTD9zpLCZ&X-Amz-Signature=6bac71b906cf7107d41f2820a07cfa8d9279d9e0647523920f0b04e3ab1492b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRNZUF5H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIp2xSMNA0Mp4bpWoqkdhug%2FVGSjgFoJk4DPODWH8RGgIhAI%2B9lQck8L5GzoRe2QakUTw2Pe7RRm24stqJdrkhna86Kv8DCHkQABoMNjM3NDIzMTgzODA1IgyMQAqmrMnEx9XW2rkq3APRA0u%2BNhn2inGaIuepZfnje28lRFAPjFHa8wHWIt0mzdFYFMEDv7z2PcjhDqtEQpsOqv2%2Bib4Wgrjz2rHYoxWbna6%2FTKaIP%2FTXj%2F%2BnseLbwErjtrEVC%2FrxD3ObB1ao4JJLFyK6U14wy8hK2vvFNMG1LggTuBCAkx8LyAha9EbaG%2FtM886wfqp2Rj5Y%2FEyexvlEcsqMBv6hLL7Zsxu1b9QcC%2FYQ%2BkVxpZJIqPL2S7m0VvIKe1OmAW1zCumUqrdbp%2BY0xVqzNBNAJcRnhY2wfI7s3mA9k0YdzxvVIxLndarX0%2Bhrtb9WEO1zIr0MGK4LVyblwrjw9PrAuWptVKdiJ723uckgWSkWsdSVPsk4XORYam0z26sKZFOLgAFkQGyBVFPh787baCOixP4qp5i8sUVOYbb%2Fm9tsJiXtwGA00Pxq8NRuzUsChIFt13dZyDL4ZxSWldHSIjjOXI7%2FCytzsDnelTBiF4CQHhK8oMkFQWnfzwTF08c3y53RcCWFYw%2BiM4Tiqe97p%2BejLavrM8%2BtirlcUEdzhXIQCXccdTvSDTJAU25ULKv29CLXF%2BDVvCpPEcrySVVbk6Lvg5TK7i43fle28222d4k%2B0FKlNOn6rBo2jpUdR5ZaQi6WqBjK6TCN0onKBjqkAZQNCOselbpOqI%2FzY%2Bwg%2FPxIEY687w%2FdvZDp5d8%2F7zNxfotKLB3jWtY%2BbnF4PGRfrJrET4Ye5X60MFfvMS9bqrrJKRXhX74XChyeWOmwhXfGfB%2Fmh3F2fMOxF5XNQGL9yG1HNghexc6z1Xb3n2Obn6SaqNH4lhKKHJvlwiSjAfEoJ1FPePOt0kis%2BAv8A4aT33KEc3QW8BMDBuPJbMtqTD9zpLCZ&X-Amz-Signature=2aa4529c893aa775bbcaf1632b71a28cad5fe4d121f7e1efb8389d0fa4993bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

