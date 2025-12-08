---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOSKGK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfYiP5T4zczCD%2F8RTTXCrOLByU9idnJjn8grYtRkQbuQIhANdlmYErnn771oVYl%2FCke8m0Z5F1YOKWpi9UZ0weRFmrKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzxwiY3mH0Ypgh7%2F0q3AP%2FCYmNA6olUwFlzQKLiEq%2FRojqrBm7bTW%2FOS1j5oFfAW3IBeT46w%2BAhL9M7W7%2Bp2ISAz1fONava5%2BuddTio2rzgS65BaHadQa785euTOpY%2BT2Utfu6jBejC2uQtaubMkUPt6RwuCmKFemsM3id6fpNwasWvo0%2F6lm9hLqNELTGMUcIIm3QXe7nRK2oXqouypHlVCAMOa7Wo88gR1ES8lZlpkJ7ocMgaeT4BwTN91Qm7D27K6PppAftJ5vjUioXsuDLPMSvr%2FfEO%2FQjGoXRadZ1LC2rxUP1Rq29hn5mbLdCgNXTiCMHzlXe%2BcQ%2FAyzi7mdd7mpZO0NMOtdk%2FUty0%2BWuqumQ0zaAoUULaa%2BPwI%2FLNhp7%2BxInNBNBraxTi2R2KzITMI7q0n8iCP1ZhqUcgXNWIpYLInaP0Evw0xPJDk08kgDl0Vxov8BTsedqpcxzn2DvyC4M76n9tpTNhuAYFZxRgdrKDirEbkukA1IAYg2gCcKmisl3P2xAWyk2kPg95f0HC97cVFIU1%2BGBMxiB5hy%2Ba7D2v1gdaOCvduAN0GXJbOqnNeYRhkADd7hTMIKJvk5aPqaRAr7dgK0ErTX7AHDLDz1%2FahRiEXeLPs%2FekFRFJOpNpyHv4WlzvRTuijCf7dnJBjqkAc0ny8PjPn9R7ffnzu1UkpJSLG5p6qjnPy7rjS%2BZiPKo1usSwjm%2BpD2moo7izLqrM%2BH7fEnLTSMSSEMVppv%2FhFVSkRAU5%2Bm25QsgTfJewmUt1CgXoCdXanmgSo3CSSKpFgQi6gds0ki%2BrpA7gNYguJAOgI%2FZZibIybpaObYPJt1qzKRi2iV7enYhjwMM4DWFlZ35ZNI%2Brwu3UZW%2FMmZSCtgm89zm&X-Amz-Signature=2036de06eea6edcad478b07295019de5664cf970afd3dcbd3cd61fc6f2dd17c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MOSKGK3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfYiP5T4zczCD%2F8RTTXCrOLByU9idnJjn8grYtRkQbuQIhANdlmYErnn771oVYl%2FCke8m0Z5F1YOKWpi9UZ0weRFmrKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxzxwiY3mH0Ypgh7%2F0q3AP%2FCYmNA6olUwFlzQKLiEq%2FRojqrBm7bTW%2FOS1j5oFfAW3IBeT46w%2BAhL9M7W7%2Bp2ISAz1fONava5%2BuddTio2rzgS65BaHadQa785euTOpY%2BT2Utfu6jBejC2uQtaubMkUPt6RwuCmKFemsM3id6fpNwasWvo0%2F6lm9hLqNELTGMUcIIm3QXe7nRK2oXqouypHlVCAMOa7Wo88gR1ES8lZlpkJ7ocMgaeT4BwTN91Qm7D27K6PppAftJ5vjUioXsuDLPMSvr%2FfEO%2FQjGoXRadZ1LC2rxUP1Rq29hn5mbLdCgNXTiCMHzlXe%2BcQ%2FAyzi7mdd7mpZO0NMOtdk%2FUty0%2BWuqumQ0zaAoUULaa%2BPwI%2FLNhp7%2BxInNBNBraxTi2R2KzITMI7q0n8iCP1ZhqUcgXNWIpYLInaP0Evw0xPJDk08kgDl0Vxov8BTsedqpcxzn2DvyC4M76n9tpTNhuAYFZxRgdrKDirEbkukA1IAYg2gCcKmisl3P2xAWyk2kPg95f0HC97cVFIU1%2BGBMxiB5hy%2Ba7D2v1gdaOCvduAN0GXJbOqnNeYRhkADd7hTMIKJvk5aPqaRAr7dgK0ErTX7AHDLDz1%2FahRiEXeLPs%2FekFRFJOpNpyHv4WlzvRTuijCf7dnJBjqkAc0ny8PjPn9R7ffnzu1UkpJSLG5p6qjnPy7rjS%2BZiPKo1usSwjm%2BpD2moo7izLqrM%2BH7fEnLTSMSSEMVppv%2FhFVSkRAU5%2Bm25QsgTfJewmUt1CgXoCdXanmgSo3CSSKpFgQi6gds0ki%2BrpA7gNYguJAOgI%2FZZibIybpaObYPJt1qzKRi2iV7enYhjwMM4DWFlZ35ZNI%2Brwu3UZW%2FMmZSCtgm89zm&X-Amz-Signature=9174b9a425036c81c093d42ba6d0b3b8056d15d9de6b913b29818cd46455d45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

