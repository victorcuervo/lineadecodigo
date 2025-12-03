---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC22FK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCq%2BmXdvycJGvbXBboWm%2B%2FTwNfWGL5ruRN%2FJ9fvNGeg0AIhAMdB%2FY0CbJ0NgJ3WLF4s0Bn2j%2B4aoxFsx0SqNHgyQw6sKv8DCCgQABoMNjM3NDIzMTgzODA1IgxOWKdNtHP3%2BtRU9GIq3AO65DIeMgMfteWta6KO6w9%2FMuXjClmnOBtJPXPCyRc%2FTA1o5tHWNOuoGQqbrsKsZ0NHTHm3aEFDEpzGUfqVQp36seFmiSx55OdOM%2B73sdYNuVMJaN9LsuayD4ZXuHjvf6oDGJQKGS6HT0JAaFyA9MXTbClybMNhvLRGsTdMDTUahBr4YUe%2F5StpSczG7H91rtocuBBeJlhxaFed2bksK8gIbAwlhtlyG6gZ%2FPHzdwWMhUUem7cR3ipwMYbSMoSu%2F0tTTseC%2FkVKKmZZuOEX7Io6cnyGK6xdZQNdzNdV93NIRZoL%2FTVnWfQDzubHcGV1%2Flm9KhbHgSeavcb7mhT5QmY%2FCelf2JXXcqL6LockUJ7WZnD4hkeXwXMibuPSH4%2FxmdGBzivKHqjs8DC%2B4kvQeCpDSAHUhmBQYESHHz56yaoemu9cHaSis39mD3M1pNgPGOGJuG7RBjNiz87icanq4ct%2BW8OaovnFabn39qSb8kjmnCAxN06YW1Tu61L2n71NUtHPN8A1U6ugAcfNWNo3mhdtdDz%2FNSvfrp7xINeqDpi5Nh41LocXa5m6dLHSn2W3hiNgbHqYju7eGSRYcUnmtAmU5ZV3lc5LOQAqEO%2FmDvCoTR6ONGdI%2BOUQM%2F6RfjDaub%2FJBjqkAdueTnvAOUGAAYXV8JaYNGmawHnwNkCJ392zk3I%2F4dirB%2BRin0jSU17k8TQlmarPyuk4x6UpsNaCNZJEKJUFsHr1FmC3exXd%2FA%2FnSjj%2BE9rfXIZeaLOrX2AWQpDmhlsAQS9rtAbxd%2B9KTSBvyqk1E3Lo6hxdKIZKenuzefhr6HfUkzETiM9yUCiEZN0Wzdzkv1gBa3uNbaCH9YlBt0pC2Ro8cJr3&X-Amz-Signature=469dbe5b84ff715e936ac2b779672c45c8220ca13a962c7ac90f5f1fd008fc0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQC22FK4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCq%2BmXdvycJGvbXBboWm%2B%2FTwNfWGL5ruRN%2FJ9fvNGeg0AIhAMdB%2FY0CbJ0NgJ3WLF4s0Bn2j%2B4aoxFsx0SqNHgyQw6sKv8DCCgQABoMNjM3NDIzMTgzODA1IgxOWKdNtHP3%2BtRU9GIq3AO65DIeMgMfteWta6KO6w9%2FMuXjClmnOBtJPXPCyRc%2FTA1o5tHWNOuoGQqbrsKsZ0NHTHm3aEFDEpzGUfqVQp36seFmiSx55OdOM%2B73sdYNuVMJaN9LsuayD4ZXuHjvf6oDGJQKGS6HT0JAaFyA9MXTbClybMNhvLRGsTdMDTUahBr4YUe%2F5StpSczG7H91rtocuBBeJlhxaFed2bksK8gIbAwlhtlyG6gZ%2FPHzdwWMhUUem7cR3ipwMYbSMoSu%2F0tTTseC%2FkVKKmZZuOEX7Io6cnyGK6xdZQNdzNdV93NIRZoL%2FTVnWfQDzubHcGV1%2Flm9KhbHgSeavcb7mhT5QmY%2FCelf2JXXcqL6LockUJ7WZnD4hkeXwXMibuPSH4%2FxmdGBzivKHqjs8DC%2B4kvQeCpDSAHUhmBQYESHHz56yaoemu9cHaSis39mD3M1pNgPGOGJuG7RBjNiz87icanq4ct%2BW8OaovnFabn39qSb8kjmnCAxN06YW1Tu61L2n71NUtHPN8A1U6ugAcfNWNo3mhdtdDz%2FNSvfrp7xINeqDpi5Nh41LocXa5m6dLHSn2W3hiNgbHqYju7eGSRYcUnmtAmU5ZV3lc5LOQAqEO%2FmDvCoTR6ONGdI%2BOUQM%2F6RfjDaub%2FJBjqkAdueTnvAOUGAAYXV8JaYNGmawHnwNkCJ392zk3I%2F4dirB%2BRin0jSU17k8TQlmarPyuk4x6UpsNaCNZJEKJUFsHr1FmC3exXd%2FA%2FnSjj%2BE9rfXIZeaLOrX2AWQpDmhlsAQS9rtAbxd%2B9KTSBvyqk1E3Lo6hxdKIZKenuzefhr6HfUkzETiM9yUCiEZN0Wzdzkv1gBa3uNbaCH9YlBt0pC2Ro8cJr3&X-Amz-Signature=69e9dc49b309b464634e15dbaf8a73b99e427a4d9db37a8cccc91503126f47df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

