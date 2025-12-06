---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJ3MXVX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLA5Ej34xV%2B3gsSF%2BygOIBsiM1ffZ91SybJHt7DUTyPAiEA6lAIQglLhriXp1DCuoy%2BHTQnqEhGdePlA6stNO7CJ4wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFDkAlfht1l64pDzqCrcA%2FcUfrMtNrjPhCzG%2Be7hylOQGlJw0FBYd%2BjYSdwQWDqs7s7EYHfSY2cwqcfgSxOYO3Ok3HLC5DcKrNYnxK3w3MyN4kCpAOBogSOPf%2FIzvSBnS0eCh1Ch3rJmsobZGMdHCQzX37BKpaySgF4AQUmLEjlngaLH7bxJHD5nEI4eZLaltkvwioa0FKiQQ3ZG1NQEOZ6Ih35xL%2FRIW7Nf7j%2BCUocGro24u97ixskXaOR%2FoIKRo%2FjA5aL26f7iNTBrsH0vkf0WWcAdt38OwxUFTjY3wT%2FW%2FWrjzHmqCZz%2BT1hHzd8X778XzNnQdDM0q80s3BosLUDXMnVB%2BS8Ghzl4trWLkaY3f1hPXFM9vQ2XsyXDpLIIeYprF1YEdziTJR79SCmw%2Flhf46NlS3zTkqYbIg0q2SerlevVYX2Shk8DTGVueAcXM%2BBAwgyE29EZwfksWUsM8PUDw1b%2FcIOPxUG9n6T1p33jJUcDHCzL2%2FU0Cx4dtSpCPQ7VzyK0AYtwS8FLSJG5Ok31or2MNy60b1EiEKlFrIYnksC8TIJPAbWcdOS335H8ZIh%2F%2BHSTfVfLNm7PJkyplL%2B1SceXZ1TBJO1awP0t2aG1QcqLdTxLE5ieB7QzlzYFbOM7Kd9TIktnSYg7MJzU0skGOqUBgA81NVVZo4gm96BJDR19Zwp6nW6pNL6l%2FRCtwHAHVSKcgFFd5gMBaTxyBmD%2Fw5cQ%2FtJgOaWpA%2FnVlky972kkAHLh7p%2Bjw347J8QzLwWoRr0moNutyEORhevSChnkH293keouzrHGQ0qie0zuvPj5gmlAFu3HJ8EoNDhNBcqOlNEDS%2Bn9nDVOct1pJ%2BSYEXDzgNC5L0%2Bo4sAG%2Bqh2LBBI0M4Luwvi&X-Amz-Signature=45c7165000cc01fb1be021012caa80596dc443b1c60a23aed6235084bee1a8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEJ3MXVX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T221924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGLA5Ej34xV%2B3gsSF%2BygOIBsiM1ffZ91SybJHt7DUTyPAiEA6lAIQglLhriXp1DCuoy%2BHTQnqEhGdePlA6stNO7CJ4wq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFDkAlfht1l64pDzqCrcA%2FcUfrMtNrjPhCzG%2Be7hylOQGlJw0FBYd%2BjYSdwQWDqs7s7EYHfSY2cwqcfgSxOYO3Ok3HLC5DcKrNYnxK3w3MyN4kCpAOBogSOPf%2FIzvSBnS0eCh1Ch3rJmsobZGMdHCQzX37BKpaySgF4AQUmLEjlngaLH7bxJHD5nEI4eZLaltkvwioa0FKiQQ3ZG1NQEOZ6Ih35xL%2FRIW7Nf7j%2BCUocGro24u97ixskXaOR%2FoIKRo%2FjA5aL26f7iNTBrsH0vkf0WWcAdt38OwxUFTjY3wT%2FW%2FWrjzHmqCZz%2BT1hHzd8X778XzNnQdDM0q80s3BosLUDXMnVB%2BS8Ghzl4trWLkaY3f1hPXFM9vQ2XsyXDpLIIeYprF1YEdziTJR79SCmw%2Flhf46NlS3zTkqYbIg0q2SerlevVYX2Shk8DTGVueAcXM%2BBAwgyE29EZwfksWUsM8PUDw1b%2FcIOPxUG9n6T1p33jJUcDHCzL2%2FU0Cx4dtSpCPQ7VzyK0AYtwS8FLSJG5Ok31or2MNy60b1EiEKlFrIYnksC8TIJPAbWcdOS335H8ZIh%2F%2BHSTfVfLNm7PJkyplL%2B1SceXZ1TBJO1awP0t2aG1QcqLdTxLE5ieB7QzlzYFbOM7Kd9TIktnSYg7MJzU0skGOqUBgA81NVVZo4gm96BJDR19Zwp6nW6pNL6l%2FRCtwHAHVSKcgFFd5gMBaTxyBmD%2Fw5cQ%2FtJgOaWpA%2FnVlky972kkAHLh7p%2Bjw347J8QzLwWoRr0moNutyEORhevSChnkH293keouzrHGQ0qie0zuvPj5gmlAFu3HJ8EoNDhNBcqOlNEDS%2Bn9nDVOct1pJ%2BSYEXDzgNC5L0%2Bo4sAG%2Bqh2LBBI0M4Luwvi&X-Amz-Signature=8c0177d6b2415738dff5ffc71e16b14d6ab2ed46d6dda5cb8e602de8fcc900e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

