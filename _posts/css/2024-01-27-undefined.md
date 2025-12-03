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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VFB6KO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCX6%2FCTTSEo%2FpnSJjNQ7Db9wU7EQmAi8BwzrTZRnNor1gIgFpsggB%2Fp9Gwm025mi3CwsZXWt%2FodYnrTA5QRWZbPxBYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFV5gXbJOVnORwXQVSrcA8d%2FIWbuQSh7zfCMzQkXvoRpji7FvW9am6l1Tq26NkAYVU6KlVrjYEz4e4F6ZcEwmF06o27FKtLtQLobsSQ4acEsPK3A6Kpjul4UojTZXieFqxz5Hlz6ETgxzVVCKkFHGjeoMUsRfq1PyxjUL1zaPksj91GSxEQwVyMhMamsN4fSLV4xLpLxrZ1ZfF9n7JwKeuXAtRPjNQT2ZYb0Q87orA2Hp4g5FkxFlxVjjbPFXUzMw3PZx1u2LMwz1XGNGF%2B%2FAZaH36zdNMJxCyVd8WNO7J8T%2BY2wqURo%2BlOzHojPkLCXn7eVL9iVrO%2B%2F7DI%2Fxbwf46AvQCKEQsxQVYnbBaSOEQcBVZSdb1AZ47S8myo1S3hf1OMIu%2F03uGJuIXGPt6AQ1Yp83dAzapAjl%2FBaL%2BJGJBrBoqdIXYdfxalPDwf3BrnTv4QqAxVRKBcvnfHFRzfRFsDNP1CBh9Jhn1va4cjm5k%2BzowaG3NOGOI8%2FMko0t7tADWUBgiwMvPBM4EwjNOVJ2Tgma9%2FVbrea0%2Fo8unddnR9qT0pU1jaKUGVW%2Bohc0fjQiqn4RpGazo%2FgOUhtkjY5iqj0sbDJ4PjGczwGvH1re5Jw%2FDK36bZQc4SiKgpaNqilGuKVkm%2BX9teivhayMJiIwckGOqUByhJF9i3bRvMIQtMYKIJD3Xu7KCRlN%2FzPFhboPnZP4YfdMMW%2BdSmfKqOXXO7mdG8prcZmPyWvlskIpHGZzgQXVqAHUoR4YwNXEWRxkVkB9htpYDeWRYeRB%2FoYzt8gEKDP0l%2BUFHlx6Ztx2wOs1og3xB5LqDVNwI6MWX%2BLKMMtBZL7F1YapBbGgyAHPI9XT57v%2Bf9AyAEI2kLFegbpoW4Dp9TJ1gN%2B&X-Amz-Signature=bf3c107adb4d228dfd5bd3a1ec1ffcf976cd29a3d4e0530e9eca778ce795a3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2VFB6KO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCX6%2FCTTSEo%2FpnSJjNQ7Db9wU7EQmAi8BwzrTZRnNor1gIgFpsggB%2Fp9Gwm025mi3CwsZXWt%2FodYnrTA5QRWZbPxBYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDFV5gXbJOVnORwXQVSrcA8d%2FIWbuQSh7zfCMzQkXvoRpji7FvW9am6l1Tq26NkAYVU6KlVrjYEz4e4F6ZcEwmF06o27FKtLtQLobsSQ4acEsPK3A6Kpjul4UojTZXieFqxz5Hlz6ETgxzVVCKkFHGjeoMUsRfq1PyxjUL1zaPksj91GSxEQwVyMhMamsN4fSLV4xLpLxrZ1ZfF9n7JwKeuXAtRPjNQT2ZYb0Q87orA2Hp4g5FkxFlxVjjbPFXUzMw3PZx1u2LMwz1XGNGF%2B%2FAZaH36zdNMJxCyVd8WNO7J8T%2BY2wqURo%2BlOzHojPkLCXn7eVL9iVrO%2B%2F7DI%2Fxbwf46AvQCKEQsxQVYnbBaSOEQcBVZSdb1AZ47S8myo1S3hf1OMIu%2F03uGJuIXGPt6AQ1Yp83dAzapAjl%2FBaL%2BJGJBrBoqdIXYdfxalPDwf3BrnTv4QqAxVRKBcvnfHFRzfRFsDNP1CBh9Jhn1va4cjm5k%2BzowaG3NOGOI8%2FMko0t7tADWUBgiwMvPBM4EwjNOVJ2Tgma9%2FVbrea0%2Fo8unddnR9qT0pU1jaKUGVW%2Bohc0fjQiqn4RpGazo%2FgOUhtkjY5iqj0sbDJ4PjGczwGvH1re5Jw%2FDK36bZQc4SiKgpaNqilGuKVkm%2BX9teivhayMJiIwckGOqUByhJF9i3bRvMIQtMYKIJD3Xu7KCRlN%2FzPFhboPnZP4YfdMMW%2BdSmfKqOXXO7mdG8prcZmPyWvlskIpHGZzgQXVqAHUoR4YwNXEWRxkVkB9htpYDeWRYeRB%2FoYzt8gEKDP0l%2BUFHlx6Ztx2wOs1og3xB5LqDVNwI6MWX%2BLKMMtBZL7F1YapBbGgyAHPI9XT57v%2Bf9AyAEI2kLFegbpoW4Dp9TJ1gN%2B&X-Amz-Signature=0823ca45d51124667195e412933d1f688314207105b9fa559579e934d9896c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

