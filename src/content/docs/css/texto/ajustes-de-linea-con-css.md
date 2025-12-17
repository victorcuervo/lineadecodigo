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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4NZ5TP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxS56Kw67Ryp2au8ru%2BQVHhxe%2BLnV7KuW51fH34c4TAIhAIry6ayNvUWCtM9r0C0QgvZESmiIYwRjgaCRu6u%2BJgRVKv8DCHgQABoMNjM3NDIzMTgzODA1IgzH4aM6vpeFZ4xfgXsq3ANjNp8fK7e%2Ba8mpCotH3uRVAvOphjY9AXQ%2FqpdIVsI6NZkgOFnzn%2FhfNJht2%2Bvd8EiELV40UoC5GWodbZPsryEJybytKN1HS%2FngfpalxrjgnhmWvHCfNuuK3mS4a1%2FJxnHcqiAStMAvD45l6ljNxMMPpF%2B20Of9YuDZxkjhG5oBiQ9JuP02ETF0TFuFZINvp%2BjC2I0izdRc2QFAyv%2BpcBmN8ojsJrFzaPEL2me7BllQRDQEG38G7ibO%2FaiQt1DlyE6Ayx3hClkaxDVdakKXIBkCJd%2FgpmDQOaNcOtNotMeuqgPtaeXlPzVBhQzorLGqW5NQ4hOrA6Be7akeygBjY3HRG0Qq50eQrk2MwGpeF%2FpZKqasGk0mKHjq1jWIKV3gyrvgD4RVDFv1CSpB%2Fv2UgQKFRCqXO8TNmKhxH%2BWy20BVWI6YC9Zp6nu1EiJ5DJUz2KHnMgQmXQztNkyjOZianKLYzVTj9aaUhCe8cZF5hdJwWC4o4DvYVW16h5EpWoa69EwosBuZvHznXsOiPbcpO%2BTCN82VFAWDOBpUbIqkel2FQAN4jyQCSX25nRKpAx2auhEm2meDU%2BWl4dtd94PjZbDUtwYcrJewsQlCnAWWj8Q7C4th0gpNE5Z5l%2BiMbTD%2BnInKBjqkAeWMkiahR75uqjO%2FIHDLVoW5jS6UimrpFKynSiKSYzn7GNnjlInBJw69QaKH4VOqc6mBvS3D36bFxCljrKyQhETOq%2Fxtz5yPSBd4a1zMwEMO9riBJXZKwditEU6v2jZ8ddiT1MuoF%2FuGLsSvuspg%2F62fVvYuhS8INQTn7t4Dqoc1bP0D4EdEx9ee7nxjm91%2F4nPtWd5JvzsTKF1zlUnOWsUPXePV&X-Amz-Signature=2e4f590e8a7b778eaf7cca22477bac4daa68f72b4266dc7ab8b4946beb6ee7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TN4NZ5TP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChxS56Kw67Ryp2au8ru%2BQVHhxe%2BLnV7KuW51fH34c4TAIhAIry6ayNvUWCtM9r0C0QgvZESmiIYwRjgaCRu6u%2BJgRVKv8DCHgQABoMNjM3NDIzMTgzODA1IgzH4aM6vpeFZ4xfgXsq3ANjNp8fK7e%2Ba8mpCotH3uRVAvOphjY9AXQ%2FqpdIVsI6NZkgOFnzn%2FhfNJht2%2Bvd8EiELV40UoC5GWodbZPsryEJybytKN1HS%2FngfpalxrjgnhmWvHCfNuuK3mS4a1%2FJxnHcqiAStMAvD45l6ljNxMMPpF%2B20Of9YuDZxkjhG5oBiQ9JuP02ETF0TFuFZINvp%2BjC2I0izdRc2QFAyv%2BpcBmN8ojsJrFzaPEL2me7BllQRDQEG38G7ibO%2FaiQt1DlyE6Ayx3hClkaxDVdakKXIBkCJd%2FgpmDQOaNcOtNotMeuqgPtaeXlPzVBhQzorLGqW5NQ4hOrA6Be7akeygBjY3HRG0Qq50eQrk2MwGpeF%2FpZKqasGk0mKHjq1jWIKV3gyrvgD4RVDFv1CSpB%2Fv2UgQKFRCqXO8TNmKhxH%2BWy20BVWI6YC9Zp6nu1EiJ5DJUz2KHnMgQmXQztNkyjOZianKLYzVTj9aaUhCe8cZF5hdJwWC4o4DvYVW16h5EpWoa69EwosBuZvHznXsOiPbcpO%2BTCN82VFAWDOBpUbIqkel2FQAN4jyQCSX25nRKpAx2auhEm2meDU%2BWl4dtd94PjZbDUtwYcrJewsQlCnAWWj8Q7C4th0gpNE5Z5l%2BiMbTD%2BnInKBjqkAeWMkiahR75uqjO%2FIHDLVoW5jS6UimrpFKynSiKSYzn7GNnjlInBJw69QaKH4VOqc6mBvS3D36bFxCljrKyQhETOq%2Fxtz5yPSBd4a1zMwEMO9riBJXZKwditEU6v2jZ8ddiT1MuoF%2FuGLsSvuspg%2F62fVvYuhS8INQTn7t4Dqoc1bP0D4EdEx9ee7nxjm91%2F4nPtWd5JvzsTKF1zlUnOWsUPXePV&X-Amz-Signature=7c9efa38e719374be5e62097a792d11508ebadbaba44816f7776f2d984a89745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

