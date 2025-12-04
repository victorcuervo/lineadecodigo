---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOPDUOB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIB3Y94KPiosiuYEQa%2FePkbiyZeoXKi31BfE%2Fqhc6viTAAiAwbkB4S%2FQdYbzicPPUwxU2z2X591q5FXyxqlhud6a1KCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMFDWKhtiM%2FpvXQAk8KtwD2vxFMKs%2BHM9KwTnx3wNvgCZCBErinXRIxIe4xyO5F7QiDbwrmHHfr5CwLS%2BQf0uJk8N%2FQuaDJsMjM%2FWCEWKsnIuNRzOJpJD3xo1izRDhedOIm8DJ6LzkUftsdvvGXLKtZc7Nuzd8mMjb77%2BQDjb7EVX9RcXz%2Bk%2F1hHIcS5e72TaA7FamYxc89HgI3cM%2B7ombYZrufFtqHmkYwH7zHdOtELdHrAWKFTnnSy9LPLEC0bhr6%2Bs9lCq50pxS18QrkosiYrU1kL1rwdoUZaIsYIhcoFwAq%2FyTe8NiIGK2f2OPqhj%2BGI%2B1an%2BKReWBM%2BnAFYRE6fWDln9Fsjyzvw3xPoAFwGSvGIOGJD0w3rBKhWbTus7lz7%2B3GS6iRNJz2U2q5UJSRgH2yGBGtidBUU9u8TWJXYn4UbS%2B33%2FTCjkzE51Nwrp0apDDkMj7%2BNTwxJD5ItciZ3vFClfFpHjLOLTQrATbqJOj3uyegAlReg5ZEpE9vzRxPyrmX4cThhx9959UyXB36%2BfrynNtuxkSHER6bIq8cFmY%2B4qJoUYCj5OKc1AvzGO%2Bem7VJroggXt5PZrxfD%2BtHpgVakChBQ0NomSUFDO0tvWqLxbE3qio2iJew9LOPpHTola61yxOKnO2k%2FQw5OjEyQY6pgHetAERy7dsqOowXrHHUaE17SIGj%2FyTsW7cZmvlcmLESQ5VDFI5CHAMc4CS%2F1h4ZKBLyUAFdBXA6cjspCakcfNNLpxXs3Nza9Z3wtpVxyYP%2B3zptQOAme%2FZWgNF2J9nIOWVqEeVgV9J4QMkrcyK6nc87xTO%2FsgZr6e6GfUARP1ggaq1gyOadEYI80MIJ6ymtXH%2BLST1iHtdycuIa2bnpJ8rKaZOcRKf&X-Amz-Signature=724a5b5f674a1ee092b93d5de41bd983f6f91fa795a266de7069ff2094eaaa40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KOPDUOB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIB3Y94KPiosiuYEQa%2FePkbiyZeoXKi31BfE%2Fqhc6viTAAiAwbkB4S%2FQdYbzicPPUwxU2z2X591q5FXyxqlhud6a1KCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMFDWKhtiM%2FpvXQAk8KtwD2vxFMKs%2BHM9KwTnx3wNvgCZCBErinXRIxIe4xyO5F7QiDbwrmHHfr5CwLS%2BQf0uJk8N%2FQuaDJsMjM%2FWCEWKsnIuNRzOJpJD3xo1izRDhedOIm8DJ6LzkUftsdvvGXLKtZc7Nuzd8mMjb77%2BQDjb7EVX9RcXz%2Bk%2F1hHIcS5e72TaA7FamYxc89HgI3cM%2B7ombYZrufFtqHmkYwH7zHdOtELdHrAWKFTnnSy9LPLEC0bhr6%2Bs9lCq50pxS18QrkosiYrU1kL1rwdoUZaIsYIhcoFwAq%2FyTe8NiIGK2f2OPqhj%2BGI%2B1an%2BKReWBM%2BnAFYRE6fWDln9Fsjyzvw3xPoAFwGSvGIOGJD0w3rBKhWbTus7lz7%2B3GS6iRNJz2U2q5UJSRgH2yGBGtidBUU9u8TWJXYn4UbS%2B33%2FTCjkzE51Nwrp0apDDkMj7%2BNTwxJD5ItciZ3vFClfFpHjLOLTQrATbqJOj3uyegAlReg5ZEpE9vzRxPyrmX4cThhx9959UyXB36%2BfrynNtuxkSHER6bIq8cFmY%2B4qJoUYCj5OKc1AvzGO%2Bem7VJroggXt5PZrxfD%2BtHpgVakChBQ0NomSUFDO0tvWqLxbE3qio2iJew9LOPpHTola61yxOKnO2k%2FQw5OjEyQY6pgHetAERy7dsqOowXrHHUaE17SIGj%2FyTsW7cZmvlcmLESQ5VDFI5CHAMc4CS%2F1h4ZKBLyUAFdBXA6cjspCakcfNNLpxXs3Nza9Z3wtpVxyYP%2B3zptQOAme%2FZWgNF2J9nIOWVqEeVgV9J4QMkrcyK6nc87xTO%2FsgZr6e6GfUARP1ggaq1gyOadEYI80MIJ6ymtXH%2BLST1iHtdycuIa2bnpJ8rKaZOcRKf&X-Amz-Signature=48d31b97ae7ca31bc9523a741f9e60047e2cb42515b8370e5daf742db60c1f2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

