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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWJM3PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8AW%2BiJogQAKGwRnQsfhZ8sQR5XgjjYL97uN7q3K1%2F7AiEA87BSYb3IE%2FqQB39FSohqE7wsK2anPnPoCOt5KSyCPjUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGQcp6ngv0r7yU9MlCrcA%2FL7%2BnXh2IFs8rQsgqvHSXGh9GBWAh1DXje%2Fju1BQdK97cFuGAA6ASaKaaRQhVf%2FTz%2B2ET3AHuSM8j00ZaomBodoBAVXrpyX83KBGTuEa1WZreZcADX2Q5YmHSZ%2Bum33sZm%2BE0wra3yFMlL6S%2BTd6L2LyE3qXEv7qCqeiM%2B3Tk51hFfeZHfJoPwMYO%2F8oVBXHPzLZV52yVZMpwJNb97MzsSZvml4GWEpnRiNIbvFbO3IOKqq9zMBuS3q4KkiN7tAEVJfSLX3Glz%2BKi60VaIxRa9PcGpymuY3zT9LW2QoeCU1vLBsbknYRcQmXCN3soO%2B55F5dtA8GI12LqMQa5HNc3Rw7lTaSmbA%2BjB4bQaQK%2BucpVxKaon9eaLaS5QCBb1yJV8ZXUw28i9q5ePsAKZ4KLR3odMsRiA9avo8vFE3xed0w6yvkuZInJor4C%2FVI63LGCmOMmRN92JsQGuS6dfmpT2bZLd1XYnpBlB%2FYFhAHnPPmEbZnYeb7FudzKJSmp6mWm%2FN4wijzvjpBsLeVWMQVakh2io7LHsNOpigtK88B38YVetn7Ck8XFNhX8KcvwU%2B%2FXBiP%2F79v6Ou09y4IlLMXPTCfQqiUm5gJyALAAWRicC0yIgOpxbMIrR4a%2BV%2FMOvwicoGOqUBgEX3YDYDjwVKWoV5qgu6KtldH0idHPw8mnOS0tw6FkAP05oJytg3kSTOrGIe6LuugZdKJtilD50Cr%2BhimpAb%2FMidTkmw6Kq5mlqPCHkXcvsaVFjCdAXFjyc9HcJ%2FVqmDcMqCAQDmybni2I5zOJWItPYVi9XR0BmCsHw2Yvv2%2B4BRXDVmcpbFxMyq8uLTDKvnGmoZWDJWuLS8Rg%2FUHxTs43RsTXLq&X-Amz-Signature=c25c35a8e1a0ae3f429d2f1ad47c756f85658f388567f4072f44988574d6c69e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNWJM3PB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8AW%2BiJogQAKGwRnQsfhZ8sQR5XgjjYL97uN7q3K1%2F7AiEA87BSYb3IE%2FqQB39FSohqE7wsK2anPnPoCOt5KSyCPjUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGQcp6ngv0r7yU9MlCrcA%2FL7%2BnXh2IFs8rQsgqvHSXGh9GBWAh1DXje%2Fju1BQdK97cFuGAA6ASaKaaRQhVf%2FTz%2B2ET3AHuSM8j00ZaomBodoBAVXrpyX83KBGTuEa1WZreZcADX2Q5YmHSZ%2Bum33sZm%2BE0wra3yFMlL6S%2BTd6L2LyE3qXEv7qCqeiM%2B3Tk51hFfeZHfJoPwMYO%2F8oVBXHPzLZV52yVZMpwJNb97MzsSZvml4GWEpnRiNIbvFbO3IOKqq9zMBuS3q4KkiN7tAEVJfSLX3Glz%2BKi60VaIxRa9PcGpymuY3zT9LW2QoeCU1vLBsbknYRcQmXCN3soO%2B55F5dtA8GI12LqMQa5HNc3Rw7lTaSmbA%2BjB4bQaQK%2BucpVxKaon9eaLaS5QCBb1yJV8ZXUw28i9q5ePsAKZ4KLR3odMsRiA9avo8vFE3xed0w6yvkuZInJor4C%2FVI63LGCmOMmRN92JsQGuS6dfmpT2bZLd1XYnpBlB%2FYFhAHnPPmEbZnYeb7FudzKJSmp6mWm%2FN4wijzvjpBsLeVWMQVakh2io7LHsNOpigtK88B38YVetn7Ck8XFNhX8KcvwU%2B%2FXBiP%2F79v6Ou09y4IlLMXPTCfQqiUm5gJyALAAWRicC0yIgOpxbMIrR4a%2BV%2FMOvwicoGOqUBgEX3YDYDjwVKWoV5qgu6KtldH0idHPw8mnOS0tw6FkAP05oJytg3kSTOrGIe6LuugZdKJtilD50Cr%2BhimpAb%2FMidTkmw6Kq5mlqPCHkXcvsaVFjCdAXFjyc9HcJ%2FVqmDcMqCAQDmybni2I5zOJWItPYVi9XR0BmCsHw2Yvv2%2B4BRXDVmcpbFxMyq8uLTDKvnGmoZWDJWuLS8Rg%2FUHxTs43RsTXLq&X-Amz-Signature=f114690e12bd303632b3f25e6aa9e651874639cc6999b3f67134887dd51abfbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

