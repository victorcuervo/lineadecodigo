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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GB5OX7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTQgZrz3eNQNFSg44%2FIt4ISgHjLHvSeZG%2FTzFtMVgsPQIhAMu6ltH%2FK%2FKLJAskLJTrqMNckmUoYUZG5iOHipQr%2BSfFKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6h0aK6Wd3VyypVloq3APW5u5gYNG0T4FutO%2FxTl82PPvDB7RwjwKNA%2F7xEVuVOSAC1RfZJxh88P65NIxCcOOuK%2FGpAGV58%2BIGaFnZ3GZu%2BTtrcvxLjvyFPjOsBRMQix31VCx8DfbLorwZLpKQVJmLJe4MffD4APyEihwU76ZC6w4i1gfm6ltKnhF%2BY1GtU%2FgAO2ZtE1lkj5K%2BbBrUZqafrSf2PbXix0Pc2zcu0sWawdwV%2FmL%2Fx%2FcbELYWM%2B1VXx8i72lMssjgrg7pWerzAPvFnvGcEjhGUtTW2xYkZW2flfhOLoXNZ6Q31DhAbbxpZYz0GRhECzgF4lXhBklUSSwrcSWBsVzPpYtLO7QEODNF%2ByU2pkBjMlNuSiO4zTMqUokNB7%2B6JqlJV3T0nXbxIoNimYVVnOFN3szeUPs%2BkW4aSKxz%2FStjVYCw5ftChcgovjcyvoTUUvY8wfOh%2B7xtMkoWJdgNZWk6qvggUgWG0rVTZ43VJrOng3skRkaroHqUEP889TzcLodUkPVZxNI7E82lBZDXcWmiGPAcqIP0cB4y%2BLM3poNrZIVSP2DltdkaYHsBx15mQv7%2B5hfPcWDKRGkuqkVU3ITsuIJNLHqz7pLdQN7nFpurjINcqqLDQHLsDehtToY3AOBOGG2u4zCLi4zKBjqkAUfst1%2FSVAGZQb%2BEa2aF1jL74q3wVr0a7fXNwpk5jllauiSnlJycO9yN87dg5vF169GPI6xzZfML5JfocoWcpvDzOpEaZQ%2FD4poOU0NJioPV1lqpHjLMkNmxQhsfDnq19jfi4f9SDid7XIkCMfvsQLf3suOEwvTjOrFA979aCpaRuTY2ENoW08VlHXPx18a%2FWMdpNGmBiqogwDNj%2FVunRpMl%2BOxQ&X-Amz-Signature=ec0753349cf2435de4538205dfd0809439e1aa0e735a7cac5c9870feb085c2bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637GB5OX7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTQgZrz3eNQNFSg44%2FIt4ISgHjLHvSeZG%2FTzFtMVgsPQIhAMu6ltH%2FK%2FKLJAskLJTrqMNckmUoYUZG5iOHipQr%2BSfFKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6h0aK6Wd3VyypVloq3APW5u5gYNG0T4FutO%2FxTl82PPvDB7RwjwKNA%2F7xEVuVOSAC1RfZJxh88P65NIxCcOOuK%2FGpAGV58%2BIGaFnZ3GZu%2BTtrcvxLjvyFPjOsBRMQix31VCx8DfbLorwZLpKQVJmLJe4MffD4APyEihwU76ZC6w4i1gfm6ltKnhF%2BY1GtU%2FgAO2ZtE1lkj5K%2BbBrUZqafrSf2PbXix0Pc2zcu0sWawdwV%2FmL%2Fx%2FcbELYWM%2B1VXx8i72lMssjgrg7pWerzAPvFnvGcEjhGUtTW2xYkZW2flfhOLoXNZ6Q31DhAbbxpZYz0GRhECzgF4lXhBklUSSwrcSWBsVzPpYtLO7QEODNF%2ByU2pkBjMlNuSiO4zTMqUokNB7%2B6JqlJV3T0nXbxIoNimYVVnOFN3szeUPs%2BkW4aSKxz%2FStjVYCw5ftChcgovjcyvoTUUvY8wfOh%2B7xtMkoWJdgNZWk6qvggUgWG0rVTZ43VJrOng3skRkaroHqUEP889TzcLodUkPVZxNI7E82lBZDXcWmiGPAcqIP0cB4y%2BLM3poNrZIVSP2DltdkaYHsBx15mQv7%2B5hfPcWDKRGkuqkVU3ITsuIJNLHqz7pLdQN7nFpurjINcqqLDQHLsDehtToY3AOBOGG2u4zCLi4zKBjqkAUfst1%2FSVAGZQb%2BEa2aF1jL74q3wVr0a7fXNwpk5jllauiSnlJycO9yN87dg5vF169GPI6xzZfML5JfocoWcpvDzOpEaZQ%2FD4poOU0NJioPV1lqpHjLMkNmxQhsfDnq19jfi4f9SDid7XIkCMfvsQLf3suOEwvTjOrFA979aCpaRuTY2ENoW08VlHXPx18a%2FWMdpNGmBiqogwDNj%2FVunRpMl%2BOxQ&X-Amz-Signature=26545a4b408953108a2c575fda2b358441a57de95c22929e277716e8bf480d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

