---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUMEXXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLtESTHQKMRoTcGeJsNjr7DoItHZn0j4G1oYgeKA3ToQIgM6CNpIdC%2F%2B5jnjOtTzF%2Bl2Ry3njSwuR4rnzy6MxVv38qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAH2YroK7Zs6BSFbSrcAwPAm%2FAX46rqtF%2BOiKh%2FpktcZE76vJUYvE80ucDuFpm69X9MxHP6EI8Anvdnwt8dqetSUZNB6OULSSo5KYigndTzdjf0VPmXDZ%2BQXQQR4woYZ3XOrNfDnWBCIWAf4NRD4hoY5XN8YA8d1JAnPagLjR%2B%2FQvf80rcNxhEL78ZhMBW5ci8RnJIdd67q6CzaW2SpWeblb1%2B%2Flv9kM7KaVVCp3m5ns9n0zKN9iQsJUH1pYhmVmwN0Bo2l2O2F7ETy61GQykK4lp%2BUKmqWCJpbNVndsKFnQcuX1O0hmXDSvXeBPUZEX4Hdbj%2BT8b8LFSC0YmfJL8AucrWEFvziqUFL79kXXw8xMwAJIZrRL%2Fb4sCMac8MI2ehBMV0wl50uN5nLAYPM4YdA1qzuSKactB1VcdsfijVoJUm8Hcw7jt1RS33VgD%2B9IgbBTYnSOXvfGA8cDAWTCyI2EF4AaTvdnQKWQicaian0J1TTAEoRvDTFHt6e3NhlickiKfbraOBBBzcHW7VES0qqtf1diQb8jwlVZY3Ahggc3T40QKf5TEi%2BNO%2Fm5q4xf85LCJwunJFfcwImJRebKw3cciXI5Fm1%2BwkH1xEMhi0bOf8GRg7WnBf1fr725t%2FyckycLL4VLt3pYLWOMKL90skGOqUBSvbgDqQ%2FBv1d2lAKjLWleSFGiB1%2BQEVzMC4Ec55Rww1KiFwRlhsTtOJJUEfc6iDWkeCy%2B8I8ex3US4DklYuf5aM8Nmszls7UHyPG8Km%2FaBhw4Lkf4FLxJh5b3HJAuSOXMPtBId12wfYUWXJCJwihnphPU7QZQ3N15NxcYPIy%2Fgr0n4uqZj5%2B5HleOiVRy877aD1qfpXPGUSS4Nfui58U3qqsTuLq&X-Amz-Signature=81c92042b265b716f205fb9d7fa3fe8094ef70c0d42aa38500647f6badd58443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLUMEXXB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLtESTHQKMRoTcGeJsNjr7DoItHZn0j4G1oYgeKA3ToQIgM6CNpIdC%2F%2B5jnjOtTzF%2Bl2Ry3njSwuR4rnzy6MxVv38qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLAH2YroK7Zs6BSFbSrcAwPAm%2FAX46rqtF%2BOiKh%2FpktcZE76vJUYvE80ucDuFpm69X9MxHP6EI8Anvdnwt8dqetSUZNB6OULSSo5KYigndTzdjf0VPmXDZ%2BQXQQR4woYZ3XOrNfDnWBCIWAf4NRD4hoY5XN8YA8d1JAnPagLjR%2B%2FQvf80rcNxhEL78ZhMBW5ci8RnJIdd67q6CzaW2SpWeblb1%2B%2Flv9kM7KaVVCp3m5ns9n0zKN9iQsJUH1pYhmVmwN0Bo2l2O2F7ETy61GQykK4lp%2BUKmqWCJpbNVndsKFnQcuX1O0hmXDSvXeBPUZEX4Hdbj%2BT8b8LFSC0YmfJL8AucrWEFvziqUFL79kXXw8xMwAJIZrRL%2Fb4sCMac8MI2ehBMV0wl50uN5nLAYPM4YdA1qzuSKactB1VcdsfijVoJUm8Hcw7jt1RS33VgD%2B9IgbBTYnSOXvfGA8cDAWTCyI2EF4AaTvdnQKWQicaian0J1TTAEoRvDTFHt6e3NhlickiKfbraOBBBzcHW7VES0qqtf1diQb8jwlVZY3Ahggc3T40QKf5TEi%2BNO%2Fm5q4xf85LCJwunJFfcwImJRebKw3cciXI5Fm1%2BwkH1xEMhi0bOf8GRg7WnBf1fr725t%2FyckycLL4VLt3pYLWOMKL90skGOqUBSvbgDqQ%2FBv1d2lAKjLWleSFGiB1%2BQEVzMC4Ec55Rww1KiFwRlhsTtOJJUEfc6iDWkeCy%2B8I8ex3US4DklYuf5aM8Nmszls7UHyPG8Km%2FaBhw4Lkf4FLxJh5b3HJAuSOXMPtBId12wfYUWXJCJwihnphPU7QZQ3N15NxcYPIy%2Fgr0n4uqZj5%2B5HleOiVRy877aD1qfpXPGUSS4Nfui58U3qqsTuLq&X-Amz-Signature=14d8b6b6e8e2781ba2d47f7bc958509631746959b01b6ab72cbdeeb5e0c70177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

