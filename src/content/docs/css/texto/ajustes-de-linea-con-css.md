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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQI2VSZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2mowvDBrNGUiS1rOqGLJzX48R9alLXa7yaxX%2BibeW3AiB3jh5JnxKaDWbg0mR%2F14DJZmC39GvHne45r56TcYMaRyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzz5ZM9gUGcqfEFJxKtwDlIfqkQV0LUr4r2LI%2F5ME9B9pgbhS6L76lPOFKeBzkopLCcQet8ElTtU32niGe7e0U3gYrJAe52xEcQ3wnzGdMAn3ZsoEz%2BYr4wDS8qEz1Q7VOc0rf1jRWJTsWApf9pF4FmxpPw7yhD5h%2FGtACotCgyON9w60KSCpNQDu90GTXfr4yoojRzm%2BdyISzDnTvW9PQ295YilW7VGhnmn3aDPZg6UNYmTkdTF0shFS8E9WSMr1WfYd1OwDiek1IYtod84NVQo2I4m8jqlnfdW8Mld%2Bvk2XNcZ8I9xVpwd75J%2Fqz0lPfhg5cwanq%2FJJrXS2uFUjj9qSqkZTK8JLdMSkIxaaVSHQreqokw7Lt5xuQJnEGodhHgnSg4BUUB0wh5GdwaI%2FeMOHcldhHbRXpcWqnn%2BJjLVyuEwrMXMcdYoNAn%2BD9F4dOD2RvuchxJQiMDQM0cYv0naO4r2WcW4kj7nIjml38B%2BrLFFm9clicVBOUXWPInAkwOCa8P0u5LPAR8b9kpPztdkQ%2F%2BPw1TMtXqL34u5QowEddZGqdJuvhqcQsXhx%2Fdov4tsTMvz%2Bbtu3j0ZoE3Z%2Bm9G5BWhItpF5qdhsI171DdjuuAA0RhFMpD1WI67eJkwZvC1g9bhQ4plArHAwi7OIygY6pgFBH5JsbwelS2iU3K%2B%2Btv5btSFE0rSAIhq4EbYWDJKrY6sLccawjgUHZ8O8dL6cXS%2BQJGhZt6WtXhZ5P8MZwiBSLUZ1XJo6qoOspL5%2BfEB6KI3vQ3wzd4dyC9J%2FCpasNZ5hsTXHnWdVLN97HpgWD9bcib2l48Qz0WNUaJne1ngb8cRghM9XecdfJYgjXJRDK%2FgtmW2uujWiaLqSG%2FNd3bS3ed2VB6zv&X-Amz-Signature=5ebc9b99ad081906ea4e53f9bc86941b3aaae0bcfb16359c67b9bb54ee47e09f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQI2VSZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH2mowvDBrNGUiS1rOqGLJzX48R9alLXa7yaxX%2BibeW3AiB3jh5JnxKaDWbg0mR%2F14DJZmC39GvHne45r56TcYMaRyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMzz5ZM9gUGcqfEFJxKtwDlIfqkQV0LUr4r2LI%2F5ME9B9pgbhS6L76lPOFKeBzkopLCcQet8ElTtU32niGe7e0U3gYrJAe52xEcQ3wnzGdMAn3ZsoEz%2BYr4wDS8qEz1Q7VOc0rf1jRWJTsWApf9pF4FmxpPw7yhD5h%2FGtACotCgyON9w60KSCpNQDu90GTXfr4yoojRzm%2BdyISzDnTvW9PQ295YilW7VGhnmn3aDPZg6UNYmTkdTF0shFS8E9WSMr1WfYd1OwDiek1IYtod84NVQo2I4m8jqlnfdW8Mld%2Bvk2XNcZ8I9xVpwd75J%2Fqz0lPfhg5cwanq%2FJJrXS2uFUjj9qSqkZTK8JLdMSkIxaaVSHQreqokw7Lt5xuQJnEGodhHgnSg4BUUB0wh5GdwaI%2FeMOHcldhHbRXpcWqnn%2BJjLVyuEwrMXMcdYoNAn%2BD9F4dOD2RvuchxJQiMDQM0cYv0naO4r2WcW4kj7nIjml38B%2BrLFFm9clicVBOUXWPInAkwOCa8P0u5LPAR8b9kpPztdkQ%2F%2BPw1TMtXqL34u5QowEddZGqdJuvhqcQsXhx%2Fdov4tsTMvz%2Bbtu3j0ZoE3Z%2Bm9G5BWhItpF5qdhsI171DdjuuAA0RhFMpD1WI67eJkwZvC1g9bhQ4plArHAwi7OIygY6pgFBH5JsbwelS2iU3K%2B%2Btv5btSFE0rSAIhq4EbYWDJKrY6sLccawjgUHZ8O8dL6cXS%2BQJGhZt6WtXhZ5P8MZwiBSLUZ1XJo6qoOspL5%2BfEB6KI3vQ3wzd4dyC9J%2FCpasNZ5hsTXHnWdVLN97HpgWD9bcib2l48Qz0WNUaJne1ngb8cRghM9XecdfJYgjXJRDK%2FgtmW2uujWiaLqSG%2FNd3bS3ed2VB6zv&X-Amz-Signature=1736fd3da844eb859dd8e35f98e19aba77725b4bd79023111a8c416d37882f87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

