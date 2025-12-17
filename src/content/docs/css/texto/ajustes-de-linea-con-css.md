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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2N4UX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDecnza95b60kUXSMvzJ84pewU5TG6iN9ymZwcKuFKhtQIgI53vpKDbzPg%2Fe8UmHihSKN4P%2BU1KBRabfkK96hwZlekq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEXwAqmR3CQ%2FdJQjmyrcA%2FW0Wo6sNndRlN1RZgIjl4FWb4LSrWJHOayZ%2BoeojXikVT13pDOzSWHFrfnOO0xDKZxgHpmaM88mE0PD330HMtRbHc8XpdbMQwWyvtd%2B9yfMj71ZTTtKrXcjmvk8xO7KSrSGkGrjflsTK63TI%2BI7aTwPwbyX%2BX0IVvLB7%2F80jDy%2Fotfc%2FCCMiAU0QdJCvE%2F%2Bs6PvLizQt%2FqaRdaBIG31dDfywOKqYveAJ9%2B7TOPX0HoNWmWubyVZ%2BYj%2BBHInvaOE0LKljO9TMkEjMDNGyviW5c%2BQfXLgLkHad0pjhRbZ5vv4yyRRwa9mEtb8W3cPfum%2B4wKimEU8d4zwYuLGt4ZoAyqWEyeJOHuaCV7aQDixQQaEV7vW4%2Fok3huxPvMKkmX%2BGhHs16u2MyoikM4LUmrGNuJ%2FyDKiDs5mcmGH3XyOIiZ3pYVLv%2FKxKLGggLTqkTi2i2Ne%2BI9W5ki5RFbYfY0XlqzJplW4qItDUaz%2BMsTgi8B7wVhKeYX3l%2F7LYRS6LMcqNhs2PtGkUW4hnTaFgEnbpQs%2FJzlmfWwnrJNiSY%2FRv28972LQ0EfLhqlmOdn94qZ8m0X7k7poybYq3gk4EgMN4PaUTeOqQyi%2BYtB9KvnxSpsGdibnFwrZYjI3z1GyMKy4icoGOqUBLVD71tuX14e85VzlxlcSxPBrS6I4iyubsLsQcAiVPUHLZyJ%2BVjBlvCfRIk4Pe8Q4HzVlJJGNG6VCvwGI%2FGIKf9fLPQHATM8GkJRblBXZxAK08aFSRhFqz4HxV30fasV4Qik4rB%2FURiKVTTUdi4EsCdSkwELTjjNXEQ%2F5b91B2fctT%2F%2FQRycBUjb2zjluZ73LWRqjq0QrAIPoK7RgHW%2B35N4t3Hzs&X-Amz-Signature=4c3d9606e9c343cdfb047f08118111d99a5dd2dc6a015f44cca17d058d1570bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOK2N4UX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDecnza95b60kUXSMvzJ84pewU5TG6iN9ymZwcKuFKhtQIgI53vpKDbzPg%2Fe8UmHihSKN4P%2BU1KBRabfkK96hwZlekq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEXwAqmR3CQ%2FdJQjmyrcA%2FW0Wo6sNndRlN1RZgIjl4FWb4LSrWJHOayZ%2BoeojXikVT13pDOzSWHFrfnOO0xDKZxgHpmaM88mE0PD330HMtRbHc8XpdbMQwWyvtd%2B9yfMj71ZTTtKrXcjmvk8xO7KSrSGkGrjflsTK63TI%2BI7aTwPwbyX%2BX0IVvLB7%2F80jDy%2Fotfc%2FCCMiAU0QdJCvE%2F%2Bs6PvLizQt%2FqaRdaBIG31dDfywOKqYveAJ9%2B7TOPX0HoNWmWubyVZ%2BYj%2BBHInvaOE0LKljO9TMkEjMDNGyviW5c%2BQfXLgLkHad0pjhRbZ5vv4yyRRwa9mEtb8W3cPfum%2B4wKimEU8d4zwYuLGt4ZoAyqWEyeJOHuaCV7aQDixQQaEV7vW4%2Fok3huxPvMKkmX%2BGhHs16u2MyoikM4LUmrGNuJ%2FyDKiDs5mcmGH3XyOIiZ3pYVLv%2FKxKLGggLTqkTi2i2Ne%2BI9W5ki5RFbYfY0XlqzJplW4qItDUaz%2BMsTgi8B7wVhKeYX3l%2F7LYRS6LMcqNhs2PtGkUW4hnTaFgEnbpQs%2FJzlmfWwnrJNiSY%2FRv28972LQ0EfLhqlmOdn94qZ8m0X7k7poybYq3gk4EgMN4PaUTeOqQyi%2BYtB9KvnxSpsGdibnFwrZYjI3z1GyMKy4icoGOqUBLVD71tuX14e85VzlxlcSxPBrS6I4iyubsLsQcAiVPUHLZyJ%2BVjBlvCfRIk4Pe8Q4HzVlJJGNG6VCvwGI%2FGIKf9fLPQHATM8GkJRblBXZxAK08aFSRhFqz4HxV30fasV4Qik4rB%2FURiKVTTUdi4EsCdSkwELTjjNXEQ%2F5b91B2fctT%2F%2FQRycBUjb2zjluZ73LWRqjq0QrAIPoK7RgHW%2B35N4t3Hzs&X-Amz-Signature=9d9217c7cefbfb966423b424e2ddf1297d513364e9fa09a40643402ecf691111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

