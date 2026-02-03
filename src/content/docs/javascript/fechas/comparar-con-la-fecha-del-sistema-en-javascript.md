---
title: "Comparar con la fecha del sistema en Javascript"
description: "Pasos para poder comparar con la fecha del sistema en Javascript."
date: 2012-01-30
updatedDate: 2026-01-13
tags: ["date","gettime","math","fechas"]
slug: javascript/fechas/comparar-con-la-fecha-del-sistema-en-javascript
author: victor_cuervo
type: doc
topic: javascript
id: d8e4ff1a-5913-40d2-a389-4cc44620e809
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/comparar-con-fecha-sistema.html
---

Comparar con la fecha del sistema en [Javascript](https://www.manualweb.net/javascript/) nos sirve para saber la diferencia de fechas entre el día de hoy y otra fecha. Esto nos serviría desde casos en los que queramos saber hace cuanto tiempo publique esta entrada en el blog, o cuánto queda para el día de mi cumpleaños o cuánto queda hasta año nuevo.


## Restar dos fechas en Javascript


Realmente lo que estamos haciendo es restar dos fechas en [Javascript](https://www.manualweb.net/javascript/), la que nos da el usuario contra la fecha del sistema.


Para obtener la fecha del sistema simplemente instanciaremos un objeto [Date](https://www.w3api.com/Javascript/Date/).


```javascript
var hoy = new Date();
```


## Convertir cadena a fecha


Ahora cogeremos la fecha del usuario. Para ello ya vimos en el ejemplo de [cómo convertir una cadena de texto en una fecha](http://lineadecodigo.com/javascript/convertir-una-cadena-a-fecha-en-javascript/) los pasos que teníamos que seguir:


```javascript
var fecha = new Date(año, mes-1, dia);
```


## Calcular la diferencia de días


Ahora toca la resta, para ejecutar la resta convertimos previamente la dos fechas en milisegundos con el método [.getTime()](https://www.w3api.com/Javascript/Date/getTime/) del objeto Date de Javascript. A este valor lo dividimos por los milisegundos que representan un día (1000 ms  _60 segundos_  60 minutos * 24 horas). Por último realizaremos un redondeo apoyándonos en el método [.ceil()](https://www.w3api.com/Javascript/Math/ceil/.ceil()) del objeto [Math](https://www.w3api.com/Javascript/Math/ceil/) de [Javascript](https://www.manualweb.net/javascript/).


```javascript
var diferencia = Math.ceil((hoy.getTime() - fecha.getTime()) / (1000*60*60*24));
```


Utilizaremos el operador ternario para adecentar nuestra respuesta y diferenciar si la fecha paso (resultado positivo) o todavía no hemos llegado (resultado negativo).


Ya tenemos nuestra comparación con la fecha del sistema en [Javascript](https://www.manualweb.net/javascript/).

