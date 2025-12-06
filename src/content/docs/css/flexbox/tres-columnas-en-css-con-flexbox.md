---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODLLQY7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt%2BQaAhiyHVWtjFWKRkVEaQLM3dYyRfugk2g2dcYjpXAiEAp0l9Oj7ZDYggPO5KDPaR9Ri35PVy6A8Wz1FATn1Ak1Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPcqiAJZnOysziEhHCrcA5X%2FH5EjqkshDnztnVXpLGDjK4s6ULklAJtYo4Sa6GuuunmxQiaobbPia1bVczANB5%2Fym2Weq5QKNgGpJuWPD0FUbGthFajluPMjJyGYJ5ipgn0499FmhIqCrnc1U8dZNIWvGYyb3KLEl%2FDzlkyi0BpANghTCD0y2XLCLhqIhNAPKGOfSsiaxCQvBA%2FIUSv1vUq%2FGbLk2NYDVqtB8TUkG8ua1f7tkdXu2GXXbwq4TrHRr6G3k6qmrP4W3dElECOvJRwdPmlv1o8Wc3ykXYEH04WBu%2BKKHMm7cjNVbeHNpfJiUda15%2FuljcG%2BS%2BLvSUQycEPZHdcp36AUn%2BtKTDjeIJk3JCGkFjR6ZSLqyqnrpIL8ecI7PO9caXOJe%2F%2FisBT3All%2B3daXLbTKbtDKlEhE5Q1mOi6FRui7ZCx1prk00j7ypKDvc3cUgbRfUU43YKrfpC6swpipujAF2DYxyhGl7nE88hWYSyPTdwAWRtz68t8Udvhd2l1E20KKOGkhw4RotgGmrP2zra3%2FhXf1pk65aWWfC7cFQiFBUokrg7PAhlxv30%2BJSuPwqBEtTzS8V2Yql9LZktuiuejHVhMI9r%2B%2FrMk1rR%2FkFv%2BapRKV%2FjS2EH4%2FkUbTBtZoxE%2B2O7tBMMOm0MkGOqUBbGusAMMuYXmhDT3RYZw36qi9k2D%2FAHjwbpq7rkpwUftBBewjJfvVIZB7DtDNshNEp1S%2BjsrYk7zNFmyWGxIKGmFN0h%2BP1v%2Fgs8GI9FRbCkiGN1hbm41csY%2B2Tmuo6qfM0dI3vzN8HNoW3pI8ksd7frtzCFADQ7JUrwnWiitMI0H62GDyJ%2BHS2kupNB0drEXuOXoR8HfZ4QVoGewxKUyZ1UP74%2FGI&X-Amz-Signature=914487ead3a545ac5eeafd1dd4101ad6229955ea35280d5b4cc7bfe1d7d9990f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODLLQY7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T125410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHt%2BQaAhiyHVWtjFWKRkVEaQLM3dYyRfugk2g2dcYjpXAiEAp0l9Oj7ZDYggPO5KDPaR9Ri35PVy6A8Wz1FATn1Ak1Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPcqiAJZnOysziEhHCrcA5X%2FH5EjqkshDnztnVXpLGDjK4s6ULklAJtYo4Sa6GuuunmxQiaobbPia1bVczANB5%2Fym2Weq5QKNgGpJuWPD0FUbGthFajluPMjJyGYJ5ipgn0499FmhIqCrnc1U8dZNIWvGYyb3KLEl%2FDzlkyi0BpANghTCD0y2XLCLhqIhNAPKGOfSsiaxCQvBA%2FIUSv1vUq%2FGbLk2NYDVqtB8TUkG8ua1f7tkdXu2GXXbwq4TrHRr6G3k6qmrP4W3dElECOvJRwdPmlv1o8Wc3ykXYEH04WBu%2BKKHMm7cjNVbeHNpfJiUda15%2FuljcG%2BS%2BLvSUQycEPZHdcp36AUn%2BtKTDjeIJk3JCGkFjR6ZSLqyqnrpIL8ecI7PO9caXOJe%2F%2FisBT3All%2B3daXLbTKbtDKlEhE5Q1mOi6FRui7ZCx1prk00j7ypKDvc3cUgbRfUU43YKrfpC6swpipujAF2DYxyhGl7nE88hWYSyPTdwAWRtz68t8Udvhd2l1E20KKOGkhw4RotgGmrP2zra3%2FhXf1pk65aWWfC7cFQiFBUokrg7PAhlxv30%2BJSuPwqBEtTzS8V2Yql9LZktuiuejHVhMI9r%2B%2FrMk1rR%2FkFv%2BapRKV%2FjS2EH4%2FkUbTBtZoxE%2B2O7tBMMOm0MkGOqUBbGusAMMuYXmhDT3RYZw36qi9k2D%2FAHjwbpq7rkpwUftBBewjJfvVIZB7DtDNshNEp1S%2BjsrYk7zNFmyWGxIKGmFN0h%2BP1v%2Fgs8GI9FRbCkiGN1hbm41csY%2B2Tmuo6qfM0dI3vzN8HNoW3pI8ksd7frtzCFADQ7JUrwnWiitMI0H62GDyJ%2BHS2kupNB0drEXuOXoR8HfZ4QVoGewxKUyZ1UP74%2FGI&X-Amz-Signature=c4a84c18ddc904769df5cc11494c0f8e1860f00de3dd9ff41021cd06352d7f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

