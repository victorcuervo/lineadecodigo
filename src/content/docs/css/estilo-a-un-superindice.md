---
title: "Estilo a un superíndice"
description: "Ejemplo que nos explica cómo podemos dar estilo a un superíndice mediante CSS para poder modificar su tamaño y que así sea un elemento más visible."
date: 2020-03-31
updatedDate: 2026-01-17
tags: ["CSS Texto"]
slug: css/estilo-a-un-superindice
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/formato-superindice.html
topic: css

---

Una de las [cosas que me habéis pedido en los comentarios](112396) es saber cómo dar estilo a un superíndice mediante [CSS](http://www.manualweb.net/css). La verdad que al principio se me hacía raro encontrar un caso de uso, pero quizás los superíndices que aparecen en las páginas web pueden aparecer demasiado pequeños y es por ello que pueda ser de utilidad modificar su tamaño y hacerlos más grandes.


## Crear un superíndice en HTML


Lo primero será poner un superíndice en [HTML](http://www.manualweb.net/html), para ello recurrimos al elemento `sup`. El texto contenido dentro del elemento será lo que aparezca en superíndice.


```html
<sup>Texto en superíndice</sup>
```


De esta forma podremos utilizar un superíndice para representar una referencia dentro de nuestro documento [HTML](http://www.manualweb.net/html). El código quedaría algo así:


```html
<p>Este es un texto con una referencia<sup>1</sup></p>
```


## Aplicar estilos al superíndice


Ahora vamos a ver cómo podemos dar un estilo a este superíndice. Para ello vamos a modificar las propiedades del elemento `sup` mediante [CSS](http://www.manualweb.net/css). Así que utilizamos el propio nombre del elemento `sup` **como selector**.


```css
sup {

}
```


Una vez definido nuestro selector lo que haremos será modificar el tamaño. Esto lo conseguimos mediante la propiedad `font-size`. A la cual vamos a dar un tamaño, en este caso mediante pixels.


```css
sup {
  font-size: 16px;
}
```


## Código completo


Hay que recordar que este código deberá de ir dentro del elemento `style` de nuestra página web:


```html
<style>
sup {
  font-size: 16px;
}
</style>
```


El código completo de nuestra página web que nos permite dar estilo a un superíndice mediante [CSS](http://www.manualweb.net/css) es el siguiente:


```html
<!DOCTYPE html>
<html>
<head>
  <title>Estilo a un superíndice</title>
  <style>
    sup {
      font-size: 16px;
    }
  </style>
</head>
<body>
  <p>Este es un texto con una referencia<sup>1</sup></p>
</body>
</html>
```

