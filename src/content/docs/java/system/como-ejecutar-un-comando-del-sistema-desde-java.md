---
title: "Como ejecutar un comando del sistema desde Java"
description: "Como ejecutar un comando del sistema desde Java y leer la respuesta devuelta por dicho comando."
date: 2012-04-09
updatedDate: 2026-01-11
tags: ["java-io","inputstream","process","runtime","exec"]
slug: java/system/como-ejecutar-un-comando-del-sistema-desde-java
author: Feffo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/system/EjecutarUnComando.java
topic: java

---

Hoy les traigo una forma de poder ejecutar un comando de consola en [Java](https://www.manualweb.net/java/). La clave para ejecutar un comando en [Java](https://www.manualweb.net/java/) está en los métodos [exec(String command)](https://w3api.com/Java/Runtime-java-lang/exec/) y [exec(String[] cmdarray)](https://w3api.com/Java/Runtime-java-lang/exec/).


## Métodos exec()


La diferencia entre estos dos métodos [Java](https://www.manualweb.net/java/) es que el primero está destinado a ejecutar comandos sin argumentos:


```java
Runtime.getRuntime().exec("dir");
```


Y el segundo sí, solo que deben poner cada palabra en un índice distinto en el arreglo [Java](https://www.manualweb.net/java/):


```java
String[] cmd = {"ping", "[google.com](http://google.com/)"};
Runtime.getRuntime().exec(cmd);
```


> 💡 Recordar que el comando se va a ejecutar en un proceso [Java](https://www.manualweb.net/java/) aparte.


## Obtener la Respuesta del Comando


Otra cosa a tener en cuenta es el retorno que brindan estos métodos. Para ello tenemos el objeto de tipo `Process`. La clase `Process` posee algunos métodos interesantes, en especial el método [public abstract InputStream getInputStream()](https://www.w3api.com/Java/Process/getInputStream/), ya que con él podemos obtener un `Stream` para poder leer lo que el comando que ejecutamos escribió en la consola.


```java
Process p = Runtime.getRuntime().exec("dir");
InputStream in = p.getInputStream();
BufferedReader br = new BufferedReader(new InputStreamReader(in));
String linea;
while ((linea = br.readLine()) != null) {
    System.out.println(linea);
}
```


## Resultado


En mi caso, obtuve el siguiente texto al leer las líneas del buffer:


```shell
El volumen de la unidad C es OS
El número de serie del volumen es: 123A-45B6

```


```shell

Directorio de C:\Users\Feffo\Desktop

09/04/2012  06:00 AM    <DIR>          .
09/04/2012  06:00 AM    <DIR>          ..
               0 archivos              0 bytes
               2 dirs  10,485,760,000 bytes libres
```


Espero que les haya gustado el artículo.

