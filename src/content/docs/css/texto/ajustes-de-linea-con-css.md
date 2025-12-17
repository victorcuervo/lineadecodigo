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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRUP6DY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MeCjZBpTy5OSGRZ3jO610lB9nhMn68PjiKsn8pBrBAIhAKE3KewZsk7ApdwCDZdV1%2Bsn6jjhIbuMlqSj%2FrqknsPzKv8DCHcQABoMNjM3NDIzMTgzODA1Igyh27LcF8CTD1Dmkysq3APylw4mbkZAU0NsIeJg4bpksHCGxg26Uz3HrlkzFIrxJJifafoDP7oUDa6PvV0cu6fWUnNWYNtAu8Hjyvzv9%2Bgrv%2FAHZLvWoVYszHfHPIrKBX%2FYu5gXFcUz6TkPl6k4%2BntK2iG6%2Fqc92vc3Kyk%2BUmlKw%2FP4DlP5O3KbTF3N2kHuhDu6dQFOc3TPxhfK8L7XhOKU2uf%2F%2Fb%2FJJEQ9pmJQIm7jyXURM5J8lzrg6ifp%2Fa995BJ2dmHol9cw4ZBqLkeWdHBpwEwBMzuYemFEMcZt9sk%2F%2Fo72rCZhct0IGMD3RZKB%2BvXz6J%2B5NFzcAGvz0vevM1ZIyxAdNYaQDri2SDdpqx7Lq3TmvqeWqiuAZkodkdttPTowKPEUtp3Jc%2Bgw1nlsJV4d0X859Lc8LzNN4ffz0oalvy2BM0jyfufMNbfUFApnOaU6T0igjk595OGGgAU%2FNQgBlKEBj%2Fuu%2FwW0i7CVvtdOZm2bC%2BoT0CU97%2BTht80N%2BMMZBmEPDkbEtj16w8IO7LyK%2BWTBr0%2FCF2obh7So%2FZ2AwdwYPxCxzi4uRhOXAyQhGRpQvBnyzw4WH%2BPyRAXL0W1mi%2FTxpeaLF58xLEO2RSUBQjaTyO1B8U2GDZ4C%2FTZfqAeqTwEExoqGc7G%2FijDOgonKBjqkAaLT4dhBWqGZoWzrSj0nRsVfFWhbe64i3B%2BZKlLtdk%2FX1WIT5fNpoep%2BJJsFDQkeLrKKlVqTNn08fgZU0mfxrHjR8BG0b0TpWbM7pz0S%2F1u0zvb0TUq3BqTtwchzhpGkzT7JNrs2ktEVw67t0kAOy9ACa6q3s2Lacf6yhpp2%2FfDnzTd0vnexhmI1XkfC%2Bw7r3nswi8VvDAWpnSsyPO9A781N9ZQ7&X-Amz-Signature=5dc6d50b98c4c83f530a94c758e17b18657ee3356ae4de491728b779fff2322f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRUP6DY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MeCjZBpTy5OSGRZ3jO610lB9nhMn68PjiKsn8pBrBAIhAKE3KewZsk7ApdwCDZdV1%2Bsn6jjhIbuMlqSj%2FrqknsPzKv8DCHcQABoMNjM3NDIzMTgzODA1Igyh27LcF8CTD1Dmkysq3APylw4mbkZAU0NsIeJg4bpksHCGxg26Uz3HrlkzFIrxJJifafoDP7oUDa6PvV0cu6fWUnNWYNtAu8Hjyvzv9%2Bgrv%2FAHZLvWoVYszHfHPIrKBX%2FYu5gXFcUz6TkPl6k4%2BntK2iG6%2Fqc92vc3Kyk%2BUmlKw%2FP4DlP5O3KbTF3N2kHuhDu6dQFOc3TPxhfK8L7XhOKU2uf%2F%2Fb%2FJJEQ9pmJQIm7jyXURM5J8lzrg6ifp%2Fa995BJ2dmHol9cw4ZBqLkeWdHBpwEwBMzuYemFEMcZt9sk%2F%2Fo72rCZhct0IGMD3RZKB%2BvXz6J%2B5NFzcAGvz0vevM1ZIyxAdNYaQDri2SDdpqx7Lq3TmvqeWqiuAZkodkdttPTowKPEUtp3Jc%2Bgw1nlsJV4d0X859Lc8LzNN4ffz0oalvy2BM0jyfufMNbfUFApnOaU6T0igjk595OGGgAU%2FNQgBlKEBj%2Fuu%2FwW0i7CVvtdOZm2bC%2BoT0CU97%2BTht80N%2BMMZBmEPDkbEtj16w8IO7LyK%2BWTBr0%2FCF2obh7So%2FZ2AwdwYPxCxzi4uRhOXAyQhGRpQvBnyzw4WH%2BPyRAXL0W1mi%2FTxpeaLF58xLEO2RSUBQjaTyO1B8U2GDZ4C%2FTZfqAeqTwEExoqGc7G%2FijDOgonKBjqkAaLT4dhBWqGZoWzrSj0nRsVfFWhbe64i3B%2BZKlLtdk%2FX1WIT5fNpoep%2BJJsFDQkeLrKKlVqTNn08fgZU0mfxrHjR8BG0b0TpWbM7pz0S%2F1u0zvb0TUq3BqTtwchzhpGkzT7JNrs2ktEVw67t0kAOy9ACa6q3s2Lacf6yhpp2%2FfDnzTd0vnexhmI1XkfC%2Bw7r3nswi8VvDAWpnSsyPO9A781N9ZQ7&X-Amz-Signature=85263bbd5117968f5443e71d83f637e1f52968fafbd28d03ee7e5df639b6baa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

