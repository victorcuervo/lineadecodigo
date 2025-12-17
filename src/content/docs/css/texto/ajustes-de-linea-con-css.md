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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5H3XDW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3Jbg4dHlnCQPFGWdr1dCT8kMC9A1vp%2FwMgUZ7yO44JAiEAhKN0stuupvUBi4mthN%2FJXVeDEdcS4r4kdSxcHU%2B4cTMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM%2FNsMVuAIMqA%2FU4kCrcA8rW4%2FZGSHPUoVu597bEoW2%2BfS8H5m%2F2MDvtWHfQNnFo8jZwBN3sdzMC%2FivAzNr4fNdJwTfLHvuOs9fsx8HHpm3q5gqHTHXz7x53sngCvGHuPnIcA67Kb1U7mJqRKc6kgkX77YthOkpH3DR50U7AWH1q4ew9oJnkWSdvXapg99Tt0jGWgzCacojYMw%2BDYHEjphVNWwa3EaG%2FU783oK2TFtQWMoDLOMb%2BceInfZF4tbyWCRtS%2B7kMDcLNDAG6f2PLj5%2BwYWbH5xvvlbfSHXohlYJkCx5jYaQS6yjfw%2B7ILyYzeLsFEL8hVWucj5rJHsd3tkDVPRi78%2FIJm%2Bijfrdd5%2FfytFJOiss9xvZcaLTZVzasWR4st9WjWweqbh3M4jBUwLfUmTOISC%2FzofZ5JuVKStIzVVsyCKWZiD9%2FQbIIPiWW8kvE%2FPsxXkpIF8uGWcfcQO3iLUc2v%2FZBSQhGTFk%2FTvycqMG9wfGh%2B%2FTVXtB%2FXQyyz9MLtT%2B59rCLsXFljaqYYgrRCrud1FQUOTsg05hTffbgNZZv28SjdYGKZI2u4Vtg846goiPWL55g8hvoyWK5mONeGgKt7RvBo%2FWNNUne%2B%2BrqZeZnOTKYYcs7z0Gy16hnD56j7RYHi7zAgxC%2BMMr6h8oGOqUBs4FCduu87ytk2%2FVVK%2BAC8YYPfZ3T0nR6M8QajhKfIoHHl%2Bk9bOnLNYNDeobZpEfR8txloqyeRxnZtqqd08RPHtgN2pZYu7I6q9ohLOXVp%2BK86TdZqVaXCHvLMka8fS9uYcFEk%2BNt6p0h5vCdZ%2F%2FHuHd5SeUo5HHwtn73R2OSu%2FMXylAdcs4vNCN%2B3lRUzA9ZnHCdDTHs1ruI6AQLSaQrJV7V1B0I&X-Amz-Signature=06c624301285e5724b7aa1a2f3967132fae1d38e425d97734c1fe52dcc4d4b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5H3XDW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T011016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB3Jbg4dHlnCQPFGWdr1dCT8kMC9A1vp%2FwMgUZ7yO44JAiEAhKN0stuupvUBi4mthN%2FJXVeDEdcS4r4kdSxcHU%2B4cTMq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDM%2FNsMVuAIMqA%2FU4kCrcA8rW4%2FZGSHPUoVu597bEoW2%2BfS8H5m%2F2MDvtWHfQNnFo8jZwBN3sdzMC%2FivAzNr4fNdJwTfLHvuOs9fsx8HHpm3q5gqHTHXz7x53sngCvGHuPnIcA67Kb1U7mJqRKc6kgkX77YthOkpH3DR50U7AWH1q4ew9oJnkWSdvXapg99Tt0jGWgzCacojYMw%2BDYHEjphVNWwa3EaG%2FU783oK2TFtQWMoDLOMb%2BceInfZF4tbyWCRtS%2B7kMDcLNDAG6f2PLj5%2BwYWbH5xvvlbfSHXohlYJkCx5jYaQS6yjfw%2B7ILyYzeLsFEL8hVWucj5rJHsd3tkDVPRi78%2FIJm%2Bijfrdd5%2FfytFJOiss9xvZcaLTZVzasWR4st9WjWweqbh3M4jBUwLfUmTOISC%2FzofZ5JuVKStIzVVsyCKWZiD9%2FQbIIPiWW8kvE%2FPsxXkpIF8uGWcfcQO3iLUc2v%2FZBSQhGTFk%2FTvycqMG9wfGh%2B%2FTVXtB%2FXQyyz9MLtT%2B59rCLsXFljaqYYgrRCrud1FQUOTsg05hTffbgNZZv28SjdYGKZI2u4Vtg846goiPWL55g8hvoyWK5mONeGgKt7RvBo%2FWNNUne%2B%2BrqZeZnOTKYYcs7z0Gy16hnD56j7RYHi7zAgxC%2BMMr6h8oGOqUBs4FCduu87ytk2%2FVVK%2BAC8YYPfZ3T0nR6M8QajhKfIoHHl%2Bk9bOnLNYNDeobZpEfR8txloqyeRxnZtqqd08RPHtgN2pZYu7I6q9ohLOXVp%2BK86TdZqVaXCHvLMka8fS9uYcFEk%2BNt6p0h5vCdZ%2F%2FHuHd5SeUo5HHwtn73R2OSu%2FMXylAdcs4vNCN%2B3lRUzA9ZnHCdDTHs1ruI6AQLSaQrJV7V1B0I&X-Amz-Signature=78dd54754cca1e8368a8fc876f2ad5a9ab1a1c92f76b53b49efbf52bf82c0c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

