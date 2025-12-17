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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OUEI4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQLKQL3RqNwzb4zJ5w9XE1dJ4Lg%2FFtHKb1%2FHjDt64mbAiAJlFi3n1KwN5Pxui9gG5eanwV7o2Fy6BXF388PXwMxySr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmTwr%2FpvuGaMXuRGRKtwDoM6mbT3HfTRszKQOJTYsPXAFV1DcvdwEB6cIAQzA9BfuP45AIww4YhQupJBGFKKXvnb181tXfue2Bn6bB8mFYJwTQCBCXW5wia2eSRnql07%2BdCLEli%2B3j%2BkEbu6fya16R1%2BI73qIJltSwFv0nkuD69DyLQAiZ44BOkgPe%2FeSN14fZJSxZlF9weS8kY1PRZdXOUoY1%2FTULJnC17RsBcXPVp7MqApOYzoXe8GIuxcqZutuesaFMupZUed8RI7B7B1VStD84LkmbtYxzPhFiYiIOhz9IFJTEFvUpIWyWERzAi2tLfJf8EsEGJro4mHHjXdiZakHf4s3P%2FGFxEHN%2FbyPBWgnAGYa5EXHTgL67bv%2FYH%2Fv%2FjEQs35Hjk614Nt%2BRA7DLaSV0HxZ%2Bl6Qa5cpxpcioPsS80sEA0Nc4w4coBTTDEdq5ZIi0v4fDH%2BzKZgnxG7LxLdl%2BC%2BWIKJ9xnH5y4a1ExCt%2BELnXLnk9cJP8hT4bgMuclPAGGffaeyz5y73oi9Vn7uBs12Gcom2qQIJ7IEcSJbCUuvgJUTP3niEQsnGMVMy2K2qJgiP3BgkWcHE3KONfNQKb5OX18mpjv7k2edDnBouyUO1fDUw5biz6kArEhVqriM%2Bo91AuzUzUXUwq%2BGKygY6pgH9gHvShnKm6usMtT0DVPUZFRwzIaqOsixvwkS3sZX%2BMq0xdC6N4y8zbIo8ex0bMXfp9kaJ%2BGxJCB1h9OteOX3EAVA07wTjGlBOzRu%2B652jMtqPvWNDa1J8l3XE%2BV%2F3P1DMAYVlvkO2d01XyRRa3y3HNEntNd6r90xHd7u9LQjSOXmygl2elxR02ddFfKNkOI0hHQM%2BpciDiWykAXUZZQGQ6Yh5d20O&X-Amz-Signature=2b37dbd7562fa136731b5947c732d2685aee1b4c3c842f89618676ae8b86f138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656OUEI4B%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEQLKQL3RqNwzb4zJ5w9XE1dJ4Lg%2FFtHKb1%2FHjDt64mbAiAJlFi3n1KwN5Pxui9gG5eanwV7o2Fy6BXF388PXwMxySr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmTwr%2FpvuGaMXuRGRKtwDoM6mbT3HfTRszKQOJTYsPXAFV1DcvdwEB6cIAQzA9BfuP45AIww4YhQupJBGFKKXvnb181tXfue2Bn6bB8mFYJwTQCBCXW5wia2eSRnql07%2BdCLEli%2B3j%2BkEbu6fya16R1%2BI73qIJltSwFv0nkuD69DyLQAiZ44BOkgPe%2FeSN14fZJSxZlF9weS8kY1PRZdXOUoY1%2FTULJnC17RsBcXPVp7MqApOYzoXe8GIuxcqZutuesaFMupZUed8RI7B7B1VStD84LkmbtYxzPhFiYiIOhz9IFJTEFvUpIWyWERzAi2tLfJf8EsEGJro4mHHjXdiZakHf4s3P%2FGFxEHN%2FbyPBWgnAGYa5EXHTgL67bv%2FYH%2Fv%2FjEQs35Hjk614Nt%2BRA7DLaSV0HxZ%2Bl6Qa5cpxpcioPsS80sEA0Nc4w4coBTTDEdq5ZIi0v4fDH%2BzKZgnxG7LxLdl%2BC%2BWIKJ9xnH5y4a1ExCt%2BELnXLnk9cJP8hT4bgMuclPAGGffaeyz5y73oi9Vn7uBs12Gcom2qQIJ7IEcSJbCUuvgJUTP3niEQsnGMVMy2K2qJgiP3BgkWcHE3KONfNQKb5OX18mpjv7k2edDnBouyUO1fDUw5biz6kArEhVqriM%2Bo91AuzUzUXUwq%2BGKygY6pgH9gHvShnKm6usMtT0DVPUZFRwzIaqOsixvwkS3sZX%2BMq0xdC6N4y8zbIo8ex0bMXfp9kaJ%2BGxJCB1h9OteOX3EAVA07wTjGlBOzRu%2B652jMtqPvWNDa1J8l3XE%2BV%2F3P1DMAYVlvkO2d01XyRRa3y3HNEntNd6r90xHd7u9LQjSOXmygl2elxR02ddFfKNkOI0hHQM%2BpciDiWykAXUZZQGQ6Yh5d20O&X-Amz-Signature=d084105f59f98305d5aec57b5ace5c5af30b70ebe4e062765336b56866d25ebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

