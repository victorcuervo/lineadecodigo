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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTOBJXVO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIFIWI0FEyRq%2FomBHTUcHNxV2lL3Aw5ZCCdh20jeNMZ83AiAt8I1h5xgC6mBNUhO2ii5XGy7A%2FUTLxXVj1wYn8k%2B5pCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM7KaSlMD5JjsC0ex8KtwDf7VoagRO6mpSPkev%2FEZgZNTGGMsEjN%2FUjBHkcSQssawAPerSu6AZO0Dtsv3EfJWtdgYckWuDeVk0ZxruvhqraEm8XQFk81F%2BmVNwm12SQYQAENDakCdqiiWkwpTD%2FwExpfObNlzRaN6geZaxT6J0iMflIrD%2FatXVYNE5Un5wbUHVpaZoeMluJd7Z%2Bg9gk44zF0jJ38iUAgjMwpFlLZlqkbPQe0m%2Bv53bZ%2FNnNr1%2F22BM%2BcoTOoMfHjighGd%2BD174zu9rbl4y2JrJRv%2FbbtUueUJnlpeIygE%2BzcrMbfhNCBAqazVav3%2FlWJQfd4bwND4ci0yiSmu7LkBAvDO%2BaUP6vr5222zk9nh04fykxDuPCzDIGgkz%2BL%2BNBjbA8NMBvLxHum4U6yjCz7xT%2BFy1uLp%2BURCNmrbwGxz6KEEKbN%2B5fIQjXZoA1mwRT5SQ01CmQD4XXapYqaaSXBsfHrJv4DolRNdBY2QOKKHW5AYRmsRKx9MwB2YC34rNuY2Ow5AY9ZAVTL3KSlINeDPYOhmnz9wuWINQvvnqzKZT0zfnUHEiHvgLIF9M6L%2BTXtGRKGuDqBap32wx9tnI6rQhaSEJ1QH3F%2BqrB2LZnKT9bRjXUbJ%2Bdm9ddkK0diqq3SrCeuEw34PGyQY6pgH0CLhgx4yPr%2BWp%2FvgVY0DsqMcXN2En7fV0zvHuqgIlFPHDLZc6VBJ%2Bp6PmGPhQ1aD0iHOifA8FfCll2sPk9TgfOwhf5MzYr5jahRLAxfUyKP%2Fm8PJH3a7xE4GGWIAN0eQynZLrPEaieV4BJZCCvxSCuQ0Ro4jbjwsWy8jZKMfR8hhKy6CKgzS1E6YxdPIV4y%2F6mWwu0MspF32D8BMjsxSsPgmyYPtz&X-Amz-Signature=640a959d24f366c181aacdc5100338e87ee76fa77ce5be39a0e5504a8bb8683a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

