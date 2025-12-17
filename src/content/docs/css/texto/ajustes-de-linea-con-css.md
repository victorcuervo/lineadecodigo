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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBU2SC5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSuhtkIApVvk5ydTHcOr5GExqhkeXSjmhchBAVejoF5AiB89nGD0ThSFe5LWx5hgsy3fwcUx%2B5pDyfSdi%2Fo%2BO7WOir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8IuRMPPn8cHeuXpYKtwDNh02nS%2BZf9WRG0mJHAK7%2BOO3EXhBotT0ELGCOdgWrOCix3k%2BKPG80nnS%2BuOJOkBPUVelm9JFj4bF9IIrW7%2FERAxhE861QBbaw0GgBeQ6SIs5DfUlh7607OR1xkAV5%2B8c6g5L9LEFqR9V2kHFi6jlFi2surYkAC29%2FiWPZRgJHbDAIcNLrZLHEIZOe3BawIVvbGuLSqHyViYcOOFHL7rJb%2F1MEWStk48bf0lwnff13NiFyE%2BTofDna4iHAMduplyrWlU0dVSQ7TzayQT9soiAGJWrqM0shJ%2F0zzFFOYsGTyMHBVTsc%2BSyYSoGorXKm%2BBNCvsyQrqc5movoXm7R516mvJB%2F8HyPSIjN7ThNK6GexfijNFSMhd%2FdByNCOSj%2BhqVyy%2Fk1QOiOXmpm6k2RHnHgrMAkCbdk9HMrvtQcCmnbzJE4uebQfh%2B8XJ5M40Rj9tgKpKOw7Z31PKnoFKAcqHJOXg01KEhQmNiOIAMN0E7z%2BB6oi%2FsinUEsNbhFmUdrLjOMjHXqbytH2YzC7QhLg%2F35%2FFSyDP7jsumcqCzB0MNnjGXmwjx2f9K%2FG3qFiE0rQL8L4Q%2FS0tTStcjlxV7LI0i0%2BNkBWO6HwhWPi8zzhF69ndICdzuwbT1N6eWKTwwgLOIygY6pgFlzh4b1eeyfDR1oC3x%2Fr%2BuDHs9l5qsOYxI0CKBjBn57nxwaY07bKAWRcUYQqaNaYJ3eAOglsuanTMDtmDebpxWyKGrG2i9pFeHdQdnODmMol5I4ebWO9L6HuDXwnEQOigL0Xv%2FDHRqZhdXRhxOTnzCWzDP3jYa8T879bXtPCyuEM81VUDzLGld33ZGUjKoeENR22FXSvRga4Knz%2BB9ticVBzUPZuXb&X-Amz-Signature=1bfbb1f86cdf19edc06ee023ddd22e457701512e55989306bce863eeed0986f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEBU2SC5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSuhtkIApVvk5ydTHcOr5GExqhkeXSjmhchBAVejoF5AiB89nGD0ThSFe5LWx5hgsy3fwcUx%2B5pDyfSdi%2Fo%2BO7WOir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM8IuRMPPn8cHeuXpYKtwDNh02nS%2BZf9WRG0mJHAK7%2BOO3EXhBotT0ELGCOdgWrOCix3k%2BKPG80nnS%2BuOJOkBPUVelm9JFj4bF9IIrW7%2FERAxhE861QBbaw0GgBeQ6SIs5DfUlh7607OR1xkAV5%2B8c6g5L9LEFqR9V2kHFi6jlFi2surYkAC29%2FiWPZRgJHbDAIcNLrZLHEIZOe3BawIVvbGuLSqHyViYcOOFHL7rJb%2F1MEWStk48bf0lwnff13NiFyE%2BTofDna4iHAMduplyrWlU0dVSQ7TzayQT9soiAGJWrqM0shJ%2F0zzFFOYsGTyMHBVTsc%2BSyYSoGorXKm%2BBNCvsyQrqc5movoXm7R516mvJB%2F8HyPSIjN7ThNK6GexfijNFSMhd%2FdByNCOSj%2BhqVyy%2Fk1QOiOXmpm6k2RHnHgrMAkCbdk9HMrvtQcCmnbzJE4uebQfh%2B8XJ5M40Rj9tgKpKOw7Z31PKnoFKAcqHJOXg01KEhQmNiOIAMN0E7z%2BB6oi%2FsinUEsNbhFmUdrLjOMjHXqbytH2YzC7QhLg%2F35%2FFSyDP7jsumcqCzB0MNnjGXmwjx2f9K%2FG3qFiE0rQL8L4Q%2FS0tTStcjlxV7LI0i0%2BNkBWO6HwhWPi8zzhF69ndICdzuwbT1N6eWKTwwgLOIygY6pgFlzh4b1eeyfDR1oC3x%2Fr%2BuDHs9l5qsOYxI0CKBjBn57nxwaY07bKAWRcUYQqaNaYJ3eAOglsuanTMDtmDebpxWyKGrG2i9pFeHdQdnODmMol5I4ebWO9L6HuDXwnEQOigL0Xv%2FDHRqZhdXRhxOTnzCWzDP3jYa8T879bXtPCyuEM81VUDzLGld33ZGUjKoeENR22FXSvRga4Knz%2BB9ticVBzUPZuXb&X-Amz-Signature=bf762afe99ec5f4f4037c4d498ced3675aaeafaa874705cd91a4e0a7898ee87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

