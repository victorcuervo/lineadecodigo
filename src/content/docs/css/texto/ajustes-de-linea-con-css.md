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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWERORE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYLyi1w3064Cf%2FekJn1IzMd0lG%2F%2F74x9NlN9Xrp5oXwIgaWP39NFGhZIaTcbNBs8WieMMAE%2BRQOg%2BtfBh4JKIkfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfTkvATzn9nyyuHJSrcA7M2Leja9NcM3ycUYDe1%2F0AXBFEXTqYx7dHMknS%2F45eDitKXkEdYN9pCUl3aVRWabmiTtLxo1AvHY9kMDkW9F%2BPuiSg85yARNjOkr6gkp%2FETl3sa3nhR4u9htcm39tTVmrCqO8FIbHD%2Bz6xgh9jL%2Bb5Roy8oQgWyZAYSntbDtkUHYVtHvwsu7c0gePkMoyvFenRKqfeJWvxQZKZdovkXpFmJx4b06nbFi50BsqFuARTr7ZfHRGhHEb9u6N0JBsipieupXerVTqCetYzh107eH8Jm%2F7Jx6zEuiySHniuzGsJN5ZnTpjWi5kX9BmE%2FCIwd8hhyNMaiOtJbBEaXsy8RgbdmvKMdej3QpfKJcUlKvqt2TYtIYZWgYn3%2FNvKbr50YaEELGWVmiW9d02CtU%2FJlzdsw3k770bBuxBfPqgjjx8C1OyVoPpc%2FwY1FjS4FzERiXxGmxttMNhuxOruBv8Qhaj92vnO4hRTTRTH9mEN%2F%2F9Qgukd9FaKKC0h4IG1RKXe4a%2F5iMxvE6Glw8mN6amaxHx5FRcAACMbmjS3Vbq1jdnOtSWfVS8p5Cm0ZG9FsamOmWaIjNe7tRO3ZEsJj%2BLcqqZYuZ13vzhQd%2BVwHwwC6wU2MEgGvy0%2FkuP463XIhMITSicoGOqUBRABbwaLBXoyVyCCa3lf9jbhXYjyKdOVaZ2wguviFzSfZrg14Zm90YJYTUggz4U4c3Ir%2BelUVK6nV%2FgAeDS%2FXk9j0Ldc3O%2F6UqWLvNnT6yJSHdwJTJ48WQC%2BAACAaQ%2B0%2BZe3M1JbX4oe7fJ0JKstWUd1GNBeplHHSXNLWgFT2ctHW5ZZdAmnctc0JR2jB5vbGcd1Z8ydbXNUAutey9nF6PZ5VbfDb&X-Amz-Signature=0faa3c83fd24a5d96397cdbe4262f84e3cf12ab0d67588ee397a55f4620f65f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NWERORE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzYLyi1w3064Cf%2FekJn1IzMd0lG%2F%2F74x9NlN9Xrp5oXwIgaWP39NFGhZIaTcbNBs8WieMMAE%2BRQOg%2BtfBh4JKIkfIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKfTkvATzn9nyyuHJSrcA7M2Leja9NcM3ycUYDe1%2F0AXBFEXTqYx7dHMknS%2F45eDitKXkEdYN9pCUl3aVRWabmiTtLxo1AvHY9kMDkW9F%2BPuiSg85yARNjOkr6gkp%2FETl3sa3nhR4u9htcm39tTVmrCqO8FIbHD%2Bz6xgh9jL%2Bb5Roy8oQgWyZAYSntbDtkUHYVtHvwsu7c0gePkMoyvFenRKqfeJWvxQZKZdovkXpFmJx4b06nbFi50BsqFuARTr7ZfHRGhHEb9u6N0JBsipieupXerVTqCetYzh107eH8Jm%2F7Jx6zEuiySHniuzGsJN5ZnTpjWi5kX9BmE%2FCIwd8hhyNMaiOtJbBEaXsy8RgbdmvKMdej3QpfKJcUlKvqt2TYtIYZWgYn3%2FNvKbr50YaEELGWVmiW9d02CtU%2FJlzdsw3k770bBuxBfPqgjjx8C1OyVoPpc%2FwY1FjS4FzERiXxGmxttMNhuxOruBv8Qhaj92vnO4hRTTRTH9mEN%2F%2F9Qgukd9FaKKC0h4IG1RKXe4a%2F5iMxvE6Glw8mN6amaxHx5FRcAACMbmjS3Vbq1jdnOtSWfVS8p5Cm0ZG9FsamOmWaIjNe7tRO3ZEsJj%2BLcqqZYuZ13vzhQd%2BVwHwwC6wU2MEgGvy0%2FkuP463XIhMITSicoGOqUBRABbwaLBXoyVyCCa3lf9jbhXYjyKdOVaZ2wguviFzSfZrg14Zm90YJYTUggz4U4c3Ir%2BelUVK6nV%2FgAeDS%2FXk9j0Ldc3O%2F6UqWLvNnT6yJSHdwJTJ48WQC%2BAACAaQ%2B0%2BZe3M1JbX4oe7fJ0JKstWUd1GNBeplHHSXNLWgFT2ctHW5ZZdAmnctc0JR2jB5vbGcd1Z8ydbXNUAutey9nF6PZ5VbfDb&X-Amz-Signature=85f3e2fa16c2fb126d530afc7215001bb821996379d60965b6c7607f884f124b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

