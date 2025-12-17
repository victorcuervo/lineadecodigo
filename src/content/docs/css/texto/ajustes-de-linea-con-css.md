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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KF332XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENl27TlTifkra91PusgoMCTIhRIi7uDb9LpIC%2FWH8NQAiAjNUwjwV7NG0o5xejk6wrZbSG6iGEa4RUg6Y9oT1bfwiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbm65bVs1%2FkYpfa4KtwDYKtjgdleHw9SQivR8yBW%2FvkqeMKFrpAYyb9%2Fb4KM2f3LR8QpaT3x1InA1m8oMpxPrJAslNIdpbPnV5aN%2BwsXdIyNjbKc%2BagQ%2FF9DNd5fj2DxsnHc9CNdOYqByBstUgKiwRp8Hz%2BXREZeY8Ia0aCZ4Izf0ra4jBE2EiKcvB7g1yK%2B2LC5qpSelCUZmLx1HgI%2FyGGjsVFC0J1Wck980P1zmQkmU4PdogSfRsUYE1iG4li%2FczvNnXeca6Z2xyJ0SKT5TuAOpjdmi5X60aov%2ByTAApNleBgs1PE2JTKTlVrfcp0m7DXwLDIDTvpkU3exXxb8hAUM3AGKsD4MjprLFDeMFtwq0fodbEhfPgshShW8VqD0Nsy0X3kmZceM7VVYpxmpPnHFeX9RDEEM9WU%2BzeyPGqzkX%2FNk2Uz%2Bp81PMxVz2xyDWohIbb4J2is8Ymg2gxIaySqkPoiwwfrSfsMsl9x2tCB8ZPYcBNqWyEI1eVnuiWKJhLFQdj4rCbQEs7k8lZlmU%2Fhlox9oqk3KfsXKnwuM67EWPfWpM7nhy7KsdutWm5SVi3G0Gt2HqQKyayvrNUneG9oKOF61sVKqCfXaP1LSUQgjIV62R1rrSFozPI0%2Bwr0Wg39DH9fMAfD9Cxww%2B56LygY6pgFdU2oayggF173OXtZ4fw%2BAQ4qvJFU6YiinUcReUTAWqfja9PPV6ZvZwVHwRDjrKQ369F60f94sv6ZBG1R5TgEx6zm%2BialcTB2p5o%2BhiPFwch5L63THqV8ue%2B3mpf38E7kHRjXsYDvnUAZnzWQtKuOXnfGIPWHLTv4tHiYeui5lZJfjw4GrOmkxguNRtFM%2FmnRyuGMIlE8BJfTUDBOtWRcYqvMtLnd6&X-Amz-Signature=a61e82a849351a8856a22e893c072ee45e8e3081e7c270cda1a665b28d3cda3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KF332XY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIENl27TlTifkra91PusgoMCTIhRIi7uDb9LpIC%2FWH8NQAiAjNUwjwV7NG0o5xejk6wrZbSG6iGEa4RUg6Y9oT1bfwiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhbm65bVs1%2FkYpfa4KtwDYKtjgdleHw9SQivR8yBW%2FvkqeMKFrpAYyb9%2Fb4KM2f3LR8QpaT3x1InA1m8oMpxPrJAslNIdpbPnV5aN%2BwsXdIyNjbKc%2BagQ%2FF9DNd5fj2DxsnHc9CNdOYqByBstUgKiwRp8Hz%2BXREZeY8Ia0aCZ4Izf0ra4jBE2EiKcvB7g1yK%2B2LC5qpSelCUZmLx1HgI%2FyGGjsVFC0J1Wck980P1zmQkmU4PdogSfRsUYE1iG4li%2FczvNnXeca6Z2xyJ0SKT5TuAOpjdmi5X60aov%2ByTAApNleBgs1PE2JTKTlVrfcp0m7DXwLDIDTvpkU3exXxb8hAUM3AGKsD4MjprLFDeMFtwq0fodbEhfPgshShW8VqD0Nsy0X3kmZceM7VVYpxmpPnHFeX9RDEEM9WU%2BzeyPGqzkX%2FNk2Uz%2Bp81PMxVz2xyDWohIbb4J2is8Ymg2gxIaySqkPoiwwfrSfsMsl9x2tCB8ZPYcBNqWyEI1eVnuiWKJhLFQdj4rCbQEs7k8lZlmU%2Fhlox9oqk3KfsXKnwuM67EWPfWpM7nhy7KsdutWm5SVi3G0Gt2HqQKyayvrNUneG9oKOF61sVKqCfXaP1LSUQgjIV62R1rrSFozPI0%2Bwr0Wg39DH9fMAfD9Cxww%2B56LygY6pgFdU2oayggF173OXtZ4fw%2BAQ4qvJFU6YiinUcReUTAWqfja9PPV6ZvZwVHwRDjrKQ369F60f94sv6ZBG1R5TgEx6zm%2BialcTB2p5o%2BhiPFwch5L63THqV8ue%2B3mpf38E7kHRjXsYDvnUAZnzWQtKuOXnfGIPWHLTv4tHiYeui5lZJfjw4GrOmkxguNRtFM%2FmnRyuGMIlE8BJfTUDBOtWRcYqvMtLnd6&X-Amz-Signature=b06368ef2d92a1ad2877f4e3bbee107648a88213d65fea13dae47f5112536d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

