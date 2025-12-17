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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBKRVMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXbV5vMQXQN3l%2B1v7wv1FfPQKcAP4S%2F5%2B9bIi%2FhaD9RAiBeqRu5N7aVSxWfpCDQzNd76eM9MaA6xZYhLuqUvBJqhir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWULPx1OutoBf5MLWKtwDovyf7M9o0cIzD5Q1asJDPWxEwnClEE%2BMYr6TTqCDUai38m0AcaknFRDnv7y%2FwED94KZGRN5vAReSEiKAuPwRw7AN5yjyCgDRsL7e%2FR0BmPIQ1VIW%2B4rBZTyYMIeWJaooXvEpMtWbz1Ek21tPynruWlMY4yhKQvv2fWgN6qhStVhTC%2FiHXrE%2FZM4Z%2Fn5Vbs6rKIQHQaQC5NES0tNUX%2BuY9DQ61VaMSRyyEfiswKFH6WNw5pdbzUHUkl1AtiT4Al8yQAJrBdKK0Aov1e24%2FMoKpLc8DZehyWTYpeSHXt7sbhMKk7pBhaVSOBB07n%2BXZbK2lfLNq9%2FweFy%2B6TRyyw%2FjqMqQ%2B5jcuexv%2BfOpmPMdQBtYsZWCs5VKT9eEp9lu5MW9zCZ0cHno12gWZHBfX13qmoyc68e0JqM7N0fvByM%2FesjQ%2FpOBt1GrhtftqAfAonq5O5ubU02OyPp7rH1jbot7H5q6pJMJCOC5qM3%2BeUZMbm448IWeHXeTdDkk5V8c29DUjMdkayzb5bdlzNFOEo23hIGs0AWDgCKB%2B1Lj5DY31WOrWz190gwK9B76XXpW74MWiIwJPh0Mtsp8r85xjOgHDbOJpxpcw1iVmuFIlI1sFjd5WxkPRBfDu9%2F7eBQw9reJygY6pgF0po1r0tWk0b5PtCjiZdlZpTYWJjMf%2FbL5r0r5b7rginGgefl9ZYQTQu3NNFPPAujqrr4ItdhCk4GeuLhZmAU8pymO%2B56sUaJRYa71EPtUl66lYfkXS%2BrEWg5rWtXsT0pLqTjaVDyhYWlGb3jR%2F7WN71WU2zM2qW1AHBpjcuq71K7JfunP%2Fka9VVtL9xTpfDKZZsIkDNizqBsJxGR7YDlvwauwCZT7&X-Amz-Signature=b3649c63c33fc270545fe1d4a66cc9a56c227853f9788c4136ff87926a858407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDBKRVMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAXbV5vMQXQN3l%2B1v7wv1FfPQKcAP4S%2F5%2B9bIi%2FhaD9RAiBeqRu5N7aVSxWfpCDQzNd76eM9MaA6xZYhLuqUvBJqhir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMWULPx1OutoBf5MLWKtwDovyf7M9o0cIzD5Q1asJDPWxEwnClEE%2BMYr6TTqCDUai38m0AcaknFRDnv7y%2FwED94KZGRN5vAReSEiKAuPwRw7AN5yjyCgDRsL7e%2FR0BmPIQ1VIW%2B4rBZTyYMIeWJaooXvEpMtWbz1Ek21tPynruWlMY4yhKQvv2fWgN6qhStVhTC%2FiHXrE%2FZM4Z%2Fn5Vbs6rKIQHQaQC5NES0tNUX%2BuY9DQ61VaMSRyyEfiswKFH6WNw5pdbzUHUkl1AtiT4Al8yQAJrBdKK0Aov1e24%2FMoKpLc8DZehyWTYpeSHXt7sbhMKk7pBhaVSOBB07n%2BXZbK2lfLNq9%2FweFy%2B6TRyyw%2FjqMqQ%2B5jcuexv%2BfOpmPMdQBtYsZWCs5VKT9eEp9lu5MW9zCZ0cHno12gWZHBfX13qmoyc68e0JqM7N0fvByM%2FesjQ%2FpOBt1GrhtftqAfAonq5O5ubU02OyPp7rH1jbot7H5q6pJMJCOC5qM3%2BeUZMbm448IWeHXeTdDkk5V8c29DUjMdkayzb5bdlzNFOEo23hIGs0AWDgCKB%2B1Lj5DY31WOrWz190gwK9B76XXpW74MWiIwJPh0Mtsp8r85xjOgHDbOJpxpcw1iVmuFIlI1sFjd5WxkPRBfDu9%2F7eBQw9reJygY6pgF0po1r0tWk0b5PtCjiZdlZpTYWJjMf%2FbL5r0r5b7rginGgefl9ZYQTQu3NNFPPAujqrr4ItdhCk4GeuLhZmAU8pymO%2B56sUaJRYa71EPtUl66lYfkXS%2BrEWg5rWtXsT0pLqTjaVDyhYWlGb3jR%2F7WN71WU2zM2qW1AHBpjcuq71K7JfunP%2Fka9VVtL9xTpfDKZZsIkDNizqBsJxGR7YDlvwauwCZT7&X-Amz-Signature=6ab585b86aa92c4dde76c91da5b94489b67ad7c43a31de53ab8c2d89d7621b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

