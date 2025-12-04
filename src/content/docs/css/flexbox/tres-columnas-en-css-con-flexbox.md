---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7Y56RVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIC0lNnYbDIQh%2F2a5zDu%2FpHVhg8Kgr37a9UQL07jiHUXCAiBiYYPqdoVzuFw0ssWn%2BV6%2FddLquceOVSP%2BZIVlqb0NzCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMq8aN%2BFSVOBNd8VLpKtwD97HnMUwg2MTNYn3cDArvDvNplFrZgdVE5mMDi8WE6QrdpmxbJbx6npczs5KW6uhSV7psbgQGHvcF%2FYfQnfFg%2FDUA3pV7KfaV%2FE1QCVFikeqswFWxEhWBDDQyyID605D9YrphjpDB47DBIFp8f%2F%2Binq3VlOsPXRNx2MBhianQnYqmLwMWaTUp6xVP8PZKE6H8gV4xLV0lSGc3p6QPuXB3O7omvEuPj6VwV78kHJotCODe6AWRpYP27Dz%2BfPoKOgqgFqB8iCzxEEQFd9ZOdGuq%2FWegEw7nObPWIjsqJqLTZ%2BH5R3BQzOUzDIjGAA%2FIlpuznvj43N17%2BZYlQJa5QvcIb80hmq5Shn0o6B08aWqf8BHxAegaaPfTub1gtSBz00RloK1kATjvH8i%2BWxvsPd%2B%2BOOEO0LKnK9ZgTl1bfM%2FESxehCcp5H5feH06PHbmNkcZduRvxepPSrsv5vJOSqHKMJ4FA4FYFaw7itjvQlbMmaHsnRG2fAyAa5%2BRcWdvrioVK51mWiS%2BlCwq990zewCHygEcpt8A9rjd38bB34W5cjMnPWWXISipKUmiiBU3WWWpizrANcNluXc%2FXTJxisYWlf92EVY6J5KnmiW7tXsqL7OwyrNSOch4RbjxSSS8wjefFyQY6pgFcO1Bgo3WUN0PLvBNPKywue9b6Fcq77cWZDVuN3JPyrV8RWCOjPlPjFHL59luyP17y914YH1Nud1xzuhhmYsiYD78pYgjyo3Azd1HTsaiXJvw0bbe%2F411N1JEm63D5d54YUupA9MwnSAaWy0Ek12vL1tvdUpU7qtF7qZDDgaJ%2Bkrr49p%2F%2Fw1NI8TjqmzDm%2BGNhyCEFkn%2F13ou6ryuYO81MoGsmJ6Ra&X-Amz-Signature=06503e7a554562ac9c70162d19448f4e14914fe56ceb239942ab627c3faad7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7Y56RVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIC0lNnYbDIQh%2F2a5zDu%2FpHVhg8Kgr37a9UQL07jiHUXCAiBiYYPqdoVzuFw0ssWn%2BV6%2FddLquceOVSP%2BZIVlqb0NzCr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMq8aN%2BFSVOBNd8VLpKtwD97HnMUwg2MTNYn3cDArvDvNplFrZgdVE5mMDi8WE6QrdpmxbJbx6npczs5KW6uhSV7psbgQGHvcF%2FYfQnfFg%2FDUA3pV7KfaV%2FE1QCVFikeqswFWxEhWBDDQyyID605D9YrphjpDB47DBIFp8f%2F%2Binq3VlOsPXRNx2MBhianQnYqmLwMWaTUp6xVP8PZKE6H8gV4xLV0lSGc3p6QPuXB3O7omvEuPj6VwV78kHJotCODe6AWRpYP27Dz%2BfPoKOgqgFqB8iCzxEEQFd9ZOdGuq%2FWegEw7nObPWIjsqJqLTZ%2BH5R3BQzOUzDIjGAA%2FIlpuznvj43N17%2BZYlQJa5QvcIb80hmq5Shn0o6B08aWqf8BHxAegaaPfTub1gtSBz00RloK1kATjvH8i%2BWxvsPd%2B%2BOOEO0LKnK9ZgTl1bfM%2FESxehCcp5H5feH06PHbmNkcZduRvxepPSrsv5vJOSqHKMJ4FA4FYFaw7itjvQlbMmaHsnRG2fAyAa5%2BRcWdvrioVK51mWiS%2BlCwq990zewCHygEcpt8A9rjd38bB34W5cjMnPWWXISipKUmiiBU3WWWpizrANcNluXc%2FXTJxisYWlf92EVY6J5KnmiW7tXsqL7OwyrNSOch4RbjxSSS8wjefFyQY6pgFcO1Bgo3WUN0PLvBNPKywue9b6Fcq77cWZDVuN3JPyrV8RWCOjPlPjFHL59luyP17y914YH1Nud1xzuhhmYsiYD78pYgjyo3Azd1HTsaiXJvw0bbe%2F411N1JEm63D5d54YUupA9MwnSAaWy0Ek12vL1tvdUpU7qtF7qZDDgaJ%2Bkrr49p%2F%2Fw1NI8TjqmzDm%2BGNhyCEFkn%2F13ou6ryuYO81MoGsmJ6Ra&X-Amz-Signature=40cc00c7d984e27893cf304618f469c63a8f1369d31971632d05154115a3ee70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

