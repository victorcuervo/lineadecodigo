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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYQJVS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9KvORNbkePsw58fgCVHWRW0nfBM0j6siglNwcKjU7uAiEAyC%2Fx6taDLjrVOUKXzArTZH0WBToGTpTWfyy9Y4UNyE0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMQGX8hrDQ6BJEgHICrcA0R%2Bs7H%2FLhFlbVWVDj%2B2pwyq2bzyMacO37F%2BTFd%2FMu4jdlc7Zvpgz%2FaaiXGjz%2Bg%2FXeazEssw7NTW2O9WegeHrjl660Uky4Co%2FdQwQOmrPwtSLnmFYg6gvjvh0rFnn8yZrFFCOxt1OZvt%2BlZ8gFwTdiW%2Fgxw5bXumlFaIXh1M5HvJtp6eGMGcaykcip%2B3E1E7DBc592WufHPIU2kVyNbi8%2FZYvC6BWIK1Y%2FrD5qS3YsWrW%2BEb3tPyUK%2FWMJsrWlE9GXd9sohSpEp0%2FGRDsKIiQcf1yCFUhWjk0YDjqdiK9ydPFp5dqjnKKpajnq3cuYYJPvPCArO9G2LzBqlOIvQyJTKASw%2FIYu%2BFR39Bn3Uc1zyKuoE8DiUfttCi77jVIwxqHEfzNId%2BVBe7qL%2BO7xutLD9rzD9gr%2FMLs7Thr6tW29x8LbVuGbTd7vUXz0UaTC8HWCuM%2FZIZ%2FPdcuD1kPrb9DKzthw0Q7C5fSK3fXafLX4yXS3n2GEFzXUESA5qFwJU2cbXgBURhpcDLgO%2BLMmrUfwcnJLnGz0nIhdzKMhrzvlUuIFg7w1%2BptY6qtPrsYmy81uHI7UykHKA110F2FipMkQkuxyIXcGlv7O7tSiq%2B88aC1zLtEFJmy15kMUpLMJ%2BWiMoGOqUBz0dF%2F%2F2riz1GcYfqP0gd8IL%2FUqyNpUZmGum1p2yWljjKnHj5qmXUsxOrXx8U75So9QFMfHYyuTlXG3BX8THTXTHd7IvlQUTo9QDKfffGyRT1kyg3DRZ3%2FRekZA9q2XXpSlrIRVnhg2LmXo1QWNVUoif8tPvMHQc825UbvZ9R%2F%2B8vj4ETvnT9WoYXqgGoVW66vbx777BKSy%2BuD%2BQaIa0eMCIQ0yvR&X-Amz-Signature=7661ac47c92d9d2d5f5146c0cd8ea74725538ff0937db106e5abd869f6b854f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYQJVS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9KvORNbkePsw58fgCVHWRW0nfBM0j6siglNwcKjU7uAiEAyC%2Fx6taDLjrVOUKXzArTZH0WBToGTpTWfyy9Y4UNyE0q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDMQGX8hrDQ6BJEgHICrcA0R%2Bs7H%2FLhFlbVWVDj%2B2pwyq2bzyMacO37F%2BTFd%2FMu4jdlc7Zvpgz%2FaaiXGjz%2Bg%2FXeazEssw7NTW2O9WegeHrjl660Uky4Co%2FdQwQOmrPwtSLnmFYg6gvjvh0rFnn8yZrFFCOxt1OZvt%2BlZ8gFwTdiW%2Fgxw5bXumlFaIXh1M5HvJtp6eGMGcaykcip%2B3E1E7DBc592WufHPIU2kVyNbi8%2FZYvC6BWIK1Y%2FrD5qS3YsWrW%2BEb3tPyUK%2FWMJsrWlE9GXd9sohSpEp0%2FGRDsKIiQcf1yCFUhWjk0YDjqdiK9ydPFp5dqjnKKpajnq3cuYYJPvPCArO9G2LzBqlOIvQyJTKASw%2FIYu%2BFR39Bn3Uc1zyKuoE8DiUfttCi77jVIwxqHEfzNId%2BVBe7qL%2BO7xutLD9rzD9gr%2FMLs7Thr6tW29x8LbVuGbTd7vUXz0UaTC8HWCuM%2FZIZ%2FPdcuD1kPrb9DKzthw0Q7C5fSK3fXafLX4yXS3n2GEFzXUESA5qFwJU2cbXgBURhpcDLgO%2BLMmrUfwcnJLnGz0nIhdzKMhrzvlUuIFg7w1%2BptY6qtPrsYmy81uHI7UykHKA110F2FipMkQkuxyIXcGlv7O7tSiq%2B88aC1zLtEFJmy15kMUpLMJ%2BWiMoGOqUBz0dF%2F%2F2riz1GcYfqP0gd8IL%2FUqyNpUZmGum1p2yWljjKnHj5qmXUsxOrXx8U75So9QFMfHYyuTlXG3BX8THTXTHd7IvlQUTo9QDKfffGyRT1kyg3DRZ3%2FRekZA9q2XXpSlrIRVnhg2LmXo1QWNVUoif8tPvMHQc825UbvZ9R%2F%2B8vj4ETvnT9WoYXqgGoVW66vbx777BKSy%2BuD%2BQaIa0eMCIQ0yvR&X-Amz-Signature=ed8f685a243aab5acd02440ac318e712f9c328016f09cd00e5712e448ed074c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

