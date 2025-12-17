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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RMQQ4Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn%2FiPaY0ntrOSuiz9Ksyi%2Bdh2VevAPN7C4wFzx309FTAIhALjqKzt3MOcQ8jdCOp22mw2wZq4CKVlkuXikDpraNAJCKv8DCH8QABoMNjM3NDIzMTgzODA1Igz1r%2BCzFBVlm9Bcltgq3ANUE%2BbYhsMRm4ZKR5i6uQjLcjfA8WliN6HbxYBIYiTOwnG5tA9bj9KCEim9KUo0e%2B8lcucG4K5KjC6GyhH5WeHTL2BPaxGEXM2fPSYqcgoTl0Sg9WsyvKeJOeMMZvVLiK0%2BZUaYUqK1FTidBrrdf4JhzDuvwjOa6siI3xYuB6B%2B622rzEwnkYgPd7cbbyMZT2LpVfwMXsaamxpVDKc17yo1123xn%2BnyFYgV7lErOfn6O%2BGEeqS7HX5c7ac%2FwOhgRF%2FT%2FbR9UPqMd69F0MBEJBEttgdjEM2HanCD79PxaKI2zGH%2BckpXmqzHlt3SrVUxuaSvwtYHOG7W1Lg4E6YVUcnSEcGbM%2Bb2oRcXu%2B5jfRvS%2BgYyrIudknQO4wlfESwstxqmSWLYdMW%2BC5LBzjb2OS4%2Fn3hD9o7t%2Fe8QNn5aMekWisPVhnU6h3PT9r8%2BRxCHiCiizAV3vH7iJroQ4HliCkhs2JDTyB1MboPI6h%2B%2Bb79UjB%2F%2Bx5ZPT8CEMraLdR1J0GZS1fRcSB1c0m0tbQxf5pRiDdpgNANd7XFz%2Fz1wz3Zpe7fJt00iOePDlASYrNQrD9oNTkzK7LuQMp8Rj7OKR501MuvOzBeU98p4Sy7%2F3LzzOd%2BAOxUBsqJ7HyOeRDD24YrKBjqkAdDnNcBuYwFEOjxC1tHbmGnDbW1TaHJo8BLAiPjE2Dd0IU7DkqyFbHCSQCbwWEq24sjbfakn9YlsLPbBYHKxM9%2B5TbTosdn0tRu8biPqFCHeHNTA0UbuGOOeCfg%2Fd5DCS9jqYMaPz%2FDZCDfhmUKa3pbXTuZ2YJhmUNR20fgUxTHi0dnk1TanWSHMw67zpELnj8dOfgO37TEaT8%2BzkoPYcjc1A8Iq&X-Amz-Signature=d5ebdb290f96f944f36b7a1812050b42d196d0cc04c31e42c7c3eda18d5ef146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3RMQQ4Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T134905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn%2FiPaY0ntrOSuiz9Ksyi%2Bdh2VevAPN7C4wFzx309FTAIhALjqKzt3MOcQ8jdCOp22mw2wZq4CKVlkuXikDpraNAJCKv8DCH8QABoMNjM3NDIzMTgzODA1Igz1r%2BCzFBVlm9Bcltgq3ANUE%2BbYhsMRm4ZKR5i6uQjLcjfA8WliN6HbxYBIYiTOwnG5tA9bj9KCEim9KUo0e%2B8lcucG4K5KjC6GyhH5WeHTL2BPaxGEXM2fPSYqcgoTl0Sg9WsyvKeJOeMMZvVLiK0%2BZUaYUqK1FTidBrrdf4JhzDuvwjOa6siI3xYuB6B%2B622rzEwnkYgPd7cbbyMZT2LpVfwMXsaamxpVDKc17yo1123xn%2BnyFYgV7lErOfn6O%2BGEeqS7HX5c7ac%2FwOhgRF%2FT%2FbR9UPqMd69F0MBEJBEttgdjEM2HanCD79PxaKI2zGH%2BckpXmqzHlt3SrVUxuaSvwtYHOG7W1Lg4E6YVUcnSEcGbM%2Bb2oRcXu%2B5jfRvS%2BgYyrIudknQO4wlfESwstxqmSWLYdMW%2BC5LBzjb2OS4%2Fn3hD9o7t%2Fe8QNn5aMekWisPVhnU6h3PT9r8%2BRxCHiCiizAV3vH7iJroQ4HliCkhs2JDTyB1MboPI6h%2B%2Bb79UjB%2F%2Bx5ZPT8CEMraLdR1J0GZS1fRcSB1c0m0tbQxf5pRiDdpgNANd7XFz%2Fz1wz3Zpe7fJt00iOePDlASYrNQrD9oNTkzK7LuQMp8Rj7OKR501MuvOzBeU98p4Sy7%2F3LzzOd%2BAOxUBsqJ7HyOeRDD24YrKBjqkAdDnNcBuYwFEOjxC1tHbmGnDbW1TaHJo8BLAiPjE2Dd0IU7DkqyFbHCSQCbwWEq24sjbfakn9YlsLPbBYHKxM9%2B5TbTosdn0tRu8biPqFCHeHNTA0UbuGOOeCfg%2Fd5DCS9jqYMaPz%2FDZCDfhmUKa3pbXTuZ2YJhmUNR20fgUxTHi0dnk1TanWSHMw67zpELnj8dOfgO37TEaT8%2BzkoPYcjc1A8Iq&X-Amz-Signature=e8b7a4bae35596c39f6f9f5d25acac86f41e6962a65489b079b74d674a4aaf12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

