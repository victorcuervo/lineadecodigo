---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPY2KJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK4WhMJDVmnNuaZXHPQz5l2ARRfFZAsZiUz%2B6wJ%2BXjCAIhAJz6g0Vi1pAntoV7m1mImS4WE%2BtXy5yjmdQY6cxjOngbKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBU0gyWOjbTl5sfkkq3AO0UWDG%2BhSlj2Ygfx2rEek4ycvA8suRHW4uP7s6nVw1wLlFpofXxlyM3nsauJY5gTgo%2BUrCzMUjD1yW6I904z1IDjA8SD%2F%2F0jGzRvrmJXTQ7EXw%2FyUEIaosnaBEWxo7NYodsjPrQt37BF21mqbrpRVNQBO8sJeXdQrzXPpy3C%2Fnwfx1lFGKn%2BBZnRua3u60%2BckutrJ2mn%2BMhMKQABR1W3WRHpGfeEBPSqzPBjANKpp4R41XaiLVLpUByRlXrs0fi3ho1UNFz2EJlGhPMsuSHNKjDrn3M94oXbCIVw3kPx%2Bq2EoDonxVCuiBpnU9ztGw4%2BNVWM3Svc3yCbWalf1nB%2FcXUsRz2%2FfvpqkecbEG%2BjLNGFCY2FHAiwfPl2%2BkZdlCbhHMlmhbg%2FwcDJXkaGQZgj%2BlVdgn%2FC3hqfBDx%2FXEyNggz2VnMuEuTyUdGaVKgsL3RGLJfqI%2FESsVM1Fqa%2Fm0pG8mFs5%2Fd0yxNDT2895n3KtpY4YKpszP3W9hNqOt5Zpwr2AsMSXbJboJbeSS8yWCINKEcU0EHdbFBTUzJnWTyCH%2FLzHvesTEDNofD65zV2Bj7CO98GShfch7gm1OqMpGXcIAYEDB6uVbCwoJB3szeCeBUkD2gXnASkynkJ%2F2SjDomdXJBjqkATbWDRVn6lha8zSlEmwxzYPpg6s5EZH3e8C9mIs4lPCPvOclDUiETo%2BEwd%2F2gN%2BpeuCriXiDFekQPeCiHjEPuG5ZNnjkUu%2BVNCQn3bX%2FC%2FzF1PlNdKJFwD0BbLWmgoXJ7mH6VpyrYlGOmaouZEX8iHioXRo6%2FtCd7rqxmyTQ7ZqH4N7SWijZutbD%2BIb7fBvgSQ9bHk5Bro%2Ff%2B8VZSJGkYI9Sr8vZ&X-Amz-Signature=4582a9ca59bfbd8d61879c11d38de6d1f68b55e12b7d1d0458ce6344fa9711ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UPY2KJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK4WhMJDVmnNuaZXHPQz5l2ARRfFZAsZiUz%2B6wJ%2BXjCAIhAJz6g0Vi1pAntoV7m1mImS4WE%2BtXy5yjmdQY6cxjOngbKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBU0gyWOjbTl5sfkkq3AO0UWDG%2BhSlj2Ygfx2rEek4ycvA8suRHW4uP7s6nVw1wLlFpofXxlyM3nsauJY5gTgo%2BUrCzMUjD1yW6I904z1IDjA8SD%2F%2F0jGzRvrmJXTQ7EXw%2FyUEIaosnaBEWxo7NYodsjPrQt37BF21mqbrpRVNQBO8sJeXdQrzXPpy3C%2Fnwfx1lFGKn%2BBZnRua3u60%2BckutrJ2mn%2BMhMKQABR1W3WRHpGfeEBPSqzPBjANKpp4R41XaiLVLpUByRlXrs0fi3ho1UNFz2EJlGhPMsuSHNKjDrn3M94oXbCIVw3kPx%2Bq2EoDonxVCuiBpnU9ztGw4%2BNVWM3Svc3yCbWalf1nB%2FcXUsRz2%2FfvpqkecbEG%2BjLNGFCY2FHAiwfPl2%2BkZdlCbhHMlmhbg%2FwcDJXkaGQZgj%2BlVdgn%2FC3hqfBDx%2FXEyNggz2VnMuEuTyUdGaVKgsL3RGLJfqI%2FESsVM1Fqa%2Fm0pG8mFs5%2Fd0yxNDT2895n3KtpY4YKpszP3W9hNqOt5Zpwr2AsMSXbJboJbeSS8yWCINKEcU0EHdbFBTUzJnWTyCH%2FLzHvesTEDNofD65zV2Bj7CO98GShfch7gm1OqMpGXcIAYEDB6uVbCwoJB3szeCeBUkD2gXnASkynkJ%2F2SjDomdXJBjqkATbWDRVn6lha8zSlEmwxzYPpg6s5EZH3e8C9mIs4lPCPvOclDUiETo%2BEwd%2F2gN%2BpeuCriXiDFekQPeCiHjEPuG5ZNnjkUu%2BVNCQn3bX%2FC%2FzF1PlNdKJFwD0BbLWmgoXJ7mH6VpyrYlGOmaouZEX8iHioXRo6%2FtCd7rqxmyTQ7ZqH4N7SWijZutbD%2BIb7fBvgSQ9bHk5Bro%2Ff%2B8VZSJGkYI9Sr8vZ&X-Amz-Signature=4a8ed31df1c81dba34432721c2650f1bf22182a4702b7ce5643f5c3cda2ba128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

