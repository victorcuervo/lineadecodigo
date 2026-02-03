---
title: "Personalizar IOException"
description: "Personalizar IOException explica el procedimiento para poder capturar y modificar el mensaje de una una IOException y mostrarlo en consola."
date: 2022-05-11
updatedDate: 2026-01-08
tags: ["try-catch","ioexception","exception"]
slug: java/excepciones/personalizar-ioexception
author: victor_cuervo
type: doc
topic: java
id: 43fe6632-f43f-44cf-9fbb-7d1226b5bdb4
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/io/PersonalizarIOException.java
---

Cuando trabajamos con entradas y salidas de datos es muy probable que nos encontremos con más de una [`IOException`](https://w3api.com/Java/IOException/). En estos casos, puede ser que la información proporcionada por el "stack trace" de la Excepción no nos de la información sobre el punto de manipulación en el cual se ha producido dicha excepción. Es por ello que vamos a ver en este artículo cómo personalizar IOException. [`IOException`](https://w3api.com/Java/IOException/) es una excepción que se produce cuando estamos manipulando la entrada/salida de datos, ya sea por leerlos en consola, cuando accedemos a un fichero,... En estos casos siempre estaremos obligados a controlar la posibilidad de que se produzca la [`IOException`](https://w3api.com/Java/IOException/). Para ello utilizaremos el [bloque try-catch](https://lineadecodigo.com/tag/java-trycatch/). Por ejemplo escribiremos el siguiente código para controlar la [`IOException`](https://w3api.com/Java/IOException/) en una lectura de datos por consola.


```text
BufferedReader br;
br = new BufferedReader(new InputStreamReader(System.in));
String texto;

try{ 
  br.readLine());
} catch (IOException ioe){ 
  ioe.printStackTrace();
}
```


Vemos que en el caso de que se produzca la [`IOException`](https://w3api.com/Java/IOException/) lo que hemos hecho es invocar al método [`.printStackTrace()`](https://w3api.com/Java/Throwable/printStackTrace) para volcar la traza de ejecución de la manipulación de datos, lo que nos ayudará a encontrar la línea en la que se produjo la excepción. En este punto vamos a ver cómo podemos personalizar IOException para añadir algo más de información. Es cierto que podríamos crear una excepción personalizada que extendiese la [`IOException`](https://w3api.com/Java/IOException/).


```text
public class MiExcepcion extends IOException { ... }
```


Si bien, si no queremos manipular mucha información extra, quizás nos sea más sencillo personalizar IOException para añadir la información que necesitemos. Para ello lo que haremos será, cuando se produzca la [`IOException`](https://w3api.com/Java/IOException/) la relanzaremos mediante la sentencia `throw`.


```java
try {
 ...
} catch(IOException ioe){
  throw new IOException("Error en la lectura del fichero",ioe);
} 
```


Vemos que lo que hacemos es crear una nueva excepción [`IOException`](https://w3api.com/Java/IOException/), pero en este caso le añadimos un mensaje con la información personalizada que queramos y la propia excepción. Es por ello que tendremos que volver a controlarla en el método en el que la estemos utilizando. En este caso mediante la sentencia `throws`. Veamos cómo sería en el caso de querer leer las líneas de un fichero: 


```java
public static long numeroLineas(String fichero) throws IOException {

  long lNumeroLineas = 0;

  try{
    FileReader file = new FileReader(fichero);
    BufferedReader bf = new BufferedReader(file);
      
    while ((bf.readLine())!=null) {
      lNumeroLineas++;
    }
      
    bf.close();

  } catch(IOException ioe) { 
    throw new IOException("Error en la lectura del fichero",ioe);
  }        

  return lNumeroLineas;
}
```


Lógicamente el punto en el que llamemos a este método tendremos que volver a capturar la [`IOException`](https://w3api.com/Java/IOException/). En ese punto podemos invocar al método [`.getMessage()`](https://w3api.com/Java/Throwable/getMessage) para poder recuperar el texto con el que hemos personalizado la excepción. 


```java
public static void main(String[] args) {

  String fichero = "datos.txt";
  try {
    numeroLineas(fichero);
  } catch (IOException ioe) {
    System.out.println(ioe.getMessage());
    ioe.printStackTrace();
  }

}
```


De esta forma sencilla podremos tener una pequeña forma de personalizar IOException y añadir un mensaje adicional de información.

