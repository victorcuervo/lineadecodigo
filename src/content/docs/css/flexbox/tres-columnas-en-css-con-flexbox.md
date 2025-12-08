---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIB33AKP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb4zYDYU070tkdLKmXnH8olEUR9XF54rKhg75a%2FXzcgAiARPk79FSmbZ5Z5G%2FVCU4l1Rtlh4ty%2FKWmclyp%2BPqayPSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwRuwTAbvRE1yf%2BnKtwDeGR3X5O2Rt8BUBflO%2B5FUINm2A8eduqZ5Yl4BH9dmrAPCNTnR5JQq5UQCoaQdnp8WWNM7TnqKWqJLiWLLvUsNnfmlrSHiQUzt85qcAvhq%2Frku5LTgEfdvFAq4Wq4RYDIDjEqSUIMs3ppQY0cjxqHU4qr46IzLxNAj6MtX7x046RQ%2F4GkRLYo0SlpGfxZKHaFyYm51eSs%2FEFjn%2FehuW1gfrkVaQM%2BRZ3MeiUpol9dZyOhA893%2BOMEWSaicct%2BfoZYDo5oGTfDDGSBSVGzcSBwra3RW%2B9qTwmNmjrV42LEUyyDRW9nnCi%2BwKw%2B37DTAxRVMhXsDQlgw5dZAzHXYL3gAfaITxJDlWWe7fZZSFQPEeWBRSlKXshPLi1s%2FH9tnTcWZg0vl86E8cuEn6BeAK252Gh9bJ4PmLQUmKMxHrM4EaCNGZdawjZf%2FYweIj0sQbFUPjUty24GpBtZYOV5yd%2F6Ra3wCI3o16NNCWLTHb1hJ2wIxC9bbOmSX2FI9pvIUC4DcIA5xc2v0FBs4K2wZ7cSvCVHZTvu0m1tdon9DL1sDiDBppV4UD2UvitBjlCh%2Bvbi2mFLnunwWkqc3ZVMGWBiR7yYRoI%2BdNYD3IygV%2B%2Bg9MKld3E0aTyeTmFOwngwj9HZyQY6pgEdgqnp%2FblWZWMMgGU1SrDTD354Lp6DUZn5NpBLgHai6OlOomCXNi%2B1rkTG%2BFWMsSOfkNUMVUyLivnbSzKtWMLfqY9VO3l8VSypzAqL5u%2FHQC2qhF7%2F0eSbXNj6%2FkV41%2FdXyPxvu%2FMzvbnCz63e05TeEelxdMaBUAD6vLyKHNDOz8QKYXUexURTHOhoCNsRHtsxnMUGwj3aU33vfQMa4HFauQsdVaNr&X-Amz-Signature=2a1d3160e1913eae9fe6dfdb82fee594d86aeb8076c6fc49e604f0a2fae1a541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIB33AKP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICb4zYDYU070tkdLKmXnH8olEUR9XF54rKhg75a%2FXzcgAiARPk79FSmbZ5Z5G%2FVCU4l1Rtlh4ty%2FKWmclyp%2BPqayPSqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGwRuwTAbvRE1yf%2BnKtwDeGR3X5O2Rt8BUBflO%2B5FUINm2A8eduqZ5Yl4BH9dmrAPCNTnR5JQq5UQCoaQdnp8WWNM7TnqKWqJLiWLLvUsNnfmlrSHiQUzt85qcAvhq%2Frku5LTgEfdvFAq4Wq4RYDIDjEqSUIMs3ppQY0cjxqHU4qr46IzLxNAj6MtX7x046RQ%2F4GkRLYo0SlpGfxZKHaFyYm51eSs%2FEFjn%2FehuW1gfrkVaQM%2BRZ3MeiUpol9dZyOhA893%2BOMEWSaicct%2BfoZYDo5oGTfDDGSBSVGzcSBwra3RW%2B9qTwmNmjrV42LEUyyDRW9nnCi%2BwKw%2B37DTAxRVMhXsDQlgw5dZAzHXYL3gAfaITxJDlWWe7fZZSFQPEeWBRSlKXshPLi1s%2FH9tnTcWZg0vl86E8cuEn6BeAK252Gh9bJ4PmLQUmKMxHrM4EaCNGZdawjZf%2FYweIj0sQbFUPjUty24GpBtZYOV5yd%2F6Ra3wCI3o16NNCWLTHb1hJ2wIxC9bbOmSX2FI9pvIUC4DcIA5xc2v0FBs4K2wZ7cSvCVHZTvu0m1tdon9DL1sDiDBppV4UD2UvitBjlCh%2Bvbi2mFLnunwWkqc3ZVMGWBiR7yYRoI%2BdNYD3IygV%2B%2Bg9MKld3E0aTyeTmFOwngwj9HZyQY6pgEdgqnp%2FblWZWMMgGU1SrDTD354Lp6DUZn5NpBLgHai6OlOomCXNi%2B1rkTG%2BFWMsSOfkNUMVUyLivnbSzKtWMLfqY9VO3l8VSypzAqL5u%2FHQC2qhF7%2F0eSbXNj6%2FkV41%2FdXyPxvu%2FMzvbnCz63e05TeEelxdMaBUAD6vLyKHNDOz8QKYXUexURTHOhoCNsRHtsxnMUGwj3aU33vfQMa4HFauQsdVaNr&X-Amz-Signature=146961a3e79e03a98d6509de5186399adfa406f6a159e53bc780e8a93a3cd6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

