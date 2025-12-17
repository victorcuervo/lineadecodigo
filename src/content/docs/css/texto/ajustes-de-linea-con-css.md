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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZMK7E5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXXgJrC8wGZbbKJSMkWs6ni5g3WoqGE7aE187LMPczAiEAmDt4dDpIgBEgnGEhRDfg24TJFulMl2pskqzATEFAeBcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjhVuV0FA%2FXgnerOSrcAy6aYlx1YmhY4sc%2FF8er4%2B0HBHXttFu1%2BMbk1M46mM1bvrqEHlA3cuPXOA7qOA7R8bFOerkPffpIYIx4GW36nonzUZOXVbqKRFcvkXaUTXFt9%2F9gLAB9MyG4lqTe9JdLSLa3O40y4K4sakQBCBuI5eKa6eOUVJuwuj5obHMLYy6d1nMSq03RWT%2FsgXNvCmvbFRMIaP%2BRMS8XZlHJ9f53drfTQyki98JNb0R4j7p1q8Dzalucpgf6V6LXyZ0b19o10wn5ZPG9D9115PtojWESti6zTUYN2DwIsBgCYO%2FJRtEsceUqiu2kkyY4G0gLPn%2Bd1HOg1NLZzYfWPKMDs5kIP7yNuIPHlS4y2hWq9%2BFqaO7MedK4psnWqlA6nxpbdE3QHCWXld04nCYQFzaScfjlTgP7lovzgWz%2BfEMr1ts8O75sXivvyEBzA%2B1FWgyL5cojxJOdmQXM8mQm%2BjRhW7dhaCEHyAjtqRt2SaHoLYfCWnSxuZ5RVGgMwnSouhVbsefnbJKbCu1hXCimszP%2F7UFPZVD6x9F5gdYo0iTr7TojE%2F%2FAsXZY80Ji%2BszNI0iFn6XG4JY6Y3mLYtNysXGIwMt9qWUwkllut1GTlejmIxKG2sjoVHi8%2Bgb1xPiiKNaXMM%2BujMoGOqUBQrHqowYo8lBVFc7vVTJrH2UiQCqX%2FGDJyZVZC5Z0r3N9A776XSl3G7x%2FpnYzEHvr0yhNKJiuW8ke4aYI0PKdsf2WI7bt%2BNUp%2BW1Hm0RDz%2FiAJ7%2Bu5Oweg9uEDJ8K4if0eXhuEEzlVZRDabrMPihV76nXoZOvTQ1ACBY01rwckJF6MrygVdob9gzKcgBZBVNP87Y5yyp3CXLXxehmMWCuJmQHs3y3&X-Amz-Signature=d8cab5b3f04b02a8f5f87c3be6dca5d35df49fe7cc7e854d53ee17abc27bd355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCZMK7E5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXXgJrC8wGZbbKJSMkWs6ni5g3WoqGE7aE187LMPczAiEAmDt4dDpIgBEgnGEhRDfg24TJFulMl2pskqzATEFAeBcqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjhVuV0FA%2FXgnerOSrcAy6aYlx1YmhY4sc%2FF8er4%2B0HBHXttFu1%2BMbk1M46mM1bvrqEHlA3cuPXOA7qOA7R8bFOerkPffpIYIx4GW36nonzUZOXVbqKRFcvkXaUTXFt9%2F9gLAB9MyG4lqTe9JdLSLa3O40y4K4sakQBCBuI5eKa6eOUVJuwuj5obHMLYy6d1nMSq03RWT%2FsgXNvCmvbFRMIaP%2BRMS8XZlHJ9f53drfTQyki98JNb0R4j7p1q8Dzalucpgf6V6LXyZ0b19o10wn5ZPG9D9115PtojWESti6zTUYN2DwIsBgCYO%2FJRtEsceUqiu2kkyY4G0gLPn%2Bd1HOg1NLZzYfWPKMDs5kIP7yNuIPHlS4y2hWq9%2BFqaO7MedK4psnWqlA6nxpbdE3QHCWXld04nCYQFzaScfjlTgP7lovzgWz%2BfEMr1ts8O75sXivvyEBzA%2B1FWgyL5cojxJOdmQXM8mQm%2BjRhW7dhaCEHyAjtqRt2SaHoLYfCWnSxuZ5RVGgMwnSouhVbsefnbJKbCu1hXCimszP%2F7UFPZVD6x9F5gdYo0iTr7TojE%2F%2FAsXZY80Ji%2BszNI0iFn6XG4JY6Y3mLYtNysXGIwMt9qWUwkllut1GTlejmIxKG2sjoVHi8%2Bgb1xPiiKNaXMM%2BujMoGOqUBQrHqowYo8lBVFc7vVTJrH2UiQCqX%2FGDJyZVZC5Z0r3N9A776XSl3G7x%2FpnYzEHvr0yhNKJiuW8ke4aYI0PKdsf2WI7bt%2BNUp%2BW1Hm0RDz%2FiAJ7%2Bu5Oweg9uEDJ8K4if0eXhuEEzlVZRDabrMPihV76nXoZOvTQ1ACBY01rwckJF6MrygVdob9gzKcgBZBVNP87Y5yyp3CXLXxehmMWCuJmQHs3y3&X-Amz-Signature=0d8c804361cf586a4ad6488c73854523414d71025ad95998baac480500a59f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

