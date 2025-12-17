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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WNLEOX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRMHXC3J2Sq1tgs97j3bHD37kFCtFxixBWatEZkTboBAiEA3DE01HlN331Go0l1oV013Fk6av3KiDs1dVGVWKBmdVMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO6gazmxhj3pT%2F%2FeOyrcAyeA%2FNyZViy2Df2TmtfYfOG%2BQhlNYcpRY2B0dgd5fxO9CFdZ6vmKrru2dHIElbVw36ACXo0a9tIeg4zbos%2FnPZGfr1%2FlsHvKfvSL%2F7IQyO%2B4jRzsg5vga7MRIMWR%2BwvUUw7%2FQAhKHmOlwo1WwQKvwRFwi82PW9wHr8oDSBPLpbAveCJK1q8NbQF%2B1parJS00KKINRSy0vKjabXfFTzs1r3o61aGLAffXE6RI6daIcfzv3bUsmp%2FjaQtKojJqMBJP8B0jW4udOzV3WWZDam%2F9ea4i0IhUAv70T04GJRH4mYJDdWAwKxeEuN639FslExdwkrDQNoSKS1yHwpL0EexNlLj7m8YUeKJqVhDiwOYcuC%2FqSjzbmlyzUaEKor9cVVv3D2bae6kP22BIsIxEmDVMoVIcB4EY2fkMEt2BggEOncZoxgyHRPdQMzXiNFk4N%2FE2TOt%2FZ0XaPrr%2B4a88qTXiP23VlRC2Vg9BKBkTVjsCbozsvXlAp0ZatzP2Id7Pk8OsiI82pAjLoA6xTn6gou9wgG0JnoYsEbJYSLglyHyFGrKSkSukLeX582OaqnxygQ4I3B%2F69bSz%2BvFozRC7rB%2B7Ubxe9kn9UDVGmxfuDTsNcMfr7ClvOTLbOgJBasRuMJn7h8oGOqUBSWirbioplNpW7nrPeWBjcRwTW%2FA82ck5lNhvCRcFmuBbReoOUqbydlfhMk3wtaFBQAVWczLtH2LExIutH6K3BQoPo7E0PWKSamTmF69pkKMAZb66cyAhMcoeG3VH486c69Hap%2BuWlyshmOhuSljnj3Sprs5Vj%2FWLN5NnJOk8LqQHKuaKQU1%2BNnNXt76gSv6JkdvDSAGy9VXnZcMEgFgZNh4%2FmuIy&X-Amz-Signature=a7b742793ff88cd0b09849345876f2f9d7f811ff59e8db65643fc3bd20953574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7WNLEOX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRMHXC3J2Sq1tgs97j3bHD37kFCtFxixBWatEZkTboBAiEA3DE01HlN331Go0l1oV013Fk6av3KiDs1dVGVWKBmdVMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDO6gazmxhj3pT%2F%2FeOyrcAyeA%2FNyZViy2Df2TmtfYfOG%2BQhlNYcpRY2B0dgd5fxO9CFdZ6vmKrru2dHIElbVw36ACXo0a9tIeg4zbos%2FnPZGfr1%2FlsHvKfvSL%2F7IQyO%2B4jRzsg5vga7MRIMWR%2BwvUUw7%2FQAhKHmOlwo1WwQKvwRFwi82PW9wHr8oDSBPLpbAveCJK1q8NbQF%2B1parJS00KKINRSy0vKjabXfFTzs1r3o61aGLAffXE6RI6daIcfzv3bUsmp%2FjaQtKojJqMBJP8B0jW4udOzV3WWZDam%2F9ea4i0IhUAv70T04GJRH4mYJDdWAwKxeEuN639FslExdwkrDQNoSKS1yHwpL0EexNlLj7m8YUeKJqVhDiwOYcuC%2FqSjzbmlyzUaEKor9cVVv3D2bae6kP22BIsIxEmDVMoVIcB4EY2fkMEt2BggEOncZoxgyHRPdQMzXiNFk4N%2FE2TOt%2FZ0XaPrr%2B4a88qTXiP23VlRC2Vg9BKBkTVjsCbozsvXlAp0ZatzP2Id7Pk8OsiI82pAjLoA6xTn6gou9wgG0JnoYsEbJYSLglyHyFGrKSkSukLeX582OaqnxygQ4I3B%2F69bSz%2BvFozRC7rB%2B7Ubxe9kn9UDVGmxfuDTsNcMfr7ClvOTLbOgJBasRuMJn7h8oGOqUBSWirbioplNpW7nrPeWBjcRwTW%2FA82ck5lNhvCRcFmuBbReoOUqbydlfhMk3wtaFBQAVWczLtH2LExIutH6K3BQoPo7E0PWKSamTmF69pkKMAZb66cyAhMcoeG3VH486c69Hap%2BuWlyshmOhuSljnj3Sprs5Vj%2FWLN5NnJOk8LqQHKuaKQU1%2BNnNXt76gSv6JkdvDSAGy9VXnZcMEgFgZNh4%2FmuIy&X-Amz-Signature=7af232c9ecea3d2941986ed68a275f6957e9d42a90906edbc61314fec63f2dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

