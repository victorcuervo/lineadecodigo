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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4DA4BO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9pJE7auZ6NrP2JoGkHhMvGXNc03MiALwXfv8rX6o40gIhALvV7DQ3EcBycN0AO7C91myIptPhrBuojKEKPCkq0LkmKv8DCHcQABoMNjM3NDIzMTgzODA1Igx8Wr%2BfACLjbdGxlDUq3ANfyGMJVWirdJTGAInRq%2BxH%2Bw82ACg7%2F66G3K8MuK5t3iDkr1231DmI0JF%2Bjzf9WYMVZddMRQTlRmtAeavTvZeu4rmsQyg3%2FvcGoIiQVoh9dUpbrr4GMGOCC%2B24EkMrsw3VQLYSIouWPMtDZecLCNmV1ExvJrEaNzvf4xIGMkCZG7aoVLcPLI8vFFllijBXKNdxR1s13DQ0Hjku9uJ4rukfIB0cb%2BmIqZfM7D4OsR1bmdKOvf29N81U4tPc8KMVLGqseT1EVdq3WmyndiEHWl3c7PXmggrWAF9hcoX7czLXeVlBVWKEZPCWVG2PrXHf5yHV3RIZolCrkCARFIh8p2X5%2FO6W%2Fz3ie2j8G0xVJ1wfmeQd9FEhAAqyD%2Fno7BY4%2B5KdG5fMoHOPrY11Xnzra33vA%2BzyIX3HFG1dFcyNRRuDY4QPpY6NR8HrjgVr56J7rWEwRvywsvaKtC1D3Y6G7RhPhEc6TtsouPszZ%2B0KSzM5jdKD4BidULFbKexJimRZsFxg7NtHPOSQ87VOVS5p%2F0fxphve5cfl7Qg6bzvm%2FTCarJnnjra6eSyg2EOcHb1IzyjrQn4ASQU%2Bak%2BNqi%2BrSKI6DPsnN%2BRDo%2FoFNREJw9BlE0JIq%2BpeoEJ%2B3gfR9TDPg4nKBjqkAfDt7mhwqZqROiOPGcVh8BED85%2FNuqZu1Xg10TsGwaT%2BpzyLZKxbEGZUMeqk%2F4IWfg8L6mjJariypSXIg%2Fve%2F0kQmcRRdsD3FbWmbqpHXbRA8U23LAXc5gyRs3JcntFZZJ8G0QLQbWhJ2NT3n4HRk4%2FUfOkbdO1Mx6rx04GXJpmAfu1gz%2FUVaWo053IgBWHXzUBO9V8S2a0dyjbUNY9gAuOzQ03q&X-Amz-Signature=c6b3bd05e3af03f84f8bf0b03e5438c3618cc2934e23732a4c2d62289f62af34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZ4DA4BO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9pJE7auZ6NrP2JoGkHhMvGXNc03MiALwXfv8rX6o40gIhALvV7DQ3EcBycN0AO7C91myIptPhrBuojKEKPCkq0LkmKv8DCHcQABoMNjM3NDIzMTgzODA1Igx8Wr%2BfACLjbdGxlDUq3ANfyGMJVWirdJTGAInRq%2BxH%2Bw82ACg7%2F66G3K8MuK5t3iDkr1231DmI0JF%2Bjzf9WYMVZddMRQTlRmtAeavTvZeu4rmsQyg3%2FvcGoIiQVoh9dUpbrr4GMGOCC%2B24EkMrsw3VQLYSIouWPMtDZecLCNmV1ExvJrEaNzvf4xIGMkCZG7aoVLcPLI8vFFllijBXKNdxR1s13DQ0Hjku9uJ4rukfIB0cb%2BmIqZfM7D4OsR1bmdKOvf29N81U4tPc8KMVLGqseT1EVdq3WmyndiEHWl3c7PXmggrWAF9hcoX7czLXeVlBVWKEZPCWVG2PrXHf5yHV3RIZolCrkCARFIh8p2X5%2FO6W%2Fz3ie2j8G0xVJ1wfmeQd9FEhAAqyD%2Fno7BY4%2B5KdG5fMoHOPrY11Xnzra33vA%2BzyIX3HFG1dFcyNRRuDY4QPpY6NR8HrjgVr56J7rWEwRvywsvaKtC1D3Y6G7RhPhEc6TtsouPszZ%2B0KSzM5jdKD4BidULFbKexJimRZsFxg7NtHPOSQ87VOVS5p%2F0fxphve5cfl7Qg6bzvm%2FTCarJnnjra6eSyg2EOcHb1IzyjrQn4ASQU%2Bak%2BNqi%2BrSKI6DPsnN%2BRDo%2FoFNREJw9BlE0JIq%2BpeoEJ%2B3gfR9TDPg4nKBjqkAfDt7mhwqZqROiOPGcVh8BED85%2FNuqZu1Xg10TsGwaT%2BpzyLZKxbEGZUMeqk%2F4IWfg8L6mjJariypSXIg%2Fve%2F0kQmcRRdsD3FbWmbqpHXbRA8U23LAXc5gyRs3JcntFZZJ8G0QLQbWhJ2NT3n4HRk4%2FUfOkbdO1Mx6rx04GXJpmAfu1gz%2FUVaWo053IgBWHXzUBO9V8S2a0dyjbUNY9gAuOzQ03q&X-Amz-Signature=fb3b9d24d2654dd880e6947e087e771157f5b46d036eaff92f6ed49b923ef173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

