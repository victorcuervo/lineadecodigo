---
title: "Numero de elementos del historial"
description: "Descubre cómo utilizar el objeto History DOM en JavaScript para conocer el número de elementos del historial y mejorar la experiencia del usuario en tu página."
date: 2007-06-27
updatedDate: 2026-02-05
tags: ["history","length"]
slug: webapi/navegador/numero-de-elementos-del-historial
type: doc
topic: webapi
id: 2c8a9dfb-adca-81e5-af3c-f994407fed58
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/numero-de-elementos-del-historial.html
---

Si nos ponemos a pensar en la utilizar que tiene el acceso vía [JavaScript](https://www.manualweb.net/javascript/) al historial de un navegador, la verdad, es que puede ser que no le encontremos mucho sentido. Hay que pensar que el historial de un navegador es una información confidencial del usuario, la cual refleja las páginas que este ha visitado. Imaginaros a empresas conociendo las páginas que visitáis.... no quiero ni imaginármelo. Es por ello que el acceso al historial es limitado, vuelve a la anterior página, ves a la siguiente, ves a una página en concreto,... 


Lo que también podemos conocer es el número de elementos que hay en el historial del usuario. Esto al menos nos dará una pista del número de navegaciones que ha hecho hasta llegar a nuestra página. Para poder acceder al número de elementos del historial nos podemos basar en el [objeto history](https://www.w3api.com/WebAPI/History/) y en concreto en su [propiedad .length](https://www.w3api.com/WebAPI/History/).


## Propiedad length del objeto History


```javascript
history.length;
```


Así, podemos jugar con su valor para decirle al usuario si ha empezado a navegar por nuestra página o bien, si lleva ya un rato navegando.


## Probando el objeto history


Veamos el código:


```javascript
numero = history.length;
document.write(numero + "<br>");

if (numero > 5)
 document.write("Parece que has navegado bastante");
else
  document.write("Ummm... parece que soy una de las primeras páginas que visitas");
```


Si, ya lo se, puede ser que la utilidad de esto sea cero. Pero no deja de ser otro buen ejemplo para ver como trabajar con los objetos del navegador y empezar a tirar nuestras primera líneas con [JavaScript](https://www.manualweb.net/javascript/)

