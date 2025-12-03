---
title: Crear un fichero en Java
description: "Pasos que hay que dar para poder crear un fichero en Java. Código explicado de una forma sencilla. Uso de la clase File."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Si queremos crear un fichero en [Java,](https://www.manualweb.net/ava/) nos tenemos que apoyar en la clase [`File`](https://www.w3api.com/Java/File/) de la librería [`Java IO,`](https://www.w3api.com/Java/tag/java.io/) la cual nos proporciona un método [`createNewFile()`](https://www.w3api.com/Java/File/createNewFile/) que generará el fichero en el path que le indiquemos.


### Validar si existe el directorio base


Lo primero que tenemos que tener en cuenta es que el directorio donde queremos crear un fichero en [Java](https://www.manualweb.net/ava/) debe de existir. Es por ello que definiremos nuestro fichero con un paht incluido.


Por ejemplo, en el caso de que creemos un fichero indicando el siguiente path:


```java
c:\temp\lineadecodigo\fichero.text
```


Los directorios temporal y lineadecodigo deben de existir en el sistema


Una vez que hemos validado que el directorio existe pasamos a instanciar el objeto [`File`](https://www.w3api.com/Java/File/). Si revisamos los constructores del objeto [`File`](https://www.w3api.com/Java/File/) vemos que tenemos diferentes altenativas.


```java
public File(File parent, String child)
public File(String pathname)
public File(URI uri)
```


Por lo tanto podemos instanciar el objeto [`File`](https://www.w3api.com/Java/File/) de la siguiente forma, pasando la cadena con el path y el fichero juntos


```java
File fichero = new File ("c:\\temp\\lineadecodigo\\fichero.txt");
```


O bien indicando el directorio y el fichero por separado:


```java
File fichero = new File ("c:\\temp\\lineadecodigo","fichero.txt");
```


Debemos de tener cuidado en utilizar la doble barra (`\\`) para indicar el directorio, ya que cuando utilizamos la barra sola se asume que es una s**ecuencia de escape** del estilo salto de línea `\n`, o tabulador `\t`.


### Crear un fichero en Java con createNewFile.


Una vez creado el fichero, simplemente bastará con invocar el método [`createNewFile()`](https://www.w3api.com/Java/File/createNewFile/). En el caso de que el método [`createNewFile()`](https://www.w3api.com/Java/File/createNewFile/) funcione correctamente y cree el fichero se devolverá el valor `true` y en el caso de no haber sido creado devuelve un valor `false`.


Es por ello que nos apoyamos en una [estructura de decisión ](https://manualweb.net/java/sentencias-decision-java/)[`if`](https://manualweb.net/java/sentencias-decision-java/)[.](https://manualweb.net/java/sentencias-decision-java/)


```java

if (fichero.createNewFile())
  System.out.println("El fichero se ha creado correctamente");
else
  System.out.println("No ha podido ser creado el fichero");
```


### Gestionando la excepción IOException


Pero este código no es suficiente solo, ya que el método [`createNewFile()`](https://www.w3api.com/Java/File/createNewFile/) puede lanzar una excepción [`IOException`](https://www.w3api.com/Java/IOException/), así que debemos de capturarla mediante una estructura `try-catch`.


De esta manera el [código en Java](https://lineadecodigo.com/categoria/java/) que tendríamos que codificar sería el siguiente:


```java
try {
  if (fichero.createNewFile())
    System.out.println("El fichero se ha creado correctamente");
  else
    System.out.println("No ha podido ser creado el fichero");
} catch (IOException ioe) {
  ioe.printStackTrace();
}
```


De esta manera ya tendremos el código completo que nos permite crear un fichero en [Java](https://www.manualweb.net/ava/).

