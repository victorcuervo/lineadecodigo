---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XNLG7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXV3FvP9%2BuVOlTEC0a%2BmLCH6sNVV3ITpIbu0vvVNJDzAiBMHbweXNRP3yz9fiBJ5Y107PyKw8m4UUBWquza3fEU1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMALNKlMoAUL5kSepKtwDgAH1Vz1%2FCFwqdVJ6FqUOcJBKP3HtOxgcUwjLnluVcvQcusJwXRfEWw6VjZcK4Ql0ACStFlbBlpyZ2jhenn8XQxDNrjbfcAMkCDCfi06YSEq8qWAcE7QyLVKcrj7MA2jX5EZkTejQ7K3hMW%2BWz2AS5oOUGn5%2BjtVXVSnNttTyDpZDcHorZySFJlW7JvhxeQSzHv3pOguKWPELlJ%2F7XyYmyXSHB8%2F4522jLZhUHRzFwucGp%2FSwrBjhkNCLfH2vP5Np%2FRM%2By%2BpQoQ8hpMPyWG5elmvqdtYIfAmFcdVvystjejMta7b5OS1uOh%2Fz%2BrZRSaGp87Wc6l7JpDRDcIISDO8hI8znNLqNWSZcp32vafLUu%2FGnwql886FHCFnhP9O44Q1y0dWT7%2FgDeM1eKn5bg7DDHWfDit3JhnxHC%2BglwZHFHaH6X%2BdyG89eVOtH8TP9SQg%2F37%2BAyMNpapRH8oZKh%2FvU5%2F%2F5QQRTsPH3Yghev5uPT9ccmLEZQEubK21fmPNj6YgmVFj5wxNv2KTLuTCBXX1n6iIu%2B5z4%2FzIRVY3klprUytiuPxzmmX4oMz4ICpQYx3jn1rUGH%2Bxy%2FnarCJJ5L1HVNUbeXAHscHnTO3yJUoxx41WX%2BPqX63aaS4s74KAwrYzIyQY6pgEBBsf06anznxIrqxn3d5DheK9Efiq1y2DeOpA2X%2BL7EVBKy%2BjC2WZEnU%2BbMKKH%2F817vwEqbVQ58f6K%2BIVghhYgEFzRxKCKkpzIXCpfQdW%2BRPEw0nt38kjT2qll1wINTcGaLl3SGQMsBTWs7KNjTt4t8NKL35XlY5mFqDW%2BQ3htmdwmNXdmmv329V9b7IgOAbTnZQ3%2BVT7P4rKTryPQfPapn1aa2NTn&X-Amz-Signature=41aa2a40cc1faa0041a096f96d4df47d5c12682eb60532fa3535debc64ef2661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XNLG7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T035140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBXV3FvP9%2BuVOlTEC0a%2BmLCH6sNVV3ITpIbu0vvVNJDzAiBMHbweXNRP3yz9fiBJ5Y107PyKw8m4UUBWquza3fEU1Cr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMALNKlMoAUL5kSepKtwDgAH1Vz1%2FCFwqdVJ6FqUOcJBKP3HtOxgcUwjLnluVcvQcusJwXRfEWw6VjZcK4Ql0ACStFlbBlpyZ2jhenn8XQxDNrjbfcAMkCDCfi06YSEq8qWAcE7QyLVKcrj7MA2jX5EZkTejQ7K3hMW%2BWz2AS5oOUGn5%2BjtVXVSnNttTyDpZDcHorZySFJlW7JvhxeQSzHv3pOguKWPELlJ%2F7XyYmyXSHB8%2F4522jLZhUHRzFwucGp%2FSwrBjhkNCLfH2vP5Np%2FRM%2By%2BpQoQ8hpMPyWG5elmvqdtYIfAmFcdVvystjejMta7b5OS1uOh%2Fz%2BrZRSaGp87Wc6l7JpDRDcIISDO8hI8znNLqNWSZcp32vafLUu%2FGnwql886FHCFnhP9O44Q1y0dWT7%2FgDeM1eKn5bg7DDHWfDit3JhnxHC%2BglwZHFHaH6X%2BdyG89eVOtH8TP9SQg%2F37%2BAyMNpapRH8oZKh%2FvU5%2F%2F5QQRTsPH3Yghev5uPT9ccmLEZQEubK21fmPNj6YgmVFj5wxNv2KTLuTCBXX1n6iIu%2B5z4%2FzIRVY3klprUytiuPxzmmX4oMz4ICpQYx3jn1rUGH%2Bxy%2FnarCJJ5L1HVNUbeXAHscHnTO3yJUoxx41WX%2BPqX63aaS4s74KAwrYzIyQY6pgEBBsf06anznxIrqxn3d5DheK9Efiq1y2DeOpA2X%2BL7EVBKy%2BjC2WZEnU%2BbMKKH%2F817vwEqbVQ58f6K%2BIVghhYgEFzRxKCKkpzIXCpfQdW%2BRPEw0nt38kjT2qll1wINTcGaLl3SGQMsBTWs7KNjTt4t8NKL35XlY5mFqDW%2BQ3htmdwmNXdmmv329V9b7IgOAbTnZQ3%2BVT7P4rKTryPQfPapn1aa2NTn&X-Amz-Signature=1f813a7f01e5b786bab43606b084ad62832f9bce8348289165e8f5f3a1b17406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

