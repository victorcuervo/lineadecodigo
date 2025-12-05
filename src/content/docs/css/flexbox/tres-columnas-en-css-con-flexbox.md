---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OCEW64%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkjp%2FAvJUI6smtDRpBjIVJ2%2FwJXyjrwIpqY21crbLndAiBaiLbRy2ZGbs8YiSSuexFFrERy8fABvjDMGgZxnlw1Zir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMY4%2BOmbePnGm1clewKtwD10SsSUWGNKIy72eq8SkWQI%2BDPs%2BWKbHuEQtzK77DhuCxE%2BTZVYKQyy4uozGerQScQ3Epc0yfbzUZfmhGJtJsaYzc9O2%2Bg8uGNAX%2BQ%2BcCxontZxrIgI8sWgz7S5Odq5YLqFSaBI%2Fe9vLl5GM3psTe3fWNApLmdTo8DgShu2hF3KNTIjR04%2BtiAzTSp3Yf2FTA04a7bz3o22nsQ8JXYoP8WjkeHzzTCa1yDLkhgWsjLut16eUKlnHyvB5xJFMNPF6JnYEIj6kq3SNkKespELKIzFMayOZ8hUVL0BhsgOVib7XcD2JXA2JLEMdM4dFKjldu54yYV%2BM0zWykxlIlr%2FV03OzzW5oQmA2nDM7odYox5IeVY6o4UUHXzvY5J6f6jdiLO6aJ%2FP8PCH%2BhyBA%2BOi4%2Bm2tzYrpGZPeY2Z6%2F3YgBkXy7XJJ2cZrnBp7%2FLytobUnUmq%2FCHHuK9PVjnw2F79Ljy9%2FnRsyARdNGBbX3weLL9fWTUnSoiUdydPFQneAWiiHKEDHi7JYm%2FdgyKk6JhFzpZnke%2B%2FHHv1B%2BColPMWOPqfDRaOHy2ovBXbDu5OAKCZgPsq2MUyUXS%2F8x46UN%2FQZOOpyBMGdTwIESR3AXBH%2Bmpg%2B3bCHMkcTeuSiem%2FwwvozIyQY6pgEDM7W0XK5g9Abx0ieru6jOcyUNcrF7%2F244c4EYlW6ygRGOPd781Fyc9ENULhuOdEOxgk7k0dNc8wwzImgPOkEuloaUoA%2Br3xBaC4i7AgZYeGHUHlXoFAoWcSCzYTXp3frzSXuiEuGxS5kUVoqrskkc10kpOQ6th4F4I9cvWkOHgZRiHIqSH0Us4w8w9g1lfBTdHWS5qi9KSz7yXrEv5jbcb7mi6UW9&X-Amz-Signature=49f0680d7f87c7888b3991ba560a12637a874284322658a9ea4dc3d855f7e0cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5OCEW64%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T022749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBkjp%2FAvJUI6smtDRpBjIVJ2%2FwJXyjrwIpqY21crbLndAiBaiLbRy2ZGbs8YiSSuexFFrERy8fABvjDMGgZxnlw1Zir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMY4%2BOmbePnGm1clewKtwD10SsSUWGNKIy72eq8SkWQI%2BDPs%2BWKbHuEQtzK77DhuCxE%2BTZVYKQyy4uozGerQScQ3Epc0yfbzUZfmhGJtJsaYzc9O2%2Bg8uGNAX%2BQ%2BcCxontZxrIgI8sWgz7S5Odq5YLqFSaBI%2Fe9vLl5GM3psTe3fWNApLmdTo8DgShu2hF3KNTIjR04%2BtiAzTSp3Yf2FTA04a7bz3o22nsQ8JXYoP8WjkeHzzTCa1yDLkhgWsjLut16eUKlnHyvB5xJFMNPF6JnYEIj6kq3SNkKespELKIzFMayOZ8hUVL0BhsgOVib7XcD2JXA2JLEMdM4dFKjldu54yYV%2BM0zWykxlIlr%2FV03OzzW5oQmA2nDM7odYox5IeVY6o4UUHXzvY5J6f6jdiLO6aJ%2FP8PCH%2BhyBA%2BOi4%2Bm2tzYrpGZPeY2Z6%2F3YgBkXy7XJJ2cZrnBp7%2FLytobUnUmq%2FCHHuK9PVjnw2F79Ljy9%2FnRsyARdNGBbX3weLL9fWTUnSoiUdydPFQneAWiiHKEDHi7JYm%2FdgyKk6JhFzpZnke%2B%2FHHv1B%2BColPMWOPqfDRaOHy2ovBXbDu5OAKCZgPsq2MUyUXS%2F8x46UN%2FQZOOpyBMGdTwIESR3AXBH%2Bmpg%2B3bCHMkcTeuSiem%2FwwvozIyQY6pgEDM7W0XK5g9Abx0ieru6jOcyUNcrF7%2F244c4EYlW6ygRGOPd781Fyc9ENULhuOdEOxgk7k0dNc8wwzImgPOkEuloaUoA%2Br3xBaC4i7AgZYeGHUHlXoFAoWcSCzYTXp3frzSXuiEuGxS5kUVoqrskkc10kpOQ6th4F4I9cvWkOHgZRiHIqSH0Us4w8w9g1lfBTdHWS5qi9KSz7yXrEv5jbcb7mi6UW9&X-Amz-Signature=6ee9e3728297dc130334510dd7c04d8fe615eb2ea332083b943873eb5de40854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

