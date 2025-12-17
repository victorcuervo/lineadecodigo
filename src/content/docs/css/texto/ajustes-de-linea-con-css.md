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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEKODFH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQQb2IaRsBORprto1BUxDkHq4WMkiL2W9z0Oh6QF6vhAiBC%2FLat3q2a5EC90wHKWPokMdErUX%2Bn%2FBQ4fAZuBELPTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLkc2W%2BGkSnJzrneKtwDiN9r3zwRSHlPTN%2BiLKjE2Z5vBAadceSJtxH97K%2F3VJHEJTFOWgn8hSXF3hrxRenkWuUEnqeSrRxypEYMSxJJaY5qf0dXXMwuVyxLINlGoNyEHJrdWk0UDeYI30c%2BV%2FJsLqE1%2Fh%2FZU1ZfFxOg6amzx7v1TsmVad7JMgOWeLIR%2BELkUWOSc6YPeJG4Md5ztEP%2BRYP7enaW0fT%2FQy%2F0QhdmHQjjnGZtQwIe0%2F1yTfF1rWsJJdfre7uQFX%2FkmWk8kBVC%2BZe3Mm%2FupKULHPTMhLArlM3U0jbKS5dZewizU59Ipk7cJu%2BMfB19JBPhNI5grzlu%2BbBJ%2B9744%2F%2BRQ7jHnhbp%2Bla%2BTZCaACwRepqPvONMfO%2BAdEHcPh%2F3DVPMJJMKFPe%2BgZ1uTuqjpt4MO0GfIRhdGKSfVo1sB1XUNGjrFzRranHyznyEzIL6TFCSqP%2B%2F6eY3TvP%2Fz9sgrdHctsW1x%2FmD%2Bs5SLN6xszX8NvIJ6joOH4JEa7XW%2FO2XM%2BP29GEzyAlI6vIv9DO70FkIxjL9OBzvhlNwUMjx1Axpzv82ycypqOnpdhpam0%2FCuLf%2BOh3H%2Bv%2BiBJ1igCe%2FZYmKliJ%2F2oZIMvefuFxIgOep0Cw0BijY8VtjV5MOJoNlpnHq2C8wgZ%2BLygY6pgHS1qojpchLbv0bPuKuTh6IPJj8KmDhGxLiB15F1wmWBhQe92BNas%2FpK3h6qfvMvbtFRnE%2BJcyfNSNg57zdz8s7d%2Bmi8T748mWGmoIclRDsNlKTD2QAlXTPXLK6JJhpTvUfoR7OEP9LqLfMDTQBY7AE9fZo%2BON9z3mBA7tLyNj6UWp4aXxMLBxtfln3rGXdTVmoDf1ii%2BvRD0KqtkOozA0wXbS9wHe6&X-Amz-Signature=aa492b6e5994f5820fe45b6eaca0ac17a7ac3804c8b81961463ce00e991367ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOEKODFH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T184632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICQQb2IaRsBORprto1BUxDkHq4WMkiL2W9z0Oh6QF6vhAiBC%2FLat3q2a5EC90wHKWPokMdErUX%2Bn%2FBQ4fAZuBELPTSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjLkc2W%2BGkSnJzrneKtwDiN9r3zwRSHlPTN%2BiLKjE2Z5vBAadceSJtxH97K%2F3VJHEJTFOWgn8hSXF3hrxRenkWuUEnqeSrRxypEYMSxJJaY5qf0dXXMwuVyxLINlGoNyEHJrdWk0UDeYI30c%2BV%2FJsLqE1%2Fh%2FZU1ZfFxOg6amzx7v1TsmVad7JMgOWeLIR%2BELkUWOSc6YPeJG4Md5ztEP%2BRYP7enaW0fT%2FQy%2F0QhdmHQjjnGZtQwIe0%2F1yTfF1rWsJJdfre7uQFX%2FkmWk8kBVC%2BZe3Mm%2FupKULHPTMhLArlM3U0jbKS5dZewizU59Ipk7cJu%2BMfB19JBPhNI5grzlu%2BbBJ%2B9744%2F%2BRQ7jHnhbp%2Bla%2BTZCaACwRepqPvONMfO%2BAdEHcPh%2F3DVPMJJMKFPe%2BgZ1uTuqjpt4MO0GfIRhdGKSfVo1sB1XUNGjrFzRranHyznyEzIL6TFCSqP%2B%2F6eY3TvP%2Fz9sgrdHctsW1x%2FmD%2Bs5SLN6xszX8NvIJ6joOH4JEa7XW%2FO2XM%2BP29GEzyAlI6vIv9DO70FkIxjL9OBzvhlNwUMjx1Axpzv82ycypqOnpdhpam0%2FCuLf%2BOh3H%2Bv%2BiBJ1igCe%2FZYmKliJ%2F2oZIMvefuFxIgOep0Cw0BijY8VtjV5MOJoNlpnHq2C8wgZ%2BLygY6pgHS1qojpchLbv0bPuKuTh6IPJj8KmDhGxLiB15F1wmWBhQe92BNas%2FpK3h6qfvMvbtFRnE%2BJcyfNSNg57zdz8s7d%2Bmi8T748mWGmoIclRDsNlKTD2QAlXTPXLK6JJhpTvUfoR7OEP9LqLfMDTQBY7AE9fZo%2BON9z3mBA7tLyNj6UWp4aXxMLBxtfln3rGXdTVmoDf1ii%2BvRD0KqtkOozA0wXbS9wHe6&X-Amz-Signature=61e8c6d6a113cce3ead34ca196b326e831ce550297b2deb90df36acd533576bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

