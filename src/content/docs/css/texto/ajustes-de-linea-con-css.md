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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMJEJXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1S4hkiBk61Bl%2BdVS9%2FhvNA5oQ705h5qX8Z3Gta2I9ZAiEA3jqRzg77ut9C5Vp50RofDO4%2FMImDVYZ4B9eZgiV8l30q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMbVbVNkqZ9zRrWBzCrcA26J4%2FN78sblgM%2Fg3FE5xq2RWkOQLeYrqYkXzWlBnXCnYpCXHCJZ5EIJm3qOnX14vUoNBH%2BkFeXicMhIuPWUcHcoDg0Rxxmc6Pl%2BZzvj4Zroa9Bwc1%2BixcjN2MIk1SDLWdLwUlge8pHjJYEm5IqylLk7kgk3KXutIAHvuSZlQsQQReH4GYd%2BZ8dr3cd1m3hZ%2FzKpUp1I3Gy91iPBNubjonXZ0du4ttfdcvCoHsSV%2FVJOdTJhyV8TF6UHsKHJtm%2F7oRGslwHgoSYzdMdA%2FufoNccxgKLr5DmIAbXyVCNqy2jX7B2dOT0x%2FugUuBjQCOpVqMyi3b0vsUqZ431g%2B%2FpFCNTTNQg1NkWXjj90tE%2B4THvlsFtcoHKNFLA4IZVDflxlnEE3h4HhbSZ%2Fqlh%2BINzZmciAZN4c4o3WbMmLOGUUJZzYQXp0orF33KqEsnLAUx4RGCvug7cZc2bwSpL3BJ41lq47%2FApwSEbXKErYPnb4b6WP%2BQKK5BSMVfaEeUREWN6795uVstazqZlXqV4HlG4JMBVDAcIi57%2BUYfAJNcOSZjyC8cPBTvpP%2FPjHxZgrrgP7x3rIGlhvLAwe9EO%2FOE%2Fnyuj7w5G6X%2BcR6RFH6vZvIuYpUxPqJxaUw%2BrJTbqYMPfpiMoGOqUBHaZWBA1VcMNCBsCZqmKxnO5PUv8RTEXW7QelhXO0Kgrp3PWfw4jcXa9YBaDicKrkb1YcMaDaTp0arszNYBoMtSiK%2BUSDgL%2Bmgqgf%2BQXPalBUjzCylIHRKVCQPDYhv%2FS%2F3vxokaejJVi6KM67gatWq8Si0msH0u2wb8G0qt%2FWWzRGSHhnZnOEYzfvY%2BbEEH36sEMr4wC3lY%2Bqbk2zVAXaaa7C428U&X-Amz-Signature=4c322a0dc4c65e203f21d9f543ca7e7437fabdb6e5049b611a8b0e9d1ad252bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMJEJXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1S4hkiBk61Bl%2BdVS9%2FhvNA5oQ705h5qX8Z3Gta2I9ZAiEA3jqRzg77ut9C5Vp50RofDO4%2FMImDVYZ4B9eZgiV8l30q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMbVbVNkqZ9zRrWBzCrcA26J4%2FN78sblgM%2Fg3FE5xq2RWkOQLeYrqYkXzWlBnXCnYpCXHCJZ5EIJm3qOnX14vUoNBH%2BkFeXicMhIuPWUcHcoDg0Rxxmc6Pl%2BZzvj4Zroa9Bwc1%2BixcjN2MIk1SDLWdLwUlge8pHjJYEm5IqylLk7kgk3KXutIAHvuSZlQsQQReH4GYd%2BZ8dr3cd1m3hZ%2FzKpUp1I3Gy91iPBNubjonXZ0du4ttfdcvCoHsSV%2FVJOdTJhyV8TF6UHsKHJtm%2F7oRGslwHgoSYzdMdA%2FufoNccxgKLr5DmIAbXyVCNqy2jX7B2dOT0x%2FugUuBjQCOpVqMyi3b0vsUqZ431g%2B%2FpFCNTTNQg1NkWXjj90tE%2B4THvlsFtcoHKNFLA4IZVDflxlnEE3h4HhbSZ%2Fqlh%2BINzZmciAZN4c4o3WbMmLOGUUJZzYQXp0orF33KqEsnLAUx4RGCvug7cZc2bwSpL3BJ41lq47%2FApwSEbXKErYPnb4b6WP%2BQKK5BSMVfaEeUREWN6795uVstazqZlXqV4HlG4JMBVDAcIi57%2BUYfAJNcOSZjyC8cPBTvpP%2FPjHxZgrrgP7x3rIGlhvLAwe9EO%2FOE%2Fnyuj7w5G6X%2BcR6RFH6vZvIuYpUxPqJxaUw%2BrJTbqYMPfpiMoGOqUBHaZWBA1VcMNCBsCZqmKxnO5PUv8RTEXW7QelhXO0Kgrp3PWfw4jcXa9YBaDicKrkb1YcMaDaTp0arszNYBoMtSiK%2BUSDgL%2Bmgqgf%2BQXPalBUjzCylIHRKVCQPDYhv%2FS%2F3vxokaejJVi6KM67gatWq8Si0msH0u2wb8G0qt%2FWWzRGSHhnZnOEYzfvY%2BbEEH36sEMr4wC3lY%2Bqbk2zVAXaaa7C428U&X-Amz-Signature=dfbddd301061127b6d96438624f649c3e8b00bfc2ae6d43058b3d36d4a558602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

