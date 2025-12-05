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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFTEHCS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T031441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBhImXy24A7wrkl8eJwhwF9E88pjTjXAarQ1%2FhBiN81wIhAJ2RI7Re4J4d6FmiHvjoEzdHOCvT%2BMjmPrT6eNeBE5A%2FKv8DCE8QABoMNjM3NDIzMTgzODA1Igy71DOb8pEWN5sb7oAq3APaJHumIUYKD8ah8GGpcDJiRzhWgxcS3Tel61FORhJjyMxss%2FGM5MyTXgiawhUr0Eknbvh%2BFxUP8%2FmvLCYI3ZPSzZC%2FosGCE57ZXa4Pqu6jI06BDvDqFYZ4bJlPXX%2BTogq28bMENAPZUjnxm%2B5c%2BkX1r5JXC8oWHRwg%2BKQsM1PdfkxE0%2FTZOGpKQvjBDXwTE2Ogqx2veWPjs9L4FX31Q%2FgGmQm%2BPUcvY7DOOa8Cn5QyyAJw3e7nNR9V1E%2FkJifSyg9SdSO0BtPKBZUdE9G%2BWXUBf4Khvjv6ef8av9T4gVYGqvmosDO4DeD%2Bc2WFhUTLoAB2%2B%2BROe7hTdlNk%2FS45V0D%2FNFGihT2i5Qx39hOOnqC2yz3gxFv8iyUkwhqI3bGc48JyGfzYGP3qMGgk1rMgxe7BY51FV8M5VSa74usoFOvhsxc3hjH82SGtC283aCNnsu4ufC%2FKQ01VD%2Bvw2kz%2Fn80jKhrptmD%2Fvq1%2Boxbb6TFfgoseoqIjsxd%2FaHHowXydrWoTsDAHE1uymGmlWkMMha%2F6HsouxY8wJlt7QT98j9BrLeupwXyAyh16fjnW%2BkTnWINmbaJXjiqYP7ybcw1zAFb40jmJ9aBl6EQtX16JS4IIahI29ftDJQVKenNZpjCMjMjJBjqkAaUs54e0nN58gHBN16x5910nLdy%2FlOsupQTJ3zpU5dpHosjQYzfouXat%2FA9yuJOBCkdzxh3DKG5gU7UUBmKYqZ9awuNXCh4BwaZR6kKG2jKd7kCBlBol20ERIICqnolF3DoOB%2BJLlItrUrGrbOAPc9Baj1LJiTMXH2IV1QIK1q5vzO%2BR3dHwIgsNfuhqsW2NpgANLpKlH3GfSiABSWxPrOVyGiZ%2F&X-Amz-Signature=1b841d0f338ebf975578ccd394e56de2f581d0979e676831c0d4a84001e4d678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

