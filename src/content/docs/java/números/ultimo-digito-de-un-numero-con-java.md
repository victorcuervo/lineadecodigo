---
title: "Último dígito de un número con Java"
description: "Código fuente que nos permite obtener el último dígito de un número con Java explicado paso a paso."
date: 2009-01-11
updatedDate: 2026-01-11
tags: ["scanner","int","modulo","operadores","nextint","println"]
slug: java/numeros/ultimo-digito-de-un-numero-con-java
author: victor_cuervo
type: doc
topic: java
id: fd1b0049-3dcf-42fd-bbe7-09fd5d916d51
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/ObtenerUltimoDigitoDeUnNumero.java
---

## Descripción del problema


Lo primero que haremos en el ejemplo de como obtener el último dígito de un número con [Java](https://www.manualweb.net/java/) será pedirle al usuario que introduzca un número por pantalla.


```java
Scanner sc = new Scanner([System.in](http://system.in/));
System.out.println("Introduce un número:");
int numero = sc.nextInt();
```


Nos ayudamos de la clase [Scanner](https://www.w3api.com/Java/Scanner/next/) para acabar almacenando en una variable de tipo **int** el número introducido por el usuario.


## Obtener el último dígito


Para obtener el último dígito del número introducido ejecutaremos el módulo de 10. Para poder ejecutar el módulo utilizaremos el operador **%**.


```java
int ultimoDigito = numero % 10;
```


El módulo nos devuelve el resto de la operación. Y el resto de dividir un número entre 10 es el último dígito del número.


## Mostrar el resultado


Solo quedará mostrar nuestro resultado por pantalla.


```java
System.out.println("El último dígito del número " + numero + " es: " + ultimoDigito);
```

