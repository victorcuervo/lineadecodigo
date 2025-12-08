---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTCXC3P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzmCAP%2FqzRuichP%2FMcUsr4bLCVQsak2p1VZSCGJsxckgIhAIn4f8EihKAjMRGARrOQqmL0nj9eOKiUh%2FPhQVzkDFUHKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL6tuzfDRON24gwvYq3AOBZQHXin4C4bEYQRkUtTzYca%2BE1EZ3pKBRsScQLTuqN19j9tSY0A2P2RMATONbvwmQCDQEDGG8KwOjFnU33i%2BXrPA0NRzIPY82kAKMQLz%2Fb7gYYfZQ1rXm2%2BilyU5yiXgm1I12lsYfNn0aD9Wpy6vys6vKyMFGQ%2FDPTsmQzeEEEPzEWPXeWIfdmFxtqH2QkXq9NannzXrC9gpYUX7JimPwBW0wtlhsY4dM8UPjOVX0gZOuBFJ4VRdn%2BPgwGGyG2HOYXYY14VwTt9KsAngW%2Bep4FEHFhszNnZt82GnZ%2BGLaJbESclv%2FeyQD5VOho4iLmwxWW3LDIFwnw4dlgqR%2B7rdPg5O%2FzUf85rPOwKlJ8FfKxwWASY76neU45X3VaxyLpZ%2BX72BwfUpDrXyuzm0MXYnt%2FJ5Vvtc4q%2FAxnJ%2FHS6SIyn1ub56UQdbguX049nfRs23SXKU2x%2FAlNp70uTK50WA7PuUsXx3i3M0YLwi51NAtTdy8w%2BgCIZzkigYm%2BVkcjo9FcOkQbyZ2rAmP%2BAnixQRmUYTtNjmrMGPqn4TKULAFCvG3G0RVjcsh8qPbgNW4m9Nddx0%2BaEwaCBl4SFDCZkD6jYqqirlI5blQM1XF%2BdnSjJZaPQ%2Bm0CNmaRi5TjCw0NnJBjqkAUGiEF2od3Fn1ABdALeDp2ZzFVmUX18pSMN7erQXPE5EECmaANh8ELNQ9hdl9PzKnDyZsmOxUmfF0MiIhr5%2ByRFqZBufeXC6gafvLYwotBdOYtBGWtcJ1NbFr6hHHI%2FdRYsLf7c2ll5XRQGooNhbB%2BHbqxUuY72O59VnqI6cePDiPI%2F3KjAGqCRPqKf1gtlWIMlBqnnJ6kdkcbM1XSOA6D7Sua4S&X-Amz-Signature=6aa094c882b6ec4c4529763ca082e3d1243e077681923474c5450fee601778f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTCXC3P%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzmCAP%2FqzRuichP%2FMcUsr4bLCVQsak2p1VZSCGJsxckgIhAIn4f8EihKAjMRGARrOQqmL0nj9eOKiUh%2FPhQVzkDFUHKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwL6tuzfDRON24gwvYq3AOBZQHXin4C4bEYQRkUtTzYca%2BE1EZ3pKBRsScQLTuqN19j9tSY0A2P2RMATONbvwmQCDQEDGG8KwOjFnU33i%2BXrPA0NRzIPY82kAKMQLz%2Fb7gYYfZQ1rXm2%2BilyU5yiXgm1I12lsYfNn0aD9Wpy6vys6vKyMFGQ%2FDPTsmQzeEEEPzEWPXeWIfdmFxtqH2QkXq9NannzXrC9gpYUX7JimPwBW0wtlhsY4dM8UPjOVX0gZOuBFJ4VRdn%2BPgwGGyG2HOYXYY14VwTt9KsAngW%2Bep4FEHFhszNnZt82GnZ%2BGLaJbESclv%2FeyQD5VOho4iLmwxWW3LDIFwnw4dlgqR%2B7rdPg5O%2FzUf85rPOwKlJ8FfKxwWASY76neU45X3VaxyLpZ%2BX72BwfUpDrXyuzm0MXYnt%2FJ5Vvtc4q%2FAxnJ%2FHS6SIyn1ub56UQdbguX049nfRs23SXKU2x%2FAlNp70uTK50WA7PuUsXx3i3M0YLwi51NAtTdy8w%2BgCIZzkigYm%2BVkcjo9FcOkQbyZ2rAmP%2BAnixQRmUYTtNjmrMGPqn4TKULAFCvG3G0RVjcsh8qPbgNW4m9Nddx0%2BaEwaCBl4SFDCZkD6jYqqirlI5blQM1XF%2BdnSjJZaPQ%2Bm0CNmaRi5TjCw0NnJBjqkAUGiEF2od3Fn1ABdALeDp2ZzFVmUX18pSMN7erQXPE5EECmaANh8ELNQ9hdl9PzKnDyZsmOxUmfF0MiIhr5%2ByRFqZBufeXC6gafvLYwotBdOYtBGWtcJ1NbFr6hHHI%2FdRYsLf7c2ll5XRQGooNhbB%2BHbqxUuY72O59VnqI6cePDiPI%2F3KjAGqCRPqKf1gtlWIMlBqnnJ6kdkcbM1XSOA6D7Sua4S&X-Amz-Signature=4709ac200e2b76525df05356355e7655dedbcb0772fe79ddde90e77cad3687f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

