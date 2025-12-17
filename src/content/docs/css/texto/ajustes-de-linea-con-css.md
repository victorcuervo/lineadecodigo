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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUFIKKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwb%2BV0f1CDFEzY6YOPlfXRdKwDuTkyi%2BjbSpIqG%2BlRvgIgTBK1p2QeGy5gDrCe0LxyCrbvEZ%2Fz4kNQvvom23dWAGQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNMslOiR4i0ZFnDaircAwiXjAH4Who%2FBhkqbAuzKmWi3vaWQAopiRyPUJhdQopRD9Nco8qBjbqjmWScutPlejPoaRAQI7UrxBR1q4QkMVWwD4qaZLELBO4acrbixgvg%2F2Bbi62bmeR45VsIp6diwgnC6twIjIYZB7kQE0QTJjKeiuS1odaPvxQBno2riAJt%2F7Zhv7oZyLMApaQRb7kWl%2FSlLjeLbPaPMwLOw%2BBRzNFCi5lWm8jMavIe%2Fpi8YROeDIgR3hvdmrQltdY2ztKS0st45SuMtEYwIQv8Tm%2FWaNGRQSWy3Qqd316GePRekohhjHOhLiLoWEi4LVgrz%2BRmT4DPyGyjYnkIY7iLg%2Fsb5HCPClsRgPyr2%2FC6sSUi1UJZumKQ1OYPwJd6jiCpZ7Vj6PRSD00WibVEpwB6hoSNqv630zymgg%2FDPhc9bfrJS15zy4zJ7FnRse6f%2FreisEw%2BjNR4w1AsqOazp9qbQgRx8XP3PoHzJfUM4gniiMTTv%2BuX%2BV9CVnwodZsm35DLH6WNIp2dlEG305XIUrwsJjrm%2BH5ejH%2FgtX1%2FpW6nAmfccu4XzNQxNM7gAhm8D0iGOLVZLLpsMCAqLzEiD6Fns8GUdNryQXQxjrMuVZKBGdWBxFFJdshsCniwiGyZS%2Be7MLegi8oGOqUBzMrqQG6AQh%2FVoMQrp6QnuNiTwYJB9vieyiJYKPXnVp1ltb9NlDf1VbL2gzfDQ3sNc%2B%2B%2FEiJQuSykXL%2FoK3q0tGYIJS67ZYn7HxIHhtsl8T8B6JeL1cA8Lz2QzT4jdg4jFL%2Fltz8GBWVXgwWKK2R8k3%2Bd%2FzZuZPup3c5MUhycvY%2B4lN97l%2FJyZ8SLU2pgPRpXNjM17wM%2BPVsGfh1S3V0d8M0udzW7&X-Amz-Signature=411af1e5460c5121358e0f0345bfc0b65e05dec77faa12c6ef4ad703ef5918c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKUFIKKF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwb%2BV0f1CDFEzY6YOPlfXRdKwDuTkyi%2BjbSpIqG%2BlRvgIgTBK1p2QeGy5gDrCe0LxyCrbvEZ%2Fz4kNQvvom23dWAGQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNMslOiR4i0ZFnDaircAwiXjAH4Who%2FBhkqbAuzKmWi3vaWQAopiRyPUJhdQopRD9Nco8qBjbqjmWScutPlejPoaRAQI7UrxBR1q4QkMVWwD4qaZLELBO4acrbixgvg%2F2Bbi62bmeR45VsIp6diwgnC6twIjIYZB7kQE0QTJjKeiuS1odaPvxQBno2riAJt%2F7Zhv7oZyLMApaQRb7kWl%2FSlLjeLbPaPMwLOw%2BBRzNFCi5lWm8jMavIe%2Fpi8YROeDIgR3hvdmrQltdY2ztKS0st45SuMtEYwIQv8Tm%2FWaNGRQSWy3Qqd316GePRekohhjHOhLiLoWEi4LVgrz%2BRmT4DPyGyjYnkIY7iLg%2Fsb5HCPClsRgPyr2%2FC6sSUi1UJZumKQ1OYPwJd6jiCpZ7Vj6PRSD00WibVEpwB6hoSNqv630zymgg%2FDPhc9bfrJS15zy4zJ7FnRse6f%2FreisEw%2BjNR4w1AsqOazp9qbQgRx8XP3PoHzJfUM4gniiMTTv%2BuX%2BV9CVnwodZsm35DLH6WNIp2dlEG305XIUrwsJjrm%2BH5ejH%2FgtX1%2FpW6nAmfccu4XzNQxNM7gAhm8D0iGOLVZLLpsMCAqLzEiD6Fns8GUdNryQXQxjrMuVZKBGdWBxFFJdshsCniwiGyZS%2Be7MLegi8oGOqUBzMrqQG6AQh%2FVoMQrp6QnuNiTwYJB9vieyiJYKPXnVp1ltb9NlDf1VbL2gzfDQ3sNc%2B%2B%2FEiJQuSykXL%2FoK3q0tGYIJS67ZYn7HxIHhtsl8T8B6JeL1cA8Lz2QzT4jdg4jFL%2Fltz8GBWVXgwWKK2R8k3%2Bd%2FzZuZPup3c5MUhycvY%2B4lN97l%2FJyZ8SLU2pgPRpXNjM17wM%2BPVsGfh1S3V0d8M0udzW7&X-Amz-Signature=eb9fee8aa0684b28b3620ffe1ab73eebb2b2fc3e9ad39eb94f28397607a60333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

