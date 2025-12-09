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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOQMJGG4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAe%2B97ACP5Bq9F0DdR00LWBkTKEdDP2V5lucu7vDR5t8AiBiR56tWJolsnAXnN21Jx8A8r7ffkwd3JxRAl6AWhtu8SqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkUNm60reUKi4Pyf5KtwDfm1xJbaJPWqXa0Sx9iU%2FSt%2F%2BWbUuANWO1HjDcWl2ARRyuP7eJahjLqIBaLQzXaQJ3gVFKiF%2FTEsME%2Bg9fUX6NViSP%2Bo8meb5IRAMcdXKHpklembJBUMCvYG%2BLxq%2FGX0aVPj6QAFavv0I7fqwkxFmDGeyUpS%2ByPdPsMVnSnWu%2FFVatPlW5OHBDHacHidat%2Fae8TiPavbft5n%2BtMUuZ0Hd557EnHAXEbfnAA%2BnDsoEXOgLSMCOopoqfQfo0yF0QugebkVv9pYbUqZn%2B%2F5eSZ1vQOgGRN0MT7pPgi7xLAb%2FAGNmYfcCvgsVbkvijIGRslL8ZYGCplN%2BqXiA%2Fn6g5zM91n3efTVcwtM0LP4P0RVMskaLCJgPswdAf74VVG9S35%2BBdIDFdfV9XDrzr3mV0F%2B1kjnvqPIeGLobmOGc%2F433XM3v4bkhpKnIHCXF6EF0veO9xPjiF0fEN2ss7iPniq05UperBNXbZJazUyYYWsCwaLv1pardbg4mIiDysNsmXAGfPt%2BPO7mpojlf4E6spcRmRX916c80i8d9QssiXIOESYlnWZFiAy22MsbWFf3bSG9%2BgDd7VsjonowQF34snnVXXrUR02tmqk5XK%2Fx%2BympDWQyuUTHWF7b9R8Gapg8w3K3eyQY6pgHOW2fVniDPGvaO1Bcykag9KlWiw9FvalBZTnMGG1%2FeAzcXKId5jC91JB744OOMcCkjAXQZyZk5YRRwLC%2BOwsw25RWVMlog7ldunm4U%2BHmsZVi7UOPxkiGFusM0%2BbK2x3Sc0onQwdTcVXFBK4DbVZ5bgFxdVVSvcYMO9ocsc8AERXGdoo8IsCe5bcQleiIp%2BeFZaiL8W0ZQK%2BSSfXog%2Bd8JW%2BNg4FKl&X-Amz-Signature=1d12540c74e8ea346caf529d11f80b6eb849e9b13768365f83251fc387db5e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

