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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A3WPSE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNQt0nnydpeZrbtY71S0SMK9%2FTRI1TgjBV3jswSZBz5QIhAJ76iukAdzFAUAbJdYKqMEbd%2BIY8yWn7F0PcQU43ky42Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxNKkBLHWUg5Qn%2FrPAq3ANlqg4CWYtk41K4l0CezvMljTQnS0o4yxtkcVct7%2BUnOEcJct1sHXaCT%2FOkWG3kaWdYdJ1EL1yxogdQ2C5PL%2BjWkq8J97%2FhgBnTkXy6bxVZjA5G6l6QIT13azX9zlxJllNs6Wkk1mYOAZuxTTgAWJ7ZhE2caEC2ywRwvOg0LZwZYeZJNaWURDsC7ngJsr5JYWYQ9mKf5jTrTE9p5JNrrA71oEnngcKS%2BoZSGi5%2Fa%2BQiIOY8K%2BnEC%2FCK%2Fs3zGTblW0kQ1lD%2B1wbCpmnxDKrOt%2Bl98JnousuGHDWgXYR%2FZVBwrH1ZmW08Taq0vKNclAaDB3BXTvNGUGNqdYvJsHfEaaUJh%2FPZ%2BD3RU4miRXyjDHlV1nCKqpJd9Z2WnyAoDvOxJBmiOYNDFRKrb94ENz8LJfFc6%2Bwzt23fbjL8MzIJS6z18AlLkcwOjMeg57EcagU0dtF1CofmouqRUlZp7cOUXqAJQawzLBOxRsKl3ZOPq4nRo76iSorUY6%2BN2HnfvqMJvBayNE90dmh5LBYDOTdiSB0OUn4x19S6NEzNs8DU1QHwedEJWZh4Q6x4AiKXTa5qcavZjZPUZWrDCC9qOEDDYMYu4J0DB9kclgUEQ5LyMCWdpbZSrr0uI0xTxCzY%2BTDj3ofKBjqkAYEQP0fAVb5LIFkoMa1MPBtQvVnWn1FlTIrCeJ3m9C%2FcoPZKm26b88ku57NsdKFr%2FvPI3dCORRG8YabbF5fJ9Gv2TLzYbqrHW5RkRMbs2HTl688gTncZKQoP6%2FB3aeiTNlwMebdrVDdaNvEW%2BNeIUJeNlmrMtpj%2B99Bwy%2FHoL1GA8l6myi05byrpqy27utMX57pus%2BClcyGgYxGswq7OdbEnjYcY&X-Amz-Signature=fa1e4f009d14f45afe0856a36121b3e7763e1745135b5cbc9b004f3af9268b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A3WPSE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNQt0nnydpeZrbtY71S0SMK9%2FTRI1TgjBV3jswSZBz5QIhAJ76iukAdzFAUAbJdYKqMEbd%2BIY8yWn7F0PcQU43ky42Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxNKkBLHWUg5Qn%2FrPAq3ANlqg4CWYtk41K4l0CezvMljTQnS0o4yxtkcVct7%2BUnOEcJct1sHXaCT%2FOkWG3kaWdYdJ1EL1yxogdQ2C5PL%2BjWkq8J97%2FhgBnTkXy6bxVZjA5G6l6QIT13azX9zlxJllNs6Wkk1mYOAZuxTTgAWJ7ZhE2caEC2ywRwvOg0LZwZYeZJNaWURDsC7ngJsr5JYWYQ9mKf5jTrTE9p5JNrrA71oEnngcKS%2BoZSGi5%2Fa%2BQiIOY8K%2BnEC%2FCK%2Fs3zGTblW0kQ1lD%2B1wbCpmnxDKrOt%2Bl98JnousuGHDWgXYR%2FZVBwrH1ZmW08Taq0vKNclAaDB3BXTvNGUGNqdYvJsHfEaaUJh%2FPZ%2BD3RU4miRXyjDHlV1nCKqpJd9Z2WnyAoDvOxJBmiOYNDFRKrb94ENz8LJfFc6%2Bwzt23fbjL8MzIJS6z18AlLkcwOjMeg57EcagU0dtF1CofmouqRUlZp7cOUXqAJQawzLBOxRsKl3ZOPq4nRo76iSorUY6%2BN2HnfvqMJvBayNE90dmh5LBYDOTdiSB0OUn4x19S6NEzNs8DU1QHwedEJWZh4Q6x4AiKXTa5qcavZjZPUZWrDCC9qOEDDYMYu4J0DB9kclgUEQ5LyMCWdpbZSrr0uI0xTxCzY%2BTDj3ofKBjqkAYEQP0fAVb5LIFkoMa1MPBtQvVnWn1FlTIrCeJ3m9C%2FcoPZKm26b88ku57NsdKFr%2FvPI3dCORRG8YabbF5fJ9Gv2TLzYbqrHW5RkRMbs2HTl688gTncZKQoP6%2FB3aeiTNlwMebdrVDdaNvEW%2BNeIUJeNlmrMtpj%2B99Bwy%2FHoL1GA8l6myi05byrpqy27utMX57pus%2BClcyGgYxGswq7OdbEnjYcY&X-Amz-Signature=a298949c7a41d46b3ab6366e48e0a46a110604af765dc6dba1c67fd3f0029058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

