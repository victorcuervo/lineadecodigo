---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSMHABC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhyo8vam%2F%2FBGVcLSWBBiQjfBE8RpWXf0J5nZO1lY26MQIhAIs2brcmxaf6Q6EoyZooAIk%2Br6IaqrzI29Gg%2Bs4ALWIEKv8DCEkQABoMNjM3NDIzMTgzODA1Igwm0GyLdezvFPKtUjMq3APNX3X3uIUdTt6qT1DKhUcRIwzQl%2BV%2F%2B4yRzk7KM%2Bl47R8DMWxhYL%2BofL2Z5xHPX6kgj9zGYj6hnf37jDJ3ZU05CPu61jlEJ9SrElm6eLSU9oy%2FbCo9wG%2Fif0WWjV1r3mubLiwcT5S8K%2FJza%2FPW6P0nyHDLrZ%2FiCuRZZeJWpgs3xiCWcsI%2FrzftjYs7MJXpba7WDN3YlhAh%2BWrJAenf5aKDUlRhdh2%2FFeBBbyzjFbeXQT3%2BZJLbl3k7Jr5lNbPbWMXOnLbQh436lbikf1PVzY3O8Wg2sgduntBqyIh%2BGKQlpTeJAaB5LKvqgDXxtSHfk4VeRO3yaZLeHGihxi%2Br2a0OxS7DmwmxMYBRt6Jl0FNdWRm82KeqJE3lfflCKkkNM%2FEutDt9grzkoVTLPWkVAwFvOuaV0vMXNoH%2F196ICrApmqTAfdKRM9x8uaIgyqaq4X4jQqY7O0yVtoh9u%2F0CHILqy28XWT4edLFE0WfvX%2FUu6vknhDOglHIw%2B9MrfoFm6QwyYhKDmpYdrCxk4pKMi9a9D7gQxKATnYzGXM5a0%2F0QJcpdMjCh899cPz93QQcr7z%2B25xt91jZ3hqSCBE08VqqX4MoJu3%2Bhi9rk6wiKALiK9Gc3lcwDBK6eL4YhszDU28bJBjqkAbwoZ0iqC9rNH1zG0H5wPof5qxaWwR%2BfOoU0cFP%2F57rPnvu70N7gzgB9NB4eTQ0wY5m%2FzqRTBhoUaJIFA9UFaVaSWdGHP7WQ1KSMWMElMrtclR5dawy1t%2FjGMpBNVSuC%2Bnt2jyy87RWFpSjLOfgaBjC5Ge9inHdXZi29H%2FeugdVUsNnyCdwdzOVcRbVzuCcVfjr4Hv%2FAeTj%2BWZrsg1VA0XPq6nvc&X-Amz-Signature=47ee601d50990fa5d1debd62e08c7e389d42e2ba194f78607cd1b5c67f5c06d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RSMHABC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhyo8vam%2F%2FBGVcLSWBBiQjfBE8RpWXf0J5nZO1lY26MQIhAIs2brcmxaf6Q6EoyZooAIk%2Br6IaqrzI29Gg%2Bs4ALWIEKv8DCEkQABoMNjM3NDIzMTgzODA1Igwm0GyLdezvFPKtUjMq3APNX3X3uIUdTt6qT1DKhUcRIwzQl%2BV%2F%2B4yRzk7KM%2Bl47R8DMWxhYL%2BofL2Z5xHPX6kgj9zGYj6hnf37jDJ3ZU05CPu61jlEJ9SrElm6eLSU9oy%2FbCo9wG%2Fif0WWjV1r3mubLiwcT5S8K%2FJza%2FPW6P0nyHDLrZ%2FiCuRZZeJWpgs3xiCWcsI%2FrzftjYs7MJXpba7WDN3YlhAh%2BWrJAenf5aKDUlRhdh2%2FFeBBbyzjFbeXQT3%2BZJLbl3k7Jr5lNbPbWMXOnLbQh436lbikf1PVzY3O8Wg2sgduntBqyIh%2BGKQlpTeJAaB5LKvqgDXxtSHfk4VeRO3yaZLeHGihxi%2Br2a0OxS7DmwmxMYBRt6Jl0FNdWRm82KeqJE3lfflCKkkNM%2FEutDt9grzkoVTLPWkVAwFvOuaV0vMXNoH%2F196ICrApmqTAfdKRM9x8uaIgyqaq4X4jQqY7O0yVtoh9u%2F0CHILqy28XWT4edLFE0WfvX%2FUu6vknhDOglHIw%2B9MrfoFm6QwyYhKDmpYdrCxk4pKMi9a9D7gQxKATnYzGXM5a0%2F0QJcpdMjCh899cPz93QQcr7z%2B25xt91jZ3hqSCBE08VqqX4MoJu3%2Bhi9rk6wiKALiK9Gc3lcwDBK6eL4YhszDU28bJBjqkAbwoZ0iqC9rNH1zG0H5wPof5qxaWwR%2BfOoU0cFP%2F57rPnvu70N7gzgB9NB4eTQ0wY5m%2FzqRTBhoUaJIFA9UFaVaSWdGHP7WQ1KSMWMElMrtclR5dawy1t%2FjGMpBNVSuC%2Bnt2jyy87RWFpSjLOfgaBjC5Ge9inHdXZi29H%2FeugdVUsNnyCdwdzOVcRbVzuCcVfjr4Hv%2FAeTj%2BWZrsg1VA0XPq6nvc&X-Amz-Signature=3b9aace7337d17250d0365655cc37f5b7b5d50fffd8b005528f633c4c9d3fb28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

