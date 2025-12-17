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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXX3ZNCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduZ%2BqnkYLLEUSNJVIwmTkEX5fc0Vx4sBmZ9%2B8SE59wwIgJT8fbFfYfLmQHSVBnv76LbfphM%2BZlDTXMugQcbB7MZEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqKZQTVKjfAGj7ARCrcA1sKN1EMqyY3UMubha9Ik5A4k9QDvFd%2FYAxoZdq%2F7gq5rUspuP1FkkA0orbyQ5ZU0Jvg5FnoEt4nMvn1WX23C4X7ef6Tc7Wma%2BqLG1u4ldHmyfvgtUwMZyELf%2FIs1l3eq%2FV%2FaQqjrRtBE7y6zADrXADISMb6sHf1AyKa4ELLC9rSzVw%2F1%2BDvobuFlQXcbLsP2A7vHg09oCSb6srjzQ2kKLsJud6XvgVVLRS%2F6PczvyDRId2aOUcQmB0BlfZFP8DKJrK4d1IeoxI36vcT1cmFI0z%2BdaUwjTNb%2FmtEscp7E%2Brrk3Kq5AYpg6AzPWb9VMj5Vap7JAnabEceRTCE1z5%2FYVLDKl0OmqFL59ZBa%2B777IuwgJ9cMA3I1A8r%2BqkDVyMEvhcaNbs9P4UQxnUQma7epylEpJM4QKm0%2BGMKF4rZU0nq0bZg%2BzxJzw1oK6MyCTIxnA86Se50bgFwOe%2FGjLuVhhq60MaRy%2FfDGynU0oS85U8Ck4nBFivGpXNN2Diwyrw1laBSekja7JkQ7OvFS9rOS%2BDkhuLSkHds74GaMXn%2BjH1ccjtCuGOnwmIcNQuE94VjHLMqIuRoCG60zkjjS33lqkFjsl0u5VyWg4Wfb5ZeGK7TC1AaxD85UFg4f08uMKqujMoGOqUBX%2Fo6NYCoDHkYynF3VqrpuFwy5R2D%2FxBwxqmfOaDdRrsOU8Ka6c6th%2FpXt2KtptaAJgjX2Da5ZLk8t11K%2FH9vakFdIwXoF1ZDxjdX5rF%2BDG7I%2FAixePaLpBrm27dglZzOQFl9OgpB5c9wsdnXi6zCWUoqadMV9RMkkMMpK01JHFtqrMK%2BY529yqje%2FHYiWjjWWsnS0ze5GMz0xq7pNb6S8pTRu9E3&X-Amz-Signature=17f09f0cc2586eb0aeda0f00f79c0c1327988f8d9fafac7df94715c4eb5bbaec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXX3ZNCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDduZ%2BqnkYLLEUSNJVIwmTkEX5fc0Vx4sBmZ9%2B8SE59wwIgJT8fbFfYfLmQHSVBnv76LbfphM%2BZlDTXMugQcbB7MZEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqKZQTVKjfAGj7ARCrcA1sKN1EMqyY3UMubha9Ik5A4k9QDvFd%2FYAxoZdq%2F7gq5rUspuP1FkkA0orbyQ5ZU0Jvg5FnoEt4nMvn1WX23C4X7ef6Tc7Wma%2BqLG1u4ldHmyfvgtUwMZyELf%2FIs1l3eq%2FV%2FaQqjrRtBE7y6zADrXADISMb6sHf1AyKa4ELLC9rSzVw%2F1%2BDvobuFlQXcbLsP2A7vHg09oCSb6srjzQ2kKLsJud6XvgVVLRS%2F6PczvyDRId2aOUcQmB0BlfZFP8DKJrK4d1IeoxI36vcT1cmFI0z%2BdaUwjTNb%2FmtEscp7E%2Brrk3Kq5AYpg6AzPWb9VMj5Vap7JAnabEceRTCE1z5%2FYVLDKl0OmqFL59ZBa%2B777IuwgJ9cMA3I1A8r%2BqkDVyMEvhcaNbs9P4UQxnUQma7epylEpJM4QKm0%2BGMKF4rZU0nq0bZg%2BzxJzw1oK6MyCTIxnA86Se50bgFwOe%2FGjLuVhhq60MaRy%2FfDGynU0oS85U8Ck4nBFivGpXNN2Diwyrw1laBSekja7JkQ7OvFS9rOS%2BDkhuLSkHds74GaMXn%2BjH1ccjtCuGOnwmIcNQuE94VjHLMqIuRoCG60zkjjS33lqkFjsl0u5VyWg4Wfb5ZeGK7TC1AaxD85UFg4f08uMKqujMoGOqUBX%2Fo6NYCoDHkYynF3VqrpuFwy5R2D%2FxBwxqmfOaDdRrsOU8Ka6c6th%2FpXt2KtptaAJgjX2Da5ZLk8t11K%2FH9vakFdIwXoF1ZDxjdX5rF%2BDG7I%2FAixePaLpBrm27dglZzOQFl9OgpB5c9wsdnXi6zCWUoqadMV9RMkkMMpK01JHFtqrMK%2BY529yqje%2FHYiWjjWWsnS0ze5GMz0xq7pNb6S8pTRu9E3&X-Amz-Signature=5f2af4c63b52699f54882e29ea69c0757522e97f2076605b36acccd1b4c48db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

