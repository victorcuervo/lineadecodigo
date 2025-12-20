---
title: "Variables Java transient"
description: "Las variables Java transient evitan la serialización de datos sensibles, como contraseñas, durante el proceso de serialización de objetos."
lastUpdated: 2025-12-20
slug: java/variables-java-transient
author: victor_cuervo
---

Uno de los modificadores que podemos aplicar a una **variable** [**Java**](https://www.manualweb.net/java/) **es el transient. Las variables** [**Java**](https://www.manualweb.net/java/) **transient** sirven para demarcar el carácter temporal o transitorio de dicha variable, es decir, que no siempre se tendrá acceso al valor de la variable. Pero, realmente, **¿qué implican las variables** [**Java**](https://www.manualweb.net/java/) **transient?** Cuando definimos variables Java transient lo que estamos indicando es que en caso de que serialicemos el objeto que contiene esa variable transient, si valor no se serializará. Vamos a pensar en un usuario con nombre y contraseña que definamos de la siguiente forma:


```java
public class Usuario implements Serializable {	
  private String nombre;
  private transient String password;
}
```


Esto implicaría que cuando se serialice el valor que haya en la variable password, al ser declarada como transient, no se va a serializar. Ampliemos un poco más el código de la clase Usuario:


```java
public class Usuario implements Serializable {	
  private String nombre;
  private transient String password;

  public Usuario(String nombre, String password) {
    this.nombre = nombre;
    this.password = password;
  }

  public String toString() {
    String pwd = (password == null) ? "(n/a)" : password;
    return "Información Usuario: \n   Nombre: " + nombre + "\n Contraseña: " + pwd;
  }
}
```


Hemos añadido un método toString() que nos vuelque la información y un constructor para poder instanciar la clase con los valores de usuario y password. Ahora vamos a crear una segunda clase que nos ayude a serializar y deserializar un usuario.


```java
Usuario miusuario = new Usuario("Victor", "1234");
System.out.println(miusuario);
ObjectOutputStream o = new ObjectOutputStream(new FileOutputStream("user.out"));
o.writeObject(miusuario);
o.close();
```


Si visualizamos el contenido del objeto Usuario veremos que sale tanto el usuario como la password. El contenido lo hemos serializado en un fichero user.out mediante un ObjectOutputStream y un [FileOutputStream](https://www.w3api.com/Java/File/exists/OutputStream). Ahora vamos a deserializarlo:


```java
ObjectInputStream in = new ObjectInputStream(new FileInputStream("user.out"));
System.out.println("Recupero el objeto " + new Date());
miusuario = (Usuario) in.readObject();
System.out.println(miusuario);
```


Veremos que al volcar el objeto Usuario creado desde los datos serializados no está el valor de las variables [Java](https://www.manualweb.net/java/) transient, es decir, en este caso, del password. Por lo tanto no veremos el valor. Como hemos podido ver en este caso las variables [Java](https://www.manualweb.net/java/) transient nos servirán para no serializar aquella información que no queramos propagar.

