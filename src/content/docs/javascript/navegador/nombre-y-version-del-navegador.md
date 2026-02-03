---
title: "Nombre y versión del navegador"
description: "Cómo utilizar código fuente Javascript para poder obtener el nombre y versión del navegador."
date: 2008-12-31
updatedDate: 2026-01-12
tags: ["navigator","useragent","appversion","appname"]
slug: javascript/navegador/nombre-y-version-del-navegador
author: victor_cuervo
type: doc
topic: javascript
id: 3ae0469b-6bca-447b-a2d0-0777531f3d17
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/browser/nombre-version-navegador.html
---

Aún a las alturas que estamos y con la madurez de la red, seguimos teniendo un alto nivel de incompatibilidad entre los navegadores, lo cual nos obliga a tener código [JavaScript](https://www.manualweb.net/javascript/) o [CSS](http://www.manualweb.net/css/) adhoc para las diferentes plataformas. Es por ello que nos puede ser interesante conocer el nombre y la versión del navegador que está ejecutando nuestra página.


Para ello podemos basarnos en el objeto **navigator**, el cual representa a nuestro navegador, y acceder a sus propiedades.


## Propiedad appName


Recuperar el nombre del navegador del objeto **navigator** puede resultar engorroso. Y es que aunque posee una propiedad `.appName`, esta no viene a reflejar muy claramente el nombre de nuestro navegador. Y si le echamos un ojo a la propiedad veremos que devuelve _Netscape_ o _Microsoft Internet Explorer_. Con lo cual, los Safari, Chrome,... y compañía no podrán ser detectados.


```javascript
navigator.appName
```


## Propiedad appVersion


Con la versión nos pasa algo parecido. En este caso tenemos la propiedad `.appVersion`. Si bien esta nos devolverá valores de 4 o 5. Asociados a los navegadores NetScape y Microsoft. Bueno, y una ristra de valores con compatibilidades y el nombre del sistema operativo.


```javascript
navigator.appVersion
```


## Propiedad userAgent


Es por ello que para conocer el nombre y la versión del navegador lo mejor es utilizar la propiedad `.userAgent`, la cual nos proporciona, no solo, información del nombre y la versión del navegador, si no que también nos da nombres del sistema operativo sobre el que ejecutamos, información de compatibilidades,...


```javascript
navigator.userAgent
```


El resultado que obtendremos será algo parecido a lo siguiente:


```javascript
Mozilla/5.0 (Windows; U; Windows NT 5.1; es-ES; rv:1.9.0.5) Gecko/2008120122 Firefox/3.0.5
```

