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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNMVU5G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIG3gi5nPniObWG85etufXrJ5V8%2FvriYeX4Y3pMB5%2FIpLAiEAlLZ0X3vKE%2Fz%2B2LMhr16A3kFRqCkkjtMmrR%2B8zGxZ%2FtYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOy01OmJXiHjyJNXWSrcA355GFR7PnqvsB%2Br8%2FbjZieRQ2Jow8WDMdq9BhuRi1wgsV9rzoBrGyuayYorc85e2aNsMqOat%2BdlbfJtaFaFG%2FzZX5g3GG3meRX5u1uwenEt4ce8R%2BuhaJm9NCU88IOyzncoiHXWjNbQBBnzJ%2FdNvDHvw%2BEhHtWXpNTaD0GbtsPyvpLHFUd%2Fd6%2FSbnTiXdQnS3KyvhBwSm3iQpUDGS3VUKpthYY0AQBSGWBrxhVjJ5lS%2FlKqLatHKRBUl0RMJOVSJAAdGYdaa3SkTgCB93h34siQVrO%2B5QGUJKQhhIYyh88vQlNbgBscQd2SxtIsi6wwNeWtr7992QJ9LekDMbaViSMeEz%2FJkwynNrFrLuhkMKlalPThMPKmkjy64UEzGB1hHid0MRGN05F4pk0o2MquPOWzILH5ilm6wA%2Ftn%2Bo8flWVR%2Fhc0D5CfSy%2BMkru572Gt36ekP5tZZI13tA8YeThjY3Bq4t1fOn1muQG7aqrT5OzCtGthe77iWF%2BcRdl3MAk3NaHGlRL0TkkiUOqToNF%2Ffnv7HjzqhOAa8EuLut4pv%2BV2v8CjHwBPNesZOp1uHuz%2FGlO8JfeBBM7%2FBaG0tukL6wycvQM2r0Nnjak6kp2didsX0VkhvOj82XXSV1GMIbqwMkGOqUBFCQ2ISl1NCnrGr4AaSvMbv8VXOEPkw2WW2WXcv5EALAOqSx5h3j598lC2yGUHjWdHj2yxPz93vvAn1AYamIeENecrNezFgXGZ9JU%2BWx6gGfizsn3GgIJsBg%2FoVU6WhNzO6t0M51SzJj00AITYlGWJaflW5hgiUpDkXR5BZgDpemE04RwTjIVC8jX0%2BFgxcoDMB%2BT1BsHxYmc%2B49lWZguc4I8KPlz&X-Amz-Signature=786f24d80e7e568d536e36224361a0b0838af58162f640dc9f6a8fb4935d228b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNMVU5G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIG3gi5nPniObWG85etufXrJ5V8%2FvriYeX4Y3pMB5%2FIpLAiEAlLZ0X3vKE%2Fz%2B2LMhr16A3kFRqCkkjtMmrR%2B8zGxZ%2FtYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOy01OmJXiHjyJNXWSrcA355GFR7PnqvsB%2Br8%2FbjZieRQ2Jow8WDMdq9BhuRi1wgsV9rzoBrGyuayYorc85e2aNsMqOat%2BdlbfJtaFaFG%2FzZX5g3GG3meRX5u1uwenEt4ce8R%2BuhaJm9NCU88IOyzncoiHXWjNbQBBnzJ%2FdNvDHvw%2BEhHtWXpNTaD0GbtsPyvpLHFUd%2Fd6%2FSbnTiXdQnS3KyvhBwSm3iQpUDGS3VUKpthYY0AQBSGWBrxhVjJ5lS%2FlKqLatHKRBUl0RMJOVSJAAdGYdaa3SkTgCB93h34siQVrO%2B5QGUJKQhhIYyh88vQlNbgBscQd2SxtIsi6wwNeWtr7992QJ9LekDMbaViSMeEz%2FJkwynNrFrLuhkMKlalPThMPKmkjy64UEzGB1hHid0MRGN05F4pk0o2MquPOWzILH5ilm6wA%2Ftn%2Bo8flWVR%2Fhc0D5CfSy%2BMkru572Gt36ekP5tZZI13tA8YeThjY3Bq4t1fOn1muQG7aqrT5OzCtGthe77iWF%2BcRdl3MAk3NaHGlRL0TkkiUOqToNF%2Ffnv7HjzqhOAa8EuLut4pv%2BV2v8CjHwBPNesZOp1uHuz%2FGlO8JfeBBM7%2FBaG0tukL6wycvQM2r0Nnjak6kp2didsX0VkhvOj82XXSV1GMIbqwMkGOqUBFCQ2ISl1NCnrGr4AaSvMbv8VXOEPkw2WW2WXcv5EALAOqSx5h3j598lC2yGUHjWdHj2yxPz93vvAn1AYamIeENecrNezFgXGZ9JU%2BWx6gGfizsn3GgIJsBg%2FoVU6WhNzO6t0M51SzJj00AITYlGWJaflW5hgiUpDkXR5BZgDpemE04RwTjIVC8jX0%2BFgxcoDMB%2BT1BsHxYmc%2B49lWZguc4I8KPlz&X-Amz-Signature=97408e547c54ace9f3d7f8eb178bc761b88897056c23673f499589fbfc91e8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

