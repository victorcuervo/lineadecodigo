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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJCIRA7H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGl0qG6qrjcWIBik1BQg8TxGPGlfeXNznZa3aM5SM1IyAiAN1UFb0qNTc2tPBX6wD6URQmdIr9fLndFbJALJ48I9AyqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFXl7tzbc%2BOaaNkYBKtwD5TA5bDpdfsd7WKEPw2tdxBGzisCbTMb8%2Foq%2BEfYGgGDEtCc3layhyJ6XF2lVV9%2FrZbxVrTvB9KyubdOsFb85HrqAOGNKWY24XK28RqZMYuBXsOfxPgrnBsbC7kqWxKqmGchKsku10UzuJdfDbX6Iggjkhxg47y8CKz8k7yp%2BcXC6fB0%2FkgrfMeOJus9V1YI%2BVAV19NOttS3P%2Fuy9IEvgSt6U2s2Wv8WxT8HvdTP21Zf2ySIsKSJrlz8K%2FQLEimw9JLrviTDs5cSRIeCk8CSxl2AYVL7cQpH6xosImx24EIjGr0JnresDLerEpXu2THQid1ycI4lp7a3sC6BVL2vA2ePn1hSi6tSX%2Bm5ADsE66YYCuLF8xKp5YUaHvhCfPRzCU8%2F%2BN7ep5jWVaVzxkry0OVnITBGupPqKP6CK%2Bk3RYlofylVlzpbiXQ2J%2BmiNBJ10Ou3Snfn27cCiVUtxyT3FCq1uQqpFcKaoNuemjtU5Kr8i6xELzGqzzU0NXVPJ%2FVgRoLOVs7XSjLGLB%2BX3pUvmNXoV1NfPfhWhNUboXIn14Ro%2Bn1MI0xZXELejHKUbWZ93qZbEXiJ2NQGYH7JaULgY35t2fZgNoljOYWMoCKvcnoEbFbga54FSok7cTtQw8NDZyQY6pgHiN2MjhPXsREafiZafmtlsvScnrA6xXa3mQ4PmCBzQXfLgGMYxBl74E%2B9S5fs7qMVbGNqoNEbBJ%2F0wA94uc8alnqrYozQYOGCVHFHuzE1uk3JZTw8T6fpvKMCFhA78l0%2BLJeZaohoZ7haAlyr5xWC315gTU%2FQmR5Gifo47jS40HXz3OA2l8GM3KmHkWeSBD%2BpL6jXLymzCsaTYKcttYGOUt3Bk6M8b&X-Amz-Signature=f61dbde63948ec727a05162ce8dafbcd34611bc464f30f13ee473791979ca8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

