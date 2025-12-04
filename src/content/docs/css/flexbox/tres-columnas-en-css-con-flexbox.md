---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WAMKN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDcZRFjmY%2FzPmeYakOkeIsN3ztGeWG5UCaRYYydPZ6NDAIhAPcyF3MJO93SQ6xNOD6Et42WPhvY%2BeLqhwuwZBvpcZfUKv8DCD8QABoMNjM3NDIzMTgzODA1IgwZlei1%2FDihaf0fKgIq3ANhYzRSkgUfpTZISokm5bYhViPKgV84AJKah43l0SDNE6qNp%2Bn4uamwxXJ6bnJo3dPJlv9OV12Tr%2BUj5WxPSCl0KSmCIixf3yU6crJjd%2B3Lngh1EKMvnatdUHuSS18w0gYvIK7lo8VHq4bdCKJqrJiPVg7KEjrDV0tcaITU%2FF3RDR%2F0nSjP4SyAx5LZeQoDpvbDg5EW2Few%2BYarKP732%2FaCO8hPHsWlDb0crU56U6KHlIpkeReLDZ4Po%2FuNcr0Eqwl2qGhQ5E9eSw%2BCaoxlV%2BGP2bevkPKsIUa%2FpLOtQe6Wj%2F2bkGeaoh3vJdZANu2LAtrmMN2wSDroUq6nqDCEovktyednhZzLt3ohRS2E5VlxlowTGLUARNMEos%2FTniBImptnD3s4DiKIukdHCeE4PLo0dekwurqbWcn8I%2FUQryQK0j%2Fp%2BUtrjrcGI5xN7F6ssSl2e0PfkMWy6eOvdNBVMtoxTpKxysrEFI2NrEDiJNYeA0yesyLaeh%2FHAgvrMrjLsq0JYqBezZtNRD5cIRx5MQKv00lUQmcACMO9KCBx6a7Mxpy%2Fg9OqCdLQG7eDMxmI5gyj%2FBtpGU%2BMew6q0S%2FQ4cxcftn%2BC3ulFU5aMKgspS%2F5T2J7uTxUAYAEhla1UDDTycTJBjqkAcTxAYXj1fyIgh0GNu88CtIGtAKpKCDkCQPxY9kvpccHpQKfkh%2F8t6d9M25bmSd5RrNrvrVoLVn9JkJTPDQXGxa4r3k04HhwWknbUbAWRbS7sjMDJVdZT4OPYxevMexJh2zoLKg7Lx4wPeUmKVxFHh7CbchZ65vFwTMu69yizkcoS8AftzAONaFwwaKpuYGbHYhTh0%2By8G7hl%2FQTdbGhbgZWzSMQ&X-Amz-Signature=0945d985b624f057c04761e41b2fe59b8dd587264b9f8f7418e19c744d6eaf8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5WAMKN3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDcZRFjmY%2FzPmeYakOkeIsN3ztGeWG5UCaRYYydPZ6NDAIhAPcyF3MJO93SQ6xNOD6Et42WPhvY%2BeLqhwuwZBvpcZfUKv8DCD8QABoMNjM3NDIzMTgzODA1IgwZlei1%2FDihaf0fKgIq3ANhYzRSkgUfpTZISokm5bYhViPKgV84AJKah43l0SDNE6qNp%2Bn4uamwxXJ6bnJo3dPJlv9OV12Tr%2BUj5WxPSCl0KSmCIixf3yU6crJjd%2B3Lngh1EKMvnatdUHuSS18w0gYvIK7lo8VHq4bdCKJqrJiPVg7KEjrDV0tcaITU%2FF3RDR%2F0nSjP4SyAx5LZeQoDpvbDg5EW2Few%2BYarKP732%2FaCO8hPHsWlDb0crU56U6KHlIpkeReLDZ4Po%2FuNcr0Eqwl2qGhQ5E9eSw%2BCaoxlV%2BGP2bevkPKsIUa%2FpLOtQe6Wj%2F2bkGeaoh3vJdZANu2LAtrmMN2wSDroUq6nqDCEovktyednhZzLt3ohRS2E5VlxlowTGLUARNMEos%2FTniBImptnD3s4DiKIukdHCeE4PLo0dekwurqbWcn8I%2FUQryQK0j%2Fp%2BUtrjrcGI5xN7F6ssSl2e0PfkMWy6eOvdNBVMtoxTpKxysrEFI2NrEDiJNYeA0yesyLaeh%2FHAgvrMrjLsq0JYqBezZtNRD5cIRx5MQKv00lUQmcACMO9KCBx6a7Mxpy%2Fg9OqCdLQG7eDMxmI5gyj%2FBtpGU%2BMew6q0S%2FQ4cxcftn%2BC3ulFU5aMKgspS%2F5T2J7uTxUAYAEhla1UDDTycTJBjqkAcTxAYXj1fyIgh0GNu88CtIGtAKpKCDkCQPxY9kvpccHpQKfkh%2F8t6d9M25bmSd5RrNrvrVoLVn9JkJTPDQXGxa4r3k04HhwWknbUbAWRbS7sjMDJVdZT4OPYxevMexJh2zoLKg7Lx4wPeUmKVxFHh7CbchZ65vFwTMu69yizkcoS8AftzAONaFwwaKpuYGbHYhTh0%2By8G7hl%2FQTdbGhbgZWzSMQ&X-Amz-Signature=c47d1557901841e6a746463cbf0eff43540687564c951f550beeccd6dc7f2bcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

