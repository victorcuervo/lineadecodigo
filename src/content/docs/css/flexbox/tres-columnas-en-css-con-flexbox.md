---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTANFEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW9Mm8WuHS5kx15%2FMHWAXfBv7I3gMYmdyG52l3J1F87AiEAonLXphW7ddLdlJi8xRHnc7C6vvctUzCfopjc4ngVqYwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPYqliYZ8A%2B2UtALcyrcA0SucBaXkxe%2Bmk3gF0eymtcBTy16Li7EkzrHLUtzaQnNi9R8IoizatVui884SSyX1ptwoFLQhBBmTqJPZzS7z7NfRir3U8S86pwI%2FFadiag%2F6zVYZ8yKNxKdKumbY%2BNmDXPixU7cshmha1lTDESihWCyKngg6yU4pG5ByCDbhT%2BQAjzUqy76cbxG17srb9ubv1rzKc5bUxHXuJ3VpnTOquKBVOE%2FLsW8PURjJGJ1Mid9iaoremuScesGti1FlW%2BR8%2Fpy09EZ1q5sAMiV317UyUIVpK3IMZeJtttD6vPdN2iFSEqwibFJFPzBeMMacQWhZD4I7cG9Z5uZb%2FBv2v%2F1zy1VYYDp%2FtyxTE56nh7ft%2Bkk%2BT3M2eynDjcam2tKoHQpWw1ay88kb9Yu0pjhvru3LjSFJP0KgGPu1ykUTrD418QF2fmm9FEwjFuwIc16vekl0XJubL7sAMPbnBdHfuKGycEQ10ncwXle8Fw1PKAmktLBTjCF0q%2B1rfy2ndcoeNjwzeDVse9nDeNL8933x9E%2FDdfLkaTul8KXyjKd8dCadxLAVRxTJocPUH%2FXTknYpFYHR8sHz0oXn%2BpxrjXkMDjRqNfVaA73nwpFkPMi3MWrc4bQCARL5jSEkDAJeTPYMPmJzckGOqUBxyYXu1VsqqEQ0YiAY29qf0qM2Zs9dOMUNXqwwtu9PqVa1R%2F7PCbJJ%2B249i496uCcNI0nmDv1b6DZ4BrbKStG1oWViKCg%2FZRxc1%2FlIni6keP4q5dGPvDaCkHlmV5wxkDO2aOyAp61zOPoEP2J63lkWPLP3yZz7YRRouOuPli5sIOeghL%2FdbzQVb%2BlfByrCc4S8wGHds5pBVST%2Fn7rXm3vw7T%2F8SNX&X-Amz-Signature=2c82ad03be06545e37fda5e3f3df0a2bdf5b97100644b4286eca837aa6ad13b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CTANFEL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEW9Mm8WuHS5kx15%2FMHWAXfBv7I3gMYmdyG52l3J1F87AiEAonLXphW7ddLdlJi8xRHnc7C6vvctUzCfopjc4ngVqYwq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPYqliYZ8A%2B2UtALcyrcA0SucBaXkxe%2Bmk3gF0eymtcBTy16Li7EkzrHLUtzaQnNi9R8IoizatVui884SSyX1ptwoFLQhBBmTqJPZzS7z7NfRir3U8S86pwI%2FFadiag%2F6zVYZ8yKNxKdKumbY%2BNmDXPixU7cshmha1lTDESihWCyKngg6yU4pG5ByCDbhT%2BQAjzUqy76cbxG17srb9ubv1rzKc5bUxHXuJ3VpnTOquKBVOE%2FLsW8PURjJGJ1Mid9iaoremuScesGti1FlW%2BR8%2Fpy09EZ1q5sAMiV317UyUIVpK3IMZeJtttD6vPdN2iFSEqwibFJFPzBeMMacQWhZD4I7cG9Z5uZb%2FBv2v%2F1zy1VYYDp%2FtyxTE56nh7ft%2Bkk%2BT3M2eynDjcam2tKoHQpWw1ay88kb9Yu0pjhvru3LjSFJP0KgGPu1ykUTrD418QF2fmm9FEwjFuwIc16vekl0XJubL7sAMPbnBdHfuKGycEQ10ncwXle8Fw1PKAmktLBTjCF0q%2B1rfy2ndcoeNjwzeDVse9nDeNL8933x9E%2FDdfLkaTul8KXyjKd8dCadxLAVRxTJocPUH%2FXTknYpFYHR8sHz0oXn%2BpxrjXkMDjRqNfVaA73nwpFkPMi3MWrc4bQCARL5jSEkDAJeTPYMPmJzckGOqUBxyYXu1VsqqEQ0YiAY29qf0qM2Zs9dOMUNXqwwtu9PqVa1R%2F7PCbJJ%2B249i496uCcNI0nmDv1b6DZ4BrbKStG1oWViKCg%2FZRxc1%2FlIni6keP4q5dGPvDaCkHlmV5wxkDO2aOyAp61zOPoEP2J63lkWPLP3yZz7YRRouOuPli5sIOeghL%2FdbzQVb%2BlfByrCc4S8wGHds5pBVST%2Fn7rXm3vw7T%2F8SNX&X-Amz-Signature=18056c9d020d8791a904c8d18cf683aa6c559391911bf446bed36903b2bf8599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

