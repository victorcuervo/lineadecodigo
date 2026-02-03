---
title: "Convertir un mes en texto con Java"
description: "Código fuente que explica, paso a paso, cómo convertir un mes en texto con Java."
date: 2013-01-25
updatedDate: 2026-01-11
tags: ["date","calendar","switch","fechas","month"]
slug: java/estructuras-selectivas/convertir-un-mes-en-texto-con-java
author: xhrist14n
type: doc
id: 3e648df0-f2a1-4344-8b73-1c9149dab44b
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/MesEnTexto.java
---

Para convertir un mes en texto con [Java](https://www.manualweb.net/java/) necesitamos una fecha en formato adecuado por tanto usaremos la implementación de [Java](https://www.manualweb.net/java/) llamada [Date](https://www.w3api.com/Java/Date-java-util/).


```java
public static String dateMonth(Date date){
  //Aquí en código
}
```


Luego debemos proceder a extraer el mes en formato numérico, usando [Calendar](https://www.w3api.com/Java/Calendar/) una clase que permite manejo de fechas. Pero para esto no debemos olvidar que Calendar extrae el mes en formato numérico pero en base a iniciar el conteo de meses desde 0. Por tanto el mes 0 seria enero, el 1 febrero y asi sucesivamente...


```java
Calendar calendar=Calendar.getInstance();
calendar.setTime(date);
int month=0;

try{
  month=calendar.get(Calendar.MONTH);
} catch(Exception ex){}
```


Y seguidamente procedemos a hacer la conversion por medio el uso de switch.


```java
switch(month){
  case 0:
    {
      result="Enero";
      break;
    }
  case 1:
    {
      result="Febrero";
      break;
    }
  case 2:
    {
      result="Marzo";
      break;
    }
  case 3:
    {
      result="Abril";
      break;
    }
  case 4:
    {
      result="Mayo";
      break;
    }
  case 5:
    {
      result="Junio";
      break;
    }
  case 6:
    {
      result="Julio";
      break;
    }
  case 7:
    {
      result="Agosto";
      break;
    }
  case 8:
    {
      result="Septiembre";
      break;
    }
  case 9:
    {
      result="Octubre";
      break;
    }
  case 10:
    {
      result="Noviembre";
      break;
    }
  case 11:
    {
      result="Diciembre";
      break;
    }
  default:
    {
      result="Error";
      break;
    }
}
```


Quedando de esta forma nuestra funcion de la forma siguiente:


```java
public static String dateMonth(Date date){
 String result="";
 Calendar calendar=Calendar.getInstance();
 calendar.setTime(date);
 int month=0;
 
 try{
   month=calendar.get(Calendar.MONTH);
 }catch(Exception ex){}
 switch(month){
  case 0:
    {
      result="Enero";
      break;
    }
  case 1:
    {
      result="Febrero";
      break;
    }
  case 2:
    {
      result="Marzo";
      break;
    }
  case 3:
    {
      result="Abril";
      break;
    }
  case 4:
    {
      result="Mayo";
      break;
    }
  case 5:
    {
      result="Junio";
      break;
    }
  case 6:
    {
      result="Julio";
      break;
    }
  case 7:
    {
      result="Agosto";
      break;
    }
  case 8:
    {
      result="Septiembre";
      break;
    }
  case 9:
    {
      result="Octubre";
      break;
    }
  case 10:
    {
      result="Noviembre";
      break;
    }
  case 11:
    {
      result="Diciembre";
      break;
    }
  default:
    {
      result="Error";
      break;
    }
 }
 return result;
}
```


Bueno ahora solo nos queda ver como funciona en código el convertir un mes en texto con [Java](https://www.manualweb.net/java/):


```java
Calendar calendar=Calendar.getInstance();
Date now=calendar.getTime();
System.out.println(dateMonth(now));
```

