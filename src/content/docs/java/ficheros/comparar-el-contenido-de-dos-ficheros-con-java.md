---
title: "Comparar el contenido de dos ficheros con Java"
description: "Aprende a comparar dos ficheros de texto con Java línea a línea, controla excepciones y descubre cuándo usar Files.mismatch() para detectar diferencias exactas."
date: 2010-07-30
updatedDate: 2026-10-31
tags: ["bufferedreader","filereader","ioexception","try-catch"]
slug: java/ficheros/comparar-el-contenido-de-dos-ficheros-con-java
type: doc
topic: java
id: a0c9d120-2da9-4bf3-8890-c85a696a8347
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/file/CompararFicheros.java
---

En este ejemplo vamos a ver cómo comparar el contenido de dos ficheros de texto con [Java](https://lineadecodigo.com/java/) y comprobar si es igual o diferente. La comparación se realiza línea a línea mediante las clases `FileReader` y `BufferedReader`, que permiten leer el contenido de los ficheros de forma secuencial.


## Cómo leer los ficheros


Lo primero será crear un objeto de tipo [`FileReader`](http://w3api.com/wiki/Java:FileReader). Esta clase nos ayuda a acceder al contenido de los ficheros, conjuntamente con un [`BufferedReader`](http://w3api.com/wiki/Java:BufferedReader). De esta forma, crear un flujo de un fichero hacia un `BufferedReader` se puede hacer con el siguiente código:


```java
FileReader fr1 = new FileReader("fichero1.txt");
BufferedReader bf1 = new BufferedReader(fr1);
```


Como tenemos dos ficheros, repetimos la misma operación para el segundo fichero:


```java
FileReader fr1 = new FileReader("fichero1.txt");
FileReader fr2 = new FileReader("fichero2.txt");

BufferedReader bf1 = new BufferedReader(fr1);
BufferedReader bf2 = new BufferedReader(fr2);
```


`FileReader` utiliza la codificación predeterminada de la plataforma. En código nuevo conviene especificar la codificación de los ficheros, como se muestra en la versión completa del ejemplo, para que el resultado no dependa del sistema donde se ejecute el programa.


## Comparar el contenido línea a línea


Ahora que tenemos dos objetos `BufferedReader`, será sencillo ir leyendo el contenido de los ficheros. Solo tendremos que llamar al método [`readLine()`](http://w3api.com/wiki/Java:BufferedReader.readLine()) hasta llegar al final. El método devuelve `null` cuando no quedan más líneas.


Primero leemos una línea de cada fichero y utilizamos la variable `iguales` como bandera. El bucle continúa mientras ambos lectores tengan contenido y no se haya encontrado ninguna diferencia:


```java
sCadena1 = bf1.readLine();
sCadena2 = bf2.readLine();

while ((sCadena1 != null) && (sCadena2 != null) && iguales) {
    // ...
}
```


Dentro del bucle comparamos las líneas almacenadas en las cadenas. Si las líneas son iguales, asumimos que los ficheros siguen siendo iguales, leemos las siguientes líneas y volvemos a iterar. Si no son iguales, cambiamos el valor de `iguales` a `false` para salir del bucle:


```java
sCadena1 = bf1.readLine();
sCadena2 = bf2.readLine();

while ((sCadena1 != null) && (sCadena2 != null) && iguales) {
    if (!sCadena1.equals(sCadena2)) {
        iguales = false;
    }

    sCadena1 = bf1.readLine();
    sCadena2 = bf2.readLine();
}
```


Una vez que hemos salido del bucle, los ficheros solo son iguales si la bandera sigue siendo `true` y hemos llegado al final de ambos lectores. Por eso es necesario comprobar que las dos variables de lectura contienen `null`. Si solo uno de los ficheros ha llegado al final, tienen distinta longitud y deben considerarse diferentes:


```java
if (iguales && sCadena1 == null && sCadena2 == null) {
    System.out.println("Los ficheros son iguales");
} else {
    System.out.println("Los ficheros son diferentes");
}
```


## Ejemplo completo con cierre automático


En el código original es necesario controlar las excepciones `FileNotFoundException`, si alguno de los ficheros no existe, e `IOException`, si se produce un problema durante la lectura. `FileNotFoundException` es una subclase de `IOException`, por lo que un `catch` para `IOException` puede cubrir ambos casos.


También es importante cerrar los lectores. La estructura `try-with-resources` los cierra automáticamente, incluso cuando se produce una excepción. Este ejemplo utiliza `Files.newBufferedReader()` y `StandardCharsets.UTF_8` para declarar explícitamente la codificación:


```java
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class CompararFicheros {
    public static void main(String[] args) {
        Path fichero1 = Paths.get("fichero1.txt");
        Path fichero2 = Paths.get("fichero2.txt");
        boolean iguales;

        try (BufferedReader bf1 = Files.newBufferedReader(fichero1, StandardCharsets.UTF_8);
             BufferedReader bf2 = Files.newBufferedReader(fichero2, StandardCharsets.UTF_8)) {

            String sCadena1 = bf1.readLine();
            String sCadena2 = bf2.readLine();
            iguales = true;

            while (sCadena1 != null && sCadena2 != null && iguales) {
                if (!sCadena1.equals(sCadena2)) {
                    iguales = false;
                }

                sCadena1 = bf1.readLine();
                sCadena2 = bf2.readLine();
            }

            iguales = iguales && sCadena1 == null && sCadena2 == null;
        } catch (IOException e) {
            System.err.println("No se pudieron leer los ficheros: " + e.getMessage());
            return;
        }

        System.out.println(iguales ? "Los ficheros son iguales" : "Los ficheros son diferentes");
    }
}
```


Si los dos ficheros contienen las mismas líneas en el mismo orden, el programa muestra `Los ficheros son iguales`. Si encuentra una línea distinta, si uno tiene más líneas que el otro o si no puede leer alguno de ellos, informa de la situación correspondiente.


## Comparación exacta de bytes


La lectura con `readLine()` compara el texto línea a línea: no distingue los finales de línea `\\n` y `\\r\\n`, y tampoco permite detectar diferencias que solo estén en la codificación o en otros bytes del fichero. Cuando se necesita saber si dos ficheros son idénticos byte a byte, Java ofrece `Files.mismatch()` desde Java 12:


```java
long posicionDiferente = Files.mismatch(
    Paths.get("fichero1.txt"),
    Paths.get("fichero2.txt")
);

if (posicionDiferente == -1) {
    System.out.println("Los ficheros son idénticos byte a byte");
} else {
    System.out.println("La primera diferencia está en el byte " + posicionDiferente);
}
```


`Files.mismatch()` devuelve `-1` cuando ambos ficheros tienen exactamente el mismo contenido y, en caso contrario, devuelve la posición del primer byte diferente. Esta alternativa es adecuada para una comparación exacta, mientras que `readLine()` resulta más apropiado cuando interesa comparar el texto sin tener en cuenta los separadores de línea.

