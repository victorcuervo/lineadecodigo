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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMJGDV5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T131556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYmzpLl4q6q9QN8trZDDYsqo72TMer7prh2OIaND1IhAIgDRXW9VHQouuoJ9vLZLIdnj19LmzG%2FKy6wrn98y5vL4Qq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIj3N0BTmx5Dvjt9qyrcA%2Fv8vBFBPQIraBp3ZYyVC1bqJ25Fwn%2BSbSvxYRc6K8GA7p4Igjnk3cjpjqYk6EGRssw8AxcqXKdkygzRBmFb%2FzdIHDljcZh9LzTLJyzbtLhVQKVAQ6QuYPLUBtsDCMo3AFWTpgyr7N1ROHyrDplmZjyD7BkEvorsftIOSGm%2Fl9ZxxLS6ErjI8YS9Xm2ahFO%2B48W8UGaRVq%2BenN88awk0EUVxHEhQuaaraKXV8ASNL1g7nU8K89SHywe8fsAWBD8irvFZxfJbQnyPgq5Jokdy2ubDJecU6MfYCQROM6M2gcfXMwm5dwfF%2FEizxOnCFn3uDYj0pG%2FQUuVlllebGg1BRokNJdrqz3oT9XEiMDQoMiDdeQDYtNpzdqkatm9M9c%2FebSF527aqonDbxfo5RhVnYagdrNPhM0LKROGi0btfyIfT9V%2FRanE0GZEyIJfwfrXKcem7UHgWGIKYM8sJiMJylO3U4l2pfShjKjO2%2B8aQs0s1IWqhqA7x9Aa%2FA4eShCpj3CzqSGjOLDUGgUorJDU4u0DUuLsQ%2B1QEolrlE0conY8FFXPG3SOzh2U92hYJ188XJ53zDIY7gQKShgfXxX5VbRRjqd%2FPFAzF6irTWtVOR5kOWdpq2cDMFAjA4gF5MKbHyskGOqUBJhjOkmlqpKBPy4H%2FTEosfDAqFz4Z01rYaQjzHOJhvB4kQi9fEPN8AH73OdNmX%2BTa4fW5RPD7scQEMWuDGzdMOISNvwHyBfscBWMV23fsp1PiUKdyB%2FEKDLSzU3hF8hnwe1nZl9eIp%2BKIhNOcJ5i3FxJMrDeGMpge28w4jvimNrCCLZhQ0lLBUBmwxAdQ9%2F6FlZNcpnxoHPkxBRO%2FTm0WQy5mTTJq&X-Amz-Signature=c1ee3578bbf5f040f1681abbac738e634707b1c480448a731f4fe7b204ccd32d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

