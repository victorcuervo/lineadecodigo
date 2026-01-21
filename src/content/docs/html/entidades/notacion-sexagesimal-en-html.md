---
title: "Notación sexagesimal en HTML"
description: "Descubre cómo utilizar la notación sexagesimal en HTML con entidades para representar grados, minutos y segundos de forma precisa y atractiva para tus páginas web."
date: 2007-12-31
updatedDate: 2026-01-21
tags: ["prime","sexagesimal"]
slug: html/entidades/notacion-sexagesimal-en-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/grado-sexagesimal.html
topic: html

---

Un grado sexagesimal es la nonagésima parte de un ángulo recto (90º). A su vez un grado sexagesimal se puede dividir en 60 minutos sexagesimales y cada uno de estos, a su vez, en 60 segundos sexagesimales.


## Notación sexagesimal


De esta forma podríamos tener la siguiente notación sexagesimal:


```javascript
45º 30' 15''
```


## Entidades HTML para notación sexagesimal


Si estamos componiendo una página [HTML](https://www.manualweb.net/html/) tendremos que saber cómo tratar los símbolos del minuto y segundo sexagesimal. Los símbolos que utilizan para representarlos son la prima (') para el minuto sexagesimal y la doble prima ('') para el segundo sexagesimal.


Para realizar esta representación, el lenguaje [HTML](https://www.manualweb.net/html/) cuenta con dos entidades `&prime;` para la prima y `&Prime;` para la doble prima. Hay que tener cuidado, ya que solo les diferencia la P mayúscula.


> Recordar que las entidades van entre un ampersand (&) y un punto y coma (;).


## Ejemplo de uso


De esta forma, si queremos representar el anterior valor sexagesimal, tendríamos el siguiente código [HTML](https://www.manualweb.net/html/):


```html
<p>45º 30&prime; 15&Prime;</p>
```


Podéis leer más sobre [el grado sexagesimal en la WIKI](http://es.wikipedia.org/wiki/Grado_sexagesimal).

