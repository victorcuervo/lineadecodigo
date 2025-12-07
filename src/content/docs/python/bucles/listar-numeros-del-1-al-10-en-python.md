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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YM4GVZ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T013940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAg33fLo3i11glupOCnjU%2B792nb0bVmyNqn2lG1xAMaQIgLIGkK1cNQ8Xyy2ONG4TLOye4poz%2BEcGLMSZ8FajwV7MqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHIl29isRusDdOsMXSrcA5TkX35JuBzOKDKUmHIWTPI9IwUzy6EVtoiqUUSi73xvimNE59TKiwiln%2BIcUDe5JtupEiSS7Uegv2WQ44Ibh3tcBg1iHR37608EV8geYsLS6dVZJO2RZXpYzPzGrbzPZxB%2FrQsnPPSKvGwgvJtVk4xK3HlA17p%2FkTOOic2zI60DZczAyKm%2Bgx5PaESyWyzPlQfpIpAnR5FOzGGw5J32PWub3TC7UdgTyHCpSrZX%2BnNMVythjikX6xMcJ8paZumSB9aYeZwnp6U85CJw0AA8MyZkUb9FN%2Bolrjl5rL%2FiuUOsqnNSKi15IAyCdyXZtH2EKRi92MG93%2BVckVrFufrWz9E79PUAwIYgCvXGcV6mV8VpfDRwWKaotVGup4X1ZNsX3Xd%2BZotpyj3YhgeWdjUt7BYlcVQYaRuW7%2FPlBNJA8JVREf%2F2euYq54MKg1JCGh8cghLJrfzqbfedo7GXySWXvn0LrWb%2B%2Bu97pfvWwbXsx6i4X92NNZndzDLoO%2Fw%2BCgT1yRldUBIi7kNonS9%2FZHcor9toD4YRV0A14bWAxaNjUSFA%2BDlN3IiXtz5c9gYDs5ISgRpQ5a7JlOd%2Bpr8bLfubndqTs%2FVHhFKR1Nod6n%2FsEr9yHRPl9cX6TEYgmytXMPf90skGOqUBu49mI43MqI6auVlxaZEPlXRhgN95xF5RF9DdpFTDH73felzgIK2bVosGrBBcCcWzGyykFXoB4Ds3Jxx7vjqPvee5fVCY%2FT8P%2BtP9OKF5T1VLnKtpqDzx2bLNTO%2FpEV8mCKFLJR8sOqykYeZW%2BJzksOLhjHxbdgrnIBb3QEcWJLt39CCM4tacqk8%2FGV90bDkwlwt8ZnNIwQq3ZYTcMpbAmyoyCj0v&X-Amz-Signature=bc507158e8b9e5bfc1bbd40986b1d14282513a3991f01f455ba832747da27182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

