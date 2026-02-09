---
title: "Patrón Abstract Factory"
description: "Aprende el patrón Abstract Factory en Java. Descubre cómo crear familias de objetos relacionados mediante interfaces sin especificar clases concretas."
date: 2013-03-19
updatedDate: 2026-02-09
tags: ["abstract-factory","patron"]
slug: java/patrones/patron-abstract-factory
type: doc
topic: java
id: e6b93e43-ca7e-46f9-a8a5-d6ee516d665e
author: Feffo
download: https://github.com/victorcuervo/lineadecodigo_java/tree/master/src/com/lineadecodigo/java/patrones/abstractfactory
---

Hoy les voy a presentar el **Patrón Abstract Factory** junto con un ejemplo simple hecho en [Java](https://www.manualweb.net/java/). Esto se enmarca dentro de la serie de [Patrones de Diseño](http://lineadecodigo.com/categoria/patrones/) sobre la que vamos air hablando.


## ¿Qué es el Patrón Abstract Factory?


El patrón Abstract Factory nos permite crear, mediante una interfaz, conjuntos o familias de objetos (denominados productos) que dependen mutuamente y todo esto sin especificar cual es el objeto concreto.


## ¿Qué usos tiene el patrón Abstract Factory?


Este patrón se puede aplicar cuando:

- Un sistema debe ser independiente de como sus objetos son creados
- Un sistema debe ser 'configurado' con una cierta familia de productos
- Se necesita reforzar la noción de dependencia mutua entre ciertos objetos

## Estructura del Patrón Abstract Factory


> El asterisco (*) representa que la clase/operación es abstracta.


## Elementos del Patrón Abstract Factory

- **FabricaAbstracta***: Define un conjunto de métodos (interfaz) para la creación de productos abstractos
- **FabricaConcreta1/2**: Implementa la interfaz de la FabricaAbstracta para la creación de los distintos productos concretos
- **ProductoAbstractoA*/B***: Define la interfaz de los objetos de tipo ProductoA/B
- **ProductoConcretoA1/A2/B1/B2**: Implementan su respectiva interfaz representando un producto concreto

## Ejemplo del Patrón Abstract Factory


Teniendo en cuenta la siguiente jerarquía de clases, la cual trata de representar muy por arriba dos familias de productos (DVD y BluRay) cada uno con un par de variantes (simple y doble capa) para que permiten mostrar diferentes aspectos a tener en cuenta a la hora de usar este patrón.


Vemos como sería el producto abstracto:


```java
public abstract class Disco implements Prototipo {
    @Override
    public abstract Prototipo clone();

    public abstract String getCapacidad();

    public abstract String getNombre();

    public abstract String getPrecio();

    @Override
    public String toString() {
            return getNombre() + " (" + getCapacidad() + ")";
    }
}
```


El producto DVD extendemos del Disco


```java
public abstract class DVD extends Disco {
...
}
```


Y el producto concreto del DVD extenderá de la anterior clase:


```java
public class DVD_CapaSimple extends DVD {

    @Override
    public Prototipo clone() {
            return new DVD_CapaSimple();
    }

    @Override
    public String getCapacidad() {
            return "4.7GB";
    }

    @Override
    public String getNombre() {
            return "DVD Capa Simple";
    }

    @Override
    public String getPrecio() {
            return "5.00$";
    }

}
```


## Crear la factoría abstracta


Vamos a construir un AbstractFactory que nos permita crear discos de DVD o BluRay de simple y doble capa usando el siguiente diseño.


La factoría abstracta la definiríamos mediante un interface:


```java
public interface FabricaDiscos {

        public BluRay crearBluRay();
        public DVD crearDVD();
}
```


Y sobre ese interface implementamos una de las fábricas concretas, en este caso la de FabricaDiscos_CapaSimple:


```java
public class FabricaDiscos_CapaSimple implements FabricaDiscos {

       @Override
       public BluRay crearBluRay() {
               return new BluRay_CapaSimple();
       }

       @Override
       public DVD crearDVD() {
               return new DVD_CapaSimple();
       }

}
```


## Utilizar el patrón Abstract Factory


Veamos como quedaría el código fuente en [Java](https://www.manualweb.net/java/) para utilizar el patrón Abstract Factory:


```java
FabricaDiscos fabrica;
DVD dvd;
BluRay bluray;

fabrica = new FabricaDiscos_CapaSimple();
dvd = fabrica.crearDVD();
bluray = fabrica.crearBluRay();

System.out.println(dvd);
System.out.println(bluray);

fabrica = new FabricaDiscos_CapaDoble();
dvd = fabrica.crearDVD();
bluray = fabrica.crearBluRay();

System.out.println(dvd);
System.out.println(bluray);
```


En el código vemos que sobre la fábrica podemos crear objetos de diferentes tipos y que podríamos ir creciendo en productos atendiendo a nuestras necesidades.


```java
fabrica = new FabricaDiscos_CapaSimple();
dvd = fabrica.crearDVD();
bluray = fabrica.crearBluRay();
```


Espero que hayáis podido apreciar la flexibilidad que nos brinda el patrón Abstract Factory.

