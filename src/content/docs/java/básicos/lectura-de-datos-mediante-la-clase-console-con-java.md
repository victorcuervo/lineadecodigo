---
title: "Lectura de datos mediante la clase Console con Java"
description: "Ejemplo que nos explica el código para la Lectura de datos mediante la clase Console con Java."
date: 2013-01-13
updatedDate: 2026-01-09
tags: ["console","readline","java-system"]
slug: java/basicos/lectura-de-datos-mediante-la-clase-console-con-java
author: xhrist14n
type: doc
id: 34a9ca5f-51be-4ea5-9483-3d5b49f15db6
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/basico/LecturaDatosConConsole.java
---

Para la lectura de datos mediante la clase Console con [Java](https://www.manualweb.net/java/) utilizando la clase Console necesitamos en primera instancia obtener la consola que es una instancia única que sigue el patrón de diseño Singleton. Esto lo logramos de la siguiente manera:


```java
Console console=null;
try{
  console=System.console();
} catch(Exception ex){}
```


Cuando obtenemos la instancia principal de consola podemos hacer uso de las funciones de input de datos por teclado como son: [readLine()](https://www.w3api.com/Java/Console/readLine/) y [readPassword()](https://www.w3api.com/Java/Console/readPassword/), ambas funcionan en base a consola de usuario si hacemos uso de algún IDE quizas no nos funcione tan bien este ejemplo. Para proceder a lectura de datos de consola tenemos que usar la funcion [readLine()](https://www.w3api.com/Java/Console/readLine/) que hace la lectura de una linea desde teclado.


```java
String answer="";
if(console!=null){
  try{
    answer=console.readLine();
  }catch(Exception ex){}
}
```


En el código comprobamos si la variable console se ha instanciado, ya que si el entorno dónde ejecutamos el programa no tiene consola, la variable console tendrá un valor de null. Y nuestro código de lectura de datos desde teclado quedaría así:


```java
public static String readLine(){
  String answer="";
  Console console=null;
  try{
    console=System.console();
  }catch(Exception ex){}
			
  if(console!=null){
    try{
      answer=console.readLine();
    }catch(Exception ex){}
  }
  return answer;
}
```


Bueno ahora solo nos queda ver como funciona en código [Java](https://www.manualweb.net/java/) invocando al método que hemos creado:


```java
String answer = "";
answer=DataReaderConsole.readLine();
System.out.println(answer);
```


Como podéis ver ha sido sencillo la lectura de datos mediante la clase Console con [Java](https://www.manualweb.net/java/)

