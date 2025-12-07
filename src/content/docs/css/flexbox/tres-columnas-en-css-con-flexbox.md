---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQE45WC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxh1fiKOi2BVIlza0s2wzRboSCeUvslhqOG67mmWdn%2FAiAGxiQnIXxty%2FXywWm3Q0Y93lMjp4n%2FALxYG9xRHjncRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5MHe7sCTqz%2B%2FjD0KtwDnCzVCqjBPczZUtqeh5evOcx2YhHpQeg%2FvHxhkjjEq5bFUGs5zOPfF4nKiMMCShaU8Wiq%2FcaSNS%2BN%2Be21VudLD%2Fu%2Bdbby2psoDJp3BIgEU64CSo9KUKqvnnuUMaGi6QG7tDwxxrhVe4Y61jpDjx8OX2pSSEyROXNsJbUmxT9NFyiqb%2FozTYFrjSbyYOQVfnaYg2NhHYQ%2BsrScC3mKv0oQkiCjqWZ%2BqkpE3MjZxZ0544iFunGbyZou3a48faDhx0tRBoUIE1KMngLOfm7FYG23QwD2e4jg6yNUD28GGSe0twJ9cG1Dn0S%2BYoH4L4DoLrgLaUQcSJmXOtZ%2BCAAUqxnf3iH5Hi%2BZesty2askZFiN62PQE4ioMNr5rxPapX6jrQtlz%2BDOAiSmVdfpVX%2BDQiyo7Wz%2B%2FDKupn8cTiORXMZ%2BXepNVzliLHGimBZYlAXOxzcXbBJewm1eb5Ie4%2BS7gtko%2B8V%2FO92xUHl2Mg2%2BdKjmXXb67scy9lX4dYVMqF8Z84UVWNiZl1CXwknU0m%2B1aHg5KOuwWBEmpuyDrjQjJZxsLqBua6T3vQwapauUohuQVgCZJ%2BiDdi5oVXRybVEGJEw5VCSG8BBsoW%2B5YgkCYi1qSeIgqBbrtMmZ5r%2FEq00w0ZnVyQY6pgG6XMUD27THzPymUggl1kNJybv0rQYpAThp4384L2t2zQijhyygmf0aWoO4M%2FjzBGN7qGUA%2BzNPw6aYY0TBWsmkHYBRze5oAVNHfqhR20vtL0XlLmUkMHiUymwfsEtyeAD5qhXpEHKaujr3FO1UsBvt1yByRTXApxbG0WXkris6YjpArnqAT3hQ%2BrLic3bloOdJL%2BUY%2FrlrIW%2FwCpmTJSWv0duTwSXD&X-Amz-Signature=39846b3edc59aa9ff418f36b471c6b885abdfd32e05200384fe35f1cb70eca38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FQE45WC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxh1fiKOi2BVIlza0s2wzRboSCeUvslhqOG67mmWdn%2FAiAGxiQnIXxty%2FXywWm3Q0Y93lMjp4n%2FALxYG9xRHjncRiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT5MHe7sCTqz%2B%2FjD0KtwDnCzVCqjBPczZUtqeh5evOcx2YhHpQeg%2FvHxhkjjEq5bFUGs5zOPfF4nKiMMCShaU8Wiq%2FcaSNS%2BN%2Be21VudLD%2Fu%2Bdbby2psoDJp3BIgEU64CSo9KUKqvnnuUMaGi6QG7tDwxxrhVe4Y61jpDjx8OX2pSSEyROXNsJbUmxT9NFyiqb%2FozTYFrjSbyYOQVfnaYg2NhHYQ%2BsrScC3mKv0oQkiCjqWZ%2BqkpE3MjZxZ0544iFunGbyZou3a48faDhx0tRBoUIE1KMngLOfm7FYG23QwD2e4jg6yNUD28GGSe0twJ9cG1Dn0S%2BYoH4L4DoLrgLaUQcSJmXOtZ%2BCAAUqxnf3iH5Hi%2BZesty2askZFiN62PQE4ioMNr5rxPapX6jrQtlz%2BDOAiSmVdfpVX%2BDQiyo7Wz%2B%2FDKupn8cTiORXMZ%2BXepNVzliLHGimBZYlAXOxzcXbBJewm1eb5Ie4%2BS7gtko%2B8V%2FO92xUHl2Mg2%2BdKjmXXb67scy9lX4dYVMqF8Z84UVWNiZl1CXwknU0m%2B1aHg5KOuwWBEmpuyDrjQjJZxsLqBua6T3vQwapauUohuQVgCZJ%2BiDdi5oVXRybVEGJEw5VCSG8BBsoW%2B5YgkCYi1qSeIgqBbrtMmZ5r%2FEq00w0ZnVyQY6pgG6XMUD27THzPymUggl1kNJybv0rQYpAThp4384L2t2zQijhyygmf0aWoO4M%2FjzBGN7qGUA%2BzNPw6aYY0TBWsmkHYBRze5oAVNHfqhR20vtL0XlLmUkMHiUymwfsEtyeAD5qhXpEHKaujr3FO1UsBvt1yByRTXApxbG0WXkris6YjpArnqAT3hQ%2BrLic3bloOdJL%2BUY%2FrlrIW%2FwCpmTJSWv0duTwSXD&X-Amz-Signature=e24796a63e5986cfdcdb0eb7ac436abe6fdad7a07bea2d5cca154153b8d5ff36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

