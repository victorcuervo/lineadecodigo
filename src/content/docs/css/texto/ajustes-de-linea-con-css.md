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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGTJ5JW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlYWDujBuOzpRxpJo0HcXAujbG9IAtnE5qzIvRFSrITAiEAjm7bYcmX02bV49UvthrhD15z4DxXZNE%2B6hqbo5R2vewq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEwBhN1UOXERzpQgmCrcAzR%2FYxPoIHCdyTSoH9U0W9NJBW9tldzbNDUH0f3LP6xoe2yrLMqxe7ywUQh0a6kCln9JeNYSQzI4JiwVaRFFf%2Bz72HVdqXvudPEu1B1llPUoFqZGOpkAkXS%2BUpNhCGUr87Lk%2FDns7lYIOIXg%2BYMbIB%2Bs60emROG7HUC%2BsXT0Kc7l2BrWxoWRpMfclVOFhqvbPg05Cb%2Bh9YkCt7WQExzrRNTi3Xba4AsuH0E9JTi%2BWS0B9%2BYVF6zEaOOAUbJ9F9hMKen8pOEbZHoxaPJszll7hP7DjxtICXtD5ZGx12i3D%2FPBMUciHmTfNmcfEramCboUymH60c9TBneJjpaWo9P8xeR67iaKRUztHNasU3k%2BQp1YcnWW6sqyUk6krqhWAHgHD9bw7slDiVR%2FQvjIJoaMZqFCZVkNKcn6WzbmsY%2BBwBr5ol1HSlWR9AlJuoQrpZOrXkYdf%2F2lNwRD8oZyoPiv8G85hep%2Bbh37ZO31MWUzGYkjCUjaz4bRwGaF23i7xmZKFWcqyDewIeKpPpUNB8aqOhvXCRCGLUDHpncg24zBKtUlShtBV%2BKn5XmPcdI840zNqu8jgzUOdP6QoIB9Zk1Ceh7tWpXbDLWqQaud%2FtL9MqQYf8jTGaX358Jv3W7%2BMMCdicoGOqUBojLvma4IVkdg1KpFQO5l9PdkK0YGCmEH%2FsbaUzcbmFRUmSCcRJxnJG9rRXVCdqEIcKUVIRsHr6QO4x6ZfRUsQjo4onipo9LrAlyj1KYkIu08VlDyaCRTWmgwkWiDf1ujm7HUU%2FDLFrGsBVjUk8uv%2BjkNhukWgAKmKeh1aKReYpEIiz8yxq%2FaW%2Fr78RozzR9CZQXFs%2BYbeXyMbLkOdu6%2FAS%2B07EDS&X-Amz-Signature=376865201069fe03450f762d67996f1d73e3cb0104cc6638bc1c4233e8d49b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KGTJ5JW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlYWDujBuOzpRxpJo0HcXAujbG9IAtnE5qzIvRFSrITAiEAjm7bYcmX02bV49UvthrhD15z4DxXZNE%2B6hqbo5R2vewq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEwBhN1UOXERzpQgmCrcAzR%2FYxPoIHCdyTSoH9U0W9NJBW9tldzbNDUH0f3LP6xoe2yrLMqxe7ywUQh0a6kCln9JeNYSQzI4JiwVaRFFf%2Bz72HVdqXvudPEu1B1llPUoFqZGOpkAkXS%2BUpNhCGUr87Lk%2FDns7lYIOIXg%2BYMbIB%2Bs60emROG7HUC%2BsXT0Kc7l2BrWxoWRpMfclVOFhqvbPg05Cb%2Bh9YkCt7WQExzrRNTi3Xba4AsuH0E9JTi%2BWS0B9%2BYVF6zEaOOAUbJ9F9hMKen8pOEbZHoxaPJszll7hP7DjxtICXtD5ZGx12i3D%2FPBMUciHmTfNmcfEramCboUymH60c9TBneJjpaWo9P8xeR67iaKRUztHNasU3k%2BQp1YcnWW6sqyUk6krqhWAHgHD9bw7slDiVR%2FQvjIJoaMZqFCZVkNKcn6WzbmsY%2BBwBr5ol1HSlWR9AlJuoQrpZOrXkYdf%2F2lNwRD8oZyoPiv8G85hep%2Bbh37ZO31MWUzGYkjCUjaz4bRwGaF23i7xmZKFWcqyDewIeKpPpUNB8aqOhvXCRCGLUDHpncg24zBKtUlShtBV%2BKn5XmPcdI840zNqu8jgzUOdP6QoIB9Zk1Ceh7tWpXbDLWqQaud%2FtL9MqQYf8jTGaX358Jv3W7%2BMMCdicoGOqUBojLvma4IVkdg1KpFQO5l9PdkK0YGCmEH%2FsbaUzcbmFRUmSCcRJxnJG9rRXVCdqEIcKUVIRsHr6QO4x6ZfRUsQjo4onipo9LrAlyj1KYkIu08VlDyaCRTWmgwkWiDf1ujm7HUU%2FDLFrGsBVjUk8uv%2BjkNhukWgAKmKeh1aKReYpEIiz8yxq%2FaW%2Fr78RozzR9CZQXFs%2BYbeXyMbLkOdu6%2FAS%2B07EDS&X-Amz-Signature=ecffeb8c5945039af2b65cf31c31e45a8109aa8333fcde3ba4fc561512345f10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

