---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQNBYS7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL9fOFdId60HsKITV%2FnnM3tA3HoPDMdvfcMQfqtX3CjAIgWh9V0zNXvMRRoycozPdXbRMdqggCbNXnS1qI272k%2Bikq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLwS53dcStIAphNK2CrcAwlUyGGSF5J3%2BdRf%2BtMvobIfFZBBykEV5vVtT%2FgWVVfcX1rxS1u685yUuaiW22XHZqKmUzvef1J5%2F37FoN75gK0lPWuRVQg5ANsfVVi1%2FuXc8U9zW87feEOzjLuUvZ01eMCMSq1U46fLm5PaacjDzv0OVDChk3XfjBRFpUaEmTk1MsDpgl%2FVaqnQ0u6C%2FcJa3tUBPP7rwRiNPVDNalI%2FjGskife0U7J5Oi%2FGgDQzeE71Wg1%2BXpXdDRiSSrDVZ91XYa8nYSGJzVA9o4bCpXg8rqiXtyYNZghJNcA6pSOo1QH3j3U77LvbLYQ3Z%2Fp4KXM8j7x22LuWQXN2ECCGINALuaqYICA7POfr%2Fc1kkQpQlMmvWplHi%2BzneP0heQ2j%2FMkiCn4WRGIyzP5VfMMn2p6VqRQEyGwps1X9QSKL8XembsdjzbrBkmVC7rCgbM4aB%2FXBOd%2FdPhvuSEYi8l9Ss%2Bid6Dl9guFdKlGT%2FGtUP90AUthKynM335oyaZhdX9d05qpAWrVTCEC%2F%2FDtwFxeddU6k3kNXBiJumRP71dq4RJvK%2BCmb4q9XDHSa23CuN1Rc7qn8kcUdDH317vUecs4wAWs3tRylCsABWr%2B0XY7RF7pGRwLgzn4hrr6m0k4C6xEqMKewyckGOqUBhul%2Bj%2F8IQtBWPbBEu1n4%2FA5S0pgyEl5tE1lo8yhQk%2B2%2FKzbyHrRsFwmwJWbDTmQet5K%2BRIYgd44xFdtiNO5rh7qKj2N5vOXXefUp463rM34PQg0gaOb%2BzSwsaSB1olQqX9FB8sPVvJKkHyiMJACo9CL98mbBUBVVnqShSCWPetL2n1F2c%2BVM8s7raNlVDUXvOMRVHkHfjydgbu5pYEdaJh3Yk2WJ&X-Amz-Signature=35ef8054a6320fcc94f6a2662b7aea2e5e5b87036a83accecf5d0420710c7e7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPQNBYS7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL9fOFdId60HsKITV%2FnnM3tA3HoPDMdvfcMQfqtX3CjAIgWh9V0zNXvMRRoycozPdXbRMdqggCbNXnS1qI272k%2Bikq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLwS53dcStIAphNK2CrcAwlUyGGSF5J3%2BdRf%2BtMvobIfFZBBykEV5vVtT%2FgWVVfcX1rxS1u685yUuaiW22XHZqKmUzvef1J5%2F37FoN75gK0lPWuRVQg5ANsfVVi1%2FuXc8U9zW87feEOzjLuUvZ01eMCMSq1U46fLm5PaacjDzv0OVDChk3XfjBRFpUaEmTk1MsDpgl%2FVaqnQ0u6C%2FcJa3tUBPP7rwRiNPVDNalI%2FjGskife0U7J5Oi%2FGgDQzeE71Wg1%2BXpXdDRiSSrDVZ91XYa8nYSGJzVA9o4bCpXg8rqiXtyYNZghJNcA6pSOo1QH3j3U77LvbLYQ3Z%2Fp4KXM8j7x22LuWQXN2ECCGINALuaqYICA7POfr%2Fc1kkQpQlMmvWplHi%2BzneP0heQ2j%2FMkiCn4WRGIyzP5VfMMn2p6VqRQEyGwps1X9QSKL8XembsdjzbrBkmVC7rCgbM4aB%2FXBOd%2FdPhvuSEYi8l9Ss%2Bid6Dl9guFdKlGT%2FGtUP90AUthKynM335oyaZhdX9d05qpAWrVTCEC%2F%2FDtwFxeddU6k3kNXBiJumRP71dq4RJvK%2BCmb4q9XDHSa23CuN1Rc7qn8kcUdDH317vUecs4wAWs3tRylCsABWr%2B0XY7RF7pGRwLgzn4hrr6m0k4C6xEqMKewyckGOqUBhul%2Bj%2F8IQtBWPbBEu1n4%2FA5S0pgyEl5tE1lo8yhQk%2B2%2FKzbyHrRsFwmwJWbDTmQet5K%2BRIYgd44xFdtiNO5rh7qKj2N5vOXXefUp463rM34PQg0gaOb%2BzSwsaSB1olQqX9FB8sPVvJKkHyiMJACo9CL98mbBUBVVnqShSCWPetL2n1F2c%2BVM8s7raNlVDUXvOMRVHkHfjydgbu5pYEdaJh3Yk2WJ&X-Amz-Signature=cf6e7cc392bbad2fc15adfd91deffc621adce790c66ac850a0870f6b242ebdad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

