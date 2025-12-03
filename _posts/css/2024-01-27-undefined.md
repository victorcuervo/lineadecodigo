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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5BPPLJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDCd85%2FzZ9J9nixOU6w%2F3A3ZQAxgx%2BKUDb0Kj%2Bln76eQAIgf4kKOCSNoft9GjJsPTOIOQ6ecE73ux%2FtZN9t5xUZvKAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOW29DjuZwPMuoCPQircA8tN7J1er33dUw%2FbrhW0VSpCZ5%2BimaqOmPDhqf0ci%2BYBYJP5%2Fj99YS7ixHlB0WZSI0Ej0ChCLzPCUS4f266StRaCPGrPwACvLrkMxyG%2Fs8jNu0R6QQtpQi1aJ2kUNKvVic4Cb%2BAOAXmJjoEOFfnVRR7JRmpro1M%2BunyQ%2Fw5WVhnsn15TjLLVoMYh5S70Jqh%2BbdJ1HakW76Earh%2FdzSFfbJ5Qq%2BBo3AkgeXu%2FmKv1tkIOIOuZY88YJ0LBuJ6h%2BqBWqpG0zpuZKKVZdB8GybGhjb57afIVuX7oZDUm3nxR19cz9Iw9tHcHwv4u01ADH4eAVh3n%2F1u6DNvBPmdDh%2B7qcJLh%2BoxH11vNhSoiS8Dt5TNqd6PBY%2F4TxkXQ2Q6Bi35iAEVP%2BHqfxDZ8jhwsK1WC3xdqQoDEbOg3It40aOWMJZG%2FQxDqGDSspi9IkSkBgu3cYt5TFQtnJ0oS5x65jtMOHdH7jed%2Fhrj179Fy3aZWmy7Are%2Bo1rfVMOlIRDB2nrxJCogHg6S1lqbuQgHuqKfGY%2F%2BkhuXYYxnIsObqi6sNzYKAG8RbEIZwFzAuslfP%2B9ce8RNq%2FO53MC0DyDkebS8mn%2BrRH6HYrKtzZXWbvZaaAM5VwTKSHuvQyZb783FJMN6mwckGOqUBepmYdZMTxjmL7kieyl4kbJXEop7Ji%2F40S1LOzxy27gVXIvyTACh0%2FdukQmMXf4c4QQpIQGVd5COgmia9DBnLLL5pSTRLB7j6u7%2BeyV0PQD%2FQQP016VzzIkxK7DVyK7xJlWXRGIh8eIr%2FK6MNhazBofnyPtvWPjX0hOaW1ACjYLbEMi0jwmHSt%2FWdizYR6eg91rPs5bUwa5%2BW5fSM3%2FCEh3aeBs8r&X-Amz-Signature=cb8402dc5531c3b6a0e8602fd57c52ab96176120f07b02fb474b9d9d2fa3dfb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5BPPLJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDCd85%2FzZ9J9nixOU6w%2F3A3ZQAxgx%2BKUDb0Kj%2Bln76eQAIgf4kKOCSNoft9GjJsPTOIOQ6ecE73ux%2FtZN9t5xUZvKAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDOW29DjuZwPMuoCPQircA8tN7J1er33dUw%2FbrhW0VSpCZ5%2BimaqOmPDhqf0ci%2BYBYJP5%2Fj99YS7ixHlB0WZSI0Ej0ChCLzPCUS4f266StRaCPGrPwACvLrkMxyG%2Fs8jNu0R6QQtpQi1aJ2kUNKvVic4Cb%2BAOAXmJjoEOFfnVRR7JRmpro1M%2BunyQ%2Fw5WVhnsn15TjLLVoMYh5S70Jqh%2BbdJ1HakW76Earh%2FdzSFfbJ5Qq%2BBo3AkgeXu%2FmKv1tkIOIOuZY88YJ0LBuJ6h%2BqBWqpG0zpuZKKVZdB8GybGhjb57afIVuX7oZDUm3nxR19cz9Iw9tHcHwv4u01ADH4eAVh3n%2F1u6DNvBPmdDh%2B7qcJLh%2BoxH11vNhSoiS8Dt5TNqd6PBY%2F4TxkXQ2Q6Bi35iAEVP%2BHqfxDZ8jhwsK1WC3xdqQoDEbOg3It40aOWMJZG%2FQxDqGDSspi9IkSkBgu3cYt5TFQtnJ0oS5x65jtMOHdH7jed%2Fhrj179Fy3aZWmy7Are%2Bo1rfVMOlIRDB2nrxJCogHg6S1lqbuQgHuqKfGY%2F%2BkhuXYYxnIsObqi6sNzYKAG8RbEIZwFzAuslfP%2B9ce8RNq%2FO53MC0DyDkebS8mn%2BrRH6HYrKtzZXWbvZaaAM5VwTKSHuvQyZb783FJMN6mwckGOqUBepmYdZMTxjmL7kieyl4kbJXEop7Ji%2F40S1LOzxy27gVXIvyTACh0%2FdukQmMXf4c4QQpIQGVd5COgmia9DBnLLL5pSTRLB7j6u7%2BeyV0PQD%2FQQP016VzzIkxK7DVyK7xJlWXRGIh8eIr%2FK6MNhazBofnyPtvWPjX0hOaW1ACjYLbEMi0jwmHSt%2FWdizYR6eg91rPs5bUwa5%2BW5fSM3%2FCEh3aeBs8r&X-Amz-Signature=557d63fdbb2eaea64e2644c24590921b7451dde346524683533db21f388b5eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

