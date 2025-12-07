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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJCTWH7I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8TS8Y75a3N%2BF%2B%2BMMENIOT6tmj5CD2txgfStBRgNkHAiEA5oN13HvmAYFKY0EA708T91HQNzGeJeal4eNy5Vk75r0qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrkQRrMxOweP2QBlyrcA%2F3oxDaIZsprEX%2BH11o6iJdlibIuv6jyL%2Fi%2BeZD5D%2Blo4bFX7ELKPwXf1BgdYUJhOYAmsv2r8MwTP3Vpg48iUbIMakcOps0XM4ArK6Yx93pnQix2RYvqNt5dSm%2FY2e5pD4VEHK%2FIU8k9EsFcaI5PNzuGXbiZFuNOZ07iWCK0T3TNhy7YN4nWJz7XJQUoanHAj0BVT97%2BiT47NkI%2BIUZi6ckmIBf6TdOKBg6QlCkOlc7IhST9ik39cZ9GEGRUmiz05zlJyqognfw%2B9wpX8uTjFGmPYzYXr%2BvSvzkaYz0p19F2fd5%2FdwPYoYSUtrZNA6xXCkvaB32QlT7aLiv9SIu67GoJQ1JZsBxOGbkAQ2%2BTvn36AwOmv4juaGO3jm%2FKyAC6p0QGi8XMq%2F%2BsqEtyWd0SBReAqqmGqLmFCZp0%2BqD2NU9ApEQ2ro6W52VhyB7DoofCtuamCQqPHaPRKMZtS5fdlXHzrG4DDOl7zmaiCxrKgnrXXzRr0RDb8p8kEmrVYugtGi3avVDYOyDN5imxQnLSyZNfUXoLpeRh5EJq9b3kJ184fYk3jdT1mpvxX5Nx8bNzzGqDKtZ0tI%2FGtVS4XkAY5USLVgogBTD3dJvzKYZk581KR%2FBfgNqY02UtbcAmMLia1ckGOqUBGQyQJcMsZHDHOmwaIqbStuKrga5DQxuu1QnI%2FA%2BJ%2FW9Aq6rrL75AF0iVu2QuojxgwVti80XM2WTECJs%2Bmc4hhIMs28cFlFs078913TvI34Cir%2B2Y0acW0FySda2j%2Br2inL%2F%2F7FtWsvcfPpxFk98so%2F5yXVV4FhkgxudMWtcicaW6zgOSsJ2WzIEPkcpa8KATrIQ0wy9275m68v60qMQwA%2FWOtRje&X-Amz-Signature=56a16d3f7b25dc650306e7edeb6702a38542ec9a9815b3614fe9a86c7cca976e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

