---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURWBIHE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyCPfKBpQPsP%2BvypIF1gb2F1luFv3%2Bo%2FJ76BtLPZeSAiAq5aAMlTJXLrEwOylkCIY34TfJXIDpnQNR4dNnjmO%2BHCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMy66fqg%2B%2BzIKhMOVKtwD7tsBbvoaZrUmW3j9G6w3jmc3flIpaJk4KmbZGiEjGtgsRKHRi4KmdDU6heGwMrK9PCOZ2x0i%2BwbsM3So%2FeqNcl04J350S7tob%2BJUXd46BbVoB69H8GL4YLAoRwFAjcXcwNEhXh%2Fo5q3k3zVFi1Puy8Ir5nySE12o%2FoZfu8gvVpug8l7fqRgdWenpme4lLNQdB0O98WzIyk%2FKtg1ak9H%2BV7f%2FZDxVkXk%2FRMGNT7Zob057Io%2FS%2BuCwsxyCFzxY5ndWgdW5oM%2FHxiSLO4s7aGMS1wbQdfUnhEGb%2BBaYrjIpOvy6ibAJTOgZzTyb%2Flc1TfUA0wXfdqoFYZK6g%2F98WUoXPwj%2FXS%2FM3SvDT9QPk8ussDse9v%2Bzx9gvNqsWm7JLVTAUrQYQ7P02JJB3Bbww%2F0l4UfO8xtB2rfbXmoJR9RJYRYoovH7UUKqKhiHeuancsZH3rIcE%2BnchAs8TII5614oIfDjy4WBkiX%2BhemuBg84OiJ0IzSAMd8XPT8jdL7CoGt%2Bx51ovDltaaI%2F%2Bfg9Ns9%2FhYNnXeJdHE6TJJWI1G3297JbwtxneNS0BnHQApvQmjqj89ka28qT%2FbtJzN73IvIkrRbdk5byJNSEj9LdHCbvqYU7Fm3UPAGjxFobe3CowwozIyQY6pgHkygWR8aETyBcPOQoaHdm1O%2BEq6%2FvP2k6QHROiPO88HNcbmTQp30nC8OI1SkU9n9Bi8FoSQHAl2NIiXPfF6NurtOx8EVTrxhARqmRIxuSNe%2B2%2FnwWWPdH2qlYdEcDLTHnVvUoT%2BErjc771Q0t6EdGL%2BEzN%2F3RcLdslZn9zN6XvGQHlWyIgcrtmD%2Bb%2FFXFHTmSzcCTaItTYgX6ih2X6mederhaKdSjL&X-Amz-Signature=c1bb2921f7a24ff892fecc7419008e4b8aaf330ba661597c72f578360d98d71f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QURWBIHE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcyCPfKBpQPsP%2BvypIF1gb2F1luFv3%2Bo%2FJ76BtLPZeSAiAq5aAMlTJXLrEwOylkCIY34TfJXIDpnQNR4dNnjmO%2BHCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMMy66fqg%2B%2BzIKhMOVKtwD7tsBbvoaZrUmW3j9G6w3jmc3flIpaJk4KmbZGiEjGtgsRKHRi4KmdDU6heGwMrK9PCOZ2x0i%2BwbsM3So%2FeqNcl04J350S7tob%2BJUXd46BbVoB69H8GL4YLAoRwFAjcXcwNEhXh%2Fo5q3k3zVFi1Puy8Ir5nySE12o%2FoZfu8gvVpug8l7fqRgdWenpme4lLNQdB0O98WzIyk%2FKtg1ak9H%2BV7f%2FZDxVkXk%2FRMGNT7Zob057Io%2FS%2BuCwsxyCFzxY5ndWgdW5oM%2FHxiSLO4s7aGMS1wbQdfUnhEGb%2BBaYrjIpOvy6ibAJTOgZzTyb%2Flc1TfUA0wXfdqoFYZK6g%2F98WUoXPwj%2FXS%2FM3SvDT9QPk8ussDse9v%2Bzx9gvNqsWm7JLVTAUrQYQ7P02JJB3Bbww%2F0l4UfO8xtB2rfbXmoJR9RJYRYoovH7UUKqKhiHeuancsZH3rIcE%2BnchAs8TII5614oIfDjy4WBkiX%2BhemuBg84OiJ0IzSAMd8XPT8jdL7CoGt%2Bx51ovDltaaI%2F%2Bfg9Ns9%2FhYNnXeJdHE6TJJWI1G3297JbwtxneNS0BnHQApvQmjqj89ka28qT%2FbtJzN73IvIkrRbdk5byJNSEj9LdHCbvqYU7Fm3UPAGjxFobe3CowwozIyQY6pgHkygWR8aETyBcPOQoaHdm1O%2BEq6%2FvP2k6QHROiPO88HNcbmTQp30nC8OI1SkU9n9Bi8FoSQHAl2NIiXPfF6NurtOx8EVTrxhARqmRIxuSNe%2B2%2FnwWWPdH2qlYdEcDLTHnVvUoT%2BErjc771Q0t6EdGL%2BEzN%2F3RcLdslZn9zN6XvGQHlWyIgcrtmD%2Bb%2FFXFHTmSzcCTaItTYgX6ih2X6mederhaKdSjL&X-Amz-Signature=9e80ab0855b3e1cdc8477a3fdf555528fdb23398d46565ce718a4566e8e808b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

