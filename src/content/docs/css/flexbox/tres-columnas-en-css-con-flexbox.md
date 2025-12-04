---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7V3OBY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEHV5Q2fijj2zSQkRMR75GcgA2fspZcJo5IOdbrsH4RPAiAHqB%2Frqfeuv38soKxLmQTiTkQBQk744pp6zSCph3I%2B7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMmhNiEGgtgDekzkkMKtwDZlpR43LpAK0iElWyD6xn%2BY2Vn7pygcyewc5AHkYGyTZ7KSCvoAPHv9Grw18BGt%2Fql6CU%2BjK6XUJ5QmoT1wYLJLGCCLqj4%2FJgth2tcUwowyDxMfXGo2mqRPnWPrbBwBCOx%2BSy%2BSIOhhyTig2MSoURNt7Duapy561NZj031z5bENZd8xbV735aTzsTMkb8cCVleGhna1lJbPT1zfuZRlcg%2FCgYAy6jf2hwGMxJEAPlt0xe2NI4naG%2BrAXwK%2FxjSLlfEARtAloHuzgbUJTmm8kGg8TnCevnWRevFioK7aSAyLTJSc2hdL0bnIBrr1HnCs1CMkHXbvt3WmN8EUVBgNbhZOP6sBS5NolOsZkk8tSWIny8RBsJJkTp9mtyUdI8KpP3traAAi%2BU7rHAsjVFU1Bd8zr3C9hstXEXQ%2FTXmVuopVCo5J%2FrY0HMUY1Ce7RRXUXMe2EQ%2FA%2FvJX25LIJI61%2B9T6GwIlg8t7HsgemQuXQIbFdV6DtlfItg%2BK9JKvQs%2BF8iwwDh0kJbkE74Ntte0gLFAO%2FhGyh2188Kljs9Ht%2BWMrb%2FxGw37dXoiXZQiq5VV3V4sMkAB71XMzLB%2BzzbmtHTv1zevxC%2FXPX8yM7jGLrifpn7HHFQVNci%2FjbE%2BnMwkZXDyQY6pgH3MJmdIDy%2BAiLVgdsuhLyBe7Wk6Dz2b%2FJXU3EKumjENVsXIKTMtY0IuD5rcTwWx3eU%2BQmzI3XsyQAUM%2FhGhM8acqiX8hN%2FwjgjGyL4lCsZUnxdlqso%2F0lAyGV30nvL3CbapAp2M0OL4qrwW49HfMWwsOKGA%2FbUMkKraSo%2Bz8UFeb7AlhdLD6Wm4nZVNyxa8p3O1wcbKzKa%2FkP5c9u38MFhdpeGiXKE&X-Amz-Signature=d6f4daaf2be97d35e4bf007f6362a0a6327d7d239cd3f7d7a727768bfeb6c8ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG7V3OBY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEHV5Q2fijj2zSQkRMR75GcgA2fspZcJo5IOdbrsH4RPAiAHqB%2Frqfeuv38soKxLmQTiTkQBQk744pp6zSCph3I%2B7yr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMmhNiEGgtgDekzkkMKtwDZlpR43LpAK0iElWyD6xn%2BY2Vn7pygcyewc5AHkYGyTZ7KSCvoAPHv9Grw18BGt%2Fql6CU%2BjK6XUJ5QmoT1wYLJLGCCLqj4%2FJgth2tcUwowyDxMfXGo2mqRPnWPrbBwBCOx%2BSy%2BSIOhhyTig2MSoURNt7Duapy561NZj031z5bENZd8xbV735aTzsTMkb8cCVleGhna1lJbPT1zfuZRlcg%2FCgYAy6jf2hwGMxJEAPlt0xe2NI4naG%2BrAXwK%2FxjSLlfEARtAloHuzgbUJTmm8kGg8TnCevnWRevFioK7aSAyLTJSc2hdL0bnIBrr1HnCs1CMkHXbvt3WmN8EUVBgNbhZOP6sBS5NolOsZkk8tSWIny8RBsJJkTp9mtyUdI8KpP3traAAi%2BU7rHAsjVFU1Bd8zr3C9hstXEXQ%2FTXmVuopVCo5J%2FrY0HMUY1Ce7RRXUXMe2EQ%2FA%2FvJX25LIJI61%2B9T6GwIlg8t7HsgemQuXQIbFdV6DtlfItg%2BK9JKvQs%2BF8iwwDh0kJbkE74Ntte0gLFAO%2FhGyh2188Kljs9Ht%2BWMrb%2FxGw37dXoiXZQiq5VV3V4sMkAB71XMzLB%2BzzbmtHTv1zevxC%2FXPX8yM7jGLrifpn7HHFQVNci%2FjbE%2BnMwkZXDyQY6pgH3MJmdIDy%2BAiLVgdsuhLyBe7Wk6Dz2b%2FJXU3EKumjENVsXIKTMtY0IuD5rcTwWx3eU%2BQmzI3XsyQAUM%2FhGhM8acqiX8hN%2FwjgjGyL4lCsZUnxdlqso%2F0lAyGV30nvL3CbapAp2M0OL4qrwW49HfMWwsOKGA%2FbUMkKraSo%2Bz8UFeb7AlhdLD6Wm4nZVNyxa8p3O1wcbKzKa%2FkP5c9u38MFhdpeGiXKE&X-Amz-Signature=ac560102fa228c545e2e1d5cfdeb3c48d95deb1584e252f7a400ba76261bbfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

