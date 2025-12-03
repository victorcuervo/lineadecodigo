---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPUH44L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrbLTpYkeJiqz%2B1rBDuFpkPDQSyErD9KZeY9QhCl20vwIhALv4f2SJTsaEfteLrdLCesQycdEj4if%2Frqob5PJRyXPuKv8DCCIQABoMNjM3NDIzMTgzODA1Igy0LPe%2BXR0ZS5UuZGEq3AOPzahI3E5%2B1TTnLaoXfX5xiXtrMx%2FZbcTo9DlryNdLRRMW1AOA58Dj%2BG%2FWR7%2FKKP5V4zMhnVBMx0g57MGyBYTFloTUKsLXU9YZ8IT97fBSW67qwjoHalDvGrYzg80dOaHR668AEfPWRVcutzhiBsRL8PFSpqvBVhXgYKsVi81x4YVL3q%2Fk0N%2Bi8KDnK2GzLmVJssJva8aSR00Q896jJbxr%2FX1B5qGm6K1o8FjJN1EtMrdKnZSKyp5QIKqhgNUW3n9zgN4U12MXVKYE6y%2Bf9n7P8LMDVQP6efNcoKN6qnQYu%2BnvXYFAWT04MbPgexFvISC8uIWKriuSc6NI1a86MdyCwzMiBNMY9flSzYaXOgYDwaBGABV5GC808bkFfHEYGBW%2FMnRwn%2FbqX4rw1VJYhorJNcmkQ69kfxbC0UtJsg62Kl8bRlfFqmzMgEDL%2B5EPTfn05zZjZAeF3LXbQzFCOvm%2F6N7xh%2FUeEWVBrOSSWSM6UUbKwYviyNObAWpyGgByXrvmp7Y7VM33H3zQXf3%2BXe88nRzBedEVI96ZkXQL8tYX68Qr1%2FDKMyFz5mcObbb41K3WQdYZmDEAioKjOJJnC9RsB0%2FvMsIl2q0FIFQOZfLf3Rn8XNxgSUUE7igQvzCglr7JBjqkAeNN0sNuIcSQyV3S69Ah4tOXFGyVW60eHpcBHdneaelS7wMuFNrNrlGRBKznuAmu9P1TcC8Ppzh7z1X6JqPU34VQZKXP7NiO9EWLOQ1VVJYk%2BePZp71gOMVER4D1OTwXe%2Bor5sf%2FLUAP2W%2FyqvtM5Lt3xaSYz9vig70jNFnitBHLflc%2B%2FSAfKYKKxfcSQqy81L8M9Ec4c2aybUV62lskrdFSRstT&X-Amz-Signature=b3099c206b84d639bd7354880749f99d091831849cbbe36b2272db53cc2663aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPUH44L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T031505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCrbLTpYkeJiqz%2B1rBDuFpkPDQSyErD9KZeY9QhCl20vwIhALv4f2SJTsaEfteLrdLCesQycdEj4if%2Frqob5PJRyXPuKv8DCCIQABoMNjM3NDIzMTgzODA1Igy0LPe%2BXR0ZS5UuZGEq3AOPzahI3E5%2B1TTnLaoXfX5xiXtrMx%2FZbcTo9DlryNdLRRMW1AOA58Dj%2BG%2FWR7%2FKKP5V4zMhnVBMx0g57MGyBYTFloTUKsLXU9YZ8IT97fBSW67qwjoHalDvGrYzg80dOaHR668AEfPWRVcutzhiBsRL8PFSpqvBVhXgYKsVi81x4YVL3q%2Fk0N%2Bi8KDnK2GzLmVJssJva8aSR00Q896jJbxr%2FX1B5qGm6K1o8FjJN1EtMrdKnZSKyp5QIKqhgNUW3n9zgN4U12MXVKYE6y%2Bf9n7P8LMDVQP6efNcoKN6qnQYu%2BnvXYFAWT04MbPgexFvISC8uIWKriuSc6NI1a86MdyCwzMiBNMY9flSzYaXOgYDwaBGABV5GC808bkFfHEYGBW%2FMnRwn%2FbqX4rw1VJYhorJNcmkQ69kfxbC0UtJsg62Kl8bRlfFqmzMgEDL%2B5EPTfn05zZjZAeF3LXbQzFCOvm%2F6N7xh%2FUeEWVBrOSSWSM6UUbKwYviyNObAWpyGgByXrvmp7Y7VM33H3zQXf3%2BXe88nRzBedEVI96ZkXQL8tYX68Qr1%2FDKMyFz5mcObbb41K3WQdYZmDEAioKjOJJnC9RsB0%2FvMsIl2q0FIFQOZfLf3Rn8XNxgSUUE7igQvzCglr7JBjqkAeNN0sNuIcSQyV3S69Ah4tOXFGyVW60eHpcBHdneaelS7wMuFNrNrlGRBKznuAmu9P1TcC8Ppzh7z1X6JqPU34VQZKXP7NiO9EWLOQ1VVJYk%2BePZp71gOMVER4D1OTwXe%2Bor5sf%2FLUAP2W%2FyqvtM5Lt3xaSYz9vig70jNFnitBHLflc%2B%2FSAfKYKKxfcSQqy81L8M9Ec4c2aybUV62lskrdFSRstT&X-Amz-Signature=f9f419ace7a65a22b6e7b88fd9ba57aa3ed8131983910dd85db4330592cad899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

