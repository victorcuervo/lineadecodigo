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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIKH2XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXoovobz0i7ef9ldyuHrlXdr3DbMWAkDmO8Crx0n8xPAiBejlzqUR9i1i2Kk28sEQZKoXxs3DExavrXNUCwC9BJ6ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM2X6Zss%2FkffdS4PcAKtwDHl7K1CfW7bAvpJVt0ULxsrKioZWn%2Bo2xYUFjPtvESjhSW8iBIef53nyn6Jr5waQodEo8cLj0E%2BJi62%2FqkgNWR3%2FpBFR%2BvshpmsBlzGlwtkVZZXfMxfZ4xK0GU0NsO9mlSpfWehBPrN0ylRS7yONNIEhlOJ3d2eebujV3jWzf8BwZ32SraAE3ME2yHoAnKRlZlqBJ%2FDTnIW6I%2BXxOFFCnxxrD23GvWivtZ33RPfhXehepE5xl1P5FuYHFKShszdOWo%2FpwxpWY5VhOy1gz%2BVFvDFxmgPFndsVE7ahXlI4Y6AZfM4s%2BEbbI8LPZWz8i4AAPFc6C%2Fqeei6O6Hnios7fuACI%2FHWUqueN9iiUIS%2Fy6FdAaukpUZNoNRT%2FQ%2BJub2ctzcwb0WMyKrMQfKLCuydu6T9Rc7nkPt23RMg6H%2F5FJlV3yaKYb5yrh7UyXwm1ifwNmUBHM3y5VcGdyAiulQKmuxGNpm828uMfpWktGlTnz%2BVwvxQVE6Fh75NtEcSbOAwMFQGl%2BBxVjnodx6N5asnJy0nFca9xNHoRKqFyFbGPzWuJio4ObFdHp9cK4cHHtfmQScKoR2cmM4vEZwBXHzq3qcYiaPWruPgl%2BE8EpcoyY%2Fh%2FcUZ72dv5ckoA%2Fy3YwxaqKygY6pgFgcLmHKp1ECIy9VMICgHmFwm2njPM1k9U0jLiWDREsR3Cm0nqMmfMyvead7cQLDEuZe1kxveJrCxCuP2uWXH8ig1UC5xMdgELDL8hT%2FKJzUUypX7ns4Wy5CDtLvuqef81C9ejWHz5aT3tBX49mL5EFYC7Al3vt%2BHXm7g7BlsTBBsEHPvPQjbP9HkF4NWuVNyKQJmMNJh3N%2BQqhDd%2FANlw5zxUTroSU&X-Amz-Signature=9d3e61681b1ef6a108bfe9634c053da5da4add4cadedd57b1ab18042ad04d25f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TIKH2XC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDXoovobz0i7ef9ldyuHrlXdr3DbMWAkDmO8Crx0n8xPAiBejlzqUR9i1i2Kk28sEQZKoXxs3DExavrXNUCwC9BJ6ir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM2X6Zss%2FkffdS4PcAKtwDHl7K1CfW7bAvpJVt0ULxsrKioZWn%2Bo2xYUFjPtvESjhSW8iBIef53nyn6Jr5waQodEo8cLj0E%2BJi62%2FqkgNWR3%2FpBFR%2BvshpmsBlzGlwtkVZZXfMxfZ4xK0GU0NsO9mlSpfWehBPrN0ylRS7yONNIEhlOJ3d2eebujV3jWzf8BwZ32SraAE3ME2yHoAnKRlZlqBJ%2FDTnIW6I%2BXxOFFCnxxrD23GvWivtZ33RPfhXehepE5xl1P5FuYHFKShszdOWo%2FpwxpWY5VhOy1gz%2BVFvDFxmgPFndsVE7ahXlI4Y6AZfM4s%2BEbbI8LPZWz8i4AAPFc6C%2Fqeei6O6Hnios7fuACI%2FHWUqueN9iiUIS%2Fy6FdAaukpUZNoNRT%2FQ%2BJub2ctzcwb0WMyKrMQfKLCuydu6T9Rc7nkPt23RMg6H%2F5FJlV3yaKYb5yrh7UyXwm1ifwNmUBHM3y5VcGdyAiulQKmuxGNpm828uMfpWktGlTnz%2BVwvxQVE6Fh75NtEcSbOAwMFQGl%2BBxVjnodx6N5asnJy0nFca9xNHoRKqFyFbGPzWuJio4ObFdHp9cK4cHHtfmQScKoR2cmM4vEZwBXHzq3qcYiaPWruPgl%2BE8EpcoyY%2Fh%2FcUZ72dv5ckoA%2Fy3YwxaqKygY6pgFgcLmHKp1ECIy9VMICgHmFwm2njPM1k9U0jLiWDREsR3Cm0nqMmfMyvead7cQLDEuZe1kxveJrCxCuP2uWXH8ig1UC5xMdgELDL8hT%2FKJzUUypX7ns4Wy5CDtLvuqef81C9ejWHz5aT3tBX49mL5EFYC7Al3vt%2BHXm7g7BlsTBBsEHPvPQjbP9HkF4NWuVNyKQJmMNJh3N%2BQqhDd%2FANlw5zxUTroSU&X-Amz-Signature=8195b2ad3f222ce289c76bc1b78eb4a33b60b07a3f3d58db4c5cd6a42db28d93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

