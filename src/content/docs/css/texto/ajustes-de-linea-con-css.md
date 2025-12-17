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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZXMGXBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHEpHxq83db5VcLTmSC199fFKr22pgx5SIIpAoGtazdAiBe1m8dBlnq3uUnpnJRTHYwRcmQ7Fim7Ym71eSNQEb8FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp8%2FJSFRA9rc13nmKtwD2yWjLUCWTFd2F6YYjG7iqzGMRWGj%2FH9LuGbDPyPL77hbZB%2FM9ahgbX7bCFiNZVFiUq9%2F2dXlAcYawbPvifw4yKltJGNmuDNolT5JgWYpdJ%2FC2eT8hoJLmFKR0f90B591fQNnnJZvWHDFf23sT%2B6ObHeQD9DX%2FWcCXby9jdZXpnmC0ems9CqOvxZlO85g0gfQHyl4AvbBRD6szpDBx9OGG3Je2IAJGecD%2F3m4y7ShzNxBel1xemERWnDzg4amwuztWY4ypt7cojhPn3t9eRKMbtUQAeVpbcJuOfgFsvG9JYGCvWCh9H%2FgJSIr1IyfT6%2FQRZxOW19FZsBDvQKsQxa%2F1jmqgkCCoWkx73gqXwaRi0vjF70DFz%2FAlEBm4mTd4mb4QpH6hE4V%2BmJnsxAp%2BfySp8V4%2BgEBeP3KllBoWAMo9tW%2FDzZACMofHTpe3Wk6rEOa%2FVS%2BrAOMJBEZTgjtzbwZ5tSrqenxyKothTVBLLjrMtORTcudtn%2BkKVLltyo4QuRRLxT5qrg8GRS1sbNMWesqMe1x49zZBqHASGCMLOIhZ%2FLQbboMoemVd8oiMRpW8%2Fe0Cmd9TltirGo1ZV35FszFmZYV1FskWCl0s2IijwPCSLs0q3rEMxiPmaMu%2BY0w1p6LygY6pgHHqIaJAPToHCmQF38blB%2FGNNGaxj%2FpJT3Et6CMCdhLkv58FXzShmmGMS8Xoc%2FKiQO74wuqQ83Krs2gMlAEni4s%2FmmiLjYd5VCNs9dUj6dCjHLkjHyRmT4ALkfa642ceOzT5UKRewDfdOC%2B%2FuZN3zIWldSJ88CpTrCPY62QGvQjAOVBdj7wJncf78ba2LAH8saRWRmEn5axoX1jd6tSsUT5DsotSyXg&X-Amz-Signature=2ca9d9c731c1c25ca16b3e9c3622918655fac5a0067a9b2fb3380d477a31b9cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZXMGXBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGHEpHxq83db5VcLTmSC199fFKr22pgx5SIIpAoGtazdAiBe1m8dBlnq3uUnpnJRTHYwRcmQ7Fim7Ym71eSNQEb8FyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOp8%2FJSFRA9rc13nmKtwD2yWjLUCWTFd2F6YYjG7iqzGMRWGj%2FH9LuGbDPyPL77hbZB%2FM9ahgbX7bCFiNZVFiUq9%2F2dXlAcYawbPvifw4yKltJGNmuDNolT5JgWYpdJ%2FC2eT8hoJLmFKR0f90B591fQNnnJZvWHDFf23sT%2B6ObHeQD9DX%2FWcCXby9jdZXpnmC0ems9CqOvxZlO85g0gfQHyl4AvbBRD6szpDBx9OGG3Je2IAJGecD%2F3m4y7ShzNxBel1xemERWnDzg4amwuztWY4ypt7cojhPn3t9eRKMbtUQAeVpbcJuOfgFsvG9JYGCvWCh9H%2FgJSIr1IyfT6%2FQRZxOW19FZsBDvQKsQxa%2F1jmqgkCCoWkx73gqXwaRi0vjF70DFz%2FAlEBm4mTd4mb4QpH6hE4V%2BmJnsxAp%2BfySp8V4%2BgEBeP3KllBoWAMo9tW%2FDzZACMofHTpe3Wk6rEOa%2FVS%2BrAOMJBEZTgjtzbwZ5tSrqenxyKothTVBLLjrMtORTcudtn%2BkKVLltyo4QuRRLxT5qrg8GRS1sbNMWesqMe1x49zZBqHASGCMLOIhZ%2FLQbboMoemVd8oiMRpW8%2Fe0Cmd9TltirGo1ZV35FszFmZYV1FskWCl0s2IijwPCSLs0q3rEMxiPmaMu%2BY0w1p6LygY6pgHHqIaJAPToHCmQF38blB%2FGNNGaxj%2FpJT3Et6CMCdhLkv58FXzShmmGMS8Xoc%2FKiQO74wuqQ83Krs2gMlAEni4s%2FmmiLjYd5VCNs9dUj6dCjHLkjHyRmT4ALkfa642ceOzT5UKRewDfdOC%2B%2FuZN3zIWldSJ88CpTrCPY62QGvQjAOVBdj7wJncf78ba2LAH8saRWRmEn5axoX1jd6tSsUT5DsotSyXg&X-Amz-Signature=b39fe7761f86f5ac0d5a2f9d08cb5e9eccc9f65846e9f4d8a9d28e78791cf98f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

