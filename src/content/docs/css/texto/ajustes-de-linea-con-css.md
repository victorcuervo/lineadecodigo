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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6F25M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADSvLgp2lBCnqsR1fGGDc%2B0o%2Bhkmx4D5WAwcO6IayQXAiB16fXMmKxTCiXIN663%2BHYJ%2BWDZEONaT8nYcE82PSkS1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOLIdcciPIxEAgDUrKtwDRBqbzKOtlf1zGvaVCIVzPv7ZAJo9FFRkK5dlPDN6mCabvDYElPusSTSqW7wJbruczt5ylOityAhzWHQg3BbNNURm371e0Alb0juZ%2Ft9soaMrIjG6%2BWwHPAzIZrrEXeGBk4ma7y1AOabdq3cA4Np1wnMAz3PFQuH8SHrk4prW6IS1VIfnjsYkT8taw3yssVlku%2BOd2lUjEw2%2FT5SefXNYZZ7l5zSt4b6jtnTmnSRRD2GUCwuyFAlQ8Dmdgi8pZ8%2BkYaOeEbOkZMAk0wElrN2xjkwUsTO5MQsO7LMrvzvjy1xCywcdVuRZId0Vnr9bwFPvlYOjeZxoxv4%2BQ6fpEMF2u%2BofJujwWuhojSRiV8eiUeGe5SXmpdoqHDjlNAu8OYGyb386RZvAvi%2BGbun6YcE9xNBau9Y%2Ba0fLU3viuoFTGy9EXnveFoXXx4zgVW0OhlBzuX9vqRRXwmjfbNh6Zaca%2BdSgv3ozoI0agY%2BWqTC9JlXmuOVzM5V5zmOQDytX1pZ80xm9va7lETPq%2B2q20VAGy98IYQvS4yR99WMZios95LfHSUXLID7OFOv9tGljrbcEXcKXSFsNpAzaITh1bJLcIv3u%2BLNQ%2Fax1xLkHTZhx5pOl2zPyLxS%2FWH8fw%2Bgwq5%2BLygY6pgG1wKix0VZL6YBhZ%2FnO9BChs7WaEuMQ9LHxgStRH5iPke54yNfn%2Fk0YEWHjbO5%2B3NaJAFGaPZgUnQV3XVyaewlgulHTbtinFOz8%2FEqDxMdoynJiM%2F6CxKv4klDCq70O0GaH%2Fpqkehc9Ick5HVQJEaKNkHIQ9f6Nteohqya1GntHhBFm91sd%2BRk49uaw2NY5v0vbzQFlBfdltTjsuiDeL5N9foJCEOGc&X-Amz-Signature=6b2041c94cf164cb881922803a934a765857aba97e6ce76ddd738d91f4c50fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLK6F25M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADSvLgp2lBCnqsR1fGGDc%2B0o%2Bhkmx4D5WAwcO6IayQXAiB16fXMmKxTCiXIN663%2BHYJ%2BWDZEONaT8nYcE82PSkS1iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOLIdcciPIxEAgDUrKtwDRBqbzKOtlf1zGvaVCIVzPv7ZAJo9FFRkK5dlPDN6mCabvDYElPusSTSqW7wJbruczt5ylOityAhzWHQg3BbNNURm371e0Alb0juZ%2Ft9soaMrIjG6%2BWwHPAzIZrrEXeGBk4ma7y1AOabdq3cA4Np1wnMAz3PFQuH8SHrk4prW6IS1VIfnjsYkT8taw3yssVlku%2BOd2lUjEw2%2FT5SefXNYZZ7l5zSt4b6jtnTmnSRRD2GUCwuyFAlQ8Dmdgi8pZ8%2BkYaOeEbOkZMAk0wElrN2xjkwUsTO5MQsO7LMrvzvjy1xCywcdVuRZId0Vnr9bwFPvlYOjeZxoxv4%2BQ6fpEMF2u%2BofJujwWuhojSRiV8eiUeGe5SXmpdoqHDjlNAu8OYGyb386RZvAvi%2BGbun6YcE9xNBau9Y%2Ba0fLU3viuoFTGy9EXnveFoXXx4zgVW0OhlBzuX9vqRRXwmjfbNh6Zaca%2BdSgv3ozoI0agY%2BWqTC9JlXmuOVzM5V5zmOQDytX1pZ80xm9va7lETPq%2B2q20VAGy98IYQvS4yR99WMZios95LfHSUXLID7OFOv9tGljrbcEXcKXSFsNpAzaITh1bJLcIv3u%2BLNQ%2Fax1xLkHTZhx5pOl2zPyLxS%2FWH8fw%2Bgwq5%2BLygY6pgG1wKix0VZL6YBhZ%2FnO9BChs7WaEuMQ9LHxgStRH5iPke54yNfn%2Fk0YEWHjbO5%2B3NaJAFGaPZgUnQV3XVyaewlgulHTbtinFOz8%2FEqDxMdoynJiM%2F6CxKv4klDCq70O0GaH%2Fpqkehc9Ick5HVQJEaKNkHIQ9f6Nteohqya1GntHhBFm91sd%2BRk49uaw2NY5v0vbzQFlBfdltTjsuiDeL5N9foJCEOGc&X-Amz-Signature=991335049b351d65d7725226ba3e506299aa05c7c6b5cb76509e4044f290106d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

