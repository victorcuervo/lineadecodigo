---
title: "Paso de parámetros con ASP"
description: "El artículo explica cómo pasar parámetros con ASP utilizando el objeto Request y el método QueryString."
date: 2009-01-14
updatedDate: 2026-01-07
tags: ["request","querystring"]
slug: asp/basicos/paso-de-parametros-con-asp
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_asp/blob/master/basico/paso-parametros-querystring/pasoparametros.asp
topic: asp
---

Dando vueltas a los artículos que tenía publicados en la sección [ASP](http://www.manualweb.net/asp/) me he dado cuenta que no había ninguno que explicase como diseñar páginas para el paso parámetros con [ASP](http://www.manualweb.net/asp/) entre ellas. Y es que, esto, es una de las primeras necesidades que cualquier desarrollador de páginas [ASP](http://www.manualweb.net/asp/) o de cualquier otra tecnología en el lado servidor, se va a preguntar. En este artículo vamos a ver como pasar información mediante los parámetros de una URL. Lo que se conoce como paso de parámetros vía GET. Es decir, si nos fijamos en las páginas que hay en Internet, suelen ser aquellas que son algo así como...


```javascript
miVariable = Request.QueryString("variable1")
```


Siempre tiene que coincidir el nombre de la variable que ponemos en la URL con el nombre de la variable que estemos recuperando en el método QueryString. Esto devuelve el valor de "variable1", es decir, "valor1". A si que hay que asignar este método a alguna variable:


```javascript
Request.QueryString("variable1")
```


[ASP](http://www.manualweb.net/asp/) nos ofrece un objeto que nos permite recuperar estas variables de una forma muy sencilla, el objeto Request. Y el método que permite recuperar el valor es QueryString. Si lo ponemos todo junto, la forma de recuperar una variable, por ejemplo, la variable "variable1", será la siguiente:


```javascript
variable1=valor1&variable2=valor2
```


y como hemos dicho, cada variable, separada por &


```javascript
variable=valor
```


Si nos fijamos, en la parte final de la URL hay una serie de datos los cuales empiezan por un símbolo de interrogación y se separan mediante &. Cada par de, variable, valor, sigue la siguiente sintaxis


```shell
http://www.aulambra.com/ver.asp?id=100&tipo=Documento
```

