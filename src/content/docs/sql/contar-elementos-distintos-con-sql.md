---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXQDEBI2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIHh9kG4Pbi7rFS7LHSmOT1ovcfac8XBPTGeji%2FwH6Hg%2FAiBz7n6D14x%2FFBhEWPHNUs25qOSLzWVHFU7Qud49rpTKTCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMelNzOiP%2FMiHGNPLRKtwDqgoqOeLaN1AbL96ADrmN4OnWNA4U7uU%2BM60ZI%2BpmtD8vPucfPoStziibL%2FBoB6xx3zQypuyGWLtSb0UtnDkHQFHV0pSjPQUB7Mstal2wzuUW0cJ1RyIwFv49bkilfZijrxSSGbgrNL4eZ2j6wtLC2XHKBCz89MKRvFw9GB6mBGE%2FAVe3KXOx7gvsHFmN%2BeU40BJGEyyC7KDCHgmMKWPCIHQ5EFthQ7asNPkarLo6IXRAswPNMO%2BGTdDcYGeK%2FNYwL9K%2BD3lkweoag8mT8uPdONC4ul0lx22v63o%2FdK5BfMWrNuXqsJGqcRIkANti82Gy4Fz81vVfCSz9Bf%2FOp12m%2FHTSKBbk%2BborSVtpn%2F8v5B18j508vTvqvTdobX8juXNanpsHl2l9p1l%2FZE5BQZZpPxwgcwFs9nbQCUlDMDx6v4Jhkj%2BKlUY7EUeAetUu9ZxA%2FpjUvrrfiD%2BZJFduK%2BVEPTCXIiJNUNRPaOtrC65%2BkUD8Y1Xp0dFpJJfJuKNyhdoY161kzO2khVxmoeA5ZZ4i81sks4HNlxqu%2FUYiGY2JHJI2QdG%2FROFi6KrpzY9q%2F%2F1UkwvMgfHPTkG9c3yefi4hzeQ7%2FNIacr0sK4O1gs3iGAH2jUXTZ%2FvhM1Asmcwwo4TGyQY6pgEtsFYbQfNP16nTf%2B94Tf4g4dUEZmdLu3SkvnuAG3RHc79dwFyM7e6hPL01Lok671D%2BbqISUGG8EMngNK0wFSOKsIO4kksWnH5pZQshNFrg53l6MfmoD0I4QcOqua6YUvybf%2BGabMp5w%2BDsPCER%2F8syotiPbir6hFpITgxoH5gB6hPl12XMFRWwlsFTDrM6pRRmqEkw%2FiJHopqJSVEQHunksJi4Vj8c&X-Amz-Signature=f3dab6765b56daeb1534a23d5f3e3a80138a47c1f18484b766afbbf5e645d4f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

