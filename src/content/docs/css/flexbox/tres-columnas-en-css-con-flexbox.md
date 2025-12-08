---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5OSGNB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVCp0H9mE1xq6aTOvBU71N%2F%2FjtJNvm4r8czvh22CrunAiAHFlN6qJhdlkoZ5sDFWLQOw2%2FBUYGzfMZxH6AEqnEy8yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlGZSuH%2BrW0fOlezKtwDC%2BaHrJhNhTQxf2qyqGEfh21efzKjIi54yfvob6rl%2BVWL5sQli60274%2BM7lUTBFX1aha5ihffSH%2BYwCH%2F7Ca8ZDW1gkgV%2BjXRDJ4sXB1sRIFT2l6mVQnSEcJIaP%2BQzKGcHKWr4O6m8UTG1S2ymgGLPd3UnbRhyp%2FqMoFUQ8sVKB%2FB67EB7G5cDbS7N7jDySSZRSF7YY9jjReTwseEdPfkcw78w%2FG7tEcmuGBSiEXk3TRSO%2FE6HDM7cEgcjvpzOEEnBbYAloQ9E5OCOpiMCBjVAKVfsSy7Mgsw4%2FSBvnqCHKZPlqjctvlX1XTxMCP9GIbifRrNw2MKu7ua3vLSKBaekC6I6iHQPF%2BIo56Cy%2Fr6V75wmXod88w672QD8O1XKtxeTXUyEPbQq3Y2Wh8tXNtCuexGJeJaUGrFawEKNcZJu9iU4DaM8hEZKgR7XKgRWKxs5j%2F1F7jSAszeu%2F3Rj3hp4lt9atHDJd4J21dvRR1xHZKKhzvxQLCdINb8tfdabs36ej%2FdgtP06gSJs36kffUZzrripGM4coaClDrEtrKEtRLJDhSNLoHElSGWQik%2FrjN1oqQ1ShekgLgXvM%2Fyrg0ZVV2SVuCoTdO2A2BZFyhj1TU5OqevwhLbHxN9yY0wkoDdyQY6pgFgM1o1441lLQ%2ByJd9p5QwGsbVFOSeEK%2FUJ8jbYSvnyE%2B55S7xEpmNUo0aVgZjzdLwb1TMJx2ES6gUmwttrVou8tDJcs6TzfGo7OOKSSS%2BL%2FB4C4gYH%2BFxzn8HESIAO1Zg9OECVm1Z%2Bzv4lCdNVfuWnKSujUD14ogvA%2F4McJLXQpOriQdX2Zal0c%2BbPlDxD7b7wAs8YCoek5NfLzSKeeJBJP8WWw%2FHO&X-Amz-Signature=332af2557461763c4cd5981c70f7fff2c5b6cc54b788f0147c2723c49d190af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT5OSGNB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVCp0H9mE1xq6aTOvBU71N%2F%2FjtJNvm4r8czvh22CrunAiAHFlN6qJhdlkoZ5sDFWLQOw2%2FBUYGzfMZxH6AEqnEy8yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGlGZSuH%2BrW0fOlezKtwDC%2BaHrJhNhTQxf2qyqGEfh21efzKjIi54yfvob6rl%2BVWL5sQli60274%2BM7lUTBFX1aha5ihffSH%2BYwCH%2F7Ca8ZDW1gkgV%2BjXRDJ4sXB1sRIFT2l6mVQnSEcJIaP%2BQzKGcHKWr4O6m8UTG1S2ymgGLPd3UnbRhyp%2FqMoFUQ8sVKB%2FB67EB7G5cDbS7N7jDySSZRSF7YY9jjReTwseEdPfkcw78w%2FG7tEcmuGBSiEXk3TRSO%2FE6HDM7cEgcjvpzOEEnBbYAloQ9E5OCOpiMCBjVAKVfsSy7Mgsw4%2FSBvnqCHKZPlqjctvlX1XTxMCP9GIbifRrNw2MKu7ua3vLSKBaekC6I6iHQPF%2BIo56Cy%2Fr6V75wmXod88w672QD8O1XKtxeTXUyEPbQq3Y2Wh8tXNtCuexGJeJaUGrFawEKNcZJu9iU4DaM8hEZKgR7XKgRWKxs5j%2F1F7jSAszeu%2F3Rj3hp4lt9atHDJd4J21dvRR1xHZKKhzvxQLCdINb8tfdabs36ej%2FdgtP06gSJs36kffUZzrripGM4coaClDrEtrKEtRLJDhSNLoHElSGWQik%2FrjN1oqQ1ShekgLgXvM%2Fyrg0ZVV2SVuCoTdO2A2BZFyhj1TU5OqevwhLbHxN9yY0wkoDdyQY6pgFgM1o1441lLQ%2ByJd9p5QwGsbVFOSeEK%2FUJ8jbYSvnyE%2B55S7xEpmNUo0aVgZjzdLwb1TMJx2ES6gUmwttrVou8tDJcs6TzfGo7OOKSSS%2BL%2FB4C4gYH%2BFxzn8HESIAO1Zg9OECVm1Z%2Bzv4lCdNVfuWnKSujUD14ogvA%2F4McJLXQpOriQdX2Zal0c%2BbPlDxD7b7wAs8YCoek5NfLzSKeeJBJP8WWw%2FHO&X-Amz-Signature=6d026dd5d7bde2d04258eec126eb181ff8e8bb0b6a7b543db96c88f7f99798e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

