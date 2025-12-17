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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGV7KFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6NTaVeNgOKZg245LdfjoBfvMYNUf6ELePZfmUK9iZwIhANAIzFOS1ofYTfE1TwSd1ufIoryJyxyh4OaQucQ7ePgAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwungYKVXPj5v15%2BVsq3APNzoEXyp%2F%2FfBKCfcpmDe3yLNsMZJbQZQPU7r6y3qotaUNncA6R7tdty%2FCkM7Si9vQ9u4Gs48BEzIpbJhwt%2FY21C1XSTcCaAfwL9bbHiH7VqA18ytyTEdgwqJxWN2k8RsfutHjq5MfonpIaqP1n3M4rSDdB10uO1LknYY9HiIZdH3Nogkzhhs%2BTn2roxzYvtx59LnNyXmWqDnB36vZPuCp%2BgkNdo00DkRwu%2F06A52rmtsSeJ0%2FH1rItv%2Fxul97nKWMRl3PUUtkUD1RSMTOhnbfw70ThLcuNqvnvqmlA3x%2BTQWkYLWzuaTR5M6%2Bs7G6LSr7otujmUwH2mFJPdcRljbednARvX1wFtVUFTzT1BEdZOcgF4gkUEOv%2BH7T4KZTaTNJ1NpkuZIVuIW%2FiwGErXmU62qA3mpY%2FayfDIVGBPgsnCstAqe27%2FH8FqPvuqZRI5uv64YMC8TwSx9DIDhI1PQWauH0YUmgu6zJ5epMXoaioutbKD7MlDbIMEzYOo50xJfrtPF%2BxUPy9lLxN14k7kqD20qDtjGCsAB3yBVAo6BDesF6gaEdDlUGcKHBtnc5ZmCgHWTKCQtfja3qfPwZJI9sUZy%2BkoSw7UruHaP%2FoAS%2BfkZ8uFZSCsjQKD%2FhWKzDMrYzKBjqkAdZmF3BMiZ7ixbpFicWrkpt8OrE46%2BZcrQ69sGFkwi7O8NtojipZNhUZ7HczNkF%2Fejmvafswb0G1hYzpPWCa8z%2B8fkPfTDoBMsZeg%2BTbinYNkFiopo9TjdTI63f2n5ga4Lw8b6cgQ6xbslGL7bq%2FVGbhqJE33NwF5pzGFA7rskruBfhxNUBVI%2BkFtbswxs0K66YSlchYQZrFASrHmXXOU5utxrto&X-Amz-Signature=d9cee819dee9a1932d27d04313e85c1a67142f4b2b48186e488137af24440778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BGV7KFZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ6NTaVeNgOKZg245LdfjoBfvMYNUf6ELePZfmUK9iZwIhANAIzFOS1ofYTfE1TwSd1ufIoryJyxyh4OaQucQ7ePgAKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwungYKVXPj5v15%2BVsq3APNzoEXyp%2F%2FfBKCfcpmDe3yLNsMZJbQZQPU7r6y3qotaUNncA6R7tdty%2FCkM7Si9vQ9u4Gs48BEzIpbJhwt%2FY21C1XSTcCaAfwL9bbHiH7VqA18ytyTEdgwqJxWN2k8RsfutHjq5MfonpIaqP1n3M4rSDdB10uO1LknYY9HiIZdH3Nogkzhhs%2BTn2roxzYvtx59LnNyXmWqDnB36vZPuCp%2BgkNdo00DkRwu%2F06A52rmtsSeJ0%2FH1rItv%2Fxul97nKWMRl3PUUtkUD1RSMTOhnbfw70ThLcuNqvnvqmlA3x%2BTQWkYLWzuaTR5M6%2Bs7G6LSr7otujmUwH2mFJPdcRljbednARvX1wFtVUFTzT1BEdZOcgF4gkUEOv%2BH7T4KZTaTNJ1NpkuZIVuIW%2FiwGErXmU62qA3mpY%2FayfDIVGBPgsnCstAqe27%2FH8FqPvuqZRI5uv64YMC8TwSx9DIDhI1PQWauH0YUmgu6zJ5epMXoaioutbKD7MlDbIMEzYOo50xJfrtPF%2BxUPy9lLxN14k7kqD20qDtjGCsAB3yBVAo6BDesF6gaEdDlUGcKHBtnc5ZmCgHWTKCQtfja3qfPwZJI9sUZy%2BkoSw7UruHaP%2FoAS%2BfkZ8uFZSCsjQKD%2FhWKzDMrYzKBjqkAdZmF3BMiZ7ixbpFicWrkpt8OrE46%2BZcrQ69sGFkwi7O8NtojipZNhUZ7HczNkF%2Fejmvafswb0G1hYzpPWCa8z%2B8fkPfTDoBMsZeg%2BTbinYNkFiopo9TjdTI63f2n5ga4Lw8b6cgQ6xbslGL7bq%2FVGbhqJE33NwF5pzGFA7rskruBfhxNUBVI%2BkFtbswxs0K66YSlchYQZrFASrHmXXOU5utxrto&X-Amz-Signature=e64fe54623eae1f30001e6819c596207a34695eabaed75d381e654589d9ff7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

