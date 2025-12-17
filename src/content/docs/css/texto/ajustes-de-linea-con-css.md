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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7IVN3S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ0uBej3roEzqGXZ5GLVJw%2FJiuY%2BNtviAh7kY8dNGS2AiEA81BWxLFRHDf28K%2BXPLv7hX1F4Rr9XzQbrAerVCOIXKgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLs0wxVOzW00u0LokSrcA4U%2B5tFeFsWElAMYl1aZmHNwYvBLwBhuEB03hSNjBcP5qVcjqequ83XaL3C9%2FRr2GxHuBu4LF%2BEHr%2FyEvybNBpIXX78b%2BNQg3uEX6FcxX%2BEUsYcCxAzECoXX43BW9mWAM3%2FZ6l9LxIjhf2uXz90QQh30a460dc5%2FO6A1QVnagelgA2ECV7Sajj5YAu%2B1qF0l1rPwEEEY5nQXzSN2Ob8s1mVw3KVK4F6K93GHlBH%2Fp7K%2BCx1gbx40VVSUVdWl%2F7XE0z292%2FI11o%2BZ%2FKTThWJmimqiOyuApxCtwkloZqxB%2FLfTISZk7ptN3ByGT%2BHbWfq5FlUPFBGlGtHwRwz2OxsMUW5ccFNIlMWFbfmK1kawHQuWmw7mTsWySngIeuYsrwSHnm7D0ZP9cvLP4W5DVmQVVCN0C0d4hsE8EFvSug6dJKd7oHmROaps32R7Ojb1Q7Q1hZRZyYWZNie8%2ByxC2I23C8xeZzxp%2FUFJ1EdKpm%2F%2FMYaCb%2FoMjVnKCt9%2B1nQOsuNRsj04Oyz1twb%2BHcUz6vcbM3S%2BX78SndGzWx6OrfwRUfN%2Bp7wjET%2Fkao34hj1rM3La6kOpqWADmB1KYv7MmZbgnhAI%2BzfM9Bxfv37W2t2yUbfwzWtRHLR4tyN12Dn9MKHjisoGOqUBN2yRdj2TdxrBqfpdli6Z6vkbZ4GEleFRVFF1zuLgdJT8pUDWqnf2mB1N34j%2FTuy0eP9kxqqE5YsaxZzgif%2F3K8dLCKxF8CwGQxEbVsDhG9AzX4sZ2wuSMgtyABq99Kdf6rjIX3jAHf5gAna0WEb4%2F9uf9ejEVgSs98e%2BOmMt4f6sv4fGwN5nl%2FUoarZEIYOZ7YlHiCA8B0ytsTvhLiSkgv41u%2ByB&X-Amz-Signature=6d783583be6e6a5e99adb62847635e4b05480a8b9d3c993f2883d8e7d7d7a0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O7IVN3S%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJ0uBej3roEzqGXZ5GLVJw%2FJiuY%2BNtviAh7kY8dNGS2AiEA81BWxLFRHDf28K%2BXPLv7hX1F4Rr9XzQbrAerVCOIXKgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLs0wxVOzW00u0LokSrcA4U%2B5tFeFsWElAMYl1aZmHNwYvBLwBhuEB03hSNjBcP5qVcjqequ83XaL3C9%2FRr2GxHuBu4LF%2BEHr%2FyEvybNBpIXX78b%2BNQg3uEX6FcxX%2BEUsYcCxAzECoXX43BW9mWAM3%2FZ6l9LxIjhf2uXz90QQh30a460dc5%2FO6A1QVnagelgA2ECV7Sajj5YAu%2B1qF0l1rPwEEEY5nQXzSN2Ob8s1mVw3KVK4F6K93GHlBH%2Fp7K%2BCx1gbx40VVSUVdWl%2F7XE0z292%2FI11o%2BZ%2FKTThWJmimqiOyuApxCtwkloZqxB%2FLfTISZk7ptN3ByGT%2BHbWfq5FlUPFBGlGtHwRwz2OxsMUW5ccFNIlMWFbfmK1kawHQuWmw7mTsWySngIeuYsrwSHnm7D0ZP9cvLP4W5DVmQVVCN0C0d4hsE8EFvSug6dJKd7oHmROaps32R7Ojb1Q7Q1hZRZyYWZNie8%2ByxC2I23C8xeZzxp%2FUFJ1EdKpm%2F%2FMYaCb%2FoMjVnKCt9%2B1nQOsuNRsj04Oyz1twb%2BHcUz6vcbM3S%2BX78SndGzWx6OrfwRUfN%2Bp7wjET%2Fkao34hj1rM3La6kOpqWADmB1KYv7MmZbgnhAI%2BzfM9Bxfv37W2t2yUbfwzWtRHLR4tyN12Dn9MKHjisoGOqUBN2yRdj2TdxrBqfpdli6Z6vkbZ4GEleFRVFF1zuLgdJT8pUDWqnf2mB1N34j%2FTuy0eP9kxqqE5YsaxZzgif%2F3K8dLCKxF8CwGQxEbVsDhG9AzX4sZ2wuSMgtyABq99Kdf6rjIX3jAHf5gAna0WEb4%2F9uf9ejEVgSs98e%2BOmMt4f6sv4fGwN5nl%2FUoarZEIYOZ7YlHiCA8B0ytsTvhLiSkgv41u%2ByB&X-Amz-Signature=c270df907b8820ee7f9bb5f9064a5cd60f0a3d786a2b66dc4628615f1013f516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

