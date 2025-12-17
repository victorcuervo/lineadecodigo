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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6GFUTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgbjMmhdcX%2F13Asyj8k70zlwYERd50ffoly10UDhdmUAIgY4AjQHaTh6FwRauCky2jEHtlWCpB%2FDdDeyqcW4mtDZMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJQUZcmdQNLapeRufyrcA0as3xmKxTzpWizdZ5PznkQCcCqGgJqx873SJYMswET6QtVRkYI3vaIAR32dS%2BE0H0GtleEug%2FOzDF3h%2ByNHMK3bk6pKLVP8jOWG1G%2BChc0QQ0fXRSqK%2BFjLzJr9bFESo1uFcQQbxk%2Fn%2Brisn6RZwN2UYItWR8DBg8pZ%2FH6QrRdKgaYcldDkkSyP5BBdtGo0kZNxHKqPanV0RhnPPmcxAT5E1bMza8TuRfa1MbEPPdKmtvbRsm6VgLbElFdMMW0zjzjIeD8yZMX3ex9cjcu6MZUNSsH8jC%2BEhWbWnXhSkc8MvsRDndLF3E6FtIGgErO4lL%2F7TsirkegHQxjEyojZdxdTo2SIqjpIohiDcsDKAQGpTHxAXAn5xlBmlsycT7TXnVyBFTpYafnyImP1QAgs6FTB0OwL7iTusQRR%2BqDpQhmI%2BwLRgmT8VqhKr0Ia51IFOwRQu39NkZbsRrERRZSllZrtqj142sXOfz1o3%2Br9AlxwCyhKimF6UE4ZSimx6nNcHiumGT3YQNNNAHly4Wfeddo%2FKlFv%2FSi2cbkHlvrRF%2BjU0yeOBhXMXZGKzUVXhfB5qEzh5U1AtyKRfH%2Fp0XGZntEn4I5lgVMiO%2FmpAiDugBq87aWv%2F7lqaD5d7mbDMKTvicoGOqUBGuqZgcLPF9HRbmpxqBGPk3%2BpqxwMl16SYdxVuYbxW%2Bmzs%2FZXp8N3gLyjuSnrifgxz8YiViovw22yBZvOex7PWBajuZ6RL2%2BhJx8ySHtN3iSB9zieCw6YVZyRdG6sx5iCOy2m2i7kbWG39F3yaUpT4LxDlcd%2BRs1T%2BLzDv6cYUBIfKgL0LYHXxMRE56nUMHqD78etqtv4bsyOnjwhV5abnGI5saXV&X-Amz-Signature=12706a674b8db1a922b8a2a59fa36e404893b9e407f854ba6662db8796465449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O6GFUTB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgbjMmhdcX%2F13Asyj8k70zlwYERd50ffoly10UDhdmUAIgY4AjQHaTh6FwRauCky2jEHtlWCpB%2FDdDeyqcW4mtDZMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDJQUZcmdQNLapeRufyrcA0as3xmKxTzpWizdZ5PznkQCcCqGgJqx873SJYMswET6QtVRkYI3vaIAR32dS%2BE0H0GtleEug%2FOzDF3h%2ByNHMK3bk6pKLVP8jOWG1G%2BChc0QQ0fXRSqK%2BFjLzJr9bFESo1uFcQQbxk%2Fn%2Brisn6RZwN2UYItWR8DBg8pZ%2FH6QrRdKgaYcldDkkSyP5BBdtGo0kZNxHKqPanV0RhnPPmcxAT5E1bMza8TuRfa1MbEPPdKmtvbRsm6VgLbElFdMMW0zjzjIeD8yZMX3ex9cjcu6MZUNSsH8jC%2BEhWbWnXhSkc8MvsRDndLF3E6FtIGgErO4lL%2F7TsirkegHQxjEyojZdxdTo2SIqjpIohiDcsDKAQGpTHxAXAn5xlBmlsycT7TXnVyBFTpYafnyImP1QAgs6FTB0OwL7iTusQRR%2BqDpQhmI%2BwLRgmT8VqhKr0Ia51IFOwRQu39NkZbsRrERRZSllZrtqj142sXOfz1o3%2Br9AlxwCyhKimF6UE4ZSimx6nNcHiumGT3YQNNNAHly4Wfeddo%2FKlFv%2FSi2cbkHlvrRF%2BjU0yeOBhXMXZGKzUVXhfB5qEzh5U1AtyKRfH%2Fp0XGZntEn4I5lgVMiO%2FmpAiDugBq87aWv%2F7lqaD5d7mbDMKTvicoGOqUBGuqZgcLPF9HRbmpxqBGPk3%2BpqxwMl16SYdxVuYbxW%2Bmzs%2FZXp8N3gLyjuSnrifgxz8YiViovw22yBZvOex7PWBajuZ6RL2%2BhJx8ySHtN3iSB9zieCw6YVZyRdG6sx5iCOy2m2i7kbWG39F3yaUpT4LxDlcd%2BRs1T%2BLzDv6cYUBIfKgL0LYHXxMRE56nUMHqD78etqtv4bsyOnjwhV5abnGI5saXV&X-Amz-Signature=cb32bb2fe081953f0cbb677871f8322cbbbf7ff927e96273028b2d0f1866db97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

