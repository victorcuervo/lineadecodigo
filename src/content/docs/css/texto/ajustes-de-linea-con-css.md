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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCC4MP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQPxz6xcN5GMuM%2BzLi7GAkSnd4XpM1U9DELQPOY1BeAQIhAI91tv1n6UsBnP30E1AvoCGdu9zuWBGdLDSVlWg2YwdtKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2FzEpLP77DWMqiHrEq3APIddf8O8blm3lxK0N0Q42vn5EicXoEth9q3L21k%2B2qO6je7CbVWfZVfq86NMo1BOHM8pJ4Nh%2BeNGIeH9pAZk4f12BGLRBPXfQzhohYUCHCtEibo6EkBBbcsYSwI0eay2yJq5kgRduJiCv2uJ5yzOtw7FWXuXKC2Hu6zeBgXaUUjwPFpAPBMmK3At5ceGryWCnqfnRCN3%2F331lP4V0ijn0W4F1gOnjcb%2FZw9BBD4km6xp8W9F13naMypCGd4gXZ0jtWqtff5JC%2FU9k1jzB%2Fa8uZ9%2FH0uLB9jqmRspV%2FlbhaKtAiSWPvmM9Yv9WbhC4%2BsLgOQLtK90%2B4oo92Z8fRxuDK7ffukSoejsIb3%2BLBOwoK3CfeKDaiUlTV1K5gQ%2B%2Fi8bG%2FsWZIacmt3J5KpSpdnTz89GJ1zKi093zF3yfDEsrr824ETjxt1E%2BOaK7entUwMwDX8PZ51dhZQrFiAs%2FssN2hfd9PcUZTIol1bCI11lYMTLAFRKUbrhQ8jHHJFfMu7GdaptizWe0LA7kvBWMaW5PTnN7OMLVKfLPURySt8oEoMS7nzuSdHDKGUdYP14ueoiubIboRHQtlIrs5s7tp7DAn73GXt3D7IiRs2pCsG8Q5bQ3%2FuSd%2BMUjjyN0AQjCtl4jKBjqkATb1YRwyQCiFzCR5LhPyxNn4eGdmSIo72a9XuhAnRCIyQt1OXeR130L3Bei1aXL0kw23xNQUaosvHSBpxD9i2l7cydJFlwHeNg5whjy9RYSIDdojCYGi%2FrZ7ZVyUl2hr1pVkSAvUYpTgQskTBFHwRsNsyW8Aw22J4g2uyHCgn3I%2BK9J%2FTp86yh%2B5w63YzHiTEqE2hF%2BuStlXD2m%2FcE5tt%2F5DZ1g1&X-Amz-Signature=846591ba3335e149c837f67b6d3cb20fa8fb79c146ef9c8705857687ce137d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RCC4MP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQPxz6xcN5GMuM%2BzLi7GAkSnd4XpM1U9DELQPOY1BeAQIhAI91tv1n6UsBnP30E1AvoCGdu9zuWBGdLDSVlWg2YwdtKv8DCHMQABoMNjM3NDIzMTgzODA1Igz%2FzEpLP77DWMqiHrEq3APIddf8O8blm3lxK0N0Q42vn5EicXoEth9q3L21k%2B2qO6je7CbVWfZVfq86NMo1BOHM8pJ4Nh%2BeNGIeH9pAZk4f12BGLRBPXfQzhohYUCHCtEibo6EkBBbcsYSwI0eay2yJq5kgRduJiCv2uJ5yzOtw7FWXuXKC2Hu6zeBgXaUUjwPFpAPBMmK3At5ceGryWCnqfnRCN3%2F331lP4V0ijn0W4F1gOnjcb%2FZw9BBD4km6xp8W9F13naMypCGd4gXZ0jtWqtff5JC%2FU9k1jzB%2Fa8uZ9%2FH0uLB9jqmRspV%2FlbhaKtAiSWPvmM9Yv9WbhC4%2BsLgOQLtK90%2B4oo92Z8fRxuDK7ffukSoejsIb3%2BLBOwoK3CfeKDaiUlTV1K5gQ%2B%2Fi8bG%2FsWZIacmt3J5KpSpdnTz89GJ1zKi093zF3yfDEsrr824ETjxt1E%2BOaK7entUwMwDX8PZ51dhZQrFiAs%2FssN2hfd9PcUZTIol1bCI11lYMTLAFRKUbrhQ8jHHJFfMu7GdaptizWe0LA7kvBWMaW5PTnN7OMLVKfLPURySt8oEoMS7nzuSdHDKGUdYP14ueoiubIboRHQtlIrs5s7tp7DAn73GXt3D7IiRs2pCsG8Q5bQ3%2FuSd%2BMUjjyN0AQjCtl4jKBjqkATb1YRwyQCiFzCR5LhPyxNn4eGdmSIo72a9XuhAnRCIyQt1OXeR130L3Bei1aXL0kw23xNQUaosvHSBpxD9i2l7cydJFlwHeNg5whjy9RYSIDdojCYGi%2FrZ7ZVyUl2hr1pVkSAvUYpTgQskTBFHwRsNsyW8Aw22J4g2uyHCgn3I%2BK9J%2FTp86yh%2B5w63YzHiTEqE2hF%2BuStlXD2m%2FcE5tt%2F5DZ1g1&X-Amz-Signature=a7f5b2c05356d7506f6dea45fa092c4e0c867ddd255b9f82e5dfead5a5eb34e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

