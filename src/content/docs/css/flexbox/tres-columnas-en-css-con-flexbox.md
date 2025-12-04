---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKO43GJJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYMi06UcUsVLXWC73vCzWDvRLhsJfGmdxxOGGDXrMrdQIhAMv54q6FpCpOXaMjmtJ682o8BB9xclvFcF91cGALS7jUKv8DCEEQABoMNjM3NDIzMTgzODA1IgzqmIH9k4Lq7rAGaGsq3ANIxQ9JM6nbfXDASNejf0pYwj6%2BOcAgJkgpHlEKZoqtPX7T1zk7%2FLJhCX%2F0xcMyLkn8XQnyH%2BNovRNj8mcclYeZnwgnatQCNhwIy1QO3cSAFo4P18nLl9QNMI3l2LZZtDjuZaWaRuBQ1ec%2FHhHgTTmPE3ZU98UP7NoPB%2BLON6iYcK121lRxyJUOEQRKPIsKFdzF6t%2F1mo%2BPjtwXJAfuesN0wYfOIX1rSYDvKVIbsFPJBLvwnKBjzZTluPqqMwt7PEhGDECNyCizEZnmDzwFmTrq4Ihk8doXVPHwM19VVqzfZV7oQ%2FibUmkwggKADs7zbivGBskGUtk%2FjXU%2BOoUJ4HX7BvxYBkMxFP6CjOD66tVyCbaaE%2BcyWeGT34I2ajLhI2eqE3iBW5IY3QvaaRVc9Vj1S1U8%2F0B9J21Bh5QwWFI863inzICPyVJUmrAMR2gX0o7e3prkprWm%2BSEzBC%2Bnn4oEYNIuFijM8s%2BXnLhFlxhVbatilgJiWg786jFXWUQxCcrvfJlbnmrExOvx6nHWPja0N2%2Bnd9kFo6715CqSDo5aKFXZ1K677EfnXV99%2BT8wgoMRTNyxDp4RvrDgaStMocler%2FLqB%2FDuZLD57%2FhzO9dsZwUhT9Rlq7zCKlkGqzCQhsXJBjqkARG0aYw2G67Fz%2B5UY4%2Bgyirgiksb34HRYHWgc7wBwMq0A9T9UTMCM8E90GTLnM82vQdD81hUl%2F%2BV2ESaq8efeMhNiJQ%2B4s1y1UaA7o2SxGxs4mJhqnIz4wapTKjDglrCoimbgcRbJD1W3K84OMgveFExddrNyOyAh3nf570Z30fDG7w%2FsNCfEO%2BGG4vfCG9rDyVxBKC%2F%2FMB9uvqvvLji5ymFt7mN&X-Amz-Signature=a4bb7a328db040386ec8d1754be45a5722645ce20398800b2268616e6cdef423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKO43GJJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYMi06UcUsVLXWC73vCzWDvRLhsJfGmdxxOGGDXrMrdQIhAMv54q6FpCpOXaMjmtJ682o8BB9xclvFcF91cGALS7jUKv8DCEEQABoMNjM3NDIzMTgzODA1IgzqmIH9k4Lq7rAGaGsq3ANIxQ9JM6nbfXDASNejf0pYwj6%2BOcAgJkgpHlEKZoqtPX7T1zk7%2FLJhCX%2F0xcMyLkn8XQnyH%2BNovRNj8mcclYeZnwgnatQCNhwIy1QO3cSAFo4P18nLl9QNMI3l2LZZtDjuZaWaRuBQ1ec%2FHhHgTTmPE3ZU98UP7NoPB%2BLON6iYcK121lRxyJUOEQRKPIsKFdzF6t%2F1mo%2BPjtwXJAfuesN0wYfOIX1rSYDvKVIbsFPJBLvwnKBjzZTluPqqMwt7PEhGDECNyCizEZnmDzwFmTrq4Ihk8doXVPHwM19VVqzfZV7oQ%2FibUmkwggKADs7zbivGBskGUtk%2FjXU%2BOoUJ4HX7BvxYBkMxFP6CjOD66tVyCbaaE%2BcyWeGT34I2ajLhI2eqE3iBW5IY3QvaaRVc9Vj1S1U8%2F0B9J21Bh5QwWFI863inzICPyVJUmrAMR2gX0o7e3prkprWm%2BSEzBC%2Bnn4oEYNIuFijM8s%2BXnLhFlxhVbatilgJiWg786jFXWUQxCcrvfJlbnmrExOvx6nHWPja0N2%2Bnd9kFo6715CqSDo5aKFXZ1K677EfnXV99%2BT8wgoMRTNyxDp4RvrDgaStMocler%2FLqB%2FDuZLD57%2FhzO9dsZwUhT9Rlq7zCKlkGqzCQhsXJBjqkARG0aYw2G67Fz%2B5UY4%2Bgyirgiksb34HRYHWgc7wBwMq0A9T9UTMCM8E90GTLnM82vQdD81hUl%2F%2BV2ESaq8efeMhNiJQ%2B4s1y1UaA7o2SxGxs4mJhqnIz4wapTKjDglrCoimbgcRbJD1W3K84OMgveFExddrNyOyAh3nf570Z30fDG7w%2FsNCfEO%2BGG4vfCG9rDyVxBKC%2F%2FMB9uvqvvLji5ymFt7mN&X-Amz-Signature=5a6bc19046ebac13cb74d9b6d3bd23491e661613a8d0d8b9cd1b945e14d07ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

