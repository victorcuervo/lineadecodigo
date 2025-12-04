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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3IAW5SM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIH82pfzvpywQt4f6E1rqTvc1GM8dqEYJ1NmHRh%2BsPArYAiEAvDpEX9h8CeUjc56Cj4uj7qebF9DpE7pqKzkgiC01Uq4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEaav2m0JWkMbErbLCrcAwpNv2EbvK%2BubloOJjr3lNFSK%2BJ98ZH7gBWfjVXvgSr%2BZqUyTfqoRcgR5YUt%2BZyZkmMul3SHm0DD2ns5p%2FdwO5y5Fv%2FVuf%2F%2B0BGp35vnpaOkeSEzc7gcZ4%2BEqfuNBTLqVkV%2FXeYU1XPUgplKt0sCW%2FGk0PHcKS%2BEkvJuR3wT1EthbjamIhcz8zbhmxOxA4hsoatVf6UnfuAn3UulUEmTuFBPP2NeCyrvkxObI7ULrw%2FGGRQgpy%2BeeOen70sY6zXOoCS6%2Bot0txpnAdOIho4n9msr2dId96mjt0eEb7g978n%2BhYnzLT%2Bu2uab0JmL9Z%2B%2FtraSqtSSSnUWr5xH9ECKCcWs%2FrYx2ceRGjSGp416syqu55LtdKsAwsP6eyyEPKCBFwGzod1fsZMAIRNn1Mu4GVpq8R1D4HBJs3d3NZ98ts82WFAwbzU0GXDj3CsfMjOoLzOZwEt2aWV4dgmQE6kuxlF2OAomxsMUImXRgq6Zj7ksXs3uZvW43PPAG%2FzkfmGdO%2FF%2FB9a0z8iUTmKvdABSiYBQqpMp%2FMwtBRpacIGH4rIGQIWeVmQYbLLhVnVCU55LhHFYoPUrAbSShz%2BaJr0IZTo27hqpQjRtDPVxP2nbds2mJMKre2oY0GWUNsU8MIa1w8kGOqUBs1ng7gP1AekHxJwv4pSPcrCtoczf%2F6EUyJ93dHvll%2BR4J%2FK4t8dHIfWyo0qC%2FEDWtqPwAMtJWLhQlYZX1ym6CrZpFDo9XCgZ7Tc2FySnVtAatWydDILiDApPMZtzh9Bo6YHxk15CemcF5uTqBuFmD4ALR70DQYzVHrybD7NtwF4SnoeUwgX1q4fvYCtVQS0VEGVvcHJUvb1x1tPn1K3r0X01uS3Y&X-Amz-Signature=78e31db768009c48399a932efb3055b9fa834bebadd41a427ec8633ea3cd4112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

