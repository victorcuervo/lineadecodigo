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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RY4TLHU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRNAHV6k2X58P6OJ%2BrcY0IiggyDWIUFpRLJF%2BOnALbvwIhAM8JyAybnLSxbj7EHX66j5VULVjPRvuZ0DaS%2BMM5AI4rKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx7r%2FFC%2B7kg95Fqcm0q3AOt3QC4fwBVIvomIneoyUw5qM5JebQJ6Me2OIvV%2BdcUhIqmztndYrcqchCBNDymuLJiVg%2BbOSVeWIM8IvnKznOzmBxO6a8BmSCuyDojiS0EzzwRb%2F3iwH6pAbaDxCmJg%2FDmdcvbfz3MGD0zuOGjfjK8AHELrwi1KcQvOwqvugWUtudf9hdwgnHvAE8GkwKoxZ3oBnE%2FtwmDe4CT4qpADsAmX3SL92J7Iiwu6AEPq%2F0YHgMotAAjAl39FO0fUuaDZC61sBcRrMdrJl9odJz7VbhBIiGjv94%2BdF2QoA%2FYRoEjE4dOZsLAlOWjZxY0QBAJdkNTMeuJzGbwG6%2F4FViSpwZ8l0aH%2BWKTuUyZLbr0wE7LGGRWaB1XKH9LwaHIvzni6UOSl%2BHrr1D%2BuiP%2FSJ%2BgqmxYMsIZ1cBELUO12vMLKhAQqjmTPmOmI5Q4b9dEJwjt9tm0SMgdP%2F26d2OfdstwUuXyrzsCJwtoa2hfPn4HZxy3Q3kFQIpGz%2BFPbeoibGuvvD2N5t3DBmwWYIaeXWwmIMrL%2FlRLE4NoFuTfELcFCND71aDCIlLIw4rOzoMbUPD97EA%2B4AEVghdjq7L4NMzW0dsCMvipUdCrNFLgamcvg8H9Ery4GK6BHTYwsuPwEzCY79jJBjqkAflIjqmOp1MHTWB5q%2FWffqNca1vSKwJK0GP5NhkAPs4wNzxvRmCDnJKR6eBeDSSUcN0ZMBj5cgdIFZXQTRFB7OmMNgy4lRafLwRNrhxsM7r9iGyM5eVT0Nr7HYDWrtpug6QBR8ftT8FkADWiTb1cY1tDdh8ak8mJfxZLRoVsgaWm6vcae3026%2BfWDNnArIgvnMzSu%2BPI9Ir%2FgUz6ahf0Np9rEtRL&X-Amz-Signature=f119175f410fef8271a22bc87175cf59900d9b98ef0101fb95d3e25c9f6f2139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

