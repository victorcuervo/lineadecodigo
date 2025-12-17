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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6UU25I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqD%2BlVtp79%2BiJ8YSrnQRE1gnxi9pG6TYOVxSi1FyYqNAIgVGJV6WDWptbWeuSUa1rHWw4FerfMIjDiAaf9F30VTXYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOq%2FKK6runSgMzTisCrcA7ADlx0q7iTIiR%2FPNNQB9vpQsLQpt0KP2x9W7TJRc3lxGwZWenbkv8tEkeMH64xkE2KSH27JQYVvwdvAbSrkcrVRQPktwo4LmLL%2BUADEVJN9L%2Bn0xVuKtdegrfTSttSR7FV2tX%2B8H2RpKDKl03F04O7QshGIry706BgHC0fnqWgDJwbw9aXawUitrCTYUXAU2wQFBIL7FDaqnT6LC1yFH1pNl%2FOLpf1a%2FG7JowYbV9SjFgAxZkub3CCUuDLlzQnxWcpLRqvkGwYvdIN5NvmWoK2a9I%2FRa2yF3E1lYdoUkJ1daIKi2L%2FZv3sPyaeRgYuC08Orj8O7WHb3XulkM%2Bb6XLVESE30%2FiDdt02ZhjhvEuh%2BxdWx9kP%2BFOrsLoIhpy848i9rO5eMXzTbIBFjHr6IsDsdSi42zIQoXfIqDFsQgcvQZpjmLxfM3Fk6vPcYD%2BzV7iXLfNgpQ%2Bkn3lnjY35bFnYCinSxVaSwjpvv1KSQWfRyPPEhXpqMm57fRnCCIoGO7w1Ve%2Bl36Ls2cdwEmKv%2FuWps4boVsbBBG5Y6GVLvfhQtEt5tfJ1vXCLzGrW%2BEr5jedx2w%2Fog0qE%2Bcx6QWs986%2BmSvYVysBbDePu6GxCqVmywHMxM%2B4cnRe7yD3itMM6qisoGOqUBtMpkQlljhJTQbbxrDFdLbKLs%2F9hesFLc8PxXVbjGcefJRWzTosVl002Rc067jN8ruv3677Vsrvtc90S0IRSO%2Ffl4IY2aVLq4SiKZL1icWQi192ytGWEhhBrZvd4RTUeSCUj73lQHq6qyl8lJamJBuknk2ROiWkHZs1k636IgbBGDfhpjFWRoHTH%2Bc5Gv3IRKVPaeDAWrIaJFE9qWxIGzM897LZ%2FH&X-Amz-Signature=9ede8fe71e37594b666b3aedf8ddeb4bd12d96ce5a5c955ef763422880532db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB6UU25I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqD%2BlVtp79%2BiJ8YSrnQRE1gnxi9pG6TYOVxSi1FyYqNAIgVGJV6WDWptbWeuSUa1rHWw4FerfMIjDiAaf9F30VTXYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOq%2FKK6runSgMzTisCrcA7ADlx0q7iTIiR%2FPNNQB9vpQsLQpt0KP2x9W7TJRc3lxGwZWenbkv8tEkeMH64xkE2KSH27JQYVvwdvAbSrkcrVRQPktwo4LmLL%2BUADEVJN9L%2Bn0xVuKtdegrfTSttSR7FV2tX%2B8H2RpKDKl03F04O7QshGIry706BgHC0fnqWgDJwbw9aXawUitrCTYUXAU2wQFBIL7FDaqnT6LC1yFH1pNl%2FOLpf1a%2FG7JowYbV9SjFgAxZkub3CCUuDLlzQnxWcpLRqvkGwYvdIN5NvmWoK2a9I%2FRa2yF3E1lYdoUkJ1daIKi2L%2FZv3sPyaeRgYuC08Orj8O7WHb3XulkM%2Bb6XLVESE30%2FiDdt02ZhjhvEuh%2BxdWx9kP%2BFOrsLoIhpy848i9rO5eMXzTbIBFjHr6IsDsdSi42zIQoXfIqDFsQgcvQZpjmLxfM3Fk6vPcYD%2BzV7iXLfNgpQ%2Bkn3lnjY35bFnYCinSxVaSwjpvv1KSQWfRyPPEhXpqMm57fRnCCIoGO7w1Ve%2Bl36Ls2cdwEmKv%2FuWps4boVsbBBG5Y6GVLvfhQtEt5tfJ1vXCLzGrW%2BEr5jedx2w%2Fog0qE%2Bcx6QWs986%2BmSvYVysBbDePu6GxCqVmywHMxM%2B4cnRe7yD3itMM6qisoGOqUBtMpkQlljhJTQbbxrDFdLbKLs%2F9hesFLc8PxXVbjGcefJRWzTosVl002Rc067jN8ruv3677Vsrvtc90S0IRSO%2Ffl4IY2aVLq4SiKZL1icWQi192ytGWEhhBrZvd4RTUeSCUj73lQHq6qyl8lJamJBuknk2ROiWkHZs1k636IgbBGDfhpjFWRoHTH%2Bc5Gv3IRKVPaeDAWrIaJFE9qWxIGzM897LZ%2FH&X-Amz-Signature=b25eb8c00ccfe403002e359863346fb5f8f4b3e2d8de360b534241b57226cf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

