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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRPJGYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEz95SPKgAmfZbN81r0D4mwDEVYF2tai4tCaRknR8UMvAiAg37wbVmOrzciD7EtgqEQ2NJHnLbRUP02DaJ2%2BRctMxSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfArGwKVV0PcGPuydKtwDMSthKw6mZ4X3enoluYeS1ztiCbUiny3M%2BzSfKKomXPBitzAVCR2yR0IchF6NL75NWqRaPKG8Yt%2F41fPOVll9OsysQqQNhWX79jwhv9%2F1kUfjEew%2BoIr9UD4sceDVUKJhulYvi5dRuS8Sj2FIEg5hs0RnGf63i4SYRgqOApg1JsrtCui1j6VKxuVQbrFq7zx9FkbnD3ieavpDvN6MwTwGJ2sQ%2BMHz9XyGOGzU6owFydNY9nomwwwMcTxk6eOe%2BqzxGQslZUe5f9YDo42VHzKnyh1UzyUUrDiZlKRGIwMkpdLM5f%2BgIhxvhqIXvmXH5%2B5WIzhKUWZsFGNMkmdFWTnu%2BWFzZsVmspxdpoDi%2BO%2BZdfhghk6k91OxdsV8YiCNE%2FfCGZDP7Fr%2BZQy08E8VNaGEOntN4ErKe%2FdgzjPZ9%2B3odd65KTQOBOWGlt4zeP7sNnivRUcMHMYY0sBaov6lvM7KFcDOtOmbVH4mZc1mddoGV4fnvVeB%2FTzNltySthge03FBMcXctapnJdsD%2B8gosC4bet3UxhB6unO1DnaFQDV8QFfG0K16O2O4sFGfamHurD7nZ5hPQfS5%2F6pFDB1sTMFOlI98kNS6xRhqFT9QoSHvLfYhXg17xHtCLqT4AUow55q%2FyQY6pgHWWpcauG7OME%2BOoSxTBw76HhqZKN%2Bd8%2Fv%2FstCtNsSYIpZJPTveeA74Q5qfZDs2k3TDLHNEoMVBDXVobQgPNhr4bJvrEdVP%2FjIG9wMJqxsPD8oQxhdrMINrVwOpaosNYI8900KcByyFCd7V9yAxCoo7cacJbd2RPhgq6Qhw4xcX0jPyMuGkmXjzu82kHRliaOjJG%2BSk3iCwuOv9VoUs0rGYi6Qmor3w&X-Amz-Signature=d43fc645d430c2059081276b09a01ffc4ecdbef2bc5eec733749f25e1a1a545e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRPJGYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEz95SPKgAmfZbN81r0D4mwDEVYF2tai4tCaRknR8UMvAiAg37wbVmOrzciD7EtgqEQ2NJHnLbRUP02DaJ2%2BRctMxSr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMfArGwKVV0PcGPuydKtwDMSthKw6mZ4X3enoluYeS1ztiCbUiny3M%2BzSfKKomXPBitzAVCR2yR0IchF6NL75NWqRaPKG8Yt%2F41fPOVll9OsysQqQNhWX79jwhv9%2F1kUfjEew%2BoIr9UD4sceDVUKJhulYvi5dRuS8Sj2FIEg5hs0RnGf63i4SYRgqOApg1JsrtCui1j6VKxuVQbrFq7zx9FkbnD3ieavpDvN6MwTwGJ2sQ%2BMHz9XyGOGzU6owFydNY9nomwwwMcTxk6eOe%2BqzxGQslZUe5f9YDo42VHzKnyh1UzyUUrDiZlKRGIwMkpdLM5f%2BgIhxvhqIXvmXH5%2B5WIzhKUWZsFGNMkmdFWTnu%2BWFzZsVmspxdpoDi%2BO%2BZdfhghk6k91OxdsV8YiCNE%2FfCGZDP7Fr%2BZQy08E8VNaGEOntN4ErKe%2FdgzjPZ9%2B3odd65KTQOBOWGlt4zeP7sNnivRUcMHMYY0sBaov6lvM7KFcDOtOmbVH4mZc1mddoGV4fnvVeB%2FTzNltySthge03FBMcXctapnJdsD%2B8gosC4bet3UxhB6unO1DnaFQDV8QFfG0K16O2O4sFGfamHurD7nZ5hPQfS5%2F6pFDB1sTMFOlI98kNS6xRhqFT9QoSHvLfYhXg17xHtCLqT4AUow55q%2FyQY6pgHWWpcauG7OME%2BOoSxTBw76HhqZKN%2Bd8%2Fv%2FstCtNsSYIpZJPTveeA74Q5qfZDs2k3TDLHNEoMVBDXVobQgPNhr4bJvrEdVP%2FjIG9wMJqxsPD8oQxhdrMINrVwOpaosNYI8900KcByyFCd7V9yAxCoo7cacJbd2RPhgq6Qhw4xcX0jPyMuGkmXjzu82kHRliaOjJG%2BSk3iCwuOv9VoUs0rGYi6Qmor3w&X-Amz-Signature=176652e6bf7ba5910416a4f531f09960ec79c572929c2de5a3aefbe10d5fd0e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

