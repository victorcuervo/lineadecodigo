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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGDMPRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWO6UlRvAELA7vNu6k5idPUYJAsvwIFfNWGY8FLQTcCgIgQV3bY50WpMq7l3JvJzXNfOCeo3rlYvj1Ka4JnHVJXbEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGL%2Fc97dNIWi%2BFxqPCrcA72uLac2SmTq1%2F%2FZl4SW530XA0XkpGnDiBXuHe3wOe0fuqQEEl4HLsYp1SZkeY81h5PHs1tJqQLat38jkNUNJ0YZlDJGz0IAREx%2B7TVWLy2%2BN3dO2GoaM2Nqqj7Lyoa6tNmZKKN2j59QhAmc5HKMir5B86dBQj7IuttM9Pl2yGTiB3EYDdTHzL%2BlS9iP1gX1KO5ymcuQzPCjqrTqEbuq1i09NEUqUTP5MdBhh96wda37BXhERoDpmVu7B2Ey32GW7EAEhOtg4j%2F5j5%2F9rXkJbCY8TNnvF60Bn9GmjzjxLbg%2FQzcaCYHTJ%2FzybKr%2BlyhISyuyEkEBZ7tUPde54hQtGzIMkTEJnrFCMdSCHCEGZ3KZAllDBkHGLMWQ9IpKu3%2FE2fXkQ9mogKs5Jswd8are9c4w46%2BvHzW3%2Blk8xvulWQgStyvag67jrWwY7qg1TEUTW6O6cBpi9rOileXh%2FsFPQtj6Hv4fSCd7hGtKnvgqoNVClnFeAEf5CHV6O1sYpu0%2BlLnhdd8DPyDmtTAICSX8OSaER1dr2%2Bl8cvasnE3EynsUcnC3xy0B7WXFepbDPhSYK5kk51BV%2BfsyisHQeCt3abAaBikJQCDrsf7jWWPJ8qOpRY3DJB9FWbyr6Qk9MNTvicoGOqUBABAyG9VQkZX%2BX19pS2aR%2B8HKC%2FrAvHVw6ScXfbbunLxy4RAGd9q6q88i86JCjuQ2TQ%2Bjr3APDJ9Vz7UnpmYLZS%2Br9h1KozuetOqF7l6qy8GV93nu1xoHf8JyF8plyPUG9FYzE2yLSJmD4x1tpB%2Bc%2FVN5N57y4MZnNQnzkSjW8pNK%2FvDp7pl53QnDS5jFp%2FnVW4tPggCdSr7iUFaFfIJrPrp6JHW9&X-Amz-Signature=0e4e4b0510ff8eb43f33d9f8e26d4aeb0d62bf159f3f467b2b7c758b97a00a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIGDMPRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWO6UlRvAELA7vNu6k5idPUYJAsvwIFfNWGY8FLQTcCgIgQV3bY50WpMq7l3JvJzXNfOCeo3rlYvj1Ka4JnHVJXbEq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGL%2Fc97dNIWi%2BFxqPCrcA72uLac2SmTq1%2F%2FZl4SW530XA0XkpGnDiBXuHe3wOe0fuqQEEl4HLsYp1SZkeY81h5PHs1tJqQLat38jkNUNJ0YZlDJGz0IAREx%2B7TVWLy2%2BN3dO2GoaM2Nqqj7Lyoa6tNmZKKN2j59QhAmc5HKMir5B86dBQj7IuttM9Pl2yGTiB3EYDdTHzL%2BlS9iP1gX1KO5ymcuQzPCjqrTqEbuq1i09NEUqUTP5MdBhh96wda37BXhERoDpmVu7B2Ey32GW7EAEhOtg4j%2F5j5%2F9rXkJbCY8TNnvF60Bn9GmjzjxLbg%2FQzcaCYHTJ%2FzybKr%2BlyhISyuyEkEBZ7tUPde54hQtGzIMkTEJnrFCMdSCHCEGZ3KZAllDBkHGLMWQ9IpKu3%2FE2fXkQ9mogKs5Jswd8are9c4w46%2BvHzW3%2Blk8xvulWQgStyvag67jrWwY7qg1TEUTW6O6cBpi9rOileXh%2FsFPQtj6Hv4fSCd7hGtKnvgqoNVClnFeAEf5CHV6O1sYpu0%2BlLnhdd8DPyDmtTAICSX8OSaER1dr2%2Bl8cvasnE3EynsUcnC3xy0B7WXFepbDPhSYK5kk51BV%2BfsyisHQeCt3abAaBikJQCDrsf7jWWPJ8qOpRY3DJB9FWbyr6Qk9MNTvicoGOqUBABAyG9VQkZX%2BX19pS2aR%2B8HKC%2FrAvHVw6ScXfbbunLxy4RAGd9q6q88i86JCjuQ2TQ%2Bjr3APDJ9Vz7UnpmYLZS%2Br9h1KozuetOqF7l6qy8GV93nu1xoHf8JyF8plyPUG9FYzE2yLSJmD4x1tpB%2Bc%2FVN5N57y4MZnNQnzkSjW8pNK%2FvDp7pl53QnDS5jFp%2FnVW4tPggCdSr7iUFaFfIJrPrp6JHW9&X-Amz-Signature=cbdf6f6fcde757e9f849a4eeb4f5df745aec80bc1d5accbf36d9eb962d5ac0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

