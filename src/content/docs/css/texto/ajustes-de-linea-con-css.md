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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQWDGPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS9sP3jdXiHuRxiS%2BZYQI1uyoyiCXltZcXRXlMMpeu7AiBs5Z%2FaEfrS575lxkUr4RkcU%2Ff6SfdQuOg2H3jltuudAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMYHixkkR%2F8NKQMlCSKtwDFLsn2t1vQ0yT6bQT20oj188e6STbRkFhvxm9X9xSpzrHzXV46%2BAlLJovpppXR%2B6j98ORuER2jp2spIDGARY0MiM0IDJXmVHLSQu8w1lrqmm2zAh5p7H1ktc12qZEtgLQROL1C%2BZMlOZ4Gi75qtlM046myE%2FzChTBKm%2FbGXiiQx6pltX5R6vYs45tXhO85KY0GrrTBQo9TQnDPGrHjrQFOSNXoEuh9P02ybkbquFyBQ5MS%2F4%2FogU0BqbDTKrjAzxn7%2FPc5lyUr%2FUPWxIXEQ%2BZz8KJ%2FkBzs3UQrBfgHkPHCwNOkRm7aeI22xVLir9hUr1A4MhY%2BSCuiI3yKjhOFWCK9lNX2XwVR74aZTyLqbbfx7tMMpjLQ3Y%2Fb5hoh6DAP8WcJVNUv7SxhOoZaiyCzcrc8p1ADgSmLXAN%2B0oXFM%2FWPRwsaLHPddmSY3UukqCV5lvTLqZcyQQLFTHb1rxmho5pGKuAN%2FcWcPXaD1gqPJKlAAYhVL4Z61xH8JXy8lnxZjvbuEohFy8hrNPkHzMm1wihiLGaRzLe0qK5HMlFO4BB3THJyVBpVIpq7uOLouLNb8DLV45KpV0j327f%2BVRYismbCY2Bl5qUIFlUjLPJCboTJhJlquuINx49PT%2B0yAMwn7iJygY6pgGUrHi%2BOAwCdrYrDF91v4r9xBxfThVOUXbKwZkQDuSKA77a6QpVQTWR%2BTbrl4mT2gnl33MVtP11DFl8bwnsMyUkXl8X9hfjbPn7cGgWHuZpF%2B9uYXfA%2FvHeVPhtt1DcG1gLd8hbBfizTxE73M8e325vl5K4oPIcS7Oc71%2Fi2HVMX35z1iacEkJ6dbZp9z2PkJCbMZpKiTB%2FqbVq6V0IG87QBtqLJinE&X-Amz-Signature=d07e304f49d66ef92bcb92885559e6c754c90ab1a6adc4a0b06c6c8f3ec3235a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMQWDGPM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGS9sP3jdXiHuRxiS%2BZYQI1uyoyiCXltZcXRXlMMpeu7AiBs5Z%2FaEfrS575lxkUr4RkcU%2Ff6SfdQuOg2H3jltuudAir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMYHixkkR%2F8NKQMlCSKtwDFLsn2t1vQ0yT6bQT20oj188e6STbRkFhvxm9X9xSpzrHzXV46%2BAlLJovpppXR%2B6j98ORuER2jp2spIDGARY0MiM0IDJXmVHLSQu8w1lrqmm2zAh5p7H1ktc12qZEtgLQROL1C%2BZMlOZ4Gi75qtlM046myE%2FzChTBKm%2FbGXiiQx6pltX5R6vYs45tXhO85KY0GrrTBQo9TQnDPGrHjrQFOSNXoEuh9P02ybkbquFyBQ5MS%2F4%2FogU0BqbDTKrjAzxn7%2FPc5lyUr%2FUPWxIXEQ%2BZz8KJ%2FkBzs3UQrBfgHkPHCwNOkRm7aeI22xVLir9hUr1A4MhY%2BSCuiI3yKjhOFWCK9lNX2XwVR74aZTyLqbbfx7tMMpjLQ3Y%2Fb5hoh6DAP8WcJVNUv7SxhOoZaiyCzcrc8p1ADgSmLXAN%2B0oXFM%2FWPRwsaLHPddmSY3UukqCV5lvTLqZcyQQLFTHb1rxmho5pGKuAN%2FcWcPXaD1gqPJKlAAYhVL4Z61xH8JXy8lnxZjvbuEohFy8hrNPkHzMm1wihiLGaRzLe0qK5HMlFO4BB3THJyVBpVIpq7uOLouLNb8DLV45KpV0j327f%2BVRYismbCY2Bl5qUIFlUjLPJCboTJhJlquuINx49PT%2B0yAMwn7iJygY6pgGUrHi%2BOAwCdrYrDF91v4r9xBxfThVOUXbKwZkQDuSKA77a6QpVQTWR%2BTbrl4mT2gnl33MVtP11DFl8bwnsMyUkXl8X9hfjbPn7cGgWHuZpF%2B9uYXfA%2FvHeVPhtt1DcG1gLd8hbBfizTxE73M8e325vl5K4oPIcS7Oc71%2Fi2HVMX35z1iacEkJ6dbZp9z2PkJCbMZpKiTB%2FqbVq6V0IG87QBtqLJinE&X-Amz-Signature=f739eb91eca7dff0bec178960c09ebd0fd428bd18d19a78e60a2eca8a5e77985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

