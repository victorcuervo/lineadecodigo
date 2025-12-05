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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU3NKI33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG5W6BL%2FTUxnhmqwf6%2BbsDyfr1zF4JSIo3ImxKB2IFUAiA9mQ1DA5R9NyfEE11Fgy1qQKbfKEpT7r7J6tO%2Bxf%2BF9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMW9UzO2GFyGUhhdWDKtwDJzUsKjXxsXZiRelQtRaKSBtSqF2U4cQQJcTxX67Y0gStP72aky2y1CNN4GmNJ6Sni3CunsppEHnNZ1ZqNHpQaNYcd2gjWsr5SfAHLyOnIiV3lK5%2Bvc5i4pBKKl9vG7Q%2BF%2F4Ig5lCH7wCN2aQJ8nSi1xOvRdWx6dXPPi%2FZdlSWaeDWntuL5a4Jk0cLpj55lBzZqIRLq9eM7sbob9ei7UuEJwCTjBbyzn1oQ427c4Mshzbe%2BKCVVgDq%2BCV2jy2FwLcqyFAaVSY8H1HVoS2wc4zfPp70rRj193QKXLbYIV%2FPkFAkK8d7cjRJ4R7Tc%2FFn9c1rtsWMFSyKuw2tznIlJtbnZn2vz9Ztw7WSEO20A9Hwyrlmd6%2F1VQtx0%2BzmDeBG0zw6tRD98DVYdyn%2BRkVPsJmvnCGAjf8bEKbHLM9dVBMkQeZbKH71hXpq4zzGE0qy3OP02vtw4PfL%2FWNotqhLaJqQWcpUJuRgikXhMbgSP2k6x7TnPrqCA3DmHto5e2e%2FIOnIOaMClF33luDXowUnYi8QYVwEzE%2B4Faj47C152jZG%2BeaHM6EPqwWR36f0%2B92TDCN9rVWbe14eDvT%2F324wbFj0k%2B6Fw2ZLdPPAc3aV2%2FesRD069oOhgVok9tafMUwyozIyQY6pgGdXV8sQNciUZsFu28wi2UdigFtVhM71MN%2FXtbf0Raf3Zwv%2BRxvJWSVaHQhZNzCxtfI3nGwO2dIYHiMK%2FpjpCxAkO1%2BIfn5DIwdN3TuM1IF8yrwnLPMP1QLR8nTBX8e9DPlBunjGuP7v5oOKKf3OOP8RdfzvKRgGLkPDbGca3png1RwgudN%2FpK7sin4wOc0iIQsCZN6ok8%2FsAFJSUkKoLRMpzqrm3qr&X-Amz-Signature=8b64e7a53fe127af264d949bec4fd02cb82ae64a9e38d4615916ba850a4a2f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

