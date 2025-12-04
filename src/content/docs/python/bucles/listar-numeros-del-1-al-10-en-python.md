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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7XQ7KD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIBSpbabkUV9uFx6DoWkvoCoSKaScaHVQPxlAXlMTyWsGAiBOU1Jjk8duN584qMq0SYDG%2Fog%2BIdx%2BUgev3UG3R4uPSSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM2yde9YFTauTysm26KtwDxGJaM6WUfmgkZDwIC3SM1Ri%2BPTMEz5R96uWW1OmPWEJwxgNJ%2ByVQven5XhHTZxRrLLajBsISusEGRn3i6zZpuADq41J5K%2FvXO3LEFVnMUBZbcarZaLCrtAawjiz1TSScIl6cS4uFf031TKwCjx2F2zrjDzEKg39QPdfzNBYhR7PMcZ7aWwF0yeDw6Rou6eHe7bQ4HEcutDppdlEpMI3GfLzcvwACkKvxDlbxtXosnUYFkzJB5myIjV0uyksVRPUdKcYLtPfn8h%2FEmMdpqRUtNItmrE2lzFb5WtEw5KHWmkk%2B6Q2NQjze06UBcLrXfGb9rFDWrdPbylOgn%2F%2Bylltj%2Bx4u8m2XYI6JSxXzvweT2uinepdAlm4iZzpBvzFyawSlvWIxx4DQLBfwOoF4xeb4cgj8XquzXxJ6podMqUdKsgq2fKv0s20%2BQ5zM6s1wiQXJnCKT2H2N1qfr2US6%2FIy3j04QxDp09geaPN8bOA3r%2B1osz7NBZ0jQ5t3mS5ZyeqFf5oQ9lkkANWHsSjWYEn3%2Bpq1WoZdAf4vKIgqhlEW4X1HWQNYFgdpGvh4XEB0g1MW7LMlZH5p86ke7Te%2FjW3BMDcnuYpy8%2B7o44zIZG57MAbFqpvKQ9sRq3dtZyU0w1oPGyQY6pgH3behKszqUw02248fGHqWET2I7%2BnY6RXSl%2Bwx%2BNAIeEESus14Qssalv1BaiuTpypiJqbzjMHF3KQcFCiwIftiD2HmwbLXVSeWZ%2BX2wH7yDKxeIKF%2B0MoH6ZLma7yudYzmsTEhCpFf%2BqrupS5WFjvMHV%2F4ITLztpYRGHZwsYsAZAYz5%2Bl819LOhsmqc%2FThXOG8eA93hNdbQH5ecdAnUat07hwQ2720s&X-Amz-Signature=6d911b2de6142b97b67f0151b9fc68ca12e688806c6f2e2ed343579d9390b98c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

