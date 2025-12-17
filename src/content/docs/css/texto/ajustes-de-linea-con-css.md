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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDVQTNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKdrSyZ9I9dgFoRjiRmur4eCKCiiVpc4rVXEdB%2FC1EJAiBWpb9ivkoZddlX4xEzp7IahfghyzqUYR842QLFoBl0cyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14vfFPEYHMpBhIdNKtwDsfb4Nq%2FqVwfx4Adtn4PDGYO6wIm25UcwQb8AY0Y%2BdO6McENufvh34yR4o2BYODMzO24yXlExUsuHJS4CYlbi2HdCkrMY409J2mVIrR%2B4bSSYnJp1pXHDXDJGo4m%2FxVSRw7zsRSLxhpoKHH9C4jmIv7J2dFHKmIbrXGu7hebspoq2zsRtalE%2FbwEMmlzZmM5UO83oTt83RubJ6J%2BGTQEEV2mGLdXNcEVqXFKAuTvqvzr84NASX2HHZJAGft9i7EUqj29JQu0fgWkCy7gG6VI2TMwEarqooH2bgTTLrYTAUma5DT7i51%2FG7TilV5DO%2FLu2%2BIwVLB1DaZOnsK%2FmvbfDcZ5r0Lnn1IINVFqIKLpnG%2FSQavqZxJ8m%2Fmjueq%2BSXo9gnLIFWFLGdEz2qcYNJXYQxEikF4muTlOic9kcfni7P5tEa6d4DQJ0QgTjOsUKRtVCe7jrnrfbsLnJ6nDsDZj%2FIGz2sfutpqmVsW1t2fsNDTqhUpDgN4UkG3n0GmSsmL3ldB40rgQCsxbB8YDhXOKgnoxWxbBHyIAe4gHpPRQ38bDlZEv12d1TBKjAqBvbIqIzOcjgPjJvbwMqMA4c%2FU%2B%2BY6%2FT%2FJ7WGFvLO7NxwLj2Qgj3BC9DRskwPW8qtkEwn6CLygY6pgEN6zcypNCYuuED3AG6aQhPcOUSLnBa2nw3xYZPKauTMrvHvxwwaJ9Zrh5A25qdel6rAEbf%2Fkm3qrQFueyz%2FYhJfKG%2FWEjGmToDXzK23S%2FgEO4FQFNUGBTppiHowPNwXp%2F28%2Fbx8w%2F4iwQ5LhOLpqdFITpJFsc2q3UL7lTUwYpHHarKbXvPoMYaDyOiWn8rK%2BjFMAyHPbDXnreWwcoSnXqdCStkogFm&X-Amz-Signature=a3e61450eac033b88ae78bef23f2d6f7ec665810f4e456271eb11829581c9df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUDVQTNA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHKdrSyZ9I9dgFoRjiRmur4eCKCiiVpc4rVXEdB%2FC1EJAiBWpb9ivkoZddlX4xEzp7IahfghyzqUYR842QLFoBl0cyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14vfFPEYHMpBhIdNKtwDsfb4Nq%2FqVwfx4Adtn4PDGYO6wIm25UcwQb8AY0Y%2BdO6McENufvh34yR4o2BYODMzO24yXlExUsuHJS4CYlbi2HdCkrMY409J2mVIrR%2B4bSSYnJp1pXHDXDJGo4m%2FxVSRw7zsRSLxhpoKHH9C4jmIv7J2dFHKmIbrXGu7hebspoq2zsRtalE%2FbwEMmlzZmM5UO83oTt83RubJ6J%2BGTQEEV2mGLdXNcEVqXFKAuTvqvzr84NASX2HHZJAGft9i7EUqj29JQu0fgWkCy7gG6VI2TMwEarqooH2bgTTLrYTAUma5DT7i51%2FG7TilV5DO%2FLu2%2BIwVLB1DaZOnsK%2FmvbfDcZ5r0Lnn1IINVFqIKLpnG%2FSQavqZxJ8m%2Fmjueq%2BSXo9gnLIFWFLGdEz2qcYNJXYQxEikF4muTlOic9kcfni7P5tEa6d4DQJ0QgTjOsUKRtVCe7jrnrfbsLnJ6nDsDZj%2FIGz2sfutpqmVsW1t2fsNDTqhUpDgN4UkG3n0GmSsmL3ldB40rgQCsxbB8YDhXOKgnoxWxbBHyIAe4gHpPRQ38bDlZEv12d1TBKjAqBvbIqIzOcjgPjJvbwMqMA4c%2FU%2B%2BY6%2FT%2FJ7WGFvLO7NxwLj2Qgj3BC9DRskwPW8qtkEwn6CLygY6pgEN6zcypNCYuuED3AG6aQhPcOUSLnBa2nw3xYZPKauTMrvHvxwwaJ9Zrh5A25qdel6rAEbf%2Fkm3qrQFueyz%2FYhJfKG%2FWEjGmToDXzK23S%2FgEO4FQFNUGBTppiHowPNwXp%2F28%2Fbx8w%2F4iwQ5LhOLpqdFITpJFsc2q3UL7lTUwYpHHarKbXvPoMYaDyOiWn8rK%2BjFMAyHPbDXnreWwcoSnXqdCStkogFm&X-Amz-Signature=a41c4db29671a8d80811579d2e1e648f1110ee66da06b7fa7c32d2ef70850a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

