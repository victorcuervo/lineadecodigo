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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFT5ZZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HibhtVP13vVGbGCqxvEa3zSvvlIDm4UBmpupveCKMAiEAouyUzI69lv%2B1T%2BQ2WYQF4KJU3jXQi9ztVjK8fk%2B91tkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsFUO8SL6fW4%2FR45SrcA944a29ueKkCrdifAKn4EA2WaCW6eZxXKqYj%2FFfo%2FJyNsddEvJuc%2BqIXOxKZri%2Bnci27M3UeWIA3CeNX%2B3GK%2Bm4K0cH9VwGrX%2FqDrU7IU5GznMi14R6OSypnRw%2Fjur%2FnDcCAHjwkoel3uMQcO3FkneyHvrAnTg6qM963q5VKcW0pHe32OmEFROCNW52yr3RzN%2BeHHZ0%2BM6z2%2FTQvNqeia3s6QB4Si3dM0Pr7lfpOH9ww%2F0uiWdxgtUyh%2BVOuct9%2FtQTutjXzvsDrdbaYaOnIzjVW8VTIrIvcq9JjEwp49VFgKGQoi8UNt40jn2l0uYhxoCEKElJ%2B73Kxl009tPkMhobSHC8vS9ZKVP9987UBtstF7%2B3%2FVMzV7RqDrHI9tRn9GH%2FcRow8D8R4hgyr8IvaQ2rHiJI4yeQlX79hAcVXA4CRIsFAaAX7WGegckv3j65LJGnCatLbEjT3RWtvhsUrU%2B3%2FAiWZwwoRelaErhDmQsHaQ68jVJ6VttbtxGfuvZnMLPTLn74DEvYkt7NFna%2FyoD0DnawKyjGq%2FHacKqkPcnNlmRuEEy%2F%2F9Qr%2BMoV8lv4XyNOTx54EyZy3zBejzT1olJsWrcpFlOfuH4Il4qC3x%2Bne6%2Bdw9c03D%2Fgzuk32MISgi8oGOqUB3fTFLqV2MMVcfSVHl0RfLeo2u%2BiEZmYniSOBM4IMfCxD4wX%2Fj73rkHCME71u2wQPAeaQzY6HLJrWUY5Ns0ITgxXRwRk0q8H7g8YSXpNxpiLqLTeF5UMTv8wpwnDgQeFK8OsyMn1Pjp%2B%2FfI3hyDNQbl6gm5hjInhEAhcYOnee7CcCEEn6LXXw1OAA2mp5v5I3fxWq%2FiO46cUW9uqTiXiXufxRsExK&X-Amz-Signature=5f023779ef8f8768058aaedb091837f59294c1eb54073b07b0d7dc6692096e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GFT5ZZH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC7HibhtVP13vVGbGCqxvEa3zSvvlIDm4UBmpupveCKMAiEAouyUzI69lv%2B1T%2BQ2WYQF4KJU3jXQi9ztVjK8fk%2B91tkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEsFUO8SL6fW4%2FR45SrcA944a29ueKkCrdifAKn4EA2WaCW6eZxXKqYj%2FFfo%2FJyNsddEvJuc%2BqIXOxKZri%2Bnci27M3UeWIA3CeNX%2B3GK%2Bm4K0cH9VwGrX%2FqDrU7IU5GznMi14R6OSypnRw%2Fjur%2FnDcCAHjwkoel3uMQcO3FkneyHvrAnTg6qM963q5VKcW0pHe32OmEFROCNW52yr3RzN%2BeHHZ0%2BM6z2%2FTQvNqeia3s6QB4Si3dM0Pr7lfpOH9ww%2F0uiWdxgtUyh%2BVOuct9%2FtQTutjXzvsDrdbaYaOnIzjVW8VTIrIvcq9JjEwp49VFgKGQoi8UNt40jn2l0uYhxoCEKElJ%2B73Kxl009tPkMhobSHC8vS9ZKVP9987UBtstF7%2B3%2FVMzV7RqDrHI9tRn9GH%2FcRow8D8R4hgyr8IvaQ2rHiJI4yeQlX79hAcVXA4CRIsFAaAX7WGegckv3j65LJGnCatLbEjT3RWtvhsUrU%2B3%2FAiWZwwoRelaErhDmQsHaQ68jVJ6VttbtxGfuvZnMLPTLn74DEvYkt7NFna%2FyoD0DnawKyjGq%2FHacKqkPcnNlmRuEEy%2F%2F9Qr%2BMoV8lv4XyNOTx54EyZy3zBejzT1olJsWrcpFlOfuH4Il4qC3x%2Bne6%2Bdw9c03D%2Fgzuk32MISgi8oGOqUB3fTFLqV2MMVcfSVHl0RfLeo2u%2BiEZmYniSOBM4IMfCxD4wX%2Fj73rkHCME71u2wQPAeaQzY6HLJrWUY5Ns0ITgxXRwRk0q8H7g8YSXpNxpiLqLTeF5UMTv8wpwnDgQeFK8OsyMn1Pjp%2B%2FfI3hyDNQbl6gm5hjInhEAhcYOnee7CcCEEn6LXXw1OAA2mp5v5I3fxWq%2FiO46cUW9uqTiXiXufxRsExK&X-Amz-Signature=ecfcda46518d157b8b78c1ce5876ba91726689cd1cc31f08c94270fea6db52e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

