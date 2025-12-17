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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFQICQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8RQD0XC6ktRJ56vjcSJ7OMHvDTGFBliWGPItkpZkQAiBIeP0x%2FVTY1q8NcX3o7KnWAr%2BvjeWGzffXqgkRz1j1jSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOHyWpLOIhu3F6LUnKtwD34UvsifyVXyTtpHeEgAJrjc%2B31wmZ5j%2BdHPAomUgoIjePPEMWn4R9yG5vQjobfGGiRSfpzQyLnEnWDTN6jsdXNrDX16upxowGRM8yZAvgyZgF2Up79G1IqU5ouOOnN7ntZ576DHExo%2BjymBYTkwD160Bk9VKQo8WUYNcdkmxOqmCUB9MQ0x6uwdXwujsuFyyIv1EJU6pkgec4ww9Wh6eGeN6Qv%2B9qhEArTP14x3g9i%2BhxMCfHBdgRtMyvm5B2P4Wi4zpbxGnMK5gcmPAk2HXYomDQnwNBTDj%2BkeBnINtHdo2EBSkwSqVHIeoLLZGH6cMSn7ZZC6ApIAvVdLL3Vq0wScIr63wVjyhvzzV8a12o6wWY1NqF%2FJVGZeYlSMkwad6B%2FRL8mdylybiDmT%2FIgixwng2EolN1R1rgp02CSy3V%2FnQLyMmeZqf7y4p8PYNlz7c3DsOhBUf4C7Bmj6WrVBf7bvPYLVJJcnT8bgj4yxC2NHTBIQuGZmqv%2FzM11oDxl%2F%2B85wlYQLCd1uYu9mZtDQUO5ZHkOBzsU%2FCvbAwZCeVa%2FfQGILjseQR0duy%2FkOdZnko2BExoAHJ%2BUvTcoLLznotDbgNoqXx%2FyTGMpTtmBo7Ml5PM%2F69y68QlKabJegwrPqHygY6pgHGbyhw%2F3fjvmbE2PXy8rCUg2wXIFDpWRwqrvZvHAv8ZH8lhu0iawcwIX%2BmEgUvsmNXpt66M5bXKDG3n8vymTWhdFRHdSI3dHy38gycJ0Sk7quTjINS4GfNOwwNJnacol8A5my9T1n15Pcbfkz9ChNA8Sc9Utp8okDsS05j4n5xle7p0tHWvnDlnTLLrotTnfpwKVdvIBP36UHOLSFP7wgsRSGh%2BefY&X-Amz-Signature=6be0486d3468d3cd192686a87076f2fb5ddada7fd613b4942949886852fc06e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNFQICQ3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICq8RQD0XC6ktRJ56vjcSJ7OMHvDTGFBliWGPItkpZkQAiBIeP0x%2FVTY1q8NcX3o7KnWAr%2BvjeWGzffXqgkRz1j1jSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMOHyWpLOIhu3F6LUnKtwD34UvsifyVXyTtpHeEgAJrjc%2B31wmZ5j%2BdHPAomUgoIjePPEMWn4R9yG5vQjobfGGiRSfpzQyLnEnWDTN6jsdXNrDX16upxowGRM8yZAvgyZgF2Up79G1IqU5ouOOnN7ntZ576DHExo%2BjymBYTkwD160Bk9VKQo8WUYNcdkmxOqmCUB9MQ0x6uwdXwujsuFyyIv1EJU6pkgec4ww9Wh6eGeN6Qv%2B9qhEArTP14x3g9i%2BhxMCfHBdgRtMyvm5B2P4Wi4zpbxGnMK5gcmPAk2HXYomDQnwNBTDj%2BkeBnINtHdo2EBSkwSqVHIeoLLZGH6cMSn7ZZC6ApIAvVdLL3Vq0wScIr63wVjyhvzzV8a12o6wWY1NqF%2FJVGZeYlSMkwad6B%2FRL8mdylybiDmT%2FIgixwng2EolN1R1rgp02CSy3V%2FnQLyMmeZqf7y4p8PYNlz7c3DsOhBUf4C7Bmj6WrVBf7bvPYLVJJcnT8bgj4yxC2NHTBIQuGZmqv%2FzM11oDxl%2F%2B85wlYQLCd1uYu9mZtDQUO5ZHkOBzsU%2FCvbAwZCeVa%2FfQGILjseQR0duy%2FkOdZnko2BExoAHJ%2BUvTcoLLznotDbgNoqXx%2FyTGMpTtmBo7Ml5PM%2F69y68QlKabJegwrPqHygY6pgHGbyhw%2F3fjvmbE2PXy8rCUg2wXIFDpWRwqrvZvHAv8ZH8lhu0iawcwIX%2BmEgUvsmNXpt66M5bXKDG3n8vymTWhdFRHdSI3dHy38gycJ0Sk7quTjINS4GfNOwwNJnacol8A5my9T1n15Pcbfkz9ChNA8Sc9Utp8okDsS05j4n5xle7p0tHWvnDlnTLLrotTnfpwKVdvIBP36UHOLSFP7wgsRSGh%2BefY&X-Amz-Signature=cf4f57a912bd36a1a0b4ede2b70d05fd0bb09b6b4c3bb4d013dae461e96023be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

