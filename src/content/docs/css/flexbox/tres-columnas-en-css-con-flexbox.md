---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOFPCARB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWBWQx9vYK4Xmn3SXY4i7PmfoMGvA9qmbURke%2BcWmjcAiEA%2FOhi7xDGokArocx9Kgu5K5AeH8ANKCf0Mr0b2RBWqmAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6LerlIgqAXsZynzircA09ofB7ZKR5d7ZvTN%2BTCXq7UTpLN1wYDFZe4QImxzxkNW1A72o%2F%2Fnj6YE2lxAL4%2FfXUxFO6HyO9xd57mLl5y0LpwzFE7p%2Bfk1SSDDQjT1eWttXag0QaImXPFAVubesKNCSr%2FAq%2B%2B5z1hPn52DwUGZnOq1pLdxtRcDWc20LIRdfLJqJ3spW8Kqy72B1BCKktnu4k%2B%2B1EyubL5hkXHfeijtWUbThtYaOAIhtkY3WQtjwcYlNrh2p8VBplFBWqxRcyawiO%2Fj2iFXwSlS9tP460OmRl3Epr6vXzm3uHd1pHWwaLAdKYqJNepolFFCcLikP0m0TRLmzLF7e0hhMp0ZQ4xT9OwZh3IAeRDnnUqBV%2BRKTZRAeaWwo9yHk0Ruy8dluphSJGrphkSMeMVCwLGNFsp5BiCeoJqqRTVbim2LzzMjikTD79pWWRzjgYjy%2FnOQFArpes6Zb5dIDGZ8UOjHwgXp5xgaEG4IC%2B%2BDhj1ei8NuOxloiCGAm%2FJYsnt2%2F8%2F4nETF%2FzO7SKso5QoedQEIQPryg2%2BNiZwPi1S5ArvS0gIT8p3Yv4KZ8l7cilkQaAJ2Bz08v6622w2iR1kP3HhlW2G2R6lgvjW7ftduLGw22OG0U%2FVV%2B0utTce3BGd4TFgMLfE38kGOqUBoEVQywe5BgfEufQKrmoKS8qig0VrpSNSOmSiDKTmTu%2BPn5mbNx1bqLJPjn8mlgcllsjBwrYP9oBGNo1HOE2V527moZVueibHe%2FFk2Qc6ixsZIThds1rjSekICWvfYBAVLE1mV8RLCJlt%2BIpb%2FEs6pktWJCFahu9basI0TiShSnhu%2FZxc79ZBaQeaF2PZDyXqP%2Fm%2FJrXJQR%2FSpN1zYJQUvclEk6A3&X-Amz-Signature=ddd7a99b2c414e8ad340f55bfe92423d92ebaeb57cd1919089eb33c20b49b803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOFPCARB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWBWQx9vYK4Xmn3SXY4i7PmfoMGvA9qmbURke%2BcWmjcAiEA%2FOhi7xDGokArocx9Kgu5K5AeH8ANKCf0Mr0b2RBWqmAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB6LerlIgqAXsZynzircA09ofB7ZKR5d7ZvTN%2BTCXq7UTpLN1wYDFZe4QImxzxkNW1A72o%2F%2Fnj6YE2lxAL4%2FfXUxFO6HyO9xd57mLl5y0LpwzFE7p%2Bfk1SSDDQjT1eWttXag0QaImXPFAVubesKNCSr%2FAq%2B%2B5z1hPn52DwUGZnOq1pLdxtRcDWc20LIRdfLJqJ3spW8Kqy72B1BCKktnu4k%2B%2B1EyubL5hkXHfeijtWUbThtYaOAIhtkY3WQtjwcYlNrh2p8VBplFBWqxRcyawiO%2Fj2iFXwSlS9tP460OmRl3Epr6vXzm3uHd1pHWwaLAdKYqJNepolFFCcLikP0m0TRLmzLF7e0hhMp0ZQ4xT9OwZh3IAeRDnnUqBV%2BRKTZRAeaWwo9yHk0Ruy8dluphSJGrphkSMeMVCwLGNFsp5BiCeoJqqRTVbim2LzzMjikTD79pWWRzjgYjy%2FnOQFArpes6Zb5dIDGZ8UOjHwgXp5xgaEG4IC%2B%2BDhj1ei8NuOxloiCGAm%2FJYsnt2%2F8%2F4nETF%2FzO7SKso5QoedQEIQPryg2%2BNiZwPi1S5ArvS0gIT8p3Yv4KZ8l7cilkQaAJ2Bz08v6622w2iR1kP3HhlW2G2R6lgvjW7ftduLGw22OG0U%2FVV%2B0utTce3BGd4TFgMLfE38kGOqUBoEVQywe5BgfEufQKrmoKS8qig0VrpSNSOmSiDKTmTu%2BPn5mbNx1bqLJPjn8mlgcllsjBwrYP9oBGNo1HOE2V527moZVueibHe%2FFk2Qc6ixsZIThds1rjSekICWvfYBAVLE1mV8RLCJlt%2BIpb%2FEs6pktWJCFahu9basI0TiShSnhu%2FZxc79ZBaQeaF2PZDyXqP%2Fm%2FJrXJQR%2FSpN1zYJQUvclEk6A3&X-Amz-Signature=44cf37e1ee2d81cc88506ed70ef4dce3217bf24608dc53c4506306924d26f999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

