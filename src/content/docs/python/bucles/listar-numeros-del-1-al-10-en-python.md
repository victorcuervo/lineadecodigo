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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636VNK32Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIGUHeL4VMbfZhnJlj5HbfPCkC49cSyYVWPt3tjIpu1c7AiEAnCdY%2BoM9u8rU65CIUKr44ZdK3r0hkfJ79AXZxhrd6TYq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDC9hjmFYSv6mdb%2BG1SrcAwzlKakUcRhkdERdzU6IB6oumI9MNBMIgdbKIXWz%2F8yTnIaKq28pv6eTqC2Vs4uLVT6VbKk2I5nIy5RUg5U3I0d1TRcKhUAYNyspA2JiH9j5vS2zi%2BGHpSREcBxSckhum4h0hJzrTF9%2BEeGIV3BizzwElV9nHtsY6OFNcNaZOrEWiIBSlnKuAHBtfMHPjjpoiCPZvIeUNF%2FuTLsgsT%2FNXFuDc3znlFT0L6p2NJkLywXbB3ycJOrby3AWtyzMZPQojk0OD8BEYFuzzboC4iyd1hLs5L%2BJv7EXNn03XsQ4PQQA4ZKvMlhLVys5vsddUH0RcjeNmgca2YAknbxDuG6bg7NPcN1uv2Vt4uPXKTa%2B6bv%2BDWHcaE9PTlJJPq59TK4zZqB9%2FycdOBYu0ssEYd6VdD5TlWEhsj0lJvmkzxph1qpsVUHV%2FMorYemiQoo0TXHJbZ9dujXYdZH14I1tmAzSMK3UoPmiUroj0WZD%2BfJ8sO1a9bEUXvA8qWXbyYcuJ1xvfven06ZE4FT8vcp9R5c2fXY0Ti8uFyY44BF0QR0RPufTi7sygtTJxzAJOMXaAYqUHfWtdldm%2Fn9LcEq64zY5r9EUr7%2B1PcNlSAtkgMTIXkcqFWwsTv5sgbp8TcQfMPuhxskGOqUBet%2BnwbgDMZsdVSeT4yoF049NphCpDoxE2sO6NJo4MEE51iMetdVyuP9BUFt9%2BG9%2Fv4K4EwG%2Fzi6NeQ3ZTWCqU64b7Q0oPFeVfRPtFsFAG5jRoq0WPde%2FydmWYjRDWEQ%2FO1uCtNiZRS8YD3xJVuHODKYc4bYMVevLF2i68Qlai7pxtwQce5QLJNHmd6l0iFzxGKDQa68YRNnLHWfTh3jB66l3kiB0&X-Amz-Signature=7660f93287f8d48bbfd6863768d72c814aec603d310e33c00abeb05e7b8dca8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

