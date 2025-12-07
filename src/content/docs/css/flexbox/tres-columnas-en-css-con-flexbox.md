---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHZL3YK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZaxKjK2sac7HElmuG%2FM1%2FGGKa%2BQFxPzhVH%2BNkW4WjvAiEA0VnaT1amURyq75SEAAfDGBidUDLjKnLpdYAimi5I%2BQsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyA7RzWwQ4Ik%2BDsircA%2FGsH2m5oExpE7%2BIxu3Yf5LCtMzJP0CXEKVqcrA9IpQ4EajQ6gXOCW1BvvoTNWDe6BfmBWAxX3qOggsiRA5mhx3mkShc3qCuGG2pLBcyGaZ88B422K4c0IZ%2FmXMyCDPHpCk4cmOOcEzG2iKnd2ROLGSyH3k8Tb7%2FKjHCjtHUw%2F743O4p5PsikKdtwCC40DWvwz83gWvRzuTH%2Fj5OjwsymeCT4%2FwdKnHT%2BhMqCJvKJfnO2MV6gDE4Tt0hh98g%2BmzQpkGONKncZXzU42ZQfswl%2FJ%2BHCKz6KGuR4DMUNeBTnet%2BdGKqbUEndA1Ih%2BPyt1DrCC9CvAyMOkm4JXwc16B0cZi%2FeKtn309Ts6M%2FFyRKDV3euvIBgHXMpol4PZNSkOe%2FZx6Wd7arvzGtYQntbdf%2B9RnSjN5s0lqh8wOl15rsIZukCo6t7H0I%2FxsBxotP3e%2FZBo4g2%2BivxM5JMv9zsJ1sH5bQI%2Fz1W4eRAVya72u4LnID7wMfQIXYoBLOJDzirAihU55VebS58lftcw%2FAEMRX6HqTdT3ebTK3yjUiVfqJBMd8PerYFJO398vDvvJWF4ZZlQzGfqbX9AV8adpx5qPXm02jxruDl2Q3ApujZMZk2WYIrNtvd3hXTCCvgOFiMOS%2B1skGOqUBt0XprMxUxEBffs%2FlxyIqiJRhHrSwFHxSy%2FwjyJgTfd07BJsY6UfgztwjgP170%2BP7V2FD2f6yCruawYyjjg1%2B3NXyqC7%2FzSJagXdEqSlrn5JHP7BJ6OWyEoY0LruQfT3YG13vtcOCs1aesQqOYuIc6s3bKlmJdQMDycqnMKb1o%2BeTySuICbUv2pABjGEV1xabAKfv%2BXv8tsQMQDjxmfR4%2FC7%2FR4fp&X-Amz-Signature=4f582d67a05d5f308a497ebaf0333511b45f110270b2da9f4630329a13d35dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHZL3YK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDZaxKjK2sac7HElmuG%2FM1%2FGGKa%2BQFxPzhVH%2BNkW4WjvAiEA0VnaT1amURyq75SEAAfDGBidUDLjKnLpdYAimi5I%2BQsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCpyA7RzWwQ4Ik%2BDsircA%2FGsH2m5oExpE7%2BIxu3Yf5LCtMzJP0CXEKVqcrA9IpQ4EajQ6gXOCW1BvvoTNWDe6BfmBWAxX3qOggsiRA5mhx3mkShc3qCuGG2pLBcyGaZ88B422K4c0IZ%2FmXMyCDPHpCk4cmOOcEzG2iKnd2ROLGSyH3k8Tb7%2FKjHCjtHUw%2F743O4p5PsikKdtwCC40DWvwz83gWvRzuTH%2Fj5OjwsymeCT4%2FwdKnHT%2BhMqCJvKJfnO2MV6gDE4Tt0hh98g%2BmzQpkGONKncZXzU42ZQfswl%2FJ%2BHCKz6KGuR4DMUNeBTnet%2BdGKqbUEndA1Ih%2BPyt1DrCC9CvAyMOkm4JXwc16B0cZi%2FeKtn309Ts6M%2FFyRKDV3euvIBgHXMpol4PZNSkOe%2FZx6Wd7arvzGtYQntbdf%2B9RnSjN5s0lqh8wOl15rsIZukCo6t7H0I%2FxsBxotP3e%2FZBo4g2%2BivxM5JMv9zsJ1sH5bQI%2Fz1W4eRAVya72u4LnID7wMfQIXYoBLOJDzirAihU55VebS58lftcw%2FAEMRX6HqTdT3ebTK3yjUiVfqJBMd8PerYFJO398vDvvJWF4ZZlQzGfqbX9AV8adpx5qPXm02jxruDl2Q3ApujZMZk2WYIrNtvd3hXTCCvgOFiMOS%2B1skGOqUBt0XprMxUxEBffs%2FlxyIqiJRhHrSwFHxSy%2FwjyJgTfd07BJsY6UfgztwjgP170%2BP7V2FD2f6yCruawYyjjg1%2B3NXyqC7%2FzSJagXdEqSlrn5JHP7BJ6OWyEoY0LruQfT3YG13vtcOCs1aesQqOYuIc6s3bKlmJdQMDycqnMKb1o%2BeTySuICbUv2pABjGEV1xabAKfv%2BXv8tsQMQDjxmfR4%2FC7%2FR4fp&X-Amz-Signature=566b4206b0ab7c517ff5f5cb1a0280b1620beb3374b28516dc3727e1f358bd42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

