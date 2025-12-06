---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY4YJBE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL86Q6V95xu3iEdl%2BsIHUaveITgYI8LD%2FsN%2FwkfrCSLwIgX43pEShRgRirzRnBJzdXJDlobIIxgu2YkM8IJpC1vo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHEoGvoX4FaXoOt4NCrcA9hcPqtGUu9Zu%2B6kRvLhcHKjTQp1l6PxhyVLd30Y060%2Fly8V0DE%2FXBl%2B1gpDnba6RKuyd0%2Bspa%2BYdc0L55ycHWEgEXXP8by7fe1uHCEX1NJ%2BKhplRTqM1%2F8Xlvk4Vraf3aM%2B31OC%2BgjxE%2BFccYlvoVuq3%2FfUrb4ZydGgJrUJOyqCGuVFF1pEUvzkXcNyHaZk8HY%2BqfZoDxDpCNPfKzk3PHQ7FL3id4Hc4hM%2FvnCA1Qutugry8xYCRBJQUNtjNR4KeGHze4HlAzm%2F9thsgVC%2FBE408YkKUse4BezxxdYXhYjpxfsyxj29QBi5UE523DHr8nTWG2Up7VexShYmW8715bObqDSO7OcIGlkjOcu%2FAR8ccnnKK%2BJiXVUtF6S9AmUUZAQ9dh5UO%2BO4ZMHgzht9sqR%2BekpmzFBPof4%2BGgbMzhO4dJ3EtHiXxe2ynf8b%2BcWxp%2BoKwFzLrLk1vNOxm88gH53RUf4K0k%2BnE0HZI0az1WTaeDafuSOWo2%2BO2rPacgBchrU1Ppb771y50YySKMpecQJhWNvBDk0igdWu4RNBS3wfsUmRII%2BfmgfGw2wTDX%2F1QYSZI%2FjKilAdhpjuZ%2B6XqoZL3dIHxkL%2Fs4ChjgG6g0XHOR11KNtC72AQKiyJMPTH0ckGOqUBIQ3X0c93p8XGoTWOmahvoAttdRoyt%2B0xZ8%2F4vZLkhaCZ29sY0XkxsrOuBPZc%2FKFCMvETshTmxDEdFvuX2Cj0xzOY0BQ5V0mzZeVs8lGyDZkJXmh6Xnzmv8mjwj72PfardAB6kBlXBU0lt8dyTI4iTVI%2B6Ii7OHePU%2BHX1bhAtXdkLSCRDd3cIyokjhUf4Tl2do1dwudmvQZQF7A%2Fh7RD5JLsvWZv&X-Amz-Signature=71e561a3117e3bd202232021d6ac050327987c3fd52d481ce8098407a84a0d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBY4YJBE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T184205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDL86Q6V95xu3iEdl%2BsIHUaveITgYI8LD%2FsN%2FwkfrCSLwIgX43pEShRgRirzRnBJzdXJDlobIIxgu2YkM8IJpC1vo8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHEoGvoX4FaXoOt4NCrcA9hcPqtGUu9Zu%2B6kRvLhcHKjTQp1l6PxhyVLd30Y060%2Fly8V0DE%2FXBl%2B1gpDnba6RKuyd0%2Bspa%2BYdc0L55ycHWEgEXXP8by7fe1uHCEX1NJ%2BKhplRTqM1%2F8Xlvk4Vraf3aM%2B31OC%2BgjxE%2BFccYlvoVuq3%2FfUrb4ZydGgJrUJOyqCGuVFF1pEUvzkXcNyHaZk8HY%2BqfZoDxDpCNPfKzk3PHQ7FL3id4Hc4hM%2FvnCA1Qutugry8xYCRBJQUNtjNR4KeGHze4HlAzm%2F9thsgVC%2FBE408YkKUse4BezxxdYXhYjpxfsyxj29QBi5UE523DHr8nTWG2Up7VexShYmW8715bObqDSO7OcIGlkjOcu%2FAR8ccnnKK%2BJiXVUtF6S9AmUUZAQ9dh5UO%2BO4ZMHgzht9sqR%2BekpmzFBPof4%2BGgbMzhO4dJ3EtHiXxe2ynf8b%2BcWxp%2BoKwFzLrLk1vNOxm88gH53RUf4K0k%2BnE0HZI0az1WTaeDafuSOWo2%2BO2rPacgBchrU1Ppb771y50YySKMpecQJhWNvBDk0igdWu4RNBS3wfsUmRII%2BfmgfGw2wTDX%2F1QYSZI%2FjKilAdhpjuZ%2B6XqoZL3dIHxkL%2Fs4ChjgG6g0XHOR11KNtC72AQKiyJMPTH0ckGOqUBIQ3X0c93p8XGoTWOmahvoAttdRoyt%2B0xZ8%2F4vZLkhaCZ29sY0XkxsrOuBPZc%2FKFCMvETshTmxDEdFvuX2Cj0xzOY0BQ5V0mzZeVs8lGyDZkJXmh6Xnzmv8mjwj72PfardAB6kBlXBU0lt8dyTI4iTVI%2B6Ii7OHePU%2BHX1bhAtXdkLSCRDd3cIyokjhUf4Tl2do1dwudmvQZQF7A%2Fh7RD5JLsvWZv&X-Amz-Signature=4ef5469baa07e4aae5948a84b23b41f0ab27ca7fc3ecd2fd55fa06017a203d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

