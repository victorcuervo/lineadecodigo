---
title: "Calcular signo del zodiaco con Java"
description: "Este ejemplo muestra cómo calcular el signo del zodiaco con Java según la fecha de nacimiento."
date: 2010-09-05
updatedDate: 2026-01-09
tags: ["if","switch","scanner"]
slug: java/control-de-flujo/calcular-signo-del-zodiaco-con-java
type: doc
topic: java
id: e84953ee-70ca-4e3b-a935-e20fa7baf0a9
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/SignoZodiaco.java
---

En este ejemplo vamos a ver como, mediante el lenguaje [Java](https://www.manualweb.net/java/), podemos saber el signo del zodiaco de una persona, dada su fecha de nacimiento (día y mes). Lo primero será pedirle al usuario su día y mes de nacimiento. Esto lo hacemos [accediendo a la consola con la clase Scanner](http://lineadecodigo.com/java/lectura-de-datos-en-java-con-scanner/):


```java
Scanner reader = new Scanner(System.in);

System.out.println("Qué día naciste");
dia = reader.nextInt();
	
System.out.println("Qué mes naciste");
mes = reader.nextInt();
```


Una vez que tenemos el día y el mes veamos la lógica a aplicar. En un mes solo puede haber dos signos del zodiaco. Por ejemplo, en Enero, si naciste antes del 21 eres Capricornio y si naciste el 21 o algún día posterior del mes de Enero, eres Acuario. Otro ejemplo, el mes de noviembre. Si naciste antes del 23 eres Escorpio y si naciste el mismo 23 o día superior eres Sagitario. Con esta deducción vemos que las estructuras a aplicar son sencillas. En primer lugar utilizaremos la sentencia switch pasa posicionarnos en el mes:


```java
switch(mes) {		
  case 1: 
    // Enero
    break;
  case 2:
    // Febrero
    break;
  ...
}
```


Y luego, dentro de cada mes la sentencia de decisión que aplicaremos mediante una sentencia if:


```java
switch(mes) {		
  case 1: 
    // Enero
    if (dia>=21)
      System.out.println("Acuario");
    else
      System.out.println("Capricornio");				
    break;
  case 2:
    // Febrero
    if (dia>=20)
      System.out.println("Piscis");
    else
      System.out.println("Acuario");
    break;
  ...
}
```


Como vemos la implementación es muy sencilla y nos ayuda a entender fácilmente las sentencias de decisión if y switch.

