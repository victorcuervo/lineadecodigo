---
title: "Modificar valores de un fichero Properties"
description: "Ejemplo de cómo podemos modificar valores de un fichero Properties con un código Java."
date: 2007-12-23
updatedDate: 2026-01-11
tags: ["java-io","fileinputstream","properties","setproperty","getproperty"]
slug: java/properties/modificar-valores-de-un-fichero-properties
author: victor_cuervo
type: doc
topic: java
id: 9f555a93-90cb-4362-98a8-788ac55e8fed
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/util/properties/ModificarProperties.java
---

Los ficheros de propiedades nos sirven para guardar pares clave/valor que normalmente contienen información variable utilizada por nuestro programa. Estaríamos hablando de ficheros de configuración. Así, a bote pronto, se me ocurren cosas como URLs a las que acudir por información, datos sobre el usuario/password, números que representen límites de nuestras ejecuciones,...


Los ficheros de propiedades se cargan en los arranques de las aplicaciones y es en este momento cuando pasamos a tener un objeto Properties, el cual contendrá los pares clave/valor.


## Cargar un fichero de propiedades


Para realizar la carga de un fichero de propiedades haríamos lo siguiente:


```java
Properties propiedades = new Properties();
InputStream is = new FileInputStream("[datos.properties](http://datos.properties/)");
propiedades.load(is);
```


## Modificar valores con setProperty


Lo más normal es leer el contenido de los pares clave/valor, si bien, también podemos modificar el valor de las claves. Para modificar el valor de las claves simplemente tendremos que utilizar el método .setProperty sobre el objeto Properties.


```java
propiedades.setProperty("nombre","Víctor Cuervo");
propiedades.setProperty("email","[victor.cuervo@lineadecodigo.com](mailto:victor.cuervo@lineadecodigo.com)");
```


Los parámetros del método son la clave y el valor de la clave. Así, en nuestro código las claves son nombre y email.


> Es muy importante saber que al utilizar el método .setProperty no se modifica el valor que está almacenado en el fichero de propiedades.


## Listar las propiedades


Para ver la utilidad de los métodos podemos listar el valor de las claves antes y después de la modificación. El código final sería el siguiente:


```java
Properties propiedades = new Properties();
InputStream is = new FileInputStream("[datos.properties](http://datos.properties/)");
propiedades.load(is);

System.out.println("Nombre: " + propiedades.getProperty("nombre"));
System.out.println("Email: " + propiedades.getProperty("email"));

propiedades.setProperty("nombre","Víctor Cuervo");
propiedades.setProperty("email","[victor.cuervo@lineadecodigo.com](mailto:victor.cuervo@lineadecodigo.com)");

System.out.println("Nombre: " + propiedades.getProperty("nombre"));
System.out.println("Email: " + propiedades.getProperty("email"));
```

