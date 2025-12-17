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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOVASOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl6%2B3gudR17UJ1Pt0Q%2FgXZaLCPKPn1TY17%2FUq20Zb8aAiBf8zzackOSS6F6naQhVYxLRA394hR9LfsEI8vq8WmWwyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMh1m%2FVbWdd8b5%2FfS7KtwDi%2Ba%2BoKZuyY7OEPxUP9qdbJjSFk7Yu%2BEw%2FhsuXFRJSe7aEqh%2FJ4GtKy0I65blEmHifvCGuwSfW4piDZGhML3cjTBLn5qOyK4fS%2FXNu%2BKXB3CSNIuPp1m04gRe01JNA6dT5Vy2M2B2lqaEviU8%2FrtVBGaBFz%2FiqJXaHhE7raNCf5csgIb%2Ff8YRpOyWkLoiFGkDsEuMnZK%2FkEL6gBstYbix4hdqLxQiEDqp6eFRZ6vBSIlzD6CgsN35Su5xXOOzKZo%2BxTX3%2BvloiYckicfqir62xQJvopKNpOe94ipSge%2Fu%2FRSUsv5vydjiUOaLZPOxWBqo6PL9Fc7QBjdOjGggLWd8DHESCx9sq%2F%2Fcgh7R5G2p5Gs50XKUYWzdqbYyI4qRRrV70kpoAutizf6ej59XlF5UaZyUrrkq8B1fttCh73E8zY%2FuER41ATx4N8Pu6QRaJZ93KblwBCEm6eORALsS3M13OFQItMxA9sUNdW9MpSJKordyR29uUQPi1toeomKe5mGhINQFduocXOfEIVFyv9ibULkAnNkwarf3YiYM2G3gnOuvCRIXcPAA0k4zvA0PGKgPUheAIG69YTVCkx4TSHxoiN0qunjygb0bjlHh1OJHLsVnUmlZZvV7Y63nEKUwx4KJygY6pgH9d1vm96z0DADHagfk2iQH0GUsJH2Lw8X27sG0CcyykeAFZIsibrckbbkTptSls%2FdtS6AwmdTf3O%2B9YwEHQ%2BDNWpn4gVd3Sxj8RY1ARkuMJyUMzPKmTaGCdT5y5D1v4HYFIf6YTXLjT0TrypevVeKFcjjJkOfGeIMrV3k3MvtEYL8rM2W6m647wc1E6cS9s2fV%2F8cepwLG5szXdlnvocqec9ndOC3X&X-Amz-Signature=38c4002f3c041731f1d04ed0824866c932c25f6cd927052ced4b9cf766667501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTOVASOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl6%2B3gudR17UJ1Pt0Q%2FgXZaLCPKPn1TY17%2FUq20Zb8aAiBf8zzackOSS6F6naQhVYxLRA394hR9LfsEI8vq8WmWwyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMh1m%2FVbWdd8b5%2FfS7KtwDi%2Ba%2BoKZuyY7OEPxUP9qdbJjSFk7Yu%2BEw%2FhsuXFRJSe7aEqh%2FJ4GtKy0I65blEmHifvCGuwSfW4piDZGhML3cjTBLn5qOyK4fS%2FXNu%2BKXB3CSNIuPp1m04gRe01JNA6dT5Vy2M2B2lqaEviU8%2FrtVBGaBFz%2FiqJXaHhE7raNCf5csgIb%2Ff8YRpOyWkLoiFGkDsEuMnZK%2FkEL6gBstYbix4hdqLxQiEDqp6eFRZ6vBSIlzD6CgsN35Su5xXOOzKZo%2BxTX3%2BvloiYckicfqir62xQJvopKNpOe94ipSge%2Fu%2FRSUsv5vydjiUOaLZPOxWBqo6PL9Fc7QBjdOjGggLWd8DHESCx9sq%2F%2Fcgh7R5G2p5Gs50XKUYWzdqbYyI4qRRrV70kpoAutizf6ej59XlF5UaZyUrrkq8B1fttCh73E8zY%2FuER41ATx4N8Pu6QRaJZ93KblwBCEm6eORALsS3M13OFQItMxA9sUNdW9MpSJKordyR29uUQPi1toeomKe5mGhINQFduocXOfEIVFyv9ibULkAnNkwarf3YiYM2G3gnOuvCRIXcPAA0k4zvA0PGKgPUheAIG69YTVCkx4TSHxoiN0qunjygb0bjlHh1OJHLsVnUmlZZvV7Y63nEKUwx4KJygY6pgH9d1vm96z0DADHagfk2iQH0GUsJH2Lw8X27sG0CcyykeAFZIsibrckbbkTptSls%2FdtS6AwmdTf3O%2B9YwEHQ%2BDNWpn4gVd3Sxj8RY1ARkuMJyUMzPKmTaGCdT5y5D1v4HYFIf6YTXLjT0TrypevVeKFcjjJkOfGeIMrV3k3MvtEYL8rM2W6m647wc1E6cS9s2fV%2F8cepwLG5szXdlnvocqec9ndOC3X&X-Amz-Signature=cd399b719bf7a8943340730795b12cef491e44ae1f400e4697834aeb2ae928b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

