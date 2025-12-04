---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIHNVRE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDUFLTCNMmO%2BJ37W1BRRI1tQfVr0HuON1cKMaekLqE8KQIgacRTNGCM4oLh%2FB3UFEe1m6WmgSz7gXoPxmvauO5ftfsq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDF58wVCknHbR%2FWkAtyrcAwB8QaFIenumasIHxaoGEP%2BNhnotPN81mDM5BZpJVWd0UmHBoWMqeG0%2FJo67RaWYt97%2Bo8kulDgTTrWhVplrZ6T5tGrQVxRAxvu9xpd8SYSU30NN%2F5nvs76F6lrEtcYdT8NZ10CjNodQn0NIrtmfpv%2FvhT%2B3diz1TaeNHkWXTmf4aZ51QV5W%2FD%2BmyrJTXd9gr%2BEx3mdVqETOJXrVVbTn3%2FBiGuaRn%2F24rD6LxIYbUJqxkP42nrF2%2BYLnpl1bptbq15oge4E%2FZqocJVTDrMryFQE11mCYsk5Oodq2SS0T2Jt8vPcCovoQ7ZFjlDrstdq4VF6PBibj7AUtu8awiapjp8Gvl3NSg344Ax36bEg0wW62B27x1jQ0OFXKToMXiX3G%2FYBozR9NhMlVwmCXdfdE7ErxDvnW%2Fgqfzu3%2FDxSrwbn9IzgUacW0%2BfxXhPYI8W8cSOSkx1uvVNYmlt3nVTgZ7Z8EZt4dFzkuFLYpvjbSDXws0ptM%2BC4TJ4hv8he%2FbukEkKC%2FcTYk3wmF%2BkXyOMcwDWz5Tdgyd9VPumONVzCPql%2FtBO9294EY1OMdsAKCb2uauCu%2FYSHjNeGlUpavXxPqFlbwvRQ68LNmovQ4er7N9Eq1VC0LAeq9IO93nBejMKHnxckGOqUB0%2Bkb0gcEfCFQs6Te2nQbNqMOcgG9LqAVlWQ9CHtwxemvgZ2KpwqCg2OBG9atvED8OhFOxpmFkQ7s0nnjU3OPii2BeWVqNBilpeK8sRv0Eu%2F2jRPOStuIBxKQLwsVtSQ7oWZDUQVmGkX6pDofQZGN%2BK0BLECC8kobwkU8n0OuRqXdXePUUmMV3qgwcmctvqW8aC5kTqSHSQFDO9581W1wrXYiC62m&X-Amz-Signature=899b2cec157daa299e0295bd524e75c1acffed79fa2008a43d76dcaa95ea9404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

