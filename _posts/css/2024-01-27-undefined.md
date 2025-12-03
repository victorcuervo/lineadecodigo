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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUD6DQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAJ5DLh%2FTI%2BFqwZPX5lVz%2FIITWpqD7U%2FePeUYziW8iNDAiACOQMKwJUzPO%2F16I65oG6e1sdWh6SXNgUSELdhlba75ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMeVmE2j3yy0Nol8WIKtwD7%2FneYfGiFiIQrrftqJQpKJNs0DEVpITlqZaiSk2GsaaRmdQWv8dbpa3o5g8kmy5cXt5HxKYTnzF9%2FRrBDwCOoRLhAuSWptxFc0qLLyR37cvhnia92JqDflTkl%2FDqjB5GPp5h2r1hOM6fC%2Bzn%2BWrufwknAsDb73ele2RsRnQIq8YKa7XgVpo38kuke55x18VjbM8G9GQSvkPO8HPGdWpon9zp%2BFLVEu3yROpD4XbHtucJq7c2GtQPmZIGSnHtpxntPRRzBehV9AEJm1z3%2BEYZAJkfrePKo43ln7gn82n7wV1iIzXGN7mOeCYZ7XbFvkVgoFHWcGNDgw3kF4uMdDVutJ2798Kyt0Dep%2BGDocxHRkpcZ4%2FJVs9g4OMp8xtlRGsL5ie0FgGIZlfczdG4koILMxmDLkcRWkBFFHLHvb6LNRKo7fgn1vCV2JxH4AHmCO7ZFbqUfTLvlzkfGcdBSo2ealF5oKim9ylOsBrVeyPYx3hySpe3Qs2NSdzdH9pYZAEb2xG2zlNuPZwd%2FSlHB5TrX6%2BmIGIPqbo4aziPQAmu%2BZNOb3x2tHn1nb2vPj6kOKy6CVnGlm5z3SqN%2FM7ZtzAuwdb%2BtKZUxeZrSS8oMzXm%2BKePAbRp6UW95Sa5ioowp%2F%2B9yQY6pgH3ORWVlDHK1z7j8yoXtf2%2BrinSvNUS44V5KhZGzqpGPOEs52IrWxS%2BWlOO5mCGo8GkjZ0nwQTEptqE2JkWdB6kNJd6KfuYPiP2fdzpWEvSMHpCc5BPR52XsrQIuEmkx4W88HItaoAILI%2F%2BZNQVR%2BpQkx4VjNur52yz51rYDKBxGz2Wt72GuNj1pWRyzeh10nCFrTWb6rw7vZbcZ%2B1XNMdMrdV%2BLvgf&X-Amz-Signature=a3b102005ddbfb429db4b9ea6c113567ff0a72d55db16be7dced30f8a229d700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJUD6DQV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAJ5DLh%2FTI%2BFqwZPX5lVz%2FIITWpqD7U%2FePeUYziW8iNDAiACOQMKwJUzPO%2F16I65oG6e1sdWh6SXNgUSELdhlba75ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMeVmE2j3yy0Nol8WIKtwD7%2FneYfGiFiIQrrftqJQpKJNs0DEVpITlqZaiSk2GsaaRmdQWv8dbpa3o5g8kmy5cXt5HxKYTnzF9%2FRrBDwCOoRLhAuSWptxFc0qLLyR37cvhnia92JqDflTkl%2FDqjB5GPp5h2r1hOM6fC%2Bzn%2BWrufwknAsDb73ele2RsRnQIq8YKa7XgVpo38kuke55x18VjbM8G9GQSvkPO8HPGdWpon9zp%2BFLVEu3yROpD4XbHtucJq7c2GtQPmZIGSnHtpxntPRRzBehV9AEJm1z3%2BEYZAJkfrePKo43ln7gn82n7wV1iIzXGN7mOeCYZ7XbFvkVgoFHWcGNDgw3kF4uMdDVutJ2798Kyt0Dep%2BGDocxHRkpcZ4%2FJVs9g4OMp8xtlRGsL5ie0FgGIZlfczdG4koILMxmDLkcRWkBFFHLHvb6LNRKo7fgn1vCV2JxH4AHmCO7ZFbqUfTLvlzkfGcdBSo2ealF5oKim9ylOsBrVeyPYx3hySpe3Qs2NSdzdH9pYZAEb2xG2zlNuPZwd%2FSlHB5TrX6%2BmIGIPqbo4aziPQAmu%2BZNOb3x2tHn1nb2vPj6kOKy6CVnGlm5z3SqN%2FM7ZtzAuwdb%2BtKZUxeZrSS8oMzXm%2BKePAbRp6UW95Sa5ioowp%2F%2B9yQY6pgH3ORWVlDHK1z7j8yoXtf2%2BrinSvNUS44V5KhZGzqpGPOEs52IrWxS%2BWlOO5mCGo8GkjZ0nwQTEptqE2JkWdB6kNJd6KfuYPiP2fdzpWEvSMHpCc5BPR52XsrQIuEmkx4W88HItaoAILI%2F%2BZNQVR%2BpQkx4VjNur52yz51rYDKBxGz2Wt72GuNj1pWRyzeh10nCFrTWb6rw7vZbcZ%2B1XNMdMrdV%2BLvgf&X-Amz-Signature=0d64dc0f93d41ebe48d631865d9b661c1d38cf07aa3e67d1eaa8ebd20186bc87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

