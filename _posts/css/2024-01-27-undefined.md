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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA4O5CE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF3aODnANcPTfQVNoLsDnxUv2iuRd7%2F3dDkx3Ac7GumBAiB7AXX4ypOsfB6VMNGLE6H0rXtknMfuPEjI4HJs4%2Fs%2FiCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXAVQu9%2F8S%2FUax74tKtwDjWaN8lBbrfiDPfsQD9l4NNPKO%2Bi7x6cQdl07aeKJ5idfptfvE%2FS2Le9w3kSZTA8fRbqco9z6RAsXeQYHnVTg%2BSmNeCiDj5DT4A1iTj8o4%2BX1I02bEvk%2FmA%2B1VNsZICYdaexwcbHFafhs87UkqG3NWEqGrmWgqLMBDIMRv0DXV3gb6rw0jSr%2B3cQ4oCvb9H69ykUaxuqVSiR92FlorBmwfLTdUmGXKOI4bTcT1Nk7nYEmgHTrvarhyeBH%2BLkduB91gAIZpNob7jH1EGNV93UB4uaqioMxOzhw7ODsWf3omGFYSEl%2BuSFKq1T4m7RzSzWdtQp24SslX8NJYVljbhNdOwODOe223wRJof2OFbn1cI9JP%2B0DzqYXqp3YF1hVd5pVJt%2Bssv1GoEqhD5dLzBXsSmkkTq%2FecPv1RrlWY%2Fj48toXBTgvDTyHGFNgwTt5kd9K1knJsGJuDt9z8TDT%2F7JN6tG4N0wx35thINCBCcc2OlL8EMdcBNAE09pGrATIwhW8%2BJLjA%2BglJunfJD8ktLVaqMvK83xI%2BRg%2Bmr9tlkXwX%2FW8EO%2FiTp1tXPZYI06uXS8%2B0R1zkd9sHPqu2eC%2BIiXuZztvPWiGh%2BmyK6eTxkiL3dlsmMdpLZgZGr4VW24w1JS%2ByQY6pgFM5odfgyTaet1IPWM%2BSFhEfv26D3LXefnQbOyJeW9enAkYK12nnfQMfPVvTBr33B126rM5BW4%2FIwFGQgqdDl1b%2B%2FAu%2BnNwbY3M4ieegQzf%2BjJGRaTtzBiJkNnORVbuzXyftn7K85QCB8WT26v8Snkjja3S4VJTtbP4V6IrNFPNJXdjjVWXK621%2FfmknttKz9jbk4GW45r3BjqPidWGxOzL1dlEafQN&X-Amz-Signature=e3084d9efe84c362c16107f730cefd43d70d7d4b1f355ccf5fdb8c9dd071f434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPA4O5CE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIF3aODnANcPTfQVNoLsDnxUv2iuRd7%2F3dDkx3Ac7GumBAiB7AXX4ypOsfB6VMNGLE6H0rXtknMfuPEjI4HJs4%2Fs%2FiCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMXAVQu9%2F8S%2FUax74tKtwDjWaN8lBbrfiDPfsQD9l4NNPKO%2Bi7x6cQdl07aeKJ5idfptfvE%2FS2Le9w3kSZTA8fRbqco9z6RAsXeQYHnVTg%2BSmNeCiDj5DT4A1iTj8o4%2BX1I02bEvk%2FmA%2B1VNsZICYdaexwcbHFafhs87UkqG3NWEqGrmWgqLMBDIMRv0DXV3gb6rw0jSr%2B3cQ4oCvb9H69ykUaxuqVSiR92FlorBmwfLTdUmGXKOI4bTcT1Nk7nYEmgHTrvarhyeBH%2BLkduB91gAIZpNob7jH1EGNV93UB4uaqioMxOzhw7ODsWf3omGFYSEl%2BuSFKq1T4m7RzSzWdtQp24SslX8NJYVljbhNdOwODOe223wRJof2OFbn1cI9JP%2B0DzqYXqp3YF1hVd5pVJt%2Bssv1GoEqhD5dLzBXsSmkkTq%2FecPv1RrlWY%2Fj48toXBTgvDTyHGFNgwTt5kd9K1knJsGJuDt9z8TDT%2F7JN6tG4N0wx35thINCBCcc2OlL8EMdcBNAE09pGrATIwhW8%2BJLjA%2BglJunfJD8ktLVaqMvK83xI%2BRg%2Bmr9tlkXwX%2FW8EO%2FiTp1tXPZYI06uXS8%2B0R1zkd9sHPqu2eC%2BIiXuZztvPWiGh%2BmyK6eTxkiL3dlsmMdpLZgZGr4VW24w1JS%2ByQY6pgFM5odfgyTaet1IPWM%2BSFhEfv26D3LXefnQbOyJeW9enAkYK12nnfQMfPVvTBr33B126rM5BW4%2FIwFGQgqdDl1b%2B%2FAu%2BnNwbY3M4ieegQzf%2BjJGRaTtzBiJkNnORVbuzXyftn7K85QCB8WT26v8Snkjja3S4VJTtbP4V6IrNFPNJXdjjVWXK621%2FfmknttKz9jbk4GW45r3BjqPidWGxOzL1dlEafQN&X-Amz-Signature=14dd460dd2dcf874d0595a364b9fab55d3cf3a908bbbe04584a100cf833c54e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

