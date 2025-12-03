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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZEBNHV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEuDPC%2B0%2FSO87weLK2k6iq%2BhKTSSjM9aNAUeRu85PdcWAiAHuffZWxIzx98he65WyKr8WCnn8ZXdQSwjqC60iy93tCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMxj6SI%2F%2B8Oym19rbxKtwD4kfe2CcOJvGo%2FmxfBJPFjZ3uzm3i2YqPk9ZrzRxq8%2Fi4I%2BN7F9dIxHMEHJJRl8CPXNOii146MpkJlxv5UPpZGqHQebWhqWQqifHIm%2F5Q%2FNU%2BS1LPi3Bk3V0AAeIavURiN%2F2ed78DcyXyHXfGyAHmlGGNArOHRkxayFlnlxfflMWkgcxc3BWicOf348lcJXBy2vMXiiBIEGUJQbyb8cSv%2B5IWIrQa%2BvC%2B6eM4hVFzXQTNH9Mg5QR6%2FfFLBpQjoIyOjTAgOduzgRN1Ge9VKbTGHAKpuGuX8o2XGuxpJyMBX1m2yWUadCp2xO8M9MAGQgt7TKB9wstvZMPlVXKBlmJgQozpfiO1XrNnUMTHmvXIy0fHf4dd2e5MYqU3mfY4B%2FiuEY9f68YyDtWMUYh44enWMq5XNFh2imPNLTvh4WqkjI3VWfpn1rMgnqeaH4c0DaZFsJBAEYeSn5YtPCngobt6cKCf23Btz7j0LqS%2F2cso01Ue6tfqqEDCi1BfolnI9L7683IRIudNXE%2Fv3g%2Fymf7ZVeucXNO2NmJuDkRoIPtL17uryiuNmw1jcxkVaKDZPi0OchrDqrKokQafwYVq0u5AobDR9Dg%2FC5WkOjuZAsBV4voceuDvSKbVwSD5eD0wx5q%2FyQY6pgHvEok8b4nV3KKvl3BhMaPaYI2mewa2GMaCBV%2FSwqFKDK%2FFjSe1svdM1Ct8k4tpuo6rGo%2F2OYUbu46fozPO6f17tDzxUxL9I9d09HANuK5fDgNpBVr4i96PU3iFvJB5i3kMd6ACvL22xW%2Ffv5q9D%2F1HClnENvDfuSjlI%2FjDZyreJs3mNY5EOq3idus0KtbKHFuWRKVrz4T20UPZ0AfqxgwdTVBunFZg&X-Amz-Signature=adad79887255e1627d4360b507b68969a535224322f2779efca12465b3bdb229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZEBNHV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEuDPC%2B0%2FSO87weLK2k6iq%2BhKTSSjM9aNAUeRu85PdcWAiAHuffZWxIzx98he65WyKr8WCnn8ZXdQSwjqC60iy93tCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMxj6SI%2F%2B8Oym19rbxKtwD4kfe2CcOJvGo%2FmxfBJPFjZ3uzm3i2YqPk9ZrzRxq8%2Fi4I%2BN7F9dIxHMEHJJRl8CPXNOii146MpkJlxv5UPpZGqHQebWhqWQqifHIm%2F5Q%2FNU%2BS1LPi3Bk3V0AAeIavURiN%2F2ed78DcyXyHXfGyAHmlGGNArOHRkxayFlnlxfflMWkgcxc3BWicOf348lcJXBy2vMXiiBIEGUJQbyb8cSv%2B5IWIrQa%2BvC%2B6eM4hVFzXQTNH9Mg5QR6%2FfFLBpQjoIyOjTAgOduzgRN1Ge9VKbTGHAKpuGuX8o2XGuxpJyMBX1m2yWUadCp2xO8M9MAGQgt7TKB9wstvZMPlVXKBlmJgQozpfiO1XrNnUMTHmvXIy0fHf4dd2e5MYqU3mfY4B%2FiuEY9f68YyDtWMUYh44enWMq5XNFh2imPNLTvh4WqkjI3VWfpn1rMgnqeaH4c0DaZFsJBAEYeSn5YtPCngobt6cKCf23Btz7j0LqS%2F2cso01Ue6tfqqEDCi1BfolnI9L7683IRIudNXE%2Fv3g%2Fymf7ZVeucXNO2NmJuDkRoIPtL17uryiuNmw1jcxkVaKDZPi0OchrDqrKokQafwYVq0u5AobDR9Dg%2FC5WkOjuZAsBV4voceuDvSKbVwSD5eD0wx5q%2FyQY6pgHvEok8b4nV3KKvl3BhMaPaYI2mewa2GMaCBV%2FSwqFKDK%2FFjSe1svdM1Ct8k4tpuo6rGo%2F2OYUbu46fozPO6f17tDzxUxL9I9d09HANuK5fDgNpBVr4i96PU3iFvJB5i3kMd6ACvL22xW%2Ffv5q9D%2F1HClnENvDfuSjlI%2FjDZyreJs3mNY5EOq3idus0KtbKHFuWRKVrz4T20UPZ0AfqxgwdTVBunFZg&X-Amz-Signature=08667ac91c1494018e5c1dcd8210ad1d6e7d696f49a79a19a0606000e6450d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

