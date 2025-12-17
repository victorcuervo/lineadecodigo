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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWND3DS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDElN1NclnVmC8axxUzxJECimVoueAbTwPcIGAkTxC5BAiEAj5kXg8Y5fHGSPLVwniFvd795QTvsE%2FYPVwwBhVHM1kUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKsDa0bwgWmBAX2uOCrcAwFgYhADPVJaikY7Xu7f7NUXqKM1rJSOpku5s7akIoWPPg2H1EpaF2nF77eMjNy%2Fi1vbwoqjNWyVvUGoh1zNjCX%2FUYdx%2FyxTGHXCAHWz9S4ZxQ7HPiZqRkNmqCr5wmnU4d%2F%2BjVBwjhvBy0qkY5A%2BSPGQD7xbpAaCHsXGDa2jZUB75E8ZJaNfR7jc2vg%2BfHKy6%2BzTekJfb6QwnMHpPaVVBhsba1T%2BMFJCFQUNUfr4vc8BJpP1T1FakPB%2FDQ2YzGLKjvHvSwjiWADdyewY9%2FuIDNPkBlJGEshhrhEsYxtOwZOvw4dHS257JkiTqM2EEtCFnMGQhhQUq3DRA7kgTxGZV50O6k9Squsm3gd8sQi1p%2FcoxSHFV82QelLkMZyQbhJfoQFiKTWGND5kLGchmsZNXth2iqv43rviIrxUuEAgkZXQ2V%2BUvhAdYwtUeEjCMX5gWQffalVeWwcsGw8g03z7l4%2F75P6v3GiW%2BBVe2SPOsp8n1DwSUoKqf66lP0g%2BJatQpLXa0M%2Bfui1QbpdCPoiwl4eXFwjoGv3uhM%2Fuw48qIbjbPKAAA9e77Ddf0johGCaAxNliRWVsXPBdOBkg2UzWY2c9vU2FIsQihZ1RuvrZfPJ3%2FF2eLzQ1CiRLSxMwMPidicoGOqUB2%2BLkffUUMokwZCu5oHpKa1rXyzTECzT9q5%2BJvCbCMD2yw1yR3KknzkNwD%2B8Z%2BhRlkQ3HFZhvX5FmAyHy3c%2FbEwDNkUiGRPw1SSdamjKNm21LOet%2BQyqzGCoA7hKVazlAKgCX6WIHRwacqnvWsH0lbMbY69S5AAJTM%2F2hSgS6gCANFqek%2FNN8khSkIgMZy4cpwxBkAcrYElJqhxbKQZoYblBZQjeb&X-Amz-Signature=2c1dc91a24d8ff7c351ecab99e6d75a1fc2a6f95b32de4db07492ea03b39db56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZWND3DS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDElN1NclnVmC8axxUzxJECimVoueAbTwPcIGAkTxC5BAiEAj5kXg8Y5fHGSPLVwniFvd795QTvsE%2FYPVwwBhVHM1kUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKsDa0bwgWmBAX2uOCrcAwFgYhADPVJaikY7Xu7f7NUXqKM1rJSOpku5s7akIoWPPg2H1EpaF2nF77eMjNy%2Fi1vbwoqjNWyVvUGoh1zNjCX%2FUYdx%2FyxTGHXCAHWz9S4ZxQ7HPiZqRkNmqCr5wmnU4d%2F%2BjVBwjhvBy0qkY5A%2BSPGQD7xbpAaCHsXGDa2jZUB75E8ZJaNfR7jc2vg%2BfHKy6%2BzTekJfb6QwnMHpPaVVBhsba1T%2BMFJCFQUNUfr4vc8BJpP1T1FakPB%2FDQ2YzGLKjvHvSwjiWADdyewY9%2FuIDNPkBlJGEshhrhEsYxtOwZOvw4dHS257JkiTqM2EEtCFnMGQhhQUq3DRA7kgTxGZV50O6k9Squsm3gd8sQi1p%2FcoxSHFV82QelLkMZyQbhJfoQFiKTWGND5kLGchmsZNXth2iqv43rviIrxUuEAgkZXQ2V%2BUvhAdYwtUeEjCMX5gWQffalVeWwcsGw8g03z7l4%2F75P6v3GiW%2BBVe2SPOsp8n1DwSUoKqf66lP0g%2BJatQpLXa0M%2Bfui1QbpdCPoiwl4eXFwjoGv3uhM%2Fuw48qIbjbPKAAA9e77Ddf0johGCaAxNliRWVsXPBdOBkg2UzWY2c9vU2FIsQihZ1RuvrZfPJ3%2FF2eLzQ1CiRLSxMwMPidicoGOqUB2%2BLkffUUMokwZCu5oHpKa1rXyzTECzT9q5%2BJvCbCMD2yw1yR3KknzkNwD%2B8Z%2BhRlkQ3HFZhvX5FmAyHy3c%2FbEwDNkUiGRPw1SSdamjKNm21LOet%2BQyqzGCoA7hKVazlAKgCX6WIHRwacqnvWsH0lbMbY69S5AAJTM%2F2hSgS6gCANFqek%2FNN8khSkIgMZy4cpwxBkAcrYElJqhxbKQZoYblBZQjeb&X-Amz-Signature=6b2f1ebbc76e489c8af4163e9441ed5ad472a00dd776b348faba2f388d2fd668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

