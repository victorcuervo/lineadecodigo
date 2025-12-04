---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6XU62Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICGkohYMVA10u%2BdojmlBDr73NgwEYNzc9a5wXzrGCrdYAiEApjSU2ZkhVHWxvA818rBnxlWGz%2F3o7TOOgjHPo0d6SbMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDERAIFcn%2BvY0vpgdrCrcA2nPj1DSiJnB9JEjk25E8bWfdCKXNTNw1Wxo%2FUBu33q1lntAXI%2Bur%2FDf3TgI61nfof1oZmpcbGBpPovHAC6CsE0gwl2rHe%2FK8fSPknjBCXmh1ZQwJyyEpPpiJhP51yaPm5xImBxgFm%2B6V3dJXjwcDuACQY8W2%2BrQt5HSCs%2BMfwo7KlwQKbn6IMNaf1qM5x1Hts600pBvlm2KrFoQRIG84gnvb4lukSqyY4GAvbCp%2F8JC3UGDojmCUx%2BInqIK0ZcnK0Q3VtFAhzQ4RvmvaIkV5rB%2FhWFd%2FJFMYU8ZVRRkORlXvTBYUTR7RkQU6DbKUbe0NkubFrTRajZX5MKYdyZnU89GM5CD6OETj3wOpW5CBaBhaAROXcgBjkUZAwtInUVUyavAC%2FzgOowFMvydbuDSapM%2FbdzBxHofqOelSYN4O59ffm2qGrOVL97GjDA%2Fc%2BoQ%2Fu8HjOGYFzvgKkMDO9dUgCq8G9%2FDOsqDeFM02%2FNAE2U7eVC29oqKm1GeuXoBpqFQNMF6zuk%2Fehgko%2FCWXN%2BGb6VjGqMcNEPooW%2FHxxzLPoXn%2BP5cYRBpnZ6pVOgTQW1OctgFhW9CWkKtm656M5zOLzEHB4d1%2FIquA6L81aigqhBbbgCNDCry%2B5CffUbcML%2BuxMkGOqUBqpHIpxWpJsSPilzKTl5nMkh%2FjGCVQYz07EJrce%2BmFH5NpCx2fai71NuYBnqj9TKxXnSJr2K%2BK8oyLAb1alt3DvrNn7Naf45v8Ywkph7owblUFRaVtZz2Gi27BF3eyNkojT4pSuI2mnvAlhtaUTmvvXyE%2B18EP9aeloDUH6V5mRoBk%2BK9QQXRLr0wphSl0Y4CNWcgi3QepaIlbCieQoF%2Bk3%2B5xtdR&X-Amz-Signature=c549e655a61fd3e42efecf60a18c44caed344b76fd74aa8b73bf10a989b9bc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC6XU62Y%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICGkohYMVA10u%2BdojmlBDr73NgwEYNzc9a5wXzrGCrdYAiEApjSU2ZkhVHWxvA818rBnxlWGz%2F3o7TOOgjHPo0d6SbMq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDERAIFcn%2BvY0vpgdrCrcA2nPj1DSiJnB9JEjk25E8bWfdCKXNTNw1Wxo%2FUBu33q1lntAXI%2Bur%2FDf3TgI61nfof1oZmpcbGBpPovHAC6CsE0gwl2rHe%2FK8fSPknjBCXmh1ZQwJyyEpPpiJhP51yaPm5xImBxgFm%2B6V3dJXjwcDuACQY8W2%2BrQt5HSCs%2BMfwo7KlwQKbn6IMNaf1qM5x1Hts600pBvlm2KrFoQRIG84gnvb4lukSqyY4GAvbCp%2F8JC3UGDojmCUx%2BInqIK0ZcnK0Q3VtFAhzQ4RvmvaIkV5rB%2FhWFd%2FJFMYU8ZVRRkORlXvTBYUTR7RkQU6DbKUbe0NkubFrTRajZX5MKYdyZnU89GM5CD6OETj3wOpW5CBaBhaAROXcgBjkUZAwtInUVUyavAC%2FzgOowFMvydbuDSapM%2FbdzBxHofqOelSYN4O59ffm2qGrOVL97GjDA%2Fc%2BoQ%2Fu8HjOGYFzvgKkMDO9dUgCq8G9%2FDOsqDeFM02%2FNAE2U7eVC29oqKm1GeuXoBpqFQNMF6zuk%2Fehgko%2FCWXN%2BGb6VjGqMcNEPooW%2FHxxzLPoXn%2BP5cYRBpnZ6pVOgTQW1OctgFhW9CWkKtm656M5zOLzEHB4d1%2FIquA6L81aigqhBbbgCNDCry%2B5CffUbcML%2BuxMkGOqUBqpHIpxWpJsSPilzKTl5nMkh%2FjGCVQYz07EJrce%2BmFH5NpCx2fai71NuYBnqj9TKxXnSJr2K%2BK8oyLAb1alt3DvrNn7Naf45v8Ywkph7owblUFRaVtZz2Gi27BF3eyNkojT4pSuI2mnvAlhtaUTmvvXyE%2B18EP9aeloDUH6V5mRoBk%2BK9QQXRLr0wphSl0Y4CNWcgi3QepaIlbCieQoF%2Bk3%2B5xtdR&X-Amz-Signature=ed0ecd28f5c7aedfe6eca4ceaaa4acd39f0e5e362a1ced9e93056afbea6dad3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

