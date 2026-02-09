---
title: "Patrones"
description: "Descubre los patrones creacionales de diseño en Java. Aprende Abstract Factory, Builder, Factory Method, Prototype y Singleton para crear objetos de forma eficiente."
date: 2013-03-18
updatedDate: 2026-02-09
tags: []
slug: java/patrones
type: category
topic: java
id: 0a5b0a85-0586-4615-ac0b-782311ead310
author: Feffo
---

A lo largo de los próximos días vamos a revisar en [Línea de Código](http://lineadecodigo.com/) diferentes **Patrones de Diseño**. Algo muy importante y que todo desarrollador debería conocer. En el primer ciclo vamos a revisar los **Patrones Creacionales**.


## ¿Qué es un Patrón de Diseño?


Un patrón de diseño es un conjunto de objetos y clases organizados de cierta forma que ayudan a resolver un problema recurrente en el diseño de un software de una forma limpia y reusable. Según el libro [Design Patterns: Elements of Reusable Object-Oriented Software](http://en.wikipedia.org/wiki/Design_Patterns), a los patrones se los puede clasificar en tres categorías:

- **Patrones Creacionales**: Procuran independizar al sistema de como sus objetos son creados y/o representados
- **Patrones Estructurales**: Se refieren a como las clases y los objetos son organizados para conformar estructuras más complejas
- **Patrones de Comportamiento**: Se centran en los algoritmos y en la asignación de responsabilidades entre los objetos

## Patrones Creacionales


En este caso, nos vamos a concentrar en los patrones creacionales. **Estos patrones buscan en cierta forma "despreocupar" al sistema de como sus objetos son creados o compuestos.**


Los patrones que iremos viendo y desarrollando las próximas semanas son:

- **Abstract Factory**: Permite trabajar con objetos de diferentes familias de manera que no se mezclen entre sí. De esa manera se consigue que el tipo de familia que se esté utilizando sea transparente
- **Builder**: Abstrae el proceso de creación de los objetos complejos, centralizándolo en un punto
- **Factory Method**: Centraliza en una clase constructora la creación de objetos de un tipo determinado. Ocultando al invocante la necesidad de indicar un tipo u otro
- **Prototype**: Crea un objeto a partir de la clonación de un objeto ya existente
- **Singleton**: Garantiza que solo exista una instancia de un objeto y que la forma de acceder a dicha instancia sea general
