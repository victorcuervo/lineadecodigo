---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMA52BCI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDuNdih3s2mdTYz1H6czCvkupava5JvOLKn9NuBAT5rgIgaNYAM%2BuLtjYUBEjDA0697iKuN8%2FEX9YsnHY%2FBfkmTq4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUokRq6xxhdvFp36SrcA6WGCi3OPGCprkb6YZs1eoIK9UzArZulek7kKxGakObS0eVd6TNbW0DpkG8%2BIzgCXa8KZhc2i3zl19FwyDZQkUjK5BsqO8vJD0CZIU2Cwn2SSp7h7Uhrfw9ouLNWSzP98HrIJNHUjWYtUq9ZDPifCx7oyzkdlcPkiaS8thqhVk15ZetTz0UlUy5v%2FhL%2FZLv4%2Fv6ZQQA%2FafLX4a0QRyZsy59Fk1djB0qDQAEd%2FkGKJFuWI5X1ai%2Blj82h2aqO8YvAtj0j0IRE2mZMCpVh9lcaY1WkusDLc%2BQC71kDn1KgLHS2stUTwcnkTPByOoBJeVExtTfdsQOKz5anKFzCyc9ux5Z5utCiykuNMN9%2BTcmD8TEt%2BjYGxifWQXGB8agki5guUofsCgz4kOsjAv8mYxuzdkMfEwzOMcN0kxSpYFSO3mwTzrct9PEH0Y6RyQcFa2KXzsx%2FIPLhcfXO5Z0DCdRDHE8HV%2FM%2FB1xX557%2Buw%2BnzMzUs7ijqnPNT0%2BWQwL7EoKT%2FESzM20Zj%2Fa2Bvu2sItqj2MA8QrwU7%2Fs%2Bp1SbOlkqMKulPnmMgjQe2HrDpI16LV0Qi9BYxtPNYbkVCpQiBHZQNBLfvAZng3%2BTnKHiU9UQ2eDLwidhjTeMHjASamWMMmZ1ckGOqUB794ZO4w8ApExAQPt3if2hb3aRm1qCcQGV6a8bhA8ud0RF4%2BDrPChC5WMLqXXQBf7r74SYVsviY6vjvdlIw%2BiNpCWwQQ9iJQdjNJln1MsQIJuExW%2FSa%2Fyd8wts1UxFuK%2BkAKB%2F3FOjvKmiFxX35cJI0BLaro9JSfBpe8w7AlyorUe40LcLPFbXhqe%2Fi55Fe9cTbYzLZjbrqJwNtEEKVKeT4vAAoKx&X-Amz-Signature=b175dce2b1ddadd93e20e966a6453b315e42aabd793990d97f3faa18bd7d3da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMA52BCI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDuNdih3s2mdTYz1H6czCvkupava5JvOLKn9NuBAT5rgIgaNYAM%2BuLtjYUBEjDA0697iKuN8%2FEX9YsnHY%2FBfkmTq4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUokRq6xxhdvFp36SrcA6WGCi3OPGCprkb6YZs1eoIK9UzArZulek7kKxGakObS0eVd6TNbW0DpkG8%2BIzgCXa8KZhc2i3zl19FwyDZQkUjK5BsqO8vJD0CZIU2Cwn2SSp7h7Uhrfw9ouLNWSzP98HrIJNHUjWYtUq9ZDPifCx7oyzkdlcPkiaS8thqhVk15ZetTz0UlUy5v%2FhL%2FZLv4%2Fv6ZQQA%2FafLX4a0QRyZsy59Fk1djB0qDQAEd%2FkGKJFuWI5X1ai%2Blj82h2aqO8YvAtj0j0IRE2mZMCpVh9lcaY1WkusDLc%2BQC71kDn1KgLHS2stUTwcnkTPByOoBJeVExtTfdsQOKz5anKFzCyc9ux5Z5utCiykuNMN9%2BTcmD8TEt%2BjYGxifWQXGB8agki5guUofsCgz4kOsjAv8mYxuzdkMfEwzOMcN0kxSpYFSO3mwTzrct9PEH0Y6RyQcFa2KXzsx%2FIPLhcfXO5Z0DCdRDHE8HV%2FM%2FB1xX557%2Buw%2BnzMzUs7ijqnPNT0%2BWQwL7EoKT%2FESzM20Zj%2Fa2Bvu2sItqj2MA8QrwU7%2Fs%2Bp1SbOlkqMKulPnmMgjQe2HrDpI16LV0Qi9BYxtPNYbkVCpQiBHZQNBLfvAZng3%2BTnKHiU9UQ2eDLwidhjTeMHjASamWMMmZ1ckGOqUB794ZO4w8ApExAQPt3if2hb3aRm1qCcQGV6a8bhA8ud0RF4%2BDrPChC5WMLqXXQBf7r74SYVsviY6vjvdlIw%2BiNpCWwQQ9iJQdjNJln1MsQIJuExW%2FSa%2Fyd8wts1UxFuK%2BkAKB%2F3FOjvKmiFxX35cJI0BLaro9JSfBpe8w7AlyorUe40LcLPFbXhqe%2Fi55Fe9cTbYzLZjbrqJwNtEEKVKeT4vAAoKx&X-Amz-Signature=831402d50e696db7576ba0a001bfbf7ec1680eac56990e8a80b44c662b7bcff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

