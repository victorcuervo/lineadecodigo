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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHFFFDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNnRXd5l4CT4%2FN2qzUczgbuIJQjywosqCt4ZwdCGVOBAiBeNGj1DY4%2Bxj5E8n%2BPAG0g5ZdZWZJXIQ0LRV3oZaU4Xyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnKQLRwhnr25WiTnJKtwDHTTveKl4cDdIWXgTWwNKFcstSuD4VJxi3E6KB%2FhLN1E5tg259xdQE2rsROrRC3PvcM5Wle1hDz76xJ8%2FI7t%2FPtajlWoU3UeS8b8Avi6v8FACHH1nHltpV42Jzk%2FTFhwM9abMBBGkcH4%2BvZZqNMyDRSj7pNNLQP9MOwVgHLTxgstQFrDxINrvbcU31Yxo%2Bn7crs7I3D%2B6gj0UwZ2v5U3FYFUuZk8szQE5cvbSwcpRJkGXHlqm8SHebBc%2B2VwJjhLaDjF6cDiJ8a5m4syrKfi4m2%2FVNF0iZeV4j7BB8IvPwXhVkSiTuYD%2BtUtUc3YUP0MYGc1u%2Fw9%2FZ8wBHDokX5oMHZ77SiBCwkwUIPbm7X5WWrH%2BeJYT%2FHlhaRMuLVDE4cHUsqeydRS7p4cFnlhzx5ON9iw%2B8O5b1FwpPGhyZRy7KuYDRhwCeG225YlL5aaFfxjzeYKvUdTMghJgz1kQ2qFb1cDZcZ5y2%2Bid1JSZFC%2B7qe8TsdSlAd4ABrObTT6zF2lJqvfXa56%2FlyjIzwP2k%2B2v%2FIBC9s1HHRiAu0Tr0ix7OFTnZhfcZCGhEwLYJjDmG9MtWEJKquJFOhrrBZCe0Cw%2F6gQ8KOkDwQYbMq06BGGBkPmpdNb5JBXNRqwTBaMw052JygY6pgEJiw%2FcM9GYACoW7CUSqJZ%2B5rVfQ24tqQ85TpuP%2Bd3TIjuxjLOR8z7nb2tl%2FBjIJwRMt6inqJu2iEk2EWrZT9MnLjU%2BevVrlYhSfWyXA8eE4Bp7rjips1nQmTRIuOf2F%2FXLbxYFetVSiGe6tBt%2F7LwXw4mTCvouKE08qOAXc7bV6hzdQK0mxKpW82u1ibtm7J%2BSpgRNk8Z0GIwrdaXW40lESa4q4zwe&X-Amz-Signature=ebee8608e121f41ef3900cb7a00b5bd3f410e736c12f4c060c26ccfcb4fd261d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHFFFDM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNnRXd5l4CT4%2FN2qzUczgbuIJQjywosqCt4ZwdCGVOBAiBeNGj1DY4%2Bxj5E8n%2BPAG0g5ZdZWZJXIQ0LRV3oZaU4Xyr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMnKQLRwhnr25WiTnJKtwDHTTveKl4cDdIWXgTWwNKFcstSuD4VJxi3E6KB%2FhLN1E5tg259xdQE2rsROrRC3PvcM5Wle1hDz76xJ8%2FI7t%2FPtajlWoU3UeS8b8Avi6v8FACHH1nHltpV42Jzk%2FTFhwM9abMBBGkcH4%2BvZZqNMyDRSj7pNNLQP9MOwVgHLTxgstQFrDxINrvbcU31Yxo%2Bn7crs7I3D%2B6gj0UwZ2v5U3FYFUuZk8szQE5cvbSwcpRJkGXHlqm8SHebBc%2B2VwJjhLaDjF6cDiJ8a5m4syrKfi4m2%2FVNF0iZeV4j7BB8IvPwXhVkSiTuYD%2BtUtUc3YUP0MYGc1u%2Fw9%2FZ8wBHDokX5oMHZ77SiBCwkwUIPbm7X5WWrH%2BeJYT%2FHlhaRMuLVDE4cHUsqeydRS7p4cFnlhzx5ON9iw%2B8O5b1FwpPGhyZRy7KuYDRhwCeG225YlL5aaFfxjzeYKvUdTMghJgz1kQ2qFb1cDZcZ5y2%2Bid1JSZFC%2B7qe8TsdSlAd4ABrObTT6zF2lJqvfXa56%2FlyjIzwP2k%2B2v%2FIBC9s1HHRiAu0Tr0ix7OFTnZhfcZCGhEwLYJjDmG9MtWEJKquJFOhrrBZCe0Cw%2F6gQ8KOkDwQYbMq06BGGBkPmpdNb5JBXNRqwTBaMw052JygY6pgEJiw%2FcM9GYACoW7CUSqJZ%2B5rVfQ24tqQ85TpuP%2Bd3TIjuxjLOR8z7nb2tl%2FBjIJwRMt6inqJu2iEk2EWrZT9MnLjU%2BevVrlYhSfWyXA8eE4Bp7rjips1nQmTRIuOf2F%2FXLbxYFetVSiGe6tBt%2F7LwXw4mTCvouKE08qOAXc7bV6hzdQK0mxKpW82u1ibtm7J%2BSpgRNk8Z0GIwrdaXW40lESa4q4zwe&X-Amz-Signature=4eb3368aa4781edeb1fb893617071a8f9fb29f4b0a2bc9f919a641bbaa4ac959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

