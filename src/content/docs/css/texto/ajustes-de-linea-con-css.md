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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYDALXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiG6Di%2BS8OPOO%2BEUJJJ6oRdxxUC8wonxVzLyVn3xFhXAiBLpfOxYwsP5mwRkdu35vHVBHJZ3yTaDdQJ8NNBBqKVQCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCPj1Pu3NRvPtyCw6KtwDhq4QsjhY02ZzSafhtUwfZnn540j2ZMtEMQsVff5%2BUSclsw%2Bvbq5n6FPBSyeaX7dSXmc0m806%2BOwOXctPtlgAsJ6DUPJt17b0TAwWvPHZ2JIzuYiv5AsUtIUU5RwqGfys3Xdf%2B3%2F4eS1Rw8Q7sYika16KuG%2B%2FtMHlS1531ddCRquUX6UNA052ol%2FCcpIjvFUs3vl7WQEpqVmeaEQxIEZb28Ps7KEz64U5uYcURgrYUCRWRMjipTHdl1%2BCabMAyAu79W5VuRPdYeMeV7DINh%2BAZLWqcvKmDfiTU1otaBgrXiZTkLwJYDgvAQFZlYrP7wpAR%2FBWMccZClMTXlNUR9DddLkmaMNVLI6I6p%2FbjZm5%2FDfk7w%2BRgO8lgmEd3pmiO3nnJGRwqWNYj9mBpy8ur%2BcrCVQLZoLZm3Rlc%2Blyx%2F0TjOZ%2B5hvCUF4%2FfekGXFiR%2B42EyXwzD0fYgAD8QGhq6Os5qGKGrkjs4vOdtViAYFHcLxWaHfhx3BuJw8zow6%2Fmv%2BYkzizfhYh915EWA8WaXG80cAkvK%2Fo2QUzmtabn82w6Fyup5m4jQXGD%2FvbB9%2FA4PBxyijJ1jMho9PhV35Gce4aYuqwalt0440gMbz5Rv%2B2f8g%2FGyrdtV8jHRBQE6ckw98aKygY6pgE6ErXtLQT8COsWe23faFup1jXyfuciHurJAEcjL1ePnyCfSVZIbCowf2VsY73eLz7oBhoSWbKtwrdJSIpbxFXQbNUsf%2BEcxYzF%2B8Xm5n9cv4PtC8qQ0UdTaUjgTo29Qwxqe0u6mK4T6bPNOQc%2BKecTi2ogunwrTRxBXDlzxv%2BTyssTCDdBYLDx3yoB3o6phfXdwNHMRlqkqqZM4mXfFPyu31Zmx1%2FH&X-Amz-Signature=69e13a7cd491da9ff0539fe9e79174b932ac4336a3d983d80ac35b5dcd268f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOYDALXR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiG6Di%2BS8OPOO%2BEUJJJ6oRdxxUC8wonxVzLyVn3xFhXAiBLpfOxYwsP5mwRkdu35vHVBHJZ3yTaDdQJ8NNBBqKVQCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMCPj1Pu3NRvPtyCw6KtwDhq4QsjhY02ZzSafhtUwfZnn540j2ZMtEMQsVff5%2BUSclsw%2Bvbq5n6FPBSyeaX7dSXmc0m806%2BOwOXctPtlgAsJ6DUPJt17b0TAwWvPHZ2JIzuYiv5AsUtIUU5RwqGfys3Xdf%2B3%2F4eS1Rw8Q7sYika16KuG%2B%2FtMHlS1531ddCRquUX6UNA052ol%2FCcpIjvFUs3vl7WQEpqVmeaEQxIEZb28Ps7KEz64U5uYcURgrYUCRWRMjipTHdl1%2BCabMAyAu79W5VuRPdYeMeV7DINh%2BAZLWqcvKmDfiTU1otaBgrXiZTkLwJYDgvAQFZlYrP7wpAR%2FBWMccZClMTXlNUR9DddLkmaMNVLI6I6p%2FbjZm5%2FDfk7w%2BRgO8lgmEd3pmiO3nnJGRwqWNYj9mBpy8ur%2BcrCVQLZoLZm3Rlc%2Blyx%2F0TjOZ%2B5hvCUF4%2FfekGXFiR%2B42EyXwzD0fYgAD8QGhq6Os5qGKGrkjs4vOdtViAYFHcLxWaHfhx3BuJw8zow6%2Fmv%2BYkzizfhYh915EWA8WaXG80cAkvK%2Fo2QUzmtabn82w6Fyup5m4jQXGD%2FvbB9%2FA4PBxyijJ1jMho9PhV35Gce4aYuqwalt0440gMbz5Rv%2B2f8g%2FGyrdtV8jHRBQE6ckw98aKygY6pgE6ErXtLQT8COsWe23faFup1jXyfuciHurJAEcjL1ePnyCfSVZIbCowf2VsY73eLz7oBhoSWbKtwrdJSIpbxFXQbNUsf%2BEcxYzF%2B8Xm5n9cv4PtC8qQ0UdTaUjgTo29Qwxqe0u6mK4T6bPNOQc%2BKecTi2ogunwrTRxBXDlzxv%2BTyssTCDdBYLDx3yoB3o6phfXdwNHMRlqkqqZM4mXfFPyu31Zmx1%2FH&X-Amz-Signature=b434556b7d4ba9bc87eb040a9423304a7bd104cc3ff6139be548a2680b566ec8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

