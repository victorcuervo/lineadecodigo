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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XAOAIP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0AAzwzG92GPPO6VMISFd0TVnE0HiC5PWR6ogmOdmB9AIgUUihLAuAk7DqF0tv0COV4qHxOPW3vLFog%2B%2BWTWQZ%2BsEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPcC5KtlLTVH6Jh4VSrcA09JEYlDM76kr3oFNHpAXZLtTIbPQN9ybRF5Dd8RzacDqJZalS2EkWLF1eB%2BBHYz%2FzC%2Bja5qzOcuoMT16HdVVvcJGZwZTseFDzsotvbDafCAQWC7ciuJUUV50iR4rd6%2FBqckPC9sPoOKPIAzaEm%2Ba0D%2FkeMku%2FL1SCjyX1oYhVGvtBBjy2NfJpoe8RvUs5QNJ3uYvGk2dMuOo2XcnD6YMhStXzV3zt%2BZI6c0QhQHUIPkwjp6wvpj6KAv60R8t4Sm7RQbsHmckQ8jiun8UYjkHjR3Ms4lcd4HdBCjSEPmXHx%2B%2FD0vpkZ244MwuIlJUMiTzGGod0KIi8WC6Oottrmckh5nYK16NSBuEpzcqaZA3ZIMM%2FYMwMVDbmvCmkSdXtrAF3tktH%2BaOBWpMpGm%2Bo6%2FplSJcJmNXtvvOmH3m7rJIedgTACB5JJPHJfY1dQQR6%2F%2BQugSo2lVZ1jkAaAv1Q%2BwrYuoJhGdYufhAfT6nzFGuQymNdAXXRWe19716c5o3Vv1vFmpzI0AcXQOZKP0PKeZkZ7Ra%2Fnoi2QgLBqQsHPt1yt9g16cFrDGw%2FjyLfuFTucxauH0rx28aLOeDIR1%2Fnb3zEZ8f4yKCFEMdXOvrmwARlMLOXuCrCF70pRV81UpMOuuwMkGOqUBOxDjKOruBWbpdHx32c76wgaNoyz4q2FDpuafpcqO%2BxobITZK9%2Fozm0%2BwxEFouHBOsDmNfwz9vOFJErPKURRyNnenb%2BmPTHC9t%2F1G2tcQ3PtIrUu5mJcjisgJq5dFBdpoMeaH5V8IzrtjOlUwggZmdDx%2BFypcweyCcKqpwn2sz6czwTCk4OyXuDAN45rIR5IsHeLPGqMSowD%2BxfMeiya0%2FwH0rttB&X-Amz-Signature=45e70a28f808857d0a701acbc99c246b18dd56f2b4e9606b5fdfc0096ec27b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3XAOAIP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD0AAzwzG92GPPO6VMISFd0TVnE0HiC5PWR6ogmOdmB9AIgUUihLAuAk7DqF0tv0COV4qHxOPW3vLFog%2B%2BWTWQZ%2BsEq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDPcC5KtlLTVH6Jh4VSrcA09JEYlDM76kr3oFNHpAXZLtTIbPQN9ybRF5Dd8RzacDqJZalS2EkWLF1eB%2BBHYz%2FzC%2Bja5qzOcuoMT16HdVVvcJGZwZTseFDzsotvbDafCAQWC7ciuJUUV50iR4rd6%2FBqckPC9sPoOKPIAzaEm%2Ba0D%2FkeMku%2FL1SCjyX1oYhVGvtBBjy2NfJpoe8RvUs5QNJ3uYvGk2dMuOo2XcnD6YMhStXzV3zt%2BZI6c0QhQHUIPkwjp6wvpj6KAv60R8t4Sm7RQbsHmckQ8jiun8UYjkHjR3Ms4lcd4HdBCjSEPmXHx%2B%2FD0vpkZ244MwuIlJUMiTzGGod0KIi8WC6Oottrmckh5nYK16NSBuEpzcqaZA3ZIMM%2FYMwMVDbmvCmkSdXtrAF3tktH%2BaOBWpMpGm%2Bo6%2FplSJcJmNXtvvOmH3m7rJIedgTACB5JJPHJfY1dQQR6%2F%2BQugSo2lVZ1jkAaAv1Q%2BwrYuoJhGdYufhAfT6nzFGuQymNdAXXRWe19716c5o3Vv1vFmpzI0AcXQOZKP0PKeZkZ7Ra%2Fnoi2QgLBqQsHPt1yt9g16cFrDGw%2FjyLfuFTucxauH0rx28aLOeDIR1%2Fnb3zEZ8f4yKCFEMdXOvrmwARlMLOXuCrCF70pRV81UpMOuuwMkGOqUBOxDjKOruBWbpdHx32c76wgaNoyz4q2FDpuafpcqO%2BxobITZK9%2Fozm0%2BwxEFouHBOsDmNfwz9vOFJErPKURRyNnenb%2BmPTHC9t%2F1G2tcQ3PtIrUu5mJcjisgJq5dFBdpoMeaH5V8IzrtjOlUwggZmdDx%2BFypcweyCcKqpwn2sz6czwTCk4OyXuDAN45rIR5IsHeLPGqMSowD%2BxfMeiya0%2FwH0rttB&X-Amz-Signature=9047cdc405e7b1a950e3e8d894a4232a1ddaa20f8e65dba1edeb5c224b80e065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

