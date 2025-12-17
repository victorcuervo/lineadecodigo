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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q32OO733%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5CTUCqSPC%2FF0o1WMlYzNEtXUO31IdFKbl6ID4TEGZAiEAs7N%2F%2FW03H1FqiHp%2F%2FYs46csyGhvCeyr9xiIO5Za9hZIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrssSzM4D9KIWgWkSrcAx0uVUhkxff3YvLsB%2BK8EHLkKWMxdZ%2FEHtm9ZQJ6bLR9gL%2BNezp1d0Kfp%2FL1LuEBNf5rnL1fyh7tK2XZnpG3POXIETsmU%2FovVYf5ixDRM0KbwFFvlLaE6LZ0IE0uSaSD4XlXtn06ozLdwhEatLQAAe5rOhfPUXxjgoGllCaJ3mgk%2BVbfoYD1VKTPDV7krQ%2FNhYkvZPsFb3qZrcYX9gGibyBwMXJYGvcPFjqpHDxyQe90UUTBatiDYLmYNEx3Ha0fLTQbCs7z1tl0wcSTsYlM9eBgfcFnmBwWN94Rd8RtBNEmzsCclQLBN8kZ7fViRWtcc1hhkQq11hnvXy9aCSxclnJ3GFEBnL8NIv9hnxCvbyVbyb9yltWjGvXJ8pIJkWjwShqGvzl3zn6dE%2F2oKRJJSyiJQlO3m6Mct9LJlCGMPWMRFsQnNw6FqRCkaIVAM1PqCe1wgyd90Dp%2BmbrSslyqbDOWia7%2B50Q6UNTmiZjzj%2FU6bxtO8kT8Dll%2Fr9rI9u7yGQlyPP%2FRaNew53JldpOzG5McXTT%2BXAIJKh5%2BG8ve9MgTnAMCGcwmS5WBgUGwmlf7poV1XvnHEDZe4km6X3SA5IpgVTxGVvhUwOE9qFSZkUsd7nEj6deNnAL2So%2ByMKufi8oGOqUBedtMjN9T7sQaYx8FO8znSYikUnmpG0D1QAVkf7wLrOadYzMFB8Rx9g4wOHaCF7VKVayRKOtkpq%2BS7Sptzco5OGg%2FxiJYuMK51qKQc2BpTzFbtZIQIq5MmKXD%2B3UMbVnKu55dwxxkYsRUX1fQf9KOT8afDfH6U6YUrg5Bq2Q6EEZQxJbkd9ChAi8f7RgBOwrkMzV3uvUWiYplJQ3EGO3HsewtiGBb&X-Amz-Signature=35b7992ccc8debe1a28a73004491127224cf190a41992cbc66c5432ef518d4be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q32OO733%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEC5CTUCqSPC%2FF0o1WMlYzNEtXUO31IdFKbl6ID4TEGZAiEAs7N%2F%2FW03H1FqiHp%2F%2FYs46csyGhvCeyr9xiIO5Za9hZIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrssSzM4D9KIWgWkSrcAx0uVUhkxff3YvLsB%2BK8EHLkKWMxdZ%2FEHtm9ZQJ6bLR9gL%2BNezp1d0Kfp%2FL1LuEBNf5rnL1fyh7tK2XZnpG3POXIETsmU%2FovVYf5ixDRM0KbwFFvlLaE6LZ0IE0uSaSD4XlXtn06ozLdwhEatLQAAe5rOhfPUXxjgoGllCaJ3mgk%2BVbfoYD1VKTPDV7krQ%2FNhYkvZPsFb3qZrcYX9gGibyBwMXJYGvcPFjqpHDxyQe90UUTBatiDYLmYNEx3Ha0fLTQbCs7z1tl0wcSTsYlM9eBgfcFnmBwWN94Rd8RtBNEmzsCclQLBN8kZ7fViRWtcc1hhkQq11hnvXy9aCSxclnJ3GFEBnL8NIv9hnxCvbyVbyb9yltWjGvXJ8pIJkWjwShqGvzl3zn6dE%2F2oKRJJSyiJQlO3m6Mct9LJlCGMPWMRFsQnNw6FqRCkaIVAM1PqCe1wgyd90Dp%2BmbrSslyqbDOWia7%2B50Q6UNTmiZjzj%2FU6bxtO8kT8Dll%2Fr9rI9u7yGQlyPP%2FRaNew53JldpOzG5McXTT%2BXAIJKh5%2BG8ve9MgTnAMCGcwmS5WBgUGwmlf7poV1XvnHEDZe4km6X3SA5IpgVTxGVvhUwOE9qFSZkUsd7nEj6deNnAL2So%2ByMKufi8oGOqUBedtMjN9T7sQaYx8FO8znSYikUnmpG0D1QAVkf7wLrOadYzMFB8Rx9g4wOHaCF7VKVayRKOtkpq%2BS7Sptzco5OGg%2FxiJYuMK51qKQc2BpTzFbtZIQIq5MmKXD%2B3UMbVnKu55dwxxkYsRUX1fQf9KOT8afDfH6U6YUrg5Bq2Q6EEZQxJbkd9ChAi8f7RgBOwrkMzV3uvUWiYplJQ3EGO3HsewtiGBb&X-Amz-Signature=d506fbc5506dcb8b228b6c1e91ff130e4f5e03acdb2472de07e8e92a4e2141ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

