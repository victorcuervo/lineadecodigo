---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JCQN5X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHDOz3Ess1DIf19XEMPjL0ZYaUydZlaRbWAiSFyaqCXwIgG39D1lJe4rouoUnEOJzR8C5mGxi5Zhd9NyktH6KRrNUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMrBTxWPL2ENJSkGDSrcA2MtpEX7RIPaMaMCTVOH1gp%2Fr3MpyNts%2FZpGdgsPXQa0stVRT5MMuH8Xxw6%2FSrbMPXe6JcgrYKTHIlcH5dexIB0rJuJSSLB553I2lu8dEP3Ch7NXWSL%2BO0rPeGkAiBBdz63wOOqgRaifMLDS6kh%2BcD8oPEZSUAoU92GvYv5WVG2XsEFoaGKMOT%2BphlR92jJ5KpkFaMykhlxko73CBiCw2xWHl6rdy1HwonYrmS0iuYFiVTR7lLBQ20%2BywYkxPewIDgRXSiCSr4j3aMecLyAeHnq6YxAE%2FMIbtBhnBDc18i6r3sGkAZarjwcP%2Bcl6noTQhLes7yMkAL%2B01pFQPpATpze%2FC2PBqsqK0QM33zBDToZv80NFeTrXt9EGDWWMloPxFgomqVe4D%2FuMDRYeMiEw7wYJ%2BVJUOXiuo37d2%2BJSntBuFvrD4t8L1UJutxXDyksSszXFnMgCvYSEJYH8ID6n7lk5%2B%2F0LFRIaPzwJfUe11dHGA6LNl624l%2F%2BYiq7ElEE4g5dMTN650J6yFEIR8yF1z8wx7KU4etoHHKpBxSRl1vY9aCxyYWQJyQfx1mVLTC%2F541eWSB%2FCf76bsaPiV223Buhm4pexEnMkNIW8kzdkjb29TklGryz8%2Bg4Zxy9JMI6n0MkGOqUB88c4MjZnllTneFpJplh6BHvGE9UXN4KEf5ZRK8F1XJ7FgAmoSu4rdImOrIRo3fDbg%2BPC2YXQJKocf8ge3kCsaXdMEd2tYY3q8pJ4S1J4fnnPvVfvYyO1riIU84A3yslLAV%2B9KG5w2ZM3yjpy9hbySFSOM%2FlvbDYwPIFABZnOBANr%2BvdhBP6SB%2BP79%2BEZhdZsdhwQLJTvVi%2FciEUTiT5dhyao4XNt&X-Amz-Signature=b382c8b07db567216a6abbfe3b2a83c96589e137db358134c36c42642159c145&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7JCQN5X%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHDOz3Ess1DIf19XEMPjL0ZYaUydZlaRbWAiSFyaqCXwIgG39D1lJe4rouoUnEOJzR8C5mGxi5Zhd9NyktH6KRrNUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMrBTxWPL2ENJSkGDSrcA2MtpEX7RIPaMaMCTVOH1gp%2Fr3MpyNts%2FZpGdgsPXQa0stVRT5MMuH8Xxw6%2FSrbMPXe6JcgrYKTHIlcH5dexIB0rJuJSSLB553I2lu8dEP3Ch7NXWSL%2BO0rPeGkAiBBdz63wOOqgRaifMLDS6kh%2BcD8oPEZSUAoU92GvYv5WVG2XsEFoaGKMOT%2BphlR92jJ5KpkFaMykhlxko73CBiCw2xWHl6rdy1HwonYrmS0iuYFiVTR7lLBQ20%2BywYkxPewIDgRXSiCSr4j3aMecLyAeHnq6YxAE%2FMIbtBhnBDc18i6r3sGkAZarjwcP%2Bcl6noTQhLes7yMkAL%2B01pFQPpATpze%2FC2PBqsqK0QM33zBDToZv80NFeTrXt9EGDWWMloPxFgomqVe4D%2FuMDRYeMiEw7wYJ%2BVJUOXiuo37d2%2BJSntBuFvrD4t8L1UJutxXDyksSszXFnMgCvYSEJYH8ID6n7lk5%2B%2F0LFRIaPzwJfUe11dHGA6LNl624l%2F%2BYiq7ElEE4g5dMTN650J6yFEIR8yF1z8wx7KU4etoHHKpBxSRl1vY9aCxyYWQJyQfx1mVLTC%2F541eWSB%2FCf76bsaPiV223Buhm4pexEnMkNIW8kzdkjb29TklGryz8%2Bg4Zxy9JMI6n0MkGOqUB88c4MjZnllTneFpJplh6BHvGE9UXN4KEf5ZRK8F1XJ7FgAmoSu4rdImOrIRo3fDbg%2BPC2YXQJKocf8ge3kCsaXdMEd2tYY3q8pJ4S1J4fnnPvVfvYyO1riIU84A3yslLAV%2B9KG5w2ZM3yjpy9hbySFSOM%2FlvbDYwPIFABZnOBANr%2BvdhBP6SB%2BP79%2BEZhdZsdhwQLJTvVi%2FciEUTiT5dhyao4XNt&X-Amz-Signature=0dce6160c4a3d6883bafcf69009842ac854487f4b5189261fdae69139daa25bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

