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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CE55AS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2FTfb9CXEiuzWJYhOJxuighVkZKJpb%2BsxzY2MbwLaxAiEA4ju4%2FHM2wUvxdlFT4Bt2YKc9LolLmlN%2Ff5PkQtANABAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHN3W95HR0Q5VaxaHCrcA8UdToJ1ZOsTb8p1ehdRK6e%2FKXwotuxh41qcGy%2F2L0nZjcfDsRMUeyV12D4B23Gvma6aBs3FlH%2FVhP8CqBoNbBnoYT7C%2FFiuqUJCohMqblT6dmz3i1Rtms0U%2FDNN9QvZbomVd7L5e%2BMYxYsxRZXQt3CBtrkcRIcBvnruz%2Fm3pW%2F%2FybuOCPH55YV3twG4J1whapXAPny929HX65%2B2wAjdqP3R2LEkFGKaHfU0SuAUng8%2F1sEHIg0cxK0kvW8Q4HbXO188ZGgd8PQv0JRzPNRek2tpp%2F8ylPphBAGYu6UpZWQOGou0bNy6W6Cdk4lVdOlhYGHiEXTifZoOMi5o83Zt78HTdfhax6gMI3NceqdNyO1I9QxrxZawIj%2BRhgkiaSdWgDUPS9PFl8QFE0qeJGWhcz3O5VCTWNCVzM5LP9vJv2eNSW2T7vUnqNY0%2BGr4bPzsA%2FnLUw4poowKPxXqVM93ZWfrScIhhNjcAi8xmcX9%2BgLnqeGbId9YEmiOq5M4iW9fm%2B55JNYt%2FSjaiw0tp%2BtGmebkhxrOHlVKB1S5T0RIs6CsVAMPhv5oLTrYss2x5GsCOkq0Vsf3dqEO349Vg3yuPrCljU8lRqNiQaD%2BlO1A7hohB9qLS3J2%2BOBTc5PPMNadicoGOqUBz3YCFHGlQ3qiBdkcwbhT%2B%2FeLK%2BOIwkTZgTq3AceIF47QuffJz2OLVaXDiphCqA8QQTw312kPk%2F6WrR6TMDYFsjVINbtEplcfNVK7w1VMyEF4eKKFoUF4k3%2BiNueHMFLD8SpS2GkHJx4C8wmW4bY1ATyCMtZDmi1mASfbb1k%2FW0%2FiHTPse0BOcwA8XTI0ytVVsJ9DD6XWM1nprdMbldoZjmhOA9vx&X-Amz-Signature=20129ef8a8bd526bdf4bac8ab083591dbac1f0cb9ae74b9f8679617b16a66271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CE55AS3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn%2FTfb9CXEiuzWJYhOJxuighVkZKJpb%2BsxzY2MbwLaxAiEA4ju4%2FHM2wUvxdlFT4Bt2YKc9LolLmlN%2Ff5PkQtANABAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHN3W95HR0Q5VaxaHCrcA8UdToJ1ZOsTb8p1ehdRK6e%2FKXwotuxh41qcGy%2F2L0nZjcfDsRMUeyV12D4B23Gvma6aBs3FlH%2FVhP8CqBoNbBnoYT7C%2FFiuqUJCohMqblT6dmz3i1Rtms0U%2FDNN9QvZbomVd7L5e%2BMYxYsxRZXQt3CBtrkcRIcBvnruz%2Fm3pW%2F%2FybuOCPH55YV3twG4J1whapXAPny929HX65%2B2wAjdqP3R2LEkFGKaHfU0SuAUng8%2F1sEHIg0cxK0kvW8Q4HbXO188ZGgd8PQv0JRzPNRek2tpp%2F8ylPphBAGYu6UpZWQOGou0bNy6W6Cdk4lVdOlhYGHiEXTifZoOMi5o83Zt78HTdfhax6gMI3NceqdNyO1I9QxrxZawIj%2BRhgkiaSdWgDUPS9PFl8QFE0qeJGWhcz3O5VCTWNCVzM5LP9vJv2eNSW2T7vUnqNY0%2BGr4bPzsA%2FnLUw4poowKPxXqVM93ZWfrScIhhNjcAi8xmcX9%2BgLnqeGbId9YEmiOq5M4iW9fm%2B55JNYt%2FSjaiw0tp%2BtGmebkhxrOHlVKB1S5T0RIs6CsVAMPhv5oLTrYss2x5GsCOkq0Vsf3dqEO349Vg3yuPrCljU8lRqNiQaD%2BlO1A7hohB9qLS3J2%2BOBTc5PPMNadicoGOqUBz3YCFHGlQ3qiBdkcwbhT%2B%2FeLK%2BOIwkTZgTq3AceIF47QuffJz2OLVaXDiphCqA8QQTw312kPk%2F6WrR6TMDYFsjVINbtEplcfNVK7w1VMyEF4eKKFoUF4k3%2BiNueHMFLD8SpS2GkHJx4C8wmW4bY1ATyCMtZDmi1mASfbb1k%2FW0%2FiHTPse0BOcwA8XTI0ytVVsJ9DD6XWM1nprdMbldoZjmhOA9vx&X-Amz-Signature=23dd4412d0927fdaaf2480db9a9dca315010629df9502baf44a182c04dac436f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

