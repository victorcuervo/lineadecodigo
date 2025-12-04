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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN336IPL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T024644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCcJXEPx%2FIETTPaEFbjrNtc6PGPYCH53WYnGqJ7YTLzVgIgbK0HSN9zA%2BAVJcdSHcezSvSAoOEOiMmjbyZGDQY9xBEq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDKTJtQLc27sSOcb5ByrcA5r3b1LifLtI%2FqIv8A88GaN2hUuHKHP%2FtF9r0tkz%2Blke3Gpaq06zBisExOBwDPyICPgiogZRJCJoyybd1DUQs75VVOp8WhAPdbUWGuYztJgcPFjY0v%2BkjtFcETHqTpAZjBZAL8vHZ8x3wHdds322xl00pRX9DsGHqEvarlPmXe8Nwc5uTmQUo9AKBAFnhrk9WnZmrzkdPbu4Rg1mrADzbU8QJ6Bn9FUYVC4dCsECPFTR5y0EG0KOPu90HQZ%2Ba5GV6QhbKIHkqVJgFQ2qhZe6%2FBnxZ474G54shfzMg1sgjm80SY4G1aAtciJjj4H04XOqJv5zbZrGzheZ%2FGJH3Vy7fpbBvP97p9vivK5Fdo0fX550Itt1IwxEG5gk%2FolQH6w1cb7kjJBT9mEmu4HXAnGQzKp2qro4W9eVHN%2FvYCFxyCAN2VIhPpJn8S%2BArlJ3ahq9EeJ6aMp%2BvZBX0xKe2%2FFkwqShABPFY2E%2F3enzYoyFZk%2B%2F9oxdbS9DLUZinYwiY%2B3sXRwjpcQadFF9u3gXuHm9%2BwImrUWTXw621%2BQxMi4DTqBDDwxkmDVHkSbslhDRN0OdTn3GpTHFEel0hONVziyNNw9ZshJh8E44vIpeNU6GI4Klr3r2YhgkJmriB9hkMI7Vw8kGOqUBcu%2FPlSusKU3FCyw4eXHrR0pY8G4g0amQaU%2BJ9GkWNBojAvTsGO3qYXmqoMhpBssXfCDhRM%2F0263bQ8z%2Fm8vJLnBuQTDnStaBg7exfcmLiubLKgQtExSf7UpbffQT14U84T8en0RSZEZN0pAKjLPNKkJGSB5NhcDBjnGJ3DbnhZeY73PVClVVQLZRPV59%2Fly%2BNLNpPoB5RcKg4RzrIf5FBZzeEbYu&X-Amz-Signature=0e94dfa603df72e0927fa79aa560975f4895a0108ab5ecd78999baf1f6afc729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

