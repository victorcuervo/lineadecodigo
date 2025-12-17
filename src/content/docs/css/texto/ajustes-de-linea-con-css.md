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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZFPL5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZyB4gyyhlW3bLLbxVKyZV9rj%2BF3pgE9MLwGTB2bVZAiBAfQiDBrLKRNUTwgSghBvTMNxbvOACkrJ29jyvMLcQOyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0iKT9j%2FgQXXSJeIrKtwDVrJDk5IrdDYW1Doi27%2BogotBSrh7xhUMzDJIVGbc4kL89fH0F%2B0ppb23I%2FKx24LLIi%2B9iesND9Gvq0Ey3pb0MO4cujiWmvxVcp4kOaen8XVIcC%2BCeLCL5bjY%2BVlfJJmVeTvhlKWdhdTGtH2CraQG56XeyU1s7ZjMbNo7mbflV8blzpPvR6UQVyQVX1gl9Yoh%2F4CcvGwPNZirhpXV3yqPFwca2vOw3wemQ%2BNwk3ho9bvytlAc3tQsylqyzZ2vlWgoOyUbrFgkA9YQH9Xx1g56kaVvfah63K3cV%2FCzcnQmz1wwPqHliNstdfevIZWavIDfmUZxF%2BtKOJOB2G%2ByjgbFPducKC%2FkbyWydEBW8GMWtDgm%2BMI1r1xnGgoCJrFonLHZfcB19rzhneLTLzs1ZEtzkHIjB7MPEIzV0XuulrQeiKyEY6JIrtWzp7jZ9baqlOYMYIH7XbvKVAtnfBqEVVIYSeI3WPI7w%2FTyyvmeCfaOv2QpHVpEcCfAp3ASoZejhM2EMWwwdZALLNMqQfYjHiadySUYGz9UI6zee7TcVmHYhqz0YlyeEFqO0tMk%2FyQa4MYmgJztLvcHjb%2FvMumnwnCZ3jhJCuW9suu%2BPZZbCbXkwzeXOyQEyOlvcJT7QCAwo9KJygY6pgGrDhk0ZEqJH9Xx%2FDUeDkxDOu5hJorvmtmVca3PNAMzdpvP2st%2FVuFKsPtIBxInX2xvi5ejfJMAX2fYdxSGZ16OUwknAUdUIA%2F7C4WF8G5Ie7mXZpKVro%2FbT%2BcGoAnytz2MHqGQqVTpkGdcMh0vaQW9VHUJ%2FuBXdH21JN1A4%2BE7m%2Fn2RCxLZDDjfXAsI920lz21Q%2BBkR5BQqdOdGvL9HBvcgT%2Fh%2FrHt&X-Amz-Signature=6e81150244482f3d3941a4f4d28a63e1f27171038048f76386f1a6be4c4ff2fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZFPL5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpZyB4gyyhlW3bLLbxVKyZV9rj%2BF3pgE9MLwGTB2bVZAiBAfQiDBrLKRNUTwgSghBvTMNxbvOACkrJ29jyvMLcQOyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM0iKT9j%2FgQXXSJeIrKtwDVrJDk5IrdDYW1Doi27%2BogotBSrh7xhUMzDJIVGbc4kL89fH0F%2B0ppb23I%2FKx24LLIi%2B9iesND9Gvq0Ey3pb0MO4cujiWmvxVcp4kOaen8XVIcC%2BCeLCL5bjY%2BVlfJJmVeTvhlKWdhdTGtH2CraQG56XeyU1s7ZjMbNo7mbflV8blzpPvR6UQVyQVX1gl9Yoh%2F4CcvGwPNZirhpXV3yqPFwca2vOw3wemQ%2BNwk3ho9bvytlAc3tQsylqyzZ2vlWgoOyUbrFgkA9YQH9Xx1g56kaVvfah63K3cV%2FCzcnQmz1wwPqHliNstdfevIZWavIDfmUZxF%2BtKOJOB2G%2ByjgbFPducKC%2FkbyWydEBW8GMWtDgm%2BMI1r1xnGgoCJrFonLHZfcB19rzhneLTLzs1ZEtzkHIjB7MPEIzV0XuulrQeiKyEY6JIrtWzp7jZ9baqlOYMYIH7XbvKVAtnfBqEVVIYSeI3WPI7w%2FTyyvmeCfaOv2QpHVpEcCfAp3ASoZejhM2EMWwwdZALLNMqQfYjHiadySUYGz9UI6zee7TcVmHYhqz0YlyeEFqO0tMk%2FyQa4MYmgJztLvcHjb%2FvMumnwnCZ3jhJCuW9suu%2BPZZbCbXkwzeXOyQEyOlvcJT7QCAwo9KJygY6pgGrDhk0ZEqJH9Xx%2FDUeDkxDOu5hJorvmtmVca3PNAMzdpvP2st%2FVuFKsPtIBxInX2xvi5ejfJMAX2fYdxSGZ16OUwknAUdUIA%2F7C4WF8G5Ie7mXZpKVro%2FbT%2BcGoAnytz2MHqGQqVTpkGdcMh0vaQW9VHUJ%2FuBXdH21JN1A4%2BE7m%2Fn2RCxLZDDjfXAsI920lz21Q%2BBkR5BQqdOdGvL9HBvcgT%2Fh%2FrHt&X-Amz-Signature=98244e03e77b1ec9cc1ce583d77afcefacb4551ab0a83693256398f4cc0c3faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

