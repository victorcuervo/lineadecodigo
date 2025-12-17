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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7UQ73X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzcIe7BnIuEJEI3EiVbB2DK%2BOKdoNa2HqQJk4jzZqAugIgVVdXieDA6JzMhvYYkfbiue07H7ksPSWkwiv3b1b4AO0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD5LcRqATajccR4BsSrcA2UcfbQXrRZlY7%2FOm5zSfFa5%2FZzznizobSMYukzmYNrsqWQ3jRcbzJIdi94hRI0XBF%2Bq676JGsRjrKAnhPu%2F3mMyNE%2BeP%2FRcWtcNygr5sAJDedEpe17g3RmuNQaWVI5CvopU1LQzmhOQkfCvW7bPZiDuUQ96jCJ6mROwSvR%2BKaazvprqxcIJlwnBOxWgItwPti9oeyGzyWiAjoGzblSGoPwYEO8TDsSNAbNFIfBNjpL4HlvsmTR2wxiNizrMPCg6O04pjZVdkshYzLf1pQaV8bPwf1rnZee3dHQXoN3BWFJ%2FFfjGWfYbhfYzfqeOj2cwwA8b52YRDjs5J8q9t3wx2lcS86N0F86dH7QhSpToEjRkPlnowrzYL%2FFBrFTHGhkPYweyJUvj6MZRXsjDl0YD9JUSnsWavDAR66BC91gVcGM1k5%2BmKklHiWLf3NLRf1iEg9%2B1UyE9Wb0tkOOC9LkZNqumJaxYqYP5JyMrW26bw1FKJgW%2F70rxWV4nzN48oT6XEmHb4jLrMe9hWa9VqoBmAjTTAvUxCYUwRdkOSVjJwoLAbvr9c4HfiMzX%2FhJnd5AhnwJocBRpIrTLQafz2KZouFYafd26bOJ2ZcHghYGFy6ARVKYiahwtZCTtYpiSMNr6h8oGOqUBxafkIMWK98RC2XXIiNoYjIfYtSIjI8G191rdkMr0NSY5TUaPTYI860iIz%2BswPaDkEaC9ltPU81CNzyJLNj4x3DReBt8RYa%2BLPJCUkW8tMrS264qDeP3GOQQT2rFYSdeYFA6V3KXYAi%2FbCDKPey92ckgTWhGjfwN3Pr8TU3P2bylYiIrr7Fp3jN16foseSZzyVerEdDooPz5bP0a8xmFUfD4%2BelaF&X-Amz-Signature=b286a824a7924f1a96edae3e09c86ef7a44694b075d23e2fb46d042e7f62bcce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV7UQ73X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzcIe7BnIuEJEI3EiVbB2DK%2BOKdoNa2HqQJk4jzZqAugIgVVdXieDA6JzMhvYYkfbiue07H7ksPSWkwiv3b1b4AO0q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDD5LcRqATajccR4BsSrcA2UcfbQXrRZlY7%2FOm5zSfFa5%2FZzznizobSMYukzmYNrsqWQ3jRcbzJIdi94hRI0XBF%2Bq676JGsRjrKAnhPu%2F3mMyNE%2BeP%2FRcWtcNygr5sAJDedEpe17g3RmuNQaWVI5CvopU1LQzmhOQkfCvW7bPZiDuUQ96jCJ6mROwSvR%2BKaazvprqxcIJlwnBOxWgItwPti9oeyGzyWiAjoGzblSGoPwYEO8TDsSNAbNFIfBNjpL4HlvsmTR2wxiNizrMPCg6O04pjZVdkshYzLf1pQaV8bPwf1rnZee3dHQXoN3BWFJ%2FFfjGWfYbhfYzfqeOj2cwwA8b52YRDjs5J8q9t3wx2lcS86N0F86dH7QhSpToEjRkPlnowrzYL%2FFBrFTHGhkPYweyJUvj6MZRXsjDl0YD9JUSnsWavDAR66BC91gVcGM1k5%2BmKklHiWLf3NLRf1iEg9%2B1UyE9Wb0tkOOC9LkZNqumJaxYqYP5JyMrW26bw1FKJgW%2F70rxWV4nzN48oT6XEmHb4jLrMe9hWa9VqoBmAjTTAvUxCYUwRdkOSVjJwoLAbvr9c4HfiMzX%2FhJnd5AhnwJocBRpIrTLQafz2KZouFYafd26bOJ2ZcHghYGFy6ARVKYiahwtZCTtYpiSMNr6h8oGOqUBxafkIMWK98RC2XXIiNoYjIfYtSIjI8G191rdkMr0NSY5TUaPTYI860iIz%2BswPaDkEaC9ltPU81CNzyJLNj4x3DReBt8RYa%2BLPJCUkW8tMrS264qDeP3GOQQT2rFYSdeYFA6V3KXYAi%2FbCDKPey92ckgTWhGjfwN3Pr8TU3P2bylYiIrr7Fp3jN16foseSZzyVerEdDooPz5bP0a8xmFUfD4%2BelaF&X-Amz-Signature=29db43b7854fd7a407cc0421e7a210c7aa78b260e85dfb322f789b7e3136c47d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

