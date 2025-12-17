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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOU64JKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmPmmjzsHbXAUMcEKaQwg%2FQXtinJTuuyQHvt8T8VLxiAiEA1fN8jYvs4lKaVeULlAt354SPZuoCeK2dBKzwR7w6Pf8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAEvu3aw4v4vDKNx0SrcA4W78qW9mUKR%2BtEz1R%2FmIsNxe2Uk5yvcqTqMDOs9idHspNRDdvzHuAavyXLd5HVXS4Mh6n3y4rHkKL6HjT73xlSOmGBICp3YYBpCtstHT%2FUYe3oPsUS4DoFVwfe76p3NcO%2F%2BGFZUEI67Nuom9kBBwMGkPrv05Ba%2Bh4I2Ufpezd1Rz98%2FJGmlYMxupkyGSxnwzIoxQ9dUGeOY8hrYkJIXJNdTFuxKb3SawGMt1gGFCR5G%2BbBD18xwxExAJGBjkn39gAmACpMPZXCkPHilhiXEgV%2BLHqI4R%2Bg1pqvtFFfbjNK8ZGLjlxe1%2BgAQBAHmgps8FGMh8O5I0ugDq7mLUWAp81RQl8QvsyMGQjgcxPsnmL1kDhlxAAW08vIX5yo5iVboClPn3rPKLcqi3EYGH%2FqajMeZva7PfL%2FlvH3RzvkRBl8z7uUn%2BWTElEzpQPLAWhCZnJtmWGeEpsO9Psc8MKfKdNK9C3EL76GuRcTuMh0k3Hr0UYWXnfDU7Du2vzU3Hb11xghbzSEzBKzXwERi7dTpVKYveZqXzO4ttnohX67Cd5SA5HISQgRxxtZKcFXnan3xtyZzmGSuJkshWPYnYK0POQhSm1C6w8r41uuThYeHwuJLgCqPs%2BaWB7K0iypbMMfOiMoGOqUB9KUkIIJi4rDQlrt%2FBYDvVQdwiLeXAaY4uarf13a0cojDoBW0pw%2FCdrYcqQrgfn3SPnIE28uYscGSd10uZ9F2tLbNOyuh3SuIZCwZGqTln18s7fG0Hd08i6p0sZpMk6aJcp7Hqon7UorLAYNAgMNFkarHsTKmmbkwdi7tGH2PWDwyHvtzHT2i%2FHQXFl4oJ7mKzqZFTJi7RI%2BN4iuE2oKldCmYrMsn&X-Amz-Signature=2241f95b99622cd6b12f1538f40474f49b9a2b14d7bad368271bf87cfbbb2ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOU64JKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmPmmjzsHbXAUMcEKaQwg%2FQXtinJTuuyQHvt8T8VLxiAiEA1fN8jYvs4lKaVeULlAt354SPZuoCeK2dBKzwR7w6Pf8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAEvu3aw4v4vDKNx0SrcA4W78qW9mUKR%2BtEz1R%2FmIsNxe2Uk5yvcqTqMDOs9idHspNRDdvzHuAavyXLd5HVXS4Mh6n3y4rHkKL6HjT73xlSOmGBICp3YYBpCtstHT%2FUYe3oPsUS4DoFVwfe76p3NcO%2F%2BGFZUEI67Nuom9kBBwMGkPrv05Ba%2Bh4I2Ufpezd1Rz98%2FJGmlYMxupkyGSxnwzIoxQ9dUGeOY8hrYkJIXJNdTFuxKb3SawGMt1gGFCR5G%2BbBD18xwxExAJGBjkn39gAmACpMPZXCkPHilhiXEgV%2BLHqI4R%2Bg1pqvtFFfbjNK8ZGLjlxe1%2BgAQBAHmgps8FGMh8O5I0ugDq7mLUWAp81RQl8QvsyMGQjgcxPsnmL1kDhlxAAW08vIX5yo5iVboClPn3rPKLcqi3EYGH%2FqajMeZva7PfL%2FlvH3RzvkRBl8z7uUn%2BWTElEzpQPLAWhCZnJtmWGeEpsO9Psc8MKfKdNK9C3EL76GuRcTuMh0k3Hr0UYWXnfDU7Du2vzU3Hb11xghbzSEzBKzXwERi7dTpVKYveZqXzO4ttnohX67Cd5SA5HISQgRxxtZKcFXnan3xtyZzmGSuJkshWPYnYK0POQhSm1C6w8r41uuThYeHwuJLgCqPs%2BaWB7K0iypbMMfOiMoGOqUB9KUkIIJi4rDQlrt%2FBYDvVQdwiLeXAaY4uarf13a0cojDoBW0pw%2FCdrYcqQrgfn3SPnIE28uYscGSd10uZ9F2tLbNOyuh3SuIZCwZGqTln18s7fG0Hd08i6p0sZpMk6aJcp7Hqon7UorLAYNAgMNFkarHsTKmmbkwdi7tGH2PWDwyHvtzHT2i%2FHQXFl4oJ7mKzqZFTJi7RI%2BN4iuE2oKldCmYrMsn&X-Amz-Signature=5ea6a5e2409d50ae5d5d52fa945c0008dbe39122a5cb9ffbb553199242d205ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

