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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COUMISY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpmtReI%2BJrXIMCOpePGARebUw%2BFWzdjnWY4tyCJryDwIgc%2BzwGYF0NiRe9G%2BqslwMx8LAAUfDLVn8oyXsogEAa0Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOCkVTc4Ctd6KDkgqCrcA4th%2Ffa0sloJeUANmiqKVQGFz%2BE0lg7RJGoedmwnj8ntEKMX1KXVth2Fw2%2BXmhSTU5kqLS%2FR4gZtyC3FkrVKf03%2FP%2F1IrxFAsJ1Pl91%2FfjxsimfdWx4NzFRewmUjXZ6l1T7GaQDAs3rMLCDkhgmqZEIkZy4wOAJsihsfv%2B0vRejrSg8vo7jo%2F3EYIlY099WawMFpzCJb62rPXBq5C379m3%2FDJh5iF3%2F%2BjX29FUEGB3txsnnw3xni0IJA3fK0ryonKtlivRHTPhx9Wx44%2F%2Fd6sTgIDf9FwyxOUcpEyOaDpNdsmCRa3yWrH71MGhgt9w%2FjqwQMZnpx0hrqz3k%2FhrYutAehZ%2BrrU3Pkop8zJYUvFIpJuSgxadt3lBajaqqdU8vtgML7k1CIuB0Sg3narOBen29JKzdUJdNvy8bb3y%2F%2BHF75iLfN%2B3KGXbL%2Bk2nSTs0l4Xh7etHTqLDIlXM5r6bDzyiUWEWo10j038UFIJ0HLr%2BB%2B7QG6KvxPKtEPpRNZSH7cIEAZQ6BTc5chYkY6oxXhsHASCCKR7EbBKvfB0a6rzMhB6MDrv6Cebd5Y8fSkBbN4yoBNXV0mNfFeeQc8oiWzUDPGrvaluAkCuJ8LqPMQjsmo9uRREm0hda6WO0IMPCqisoGOqUBgSbnUvAqYbEB53xffscSYA8CEYmhpOU2vaqDLoyAwikc8%2BeXe8CjFbtXKoAX7xVFczkHMyMAiblAJYHgn6cl8qWrw6rGNlfIvwiCubUJdCrsZq0Yz5P0Iam7TNs7dMVU52hxstWBkka97vrFXrBdBUZ%2B0zYQ%2Bm4UBQNLjPulFpkoh%2Bl1Pl5zRRlEFu4tSWP0xbq5movTF2l5bgOUr73epsTJ%2BKv6&X-Amz-Signature=8be7b1acd18032dffd44ac88e8b1d7286950bb88ef94de79d25904fc2b6e0d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662COUMISY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBpmtReI%2BJrXIMCOpePGARebUw%2BFWzdjnWY4tyCJryDwIgc%2BzwGYF0NiRe9G%2BqslwMx8LAAUfDLVn8oyXsogEAa0Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOCkVTc4Ctd6KDkgqCrcA4th%2Ffa0sloJeUANmiqKVQGFz%2BE0lg7RJGoedmwnj8ntEKMX1KXVth2Fw2%2BXmhSTU5kqLS%2FR4gZtyC3FkrVKf03%2FP%2F1IrxFAsJ1Pl91%2FfjxsimfdWx4NzFRewmUjXZ6l1T7GaQDAs3rMLCDkhgmqZEIkZy4wOAJsihsfv%2B0vRejrSg8vo7jo%2F3EYIlY099WawMFpzCJb62rPXBq5C379m3%2FDJh5iF3%2F%2BjX29FUEGB3txsnnw3xni0IJA3fK0ryonKtlivRHTPhx9Wx44%2F%2Fd6sTgIDf9FwyxOUcpEyOaDpNdsmCRa3yWrH71MGhgt9w%2FjqwQMZnpx0hrqz3k%2FhrYutAehZ%2BrrU3Pkop8zJYUvFIpJuSgxadt3lBajaqqdU8vtgML7k1CIuB0Sg3narOBen29JKzdUJdNvy8bb3y%2F%2BHF75iLfN%2B3KGXbL%2Bk2nSTs0l4Xh7etHTqLDIlXM5r6bDzyiUWEWo10j038UFIJ0HLr%2BB%2B7QG6KvxPKtEPpRNZSH7cIEAZQ6BTc5chYkY6oxXhsHASCCKR7EbBKvfB0a6rzMhB6MDrv6Cebd5Y8fSkBbN4yoBNXV0mNfFeeQc8oiWzUDPGrvaluAkCuJ8LqPMQjsmo9uRREm0hda6WO0IMPCqisoGOqUBgSbnUvAqYbEB53xffscSYA8CEYmhpOU2vaqDLoyAwikc8%2BeXe8CjFbtXKoAX7xVFczkHMyMAiblAJYHgn6cl8qWrw6rGNlfIvwiCubUJdCrsZq0Yz5P0Iam7TNs7dMVU52hxstWBkka97vrFXrBdBUZ%2B0zYQ%2Bm4UBQNLjPulFpkoh%2Bl1Pl5zRRlEFu4tSWP0xbq5movTF2l5bgOUr73epsTJ%2BKv6&X-Amz-Signature=5297d56b35dcf8719804f913b4df425ffdce649370a805bc714ed02092b72b5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

