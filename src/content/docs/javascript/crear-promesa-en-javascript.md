---
title: Crear Promesa en Javascript
description: "Cómo podemos crear promesa en Javascript para poder gestionar procesos asíncronos y gestionar su aceptación o rechazo."
lastUpdated: 2024-01-26
author: victor_cuervo
---

En este ejemplo vamos a ver cómo podemos crear una promesa en [Javascript](https://www.manualweb.net/javascript/) para poder gestionar un proceso asíncrono. Pero lo primero que tenemos que ver es, [¿qué es es una promesa en Javascript?](https://manualweb.net/javascript/promesas-en-javascript/)


Una promesa es un objeto [Javascript](https://www.manualweb.net/javascript/) que nos permite gestionar la terminación de un proceso u operación asíncrona tanto si esta operación ha terminado de forma correcta, como si ha terminado de forma no correcta. De esta forma se permite estandarizar la gestión de este tipo de tareas mediante el objeto [`Promise`](https://www.w3api.com/Javascript/Promise/).


Los posibles estados de una promesa son tres: **pendiente (pending)**, **cumplida (fulfilled)** y **rechazada (rejected)**. Al principio, una promesa se encuentra en estado pendiente. Durante este estado, el resultado aún no es conocido y la promesa no se ha cumplido ni rechazado.


Una vez que se resuelve la promesa, puede cumplirse o rechazarse. Si la operación fue exitosa, la promesa se cumple y se retorna el valor o resultado de la operación. En este estado, la promesa no puede cambiar a ningún otro estado o modificar el resultado.


Por otro lado, si la operación falló por algún motivo, la promesa se rechaza y se retorna un motivo o razón del fallo. Similar al estado cumplido, una vez que la promesa es rechazada, no puede cambiar a ningún otro estado o modificar el motivo del rechazo.


Es importante entender estos estados para poder manejar correctamente las promesas y los procesos asíncronos en [Javascript](https://www.manualweb.net/javascript/).


## Crear la promesa


Lo primero que vamos a hacer es crear la promesa mediante el objeto [`Promise`](https://www.w3api.com/Javascript/Promise/). Tenemos que saber que el objeto recibe una función la cual debe de tener dos parámetros, el primero para cuando la promesa acaba de forma correcta, será el parámetro [`resolve`](https://www.w3api.com/Javascript/Promise/resolve) y otro parámetro [`reject`](https://www.w3api.com/Javascript/Promise/reject) para cuando la promesa no acabe de la forma esperada.


```javascript
let promesa = new Promise((resolve, reject) => {});
```


Vamos a pasar a codificar la acción de la promesa. Como comentábamos la idea de las promesas es que gestionen procesos asíncronos pero pueden resolver cualquier tipo de tarea. En este caso vamos a crear una promesa que simule un número aleatorio de un dado, es decir, desde el número 1 al número 6. 


La promesa terminará de forma satisfactoria o cumplida en el caso de que el número que se haya generado sea el 6 y en caso contrario terminará de forma rechazada.


```javascript
let promesa = new Promise((resolve, reject) => {

    let numero = Math.floor(Math.random()*6+1);    
    
    if (numero == 6) {
        resolve({ "mensaje":"Tenemos un 6"});
    } else {
        reject({ "mensaje":"Número No Obtenido", "numero":numero});
    }
});
```


Vemos que hemos utilizado la clase [`Math`](https://w3api.com/Javascript/Math/) para poder [generar un número aleatorio en Javascript](https://lineadecodigo.com/javascript/numero-aleatorio-javascript/) entre los valores 1 y 6. En el caso de que el número sea 6 llamamos al método [`resolve`](https://www.w3api.com/Javascript/Promise/resolve) pasando como parámetro un elemento JSON que contiene un mensaje. En caso contrario hemos invocado al método [`reject`](https://www.w3api.com/Javascript/Promise/reject) el cual recibe otro elemento JSON con dos atributos: un mensaje y el número que hemos sacado.


## Gestionar la promesa


Ahora que ya tenemos creada nuestra promesa deberemos de gestionarla dentro de nuestro programa. Para ello tenemos, principalmente, los métodos [`.then()`](https://www.w3api.com/Javascript/Promise/then), [`.catch()`](https://www.w3api.com/Javascript/Promise/catch) y [`.finally()`](https://www.w3api.com/Javascript/Promise/finally). En nuestro caso vamos a utilizar el método [`.then()`](https://www.w3api.com/Javascript/Promise/then) que nos permite gestionar tanto la terminación correcta como la rechazada de la promesa.


```javascript
promesa.then(resolve => resolve.mensaje, reject => `${reject.mensaje}. Salió ${reject.numero}`)
.then((value)=>console.log(value));
```


El método [`.then()`](https://www.w3api.com/Javascript/Promise/then) recibe dos parámetros. El primero será la función que gestione la finalización correcta de la promesa y el segundo el que gestione la finalización incorrecta de la promesa.


Como podéis ver acudimos a funciones arrow para codificar la gestión del valor devuelto. En el primero simplemente cogemos el mensaje y en el caso de finalización incorrecta vamos a concatenar el mensaje con el número que salió.


Además hemos concatenado generando una nueva promesa, ya que el valor de retorno del método [`.then()`](https://www.w3api.com/Javascript/Promise/then) es una promesa. Y de esta forma en el último [`.then()`](https://www.w3api.com/Javascript/Promise/then) es cuando volcamos el contenido por consola.


De esta forma habremos conseguido crear una promesa en [Javascript](https://www.manualweb.net/javascript/) y gestionar sus posibles valores de recepción. ¿Ves algún ejemplo dónde puedas utilizar las promesas? Déjanoslo en comentarios.

