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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LMQJFX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMhEpWdWmXrpqVk19M%2BEb5BczoP0ZZp%2BbHns9SULKnTAiBVNAYcFvfX1ovIHlDLxAneMEdk1ie2ksTPAhTqZY8iWir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrZKVbR6dtji%2FJxmHKtwDEuvqKoQx54%2BQ2duj8CBUB5%2F47E1p8J6ZlwWlFpsZfTltrMHi7ABGWPPvj%2F0TysLxj0x4XCL7Kmw%2BAOg9ognWELr7uvyQyQVmBySa6LiQnXxIy8rwo7XFjYNqs%2BdjYJ9P1Pdj1htMsrJxoR283Cf5%2FxtlyZGhPNvpcqayf6ft8opYNZTfqafbgMXotV0sXiRZD78CZ7CJS561FMuCThsLUFwkfFFNjDb1OPdImugiB6qgjErpsMwXU%2FCFYQxeE4Zrw0SRLw0BaIhuaLawU89YNKYDsGiVQvitPXYTQh2Lj8Pf1zeVoUs25wh561MIfHcuQIXnD7oVyOp6QToJhNuJTz4y34Mv7RbAk%2F6R557n8SB5wOLUqKyzt6adgfiNzPkiayMCQyax7Az4d7pPZmB1yFsx4mSD78TchSf9HNtKDlEUHd1I9T3COeqx%2BoTwKym1Llm4TUTR6mAdVhtY2v343NdDUcgj%2BfTQd3yEVpBMeKXUo92X2LGRZYacTUUxNyd3ct3CVm0LnwzqWXqTkbfGTC4I3a%2FOwDE2iEuBOuvUU0q3vZudPJhyOrvL%2FfO836aKdgpMdwLvmSFJqcFGeDqnaHo1yyvjD2wmvmSVZ%2BTB7m0E80vYIiVi0Jc6lOAw%2BemIygY6pgH%2FqsXPYnbDJqEtlWYEd3etPkAlxJ64X0et%2BW7ZGVmbrL3iYQB0Lwh0%2FegL25I5fuRDra8kEU%2BkpZ2U74eatf2K0JfKbLL6Wj3CcIM5LUXhurW8%2Fo%2B1dvQPUpksNZPoxbxhPfD%2Fq3saCIFTVc6pKgr%2BivDiJBJ5KrgKhYDa8y5KirmAvlElhkl%2Fhwro2nuF%2BMw57OrNSE49Y3U%2BzUFmTp65KtLtjUim&X-Amz-Signature=7ecd6cda3a92e70f59193a00ffbf1d6b8d1fc143b3438297319aefdd62065c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657LMQJFX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEMhEpWdWmXrpqVk19M%2BEb5BczoP0ZZp%2BbHns9SULKnTAiBVNAYcFvfX1ovIHlDLxAneMEdk1ie2ksTPAhTqZY8iWir%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMrZKVbR6dtji%2FJxmHKtwDEuvqKoQx54%2BQ2duj8CBUB5%2F47E1p8J6ZlwWlFpsZfTltrMHi7ABGWPPvj%2F0TysLxj0x4XCL7Kmw%2BAOg9ognWELr7uvyQyQVmBySa6LiQnXxIy8rwo7XFjYNqs%2BdjYJ9P1Pdj1htMsrJxoR283Cf5%2FxtlyZGhPNvpcqayf6ft8opYNZTfqafbgMXotV0sXiRZD78CZ7CJS561FMuCThsLUFwkfFFNjDb1OPdImugiB6qgjErpsMwXU%2FCFYQxeE4Zrw0SRLw0BaIhuaLawU89YNKYDsGiVQvitPXYTQh2Lj8Pf1zeVoUs25wh561MIfHcuQIXnD7oVyOp6QToJhNuJTz4y34Mv7RbAk%2F6R557n8SB5wOLUqKyzt6adgfiNzPkiayMCQyax7Az4d7pPZmB1yFsx4mSD78TchSf9HNtKDlEUHd1I9T3COeqx%2BoTwKym1Llm4TUTR6mAdVhtY2v343NdDUcgj%2BfTQd3yEVpBMeKXUo92X2LGRZYacTUUxNyd3ct3CVm0LnwzqWXqTkbfGTC4I3a%2FOwDE2iEuBOuvUU0q3vZudPJhyOrvL%2FfO836aKdgpMdwLvmSFJqcFGeDqnaHo1yyvjD2wmvmSVZ%2BTB7m0E80vYIiVi0Jc6lOAw%2BemIygY6pgH%2FqsXPYnbDJqEtlWYEd3etPkAlxJ64X0et%2BW7ZGVmbrL3iYQB0Lwh0%2FegL25I5fuRDra8kEU%2BkpZ2U74eatf2K0JfKbLL6Wj3CcIM5LUXhurW8%2Fo%2B1dvQPUpksNZPoxbxhPfD%2Fq3saCIFTVc6pKgr%2BivDiJBJ5KrgKhYDa8y5KirmAvlElhkl%2Fhwro2nuF%2BMw57OrNSE49Y3U%2BzUFmTp65KtLtjUim&X-Amz-Signature=062d65642492d8bbcfee7d4d367191b8e66dea66c65f8d09a364dbc93f70c0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

