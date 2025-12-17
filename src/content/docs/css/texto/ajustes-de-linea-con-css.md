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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2USOBZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCACBizj6OARHeomjCz6WUUa790JNOaXZfMrXa3vk61AAIgNwcEsHdz%2Bm6DwY0K762C6%2BnIQDHD1JyjJ8XwW7SRY%2Fwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPvB9DeKG6DtB7hhVCrcA%2BcD3C%2FY8Noa51XbiP9KlZ6EnC%2BpJVBgFKch%2FtUvNHW93ug33x%2FnhusOcCtphmBqShsr6G0ZUl4DjMhqz4eCAm%2BmWPfxfyHa2usXtxHgdCfl5F0bdtD%2F9RmSqrsDyhW5y1AQMEvqPR8ukjfHC3KQtgpZMserpyRLccQ7tXgrue9i8e4kru4opOULMxYoou5QbzEbW6BRbP0x8%2FOOXAAWJ0tjb%2FumkYHbmTGsWCRo70G7lqKeCnLfeAoAAFCTZ5S08iX4fOAl%2FTh8NuRU%2Brr4xE5qYKrCu6MWlMCY0X67waBpxW257mRjPF4Ue1LuAPrVwMwE0gwzyTRs9yOasnuiLcRWr8ri6hmRRzZbiC4syaiesPpfjlhcfBTMxHnk3weSLkPIetDBzhZUHCZHkGJ19JuxHEsCStX1%2Btz0EMWk6KDG40CeeGCUyLIzFiCjnCOYfmTHxOKAN00zznKaxtrCZFGQIX1HMiw1LrfvcwdIUv6Gazxl6dHhWCEalNt0pIDHyFN33w4Bh0ec2gT3%2BXkG0ETaIdm0hUlsYxqRt%2FAo%2BiO3geeoEpBLJuWgA9zZYGv61k2lW9oi1sd6QwPxCB%2F%2Fuo8F5P7loA7Qx56Z26va7Lg8VLrAHOgfd3w1dm7QMOOOisoGOqUBEFu9f6pVa64HhDv%2Fc36vZTCLNM9zCdkxPRa93g2NiqS82iljZf9fKVTExCRVYkaiOECDLwzTUVw5LZc7oOgy23cE8UEvdrvQKt6O9FgdnZROTrRAlemNhvZEEaRwLT2%2Fp0TSeBMesSY4MAchyraN%2BbOJN1bTkvO2zbir3EGyvw20S2JZv%2BId9aoIhS851g%2BMexOYbfjJp%2FFQvYfBBo1w3Gup%2F%2BzT&X-Amz-Signature=072296e6ac066d7b2a9dd1ccbb997b50840e2d31ed356e1437daf23626bc5ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK2USOBZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCACBizj6OARHeomjCz6WUUa790JNOaXZfMrXa3vk61AAIgNwcEsHdz%2Bm6DwY0K762C6%2BnIQDHD1JyjJ8XwW7SRY%2Fwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPvB9DeKG6DtB7hhVCrcA%2BcD3C%2FY8Noa51XbiP9KlZ6EnC%2BpJVBgFKch%2FtUvNHW93ug33x%2FnhusOcCtphmBqShsr6G0ZUl4DjMhqz4eCAm%2BmWPfxfyHa2usXtxHgdCfl5F0bdtD%2F9RmSqrsDyhW5y1AQMEvqPR8ukjfHC3KQtgpZMserpyRLccQ7tXgrue9i8e4kru4opOULMxYoou5QbzEbW6BRbP0x8%2FOOXAAWJ0tjb%2FumkYHbmTGsWCRo70G7lqKeCnLfeAoAAFCTZ5S08iX4fOAl%2FTh8NuRU%2Brr4xE5qYKrCu6MWlMCY0X67waBpxW257mRjPF4Ue1LuAPrVwMwE0gwzyTRs9yOasnuiLcRWr8ri6hmRRzZbiC4syaiesPpfjlhcfBTMxHnk3weSLkPIetDBzhZUHCZHkGJ19JuxHEsCStX1%2Btz0EMWk6KDG40CeeGCUyLIzFiCjnCOYfmTHxOKAN00zznKaxtrCZFGQIX1HMiw1LrfvcwdIUv6Gazxl6dHhWCEalNt0pIDHyFN33w4Bh0ec2gT3%2BXkG0ETaIdm0hUlsYxqRt%2FAo%2BiO3geeoEpBLJuWgA9zZYGv61k2lW9oi1sd6QwPxCB%2F%2Fuo8F5P7loA7Qx56Z26va7Lg8VLrAHOgfd3w1dm7QMOOOisoGOqUBEFu9f6pVa64HhDv%2Fc36vZTCLNM9zCdkxPRa93g2NiqS82iljZf9fKVTExCRVYkaiOECDLwzTUVw5LZc7oOgy23cE8UEvdrvQKt6O9FgdnZROTrRAlemNhvZEEaRwLT2%2Fp0TSeBMesSY4MAchyraN%2BbOJN1bTkvO2zbir3EGyvw20S2JZv%2BId9aoIhS851g%2BMexOYbfjJp%2FFQvYfBBo1w3Gup%2F%2BzT&X-Amz-Signature=6dd27d813d9bbdfe0cae3f48794fae56323bb9ab48dbf596cd241ab0c642db78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

