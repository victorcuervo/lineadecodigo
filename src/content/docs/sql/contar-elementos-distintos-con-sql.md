---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHGQR2E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICyn5M%2BSSQtxDGOec1I51E5TzEusk6YZmSf%2B0vkyo7JfAiEAucPdtE6tEItxePuNrC%2FqxNdZ%2BYAoTAVfT2czwG1u%2BEEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDBwcbzaTBuNPBxmujircA%2F60TCqoA%2FOJ0H1beji3Dvd1ZF3ab2cpo0sMuvxtgxn93MxlepFCBWL90hELk8WN1d8OkTkcwc2v3jCbSMBfsmqzbA8Gqftw37HOiS6XUva8kjKCiWQjmpJ1a8MZl2rJPRjhhan1Lxa87fA2wx2eCzrRvQ32lBLaXVdonZEhYp4I7xKXH0aOgn%2BUJHaCrxDNsQ6jocPRdv0Mlo6s%2FdpULY2ieZ3c17YvxTuDFVzhRG58r02ABkympsEsKJaWiKYiG0h0%2Bssqjo1It1sJ7S9ld6fr4fD8EpVT%2B175qZkvLzT0YxSU2QOt6TRAp1TdTMbbCBYkDjkzmrm%2Feh1Sl9GDU5krj4Ag5TOvMbnsZm21RCCI5ZoNAMFIUuNV5XuDlPkawAQZuJqIlvqZYdqhG5Sm5RLfSfsN6g8R%2BIwX0REkOIkR%2FataHR4Ga%2BaKeQqg%2FPutQgsF5d54xRX63aBmb7BySHXezmCwV291RRD6PK1PbOjJdM%2FGxM02eDv%2FRp92XFGW1ofp%2BmOVQjn987gXv7SPkq7Xk%2BPaf7Qi5fUvg%2FUeBtZv5xODjDh5Es2Vs35n05LCgIV82y3IVJvmIGlNpRd63mpVdrJuJ1PdlgNYneFOxG6waQHeoMSwhZCkWVTzMKbUw8kGOqUBG%2FDi9DUhVdJ0KzHQdeTVTugJ4QxMesaTUBusBQTNMadmyl8Evt6M6dsgm8QC3pGanuNEOKyMIs2BQ%2B5LnbFfwHRvjzpX6E3Nji6SkKg3Uw%2BEtCPSWwDrR5013nQdH%2F%2BJ%2BJGWigMmxb2O8Qx5GysGwaNF3W3wcS%2BdZl8g0CD5RSDJ55LPMePYd9kUF15bdIDhkArShy5vbkOmyFAMh9GnEht2JAx0&X-Amz-Signature=49d183b4ef514f19b25bf1e8193777e3f6dbd37a38da593d380f95276156d733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

