---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDX3KMA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnEfcseEVUl%2FCj4jbh6Cz9YaSxgurGISEfWPItegCWAIgbMUWj54PSZDxy%2BkZTjtWwzLzwsUzOJtqyOcylFKFzkQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22TwrSNSuXatsNFyrcA%2F2DcaIgJ%2Fyvz6YieClmJUrekxRwZ125eQmilEClSzT2iSVBdBpPygMO5L5P3xTGN7J8LZ5vK9o%2BTux7iNQ%2FzMHS8WhOb5KV8phqxv%2Bc9R1ku7Z34UWdzY%2F%2B1oLTw99sFh3gIsG1QvLYeHLjOyhg7tmrvBKyQYLcld8SkvwuDVnUFVDva4yBE3DAAZeoFwViFlruMXG1SpE6eeUC6gTT%2B9YCkXOqbZ2Dg%2FjFDjJgMk716TXWn17Yiky%2FTZr1bcMIhNdGgIZlVHQkA%2FlakAfzjUaVPX58GdhtOVeOnNvvFbwnAJs%2B%2F6UStr3w%2BFQV9bcjbjKUTAchbhw204IA3rzaYN7V7Xwss%2F6mphAhTOLEaC79uq74ecetXlSY4URuTcVBZA0QOK%2FCVL8yrxwxpUXrB%2FF%2BpLqHZCAE%2Bsh%2FrYWbJEKzBThmPOOrqifn59pcLyHBLPi8Uk87whNXL%2FKphmaTowbmKL4RAIyQbz%2BYy679RserqzCaXL2%2Bnw5%2FQS9TxWPvOKbr0JsVdw8oUB4xeQxW37c1kKSdlfbPAq4KWqzeJxz7XoXqDMzltr9HCbrAl%2FbvwlD9VrD9o2AeNzREKlpxBMCvGUDYHEbwNbyU5R76NF9v6bZkkQIhiRrg7%2FDVMJ6j1MkGOqUBc7tfkd0%2BD1CdW5ng7PypAQkfZwjmcibP%2BMor9C9RBGaATYAQ2I5Wm3EkJCy9fxTocs4nJ4BJ3%2FAyjQtpfZMUmjAmOdBou7n61O6xDCsmuvBwXE01ZlECARZmwDqhS0nFvk0Eq%2BSGh%2Bu7d3XsJzKNDXOqUaNZ6lTsO6l09mItAon9OU50Sx2UOJHz%2BOVZfYnK5gyjlp1IfaRtZ%2BwAiEHxd4X%2B3Nsd&X-Amz-Signature=dc86d22e02280f31469f093eae4a1b6c8c53c2187802ef6fe75690780ff5fb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GDX3KMA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNnEfcseEVUl%2FCj4jbh6Cz9YaSxgurGISEfWPItegCWAIgbMUWj54PSZDxy%2BkZTjtWwzLzwsUzOJtqyOcylFKFzkQqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM22TwrSNSuXatsNFyrcA%2F2DcaIgJ%2Fyvz6YieClmJUrekxRwZ125eQmilEClSzT2iSVBdBpPygMO5L5P3xTGN7J8LZ5vK9o%2BTux7iNQ%2FzMHS8WhOb5KV8phqxv%2Bc9R1ku7Z34UWdzY%2F%2B1oLTw99sFh3gIsG1QvLYeHLjOyhg7tmrvBKyQYLcld8SkvwuDVnUFVDva4yBE3DAAZeoFwViFlruMXG1SpE6eeUC6gTT%2B9YCkXOqbZ2Dg%2FjFDjJgMk716TXWn17Yiky%2FTZr1bcMIhNdGgIZlVHQkA%2FlakAfzjUaVPX58GdhtOVeOnNvvFbwnAJs%2B%2F6UStr3w%2BFQV9bcjbjKUTAchbhw204IA3rzaYN7V7Xwss%2F6mphAhTOLEaC79uq74ecetXlSY4URuTcVBZA0QOK%2FCVL8yrxwxpUXrB%2FF%2BpLqHZCAE%2Bsh%2FrYWbJEKzBThmPOOrqifn59pcLyHBLPi8Uk87whNXL%2FKphmaTowbmKL4RAIyQbz%2BYy679RserqzCaXL2%2Bnw5%2FQS9TxWPvOKbr0JsVdw8oUB4xeQxW37c1kKSdlfbPAq4KWqzeJxz7XoXqDMzltr9HCbrAl%2FbvwlD9VrD9o2AeNzREKlpxBMCvGUDYHEbwNbyU5R76NF9v6bZkkQIhiRrg7%2FDVMJ6j1MkGOqUBc7tfkd0%2BD1CdW5ng7PypAQkfZwjmcibP%2BMor9C9RBGaATYAQ2I5Wm3EkJCy9fxTocs4nJ4BJ3%2FAyjQtpfZMUmjAmOdBou7n61O6xDCsmuvBwXE01ZlECARZmwDqhS0nFvk0Eq%2BSGh%2Bu7d3XsJzKNDXOqUaNZ6lTsO6l09mItAon9OU50Sx2UOJHz%2BOVZfYnK5gyjlp1IfaRtZ%2BwAiEHxd4X%2B3Nsd&X-Amz-Signature=6765f5a909c98e19b09d2433ba922162a2b8efdf6a4f0402b12115c548d84137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

