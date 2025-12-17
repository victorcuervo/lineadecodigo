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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUFR24I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDstxSNqzUghcH0PYyvuNs8Rw0pGroQY2JO8JJUTOs13AIhAPtK%2BskdXg0z%2BxKH%2Bom0rQ3SPegs%2BT3UJX4QvHbms0t8Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzRpNArz9hzed2PN9wq3ANxznnePb4WoyNjMJ48kGlRDXF3%2BxUrA0RieK8V%2Bf%2FbsbD%2Fl%2BCQQ5V6Nw3BnCcsm%2FRqVWm5P8OGNzI81kD91bgiXgKjUeu8o61iLPaQkN6AUafpmrGX%2BYRqvNKDyqTMyWwz6rVdXBpnV0C%2FUOCl5YJWCt3BBUY6P614c8sIyD7u9pZJR%2FNayx3Z76YbL0cyn8PmdTt1w8BLOFWlwiLV2VfFCGHM3Ci82bU1MsFqzRUSMUjpr4PmhDBFIJPoLy9Zdsn5ulYjk5VxTJvA8DIbmK6i%2BgCiFBBLNrFovuwYVNr1wYXaRvlVwzlsSUDmMZgofLdSpqhO8w%2FI%2FwkFVPEq0eeL7OdUNmvtAsRPFJN4WxBJ6hGjTJBRg7EWFhVJG2H6LF4FKeLFQPoYGM8ub7ctHdsZXhhtG9b2XWg3rNXQfezScsgjv5mpOkuAlnNf1XI8sGmx96vyzZF1X8uVKWBIPW3HlnhiAGHeO70G5UydFGvd2TnIUgZVnt%2BgtvvmrB0l8jGiVVL7I0dx%2FgSRFCdwuXnobQcOg6VtE2J6VWa9kZpGE40N3b9Lp%2Fl9ZDxgb12yiGwHLDoBGB3EKcYn4Gg5GmS7rJw%2BzbQct5RnLbnFgnQuQFvrG2PGGF1uX4n%2F4zCn0onKBjqkAb9bYFYI8tHPp63Um6UtdmTkahn6GeG6opYq3ZRUwFrbOLc8EuHZBcFzbl1q2YHyOwiO5bIk5CXsY8EqgtGhFt7VF7Jiz8GaTUM2bBVkh6ekpm%2Bvyr0W1AnOZdkNqU%2BgOVkCHnMT0o2IA%2BQtf7dA3Ecav9xLJ6HRaGh%2F9zxWDAiFvk4780dLSWzb10POPF5vi3nhFoo0z0%2FVfetvhYars4fpdlYe&X-Amz-Signature=8b460d4eb417ed056655d28e661097b4792f35108a986e4cf7cb0c06b4250b63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUUFR24I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDstxSNqzUghcH0PYyvuNs8Rw0pGroQY2JO8JJUTOs13AIhAPtK%2BskdXg0z%2BxKH%2Bom0rQ3SPegs%2BT3UJX4QvHbms0t8Kv8DCHkQABoMNjM3NDIzMTgzODA1IgzRpNArz9hzed2PN9wq3ANxznnePb4WoyNjMJ48kGlRDXF3%2BxUrA0RieK8V%2Bf%2FbsbD%2Fl%2BCQQ5V6Nw3BnCcsm%2FRqVWm5P8OGNzI81kD91bgiXgKjUeu8o61iLPaQkN6AUafpmrGX%2BYRqvNKDyqTMyWwz6rVdXBpnV0C%2FUOCl5YJWCt3BBUY6P614c8sIyD7u9pZJR%2FNayx3Z76YbL0cyn8PmdTt1w8BLOFWlwiLV2VfFCGHM3Ci82bU1MsFqzRUSMUjpr4PmhDBFIJPoLy9Zdsn5ulYjk5VxTJvA8DIbmK6i%2BgCiFBBLNrFovuwYVNr1wYXaRvlVwzlsSUDmMZgofLdSpqhO8w%2FI%2FwkFVPEq0eeL7OdUNmvtAsRPFJN4WxBJ6hGjTJBRg7EWFhVJG2H6LF4FKeLFQPoYGM8ub7ctHdsZXhhtG9b2XWg3rNXQfezScsgjv5mpOkuAlnNf1XI8sGmx96vyzZF1X8uVKWBIPW3HlnhiAGHeO70G5UydFGvd2TnIUgZVnt%2BgtvvmrB0l8jGiVVL7I0dx%2FgSRFCdwuXnobQcOg6VtE2J6VWa9kZpGE40N3b9Lp%2Fl9ZDxgb12yiGwHLDoBGB3EKcYn4Gg5GmS7rJw%2BzbQct5RnLbnFgnQuQFvrG2PGGF1uX4n%2F4zCn0onKBjqkAb9bYFYI8tHPp63Um6UtdmTkahn6GeG6opYq3ZRUwFrbOLc8EuHZBcFzbl1q2YHyOwiO5bIk5CXsY8EqgtGhFt7VF7Jiz8GaTUM2bBVkh6ekpm%2Bvyr0W1AnOZdkNqU%2BgOVkCHnMT0o2IA%2BQtf7dA3Ecav9xLJ6HRaGh%2F9zxWDAiFvk4780dLSWzb10POPF5vi3nhFoo0z0%2FVfetvhYars4fpdlYe&X-Amz-Signature=84c2930340b99f154777cddf29d83ed960ca41cb1293f42d426b23b044eb4095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

