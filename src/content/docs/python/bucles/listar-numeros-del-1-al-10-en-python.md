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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTYY2XI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCICZ8aAVxMUk3dPfhcRMjswJlyl%2B1v5IFzTDB2hQOQ3ApAiEApZxWNtYxhHf%2Bqx7L08LrJqTA%2Fdj3UhnCi6qdVDMaGNsq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDOvubI7ddMjdaVCodircA65SlsdFGhMdmbot6L%2BIxq5KczvhRd0jxO2eJG20LrxRIHxiBmfFIJLwZB3nzzb4M3yRouQqivl5I%2B69ff6P7uXTvMimaBnzRmdBlB%2BN5tPSdLEICrHcE9vpcMbb0I9RDD7uP%2FERMmVBt4rvzPSelUl9%2B3ec%2BsAvOEu9A%2BrNm0sKAOlsqU4%2BT%2F%2BKobaPwRYgyCZUMK2ky4jEwprkYwES%2BxcdltHR01F4b5tKEsHMdQfX%2BeKk22WCBoA8HWx%2BwJCI34kWEWfCS3x%2FBGTKfLu1fhSEaf5c2AcSMulQr2g7qIEX9HPd6x%2FWIUGSZtuskU%2FvEg8EDc1dim9c%2FAw4Uy%2Fn%2BvL5UTkK1%2FvLJSQXb7uz3xubyrasez12JIcIXbydMU6f41jnwHPYG6Na70al6QXXJmG9QxnS0w94QZHfpYMh2H7GTpHNoL1uWxIerTa20FR85yiP4FfGv3kOTtTApMtkc%2F0oUTc8i2dpdmM7ryT9HEIEbnRzz%2BQ2Q%2BKbokKyXz6AjqLvFbk5BqOJ3PHgj4JGBvnMFPb6NwZZu%2BPqIFNmNbSoqS2NkpewAdStAE4%2BiSBlF4Fn%2Fq7H1hIJPi6a6xJmzJyn%2B5iGOCW9IODWy%2Fkz%2BDHeB4vwW10%2Bgasg8T1oMP%2FIxckGOqUB%2BY1rxjy3A%2B9E1IF7pm3Dh6vDF%2BIq6Q%2BHvuuV%2FxBBqONOFInk3e45rF9eKjYkEZtKf5e23UafVtOnEo%2BcjnpmZHi8nd3QPt3Z1kevq9jcyX3Sukpi5Q9nOuqDb%2FcE5uUlQdVfYJCf9MwUxaLwrG7Ul%2BeUorZQweJLazGTbtFjWpT4bI3yyPChV91ivTb79uNgUcDdBzUEsezvvSmzXxvBDzdPjzlT&X-Amz-Signature=eca68c58c6dd0d1bf116a6b47b37601ef688658a9a8a3c1d0645ceccce830c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

