---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KL2YS6A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCp2XovqP11OzCzc9%2Bq20k%2FjqpEqE00g0EWp3Rn77IsQIhAII0vvYo%2B3nCcFBrWoFQa3bpWi8AmnTomlVI2bzJWPs7Kv8DCEUQABoMNjM3NDIzMTgzODA1Igx2E7mZYB7tuJdimGUq3ANO2Z%2BRzuTYdUpdBEYUFtxVapl7YCICqAWfIEZHk39UxaBr3TpGP%2Fa%2FybR2gYmKDNAslldHGbqMsHaY%2BpEjNg6cBpd0KqcQmQFspCf1%2F3y3ZHwIorK3y4S2WRgu3n9ZMZBCgf4ZhdNj1YTsTDV%2FY20OszY7CkaIlYCrPLuqhbVUBaJSE6FTxP7Qkv%2BHYgcaYredFp5rn7lAZjat%2FdUttOJuz8EdYHfFalSMOFo%2BrLf4qRRh9RMUiCWk61RP9y2ixUEkNe2A1ug2M5ddQdjHsfns%2B2qt9U%2BBJ034YdjnanPKmHKEOEj%2BCwWN18nN%2B%2Biu3PqdyyrVWgZOO6otirxwfg7bUmEh15LgiSknin2LGSLTPr4U%2Fibw5XMWTCyyQ4gLuvwCpWl6DaiWamzIvRF%2B584C7biyhg7WaX6Vhm9a8Y6WhI%2FrK5bTohRgABEeFF4nX2WgkiQ0RxyW%2FKxnwAoRjxwtcRupCuB61MNPTQ4%2B2JTArkZ26BAaL17RguQKCeDwoqGtTZgUu111xuQKDut6oB8OfJW1H69AwwYyHNtfxQ7X%2FSMOiUJg0r%2FmN34LZ7wRsjb0OJB5JP%2B2p3G%2BvnwPNQd5nFsaCO9jW5aY6v%2F1HCGrHkgnCQJxX6FglDC0fzD258XJBjqkAVyVZm8Od6mxyAP%2Fz%2BI1RnNeS0BRkOKcZEgIAxnjBwQcHNLqP3Uw24UF9psAEkT4pYVbycs5aqR8%2BxxwHLoE%2FylrFqDz1Hro%2F9iISCKEl86xpufwAkcFea3IyGqbZs5CCxadM6y44wP3cHC61%2FPBBkCK4k7YiaC9NvynFuynj1xRM%2BsewK2rH4LOLz62ZR%2BMLhMS2JeKm6emtKNeRTk2L9IfICEr&X-Amz-Signature=afa1c372213791fd394e0c07e2116b03f5db71f7230bfea719756dbbe9b14906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KL2YS6A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCCp2XovqP11OzCzc9%2Bq20k%2FjqpEqE00g0EWp3Rn77IsQIhAII0vvYo%2B3nCcFBrWoFQa3bpWi8AmnTomlVI2bzJWPs7Kv8DCEUQABoMNjM3NDIzMTgzODA1Igx2E7mZYB7tuJdimGUq3ANO2Z%2BRzuTYdUpdBEYUFtxVapl7YCICqAWfIEZHk39UxaBr3TpGP%2Fa%2FybR2gYmKDNAslldHGbqMsHaY%2BpEjNg6cBpd0KqcQmQFspCf1%2F3y3ZHwIorK3y4S2WRgu3n9ZMZBCgf4ZhdNj1YTsTDV%2FY20OszY7CkaIlYCrPLuqhbVUBaJSE6FTxP7Qkv%2BHYgcaYredFp5rn7lAZjat%2FdUttOJuz8EdYHfFalSMOFo%2BrLf4qRRh9RMUiCWk61RP9y2ixUEkNe2A1ug2M5ddQdjHsfns%2B2qt9U%2BBJ034YdjnanPKmHKEOEj%2BCwWN18nN%2B%2Biu3PqdyyrVWgZOO6otirxwfg7bUmEh15LgiSknin2LGSLTPr4U%2Fibw5XMWTCyyQ4gLuvwCpWl6DaiWamzIvRF%2B584C7biyhg7WaX6Vhm9a8Y6WhI%2FrK5bTohRgABEeFF4nX2WgkiQ0RxyW%2FKxnwAoRjxwtcRupCuB61MNPTQ4%2B2JTArkZ26BAaL17RguQKCeDwoqGtTZgUu111xuQKDut6oB8OfJW1H69AwwYyHNtfxQ7X%2FSMOiUJg0r%2FmN34LZ7wRsjb0OJB5JP%2B2p3G%2BvnwPNQd5nFsaCO9jW5aY6v%2F1HCGrHkgnCQJxX6FglDC0fzD258XJBjqkAVyVZm8Od6mxyAP%2Fz%2BI1RnNeS0BRkOKcZEgIAxnjBwQcHNLqP3Uw24UF9psAEkT4pYVbycs5aqR8%2BxxwHLoE%2FylrFqDz1Hro%2F9iISCKEl86xpufwAkcFea3IyGqbZs5CCxadM6y44wP3cHC61%2FPBBkCK4k7YiaC9NvynFuynj1xRM%2BsewK2rH4LOLz62ZR%2BMLhMS2JeKm6emtKNeRTk2L9IfICEr&X-Amz-Signature=82d625bf853c6a893dc3099fc3de1e2c492e860b144e37f7eba431081fe2769e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

