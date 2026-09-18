---
title: "Quitar el scroll de nuestra página web"
description: "Quitar el scroll de nuestra página web con CSS: aprende a usar overflow, bloquear un eje y evitar contenido inaccesible o problemas en móviles."
date: 2010-05-25
updatedDate: 2026-09-18
tags: ["css","scrollbar","scrolling","overflow","body"]
slug: css/overflow-y-scroll/quitar-el-scroll-de-nuestra-pagina-web
type: doc
topic: css
id: b92ce9e3-5052-4cae-bc69-4d8c64ff792b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/ventana/quitar-scroll-pagina.html
---

En algunos casos puede ser necesario quitar el scroll de una página web, por ejemplo mientras se muestra un menú superpuesto o una ventana modal. Con CSS se consigue mediante la propiedad `overflow`, que controla qué sucede cuando el contenido supera las dimensiones disponibles.


Sin embargo, eliminar el desplazamiento de forma permanente no siempre es recomendable: si el contenido ocupa más que la ventana, una parte puede quedar inaccesible. Por eso conviene aplicar esta técnica únicamente cuando el diseño lo requiera y comprobar su comportamiento en pantallas pequeñas, con zoom y al navegar mediante teclado.


## Quitar el scroll de toda la página


Para ocultar las barras de desplazamiento de toda la página podemos aplicar `overflow: hidden` a los elementos `html` y `body`:


```html
<style>
  html,
  body {
    overflow: hidden;
  }
</style>
```


La declaración `overflow: hidden` recorta el contenido que desborda el área visible y evita que el usuario pueda desplazarse para verlo. Al aplicarla a `html` y `body`, el efecto alcanza al documento completo.


En una hoja de estilos externa, el mismo código se escribiría directamente como [CSS](https://lineadecodigo.com/css/):


```css
html,
body {
  overflow: hidden;
}
```


Este es el equivalente corregido y actualizado del ejemplo original. El atributo `type="text/css"` del elemento `style` ya no es necesario en [HTML](https://lineadecodigo.com/html/) moderno.


## Cómo funciona la propiedad overflow


La propiedad `overflow` determina cómo debe tratarse el contenido cuando supera el ancho o el alto de su contenedor. Sus valores más habituales son:

- `visible`: el contenido que sobresale no se recorta y puede mostrarse fuera del área asignada. Es el valor inicial.
- `hidden`: el contenido se recorta y no se muestran barras de desplazamiento. Aunque una aplicación puede modificar la posición de desplazamiento mediante código, el usuario no dispone de desplazamiento normal en ese eje.
- `clip`: recorta el contenido en el borde de recorte y no crea un contenedor de desplazamiento. Es más estricto que `hidden`.
- `scroll`: recorta el contenido y reserva barras de desplazamiento, aunque no siempre exista desbordamiento visible.
- `auto`: el navegador muestra barras de desplazamiento cuando son necesarias.

También pueden utilizarse palabras clave globales como `inherit`, que toma el valor calculado del elemento padre, aunque no suele ser necesaria para este caso.


En el ejemplo usamos `hidden` porque el objetivo es quitar el scroll de nuestra página web. Debemos recordar que el contenido que quede fuera de la ventana seguirá existiendo, pero el usuario no podrá alcanzarlo mediante el desplazamiento habitual.


## Quitar solo el scroll horizontal o vertical


CSS permite controlar cada eje por separado con `overflow-x` y `overflow-y`.


### Quitar el scroll horizontal


Si el problema es una barra horizontal provocada por un elemento demasiado ancho, podemos ocultar únicamente ese eje:


```css
html,
body {
  overflow-x: hidden;
}
```


Antes de aplicar esta solución, conviene localizar la causa del desbordamiento. A menudo aparece por un ancho fijo excesivo, el uso de `width: 100vw`, márgenes negativos, contenido sin posibilidad de salto o un elemento posicionado fuera del área visible. Ocultar el scroll elimina el síntoma, pero no corrige necesariamente el diseño.


### Quitar el scroll vertical


Para impedir solo el desplazamiento vertical se utiliza:


```css
html,
body {
  overflow-y: hidden;
}
```


Este caso requiere especial cuidado, porque puede dejar fuera de alcance el contenido situado por debajo de la ventana.


## Bloquear el scroll de forma temporal


En interfaces con una ventana modal, un menú móvil o un panel superpuesto, es mejor bloquear el desplazamiento solo mientras el componente está abierto. Para ello se puede definir una clase específica:


```css
body.sin-scroll {
  overflow: hidden;
}
```


La aplicación añadirá la clase `sin-scroll` al elemento `body` cuando abra el componente y la eliminará al cerrarlo. Así, el comportamiento normal de la página se recupera cuando deja de ser necesario el bloqueo.


Este patrón evita mantener `overflow: hidden` de forma global y permanente. Si la página cambia ligeramente de anchura al desaparecer la barra vertical, puede reservarse su espacio con `scrollbar-gutter`:


```css
html {
  scrollbar-gutter: stable;
}
```


La propiedad `scrollbar-gutter: stable` ayuda a evitar saltos de diseño en navegadores compatibles al conservar espacio para la barra de desplazamiento.


## Ocultar la barra sin impedir el desplazamiento


Quitar la barra visual y bloquear el scroll no son exactamente lo mismo. En determinadas interfaces puede interesar mantener el desplazamiento mediante rueda, gesto táctil o teclado, pero ocultar el indicador visual.


No existe una única solución idéntica para todos los navegadores. Un ejemplo habitual es:


```css
.contenedor {
  overflow: auto;
  scrollbar-width: none;
}

.contenedor::-webkit-scrollbar {
  display: none;
}
```


Aquí `overflow: auto` conserva el desplazamiento, `scrollbar-width: none` oculta la barra en los navegadores que admiten esa propiedad y el pseudoelemento `::-webkit-scrollbar` cubre otros motores compatibles.


Esta técnica debe utilizarse con prudencia: la barra comunica visualmente que existe contenido adicional. Si se oculta, el diseño debería ofrecer otra pista clara de que el área puede desplazarse.


## Problemas habituales al quitar el scroll


Antes de aplicar `overflow: hidden` a toda la página, revisa estos puntos:

- **Contenido inaccesible:** comprueba que ningún texto, botón o formulario quede fuera del área visible.
- **Pantallas pequeñas:** un diseño que cabe en escritorio puede desbordarse en un teléfono o con una orientación diferente.
- **Zoom del navegador:** al ampliar la página, el usuario puede necesitar desplazarse para acceder a todo el contenido.
- **Navegación por teclado:** el foco puede moverse hasta un elemento que no sea visible y al que no se pueda llegar desplazando la página.
- **Elementos superpuestos:** al bloquear el fondo por una ventana modal, el propio componente debe permitir desplazamiento interno si su contenido es alto.
- **Saltos de diseño:** la desaparición de la barra vertical puede cambiar el ancho disponible; `scrollbar-gutter` puede ayudar a estabilizarlo.

## Cuándo conviene utilizar esta técnica


Quitar el scroll de nuestra página web con CSS resulta apropiado cuando:

- La interfaz ocupa exactamente la ventana, como una presentación o una aplicación de una sola pantalla.
- Se bloquea temporalmente el fondo mientras hay un diálogo o menú superpuesto.
- Se controla un eje concreto dentro de un componente cuyo contenido no debe desbordarse.

No debería utilizarse para ocultar errores de maquetación ni cuando impida consultar parte del contenido. En la mayoría de páginas convencionales, mantener el desplazamiento con `overflow: auto` o con el comportamiento predeterminado ofrece una experiencia más robusta y accesible.

