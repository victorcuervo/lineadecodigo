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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NTZWFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpKqUXZPNiMBKNqWoakApdFafAy42mVAXPiFFXp6pMAIgWoOZt0YQ8Qf3o0WMnwQwkaNM9EXiPAr0vQU09KrYBBEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYQ9LKRNIReo%2BcrNyrcA9XuCCMDVMixkiTH%2BOLXxcikjDuVhDfofKOkTNC0KZ%2BIdblPqEJ4vuRWP6BL6Wq4V826Q0bWkcnWThACQzsMafjFkHFG4SyyohTXyXh%2FPVvJhX26SBm3%2B15vv%2FZsXFfEpH3kg2BQM%2BLHrKi4gdj1TF%2F9ORqgMahgieTBljKt2R0H%2B2iUKqJYhXOJ%2FLSg4wRCgIzgKnRsKm6iI0vdfH%2F%2FCy7IpL0%2B45yqlHn386oruCiRtSvKRje2oD08dtNCtqTBNyv7VpjrlfxmN%2By%2FQpkIW87aI8T9jRrablq%2FKScLj4YvoS87BhQA%2FJeW4BSk5wOYos21LDOyZCy4lTuuUL5QVZo4zTorUIU2ka6HjZGUhcgZLe5WTN%2Bg1DEnkyXqelRa4MsvIRrbo5f7pX8zMXFA1IugJ75R8xVEOpxR7M9fVMa1FaSfAvekOoJwvDXdvnrwq1RlqFWzemn6YwI9c3iAWTpsS1bnuLw%2Flj76gAnyHJxNg6sUc0LSpZAJUFvOLquv38w%2FBWmPMp7%2FbPf2QHZ%2BQKXBvG4rbK0pk8xeJ0zOjhohPZXrSCHDUxs%2BdA3QqkkHFWT9PFU7qiua%2B%2BMFgtEq38Gftev%2BPuJ5VaFPf2NWZWF%2FYBXVtFS8ramBDll5MKWBi8oGOqUBxapN1ysWk10mmpFQOrc7kNJ0HE%2FIPKhj%2BHd7cgcMhpQuN7kXjyhuXtsVW7eV2v2UJ3PxOQ%2B%2BWDnTz%2FF7%2FZwNhhEgknjPI3YRIqa345y%2F27qwAUv%2BcPDy9oKwiDpZClbxw%2BIpgpDgQA%2F0br4GfKmMe5CgrAix%2F2%2B3nmhYG6w1MRav2d%2FsAfG1XoYFOiWgqMbSOlPjD9W6VoycQGZ7lcCDGt%2B3JOrS&X-Amz-Signature=3b2ad56c70f67a238360e4dd17b86a41bad362009d4b4685596bae10fa7b91a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7NTZWFT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxpKqUXZPNiMBKNqWoakApdFafAy42mVAXPiFFXp6pMAIgWoOZt0YQ8Qf3o0WMnwQwkaNM9EXiPAr0vQU09KrYBBEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYQ9LKRNIReo%2BcrNyrcA9XuCCMDVMixkiTH%2BOLXxcikjDuVhDfofKOkTNC0KZ%2BIdblPqEJ4vuRWP6BL6Wq4V826Q0bWkcnWThACQzsMafjFkHFG4SyyohTXyXh%2FPVvJhX26SBm3%2B15vv%2FZsXFfEpH3kg2BQM%2BLHrKi4gdj1TF%2F9ORqgMahgieTBljKt2R0H%2B2iUKqJYhXOJ%2FLSg4wRCgIzgKnRsKm6iI0vdfH%2F%2FCy7IpL0%2B45yqlHn386oruCiRtSvKRje2oD08dtNCtqTBNyv7VpjrlfxmN%2By%2FQpkIW87aI8T9jRrablq%2FKScLj4YvoS87BhQA%2FJeW4BSk5wOYos21LDOyZCy4lTuuUL5QVZo4zTorUIU2ka6HjZGUhcgZLe5WTN%2Bg1DEnkyXqelRa4MsvIRrbo5f7pX8zMXFA1IugJ75R8xVEOpxR7M9fVMa1FaSfAvekOoJwvDXdvnrwq1RlqFWzemn6YwI9c3iAWTpsS1bnuLw%2Flj76gAnyHJxNg6sUc0LSpZAJUFvOLquv38w%2FBWmPMp7%2FbPf2QHZ%2BQKXBvG4rbK0pk8xeJ0zOjhohPZXrSCHDUxs%2BdA3QqkkHFWT9PFU7qiua%2B%2BMFgtEq38Gftev%2BPuJ5VaFPf2NWZWF%2FYBXVtFS8ramBDll5MKWBi8oGOqUBxapN1ysWk10mmpFQOrc7kNJ0HE%2FIPKhj%2BHd7cgcMhpQuN7kXjyhuXtsVW7eV2v2UJ3PxOQ%2B%2BWDnTz%2FF7%2FZwNhhEgknjPI3YRIqa345y%2F27qwAUv%2BcPDy9oKwiDpZClbxw%2BIpgpDgQA%2F0br4GfKmMe5CgrAix%2F2%2B3nmhYG6w1MRav2d%2FsAfG1XoYFOiWgqMbSOlPjD9W6VoycQGZ7lcCDGt%2B3JOrS&X-Amz-Signature=d9f487be1d14274924034b7240d9982ff72f34d80d9040fa3d795f0d98361018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

