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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJPWZXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27BmNwp1hF0y0mIvi9VxrjlqSoTi2kz2UoZx44ZMsDAIgfzwXdy2PQStYk7P86Fpp8p4GD%2FEIHBjRkUS8Ok48ExQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIzXr86yupuSjmKJICrcA9sBHv4S3gB%2Blw%2FuK8jGKz53%2BXgV8gk6AcDW6r5xCbLUgyuc4kagSAftyBvzOYIHkqQ3qPMgOtEem0GCcSSwK1PovNFgp9%2BftdKFn2c%2FV64jjJhGAfJs7c714G1Oyr%2BgKU%2B6xSYkbOQJJgbDyiN7BVDJwVnrhEXPqavDG%2BQjcaRwc5DTtvz4Ru2DzzYqKWmXpiu5cqupqMte6aKTkXrdClPiFpMJLGeVwCEWz6BSMFGNLz03Gg7Kal%2Bd9I%2FXrfHDu1V50puhq60RNfQuDTGxbyBxqXEwbVar%2BLVNpbxe8Cs9VuWf7sJu1rxbD%2Ff2EgyLdb5S41GAfRmBAncccOO0EfnH%2BHZmepbIfGbpkE2Xlo5yR%2FqemQb%2FEiTO6k9MyoOtuj2mU24PEzRNosav9lSsi8tmq5c1k5L%2FRV9qEL2q8TSKw7c08ZE77izE8LAdoluOCmRRATbdl1kXYg84mc68YpKvYhFnooIIikdF3WjelC9%2B%2FymZQMdS9Mv5J4257FNwA4IaECme%2BHgKy%2Fda0%2FWRdBWJgwOEHojPuERDqVV7bz2sSCKsTymV4pR7L1RAvy4oG4jkGcKEpoU%2FkA66vltRiIfADO%2Ftm0EIQuvmAMC9EYnGWCfMtFl6ukTUXIHwMK6dicoGOqUBcUhEoqZD%2FOzOZCMNbU9VWVuP%2F5LRQMwuxQQST7Akg%2BhKWFRRXUX1oIrLlBF6rnNMXnW8qjgSYkwFHOVexrojjoagtFmL2YyVFmaf1nfgGg53RemB0IhGhifj%2B31ZXoL5lw8OLgTROGXvWRiMVgTh7AsF7OY1BOmTrVHXuz0EvSqlYhnctvMnXZazTLMda8QZ0hxBAU0TebRwZZBTj8DIF9DmL2BV&X-Amz-Signature=98ae066438ab9684433d4febadfb4291ac5798a0f53887b5bd111da5caf0b9b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEJPWZXB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27BmNwp1hF0y0mIvi9VxrjlqSoTi2kz2UoZx44ZMsDAIgfzwXdy2PQStYk7P86Fpp8p4GD%2FEIHBjRkUS8Ok48ExQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIzXr86yupuSjmKJICrcA9sBHv4S3gB%2Blw%2FuK8jGKz53%2BXgV8gk6AcDW6r5xCbLUgyuc4kagSAftyBvzOYIHkqQ3qPMgOtEem0GCcSSwK1PovNFgp9%2BftdKFn2c%2FV64jjJhGAfJs7c714G1Oyr%2BgKU%2B6xSYkbOQJJgbDyiN7BVDJwVnrhEXPqavDG%2BQjcaRwc5DTtvz4Ru2DzzYqKWmXpiu5cqupqMte6aKTkXrdClPiFpMJLGeVwCEWz6BSMFGNLz03Gg7Kal%2Bd9I%2FXrfHDu1V50puhq60RNfQuDTGxbyBxqXEwbVar%2BLVNpbxe8Cs9VuWf7sJu1rxbD%2Ff2EgyLdb5S41GAfRmBAncccOO0EfnH%2BHZmepbIfGbpkE2Xlo5yR%2FqemQb%2FEiTO6k9MyoOtuj2mU24PEzRNosav9lSsi8tmq5c1k5L%2FRV9qEL2q8TSKw7c08ZE77izE8LAdoluOCmRRATbdl1kXYg84mc68YpKvYhFnooIIikdF3WjelC9%2B%2FymZQMdS9Mv5J4257FNwA4IaECme%2BHgKy%2Fda0%2FWRdBWJgwOEHojPuERDqVV7bz2sSCKsTymV4pR7L1RAvy4oG4jkGcKEpoU%2FkA66vltRiIfADO%2Ftm0EIQuvmAMC9EYnGWCfMtFl6ukTUXIHwMK6dicoGOqUBcUhEoqZD%2FOzOZCMNbU9VWVuP%2F5LRQMwuxQQST7Akg%2BhKWFRRXUX1oIrLlBF6rnNMXnW8qjgSYkwFHOVexrojjoagtFmL2YyVFmaf1nfgGg53RemB0IhGhifj%2B31ZXoL5lw8OLgTROGXvWRiMVgTh7AsF7OY1BOmTrVHXuz0EvSqlYhnctvMnXZazTLMda8QZ0hxBAU0TebRwZZBTj8DIF9DmL2BV&X-Amz-Signature=e6b880405170fb8e62eed6719a4cefdf3e560f1bbf6b947d8509aa1159644c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

