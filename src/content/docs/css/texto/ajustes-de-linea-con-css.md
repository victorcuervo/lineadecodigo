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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OWYFK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUUfR5mzVsLHt%2BFwfzMZ%2BkKFhie681Y7N%2BkDUxJF1xjAiAMxvq3Kko5wXlj6Ndc%2BN90fxx3th%2BbCWLVWLs7vDDpbSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMYtMZF47%2FwxFA01LnKtwDsMGOlMCDKGFMpj94j4Adomr8wg5xoL8MlTbxQN%2B%2B7CtFJiKVykEkw19dm9IiCWnpLZz8JR5JfhZ3Xhav%2Bc16Iq42Cd2DHeSLMIu905I8pl%2FfXi2gcFcwaoH7ix%2FNQLoF%2B4ffYIW6o52z4zi8Y60hI1QBnUdfAUeIKxiFrE6FCigGNyhg7GRB12Z9xtA%2FBbK2WPeMxm4Lix12ljUwG%2FZSvadzbLJHiByMG4%2FLSsEp4gE6erGwHdt7qacQH5VBGM8rS5sAT8IkdE1CEp6wd6K5QivbBL9%2Feo9cM%2FGQcVAvxuPaTmzBiMD7wqVOno23v3sSt5XJut%2BqaBg1FOeO15zqBtysDHUZ%2Fyz6Vk9TxWaV0qycRZdq0YVdZkgrhjJtsBMp6rDILoJ3rkg09jAcjhV4skNZ6z4m93kRGwy5OfMLUP15ZK3FO%2BaHvXGeEWWEtWdQ06O0u5Bj2JlojowNp79z52iCWMqpetL3BTnekEb%2FMxIQ7b6SzXsq6AW60fRpi4lbu581q9gJqcog%2F4GtZKFlbPF7SEjnSSsFkerfFXxOuyYAa0iRNMDHmCyuxoqnA0r2u%2B%2FI6QZM1MUwulszXxco3vMn%2FfDn1XSjJEeR2tVSceafk%2FLAvGHTHK6igQ8w2qqKygY6pgEvPaRCn6fV2KTaNfpTcKwSOR8WFunsriIbStpJ4lIPyM%2FaL0OUj2FFgeVoeZ1pE0EIn7wHH1CEUeT%2Fqxk5r8AOcDVkEHfHktJ0fZ62a71BDONYkbs%2FEtbGNmxMEKRe3Xy4vm2V%2FsZH5mn04LrA9FSPxExOR2UhiT2bIX6tNOXE3uTZblJW8NYfxPASBzm5%2Bn7LshECUegq9rhPQkT%2BtxNlUEJofpje&X-Amz-Signature=eb803f84adf6ff4d9d62e6018c0dbfa81210063e85e18f535b8d7f0e1d0528ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2OWYFK3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUUfR5mzVsLHt%2BFwfzMZ%2BkKFhie681Y7N%2BkDUxJF1xjAiAMxvq3Kko5wXlj6Ndc%2BN90fxx3th%2BbCWLVWLs7vDDpbSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMYtMZF47%2FwxFA01LnKtwDsMGOlMCDKGFMpj94j4Adomr8wg5xoL8MlTbxQN%2B%2B7CtFJiKVykEkw19dm9IiCWnpLZz8JR5JfhZ3Xhav%2Bc16Iq42Cd2DHeSLMIu905I8pl%2FfXi2gcFcwaoH7ix%2FNQLoF%2B4ffYIW6o52z4zi8Y60hI1QBnUdfAUeIKxiFrE6FCigGNyhg7GRB12Z9xtA%2FBbK2WPeMxm4Lix12ljUwG%2FZSvadzbLJHiByMG4%2FLSsEp4gE6erGwHdt7qacQH5VBGM8rS5sAT8IkdE1CEp6wd6K5QivbBL9%2Feo9cM%2FGQcVAvxuPaTmzBiMD7wqVOno23v3sSt5XJut%2BqaBg1FOeO15zqBtysDHUZ%2Fyz6Vk9TxWaV0qycRZdq0YVdZkgrhjJtsBMp6rDILoJ3rkg09jAcjhV4skNZ6z4m93kRGwy5OfMLUP15ZK3FO%2BaHvXGeEWWEtWdQ06O0u5Bj2JlojowNp79z52iCWMqpetL3BTnekEb%2FMxIQ7b6SzXsq6AW60fRpi4lbu581q9gJqcog%2F4GtZKFlbPF7SEjnSSsFkerfFXxOuyYAa0iRNMDHmCyuxoqnA0r2u%2B%2FI6QZM1MUwulszXxco3vMn%2FfDn1XSjJEeR2tVSceafk%2FLAvGHTHK6igQ8w2qqKygY6pgEvPaRCn6fV2KTaNfpTcKwSOR8WFunsriIbStpJ4lIPyM%2FaL0OUj2FFgeVoeZ1pE0EIn7wHH1CEUeT%2Fqxk5r8AOcDVkEHfHktJ0fZ62a71BDONYkbs%2FEtbGNmxMEKRe3Xy4vm2V%2FsZH5mn04LrA9FSPxExOR2UhiT2bIX6tNOXE3uTZblJW8NYfxPASBzm5%2Bn7LshECUegq9rhPQkT%2BtxNlUEJofpje&X-Amz-Signature=c37535f99f21e6aef742fe15d7b38c172e60ed800bdd990a1cb43b581020db93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

