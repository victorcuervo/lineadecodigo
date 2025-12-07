---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCCIOGQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuvEDix9WVCf%2BlJ8ZmqibYFAOnUqAhN9RUAHGYztgqDAIgIcNjuGjAOe7RpGilSnmgXZTsgFcaLVv6R24qk7Cd5ngqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB7ZSaHWwrEMGe6mSrcAzIKTFAMYG6QobVxdLxI897XFF7OkU025%2FPHs9VI05nF7QWsDfAdlcvSyJjiqj%2Bc79hh91Wj2BtTYU8YAmDIuyc0XAIOqBgJP01aKHe4KPm%2FF2P%2FgcR4%2BCmERFdOg5jb7%2FGgym52hDIdg7gXGSQRHX99ONjnJrZb50OzRErGVTkWLUK7ryTFKCA4zDgVbIkkAWe04y%2FJjNzltr%2FB%2FZV54wH9VJTv14cnVFj3osyyDv50krLjYLjMh4MQ5hv1st5eSIjTNDAE%2FeFTROTBrDngQ0h%2BZ%2FZ1ghAkOhncso9O27%2FrpayHD9P1R9ZKCRvip53Vj6dGdJ0n5bM%2BYFZBIUGysk%2FqQMngHpozM%2BiwyT3dXDHcG006oexOowuM3e1gvQ%2BICTJg2Grjg6ajwX1Zgnzx0HM6NlsamPB7qlPE36vMTQUFL92cL5GBV6FIJW32sWBJFgeX6zj6Q1zzGgyrELokjtQPfQGM7G3OK%2Brd3CeHkF3IkRLuPQzIjbbspV2KclWx7J2DdtPHHxfVSI7WSBz9drPIkEStBxrWcN%2BNpOpuao%2F%2BeVRk0EL5dq6c56togKU%2FEFbFAUzKZlHxej%2FKj0d4z03YDZACYWLoBpWQvxymF6Td2VXy0%2FPY7Zd17R7mMIqc1MkGOqUByhjRs5Y2%2FF9kiWJ7vq67ejQnOcqnS8x7SANRfdlmAr4i35pG%2B4x7%2F9wC%2FYAYjkH0mKKdlT4m97J%2BT5RhhL6Gd0ekbz39VKa8lFELPCYJcE22504hit0dsvL%2FlNB9WFDaL6z0%2B2Roivs1%2BjxxuXUNPIxXbdweJh2cpVpLOXV7x2TC6whJYV61sbT5nlB3q1NYH1oyce%2Fh6Jb3LOsJKrNx7JaLCzMO&X-Amz-Signature=8493107042a7286c196e9afaa8c836d3eff25d0ca0223d5dcbeb1628edba10ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOCCIOGQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuvEDix9WVCf%2BlJ8ZmqibYFAOnUqAhN9RUAHGYztgqDAIgIcNjuGjAOe7RpGilSnmgXZTsgFcaLVv6R24qk7Cd5ngqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB7ZSaHWwrEMGe6mSrcAzIKTFAMYG6QobVxdLxI897XFF7OkU025%2FPHs9VI05nF7QWsDfAdlcvSyJjiqj%2Bc79hh91Wj2BtTYU8YAmDIuyc0XAIOqBgJP01aKHe4KPm%2FF2P%2FgcR4%2BCmERFdOg5jb7%2FGgym52hDIdg7gXGSQRHX99ONjnJrZb50OzRErGVTkWLUK7ryTFKCA4zDgVbIkkAWe04y%2FJjNzltr%2FB%2FZV54wH9VJTv14cnVFj3osyyDv50krLjYLjMh4MQ5hv1st5eSIjTNDAE%2FeFTROTBrDngQ0h%2BZ%2FZ1ghAkOhncso9O27%2FrpayHD9P1R9ZKCRvip53Vj6dGdJ0n5bM%2BYFZBIUGysk%2FqQMngHpozM%2BiwyT3dXDHcG006oexOowuM3e1gvQ%2BICTJg2Grjg6ajwX1Zgnzx0HM6NlsamPB7qlPE36vMTQUFL92cL5GBV6FIJW32sWBJFgeX6zj6Q1zzGgyrELokjtQPfQGM7G3OK%2Brd3CeHkF3IkRLuPQzIjbbspV2KclWx7J2DdtPHHxfVSI7WSBz9drPIkEStBxrWcN%2BNpOpuao%2F%2BeVRk0EL5dq6c56togKU%2FEFbFAUzKZlHxej%2FKj0d4z03YDZACYWLoBpWQvxymF6Td2VXy0%2FPY7Zd17R7mMIqc1MkGOqUByhjRs5Y2%2FF9kiWJ7vq67ejQnOcqnS8x7SANRfdlmAr4i35pG%2B4x7%2F9wC%2FYAYjkH0mKKdlT4m97J%2BT5RhhL6Gd0ekbz39VKa8lFELPCYJcE22504hit0dsvL%2FlNB9WFDaL6z0%2B2Roivs1%2BjxxuXUNPIxXbdweJh2cpVpLOXV7x2TC6whJYV61sbT5nlB3q1NYH1oyce%2Fh6Jb3LOsJKrNx7JaLCzMO&X-Amz-Signature=524938ecc66b1226998dbd5bac89229f8757dc585da07ef9ca023eebf4842fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

