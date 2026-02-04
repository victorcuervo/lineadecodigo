---
title: "Recorrer un cursor en MongoDB"
description: "Aprende a recorrer un cursor en MongoDB y extraer información valiosa de tus documentos de manera eficiente para optimizar tus consultas y resultados."
date: 2013-11-06
updatedDate: 2026-01-28
tags: ["find","cursor","hasnext","next"]
slug: mongodb/cursores/recorrer-un-cursor-en-mongodb
type: doc
topic: mongodb
id: 7a604416-e28f-489e-84e9-f4470c51ece7
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/recorrerCursor.js
---

Cuando realizamos consultas sobre una colección en [MongoDB](https://www.manualweb.net/mongodb/) lo que obtenemos como resultado es un cursor de documentos. Si queremos ver los documentos que contiene un cursor en [MongoDB](https://www.manualweb.net/mongodb/) deberemos de recorrerlo. Un cursor lo obtendremos cuando realizamos una c[onsulta mediante MongoDB find](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/). 


## Obtener el cursor


Por ejemplo al realizar la siguiente consulta:


```javascript
conn = new Mongo();
db = conn.getDB("demografia");

cursor = db.ciudades.find();
```


La variable cursor será la que contenga el listado de documento.


## Métodos del cursor


Ahora para recorrer un cursor en [MongoDB](https://www.manualweb.net/mongodb/) deberemos de conocer una serie de métodos del cursor. El primer método es **.hasNext()** es un método que nos permite saber si quedan documentos por recorrer en el cursor, otro método es **.next()** el cual va moviendo el cursor y nos permite iterar por el cursor de documentos. 


Lo que crearemos será un bucle que nos ayude a recorrer un cursos en [MongoDB](https://www.manualweb.net/mongodb/) de la siguiente forma:


```javascript
while (cursor.hasNext()) {
  printjson(cursor.next());
}
```


El método printjson nos vuelva el contenido JSON del documento. Si bien tenemos que saber que cada vez que ejecutemos el método **.next()** vamos a obtener un documento.


```javascript
documento = cursor.next();
```


## Acceder a los campos del documento


Y al tener un documento podemos acceder a los campos del documento mediante una notación de punto. De esta forma si queremos acceder al campo ciudad lo haremos de la siguiente forma:


```javascript
print (documento.ciudad);
```


Siguiendo estas pautas podemos construir un bucle que recorra un cursor en [MongoDB](https://www.manualweb.net/mongodb/) y muestre el contenido de la consulta de la siguiente forma:


```javascript
while (cursor.hasNext()) {
  doc = cursor.next();
 
  // Imprimir un documento
  printjson(doc);
  
  // Imprimir campos de un documento
  print("En " + doc.ciudad + " hay " + doc.habitantes + " habitantes.");
}
```

