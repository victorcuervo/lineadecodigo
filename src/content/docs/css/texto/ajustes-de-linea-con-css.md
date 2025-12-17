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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BDZRFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BjswGwRO9x1o6OUnOrK43Fdv5H%2FY0tErr97G%2F70OoAIhAPxXeCY26%2FZDhRcFR5qjfhtcEcJex4ZLgZhsbRiDqWCcKv8DCHsQABoMNjM3NDIzMTgzODA1IgxHZ2MWhJ88vMH9Wugq3AOnZ1zr%2FJZg7kRhJS%2BEa%2BlJJwj0ZFgPPjRFfOs3JLLo0oql5LWczP1LQCMFL%2Bo1pRorWS%2FTy2f7Ltevh5oMpqrfeoOVsiAfODTv3FwKqDzCD0QZZmKpZqHMxRrYgAE2pbq7of7Yi3nTozjJ1sfH502%2BeodUK6FBv%2FCZJ9lXb%2FE%2BNRuO%2BOvvNWwmhlZJvH49OON326mDnDSSMjA4YT83qSvB1%2FAw5cXX%2FP%2FqryzE%2FyRNwPo%2FqZwhOOBGXJ%2FGb1e5WI%2FWcO6G5qM7fph4urxQ3GUsBTI5q9dQVt3JhHxZny4GAXJxpg3sAopO1OJ%2BHzOrCNRYZYjxK6uyRjasR58zaDvcT%2FzsPSycXC54n1CX6n3bi%2BTUb%2F54uX0RxLigyDt7CENhtiy%2B7yzKXfIGdMktbwibdNishLRzeMaIbpcXe%2FEi4WQsypAQhOHHPXgdiaT6EeYzhTkdUqYbCJJMzQJfsqq5lZYzh1br3tKrT7qAvgHpmEH5XzbkSpMlE2lHW0cRf%2Bbq4x4OKHXbAQ86aJgETpEJLw0PHgg9FZ6pKITa94iBcvnEbyjhrjvpS%2FwjWIKZEPofXMvAFh50KViScU2null6I22C0cDGNeFM5ZfyWIRmXmlZS%2Fcd26NU5rh78zD68InKBjqkAbpJh04hSJ%2FNOiNJPOcI0QARoTYlp93tWcf3XwQnFPu%2FvyNhdnun3dpyxXJmXqm1JRde1HTu3TUvzaMgFgeCipDdoRdjj3UrpqbzNgb%2FBm%2F896eGKSI1sjq5Ud10aDNcevkvVc5VHXww0R76U17%2FXGC0pQuFdLJMYThbmjMsMN3WFpLZygv%2Bsm7yuHV9HthpQjTb7xsExdgx9QdUup6dx38iMMaI&X-Amz-Signature=95bf85490c0f9f54233ee9eb5a571dc74bc1222bfd189297ed8e007e0530847a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5BDZRFV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2BjswGwRO9x1o6OUnOrK43Fdv5H%2FY0tErr97G%2F70OoAIhAPxXeCY26%2FZDhRcFR5qjfhtcEcJex4ZLgZhsbRiDqWCcKv8DCHsQABoMNjM3NDIzMTgzODA1IgxHZ2MWhJ88vMH9Wugq3AOnZ1zr%2FJZg7kRhJS%2BEa%2BlJJwj0ZFgPPjRFfOs3JLLo0oql5LWczP1LQCMFL%2Bo1pRorWS%2FTy2f7Ltevh5oMpqrfeoOVsiAfODTv3FwKqDzCD0QZZmKpZqHMxRrYgAE2pbq7of7Yi3nTozjJ1sfH502%2BeodUK6FBv%2FCZJ9lXb%2FE%2BNRuO%2BOvvNWwmhlZJvH49OON326mDnDSSMjA4YT83qSvB1%2FAw5cXX%2FP%2FqryzE%2FyRNwPo%2FqZwhOOBGXJ%2FGb1e5WI%2FWcO6G5qM7fph4urxQ3GUsBTI5q9dQVt3JhHxZny4GAXJxpg3sAopO1OJ%2BHzOrCNRYZYjxK6uyRjasR58zaDvcT%2FzsPSycXC54n1CX6n3bi%2BTUb%2F54uX0RxLigyDt7CENhtiy%2B7yzKXfIGdMktbwibdNishLRzeMaIbpcXe%2FEi4WQsypAQhOHHPXgdiaT6EeYzhTkdUqYbCJJMzQJfsqq5lZYzh1br3tKrT7qAvgHpmEH5XzbkSpMlE2lHW0cRf%2Bbq4x4OKHXbAQ86aJgETpEJLw0PHgg9FZ6pKITa94iBcvnEbyjhrjvpS%2FwjWIKZEPofXMvAFh50KViScU2null6I22C0cDGNeFM5ZfyWIRmXmlZS%2Fcd26NU5rh78zD68InKBjqkAbpJh04hSJ%2FNOiNJPOcI0QARoTYlp93tWcf3XwQnFPu%2FvyNhdnun3dpyxXJmXqm1JRde1HTu3TUvzaMgFgeCipDdoRdjj3UrpqbzNgb%2FBm%2F896eGKSI1sjq5Ud10aDNcevkvVc5VHXww0R76U17%2FXGC0pQuFdLJMYThbmjMsMN3WFpLZygv%2Bsm7yuHV9HthpQjTb7xsExdgx9QdUup6dx38iMMaI&X-Amz-Signature=e575469bc0ca7e69a85c463819447becc25a935cc6c280fa05e43669702b2dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

