---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJBCKRV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZkYvvQ5D4q0T9gTy79yJd5s7W9AVnguPzUv0LWowWVAiBrw9LBH0zamrDL0pvsZ6n%2BZ%2F8O3KC%2FyxiaY5Cn5k86bCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCey8Qf5GtdjG8yo0KtwDYSBtWlH%2FzP7kQ%2By8Ah1mziRRlKOosgocIZ74oZU%2B0gWj%2B45Vc%2Fxw7laUV2JGtVPcFxCHxs8rxJx%2BJ1h6PEpyFUe2zKibxmP3xaKoeZoKg%2BhUl8OGVVEBwmryBGC6wo18jTrvE7MdocJ5Gw0wgSZqSs524zcmKOgC7rtGko1gJCVEPQRpD97wxvzZwFbO%2FBGJ6rQsXrsT6l26c00X9avahmsGBPS73X6rQRHjuEAtMBlV49FwDmeKWV3LP7D0I3hOlL63H2Mv%2BTeQCY%2Fit2nvDAFiGLKRIXUuhWK%2BmWm0JQfwLwL1tauWI1JcETeLQSJk0wLlHysOjfawCoHYt2sd6eGkxBfTZU3W0fZG3jwfvguOwIJzk8J%2FC1FDhTDkb8qtIL3bA1hvpCN%2FV4izEUviGBt97wCzDZ2htNPfT86ZId5YyMpWaI528NfL6FJV8X18CZ7Xo3L60HmGhsZ3rWz4uVw8v2pdwzMkN6l1FAPY6wDW15CEuhFot4OFvNbc4w5T%2Bz8sm8HHmp6f4uymlVuu8zHQ%2FO2FPsYPYM2ZcvXWMPuNYfA5QgGape4f%2F6RRLI6FzjusX4mZPayFZ6pbvR7diHO60xee88nTKWIfTtrM9kAtf6SjbCE4untPUw4wvKvJyQY6pgF%2FEsCdztESq9p8lr0vIjx%2Bw1HEmyEUeFjw%2Bv%2BzGTrJRtguheLVBwYyt%2Foq6VsLBvQ%2Bd%2BCROFNnUiPBqofJ7aGxxbSQSU3sQ1DAlYbaUedMRDoHX4egZc0ccnkQy9%2BTKC7J%2FlzeNk10j4PyrX%2FEtHPzGuQtz1qMokfxRXQrrYjQmApTVuGme9MtMjvPDCs2gLi2YOHPBwYRlt9u%2BPi52IYVRcpln6a6&X-Amz-Signature=748f9e8b169d663108127ec3078acc012598062888ee03cd84d3da078f8ebe78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXJBCKRV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEZkYvvQ5D4q0T9gTy79yJd5s7W9AVnguPzUv0LWowWVAiBrw9LBH0zamrDL0pvsZ6n%2BZ%2F8O3KC%2FyxiaY5Cn5k86bCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMCey8Qf5GtdjG8yo0KtwDYSBtWlH%2FzP7kQ%2By8Ah1mziRRlKOosgocIZ74oZU%2B0gWj%2B45Vc%2Fxw7laUV2JGtVPcFxCHxs8rxJx%2BJ1h6PEpyFUe2zKibxmP3xaKoeZoKg%2BhUl8OGVVEBwmryBGC6wo18jTrvE7MdocJ5Gw0wgSZqSs524zcmKOgC7rtGko1gJCVEPQRpD97wxvzZwFbO%2FBGJ6rQsXrsT6l26c00X9avahmsGBPS73X6rQRHjuEAtMBlV49FwDmeKWV3LP7D0I3hOlL63H2Mv%2BTeQCY%2Fit2nvDAFiGLKRIXUuhWK%2BmWm0JQfwLwL1tauWI1JcETeLQSJk0wLlHysOjfawCoHYt2sd6eGkxBfTZU3W0fZG3jwfvguOwIJzk8J%2FC1FDhTDkb8qtIL3bA1hvpCN%2FV4izEUviGBt97wCzDZ2htNPfT86ZId5YyMpWaI528NfL6FJV8X18CZ7Xo3L60HmGhsZ3rWz4uVw8v2pdwzMkN6l1FAPY6wDW15CEuhFot4OFvNbc4w5T%2Bz8sm8HHmp6f4uymlVuu8zHQ%2FO2FPsYPYM2ZcvXWMPuNYfA5QgGape4f%2F6RRLI6FzjusX4mZPayFZ6pbvR7diHO60xee88nTKWIfTtrM9kAtf6SjbCE4untPUw4wvKvJyQY6pgF%2FEsCdztESq9p8lr0vIjx%2Bw1HEmyEUeFjw%2Bv%2BzGTrJRtguheLVBwYyt%2Foq6VsLBvQ%2Bd%2BCROFNnUiPBqofJ7aGxxbSQSU3sQ1DAlYbaUedMRDoHX4egZc0ccnkQy9%2BTKC7J%2FlzeNk10j4PyrX%2FEtHPzGuQtz1qMokfxRXQrrYjQmApTVuGme9MtMjvPDCs2gLi2YOHPBwYRlt9u%2BPi52IYVRcpln6a6&X-Amz-Signature=73ff82c719812b2a8b5fcfb0acbc6959062d9efc38e88501b780c845526eff49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

