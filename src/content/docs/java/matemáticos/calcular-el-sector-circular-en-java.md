---
title: "Calcular el sector circular en Java"
description: "Ejemplo explicado paso a paso que no explica como calcular el sector circular en Java."
date: 2013-09-03
updatedDate: 2026-01-11
tags: ["class","scanner","math"]
slug: java/matematicos/calcular-el-sector-circular-en-java
author: ARIEL
type: doc
id: 2c8a9dfb-adca-8191-899d-fbc716f11389
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/math/CalcularSectorCircular.java
---

**Sector circular**, es la relación que existe entre el arco, el radio y el ángulo central de una circunferencia.


## ¿Qué necesito para calcular el sector circular en Java?

1. conocer el valor de radio de la circunferencia
2. la longitud del arco
3. el valor del ángulo central

Para obtener el valor del _**ángulo central**_ se emplea la siguiente fórmula trigonométrica:


```text
ang_central= arco / radio
```


Para obtener el valor del sector circular se emplea esta otra fórmula trigonométrica:


```text
sector_circular= (radio*radio) * ang_central / 2
```


Creamos una clase [Java](https://www.manualweb.net/java/) llamada "Sector.java".


```text
class Sector{
   private double radio;
   private double arco;
   //...
}
```


Podemos definir un constructor y los métodos GET.


```text
class Sector{
   //...

   public Sector(double radio,double arco){
    this.radio=radio;
    this.arco=arco;
  }

  public double getRadio(){
    return radio;
  }

  public double getArco(){
    return arco;
  }

}
```


Definimos los métodos para obtener el ángulo central y el sector circular:


```text
class Sector{
 //...

 public double calculaAngulo(){
    return arco/radio;
  }

 public double calculaSector(){
    return ((radio*radio)*calculaAngulo())/2;
  }

}
```


Lo que sigue es crear un método [Java](https://www.manualweb.net/java/) que sirva para mostrar los datos calculados:


```text
class Sector{
 //...

 @Override
  public String toString(){
    return "Sector{radio: "+getRadio()+ ",arco:"+getArco()+", sector circular obtenido: "+calculaSector()+"}";
  }

 //este es el método que muestra los datos calculados
  public void ver(){
    System.out.print(toString());
  }

}
```


La clase [Java](https://www.manualweb.net/java/) principal tiene el siguiente aspecto:


```text
public class Principal{
   public static void main(String[] args)throws Exception{
     
   }
}
```


Usaremos la clase [Scanner](https://www.w3api.com/Java/Scanner/next/) para introducir los datos que se solicitan.


```text
import java.util.Scanner;
public class Principal{
   public static void main(String[] args)throws Exception{
     Scanner in = new Scanner(System.in);
   }
}
```


Instanciamos la clase Sector.


```text
import java.util.Scanner;

public class Ejemplos{
  public static void main(String[] args) {
    Scanner in=new Scanner(System.in);
    Sector sector=null;
      }
}
```


Definimos dos variables: radio y longitud del arco


```text
//...
Scanner in=new Scanner(System.in);
Sector sector=null;
double r=0.0, l=0.0;
```


Solicitamos los datos al usuario.


```text
System.out.print("Introduce el valor del radio: ");
r=in.nextDouble();
System.out.print("Introduce la longitud del arco: ");
l=in.nextDouble();
```


Invocamos el constructor de la clase Sector y mostramos el resultado.


```text
sector=new Sector(r,l);
sector.ver();
```


**Ejemplo.** Si el valor del radio es de 5.5m y la longitud del arco es de 16.20m obtenemos un sector circular de 44.55m cuadrados:


```text

Introduce el valor del radio: 5.5
Introduce la longitud del arco: 16.20
Sector{radio: 5.5,arco:16.2, sector circular obtenido: 44.55}
```

