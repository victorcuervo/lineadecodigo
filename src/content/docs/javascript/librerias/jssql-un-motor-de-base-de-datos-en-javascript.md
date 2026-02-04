---
title: "JSSQL - Un motor de base de datos en javascript"
description: "JSSQL es un motor de base de datos en javascript que permite ejecutar consultas SQL sin conexión a servidor."
date: 2010-10-14
updatedDate: 2026-01-13
tags: ["bases-de-datos","consulta","datos","tabla","jssql"]
slug: javascript/librerias/jssql-un-motor-de-base-de-datos-en-javascript
type: doc
topic: javascript
id: 2c8a9dfb-adca-8137-b164-ceee35c80107
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/apis/javascriptsql
---

Este verano me topaba con un proyecto interesante llamado [JSSQL](http://javascriptsql.sourceforge.net/). [JSSQL](http://javascriptsql.sourceforge.net/) es un motor de base de datos escrito en [Javascript](https://www.manualweb.net/javascript/), el cual podemos ejecutar consultas SQL desde nuestras páginas web sin necesidad de estar conectado a algún servidor.


**JSSQL es un proyecto de Joaquín Becerra de la Universidad de Buenos Aires**. Podéis encontrar más información en: [http://javascriptsql.sourceforge.net/](http://javascriptsql.sourceforge.net/)


## Cargar la librería


Lo primero de todo es cargar la librería [Javascript](https://www.manualweb.net/javascript/) que implementa el motor de base de datos. **Esta librería es JSSQL.js**.


```javascript
<script type="text/javascript" src="JSSQL.js"></script>
```


## Instanciar el objeto JSSQL


Una vez cargada la librería instanciaremos **el objeto principal llamado JSSQL**.


```javascript
var jssql = new JSSQL();
```


## Abrir la base de datos


A partir del objeto JSSQL abriremos la base de datos a utilizar mediante el método open.


```javascript
if (!jssql.Open("mibasededatos"))
  alert(jssql.GetError());
```


Si falla la apertura de la base de datos, devolvemos el error del motor de la base de datos. Este error está accesible vía el método `.GetError()`.


En el código vemos que abrimos una base de datos que se llama "mibasededatos". Pero **¿Dónde está la base de datos?**


## Estructura de las bases de datos


Las bases de datos están definidas en ficheros `.jsdb` bajo una estructura de directorios:


```javascript
/JSDB/mibasededatos.jsdb
/JSDB/mibasededatos/paises.jsdb
/JSDB/mibasededatos/ciudades.jsdb
```


El fichero JSDB tiene la siguiente estructura:


```javascript
DBList[DBList.length] = 'mibasededatos|paises|ciudades';
```


Vemos que contiene la definición mediante arrays de las bases de datos que contiene.


## Definir tablas


A su vez, cada una de las tablas, tiene su fichero JSBD con el contenido. Por ejemplo la tabla de países tendría el siguiente contenido:


```javascript
dbtable[dbtable.length] = 'España|Madrid|Europa';
dbtable[dbtable.length] = 'Francia|París|Europa';
dbtable[dbtable.length] = 'Italia|Roma|Europa';
```


[JSSQL](http://javascriptsql.sourceforge.net/) nos ofrece una herramienta de conversión desde las bases de datos hacia JSDB. Puedes acceder a ella desde: [http://javascriptsql.sourceforge.net/ARCH/JSBD/ConversorBD.php](http://javascriptsql.sourceforge.net/ARCH/JSBD/ConversorBD.php)


## Ejecutar consultas


Una vez que hemos visto como se definen las bases de datos pasamos a ejecutar la consulta mediante el método `.Query()`. La consulta es una SELECT sencilla de países.


```javascript
var resultado = jssql.Query("SELECT * FROM paises");
```


## Recorrer resultados


El resultado nos lo deja en un array, el cual recorremos de forma sencilla:


```javascript
for (var i = 0; i < resultado.length; i++) {
  document.write(resultado[i][0] + " - " + resultado[i][1] + "<br>");
}
```


## Conclusión


La verdad es que [JSSQL](http://javascriptsql.sourceforge.net/) realiza un enfoque muy interesante sobre la necesidad de tener una BD en local. Algo que ya no parece estar muy lejos gracias a [HTML5](https://www.manualweb.net/html5/).

