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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O3D43Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFgAXp%2FC%2BeR3zhFEjIYvNeN5vYmZKAen%2FwFAyt8sw4%2FAiBwX7YlhYnlrMcjEJYnKELqnS1IsWz%2BCyUIz8ew3H%2FB0CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BOQjhNLz0D%2BVfjR7KtwD7HAYafjMVPSBTG%2F6MKtl4rpn59Z3u1kAR%2BQD1IOw3qwOKTs0%2BxgZkV55n2ZHDofl8nEEjtxTBDMZxIeCfIsUnebNqjjIepcbpUFdxzznVcQscASLr%2F9pm%2FGIXCE4x5rXn%2FUnAv%2Fo1yqOnj6oBUdNHqebR%2B01hylLCFvx4Y19kee%2FF6%2F6f7KSeRq54Esi1MKU09iF7N09AbBrXp9DuVdUNjeA7VBhQzJ5nOu%2BnsIN%2BnxlrPt9KZm6c%2FT2CPWFScwRU8XdJG6Y9TbahIHU%2FMdHQ68LdjvHTrFNXyFdClWAeyzoLslNKqqtcPjEk2b3W2Qn4UwF3ScYi3gW6omRK9MQiq%2B%2FZq%2BBRltjRbv%2Fetj48PF8THO6s03SqWSrtsZ85rZSTrKHVF1N8jdOqtPxEVNFz9smSZ9c2eIfgvkJfjp%2Fx07hjPGwrwiaKjTuDIQNutTl5S6BaHrLDVGtTnbTL%2FsQr6IjYsHPl%2BUKh7wk1pvW08d4u4yZt234n5UExt6RTA%2FAOBh5lUd55a%2B%2FTWc3XZKdH0aXJLgbSOAVILwiSAVfvkaT9oCWbZQY61EG5yZHlDaGc84LJbkoTMbW082%2BgBCU%2F8pWpvKF7FERUPr2u9dk042wBebCtJ5PkqpAN9wwzJ6LygY6pgGtBHFVXttTqg%2Br%2BuiqwbVmXtjdBn6G7yTiEOew4Y1F3r1bixSbloaUlz20vyHcgHaLCU%2F%2BaP1Flb9WO6%2FW%2FDGrXOQy6q6TfjZC%2BWhDoNjKSuMJBg6f8faIdnTxj9MMlERxPGIxw6UulZyuEHI%2FnptwCpYmhR1rhlme7xgiW%2Bp5Ws6ycSSa%2FRTI9YVWH7boI1rKs7DmmFdeXHyklJC8Rb6DHojZ%2FKG4&X-Amz-Signature=77a07053c5526df1d8acbf0b6aae7329ad8a34b40c48868d4f208ba7e036b1b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664O3D43Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFgAXp%2FC%2BeR3zhFEjIYvNeN5vYmZKAen%2FwFAyt8sw4%2FAiBwX7YlhYnlrMcjEJYnKELqnS1IsWz%2BCyUIz8ew3H%2FB0CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BOQjhNLz0D%2BVfjR7KtwD7HAYafjMVPSBTG%2F6MKtl4rpn59Z3u1kAR%2BQD1IOw3qwOKTs0%2BxgZkV55n2ZHDofl8nEEjtxTBDMZxIeCfIsUnebNqjjIepcbpUFdxzznVcQscASLr%2F9pm%2FGIXCE4x5rXn%2FUnAv%2Fo1yqOnj6oBUdNHqebR%2B01hylLCFvx4Y19kee%2FF6%2F6f7KSeRq54Esi1MKU09iF7N09AbBrXp9DuVdUNjeA7VBhQzJ5nOu%2BnsIN%2BnxlrPt9KZm6c%2FT2CPWFScwRU8XdJG6Y9TbahIHU%2FMdHQ68LdjvHTrFNXyFdClWAeyzoLslNKqqtcPjEk2b3W2Qn4UwF3ScYi3gW6omRK9MQiq%2B%2FZq%2BBRltjRbv%2Fetj48PF8THO6s03SqWSrtsZ85rZSTrKHVF1N8jdOqtPxEVNFz9smSZ9c2eIfgvkJfjp%2Fx07hjPGwrwiaKjTuDIQNutTl5S6BaHrLDVGtTnbTL%2FsQr6IjYsHPl%2BUKh7wk1pvW08d4u4yZt234n5UExt6RTA%2FAOBh5lUd55a%2B%2FTWc3XZKdH0aXJLgbSOAVILwiSAVfvkaT9oCWbZQY61EG5yZHlDaGc84LJbkoTMbW082%2BgBCU%2F8pWpvKF7FERUPr2u9dk042wBebCtJ5PkqpAN9wwzJ6LygY6pgGtBHFVXttTqg%2Br%2BuiqwbVmXtjdBn6G7yTiEOew4Y1F3r1bixSbloaUlz20vyHcgHaLCU%2F%2BaP1Flb9WO6%2FW%2FDGrXOQy6q6TfjZC%2BWhDoNjKSuMJBg6f8faIdnTxj9MMlERxPGIxw6UulZyuEHI%2FnptwCpYmhR1rhlme7xgiW%2Bp5Ws6ycSSa%2FRTI9YVWH7boI1rKs7DmmFdeXHyklJC8Rb6DHojZ%2FKG4&X-Amz-Signature=c81c02ad62aa20a4740441ec8a5b447ae347e0383e02115774a41c52b2e577f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

