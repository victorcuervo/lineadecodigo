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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3BVHHK6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRqZb2Q6sEmd0KJNMb5Y1Phz6bbTiAB2xROMePL9S%2FswIgS7p3tH3Nyy9mIC%2F3AU47CDlb3YO%2F2WQwU5y%2BSs%2BGT34q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDLVOxq1wSUnqwHQIOCrcA4HvQ13pHUaMtpPwgfK0bzRxj0xwqylBjLxfFXRJNHk%2BPn%2BGbRmk1SuLT0TcMUCuhAJ9l9jt%2FIA9Sy%2FiPoVuwJhrlZ58YB%2BC3zxFtHM0cck6lAa2p0JtxD6OcU2sRiy5kMm1KYZglnaqQWot6IQsEh7y%2FN8QwurjSjkwehYGC7APu7wVqMA3xtdVdS8f3Y5sxY8keXMBVFd3vHePa3P7faTgomHAkvpfbaNZNrBonyVyWxIgddIheRVFCgFZXdtYXidJmfpcPwQM1UOddx4%2FX9Os4NyBACavTC1%2FzOe%2B0%2BhsIvMeFg%2BiHa5mm1YRL8zVmvLCb0in0YbZ8YU0UBgyIwid%2B50%2FvVCOz%2F4ynf1jEF2Etua%2BO8VGTmzwHv6%2FQiJ%2FYXAWz1kiTLx9gKmT6Gt%2F6Tgioc8%2FLwbhx4cTawfPVd4QWL1M8Tva0zb32OuVTJJvAAdI51pEY2NaMHL2xJjPVLRMAj8X4BwTcgIZfU1cPPhtyJL6nb0XwEz%2BeeMPEuOJBk8JuiC9YPjqd83J3qfGeVEY6UyBmNC4pJlnIyhq4VtIpY5Yflxo6OSZtLohr%2B2r3CSspNFV%2BE%2FNqFgXoM4YBi9tU3Nls6wuB%2FE2LI%2BggvlTaS3V%2BR2wB6TMxOkGMIz9zskGOqUBjNYxVW%2FrjZS5f18vgPOj0ZHX6gDxiNDKI44Ekkpx6fxK%2BCTxcmwt1ycF9vwvFWIJw2EpF7n1TBorQfLL9o8x060lsVioLU4e%2By9wSSLdM%2FeprSbn866r5d3wr9sWryPc%2Bj3oh0ZnGUYJfitaXIVtpXQHCLGiJtfh5wauZOOlaPPcKRU1%2BY%2F%2Bt0bPX5tV37kQHjZf4wIMADrt1WuAyFiEoxjD55pZ&X-Amz-Signature=4c1dc82487663bd0cf378b286b4263714c6cd81d0aa623ea77c1199dd5be7939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

