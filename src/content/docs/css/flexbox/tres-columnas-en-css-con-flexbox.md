---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMWY4V2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC8gaDKFAR4MGvS11fHkkMwbVXN7SB195tYQohBKg2AZAiEA%2FqHSJ8808URi42aomorKO%2FKxDEuGuJWAdD3inllnq%2FEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBt4gkLBYZevS50WcyrcA8PwglR4Mb8yvscXotNfkIrIYc9f4Ihsx5XFhqglr58Pe6aETskKOYoCNMQM%2FSCVLvIkyUUudK6pU%2FCp8OOQZBbDXylXJgzuY5WLOB9o1pfsd7VjgFyTjws08IXrRwQBrtJIA2VBVR2LM3HyuBm5GVt3FPMldUCB9LUqkHhA3q6X2Vf5BsuugJfpl1C5vistOAG%2FLw3ED3KhcBUTHHYll2tuMjVihPUqF3TQoLa0EC7A8dKlHNM7T9iyPjiBxIw6l0%2FRCfw%2F3EnkEf7U%2B0L2FRfXIODWTD8GjLsi3RlSb1%2BoJADAgF4N4cskDkfLxoYc7K8hjssqwNjMxAaw153PVxv6uQTtVIUWaIDxAhetqhLNIypf3vdTgmvl%2BkaLF%2BykjjBmVP0wCMAIRm9I5SEHsIaq1hTGS%2BYQHDZcch30cyKozvd1Cn84%2BaRrZBrHs7x4l1zwgjowSbSQbtzUtjF8P9pjk5VawpDh1ytQfPjIi%2F%2B62v3NN29hLSZgii%2BL9W%2BCHmCJ9n9AcY3AmY1NyHohl1Oowg1m2KokdmoZh0%2BMWLZq8yDLYM5OpekJ2%2FYVR%2BSv4HphTMlWBhFgamSIEGcCquRkE9tajfKVEdr6e8jGD3QYVLvq5HPmG1kn3zO1MIPpxMkGOqUBMDPpADrO9eVvfhGHamfaxyDNeW1LRXqobfKusdI52WF3Tq0Nr7VzBHDSqrIt5YFQyhCNlDG9xvpZl9IqNKNHmz%2BV6rxFMKkBW9KaWpBrWgPV5nAR7ZIwI9moY3SO3c%2BqR6gJnmlWeGkCpt3UuFa6x63OHMulAUuxREDRPhZecIEDmmIeNZa1sun%2BCGPTcma55D49HRoLFYTd7tkE0LY7gsrAmcpO&X-Amz-Signature=67520f433e68a914fbcfa6aca3d4b870a64aa473585e70b6c69728f2e40e8ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZMWY4V2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T072408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC8gaDKFAR4MGvS11fHkkMwbVXN7SB195tYQohBKg2AZAiEA%2FqHSJ8808URi42aomorKO%2FKxDEuGuJWAdD3inllnq%2FEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBt4gkLBYZevS50WcyrcA8PwglR4Mb8yvscXotNfkIrIYc9f4Ihsx5XFhqglr58Pe6aETskKOYoCNMQM%2FSCVLvIkyUUudK6pU%2FCp8OOQZBbDXylXJgzuY5WLOB9o1pfsd7VjgFyTjws08IXrRwQBrtJIA2VBVR2LM3HyuBm5GVt3FPMldUCB9LUqkHhA3q6X2Vf5BsuugJfpl1C5vistOAG%2FLw3ED3KhcBUTHHYll2tuMjVihPUqF3TQoLa0EC7A8dKlHNM7T9iyPjiBxIw6l0%2FRCfw%2F3EnkEf7U%2B0L2FRfXIODWTD8GjLsi3RlSb1%2BoJADAgF4N4cskDkfLxoYc7K8hjssqwNjMxAaw153PVxv6uQTtVIUWaIDxAhetqhLNIypf3vdTgmvl%2BkaLF%2BykjjBmVP0wCMAIRm9I5SEHsIaq1hTGS%2BYQHDZcch30cyKozvd1Cn84%2BaRrZBrHs7x4l1zwgjowSbSQbtzUtjF8P9pjk5VawpDh1ytQfPjIi%2F%2B62v3NN29hLSZgii%2BL9W%2BCHmCJ9n9AcY3AmY1NyHohl1Oowg1m2KokdmoZh0%2BMWLZq8yDLYM5OpekJ2%2FYVR%2BSv4HphTMlWBhFgamSIEGcCquRkE9tajfKVEdr6e8jGD3QYVLvq5HPmG1kn3zO1MIPpxMkGOqUBMDPpADrO9eVvfhGHamfaxyDNeW1LRXqobfKusdI52WF3Tq0Nr7VzBHDSqrIt5YFQyhCNlDG9xvpZl9IqNKNHmz%2BV6rxFMKkBW9KaWpBrWgPV5nAR7ZIwI9moY3SO3c%2BqR6gJnmlWeGkCpt3UuFa6x63OHMulAUuxREDRPhZecIEDmmIeNZa1sun%2BCGPTcma55D49HRoLFYTd7tkE0LY7gsrAmcpO&X-Amz-Signature=52d10594e0be237ebb0c20d1d9059341b88f817d31650b52525e7cf84c742095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

