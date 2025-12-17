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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5RIGXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaPACryNd7I0yJgGgPu%2FQ6nLnBqb9EGZOue%2Bzw7BfY%2FQIhAJl93HWLSGNHRB94rTxAFEh3BbHYd9l9OyDI6GmVWlV%2FKv8DCHYQABoMNjM3NDIzMTgzODA1IgwGF232svfJfF%2FDt2Yq3APWWbSC3pPt%2Fc9ZUSTT%2FflmijSip%2Bsw2YqNq896z7OPFaijUPKVRnHqYRWHMOsro%2FkMw%2FkzAWbxbtzx2tMs5OmDXt4jE2Whd%2BsVHgv1uk6YN8lMdEKM3kQEOFOZRojK7W2I7AJ4EYl8ikplS6qLEO34ytwfC9hwvCHVxgd6JWGiR%2F7ydQAWaEgY3BRb3ns4JfVDfdxc4cVNisfCBsHLsxl3PowpUZ8jNIRR15PIEzFlb8xlU1R72%2FOg2IOiwUZvjQ0AboazfqNYHa0GGnY6AGr4PzOEPvk0AHKiLlZizo%2FXGm3J2r0CtBC1ucsK8mWgHeIG78LaMW2gOs2ojAZL31AW9ALuCYx3OxYMYNGzNnU2eyoUcAeBujqgcF%2BWZJzz4ivbDuhBBXCndGocsI%2FJ9IV%2ByHCjt%2FzwSZW4tPjvmvSDexG5RCGjI%2BHl2PPo5NHnX8ewb0vNlsJGfBjDVz4qCag0r78sgLgJc%2FMHIfKDB0XH6Jqe1H5z9S6ABZUSAqC3%2BD0nmW7k7T2Vm9HjVY4%2F8T32AQEi1wGBhvjsPWPqs5Nax1n%2FOoy4tfhvzrXMxzbRr9zt0Rhl8w6cl3h1Rpb%2Bo%2F2tUh7A3AnQwLZSV2dpK60i84V9GkZGuf%2F0DWBrHjCt6YjKBjqkAVu2wYie7JMKWnG%2BJk0k4j4v086y0bElEenTUBd5RiogEHzwXplJchz6xisx%2FXbUAkeBqsdZ%2B5Qp9mtZZrVaY52QaJ%2B3wM%2FOjpxOWCszt2gYOP8QTqYcE7PRfwy67k1RgNlLPS6dnzD6MlgRMqFIQCejXFLqul%2FvQdOuGZRQP%2FCXipjeDboiJyevdouoSkj9GB0s31gTSxrEteUqj3PqP1QdpV98&X-Amz-Signature=53cf8155dacd41380095d96e7cf0b2e16202a9974d5d31de58b6afe59e54865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY5RIGXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaPACryNd7I0yJgGgPu%2FQ6nLnBqb9EGZOue%2Bzw7BfY%2FQIhAJl93HWLSGNHRB94rTxAFEh3BbHYd9l9OyDI6GmVWlV%2FKv8DCHYQABoMNjM3NDIzMTgzODA1IgwGF232svfJfF%2FDt2Yq3APWWbSC3pPt%2Fc9ZUSTT%2FflmijSip%2Bsw2YqNq896z7OPFaijUPKVRnHqYRWHMOsro%2FkMw%2FkzAWbxbtzx2tMs5OmDXt4jE2Whd%2BsVHgv1uk6YN8lMdEKM3kQEOFOZRojK7W2I7AJ4EYl8ikplS6qLEO34ytwfC9hwvCHVxgd6JWGiR%2F7ydQAWaEgY3BRb3ns4JfVDfdxc4cVNisfCBsHLsxl3PowpUZ8jNIRR15PIEzFlb8xlU1R72%2FOg2IOiwUZvjQ0AboazfqNYHa0GGnY6AGr4PzOEPvk0AHKiLlZizo%2FXGm3J2r0CtBC1ucsK8mWgHeIG78LaMW2gOs2ojAZL31AW9ALuCYx3OxYMYNGzNnU2eyoUcAeBujqgcF%2BWZJzz4ivbDuhBBXCndGocsI%2FJ9IV%2ByHCjt%2FzwSZW4tPjvmvSDexG5RCGjI%2BHl2PPo5NHnX8ewb0vNlsJGfBjDVz4qCag0r78sgLgJc%2FMHIfKDB0XH6Jqe1H5z9S6ABZUSAqC3%2BD0nmW7k7T2Vm9HjVY4%2F8T32AQEi1wGBhvjsPWPqs5Nax1n%2FOoy4tfhvzrXMxzbRr9zt0Rhl8w6cl3h1Rpb%2Bo%2F2tUh7A3AnQwLZSV2dpK60i84V9GkZGuf%2F0DWBrHjCt6YjKBjqkAVu2wYie7JMKWnG%2BJk0k4j4v086y0bElEenTUBd5RiogEHzwXplJchz6xisx%2FXbUAkeBqsdZ%2B5Qp9mtZZrVaY52QaJ%2B3wM%2FOjpxOWCszt2gYOP8QTqYcE7PRfwy67k1RgNlLPS6dnzD6MlgRMqFIQCejXFLqul%2FvQdOuGZRQP%2FCXipjeDboiJyevdouoSkj9GB0s31gTSxrEteUqj3PqP1QdpV98&X-Amz-Signature=2babfe6e5df6e741f6bf5a263e5dabf3e95295ed7af19e52f0b6fe16cb303792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

