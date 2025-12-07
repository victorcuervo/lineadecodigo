---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMAOMZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZoXhx8IoOAVpoC7dxQ9cZ0w%2Fj%2FDd3RAqm6EYnPP53TgIgWmPLI9WXRaoVPEXvMCT2Gn39LEMktAMf42TZZF6etS8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcZSAX0fCKF9pd2KircA6sASoVLjqPlk5YotdsjBEByrTnS5obq4s0pRt6QCQyHs8QlFrfBBUf6VGK6u4fwDTJiXp%2BoLbvcgIUC6Wtyz6lwCcWAWIe%2FRwduU25blkEi%2B%2BDD0%2F%2BBZEycSHrGawOrOxo78CO%2FXkOz6aVkk%2BC5ldv%2FDdm6jd%2BCNb4bp5ScHi7Dj3KxgCOHfX4LPeQbpqadyQMui%2FA9SO5NmPSY2rMjIg59WBFsWUwUqw88NNZkyetTLRrM2ZMOJmhCS%2BFyDeSmErsRlRGHxeGCCQzCHR4PP%2F1yXjJXiLinqIDXlWY6GYixqdC33sRRrhIDhQZCbq1yx4eVkqDuS6bRoVGCoiHAHsWosT%2FicAG1HxT1IECMPV9icbQDBcjTvMGg1t5EDvWZUyex7sScZadHrXEzR3NXT0QvK3PJ8VhsRlay6%2F7kd5mLr%2Fp%2FrDObA79B%2BaBoKAxFPEzpM2to9H7l6YHGg2R4cdsBjS0dp6GVmvzTFSJRQHkQboQ6djo1zGBNBZuciwirQZtMkxNraD0TKMiZkfCQSCM420owlTa%2FzO9pLfHP4DAG2hWtS75MdrTZPLmdDIFfKgV%2BjhgDQG68tyl0UVJJGfKqxtm%2Ffy4uwfioLhe34CNpWjbCd2%2F137RjvjyCMMP90skGOqUBY5dgHChDNAiGWSEIx0xmoDDOt1FcpzTmApiZDBoByUegnwtCyY8rYk6oKP9XT0caYi%2B%2BpSrMZcxtYfkvD3dTiWXtDqxiojYUzOHzkK6S9gmtEDvhXGQBCP6M2rpPTVEZKkdJVXO1g9Ko8iJ9qDy0Wduic7dCNWKOZrMRH2sS21gxYs5wcuInHGWDH26uExkJepRatl1tZ7o7vHY8wekri57XI7ZK&X-Amz-Signature=df00e2526c625343c834987a1bc6afacca78cd4ab493125e3cf1f8e2e8c49724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMAOMZH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZoXhx8IoOAVpoC7dxQ9cZ0w%2Fj%2FDd3RAqm6EYnPP53TgIgWmPLI9WXRaoVPEXvMCT2Gn39LEMktAMf42TZZF6etS8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcZSAX0fCKF9pd2KircA6sASoVLjqPlk5YotdsjBEByrTnS5obq4s0pRt6QCQyHs8QlFrfBBUf6VGK6u4fwDTJiXp%2BoLbvcgIUC6Wtyz6lwCcWAWIe%2FRwduU25blkEi%2B%2BDD0%2F%2BBZEycSHrGawOrOxo78CO%2FXkOz6aVkk%2BC5ldv%2FDdm6jd%2BCNb4bp5ScHi7Dj3KxgCOHfX4LPeQbpqadyQMui%2FA9SO5NmPSY2rMjIg59WBFsWUwUqw88NNZkyetTLRrM2ZMOJmhCS%2BFyDeSmErsRlRGHxeGCCQzCHR4PP%2F1yXjJXiLinqIDXlWY6GYixqdC33sRRrhIDhQZCbq1yx4eVkqDuS6bRoVGCoiHAHsWosT%2FicAG1HxT1IECMPV9icbQDBcjTvMGg1t5EDvWZUyex7sScZadHrXEzR3NXT0QvK3PJ8VhsRlay6%2F7kd5mLr%2Fp%2FrDObA79B%2BaBoKAxFPEzpM2to9H7l6YHGg2R4cdsBjS0dp6GVmvzTFSJRQHkQboQ6djo1zGBNBZuciwirQZtMkxNraD0TKMiZkfCQSCM420owlTa%2FzO9pLfHP4DAG2hWtS75MdrTZPLmdDIFfKgV%2BjhgDQG68tyl0UVJJGfKqxtm%2Ffy4uwfioLhe34CNpWjbCd2%2F137RjvjyCMMP90skGOqUBY5dgHChDNAiGWSEIx0xmoDDOt1FcpzTmApiZDBoByUegnwtCyY8rYk6oKP9XT0caYi%2B%2BpSrMZcxtYfkvD3dTiWXtDqxiojYUzOHzkK6S9gmtEDvhXGQBCP6M2rpPTVEZKkdJVXO1g9Ko8iJ9qDy0Wduic7dCNWKOZrMRH2sS21gxYs5wcuInHGWDH26uExkJepRatl1tZ7o7vHY8wekri57XI7ZK&X-Amz-Signature=d20f626659041aadbb43bdbc38a9bf9f7d66813da73551ebadd26e38c0aa1562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

