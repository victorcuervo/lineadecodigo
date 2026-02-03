---
title: "Bordes con puntos"
description: "Cómo codificar tus hojas de estilo CSS para poder tener bordes con puntos."
date: 2008-03-31
updatedDate: 2026-01-17
tags: ["border-style","dotted"]
slug: css/box-model/bordes-con-puntos
author: victor_cuervo
type: doc
topic: css
id: 5f9a8591-cb28-4fa7-9059-2c2153ea6441
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/bordes/borde-con-puntos.html
---

Mediante este sencillo ejemplo veremos cómo podemos crear bordes con puntos. Los cuales podremos aplicar a múltiples objetos de nuestra página [HTML](https://www.manualweb.net/html/).


## Configuración del borde con puntos


Los bordes se pueden configurar mediante el atributo [border-style](%22Atributo%20CSS%20border-style%22). Cuando queremos que el borde sea con puntos, deberemos utilizar el valor "dotted".


```css
border-style: dotted;
```


Este valor se lo podemos aplicar a varios elementos HTML directamente o bien crear un estilo adhoc donde definamos este tipo de borde. En nuestro ejemplo se lo vamos a aplicar a las tablas y vamos a crear el estilo "borde_con_puntos", el cual, mediante estilos en linea, aplicaremos al elemento concreto que queramos.


```css
table {border-style: dotted;}
.borde_con_puntos {border-style: dotted;}
```


## Aplicación a tablas


Para ver el efecto en las tablas, bastará con añadir una tabla a nuestra página:


```html
<table>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
  </tr>
</table>
```


## Aplicación mediante estilos en línea


Para aplicar el estilo en línea a un elemento en concreto, utilizamos el atributo class. Veamos cómo quedaría sobre una imagen:


```html
<img src="imagen.jpg" class="borde_con_puntos" alt="Imagen con borde de puntos"/>
```

