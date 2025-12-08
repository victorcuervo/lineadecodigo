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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PWDSHBO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9no7ZecJGz5OvdANTyy3EoAgaEfk8FlKh9iD4m96dqgIhAKBx1wMuKa%2BU6PtNs%2BwjjUnjxSV24IS1aA%2BHO9JI67pbKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwkkN00NUGeIOcdnI0q3AOVZTN4pmKJcktVAu7MR1O3hF7%2BtLCNS2mBRLxyubZUIgZorfQ4QP9OtFpvqKXZMIMPdNA7mpmerN%2BSOoAp4qOPrV9pw%2BrZarLyDwIEjK0QxFJjxSZB2APPAk1l3kgYOQcIQ45HDYJbh06cmNlrseVnuPlQg3GZnSip67qdrwwYZcVYms7HIvA6kt4s4HjtoPMantwV7%2FGnl6UbsM97azF9TyJoIcoKrv66IsQZQw3Mu2ELAuGbeX%2FOz4VPf0jkvO9eYxo%2BO2HH4UcrC2q%2FjRbz3BuBUGBgnPw815NuIXOgErv9UyJBUGygaCf8dSPsbd8l%2B%2F%2Bb7XqCqQLrXDNk7sVyWW9YUAY7F6IluV2bllHGW3QU5JAyKf4KtxzCQaHn%2B9AHUV9OnN74deYzAozIPlH8ILXXvlMxwMku4SJZzGZk%2F%2FKqzDqFcyvMIM%2Fwh7rG2VKc54Kz4%2FUZ55Dfl%2FaK3b9z%2BlbNKlsvNh5XbyoCD5LTlE8xoIDIkbgoPh%2Fjl%2BGs6X3krFdkX1aPwBs0Pt9VWC2mJXMvJXKp%2FmshYFpcrmgp%2F9VjowNdcJnB1ixyuihushVfrCpIKbi5qVVcLJOtw3OqYmvGQDOUeil25s4Ev7VcUR6i%2BJjGKvKJIMERfjC57dnJBjqkAXwM8JZNbQcu2tnhGm70dmogfZHdDl45UJpR9dGqlY0xVmwJhUbcx7SmFHcG5SMd6C2ieTtwAb3%2FnjPAboypq2LUpI9GvArFGAcs0cFwAKCPnBLwWZ%2B7B96rmvkJ0v6NFT5anTcdR251htLtqKg3XV8XNo0Vgb1TRnmUDHvBKCmZCq9cU7%2Fp274KLyPMH3OPbZGY3%2BYbGFrXv2TPxv0y9RoPmT6d&X-Amz-Signature=1ec5128d2d6f6b1b2609f4d38c9c75a59900f9aae01f095808407d48f1621e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

