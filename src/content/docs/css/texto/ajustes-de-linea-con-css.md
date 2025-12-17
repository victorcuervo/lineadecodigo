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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJOR6V5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbcKwaVzDUb9U%2Bbgtp4nm5q72L%2BEOoqFnDDDl2JKRbHwIhAKbGZtcnfx9qkwUj6huY6hZvxP1UOcAOlKY3b%2BQE1W%2B4Kv8DCH8QABoMNjM3NDIzMTgzODA1Igxh%2Bxl79wHmDVNS8ogq3APmDizy2j5n11%2BrxXY3CnhJJcJ50Gdi4%2FpmEyLJ3nhzYtagrrsZY1axgLn6g%2BjPaz1c6qGHSwvd3E5xu%2FCAaYCeI%2FCRDPuiAqfcpeeQJZYRM4Y%2FHfic%2FnBHjRAB1q1bvhtfgdzUl142YOUZgPdMhjKsAiEV4%2FvLZN26A%2BW%2B6sIjCdsrFnYsGnlLVWC6%2F8Du9hAvYdt8RdYIgIqAjKIpSfJM1jk2yuvdyYxkU1DwRv4jJhR%2BSP9fix%2FOq5pz4gM0%2FEJtQDBrNIKqFScH6vBzJ0Jwj6Jr2kT7GSYQdYOVWjMI89DTK2rw3AAY6%2B2J1Ob%2FiItX6XHGsTGLKXzhMXU%2BrylsMbOpAX9ENZcvy%2BzNA3WneXCbhXZ6ByfBCvZj2sVAkBimQkNQw7uaUSI6OFwbGGGySKT6%2FErcne%2FGNB2d0EY7Iwq4lpUWJNP6IW42qBTXeQLZhyZLe2KqF7AqntoZ3iUn0vm6tvfNpFWkmLjsxwbvc2xyFUrFdGM2osCOYiEMh0xDVeDFBMk5FgjLtFHVZiQrKaVmopd68rF76r1gET%2Bn52kMz784%2FFp%2Bg%2BD8y9zxsVOTMxC4oquZGLiy%2B5XwW0R4tATxtEr4hNOvibMC%2BZvHI9lp37Vp2JYHLW%2BptDDB4YrKBjqkARytsgDVXD3hLZ%2FaHE%2FfI0a96HiViJNvaYDGihFDqE4QRCoDzuaBeXuzU0AF9WnJv0Nj2WeuT1YyuezkPTJjubL4mlnTI680qdsyFzzk%2F59SQDOdZ%2FEssvdySzdQJZTRAOjxI6N7vT6AfEM67FdIbXaDTz0wquVaTc6Zhx7nMDSfrZzj4xqs82Hcbz0GkyHZc5T9xr4JA4SWnAWh%2Bfrtb5BDbjL0&X-Amz-Signature=24061f131589cbe8b83267bdb89cf4c06296597cd61482e269b4ce8be7023f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XJOR6V5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbcKwaVzDUb9U%2Bbgtp4nm5q72L%2BEOoqFnDDDl2JKRbHwIhAKbGZtcnfx9qkwUj6huY6hZvxP1UOcAOlKY3b%2BQE1W%2B4Kv8DCH8QABoMNjM3NDIzMTgzODA1Igxh%2Bxl79wHmDVNS8ogq3APmDizy2j5n11%2BrxXY3CnhJJcJ50Gdi4%2FpmEyLJ3nhzYtagrrsZY1axgLn6g%2BjPaz1c6qGHSwvd3E5xu%2FCAaYCeI%2FCRDPuiAqfcpeeQJZYRM4Y%2FHfic%2FnBHjRAB1q1bvhtfgdzUl142YOUZgPdMhjKsAiEV4%2FvLZN26A%2BW%2B6sIjCdsrFnYsGnlLVWC6%2F8Du9hAvYdt8RdYIgIqAjKIpSfJM1jk2yuvdyYxkU1DwRv4jJhR%2BSP9fix%2FOq5pz4gM0%2FEJtQDBrNIKqFScH6vBzJ0Jwj6Jr2kT7GSYQdYOVWjMI89DTK2rw3AAY6%2B2J1Ob%2FiItX6XHGsTGLKXzhMXU%2BrylsMbOpAX9ENZcvy%2BzNA3WneXCbhXZ6ByfBCvZj2sVAkBimQkNQw7uaUSI6OFwbGGGySKT6%2FErcne%2FGNB2d0EY7Iwq4lpUWJNP6IW42qBTXeQLZhyZLe2KqF7AqntoZ3iUn0vm6tvfNpFWkmLjsxwbvc2xyFUrFdGM2osCOYiEMh0xDVeDFBMk5FgjLtFHVZiQrKaVmopd68rF76r1gET%2Bn52kMz784%2FFp%2Bg%2BD8y9zxsVOTMxC4oquZGLiy%2B5XwW0R4tATxtEr4hNOvibMC%2BZvHI9lp37Vp2JYHLW%2BptDDB4YrKBjqkARytsgDVXD3hLZ%2FaHE%2FfI0a96HiViJNvaYDGihFDqE4QRCoDzuaBeXuzU0AF9WnJv0Nj2WeuT1YyuezkPTJjubL4mlnTI680qdsyFzzk%2F59SQDOdZ%2FEssvdySzdQJZTRAOjxI6N7vT6AfEM67FdIbXaDTz0wquVaTc6Zhx7nMDSfrZzj4xqs82Hcbz0GkyHZc5T9xr4JA4SWnAWh%2Bfrtb5BDbjL0&X-Amz-Signature=6aa45368028d88e806e1b4d639a19a65c02b777971a5d62f7a9dc7ed88bc5aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

