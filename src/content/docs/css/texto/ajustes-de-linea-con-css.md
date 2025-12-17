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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGOAT5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErWrj71aRTcBCpuDkBSo7xKLtKC%2FBXIHEx2Syd9IzbqAiBshmQD5jO9ymTHNisXhuUV19zV0ry4cNo%2Bp%2FmjLI3ROiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmmY0sp9Ba%2B1Nedl2KtwDfQhiLAIs4UZTz1GbrYGBbbQlpDLLV6CAnv4QmzF%2Bhu42ghvr9kJaZmI%2F7971w2fGG92wGm5Gs7h41Id03kEWqRrt9DDUBg99D5LGfkaVkOEEmJ4WmWIWjp5cVwBuBzsUqyUKadR%2FKFo%2BWvyHrTkb8vG3NTahIBAsi4Cwogu6Qt7JyC4FSZxMo9gWN%2FXoHQ8sTJ7QMd5YkzkMUYJLC21TFoMCSSBTenbV5jch1xUIBLZRgj2C2jLiIq4ucah7hLf1bU9XZa7MtPvvOJv4l%2FnJMiIa%2Bfsfnz1yZOyqggilC5ExZ4WmQDPPzYwIipooz275NnxQOQMsvkx%2BTmygRCJ2ZsL6mdDjWSKMNgjiZfwU4wSX76aFdxmANf6vPNUj2fCqOrhKi%2BLlV5ilFLcgy%2BCveh8CRFEmZrah7iMWAeOHfiDvWTIByFPEsOaTkRZMZOnvmJD%2BgzXpqGyHNS%2BDYv34IkW66zfCw8jzvD2Uy0IkSoNjZjizQ9fj4KKOU5X4H8T5Rd1AkI308KEEMC54Td2Hk7cMNqdV2joucOlotCTaneiBEK0z422TB6rzF80O6RgEqC7oxmTZIAFDYr2lggHIm1ZhiMzLBvd%2Fv0ek1vmVUYW3gpnEhYjbEBS6l6Iw0q6MygY6pgHjIc7nEWhofx6q9CiiKM4sM9kThanzX169ong50dnpMAMrIPFWDAkAQdqO3BnmeoYgfUsvUeP8nJvIJ%2Bd0igtBCyCqYK09MYGkvPrHqxwXWp4NG5g4U4Mq8F2%2BomLIcYw4woJM%2Fxsrh9KrrdsDC4KyofXi4EBLYV7VovEkBUyvIen5KemoqgvSbYknmvDhWxFV5g0RdBv6pWnsSA3D5W1%2B8fG4ZJbi&X-Amz-Signature=d5d33c3810da9af8243c35a5cd476a1d48503e8fbe17c43de8423137a9993702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGOAT5K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErWrj71aRTcBCpuDkBSo7xKLtKC%2FBXIHEx2Syd9IzbqAiBshmQD5jO9ymTHNisXhuUV19zV0ry4cNo%2Bp%2FmjLI3ROiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmmY0sp9Ba%2B1Nedl2KtwDfQhiLAIs4UZTz1GbrYGBbbQlpDLLV6CAnv4QmzF%2Bhu42ghvr9kJaZmI%2F7971w2fGG92wGm5Gs7h41Id03kEWqRrt9DDUBg99D5LGfkaVkOEEmJ4WmWIWjp5cVwBuBzsUqyUKadR%2FKFo%2BWvyHrTkb8vG3NTahIBAsi4Cwogu6Qt7JyC4FSZxMo9gWN%2FXoHQ8sTJ7QMd5YkzkMUYJLC21TFoMCSSBTenbV5jch1xUIBLZRgj2C2jLiIq4ucah7hLf1bU9XZa7MtPvvOJv4l%2FnJMiIa%2Bfsfnz1yZOyqggilC5ExZ4WmQDPPzYwIipooz275NnxQOQMsvkx%2BTmygRCJ2ZsL6mdDjWSKMNgjiZfwU4wSX76aFdxmANf6vPNUj2fCqOrhKi%2BLlV5ilFLcgy%2BCveh8CRFEmZrah7iMWAeOHfiDvWTIByFPEsOaTkRZMZOnvmJD%2BgzXpqGyHNS%2BDYv34IkW66zfCw8jzvD2Uy0IkSoNjZjizQ9fj4KKOU5X4H8T5Rd1AkI308KEEMC54Td2Hk7cMNqdV2joucOlotCTaneiBEK0z422TB6rzF80O6RgEqC7oxmTZIAFDYr2lggHIm1ZhiMzLBvd%2Fv0ek1vmVUYW3gpnEhYjbEBS6l6Iw0q6MygY6pgHjIc7nEWhofx6q9CiiKM4sM9kThanzX169ong50dnpMAMrIPFWDAkAQdqO3BnmeoYgfUsvUeP8nJvIJ%2Bd0igtBCyCqYK09MYGkvPrHqxwXWp4NG5g4U4Mq8F2%2BomLIcYw4woJM%2Fxsrh9KrrdsDC4KyofXi4EBLYV7VovEkBUyvIen5KemoqgvSbYknmvDhWxFV5g0RdBv6pWnsSA3D5W1%2B8fG4ZJbi&X-Amz-Signature=6844a1459407a5773d7d1ebee838884e2361db00c97e261ab7df2eb4ebbadbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

