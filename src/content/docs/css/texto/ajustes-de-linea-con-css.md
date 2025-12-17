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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPGF4M2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzadxoo1vDK3jTJCvmo%2BGGjZZjhfWGw4Ep18v7KUGuqAiAPXQ8edfyIuf8AdxrPZq3B8iiXcLHCI0i2lgK1N%2FveGir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMBaByqqO3Vo7Di8z7KtwDCS0ufgD%2FlWF0f6%2FoG7ox7fyMHbUS1OBLJMuZwfmuDHgzedAZY6somP4rEo9TvpRiSXGh0ALt5NDWSBIflqjwqoeRPHmvLf4AMfGGy6XCqFogEsWPiTUDiQHzvEPbLhcR7Aykna7dXrh89V2Ctv7eP7O3mcG%2F8o26CxDPoOY16684zbf9f9Vvb871SWis36KapRYDtebGveM%2FGyljXpC7EVak0ii68owdwbkZFBbLVgq6CRxRCrt7UkFGnXmVQqwqnfsWcEW8CXyAeX9dTpDfFllJ8Qp%2FKkdT2ZYvda1lceycgZ60LQ44O8caXegj5VFSnRzXFOODo5cW3l%2BPOYyO04Z6aBx7pPQ8rBWKMhgOrtgtGjp2O0MJkaUq1%2B%2B1vk6s0oJ8PTocEq2Buos%2Bz0G5MrX3dOPlXNUAoT%2BGavisxZpmbtf8Dek9GbUpcVZ1HdorsafxZ5qTqinYnPwNbOlg5zepnu7Gv4gaf5aVI0unRi4SBFpo9K3jzBXgCVQpFzkId5FQiglNOlzHTk0Teodh%2Fu0wqT5U7QJy%2FzvuzJHZSpdLNeeLFa6otjb1lijsz6IjSdnL%2BQ%2BVnKg7L3V2mImHYBZXDVvRUsHb3qbldp0aaFC0xu%2BQVADrmMV%2B%2BRswgLOIygY6pgEZubntf8TToL5ixcQFSrXJXHaNp6pkY%2Fa2Mu4nYO6YAIOyz8RYEGgacA1F41qNS0suJceo89SyldhP1px0gMOzSMZlffXjpj3T8k3lSxdzx1G8L6pbdMX0np7Atf%2Fff9A56P6dIDnHzgAWmfXrFbCzq2JiuPzOXzHTizSHDoiaYyYvr4k0DsMCn61YWHaJ43Ie2sWmIhxv%2Fq3LxwWhdep%2Bs07u5l4Z&X-Amz-Signature=ad90e6bff429bf01701ef5290e8c0f760847c5ede5bfa821ffa90309b1ebdfc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKPGF4M2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBzadxoo1vDK3jTJCvmo%2BGGjZZjhfWGw4Ep18v7KUGuqAiAPXQ8edfyIuf8AdxrPZq3B8iiXcLHCI0i2lgK1N%2FveGir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMBaByqqO3Vo7Di8z7KtwDCS0ufgD%2FlWF0f6%2FoG7ox7fyMHbUS1OBLJMuZwfmuDHgzedAZY6somP4rEo9TvpRiSXGh0ALt5NDWSBIflqjwqoeRPHmvLf4AMfGGy6XCqFogEsWPiTUDiQHzvEPbLhcR7Aykna7dXrh89V2Ctv7eP7O3mcG%2F8o26CxDPoOY16684zbf9f9Vvb871SWis36KapRYDtebGveM%2FGyljXpC7EVak0ii68owdwbkZFBbLVgq6CRxRCrt7UkFGnXmVQqwqnfsWcEW8CXyAeX9dTpDfFllJ8Qp%2FKkdT2ZYvda1lceycgZ60LQ44O8caXegj5VFSnRzXFOODo5cW3l%2BPOYyO04Z6aBx7pPQ8rBWKMhgOrtgtGjp2O0MJkaUq1%2B%2B1vk6s0oJ8PTocEq2Buos%2Bz0G5MrX3dOPlXNUAoT%2BGavisxZpmbtf8Dek9GbUpcVZ1HdorsafxZ5qTqinYnPwNbOlg5zepnu7Gv4gaf5aVI0unRi4SBFpo9K3jzBXgCVQpFzkId5FQiglNOlzHTk0Teodh%2Fu0wqT5U7QJy%2FzvuzJHZSpdLNeeLFa6otjb1lijsz6IjSdnL%2BQ%2BVnKg7L3V2mImHYBZXDVvRUsHb3qbldp0aaFC0xu%2BQVADrmMV%2B%2BRswgLOIygY6pgEZubntf8TToL5ixcQFSrXJXHaNp6pkY%2Fa2Mu4nYO6YAIOyz8RYEGgacA1F41qNS0suJceo89SyldhP1px0gMOzSMZlffXjpj3T8k3lSxdzx1G8L6pbdMX0np7Atf%2Fff9A56P6dIDnHzgAWmfXrFbCzq2JiuPzOXzHTizSHDoiaYyYvr4k0DsMCn61YWHaJ43Ie2sWmIhxv%2Fq3LxwWhdep%2Bs07u5l4Z&X-Amz-Signature=82346c54c23b41c4b46223ef13c7d8d89a7f450714621d2e9b210e3461a5271b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

