---
title: Comentarios en CSS
description: "Los comentarios en CSS podemos ponerlos en una línea o en varias líneas. Explicamos cómo usarlos y las ventajas que conseguirás al incluirlos"
lastUpdated: 2025-12-17
slug: css/comentarios-en-css
author: victor_cuervo
---

### ¿Qué son los comentarios CSS?


Vamos con un ejemplo sencillo a la vez que útil dentro de [nuestros ejemplos sobre CSS](http://lineadecodigo.com/categoria/css/). Y es que hoy vamos a hablar de cómo podemos poner comentarios en CSS. Para ello, vamos a partir de un código [CSS](http://www.manualweb.net/css/) muy sencillo del que no vamos a entrar en su funcionalidad, ya que aquí nos vamos a enfocar en los comentarios y cómo podemos utilizarlos en nuestro código.


```css
h1 {
  color: red;
  font-size: large;
}
```


### ¿Cuándo debemos utilizar comentarios en CSS?


Pero lo primero de todo es saber cuándo tenemos que utilizar los comentarios en CSS. Estos son herramientas útiles que nos permiten mejorar la legibilidad y el mantenimiento de nuestro código. Existen varias situaciones en las que es recomendable su uso:

- **Aclaraciones:** Es útil cuando tenemos que explicar el propósito de un fragmento de código, especialmente si es complejo o no intuitivo. Esto puede ser muy beneficioso para otros desarrolladores que podrían trabajar en el proyecto en el futuro.
- **Código deshabilitado:** En ocasiones, podríamos querer deshabilitar temporalmente un fragmento de código. En lugar de eliminarlo, podemos comentarlo para que no afecte el resto del código, pero aun así sea fácilmente recuperable.
- **Grandes bloques de CSS:** Cuando se trabaja con grandes bloques de [CSS](https://www.manualweb.net/css/), los comentarios pueden ser útiles para dividir el código en secciones más manejables. Esto facilita la navegación y la comprensión del código.
- **Código asociado a un bug:** Si estamos trabajando en un problema y encontramos un bug, podemos utilizar los comentarios para marcar el código asociado a este. Esto nos permitirá volver a revisarlo más tarde y facilitará la comunicación sobre el problema con otros miembros del equipo.

### Tipos de comentarios CSS


Tenemos que saber que **en** [**CSS**](http://www.manualweb.net/css/) **podemos poner comentarios de 2 formas** y que los podemos utilizar de diferentes maneras. Así que lo primero será saber las 2 formas que hay para poner comentarios.


La primera será un **comentario en una línea.** Este comentario lo ponemos entre los caracteres **/*** y ***/**.


```css
/* Comentario en una sola línea */
```


Con los mismos caracteres podemos obtener la segunda forma de crear comentarios en CSS que son los **comentarios en varias líneas**. Sería la misma forma, pero poniendo líneas entre el texto del comentario.


```css
/*
    Comentario
    en varias
    líneas
*/
```


Estas dos formas las podemos utilizar en cualquier parte de nuestro código [CSS](http://www.manualweb.net/css/) para poder poner comentarios. Pero se suele utilizar en dos casos para situaciones muy útiles. La primera será para poder **comentar una propiedad de nuestro código** [**CSS**](http://www.manualweb.net/css/). Es decir, lo que hacemos es documentar la funcionalidad para la que estamos utilizando la propiedad sobre la que ponemos el comentario.


```css
h1 {
  color: red; /* Comentario tras propiedad */
  font-size: large;
}
```


La segunda será para poder desactivar una propiedad concreta del código [CSS](http://www.manualweb.net/css/). En este caso lo que se hace es comentar la propiedad entera. Esto suele ser muy útil cuando estamos creando, modificando o depurando nuestro código en fases de desarrollo. Cierto es que la idea sería eliminar este tipo de comentarios cuando subamos nuestro código a entornos productivos, para que así quede lo "más limpio" posible.


```css
h1 {
  color: red;
  /* font-size: large; */
}
```


Así, todas las formas que hemos revisado en este artículo quedarían resumidas en este código:


```css
/* Comentario en una sola línea */

/*
    Comentario
    en varias
    líneas
*/

h1 {
  color: red; /* Comentario tras propiedad */
  /* font-size: large; */
}
```


### Las ventajas de utilizar comentarios en el desarrollo web


Cuando te embarcas en un proyecto de diseño web, ya sea grande o pequeño, el uso de comentarios en tus hojas de estilo [CSS](http://www.manualweb.net/css/) puede convertirse en una herramienta de un gran valor. Es fácil pasar por alto su importancia, pero l**os comentarios pueden proporcionar un nivel de claridad y organización** que no tiene precio cuando se trata de navegar por el código. Las ventajas de utilizar comentarios en tu código [CSS](http://www.manualweb.net/css/) son múltiples y significativas:

- Los comentarios en CSS te permiten **explicar tu código de manera detallada**. Esto puede ser increíblemente útil no solo para ti, cuando necesites recordar por qué adoptaste ciertos enfoques o técnicas, sino también para otros desarrolladores que puedan trabajar en el proyecto en el futuro. Los comentarios pueden servir como una especie de documentación en el código, lo que facilita a cualquiera que lo vea entender su propósito y funcionamiento.
- Los comentarios p**ueden ser utilizados estratégicamente para anotar qué secciones del código hacen qué**. Esto puede proporcionar detalles valiosos sobre la funcionalidad de ciertas reglas [CSS](http://www.manualweb.net/css/), haciendo que sea más fácil para ti y para otros entender qué partes del código están contribuyendo a diferentes aspectos del diseño web.
- Los comentarios también pueden ser út**iles para desactivar temporalmente ciertas partes del código** sin tener que eliminarlas por completo. Esto puede ser especialmente útil durante la fase de prueba y depuración. Pero, aunque esta es una ventaja, es importante recordar que al final es bueno el dejar un código [CSS](http://www.manualweb.net/css/) limpio en producción.
- Por último, el uso de comentarios es una práctica recomendada en el desarrollo web. No solo puede mejorar la **eficiencia al hacer que el código sea más comprensible**, sino que también puede **fomentar la colaboración al permitir que otros comprendan tu trabajo más fácilmente**.

En definitiva, los comentarios pueden ser una pequeña adición a tus hojas de estilo [CSS](http://www.manualweb.net/css/), pero su impacto puede ser enorme. Ya sea que estés trabajando en un proyecto solo o en equipo, considera hacer de los comentarios una parte integral de tu proceso de codificación.

