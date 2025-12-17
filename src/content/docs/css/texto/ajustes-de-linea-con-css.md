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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUG6OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoTMbifDuzRDLxjf5r48ooDnUMr1w40GBVfY%2BX6CdcXAiBfWKzbMLYwGDFkI3yyJTXM1howfNPoLgxbv2rzvu48wyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME2Es5C7xy7g1bR5iKtwDkDTOsOQb%2FosDIw8WfXV%2FxJWq8FdcHyToPNG0lYE6DWTNS76J8OeF5Vlh5llsCkuL9Z5PY33aFbr1IgSJLj%2FBlrq8F3%2F8HKkdzRYQniItKFoj7liOS2O28f3WDkEocxMwfo%2BOqw%2BbOUb3s2ONltuConhw6KtqNs4XCxmxN5tZz2Gm9UA%2BUckBGs2w4s3M7apMiIIVdYsHRL00GCyTY%2BwJ%2Ba5L7RE5j2%2FnK4bI9VAG00fhjOK3u6%2BDFvkCVZY3nYuyzyWrUZSpl%2FIdma7vJ39WMaA%2BZYuMPwnVrRwKkVjx7nCWmMz%2B%2FDtRnaKEQtMgXErF76%2Fu491HF9v3AWNjfVuzxX0OhQlPhhydkbcDXWTG7JcNYxmEMVQlcBDZ6vlt5K%2Fq1Ykajl7VkgJXye6rTVG1KTvNH8DmOrk%2BnuA%2BmnBHabvmx8uZBo5UjLBl8tL1yENgdfJ7wzBmcIb4ksQISP6fsWtup0%2BhnSbsL4iYjAKKw8BiRlwRHOSW5i%2FQJLLTtCkddHsURzCX5n4iXhqiy1%2FtfZzN8jhj%2BGOIUIjyCZ1qzfYUzXP%2FOlxRwci%2FKxB7UBHURhwnipTCHrKw1x3cBR3c%2Bv4eUcrVcE88Z8KkMkva5%2FipZ%2Buit1ZwhvhpaR4w84CLygY6pgGXiBwHfjIh9ujWe8H%2FE15ZLDjAG4Oj62MzzKcvk9%2BDPTeM9rnyjJcP%2BzP9BA9n2CUP%2FQFnkR8L61iTJmJaf9KPuutuLXTw5a88oj4aL2Tfi8%2B%2FWAdvZKQGFLXLzlT8wA0DBfz7FIS0GhkqfaRqJiC73KQ6RVtBKQ3AmSWYYZmP%2F7GKwfT6jlrgPqG9ShZaQNlDqo99JtF9thcgZ5KEBvo%2Flb59E6MQ&X-Amz-Signature=e67a22fe9d4284bfbdf4738fda1494f80eb1ac9bcaa2f395165d2ec0fe600ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4AUG6OD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEoTMbifDuzRDLxjf5r48ooDnUMr1w40GBVfY%2BX6CdcXAiBfWKzbMLYwGDFkI3yyJTXM1howfNPoLgxbv2rzvu48wyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIME2Es5C7xy7g1bR5iKtwDkDTOsOQb%2FosDIw8WfXV%2FxJWq8FdcHyToPNG0lYE6DWTNS76J8OeF5Vlh5llsCkuL9Z5PY33aFbr1IgSJLj%2FBlrq8F3%2F8HKkdzRYQniItKFoj7liOS2O28f3WDkEocxMwfo%2BOqw%2BbOUb3s2ONltuConhw6KtqNs4XCxmxN5tZz2Gm9UA%2BUckBGs2w4s3M7apMiIIVdYsHRL00GCyTY%2BwJ%2Ba5L7RE5j2%2FnK4bI9VAG00fhjOK3u6%2BDFvkCVZY3nYuyzyWrUZSpl%2FIdma7vJ39WMaA%2BZYuMPwnVrRwKkVjx7nCWmMz%2B%2FDtRnaKEQtMgXErF76%2Fu491HF9v3AWNjfVuzxX0OhQlPhhydkbcDXWTG7JcNYxmEMVQlcBDZ6vlt5K%2Fq1Ykajl7VkgJXye6rTVG1KTvNH8DmOrk%2BnuA%2BmnBHabvmx8uZBo5UjLBl8tL1yENgdfJ7wzBmcIb4ksQISP6fsWtup0%2BhnSbsL4iYjAKKw8BiRlwRHOSW5i%2FQJLLTtCkddHsURzCX5n4iXhqiy1%2FtfZzN8jhj%2BGOIUIjyCZ1qzfYUzXP%2FOlxRwci%2FKxB7UBHURhwnipTCHrKw1x3cBR3c%2Bv4eUcrVcE88Z8KkMkva5%2FipZ%2Buit1ZwhvhpaR4w84CLygY6pgGXiBwHfjIh9ujWe8H%2FE15ZLDjAG4Oj62MzzKcvk9%2BDPTeM9rnyjJcP%2BzP9BA9n2CUP%2FQFnkR8L61iTJmJaf9KPuutuLXTw5a88oj4aL2Tfi8%2B%2FWAdvZKQGFLXLzlT8wA0DBfz7FIS0GhkqfaRqJiC73KQ6RVtBKQ3AmSWYYZmP%2F7GKwfT6jlrgPqG9ShZaQNlDqo99JtF9thcgZ5KEBvo%2Flb59E6MQ&X-Amz-Signature=1279385f466d63cf3c4ed0eeee018453361b5a1d3d1506e08fdec1e21dedf8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

