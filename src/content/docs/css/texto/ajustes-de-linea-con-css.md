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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKNGWXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQV1E9LrKVPUJA4Ydg7EzXFKTWKirYnJ5074DpGz%2B7VwIhAKCPBcl%2FctRwyM%2BRAhXQXh28PPFIVC8F7gPabPGcoY80Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxflXLMCnizVy0bBNkq3ANHBqPgmc2QK%2FzU3QxtRaLqlXPeHL2GTDeDyaYNDRdiKi12FVhEU6jnPPjICdr415slDuQYwQl2tFnTH3MzDZWbhbHWdRrcnLtWziKiYOd1UySsgKMxl9escroqQjia9jZ9qcJN8olATiU2%2B%2FhAAgmayssrqnCRQ8ZB%2FXGZMns9uBKWsyS6vYF8x8IoEWETxNfL9cDQOu3UPDpsbDIvlmDhhokBmA9HfY8zIYdOSpUtO1cdWNjmx0QgbmzCDigAHLg3U8qZZjxgS9Wu0bQ1D4IpwnaJD7ZwmmIQWDaeZPRRTY03ou9t4p8JzEckkjaC2GJ5W5zSQ7vKrEM0auMLYRjTqL4YaRXcKpdJEAwfqu47ukDwdl6NLEygE0ru8y4%2BvWpH5ebHs8Yl0e2wfESWUjHrInjWsvZ1Tv4evJVLSqV%2BsYetry71qnLCya9ex4X5kXoJ3oB8cjD%2FHwvsRkU%2FQGaFrheVCKlRC%2F7MSq6lXPjPVwnWXbxZvxKh9Hq7Ey0vJbQZYBw%2FVs%2BV8n%2BLExKuNzekqBkzYDuwcqyHstcm6HcZHEBW0kH2adiBh1QwsXtwd25NQCRgf68o%2BV2H%2BaugEN2W8eBr3BHiK5bRwL2W37JBt4Usr1muq%2BM9nthtWzDg3ofKBjqkARQjtD64TrWodYaYDzHRtCJJFrLV6n%2B3u0%2FDZoq%2FsJdTxSY77U1OM2B4JgvqENYjimaRYuqg2%2Fo1Mnr4HQqJ6LJjItqy4xxN%2Bx0c5VjeJ4eVdtNqXyMZDLYBbSEYqA8kyygcvW3yYRLEwal%2BPa3q%2FkF1lx4q%2B%2FdX%2FFyAyblCK1y2vCTkhK2wrNZvL02ZnNLvOQ7VgVDQ0XK%2FzgoS1CNj9lCJPWCO&X-Amz-Signature=c8bad0ee67d3f3b2e43fdf0d83c3d58d5bc782d39e748ff7afb7d24eee8b8c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NKNGWXM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQV1E9LrKVPUJA4Ydg7EzXFKTWKirYnJ5074DpGz%2B7VwIhAKCPBcl%2FctRwyM%2BRAhXQXh28PPFIVC8F7gPabPGcoY80Kv8DCHEQABoMNjM3NDIzMTgzODA1IgxflXLMCnizVy0bBNkq3ANHBqPgmc2QK%2FzU3QxtRaLqlXPeHL2GTDeDyaYNDRdiKi12FVhEU6jnPPjICdr415slDuQYwQl2tFnTH3MzDZWbhbHWdRrcnLtWziKiYOd1UySsgKMxl9escroqQjia9jZ9qcJN8olATiU2%2B%2FhAAgmayssrqnCRQ8ZB%2FXGZMns9uBKWsyS6vYF8x8IoEWETxNfL9cDQOu3UPDpsbDIvlmDhhokBmA9HfY8zIYdOSpUtO1cdWNjmx0QgbmzCDigAHLg3U8qZZjxgS9Wu0bQ1D4IpwnaJD7ZwmmIQWDaeZPRRTY03ou9t4p8JzEckkjaC2GJ5W5zSQ7vKrEM0auMLYRjTqL4YaRXcKpdJEAwfqu47ukDwdl6NLEygE0ru8y4%2BvWpH5ebHs8Yl0e2wfESWUjHrInjWsvZ1Tv4evJVLSqV%2BsYetry71qnLCya9ex4X5kXoJ3oB8cjD%2FHwvsRkU%2FQGaFrheVCKlRC%2F7MSq6lXPjPVwnWXbxZvxKh9Hq7Ey0vJbQZYBw%2FVs%2BV8n%2BLExKuNzekqBkzYDuwcqyHstcm6HcZHEBW0kH2adiBh1QwsXtwd25NQCRgf68o%2BV2H%2BaugEN2W8eBr3BHiK5bRwL2W37JBt4Usr1muq%2BM9nthtWzDg3ofKBjqkARQjtD64TrWodYaYDzHRtCJJFrLV6n%2B3u0%2FDZoq%2FsJdTxSY77U1OM2B4JgvqENYjimaRYuqg2%2Fo1Mnr4HQqJ6LJjItqy4xxN%2Bx0c5VjeJ4eVdtNqXyMZDLYBbSEYqA8kyygcvW3yYRLEwal%2BPa3q%2FkF1lx4q%2B%2FdX%2FFyAyblCK1y2vCTkhK2wrNZvL02ZnNLvOQ7VgVDQ0XK%2FzgoS1CNj9lCJPWCO&X-Amz-Signature=35585368151139e3035eab1d5ac27221564bb8256a3b84a5fdb3fa612914f371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

