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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6TAB6B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78tVXfYhgN5NsGbcaWrwLSkQPN%2F62zaWXT7mvVDLWUgIhAOgYetaC2HHBv%2FJAmax%2BSC4%2F66aUK%2FYhS5UFCzyt%2FqssKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLBvKdFAubLA3tWGYq3ANFWkPepDrSe8mdRmv0pED3d7KMHUKjDK%2Bd%2FxRsflyksenOy2TjpPRnj84yU4B%2FR4Q7YWNnk2KsZtZgVe72BRqNJK6Tf4w%2FZ9re20OUd59mtwMlhJV16a7Whr2ZYreWWXuFBn4NSmQFCaUhZtK0nIc07JQu8ANLaUYgC97kWmZN%2FwnfVjBXMPGBMrpyXb7qb078w0nAI2xY7WJfsiSa4FNCswjVbdD%2Bl5fIxzUEe%2FSqqDk5cnyflHrSUZLXBjU0ri1hi8W3x88Uwl7eapV7lQqkOVFvjzbnEzzf8T7%2FrMb9y2VmoWRnIhuadOIXFtrZ6An%2Fi1OdI1dpGUn%2BH6MSTx5ifvPhM%2F5o4wQZfcRw38FfRVQWRfB5EW9vgGmLjCUZkroRMnaKNRhPrqqEFPZlbUvJ8ySo1qqSiR0sTcPNzw%2B4zl0ryzB3wiopK17FdxuI%2FVCrtoIBjR8ODrdYuLVgh9v5INL3I5ffz5FDgFk97BQsIJ5Yk6b7k9Bp6peQq5mVhBcVn0IZBxIHOOUX4bhog1hva5Po5o1gAHcLsCIqPTejI68xB62tnx%2FngZZZoCazE3CITlLWuDuQS5ZJoOQM1HdxWQPxOLcYh%2BGmXZkp4svmye33liip6VQIydM2XjCorozKBjqkARWf3N7oTCBtEVtTtibJw9k4R4FERiANRSKkzeTeIOrZn2FjivA0Ej9SQK65DPe2T6Pril%2BH9l6sQtNd770Mfgs8iMfhH%2FFl4JJU2T24sQgyt8A1QD4ltVyQGNTKVxCC4X4hWargdboI6XQYRiovzRfFMAC6dety1rufEIAKVUIpOvNi3zXqDf8Y%2BjHWf6NqvsQFkL8jx9C0OIlADmDaImkvnJF%2F&X-Amz-Signature=f4c935b239669ff52a19dc385c632583a3f7994f76aef535a4449651070b2d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666I6TAB6B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD78tVXfYhgN5NsGbcaWrwLSkQPN%2F62zaWXT7mvVDLWUgIhAOgYetaC2HHBv%2FJAmax%2BSC4%2F66aUK%2FYhS5UFCzyt%2FqssKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzLBvKdFAubLA3tWGYq3ANFWkPepDrSe8mdRmv0pED3d7KMHUKjDK%2Bd%2FxRsflyksenOy2TjpPRnj84yU4B%2FR4Q7YWNnk2KsZtZgVe72BRqNJK6Tf4w%2FZ9re20OUd59mtwMlhJV16a7Whr2ZYreWWXuFBn4NSmQFCaUhZtK0nIc07JQu8ANLaUYgC97kWmZN%2FwnfVjBXMPGBMrpyXb7qb078w0nAI2xY7WJfsiSa4FNCswjVbdD%2Bl5fIxzUEe%2FSqqDk5cnyflHrSUZLXBjU0ri1hi8W3x88Uwl7eapV7lQqkOVFvjzbnEzzf8T7%2FrMb9y2VmoWRnIhuadOIXFtrZ6An%2Fi1OdI1dpGUn%2BH6MSTx5ifvPhM%2F5o4wQZfcRw38FfRVQWRfB5EW9vgGmLjCUZkroRMnaKNRhPrqqEFPZlbUvJ8ySo1qqSiR0sTcPNzw%2B4zl0ryzB3wiopK17FdxuI%2FVCrtoIBjR8ODrdYuLVgh9v5INL3I5ffz5FDgFk97BQsIJ5Yk6b7k9Bp6peQq5mVhBcVn0IZBxIHOOUX4bhog1hva5Po5o1gAHcLsCIqPTejI68xB62tnx%2FngZZZoCazE3CITlLWuDuQS5ZJoOQM1HdxWQPxOLcYh%2BGmXZkp4svmye33liip6VQIydM2XjCorozKBjqkARWf3N7oTCBtEVtTtibJw9k4R4FERiANRSKkzeTeIOrZn2FjivA0Ej9SQK65DPe2T6Pril%2BH9l6sQtNd770Mfgs8iMfhH%2FFl4JJU2T24sQgyt8A1QD4ltVyQGNTKVxCC4X4hWargdboI6XQYRiovzRfFMAC6dety1rufEIAKVUIpOvNi3zXqDf8Y%2BjHWf6NqvsQFkL8jx9C0OIlADmDaImkvnJF%2F&X-Amz-Signature=03d8c802b905cb8e315ba31c0b8a48c0aac6057c5338c4ddab218591394fb324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

