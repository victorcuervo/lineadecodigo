---
title: "Tipos de datos objeto en Java"
description: "Ejemplo que nos enseña como podemos convertir todos los tipos de datos objeto en java en tipos primitivos y viceversa."
date: 2015-02-04
updatedDate: 2026-01-09
tags: ["variables","float","boolean","integer","double","long","short","character"]
slug: java/variables/tipos-de-datos-objeto-en-java
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/variables/TiposDatoObjeto.java
topic: java

---

Desde la versión Java 5 existen los tipos de datos objeto en [Java](https://www.manualweb.net/java/) dentro de la [librería java.lang](https://www.w3api.com/Java/tag/java.lang/). Aunque, quizás, siguen gozando poca popularidad quizás por cosas como el consumo de memoria o la complejidad a la hora de realizar operaciones de comparación. Entre los tipos de datos objeto en [Java](https://www.manualweb.net/java/) encontramos:

undefined
En todos los tipos de datos objeto en [Java](https://www.manualweb.net/java/) podemos envolver su respectivo tipo de dato primitivo para poder realizar las operaciones directamente sobre un objeto. De igual manera de un tipo de dato objeto podremos obtener su valor como tipo de dato primitivo. Veamos como sería para cada uno de los tipos de datos primitivo y su dato objeto correspondiente: 


## Boolean


Podemos pasar el tipo de dato boolean al constructor del objeto Boolean y el método .booleanValue() nos devolverá el tipo boolean.


```java
Boolean refBoolean = new Boolean(true);
boolean bool = refBoolean.booleanValue();
```


## Byte


En el caso del byte al constructor Byte deberemos de hacer un casting del valor entero para poder instanciarlo. La obtención del dato byte desde un Byte se realizará con .byteValue().


```java
Byte refByte = new Byte((byte) 123);
byte b = refByte.byteValue();
```


## Character


En el caso de pasar de un char a un Character se cargará mediante el constructor. Y el método .charValue() nos resolverá el acto contrario.


```java
Character refChar = new Character('x');
char c = refChar.charValue();
```


## Short


Cuando carguemos el constructor de Short deberemos de hacer un casting mediante (short) al valor pasado como parámetro. El método .shortValue() nos retorna un short desde el objeto Short.


```java
Short refShort = new Short((short) 123);
short s = refShort.shortValue();
```


## Integer


El int e Integer tienen un constructor directo y un método .intValue() para obtener el efecto contrario.


```java
Integer refInt = new Integer(123);
int i = refInt.intValue();
```


## Long


A los datos long hay que postponerles la letra L cuando los carguemos sobre un objeto Long. El método .longValue() nos da lo inverso.


```java
Long refLong = new Long(123L);
long l = refLong.longValue();
```


## Float


Si para long era la letra L, para float es la letra F en el constructor del objeto Float. El método .floatValue() nos devuelve un tipo float.


```java
Float refFloat = new Float(12.3F);
float f = refFloat.floatValue();
```


## Double


Para los tipos de datos double tenemos que posponer la letra D en el constructor Double y utilizar el método .doubleValue() para obtener un tipo double.


```java
Double refDouble = new Double(12.3D);
double d = refDouble.doubleValue();
```

