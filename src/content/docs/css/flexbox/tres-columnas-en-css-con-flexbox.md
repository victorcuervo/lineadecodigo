---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESOG3ZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIES46LmDdFB1h%2FyqEV%2FVIXE0ASvFvJwb4bHzeR9tdTMRAiEAvrZ5q6uLzb5Mr%2BB3trUZDtXdyWEYWebmTUQM9yV6ZCQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKhbar34tQFz8ixllircAylhhjHzitaYvpD7AKkaWW84irRqvdE4akDciRFpN9QIRTsKTINJroIVjapfqFMRwcNOJX%2BKWT76MLu8jilmiktBKoyZFDaC2ZoEquW7FN4CdzOU3QqM30iMAz4H8g5ErQBnRJxsQXGzL1zNWxHdNGarfR6sp2OcdXM%2BPypBW4FYoz2CXV1k0V5pU6HEWkogGy7YyFxsiBCicrhXe19MCmtf%2Byu0cAuhCE1lULgxzqLv%2BEVrX8XvLS92d%2Bhc2oXbS6L0AbJ%2FruskV%2FsWr19rXzGZXJQtjIZml08mvuRXZmrtyut9imwCnpSP9ZfevubCiWgvjW7gSPnUYhlgGIrJKogM6ERtM6VoYRcH%2FXjZceVJFXdSUKE%2FMtPTb%2FJGA3cZG5W78NKNOuswIZjIeXXv4JvyDvjshRYzqg5KqKRvVm40n5gqCDueHf310kFO9qgGMdzYlmtW99g3pPbUUeI%2Ftv2%2BwUs9VuDu7Y7458q4TZVgczQOgjfKNwO0hzvG8b4iGXgKS%2BpCgegEypRm6blWta9P0fFLFw2r%2BWYl5L%2F5woWJxzEHTMvzdbSgGa3E0ywVFtYx87mkWaFrRVrMBiTOTiLB1y1eTxrvuska88HeC%2FH%2FvlC338H%2F%2BdRb7yYMMK%2BuxMkGOqUBqPJrivbv8Y1jpqtaJuey0j7LFRtdHd2klWWxJ1KNQhGiZ04wVsGwmU1E7iOOmowyzN7CoMkvvvFj7KJdahVVBUTRz7R8%2ByKM0V%2FxCyL7Y76fGCQCkAcYPSsNa5ZA2YKLlmyc3%2FjOhUEu6IZ5tUEQXp8SZUN2WKf22NovVDhei4T48ldPwmphNxRW1QbkxdlWTTdHuwE%2FchsMPSartGXoRcwoG4WY&X-Amz-Signature=bbbae26c850f66f7324156909d7c2180199b4e7b8cbc9e8b3b98126ac7c904d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QESOG3ZT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIES46LmDdFB1h%2FyqEV%2FVIXE0ASvFvJwb4bHzeR9tdTMRAiEAvrZ5q6uLzb5Mr%2BB3trUZDtXdyWEYWebmTUQM9yV6ZCQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDKhbar34tQFz8ixllircAylhhjHzitaYvpD7AKkaWW84irRqvdE4akDciRFpN9QIRTsKTINJroIVjapfqFMRwcNOJX%2BKWT76MLu8jilmiktBKoyZFDaC2ZoEquW7FN4CdzOU3QqM30iMAz4H8g5ErQBnRJxsQXGzL1zNWxHdNGarfR6sp2OcdXM%2BPypBW4FYoz2CXV1k0V5pU6HEWkogGy7YyFxsiBCicrhXe19MCmtf%2Byu0cAuhCE1lULgxzqLv%2BEVrX8XvLS92d%2Bhc2oXbS6L0AbJ%2FruskV%2FsWr19rXzGZXJQtjIZml08mvuRXZmrtyut9imwCnpSP9ZfevubCiWgvjW7gSPnUYhlgGIrJKogM6ERtM6VoYRcH%2FXjZceVJFXdSUKE%2FMtPTb%2FJGA3cZG5W78NKNOuswIZjIeXXv4JvyDvjshRYzqg5KqKRvVm40n5gqCDueHf310kFO9qgGMdzYlmtW99g3pPbUUeI%2Ftv2%2BwUs9VuDu7Y7458q4TZVgczQOgjfKNwO0hzvG8b4iGXgKS%2BpCgegEypRm6blWta9P0fFLFw2r%2BWYl5L%2F5woWJxzEHTMvzdbSgGa3E0ywVFtYx87mkWaFrRVrMBiTOTiLB1y1eTxrvuska88HeC%2FH%2FvlC338H%2F%2BdRb7yYMMK%2BuxMkGOqUBqPJrivbv8Y1jpqtaJuey0j7LFRtdHd2klWWxJ1KNQhGiZ04wVsGwmU1E7iOOmowyzN7CoMkvvvFj7KJdahVVBUTRz7R8%2ByKM0V%2FxCyL7Y76fGCQCkAcYPSsNa5ZA2YKLlmyc3%2FjOhUEu6IZ5tUEQXp8SZUN2WKf22NovVDhei4T48ldPwmphNxRW1QbkxdlWTTdHuwE%2FchsMPSartGXoRcwoG4WY&X-Amz-Signature=6bbf6c7b104f7f289c244ea6b26ad3fda5fd008bc4db9601495be467105ccd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

