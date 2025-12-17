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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGN5ZIC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmlT%2BqCsmhQbyQPe4mDIfLKFr6fxdKEz98VBvfhuqU0AiB5oSNU%2BO3740d%2BYiVzwwrrRERVxsePKoHWyxSbJ2z3Myr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMIkyeQcS1VTH7k3wEKtwDrZyXo5xhe3HuRAvMlOkQ5VLLfuS%2FvEkD%2Fa8DBuC7TJlkcJZDI1HOnbfImwdw1zcTTv1yEHgl5CVsL0rgvdDzJg5sTrksrznCTAUtrMs1TNC49FHaNbXZiQAQQi%2BToZdtXl6d574wQgdSNAHfyHf9Wii4gqY0O2temQd%2BuSxreW6r6jhxfMUEegA8pCbnnkLh2pZtHxMMri3PoIbrbAQJziM%2BViGv1jEJUdf6qvApG9UH8%2B94PM5lm4%2BwcWZlWecVT%2F6zyXjrMMsIEw%2F66kSqwa7ZDIQQ4G5GqjaH2jwnc%2FpTbONvj4X65WsiWla7y%2BqcQe9qcBU5qAezycMMK%2FwmG1kStxvd8oqT3oSjvQjg35NSKWzKgeViiDYlKs9gNE0J38Bpwa%2Fv1EaauXeXic%2FTjWCNNCMq4%2BPTDaYaMjJhK4Z%2BHKMMweXmpYR8%2B9nObBrq0cjWn8B85uXGsLv7BtFNfxnmlqNVC10AJIVuX0CAPFz66sxSDXCdswFhZamtsDO8u%2FjAohXZdOEJi%2BlHW7RRswjClGLEMeoyWE5NPi2OI7lHlpSQWTYIU%2BL6Efbqc85o%2F55B9wO5fuhDkPOVsbOyBp4hBG3TqfqxnX6ltgVcoQEJw2MamQ4U8mq3szgw6bKIygY6pgFtomD4WmDc7IRm1r8hSCPmNklJkAuDHubzpPnD1BYjfeVguzWRQAT5OvA%2BQL72FOLM%2BFVEcERmxM%2BtmTudlRcJxOFgJ45fsXWTQVgE4ysD2e4jo15Gi12xy2M9OLW%2F%2FpQ%2BOko756is2bmzWbUbwB%2FB3DcZdGyfCPI2xsrER%2BxR5Bkr%2Fo5nBSg4iCKUgupy4Pl7FU9ttFRJU49a%2Byhdm4ziN%2BrjFYcr&X-Amz-Signature=62eccf68e0be3c79251601e1210d8fb84b1322c31411952ad217f311940ee6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMGN5ZIC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAmlT%2BqCsmhQbyQPe4mDIfLKFr6fxdKEz98VBvfhuqU0AiB5oSNU%2BO3740d%2BYiVzwwrrRERVxsePKoHWyxSbJ2z3Myr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMIkyeQcS1VTH7k3wEKtwDrZyXo5xhe3HuRAvMlOkQ5VLLfuS%2FvEkD%2Fa8DBuC7TJlkcJZDI1HOnbfImwdw1zcTTv1yEHgl5CVsL0rgvdDzJg5sTrksrznCTAUtrMs1TNC49FHaNbXZiQAQQi%2BToZdtXl6d574wQgdSNAHfyHf9Wii4gqY0O2temQd%2BuSxreW6r6jhxfMUEegA8pCbnnkLh2pZtHxMMri3PoIbrbAQJziM%2BViGv1jEJUdf6qvApG9UH8%2B94PM5lm4%2BwcWZlWecVT%2F6zyXjrMMsIEw%2F66kSqwa7ZDIQQ4G5GqjaH2jwnc%2FpTbONvj4X65WsiWla7y%2BqcQe9qcBU5qAezycMMK%2FwmG1kStxvd8oqT3oSjvQjg35NSKWzKgeViiDYlKs9gNE0J38Bpwa%2Fv1EaauXeXic%2FTjWCNNCMq4%2BPTDaYaMjJhK4Z%2BHKMMweXmpYR8%2B9nObBrq0cjWn8B85uXGsLv7BtFNfxnmlqNVC10AJIVuX0CAPFz66sxSDXCdswFhZamtsDO8u%2FjAohXZdOEJi%2BlHW7RRswjClGLEMeoyWE5NPi2OI7lHlpSQWTYIU%2BL6Efbqc85o%2F55B9wO5fuhDkPOVsbOyBp4hBG3TqfqxnX6ltgVcoQEJw2MamQ4U8mq3szgw6bKIygY6pgFtomD4WmDc7IRm1r8hSCPmNklJkAuDHubzpPnD1BYjfeVguzWRQAT5OvA%2BQL72FOLM%2BFVEcERmxM%2BtmTudlRcJxOFgJ45fsXWTQVgE4ysD2e4jo15Gi12xy2M9OLW%2F%2FpQ%2BOko756is2bmzWbUbwB%2FB3DcZdGyfCPI2xsrER%2BxR5Bkr%2Fo5nBSg4iCKUgupy4Pl7FU9ttFRJU49a%2Byhdm4ziN%2BrjFYcr&X-Amz-Signature=b3423725a5f9118d908410db464e39ff50268a5a729e42fa8482251d6646379f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

