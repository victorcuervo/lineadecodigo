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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZGPHR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIIyUqEHIBi1N6fzkavhezE5sFladUY5qecDDMxv4CQAIhAKgiQXQNtDcUHPc0QJ%2FHx39JxN0lK%2Fdy4A3OB2ozrU6NKv8DCHIQABoMNjM3NDIzMTgzODA1Igy13L5zH6%2B5RD0yH3sq3AMXBXOSmNIhrrKxT3fjLPBiSBffwxwzKmeinVEgkLzg4qR7ukd1iZVCuUOOYyzUMDgrMydzgc0xPlioamK5oIef353%2FlZGeWsLghYf2BxKjcjd6Rn1VHZlXn3JsaUMo7D2KiCUMUGwkAReW9yEPmiTJxcUJQFP%2B%2B%2BwywEAAuSO2K9VCQNfHO09TPDcV%2FAtl0PC70LDFTYLDFH%2BtE5cWyDuxGziy%2BoFr1uoh7Gb4mbtA6A72lLFG60QGickMVnkZmGoOf1z7wDQvP%2FSbdA9Xa3TCVy6XBXTMP64CR73MoZAliysyPOP6nKHP%2FDtbdq1Fln6NeQdYU3pM61PseA23%2F3ubS7Ta6tRkJdifK1zY73ACSC3MX%2Bce%2FmxXojfkOsm7dzq6YGsW%2BmngxTyt9tA5Sdl7iGuIDzRAufFxPlnvk0OiwrIIaKPPSteYQEvDNA%2BgtlIJF46VtXDYI0StqJib7XZ7T1Imys0Ze6Y98qnUYUXS7nPjjVC0dwAwGfertvX8gJ8rw5AsT5ENuxBNhXi0OjuuziRVqIxjVV9P%2BWwZUlHH5ZIia%2BZhUI0sw6%2Bl5vO4DdD8F2yLyKBX%2FkHVnFx5QhIJHVO7cxo5tVZRfSPWdsq14KZG7N4GEkKG3MdeQzDR%2B4fKBjqkAfo4JhT%2F6%2FsSwD%2B7stHMjP91kXiBoKvRatBC2G031w3Y%2BO%2FX%2F54wggEWx1KTFSYIYwZaht7B7xQ8SBeuUyIif%2BDyYTvm7%2Bftb7GyKAPulZNPrlz8RGipWz6AF%2BhimmnFfnNPAfvBwcnJ3iY4vcZSo%2FfUhKLAugsxgiZwlgDrD5u52yrCzTzObWkpR7L%2Fhlhg009V%2FRPbgd44OIpSrmlemGd4KdtQ&X-Amz-Signature=d2a2eaf3eba035166fac713c0080b4233509ecb3d9484c286092be3452c879ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIZGPHR6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIIyUqEHIBi1N6fzkavhezE5sFladUY5qecDDMxv4CQAIhAKgiQXQNtDcUHPc0QJ%2FHx39JxN0lK%2Fdy4A3OB2ozrU6NKv8DCHIQABoMNjM3NDIzMTgzODA1Igy13L5zH6%2B5RD0yH3sq3AMXBXOSmNIhrrKxT3fjLPBiSBffwxwzKmeinVEgkLzg4qR7ukd1iZVCuUOOYyzUMDgrMydzgc0xPlioamK5oIef353%2FlZGeWsLghYf2BxKjcjd6Rn1VHZlXn3JsaUMo7D2KiCUMUGwkAReW9yEPmiTJxcUJQFP%2B%2B%2BwywEAAuSO2K9VCQNfHO09TPDcV%2FAtl0PC70LDFTYLDFH%2BtE5cWyDuxGziy%2BoFr1uoh7Gb4mbtA6A72lLFG60QGickMVnkZmGoOf1z7wDQvP%2FSbdA9Xa3TCVy6XBXTMP64CR73MoZAliysyPOP6nKHP%2FDtbdq1Fln6NeQdYU3pM61PseA23%2F3ubS7Ta6tRkJdifK1zY73ACSC3MX%2Bce%2FmxXojfkOsm7dzq6YGsW%2BmngxTyt9tA5Sdl7iGuIDzRAufFxPlnvk0OiwrIIaKPPSteYQEvDNA%2BgtlIJF46VtXDYI0StqJib7XZ7T1Imys0Ze6Y98qnUYUXS7nPjjVC0dwAwGfertvX8gJ8rw5AsT5ENuxBNhXi0OjuuziRVqIxjVV9P%2BWwZUlHH5ZIia%2BZhUI0sw6%2Bl5vO4DdD8F2yLyKBX%2FkHVnFx5QhIJHVO7cxo5tVZRfSPWdsq14KZG7N4GEkKG3MdeQzDR%2B4fKBjqkAfo4JhT%2F6%2FsSwD%2B7stHMjP91kXiBoKvRatBC2G031w3Y%2BO%2FX%2F54wggEWx1KTFSYIYwZaht7B7xQ8SBeuUyIif%2BDyYTvm7%2Bftb7GyKAPulZNPrlz8RGipWz6AF%2BhimmnFfnNPAfvBwcnJ3iY4vcZSo%2FfUhKLAugsxgiZwlgDrD5u52yrCzTzObWkpR7L%2Fhlhg009V%2FRPbgd44OIpSrmlemGd4KdtQ&X-Amz-Signature=33da2027ab804c435b1807ae14f80f62f255d4bf1fc35030d610b1b9b2566e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

