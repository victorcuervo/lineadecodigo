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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVYKDAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLnF5JrqRZj4WuJfJ3RefImrv9i%2FnnMWW9upRJmdFlAIgWuZF7P%2FUFC2JQCmRQyFA5SsibJABot5%2BVnPZEpO0Vewq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDC1mg0BNSzE4YjB1SrcA1gl0jScjZuJmFx6jeDCIMT7h8ToB2cZs56DqbC9NWOGH7W0VDVftLODmc0B8se%2BbNRAMuUSOpIugA2ivqiKC%2BwjFkGAZPuDoEuOORqs%2BWoPZ1Xm0DDv0L9NnViEhP6bqpYKZCHsN9ahuZS29mST5RdSkmGQntuIdbPzZgUplYWQFTMz0rI%2F2JXcuHg7XVf1RsbxPpQlLX2y2M8YgvMQjsZMmVzQbjZgZEIzn1yTWMG413G2J3M11rqw8rJ9bTO%2BQ64G6x5gyDm%2BFFWY9DskMAqarmjX8oPM5UlNrJ1VejjIXGllQpGUmjh5oT77gVzWa1HumcHt6MSZ40lHpDnTejzdN2fAfaJnQml2jHC4jEYEWk44VQUn74uB3xfRwavizfQJ%2FstAaDabpAteKdQfOGPx%2FeHcr86352uWFIdkOSzrk9Re7d3z%2FN7byTxxrrNxO5vIOA8LAlAYFLJ94qfZ9N0VVnEtBz4tHZkbrgphbYFKEgU%2Bn5eDpu%2BqgqVVFqox6kR0uywX%2FKXLBr1rzo5IbnCPQ1ltD8y5tHk0T5CpK8oc6MxI8V38jsUHOb4igHApe1%2BScWzX%2FmlZYHlzJjeqa7CbxrwxxUTGfZMrKtbvKZuSeueAzyp5nMRwY44mMOneh8oGOqUBGJMgDkdMgoVhlQG7lGpLhiNVObKSvaFS7R%2BHSaZxpq9lfFp%2Fq5YdpgoKSjV95GK7%2FaGqgZOOnb0Aynbwp1GQMzdIPoV0xg7l8WjqAYATQ8FhmoVVxixZoF9CoitUTTv2m1aeLXCU1dzi8vq5%2FZ0Mp8LeG6vqy5pBhPxhlRKkcDfuX0hjN1djvs%2BMJgOaIH9NfrrMO4gvUAe8hYwqezUeoPcddhRB&X-Amz-Signature=bf977df51ce18a71261cc223e5fac05692b50e7f6f26ca4a8130261ba36c0590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AVYKDAE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoLnF5JrqRZj4WuJfJ3RefImrv9i%2FnnMWW9upRJmdFlAIgWuZF7P%2FUFC2JQCmRQyFA5SsibJABot5%2BVnPZEpO0Vewq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDC1mg0BNSzE4YjB1SrcA1gl0jScjZuJmFx6jeDCIMT7h8ToB2cZs56DqbC9NWOGH7W0VDVftLODmc0B8se%2BbNRAMuUSOpIugA2ivqiKC%2BwjFkGAZPuDoEuOORqs%2BWoPZ1Xm0DDv0L9NnViEhP6bqpYKZCHsN9ahuZS29mST5RdSkmGQntuIdbPzZgUplYWQFTMz0rI%2F2JXcuHg7XVf1RsbxPpQlLX2y2M8YgvMQjsZMmVzQbjZgZEIzn1yTWMG413G2J3M11rqw8rJ9bTO%2BQ64G6x5gyDm%2BFFWY9DskMAqarmjX8oPM5UlNrJ1VejjIXGllQpGUmjh5oT77gVzWa1HumcHt6MSZ40lHpDnTejzdN2fAfaJnQml2jHC4jEYEWk44VQUn74uB3xfRwavizfQJ%2FstAaDabpAteKdQfOGPx%2FeHcr86352uWFIdkOSzrk9Re7d3z%2FN7byTxxrrNxO5vIOA8LAlAYFLJ94qfZ9N0VVnEtBz4tHZkbrgphbYFKEgU%2Bn5eDpu%2BqgqVVFqox6kR0uywX%2FKXLBr1rzo5IbnCPQ1ltD8y5tHk0T5CpK8oc6MxI8V38jsUHOb4igHApe1%2BScWzX%2FmlZYHlzJjeqa7CbxrwxxUTGfZMrKtbvKZuSeueAzyp5nMRwY44mMOneh8oGOqUBGJMgDkdMgoVhlQG7lGpLhiNVObKSvaFS7R%2BHSaZxpq9lfFp%2Fq5YdpgoKSjV95GK7%2FaGqgZOOnb0Aynbwp1GQMzdIPoV0xg7l8WjqAYATQ8FhmoVVxixZoF9CoitUTTv2m1aeLXCU1dzi8vq5%2FZ0Mp8LeG6vqy5pBhPxhlRKkcDfuX0hjN1djvs%2BMJgOaIH9NfrrMO4gvUAe8hYwqezUeoPcddhRB&X-Amz-Signature=31452d8fb4a819bbfe14b1e6dee984bd78b9d37adc535e97cb48d60e8e2b7df3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

