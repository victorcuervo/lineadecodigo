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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BBYR4R4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQCvisW%2BA1Glg9tc8GvkaowLU9aHycVLpYy4hf9%2Fx8TgIhAMEg0Yvx%2BEn9GdwLxpRCH2AL8qK3kPXtk5IyNguhWPqNKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytgDK5%2FxGurZ3FCwkq3AMFSKyxaeaIa4DjOCJi1CERgj2dzbTeXgnwIqzHc2%2B6jq9ulUwGK%2Beg%2FIE5%2F%2BGNNwQMhynwpxZRgxB5XA1b8QhX3PykMAeWfk5TG7%2F2Zylo6cnri%2B9rUsK7%2F9KEysvJXENV%2BPrgu6LdwLmQhz4ELDh5DjlCQKxWroxNH6g2mafOi9KgQ5q8pvic9DKUc3FvwfCMVXATYsKvPtIq4cj%2F3vOyaBi8%2FW%2BCPvhdHlg0UmxsRMTuLTYTmCl%2B7ph3%2BvbjobA91D3x4cA7A5GxnKANE6rLLbdE0J87zU41hQI9LKUlEv85JCfRQcC72xCnwbh3yP5jK3r8aLlVPzNFA8pnFNfT4iw0UVZJo3wlYA%2B92TrubpkIaQXURU0L%2B5va%2BfIbjB%2BKHSa4XOGjJbtBKnDgkwl2B%2B4Aff2R3ZQ%2BVSg6f7wSv1L%2F3566etf6Dtb2FLgAKIQe6DaA9hXi5MC23kz2EPWSauyM%2FsJqFNgQI%2BSPDdCyaNuqGlBNc8w3Ogtdoq5FWVcuGqAy5STGCBazqL4UoMtWoXQjEByhGZ9K9YyEfknwTES1Oq7opDoijRD5XhTzQPF%2BK8c%2BrfwiWn2z7tr27%2Bux9SOMOim7TsZc%2BIZVcm1tVyeWlpIlfskYmTN6pTC8n4vKBjqkAcT2ElxFEslB9eRu0dZlpUU6sHV9ALBgAXGfoHmMkK%2BtN5VwThy6Mq2XiNfinKoYWXZ%2B8jEaKq0%2FFcXd99Rs7zBBAR3CTfX6OoqEUlgPhNKHsMaMBVM8rOORSTj%2FrAw2IB%2F6MG%2FruCIsLnC5PPBzTU4idAY4nNmeq9lL2wEYUa6Syna4Kx23XtA3lOl%2Bl5d2zn8AWKX3vcQy3GCQTuisAfsQCq98&X-Amz-Signature=f4c5ec84138c1adc89bc9299d9a989d4e00f3317fd2b10c746fbd37de967e172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BBYR4R4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQCvisW%2BA1Glg9tc8GvkaowLU9aHycVLpYy4hf9%2Fx8TgIhAMEg0Yvx%2BEn9GdwLxpRCH2AL8qK3kPXtk5IyNguhWPqNKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytgDK5%2FxGurZ3FCwkq3AMFSKyxaeaIa4DjOCJi1CERgj2dzbTeXgnwIqzHc2%2B6jq9ulUwGK%2Beg%2FIE5%2F%2BGNNwQMhynwpxZRgxB5XA1b8QhX3PykMAeWfk5TG7%2F2Zylo6cnri%2B9rUsK7%2F9KEysvJXENV%2BPrgu6LdwLmQhz4ELDh5DjlCQKxWroxNH6g2mafOi9KgQ5q8pvic9DKUc3FvwfCMVXATYsKvPtIq4cj%2F3vOyaBi8%2FW%2BCPvhdHlg0UmxsRMTuLTYTmCl%2B7ph3%2BvbjobA91D3x4cA7A5GxnKANE6rLLbdE0J87zU41hQI9LKUlEv85JCfRQcC72xCnwbh3yP5jK3r8aLlVPzNFA8pnFNfT4iw0UVZJo3wlYA%2B92TrubpkIaQXURU0L%2B5va%2BfIbjB%2BKHSa4XOGjJbtBKnDgkwl2B%2B4Aff2R3ZQ%2BVSg6f7wSv1L%2F3566etf6Dtb2FLgAKIQe6DaA9hXi5MC23kz2EPWSauyM%2FsJqFNgQI%2BSPDdCyaNuqGlBNc8w3Ogtdoq5FWVcuGqAy5STGCBazqL4UoMtWoXQjEByhGZ9K9YyEfknwTES1Oq7opDoijRD5XhTzQPF%2BK8c%2BrfwiWn2z7tr27%2Bux9SOMOim7TsZc%2BIZVcm1tVyeWlpIlfskYmTN6pTC8n4vKBjqkAcT2ElxFEslB9eRu0dZlpUU6sHV9ALBgAXGfoHmMkK%2BtN5VwThy6Mq2XiNfinKoYWXZ%2B8jEaKq0%2FFcXd99Rs7zBBAR3CTfX6OoqEUlgPhNKHsMaMBVM8rOORSTj%2FrAw2IB%2F6MG%2FruCIsLnC5PPBzTU4idAY4nNmeq9lL2wEYUa6Syna4Kx23XtA3lOl%2Bl5d2zn8AWKX3vcQy3GCQTuisAfsQCq98&X-Amz-Signature=7a5d6d56ede54e4d5120aeac6bcbd160c945e6f16c9432a471f01d949f80ca41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

