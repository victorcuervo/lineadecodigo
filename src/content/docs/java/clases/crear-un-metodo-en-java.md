---
title: "Crear un método en Java"
description: "Artículo que nos explica cómo es la estructura para que podamos crear un método en Java que encapsule funcionalidades de nuestro código."
lastUpdated: 2025-12-20
slug: java/crear-un-metodo-en-java
author: victor_cuervo
---

En este artículo vamos a ver cómo podemos crear un método en [Java](https://www.manualweb.net/java/). Un método es una estructura del l[enguaje Java](https://lineadecodigo.com/categoria/java/) que nos sirve para encapsular cierta funcionalidad, la cual podemos llamar desde diferentes sitios y así no tener que repetir el código. Para la creación de un método en [Java](https://www.manualweb.net/java/) debemos conocer la estructura del mismo:


```java
tipo_acceso tipo_dinamico_o_no tipo_dato nombre_metodo(tipo_parametro parametro)
```


## Tipos de acceso a los métodos Java


Un método generalmente usa toda esa estructura, solo exceptuando la declaración de si es dinámico o estático. La primera parte de creación de un método se refiere al tipo de acceso que puede ser:

- **protected**, acceso protegido de datos
- **private**, acceso solo de modo interno de la clase
- **public**, acceso desde una instancia externa de la clase

## Métodos estáticos en Java


La segunda parte se refiere al uso del método [Java](https://www.manualweb.net/java/), si es estático, lo cual significa que el método sería accesible desde fuera de la clase sin necesidad de instanciar la clase.

- **static**, el acceso al método es estático.

El tipo de dato es dependiente de lo que se desea como resultado del método, como puede ser, por ejemplo, void si nuestro método no tiene salida alguna, o un tipo de dato específico como puede ser `double` o `int` si es una salida de tipo numérico.


## Notación para un método Java


Para poder crear un método en [Java](https://www.manualweb.net/java/) tenemos que tener en cuenta su notación. El nombre del método de preferencia debe ser escrito en notación _camelCase._ 


> La notación camelcase detalla que se debe usar en los métodos con nombres compuestos siempre la primera letra de cada palabra en mayúscula.


Para crear un método en [Java](https://www.manualweb.net/java/), no en todos los casos son necesarios argumentos, pero si deseamos usar algún argumento, cada argumento deberá tener su tipo de dato y nombre de argumento.


```java
public void miMetodo(int argumento1){
  //funcionamiento debe ser escrito aqui....
  return;
}
```


## Ejemplo para crear un método en Java


Bueno, ahora solo nos queda ver un ejemplo de cómo crear el método con [Java](https://www.manualweb.net/java/). Para ello vamos a definir un [método que nos sume dos números con Java](https://lineadecodigo.com/java/sumar-dos-numeros-con-java/). De esta forma, cada vez que queramos sumar dos números, nos bastará con llamar a este método.


```java
public static int sumarNumeros (int numero1, int numero2) {
  return numero1 + numero2;
}
```


En este método podemos ver que _el tipo de acceso es público. Cabe_ detallar que este tipo de método también es de acceso estático; por tanto, no necesitamos instanciar un objeto de la clase a la cual pertenece este método. También tomando en cuenta el tipo de dato a devolver del método, se puede decir que trabaja con entradas de tipo entero, tanto como salidas de tipo entero, tal como detalla su signatura.


Para poder ver cómo este ejemplo funcionaría en código, lo probamos:


```java
System.out.println("Programa de Suma de números iniciando");
//iniciamos sumando
int sumando1=4234;
System.out.println("Sumando 1: "+sumando1);
//iniciamos sumando 2
int sumando2=64782;
System.out.println("Sumando 2: "+sumando1);
// obtenemos el resultado de la suma de los dos sumandos
int resultado= sumarNumeros(sumando1, sumando2);
System.out.println("Resultado: "+resultado);
//fin de ejecucion
System.out.println("Programa de Suma de números finalizando");
```


Hasta aquí el ejemplo para aprender a crear un método en [Java](https://www.manualweb.net/java/).

