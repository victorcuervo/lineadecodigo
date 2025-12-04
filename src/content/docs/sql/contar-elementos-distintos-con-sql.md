---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EO3Z7RK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIEGcSmJMtMHlWvNB4rs54IXHcIksdnJAp5vvy75qVawuAiEAjge3ZM3VTv0znUr3caWHT90F9cjolRtpQtww%2BfqhGPoq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDNhG5wP%2BiPvNrNfJHyrcA8ZNCNS3PzIXCKSasyZzB0%2BE4I6Tomxl26HZun8QMSAucNPxX2WQO3%2F2Ru05XQODGcOsVHCIUa9FcPluWLCydyApz4%2BUx9ni2qlEZ%2Bo%2BXG0yT5mH0zV30q%2FRfN0EYKyoKb50Eq7mCZn18z8jfRArjASZp%2Bizx88Zxf%2FGFkMkyszCJWKjp0wvUl3VT7FHdUG9VbCI49Lo3R7kJs85fpbq%2BEVQg69CPg0QN%2BNJCBmNE%2Bv0MW0DBdXo8pkXNUi7PpR%2FIK5Du83CO4C2mAJLer0jdhutz6ERytDOZ0doAVhGCW0QWuig2R8NIasSy8q9NTxuZNblFqsXuSfg8wEczFVRUGyCj6EDN2Y%2BEgdKJ1jyRdelJWC74jc6J55inKEoZe2SVMujymz5lTfdGUZaCSoLT0Sb%2BW8QFb%2Bz%2BYm8pK3WAKvc%2B6HnyKVO02QSGH807tb%2BPGCPLmmP30jR8PsG62T7uIoEYJkFRw6IHDDk7jcN8zxcGdttNOb6TaVn%2FxUckyJR3oAhxQi9j4eI9lqmUb9duv7TSTP2KFvfJiWQKoEBsCMSEnPlZ7eMuni%2BJfqbeYXlQo810c%2Fc4lvZ2IuyQqL%2BRs6%2BCgSSEhI1emDSlneGxECYiAkHzx%2Fu2XWrQadiMMOUw8kGOqUBYuH66ShNaq8he%2BmKczCqS7VGlGpQCP2AEKGBZ%2BekLLAM7YBP7Rh3ZcabTxuO0gP7ks%2FW8YF2TdBJxt%2BDHMGmmpZO%2FgauUM0OyRv0jVgHEsuMPqPGXDkqTBbQX7A1EpBQXGKNPCXyaNLmG%2BXIy6rQE5hZ3%2BOIeVVhaKEKUYG4cIimwKK9iLP3XzDQPLE9%2FWIdXJyY0gC0WY%2BWjGcIDUBmtNT6zJ%2Bz&X-Amz-Signature=ccab97f4f06cad73b2f4a6791877c1821f8cfc8027a3e41dabeade23d078eeb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

