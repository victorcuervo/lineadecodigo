---
title: "Borrar un fichero con Java"
description: "Código fuente explicado paso a paso para poder borrar un fichero con Java."
lastUpdated: 2025-12-19
slug: java/borrar-un-fichero-con-java
author: Víctor Cuervo
---

Borrar un fichero con [Java](https://www.manualweb.net/java/) es una actividad bastante sencilla, ya que mediante la clase [File](https://www.w3api.com/Java/File/exists/), la cual nos abstrae de la manipulación de ficheros, se nos ofrece un método para llevar a cabo tal cometido. Lo primero que deberemos de hacer es instanciar una clase [File](https://www.w3api.com/Java/File/exists/). Para instanciar esta clase deberemos de pasar al constructor el nombre del fichero sobre el que queremos trabajar.


```java
File fichero = new File("fichero.txt");
```


Para borrar el fichero deberemos de invocar el método [.delete()](https://www.w3api.com/Java/File/exists/.delete()) de la clase [File](https://www.w3api.com/Java/File/exists/). En caso de que se pueda realizar el borrado del fichero, dicho método devolverá true. En caso contrario devolverá false. Es por ello que deberemos de controlar su respuesta.


```java
if (fichero.delete())
   System.out.println("El fichero ha sido borrado satisfactoriamente");
else
   System.out.println("El fichero no puede ser borrado");
```

