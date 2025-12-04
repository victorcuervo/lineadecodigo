---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657MLTBSC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T084149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIA6qVkVMDOti6TMrLhu45%2FdGAQuVQcPVa%2BzWFn9xfEEgAiAhEeCQvwbUgDucurZ%2F%2Bd5vVi2R9MjbhHGl6biCUv3uFyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM8tsY%2BlWFqJP2Z%2FRkKtwD73TdlahMfRyoFwlQppkZL0RnujwIR4JwBrsFfFySuHGdpi931p751AK0XTLdemJMo2SDSexHshmPWlACtkdquSpzXRJH%2Bkm%2FCVujipS05E%2BKBLqOrqFUdUod0WZ6jUiYpxNmAWnbCxwa1Ayp8Tz0RzqG3i11RUaotvSZIn4bfEIeQHFtLDfPJVMfOAefiFLQcQNVHIMKbt2rqSq2760WS8iauMqKgq2BAI3XmBFCA1t7V3L1SgoH6pmmEz52f88Jj69JpuDZmsm%2B83%2B6Kyv8SWULWzhf5Q6RnC%2F%2BRzVxmCOiHnFEuPAMTKAxvnG%2BK4F7CJgJjEARC0PqcTavpg3BNTWnZfQpK2pHz2fcKgcZCM5ElxOH2AmT9bx1meRJf%2BdV6B5i4MafYZ78jU24wqQ9UnmbAmgAErNBU00SmWPuXyUDIpCRPMEcomw%2F4wGgUsucqC1Jk3vwcfcKE5UtKmvCGiD2FFyeYxL5APVuqFbPIfrT3oj72ScCth2Yg4Yi8Y8pAXYIj5uKy9SgJ2m%2F8Q9SLRLXK%2F%2BdV%2BRmDWqUD8HLT58cRDCyTRHQcyF%2F8lhwHSXXh%2Bpn6zRDw3ojH4UPGfQ6%2Bvh81BxAKV1cZbazMmCe8q%2F%2BocIk2adl82hu3BEwnIjFyQY6pgEPdO5SOX31r%2F4aVO30UKcBBgIdRd9HD9rulOZq%2F2MvCIA%2BiK9IFsib9LCO4KO6eMYqxVTUWiDryP1CQPsvOL5q%2FhPn%2BW6jj8%2F%2BZhzTcStNZAZCSkZji9WGkTApFZDTRNXY%2BK4LNF9NFzoHCVma6kstGwSE4HQxJDqRY2%2F1H3hY%2BimC50R4OgPrfuvneezRlXHBL8tIwp%2Fw2HbEcXJ6lRh%2ByZUO%2BEfm&X-Amz-Signature=e3c7780053a2198dc2ac4d3629450356b8e50cdb1f990472a6f2ec03e77d9265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

