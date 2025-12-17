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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWLWSUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLnNs%2BbqR2dR9AeKSrfttAbs2AzwA%2FecG6c9ci2wkxYAiEAww9f14YZrUYuP3i2OPnqRvxo8x36LidNGzVWiS2ba9cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq0XywrT4E4qUcdTSrcA4yFoEWgzTFyEKAG0aYx3yNMfxA74jdBDcYmYIPSSL7qiwLaCZScy2qQgspzoC8ZSkc5MOfwdssHFYIkxylg64c5EmftHb%2BedJpj1fXoTVakIQQxD6OUI9OE3uXSxgMMo9LbfcstnMCyRfAsOt9cbri%2BrKOFa33smohBFAuE1sy7M7PUTXMV12q9IvTSidkOqhpFJUGusMzsOtBs%2BpM4lM6ieaGXb09EzZ40prKAzzbRTTCaA8s8kvfzMz0AoUZhg%2B9vkvuc1olNF7nTyxWbu%2FuivXUS8%2Fc%2B9hkGnS7LrCp2%2BnKcvosRNLBZOKpxXAxc482You31Kb6ODYViFlMnXnd6q2LqZk3QOoCGDFythTQWMm3U%2BVMQDBWuvMl0znxY5DIMVT%2FuOw4IxaDAKabk0OA6htDB4SWB9vGU%2BsdFoisO6iBgUpB83mMS0ZOF3CZvVL%2FotlGqEDV5t%2BY4s6kegjiaL2y8qRPKDy%2B0M%2BBSWEl63jhVHN5QHlc7DgQUUyqDlh1eCUNeuFTJFu4PoYxPgRfHGgHfzaKr9gpe6Mr49fkfCsMf4B37slcXGJyF8%2BbwkkKeX%2FU%2B33dTqMRdHhDMeUh4jKs7hC5igUr7IzpqppjB64tvhEz%2FqR3wKmiHMKmujMoGOqUBM6F7vssTxI1fX81A1InirTslmjV%2BqXN8vKyShOTgRuqIgxiQXol6bqgwzusX0l6PIx4hTNDZ7SgwM3Rsxy7tsryfd9JqJqvpWGhSsYwLDqSe3160%2BLyRYdzDLHhcLSZvAmTF99xsPe6p1pVbekZM2%2B8aMB8jlPHiJ24arSOwbheUbDBBEiuTVQUsGRAwHqUqUCLmxBOyJddkyoNP%2FE8i2wPUBLkC&X-Amz-Signature=24b09891b816bbbc5c31c99dd8431650824c474fe85f2fa9635a98d6c349292e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIWLWSUD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLnNs%2BbqR2dR9AeKSrfttAbs2AzwA%2FecG6c9ci2wkxYAiEAww9f14YZrUYuP3i2OPnqRvxo8x36LidNGzVWiS2ba9cqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq0XywrT4E4qUcdTSrcA4yFoEWgzTFyEKAG0aYx3yNMfxA74jdBDcYmYIPSSL7qiwLaCZScy2qQgspzoC8ZSkc5MOfwdssHFYIkxylg64c5EmftHb%2BedJpj1fXoTVakIQQxD6OUI9OE3uXSxgMMo9LbfcstnMCyRfAsOt9cbri%2BrKOFa33smohBFAuE1sy7M7PUTXMV12q9IvTSidkOqhpFJUGusMzsOtBs%2BpM4lM6ieaGXb09EzZ40prKAzzbRTTCaA8s8kvfzMz0AoUZhg%2B9vkvuc1olNF7nTyxWbu%2FuivXUS8%2Fc%2B9hkGnS7LrCp2%2BnKcvosRNLBZOKpxXAxc482You31Kb6ODYViFlMnXnd6q2LqZk3QOoCGDFythTQWMm3U%2BVMQDBWuvMl0znxY5DIMVT%2FuOw4IxaDAKabk0OA6htDB4SWB9vGU%2BsdFoisO6iBgUpB83mMS0ZOF3CZvVL%2FotlGqEDV5t%2BY4s6kegjiaL2y8qRPKDy%2B0M%2BBSWEl63jhVHN5QHlc7DgQUUyqDlh1eCUNeuFTJFu4PoYxPgRfHGgHfzaKr9gpe6Mr49fkfCsMf4B37slcXGJyF8%2BbwkkKeX%2FU%2B33dTqMRdHhDMeUh4jKs7hC5igUr7IzpqppjB64tvhEz%2FqR3wKmiHMKmujMoGOqUBM6F7vssTxI1fX81A1InirTslmjV%2BqXN8vKyShOTgRuqIgxiQXol6bqgwzusX0l6PIx4hTNDZ7SgwM3Rsxy7tsryfd9JqJqvpWGhSsYwLDqSe3160%2BLyRYdzDLHhcLSZvAmTF99xsPe6p1pVbekZM2%2B8aMB8jlPHiJ24arSOwbheUbDBBEiuTVQUsGRAwHqUqUCLmxBOyJddkyoNP%2FE8i2wPUBLkC&X-Amz-Signature=c4f80d1bf398ce92969f62d836efe4a0d9c091ddac25c17a9853f5cc79417063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

