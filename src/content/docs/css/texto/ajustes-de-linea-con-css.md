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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632FL5WD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8xzm9SDFAYZrDQRP65b9O6nEIagekwAiQ%2ByK0w%2FMpBgIhAPqqBwPAeA7UTM0NCi%2Bi7I6L8ILMA8tMoG73Yqr01EUiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhayYad4fbC6cb4iMq3AN5wmnnXk2DcmSbSWW8ZVl5lc7Fy%2BmD55RpWU5M8s2hVU%2FwOoVYxBoIq3dZI5MFYTAcepBvTNTUjzA6EnacHuxJwMtweZmb%2BglO0uVtuonB8m4aP1PAASse4LiN2Gng6nIXK1vXQk798syl7vf4TqFo9yY%2FrKUk3DuRm94U35xA8NkuPxbfvo54DaNZudQM1BoDKZB3J3RcS2Q0v4zEK%2FhwNn0FO3Cp%2FHosJ3aJmdhLNZ9FPmn2s4m3B3qscX32tuNkimTzv1%2FtF0d3oG32mbqLPXeKSr4bgDkKJOarOBEXNWSGXv4Jhj8BZIud%2Bl%2FvsbAkCbrTEBfhKg2hnVRnGhsMKrH6ryXZFU7aF81MGRGUIcgwM5J986qztk3Qb1uVK%2F5LJkZRXkqZSOwNtwqEgtuRnjmjXwvXActQJsPQdjzUX3VkSuPqIHmjFbIJRLy5%2FaveDxBmSRtmNAusHuPb0zKLiDh0ShwhroC%2FYDqiiPlRcCEOHDe6Y7Fgo%2FYrdFQDSY%2BShtT474h8DISNd5UkE%2BQeuCEhUclGm4CqHQj0YuBbUGF8zPfLZDmy0Kox1CMEks5fQQPCM0%2Bzvu%2BXxoUynZsn7U1D2c%2BU4%2Fro4oLcP%2BHNpCpq8xKXFJ1srLTdhDCjgYvKBjqkAcCLNzVDApf7ykLmG4Voqs9gUhQExyliUaADnvB9qw0oKrAe0JC1%2FmrF8i%2FGk63%2FRU%2FbjaAXc%2FNijT1JvRVK4sIAiss4dYj9GTNVJA47VHb22xN9ivvu7CrNg9j2ud%2FKwsMY0Uu9CVvc%2BAl5RXqQ97Dlm80Y5pDNBG%2BAZkeZ%2FYq0erPU8gbQiuhtJI7uWmiKbA4Uq5Wyp6tA50%2B2VYShhZ5Hiv9q&X-Amz-Signature=e10c98eea163881b941d215e187133725ef3a3b48547b35e16cc030ceae16483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466632FL5WD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8xzm9SDFAYZrDQRP65b9O6nEIagekwAiQ%2ByK0w%2FMpBgIhAPqqBwPAeA7UTM0NCi%2Bi7I6L8ILMA8tMoG73Yqr01EUiKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwhayYad4fbC6cb4iMq3AN5wmnnXk2DcmSbSWW8ZVl5lc7Fy%2BmD55RpWU5M8s2hVU%2FwOoVYxBoIq3dZI5MFYTAcepBvTNTUjzA6EnacHuxJwMtweZmb%2BglO0uVtuonB8m4aP1PAASse4LiN2Gng6nIXK1vXQk798syl7vf4TqFo9yY%2FrKUk3DuRm94U35xA8NkuPxbfvo54DaNZudQM1BoDKZB3J3RcS2Q0v4zEK%2FhwNn0FO3Cp%2FHosJ3aJmdhLNZ9FPmn2s4m3B3qscX32tuNkimTzv1%2FtF0d3oG32mbqLPXeKSr4bgDkKJOarOBEXNWSGXv4Jhj8BZIud%2Bl%2FvsbAkCbrTEBfhKg2hnVRnGhsMKrH6ryXZFU7aF81MGRGUIcgwM5J986qztk3Qb1uVK%2F5LJkZRXkqZSOwNtwqEgtuRnjmjXwvXActQJsPQdjzUX3VkSuPqIHmjFbIJRLy5%2FaveDxBmSRtmNAusHuPb0zKLiDh0ShwhroC%2FYDqiiPlRcCEOHDe6Y7Fgo%2FYrdFQDSY%2BShtT474h8DISNd5UkE%2BQeuCEhUclGm4CqHQj0YuBbUGF8zPfLZDmy0Kox1CMEks5fQQPCM0%2Bzvu%2BXxoUynZsn7U1D2c%2BU4%2Fro4oLcP%2BHNpCpq8xKXFJ1srLTdhDCjgYvKBjqkAcCLNzVDApf7ykLmG4Voqs9gUhQExyliUaADnvB9qw0oKrAe0JC1%2FmrF8i%2FGk63%2FRU%2FbjaAXc%2FNijT1JvRVK4sIAiss4dYj9GTNVJA47VHb22xN9ivvu7CrNg9j2ud%2FKwsMY0Uu9CVvc%2BAl5RXqQ97Dlm80Y5pDNBG%2BAZkeZ%2FYq0erPU8gbQiuhtJI7uWmiKbA4Uq5Wyp6tA50%2B2VYShhZ5Hiv9q&X-Amz-Signature=a092535413bd45bc67cd5d8e37b541c9a6f9de9c6ade6604524f1e941cd3a077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

