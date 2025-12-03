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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNKDTHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHtbQ31FeBHg%2BdZTsjSiCuIjkrNDmfJcqWKf5G6Ko8YPAiA5rcZ0c3%2FS0iii9YDgIWDWdlYR0g%2FDJeLbxVpD6wvttyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLpbkaF4uTITgC4d4KtwDgrUhqoZGF9IQvrCqhlZDfm1UIcvg3MSvUWcEzL1tQgeJPMelP0S7gtknzPq899p8Pmfb2FgcHqqRgY%2FtPLIZpqFIjTQBFGXwRkMpcI5aGH3lEZr7KvSx0d8jYNKDmHtLgOC0BRg%2FcpwThgPks1nc4NRD%2F45qSpXwGjTf%2F1VL2RFUQ7MPzQTDw9ZQvtjVIcxKhX4pNL7rvqkDLGqdMojgV8rosKWZbJzoYFzbIfnpXPgiaeujBs5K0zBkw0sXL8rTVBXQHZ0GlST1SDrI083gTPcWKnyizVB2plEt38IwBn8t5SXCNMvYFwnehHz80M2tNVPpnEt4PZJFV4aATvkusmd7GI7Uzt%2FZBhmpGblyw5pZFRigIg6ujn8y70ObwqBuQwIdc8BXuwJLuaxpc4m7OkXIFAeJ7UzdcGC2fvjoSs2XGZi6ds5ht2IakKfw2HgUr6Q6K9h%2BBkOXXfGoQsb2wTPepOtZupx8Z702B11ITtjJnOW5iVZWIxJbLEyR8O6wREGiinV9dcrGoH477G6DxikdGVfATnH0TdLtYcEJsAiOlISyIo9I7KLJjDl%2FeiofKe7tp2AL4IlttRnSw5E942ABnV4CKxe9KrjjFLLYzHfmdmSMFH5FhCjWEAMwipu%2FyQY6pgFwwvtFtsbAiNIx520UkPDUNjzUp5gsO%2BKW9y3ReLxfau1QeowoEGmP%2FHoWq6mQTlGMmGE9ZnaGUAEBub4ALps0ohBO%2BAAEM7SvOEBSWNzWsfTzbsInjGUniczttXjAcX4uC%2FJpByR1ZUFEfrebXEwSWJh6Boo8U0AJeSiagxWwVhwwbHCsxgNDGX%2FF6OtPKAWmySqxo7Yne6r3lBNskw3VhOWdj8ap&X-Amz-Signature=5aef7a7e53aa0101d99cbb97275799d66e3c19025b44f8857496787072299dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYNKDTHY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIHtbQ31FeBHg%2BdZTsjSiCuIjkrNDmfJcqWKf5G6Ko8YPAiA5rcZ0c3%2FS0iii9YDgIWDWdlYR0g%2FDJeLbxVpD6wvttyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLpbkaF4uTITgC4d4KtwDgrUhqoZGF9IQvrCqhlZDfm1UIcvg3MSvUWcEzL1tQgeJPMelP0S7gtknzPq899p8Pmfb2FgcHqqRgY%2FtPLIZpqFIjTQBFGXwRkMpcI5aGH3lEZr7KvSx0d8jYNKDmHtLgOC0BRg%2FcpwThgPks1nc4NRD%2F45qSpXwGjTf%2F1VL2RFUQ7MPzQTDw9ZQvtjVIcxKhX4pNL7rvqkDLGqdMojgV8rosKWZbJzoYFzbIfnpXPgiaeujBs5K0zBkw0sXL8rTVBXQHZ0GlST1SDrI083gTPcWKnyizVB2plEt38IwBn8t5SXCNMvYFwnehHz80M2tNVPpnEt4PZJFV4aATvkusmd7GI7Uzt%2FZBhmpGblyw5pZFRigIg6ujn8y70ObwqBuQwIdc8BXuwJLuaxpc4m7OkXIFAeJ7UzdcGC2fvjoSs2XGZi6ds5ht2IakKfw2HgUr6Q6K9h%2BBkOXXfGoQsb2wTPepOtZupx8Z702B11ITtjJnOW5iVZWIxJbLEyR8O6wREGiinV9dcrGoH477G6DxikdGVfATnH0TdLtYcEJsAiOlISyIo9I7KLJjDl%2FeiofKe7tp2AL4IlttRnSw5E942ABnV4CKxe9KrjjFLLYzHfmdmSMFH5FhCjWEAMwipu%2FyQY6pgFwwvtFtsbAiNIx520UkPDUNjzUp5gsO%2BKW9y3ReLxfau1QeowoEGmP%2FHoWq6mQTlGMmGE9ZnaGUAEBub4ALps0ohBO%2BAAEM7SvOEBSWNzWsfTzbsInjGUniczttXjAcX4uC%2FJpByR1ZUFEfrebXEwSWJh6Boo8U0AJeSiagxWwVhwwbHCsxgNDGX%2FF6OtPKAWmySqxo7Yne6r3lBNskw3VhOWdj8ap&X-Amz-Signature=225bb96b957a2cc0c44b2c88ac9866df70a9674c756517323187c05fb74ecca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

