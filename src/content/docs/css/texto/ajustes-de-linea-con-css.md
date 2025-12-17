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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYHCYY62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpcHqaSkV6MNJU8Cv65yFDiCPxN74%2BeUkuNTsfyIGFXAIgBGk5OTsxgIVtsU4rK0tDp0T6wKIJK8f3czv%2FNi5QLCsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCsW6fxNGd8cA2jMrCrcA1o5RHa3ZzfWQ%2FAwZy%2FULFraT5vRGZNq0gFlCTI9sXVLAw1lYxh%2FqWrsRAty3uKSoSf4smJSEikfpta6Adkge74KiqbFtKIGyF44ahUrGuIVVDTe1xeZvUZVCiNXDAh7CklzodDDxEuH5zQQhiv94L4LbMyrxOejk98JxyvF%2F2yN3dKXtv4m9nzi4Vk2%2BN%2BMZ2h5rWZZilGqGa1xOOoTG4O7KoYBZRy25E8UwmchOleu%2BmlbGmvdvFBGVVKxBiMSXEJnENDhGXNhT0abz9tvj8Gnr9tfPBK7Hgog2Vais%2F1DwMlmO5iL8%2BpTWAJ2a8r%2FwYQ2wI66aRVZOdCJI3SPsgGj0OkD7YtFS0HP2f8RsjBhzlhh5NdX4CnOUCj7XHdJKwG7whWdt7P1Rbx4F85QvXt%2BPS09vqchYYtH45mbmo1M%2BEzhp1VDQlISphzlRZti5s4MaqhFqwSsYEgPMOlRhAeVAGygvl6fR9giTRjd27Sd0P7LvqNuWtEHv9SAxZdhlbl476WvGNJodR31AWQKoVEbvnsc%2FZKPf8Q8pp2VHR9CfGR4EhJErjPDxroSDaBC3aXPKhc%2Bn0o9TcttSI0ORAL5JiA1C2QeDXLe7t6U54nQEHNkrmdLAxBF5wnKMJvOiMoGOqUBH%2BzOEXMXl5Jb4XC31OBdjnqUGrL9%2BfrB7R0uW7pTyG5DkMY9u%2B5Tvj%2BpuxImCvkUtHjU%2Bx%2FKIK2hPs9r46RZUs%2BtZf6j7XpBo3Gh0ZHvfNgklsokjEApsUKFRzp1IvCTdgitWgJay4Q55LexIfTQx6Q0VjriaY429OprB6jxrYHZ4z9EUgknkqxhqnFZRFROSI9JBay0RH%2Fciwbyan3w%2FC4KE5L3&X-Amz-Signature=bb953c6a36077ceb9ee9d42129e1acf7da750179472405785d99a32c19675fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYHCYY62%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpcHqaSkV6MNJU8Cv65yFDiCPxN74%2BeUkuNTsfyIGFXAIgBGk5OTsxgIVtsU4rK0tDp0T6wKIJK8f3czv%2FNi5QLCsq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCsW6fxNGd8cA2jMrCrcA1o5RHa3ZzfWQ%2FAwZy%2FULFraT5vRGZNq0gFlCTI9sXVLAw1lYxh%2FqWrsRAty3uKSoSf4smJSEikfpta6Adkge74KiqbFtKIGyF44ahUrGuIVVDTe1xeZvUZVCiNXDAh7CklzodDDxEuH5zQQhiv94L4LbMyrxOejk98JxyvF%2F2yN3dKXtv4m9nzi4Vk2%2BN%2BMZ2h5rWZZilGqGa1xOOoTG4O7KoYBZRy25E8UwmchOleu%2BmlbGmvdvFBGVVKxBiMSXEJnENDhGXNhT0abz9tvj8Gnr9tfPBK7Hgog2Vais%2F1DwMlmO5iL8%2BpTWAJ2a8r%2FwYQ2wI66aRVZOdCJI3SPsgGj0OkD7YtFS0HP2f8RsjBhzlhh5NdX4CnOUCj7XHdJKwG7whWdt7P1Rbx4F85QvXt%2BPS09vqchYYtH45mbmo1M%2BEzhp1VDQlISphzlRZti5s4MaqhFqwSsYEgPMOlRhAeVAGygvl6fR9giTRjd27Sd0P7LvqNuWtEHv9SAxZdhlbl476WvGNJodR31AWQKoVEbvnsc%2FZKPf8Q8pp2VHR9CfGR4EhJErjPDxroSDaBC3aXPKhc%2Bn0o9TcttSI0ORAL5JiA1C2QeDXLe7t6U54nQEHNkrmdLAxBF5wnKMJvOiMoGOqUBH%2BzOEXMXl5Jb4XC31OBdjnqUGrL9%2BfrB7R0uW7pTyG5DkMY9u%2B5Tvj%2BpuxImCvkUtHjU%2Bx%2FKIK2hPs9r46RZUs%2BtZf6j7XpBo3Gh0ZHvfNgklsokjEApsUKFRzp1IvCTdgitWgJay4Q55LexIfTQx6Q0VjriaY429OprB6jxrYHZ4z9EUgknkqxhqnFZRFROSI9JBay0RH%2Fciwbyan3w%2FC4KE5L3&X-Amz-Signature=1074fc867d206d99358043ccd08c3b3ddd46de890f37279e1ce81ae20d1600ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

