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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAWQR75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFekmyeHfxL%2BC5v7ubttEmRuVbni1jrMoTrybLTMDycdAiEAnl31ZS5drcIKSer6W%2FGslKNjpG3e7o%2B7TpBOSk1uf1Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFOoUsdhfrcy62L9OCrcA7LrfG5Z%2FGXS5BJq%2FIk3%2BfHzvxNuAwqHD4YDUEc%2FeL40%2Fl4NY0aFfDA1psZ0%2BROiA6q%2FUHV2ITVJL2omuYY%2Bi3Yun4re47gYBU7dY%2B6dBzxQm8ba6QCB8WsvpPjqKvnee6pBG%2FIP%2F6MQAJeLu5nlIeesNJUvb4xXw63p%2BDpGP04FWtLN6vC%2FJUx0oMRnn8X6kZXNELli7ufk1WlaLURwvkgn1IZ25IgQGY28ZSe0ljq1ziTnWase%2BT5G5QbL3ex6006iBVdd0853ssTRUBN6BMpYVSdHAJesEZOorxRVfzNXC2GsJ14WBIr%2FlPV7SDRINJMRiy%2Fu6uM6DRXui8w7pwFx%2FZIOaqNfildbUCCmNcA81ix5KbU7aSOrYMOIJk5yIGKi8Ucvwm7FXDo%2F%2Fu3V7to6KgZdBvJi3hIHRwk9f3wMXNXGRsmRE8ZarwQaBHqkIYRKVLuqbReL09CT9BXHB8XSRGVZQIUGP2OuYSsZMKhtbZdFkVFPKqeaH8dJj4%2BKWBGxyHNXyMcThCTKqG6LgHRVD2bhiPeytfcpQmtBtS61wtimR8P7mJRhlpnR1IO%2FHT3RXIbBHgiHE47f1haSGBckZ7SUIxidGZDoiRhSoN6L2UNNjMwdbdfK64qrMMDGisoGOqUB%2FjPaiKXwFL7WNQLpCYPbVWgPsjER13Y8GoaGmZ8%2B3sfji5hn%2BlG6YIOAlVXbSiPqEuf7P23sJdwwJuWW1sO12%2FQMwD8VIwJlT8fpYuhCx4k9BYLFm%2BQ5A0kkHNvVGlQ9rHHZcsXML4dw110cCR04KEufZ38Y%2FQQgna48EO%2FeBNJkfNs24wiQQVamo2VEBYtpHDMO5M1LFObX5OkiCx6MElma5MZE&X-Amz-Signature=87bdeff83826e7a3eb08356e39eb48ab3a9d06198f48cf5bc7e5acc4b9f314ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAWQR75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFekmyeHfxL%2BC5v7ubttEmRuVbni1jrMoTrybLTMDycdAiEAnl31ZS5drcIKSer6W%2FGslKNjpG3e7o%2B7TpBOSk1uf1Mq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFOoUsdhfrcy62L9OCrcA7LrfG5Z%2FGXS5BJq%2FIk3%2BfHzvxNuAwqHD4YDUEc%2FeL40%2Fl4NY0aFfDA1psZ0%2BROiA6q%2FUHV2ITVJL2omuYY%2Bi3Yun4re47gYBU7dY%2B6dBzxQm8ba6QCB8WsvpPjqKvnee6pBG%2FIP%2F6MQAJeLu5nlIeesNJUvb4xXw63p%2BDpGP04FWtLN6vC%2FJUx0oMRnn8X6kZXNELli7ufk1WlaLURwvkgn1IZ25IgQGY28ZSe0ljq1ziTnWase%2BT5G5QbL3ex6006iBVdd0853ssTRUBN6BMpYVSdHAJesEZOorxRVfzNXC2GsJ14WBIr%2FlPV7SDRINJMRiy%2Fu6uM6DRXui8w7pwFx%2FZIOaqNfildbUCCmNcA81ix5KbU7aSOrYMOIJk5yIGKi8Ucvwm7FXDo%2F%2Fu3V7to6KgZdBvJi3hIHRwk9f3wMXNXGRsmRE8ZarwQaBHqkIYRKVLuqbReL09CT9BXHB8XSRGVZQIUGP2OuYSsZMKhtbZdFkVFPKqeaH8dJj4%2BKWBGxyHNXyMcThCTKqG6LgHRVD2bhiPeytfcpQmtBtS61wtimR8P7mJRhlpnR1IO%2FHT3RXIbBHgiHE47f1haSGBckZ7SUIxidGZDoiRhSoN6L2UNNjMwdbdfK64qrMMDGisoGOqUB%2FjPaiKXwFL7WNQLpCYPbVWgPsjER13Y8GoaGmZ8%2B3sfji5hn%2BlG6YIOAlVXbSiPqEuf7P23sJdwwJuWW1sO12%2FQMwD8VIwJlT8fpYuhCx4k9BYLFm%2BQ5A0kkHNvVGlQ9rHHZcsXML4dw110cCR04KEufZ38Y%2FQQgna48EO%2FeBNJkfNs24wiQQVamo2VEBYtpHDMO5M1LFObX5OkiCx6MElma5MZE&X-Amz-Signature=2a97db2beb8421eefec0beaa89b47b8ef6ef7541d26d71cdd09271c1920d4ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

