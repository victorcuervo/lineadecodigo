---
title: "Abrir y cerrar una ventana"
description: "Código Javascript que nos enseña a como abrir y cerrar una ventana."
date: 2008-03-23
updatedDate: 2026-01-12
tags: ["window","open","close","settimeout"]
slug: javascript/navegador/abrir-y-cerrar-una-ventana
author: victor_cuervo
type: doc
id: df7ff69a-f285-4316-bd88-9130c82d2292
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/ventanas/abrir-y-cerrar-ventana.html
---

Hace tiempo me llegaba un email que me pedía que le explicase como se abría y cerraba una ventana, pasado un tiempo. A primera vista puede parecer un poco absurdo ¿para que abrir una ventana y cerrarla después?. Pues si vuestras mentes son "maliciosas" podríamos pensar que es para abrir una ventana con banners de publicidad del tipo CPM - por impresión - o banners de intercambio que dan ratios de 3:1. Y la verdad es que no estaríamos muy desencaminados, ya que la gestión de la publicidad suele ser su fin más común de este ejemplo.


## Guardar la referencia de la ventana


Como llevar esto a cabo es muy sencillo. Simplemente deberemos de guardarnos la referencia a la página que abrimos (si no la abrimos nosotros no podremos cerrarla). Así que lo primero que hagamos será algo parecido a la siguiente línea de código:


```javascript
var ventana = [window.open](http://window.open/)("pagina.html", "ventana", "width=400,height=300");
```


En la variable `ventana` tendremos la referencia a la ventana que hemos abierto.


## Programar el cierre con setTimeout


Ahora tiene que pasar un cierto tiempo hasta que cerremos la ventana. Pues utilizaremos un timer `setTimeout(funcionALanzar, milisegundos)` al cual le pasamos la función que queremos lanzar y el tiempo transcurrido el cual se lanzará dicha función. En nuestro caso serán 5 segundos.


```javascript
setTimeout(cerrarVentana, 5000);
```


## Cerrar la ventana


Esa función será la que deberá de cerrar la ventana. ¿Y como puedo cerrar una ventana?. Pues si para abrirla invocamos su [método open()](https://www.w3api.com/DOM/Window/.open()), para cerrarla invocaremos su [método close()](https://www.w3api.com/DOM/Window/.close()).


```javascript
function cerrarVentana() {
  ventana.close();
}
```

