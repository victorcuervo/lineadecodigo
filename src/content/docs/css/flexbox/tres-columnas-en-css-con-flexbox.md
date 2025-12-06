---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6SRHOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD999RWIR%2FD2p6VlFxJUtqcToG0FFed4GDUMVNy7dbTewIhAID3z3ctGC%2B%2FIVh%2FQGv6zelzPS1UNKSnLiiQZE8qIZ4OKv8DCHEQABoMNjM3NDIzMTgzODA1Igy6ROPSU0PCMicXDGsq3APGrKYK2Tm4sFU6a4fFIqjgCQiPHkuZN58c4bJZw9YHGqlQbbfvBfQRO2nCxGk7v%2FkrWHfAkTo4pU6BbiGGfRt3fzCcC3oz6OWluiCpY3%2F0duH9HszcRwKfVYsi1UqM8VBOehmV7UH5Btlrq%2FvGhYXoFirY3S3Kpu3wL7xBAxhJZ3KjllzkMat%2FTP8PMCaJLEOEjoEWcygKCakgOdux7%2BE6iDlY2fOsspqKSiIZCFtp9ToIckO%2FwqCfvwW0p8shjju%2BiFXWy%2FVMJwydx%2FAbvA2whd7uVBzA3kzOfe9%2BcgsR713O3Sd52aCEhkle4bOZCPIHH0hWrWv4yor4Lnm2bPyr9Okd5Ft6IAGBFppwVGgf4TkOzuqYsXi2%2Bt%2F3m%2F0kC9lA9HRJDc2CuIfXng5aH2nvHUVL4e20XpblAFIPYCEI3x1VyWS6GFyxpdpoeWiXlF6Wx3p%2FciZmaeRgv%2BD8ptDZmR2crp77jUK2oeGVd8fGIBCEQOW9h%2BPT04v3LYoWOu2BdtV0Gt4kajhbYHZKmUAUSW%2FkJo0Bez4mz6%2FcpFXX03uKFvjaNjF%2Bnor0kWeevmuaqwhxQvNCWQtSD%2Bt25k769RRDXr4xSMnaBH%2FKTLCXyYw5vvzBahCyWaQSNzDVvM%2FJBjqkAaz2aX62dTzmYBe3EJFlJ5aMYx4WStwRqcwfTkG7QVdWVDhh%2BkG2ms607iEwoAyvGGDbLS11jeooMBJrH7FH2NqsPPOGqx7j65Ypvb6VmEG%2BM9PCPRKjcTaOgGvGGMaU90EczkmdP%2FrHsKRAOx9qA%2FgSUa5Iof67sagdlatkZs9jls0yx72ajIIwH20Stzc7s55gpeXSYVAsCTBEGCmAV2OJ4IiN&X-Amz-Signature=2a3958dab03a0da37af2cc07a17035a3c265c924efc528ce42ba04208a78c146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI6SRHOU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD999RWIR%2FD2p6VlFxJUtqcToG0FFed4GDUMVNy7dbTewIhAID3z3ctGC%2B%2FIVh%2FQGv6zelzPS1UNKSnLiiQZE8qIZ4OKv8DCHEQABoMNjM3NDIzMTgzODA1Igy6ROPSU0PCMicXDGsq3APGrKYK2Tm4sFU6a4fFIqjgCQiPHkuZN58c4bJZw9YHGqlQbbfvBfQRO2nCxGk7v%2FkrWHfAkTo4pU6BbiGGfRt3fzCcC3oz6OWluiCpY3%2F0duH9HszcRwKfVYsi1UqM8VBOehmV7UH5Btlrq%2FvGhYXoFirY3S3Kpu3wL7xBAxhJZ3KjllzkMat%2FTP8PMCaJLEOEjoEWcygKCakgOdux7%2BE6iDlY2fOsspqKSiIZCFtp9ToIckO%2FwqCfvwW0p8shjju%2BiFXWy%2FVMJwydx%2FAbvA2whd7uVBzA3kzOfe9%2BcgsR713O3Sd52aCEhkle4bOZCPIHH0hWrWv4yor4Lnm2bPyr9Okd5Ft6IAGBFppwVGgf4TkOzuqYsXi2%2Bt%2F3m%2F0kC9lA9HRJDc2CuIfXng5aH2nvHUVL4e20XpblAFIPYCEI3x1VyWS6GFyxpdpoeWiXlF6Wx3p%2FciZmaeRgv%2BD8ptDZmR2crp77jUK2oeGVd8fGIBCEQOW9h%2BPT04v3LYoWOu2BdtV0Gt4kajhbYHZKmUAUSW%2FkJo0Bez4mz6%2FcpFXX03uKFvjaNjF%2Bnor0kWeevmuaqwhxQvNCWQtSD%2Bt25k769RRDXr4xSMnaBH%2FKTLCXyYw5vvzBahCyWaQSNzDVvM%2FJBjqkAaz2aX62dTzmYBe3EJFlJ5aMYx4WStwRqcwfTkG7QVdWVDhh%2BkG2ms607iEwoAyvGGDbLS11jeooMBJrH7FH2NqsPPOGqx7j65Ypvb6VmEG%2BM9PCPRKjcTaOgGvGGMaU90EczkmdP%2FrHsKRAOx9qA%2FgSUa5Iof67sagdlatkZs9jls0yx72ajIIwH20Stzc7s55gpeXSYVAsCTBEGCmAV2OJ4IiN&X-Amz-Signature=b3346a1c713bdb58daff101f71097fc8cab48be49293fed8435a788a21df3e1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

