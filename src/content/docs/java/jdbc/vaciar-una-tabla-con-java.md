---
title: "Vaciar una tabla con Java"
description: "El artículo explica cómo vaciar una tabla con Java utilizando SQL DELETE o SQL TRUNCATE."
date: 2016-10-24
updatedDate: 2026-01-11
tags: ["preparedstatement","delete","where","truncate","sqlexception"]
slug: java/jdbc/vaciar-una-tabla-con-java
type: doc
topic: java
id: b9b6ace2-c1b6-4b3e-a2a4-9bb87112342c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_java/blob/master/src/com/lineadecodigo/java/jdbc/VaciarTabla.java
---

No en todas las ocasiones que queramos eliminar una tabla tenemos que borrarla. Puede darse el caso que necesitemos **vaciar una tabla con Java JDBC**, sin tener que borrarla.


Para poder vaciar una tabla con Java JDBC tenemos dos alternativas. Por un lado podemos ejecutar un borrado de todos los elementos mediante la sentencia **SQL DELETE** y por otro podemos realizar una sentencia **SQL TRUNCATE**.


En ambos casos deberemos de montar una sentencia `PreparedStatement` de Java JDBC para poder ejecutarla.


## Construcción de las sentencias


Pero vayamos por pasos y veamos cómo construir estas sentencias.


En el caso de la sentencia **SQL DELETE** la estructura es:


```sql
DELETE FROM tabla WHERE condicion
```


Para vaciar la tabla lo que hay que ejecutar esta sentencia sin poner el `WHERE`. Ahora me viene a la mente el vídeo de Youtube... 🙈🙈🙈🙈🙈. Al final del artículo os dejo el vídeo para echaros unas risas.


El uso de la sentencia **SQL DELETE** suele ser más indicada para [borrados parciales de la base de datos](http://lineadecodigo.com/java/borrado-de-datos-con-jdbc/).


El otro caso es el uso de la sentencia **SQL TRUNCATE**, la estructura de esta sentencia es:


```sql
TRUNCATE TABLE tabla
```


## Implementación en Java


Así que vamos a utilizar este segundo caso en el código fuente. Montaremos la sentencia **SQL TRUNCATE** en el `PreparedStatement`:


```java
PreparedStatement ps = conexion.prepareStatement("TRUNCATE TABLE tabla");
ps.execute();
```


Vemos que la sentencia la hemos ejecutado mediante el método `.execute()`


Solo tienes que recordar que debes de poner el código dentro de un bloque `try-catch` que controle la `SQLException`.


Ya has visto que con 4 sencillas líneas de código puedes vaciar una tabla con Java JDBC.


## Bonus: El famoso vídeo


Y no podía dejar de poneros el vídeo... Espero que os guste...



<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/i_cVJgIz_Cs"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


