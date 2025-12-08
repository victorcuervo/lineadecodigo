---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4EF2GSH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AbXurXIuEzBfGUBtNfQUXw0PNFJa8Zk6P8shtXYVEgIgKSJMq23PLxzbX5%2BFmRcSGgfdbdKXCliI1ijmls5Z1VsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvveK%2BZV5jiHlcTpircAyAe0aTCrL6PN9CsZj4NJk8hKCXDDqa7M5qnz%2Fi88lf6arDmfyKxIsmgImm%2BpPZrkWonF318%2FTl3oA%2B3UouFDNTkeHPdGjIXex3KTxuGYA7CrZUVOoPVPfHvSQyN5FLrbARD%2FRIDof9xuVJu68s2gs9LSd6RVoahPSJEAuFna7Y5sVeQMbCQFeYg608Xuv8p2E6wQ15thkaswWWwePpQkCEFSL2sNN94CBrrpQoQ9zOMrZs7ZJi16yiD5RAJhgDIVFcSwVC0HITwvvW1qQDJyZv8hJ5gzOGgZIwwqL88wYGFy%2FWOGQW70aJdVNWDC62OUzUCE9ubz3C5y8bFX%2F4ngLROHGj%2BhbcJh1YGf7W2jBkOyQWgPdu9s5264IUJeRMaZuCI4HSnTJIohtuRq1D7NtykC3nkVrRMSUev6kzcWYtuIrfpfdKgbn0NNCBdJD9F0dhxASdtHSdQqVTzfpZa9Q%2BztbLql%2B85y1GLb8L%2FqFGPNVnYsD6CC5jIlqqoqO1t%2FdT7yRSa6OmEpHgRoyAGGhLemb0Pcc6uNohYl8gzfiBANygnDtPG%2FTjKVojbaVvEyl6wu2%2FF5%2FLBA5mt7KJUt9j1nCU%2FKfInof5jOTuz3fTRxCPODH%2Fok%2BlHem3%2FMKPz2skGOqUByaMbViemOtF5C%2F0p6C83Z%2Bze2cvJePJdoAEUoc2p1dwnJNpfJlIZWXE5KJtQufUdX0XQ4ZCow8jiwBh0Zk1ouR0dB5C0GWRj%2BWnwjsWVLVoh43gTbVMpNSI73ZqwyBYEJP2wWTJMWQkF6Vdnr5MtH7oZJvDzWfJ4K%2BT1DT3kOG9L9AosIQcW2T3H3mn1Ca6dnKxvn4b%2B2lHU5jG6Ft%2F5kTgZS9qz&X-Amz-Signature=810e2b788af004e16386b6f89cedd3509653ed71707a6b5f8e0f21a59b70c902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4EF2GSH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0AbXurXIuEzBfGUBtNfQUXw0PNFJa8Zk6P8shtXYVEgIgKSJMq23PLxzbX5%2BFmRcSGgfdbdKXCliI1ijmls5Z1VsqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvveK%2BZV5jiHlcTpircAyAe0aTCrL6PN9CsZj4NJk8hKCXDDqa7M5qnz%2Fi88lf6arDmfyKxIsmgImm%2BpPZrkWonF318%2FTl3oA%2B3UouFDNTkeHPdGjIXex3KTxuGYA7CrZUVOoPVPfHvSQyN5FLrbARD%2FRIDof9xuVJu68s2gs9LSd6RVoahPSJEAuFna7Y5sVeQMbCQFeYg608Xuv8p2E6wQ15thkaswWWwePpQkCEFSL2sNN94CBrrpQoQ9zOMrZs7ZJi16yiD5RAJhgDIVFcSwVC0HITwvvW1qQDJyZv8hJ5gzOGgZIwwqL88wYGFy%2FWOGQW70aJdVNWDC62OUzUCE9ubz3C5y8bFX%2F4ngLROHGj%2BhbcJh1YGf7W2jBkOyQWgPdu9s5264IUJeRMaZuCI4HSnTJIohtuRq1D7NtykC3nkVrRMSUev6kzcWYtuIrfpfdKgbn0NNCBdJD9F0dhxASdtHSdQqVTzfpZa9Q%2BztbLql%2B85y1GLb8L%2FqFGPNVnYsD6CC5jIlqqoqO1t%2FdT7yRSa6OmEpHgRoyAGGhLemb0Pcc6uNohYl8gzfiBANygnDtPG%2FTjKVojbaVvEyl6wu2%2FF5%2FLBA5mt7KJUt9j1nCU%2FKfInof5jOTuz3fTRxCPODH%2Fok%2BlHem3%2FMKPz2skGOqUByaMbViemOtF5C%2F0p6C83Z%2Bze2cvJePJdoAEUoc2p1dwnJNpfJlIZWXE5KJtQufUdX0XQ4ZCow8jiwBh0Zk1ouR0dB5C0GWRj%2BWnwjsWVLVoh43gTbVMpNSI73ZqwyBYEJP2wWTJMWQkF6Vdnr5MtH7oZJvDzWfJ4K%2BT1DT3kOG9L9AosIQcW2T3H3mn1Ca6dnKxvn4b%2B2lHU5jG6Ft%2F5kTgZS9qz&X-Amz-Signature=250af14a87d2affe3b47673899606b5d5708dec435e977e6b55e554678486fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

