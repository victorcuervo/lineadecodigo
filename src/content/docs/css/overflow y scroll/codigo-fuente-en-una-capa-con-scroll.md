---
title: "Código fuente en una capa con scroll"
description: "Código fuente en una capa con scroll: aprende a usar overflow en CSS para mostrar bloques de código legibles con desplazamiento horizontal y vertical."
date: 2010-10-31
updatedDate: 2026-09-18
tags: ["overflow","código fuente"]
slug: css/overflow-y-scroll/codigo-fuente-en-una-capa-con-scroll
type: doc
topic: css
id: 2c8a9dfb-adca-81ed-af8e-e15485bc82f5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/capas/capa-con-scroll.html
---

Hay situaciones en las que el contenido puede superar el tamaño de la capa que lo contiene. Esto ocurre con frecuencia al mostrar fragmentos de código, ya que una línea larga puede desbordar el ancho disponible y afectar al diseño de la página.


Para insertar **código fuente en una capa con scroll**, podemos combinar un elemento [`<pre>`](http://w3api.com/wiki/HTML:PRE) de [HTML](https://lineadecodigo.com/html/) con la propiedad [`overflow`](http://w3api.com/wiki/CSS:Overflow) de [CSS](https://lineadecodigo.com/css/). De este modo, el navegador añade barras de desplazamiento cuando el contenido no cabe en el espacio definido.


## Crear el bloque de código


El elemento `<pre>` conserva los espacios, tabulaciones y saltos de línea del contenido. Por eso resulta adecuado para presentar código fuente con su formato original. Podemos asignarle la clase `codigo` para aplicar los estilos:


```html
<pre class="codigo">
  <!-- Código fuente que queremos mostrar -->
</pre>
```


En una página real es habitual incluir un elemento `<code>` dentro de `<pre>`, ya que aporta una semántica más precisa:


```html
<pre class="codigo"><code>
const mensaje = "Hola, mundo";
console.log(mensaje);
</code></pre>
```


## Añadir scroll con CSS


Para que el código fuente aparezca dentro de una capa con scroll, definimos unas dimensiones y controlamos el desbordamiento mediante `overflow`:


```css
.codigo {
  width: 400px;
  height: 300px;
  display: block;
  overflow: scroll;
}
```


La declaración `overflow: scroll` muestra barras de desplazamiento en ambos ejes. Esto permite consultar cualquier parte del código sin que el bloque invada otros elementos de la página.


El ejemplo conserva la intención del código original, aunque en diseños actuales suele ser preferible evitar un ancho fijo para que el bloque se adapte mejor a pantallas pequeñas.


## Una alternativa adaptable con overflow auto


Si queremos que las barras solo aparezcan cuando sean necesarias, podemos utilizar `overflow: auto`. También podemos limitar el ancho al espacio disponible y establecer una altura máxima:


```css
.codigo {
  box-sizing: border-box;
  max-width: 100%;
  max-height: 300px;
  padding: 1rem;
  overflow: auto;
  white-space: pre;
  background-color: #f5f5f5;
  border: 1px solid #dcdcdc;
}
```


En esta versión:

- `max-width: 100%` evita que la capa sea más ancha que su contenedor.
- `max-height: 300px` limita su altura sin obligar a que todos los bloques midan exactamente lo mismo.
- `overflow: auto` añade desplazamiento horizontal o vertical únicamente cuando hace falta.
- `white-space: pre` mantiene el formato del código y permite el desplazamiento horizontal de las líneas largas.
- `box-sizing: border-box` incluye el relleno y el borde dentro del ancho calculado.

## Scroll horizontal o vertical por separado


Las propiedades `overflow-x` y `overflow-y` permiten controlar cada eje de forma independiente. Por ejemplo, si solo queremos desplazamiento horizontal y preferimos que la altura crezca con el contenido:


```css
.codigo {
  max-width: 100%;
  padding: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: pre;
}
```


Esta configuración es útil para fragmentos con líneas largas, como rutas, consultas o instrucciones que no conviene dividir. Si el bloque contiene muchas líneas y debe mantener una altura limitada, podemos combinar `overflow-x: auto`, `overflow-y: auto` y `max-height`.


## Cuándo utilizar una capa con scroll


Una capa con scroll resulta especialmente práctica para:

- Mostrar ejemplos de código sin romper el diseño.
- Mantener fragmentos extensos dentro de un área acotada.
- Conservar la indentación y los saltos de línea.
- Facilitar la lectura en dispositivos con distintos tamaños de pantalla.

Conviene evitar alturas demasiado pequeñas, ya que obligan al usuario a desplazarse continuamente. La capa debe ofrecer suficiente contexto para leer el código con comodidad.


Con estas reglas podemos mostrar código fuente en una capa con scroll de forma sencilla. La opción original con `overflow: scroll` funciona correctamente, mientras que `overflow: auto` suele ofrecer una experiencia más limpia al mostrar las barras de desplazamiento solo cuando el contenido las necesita.

