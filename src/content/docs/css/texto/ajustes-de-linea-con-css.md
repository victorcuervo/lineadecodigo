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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPMOG2PV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoj5CHVc99aVYpGqeHAGHvGtHZXfUIa%2FHqrvQEyNzliwIga%2FKOTP8yRhiGYFgLGDmdbDuW5CEUpTqjNWnkRrlR5Psq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE1Q7EwZGCOCPA7l%2FCrcAxeRQwCacZVb5u9jOomE033G%2Fg7y7GgP%2FHgYcxW7qJdiN3q4e4v771OVKHpIbFZCtEpTG7xdarjgddtOKI8RkWu8mmvfFsrHf%2F71WCcQUBJXHaRct311Ytj6fvM0z2tyIxlVjtYgfA5imWpRu010vDDYAJHe8oaj%2Ba1tUBAfwPXg0lkPqWqKYK3fLg2RyMz1plIeR%2BGBEGS8qeEEh1MeuMRViqh5XXaB9L%2BdJ5w%2FPth1wQJbpv3v%2FshhfZBzbm2zea6KBYJvwxjjok0z3v3HJWb4N90Qr3BpASZZUh%2FqPUVr%2BYQdjG0dSErUi7NuKLfBVIRjXiAKLzc%2BWzg34gmRT4CHanPZ7Ndy2ty1PYuwtTBmHcaJZYZ0BVYpwcIC57Nv5Z%2BLepgyycpZR0XiddujStqZmnWX0Nv48DBPtTxoTYuzbGRZQf6ERaYA8xbIiIXJwjDtz5oIBVe653oEA3K2Hir0JUPTrKjxAJr80hhwoDrK%2BdqvBF3mD192TBBxA2DnQfksNX7MKl2b0DfdTjEhODwPV6Cl12n970NxItue5OyNl2%2Fl1a7FmXJcNmagc8KZFTTkCRF0NV6DnukF66N%2BzfetT8bQXyjR7TVtNbI79IOncWexdl6kVY2RkDN%2FMMnhisoGOqUBBSmt2LSDlmB7NtrWK%2B5xL7jUwpGLqOlZQ8XrHdUIIMNtZDNfz755%2B4ezNYVRTLvA6qEf64K9pfeiN52XrxBv1k6SPcYpGAI8pHA8w7HTIcBE1Puk8ql%2B3p0slxdMEpxlcUAHNMKJH5snRUV8tueKc34t2oMci9QJsMUUdm4%2F2yGi3MtnGZHFeLDz553ktUJninyf5Rpsl0fWVLMLwXHyeQzsEkYk&X-Amz-Signature=aeacd8b73a65db3be57b69f33e48ece599da65da1f0db441c34f0aededa88b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPMOG2PV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoj5CHVc99aVYpGqeHAGHvGtHZXfUIa%2FHqrvQEyNzliwIga%2FKOTP8yRhiGYFgLGDmdbDuW5CEUpTqjNWnkRrlR5Psq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDE1Q7EwZGCOCPA7l%2FCrcAxeRQwCacZVb5u9jOomE033G%2Fg7y7GgP%2FHgYcxW7qJdiN3q4e4v771OVKHpIbFZCtEpTG7xdarjgddtOKI8RkWu8mmvfFsrHf%2F71WCcQUBJXHaRct311Ytj6fvM0z2tyIxlVjtYgfA5imWpRu010vDDYAJHe8oaj%2Ba1tUBAfwPXg0lkPqWqKYK3fLg2RyMz1plIeR%2BGBEGS8qeEEh1MeuMRViqh5XXaB9L%2BdJ5w%2FPth1wQJbpv3v%2FshhfZBzbm2zea6KBYJvwxjjok0z3v3HJWb4N90Qr3BpASZZUh%2FqPUVr%2BYQdjG0dSErUi7NuKLfBVIRjXiAKLzc%2BWzg34gmRT4CHanPZ7Ndy2ty1PYuwtTBmHcaJZYZ0BVYpwcIC57Nv5Z%2BLepgyycpZR0XiddujStqZmnWX0Nv48DBPtTxoTYuzbGRZQf6ERaYA8xbIiIXJwjDtz5oIBVe653oEA3K2Hir0JUPTrKjxAJr80hhwoDrK%2BdqvBF3mD192TBBxA2DnQfksNX7MKl2b0DfdTjEhODwPV6Cl12n970NxItue5OyNl2%2Fl1a7FmXJcNmagc8KZFTTkCRF0NV6DnukF66N%2BzfetT8bQXyjR7TVtNbI79IOncWexdl6kVY2RkDN%2FMMnhisoGOqUBBSmt2LSDlmB7NtrWK%2B5xL7jUwpGLqOlZQ8XrHdUIIMNtZDNfz755%2B4ezNYVRTLvA6qEf64K9pfeiN52XrxBv1k6SPcYpGAI8pHA8w7HTIcBE1Puk8ql%2B3p0slxdMEpxlcUAHNMKJH5snRUV8tueKc34t2oMci9QJsMUUdm4%2F2yGi3MtnGZHFeLDz553ktUJninyf5Rpsl0fWVLMLwXHyeQzsEkYk&X-Amz-Signature=779ea7526d028c66532bf9b710dc8092f635f81277bb2041849c1cfa4d9af552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

