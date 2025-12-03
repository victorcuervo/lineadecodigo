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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPSYH26%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCTfXnrR22tVpjo9VyomaKg3Zd%2Fb0G4mFDn7EIpvJz0jgIgNkrMHSq%2B2kpvQcMU29VUlIhPgDWtehPS2H%2F2BF3nxagq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBolRPwKsoT0Bu3jyrcAyDPWZ3Yp%2F5njrk%2BFtQ3XDsD5yh0Bc%2BlsJcKwe9iv0fDEVfK2lezGtzbpuh86M5qbAPzbbl4EPvcKC%2Fi0r%2FVNcah4mVTlZgE%2Fb6ylDlFOfUWlGBC6jnkXyUZ2VZCHnk5w1qxM8NwLj62x%2FBTd2pmaPE27a1opBxC6PVWbEAphffZf%2Fy972DoyqI8i8qBQWEDBiCPd4PUWTJbVvNomC4wnE%2FU2xDdMoYUvCZvUAMspSVwOwaXuu7HyZZu4uXJf2duWYntkzJHjFWGt%2FxrAp6ZT4mt2Dm2GBpfw1YuxMlXR%2FpV1hx7k1QWjsKIBSJKULkoFPGwA6sO14IKEGEf6w7Muw2U6pZXaUqhPy9ax1pOJnLmkzoVbjQtFKFFMoFHJAXsbbHtd%2FNVOgDQGl6r8rZfoQPs6E57bu8OTyfehsVZEGHDzowhR6PFczHF5hiSq5569RLCxaRGYYtZz5lWYj%2BOMpwjzHKryk%2FjJ6fnVRYecFU%2Bj1SLCaG3T%2FwBf%2FBFtvdsOjFWbze0UneoWDVoHtrp9%2BKGAYyZ8YZ7Pf3PSuzTkiTswln2C%2BfZHjjvRHENaG5VYlA%2BSpj7sxmXHy7qf7Xn25p9FXVS5f0%2ByTZ%2Bq13aMxPWJdaD1epf0cFER61QMI2bv8kGOqUBbvOyDwoUlvU2l68DNbDW017qs7GwEcq8KrREQu3G8x8Uzd0XMg9Garxj4HtR9te1gSBBu2Eoxt64v8ciHK80RNvlgH%2BBQEW%2FoHLMnUSOJa8x%2BrqmuQCIoYoqpRxxhwZR3VquaWlw%2BItISBj%2Bd%2BGaTy4buccNl%2BsOsgAo2L1AvAVqmWsadZyqM9vCvJcFp6axHSwNRgFmpeoe33Nj8iD0qj3foAPt&X-Amz-Signature=55f269a2b47b8b5de82088a8e9046c41ef42e0ed33be2de7a93f3b0d380c30e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPPSYH26%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCTfXnrR22tVpjo9VyomaKg3Zd%2Fb0G4mFDn7EIpvJz0jgIgNkrMHSq%2B2kpvQcMU29VUlIhPgDWtehPS2H%2F2BF3nxagq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEBolRPwKsoT0Bu3jyrcAyDPWZ3Yp%2F5njrk%2BFtQ3XDsD5yh0Bc%2BlsJcKwe9iv0fDEVfK2lezGtzbpuh86M5qbAPzbbl4EPvcKC%2Fi0r%2FVNcah4mVTlZgE%2Fb6ylDlFOfUWlGBC6jnkXyUZ2VZCHnk5w1qxM8NwLj62x%2FBTd2pmaPE27a1opBxC6PVWbEAphffZf%2Fy972DoyqI8i8qBQWEDBiCPd4PUWTJbVvNomC4wnE%2FU2xDdMoYUvCZvUAMspSVwOwaXuu7HyZZu4uXJf2duWYntkzJHjFWGt%2FxrAp6ZT4mt2Dm2GBpfw1YuxMlXR%2FpV1hx7k1QWjsKIBSJKULkoFPGwA6sO14IKEGEf6w7Muw2U6pZXaUqhPy9ax1pOJnLmkzoVbjQtFKFFMoFHJAXsbbHtd%2FNVOgDQGl6r8rZfoQPs6E57bu8OTyfehsVZEGHDzowhR6PFczHF5hiSq5569RLCxaRGYYtZz5lWYj%2BOMpwjzHKryk%2FjJ6fnVRYecFU%2Bj1SLCaG3T%2FwBf%2FBFtvdsOjFWbze0UneoWDVoHtrp9%2BKGAYyZ8YZ7Pf3PSuzTkiTswln2C%2BfZHjjvRHENaG5VYlA%2BSpj7sxmXHy7qf7Xn25p9FXVS5f0%2ByTZ%2Bq13aMxPWJdaD1epf0cFER61QMI2bv8kGOqUBbvOyDwoUlvU2l68DNbDW017qs7GwEcq8KrREQu3G8x8Uzd0XMg9Garxj4HtR9te1gSBBu2Eoxt64v8ciHK80RNvlgH%2BBQEW%2FoHLMnUSOJa8x%2BrqmuQCIoYoqpRxxhwZR3VquaWlw%2BItISBj%2Bd%2BGaTy4buccNl%2BsOsgAo2L1AvAVqmWsadZyqM9vCvJcFp6axHSwNRgFmpeoe33Nj8iD0qj3foAPt&X-Amz-Signature=84d0822b613893b08c1912b8f1e6c03e0d981ae1a1de8b1dfaea72e1248e9762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

