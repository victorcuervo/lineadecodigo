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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3ZK4T7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRmlaORS4VqH620ElFw2PYH0CS%2FsEEHjUADJOXcx%2BfQQIhAMA1DYuP7LZnzURST0H8zyMhHM11B6hTjqEeqHMqdMYBKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfdkGq28HWcouSz3cq3AM2jM3WSwzYb%2BIsIaecgW2tybL05ud0DL66qrC0D01TnT%2BStEzSJRsjdF1VfrvNQcaKq7llppZE0e5Sd8cRIl79y2DJQFdnXq3pZubFdhoA7o0ACV%2FJYlpucJhu8OW%2Fu7cGCuuoRo28aK5AGjaboA4%2B9zBKDKcSqYTdp%2FiTqeYhjZZVXa2c0lNTsluDkm%2B0lzRaF3fpma7Uzq5ilVzU3Vb3GMouCwsW2yNKjaMn3RBSdVWzUvb8qFgpTiu5kTOrTPGYIWJdxDoKva%2BBmiq%2Bik%2FhtTS4n7s10rr%2FyS6%2BQ1Goaqx60T2G6VR1EA3GLAF3m1IRUksTPwE51SmWhINWpSDMyiVlomA2TrdxM6QUPmAHoy0UPBXDNVqEFzmn07mpiDgGZALqq7VyxWUN6pLHS%2FvT8erNdqpZCURHlklpG0op0j8kRMVRCnFjUyaEca%2FiHJmVRBWd704iphGZlrAegYobBS3DgsrzMWkHQJ5rTce3QkDlARJ5yq5kCPgiP2pr2aXkDOh2de%2Bwl1VtFjCcpZguLWEM%2BmjAorhrES2d0uiuVX3vIc9AzaTBEjhNY2b9wQp0SwGRZUQQCxnyiDYdB58dAIu5qKJw75WvnnTs6PtUkHSWGc7MC0SO%2BiDw%2BzC4rozKBjqkAcWfEtfCziD1mB3nsE66wCQcZBgQ8EGwzGtT%2Fnfs93duNg6Yg%2FBOxIXvu8WijXr7EQ1IMaR4v5uIz6YNXnjkXal8NFJ2MVm2YNgEMUZ6oPJGt1tCzEDNFxxtQ8Q0tH%2FwQRGHmmkdDFYRf4s2u6z5eezf5lBcxiPb1BA0lwJgeNdFKwnATRyXu2Jgr%2FbjT7s5K7dHXUdu39Xa0j8QKzaOoXEWWNHS&X-Amz-Signature=8e7ac4cc38ccccbdd029b94f29e8e988ee3d072da162fa8c646a8bee123125d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW3ZK4T7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRmlaORS4VqH620ElFw2PYH0CS%2FsEEHjUADJOXcx%2BfQQIhAMA1DYuP7LZnzURST0H8zyMhHM11B6hTjqEeqHMqdMYBKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxfdkGq28HWcouSz3cq3AM2jM3WSwzYb%2BIsIaecgW2tybL05ud0DL66qrC0D01TnT%2BStEzSJRsjdF1VfrvNQcaKq7llppZE0e5Sd8cRIl79y2DJQFdnXq3pZubFdhoA7o0ACV%2FJYlpucJhu8OW%2Fu7cGCuuoRo28aK5AGjaboA4%2B9zBKDKcSqYTdp%2FiTqeYhjZZVXa2c0lNTsluDkm%2B0lzRaF3fpma7Uzq5ilVzU3Vb3GMouCwsW2yNKjaMn3RBSdVWzUvb8qFgpTiu5kTOrTPGYIWJdxDoKva%2BBmiq%2Bik%2FhtTS4n7s10rr%2FyS6%2BQ1Goaqx60T2G6VR1EA3GLAF3m1IRUksTPwE51SmWhINWpSDMyiVlomA2TrdxM6QUPmAHoy0UPBXDNVqEFzmn07mpiDgGZALqq7VyxWUN6pLHS%2FvT8erNdqpZCURHlklpG0op0j8kRMVRCnFjUyaEca%2FiHJmVRBWd704iphGZlrAegYobBS3DgsrzMWkHQJ5rTce3QkDlARJ5yq5kCPgiP2pr2aXkDOh2de%2Bwl1VtFjCcpZguLWEM%2BmjAorhrES2d0uiuVX3vIc9AzaTBEjhNY2b9wQp0SwGRZUQQCxnyiDYdB58dAIu5qKJw75WvnnTs6PtUkHSWGc7MC0SO%2BiDw%2BzC4rozKBjqkAcWfEtfCziD1mB3nsE66wCQcZBgQ8EGwzGtT%2Fnfs93duNg6Yg%2FBOxIXvu8WijXr7EQ1IMaR4v5uIz6YNXnjkXal8NFJ2MVm2YNgEMUZ6oPJGt1tCzEDNFxxtQ8Q0tH%2FwQRGHmmkdDFYRf4s2u6z5eezf5lBcxiPb1BA0lwJgeNdFKwnATRyXu2Jgr%2FbjT7s5K7dHXUdu39Xa0j8QKzaOoXEWWNHS&X-Amz-Signature=c182c68b4f59fa81d0e7db250bc192304466236c382e200871b7f8f74467e457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

