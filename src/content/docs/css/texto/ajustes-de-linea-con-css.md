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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGDO2WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlR4UF9lboKcfNdrIDi9HRIb1xGn7l2bVsgJvEVST9HAiB41M8lyiN49YlpuR8eT3QSzoDla7jZWfrJ2ETInJIexyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMN%2FF3cn2ordgLEJ8FKtwDNV%2FfSrMCHBiLQZoWRW%2FADNtlILrL0k%2BdGMt3ZUGgIWukNVePS%2B0T9BvaYJi2q%2Fq%2BOAlKbyu0b%2F4vF9jvkOCvrD6PFGTh0KoiRY5jP5dotxkWCOQuppeR5ukTuplYq7gtOp9Xp7SdUwMqBNacnyol9HeUEdeA7MvwlBiVwQe2uSzPyIz5bAcrRilMKMfjhd%2FYjJSJXA2O02jwU9QPbb8RPYQzl8qKqvpHz1nr4rJ148Who553v6D8nsmPTAJcwxSl%2BNmyBT4vVmo3xRTKaabMVZS8iwUV2jNI%2B55Hpm9GCctDbTBf7p2yXSclM3Y%2FqcLUIpPoOGiL2aiHL9SeEUSwoleytttnXReR7uVIgFJfuXgWcftJNGqaHul5VBcgX7tfc5qZvjK0%2BlZLNdm6Nz9EiX6YhtFwkH31beGdu60IPxJ5jBFYRrw5MghRWMWVGaSmmFm8SUmkME%2BAcMBA1Rc4P8DXnXQ%2BAx8Ux5Kz%2B05if%2BfduxvMZ4CeraFYc5FVpwZkYC%2BPqXe5bCG0n2WjpgWunhTGbrQanarz%2FXkO0fv2RKE7YEb%2BrfscgBNVVV1RS4ag2aLvqABIhEKcYp9pV8LAz5puY%2FjP0jwP5AKRoPzuLLTOoauMhIdHV0ThFaYwzreJygY6pgG2%2BWMKeTFDCZugXGASWgHRiub1XBvcoP1UJ5ApAE7Offuwg8hO0izA6Qo1Rre2SDyuLrFNtRUmdd%2B0b%2BePCVia7GG1b64%2FMc4Fgr9kaaORwf12A58RMDysQpOY87UGDnzo%2Fa7zybzzRtLXyiJfnfmqA9Dqix79OlAyF4gkl0R7JuOgH9zs1QxsiOLEtpFSBbWm1NjSNDPOMkt2UeOs9GtWfBTlEt2d&X-Amz-Signature=8087b2252e3667e61896dc4d38ea51b30f9b22e4c70c57d40b115c147380d4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDGDO2WH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlR4UF9lboKcfNdrIDi9HRIb1xGn7l2bVsgJvEVST9HAiB41M8lyiN49YlpuR8eT3QSzoDla7jZWfrJ2ETInJIexyr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMN%2FF3cn2ordgLEJ8FKtwDNV%2FfSrMCHBiLQZoWRW%2FADNtlILrL0k%2BdGMt3ZUGgIWukNVePS%2B0T9BvaYJi2q%2Fq%2BOAlKbyu0b%2F4vF9jvkOCvrD6PFGTh0KoiRY5jP5dotxkWCOQuppeR5ukTuplYq7gtOp9Xp7SdUwMqBNacnyol9HeUEdeA7MvwlBiVwQe2uSzPyIz5bAcrRilMKMfjhd%2FYjJSJXA2O02jwU9QPbb8RPYQzl8qKqvpHz1nr4rJ148Who553v6D8nsmPTAJcwxSl%2BNmyBT4vVmo3xRTKaabMVZS8iwUV2jNI%2B55Hpm9GCctDbTBf7p2yXSclM3Y%2FqcLUIpPoOGiL2aiHL9SeEUSwoleytttnXReR7uVIgFJfuXgWcftJNGqaHul5VBcgX7tfc5qZvjK0%2BlZLNdm6Nz9EiX6YhtFwkH31beGdu60IPxJ5jBFYRrw5MghRWMWVGaSmmFm8SUmkME%2BAcMBA1Rc4P8DXnXQ%2BAx8Ux5Kz%2B05if%2BfduxvMZ4CeraFYc5FVpwZkYC%2BPqXe5bCG0n2WjpgWunhTGbrQanarz%2FXkO0fv2RKE7YEb%2BrfscgBNVVV1RS4ag2aLvqABIhEKcYp9pV8LAz5puY%2FjP0jwP5AKRoPzuLLTOoauMhIdHV0ThFaYwzreJygY6pgG2%2BWMKeTFDCZugXGASWgHRiub1XBvcoP1UJ5ApAE7Offuwg8hO0izA6Qo1Rre2SDyuLrFNtRUmdd%2B0b%2BePCVia7GG1b64%2FMc4Fgr9kaaORwf12A58RMDysQpOY87UGDnzo%2Fa7zybzzRtLXyiJfnfmqA9Dqix79OlAyF4gkl0R7JuOgH9zs1QxsiOLEtpFSBbWm1NjSNDPOMkt2UeOs9GtWfBTlEt2d&X-Amz-Signature=54f0b7802eafbfa16c9d25ed14e9d30aaf670dccacd780aa64500c35ad50d3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

