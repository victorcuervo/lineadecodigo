---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655DXCDN6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzFJvUqb8t845%2BMC6qx2xIj42qknzPNZ%2FYeG6zRPMc3AiEAuA3H8GGrGBg1RHh31MhEi8Q%2FSgPylZKNY8UcxDXBJFwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNZbu2NBBs%2FyMJxyQCrcA9LJCiDVw17HleT30Ym11rLYo8iWQuieG1uuL3cieYQVJzW6w%2FYNP9YA8UEtYXNLiONclczQg5ye0ZVxX1uyF65%2FUYPZukqr5bvl0xDnaY2EA2ZeLPghKe99Dewpr5HKhgp6U6J%2Bz%2FB11bhgTAeD7l4Ds7SlkPVsisRILMKhbktXhGET7glcnd715uKy%2Bo0qmtP7CIRe2u8gPc9cQHl79pIBOPd%2BO6KiCqyyJ8wfprcYOObcye2IGYQ%2Fl6xi%2FOhEiCUzUFqUUUmw0oCIt72fnMhoGmKfZnuQm6hmEhi5xlEMcx4HKfhgZtMNTRAzYSHo7Az1kEMfq0k089QvhpgS7K%2BBWiZPQFCkoPxkx2kFqxx4iqy3BE7yC%2BGJk4k7P0HWtPQqqtIGXuIbvO%2Bj69S6aqyagKsWTZjcm3AfqwHwKZDVm69tVkqFu1%2Fc7NL3uapjkuSxLCahjOQFXXhCcEqYNroPb1VoMGtwOcrLz6UWa5rhcveKhwq5pnrrdLVgH%2FFIw1KjYfum2qxs2doS9FdEL%2Fbw6UrdrYq8Vu4ezTyCYwkT2b2u5aFWcMHrujc6e4AVGFdkPpFhCnYllGxo3mUbFFle1aAMS%2BbAYyJH855RLVnBo3MR7sNjwZv5XKVwMNbhy8kGOqUBh%2FJbtiNncv0ku9lNk3KmFXlKyk1fqXUD%2B%2BJGataJwrqXzUbkdLiPvKRaLW0sYcw%2FStPGWoi813P0CcGv%2F8thd4yyC2XyWXHkGavhDsPzXXBa%2BV123RtPBaZVBK5FRdTQoT74J5jqDaQwIZr2mHPo7d613rOrqT%2BoRragsBzRqCOEJcuBNB5rVbJB8B4LBPOJE5Dm2cgn33RN6iTJwYq%2FBUzaPjVE&X-Amz-Signature=1187cca185911b9064c77e017d4c735209d2df0ca0a44aa9bba0e009a30c905c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

