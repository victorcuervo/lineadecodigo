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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLOKHVB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3rjQFACWzlrX68%2BwSFYtGGdwQsCpDADthgj0Ura1RLQIgXC%2F9wben6ibZqUi09xLUIkX2CJ0Ap5I%2Brg3IRCA%2Bzz4q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDK%2FNueecoqvp7m0K3CrcA8oeZ0VB9ExXmJ6Fi2mEDIJfofaDCom%2FtpVi4e%2FgwCQ6Vu2SMWJ9g29UKW7HQa6OVII9NAl8kjgsIrAe1GFFmXMbZKw0m6po1WHIuwlm9HOBxrnOz9VHI9x38M0sb0ROtEtY7zVe1wibUtYIEwdaobxOOWM1Vw%2B7tFYbfpNTUHUJnZHOcWc0xJ6eSBby2%2FJ%2BHTUGGpjjhRarS%2FbdcoJ2lQHSIVPm%2BAtkiNX9Xrn5puCvPzx9GdUv6u1Tc1LRvkohH8L9jbRi%2Fo76hce2yiJiM1Z4DCcmFJfkfUvEAn5Jym%2BFU9Kmi1W0FPDAXj5Ir1bcVXXpew6TfzCy36dV3cU7CbNNko0C7YQYPvgbgYqcbvTb0ekTx4J9HKHx5YS5Ok%2Fw%2B9CyLWF%2BqFwrph7oBJvGCK%2B2JrhxJifYj5iMiUfYNRsEUtdDBs8m%2FNfgd0mDA1HAwzEwc2Z%2FjXveESH9MREGi9a0jxCQZ2Q4X6HIi%2F2mybIYGjj3wjQxUNe78mwGElZagjYlPa9GIK5GXaL7CL3i1RUtkGyz3Yr%2FY4IeIgdj5ypyxr6zVZh9MVKRfzPfppGkpyTnG%2FF08YtPvbtAxv8cYjAdhCvbdHGXkWUQB3ePaihbJOkFVdEJyxw%2BpNxUMLv5xskGOqUBk3llBc6g4zhIaGAyP18BSdfJaNIM%2FyetHfhC0MmbRR%2BilAlXw0Wz%2B8a9Vc8pMFziM8zDsFdHUFhIkuYKQLR14dSW9jXgxUx3O%2FP5Bbh744nWozrApBCsvWwPFBJCX7rs5F0LH1qBs5PKTT5iXPlb19%2FAeZTkRGpGVII4wX%2BW1OkcpgEI8cErAlOec3VR4wyPFw9pai8KMfO5%2F4PpNguAVwzgneZT&X-Amz-Signature=ed0ed124290dc303c0908deb3f1652a5713952c4b56834688097ca7c7a0647b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

