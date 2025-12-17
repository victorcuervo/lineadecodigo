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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP7TV35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUl3Xp9yrdHv%2FVxAV4J%2FBf5SdLxvr%2FznEq37%2Ft8VCh2AiB%2BZ7Qp46U8V8wDGhTuAvOoxM9KF9CslYh2Y2i5irl8hyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzzQVPjqX3fyoG6O8KtwD3XYq6GecyQHUO0J8zR2Wv2hzCzJdH63B6za5xwH1WzyucjwiUaIJuWqy%2B9pkl6RBkXP0wiAbqbgH7eHs12EBoEdUPkwVJiP4Mqc2j%2FZAoMkwUrzYm3wqoYMzGSGIm7EhiUD1GrPdNoC2wezzqfuwCEX85rmwIZ%2Fzi%2B2IJF5mp%2BZrAHlIuqENVUUwlI5M9idxulzBf3c%2B2EI0DOWIbFDpycXbPNwoZWrBtbKfOEfEmzvllV8b%2BxmkL25mv7AkrLbzcj6RGNuqpBjhflZrbEcJqF40NVxakNOn8mt3%2FPlmJOpwU2B5St8yfrC9xei1W%2BM21I3TiUbNkOiPX4wQlrV0GnTzB9j0jU8jImOBxN6YAvC6x8HjQ1FtsSdt8rHKIPC5wEweKY%2FMc0kGxSZThV9lG3JcNRcAol9dfQuRrR%2FflG5JkfCC%2Bhlkk34PmTZuYaazf2nsZRu0SmX7dJ2q%2BHun%2FSaIxzfHs2Af%2Fd7TNyFv5k6GrBgBNnuvCOaseYLX8np5dFXhvbfVaMIJEBOPxxutDZSI9pIe8FgpUTK4N4Lj8vk%2Bvw4ENbKb20qtKc35n21YNwVxlEruJqGUz5xEvGe4EzcUO5Cepvt8BoZmhdGIr2lkuYDPULPJiLdrUAYwpaCLygY6pgGJraMXGdwIGjLbO6odQxsGZARj%2FuFtsJsBg%2FHJ3LEpcLsWqV%2B6Tux15NxsriUK6SBZWqiX8894RsJqpfGKipKKxrjZudRfZmQdSvnB6DCIWRK6Al0PkvuozyL6MJvwVdmI41goMPqq%2B10dKCHDHf80DBx2hOlZvFF7f6PWLWZDolpn0y3mO8Qm%2B0trL%2B7Ly84mz9k2BCU3Kmjw0gvvNFM5kPp6M9Rb&X-Amz-Signature=462fe7dd41ea6be24e9d499a2fcef27fe7f2b86a01d18d395491f88eba42c3a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGP7TV35%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T185830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUl3Xp9yrdHv%2FVxAV4J%2FBf5SdLxvr%2FznEq37%2Ft8VCh2AiB%2BZ7Qp46U8V8wDGhTuAvOoxM9KF9CslYh2Y2i5irl8hyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzzQVPjqX3fyoG6O8KtwD3XYq6GecyQHUO0J8zR2Wv2hzCzJdH63B6za5xwH1WzyucjwiUaIJuWqy%2B9pkl6RBkXP0wiAbqbgH7eHs12EBoEdUPkwVJiP4Mqc2j%2FZAoMkwUrzYm3wqoYMzGSGIm7EhiUD1GrPdNoC2wezzqfuwCEX85rmwIZ%2Fzi%2B2IJF5mp%2BZrAHlIuqENVUUwlI5M9idxulzBf3c%2B2EI0DOWIbFDpycXbPNwoZWrBtbKfOEfEmzvllV8b%2BxmkL25mv7AkrLbzcj6RGNuqpBjhflZrbEcJqF40NVxakNOn8mt3%2FPlmJOpwU2B5St8yfrC9xei1W%2BM21I3TiUbNkOiPX4wQlrV0GnTzB9j0jU8jImOBxN6YAvC6x8HjQ1FtsSdt8rHKIPC5wEweKY%2FMc0kGxSZThV9lG3JcNRcAol9dfQuRrR%2FflG5JkfCC%2Bhlkk34PmTZuYaazf2nsZRu0SmX7dJ2q%2BHun%2FSaIxzfHs2Af%2Fd7TNyFv5k6GrBgBNnuvCOaseYLX8np5dFXhvbfVaMIJEBOPxxutDZSI9pIe8FgpUTK4N4Lj8vk%2Bvw4ENbKb20qtKc35n21YNwVxlEruJqGUz5xEvGe4EzcUO5Cepvt8BoZmhdGIr2lkuYDPULPJiLdrUAYwpaCLygY6pgGJraMXGdwIGjLbO6odQxsGZARj%2FuFtsJsBg%2FHJ3LEpcLsWqV%2B6Tux15NxsriUK6SBZWqiX8894RsJqpfGKipKKxrjZudRfZmQdSvnB6DCIWRK6Al0PkvuozyL6MJvwVdmI41goMPqq%2B10dKCHDHf80DBx2hOlZvFF7f6PWLWZDolpn0y3mO8Qm%2B0trL%2B7Ly84mz9k2BCU3Kmjw0gvvNFM5kPp6M9Rb&X-Amz-Signature=9bfd3c39f4bb359c5953889a41e3804be3df0ec91f387fdab8e25f02a3010e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

