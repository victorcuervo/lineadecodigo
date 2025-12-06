---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WNXBJP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXM6btXuz5OQZTz50m0VTnUrhdqEKqfwz4MdpZijlPAIgH9aEHXEupXh5jBshVj0Bafk3H%2FWEliXyBLCixClo%2BZ8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDB9NwiyqozbYDDWZ3yrcA%2BPLWhFtmVOjKjx7dMKdqTX4i6kf4sTiw8pYbYCMwvbCA87e6noiq4wlY9vxZgcVI9dtxrbrIXb7e2pe0ALeI3GJRuxONDUFF7tytZIWiyZ1ruO%2BDr%2F9f0McA8Bto8OEnR%2BfPUqDrPIW0%2BsNzDILNqVIFT7BExYt2lKqnV79FNbj%2B1EossxndVjRdcV3CzQIg9x3usOV6Q1rBaN8XlvCxH8ZE2xagd8uSky9Mu8tInm3usbWaVM%2FaC4%2FECJ2lNhKNZDXgRFTCiip6vchRvaKQDKmunS5Rfp6Q5d1i7l%2FCy666WI9BsrshcvN5NLd7FOQFsvBkxsdHzl6uoayVIREag9c%2FWWnPW832wQKgcCDVeWECQPJd63OAg7TqOEASg2wwvsCVk3qniN6pKCk0T4y4U1mxkKb2Kf1r5sMm8a0CO0FVol55dHBfsyeWAOt94EDDUToT7Ep%2FpUxWUF1oMSQ9Wk4INeXjWLf2gdnJtdqAos%2FEKN9OAdPiZSoZPpk%2BmKNXuGZmLnDEmAiS1ZObUXSduptGjWo6qBMdn%2BMpaizDhq5SOspnn7FpTWf62Vdeo5D4%2BLmnent80MI4ZCnDBSUwKr75EOdKXQtxMWqe%2Fv3wlheMfHjvcS5qhjFw%2BvPMIn9zskGOqUB2NY9bXXbW3lF699E5WAGNnml8lhaFsdDl19iLtTrbltlrNsy7q6SuL2qETMwFbBeEuDc7xH0Z6hqr30hQfEK4W6ifCM8QeyjTCshPWd1MDMlByzdzI%2FqeeQTnpfTzbvvfmFcjZYp023Ghx5QudMr2zbOlX%2FwRtc8hkGEFyuSdJmiATKCNjzacI3ISn%2BNUva3S4P2hG8K0Z4NLxcUvfBpcA1jCtvh&X-Amz-Signature=f171762b51748cb3d018c516a5b6b2c483d24c0967d7def31957c6dc9aa26315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WNXBJP2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T060246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtXM6btXuz5OQZTz50m0VTnUrhdqEKqfwz4MdpZijlPAIgH9aEHXEupXh5jBshVj0Bafk3H%2FWEliXyBLCixClo%2BZ8q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDB9NwiyqozbYDDWZ3yrcA%2BPLWhFtmVOjKjx7dMKdqTX4i6kf4sTiw8pYbYCMwvbCA87e6noiq4wlY9vxZgcVI9dtxrbrIXb7e2pe0ALeI3GJRuxONDUFF7tytZIWiyZ1ruO%2BDr%2F9f0McA8Bto8OEnR%2BfPUqDrPIW0%2BsNzDILNqVIFT7BExYt2lKqnV79FNbj%2B1EossxndVjRdcV3CzQIg9x3usOV6Q1rBaN8XlvCxH8ZE2xagd8uSky9Mu8tInm3usbWaVM%2FaC4%2FECJ2lNhKNZDXgRFTCiip6vchRvaKQDKmunS5Rfp6Q5d1i7l%2FCy666WI9BsrshcvN5NLd7FOQFsvBkxsdHzl6uoayVIREag9c%2FWWnPW832wQKgcCDVeWECQPJd63OAg7TqOEASg2wwvsCVk3qniN6pKCk0T4y4U1mxkKb2Kf1r5sMm8a0CO0FVol55dHBfsyeWAOt94EDDUToT7Ep%2FpUxWUF1oMSQ9Wk4INeXjWLf2gdnJtdqAos%2FEKN9OAdPiZSoZPpk%2BmKNXuGZmLnDEmAiS1ZObUXSduptGjWo6qBMdn%2BMpaizDhq5SOspnn7FpTWf62Vdeo5D4%2BLmnent80MI4ZCnDBSUwKr75EOdKXQtxMWqe%2Fv3wlheMfHjvcS5qhjFw%2BvPMIn9zskGOqUB2NY9bXXbW3lF699E5WAGNnml8lhaFsdDl19iLtTrbltlrNsy7q6SuL2qETMwFbBeEuDc7xH0Z6hqr30hQfEK4W6ifCM8QeyjTCshPWd1MDMlByzdzI%2FqeeQTnpfTzbvvfmFcjZYp023Ghx5QudMr2zbOlX%2FwRtc8hkGEFyuSdJmiATKCNjzacI3ISn%2BNUva3S4P2hG8K0Z4NLxcUvfBpcA1jCtvh&X-Amz-Signature=3e4a7d12f3033276bacb0c4fdcc7ec39ddfab5e897b3a0a994c1700546e4e8bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

