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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6QNXUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyNbZRId6RUGSs821xfkoyOwa4Q7hn4XNKeMb%2FNVqRgIgL2x1o6arQ8vEXrUqRTVLNP7BzwrCfeoYWEbvS3uyPd8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNFJmUmPvZt2dhWLOircA6%2FRpOE6Nzi6zRoHzTPbI0kWn7Y%2FZD6MOpiBVgm10xBlTy6maBPzHsNsUVa2HjmpxiCyjUjkSqIxwJinc6Xc0R%2FeKY6XlZqn%2Fn7YPUiW50x01uiVf0nwfPrx2kJebHtLjZlzP5%2Fgx%2BjgFSpLOA0RoIFQmGqmDT9CTyES6JPXgHaeXL6t5WxxVkEQMTjaWNhZ%2Bk8WD4CSE%2B8Ji9y15czNEBH04QXgg1lZxKykRdltRual4aSt711%2B%2Beqb3vzEAYmbcYvhVaNUWL3LvN%2BQ8dz83KWjAcpRJbJb5XjBlhQ5qm1Plk4aGi3kwHJNbHca%2BVZayi8FRrdcW1ZP3bHaYYhOiPT9dj1XG3yBHUjY0SubtYFuJT4Cybn71xyyyisDKPKTuspVEDMqg39BIyJ%2BQ4y9oQJo2q5ZOj44ay9AXuT04MKcmzW0OtjsbvbAX7DazFbtkjq28fnoue1EtPwLDB8OOQsTUYN3D0uLKQfPNyACTitr2x%2F37Zt%2BQBTQWzjRboHmlWCfc5sZU2gzUoSfZlyWgmhSGWPZDirV%2B%2F2xrW9KZii9agpkVn1UX5WSjdxAEmLVbOm4IjnpLGY%2BhOwkuxXru07x9o2OzNKiIHmrUTAxtQlp8Kt0OVx5ViQz2UapMJ7GisoGOqUBN%2BI%2BnDeN9g1Xd%2BrE2n2W0gJDVUVc4VuYaixCEcbQg50CePq4A%2FHn6R4JHlTjaO7YjwCxMWydYunP7wylg02oMU5gkFNYEhMRrXXU4Caa9d934xJFzL4S9jySkXhpJE6LsdvCe51M2JYu1biu0VAS277%2F7oBEpphmgGwyXEuV7i%2FyIyaZyG2u3NAP0qwbEwl4zm8BgkoQk3jajuGq%2B%2F4QNrogB2Oa&X-Amz-Signature=5dda913391c288695ebd34ca93b404d9c8e56eaab60333e745d4be570419e2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V6QNXUN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCyNbZRId6RUGSs821xfkoyOwa4Q7hn4XNKeMb%2FNVqRgIgL2x1o6arQ8vEXrUqRTVLNP7BzwrCfeoYWEbvS3uyPd8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNFJmUmPvZt2dhWLOircA6%2FRpOE6Nzi6zRoHzTPbI0kWn7Y%2FZD6MOpiBVgm10xBlTy6maBPzHsNsUVa2HjmpxiCyjUjkSqIxwJinc6Xc0R%2FeKY6XlZqn%2Fn7YPUiW50x01uiVf0nwfPrx2kJebHtLjZlzP5%2Fgx%2BjgFSpLOA0RoIFQmGqmDT9CTyES6JPXgHaeXL6t5WxxVkEQMTjaWNhZ%2Bk8WD4CSE%2B8Ji9y15czNEBH04QXgg1lZxKykRdltRual4aSt711%2B%2Beqb3vzEAYmbcYvhVaNUWL3LvN%2BQ8dz83KWjAcpRJbJb5XjBlhQ5qm1Plk4aGi3kwHJNbHca%2BVZayi8FRrdcW1ZP3bHaYYhOiPT9dj1XG3yBHUjY0SubtYFuJT4Cybn71xyyyisDKPKTuspVEDMqg39BIyJ%2BQ4y9oQJo2q5ZOj44ay9AXuT04MKcmzW0OtjsbvbAX7DazFbtkjq28fnoue1EtPwLDB8OOQsTUYN3D0uLKQfPNyACTitr2x%2F37Zt%2BQBTQWzjRboHmlWCfc5sZU2gzUoSfZlyWgmhSGWPZDirV%2B%2F2xrW9KZii9agpkVn1UX5WSjdxAEmLVbOm4IjnpLGY%2BhOwkuxXru07x9o2OzNKiIHmrUTAxtQlp8Kt0OVx5ViQz2UapMJ7GisoGOqUBN%2BI%2BnDeN9g1Xd%2BrE2n2W0gJDVUVc4VuYaixCEcbQg50CePq4A%2FHn6R4JHlTjaO7YjwCxMWydYunP7wylg02oMU5gkFNYEhMRrXXU4Caa9d934xJFzL4S9jySkXhpJE6LsdvCe51M2JYu1biu0VAS277%2F7oBEpphmgGwyXEuV7i%2FyIyaZyG2u3NAP0qwbEwl4zm8BgkoQk3jajuGq%2B%2F4QNrogB2Oa&X-Amz-Signature=747aec8feaeec13e0390b09aa3b7b13cded870e0eb7bb8db5b332632e46993c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

