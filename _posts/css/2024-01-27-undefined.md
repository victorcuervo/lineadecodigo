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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDAS34Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDQXS6SJQTJSr0Wsqk5FlYMyC0MG5NrOhiO4WxKe6LYSQIhAOiZpWg%2F8iZnm4eLJDMgzRKbraA%2FLRRdJfIZlxfTFR0dKv8DCCIQABoMNjM3NDIzMTgzODA1IgzUR%2FSev5I5k8VsvSkq3AOiw4TVgxS3KtpdqMHZRnPs40bNJ0TiGK0H273%2FRISHRxV%2FNyKyFhfxMU%2BA5%2Fo2xApcOL6IB1w34Lka0IoBA6h%2BQfAd1lXvnHsaWR8SaXfgL4smGvagU9kNTJSLemqIgA1hifJFeweM6grFwRwypALJXUCP%2F5b2Bzxd46l%2FKI9PWEAB4HA0V%2FXpso0fVvkfAM9RNFeLIO1jsJYxBBTNMDjiNVboR2RWSylUagQZZz1YlGptFkCj2lrL9wdbLkHTKWOx75y%2BN8StgzAg8vDoVl6BlfiO1kcpkZHDMCd%2B5YwptJvkNw8PqUhGUErJXfCT1P35GfKnh6dbhf6kfpUldynXaRgVSSPyH%2Fd75BEEQpQsOjJRwRrgNFREE2SLje1tDKizjnHlJHzMMTq%2FHNqU7w0LC9cbO1bDta7Q6n6kxT2vIs31Hfl%2B9Vr7F0nIca6SY14oUVuvZKj6tQUnWpsceVKUQPATJgh3e7qorVqsSTfAfUm6KuFDuwWL8BjhjkBbVKHcyhkkMFF28%2Ft96BPugXUdA5B1KcZiVeKDTYUb0ppv9ouD3ii25ozLG%2B6EC8KEyY%2F5ygTmsbCe7%2FGptVXkibkdW47aBzejV%2BrAzmA%2Bh19VsZ%2BLWYj9d4o8EBEqjzDFlL7JBjqkAcrHUpAHlSBUj7uCA0mg0ZhCS1WYL6k4MF7eiyL08%2F2ofsdy10lb8xxjhhUa2H5ijoE6uUt7BgeqeNrq4AoWEtsWt97%2BUBdV01c%2BW1w%2BGP3gVevWpGHf1ahFRx9e0BqXT%2B1wJCeq5CQLls3XJWoyy1RjVmhcSJodqJb3N%2Fyye%2FtcO%2FnMqT9Os3%2FfQWcFyemzPjVx80anRg9Wawk5CAtY44k6udTv&X-Amz-Signature=1b96c899a8140be748c1a94aff30030ac7c98d3a27218296d91ae5c4703d1d68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDAS34Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDQXS6SJQTJSr0Wsqk5FlYMyC0MG5NrOhiO4WxKe6LYSQIhAOiZpWg%2F8iZnm4eLJDMgzRKbraA%2FLRRdJfIZlxfTFR0dKv8DCCIQABoMNjM3NDIzMTgzODA1IgzUR%2FSev5I5k8VsvSkq3AOiw4TVgxS3KtpdqMHZRnPs40bNJ0TiGK0H273%2FRISHRxV%2FNyKyFhfxMU%2BA5%2Fo2xApcOL6IB1w34Lka0IoBA6h%2BQfAd1lXvnHsaWR8SaXfgL4smGvagU9kNTJSLemqIgA1hifJFeweM6grFwRwypALJXUCP%2F5b2Bzxd46l%2FKI9PWEAB4HA0V%2FXpso0fVvkfAM9RNFeLIO1jsJYxBBTNMDjiNVboR2RWSylUagQZZz1YlGptFkCj2lrL9wdbLkHTKWOx75y%2BN8StgzAg8vDoVl6BlfiO1kcpkZHDMCd%2B5YwptJvkNw8PqUhGUErJXfCT1P35GfKnh6dbhf6kfpUldynXaRgVSSPyH%2Fd75BEEQpQsOjJRwRrgNFREE2SLje1tDKizjnHlJHzMMTq%2FHNqU7w0LC9cbO1bDta7Q6n6kxT2vIs31Hfl%2B9Vr7F0nIca6SY14oUVuvZKj6tQUnWpsceVKUQPATJgh3e7qorVqsSTfAfUm6KuFDuwWL8BjhjkBbVKHcyhkkMFF28%2Ft96BPugXUdA5B1KcZiVeKDTYUb0ppv9ouD3ii25ozLG%2B6EC8KEyY%2F5ygTmsbCe7%2FGptVXkibkdW47aBzejV%2BrAzmA%2Bh19VsZ%2BLWYj9d4o8EBEqjzDFlL7JBjqkAcrHUpAHlSBUj7uCA0mg0ZhCS1WYL6k4MF7eiyL08%2F2ofsdy10lb8xxjhhUa2H5ijoE6uUt7BgeqeNrq4AoWEtsWt97%2BUBdV01c%2BW1w%2BGP3gVevWpGHf1ahFRx9e0BqXT%2B1wJCeq5CQLls3XJWoyy1RjVmhcSJodqJb3N%2Fyye%2FtcO%2FnMqT9Os3%2FfQWcFyemzPjVx80anRg9Wawk5CAtY44k6udTv&X-Amz-Signature=37a04320bfef2ec4045a61799def7441e17999569de956113f8ed96123ed2162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

