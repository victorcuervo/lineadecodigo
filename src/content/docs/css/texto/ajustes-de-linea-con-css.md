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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJAPMLGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeO6VsUx%2BsoDDUGEwOn6n6EBjt%2Bw2qZ0Hr1mEm%2FYilqAiBZKoLhfoN7HshvDnCfVzHyeEF5MRZLvOt420LsSv658CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiU6ehzu2h0Lh%2FYETKtwDlTmfd%2FaCsTYh6n%2BZGHMPAGLgt3cA4K%2FaRAks7uopHJP8jheR3%2Fo9TWA69V4E7UR5E6zTcO8FCvoQMm6QJViV8CgnOm%2BFE7dg4wU2WvsRYMIOW5kuLoPgj0pJmm09N2mP%2BtT0E6Nv%2Bd7grOCSyp%2BiFQFwf8wzCKaJVGGXiN%2FDDT7SZCVEEcmA1nGh9zEYZRICCNc5ekAeu2R0wNOoyo7aYIaXWZCswwHGz5vyeV%2B21x8UdQpkf09gUb7GO9pCsSgnarpNtpjxxGQEUXyBqtXFV7l9m2P0qJw5OoOD7eUzXDXyGjWSoiPtNFPfiJRmz8l9HK2JfiWZudswp6JH7%2BA4vFrCAj0flAWaCh03G1KjIVtKAC2pZxwRfYV3tyzmUBOohRttEIEs9OMKh1JYmyNAWaiyoLDjaFoRxu8CCE28mUEbbhZcrUU5qvnGc2cXqtw7yQkpdja9RqIi9AWJVO6KpeSdNaLcS1cwmMQk61c1sB4Z75AMF%2FYnXLYdvE0fr21T06p3qN%2BZCwGtvaGdYqTBW33dSoL2GDgfM5yxTDBo%2F%2FF8%2F22dWNeIXHx9c6WggPvGF6sO%2Bi8HoyXk3qiRLML25GsfrEh%2FLpN1yQa4P8mxhmlSn6BynrCZfYACAZAw05%2BLygY6pgEciF%2Fkq2LzfhLzjVCRSz%2BeyGxV89mNJuvKzcuERe32ELO%2B42WkIWZ3RiF9VTJNy7Mwhpim5NScACZgCh4K4vSKtp0%2BUqCG2LRYLSIdCCt0bk59ulBCC%2FInTgzHTqXHOl%2Bf4JlsKl9LXZV8ctS6Yo94DK%2FIzN%2F%2FfwgSuCYagA5jCQlPwZ3ufh91kOWmewqkFmqYgFtGddf0pzJ2vpBpo%2F91mcudjxJB&X-Amz-Signature=0d502ccab3787a44bcd2bc8037e8d6530c82fab9a4a1a1d344a94ade14211b7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJAPMLGE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBeO6VsUx%2BsoDDUGEwOn6n6EBjt%2Bw2qZ0Hr1mEm%2FYilqAiBZKoLhfoN7HshvDnCfVzHyeEF5MRZLvOt420LsSv658CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiU6ehzu2h0Lh%2FYETKtwDlTmfd%2FaCsTYh6n%2BZGHMPAGLgt3cA4K%2FaRAks7uopHJP8jheR3%2Fo9TWA69V4E7UR5E6zTcO8FCvoQMm6QJViV8CgnOm%2BFE7dg4wU2WvsRYMIOW5kuLoPgj0pJmm09N2mP%2BtT0E6Nv%2Bd7grOCSyp%2BiFQFwf8wzCKaJVGGXiN%2FDDT7SZCVEEcmA1nGh9zEYZRICCNc5ekAeu2R0wNOoyo7aYIaXWZCswwHGz5vyeV%2B21x8UdQpkf09gUb7GO9pCsSgnarpNtpjxxGQEUXyBqtXFV7l9m2P0qJw5OoOD7eUzXDXyGjWSoiPtNFPfiJRmz8l9HK2JfiWZudswp6JH7%2BA4vFrCAj0flAWaCh03G1KjIVtKAC2pZxwRfYV3tyzmUBOohRttEIEs9OMKh1JYmyNAWaiyoLDjaFoRxu8CCE28mUEbbhZcrUU5qvnGc2cXqtw7yQkpdja9RqIi9AWJVO6KpeSdNaLcS1cwmMQk61c1sB4Z75AMF%2FYnXLYdvE0fr21T06p3qN%2BZCwGtvaGdYqTBW33dSoL2GDgfM5yxTDBo%2F%2FF8%2F22dWNeIXHx9c6WggPvGF6sO%2Bi8HoyXk3qiRLML25GsfrEh%2FLpN1yQa4P8mxhmlSn6BynrCZfYACAZAw05%2BLygY6pgEciF%2Fkq2LzfhLzjVCRSz%2BeyGxV89mNJuvKzcuERe32ELO%2B42WkIWZ3RiF9VTJNy7Mwhpim5NScACZgCh4K4vSKtp0%2BUqCG2LRYLSIdCCt0bk59ulBCC%2FInTgzHTqXHOl%2Bf4JlsKl9LXZV8ctS6Yo94DK%2FIzN%2F%2FfwgSuCYagA5jCQlPwZ3ufh91kOWmewqkFmqYgFtGddf0pzJ2vpBpo%2F91mcudjxJB&X-Amz-Signature=c57e85f76143b0b6aa0df89dca94688dbb8dea565116c179a9d21622764fdb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

