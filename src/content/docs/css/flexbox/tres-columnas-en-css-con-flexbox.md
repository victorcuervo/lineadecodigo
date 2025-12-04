---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VN6WH75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICO%2BAQKIFgvKdkEv%2FO1LWqyFQmRrSsIo4wwn8mL2HJ8QAiEA3tP3AU0fBmrrVMPcx7RZIRS1%2BCeOStPJeqjjUmck5tcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDE%2BN%2BNipRejWX9OCLCrcA2B0kscYW0cJBb0iCGQmc%2BSFV6marANe3MdQuQNTRNOeKQUjMz2ue2UGpWMQGimGCVx1M1wGgjYkLW4FK12q8wpOcEX6QaklYCddZugeNaWIqywYY0UjzAQxc6tLGAXcBz9elocaLuToPnq%2Ffjr8Mib66AxQii%2FBzz5XHvrDewW%2BLZXSh6wb%2FrPpJEQPUwyNPzp7Q8OwzwtxDYEHlK5s1ZlPGQdBfAsAwd2Vk0efx5DWH%2B1%2F71DyTc1PDnnxv%2FHUKNMsy3z3IsALpaaV%2FoPU6Q7DLMOD1Lz1LZHt81vguL0EmlATKQxiEFf9XRPa3Jc32pPZKf%2FM%2Fx2oNPs6foKKAxjwyR7NV19Rx4TEIa58OO%2BP7ZMAZaUQkTuwIHHnxGbQcPrnTlnvG5DzqZ%2FQgigzmpluleNP8AZ4WyFS6ELoJDK8dteHm%2By1BRL6bOwHgf2ZyENo5kax%2BR18CrULGa7hgUl1sJIpP3mxVaj%2F9LLcs13nwLFUWFZ%2Bg%2FMxGO9gLxCA8Os19KealW2b%2B%2FX6LtKzVXec%2FIoXWU6wMnx79pwcV5USKGOE6aAiBfAdvFtSaX4aLmjfFI9jBGBvrfHw9WJZeX34sxnIP2YlVROkGAOQn%2Famphhm%2FULZMsi9fQGwMMGExskGOqUBSLhY86R1oXyHwem6PIyp6cIKFG32DpYsb5OfiGwBYuBQdwo3rnPGL4DckS%2BwbG3KHu1bHvsu4yPpWDIG%2Bwd%2F%2Fw2ocKIeLbqq9E6nYJPMefMH%2BpNASed6ViVjuZhdeXmn19X3%2F0Cn711SFpu4%2FLdWLu4tR8BE0xcfpkF7kzi2TPPSdMj5crY6n41XP%2BUQDMXsRKSkil3GI%2FLt6c5Or3xwGbuJ%2Fc8P&X-Amz-Signature=9c1c6dc8cfb1bfdbf31b08660e977665ea8856e2331164157ecde21d911ec93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VN6WH75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICO%2BAQKIFgvKdkEv%2FO1LWqyFQmRrSsIo4wwn8mL2HJ8QAiEA3tP3AU0fBmrrVMPcx7RZIRS1%2BCeOStPJeqjjUmck5tcq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDE%2BN%2BNipRejWX9OCLCrcA2B0kscYW0cJBb0iCGQmc%2BSFV6marANe3MdQuQNTRNOeKQUjMz2ue2UGpWMQGimGCVx1M1wGgjYkLW4FK12q8wpOcEX6QaklYCddZugeNaWIqywYY0UjzAQxc6tLGAXcBz9elocaLuToPnq%2Ffjr8Mib66AxQii%2FBzz5XHvrDewW%2BLZXSh6wb%2FrPpJEQPUwyNPzp7Q8OwzwtxDYEHlK5s1ZlPGQdBfAsAwd2Vk0efx5DWH%2B1%2F71DyTc1PDnnxv%2FHUKNMsy3z3IsALpaaV%2FoPU6Q7DLMOD1Lz1LZHt81vguL0EmlATKQxiEFf9XRPa3Jc32pPZKf%2FM%2Fx2oNPs6foKKAxjwyR7NV19Rx4TEIa58OO%2BP7ZMAZaUQkTuwIHHnxGbQcPrnTlnvG5DzqZ%2FQgigzmpluleNP8AZ4WyFS6ELoJDK8dteHm%2By1BRL6bOwHgf2ZyENo5kax%2BR18CrULGa7hgUl1sJIpP3mxVaj%2F9LLcs13nwLFUWFZ%2Bg%2FMxGO9gLxCA8Os19KealW2b%2B%2FX6LtKzVXec%2FIoXWU6wMnx79pwcV5USKGOE6aAiBfAdvFtSaX4aLmjfFI9jBGBvrfHw9WJZeX34sxnIP2YlVROkGAOQn%2Famphhm%2FULZMsi9fQGwMMGExskGOqUBSLhY86R1oXyHwem6PIyp6cIKFG32DpYsb5OfiGwBYuBQdwo3rnPGL4DckS%2BwbG3KHu1bHvsu4yPpWDIG%2Bwd%2F%2Fw2ocKIeLbqq9E6nYJPMefMH%2BpNASed6ViVjuZhdeXmn19X3%2F0Cn711SFpu4%2FLdWLu4tR8BE0xcfpkF7kzi2TPPSdMj5crY6n41XP%2BUQDMXsRKSkil3GI%2FLt6c5Or3xwGbuJ%2Fc8P&X-Amz-Signature=ecf9cd36626d5e922548ec334fe2124a22702375d7b0c3564249c748a46a65d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

