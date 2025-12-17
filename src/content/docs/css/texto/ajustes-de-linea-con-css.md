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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ND5L7MK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeZXatAOMbF6%2FOzAG%2FH5M3xcVfFaF7I4wRtlGYNunhzAiBt8yLxLRuyp3VtDZemucpprqFHku%2FXwVpSUb9wwuDE7Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMNJdBJqYkPqMZCWSLKtwDhDkyW4yHzA4DjJcbFP%2FO8Hb9I0FL%2BUwGIW0NHkdfSlk6eyD9JOHUqzJa6CeWA%2FzIn9SUERmHpl2009AqpBpGYPCIPweqC%2B9U7n4vjtRJHl2kGzxyCulbo2hgOFewi2wlL94uLD1wA7GeUeg120JNqOMuKkgmqrsYSQYgWbus7XJL4x%2Bcr6WarIUfOXA5yBAINVujpWXvo2V028C2OmFTxZja4Ff%2FC1AR68suuVFJYOInGNze%2BcVu7%2BokhLW9FguXvqb2ZCFyVQjg8kCjrCgDVtUJhrIZqmrJnuOpsmYVbzietLXO%2Fk8gn3o8Em0ksz7BS46858o%2BRrK2Jz%2BXIxwWb1V%2BeSHd7whnjJ1J3%2BSm9hRiG%2FuOFg1%2BdNJUdVDVbrHqy1h4tcAuzq1qgQolAryWO2GtuFXQsUWP%2FapT391l8%2BEIGog9vjc8weImCJu6SRA9aV0AMnq2WOmfHFft1yArZwzgUkMwiivxBBDOw2%2Fet5OwMWM7o%2BLxVhbsIOpVgpQ31tDjFvgiBtwMUtfobFhQrZjd0foWmrY0R3rwzHKqYcYVsVFTREqoG9UP4piVUaYUjq0KEE3%2Bhw99Uy5jP%2BFnCAu%2B7w1sgAjdDNj%2F%2B1Vy9RFLOsNrEca8QsiCAJ4wmNKJygY6pgHLmR%2Fd3p5nqh8eexxjOZJCEojcBGfQJOrblrK0CoP%2Fa90CiXfnjhVlguUNoVlCr9QOHa%2BTibhDYXUHQIbjzlzF6Ky5WlOhi%2BamVtyf0yBPfncuqN7C5vrHWrZqw5fFQqvjGQ4mfggucMWmptAHmwK2u4Mdr%2BCGNx6Q1%2FZpi%2FRkovV9kflwQB4cRjzcrQnhgXkSGoaDVR5Aol678LNEFDnpQcDzanVr&X-Amz-Signature=31232c444082244b6fc21b9619d0f6ad1e1a2cff6eba5e18d669ff924f37edc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ND5L7MK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGeZXatAOMbF6%2FOzAG%2FH5M3xcVfFaF7I4wRtlGYNunhzAiBt8yLxLRuyp3VtDZemucpprqFHku%2FXwVpSUb9wwuDE7Sr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMNJdBJqYkPqMZCWSLKtwDhDkyW4yHzA4DjJcbFP%2FO8Hb9I0FL%2BUwGIW0NHkdfSlk6eyD9JOHUqzJa6CeWA%2FzIn9SUERmHpl2009AqpBpGYPCIPweqC%2B9U7n4vjtRJHl2kGzxyCulbo2hgOFewi2wlL94uLD1wA7GeUeg120JNqOMuKkgmqrsYSQYgWbus7XJL4x%2Bcr6WarIUfOXA5yBAINVujpWXvo2V028C2OmFTxZja4Ff%2FC1AR68suuVFJYOInGNze%2BcVu7%2BokhLW9FguXvqb2ZCFyVQjg8kCjrCgDVtUJhrIZqmrJnuOpsmYVbzietLXO%2Fk8gn3o8Em0ksz7BS46858o%2BRrK2Jz%2BXIxwWb1V%2BeSHd7whnjJ1J3%2BSm9hRiG%2FuOFg1%2BdNJUdVDVbrHqy1h4tcAuzq1qgQolAryWO2GtuFXQsUWP%2FapT391l8%2BEIGog9vjc8weImCJu6SRA9aV0AMnq2WOmfHFft1yArZwzgUkMwiivxBBDOw2%2Fet5OwMWM7o%2BLxVhbsIOpVgpQ31tDjFvgiBtwMUtfobFhQrZjd0foWmrY0R3rwzHKqYcYVsVFTREqoG9UP4piVUaYUjq0KEE3%2Bhw99Uy5jP%2BFnCAu%2B7w1sgAjdDNj%2F%2B1Vy9RFLOsNrEca8QsiCAJ4wmNKJygY6pgHLmR%2Fd3p5nqh8eexxjOZJCEojcBGfQJOrblrK0CoP%2Fa90CiXfnjhVlguUNoVlCr9QOHa%2BTibhDYXUHQIbjzlzF6Ky5WlOhi%2BamVtyf0yBPfncuqN7C5vrHWrZqw5fFQqvjGQ4mfggucMWmptAHmwK2u4Mdr%2BCGNx6Q1%2FZpi%2FRkovV9kflwQB4cRjzcrQnhgXkSGoaDVR5Aol678LNEFDnpQcDzanVr&X-Amz-Signature=cbed3565ecabdbba19b80c5cb645148ceb8a1a05f492a1d203d3f999c0d1c9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

