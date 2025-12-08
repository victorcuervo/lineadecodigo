---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYRFI3EP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6wPSlIOFeXpGNoDENaPHbtySpc7i1DlCK9NZZazmCQIhALS1kmyOswla5KapXHEFo9tr%2BpZV1kKLblztbnF%2F%2BavEKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9eq6%2B1b7Ipz%2BYr%2Fwq3APfCnGHKfEitM%2FjDqSB3WRwMuYMgbo%2FAYZboebPqbkDfNBM8AkFCyP5rgYW0eMtyBMTGtdY62kgNolNOJ0zNia%2B4pR7RmU9SgXJhLY8%2FI%2FxZZNrKldTPFES%2BIsbN3vYPCfUV9QwjKFEq1MpyL4FBw%2Fwr73KKEDPQQW%2Bn3zQe0p5TIWHNiXcGfl4Hdpmz2OkD0Qivl%2BCGCfMK5J3iz40eSDR7Kj%2FpMIJbV4a5VCTxF%2BiZouxj4GQU0UvdgYgc19AOsRk1AzaaOoYNwNWHJQtNAQNpjFF1G1Xiq9%2BMazd%2FZPA2uKMlwwa4OPNgQsQ6RW2EkPJdUmYmUIqkIBBnNlJcJHs9cnGsJNzug2%2B2xcySl7DsHOffVJr9ZldZKMcT5dBuRGuuZ9PRH%2Fk5%2BTWc%2F9nILINHH2ZKVkd%2F30IqohaprS0pj6w3loUDq82qP8WAf%2BdVqORz9G09vDEVVMTyqhgcaGPuCWQYz7StwDs8IN1ZyEeFeb1eMrkHMphBlmbNd9krLXsYuI%2BOBtRwWLZV5xmMSy%2Fro1QvHEu3RH%2FX2N3rtZb1NBJylTS%2FfAqI7nzgqstDyA%2BZm%2BLwhIubAhWVjh2LA9lHqhmxnnlL5J2BkgJK82af4%2BJmdKbFzyQCKf2ijDo5NvJBjqkAYkbMXD4YA6yNCsOQvTwxnoqqo5z0zoBwe4iIuDV0g4EnGTHPueesqozv5V0MwzWPQ0%2FUGBh9Znqp%2BopmOcHSBj1zoA4RjC61qIsmPD4uKpOvZPqCLaAAZ1KOGrKwl%2FMMo4d9xk%2Bz1ad8hSw4lp3TiFCxp4Ih7tnOoj%2BtnVlqp%2FVmie8soF%2FPRnrZy1Z7TlZqx0pxQroe2TOIwFxeWYkjtaUEiRg&X-Amz-Signature=0b434816e869fcdb4425cbb27832f8e13d7781ad9ce078bfef72f9d87e350651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYRFI3EP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2F6wPSlIOFeXpGNoDENaPHbtySpc7i1DlCK9NZZazmCQIhALS1kmyOswla5KapXHEFo9tr%2BpZV1kKLblztbnF%2F%2BavEKogECKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9eq6%2B1b7Ipz%2BYr%2Fwq3APfCnGHKfEitM%2FjDqSB3WRwMuYMgbo%2FAYZboebPqbkDfNBM8AkFCyP5rgYW0eMtyBMTGtdY62kgNolNOJ0zNia%2B4pR7RmU9SgXJhLY8%2FI%2FxZZNrKldTPFES%2BIsbN3vYPCfUV9QwjKFEq1MpyL4FBw%2Fwr73KKEDPQQW%2Bn3zQe0p5TIWHNiXcGfl4Hdpmz2OkD0Qivl%2BCGCfMK5J3iz40eSDR7Kj%2FpMIJbV4a5VCTxF%2BiZouxj4GQU0UvdgYgc19AOsRk1AzaaOoYNwNWHJQtNAQNpjFF1G1Xiq9%2BMazd%2FZPA2uKMlwwa4OPNgQsQ6RW2EkPJdUmYmUIqkIBBnNlJcJHs9cnGsJNzug2%2B2xcySl7DsHOffVJr9ZldZKMcT5dBuRGuuZ9PRH%2Fk5%2BTWc%2F9nILINHH2ZKVkd%2F30IqohaprS0pj6w3loUDq82qP8WAf%2BdVqORz9G09vDEVVMTyqhgcaGPuCWQYz7StwDs8IN1ZyEeFeb1eMrkHMphBlmbNd9krLXsYuI%2BOBtRwWLZV5xmMSy%2Fro1QvHEu3RH%2FX2N3rtZb1NBJylTS%2FfAqI7nzgqstDyA%2BZm%2BLwhIubAhWVjh2LA9lHqhmxnnlL5J2BkgJK82af4%2BJmdKbFzyQCKf2ijDo5NvJBjqkAYkbMXD4YA6yNCsOQvTwxnoqqo5z0zoBwe4iIuDV0g4EnGTHPueesqozv5V0MwzWPQ0%2FUGBh9Znqp%2BopmOcHSBj1zoA4RjC61qIsmPD4uKpOvZPqCLaAAZ1KOGrKwl%2FMMo4d9xk%2Bz1ad8hSw4lp3TiFCxp4Ih7tnOoj%2BtnVlqp%2FVmie8soF%2FPRnrZy1Z7TlZqx0pxQroe2TOIwFxeWYkjtaUEiRg&X-Amz-Signature=0648813bf6ffdc8903c281346afa4a9ac8884e9fa5c6ccd83ab599b0b1b65ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

