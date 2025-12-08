---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RP5IMQL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2BDHGjxwzugQbWO0mOb%2Fa9c%2FlIzoOd5%2FVGag3W7G3BwIhAIuozBl1y%2FPsyNzZUjVfPPsbmC9j%2BG1bJPtUjn9cWAirKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOv0pHkJTD%2FrJY9Vgq3AOgEpluRseLqbN3HtKyNn16T9MgyCBZrxXzURxwA4Bmxp2D2ZVlmROlB6nM7dkuyCk7gW1IFBupFTnpTZg%2BsALQFcz%2Fm37J%2BXQDmQe08cM%2Fd%2FGx5H6HzVTx1bgGoxK9lnyfZfN300mUMK8Flx9xOMWUwWmS8fs1t00P3kdHKcrz1896OfswsNVDX6b6suC5%2FT5%2F0UWzPjGhuKTBao0UUuTZfR6H6FGZBGqafLwM9ZyOWL8S88SZrflnc0UR9SZ6LnfGxazHp%2Fi1zxpYHod6x6ReYiZmjpRkoMDA8yjA0JXVPVj3x0kt4EJO%2BIcHsMkycQ89rD3288R%2FdqI6U1DHzpcTsO4h3EYvEr6BUTqFWxM2YX5zgKi0PXa9SyX8fpWpiZXAcZZd2c5voxY%2FuEe6iYxFtoh4%2FGEpYP77IQIxNcrqPGzKMi8m%2B6%2BiKorAPAnabWQ9wjfoK7Ws0Vyv75Vgy80MX8toQ%2BXsGKTCwkdeSwrNbZ9KWf%2B3FfKNwkMRAwA%2BLJbNQrb3TO%2Buz9MyWuKrE3G27Yu90rMbmjrT%2B3SUCqTcYxCUqKUFPPypSU9k%2Bl8ZuOa5Yrwo%2F%2BOOSEMsp%2FkZ7bGXSdZST35HQCh07OM8y5NAjfSPdTG2pou5P6G7gTDOs9zJBjqkAfPGFYBICxu3IIJ0IT3ee5ozYWGL39CqHr82BynRt%2FlNdHASlXwOQnEA%2FLFsmtkQNyGm4cOqbrZqAVVsXBJ7HzT7mSiJPlDP4WNd%2F3Voc3Rly989Ha9YWtS3iXtqvH2dXkAzJx5arljvVMiTulS2puJ4ID27MBXB126ZrfbAnIUAbfN9VA5Z9iEaRo9JSMgnLLfdfFnNq6Cx%2FWJA6CUsLl8kISqx&X-Amz-Signature=cb4700d17c6eae5e75c8339e5f569d24803b2b3656be9affe0267846f022cb20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RP5IMQL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T185318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq%2BDHGjxwzugQbWO0mOb%2Fa9c%2FlIzoOd5%2FVGag3W7G3BwIhAIuozBl1y%2FPsyNzZUjVfPPsbmC9j%2BG1bJPtUjn9cWAirKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOv0pHkJTD%2FrJY9Vgq3AOgEpluRseLqbN3HtKyNn16T9MgyCBZrxXzURxwA4Bmxp2D2ZVlmROlB6nM7dkuyCk7gW1IFBupFTnpTZg%2BsALQFcz%2Fm37J%2BXQDmQe08cM%2Fd%2FGx5H6HzVTx1bgGoxK9lnyfZfN300mUMK8Flx9xOMWUwWmS8fs1t00P3kdHKcrz1896OfswsNVDX6b6suC5%2FT5%2F0UWzPjGhuKTBao0UUuTZfR6H6FGZBGqafLwM9ZyOWL8S88SZrflnc0UR9SZ6LnfGxazHp%2Fi1zxpYHod6x6ReYiZmjpRkoMDA8yjA0JXVPVj3x0kt4EJO%2BIcHsMkycQ89rD3288R%2FdqI6U1DHzpcTsO4h3EYvEr6BUTqFWxM2YX5zgKi0PXa9SyX8fpWpiZXAcZZd2c5voxY%2FuEe6iYxFtoh4%2FGEpYP77IQIxNcrqPGzKMi8m%2B6%2BiKorAPAnabWQ9wjfoK7Ws0Vyv75Vgy80MX8toQ%2BXsGKTCwkdeSwrNbZ9KWf%2B3FfKNwkMRAwA%2BLJbNQrb3TO%2Buz9MyWuKrE3G27Yu90rMbmjrT%2B3SUCqTcYxCUqKUFPPypSU9k%2Bl8ZuOa5Yrwo%2F%2BOOSEMsp%2FkZ7bGXSdZST35HQCh07OM8y5NAjfSPdTG2pou5P6G7gTDOs9zJBjqkAfPGFYBICxu3IIJ0IT3ee5ozYWGL39CqHr82BynRt%2FlNdHASlXwOQnEA%2FLFsmtkQNyGm4cOqbrZqAVVsXBJ7HzT7mSiJPlDP4WNd%2F3Voc3Rly989Ha9YWtS3iXtqvH2dXkAzJx5arljvVMiTulS2puJ4ID27MBXB126ZrfbAnIUAbfN9VA5Z9iEaRo9JSMgnLLfdfFnNq6Cx%2FWJA6CUsLl8kISqx&X-Amz-Signature=61ce63b150996b3733141fc69803ad95231cd9a1f4fa93d678bef73181fa2714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

