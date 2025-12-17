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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJD3KRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC4SfvzBB8KK%2FWes9u2gtCyMdPb0fWdrzt0%2B9v71WsgIhAOR9aOdVdjdS4qaiqNSLAWiXG5NtIRIXsRi5%2BDGpEeeUKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE3zDNrZwM3fL4v94q3AMw0cIi%2FMhm8VOJnkxJkgzB1eJuLbHvMAUiiQCwzWfp03t1KPaOdA2vt67butO3V%2BniKun1nqNw9AbIwm8ms2ZJERFH2c7yCpSxMmXZELgqyVdnunREsVihAAtVUK4WlGElQNolkK8ufoZWXdIXTRaXM4uKAeH3GSEubwKB3Z2LccBkcXtlSB10GTJwGORA788c1L2uMoFNLCESZOJGQjlOsyFBlPleIv7PGtQcXHwZSjCU8%2FAoH8QO%2BD35YC8v6mS4f9FLca3DWnXpzbjYJrGEo8D3fOv%2FM91eryXjuEf5kpd7ja4t1qgcHCuwJFYAXoJdfaktpbCaplNGGnxnhZrXri7F6ZX0KgL%2B8NyPjMJFePGp0cb335nc9Y%2Bv2Ov6W7t3SJ6I4sbgSI9h1UNktjaFKJZkwJYYgJ9ESwbHCkn%2BTXqxfVqMvAzi2yoH6yScxjG0%2BZZ9qlGd4JGuLDogqCJutHScaq2WiRssjGqi55n5rC11OF1y%2B9UxXRiDT7djmswJtM89vsmt6O6nRGyxaXiP5vLcZFWrxiMT57XMj7g4m6KebHGIDVekKysRoLTRcmLF4Cnxq%2FJitNK370dIfJDne2%2BgZHDyois%2B5O0i2Is%2BEBIM0yJ1ewgUDI5myTDNi4zKBjqkAYfaRLVcMr8VkFGeNH9zLvLAxi8ZUZp2T4rGc%2FexkJqju23f16drWnvfp%2FeISSj3ucGJ2FOwHdsffUKBhx4jagxCi%2F4yRpwgz2uhYiMxHC912G%2FgSO9u2o6CZuqIU6LA0fsRFEUKdCO0%2FWtMX4kBpvY83mptojQKv2y8e7bztRFBJG%2BpcRqwIGdw0mVuwvVKbdbv9zTNfGHaL%2Fns%2FZZfRBslLlcM&X-Amz-Signature=0730429c45ad4269653ef5e83cd7024f8e74bae4159f2bf1ecc88e109a3b4687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNJD3KRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeC4SfvzBB8KK%2FWes9u2gtCyMdPb0fWdrzt0%2B9v71WsgIhAOR9aOdVdjdS4qaiqNSLAWiXG5NtIRIXsRi5%2BDGpEeeUKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE3zDNrZwM3fL4v94q3AMw0cIi%2FMhm8VOJnkxJkgzB1eJuLbHvMAUiiQCwzWfp03t1KPaOdA2vt67butO3V%2BniKun1nqNw9AbIwm8ms2ZJERFH2c7yCpSxMmXZELgqyVdnunREsVihAAtVUK4WlGElQNolkK8ufoZWXdIXTRaXM4uKAeH3GSEubwKB3Z2LccBkcXtlSB10GTJwGORA788c1L2uMoFNLCESZOJGQjlOsyFBlPleIv7PGtQcXHwZSjCU8%2FAoH8QO%2BD35YC8v6mS4f9FLca3DWnXpzbjYJrGEo8D3fOv%2FM91eryXjuEf5kpd7ja4t1qgcHCuwJFYAXoJdfaktpbCaplNGGnxnhZrXri7F6ZX0KgL%2B8NyPjMJFePGp0cb335nc9Y%2Bv2Ov6W7t3SJ6I4sbgSI9h1UNktjaFKJZkwJYYgJ9ESwbHCkn%2BTXqxfVqMvAzi2yoH6yScxjG0%2BZZ9qlGd4JGuLDogqCJutHScaq2WiRssjGqi55n5rC11OF1y%2B9UxXRiDT7djmswJtM89vsmt6O6nRGyxaXiP5vLcZFWrxiMT57XMj7g4m6KebHGIDVekKysRoLTRcmLF4Cnxq%2FJitNK370dIfJDne2%2BgZHDyois%2B5O0i2Is%2BEBIM0yJ1ewgUDI5myTDNi4zKBjqkAYfaRLVcMr8VkFGeNH9zLvLAxi8ZUZp2T4rGc%2FexkJqju23f16drWnvfp%2FeISSj3ucGJ2FOwHdsffUKBhx4jagxCi%2F4yRpwgz2uhYiMxHC912G%2FgSO9u2o6CZuqIU6LA0fsRFEUKdCO0%2FWtMX4kBpvY83mptojQKv2y8e7bztRFBJG%2BpcRqwIGdw0mVuwvVKbdbv9zTNfGHaL%2Fns%2FZZfRBslLlcM&X-Amz-Signature=4d3b0f857e86ac3500c3a9eb61dd5ed833a11a701c84b01ec01688d796294104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

