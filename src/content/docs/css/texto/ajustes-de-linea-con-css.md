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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6GRRH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw2wNLS5JsUqqy%2BkdsqRiJaxtAHYrHT4tJcRa8Wtov%2FAiAmkLGIu9RPQkQRKbfxJ%2F4YiRMEvUDyErNeZVBVBNyjPCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMPUkR7BOKph2GYoDtKtwDxyPwkY1emwNHpdhHbnjM7Xz3zJcYaUPEAv%2BdytPo5274SeRYUnJqW1RU8SBzlFI0%2BtDl4JKcBwQ13G%2Ff0hGSO%2FO8lBh7xxvWPHa2YZ88pjMAOHaUSj2ynOlrTFOcVj6N3K1l3KmfCDwPobhAd6P8vcgKyh7kOIo7cq6sWOIqjBoghmdpgaXmZl6qrh%2FiK840uGrOaqiyLPTo1CN8tQRrU320IrE37KdnkVGXuWmOoUINgsAPgEbjDj%2FrvEzTHvBpi3sZXyjUJ9%2FczwcuqFETFTJAkYoekzYz3UQ069vfLUE9QZuVKB4B0bLd7qs2IXfHNYBjMaeO1HcHdob8q1aivZpD1aDMHI8Ae5ix7wzmGemXmYiq7v%2B2JKNHNS6c6QrvqsZcXlJufEBnWxrrgXZf1U8EkT6PGyTa3wJgwrRhVUmtCZDu3uB6LFi1DQnSqy0gGCL3VbYcAuFpjlZWgVFOfkabBLN7NJwFygRoEhKolARtBfb%2FNjt6Dwbv%2BSUMlK6e4T0Q1rztfDnXTplKNjS78r%2BZ%2BD%2F9MIw2cIJ3q%2Bm37br8xErVh9qPCvYnAXVxOPRk%2FJTv7TXrJbaLpy3esNjcaYjtGukmvrznXp%2FPrL9hX%2Fppp60owt8Nja%2B%2BjdowgLOIygY6pgHOZ4EAvbVX0WiIHwM3wcFmL5wbKm%2FtzqFKNF8BN1RS4HKsq5%2FxX%2F1828XLfFY5%2BDdZlaWc4S6wCQCMJcRUcbCDk2cQqbgJZyX4QNOAPZ%2FaMYk1XoMjENaws0rDh5uS%2Bh4Cso9OcdTUZeS4fJh9VgU3rU0cbqNxsg5ijXHxJLeUFgwcYHuFMGpzktP6%2BxeXyPhpKgzi8cPKp5TD%2BFyvLD%2FDuwL%2BWl%2BH&X-Amz-Signature=065230768a1ff06e024f1fd077435d33ec9712e7eb6a161d8b34917aed1285dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6GRRH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw2wNLS5JsUqqy%2BkdsqRiJaxtAHYrHT4tJcRa8Wtov%2FAiAmkLGIu9RPQkQRKbfxJ%2F4YiRMEvUDyErNeZVBVBNyjPCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMPUkR7BOKph2GYoDtKtwDxyPwkY1emwNHpdhHbnjM7Xz3zJcYaUPEAv%2BdytPo5274SeRYUnJqW1RU8SBzlFI0%2BtDl4JKcBwQ13G%2Ff0hGSO%2FO8lBh7xxvWPHa2YZ88pjMAOHaUSj2ynOlrTFOcVj6N3K1l3KmfCDwPobhAd6P8vcgKyh7kOIo7cq6sWOIqjBoghmdpgaXmZl6qrh%2FiK840uGrOaqiyLPTo1CN8tQRrU320IrE37KdnkVGXuWmOoUINgsAPgEbjDj%2FrvEzTHvBpi3sZXyjUJ9%2FczwcuqFETFTJAkYoekzYz3UQ069vfLUE9QZuVKB4B0bLd7qs2IXfHNYBjMaeO1HcHdob8q1aivZpD1aDMHI8Ae5ix7wzmGemXmYiq7v%2B2JKNHNS6c6QrvqsZcXlJufEBnWxrrgXZf1U8EkT6PGyTa3wJgwrRhVUmtCZDu3uB6LFi1DQnSqy0gGCL3VbYcAuFpjlZWgVFOfkabBLN7NJwFygRoEhKolARtBfb%2FNjt6Dwbv%2BSUMlK6e4T0Q1rztfDnXTplKNjS78r%2BZ%2BD%2F9MIw2cIJ3q%2Bm37br8xErVh9qPCvYnAXVxOPRk%2FJTv7TXrJbaLpy3esNjcaYjtGukmvrznXp%2FPrL9hX%2Fppp60owt8Nja%2B%2BjdowgLOIygY6pgHOZ4EAvbVX0WiIHwM3wcFmL5wbKm%2FtzqFKNF8BN1RS4HKsq5%2FxX%2F1828XLfFY5%2BDdZlaWc4S6wCQCMJcRUcbCDk2cQqbgJZyX4QNOAPZ%2FaMYk1XoMjENaws0rDh5uS%2Bh4Cso9OcdTUZeS4fJh9VgU3rU0cbqNxsg5ijXHxJLeUFgwcYHuFMGpzktP6%2BxeXyPhpKgzi8cPKp5TD%2BFyvLD%2FDuwL%2BWl%2BH&X-Amz-Signature=5eb1632bcb7e865461f616e8bd4c8e47155082fc9163d313d83efe1e79a9ffd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

