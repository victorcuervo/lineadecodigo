---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKORXIO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKB3KR9Z2sc%2FXPiy15cBVrQYT9k8sy%2B50GMSYTM0egNAIhALsrzGlV7UGD%2F2wBSf31ftvz4Y6fHnGODqnYq5J54CJ%2FKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaUM67p6OWx5CN3dgq3ANmXJ2ZMy5T0XBc6ciGAivkvN83G1ezSnbhadw9RRKETWxGABvU5cXY846h%2FHgDU8zw2i0t44INAHN1FhjzRB0oUrN%2BjKmoJc0KBj33TtfiLNlOPWBxAL8%2FAtQLIefLif%2BDvH8%2BqyxTyHmOtqqBgTASQwibU0u8r9j8FvSitjrduyr9rVZ9vuSdEiGRrFusY5vBUTZ97epaN%2Bvmzs%2BJMZgKzTkgj%2BwSoEseVFvCBrrBbrTXBnIj5fWPhwyBAZJ34pF9wkZbf31gDIHimmdeXlUmq3TJrPf0Owx%2B6Dmk%2FgskkZHYb6PRNFRYgh9fpP4Yt3kkvomaFUBWpi05YujbBUFQ07kIF7lvPG4lM1ugO3ljhdV1ys5UURb2n91uxTIq5TK8TGPbnyfJqXf7oNChNfHPyX8NNQek9ixC2p9MHF8MM1Hc%2Fz5pJ1t3ON7TZDdt9lkgCWg4rTvoVnPounzOnAr8pCPfu4k4RQz4LXfL%2Bl3LMz9YYPzws6aUEkwFz1q7asKpg6csA0w6%2F9F%2FdTnzY4A%2B7eqKmuaszbOiN7WvEjY7nmKTTmVneLNf5oKuBQPSW1JIbTodFQGCgg%2BYyojcF0gQeBwvjF1OhFtnWHo60FlVLaT2XGEWIrn%2Be9SF2zDDkN7JBjqkAc95M0u9eTMQIaaWKYxa4LFdMNPuyO9X4Dk3d8z2IR2OzmCMrScKMJCEHAcdMwQHuEbyGy2V2Yq%2FayPeshCK4hWn5ErP2lX0RvN5g3FkasLjJF1tWfnpC4biuWgAN8E%2BB2C7U81jr8AVOUQzZhA%2FWkO5NqDGi2a6FeqWcAyOdZJwTbEJ4lz6giYosYotzO2uyyXIflxYrXVNEaKeKcz9Ozkk9EAK&X-Amz-Signature=c20177dd23bca4b02fd2a58f4bdbe1b56d804fc2c4a803d01277d3f7f1a82df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RKORXIO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKB3KR9Z2sc%2FXPiy15cBVrQYT9k8sy%2B50GMSYTM0egNAIhALsrzGlV7UGD%2F2wBSf31ftvz4Y6fHnGODqnYq5J54CJ%2FKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxaUM67p6OWx5CN3dgq3ANmXJ2ZMy5T0XBc6ciGAivkvN83G1ezSnbhadw9RRKETWxGABvU5cXY846h%2FHgDU8zw2i0t44INAHN1FhjzRB0oUrN%2BjKmoJc0KBj33TtfiLNlOPWBxAL8%2FAtQLIefLif%2BDvH8%2BqyxTyHmOtqqBgTASQwibU0u8r9j8FvSitjrduyr9rVZ9vuSdEiGRrFusY5vBUTZ97epaN%2Bvmzs%2BJMZgKzTkgj%2BwSoEseVFvCBrrBbrTXBnIj5fWPhwyBAZJ34pF9wkZbf31gDIHimmdeXlUmq3TJrPf0Owx%2B6Dmk%2FgskkZHYb6PRNFRYgh9fpP4Yt3kkvomaFUBWpi05YujbBUFQ07kIF7lvPG4lM1ugO3ljhdV1ys5UURb2n91uxTIq5TK8TGPbnyfJqXf7oNChNfHPyX8NNQek9ixC2p9MHF8MM1Hc%2Fz5pJ1t3ON7TZDdt9lkgCWg4rTvoVnPounzOnAr8pCPfu4k4RQz4LXfL%2Bl3LMz9YYPzws6aUEkwFz1q7asKpg6csA0w6%2F9F%2FdTnzY4A%2B7eqKmuaszbOiN7WvEjY7nmKTTmVneLNf5oKuBQPSW1JIbTodFQGCgg%2BYyojcF0gQeBwvjF1OhFtnWHo60FlVLaT2XGEWIrn%2Be9SF2zDDkN7JBjqkAc95M0u9eTMQIaaWKYxa4LFdMNPuyO9X4Dk3d8z2IR2OzmCMrScKMJCEHAcdMwQHuEbyGy2V2Yq%2FayPeshCK4hWn5ErP2lX0RvN5g3FkasLjJF1tWfnpC4biuWgAN8E%2BB2C7U81jr8AVOUQzZhA%2FWkO5NqDGi2a6FeqWcAyOdZJwTbEJ4lz6giYosYotzO2uyyXIflxYrXVNEaKeKcz9Ozkk9EAK&X-Amz-Signature=0af30701bd939a73792811811f95cc33120ff330863d0de9b98f5ebb723514f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

