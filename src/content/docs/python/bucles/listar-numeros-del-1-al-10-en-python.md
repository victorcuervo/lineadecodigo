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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQNIAWN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxYJtbpaYkzr869zWjFAbqE558KaBjpwVFJ%2BA5bfq8lQIgdc84BbfDTUFppwOtSjqIcS%2FxZsoiOV1iaaCS%2B4P6dOsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDECBBlxKabh4ZxvnHCrcA26MW7Lq%2BrypsHZ%2Fhe7nRYWPFNn5RT603QHjW8HeDs%2FQuC37bGoyFETn4P9Rpa5%2BZwpF5gu3J9vkTjK1ERDwh4R0D%2FKRgt8LMEnvNWU5IK%2BKbe6qyxhuAe2hnPT6bV4tDSthDboplbZU%2By2Q7vgMsVh5WLoqZqpTAtsTLcngADWbd6eFLB1HDe5XcAGmXXDMNjGGfDxnjl3VwKlmveC3DppmuSfJk1vMs5r9BwOX%2FETCjYgh1gQzdvix8uOR1boC3kbSutO8YYwx2L7CZEX7dJOIXUAZ2E0Q%2BY7TlAec1SUHDX2fcHcrbP%2BU7CLUKfzGSut3VT9Mg%2BeGgyU41yW92PHs9VPxPHKiGZwuGR6udx%2FFFS6KB6Cl4LTeoIoG6u%2F%2B37ZQIPqWFrLcF8awGtP7nDCJtF82Ukk7pq9OZozsE9qmj76vU2JxaIuq9Sr0qMiJFZDwQpbonX3Xoeg%2FH5t6E6zMvj1kkoi7sZXbMBZMvw%2FP8lfdrHgdT9z9ipB1iTGxEZcHj9rTGDIfWudFDbaAoljai33y8GSXxboDwCDUcfuzY1ecdHNw1zjOZu93%2BsQlMck5dN1%2FX8hFiXFcA%2Fs4fwxb965s%2Fgd09S8%2BnrcT48%2FesxnmKlL6VVfMrIPNMJ6MyMkGOqUBdkcSitS0Gx3GhzYc40HDbvoa5jksuAs1PsxoT4za46l34j55Ic234KRHMumeecH8fwuyd7YrQT7BZvsVfvfinKMC42VuZjm5JSFbSGPPf1X%2F4RdOS9UgxFVtuuhbBRlLaxZWh6Qekxz8pBkkPrJu%2BHjFHZiX%2BM4CXnDb4glFVySNK7ahYS%2BS%2FGXQguOZbu5MlUQxfgnX%2BAh51htodHPyzyCVb905&X-Amz-Signature=649da306e94c1ff81a51da05ec32ec81141b28b6a03df0899ca881329e8505a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

