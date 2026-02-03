---
title: "Convertir un número a texto con Java"
description: "Proceso que nos explica cómo convertir un número a texto con Java."
date: 2012-04-08
updatedDate: 2026-01-08
tags: ["switch","if"]
slug: java/numeros/convertir-un-numero-a-texto-con-java
author: victor_cuervo
type: doc
topic: java
id: 2114ddd0-cd3b-4e75-ae59-c5baff229af5
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/NumerosEnTexto.java
---

Vamos a ver como construir un método con [Java](https://www.manualweb.net/java/) al cual le pasemos un número de tres dígitos: unidades, decenas y centenas y nos lo transforme a texto. Es decir, el 534 nos lo transforme en "quinientos treinta y cuatro", es el proceso de convertir un número a texto con [Java](https://www.manualweb.net/java/). Lo primero para convertir un número a texto con [Java](https://www.manualweb.net/java/) será crear métodos de apoyo. El primer método de apoyo es el que dado una unidad nos la transforma en texto.


```java
public static String unidadEnTexto(int iNumero){
// Método que dado un número me lo devuelve en texto		
 switch(iNumero){
	case 1:
		return "uno";
	case 2:
		return "dos";
	case 3:
		return "tres";
	case 4:
		return "cuatro";
	case 5:
		return "cinco";
	case 6:
		return "seis";
	case 7:
		return "siete";
	case 8:
		return "ocho";
	case 9:
		return "nueve";
	case 0:
		return "cero";
	default:
		return "";
 }
}
```


El siguiente será el de las decenas. Es decir, le pasaremos un número que represente las decenas y nos devolverá el texto. Si le pasamos un 2 nos devolverá "veinte".


```java
public static String decenaEnTexto(int iDecena){
  switch (iDecena){
	case 1:
		return "diez";
	case 2:
		return "veinte";
	case 3:
		return "treinta";
	case 4:
		return "cuarenta";
	case 5:
		return "cincuenta";
	case 6:
		return "sesenta";
	case 7:
		return "setenta";
	case 8:
		return "ochenta";
	case 9:
		return "noventa";		
	default:
		return "";
  }
}
```


Todas las decenas las podemos montar con el texto de la decena y el texto de la unidad, añadiendo un "y" en medio. Así 22 sería "veinte y dos". Hay un caso especial a tener en cuenta y este es el de las decenas del diez. Así que para ese caso nos montamos otro método de apoyo.


```java
public static String decenas(int iDecena){
  switch (iDecena){
	case 11:
		return "once";
	case 12:
		return "doce";
	case 13:
		return "trece";
	case 14:
		return "catorce";
	case 15:
		return "quince";
	case 16:
		return "dieciseis";
	case 17:
		return "diecisiete";
	case 18:
		return "dieciocho";
	case 19:
		return "diecinueve";		
	default:
		return "";
  }
}
```


Y lo último igual para las centenas. Si bien es verdad que aquí solo se nos devolverá el relativo a los cientos, quinientos y novecientos. Ya que para el testo de centenas lo podemos montar mediante la unidad y añadiendo el sufijo cientos. Así tendremos dos-cientos, tres-cientos,...


```java
public static String centenaEnTexto(int iCentena){
  switch (iCentena){
	case 1:
		return "ciento";
	case 5:
		return "quinientos";
	case 9:
		return "novecientos";				
	default:
		return "";
  }
}
```


Ahora solo nos queda desmontar el número e ir llamando a las funciones de apoyo necesarias. Para ir obteniendo por dígitos nos apoyamos en el módulo y división de 10. Ya que el módulo nos deja el dígito y la división el resto del número. Así, para las unidades sería:


```java
int iUnidad = iNumero%10;
iNumero = iNumero/10;		
sTexto = unidadEnTexto(iUnidad);
```


La conversión de la unidad ha sido sencilla ya que solo hemos tenido que llamar al método unidadEnTexto. Vamos con las decenas, para obtener la decena el mismo mecanismo que antes.


```java
int iDecena = iNumero%10;
iNumero = iNumero/10;
		
if ((iUnidad==0) && (iDecena>0))
	sTexto = decenaEnTexto(iDecena);
else if (iDecena==1)
	sTexto = decenas(10+iUnidad);
else if (iDecena > 1)
	sTexto = decenaEnTexto(iDecena) + " y " + sTexto;
```


Aquí, tenemos tres casos:

- Si la unidad era un cero, pedimos la decena y será el texto único.
- Si la decena empieza por uno, caso especial y por lo tantto llamamos al método de las decenas.
- Otros casos componemos con la decena y la unidad juntas con un "y".

El último caso, las centenas.


```java
int iCentena = iNumero%10;

if ((iCentena!=1) && (iCentena!=5) && (iCentena!=9) && (iCentena!=0))
	sTexto = unidadEnTexto(iCentena) + "cientos" + " " + sTexto;
else if ((iCentena==1) || (iCentena==5) || (iCentena==9))
	sTexto = centenaEnTexto(iCentena) + " " + sTexto;
```


En este caso solo hay el dilema del 1, 5 y 9. Así que un if y solucionado. El resto de las centenas las montamos con la unidad en texto más el texto "cientos". Así, finalmente, hemos dejado en sTexto el resultado de convertir un número a texto con [Java](https://www.manualweb.net/java/)

