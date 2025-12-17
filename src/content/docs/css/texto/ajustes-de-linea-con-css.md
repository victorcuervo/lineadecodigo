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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4SYQ2VA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLaliyhceGKagkhAqFcyBBPqtxc2t2EY5ikZM%2Br0LELAIgNaimmoaGy%2FwxwNSomfjrIrGJikPEUp6cUhlDzZy6RjEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBPEvPN7yXHFlgy7gyrcA9Qcs04xEL%2Bwn1jiiF9TQAcv4bJMfYoiwCJYB2wydwdlSxUVBYP7T8KJgEl%2BoQcjmt8LMuh0DifZcROf7fJ3Th%2BlnZy3WiiSERTQ8TDnMxkKJ76vqhY7e88GbEwFVQOTv5edqCAhj7DQF%2BL9lUjVq5GLYs86RkMMiWGsLGDdDQ53jQiUgucW%2BiM6xomuxxCWsZ6rDXTFI2WPGeOWWgd9DyuMY4e7KgSZX6eJr8KxDEBl0nSaxwLEyX%2BenQzAbsbsPfa8yrrXQR06xqrjHWn6bgyymvtpCDbuDCHiy1hbdXcSZFWUmqWCDzdDvqFtrOeNPrKstE0v8Mzy8S2wxqYvtKgxGL3uPoX9A2k24rp%2B4PNtH8HEFVnroirCetA1eKdcrDe46Q6C8ruhH5Q4z4buL34exJSlnUPh4yZoGa8qZcSQz%2FeHyzgX%2BkE4ErKxoBgTV1IN3nv%2BLcUI%2F%2BjJXjGl4jJVGajNc6eggmgwPe6hidTsR4r3GBDzb%2Bd%2FLaUD28lz7ETJYuzQ3o67B1sHMnwz24l%2BqNsKYPWlowM9Rj9UJT%2FZ2i3BoU3svMhzPesvqNDVp6tMWQ6cqr2KLt3x2voXCcu9NeIBri75lw74hk8wD0J7ItXBTmailzVRF%2BmQMNOdicoGOqUBhD%2FX96RvFtsdcaxa4g1%2B4rzvUEgnT7WEzkXZUx5q11XhpKzvkFGfjlfrZomgGjA4Gg16rvY1c23ucADSqAhsGmLLICeMV9cHRmqwmdqB3XgnPcrV7MJ9TkgeX1Ya07%2FhyKRrYzLyuSljlT16QbqusTaxT4qmRi8u0cYKOiAjKP8ZvSO1Zp0dybhGDe%2Fb2r3bHDC6BxgP2vli29GvEzQCfsF72YDR&X-Amz-Signature=6a974138f37ef71f664147912689ec175179b5776f617cc14e3b0d358029384e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4SYQ2VA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLaliyhceGKagkhAqFcyBBPqtxc2t2EY5ikZM%2Br0LELAIgNaimmoaGy%2FwxwNSomfjrIrGJikPEUp6cUhlDzZy6RjEq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBPEvPN7yXHFlgy7gyrcA9Qcs04xEL%2Bwn1jiiF9TQAcv4bJMfYoiwCJYB2wydwdlSxUVBYP7T8KJgEl%2BoQcjmt8LMuh0DifZcROf7fJ3Th%2BlnZy3WiiSERTQ8TDnMxkKJ76vqhY7e88GbEwFVQOTv5edqCAhj7DQF%2BL9lUjVq5GLYs86RkMMiWGsLGDdDQ53jQiUgucW%2BiM6xomuxxCWsZ6rDXTFI2WPGeOWWgd9DyuMY4e7KgSZX6eJr8KxDEBl0nSaxwLEyX%2BenQzAbsbsPfa8yrrXQR06xqrjHWn6bgyymvtpCDbuDCHiy1hbdXcSZFWUmqWCDzdDvqFtrOeNPrKstE0v8Mzy8S2wxqYvtKgxGL3uPoX9A2k24rp%2B4PNtH8HEFVnroirCetA1eKdcrDe46Q6C8ruhH5Q4z4buL34exJSlnUPh4yZoGa8qZcSQz%2FeHyzgX%2BkE4ErKxoBgTV1IN3nv%2BLcUI%2F%2BjJXjGl4jJVGajNc6eggmgwPe6hidTsR4r3GBDzb%2Bd%2FLaUD28lz7ETJYuzQ3o67B1sHMnwz24l%2BqNsKYPWlowM9Rj9UJT%2FZ2i3BoU3svMhzPesvqNDVp6tMWQ6cqr2KLt3x2voXCcu9NeIBri75lw74hk8wD0J7ItXBTmailzVRF%2BmQMNOdicoGOqUBhD%2FX96RvFtsdcaxa4g1%2B4rzvUEgnT7WEzkXZUx5q11XhpKzvkFGfjlfrZomgGjA4Gg16rvY1c23ucADSqAhsGmLLICeMV9cHRmqwmdqB3XgnPcrV7MJ9TkgeX1Ya07%2FhyKRrYzLyuSljlT16QbqusTaxT4qmRi8u0cYKOiAjKP8ZvSO1Zp0dybhGDe%2Fb2r3bHDC6BxgP2vli29GvEzQCfsF72YDR&X-Amz-Signature=fbd14f4fd1b6e50da263edcb471db8a62dab1c2af34565dd5135435df0d011f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

