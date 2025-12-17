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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2J25U4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLe0WDSbUJYPuMakvEI0RnCqUosNUHBlbWcc6GwvydtAiEAr6e40%2FZWfCM2XaCnH5OaQa6sYRGnw8EbPMikQH5YGHEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPm48q6w3RYIANrMlCrcA0v1NQPMxwcxAoJWVcYe7Fuwow5SH6Pl8wgwUotUrNF5P3DZUgqkFlgSEV0SrHK477yUJwyts7Z%2FpAaPo2ScK%2Fo8emWsg0OKycKinTq6A8dszj7gLHBhQy%2FVN59ACjvXrtw7bXkt9OmzJHBEZ2OpB0wZhMDwlv8RhxOQWMYk9GEZbfM0%2FHyd%2BY5uaZCP5F4DRe7%2BwBvT7eK9QJzHtTQZBdY2Bp6VOyZSm2PbU4ipDYUIRWkJZes9u6o%2FgXYefcMooMbaMBnxY%2F%2BExAHqzNW1Bq0gx9vA6DTYfmOMtBoWYCo9oKYD93VD5TNlFFkXLYpSBDIcF%2B957Hzl%2FxyDC7f0nJzY18RyKm%2FmfHLuAtzZBggYxHhHBjavS1hgpkJBOldejNYHJsNKExPVSpZph1Ib7owpkMcaX%2FcUiV61DqRzixlHAB1YiysHdsvz0ttfR3FvrYyW5FOn%2BU%2B%2BNjrZTAgd4ITYjIrL%2FCIjM3IaVy6s%2FyYbK0tKGiKkpXuZaZ40ys05KmsRkg8B4cTertYBGGh7o82tKjaXMmPHFqpb9lcSfxElG8r4sqNDYf0wqBQhDWgS3%2B7uHrn6YyFj4bNGRs%2Bvf2%2Fmxa9mqHPopD%2B%2FBShas%2B9Zuz3ny37HBfo77UwdMNqDicoGOqUBrM0J9buHZg%2Fh683lnJLPwKF4wTYbvMwnAC0rvLNRzbMCCY3nNuYoXpbmmlwFvoOwidY%2Fk2rYBOgKunM4rAVxCN0cUXvxCEdeHGojs5qt%2Bwh8pd6GOkkv8rPxoYiGC4ct2bW%2F4X8ZsARN8Sr5RONtsN3pRTECOysdR1e4nHTOnepyZ8s%2FF1MOG5UDCLll6ZNIJeAYl%2FgcuY%2BGiUwWLlDXxW4p1RVo&X-Amz-Signature=a524682047fdcdee6d88baf582972e070792a34c8626a146698830cc8d9c1b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2J25U4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLe0WDSbUJYPuMakvEI0RnCqUosNUHBlbWcc6GwvydtAiEAr6e40%2FZWfCM2XaCnH5OaQa6sYRGnw8EbPMikQH5YGHEq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPm48q6w3RYIANrMlCrcA0v1NQPMxwcxAoJWVcYe7Fuwow5SH6Pl8wgwUotUrNF5P3DZUgqkFlgSEV0SrHK477yUJwyts7Z%2FpAaPo2ScK%2Fo8emWsg0OKycKinTq6A8dszj7gLHBhQy%2FVN59ACjvXrtw7bXkt9OmzJHBEZ2OpB0wZhMDwlv8RhxOQWMYk9GEZbfM0%2FHyd%2BY5uaZCP5F4DRe7%2BwBvT7eK9QJzHtTQZBdY2Bp6VOyZSm2PbU4ipDYUIRWkJZes9u6o%2FgXYefcMooMbaMBnxY%2F%2BExAHqzNW1Bq0gx9vA6DTYfmOMtBoWYCo9oKYD93VD5TNlFFkXLYpSBDIcF%2B957Hzl%2FxyDC7f0nJzY18RyKm%2FmfHLuAtzZBggYxHhHBjavS1hgpkJBOldejNYHJsNKExPVSpZph1Ib7owpkMcaX%2FcUiV61DqRzixlHAB1YiysHdsvz0ttfR3FvrYyW5FOn%2BU%2B%2BNjrZTAgd4ITYjIrL%2FCIjM3IaVy6s%2FyYbK0tKGiKkpXuZaZ40ys05KmsRkg8B4cTertYBGGh7o82tKjaXMmPHFqpb9lcSfxElG8r4sqNDYf0wqBQhDWgS3%2B7uHrn6YyFj4bNGRs%2Bvf2%2Fmxa9mqHPopD%2B%2FBShas%2B9Zuz3ny37HBfo77UwdMNqDicoGOqUBrM0J9buHZg%2Fh683lnJLPwKF4wTYbvMwnAC0rvLNRzbMCCY3nNuYoXpbmmlwFvoOwidY%2Fk2rYBOgKunM4rAVxCN0cUXvxCEdeHGojs5qt%2Bwh8pd6GOkkv8rPxoYiGC4ct2bW%2F4X8ZsARN8Sr5RONtsN3pRTECOysdR1e4nHTOnepyZ8s%2FF1MOG5UDCLll6ZNIJeAYl%2FgcuY%2BGiUwWLlDXxW4p1RVo&X-Amz-Signature=ebbd13cfd19a4fff0da2be44c150b352e5452cd3959fa4d9802e9ddeaf0d64a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

