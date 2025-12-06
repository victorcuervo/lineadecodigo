---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQZRW65%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwMNszQDaDIwOZ8CjwyQ41%2FKJuy7pSz%2FZadnKykyNQIgPUGCz%2F6cK1bqQ3052YXrV6Cq3DmpHlWEtPxUcmZnKJ0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHRTNRO1fVRekAJVayrcA78m0SLUNNTce%2FO6Hmqrp2Y4annHH2ZAVQC3uWVWXqe%2BiuOQ%2Fb%2FIo6V8TgMqyQ2mBpEi6l%2FX1KTpsU80L9nmJtrEtga6WDQ3IetmsNteTDrg1Z1NITJOx5xdfEYBRSUlRx4nrAXjakIdtaSXBSG2ApWgjS5952bGnxdUmwLGkK7LgpRHv8qogUp%2F9RNhBbzZ2B9Jkcsp1I7a5Elfvo2GG0AmhQCh%2BjYYs3gccLe08hBbjInNIjSN6B%2BOkYkUwG4Amku2cOFcVJK%2Fp1mPRLc4kKLiUyz%2FLbK3NRyZCcNjfcYPfGiRSv1wYbAbyj4%2BNycTk%2F92WCshkRm78fEo0UFYm91RAmNrFU522Nu0JrxwupJVebh7LICWerXI2pfzR2jJ2%2BhT2POlD5mTO%2BqAc8v%2FfljyjdQKdtEvDg5r5%2FWWfBuqBE83%2Bf3H8Rxf%2Ba9je9tMZ6JQHKHvxP%2B%2BpsuDAsuSbSEdd9twFiKE%2FTjAjt%2FBP8E3tPFzWt%2BuAlyabFGyOlyp63lxr6IwRkWlhbCuCISN%2FYwNdwMxnrfjrESSkYnlkEUrhkbFp4Ka5lNnkCTZko0IirJULGDcqFHW8CEYosNdr2XDmNAMvNVMT1foZAeGSaMI%2BPXLQj%2FTP9DAquvmMP6nzskGOqUBjVwE0FcA8XpeO32xqEbdLM1KtMGHFUSKr7AYQFiwcprx%2Ff05C1HwT9WbSgdL%2Bf1obXsJ0s2hnG3%2FJOUlSzHBrqZpaYuwtHI1m6YtsPGTvA%2BOqde83vHy5jdaIlmX4AZNs63cgjRtcHKIgvoZ1%2BHkNlRvAeck1ncqLaPvEzOLd4ST9GZYUryYa3A1VGQKm2gmAOEKa8SAU8fV%2BeCYmn9rim5ptT9D&X-Amz-Signature=300b48cc3bef38699c856cb08e44a904b73df69af215f7504ef97f176de06223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQZRW65%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFrwMNszQDaDIwOZ8CjwyQ41%2FKJuy7pSz%2FZadnKykyNQIgPUGCz%2F6cK1bqQ3052YXrV6Cq3DmpHlWEtPxUcmZnKJ0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDHRTNRO1fVRekAJVayrcA78m0SLUNNTce%2FO6Hmqrp2Y4annHH2ZAVQC3uWVWXqe%2BiuOQ%2Fb%2FIo6V8TgMqyQ2mBpEi6l%2FX1KTpsU80L9nmJtrEtga6WDQ3IetmsNteTDrg1Z1NITJOx5xdfEYBRSUlRx4nrAXjakIdtaSXBSG2ApWgjS5952bGnxdUmwLGkK7LgpRHv8qogUp%2F9RNhBbzZ2B9Jkcsp1I7a5Elfvo2GG0AmhQCh%2BjYYs3gccLe08hBbjInNIjSN6B%2BOkYkUwG4Amku2cOFcVJK%2Fp1mPRLc4kKLiUyz%2FLbK3NRyZCcNjfcYPfGiRSv1wYbAbyj4%2BNycTk%2F92WCshkRm78fEo0UFYm91RAmNrFU522Nu0JrxwupJVebh7LICWerXI2pfzR2jJ2%2BhT2POlD5mTO%2BqAc8v%2FfljyjdQKdtEvDg5r5%2FWWfBuqBE83%2Bf3H8Rxf%2Ba9je9tMZ6JQHKHvxP%2B%2BpsuDAsuSbSEdd9twFiKE%2FTjAjt%2FBP8E3tPFzWt%2BuAlyabFGyOlyp63lxr6IwRkWlhbCuCISN%2FYwNdwMxnrfjrESSkYnlkEUrhkbFp4Ka5lNnkCTZko0IirJULGDcqFHW8CEYosNdr2XDmNAMvNVMT1foZAeGSaMI%2BPXLQj%2FTP9DAquvmMP6nzskGOqUBjVwE0FcA8XpeO32xqEbdLM1KtMGHFUSKr7AYQFiwcprx%2Ff05C1HwT9WbSgdL%2Bf1obXsJ0s2hnG3%2FJOUlSzHBrqZpaYuwtHI1m6YtsPGTvA%2BOqde83vHy5jdaIlmX4AZNs63cgjRtcHKIgvoZ1%2BHkNlRvAeck1ncqLaPvEzOLd4ST9GZYUryYa3A1VGQKm2gmAOEKa8SAU8fV%2BeCYmn9rim5ptT9D&X-Amz-Signature=cbbd707380e5e014668d218c8a025fd08c7ba1ff260a4befdadc5d039f0ca5ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

