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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2PWEK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBIkvQ3bvh6GvqHsgf6CgFJOF4Co%2Beatfe35bH%2FaFqOAIhAM4soSMxklqAXjufRlpjdLnmZ8htdJSyVDNIpqqUO2VOKv8DCHoQABoMNjM3NDIzMTgzODA1IgxUg%2Bdr0%2FwnwAdc2g4q3APwmRQlVh9DUOXDKekLuzA47IeKWzMUZthRR5SAlYnEmOTOCuGphsYyC7DbeX84X7Nr7dpiQKUyKYvt9NvXNhhetueMm6AgK0A%2BNePZeT5SCFROqbz9HxepmPo%2FoGBDCXs7VGOfckFY0DM4TsgFsZ15LOzQhpDYPQtnbrCbVwLMRaYAi01%2BsC%2F9uoytMbxN0EW0r3dl48TFYJA0QyfkfMmtM7QYUAhEKrRCqHeUHf%2FLYz2gZXbP1P2rNrbTSN6dvfWLNch%2BowGLOQvx3h1Ny4FCFeVJOQm10Ol%2FIhvuF9r2seW4l1zQiSdPmq6%2Fmy7CwBPK0kOsxidargdMR7Z5yk54a4Z5cMY75h7NVijQPeD%2Fka382Jmbe97Ceyq4ZbvCANn82%2B3HBRHGYCdvrOtgsnsqpvCT3Eegp1Y7qlnST9AfBVKsl5AmGRSenCTmdUeE1p6oIAZ3fastekbHVNzLa5c0srR4kwNNijnvUnTqo5xRYRqCviwaUCTdUBVzsrP1WuHkzlr58dq29waNyy1Qb7idY2NywmyXl0BLFomyBM6lpoKKvdhrncFoV%2BgSvb2iJOuytAAfX3D%2BJWO1vb8Fy4lew%2Bv2pW2ValjmpF1nGejoy0ZTJuyhfKhGaFIfQjCB04nKBjqkAfWzbJXrzswujyEjxVdaQVdJ%2BuuOtFDhpnJJ7xEAznI4Pjw5c0cM4iVf%2Bd2eHy9DXI2yAhypB5PlhY8sMxX7OvMDh2oyYR1LHCVdnWPqFVH29Hq29jKhLlIGzjPebxKWF3npYFMnz2n1d9jsJfcBfSheI24mCtQY4KkuecmTC5VkLPgipOC8EHQuHCTX0V%2BQFnLdzEBpLwTdgRQYTrEZ2QBZfosp&X-Amz-Signature=856463356c9b07a2062528f500005d45b012ebf4363ae9fd52f2c5b9ab3742d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K2PWEK4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBIkvQ3bvh6GvqHsgf6CgFJOF4Co%2Beatfe35bH%2FaFqOAIhAM4soSMxklqAXjufRlpjdLnmZ8htdJSyVDNIpqqUO2VOKv8DCHoQABoMNjM3NDIzMTgzODA1IgxUg%2Bdr0%2FwnwAdc2g4q3APwmRQlVh9DUOXDKekLuzA47IeKWzMUZthRR5SAlYnEmOTOCuGphsYyC7DbeX84X7Nr7dpiQKUyKYvt9NvXNhhetueMm6AgK0A%2BNePZeT5SCFROqbz9HxepmPo%2FoGBDCXs7VGOfckFY0DM4TsgFsZ15LOzQhpDYPQtnbrCbVwLMRaYAi01%2BsC%2F9uoytMbxN0EW0r3dl48TFYJA0QyfkfMmtM7QYUAhEKrRCqHeUHf%2FLYz2gZXbP1P2rNrbTSN6dvfWLNch%2BowGLOQvx3h1Ny4FCFeVJOQm10Ol%2FIhvuF9r2seW4l1zQiSdPmq6%2Fmy7CwBPK0kOsxidargdMR7Z5yk54a4Z5cMY75h7NVijQPeD%2Fka382Jmbe97Ceyq4ZbvCANn82%2B3HBRHGYCdvrOtgsnsqpvCT3Eegp1Y7qlnST9AfBVKsl5AmGRSenCTmdUeE1p6oIAZ3fastekbHVNzLa5c0srR4kwNNijnvUnTqo5xRYRqCviwaUCTdUBVzsrP1WuHkzlr58dq29waNyy1Qb7idY2NywmyXl0BLFomyBM6lpoKKvdhrncFoV%2BgSvb2iJOuytAAfX3D%2BJWO1vb8Fy4lew%2Bv2pW2ValjmpF1nGejoy0ZTJuyhfKhGaFIfQjCB04nKBjqkAfWzbJXrzswujyEjxVdaQVdJ%2BuuOtFDhpnJJ7xEAznI4Pjw5c0cM4iVf%2Bd2eHy9DXI2yAhypB5PlhY8sMxX7OvMDh2oyYR1LHCVdnWPqFVH29Hq29jKhLlIGzjPebxKWF3npYFMnz2n1d9jsJfcBfSheI24mCtQY4KkuecmTC5VkLPgipOC8EHQuHCTX0V%2BQFnLdzEBpLwTdgRQYTrEZ2QBZfosp&X-Amz-Signature=ed791495cc5b95b2bf3ebf7fa6538dfd63336b252c7344084dfdb9e0c5f519a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

