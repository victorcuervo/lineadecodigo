---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6M46MK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICkM7L3BB8Tlvz%2B6m3gbMhRlAX4ZfLmy88gS08fiT3gOAiBLC5YNfkHdcZmj5hUPIGZnRHcRSOfAZuHbE0Gg6xO4OSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMgpDGk8epYvuLf53vKtwDlSH3NRmKgXCPcktsICDwHyGZHoS67vcSoqzzjA6Y7VZ5w7lEt%2FZUn%2BnxxuRnBPHVzgTMd83NFwsa%2Fnr2EyPfNfCr7BmxjMJ1psRRSxeRpe3LztJ2kUmV0NALfvjNnqczkLPtOlEzlc06dudJohmNcpc1jQuAAeqmU2X4FPqEpk5kHz5CDPHl4mq0TU%2BS0FzZU976OXrsOOF1Bp2xZ7NmfSy4nrxq9KUICkAmWrMfnQWB7HyEUryMnTOw4k7CPULxplAWbMojttb6NSds8Ns3l%2FQEUnnIcng9JvKsEaALGVPTBFycKyobRYFEUSF7Rfb19adciiKMpLcpCul2hzzy9OeSwxlnVqGYu9SIjYun6sDiR37s7NssidfOs1bRmGTnNzKV61y8Lz5%2FLbTiRn4YHiqBuvb4VzOA4LWdQMXvFd0BnBr%2BVPPHNwZ0WcGRZK0cTEFaws%2FvWRe%2F7W%2BEdEaiWL%2BKV3dlkug2VVDFLORD4DUFg1P%2FhusuANmbGv6LodC6%2BfHC84Kdati1QR%2B6GozVXp1YysDOPfu6ru8NzlqgA8MQ4lhoKDbXRQAI29AHfF6OixuTMLnXhs2iBvOu7I5dexTZow%2BsgRrckk0cfY6IqVRJqIDdaDQy8cpf0Sww4%2Fa%2FyQY6pgHCj50uaEW8I7QNet44jdEprUcYu%2B9UhdN11RukiMglHERqSMC%2Byj5EGJn410jXDBQz9yzzaGVzYVvDTxKNCQidMpG2Q2vt3H%2FPaGI8dbp8zPAWT9ebObThAizI42IzAnoRph7v492HqLHKBIsdf9DyLtm%2F4ss1rbxgHr4cqfXiQNklIyrSwFTx4%2BPJFqvNToDGqJVNSxOL6wJ6ts%2FkjnZJKMqPJ%2Bra&X-Amz-Signature=66cc78d77de54182c004c684ecf2b157259055282154d071d7861e7b73b94d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN6M46MK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCICkM7L3BB8Tlvz%2B6m3gbMhRlAX4ZfLmy88gS08fiT3gOAiBLC5YNfkHdcZmj5hUPIGZnRHcRSOfAZuHbE0Gg6xO4OSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMgpDGk8epYvuLf53vKtwDlSH3NRmKgXCPcktsICDwHyGZHoS67vcSoqzzjA6Y7VZ5w7lEt%2FZUn%2BnxxuRnBPHVzgTMd83NFwsa%2Fnr2EyPfNfCr7BmxjMJ1psRRSxeRpe3LztJ2kUmV0NALfvjNnqczkLPtOlEzlc06dudJohmNcpc1jQuAAeqmU2X4FPqEpk5kHz5CDPHl4mq0TU%2BS0FzZU976OXrsOOF1Bp2xZ7NmfSy4nrxq9KUICkAmWrMfnQWB7HyEUryMnTOw4k7CPULxplAWbMojttb6NSds8Ns3l%2FQEUnnIcng9JvKsEaALGVPTBFycKyobRYFEUSF7Rfb19adciiKMpLcpCul2hzzy9OeSwxlnVqGYu9SIjYun6sDiR37s7NssidfOs1bRmGTnNzKV61y8Lz5%2FLbTiRn4YHiqBuvb4VzOA4LWdQMXvFd0BnBr%2BVPPHNwZ0WcGRZK0cTEFaws%2FvWRe%2F7W%2BEdEaiWL%2BKV3dlkug2VVDFLORD4DUFg1P%2FhusuANmbGv6LodC6%2BfHC84Kdati1QR%2B6GozVXp1YysDOPfu6ru8NzlqgA8MQ4lhoKDbXRQAI29AHfF6OixuTMLnXhs2iBvOu7I5dexTZow%2BsgRrckk0cfY6IqVRJqIDdaDQy8cpf0Sww4%2Fa%2FyQY6pgHCj50uaEW8I7QNet44jdEprUcYu%2B9UhdN11RukiMglHERqSMC%2Byj5EGJn410jXDBQz9yzzaGVzYVvDTxKNCQidMpG2Q2vt3H%2FPaGI8dbp8zPAWT9ebObThAizI42IzAnoRph7v492HqLHKBIsdf9DyLtm%2F4ss1rbxgHr4cqfXiQNklIyrSwFTx4%2BPJFqvNToDGqJVNSxOL6wJ6ts%2FkjnZJKMqPJ%2Bra&X-Amz-Signature=674b207dab94f51101577662dfef41375cd9033fc2517fe4657f1c22df593b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

