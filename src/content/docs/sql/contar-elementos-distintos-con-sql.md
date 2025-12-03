---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBHE4UOX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T201722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIBMazz5e3B6mcqkSONnQE0R5KEJXHDKxxOB093Q1LJxkAiEA9Z9RcOLTDkWIDTOPIk4TVd3MS6YuKCYRZDj1%2Fm%2BT9MAq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDG5QSRq7vziRWJVtVircA2DNKDNh0PrMxAHh%2Bssg9UE9%2F50fim1uvfoOmipOm4A2DTTUtd9a3z2lTpx%2BHNU62O%2BNMsMr2ZGSA3%2FAaJmYgBOWuF7TncuxLr8dqv4lKDuFKKXp4yNQjbBIyVxiz%2FDrUHWWgcR3BhzhUZAqDYxwtirv9bebmBsuRj2c1RNL%2FvF2D599i%2B%2FDCGLTqP4hpmbq%2BWGylsNEfm%2ByzZBBhjjFLvryJwejiunW7NBY35P7j%2F7nNJ8j%2BbZbh84xKQM3GboHtTBuEFyN7bPPsHMlFgXBmWbB1MFh2lhOHAIB06Pv6Mo3KHSfjTekA%2B16PXQ4YtMuwLc6wlT0Ch0k%2F2ElWE2EmYzReUCRffAQ9NcdCUGggd6Qr70lz46%2B3YDSIxNNicnB%2Fvt6zU6jrrZMmnFRQ2SwJYHOy0Nydpy72LnQIIRQVmcArmcHBGle1ZcSyHeagKG%2BX5z1HmNc%2BkISaqy6E3L5gCk36oEai4t8sRH9%2BlghPdi%2Be4zDIjn2voBowTH5Dzg4kpRM3fDmP9GwCwrRpa1Sazc6iG18bEpYrvHTSghb95IxH79auNVBzxRH1WLZpqi5Sw%2BAqSrJv8OyeA%2FRKlspEFEzDN0AQGq6D3kU5fvZGRHYUdn1%2FR%2Bd5e9seLN6MJaSwskGOqUBG631ZC6mlVl912sgC%2BhE7kLHf%2B4mArF86ecqG7L8LZuSVz8VuIXu%2FpAehkXciILxDZXbxKBHsUd5mukY0i%2FvbsTWE2m5LukZ7kUk1WDmDwgUiK5okt1fpJrSkuAjsBDhn%2F8sEyTh8SARx06IaMDzJr1IMmDU0ht%2FdfpADPD4rdRyQSNpDlCXdL0MWQfspeVLAh46umGNw2Pp5WjW2fdDirEa%2FeCi&X-Amz-Signature=afb19c93f508ab29808e712a01b4a936ca3feaa771809d859526ffadfdfe2cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

