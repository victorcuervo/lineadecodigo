---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2B3MA4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs7ChuaJk%2B08yoirBgNt24k8HrYwfz6CEq1dKgMbUjZAiEA1svmmEqKZ3Dsc7AJUwptQmXNr2MGPNW7xixDwCgkOAwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNgUO7lci9eCbTmllSrcA6jwoyFNFTJHhm0RM5bZfrUYeQL4br0nIuOdZo6UfY3MW%2F3GSeOPpWom6gZ%2F1AikSf%2B7ZpF1rwU3rvGome4546ghtVUNhNMtSw4qlPfca2wPHlmvKQhj%2BcoEBsHyAlWNxKmE8ClYdij5cRViJedgxA70%2Bhr%2BXoLWZ%2BYJqYIzLSm9LSamaPYbgCC0%2B01VBA0JABxAxwJL%2BoPoR32fLemQLgPsYV1Lx%2FFZDIo2tTxif9XRg1a6ELJ6r6Cj2z0tU6P%2BIoeJJjof9CRxwLC24kZLchqB30tIHegbpNECwfcZJTylabgSCEujOJvRgONb7VnOW5vnRC4CzWB0rhEGmIJEmL0fk0oc%2Bh8VXIC2X0gGyzHfXbkEQdP0CsX%2FaKGuQzZNIj48uR%2FJNK3BZU4fd%2FdEi2OQIlxTzU6PIQhNmD34XGO3KOM%2F9cH4p4HZU6oR6kCS2fjWdr4y3mP3cFeokMw%2BNu0f%2Bfji8nA6QGPx22stcShhfu%2FJvtETmrYQG7hpwh%2FTg5eBFSiJpwbft%2F2QigmxtMUHHtmmbstqLuel86n7WK288yX2Tnas36Zoowp5kxRjcaYEAhwAC4BKPwtzkpzG%2FjX8QYmsBAwW7TFJb0jf7R5QLVI9mFO2Tw3lsn50MOXB0ckGOqUBzAFiSTbbQh8RqnAK%2FC77v63Gm8U81z51i5O3EEzbZ0ssTXdmH9vpbz7L73B1dUHYyhREO4HAD9JGk41%2FnEwzGplcYj6Y334wWahZm38EfE0zxs50qdTL0c4vckNtgGHT3guMxyghgkWE39G7no%2FAlhAct0kxlspF2gbA%2BOwIV3I8cM1iLtSrdP3JrlQOVG%2F%2Fpb6C9tLZ58eHH1sncf9yi3fAfvW2&X-Amz-Signature=098414f1c1ce2c6f95bac8351947a997b5965e91622351cc3a4feff4bb2f7057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2B3MA4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs7ChuaJk%2B08yoirBgNt24k8HrYwfz6CEq1dKgMbUjZAiEA1svmmEqKZ3Dsc7AJUwptQmXNr2MGPNW7xixDwCgkOAwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNgUO7lci9eCbTmllSrcA6jwoyFNFTJHhm0RM5bZfrUYeQL4br0nIuOdZo6UfY3MW%2F3GSeOPpWom6gZ%2F1AikSf%2B7ZpF1rwU3rvGome4546ghtVUNhNMtSw4qlPfca2wPHlmvKQhj%2BcoEBsHyAlWNxKmE8ClYdij5cRViJedgxA70%2Bhr%2BXoLWZ%2BYJqYIzLSm9LSamaPYbgCC0%2B01VBA0JABxAxwJL%2BoPoR32fLemQLgPsYV1Lx%2FFZDIo2tTxif9XRg1a6ELJ6r6Cj2z0tU6P%2BIoeJJjof9CRxwLC24kZLchqB30tIHegbpNECwfcZJTylabgSCEujOJvRgONb7VnOW5vnRC4CzWB0rhEGmIJEmL0fk0oc%2Bh8VXIC2X0gGyzHfXbkEQdP0CsX%2FaKGuQzZNIj48uR%2FJNK3BZU4fd%2FdEi2OQIlxTzU6PIQhNmD34XGO3KOM%2F9cH4p4HZU6oR6kCS2fjWdr4y3mP3cFeokMw%2BNu0f%2Bfji8nA6QGPx22stcShhfu%2FJvtETmrYQG7hpwh%2FTg5eBFSiJpwbft%2F2QigmxtMUHHtmmbstqLuel86n7WK288yX2Tnas36Zoowp5kxRjcaYEAhwAC4BKPwtzkpzG%2FjX8QYmsBAwW7TFJb0jf7R5QLVI9mFO2Tw3lsn50MOXB0ckGOqUBzAFiSTbbQh8RqnAK%2FC77v63Gm8U81z51i5O3EEzbZ0ssTXdmH9vpbz7L73B1dUHYyhREO4HAD9JGk41%2FnEwzGplcYj6Y334wWahZm38EfE0zxs50qdTL0c4vckNtgGHT3guMxyghgkWE39G7no%2FAlhAct0kxlspF2gbA%2BOwIV3I8cM1iLtSrdP3JrlQOVG%2F%2Fpb6C9tLZ58eHH1sncf9yi3fAfvW2&X-Amz-Signature=9488407b66e76373f0d5f00bd691be988ab6b0447793a6a852233c9bfd9fe1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

