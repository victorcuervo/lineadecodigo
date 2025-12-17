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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SH5O3Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhZLyiflrvLHKd9zJxVkFSmlN%2B6cBeNB2iiHi1Vez4mAiBcx2L7UAqCumZPb6E868nqVjhQihAjd5xGsVAWVGAyAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJ%2Fx4D9BEgD40YnRuKtwD9LrGk99FivWdT66zzAzCHv%2BqPXTz71akJKaeIxzfyoisNiPIVNmIN7Ai4t%2BZCN%2FbM1mYWaNRCOQBEEWd4I0inZBL336O0K%2FWM%2B0pcLh2TAy8Gkt0yYmjPhxXgRAak2kQ47qboanaTjRwofyOp%2BOipBJt91Ej6uo4EtKaaOFT074i8COTqJ1LFVtxk1AEqufZQHA%2Fhx2X0s58PM%2FSwwpNErqTuUqJ4nH%2BZvBJ3Sllan0Hjxojhhq7BLaEULfS6X3xxJTbaWzHFckI10kSkepsmwxX%2FyNma%2BCeF1uWrY17SkYtehTYSg9O%2BXomCu%2FxlbVGthU%2BaRte%2F3V%2BNMy8Kr3EZm1gdPSrLSkX7r6orZt363MmSvhlyM1sK3wv%2FeFW5nvwmINkXinCZZicuCaH7SzehPY%2BBFsn%2BNXl9LwhSZURjO7g7yUy47WzU5oCfE074YWMs4S1OK%2BQsslJIeEUJHlhK0MORdSdDw4ohs3VgwApeGa%2BgqelEfgtcD3EhiqCJ35i%2FyJ%2BLb2d3%2Bqlf9XYWL2f0tLW4UtaZ2EdCndivv%2FkO94CL1A6%2FRTNL4o1YWsse4w27j26gWP4TZyDOel3p6zjluHMXXs6HWIVVQzhHVkkVK4ztfYHvD%2BrwanLbwUw8aqKygY6pgGu5SZG4ZCAUVjlGobqoQ44CVnPHiAbRmilJrHgH5%2BIGxbsvUCS4XakHK6NpBnUHCfUjqLDZLQNui3ONgg52k%2FzZyBdh8oHrvkgNCopXW3K1XLADjQAHJtQWAuq5OTASj3lO8u52qZlTOrGpnqWkVhvkwkywEUnULtyllZX0bZy983sJa8lPCni1joffgNhoD0J67CQXd%2Fs1rYsYsKTMfREU0KY1kdw&X-Amz-Signature=4b23db1b3145267d23d9e802072926df7f8df8759df3c9f8a235c1d13e4ee340&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SH5O3Y%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhZLyiflrvLHKd9zJxVkFSmlN%2B6cBeNB2iiHi1Vez4mAiBcx2L7UAqCumZPb6E868nqVjhQihAjd5xGsVAWVGAyAir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJ%2Fx4D9BEgD40YnRuKtwD9LrGk99FivWdT66zzAzCHv%2BqPXTz71akJKaeIxzfyoisNiPIVNmIN7Ai4t%2BZCN%2FbM1mYWaNRCOQBEEWd4I0inZBL336O0K%2FWM%2B0pcLh2TAy8Gkt0yYmjPhxXgRAak2kQ47qboanaTjRwofyOp%2BOipBJt91Ej6uo4EtKaaOFT074i8COTqJ1LFVtxk1AEqufZQHA%2Fhx2X0s58PM%2FSwwpNErqTuUqJ4nH%2BZvBJ3Sllan0Hjxojhhq7BLaEULfS6X3xxJTbaWzHFckI10kSkepsmwxX%2FyNma%2BCeF1uWrY17SkYtehTYSg9O%2BXomCu%2FxlbVGthU%2BaRte%2F3V%2BNMy8Kr3EZm1gdPSrLSkX7r6orZt363MmSvhlyM1sK3wv%2FeFW5nvwmINkXinCZZicuCaH7SzehPY%2BBFsn%2BNXl9LwhSZURjO7g7yUy47WzU5oCfE074YWMs4S1OK%2BQsslJIeEUJHlhK0MORdSdDw4ohs3VgwApeGa%2BgqelEfgtcD3EhiqCJ35i%2FyJ%2BLb2d3%2Bqlf9XYWL2f0tLW4UtaZ2EdCndivv%2FkO94CL1A6%2FRTNL4o1YWsse4w27j26gWP4TZyDOel3p6zjluHMXXs6HWIVVQzhHVkkVK4ztfYHvD%2BrwanLbwUw8aqKygY6pgGu5SZG4ZCAUVjlGobqoQ44CVnPHiAbRmilJrHgH5%2BIGxbsvUCS4XakHK6NpBnUHCfUjqLDZLQNui3ONgg52k%2FzZyBdh8oHrvkgNCopXW3K1XLADjQAHJtQWAuq5OTASj3lO8u52qZlTOrGpnqWkVhvkwkywEUnULtyllZX0bZy983sJa8lPCni1joffgNhoD0J67CQXd%2Fs1rYsYsKTMfREU0KY1kdw&X-Amz-Signature=bc811bd5dafa2e9d638353a4aab8df06682f3469b5003f506077f360cd789eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

