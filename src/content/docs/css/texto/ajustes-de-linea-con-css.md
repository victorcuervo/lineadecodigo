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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY46ZUKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYO5erH%2BI8GydGgi54b%2BR947Vewkc37GaZpN8Ux64ZAIgVWrgQcNHuVrl%2BKpxJ%2FJtD52lTsJfB7TicuxXk1XvmtYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE8Z3v1WZLs9C7Ue3ircA15%2B6s61Mvkbeba%2FJ0Rcs4%2BrQB15rT7h0mvQgRJfK1blQyIQop7XIoTgxH%2Ba6ugo%2BYsorZmYSwaFbW2opyMQnc1FcpkU8RXR4UkFHtXchLjriGg7qMtyPmSnV9fJ64fmyTaDfsG5kSFBAnl3QWAX2BOsL60koaMsuax1kQhnM8vfb57eo8cXGf%2FQecOfJDcQAq3Hf7Dnu2OSx93bqOtSFh%2BVIYhjImuaWzZTk7PbIUAxSOJVHqUdcOeK7SwbSDGgagcRhj%2FbpHW72K1NO2sAUgVjJ%2BWqX%2Bzcw7hD1g4kQFtnNsvKo1cYsRdc1KUyzU%2FwTHCxwVcMUwjCbesJzfgr94ovS%2FO7GS1e26pq%2B1Ay5YBrYNiPZBZLR11GlZsBCDlY2QsRJPWjDroH%2Fqz98oqGf94bIx22lcfRs92CmojhXjUasxOwoSnzxva7e80nqRSPKRtQ84905iiKWIYHpnkQjellGIBGNEVprHuVYOoS%2F2HJEzpwmVLW%2B4wy3Zz8y1fP22JGnWnUCHMqyY6VrYuUhpyGcfzJs9TVoPntQuEByTawdt6jcA%2BfT5gQQJc7t5zsvZlc9a5V5zZT0JZUUxF2I6qL9nLd5c%2FfnPb02%2B9F5k35JQ7gDsgPAHxwwOgFMKDRicoGOqUBOhWD6XROsEgAeKp31ytJXSA%2Fkli27IQcPyaTa6dXegzE1wuV2wer5MJZDNhfFdDd3XZMDBN5YB%2BuKqycXeITWrASMn1zFURcr2MmSJ2IujzUtdR6vk5hWds6Zg6bEA6Vti9LJRocPws3sW6xppiwqTX8h0Hi7HfBgyMmikvnqaU%2BsSDxQW0OZ3TYlAnDIFMXR4s5IwAuU3%2FoDG6e7ctARnbAfOb6&X-Amz-Signature=c4f14189cb3f95bd635f8eea31f1d85c55fb4240d8f65b68e72944ef7eb4f008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY46ZUKY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEYO5erH%2BI8GydGgi54b%2BR947Vewkc37GaZpN8Ux64ZAIgVWrgQcNHuVrl%2BKpxJ%2FJtD52lTsJfB7TicuxXk1XvmtYq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDE8Z3v1WZLs9C7Ue3ircA15%2B6s61Mvkbeba%2FJ0Rcs4%2BrQB15rT7h0mvQgRJfK1blQyIQop7XIoTgxH%2Ba6ugo%2BYsorZmYSwaFbW2opyMQnc1FcpkU8RXR4UkFHtXchLjriGg7qMtyPmSnV9fJ64fmyTaDfsG5kSFBAnl3QWAX2BOsL60koaMsuax1kQhnM8vfb57eo8cXGf%2FQecOfJDcQAq3Hf7Dnu2OSx93bqOtSFh%2BVIYhjImuaWzZTk7PbIUAxSOJVHqUdcOeK7SwbSDGgagcRhj%2FbpHW72K1NO2sAUgVjJ%2BWqX%2Bzcw7hD1g4kQFtnNsvKo1cYsRdc1KUyzU%2FwTHCxwVcMUwjCbesJzfgr94ovS%2FO7GS1e26pq%2B1Ay5YBrYNiPZBZLR11GlZsBCDlY2QsRJPWjDroH%2Fqz98oqGf94bIx22lcfRs92CmojhXjUasxOwoSnzxva7e80nqRSPKRtQ84905iiKWIYHpnkQjellGIBGNEVprHuVYOoS%2F2HJEzpwmVLW%2B4wy3Zz8y1fP22JGnWnUCHMqyY6VrYuUhpyGcfzJs9TVoPntQuEByTawdt6jcA%2BfT5gQQJc7t5zsvZlc9a5V5zZT0JZUUxF2I6qL9nLd5c%2FfnPb02%2B9F5k35JQ7gDsgPAHxwwOgFMKDRicoGOqUBOhWD6XROsEgAeKp31ytJXSA%2Fkli27IQcPyaTa6dXegzE1wuV2wer5MJZDNhfFdDd3XZMDBN5YB%2BuKqycXeITWrASMn1zFURcr2MmSJ2IujzUtdR6vk5hWds6Zg6bEA6Vti9LJRocPws3sW6xppiwqTX8h0Hi7HfBgyMmikvnqaU%2BsSDxQW0OZ3TYlAnDIFMXR4s5IwAuU3%2FoDG6e7ctARnbAfOb6&X-Amz-Signature=7664fa063cd6cfe67fc9abb4de51c90d4effaa201457f6ab018cd1f686d86618&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

