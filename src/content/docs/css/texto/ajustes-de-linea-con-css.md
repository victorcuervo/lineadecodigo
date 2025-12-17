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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNBAPZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBe1E2eI4Pb%2F%2FACuDSdbKjJ6OZI9qkobPEC4Y2rnQA38AiBHbRpi%2B22UqlZIHRWvmIkaiigEREcm9rMN5hcskAbu3Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkpxcwOxgeH1gdC1KKtwDtsFghkn8WSVzeP9A4mCsog3jQZBC1WridP30EQr6peh3Fp548QxcQBmGAL5UroTKnoh06DQ7764sate2qstBTGdvO1cZko7%2FIr5uXfmfi5jjV%2FgzIUMaWl7R%2BtDuCi5BZ1I4DwTT0y7gxpuKbJwVdGHt6fsMQr0ku2121oihQdenTUKwxoGUxiDBB%2B7o3%2FzRPtV32Z2KFnYyvNC34kWB98cO0x19aGOafUfMqj3Kpjf6nH5dRIfxVF61WEG8qSFDvmqIZFTkjV1BoahYFa9Jjeo2SAsbP1ym5oMGq6EhE6EJ1w6K6oabgkE2Y133rfj6vXceVQhCvA2Upy4PbMOiGW3QyjgDotErTt8K222tCAnIvI2LpUtd%2BnzDYHm0vYr29QL1dTJBFNeI%2FhfBhAjcWrJ9Rb8ObrrdJ3bLebhFF2feUoxfIr2qeatz97knAWWKXzmdxrMYT2TIVu2gOYCk7%2BGc%2BW6QjKVWShy6od7Voa2mVQ6suXbix6dMwrw7oHE5fdjwezpqCvpYtijml1Nf56MVr5cXYkgjauilGiTmOWtwzcv6onJ5fC3TdIn0qZ1Ikcs%2FHFyYmuvWVg5MtuAHy38dCP5HbshHZ3j%2B9OvUF%2BFKj9b6l9DXKCcReU4wz9%2BHygY6pgFSuxJKi3wALEzRdu0Un0NYBfgxLS3cnygMOcaPNS7ul6QLfS8F%2FMRHtPjlTuv5nLS2ZkFhxxv%2FDcooU9Hk36T4gnq14Gt3nemWyq44tqx%2FkQVLLBM6zweBWUE37hR3J3ALZAPz6qUEcot%2FupVGzcOFZC0pw0V1Xpz3rjS3fv%2FgysHE5v3yiB2w7c9bL0icxdd%2Fv6ZvbiuA%2Btt4wjLdMf5je2DLpldq&X-Amz-Signature=a9bdcbdc2f2cf01497b1a22fd374f4821c5400196ca1ebe75999773deb15f4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRNBAPZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBe1E2eI4Pb%2F%2FACuDSdbKjJ6OZI9qkobPEC4Y2rnQA38AiBHbRpi%2B22UqlZIHRWvmIkaiigEREcm9rMN5hcskAbu3Cr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkpxcwOxgeH1gdC1KKtwDtsFghkn8WSVzeP9A4mCsog3jQZBC1WridP30EQr6peh3Fp548QxcQBmGAL5UroTKnoh06DQ7764sate2qstBTGdvO1cZko7%2FIr5uXfmfi5jjV%2FgzIUMaWl7R%2BtDuCi5BZ1I4DwTT0y7gxpuKbJwVdGHt6fsMQr0ku2121oihQdenTUKwxoGUxiDBB%2B7o3%2FzRPtV32Z2KFnYyvNC34kWB98cO0x19aGOafUfMqj3Kpjf6nH5dRIfxVF61WEG8qSFDvmqIZFTkjV1BoahYFa9Jjeo2SAsbP1ym5oMGq6EhE6EJ1w6K6oabgkE2Y133rfj6vXceVQhCvA2Upy4PbMOiGW3QyjgDotErTt8K222tCAnIvI2LpUtd%2BnzDYHm0vYr29QL1dTJBFNeI%2FhfBhAjcWrJ9Rb8ObrrdJ3bLebhFF2feUoxfIr2qeatz97knAWWKXzmdxrMYT2TIVu2gOYCk7%2BGc%2BW6QjKVWShy6od7Voa2mVQ6suXbix6dMwrw7oHE5fdjwezpqCvpYtijml1Nf56MVr5cXYkgjauilGiTmOWtwzcv6onJ5fC3TdIn0qZ1Ikcs%2FHFyYmuvWVg5MtuAHy38dCP5HbshHZ3j%2B9OvUF%2BFKj9b6l9DXKCcReU4wz9%2BHygY6pgFSuxJKi3wALEzRdu0Un0NYBfgxLS3cnygMOcaPNS7ul6QLfS8F%2FMRHtPjlTuv5nLS2ZkFhxxv%2FDcooU9Hk36T4gnq14Gt3nemWyq44tqx%2FkQVLLBM6zweBWUE37hR3J3ALZAPz6qUEcot%2FupVGzcOFZC0pw0V1Xpz3rjS3fv%2FgysHE5v3yiB2w7c9bL0icxdd%2Fv6ZvbiuA%2Btt4wjLdMf5je2DLpldq&X-Amz-Signature=b57f0470341c7618f6518d70f7b32e4b8c59738f74e593254ada5c29bc77aff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

