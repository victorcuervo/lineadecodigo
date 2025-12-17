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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLB2VIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8hsCJuwyEuLvkpqp1GtwjDqIiJEzjJSvpiF62i7YvxQIgToDhXHrAogFDbYKj%2FbaXDBo3U7dcJGnlF4WcwV8qs5oq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCnudNi7tHAu10QECSrcA6JRjg%2F7QRElZ2dL5W%2BIhqv%2FJ3QRwwtCMOJpeBGBKnX4n6NoziNqWOEJDB0EYRbEtntT32kKqZWw8FhK%2B9RDGt2CKupTYhmRStYJgREYEU9tJb1BJjYRLWw1u0gE%2BuwERxr0U4pKfo25XNbzhmFl9rNXPdcCqYEoQIb4WHMa%2BXCMdfN0gwFIn7W1pBFTEDJpWh8SaWEQbFPVTkhU6703MKicIr2wdqZfd6Zwb%2F8rENknO%2FvJOdXTCLEhUxPD87L7LuIMShtSf0ndw39U5hel2UtG96IMJGVeZDppcsGI4fiOVpnHqnvoOUnqJIXXu0tGwIMzEJ8B8cierODEzJAQ3F9X60jG6EXe4njc8NdvOEFcBdN7DAu9gZAmjsYslV88LVQIFXmi%2FdM8gXq53NCqrx%2BLUArAqAaTOrXxW0HyrJ505QTZoCkiZu9AqyKl2ZxRyBBC3fv19UOVCIsNenytcHKnaO51D%2FM8yw5IYkfJwNkY2MEQupDs9jab8m%2B7ZA8z8Mglo88xVkPK24wCD4tqO5TBeDejGwvCo4sohLs%2FFOYYndPfpuPDBBPwl1zV4TdlsDjELyK%2Fx9AL0rEed8sIZfcsA5nYyJ4buBAsVvHbofQ5jXlAj2wn%2FFaG0%2BfRMI7qiMoGOqUBrvQJmE6tWKz7Ak9PYQ5Wm99saMzZnM0c6zQVr1UZd4E%2FyM5qz1IREtAKkqj3pyJT4KJEsID6H3BPrbQ1GlcWnmblFzTk8lwWrclXaQOidXPyyrMQiLNP5m5SZQGOSPjfx7SggKz3OHfVrRvMmK2%2Bs%2FjFeMePhon6Dr88ne5UKXWY2cHuFkuyfAfKJhNpeTCdwu9zAiWCjlurNgWe1q6mZACuFsSN&X-Amz-Signature=db46a37333528a8254328c92546a678f4e61837aecd7181c50219012403e97ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLB2VIT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8hsCJuwyEuLvkpqp1GtwjDqIiJEzjJSvpiF62i7YvxQIgToDhXHrAogFDbYKj%2FbaXDBo3U7dcJGnlF4WcwV8qs5oq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCnudNi7tHAu10QECSrcA6JRjg%2F7QRElZ2dL5W%2BIhqv%2FJ3QRwwtCMOJpeBGBKnX4n6NoziNqWOEJDB0EYRbEtntT32kKqZWw8FhK%2B9RDGt2CKupTYhmRStYJgREYEU9tJb1BJjYRLWw1u0gE%2BuwERxr0U4pKfo25XNbzhmFl9rNXPdcCqYEoQIb4WHMa%2BXCMdfN0gwFIn7W1pBFTEDJpWh8SaWEQbFPVTkhU6703MKicIr2wdqZfd6Zwb%2F8rENknO%2FvJOdXTCLEhUxPD87L7LuIMShtSf0ndw39U5hel2UtG96IMJGVeZDppcsGI4fiOVpnHqnvoOUnqJIXXu0tGwIMzEJ8B8cierODEzJAQ3F9X60jG6EXe4njc8NdvOEFcBdN7DAu9gZAmjsYslV88LVQIFXmi%2FdM8gXq53NCqrx%2BLUArAqAaTOrXxW0HyrJ505QTZoCkiZu9AqyKl2ZxRyBBC3fv19UOVCIsNenytcHKnaO51D%2FM8yw5IYkfJwNkY2MEQupDs9jab8m%2B7ZA8z8Mglo88xVkPK24wCD4tqO5TBeDejGwvCo4sohLs%2FFOYYndPfpuPDBBPwl1zV4TdlsDjELyK%2Fx9AL0rEed8sIZfcsA5nYyJ4buBAsVvHbofQ5jXlAj2wn%2FFaG0%2BfRMI7qiMoGOqUBrvQJmE6tWKz7Ak9PYQ5Wm99saMzZnM0c6zQVr1UZd4E%2FyM5qz1IREtAKkqj3pyJT4KJEsID6H3BPrbQ1GlcWnmblFzTk8lwWrclXaQOidXPyyrMQiLNP5m5SZQGOSPjfx7SggKz3OHfVrRvMmK2%2Bs%2FjFeMePhon6Dr88ne5UKXWY2cHuFkuyfAfKJhNpeTCdwu9zAiWCjlurNgWe1q6mZACuFsSN&X-Amz-Signature=7ac6e17aaebb4836276634318159d3443e82e96f3332bee7e1f5e16b9977d6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

