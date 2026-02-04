---
title: "Tipos primitivos de datos en Java"
description: "Código fuente que nos ayuda a mostrar los valores por defecto de los tipos primitivos de datos en Java."
date: 2015-02-02
updatedDate: 2026-01-09
tags: ["variables","char","byte","short","long","double","int","float"]
slug: java/variables/tipos-primitivos-de-datos-en-java
type: doc
topic: java
id: b43b4bbd-0b0e-4d3d-a8af-149d41a703f8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/variables/ValoresPorDefecto.java
---

En este ejemplo vamos a ver los tipos primitivos de datos en [Java](https://www.manualweb.net/java/) que existen y cuales son sus valores por defecto.


## Tipos primitivos de datos en Java


Los **tipos primitivos de datos en** [**Java**](https://www.manualweb.net/java/) que hay son: - **boolean**, para valores true|false.

- **char**, para representar un simple carácter.
- **byte**, un tipo de dato entero de 8 bits con signo.
- **short**, un tipo de dato entero de 16 bits con signo.
- **int**, un tipo de dato entero de 32 bits con signo.
- **long**, un tipo de dato entero de 32 bits con signo.
- **float**, un tipo de dato en coma flotante de 32 bits.
- **double**, un tipo de dato en coma flotante de 64 bits.

## Valores por defecto de los tipos primitivos


Y si miramos la documentación de los tipos primitivos de datos en [Java](https://www.manualweb.net/java/) veremos que **sus valores por defecto** son los siguientes:


| **Tipo** | **Valor por Defecto** |
| -------- | --------------------- |
| boolean  | false                 |
| char     | '\u0000'              |
| byte     | 0                     |
| short    | 0                     |
| int      | 0                     |
| long     | 0L                    |
| float    | 0.0f                  |
| double   | 0.0d                  |

undefined
Pero, ¿cómo podemos, mediante código fuente, saber los valores por defecto de los tipos primitivos de datos en [Java](https://www.manualweb.net/java/)? De primeras se nos podría ocurrir la siguiente idea:


```java
int entero;
System.out.println(entero);
```


Pero ese código no podremos compilarlo, ya que el compilador nos dirá que entero no está inicializado. Este pequeño inconveniente lo podemos solventar si metemos los tipos primitivos en una clase.


```java
public class ValoresPorDefecto {
  boolean t;
  char c;
  byte b;
  short s;
  int i;
  long l;
  float f;
  double d;
}
```


En esa clase creamos un método que realice una impresión por pantalla.


```java
void imprimirValoresIniciales() {
  System.out.print("Tipo Variable\tValor Inicial");
  System.out.print("boolean\t\t" + t);
  System.out.print("char\t\t[" + c + "]");
  System.out.print("byte\t\t" + b);
  System.out.print("short\t\t" + s);
  System.out.print("int\t\t" + i);
  System.out.print("long\t\t" + l);
  System.out.print("float\t\t" + f);
  System.out.print("double\t\t" + d);
}
```


Ya solo nos quedará invocar al método para conseguir que se muestren por pantalla los valores por defecto de los tipos de datos primitivos en [Java](https://www.manualweb.net/java/).


```java
ValoresPorDefecto vpf = new ValoresPorDefecto();
vpf.imprimirValoresIniciales();
```

