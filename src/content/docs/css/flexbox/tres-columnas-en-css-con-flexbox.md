---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NV7G6RE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfXHhVIe9uy%2FB%2BAX8KC1aGIcYKFUVjDaMgCVl%2FIg681AiEAlKPpjQyzbCXihqOKhKzzQGuhShllzeLJgpkHq3TD7%2BwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl3y2BXyBcdaIWe%2FCrcA55KMm6%2BO%2FuIfWxdxZhtkpOchPI8AmiAN38nW55qzCKya%2B85EBAIIYl8JpJU6U0CBHG5xJp2NDk0YQFyu1mxoSuWd%2FdintkuZ1Ja0GOIBlXo%2FEgokbDnb%2FavLH9A%2FH7u4ZObXW8d6ilfal4A3YZiOf%2BMpWRf9Z%2BNBAHRKTpsxIyYG9l1ddKf0scUIXJ9tzzHtJ3trUO%2B46R%2BAg5pLynoHTWh%2BqC3nX4bBFoMgtD8mqpqD8ZFQHliBqGxcGNbgyu8puq%2Bh2u%2FKY%2FUE67YyCB9EquQdH%2BQ43cnGg%2B9odluWCniof8Tn%2BRaFadPKg2kE0dzKHduOD8XaSUZz%2BOFZUnC7LSb3uy8GcCvtwPV%2F2EytGt8VCs13aAVWGDMdctmmFaoqiugcZ9AL7Qbs81Yb0dnDBNLAVM5cwg9N2sQCJGAjBZVyDwd69tw2Qn1kYpqYqdrQncyeloZV4U3r%2FqsEqIrXNeyT23xAV9S%2FGndYnKpaaHdBHPFRu9B99tcSfkeDr8kfH8Ns%2FqmBS9pnlU7DtUm5kpY%2FatZ%2BS%2BX726q7kIIFnh8scpQUlCtzD4X3%2FPt066TGJEA5BFCqUtedDKNycuHxCRNhb4qzf%2FQUdtqtD4EjRUUY7%2FvQsWMwdTUBx2dMIbH18kGOqUBU3vvsN1%2Bdf0Dtt9TOndgczD%2BoFPTdlNlzgaAUtx5iePIUx553aK%2FRIALItmbd%2FGo8blsTwIZQYKLklVL%2F51RHXsZvu0YyzAZzZ7EC%2BlX21F%2Fe%2FIw%2F7piKlpFbGnzqNsgSmS1mKm8UJ94SlpAk%2BuHAy9z1JXimtUo9U6XIbnVoaq3mRNAGGheWF775I5YiFmgBjNtb5wgQm8fSHO0amNbxGLTFCro&X-Amz-Signature=a1cea275a4c65122713c4580479b5929539968dbb969c7a64945b250855534b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NV7G6RE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfXHhVIe9uy%2FB%2BAX8KC1aGIcYKFUVjDaMgCVl%2FIg681AiEAlKPpjQyzbCXihqOKhKzzQGuhShllzeLJgpkHq3TD7%2BwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJl3y2BXyBcdaIWe%2FCrcA55KMm6%2BO%2FuIfWxdxZhtkpOchPI8AmiAN38nW55qzCKya%2B85EBAIIYl8JpJU6U0CBHG5xJp2NDk0YQFyu1mxoSuWd%2FdintkuZ1Ja0GOIBlXo%2FEgokbDnb%2FavLH9A%2FH7u4ZObXW8d6ilfal4A3YZiOf%2BMpWRf9Z%2BNBAHRKTpsxIyYG9l1ddKf0scUIXJ9tzzHtJ3trUO%2B46R%2BAg5pLynoHTWh%2BqC3nX4bBFoMgtD8mqpqD8ZFQHliBqGxcGNbgyu8puq%2Bh2u%2FKY%2FUE67YyCB9EquQdH%2BQ43cnGg%2B9odluWCniof8Tn%2BRaFadPKg2kE0dzKHduOD8XaSUZz%2BOFZUnC7LSb3uy8GcCvtwPV%2F2EytGt8VCs13aAVWGDMdctmmFaoqiugcZ9AL7Qbs81Yb0dnDBNLAVM5cwg9N2sQCJGAjBZVyDwd69tw2Qn1kYpqYqdrQncyeloZV4U3r%2FqsEqIrXNeyT23xAV9S%2FGndYnKpaaHdBHPFRu9B99tcSfkeDr8kfH8Ns%2FqmBS9pnlU7DtUm5kpY%2FatZ%2BS%2BX726q7kIIFnh8scpQUlCtzD4X3%2FPt066TGJEA5BFCqUtedDKNycuHxCRNhb4qzf%2FQUdtqtD4EjRUUY7%2FvQsWMwdTUBx2dMIbH18kGOqUBU3vvsN1%2Bdf0Dtt9TOndgczD%2BoFPTdlNlzgaAUtx5iePIUx553aK%2FRIALItmbd%2FGo8blsTwIZQYKLklVL%2F51RHXsZvu0YyzAZzZ7EC%2BlX21F%2Fe%2FIw%2F7piKlpFbGnzqNsgSmS1mKm8UJ94SlpAk%2BuHAy9z1JXimtUo9U6XIbnVoaq3mRNAGGheWF775I5YiFmgBjNtb5wgQm8fSHO0amNbxGLTFCro&X-Amz-Signature=dfbcc7d1b512fdb76dc66e5899503bc673caead23096afaffee251b729809272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

