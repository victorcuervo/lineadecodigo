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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH65EL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9jcI0FT%2F2WE39LJK9YARC3CsUR9GDOGYpYwAKGb9u3QIhAKlXBRU83kzkdhc6p9SXksDox0Cslxom%2F%2FzQpsoHg5qqKv8DCHMQABoMNjM3NDIzMTgzODA1Igzll8fo1klLkgupvEEq3ANjfdFOOrOOxd6nm0SMgkkFa792zdav4R%2FhdsXxo1%2Fm4PIkBqvFeLfqH2taqKH2u6Kj40PSIDy4j4eNuH5a3BsvcZ8Qgytu5H8lvk5AvyW%2Bpd2PGL%2FxxLokGDlAfndQm6wWuqYt%2FtxJWrlaQb5llgyA5sNMUjE9bIpw7mGvY6ANcZCFmNQUOu0IAyOFzwu5R75f57oI7cMlD3aGL5dJTh9Sa23RVZQ%2Ft81Hs%2Bq0rUjklXuwoPQnStSQC3DV1E%2BjO4mrhCfPtZG9Ha%2B6ec4lBU5qygSnCRIZ1L62ew%2Burdzt62pt2NCxxyage2ECXOl45qS%2FtSdlIWQsAd5JwoV9t%2B2j9R%2BD786VY%2FLO%2FnMjZAEOWa903DmZN0hyhDZAR%2BIHH40QnePrwJr6DQW7E%2FyH3b1wWsndVt9P%2FKTqPBpx%2BiUnGzOXnIiJKdmdy0ODMJ8ddHAVlp2O0%2B78RU4qv2AWtrY00KwQh2WCLCTVpOuEci%2BwJIXfiewIctlx7zyK9vLSsN3eE4H0MpmN335rhC%2Bafe5lrlPCDCnAaL7XYP0Lp%2B8lTUD21fh6%2Flf%2FkQd46%2FlfS1KaH6ifZSMQigJPPan%2BEtoJUaDL9e%2FYj2TuRpYvh8hwrEp9hWiTtz%2FR0KZTSjDLlYjKBjqkAR2P9GvyB7DKXQYvh5JpxkYUnXhmHfRF3zfox3LaOVDG%2BPdDv09SExrphEYQ1y4Axq%2BKWy9hrCT1LhouWEwbbquvvzadkR4SaCjeDgKoNXIp%2BhhFmZmIWgcMGfMXp9Q6sY%2FiyVKjh%2BSqmmM6c8z5hywGFIqbW%2BGq2gfdnYG0MmaN%2BA%2BxKfBmN94DoMlTnD52dkE%2BRsGYp3HUYk4ahvs17GONKrhc&X-Amz-Signature=7a7c84d840c0eb746e2189687d624fc5c8c67a420f6b523bcabd0edf7b446197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZH65EL5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9jcI0FT%2F2WE39LJK9YARC3CsUR9GDOGYpYwAKGb9u3QIhAKlXBRU83kzkdhc6p9SXksDox0Cslxom%2F%2FzQpsoHg5qqKv8DCHMQABoMNjM3NDIzMTgzODA1Igzll8fo1klLkgupvEEq3ANjfdFOOrOOxd6nm0SMgkkFa792zdav4R%2FhdsXxo1%2Fm4PIkBqvFeLfqH2taqKH2u6Kj40PSIDy4j4eNuH5a3BsvcZ8Qgytu5H8lvk5AvyW%2Bpd2PGL%2FxxLokGDlAfndQm6wWuqYt%2FtxJWrlaQb5llgyA5sNMUjE9bIpw7mGvY6ANcZCFmNQUOu0IAyOFzwu5R75f57oI7cMlD3aGL5dJTh9Sa23RVZQ%2Ft81Hs%2Bq0rUjklXuwoPQnStSQC3DV1E%2BjO4mrhCfPtZG9Ha%2B6ec4lBU5qygSnCRIZ1L62ew%2Burdzt62pt2NCxxyage2ECXOl45qS%2FtSdlIWQsAd5JwoV9t%2B2j9R%2BD786VY%2FLO%2FnMjZAEOWa903DmZN0hyhDZAR%2BIHH40QnePrwJr6DQW7E%2FyH3b1wWsndVt9P%2FKTqPBpx%2BiUnGzOXnIiJKdmdy0ODMJ8ddHAVlp2O0%2B78RU4qv2AWtrY00KwQh2WCLCTVpOuEci%2BwJIXfiewIctlx7zyK9vLSsN3eE4H0MpmN335rhC%2Bafe5lrlPCDCnAaL7XYP0Lp%2B8lTUD21fh6%2Flf%2FkQd46%2FlfS1KaH6ifZSMQigJPPan%2BEtoJUaDL9e%2FYj2TuRpYvh8hwrEp9hWiTtz%2FR0KZTSjDLlYjKBjqkAR2P9GvyB7DKXQYvh5JpxkYUnXhmHfRF3zfox3LaOVDG%2BPdDv09SExrphEYQ1y4Axq%2BKWy9hrCT1LhouWEwbbquvvzadkR4SaCjeDgKoNXIp%2BhhFmZmIWgcMGfMXp9Q6sY%2FiyVKjh%2BSqmmM6c8z5hywGFIqbW%2BGq2gfdnYG0MmaN%2BA%2BxKfBmN94DoMlTnD52dkE%2BRsGYp3HUYk4ahvs17GONKrhc&X-Amz-Signature=b1973f732aa766c95ad55728bd34a67ad2ec5162a6945d780cb31c4a2fa082c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

