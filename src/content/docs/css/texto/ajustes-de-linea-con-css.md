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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJ7GBSC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIoZ9Nx8KglZjIguBBcPhJLK9ypxUxEjCW70kdvFLScQIgTgKg%2FVvAVRRm5Vf0RcZ55njMkIJOkMdYjCAtiNqwFGAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIPTosj1X61bj5x1oSrcA982jpb%2FvfxN%2BVnFLMaCHhkVLM1tgG816ba50W1HrXMM9LXmuALYL7GLLGxUGeBI7nBb0CCWrLNlzyL5QwhPPZov6QQw5wgNemAfCLFhGXtD76iXk57A2o%2FUzWSTR7e0MqfoYDkSSgTyDiQaE%2BUoHyw%2Fc1X7kK8i4z%2F%2FBkZFDIvzMUHOc2gqWVFxrKnwPJs7oPi9PN9HTKiYdIwEbmOgdykDm2PB%2Fu5flVRTR%2BRiws9jOXBoYY4d86lRe7FyzJoiECHP%2BxMcevYQwi%2FLL8LSoOAgZNQ19FUy4MLAbFd%2BmeLAP6pvNIr3ZvrQAXgEvvw282IKSwIUadlqRnXH%2FpHGvjFWrtfOhhwwSKP4gKfRGRCt%2F3l3AUESQGREXzy6DTUyfHxBaUR8WTd%2BiY5J1jRRam4LveVQi%2Fu22gecbyUhqKbD2cPgkyCUFI%2BojcYUg6BMwS3jP8HmHLLTETDSog1Mm2VnryTCj%2FdL1sZBISOOO8eFP3A1E04Wbpok%2BAVPxGAI28881qlAChauaWz3xTpbq00aPOzv68%2FTJNUB%2BfGW%2F70k4CPXtfRewyM6RcM9JE6B2vmucdseIlj1Nx2eRx9XrjUceg6NeaWbWd%2BJt14z1W%2Fu72bL1qHGvVoPcuplMMecicoGOqUBfvC05RUKczy1h7RH9CFPT5UrBjkWk0nMg2NnzqhdmdIX%2F4m8ABYtxgDEn6hFELmF8KdVbuxEiUODMi4waMb2DItpHDRHp0be2m8Jbip%2B1dd5MmYia3PK%2BoDLs3Y%2BxNPytt7dQt7NISRIIm6pBHXr6zFrnXT14w%2FwfqSt8fEx%2BDqAEpI8XJyWRvt8M4HPgC%2BEX3oMwGJa2%2BRJwmcuLDpiBY8GNrJm&X-Amz-Signature=0406bc518835f08386e1181785cdcd2b3c94eadc3ccf43f172a8472a51c6233a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJ7GBSC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIoZ9Nx8KglZjIguBBcPhJLK9ypxUxEjCW70kdvFLScQIgTgKg%2FVvAVRRm5Vf0RcZ55njMkIJOkMdYjCAtiNqwFGAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIPTosj1X61bj5x1oSrcA982jpb%2FvfxN%2BVnFLMaCHhkVLM1tgG816ba50W1HrXMM9LXmuALYL7GLLGxUGeBI7nBb0CCWrLNlzyL5QwhPPZov6QQw5wgNemAfCLFhGXtD76iXk57A2o%2FUzWSTR7e0MqfoYDkSSgTyDiQaE%2BUoHyw%2Fc1X7kK8i4z%2F%2FBkZFDIvzMUHOc2gqWVFxrKnwPJs7oPi9PN9HTKiYdIwEbmOgdykDm2PB%2Fu5flVRTR%2BRiws9jOXBoYY4d86lRe7FyzJoiECHP%2BxMcevYQwi%2FLL8LSoOAgZNQ19FUy4MLAbFd%2BmeLAP6pvNIr3ZvrQAXgEvvw282IKSwIUadlqRnXH%2FpHGvjFWrtfOhhwwSKP4gKfRGRCt%2F3l3AUESQGREXzy6DTUyfHxBaUR8WTd%2BiY5J1jRRam4LveVQi%2Fu22gecbyUhqKbD2cPgkyCUFI%2BojcYUg6BMwS3jP8HmHLLTETDSog1Mm2VnryTCj%2FdL1sZBISOOO8eFP3A1E04Wbpok%2BAVPxGAI28881qlAChauaWz3xTpbq00aPOzv68%2FTJNUB%2BfGW%2F70k4CPXtfRewyM6RcM9JE6B2vmucdseIlj1Nx2eRx9XrjUceg6NeaWbWd%2BJt14z1W%2Fu72bL1qHGvVoPcuplMMecicoGOqUBfvC05RUKczy1h7RH9CFPT5UrBjkWk0nMg2NnzqhdmdIX%2F4m8ABYtxgDEn6hFELmF8KdVbuxEiUODMi4waMb2DItpHDRHp0be2m8Jbip%2B1dd5MmYia3PK%2BoDLs3Y%2BxNPytt7dQt7NISRIIm6pBHXr6zFrnXT14w%2FwfqSt8fEx%2BDqAEpI8XJyWRvt8M4HPgC%2BEX3oMwGJa2%2BRJwmcuLDpiBY8GNrJm&X-Amz-Signature=ec2bdc6ac006a6ede4a7ec5c2ab11b39d68a8409132288701dcafc2a7f1565a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

