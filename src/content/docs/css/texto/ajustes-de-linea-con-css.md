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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXDMQMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxqYeUhwjTMvUTMexSzLVZ0S7T%2Fxm221fiPuQyNuL9cAiAzlYnL9DVj08XJCKii%2B2YLz5lM%2BO1o93iANpLUYJpRvCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVC%2BFnRxvrg9%2FHJdKKtwDEmnXIXvGapjPt5c1hEMX%2BOjThuQ7%2FbeMJHim%2FWWUCXttsUCwt%2FNguRyFr8GuMxOgN6r4vuMjB0RJLwb1tlnp2ZoHXOvES4vYb8faXlgyKxtyPPGxn0u81v5U%2FKOz3himuFFepOBy7c6mrCM3d8Or%2FKSSO4HvoC34ygqJ8cHxALJDMexVC7nEXC33DzIzMWHj4dzuGJzTi4SXe3Lxp8o2iEw1cr3206e7aWlYszGeEZuEBVbZIInRw7LZCseXRtFn6ij%2BSWKK2PDtGdg833wK7fWtfNycvo58rA62%2BAp1tbgtczLpU8MKf%2BycZ%2BVNq6rKD0MkS2iCUwJTGKxjgbdXl0xJmY0r7wkH84qO40H%2FgQZSI6eLIit2KtlfvdvSpu9hXbu3VkjBZvl66Vp9pHQKoLa2VYYgnXwjahT%2F3Ju7zSQzItMPPZGGmeP6ge%2F4trpnvnKwKFP4QJteGLtXM5Tv0yXz3B4HIhijPweuRCGfPzwpvqyFWgVuJ7TqsCh3dR9EOyrUsxBZkVRX%2BG3OLgD6LwIao%2FFDH%2FdIvDYZKzVvjdfDebMtVXElyCqN3AHvdIDW8hHDDc6FfQaYcKnh516aHU4nhE3l6lOmLkYiohXLkSjRcvb%2BMdKgRuEZWT8w%2Bv%2BKygY6pgGtAPoo45qEFzs7xmH7LCRO8fYtGYe1leTdUirEt5d1PVUbVhgalLg2NrBt4dgRGrN9o7Dh7sC0OocoHogzx33lD4KLsWFJMjhpBjv4qAFSbOsYraTy%2FsIYweWWYE4mByOrJf1D4reBY57awY5qfoaxrRp0v7dKKE0VshWwdkyruwk2LAX9f%2FaenZJdNJ8BV4ptaIZlU6jxmBY10tKqFQkRDO2qYBQN&X-Amz-Signature=de0b726c7349faaef5ccaf1b8a74d1397e24024d9f79de733c2f56c1cda87412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXDMQMZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxqYeUhwjTMvUTMexSzLVZ0S7T%2Fxm221fiPuQyNuL9cAiAzlYnL9DVj08XJCKii%2B2YLz5lM%2BO1o93iANpLUYJpRvCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVC%2BFnRxvrg9%2FHJdKKtwDEmnXIXvGapjPt5c1hEMX%2BOjThuQ7%2FbeMJHim%2FWWUCXttsUCwt%2FNguRyFr8GuMxOgN6r4vuMjB0RJLwb1tlnp2ZoHXOvES4vYb8faXlgyKxtyPPGxn0u81v5U%2FKOz3himuFFepOBy7c6mrCM3d8Or%2FKSSO4HvoC34ygqJ8cHxALJDMexVC7nEXC33DzIzMWHj4dzuGJzTi4SXe3Lxp8o2iEw1cr3206e7aWlYszGeEZuEBVbZIInRw7LZCseXRtFn6ij%2BSWKK2PDtGdg833wK7fWtfNycvo58rA62%2BAp1tbgtczLpU8MKf%2BycZ%2BVNq6rKD0MkS2iCUwJTGKxjgbdXl0xJmY0r7wkH84qO40H%2FgQZSI6eLIit2KtlfvdvSpu9hXbu3VkjBZvl66Vp9pHQKoLa2VYYgnXwjahT%2F3Ju7zSQzItMPPZGGmeP6ge%2F4trpnvnKwKFP4QJteGLtXM5Tv0yXz3B4HIhijPweuRCGfPzwpvqyFWgVuJ7TqsCh3dR9EOyrUsxBZkVRX%2BG3OLgD6LwIao%2FFDH%2FdIvDYZKzVvjdfDebMtVXElyCqN3AHvdIDW8hHDDc6FfQaYcKnh516aHU4nhE3l6lOmLkYiohXLkSjRcvb%2BMdKgRuEZWT8w%2Bv%2BKygY6pgGtAPoo45qEFzs7xmH7LCRO8fYtGYe1leTdUirEt5d1PVUbVhgalLg2NrBt4dgRGrN9o7Dh7sC0OocoHogzx33lD4KLsWFJMjhpBjv4qAFSbOsYraTy%2FsIYweWWYE4mByOrJf1D4reBY57awY5qfoaxrRp0v7dKKE0VshWwdkyruwk2LAX9f%2FaenZJdNJ8BV4ptaIZlU6jxmBY10tKqFQkRDO2qYBQN&X-Amz-Signature=2e0520981f551f54582f5d1855c512421fed49ca62e4641b41493cadde21918a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

