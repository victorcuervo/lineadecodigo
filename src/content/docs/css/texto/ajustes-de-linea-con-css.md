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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25WV72M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAoHQWI6qYzay4s5Ih%2BSJGsV3rG1V2p7q4vkyc54xVaAIhALV7xPtcb6bMUTjRVCcntBRWVhg0rUIhAPNeQj44%2BIHXKv8DCHkQABoMNjM3NDIzMTgzODA1IgzXaZQWv5ttGhjRMWcq3ANONku%2FkKeB58%2B3LZl6n%2Fyr89pZmQwOLcb%2B%2BRqoGZJYf7wxZG7KZ9nLy2l4oa8cXuMNQjAorVjSTStrj0jNH91VgJYW39TTqTuVhh%2BXReOLBvtOGJ4zRsZl4H90BJp67wFW0%2Bk9wRVazB1%2FFzscdc6%2FXDlXtYkepte7ZaLlXR%2B0HKrzV8wKaspbyIZkj9O3iwNp3GMnlV6DooVrC8BXGT3NVEtW7DuM02gIqEzuMHb8zLivNtvazv%2B1aIONIQ6oQ2CiRJkuaa5Q6l95jaWjvsPrY5laFSCfHQELMN8AvBJjDNQa2QFORaK%2Bi7NUhD4PaFvGrvZPmK%2FyysHITq6u%2BNeHkwL10bzu34B5Os%2BMLsBAPN5GQ80sGaIOjAfO6jis%2F6vjtkegcwUmTpH4tRBEGciBe5luzuCw%2F3K%2B9JIaXFs%2F%2BeR3Zp4qSaCtG2q8B3zjC8%2BKMJEEky%2BSXmkH9wnDM%2F4DGKTbWp6aSZRMP6IiHeF5I7DeW3vgGWSoxvqw7G4sPe%2B%2B3zcvpTc3jUrW3Rc%2BF8mQv9vj2YHzN7UI%2FN08ggtB2x084u5wOiD2%2Fklxl1nzzguHJ4Ok22OqstpuSnwiVT6Jmo5fcwMHGv5OP3oal%2FNUFp3qICF%2F4gdtK%2FNu4zDo0YnKBjqkARPWsT1HKcxgmNkankWHStSSwBUO9NWjRXonjUyEqG3sllerDoBgvkpUIsbvdRNVbbh4cIzo9BByU%2Fy98DctEw1M6uvcnD7EAHKa4E3ze9klp6BuR2tnfyESLVTkeok%2BvyIMYjmM5688%2FdFpamHoSfuvgxiV2hmTg8nFdAkglh%2FxEFlhn%2BJfVQL4Fkt072LXJOjki%2Foalg1HWhR1%2FU0DCDss6oyo&X-Amz-Signature=db17fd99f0e1c6b33de21009964a05cd2da7f6e16b632be7266bf64e65067a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U25WV72M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAoHQWI6qYzay4s5Ih%2BSJGsV3rG1V2p7q4vkyc54xVaAIhALV7xPtcb6bMUTjRVCcntBRWVhg0rUIhAPNeQj44%2BIHXKv8DCHkQABoMNjM3NDIzMTgzODA1IgzXaZQWv5ttGhjRMWcq3ANONku%2FkKeB58%2B3LZl6n%2Fyr89pZmQwOLcb%2B%2BRqoGZJYf7wxZG7KZ9nLy2l4oa8cXuMNQjAorVjSTStrj0jNH91VgJYW39TTqTuVhh%2BXReOLBvtOGJ4zRsZl4H90BJp67wFW0%2Bk9wRVazB1%2FFzscdc6%2FXDlXtYkepte7ZaLlXR%2B0HKrzV8wKaspbyIZkj9O3iwNp3GMnlV6DooVrC8BXGT3NVEtW7DuM02gIqEzuMHb8zLivNtvazv%2B1aIONIQ6oQ2CiRJkuaa5Q6l95jaWjvsPrY5laFSCfHQELMN8AvBJjDNQa2QFORaK%2Bi7NUhD4PaFvGrvZPmK%2FyysHITq6u%2BNeHkwL10bzu34B5Os%2BMLsBAPN5GQ80sGaIOjAfO6jis%2F6vjtkegcwUmTpH4tRBEGciBe5luzuCw%2F3K%2B9JIaXFs%2F%2BeR3Zp4qSaCtG2q8B3zjC8%2BKMJEEky%2BSXmkH9wnDM%2F4DGKTbWp6aSZRMP6IiHeF5I7DeW3vgGWSoxvqw7G4sPe%2B%2B3zcvpTc3jUrW3Rc%2BF8mQv9vj2YHzN7UI%2FN08ggtB2x084u5wOiD2%2Fklxl1nzzguHJ4Ok22OqstpuSnwiVT6Jmo5fcwMHGv5OP3oal%2FNUFp3qICF%2F4gdtK%2FNu4zDo0YnKBjqkARPWsT1HKcxgmNkankWHStSSwBUO9NWjRXonjUyEqG3sllerDoBgvkpUIsbvdRNVbbh4cIzo9BByU%2Fy98DctEw1M6uvcnD7EAHKa4E3ze9klp6BuR2tnfyESLVTkeok%2BvyIMYjmM5688%2FdFpamHoSfuvgxiV2hmTg8nFdAkglh%2FxEFlhn%2BJfVQL4Fkt072LXJOjki%2Foalg1HWhR1%2FU0DCDss6oyo&X-Amz-Signature=1d8748e160202cf32b2ba5f6b53d286c966327c71790c43bf2225a8917162c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

