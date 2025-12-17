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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FT5E7FD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuIHPEzXLYNYG7HSITTyxDqQL7P4j5wMolil8SHFr%2BqAiAxNuihlzz%2BD8wYBXHe%2BLiH3DgXRzppB%2F2x0eHBsdviDCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM5EZTQLtWOCyCIHHsKtwDF9Fnkp5euS3DPWeYsw9JknU5AC8Sr5%2BSyvAP2zn6raGFqBKrJH1RQKiPM6DTA3xAi9HkYjaoFnxcTR8pStlsZczmdLyGup8IjSr1aIS8UKoVlXpIyIPPAuJxCTAB6qBnzkI0RuzyuFlmhw5C5jgq6DY9F%2Fm4QrxnmHmf4%2FvTtftX1K0WvAg85xTfRhw9yKjCxxTOaP5s%2BOS233peQUlu%2BOym6%2F0XKPXqzbyzmNflgBe6mGNTFqNXobguXcQcZOTqqmFukSTJXeRwecETgPDX4cUt9OWnNdDDaYZ%2B9WKPjMsLief6p9pnBej31NUcpUm7Iybz9n7Bi7t1LBieMfJypVzk23ADNCJsf64aLhIscGeQL0vU8ZK9axUnNdn6O%2Bii3XesNzXw8ox3zacRs1GQKui2CsX9r05pd9hlPgTOiRsj8Sj2yD9nwBBR%2BXhKD%2BeMHgnod0XxsU1sYJm9%2B3022vXTTI%2Fvt0cs4SzmPv5lsX9Zs%2BfFhEas0EPDp9r3dMwbyk8drmrmD6bf%2FUZSRMbJOBmEnsKTxxgXViMybr38%2BXurLdSdb5HmIHq4EK9pm0bRFFDc5ZE7FIewaNWzL6hS0vUR1a4sY%2Fdc0lb%2FEO1VCuNfUJu15zRjLJ%2FrdR0wip6JygY6pgFhL30YJ1szvKb4vMsVOCsQ1H%2FGGy44DeaWfhHFs9rN5xYZMFU2FL4%2F5Ti3EIF63zVvrlpuFui%2FrjtEj%2BHsAm4k520bcHIBOAo2s2pMm66B6kKpnlX1dW3RdACnOFK0ziRg6wHSmb%2FIYHM4tvBfLa0NgJe%2B4LC5UAfv0n56pYTiIw30n5D0XckeK%2FipQk5KVodqKS%2BISjhFndI5%2BhtNEpi3C8f9nOTd&X-Amz-Signature=4d427fafced69dea8e0266f9ea8b36f079350711b67e4448c69ca240b81ca4b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FT5E7FD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuIHPEzXLYNYG7HSITTyxDqQL7P4j5wMolil8SHFr%2BqAiAxNuihlzz%2BD8wYBXHe%2BLiH3DgXRzppB%2F2x0eHBsdviDCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM5EZTQLtWOCyCIHHsKtwDF9Fnkp5euS3DPWeYsw9JknU5AC8Sr5%2BSyvAP2zn6raGFqBKrJH1RQKiPM6DTA3xAi9HkYjaoFnxcTR8pStlsZczmdLyGup8IjSr1aIS8UKoVlXpIyIPPAuJxCTAB6qBnzkI0RuzyuFlmhw5C5jgq6DY9F%2Fm4QrxnmHmf4%2FvTtftX1K0WvAg85xTfRhw9yKjCxxTOaP5s%2BOS233peQUlu%2BOym6%2F0XKPXqzbyzmNflgBe6mGNTFqNXobguXcQcZOTqqmFukSTJXeRwecETgPDX4cUt9OWnNdDDaYZ%2B9WKPjMsLief6p9pnBej31NUcpUm7Iybz9n7Bi7t1LBieMfJypVzk23ADNCJsf64aLhIscGeQL0vU8ZK9axUnNdn6O%2Bii3XesNzXw8ox3zacRs1GQKui2CsX9r05pd9hlPgTOiRsj8Sj2yD9nwBBR%2BXhKD%2BeMHgnod0XxsU1sYJm9%2B3022vXTTI%2Fvt0cs4SzmPv5lsX9Zs%2BfFhEas0EPDp9r3dMwbyk8drmrmD6bf%2FUZSRMbJOBmEnsKTxxgXViMybr38%2BXurLdSdb5HmIHq4EK9pm0bRFFDc5ZE7FIewaNWzL6hS0vUR1a4sY%2Fdc0lb%2FEO1VCuNfUJu15zRjLJ%2FrdR0wip6JygY6pgFhL30YJ1szvKb4vMsVOCsQ1H%2FGGy44DeaWfhHFs9rN5xYZMFU2FL4%2F5Ti3EIF63zVvrlpuFui%2FrjtEj%2BHsAm4k520bcHIBOAo2s2pMm66B6kKpnlX1dW3RdACnOFK0ziRg6wHSmb%2FIYHM4tvBfLa0NgJe%2B4LC5UAfv0n56pYTiIw30n5D0XckeK%2FipQk5KVodqKS%2BISjhFndI5%2BhtNEpi3C8f9nOTd&X-Amz-Signature=afc037d56e5a813411b9479af1c2768ad8ad5b951480de964b4157110852f4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

