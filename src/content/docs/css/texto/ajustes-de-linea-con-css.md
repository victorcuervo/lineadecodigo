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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UDYNFZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLSz4RV9OZf%2B1wdw33hPvqxcvKwhond0AAxWjMDa%2FR7AiEAg0f8LQGqXBs0eSCyMYUMBDxR8Aegq%2FSZBmEnAvLUNHcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJSStLG%2FhMhB57RiVyrcA0E3bN%2BbHegNEVBL1aT8b7yHdPW%2FQ%2BdUKes7zl7bQBRuOzq%2Buz7BpgEIVH61iTQEdyeb7KXAgHlLNJKgILnUtixJgI97dz1DytSKgFYmFx2X6kLaq2N82Fw%2Bp%2F1mfx5c0cB3rmg0NqoZwg%2BcjWk%2FZcO7yhw3DcAZVqD3PtoPzB17Ryifl826mcVWV%2B3pv4EmYsruaT6tdCjtrr4Ns6lEdFxeK7vKzZVQz3Y5sMAYqQNVjrFZ66w4llPp5qu9olY5%2F304VNGvl6G6zWxshWU2SMQyF9zoCWGyhXzyoByIZMzlxJ1DEZKUXefcdaSjhJGtwp23LGo6eBBexWddXRRejJ0pj8u8yPP5yKAc5eSt%2F9YRoajPKQrL%2FOdu8qO34Wuy9HWBPSD6G2kLLz0YX7%2F87flFVMMGGHn0mjJYuJbLxWS0Osgp3fzlWn%2FDxaxazg7FFOUJrVryVnxrT%2Bc1y1PuQC%2FIcUKsKjeTe3avsPeMBH3%2FqZc7CeIoLphGjPxlAnHIs8ohmHWHmvzbHsHlNcvDfJESSCD8P2ihb5eXt6CgRIfP%2FkfdN2cW2%2FDQh676XIkj%2BlCFLzKRhpwUs0dCW%2F25ayyiNVbkSli5cYPq%2F4%2Fn5qh3eqyVN67HesGh1emXMIDTicoGOqUB08wx%2FLjbXdIS4LGBsN5uiIyzeLw68VPB3BQhnqf5jxvB3VddSF9A2A8rjzUZILxXU3E9PseIuliPq7AM88UwgOiVUsa0UmhRIJWsdLCp05aP0neDnsIKGnBL%2B94P%2Bp1aj%2FYtifbnw8AzSnFTXXsqbCewO%2Bt8Dh1OXXGuQxkAg9RCF43Gnxjuqd5bw5kDbAEuE9IilA4zUliEUPIKJmZ3ooRUaTpJ&X-Amz-Signature=564448a95cf27302126ec98ec10e0b5817da7cd845a641e977ff5c08da102d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UDYNFZF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLSz4RV9OZf%2B1wdw33hPvqxcvKwhond0AAxWjMDa%2FR7AiEAg0f8LQGqXBs0eSCyMYUMBDxR8Aegq%2FSZBmEnAvLUNHcq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJSStLG%2FhMhB57RiVyrcA0E3bN%2BbHegNEVBL1aT8b7yHdPW%2FQ%2BdUKes7zl7bQBRuOzq%2Buz7BpgEIVH61iTQEdyeb7KXAgHlLNJKgILnUtixJgI97dz1DytSKgFYmFx2X6kLaq2N82Fw%2Bp%2F1mfx5c0cB3rmg0NqoZwg%2BcjWk%2FZcO7yhw3DcAZVqD3PtoPzB17Ryifl826mcVWV%2B3pv4EmYsruaT6tdCjtrr4Ns6lEdFxeK7vKzZVQz3Y5sMAYqQNVjrFZ66w4llPp5qu9olY5%2F304VNGvl6G6zWxshWU2SMQyF9zoCWGyhXzyoByIZMzlxJ1DEZKUXefcdaSjhJGtwp23LGo6eBBexWddXRRejJ0pj8u8yPP5yKAc5eSt%2F9YRoajPKQrL%2FOdu8qO34Wuy9HWBPSD6G2kLLz0YX7%2F87flFVMMGGHn0mjJYuJbLxWS0Osgp3fzlWn%2FDxaxazg7FFOUJrVryVnxrT%2Bc1y1PuQC%2FIcUKsKjeTe3avsPeMBH3%2FqZc7CeIoLphGjPxlAnHIs8ohmHWHmvzbHsHlNcvDfJESSCD8P2ihb5eXt6CgRIfP%2FkfdN2cW2%2FDQh676XIkj%2BlCFLzKRhpwUs0dCW%2F25ayyiNVbkSli5cYPq%2F4%2Fn5qh3eqyVN67HesGh1emXMIDTicoGOqUB08wx%2FLjbXdIS4LGBsN5uiIyzeLw68VPB3BQhnqf5jxvB3VddSF9A2A8rjzUZILxXU3E9PseIuliPq7AM88UwgOiVUsa0UmhRIJWsdLCp05aP0neDnsIKGnBL%2B94P%2Bp1aj%2FYtifbnw8AzSnFTXXsqbCewO%2Bt8Dh1OXXGuQxkAg9RCF43Gnxjuqd5bw5kDbAEuE9IilA4zUliEUPIKJmZ3ooRUaTpJ&X-Amz-Signature=6f135c409e84132cc1427911e3b536fbf711f1353e4e0b98521f04adb77b6f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

