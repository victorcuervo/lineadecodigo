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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REMSPT36%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BmkKdseaw8DBLhzH29Pn5CTx82C8uYBgtz7%2FjModkCAiEAzOF6Q3KLwbYUm91E6Da%2B1sEOW2NiHshVtz9xvphfyz8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDMN6cvhcpIKI8%2B80WCrcAwz%2BU0fV29Y%2FnoRiJU8eWlwu3kdeZMgz4rZrH5ZhLRlZQ4WuhCgClGt0n4WHob%2ByXJogzFA7Dvu0tXhJTDnkhMakmqo2QacJATF8yq4Rp5QmUg53IEH6yzcV3cNbq6MtYjzCI8YZaCOE%2BXukklsVnM%2BrSE5px5Kwq01HSy0CIXMwoLa38sL6J5lQsPE18NAWMLWhKYhR6aYEmKTISuaCzLF9Yr%2FhkXU00ihDCTy9nBjQEXudJYotVetgknPGz06Rn1gN8w%2Fe4I99tW6Qn9K5fZWPVEDuYLvxALlzvRx5KG2NWVW0g%2B%2FMuxtrfl63AdgWXBFRmJewgZeNgBuc%2Faj%2FvDOQ3ecSJmohhTqfom8hEpMDMzOS7e3ldrusDWKk10MPLlOMJMt3H%2Bcubh02A4WLF8buhAuDe5GMDI%2FWXu%2FMAnN9k%2BkKPHJWljh2wUtvtOKvBbbB7XExhoz%2F0B0K1vHWrQi74uhchbldRdDqDUKiUKmmkytc3y4v97CePJZK%2FeVltYPLKRnMp%2F0KhT646bgeZn5DDtj3gEbjJghi%2FX1nZwGHUsVCwCC%2BD6EN3uzsU6hL8aIUlOKA2aQkplYtXyNKEX5FzkgnVdjqTPLBrT%2BMzn6vW20BWXKBQRCircysMLPLyskGOqUBPd7CxPkuvcUOe0XvZtG8CeOGEtFGJcnWMFUk3HcJXxSXAt%2F9d51Dd0tJJzrSEXAzI7ylkD0aoHUJvaLEqA%2BvOG6auBf5SoUymB0ZVejgajq7nnZ05RzDnEsfo7lWzYkhFxKXxF8xUIXw%2BMt%2Fr3q9yH3T6me3G2WlGC0PAJAEzuYl3GwuJ4%2FrDnxLYGM1BUdQam%2B5nfY8tZxKNOTSyemOtHI5UblB&X-Amz-Signature=1af1678315f9d5afab8d8bcc85ab5a9009d7f2cc30d1e4ca3679ecde31c4e866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

