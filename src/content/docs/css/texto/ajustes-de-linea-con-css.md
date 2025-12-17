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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETOAVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXDyM8%2BZWOOYlxTFsK4KOjKnO1BbaRjreESollopYMAgIgXPcgodRpvq6aOfMO50XDQL%2BcYiykrP1CV52M%2F1gRxagqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlZwM7S3hWJqN74pircA%2BKo8rs7cUffEAcu0cuxv%2FjjBY6G%2BkFtCww9ITPO88k2xYR%2Frd0UsrzaJa8B9CgjgnwnlccE%2FNbPdzDWVL%2BH942vXG1Azx5qnqXIF%2FhodP3zt6jna6ATknN%2FzEXHPjHkXIb1YWZSACrwe6Bh4E23WL902KlO4543qlFxn2KvzdzI8%2BA8DZbPjYC7%2FMGCe9sJtBvrVmBdVauQwPGQC9Xl0CT2ZusOfqlsQxqzTP%2F0N5GxZWFWv2CNKaDtzf2bvEPu3R%2FtIiRfPIqW9%2B0um%2FHbp5flBPz9dTtAuEgZQpc1r4LAvov8AvbStc%2F1nQG%2BquO9PWKMm%2B94bD2bGwNNbdR9%2F2rHMl9UiJ3fDOydcGGt8JvYbwQHjMVANPa1B0pmWZQd6kW6dhlPKTNYsgM3SEz%2FIL0V%2FI0t4zfOx7GRn86EgUBycACKar6UgXVFXlKNclhf5vNOdVms4JNlFc%2FES%2F5%2FJYqlsrPp8Wc%2BPGjZCgJagBZv85Qi3En74tYkkaPPpKCSva27qqXmuw6GmmlHqpiBHcZmk739lTscXwgamK%2BHsGKlgp1Meaep%2F8kfwmJjZNqzrybOWdw42ozHk1tNgdRMjAHwakANIqG8H0aU2%2FO2Cxm05VBFZgisyod97biiMMufi8oGOqUB6Kog%2FM%2BqFRSKnEgl5sIuifYxVYx3aOxC%2FnBiW58%2F45bHkCLnlso7StAfbn%2F1FpbgsS9ko4SFRYbXoSZZgStY9kV5xe8gvFoooIeqRLthf2jTkIJTacN2G30cYeMUvKjGr2fRZlHqyau%2Fo6T%2F%2Bi%2Btfl%2B0PCASR325F1s0Udke6lsEOhevNrR9Un%2B3RNQmkbMvuNnQs9whD1H3zdRVAS4ZPCFZ4D8o&X-Amz-Signature=72670468ed4fdb80cef557695f11a5358aa8942cae806437237f55e9b9d691c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ETOAVZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXDyM8%2BZWOOYlxTFsK4KOjKnO1BbaRjreESollopYMAgIgXPcgodRpvq6aOfMO50XDQL%2BcYiykrP1CV52M%2F1gRxagqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlZwM7S3hWJqN74pircA%2BKo8rs7cUffEAcu0cuxv%2FjjBY6G%2BkFtCww9ITPO88k2xYR%2Frd0UsrzaJa8B9CgjgnwnlccE%2FNbPdzDWVL%2BH942vXG1Azx5qnqXIF%2FhodP3zt6jna6ATknN%2FzEXHPjHkXIb1YWZSACrwe6Bh4E23WL902KlO4543qlFxn2KvzdzI8%2BA8DZbPjYC7%2FMGCe9sJtBvrVmBdVauQwPGQC9Xl0CT2ZusOfqlsQxqzTP%2F0N5GxZWFWv2CNKaDtzf2bvEPu3R%2FtIiRfPIqW9%2B0um%2FHbp5flBPz9dTtAuEgZQpc1r4LAvov8AvbStc%2F1nQG%2BquO9PWKMm%2B94bD2bGwNNbdR9%2F2rHMl9UiJ3fDOydcGGt8JvYbwQHjMVANPa1B0pmWZQd6kW6dhlPKTNYsgM3SEz%2FIL0V%2FI0t4zfOx7GRn86EgUBycACKar6UgXVFXlKNclhf5vNOdVms4JNlFc%2FES%2F5%2FJYqlsrPp8Wc%2BPGjZCgJagBZv85Qi3En74tYkkaPPpKCSva27qqXmuw6GmmlHqpiBHcZmk739lTscXwgamK%2BHsGKlgp1Meaep%2F8kfwmJjZNqzrybOWdw42ozHk1tNgdRMjAHwakANIqG8H0aU2%2FO2Cxm05VBFZgisyod97biiMMufi8oGOqUB6Kog%2FM%2BqFRSKnEgl5sIuifYxVYx3aOxC%2FnBiW58%2F45bHkCLnlso7StAfbn%2F1FpbgsS9ko4SFRYbXoSZZgStY9kV5xe8gvFoooIeqRLthf2jTkIJTacN2G30cYeMUvKjGr2fRZlHqyau%2Fo6T%2F%2Bi%2Btfl%2B0PCASR325F1s0Udke6lsEOhevNrR9Un%2B3RNQmkbMvuNnQs9whD1H3zdRVAS4ZPCFZ4D8o&X-Amz-Signature=8c77aa993c49c2be93ad64f1544b21b1d04a745bc776f4cb84d92ca9c9b8f858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

