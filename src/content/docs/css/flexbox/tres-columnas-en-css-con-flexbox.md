---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NXXZYG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWDSqb90VPc4skw4bu5qwaDYxHSUb43PpyY8vO9Mg58wIgUXm5nwaMzTaVUDdus6r9B3ec7uFTuBc8gmp64fH%2BwrAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZCbRTQuwwY3qJ9VSrcA7xDmMP071XlFY7nv1inoJM5ppXLNrQZv1dl17ZO%2BJnU4bRz9zO8H%2FDs3KR9D1Eu5N%2BcDmF7KbQQZxRVaCiGDBzOaxHAMOaU%2BQbr4CNj7s1tIyju1%2FYXAw32p%2BYVeecgWv6qrotnI9Kd2sUzXpFWrwqpknY4De6J6eeJx0ar1uxe921eJ4sHm771m99vZxq%2FTcUhriQ8cAVweuGRPx0HrlPW9Y5Pv1gTfNL909OefzR3Tzefbhcr22s2Pblk%2BtBxJvGHz2zjVPOSZYr%2BR6MAs%2B8kI7eJSO0ciKcrXQUqiHkm24Y8BVXZKxA0cl9Pu%2ByWgeqGPGTRNs62GmQGfrRK3y%2BfLBcWuAGGWYVwS1goRWlFjNaU0Jz2pbjP4rIh%2FfR1sOj71q4TRhS4FCpAkPZzd4LtpNE%2FnllbpnlEn9S8kqGHOmZ%2BPAXy59iOIekmtuZub5jMDdP%2FwCXbTAb5upYydLEUuZAtYm6R6BFZrTCICNGBTAk%2BiO%2FiZpFUY6Pr%2BvAtChU%2F%2FN7SI9hEE5nEoPANOBdaGXVdzJxdSsqxqSfOd1GJASSkj50gVw%2BKOx8gJrtEbKuxSVKRQXizKmcWjcWyxDtJsW9YMewSquFexQlYSmM62fcC5XlLgf3dEK94MMKi3ckGOqUB6rMW08VQ0rmDrTdShpQKwwLIcUKdU2RpsKj8WiUZ%2BjuB8zmWnsERM6zAwvUdtEeETA3ZP88vra8QKWHmoprGr4MqeYHgpHuy1p%2F9XhU83P8rG1%2BotnIVa3NYKZQr8spho1ZUxGkHQqt1aWW5vCdiadVYh98lFZ9LkBJUdun5OAWBlMaK%2FFRo4IaDVBkw%2FSU8rr9OhT0udJiGheiWBw23%2BRx20SWI&X-Amz-Signature=42f7e665e649ee918d1141e9348d54f9f34bdace3086968e0150364ea53862c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654NXXZYG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWDSqb90VPc4skw4bu5qwaDYxHSUb43PpyY8vO9Mg58wIgUXm5nwaMzTaVUDdus6r9B3ec7uFTuBc8gmp64fH%2BwrAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPZCbRTQuwwY3qJ9VSrcA7xDmMP071XlFY7nv1inoJM5ppXLNrQZv1dl17ZO%2BJnU4bRz9zO8H%2FDs3KR9D1Eu5N%2BcDmF7KbQQZxRVaCiGDBzOaxHAMOaU%2BQbr4CNj7s1tIyju1%2FYXAw32p%2BYVeecgWv6qrotnI9Kd2sUzXpFWrwqpknY4De6J6eeJx0ar1uxe921eJ4sHm771m99vZxq%2FTcUhriQ8cAVweuGRPx0HrlPW9Y5Pv1gTfNL909OefzR3Tzefbhcr22s2Pblk%2BtBxJvGHz2zjVPOSZYr%2BR6MAs%2B8kI7eJSO0ciKcrXQUqiHkm24Y8BVXZKxA0cl9Pu%2ByWgeqGPGTRNs62GmQGfrRK3y%2BfLBcWuAGGWYVwS1goRWlFjNaU0Jz2pbjP4rIh%2FfR1sOj71q4TRhS4FCpAkPZzd4LtpNE%2FnllbpnlEn9S8kqGHOmZ%2BPAXy59iOIekmtuZub5jMDdP%2FwCXbTAb5upYydLEUuZAtYm6R6BFZrTCICNGBTAk%2BiO%2FiZpFUY6Pr%2BvAtChU%2F%2FN7SI9hEE5nEoPANOBdaGXVdzJxdSsqxqSfOd1GJASSkj50gVw%2BKOx8gJrtEbKuxSVKRQXizKmcWjcWyxDtJsW9YMewSquFexQlYSmM62fcC5XlLgf3dEK94MMKi3ckGOqUB6rMW08VQ0rmDrTdShpQKwwLIcUKdU2RpsKj8WiUZ%2BjuB8zmWnsERM6zAwvUdtEeETA3ZP88vra8QKWHmoprGr4MqeYHgpHuy1p%2F9XhU83P8rG1%2BotnIVa3NYKZQr8spho1ZUxGkHQqt1aWW5vCdiadVYh98lFZ9LkBJUdun5OAWBlMaK%2FFRo4IaDVBkw%2FSU8rr9OhT0udJiGheiWBw23%2BRx20SWI&X-Amz-Signature=0bd0cb3c2720cc7eb6dc688b7cc2777119dfae5e82778a1c4b326b7c88b92ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

