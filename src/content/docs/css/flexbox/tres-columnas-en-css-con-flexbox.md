---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINBLI6F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDD7l8bpGt%2BaIFFX76DPqSgZVPI2n5IO0cL7inh%2Bx0kVAIhAKH3pcgj5R63aGkQjJ%2BXdBIKa632C6xynOG3P%2BuowXlfKv8DCEMQABoMNjM3NDIzMTgzODA1IgyZwGjW8XtvEKMYGgMq3AOLO01MsEq26bxAFco9S7k%2BTQ1BeJPyrqBliHYoTK6p27rLNASQF%2Bj%2BTsaOTKyqM5EqL93%2FQ1fG4cFMDSHy9DB7pTkEon4n3R8hBA3F2%2FiQ3BxHk7Y0c8WEvLWUv8bD8%2B28zDTSObc5GXJMRqYRuWsIM4mnSO3PQ4ZRElv%2FJ5Pa4WGe%2BraZUkMFpedd2Ny3twuBeGLqpLjkBBLU2QRICKDSfwEuSMU2hyV3uEa36JFWrz1Gy%2BeuhqQYRXCGjH3C%2FLCFRp5Ee4MiUGYINSPSY3%2BL6oeiJJNZZc%2FmBc0hnr19KUP8MXBMgmUvBHzVOcH1igUroyYm3tFUpHqZA%2BbyPEgrblpIgoDPH2COY244iVX2wnkZ9X9jKboSnK0Pek4hvZNFW4JmIWwYvFdWy9H7XLlkSNli3wO5F2%2BQeF9EmPAnlEndyeP5dWelHCPg8UkN6MBF6zFVI%2BV%2B8a2%2BmlnIAT%2BPuVsc8MX2S0IIdeUO6pC5vZB5TCuVZEKbV2f8SZ%2F9xwzw5R5CPfs1XzhXQWKIIlD6WiZp0EU%2B7b2XwvA%2BrIOsTu%2BeU2k8i%2BBEeyx32aJ3x9fuKGtxxp%2BHzKCrY3GnAxq0SpBrxr58HxhiFWZdkCpOqHscl0zH5G2PK1Fz1DC5qsXJBjqkARhvSVZ5IuXxYHhpa5vLjv3%2Bbby9xqzjjiaQ95AMKe00SmExAC8%2BuWF9aiKjZEzt3nYgRVjH4s%2B9s%2BBxcFCKlN%2F4yPq6rxT8abUhoDEgKAoovpbMoY%2BSxlgqvf5%2Be3aByx8EcUTSnOd1ZVSj3%2B0Dut45Q0eHV%2FZRFtDBOsAyF9RfMj2ficvesjs4fFw6JhlDBEwTjpnaWaKhFj72jteYPEOY5JVq&X-Amz-Signature=c95265e3a110d9fe4f6c5d0e246d0841e78f029af1291f01f05f86ae662b8fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WINBLI6F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T101108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDD7l8bpGt%2BaIFFX76DPqSgZVPI2n5IO0cL7inh%2Bx0kVAIhAKH3pcgj5R63aGkQjJ%2BXdBIKa632C6xynOG3P%2BuowXlfKv8DCEMQABoMNjM3NDIzMTgzODA1IgyZwGjW8XtvEKMYGgMq3AOLO01MsEq26bxAFco9S7k%2BTQ1BeJPyrqBliHYoTK6p27rLNASQF%2Bj%2BTsaOTKyqM5EqL93%2FQ1fG4cFMDSHy9DB7pTkEon4n3R8hBA3F2%2FiQ3BxHk7Y0c8WEvLWUv8bD8%2B28zDTSObc5GXJMRqYRuWsIM4mnSO3PQ4ZRElv%2FJ5Pa4WGe%2BraZUkMFpedd2Ny3twuBeGLqpLjkBBLU2QRICKDSfwEuSMU2hyV3uEa36JFWrz1Gy%2BeuhqQYRXCGjH3C%2FLCFRp5Ee4MiUGYINSPSY3%2BL6oeiJJNZZc%2FmBc0hnr19KUP8MXBMgmUvBHzVOcH1igUroyYm3tFUpHqZA%2BbyPEgrblpIgoDPH2COY244iVX2wnkZ9X9jKboSnK0Pek4hvZNFW4JmIWwYvFdWy9H7XLlkSNli3wO5F2%2BQeF9EmPAnlEndyeP5dWelHCPg8UkN6MBF6zFVI%2BV%2B8a2%2BmlnIAT%2BPuVsc8MX2S0IIdeUO6pC5vZB5TCuVZEKbV2f8SZ%2F9xwzw5R5CPfs1XzhXQWKIIlD6WiZp0EU%2B7b2XwvA%2BrIOsTu%2BeU2k8i%2BBEeyx32aJ3x9fuKGtxxp%2BHzKCrY3GnAxq0SpBrxr58HxhiFWZdkCpOqHscl0zH5G2PK1Fz1DC5qsXJBjqkARhvSVZ5IuXxYHhpa5vLjv3%2Bbby9xqzjjiaQ95AMKe00SmExAC8%2BuWF9aiKjZEzt3nYgRVjH4s%2B9s%2BBxcFCKlN%2F4yPq6rxT8abUhoDEgKAoovpbMoY%2BSxlgqvf5%2Be3aByx8EcUTSnOd1ZVSj3%2B0Dut45Q0eHV%2FZRFtDBOsAyF9RfMj2ficvesjs4fFw6JhlDBEwTjpnaWaKhFj72jteYPEOY5JVq&X-Amz-Signature=908269835240ae0a9d9842076885c19a21f721a28c399837c575b9b499ad7a02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

