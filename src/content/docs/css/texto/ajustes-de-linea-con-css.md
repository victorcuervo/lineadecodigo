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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAM6T3DG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnRCp5udSZ%2Bi0sMJ%2F%2FPEq8KLPZZtIwFy%2FlT%2FqsRWaY%2BAiEA0e9ZOEzZ12DuKSv0nBhxYGRdY6odv9y1nuvPBik6brYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDV%2B6qNFSpK8wOSyRyrcA3mppJ3kmj5PC5pIkXMdFO3yhNzMisTRhBb6RKbcdH1SanudRUTWRGvZGLDpBXjp16Z7h64OoalL3PRyQFTSu6IAA%2BEuF44mESUGfFLM9Tzd1WuxVOLHYG0VYIn0rlgCO68jFmZepcL3JwL9X3xl6Zo7A9BHf89hkGwJr7KM45g5lVK%2BSNWwpiEyzh5JCDXGa4vrkm2s2W1ZtmX0auttdcb%2FuMyAQt6YWxHeFs%2FsMyDW7XArPuMkuYPRlnbUlS9CDW7dg4UAyNZabmDiSact3ztyxg7MlRlun%2Fh4WxdpLp3pJ%2FTy0Mbt1ZLjB2safqR0E3HM6MrZOMhOFU0NQ54l6UyYCzfCWW0L%2BFTGgCuWNEk0nyY%2BJhGjz%2FUXzayoFJbt7u1dx9qafrOBFW%2FcNsa8g0zkehirY9WV%2BpqH2cgROenOgf%2B7veqNpiwL2P0nvDbWbhrZgJKTS1eJKWJ6U2c13OYhnSQejimSXthaapINup6JbK8DJ%2Fs8ayfmHAXY7CdEQy8HHlLJbKYz18puz%2FIE5Tmniujc3cTrO1ikSA7C7rZK1sMcW%2BGcd2qiLdGkUD1eRvIvxUYjwcy%2Fz5kRTRbTnlRcUNUscvRhBVhc0oI9DzDSBozdqiWetaj8ihzXMPidicoGOqUB1ajZow8sFy3JAXtDT66kd1TFfenDLz2lJO5zuuaA%2BwS5XGIlOyL%2B%2B2CLL0OHHVc9nBIEnlG2OR0aYGCDUkXQ646wnnYsT4FEhtzoVUHDgHhzAqCO%2FRW2z%2FTcsPq2HZAURI2i15fLljh0jkybaeEdPs9RkXrQFgY%2FGb6l1aeFdW8sBje%2BnPFh%2BGsTnxyEUF3QMFZPPNlJ7TMIXA6a05vW0%2F2F6ZS7&X-Amz-Signature=8080598af356435c7869249604eb1b8e05bf9174a0ccbca04d1caeda61e2c250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAM6T3DG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnRCp5udSZ%2Bi0sMJ%2F%2FPEq8KLPZZtIwFy%2FlT%2FqsRWaY%2BAiEA0e9ZOEzZ12DuKSv0nBhxYGRdY6odv9y1nuvPBik6brYq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDV%2B6qNFSpK8wOSyRyrcA3mppJ3kmj5PC5pIkXMdFO3yhNzMisTRhBb6RKbcdH1SanudRUTWRGvZGLDpBXjp16Z7h64OoalL3PRyQFTSu6IAA%2BEuF44mESUGfFLM9Tzd1WuxVOLHYG0VYIn0rlgCO68jFmZepcL3JwL9X3xl6Zo7A9BHf89hkGwJr7KM45g5lVK%2BSNWwpiEyzh5JCDXGa4vrkm2s2W1ZtmX0auttdcb%2FuMyAQt6YWxHeFs%2FsMyDW7XArPuMkuYPRlnbUlS9CDW7dg4UAyNZabmDiSact3ztyxg7MlRlun%2Fh4WxdpLp3pJ%2FTy0Mbt1ZLjB2safqR0E3HM6MrZOMhOFU0NQ54l6UyYCzfCWW0L%2BFTGgCuWNEk0nyY%2BJhGjz%2FUXzayoFJbt7u1dx9qafrOBFW%2FcNsa8g0zkehirY9WV%2BpqH2cgROenOgf%2B7veqNpiwL2P0nvDbWbhrZgJKTS1eJKWJ6U2c13OYhnSQejimSXthaapINup6JbK8DJ%2Fs8ayfmHAXY7CdEQy8HHlLJbKYz18puz%2FIE5Tmniujc3cTrO1ikSA7C7rZK1sMcW%2BGcd2qiLdGkUD1eRvIvxUYjwcy%2Fz5kRTRbTnlRcUNUscvRhBVhc0oI9DzDSBozdqiWetaj8ihzXMPidicoGOqUB1ajZow8sFy3JAXtDT66kd1TFfenDLz2lJO5zuuaA%2BwS5XGIlOyL%2B%2B2CLL0OHHVc9nBIEnlG2OR0aYGCDUkXQ646wnnYsT4FEhtzoVUHDgHhzAqCO%2FRW2z%2FTcsPq2HZAURI2i15fLljh0jkybaeEdPs9RkXrQFgY%2FGb6l1aeFdW8sBje%2BnPFh%2BGsTnxyEUF3QMFZPPNlJ7TMIXA6a05vW0%2F2F6ZS7&X-Amz-Signature=16eb053ceec02e6cba814ea4b6bb0db611f9f0ecd2a2f1ae4d3e3e1490a73843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

