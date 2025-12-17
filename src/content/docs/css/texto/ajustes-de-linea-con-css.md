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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXZ3XK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6dmGnT8Uo0%2B8DgwzheISHbnzLwQUiBWdsUn8T%2BRu1QIhAJa4qHlG7Bv3mHuPXRgcVMlXvwexdx54i0Fkx0VRLK7xKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsnshXM3eE%2FHMzRgAq3AMQh%2FzaTAH7UyJUGRC4tSliAkdEF6tMiQa1PLPZZQief9SQgWTXGEWdGseQbnPFhUYPATHNxy6ee%2BVK%2F04LiRrJYQpKCv%2BNR4G6r9x9YVWeK85PNDJILvq1Cc3IfDxiVMR%2FkiPqV2qNfL9sdOyUmmnfBP0NWgEQeG8evxIe61CZ0AjYZGgRVoXYYY5gmbisj0woxm2baVtgsfwqOinGcsW0B6ZxMgKpuqnOByWUq09XWDFy4iC%2FwPOGgAWN0QfJZYy0PfLwgA%2FFjclUhrDzEViTW4ePnYmBQ0sNmuEiRpjnPh%2BXWGW96YAL8k11pMVT7EhO92rclzjDOSMkLdIJ%2BJM3o6sT52IW44QqwRxlczZzD3WzOjrWIDY440%2B%2BQ90vx6zc9BlfsFrguhgFtZIRSwEQ0w6Xafu44kSuW0lhUO%2F1uKoi8HtoSBfvSMDab9Zq16kjSWbTtgP8BTRTVXfzJoz7fJVEOqnsz%2FoD%2BGWsKJsTTBOIUPKLPYN5HDT6LG3BITU4gHyYredEkzbxKlHvWI3uD0zy7xD%2FzzpgssPdzvoS%2FV5jO2qRq9BH1SZN5ZGfxMIjaZ47RWC5S6pZT8F0Zsx7nT5MWOpGuUOR6NXjLKauTnuCF9y0oqc8N6y4fDDU4YrKBjqkAUN56eGAioK%2B6NPB18UKZG%2B0JfNkbxEtfrGjn5%2FlOjS00%2FVg%2FpscwSJI0mvUChvX3t0oAdi5d%2FxUr%2Fr%2BPSV20v4sbmsweXunAE0VfMtBerTucCyd%2F5TL6YimGDPowh4m3J09TjfJtN80zoD1KpE0rnGMRscOnAqj%2Fudu7s8nUQ2vJmB9wpANjQg8Ue0FO8AfR2SdGQWedzwjTsaboTK%2Fme%2B8n%2BId&X-Amz-Signature=3f2b21395f9a3233cc59808529d40fb7718bf5da74126db9cb659db768591bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAXZ3XK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCy6dmGnT8Uo0%2B8DgwzheISHbnzLwQUiBWdsUn8T%2BRu1QIhAJa4qHlG7Bv3mHuPXRgcVMlXvwexdx54i0Fkx0VRLK7xKv8DCH8QABoMNjM3NDIzMTgzODA1IgwsnshXM3eE%2FHMzRgAq3AMQh%2FzaTAH7UyJUGRC4tSliAkdEF6tMiQa1PLPZZQief9SQgWTXGEWdGseQbnPFhUYPATHNxy6ee%2BVK%2F04LiRrJYQpKCv%2BNR4G6r9x9YVWeK85PNDJILvq1Cc3IfDxiVMR%2FkiPqV2qNfL9sdOyUmmnfBP0NWgEQeG8evxIe61CZ0AjYZGgRVoXYYY5gmbisj0woxm2baVtgsfwqOinGcsW0B6ZxMgKpuqnOByWUq09XWDFy4iC%2FwPOGgAWN0QfJZYy0PfLwgA%2FFjclUhrDzEViTW4ePnYmBQ0sNmuEiRpjnPh%2BXWGW96YAL8k11pMVT7EhO92rclzjDOSMkLdIJ%2BJM3o6sT52IW44QqwRxlczZzD3WzOjrWIDY440%2B%2BQ90vx6zc9BlfsFrguhgFtZIRSwEQ0w6Xafu44kSuW0lhUO%2F1uKoi8HtoSBfvSMDab9Zq16kjSWbTtgP8BTRTVXfzJoz7fJVEOqnsz%2FoD%2BGWsKJsTTBOIUPKLPYN5HDT6LG3BITU4gHyYredEkzbxKlHvWI3uD0zy7xD%2FzzpgssPdzvoS%2FV5jO2qRq9BH1SZN5ZGfxMIjaZ47RWC5S6pZT8F0Zsx7nT5MWOpGuUOR6NXjLKauTnuCF9y0oqc8N6y4fDDU4YrKBjqkAUN56eGAioK%2B6NPB18UKZG%2B0JfNkbxEtfrGjn5%2FlOjS00%2FVg%2FpscwSJI0mvUChvX3t0oAdi5d%2FxUr%2Fr%2BPSV20v4sbmsweXunAE0VfMtBerTucCyd%2F5TL6YimGDPowh4m3J09TjfJtN80zoD1KpE0rnGMRscOnAqj%2Fudu7s8nUQ2vJmB9wpANjQg8Ue0FO8AfR2SdGQWedzwjTsaboTK%2Fme%2B8n%2BId&X-Amz-Signature=2350064a4c2d1f702c93f34abd025b8048cf0ea23024f5f7c266090917aab82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

