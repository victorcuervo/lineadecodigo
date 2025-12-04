---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DXO7FTY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDSoNHsK%2B74UmqAubbwUEg2emFPyMxW2imquO0ZEoRP%2FAIgRPF2EaeYlHTgjK23SghfppO5QiuqRO1bBABVjZYk3dwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAAF5o0ddi6RiklLHircA3i65drJNBIcaFSEJiyoubgalc4woYT8oSm%2Bip15VRqWnphMLbcJ2UO%2BJcsH4v8WlXfKDh8VW%2FaRVtZrqa%2FZOMy5kmWitq3u7SfAE3vI0FKWv6wYh5piTFOZsV%2FYtpmqbPqiPEu0XRb2DNCNBA7XSyakiLrgfdrqhpwQOE6Kw36J8sX4gOPNB3FUDF2ybHo396xKuU0OCbdW7ljcHR62xUU8O%2BF7YxhULoO%2BN3WjIz2PJ6gs0bYAomYuvyXYK%2BIuoOX7nvoKb1rVfA9OIkA7KFnT%2BKYVbEK7haio4XJoVI3xxs2BTxK0h7PQU%2FkZoCwych34Opx8heMLdfsrG%2BQeBPKr8QtCEdqbxqnTDkjOaEzPRP0%2FC8Y2RMTmmTMV0lf4SpAYEvWoaAMZUdQ7ueL8M3Jz1ZmdJcftSwmrZ2GWz98q0OkRu6BnvL29Y4tPaG20YP35SDJXk1p%2FglE1e%2FrERMED9dI8O48AovL0OfB0Dhi8r%2B%2Bf%2BnO1Te6eoWOPbmh1uzhtP%2FpzqlPI%2BjQbSjy1rm7yGkF03%2BL6RmTwt9tjjbjaP%2F6xLBtHVYop5THNrhjOI0CmnHuv739jUSMzrU1tWlesMseMk0%2BkXp9LorK4e1NtI2KlBRCcj53jd1FuMLeDxskGOqUBTCcaGdLmEUTFbHd4Hnj8FCbTdYbuMpAQ8V8wDooUmAg2Yxp8NhzC7etWHxNxJlri3np%2FMq%2FK1rtAmJs8NuU8wYvNTFdr2esH64qUoBY5dLYGjFOKGavD0ZOmzj28jpBET6AaeOQwdMn%2Fdo7YlqPbgsWNVjhEnFttiKDawVH9QzfSjiNvInmD8BvC7PECkaoQ7RbTOqQZrkCXQOUfTa8u2QkEe4d7&X-Amz-Signature=d3b9674103ca2bf0dffffa4ac7863b1799c91b9dcf451850864cce92b52f5733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DXO7FTY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDSoNHsK%2B74UmqAubbwUEg2emFPyMxW2imquO0ZEoRP%2FAIgRPF2EaeYlHTgjK23SghfppO5QiuqRO1bBABVjZYk3dwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDAAF5o0ddi6RiklLHircA3i65drJNBIcaFSEJiyoubgalc4woYT8oSm%2Bip15VRqWnphMLbcJ2UO%2BJcsH4v8WlXfKDh8VW%2FaRVtZrqa%2FZOMy5kmWitq3u7SfAE3vI0FKWv6wYh5piTFOZsV%2FYtpmqbPqiPEu0XRb2DNCNBA7XSyakiLrgfdrqhpwQOE6Kw36J8sX4gOPNB3FUDF2ybHo396xKuU0OCbdW7ljcHR62xUU8O%2BF7YxhULoO%2BN3WjIz2PJ6gs0bYAomYuvyXYK%2BIuoOX7nvoKb1rVfA9OIkA7KFnT%2BKYVbEK7haio4XJoVI3xxs2BTxK0h7PQU%2FkZoCwych34Opx8heMLdfsrG%2BQeBPKr8QtCEdqbxqnTDkjOaEzPRP0%2FC8Y2RMTmmTMV0lf4SpAYEvWoaAMZUdQ7ueL8M3Jz1ZmdJcftSwmrZ2GWz98q0OkRu6BnvL29Y4tPaG20YP35SDJXk1p%2FglE1e%2FrERMED9dI8O48AovL0OfB0Dhi8r%2B%2Bf%2BnO1Te6eoWOPbmh1uzhtP%2FpzqlPI%2BjQbSjy1rm7yGkF03%2BL6RmTwt9tjjbjaP%2F6xLBtHVYop5THNrhjOI0CmnHuv739jUSMzrU1tWlesMseMk0%2BkXp9LorK4e1NtI2KlBRCcj53jd1FuMLeDxskGOqUBTCcaGdLmEUTFbHd4Hnj8FCbTdYbuMpAQ8V8wDooUmAg2Yxp8NhzC7etWHxNxJlri3np%2FMq%2FK1rtAmJs8NuU8wYvNTFdr2esH64qUoBY5dLYGjFOKGavD0ZOmzj28jpBET6AaeOQwdMn%2Fdo7YlqPbgsWNVjhEnFttiKDawVH9QzfSjiNvInmD8BvC7PECkaoQ7RbTOqQZrkCXQOUfTa8u2QkEe4d7&X-Amz-Signature=4b90ef974cb74da2ba871df987a851039d72d77d2baca7548c32d0694dd968ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

