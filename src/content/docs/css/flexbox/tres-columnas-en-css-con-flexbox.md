---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWSQ44E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0nfxzm02kk8OEOiUYVxARu8vMthTzqZMa%2BCW8NlhT%2FAiB5NvFzAtCJuG32y%2FLXksWZwAtZlHkcWZ5%2BN2QM1Y8%2FiCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkApOWidZjs6glvGKtwDR6ClQckavwmZN4sJd82SBnBrajl2sNuHYF6CliBd%2BafQKDyq%2F3MsJSlLMGj6vjKYp%2BnI281xabIuVHpxlvRLsF2IIuXK0m%2FKhgU%2F7BZtSphoNIMh8zVUWsTyXqju5rB89bRXELpMMw3Ctu8U7IkeLV0OwI8mnufIp%2FobzTR%2FJ0Iez1s2iDcG6wJtSWzcha5NTdZDfTv%2FnRBmRQxkyUwjd%2B8VBhxhy6e4smXgBZ1I7VIKt8A6Ay24dhCYKh1PhAiBErQR1Omy68ANC08lMp7n%2F41XkahEA76okUxOoRQFzMbTwNrFcR%2FEWQYC4OOCO%2ByLxNzDc1ulVSSHgSTuPfga9%2F7YlNkxhkYF1q9GGv9%2B%2BJ%2B%2Bmdftj5%2F%2BpHRr8ishS1Mh8Y8R9Dvwd86Eej%2B6%2BVE2kWWTk3pJcy7IVsxI6kTInwiajqoR4EXT3fvrkbQB7kwXlg50Qi1Hpa4aUkaz3CDywidfCGCIkaASaxcunQHv9Nj0z5Sbq3tX7u%2Fzy1hAzJB92rOi4Cjcld1M0QR2h6VypKZSN%2F1w93X%2BKqJGJvzgpX%2BR%2FWmByu4%2F%2BKs57WtTAu7HPWdZ27fhIezQhkAD5wIMGsHSrJ9Wrxt%2FqVNKymUFh38wJk2ws6hUdrV72vcws%2B3ZyQY6pgHyvVq7xM%2FfDMKR1RjUJxqi%2FCUDYZH%2BAubxFlXxktwYI8XLxT5O%2BWlOsv26fe0qEQBGZkyLy99QMQmR2qUd%2FgCZaYGNFekCaGSfCv5DKhJAzgn%2Fp2ABuAfgOCZH2QsuN4O4z4QiS5ghVTOrnFYN%2Bt1pVDg8%2Feb3XrCpZ5%2BgS80A9M48ncF1HUy5UBkFsapjwHJMZPcMV%2FgI7mw6ooj73fdnxPS%2BFn07&X-Amz-Signature=69a0bae5d94ca03ee3d6f5f70e4177d11f0ecec33be343511e02db6c40066b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DWSQ44E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T104025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0nfxzm02kk8OEOiUYVxARu8vMthTzqZMa%2BCW8NlhT%2FAiB5NvFzAtCJuG32y%2FLXksWZwAtZlHkcWZ5%2BN2QM1Y8%2FiCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmkApOWidZjs6glvGKtwDR6ClQckavwmZN4sJd82SBnBrajl2sNuHYF6CliBd%2BafQKDyq%2F3MsJSlLMGj6vjKYp%2BnI281xabIuVHpxlvRLsF2IIuXK0m%2FKhgU%2F7BZtSphoNIMh8zVUWsTyXqju5rB89bRXELpMMw3Ctu8U7IkeLV0OwI8mnufIp%2FobzTR%2FJ0Iez1s2iDcG6wJtSWzcha5NTdZDfTv%2FnRBmRQxkyUwjd%2B8VBhxhy6e4smXgBZ1I7VIKt8A6Ay24dhCYKh1PhAiBErQR1Omy68ANC08lMp7n%2F41XkahEA76okUxOoRQFzMbTwNrFcR%2FEWQYC4OOCO%2ByLxNzDc1ulVSSHgSTuPfga9%2F7YlNkxhkYF1q9GGv9%2B%2BJ%2B%2Bmdftj5%2F%2BpHRr8ishS1Mh8Y8R9Dvwd86Eej%2B6%2BVE2kWWTk3pJcy7IVsxI6kTInwiajqoR4EXT3fvrkbQB7kwXlg50Qi1Hpa4aUkaz3CDywidfCGCIkaASaxcunQHv9Nj0z5Sbq3tX7u%2Fzy1hAzJB92rOi4Cjcld1M0QR2h6VypKZSN%2F1w93X%2BKqJGJvzgpX%2BR%2FWmByu4%2F%2BKs57WtTAu7HPWdZ27fhIezQhkAD5wIMGsHSrJ9Wrxt%2FqVNKymUFh38wJk2ws6hUdrV72vcws%2B3ZyQY6pgHyvVq7xM%2FfDMKR1RjUJxqi%2FCUDYZH%2BAubxFlXxktwYI8XLxT5O%2BWlOsv26fe0qEQBGZkyLy99QMQmR2qUd%2FgCZaYGNFekCaGSfCv5DKhJAzgn%2Fp2ABuAfgOCZH2QsuN4O4z4QiS5ghVTOrnFYN%2Bt1pVDg8%2Feb3XrCpZ5%2BgS80A9M48ncF1HUy5UBkFsapjwHJMZPcMV%2FgI7mw6ooj73fdnxPS%2BFn07&X-Amz-Signature=c479e0ced91364759f7eb145047a6dd915910340b3c60553fe1fbcc92eea6b98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

