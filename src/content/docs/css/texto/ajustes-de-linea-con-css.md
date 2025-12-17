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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZSL3XE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrObRbfHZRlgHgU3GgWpzLfreHy1%2BWX3z7h0N11jB9JQIgSMxi4IlGMfXAd42b8zIFsWeJ%2FhyZyeSAxNPhAue%2FYjAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI%2FF3UJ5he09shTzHircA7WJm9JwvidT%2F0hwTcTt9pJTYnYKjpcOcc1ji%2BnEJo1hcbfeiojbuXzZa1gjilaOntNhCiEYNorSIy7Mk%2FsmYjggjlHESGT2ElKk8PAv9rXgNd9sIieUwwloPqbVdev%2FMQI%2Bw1K5qqxPquLvkXhhe0BmIFKroMn9C0MYpv0A0PDrvK4td%2BAeyjq47vYS6H2c%2F6l181j2yNDMsWqnhPv%2BVBMiGyJX94Rke4TmtjaKlNJYl9N%2FY%2BJUZpWqJ684bTeQVeJapaFzugo6EPkp6pDLUZcjiEsM0%2FKP%2FcrM3yRychm0SYKoXtISnTk9%2FiQ4sIacz17ZYrvkGmBgw%2By%2F9x%2BERI4plJKHFecFN4UIEWgOLcarqgyV4B%2BssC%2FVSDmhgCYIZaioDd6nWQWQ0zQkxYqXxy3DM54hLE0NO%2BTehJNmwIgRd59Sjooqmh3FvBRpskS%2Bhut75xPkhsr4zDOOnMylqqVTFSIKVJtySHKPk9VXooJoDTOPXbBhojT5lHeQto494ZeGSi1mucGtXGICZnUnTiuDU2UZdcLrZyTZsLzMBoEgOVGOpRQLyNk1t1UjqsA5lyFdfCQ7iP3Atj2yfnxNMQZI7t%2FcxZMUP4rYeGwLvfXgJ%2FVUw1%2BFKSoNPNnoMLnvicoGOqUBYPQmu3e2dyNEptVkKTSuPviFrU3bSbani%2BQKOaasIqsFtsmC9gV3iumfutKZBVL%2B6BsQ0wb1QUkvDa7YcKeobBxhCxz3hyOI03s7DdEGrj09xKrAWgyERp4QKpcUnr9fCvzbmkUVT4oMBpiOuX7Uu9OfwTsODE%2FAt%2BvsYBrVjb%2BXdlaKmvpVQPRbBvJznR%2Fi2xFHkIQ4Rwih1oKpHvvDjpUaMFVB&X-Amz-Signature=5fd6c3ab20fecb7e72c5f1dba82be8f8eabc3c33a7cd9c8a2e7addddab8beec7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZSL3XE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrObRbfHZRlgHgU3GgWpzLfreHy1%2BWX3z7h0N11jB9JQIgSMxi4IlGMfXAd42b8zIFsWeJ%2FhyZyeSAxNPhAue%2FYjAq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDI%2FF3UJ5he09shTzHircA7WJm9JwvidT%2F0hwTcTt9pJTYnYKjpcOcc1ji%2BnEJo1hcbfeiojbuXzZa1gjilaOntNhCiEYNorSIy7Mk%2FsmYjggjlHESGT2ElKk8PAv9rXgNd9sIieUwwloPqbVdev%2FMQI%2Bw1K5qqxPquLvkXhhe0BmIFKroMn9C0MYpv0A0PDrvK4td%2BAeyjq47vYS6H2c%2F6l181j2yNDMsWqnhPv%2BVBMiGyJX94Rke4TmtjaKlNJYl9N%2FY%2BJUZpWqJ684bTeQVeJapaFzugo6EPkp6pDLUZcjiEsM0%2FKP%2FcrM3yRychm0SYKoXtISnTk9%2FiQ4sIacz17ZYrvkGmBgw%2By%2F9x%2BERI4plJKHFecFN4UIEWgOLcarqgyV4B%2BssC%2FVSDmhgCYIZaioDd6nWQWQ0zQkxYqXxy3DM54hLE0NO%2BTehJNmwIgRd59Sjooqmh3FvBRpskS%2Bhut75xPkhsr4zDOOnMylqqVTFSIKVJtySHKPk9VXooJoDTOPXbBhojT5lHeQto494ZeGSi1mucGtXGICZnUnTiuDU2UZdcLrZyTZsLzMBoEgOVGOpRQLyNk1t1UjqsA5lyFdfCQ7iP3Atj2yfnxNMQZI7t%2FcxZMUP4rYeGwLvfXgJ%2FVUw1%2BFKSoNPNnoMLnvicoGOqUBYPQmu3e2dyNEptVkKTSuPviFrU3bSbani%2BQKOaasIqsFtsmC9gV3iumfutKZBVL%2B6BsQ0wb1QUkvDa7YcKeobBxhCxz3hyOI03s7DdEGrj09xKrAWgyERp4QKpcUnr9fCvzbmkUVT4oMBpiOuX7Uu9OfwTsODE%2FAt%2BvsYBrVjb%2BXdlaKmvpVQPRbBvJznR%2Fi2xFHkIQ4Rwih1oKpHvvDjpUaMFVB&X-Amz-Signature=870950757c323b94189f4cb8f4f3fb626c486bf92d1a9d89ea2e9eae0c4e14c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

