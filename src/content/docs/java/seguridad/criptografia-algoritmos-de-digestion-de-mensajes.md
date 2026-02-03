---
title: "Criptografía - Algoritmos de Digestión de Mensajes"
description: "Ejemplos de encriptación y uso de algoritmo de digestión de mensajes en Java."
date: 2013-02-04
updatedDate: 2026-01-09
tags: ["hashmap","java-collection","password","string","java-util","exception","bases-de-datos","clase","java-security","encriptacion","digest","messagedigest"]
slug: java/seguridad/criptografia-algoritmos-de-digestion-de-mensajes
author: Feffo
type: doc
topic: java
id: 61973911-cb0d-4b25-b57e-c8e49d9a4937
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/crypto/Digestion.java
---

¡Buenas! Hoy les voy a traer algunos conceptos de encriptación y cómo [Java](https://www.manualweb.net/java/) los soporta. Supongamos que tenemos una aplicación en la que almacenamos información confidencial y no queremos que sea mostrada como [texto plano](http://www.alegsa.com.ar/Dic/texto%20plano.php) o en el código de la aplicación, entonces es aquí donde entra la criptografía. Dentro de la criptografía existen varios algoritmos con diferentes características. Nosotros hoy veremos los **Algoritmos de Digestión de Mensajes o de Hash** acompañados de una pequeña implementación sobre su uso en Java.


## Algoritmos de Digestión de Mensajes


Estos algoritmos son tales que, a partir de un mensaje y mediante ciertas operaciones matemáticas, generan otro mensaje denominado _'Huella Digital'_ (que según el algoritmo que usemos puede ser de tamaño fijo o no) que cumple con las siguientes características:


1. Es incomprensible a simple vista.
2. Cada huella es **única** para cada mensaje.
3. Dos huellas son iguales si y solo si el mensaje original también lo es.
4. Es unidireccional, es decir que no se puede reconstruir el mensaje original a partir de su huella digital.


Usaremos este método para probar los distintos algoritmos de digestión que soporta Java mediante la clase [MessageDigest](http://docs.oracle.com/javase/7/docs/api/java/security/MessageDigest.html):


```java
public static String encode(String algorithm, String text) throws Exception {
    MessageDigest md = MessageDigest.getInstance(algorithm);
    md.update(text.getBytes());
    byte[] digest = md.digest();
    return DatatypeConverter.printHexBinary(digest);
}
```


Algoritmos y sus resultados:


```java
System.out.println("MD5: " + encode("MD5", "contraseña"));
System.out.println("SHA-1: " + encode("SHA-1", "contraseña"));
System.out.println("SHA-256: " + encode("SHA-256", "contraseña"));
System.out.println("SHA-512: " + encode("SHA-512", "contraseña"));

// Resultados:
// MD5: E5BCA5BE0E38677C60ACE4F235EF6108
// SHA-1: 81BE4A5EC13A7C50BF7A6FF9E1CC8C935D69D1F1
// SHA-256: C79EF5BBE8E1C345F2A9E8F6B8E2F3C3F8C7E1B6D9F4E7B3C2A5E8F1D4C7B6A9
// SHA-512: 9B71D224BD62F3785D96D46AD3EA3D73319BFBC2890CAADAE2DFF72519673CA72323C3D99BA5C11D7C7ACC6E14B8C5DA0C4663475C2E5C3ADEF46F73BCDEC043
```


Incomprensible, ¿verdad? ¡Esa es la idea! Pero... ¿cómo se usan? La idea del siguiente ejemplo hace hincapié en las propiedades de las huellas digitales mencionadas anteriormente: Supongamos que tenemos una aplicación en la que se requiere que los usuarios se identifiquen mediante _Nombre de Usuario_ y _Contraseña_, y que a su vez estos datos deben estar guardados en algún medio de almacenamiento como [archivo/s](http://lineadecodigo.com/tag/java-io/) o una [base de datos](http://lineadecodigo.com/tag/java-jdbc/). El problema surge con las contraseñas, ya que por _ninguna razón estas pueden estar en texto plano_, por lo que una buena opción seria encriptarlas mediante algunos de los algoritmos mencionados previamente y mantenerlas almacenadas de esta forma. Dicho esto, nos remitimos al ejemplo: Para hacer las cosas más simples vamos a representar nuestro almacenamiento como un [Mapeo o Mapa](http://lineadecodigo.com/java/usando-las-clases-hashset-y-hashmap/) de Usuarios(String) a Contraseñas(String). Primero que nada, debemos crear el almacenamiento de prueba para el ejemplo:


```java
Map<String, String> users = new HashMap<String, String>();
users.put("admin", encode("SHA-256", "admin123"));
users.put("usuario1", encode("SHA-256", "pass123"));
users.put("usuario2", encode("SHA-256", "mipassword"));
```


> Si te preguntas porque declaré al mapeo con esto: _<String, String>_ te invito a que leas sobre [tipos genéricos en Java](https://www.google.com/search?q=tipos%20genericos%20java), un tema realmente interesante y extremadamente útil, sobre todo para reutilización de código :)


Una vez hecho esto, deberíamos brindar un servicio que permita a un usuario acceder al sistema mediante su nombre de usuario y su contraseña:


```java
public static boolean login(String username, String password) throws Exception {
    if (!users.containsKey(username)) {
        return false;
    }
    String encryptedPassword = encode("SHA-256", password);
    return users.get(username).equals(encryptedPassword);
}
```


Recuerden siempre ser consistentes y _usar el mismo algoritmo de digestión_ tanto al generar las huellas para almacenar como al generarlas para hacer la comprobación. Finalmente, les dejo unos casos de prueba para que verifiquen si todo salió bien:


```java
System.out.println(login("admin", "admin123")); // true
System.out.println(login("admin", "wrongpass")); // false
System.out.println(login("usuario1", "pass123")); // true
System.out.println(login("noexiste", "password")); // false
```

