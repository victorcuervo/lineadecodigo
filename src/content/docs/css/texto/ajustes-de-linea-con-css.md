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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBQH52W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLV0%2FX7RIAwUtYnMf5VCzQOER%2FTctXConx0NEiGDnIsAiEAzgglKvBP4Bg7g0E4imbIdr8dG%2Bq451HA2gwLjJQAq%2FQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeaWFYi2WlLJqKu2CrcA7xYP1t7Ogy0LOcouejX2WNisD5gCtqu5YWmeslNaoQqA4Q3b7tE26knGDt69vHdqnvx23gO802SJ8d5UKUN93T6L1ECuxmwEy%2BNKIgdtf9uU9Mb605eABCf%2BL8JYmxoMdKU9gjdcVxXhDxduA2KJ0mE1JqdzjNNkdJ6m3cpGbiW%2FPCorgcF6WnnHCNqWs7ZkS9keBaS52wMYoItaCeQFSiZaDZSkmqWIRXFXhf3E%2Fs4r5EziHZjJk%2FzfKlBHi%2FWJgBkhi2NAW%2FqifbHvQJm2P48fxvVi20hG%2FH7VD3eBl8%2BnzDDq1PCvFSrr1ew04F7GLdwr2SVYrES78hThpPGviwUwtFuu4Y1MLvFX4hIvtiDnJexoo9QRETqI6qFoAK47etvmCFOMv%2F7mh91ObvNQBpwp1T1NxnjDCIs9yhRXhq1qCLt7H8J8YeRV5N4aPGUpDToXekbNurA3j0K1BVfgSO%2FeqD%2BtDD0n%2BuG8kOfDAhUo2XRgu5G2r7zvMFseOM%2BIR8vvJa3%2BpuJBKNDitYDuIE3qi8MRY0A3HM9WB5%2BVLvTh8gVOQPq4XhhbbLxMuJGiSOiKpWuNVtE1QlXNB9kNuZ7BTNZJpjkZ%2BOThhHeR0GFeGi7bDMGBfmZE0bxMMyAi8oGOqUBdOI7LzMzA7BsbGwp0vlFBigngN16AUBU%2FLKvTevIL6IvEPkJnXPYf0b%2F47ZZMmkLdqOSIexsXLzxNMmQEk0RsUgKD6bq83QVJ0TuB7Cuh3zcIufi5XWIInR3ePMeQ8uRarRynex9UfFU1NqJAMWTyeTHTMxIHhIuxBQLUxFwBvJ2ClHQVeohgzpfS590ufY9NZo2%2FI3GufsB3a7%2FMRBDPbP%2FZokG&X-Amz-Signature=bd52ec0f8c4e9f70c32ac98393ae3dd56d7f339b541aa7754b2a9e96b404660b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMBQH52W%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLV0%2FX7RIAwUtYnMf5VCzQOER%2FTctXConx0NEiGDnIsAiEAzgglKvBP4Bg7g0E4imbIdr8dG%2Bq451HA2gwLjJQAq%2FQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeaWFYi2WlLJqKu2CrcA7xYP1t7Ogy0LOcouejX2WNisD5gCtqu5YWmeslNaoQqA4Q3b7tE26knGDt69vHdqnvx23gO802SJ8d5UKUN93T6L1ECuxmwEy%2BNKIgdtf9uU9Mb605eABCf%2BL8JYmxoMdKU9gjdcVxXhDxduA2KJ0mE1JqdzjNNkdJ6m3cpGbiW%2FPCorgcF6WnnHCNqWs7ZkS9keBaS52wMYoItaCeQFSiZaDZSkmqWIRXFXhf3E%2Fs4r5EziHZjJk%2FzfKlBHi%2FWJgBkhi2NAW%2FqifbHvQJm2P48fxvVi20hG%2FH7VD3eBl8%2BnzDDq1PCvFSrr1ew04F7GLdwr2SVYrES78hThpPGviwUwtFuu4Y1MLvFX4hIvtiDnJexoo9QRETqI6qFoAK47etvmCFOMv%2F7mh91ObvNQBpwp1T1NxnjDCIs9yhRXhq1qCLt7H8J8YeRV5N4aPGUpDToXekbNurA3j0K1BVfgSO%2FeqD%2BtDD0n%2BuG8kOfDAhUo2XRgu5G2r7zvMFseOM%2BIR8vvJa3%2BpuJBKNDitYDuIE3qi8MRY0A3HM9WB5%2BVLvTh8gVOQPq4XhhbbLxMuJGiSOiKpWuNVtE1QlXNB9kNuZ7BTNZJpjkZ%2BOThhHeR0GFeGi7bDMGBfmZE0bxMMyAi8oGOqUBdOI7LzMzA7BsbGwp0vlFBigngN16AUBU%2FLKvTevIL6IvEPkJnXPYf0b%2F47ZZMmkLdqOSIexsXLzxNMmQEk0RsUgKD6bq83QVJ0TuB7Cuh3zcIufi5XWIInR3ePMeQ8uRarRynex9UfFU1NqJAMWTyeTHTMxIHhIuxBQLUxFwBvJ2ClHQVeohgzpfS590ufY9NZo2%2FI3GufsB3a7%2FMRBDPbP%2FZokG&X-Amz-Signature=7bce86743ad1c8802cc4241e1037da2b0c87a2dab1095bcebf47dee69b128211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

