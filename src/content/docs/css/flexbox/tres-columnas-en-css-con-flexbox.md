---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWZNGYZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB%2BU6WY3QJFs6X3vmbytkN2j%2Bph%2FKTuN3dFZ50TbvCwIhALdiWEgjsNnR0ZT%2B8ARc%2BCv40LrXyV0J0YDFzyMxqUI%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL4kkwyKhb5D%2BRZa0q3AOOseVqdquAh2lkg23Vzya7xbbyOcKXJpPimXN44FXZMU6jksRI6dRKP0xsL4CNE3e22f7jUYo2FtUlf%2BD7VEyDMZXz9xkTVuiaqHUsGa%2FrnMZepHFiqfEEGbQnstnrXlOMp8AtuL%2B0ky9yQNIu6IGiey6%2FSNeH9IOXJtvZRUXkBRgsONuXkr4qyBM4IOXrPXE%2B9oix%2Fhbnd9ngMH6DPIIjyT1BcZjMsUhizCb9W1dEY9GWV3tbcEdqH%2FA54SnxLl%2FRIWlqNnOKo4duCHN9VExzGEFfqdfmxquoOh%2BwP8vy2%2FhBZbgQiNHUykOSbmGUfXrViaeGIaODoWlBhyX5mtLouwAMuhWrdQm83XhxzDVGCjqiIMbha%2BcmliWJFWBu%2BZzJJ2zZWqrfvH7wpbDgDFJKlpoxDqlxpi%2FTgHfdZ4YNAM4hmpsTkanMqYu930of6lnBh57%2FTRezxp7ytP5UWS2LQVGC9BQsbzzZMfTBiE6beDXYStj%2FA8EQGXjUR3Tvw1%2BhbtrbaPUnx1kJNQ5nM7Um2GoRTwM6dxlVH6nd9S%2Bz6oop0QYdlEvW%2FU51LUfldVqFNq1Q8LpjIBtVPZa6uq4MfqmPWu6BYvaibe%2FdoczqkCWlbzvzTMBzX8px6TDXtNnJBjqkATYWzjxPf0hbUJTbRv2wiDDY0LdiV1dKS%2BL5f%2BLGoJsoRHlDK4sJVkmV%2B%2BbsPzGjFkBwsSJw06O3l2O2kkIgL%2FnUhKjo%2BG5lWl%2Fi1I5o2xnTHGM7%2BCnyQ8Np28NGKosEqcE%2BdNxto%2FyOAigsl2LCUz8uCjYJrklSlBSjAV2g4whq%2B0F8cii2%2BDCzr91URR%2BrvMwTIGRo7Md0UrbFUacM%2BYqtyLHl&X-Amz-Signature=c908ac8a0b46a997fb4bb112c98e5c6e92ae94d8c0fa700a90f5720bc273557f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LWZNGYZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuB%2BU6WY3QJFs6X3vmbytkN2j%2Bph%2FKTuN3dFZ50TbvCwIhALdiWEgjsNnR0ZT%2B8ARc%2BCv40LrXyV0J0YDFzyMxqUI%2FKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxL4kkwyKhb5D%2BRZa0q3AOOseVqdquAh2lkg23Vzya7xbbyOcKXJpPimXN44FXZMU6jksRI6dRKP0xsL4CNE3e22f7jUYo2FtUlf%2BD7VEyDMZXz9xkTVuiaqHUsGa%2FrnMZepHFiqfEEGbQnstnrXlOMp8AtuL%2B0ky9yQNIu6IGiey6%2FSNeH9IOXJtvZRUXkBRgsONuXkr4qyBM4IOXrPXE%2B9oix%2Fhbnd9ngMH6DPIIjyT1BcZjMsUhizCb9W1dEY9GWV3tbcEdqH%2FA54SnxLl%2FRIWlqNnOKo4duCHN9VExzGEFfqdfmxquoOh%2BwP8vy2%2FhBZbgQiNHUykOSbmGUfXrViaeGIaODoWlBhyX5mtLouwAMuhWrdQm83XhxzDVGCjqiIMbha%2BcmliWJFWBu%2BZzJJ2zZWqrfvH7wpbDgDFJKlpoxDqlxpi%2FTgHfdZ4YNAM4hmpsTkanMqYu930of6lnBh57%2FTRezxp7ytP5UWS2LQVGC9BQsbzzZMfTBiE6beDXYStj%2FA8EQGXjUR3Tvw1%2BhbtrbaPUnx1kJNQ5nM7Um2GoRTwM6dxlVH6nd9S%2Bz6oop0QYdlEvW%2FU51LUfldVqFNq1Q8LpjIBtVPZa6uq4MfqmPWu6BYvaibe%2FdoczqkCWlbzvzTMBzX8px6TDXtNnJBjqkATYWzjxPf0hbUJTbRv2wiDDY0LdiV1dKS%2BL5f%2BLGoJsoRHlDK4sJVkmV%2B%2BbsPzGjFkBwsSJw06O3l2O2kkIgL%2FnUhKjo%2BG5lWl%2Fi1I5o2xnTHGM7%2BCnyQ8Np28NGKosEqcE%2BdNxto%2FyOAigsl2LCUz8uCjYJrklSlBSjAV2g4whq%2B0F8cii2%2BDCzr91URR%2BrvMwTIGRo7Md0UrbFUacM%2BYqtyLHl&X-Amz-Signature=3f564079aecfd33b229e65f627c6f5cb968aba4bf6f7f8d4e8c5200286e0fcaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

