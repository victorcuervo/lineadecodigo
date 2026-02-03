---
title: "Convertir segundos en formato hora con Javascript"
description: "El artículo explica cómo convertir segundos en formato hora con Javascript utilizando el objeto Date y formateando el resultado."
date: 2012-01-23
updatedDate: 2026-01-12
tags: ["gethours","getminutes","getseconds","date"]
slug: javascript/fechas/convertir-segundos-en-formato-hora-con-javascript
author: victor_cuervo
type: doc
id: c1a5926f-d9ed-4b4a-b4db-73a6eed434bc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/convertir-segundos-a-formato-hora.html
---

Ciertos sistemas o propiedades nos pueden dar datos en formato de segundos. Si estamos en ese caso y queramos convertir segundos en formato hora con [Javascript](https://www.manualweb.net/javascript/) deberemos de seguir los siguientes pasos.


## Guardar los segundos en una variable


Lo primero será guardar en una variable los segundos:


```javascript
var segundos = 3600;
```


## Instanciar el objeto Date


Ahora instanciaremos un objeto de Tipo Date. La inicialización del objeto [Date](https://www.w3api.com/Javascript/Date/) es mediante milisegundos, por lo que necesitaremos multiplicar por 1000 nuestro valor en segundos.


```javascript
var fechaInicio = new Date(segundos * 1000);
```


## Obtener las horas, minutos y segundos


Ahora solo tenemos que acceder a los métodos del objeto [Date](https://www.w3api.com/Javascript/Date/). Al [.getHours()](https://www.w3api.com/Javascript/Date/getHours/), getMinutes() y getSeconds(). Estos nos dará los valores en formato hora.


```javascript
var horas = fechaInicio.getHours() - 1;
var minutos = fechaInicio.getMinutes();
var segundos = fechaInicio.getSeconds();
```


De este código hay que fijarse en dos cosas. La primera es que el valor de la hora retornará una hora más de la que realmente es. Es por ello que hacemos la corrección.


```javascript
var horas = fechaInicio.getHours() - 1;
```


## Formatear a dos dígitos


Y lo segundo en lo que debemos de fijarnos es en el uso del operador ternario para poner los minutos, segundos y horas en un formato de dos dígitos. Y es que los valores inferiores al 10 siempre vendrán solos. Es decir, 1, 2, 3, 4,... cuando nosotros queremos poner 01, 02, 03, 04,...


```javascript
horas = (horas < 10) ? "0" + horas : horas;
minutos = (minutos < 10) ? "0" + minutos : minutos;
segundos = (segundos < 10) ? "0" + segundos : segundos;
```


## Mostrar el resultado


Solo quedará volcar el contenido y añadir los dos puntos:


```javascript
document.getElementById('tiempo').innerHTML = horas + ":" + minutos + ":" + segundos;
```


Ya hemos visto que con el uso del objeto [Date](https://www.w3api.com/Javascript/Date/) hemos conseguido convertir segundos en formato hora con [Javascript](https://www.manualweb.net/javascript/).

