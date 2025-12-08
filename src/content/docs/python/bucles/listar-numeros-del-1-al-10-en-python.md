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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GFFCPF4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6Pz0ax1VcSwLd8ee9fkt9t6o17HUTXiMF2vZq4Soy8gIhAN9UDOjhu7FDtKUcWX8c4aptkD%2BeYIWn5kwIVWRIU753KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4v6mql8yutkwP5vAq3APD58pafYgyOiJVm6EtxZaEYEHVMai56FTcn5Blv1ySWk37uAg8KSvZ8P5W%2FdhhbfNT8MgTpf%2FV44dM6152%2BpueHiHowt4TSS2F3w%2BWOh2tj3ZFYg%2F6%2Bf8BJfCh606mEL%2FZMjCDufWp2fW89ufTsXqCY5DzRP2PqB6x2pkNd3EsdBaUS1Tvcb6UHIC9x%2FxcJ6VuxMczpdWkoXJLYWx4SCFQvlhvHlQQwfLZUYALucvcuB59v31xIPnMjmLBEV1cDSHZeEtc%2BaB4QHW20xRyYykuUh9AMxqnHT3E2uvIP5rgNi5B7y09ImtKOAcWsc22KVxkNneHE%2BxYQexd0lZtItK3hTm1gXyLggaWGh9eFLqnjC5n9Hko3wnd40dZadPY70A2HMv6owOx8am5L4g3%2BuRc1E27itHUYXLZmTdEt2%2FxcEnUkvVVp5XkQPyhlm9q8dlBucz1aDSIFI7gU4tPviGawgZNBB23STVmzRT924VZIjz15dVWDG3pP%2BkrKQzbPxARmamXvhB7wASExibk72SaegTMYJULMKaCniTk21Q5VG%2BlGRRig3RSfnnHNusSuyRlU8IzkRWzn8rQYXeciyVJz9KQQWS4aQC7unxBjCj1e6Te7FDEQ%2FeP7fXOuDCItNzJBjqkAZk3z8Jm3U6bccIFVw%2FhUlQuvBlYyz10D6bQfGrRiPcW0jO3dUfZMfyw%2BVwCXhuPbdvYbfIOJk79RWY7hW02gQ5bCdCRnKL%2Fp7alXa5AQCwkExgV4eqw1IxVbuTNy%2FoSCPdgXfQo3r6AkZvAYVeHicezh%2Fyhj1deTDFj14AndNLMHXuY%2BlaJZ9qyTNgYZSHjhGQbnQuvIqz%2FUbVVY4ZYy98Gu1Gc&X-Amz-Signature=6d68981aca5ae9837d0ef47502a904b78c8df149d9a641cee271335efb1a0fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

