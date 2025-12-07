---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q444LLYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElCbYNYQyur8en6bqBGmbAOo0xICp4J6XE%2F3duiuKYRAiAwPWx4RAtTD3sbfdnntQNL8NyzfME1M3r6qrmHY4mpByqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRWbJ42t%2FACuij8WCKtwDzn5aFK9qlILJTivKg00nHstHA1%2Bdpn9B%2BjYWCUkKNylHZrTe66abSKpz3zj4Um2KCgCnoQ%2BIJPp8wYt39WZcZhuDRDNTHtjsR2oyK4eUWK9YclDIjZIUmXGZgmT7R04nJZpDkuYQ8EPqL%2FpWc7bzFEsHpl3%2BFpw5OoMGX3UilpXUnqOKa64R76fi%2BnD17K32DE7UwXMFspqyt%2BWqQzmfaHAADRVhAK0Ax0MdOZIogt%2FDos7jxSxnali%2B6YaixjBd2EHSMz4hgSfPMMAd5b37eMaVaYyocAoClWEphWD%2BRBS5sRikkS6UIFVA83RTWPZG6nbzKV1%2BjJS3aTEuu18XLHa083an7rrFushzaicrshK23yQIGv%2BdzatGH%2Bgv8Rvk%2BsEp9n4VY%2Bo%2ByubnXnGzAcX3qOdS1C7qqH8oQNPv%2B18C9r%2FYxiOg5xmKJVcmjD9odmtswIhSC2qr%2FoRt3Qe6fZzbQ%2FMVOu9pINs%2BUzniQwGmeRKTMDUU1hXBUNEWy6mQcKcmxGpdV9nznp3HgRV67hRwiy4kptvHUye4TKdPPYxiYLC%2B72BSrn3%2BTnUE4NfYrvKSKnAHhwLq9%2BnoT45H5JcRYWcMAQ53xgvYQXzVJ4xTgJzJpdMnnfcHCKAwjbnWyQY6pgGo%2FfeiyPvGwASTnuMTewyhY0bYPMvm8d5oGQ2t4hXxMWaKXL7yo%2FesJ6ojSmAJssGSMhzyOPDp7aj%2Bl%2FmBpg0msEHbLIvPPWZPke%2BVJEfC6tEXyItgFCGDPCIaP5nvxCoxpTzuNeF%2B5jLJqNlNzlPwbMuo5EdW6%2ByGDB0AGfvdqK0%2BJWBFZCwdhGhcxQdOX%2FXCSw0ILZTUL5AijGl9Jy60%2BH1MYlCq&X-Amz-Signature=5a548c123e30ee53799107900a60bc966ab640bab0ed822f08954b76918eb6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q444LLYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElCbYNYQyur8en6bqBGmbAOo0xICp4J6XE%2F3duiuKYRAiAwPWx4RAtTD3sbfdnntQNL8NyzfME1M3r6qrmHY4mpByqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRWbJ42t%2FACuij8WCKtwDzn5aFK9qlILJTivKg00nHstHA1%2Bdpn9B%2BjYWCUkKNylHZrTe66abSKpz3zj4Um2KCgCnoQ%2BIJPp8wYt39WZcZhuDRDNTHtjsR2oyK4eUWK9YclDIjZIUmXGZgmT7R04nJZpDkuYQ8EPqL%2FpWc7bzFEsHpl3%2BFpw5OoMGX3UilpXUnqOKa64R76fi%2BnD17K32DE7UwXMFspqyt%2BWqQzmfaHAADRVhAK0Ax0MdOZIogt%2FDos7jxSxnali%2B6YaixjBd2EHSMz4hgSfPMMAd5b37eMaVaYyocAoClWEphWD%2BRBS5sRikkS6UIFVA83RTWPZG6nbzKV1%2BjJS3aTEuu18XLHa083an7rrFushzaicrshK23yQIGv%2BdzatGH%2Bgv8Rvk%2BsEp9n4VY%2Bo%2ByubnXnGzAcX3qOdS1C7qqH8oQNPv%2B18C9r%2FYxiOg5xmKJVcmjD9odmtswIhSC2qr%2FoRt3Qe6fZzbQ%2FMVOu9pINs%2BUzniQwGmeRKTMDUU1hXBUNEWy6mQcKcmxGpdV9nznp3HgRV67hRwiy4kptvHUye4TKdPPYxiYLC%2B72BSrn3%2BTnUE4NfYrvKSKnAHhwLq9%2BnoT45H5JcRYWcMAQ53xgvYQXzVJ4xTgJzJpdMnnfcHCKAwjbnWyQY6pgGo%2FfeiyPvGwASTnuMTewyhY0bYPMvm8d5oGQ2t4hXxMWaKXL7yo%2FesJ6ojSmAJssGSMhzyOPDp7aj%2Bl%2FmBpg0msEHbLIvPPWZPke%2BVJEfC6tEXyItgFCGDPCIaP5nvxCoxpTzuNeF%2B5jLJqNlNzlPwbMuo5EdW6%2ByGDB0AGfvdqK0%2BJWBFZCwdhGhcxQdOX%2FXCSw0ILZTUL5AijGl9Jy60%2BH1MYlCq&X-Amz-Signature=90a5df81d9effba2a8f10f9343c0f97d5ea9be6e319e16a0d12d40b70b208142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

