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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJF43X5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8uCYDOLHkDDjiuKx%2BmiTmruFHOKlaX5wsOK03qxEnAIgMJSe3hHlosZl9OW0JaKOaYiENoM4aKSsLTQz3prRE3Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDDIvJXvrYYAdOknvircA5wl3UMO8BtqfsvLNybbigtEoEKI5I2Ep8LLNeFpI3HTCUAdL970ElEqY9mmoxQBLEHz9ODFw%2BdnjXu2f8OOW%2B65iTBctVg5SneBQI8EsbnIepldpfiVve1xuXocnv4UR0MKqpHJ%2FAg5epKmKWfKk7VHXUZabt2kAXAKx%2FasNKIorwnUhoTSdQqCGAvtJzzNKitmfqqwe%2BFv5h8wO%2Bl4TdUu2wLOv8x4SmLin9aZe4rohCgyZ22%2F6M7SJmrdU%2B%2B0EFTeDt%2Fpje%2FSw2TQCba%2BX8NA88NeAce7wKyMjFpM3SUKm3Tluqit7xA%2BKNE02a%2FuFAWAkthFipzkQX%2Fw%2F4A2DBCf8MrMGiXn28uyy0FNrwLIWaw4TyWwOic5ut6rsEfhR%2FpS7wissKS7mOknWRqF141SLR8T565N06WeN%2Fh4fucoQEhRcQUWhsJ7Me02xSKxQDNdAG%2BZ4RAyRMgiBAzJQkT4FQ1E%2B6mIVafAULMb9TvcY7OaPbhF39tuW7%2F7RA2GX2D4U%2FNAGsMXK5n3O8KGC8bMbEAqC%2B5Mm8acVeuRc0NFwtu1zOyaUjtvtfU4NL9UVKS2HMaN1aHYvzbn%2BG9hG%2BIVkPXCiCGcc87YLfZr%2FcpUbGL4AyqVO39RExhMMLrSicoGOqUBdkVYkydDRzyigLtKTx5tCdVcSr5KFghvMTMcfYGIniEjU2wd6wFVQoiiuYeFKGglK7cgRzkzxeHkXQD3Khv8cqP6Vg3ihknacnvjE66LuDE390nadUhFeYlQG0WyWFY%2FblXWCK8jL0CvBoI4O4fc%2BIOYLST1HXeboEYYq5AGbMx4%2FYFernGB43653%2F3zXtdgrtMZ981PZvNMEceFtjSaHcl8xME0&X-Amz-Signature=07c6810b7629c4e06ce5ae62c2a2fbf081d5f800d5f6de93e3e21c15b1bc0cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJF43X5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCw8uCYDOLHkDDjiuKx%2BmiTmruFHOKlaX5wsOK03qxEnAIgMJSe3hHlosZl9OW0JaKOaYiENoM4aKSsLTQz3prRE3Aq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDDDIvJXvrYYAdOknvircA5wl3UMO8BtqfsvLNybbigtEoEKI5I2Ep8LLNeFpI3HTCUAdL970ElEqY9mmoxQBLEHz9ODFw%2BdnjXu2f8OOW%2B65iTBctVg5SneBQI8EsbnIepldpfiVve1xuXocnv4UR0MKqpHJ%2FAg5epKmKWfKk7VHXUZabt2kAXAKx%2FasNKIorwnUhoTSdQqCGAvtJzzNKitmfqqwe%2BFv5h8wO%2Bl4TdUu2wLOv8x4SmLin9aZe4rohCgyZ22%2F6M7SJmrdU%2B%2B0EFTeDt%2Fpje%2FSw2TQCba%2BX8NA88NeAce7wKyMjFpM3SUKm3Tluqit7xA%2BKNE02a%2FuFAWAkthFipzkQX%2Fw%2F4A2DBCf8MrMGiXn28uyy0FNrwLIWaw4TyWwOic5ut6rsEfhR%2FpS7wissKS7mOknWRqF141SLR8T565N06WeN%2Fh4fucoQEhRcQUWhsJ7Me02xSKxQDNdAG%2BZ4RAyRMgiBAzJQkT4FQ1E%2B6mIVafAULMb9TvcY7OaPbhF39tuW7%2F7RA2GX2D4U%2FNAGsMXK5n3O8KGC8bMbEAqC%2B5Mm8acVeuRc0NFwtu1zOyaUjtvtfU4NL9UVKS2HMaN1aHYvzbn%2BG9hG%2BIVkPXCiCGcc87YLfZr%2FcpUbGL4AyqVO39RExhMMLrSicoGOqUBdkVYkydDRzyigLtKTx5tCdVcSr5KFghvMTMcfYGIniEjU2wd6wFVQoiiuYeFKGglK7cgRzkzxeHkXQD3Khv8cqP6Vg3ihknacnvjE66LuDE390nadUhFeYlQG0WyWFY%2FblXWCK8jL0CvBoI4O4fc%2BIOYLST1HXeboEYYq5AGbMx4%2FYFernGB43653%2F3zXtdgrtMZ981PZvNMEceFtjSaHcl8xME0&X-Amz-Signature=9ee54d58ba30b469af1aa5b6d683d17dfaebf43abe975768f7387535ccd26a0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

