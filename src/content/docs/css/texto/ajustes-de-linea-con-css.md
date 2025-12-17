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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS47WTC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNDS0XiPm2liM5GSoEN3qZiaZMyRF16L%2B6CPpgwEXGwAiA1k8LgfrX%2FM3IVi%2FPMLj4A2V37mMWkJIxj9VjvBaJnDSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs4rcYd4jT%2ByNzOWEKtwDKKhbmDbdanjLBNrxtcGf%2Fjxw4nBTklHkw8Ykw5SP2b0%2Buq7jCl%2BoGM2l0eQmffRgt%2BT0aF5BGruIif2AbDKgWs0UfsbWNfq26dEf7C7HXh5EypdQUwXviTuSW1MUPJ4lvYXIdNUjql%2Flp%2BYwO6DJM5mWh97VnLetN5JEouS6o2VZgfMnqwMzRYl0G3BY5WCTWAc%2FA6%2FtMoDPu6V4alj3yH878G7N0jA4sd7Smdb7vXVLYwgTm3nN9Igwb2QZa40ZWsoGotTbvegBwxk4gowkCu4yGcSzR14QpfSpNnQTEZFrssHOk3Ci3InL93anLrBfgnz6yKkWQIqhpeItXGSpbvO0pvaK9q4azR%2BExAt9vPYi%2FNOVV0PXxoCeBQPxPXFQfKhmbgrUAwj55FjaILyl%2FLSM5ehfR525PZWajPX2wCMSfsu%2FuyKTRViCa0zFTR2yJcX9e%2FzPRYCffeVzgVd9wuXiFLrT6GBJKyiIPjm6olnyYGv7Bm7sdxdy%2FdwMavllMukCAlhJaBmR6ccE26WSC94D62pQWMQusvHjKSORkxEAJCB4%2B5ZSsAoGjXn33u5TEqPFPQQtzstZLJ1eeKl7HdMAuwEDEmQxQrid1pjEzsL6ymKKCpIf0IfZe80w8tKJygY6pgHyCXcOz3tAFnim4LiOKv2GWgf4QQcdNodxhmHjM%2FlblgEXOUATAw0hCYWAn6Iz4yHPKBOUuN0AsUA%2FOWXKM4OMJMi7ifxbw5cxGr1oywbcsrJKbhy2HFAMNsJhZMEW%2FHvHdy2eafKYGLEWr0eLhBJScOoZWB24JrH%2BFImUK%2B%2BJzg4UYBgnXxPznXx8OhMcaSS1L4N96INyYpCjnIr2Gda0%2Frl4OHyT&X-Amz-Signature=aed3fa07fd40f74ffee256e9a04ef990c520a8b928687fa84a23a08b30c4098f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS47WTC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNDS0XiPm2liM5GSoEN3qZiaZMyRF16L%2B6CPpgwEXGwAiA1k8LgfrX%2FM3IVi%2FPMLj4A2V37mMWkJIxj9VjvBaJnDSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMs4rcYd4jT%2ByNzOWEKtwDKKhbmDbdanjLBNrxtcGf%2Fjxw4nBTklHkw8Ykw5SP2b0%2Buq7jCl%2BoGM2l0eQmffRgt%2BT0aF5BGruIif2AbDKgWs0UfsbWNfq26dEf7C7HXh5EypdQUwXviTuSW1MUPJ4lvYXIdNUjql%2Flp%2BYwO6DJM5mWh97VnLetN5JEouS6o2VZgfMnqwMzRYl0G3BY5WCTWAc%2FA6%2FtMoDPu6V4alj3yH878G7N0jA4sd7Smdb7vXVLYwgTm3nN9Igwb2QZa40ZWsoGotTbvegBwxk4gowkCu4yGcSzR14QpfSpNnQTEZFrssHOk3Ci3InL93anLrBfgnz6yKkWQIqhpeItXGSpbvO0pvaK9q4azR%2BExAt9vPYi%2FNOVV0PXxoCeBQPxPXFQfKhmbgrUAwj55FjaILyl%2FLSM5ehfR525PZWajPX2wCMSfsu%2FuyKTRViCa0zFTR2yJcX9e%2FzPRYCffeVzgVd9wuXiFLrT6GBJKyiIPjm6olnyYGv7Bm7sdxdy%2FdwMavllMukCAlhJaBmR6ccE26WSC94D62pQWMQusvHjKSORkxEAJCB4%2B5ZSsAoGjXn33u5TEqPFPQQtzstZLJ1eeKl7HdMAuwEDEmQxQrid1pjEzsL6ymKKCpIf0IfZe80w8tKJygY6pgHyCXcOz3tAFnim4LiOKv2GWgf4QQcdNodxhmHjM%2FlblgEXOUATAw0hCYWAn6Iz4yHPKBOUuN0AsUA%2FOWXKM4OMJMi7ifxbw5cxGr1oywbcsrJKbhy2HFAMNsJhZMEW%2FHvHdy2eafKYGLEWr0eLhBJScOoZWB24JrH%2BFImUK%2B%2BJzg4UYBgnXxPznXx8OhMcaSS1L4N96INyYpCjnIr2Gda0%2Frl4OHyT&X-Amz-Signature=4eb3a57b9a8205407dd8100f4fbefce49961c33fb24e6146c30c37e7058b829e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

