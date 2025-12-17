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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRZAFD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2ByTFgtQojurZmRObgYA2IZxkMkwjrqfDQJzXrBJVU8AiEA6yw0pvNYJ%2Ffyfp6ExSeC0MUZivyNGZpWsonuDV6f6hgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF9ZULiK3lNUN%2B7vhircA9jVWzZOU7r2AlxZAugG%2FhPI4WSUrrm58NwU9KceiOgGTuFTsgDgvLUJQd3X41yw4zgQ6RJrBcDstnEWH4FVASCI6RYotEuXybBQ5CJ5hxN5tD6c7vYgM45%2FpmY0Wz%2BIiyM4SHL7fHq%2FIiuiyOySyXSyeMA10OiyyHnhg%2ByBIFezmexGUyGacmdzMbGtGEDtdAulmZhcAIDZMU%2FkEYmzViZMKJ9uSCW9jygKKn%2BO4ok2leh%2B0x5DNeyus3%2BuGagSs%2FO9ZmQpU2I%2FKtbE%2FYclvUK4rstwRsLModrVDdceGez8UGUPQzyOByAvmJ1pryy1CofD1iF7qEbuv9%2FLzNbbh%2F9IoC3S392pjNwQohvC2a24W4qD6nAwkCF51FxPV7g2aOdzbTP%2BHH%2FCqD2ClHljzBkWj44EbGg80%2B%2BTB4IsjwsLRA5LO5QYpcdGW4Mfkd1MKOcuFutU%2BAfyvxjn9eKWs6CcdknFMnLY4kkYJqmEWvPzYuTW%2BCD%2F%2B5dXsr9QLhFz7E0VYxCEmrQcmc%2BPYzmPgXSTMd%2FDSIXjIwyERNQ1TWL0Aq4%2BFiv0pvHmGCC9ofNtMrZUAy2g7oUbTUFg%2BijwCZ92VdnxjW4P8LRHsGPxuqmz17uuvyyruysYrjD7MKucicoGOqUBTYjz%2BSEWxkNL1p7g2PaRh7mKgj5oLzIqk4IVEHhRIDJVX6X8IYbFdzrkVsbZGg09RfGi%2FQVPT0bfivowYamXfQPQy6qT3wVUxv0tgMl10t6X1b0wxdapX8IEuUylnYOIrl8OhyE4AM8Zkxc4eKt4cZKsz07RoopOi5roHBIV9UVnbzu6W98ECqX13VOFSvQXmrWHoZBqsyrRG5QSms4bJVDTp9Bm&X-Amz-Signature=dbf87daf8a4d9b5d73d97308e5f4ab203d2046a70038a898e9e7371b42e20b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRZAFD6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2ByTFgtQojurZmRObgYA2IZxkMkwjrqfDQJzXrBJVU8AiEA6yw0pvNYJ%2Ffyfp6ExSeC0MUZivyNGZpWsonuDV6f6hgq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDF9ZULiK3lNUN%2B7vhircA9jVWzZOU7r2AlxZAugG%2FhPI4WSUrrm58NwU9KceiOgGTuFTsgDgvLUJQd3X41yw4zgQ6RJrBcDstnEWH4FVASCI6RYotEuXybBQ5CJ5hxN5tD6c7vYgM45%2FpmY0Wz%2BIiyM4SHL7fHq%2FIiuiyOySyXSyeMA10OiyyHnhg%2ByBIFezmexGUyGacmdzMbGtGEDtdAulmZhcAIDZMU%2FkEYmzViZMKJ9uSCW9jygKKn%2BO4ok2leh%2B0x5DNeyus3%2BuGagSs%2FO9ZmQpU2I%2FKtbE%2FYclvUK4rstwRsLModrVDdceGez8UGUPQzyOByAvmJ1pryy1CofD1iF7qEbuv9%2FLzNbbh%2F9IoC3S392pjNwQohvC2a24W4qD6nAwkCF51FxPV7g2aOdzbTP%2BHH%2FCqD2ClHljzBkWj44EbGg80%2B%2BTB4IsjwsLRA5LO5QYpcdGW4Mfkd1MKOcuFutU%2BAfyvxjn9eKWs6CcdknFMnLY4kkYJqmEWvPzYuTW%2BCD%2F%2B5dXsr9QLhFz7E0VYxCEmrQcmc%2BPYzmPgXSTMd%2FDSIXjIwyERNQ1TWL0Aq4%2BFiv0pvHmGCC9ofNtMrZUAy2g7oUbTUFg%2BijwCZ92VdnxjW4P8LRHsGPxuqmz17uuvyyruysYrjD7MKucicoGOqUBTYjz%2BSEWxkNL1p7g2PaRh7mKgj5oLzIqk4IVEHhRIDJVX6X8IYbFdzrkVsbZGg09RfGi%2FQVPT0bfivowYamXfQPQy6qT3wVUxv0tgMl10t6X1b0wxdapX8IEuUylnYOIrl8OhyE4AM8Zkxc4eKt4cZKsz07RoopOi5roHBIV9UVnbzu6W98ECqX13VOFSvQXmrWHoZBqsyrRG5QSms4bJVDTp9Bm&X-Amz-Signature=754a0ee12813f47e73e0316e2f525115cdb023f2aa700b5cb464f0637c230c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

