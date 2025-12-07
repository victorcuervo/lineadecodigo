---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYSQCYX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIHXQtKSe98s8LsR%2FdVoDL%2F1drREgM6E%2F%2FuUUXlO3HwIge2YLVePsqXJ%2BERmiuueKCc2U%2BWL0ba0BmH5eNyUpSzMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtUyqbe%2BG3NOgGGxCrcA6FVzquK18JJKvlUfOHS2V609O2OdAEGIUtBnCavVXXXCg9CzCONkE5hOhYdrzhhXlSuua0nGkNw1ZtQpB4%2BQPLEf5W%2FNaCTnEZiPCvbQynYoArsb42fOCtIMX9u%2F07TWqfOvxIaGm%2FkA0rKu%2BherXbLAMoo5ViFtpu4%2Fw3sm9XQv0bqvtzj1kkH6wAGs6Fv8aXTyh%2FILKXVVJd0CiNBg1Aglcd%2FN99Of%2FF5lYMAxKcfVMUG3AvG8uSKe%2BMtrF%2BhHMHtldf9gGrWR3hwkVMjJ4a8jCRzI1xIqACvAr7ecUcOFe1LGWsFrj4GEt93FYtFi%2BuAwMtd62U4Jg2MR7lFQKQpv%2BcGgTTSh4ZjmIKQTUYP5w94QqdBNv8n1fsyRGtlWU3OGVT3oAFHB3rgkFHbkHqSHi3PXs5uzgHEkPiLps1cB5Qyut%2BkUhpgNWMZfb2doLp6qhF7JKIk5uyax7LbdZy9qvLNPF%2BHjw2sOye8Pu3T9DyfC1hh0p5ipcEjS0eLJnEgFISB2hC5ucHuoDF6znYgp1svE00xrVl9%2BEzrRaTX7C36QuuBM4ei4k7BhUBjX7c50hX80INdUmpO0pWE%2Bg2ZFQ1GCIdk9jr6ykcMw4P7ZIpLJrCSaCxOLmVcMJnI18kGOqUBJvY9UajjWIA35sKLUKgFxYZ5ZUcd59%2BuDKRatVgob2Pl09C4lzduN5oJqN64y6dOqO92lsGZvWEbJYGz6fl6jBK%2Fj3%2FUdZicUU7XR9sBLtEKtFLWyCEWjiPcTb5drPlQkkxVeL%2FHdmok5MRJF6XlrDZXuTGAgnjty05UfNaAkQYnY59z7K89HjR7uIkGuTn1GIIWLnOVXi6hlluDI9SoovKlj8Im&X-Amz-Signature=2ad040483954cb4ca8a360d069c8c83c49156ba08da90a3dbd804a56354da2b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZYSQCYX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T223911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuIHXQtKSe98s8LsR%2FdVoDL%2F1drREgM6E%2F%2FuUUXlO3HwIge2YLVePsqXJ%2BERmiuueKCc2U%2BWL0ba0BmH5eNyUpSzMqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtUyqbe%2BG3NOgGGxCrcA6FVzquK18JJKvlUfOHS2V609O2OdAEGIUtBnCavVXXXCg9CzCONkE5hOhYdrzhhXlSuua0nGkNw1ZtQpB4%2BQPLEf5W%2FNaCTnEZiPCvbQynYoArsb42fOCtIMX9u%2F07TWqfOvxIaGm%2FkA0rKu%2BherXbLAMoo5ViFtpu4%2Fw3sm9XQv0bqvtzj1kkH6wAGs6Fv8aXTyh%2FILKXVVJd0CiNBg1Aglcd%2FN99Of%2FF5lYMAxKcfVMUG3AvG8uSKe%2BMtrF%2BhHMHtldf9gGrWR3hwkVMjJ4a8jCRzI1xIqACvAr7ecUcOFe1LGWsFrj4GEt93FYtFi%2BuAwMtd62U4Jg2MR7lFQKQpv%2BcGgTTSh4ZjmIKQTUYP5w94QqdBNv8n1fsyRGtlWU3OGVT3oAFHB3rgkFHbkHqSHi3PXs5uzgHEkPiLps1cB5Qyut%2BkUhpgNWMZfb2doLp6qhF7JKIk5uyax7LbdZy9qvLNPF%2BHjw2sOye8Pu3T9DyfC1hh0p5ipcEjS0eLJnEgFISB2hC5ucHuoDF6znYgp1svE00xrVl9%2BEzrRaTX7C36QuuBM4ei4k7BhUBjX7c50hX80INdUmpO0pWE%2Bg2ZFQ1GCIdk9jr6ykcMw4P7ZIpLJrCSaCxOLmVcMJnI18kGOqUBJvY9UajjWIA35sKLUKgFxYZ5ZUcd59%2BuDKRatVgob2Pl09C4lzduN5oJqN64y6dOqO92lsGZvWEbJYGz6fl6jBK%2Fj3%2FUdZicUU7XR9sBLtEKtFLWyCEWjiPcTb5drPlQkkxVeL%2FHdmok5MRJF6XlrDZXuTGAgnjty05UfNaAkQYnY59z7K89HjR7uIkGuTn1GIIWLnOVXi6hlluDI9SoovKlj8Im&X-Amz-Signature=2795db240253406a74ce1be66453601f39f7fa450762c56a4adce0d8cc6648ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

