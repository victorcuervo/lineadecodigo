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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4LSEYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq43J%2FtWc%2B8EG%2B6zBFKx8lKoKx4ybhQWaHiu1fL54bQQIgfv%2FPk9Bz2Meu7Zokri5FsZ7sxqpujDi%2Fwr%2FWMBrbKtYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD2zOR8D2Szo2S1HGyrcA7tb2Cgm%2FanAM7Ob%2BC%2FgLmUOzPzJ1YUN1t7SLz%2FqqG%2Fopvp6Dueo8NNX6MotnBY8TZ82GYcZ%2F2iK7FrO3TQ2IhJJOa7Qx2fwwEaGH7mTCI6z4A6KdeyooIoKyagpwT6bWOEWWh1HxJNebRJo3sTgzs%2FMzSLMQ970xdls3tl%2FgNk%2B0DUrxECdz2TDZDbZLjLvGZ3sJgKXkL7NxeSFZNsXoKZ%2BFAnHp6fKyuBxPHkOOkZDaZItvwNrNmJxKSQYkIKTaS%2B8rjLbYV4rVQbySmGAriuAheuzMg7y8Qbtvfl1BvalekKxcaTZ%2BErl5IsHTdsowjAvnEkW4614%2Fhs8FfXlcpe8pHu0o0JbGk0r2V%2FwAY9uDT%2Fbcn36EaIYPv90Tna%2BpDOFFPEnbiitg%2BA1%2Fvajkn3zIQWvvG6aiYppSZdOAPEwYsRXYErBpstTzZXnggt2QqDQmE8dK%2B61uJxCr2qyChEgeBkh3%2FYY6Ij%2BlM5EWeTfMeeryn4c%2BVWJtrP2C4jlRdjE9tpLuCTAEhh15z5Pdns7bDsgeM%2FKeWHoNSIA%2BLO1QtdOq0BmnTuRGDsluL9MifaY8X86LIECAoPR89%2BlBXwen6%2BkWOBx0uJk8YrwTCw5UeiIoOBedYliMVALMMrRicoGOqUB8pHDb6wY8uDHWbQ2pa8KEVjcsvybmttFjTt8o7nlAgbTRe6teUnBu5rEBN%2BKBMVZQNlOhMzjQsfY7SbBBGR2UtjvZw7DWaQwEaTlmLOVN50fkl4NOef5nSrqxlwa5nTpG1%2BaOqNqT2JJXjuZ69uLgFv%2Bjfz32P81F9%2FdfVTKjxOwJuUrqQxnpCGcEksyFYUrcW7lxvuNWIY2eWoodENdvwsNByr3&X-Amz-Signature=97b244500d00f7502f575df8c545d0081b9f83f827d1ef28414d7a21ef84280f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4LSEYI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq43J%2FtWc%2B8EG%2B6zBFKx8lKoKx4ybhQWaHiu1fL54bQQIgfv%2FPk9Bz2Meu7Zokri5FsZ7sxqpujDi%2Fwr%2FWMBrbKtYq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDD2zOR8D2Szo2S1HGyrcA7tb2Cgm%2FanAM7Ob%2BC%2FgLmUOzPzJ1YUN1t7SLz%2FqqG%2Fopvp6Dueo8NNX6MotnBY8TZ82GYcZ%2F2iK7FrO3TQ2IhJJOa7Qx2fwwEaGH7mTCI6z4A6KdeyooIoKyagpwT6bWOEWWh1HxJNebRJo3sTgzs%2FMzSLMQ970xdls3tl%2FgNk%2B0DUrxECdz2TDZDbZLjLvGZ3sJgKXkL7NxeSFZNsXoKZ%2BFAnHp6fKyuBxPHkOOkZDaZItvwNrNmJxKSQYkIKTaS%2B8rjLbYV4rVQbySmGAriuAheuzMg7y8Qbtvfl1BvalekKxcaTZ%2BErl5IsHTdsowjAvnEkW4614%2Fhs8FfXlcpe8pHu0o0JbGk0r2V%2FwAY9uDT%2Fbcn36EaIYPv90Tna%2BpDOFFPEnbiitg%2BA1%2Fvajkn3zIQWvvG6aiYppSZdOAPEwYsRXYErBpstTzZXnggt2QqDQmE8dK%2B61uJxCr2qyChEgeBkh3%2FYY6Ij%2BlM5EWeTfMeeryn4c%2BVWJtrP2C4jlRdjE9tpLuCTAEhh15z5Pdns7bDsgeM%2FKeWHoNSIA%2BLO1QtdOq0BmnTuRGDsluL9MifaY8X86LIECAoPR89%2BlBXwen6%2BkWOBx0uJk8YrwTCw5UeiIoOBedYliMVALMMrRicoGOqUB8pHDb6wY8uDHWbQ2pa8KEVjcsvybmttFjTt8o7nlAgbTRe6teUnBu5rEBN%2BKBMVZQNlOhMzjQsfY7SbBBGR2UtjvZw7DWaQwEaTlmLOVN50fkl4NOef5nSrqxlwa5nTpG1%2BaOqNqT2JJXjuZ69uLgFv%2Bjfz32P81F9%2FdfVTKjxOwJuUrqQxnpCGcEksyFYUrcW7lxvuNWIY2eWoodENdvwsNByr3&X-Amz-Signature=ad0f56942616d6432045785234070d98f04e8a7903f53f44ef958f74d26a6fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

