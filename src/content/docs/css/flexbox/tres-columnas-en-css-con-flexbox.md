---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7OIQ5O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Z4QO2eVLMUr5GVm%2ByyVcyTGYv8addBjrQEKm9NA7XgIgKlOSa%2Fn06hIxZ1cp6QyqSlX4tGvDpH%2FDkShbZCeSo4IqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI%2Fad8jeF5KniDpjSrcA%2F5dpFoFFSCcwxqb1iCJS3hvGoG64zwPy%2BxxVOhaGlzKvpRSHQ9kU%2Bm1jwHcHjD3bEvO1UkR88%2FH9Alz0ZuypYReK5iTZxuTLM5CUKxKSALwzf2eFO26NNwxDPCeYIbTAwGrjMupAiyZaOOQcVdNZZ017x2TFvAf8aoTjKr5tpBOdD46wU2%2FDn65cp6mlacRMsvvxT4m4nEJSpFNbqZ06DrcQkzwZP0CQ81cKXq%2Fi3FCQu7JEnPpOjd3SbAY2fthsrwumQJLY056Qw7I9ZthCk85FfJja9RZ7IPNAfAdyw037hV1fPnA1QCOdeWHiV2dOcW4fXt%2Fq%2FuwO4acs1PlgknooQBH1xoHDh4ddrtUlHu9gWOsQyVCqQU%2By2oLKc%2FHEJyoSFyDh8D%2BZGM0issy%2FczdEMIHjrECnyqXV54U7GWlCJJDpmV4Gc42aztswNrFHmBoktHnnzT5KWdaSTlBBvA5e%2FWk9ejNwzK4BI099m4F4CEAl0fF4ZivNPw4RcmJzIhj1d8fTjRvAoKlV6lE4c%2FXe56GK62AlhYEpnMYSXptIFCSBo5roU%2FCPf81l7gEvQTJonfYOxI86vStjYqCL1Gl85gSYc8pgewwAfS3QnObCEz6VkS8h67%2B9ZNBMJvC28kGOqUBI%2B45CgnSTwlX78rRG1lSARe2O%2F539Ail8lWY6NhybvatOkmAVNTgNXhOOiQfMSfBie5wxjJ4AC4eoQ9lIi%2Bjvu0YvSSXQoRBT4C%2BeKYlNaseHhrNikj%2FU1cmN5jZM62g7rCMbXq5s77Vdp2jAy8Mf0CeiVNMH8EuowituHWEBfR5QWBByZVJ6IpAbXmsrwdQehHMwEX%2Fza6LgGt9g92BIO0fUy91&X-Amz-Signature=0a9e9c0fcb732d40dbf4cea8d1be1a83881b8cb39316e3b4a559be01e16f4fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y7OIQ5O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6Z4QO2eVLMUr5GVm%2ByyVcyTGYv8addBjrQEKm9NA7XgIgKlOSa%2Fn06hIxZ1cp6QyqSlX4tGvDpH%2FDkShbZCeSo4IqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBI%2Fad8jeF5KniDpjSrcA%2F5dpFoFFSCcwxqb1iCJS3hvGoG64zwPy%2BxxVOhaGlzKvpRSHQ9kU%2Bm1jwHcHjD3bEvO1UkR88%2FH9Alz0ZuypYReK5iTZxuTLM5CUKxKSALwzf2eFO26NNwxDPCeYIbTAwGrjMupAiyZaOOQcVdNZZ017x2TFvAf8aoTjKr5tpBOdD46wU2%2FDn65cp6mlacRMsvvxT4m4nEJSpFNbqZ06DrcQkzwZP0CQ81cKXq%2Fi3FCQu7JEnPpOjd3SbAY2fthsrwumQJLY056Qw7I9ZthCk85FfJja9RZ7IPNAfAdyw037hV1fPnA1QCOdeWHiV2dOcW4fXt%2Fq%2FuwO4acs1PlgknooQBH1xoHDh4ddrtUlHu9gWOsQyVCqQU%2By2oLKc%2FHEJyoSFyDh8D%2BZGM0issy%2FczdEMIHjrECnyqXV54U7GWlCJJDpmV4Gc42aztswNrFHmBoktHnnzT5KWdaSTlBBvA5e%2FWk9ejNwzK4BI099m4F4CEAl0fF4ZivNPw4RcmJzIhj1d8fTjRvAoKlV6lE4c%2FXe56GK62AlhYEpnMYSXptIFCSBo5roU%2FCPf81l7gEvQTJonfYOxI86vStjYqCL1Gl85gSYc8pgewwAfS3QnObCEz6VkS8h67%2B9ZNBMJvC28kGOqUBI%2B45CgnSTwlX78rRG1lSARe2O%2F539Ail8lWY6NhybvatOkmAVNTgNXhOOiQfMSfBie5wxjJ4AC4eoQ9lIi%2Bjvu0YvSSXQoRBT4C%2BeKYlNaseHhrNikj%2FU1cmN5jZM62g7rCMbXq5s77Vdp2jAy8Mf0CeiVNMH8EuowituHWEBfR5QWBByZVJ6IpAbXmsrwdQehHMwEX%2Fza6LgGt9g92BIO0fUy91&X-Amz-Signature=fa08ccbd914b9edc0668ce5c5ca0d308320b019ed259b4df9781998d9095ded5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

