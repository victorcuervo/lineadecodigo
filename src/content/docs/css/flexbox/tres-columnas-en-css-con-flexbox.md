---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SMZ6AR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrlnesnTiCy%2F1N0rvDYC4uuVpwjYR0goyzsKvDBeMGAiEAl%2B%2FIUrvHuysBliAp4KCaLX4G9SRfCqM2VaKcs0FsOboqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpcM2zZGA1lG8kMXCrcA52UbkQGj6db5xJK9UoSTyt8PeS1Cknh9uImt0jGutiyIfZdIvdPY2WFJYZBMWiunXYbEONf%2FJ1p36DQsMAsx%2BD%2FTrn%2FHBuhXMZWq%2FBWEzJhLggLgqNWsyTLPCGj%2F0ZJY4yu1%2F%2BPisjSgU4FZCxC0DM0Elau710roCVbE%2B7bM3Akd2RvDG9Kgmfetf7c%2B%2Fsm8st1otNNdh1vpzgiygMe6jkN6Dn7DiBBvJPkzzrcc4mC63JKz342ONCjENoEAa71Tg9n8%2FgsLukzFqnp79NjRm8iczvCr1VQujMRssxiNh5saXM61a%2B5LfJIwsp1OHV9ncH5dHGId0RiZCdbhwXHX0Jb55jYw40A0%2FrKBdfM3byLIWqdyqRxdaAmvzf4IowMYDXUZ1bLuW7A31wI%2B8rN6sCsVUh1FXIhrgAgRXx6V7zmLp9MnA20u6CL%2FIkVlRJZQJ3JcjsH0qNkAc7gaAJpTxHOQgNdcCZF3zKArCp5vXUfNfRtd7pSFtlMj248EpfMaQIdvVCUz0h%2FHovGWia1%2BOIzrfpcBu2fWEOPy4B2IPxLbiV%2BOalXPVOHOW47Q9JxhaeiM4B%2FAKk%2FaW0hio9aJO2AEzgYG4Tb3myYLSc8f1iRwLzeO%2BvJbCrLM3zYMKru2ckGOqUBDD2txgZHQ4CkDvbe05nRFbYS%2BdeJ7ZOjvDKo878B3fHcOQ5lYhbq968ef95C7kcPMJWY0OHDEfpYE6aMe5qHw5oJesEjxRxShyKJhKtMJww1JgKWEi6owtuvCjMCqdCHugZTqmZq6V3TOPPP0uxSYkRQ4l2%2Bv4acnzPpvbeUJL4AZ1gaGa6%2FkW%2FvIG%2Fbi6OSHWiTyh1CEnB6Ual9g6a8bY1g%2BfDu&X-Amz-Signature=87960452795963a8d9992fbe33ccca6765cf38e0aed6f9054e6d4891d7c1073b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5SMZ6AR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwrlnesnTiCy%2F1N0rvDYC4uuVpwjYR0goyzsKvDBeMGAiEAl%2B%2FIUrvHuysBliAp4KCaLX4G9SRfCqM2VaKcs0FsOboqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGpcM2zZGA1lG8kMXCrcA52UbkQGj6db5xJK9UoSTyt8PeS1Cknh9uImt0jGutiyIfZdIvdPY2WFJYZBMWiunXYbEONf%2FJ1p36DQsMAsx%2BD%2FTrn%2FHBuhXMZWq%2FBWEzJhLggLgqNWsyTLPCGj%2F0ZJY4yu1%2F%2BPisjSgU4FZCxC0DM0Elau710roCVbE%2B7bM3Akd2RvDG9Kgmfetf7c%2B%2Fsm8st1otNNdh1vpzgiygMe6jkN6Dn7DiBBvJPkzzrcc4mC63JKz342ONCjENoEAa71Tg9n8%2FgsLukzFqnp79NjRm8iczvCr1VQujMRssxiNh5saXM61a%2B5LfJIwsp1OHV9ncH5dHGId0RiZCdbhwXHX0Jb55jYw40A0%2FrKBdfM3byLIWqdyqRxdaAmvzf4IowMYDXUZ1bLuW7A31wI%2B8rN6sCsVUh1FXIhrgAgRXx6V7zmLp9MnA20u6CL%2FIkVlRJZQJ3JcjsH0qNkAc7gaAJpTxHOQgNdcCZF3zKArCp5vXUfNfRtd7pSFtlMj248EpfMaQIdvVCUz0h%2FHovGWia1%2BOIzrfpcBu2fWEOPy4B2IPxLbiV%2BOalXPVOHOW47Q9JxhaeiM4B%2FAKk%2FaW0hio9aJO2AEzgYG4Tb3myYLSc8f1iRwLzeO%2BvJbCrLM3zYMKru2ckGOqUBDD2txgZHQ4CkDvbe05nRFbYS%2BdeJ7ZOjvDKo878B3fHcOQ5lYhbq968ef95C7kcPMJWY0OHDEfpYE6aMe5qHw5oJesEjxRxShyKJhKtMJww1JgKWEi6owtuvCjMCqdCHugZTqmZq6V3TOPPP0uxSYkRQ4l2%2Bv4acnzPpvbeUJL4AZ1gaGa6%2FkW%2FvIG%2Fbi6OSHWiTyh1CEnB6Ual9g6a8bY1g%2BfDu&X-Amz-Signature=c16b0d52025aa6d3064f6071c588c7b16898405719b140e56afc4fb9c00f2f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

