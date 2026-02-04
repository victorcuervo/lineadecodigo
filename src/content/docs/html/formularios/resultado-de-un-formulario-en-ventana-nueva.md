---
title: "Resultado de un formulario en ventana nueva"
description: "Descubre cómo abrir el resultado de un formulario en ventana nueva utilizando el atributo target en HTML. Mantén tu página original intacta y mejora la experiencia del usuario."
date: 2007-09-04
updatedDate: 2026-01-19
tags: ["form","target","_blank"]
slug: html/formularios/resultado-de-un-formulario-en-ventana-nueva
type: doc
topic: html
id: ee4810fe-8d5c-4a18-8c33-833cd0830ebd
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/formularios/abrir-formulario-en-nueva-ventana.html
---

La verdad es que el titulo del ejemplo es casi más largo que su solución. Lo que buscamos es ver como abrir el resultado del formulario en una ventana nueva y no en la que contiene el formulario [HTML](https://www.manualweb.net/html/).


## El atributo target


La solución a esta duda es simple, y pasa por utilizar el [atributo target](https://www.w3api.com/HTML/a/target/). Al igual que sucede con los enlaces, dicho atributo nos indicará el nombre de la ventana donde queremos abrir el resultado del formulario.


## Valores del atributo target


El nombre puede tener varios valores:

- **Nombre de un frame**: Si está definido por un frameset
- **_parent**: Si queremos que se abra en la ventana padre
- **_top**: Si queremos engullir todos los frames que haya en la ventana
- **_blank**: Para abrir el resultado en una nueva ventana

## Usar _blank para nueva ventana


En nuestro caso tendremos que utilizar `_blank`, lo cual, permitirá abrir el resultado en una nueva ventana. El código nos quedará algo así:


```html
<form action="enviar.asp" method="post" target="_blank">
  <label>Nombre:</label>
  <input type="text" name="nombre">
  
  <label>Email:</label>
  <input type="email" name="email">
  
  <input type="submit" value="Enviar">
</form>
```


De esta forma sencilla, simplemente añadiendo el atributo `target="_blank"` al elemento `<form>`, conseguimos que el resultado del formulario se abra en una nueva ventana del navegador, manteniendo la página original intacta.

