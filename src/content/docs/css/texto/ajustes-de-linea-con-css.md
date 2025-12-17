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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2LICHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPZMtEFzhIR9%2BDc37p1yBQzspQ4jO%2BGkgVnWaAwGA5AiEA0%2B6oyZoZpolc%2Ft%2By9ONOQIxjbRdKHePoDoOOzql82eEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHbvslRK71l%2BJXmoyircA9s1Unhxc921LwW39RsU4nphLTT7Ybm3iaCYYk1PILMGnk6tZUZQX4P4TD7OKL%2BErnCNtM7MJOdN59ZG4cRsoAiFAE7LJV5TQLYX0klp%2Bn67SPMywRms9TaZ3sVwWHgr1wXTNljXAhRYWDi%2Bd%2FqXVBJ2mKB3I%2BjdGaDYtKOPcyaX4%2FNZ630YLXNEt2JSalff4%2FNngjalmUj1uWH1z%2BNuzNN1dewfsE0g7siXH3qIHjeZEW29PhgSY%2FXhCa52gfRJpsVGmMdnjt76gNVbtbjsxxMakOZGWYQv9fB7HRNy7qz0QEuFAC1eHh%2F4CfLLVHClMkwUGaayRSaEreSGzrZcRl5VsuGl7CmHENELyts4GkuNufWIim0bcK2uvt%2F4S1N33PgjIFs4akyBQ965BjSvW%2Bz4D5G9ghnl1We4%2B1746A8ABUtaTY6zx6MUmCrUet%2FTSeGIj7HIqJufcFBDt%2BYmCpionA47xAtiiU45zupJHWJiL3O09ZaE4g4bO1TFMFfeP%2FJ6qJSrhEL9%2BCPPRVDBMbentQs8s%2BnfQDy7T9LOyPdG%2BoxdyS2uA9G%2BMmGKznV%2BzKsCNEWcpeUzhqEda5snwcZ0S6xTi%2FBGVPkoEb7XxZrPRrMaro%2F2Hhu%2Bb8ybMISWiMoGOqUBwGivZkO%2FtKrmJ2dGT8ZAOcS1pCwFnxnmt5R%2FmQFThPTYjlTCttiYiXAlY1aPA0lr8Ju0J9xw697evnFJOLDAdAnpDpEw%2BP8o6mXN%2FK00nvlKZlIQRup5rGT%2FvlDp1MzaxSe2e4InRYVkd42ZFqb0PTKnkJ91XU8BG0Jh89iPNXHfD7tC%2BMLe2IZ%2F%2BOuyjE1UJTyGJOX%2Bp9cIGn0tdQppQZq1tfU6&X-Amz-Signature=083935f05021ac7aa43764119ef1986c6b47b8664c663c6b6b5d0bd8f525a5d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2LICHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDhPZMtEFzhIR9%2BDc37p1yBQzspQ4jO%2BGkgVnWaAwGA5AiEA0%2B6oyZoZpolc%2Ft%2By9ONOQIxjbRdKHePoDoOOzql82eEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHbvslRK71l%2BJXmoyircA9s1Unhxc921LwW39RsU4nphLTT7Ybm3iaCYYk1PILMGnk6tZUZQX4P4TD7OKL%2BErnCNtM7MJOdN59ZG4cRsoAiFAE7LJV5TQLYX0klp%2Bn67SPMywRms9TaZ3sVwWHgr1wXTNljXAhRYWDi%2Bd%2FqXVBJ2mKB3I%2BjdGaDYtKOPcyaX4%2FNZ630YLXNEt2JSalff4%2FNngjalmUj1uWH1z%2BNuzNN1dewfsE0g7siXH3qIHjeZEW29PhgSY%2FXhCa52gfRJpsVGmMdnjt76gNVbtbjsxxMakOZGWYQv9fB7HRNy7qz0QEuFAC1eHh%2F4CfLLVHClMkwUGaayRSaEreSGzrZcRl5VsuGl7CmHENELyts4GkuNufWIim0bcK2uvt%2F4S1N33PgjIFs4akyBQ965BjSvW%2Bz4D5G9ghnl1We4%2B1746A8ABUtaTY6zx6MUmCrUet%2FTSeGIj7HIqJufcFBDt%2BYmCpionA47xAtiiU45zupJHWJiL3O09ZaE4g4bO1TFMFfeP%2FJ6qJSrhEL9%2BCPPRVDBMbentQs8s%2BnfQDy7T9LOyPdG%2BoxdyS2uA9G%2BMmGKznV%2BzKsCNEWcpeUzhqEda5snwcZ0S6xTi%2FBGVPkoEb7XxZrPRrMaro%2F2Hhu%2Bb8ybMISWiMoGOqUBwGivZkO%2FtKrmJ2dGT8ZAOcS1pCwFnxnmt5R%2FmQFThPTYjlTCttiYiXAlY1aPA0lr8Ju0J9xw697evnFJOLDAdAnpDpEw%2BP8o6mXN%2FK00nvlKZlIQRup5rGT%2FvlDp1MzaxSe2e4InRYVkd42ZFqb0PTKnkJ91XU8BG0Jh89iPNXHfD7tC%2BMLe2IZ%2F%2BOuyjE1UJTyGJOX%2Bp9cIGn0tdQppQZq1tfU6&X-Amz-Signature=4b0e6319730584d0a585eb340d4076e534a79dce87c8fa7d515eef0d8422231e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

