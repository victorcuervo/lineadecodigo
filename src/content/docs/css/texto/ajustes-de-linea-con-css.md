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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML7UBDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8BQrjecdELIsnCQrgkpU7DTuk8WdRLfAJ%2FcgyiJ%2BpgIhAPR80NS75QL2uKFRW78NDlAy3w6WxzDvxYl2Lge9TJXxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuE8RDvqZQhjMEBZcq3AO6s3SMijSCwtDGNE9qHm9K1KHBkT9Q%2F6dRKm6J%2F7vp24sURBkOYFhDn%2BY0tkpgY314eolwH0Xw%2FBMX1nzMp1HT7R4Tnf90IqgSRN%2BvJ8tm9NLCqmeKpuQOK%2Bk36KzQKU1l3lTr4XFNZrYojmN0YaDml1u0Rek2Z0zWlysAJPo%2FCirqrGh7fUvIjbxyNGCv2C5%2B1sHgMHozTNkCkfg3epBeK9ZHeNHef%2FB65Y4lXeNOQZxbO2oovwIYj86swtV3j5VbfCPZE7aOGe3bsSxCa4ltQG0BVkOO6ru1kcf%2BqU6fKLfkdBBNHDtTwnN2o7kmY2K7BhAuK0E6%2BxV%2BENvPR5%2BlQLC9Tf7A1H1NojhQvrKFKtoWdYGjlJJGqMI%2F3w1N2h5icpr5XtFCSKktfv0XjVOLQtsuKSxDxE%2FTRH2G5OIv6bXU80Ml6zvKwLXEcWXZW4KsYhBwt8zgvzOovfodgRuV01nWZdaKqDmKUPnTv84%2BjVAMnIkwgTPEJfYa4THFPFbmeQpkuJtFNOT9xHCFGRTKwUJx14KsYseRuGOgFeNIKWiLQHjS24ZBtkOasihleBr9bV%2FqMRMcyjoX9VKQSu%2BPQh%2FEaikuI6cEgvN1zKIbnROyHmv1G70pGAnWkzDci4zKBjqkAXTfhnjTneUGrFDxnUeADtBp3gog3t7tCYk240x5QvxQU6szFI8lVb5lntNkhUoUycdtNp%2FqMsOZfYeXV7F0avj%2FiiJWaKi379LrZfqi5CDgVUyGe533AxexQE3wYuUwt%2Fr%2BFLv1wp8wPiw7y5YLSOWqJ39u8cSJqUV5h0QziTMClSnG12FEYNuHdgqnvmbXjZ%2F3NZAtUlU9tKmfVUqK0JMf6ZY%2F&X-Amz-Signature=82bc878aeb5eef910958fb9285611957ca65e11e962d118a4cc4e5b7ea979a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ML7UBDU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCu8BQrjecdELIsnCQrgkpU7DTuk8WdRLfAJ%2FcgyiJ%2BpgIhAPR80NS75QL2uKFRW78NDlAy3w6WxzDvxYl2Lge9TJXxKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuE8RDvqZQhjMEBZcq3AO6s3SMijSCwtDGNE9qHm9K1KHBkT9Q%2F6dRKm6J%2F7vp24sURBkOYFhDn%2BY0tkpgY314eolwH0Xw%2FBMX1nzMp1HT7R4Tnf90IqgSRN%2BvJ8tm9NLCqmeKpuQOK%2Bk36KzQKU1l3lTr4XFNZrYojmN0YaDml1u0Rek2Z0zWlysAJPo%2FCirqrGh7fUvIjbxyNGCv2C5%2B1sHgMHozTNkCkfg3epBeK9ZHeNHef%2FB65Y4lXeNOQZxbO2oovwIYj86swtV3j5VbfCPZE7aOGe3bsSxCa4ltQG0BVkOO6ru1kcf%2BqU6fKLfkdBBNHDtTwnN2o7kmY2K7BhAuK0E6%2BxV%2BENvPR5%2BlQLC9Tf7A1H1NojhQvrKFKtoWdYGjlJJGqMI%2F3w1N2h5icpr5XtFCSKktfv0XjVOLQtsuKSxDxE%2FTRH2G5OIv6bXU80Ml6zvKwLXEcWXZW4KsYhBwt8zgvzOovfodgRuV01nWZdaKqDmKUPnTv84%2BjVAMnIkwgTPEJfYa4THFPFbmeQpkuJtFNOT9xHCFGRTKwUJx14KsYseRuGOgFeNIKWiLQHjS24ZBtkOasihleBr9bV%2FqMRMcyjoX9VKQSu%2BPQh%2FEaikuI6cEgvN1zKIbnROyHmv1G70pGAnWkzDci4zKBjqkAXTfhnjTneUGrFDxnUeADtBp3gog3t7tCYk240x5QvxQU6szFI8lVb5lntNkhUoUycdtNp%2FqMsOZfYeXV7F0avj%2FiiJWaKi379LrZfqi5CDgVUyGe533AxexQE3wYuUwt%2Fr%2BFLv1wp8wPiw7y5YLSOWqJ39u8cSJqUV5h0QziTMClSnG12FEYNuHdgqnvmbXjZ%2F3NZAtUlU9tKmfVUqK0JMf6ZY%2F&X-Amz-Signature=3f7e20c76ce875bb5fb70fd7d1a7fd219871fe60293522e466016f22a0f9e08a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

