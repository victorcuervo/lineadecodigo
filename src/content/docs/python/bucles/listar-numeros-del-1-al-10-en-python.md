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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O2MCNSH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDiHDip23rDzy1culZr0itabe7rahkQU0NWlfE0nUN%2FDAiEAj3TfdfuuxscKbx%2FmeOnwXNSxNU%2FUt93JX9ComCde2egq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAZuon9taIZRrH3MwCrcA8LXQniscEpymMOIAxM%2BhsqItAU3B6CDRIC%2FneCjVPB5TvsoLjuZWqySBDOKqMJd5i8tIyER5Nnq%2Fz4Pt0hmFSYrm47gTunZOnoJzgG77sb6PiUFS0jdp3Cx17ulyZ07pZmpm54vytT445VntOjdnsdLFsl78EamTMxGLhGn5c3m7jNY4zR3aDrzvf2mpTByhdONANXgOP%2B1EFzg6Tpx9B%2B%2FApj4ZozupRsAWWpJHpvlOwPz9OuINThpD23mIRrZi9b%2BNZRzf0GdTqt6q7R9pOBtCgFHkrfzGPXSzgtm8oK9PATad03XItpGnFEWNO5FUz%2Fytsh%2B3AYjqVj%2B8b2A5kSkewm2nKtxkuamFIfugupvEkBODT1tayboWPAQFFRrqJ9AZ7LMWt0G5gWVaS2HSWHJsSYrK%2BdYeSg0lNvmcwpqItWknGUoXm26oqa8r2KuHTC84Mucq%2B2Ri6ybQEqYSDFkeC1tdMUuRXrwrmbO4Gau7b9mpwqmJaiclLTfWITLmsWhOXCCHc0vDZZY2eGto75iZ7jnzTIRBkj7IlwLGF4pEtl8PMyX0Yla%2B0DmsJe1dVxG%2BlZZOZ8A%2BlAc1xJ0Jv7xN2fRLaZ7axVEnrlqJnpso%2F65IJYbeFMI4FBMML7nxMkGOqUBSmDDu3F2Cj6ANz6oysid8889V2hYn%2BoNkHs9xxVVBY9PHAz9v%2BvsgjF%2BX5B5azXABoJ%2FKZGFAPdGpef6A1mCn1USuPcuJ1BV4d5a%2BjfOgO%2BJTVHnKMnRv37cdcGbE8Y2gbdrO7eifTxh%2BYZcFVuDGzzDxBZP82EBa7yaYISLOaqATWPs2l7q8QZ0jKVbkWlkOi%2FQA3FCWOOZpG2eJ39UqmiDOkfe&X-Amz-Signature=174e99638d2e05e8defc6268e6ef29ff658a95268e41cec0c5dc5e66ce0bc467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

