---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3LK45C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm19Yw%2B0Mq8DNr1qDnlctonRcw8eZCVpq%2B6tMR70FMywIgB6qQYuTAOKYuMPpGrNWZRp66CNMusXU0%2BmEE53jecDoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK3ccgYHf6aJfPbDACrcAzze44q9LUOTUDn36lf5JLLX3Owbu1KYyDw6uLi1b%2BXeHlaYVcxDx9hYIJgH4nPzg5h%2BwFpLd%2B61oU5LXhFX%2FhQ1RYpn4fvhXr%2FDmXIXPA950k%2BJX9SHU5xEIIIDlK6NCq4iMvPhafX6nd5pt2GpOGe6jl8aRk8KcI09qTejD8NwIy1%2BMIHV%2Fx1CcBzdhwlr%2F2t5uNZRy5Cc0foekntkYvz4CCsPsm3YZNS8Lk9ZTiIKwBfsT8QtxGIgzNYgrGkOSt4Cd%2FtUk3ranIBJKGzLi7jKdylNk0aqTR2LkEjdLOsBjavlR4odLZ4r4ljq25m3OZGPsP53Yi9cm03Z1pcjf0cNk1be1sEvOQga3gEloXfGHteHiHqC6Sa7AW3nulMQdEXgc1GfAc4M44bgTWE731eVQxOIl2JZ97WXEw0cdP%2Fh6OrNRSqHEef38ipY4NnzEjkEe563YZGUfIy640r4ODV3zD8UR0ZVccv%2F8xpasgMWPseXNGNdhufIwd3PxXaQlpGvbZauKT7l9A3Sgu%2FBlM4lVBFk8B0PNTYZ1hsH9D5fEVwbG4G%2BiYM4UiFdAXLAs9DdvZ%2BaNe4rmo7kzWXNAok3eCKi1sH%2Ft48%2FIf0fTq1R%2B%2BKgU5HfwMx7y1IsMK%2FQyskGOqUBGCS%2B%2F5txbvb8vEj9JNbIjcxRtdVz2XQJekBY2shAYb7M1JY3MUJPimCEI%2FFl75lKxBikpHAPkkuSe%2BzhszJAf7ilaYxdtdMhEfQ1OgbZz9pulC7eJ7eq8v5g2%2BXSDKUF2naXc2qZ2D80VrD4iEAiMg5Qq1bu6pwvblk8aoVMdlKIbBgDaohgYDUMqvx2pHkk2kTfHQECTEQtaC8APPzllfhYj4XD&X-Amz-Signature=a7f9de1cf2985bcf21fdfb31fb5d4cdb3bbc2e0d637e21cd600d7b2d512cefd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P3LK45C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCm19Yw%2B0Mq8DNr1qDnlctonRcw8eZCVpq%2B6tMR70FMywIgB6qQYuTAOKYuMPpGrNWZRp66CNMusXU0%2BmEE53jecDoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDK3ccgYHf6aJfPbDACrcAzze44q9LUOTUDn36lf5JLLX3Owbu1KYyDw6uLi1b%2BXeHlaYVcxDx9hYIJgH4nPzg5h%2BwFpLd%2B61oU5LXhFX%2FhQ1RYpn4fvhXr%2FDmXIXPA950k%2BJX9SHU5xEIIIDlK6NCq4iMvPhafX6nd5pt2GpOGe6jl8aRk8KcI09qTejD8NwIy1%2BMIHV%2Fx1CcBzdhwlr%2F2t5uNZRy5Cc0foekntkYvz4CCsPsm3YZNS8Lk9ZTiIKwBfsT8QtxGIgzNYgrGkOSt4Cd%2FtUk3ranIBJKGzLi7jKdylNk0aqTR2LkEjdLOsBjavlR4odLZ4r4ljq25m3OZGPsP53Yi9cm03Z1pcjf0cNk1be1sEvOQga3gEloXfGHteHiHqC6Sa7AW3nulMQdEXgc1GfAc4M44bgTWE731eVQxOIl2JZ97WXEw0cdP%2Fh6OrNRSqHEef38ipY4NnzEjkEe563YZGUfIy640r4ODV3zD8UR0ZVccv%2F8xpasgMWPseXNGNdhufIwd3PxXaQlpGvbZauKT7l9A3Sgu%2FBlM4lVBFk8B0PNTYZ1hsH9D5fEVwbG4G%2BiYM4UiFdAXLAs9DdvZ%2BaNe4rmo7kzWXNAok3eCKi1sH%2Ft48%2FIf0fTq1R%2B%2BKgU5HfwMx7y1IsMK%2FQyskGOqUBGCS%2B%2F5txbvb8vEj9JNbIjcxRtdVz2XQJekBY2shAYb7M1JY3MUJPimCEI%2FFl75lKxBikpHAPkkuSe%2BzhszJAf7ilaYxdtdMhEfQ1OgbZz9pulC7eJ7eq8v5g2%2BXSDKUF2naXc2qZ2D80VrD4iEAiMg5Qq1bu6pwvblk8aoVMdlKIbBgDaohgYDUMqvx2pHkk2kTfHQECTEQtaC8APPzllfhYj4XD&X-Amz-Signature=e35d75263791fab487ee89313af28d26db675233f83bddaed17b757367906d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

