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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TMMAPJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo5B%2FmYtkhtQbO8tE07osoEBvf9kGS5l3dKpJuQdrhrQIhAN%2FiZNsWjAcE%2BIaKFgLuxJg4N7g%2Fuef%2FGINe59wWNwZLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjSQw2PyZRe5UBvFkq3AMk1TE6TK9lBKkNc5hvTUY7Oadf9VFp1m0sDigSAUFO7NI4kGUcj8jRcdhrrjYQrryqdlSlNOj8FpH55FNJIibGNuom2kxUz5mcyKQK%2FjRaOic2SiIbJPJEa6wo4VfH1tuKPn7Rov2YAk3F0EMzaLoQhNeM%2B%2FX7BHiTX7LObzeTZENTJNzyF4aMDwpE5Bw3fYCSR35Yj0LxS7wlLlXPZMD8Nbv7fj5BadilC0Kpj%2BV19WOPQ5l4yvma2Gavv36d%2BEO1WD%2FlGUY3FwTW4idoF2%2FlXC6tom16bfKXJ9qgyMi9CGsABUKzMn%2BsSjssN1riUARx%2FZyFky2Eq4WFI%2Fc0Nm5l6FPJS6%2Fi%2F6giEupJSvnm6qPoY3SJ30ffagCo%2F0XPsmPOAsRZ2LNWSdAwWyWQyRYuhJNeBYP1cx6yzMLpoZer%2FWv0QncXtNsYpGlXvOO5%2Fop6NFj7NT6rlXqcfAtz7PWtm6AHVjC%2BxkaP3FsbcAoTDY2%2Bu8al7lOdYYBWHQoPsxpKYkfqjWyDVhSD52hhTkXiA3NcuuF%2F6JV610If1laSGHjJe5xdhruzYX8%2F4bPgksOu4BQgQ0vH2np7SyY7FTHw7RB9Xz5BTiW0fzhCqZ9Xar9jXMMEbwsuCHwQ5TDo%2F4rKBjqkAZBE%2B%2FSWi1AeQEVr7SENTJokzXA9bpoutnWUVuGeq%2F721n4jsx0Tt08bMjac%2BSR0uSCuZCxKrnySWwz3A0oycmH1zLWciGQNHZY4FeT%2FSr3lXsiGPRA0RHvqgYyJvpBve3drNdHVUwWoHys5%2BYShr27qR2Xq%2Fui0thYPl6LrP%2FanyY%2F6sn95WpjzbW%2FEVj0OIZdCMPnAUSoV%2BFX4xJVzdRcYr6Lr&X-Amz-Signature=8ada176c497a5f4ff261158f8bf529af2739dcfcfca462435d91780b6b56b959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TMMAPJX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCo5B%2FmYtkhtQbO8tE07osoEBvf9kGS5l3dKpJuQdrhrQIhAN%2FiZNsWjAcE%2BIaKFgLuxJg4N7g%2Fuef%2FGINe59wWNwZLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjSQw2PyZRe5UBvFkq3AMk1TE6TK9lBKkNc5hvTUY7Oadf9VFp1m0sDigSAUFO7NI4kGUcj8jRcdhrrjYQrryqdlSlNOj8FpH55FNJIibGNuom2kxUz5mcyKQK%2FjRaOic2SiIbJPJEa6wo4VfH1tuKPn7Rov2YAk3F0EMzaLoQhNeM%2B%2FX7BHiTX7LObzeTZENTJNzyF4aMDwpE5Bw3fYCSR35Yj0LxS7wlLlXPZMD8Nbv7fj5BadilC0Kpj%2BV19WOPQ5l4yvma2Gavv36d%2BEO1WD%2FlGUY3FwTW4idoF2%2FlXC6tom16bfKXJ9qgyMi9CGsABUKzMn%2BsSjssN1riUARx%2FZyFky2Eq4WFI%2Fc0Nm5l6FPJS6%2Fi%2F6giEupJSvnm6qPoY3SJ30ffagCo%2F0XPsmPOAsRZ2LNWSdAwWyWQyRYuhJNeBYP1cx6yzMLpoZer%2FWv0QncXtNsYpGlXvOO5%2Fop6NFj7NT6rlXqcfAtz7PWtm6AHVjC%2BxkaP3FsbcAoTDY2%2Bu8al7lOdYYBWHQoPsxpKYkfqjWyDVhSD52hhTkXiA3NcuuF%2F6JV610If1laSGHjJe5xdhruzYX8%2F4bPgksOu4BQgQ0vH2np7SyY7FTHw7RB9Xz5BTiW0fzhCqZ9Xar9jXMMEbwsuCHwQ5TDo%2F4rKBjqkAZBE%2B%2FSWi1AeQEVr7SENTJokzXA9bpoutnWUVuGeq%2F721n4jsx0Tt08bMjac%2BSR0uSCuZCxKrnySWwz3A0oycmH1zLWciGQNHZY4FeT%2FSr3lXsiGPRA0RHvqgYyJvpBve3drNdHVUwWoHys5%2BYShr27qR2Xq%2Fui0thYPl6LrP%2FanyY%2F6sn95WpjzbW%2FEVj0OIZdCMPnAUSoV%2BFX4xJVzdRcYr6Lr&X-Amz-Signature=30feb1d6c9e3014b4a0bcba1f8856d6c4eb78e8156ddfc79fd58af0988bcade6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

