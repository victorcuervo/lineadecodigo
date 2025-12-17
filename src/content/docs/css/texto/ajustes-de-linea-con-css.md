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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNP6YC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo40EqsJENk6IXYdHXBGMN6aha6VlkwDwPgZtnAXNTSQIgJti%2BcoOCUIg8u99rLVCXb8g%2BRR0ftC75ckhhmtr129Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPw48sJA0pOwcj67KyrcAxgvQcMnhig2f%2B8yuHg2%2ByFZZC0tYp5fuhuiOmr0vp7mxJSnxUa8Ih2MAwKxYNTqxbBFOjRvlGEis4IEdqLtB15uVr1IlOjQMlOZVvVlxwldrdo7d3Ua8fGlvK9UJHeeUQlk8gg6cWCmsIZoNQ4hsfrTgUSpeMByEtG6MAQQn75NBcC3kPKJOWa6V%2B%2B81JVLQHq0HWwWpQGZBXY8lux5ynCNZdXYBPU%2FguNabL59hMPof8Mpra0kC5qfvdkachebKPsHTf5RN5b7axpuSeMVQUlX9Oo0pP7sEYi9p427W%2F15LUALS%2F2dWiRS53llkBFvD7Kd6BdBhU9%2BYu9iuqC11dJyFyVnTnieJdcLaLhak2d9Cx%2BBhZAP60DbEbCG3qLni9ON2eRmk9%2B26xbN5ne%2FJbvzYWcNhl1RN78IlJO4kBOzzOfQa0YyZr2EerUMdJNu850aoMw5z5iYfhJiBhJbf0apMOISSg5oDp1OKLYXVasoxtHVmxtolPUnk5zPCPNMYqcWHVtsD8Tx5S97cvT3eyOEhYnxYIBYY%2BoV7lcROKJUeyPmprZshoAT2n%2FkJ%2Fy9UJk7iV8Lxri5n2eLfDpiQcBtHQdEI8BV0UHFco4Kkf8HMslWF4Mf6DsrIGIVMJ6PisoGOqUBvDzCL231MIWMcAHa3UeSfbrf%2BhG9%2FYoxUEn7HmSAJVG7ZGJSYKt8VLGXvO13p9zilBeTSLi57x4YklPBAnstNQsudyDgEikkhbsS%2BdY8%2BwFUGVVv2g7P3JvBqZH%2BxV%2BLT4zsxALcKT5l5IjT0AAalKAoFHUeBHyjERTQtN5MBn9rqD7sog9nAfDby5N8eJCsDLd6g2N4%2BveZdNC2qWL7UJQOw%2BYl&X-Amz-Signature=106fc0d337e5c55d1bddcb69d23932f084183877e436aeefe1508914bd32228d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNP6YC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDo40EqsJENk6IXYdHXBGMN6aha6VlkwDwPgZtnAXNTSQIgJti%2BcoOCUIg8u99rLVCXb8g%2BRR0ftC75ckhhmtr129Mq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPw48sJA0pOwcj67KyrcAxgvQcMnhig2f%2B8yuHg2%2ByFZZC0tYp5fuhuiOmr0vp7mxJSnxUa8Ih2MAwKxYNTqxbBFOjRvlGEis4IEdqLtB15uVr1IlOjQMlOZVvVlxwldrdo7d3Ua8fGlvK9UJHeeUQlk8gg6cWCmsIZoNQ4hsfrTgUSpeMByEtG6MAQQn75NBcC3kPKJOWa6V%2B%2B81JVLQHq0HWwWpQGZBXY8lux5ynCNZdXYBPU%2FguNabL59hMPof8Mpra0kC5qfvdkachebKPsHTf5RN5b7axpuSeMVQUlX9Oo0pP7sEYi9p427W%2F15LUALS%2F2dWiRS53llkBFvD7Kd6BdBhU9%2BYu9iuqC11dJyFyVnTnieJdcLaLhak2d9Cx%2BBhZAP60DbEbCG3qLni9ON2eRmk9%2B26xbN5ne%2FJbvzYWcNhl1RN78IlJO4kBOzzOfQa0YyZr2EerUMdJNu850aoMw5z5iYfhJiBhJbf0apMOISSg5oDp1OKLYXVasoxtHVmxtolPUnk5zPCPNMYqcWHVtsD8Tx5S97cvT3eyOEhYnxYIBYY%2BoV7lcROKJUeyPmprZshoAT2n%2FkJ%2Fy9UJk7iV8Lxri5n2eLfDpiQcBtHQdEI8BV0UHFco4Kkf8HMslWF4Mf6DsrIGIVMJ6PisoGOqUBvDzCL231MIWMcAHa3UeSfbrf%2BhG9%2FYoxUEn7HmSAJVG7ZGJSYKt8VLGXvO13p9zilBeTSLi57x4YklPBAnstNQsudyDgEikkhbsS%2BdY8%2BwFUGVVv2g7P3JvBqZH%2BxV%2BLT4zsxALcKT5l5IjT0AAalKAoFHUeBHyjERTQtN5MBn9rqD7sog9nAfDby5N8eJCsDLd6g2N4%2BveZdNC2qWL7UJQOw%2BYl&X-Amz-Signature=94a38064240e22571980b50ad4602faf5aa285fb356a96cd733a6ad785e77e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

