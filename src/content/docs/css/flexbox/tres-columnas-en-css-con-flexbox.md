---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2EUDUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcF1k%2F%2FReqX2bCfyUYzl8yQc8YPRZXp8hvMAvWmZb5FAiEA0y1NNFaIwy0mkdl6nuHs%2BxvfYu2L6WvDB0DUb4mRw8UqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMBoesvjtHATib1%2FCrcA7xzxD73c59Cb%2FUOUNGn26tyUUYRCCRaGq6Br0hSHkzbBF2zpE4WD8%2FCfdRfi%2FyADLNwSw7BpjjXgqdHdgSjep3zcB2ibZXKe5gZf0IJM3lxO3YjatsXpfyiiu8vuIJw6p2UQ%2FPFGp3NckyJ3IsfqRefjfOHe10VNCBFOIFLJcckKuyvYXvxec%2BkaSlcHdlcjUPPrx4ZHL30nClud8GoMHnK02JTYrJmi0isc%2FE9%2BIyn6S9JKQOTOBCJk8nWgRu4VdnbyNJP0XMsKe5bSjZrT4xX%2BC31KKxN1NDTzp86b0EuGyJGnJvK%2BSl5PyhQ0173t741k7Iy0C5w6B8C9vWzC9BYx6ZDNcBWX9OqR5GV8yXR95g59graWfZ7nlxnPBMYHqYLfo2skG%2FdAOHbrKBPVHf1VDl5XNt5CaUuydm282DdXTc5KCmsys1%2FOSiuGC7%2FvKHutmBDk3mJCHJmH3WOfM%2BomK5ERGjeb%2FOiBipnrbChdFA%2FWzw0OZALZ0nLjPZ%2FU3F5insoore5SXPJWrTaqpl2YtjMaYpURzDK%2FG29xrlQZCsDYzcVFeB51cxUw5QdIm54MMg2trGSDHKdNysmiulJ2t33EdJIG0bBOaOmEjGKDgZFJH9QsSby%2BzTiMPWU2ckGOqUBQZtY1DuPP74LYTpGiZB%2FcLTGtkvGbCMSV8cstNtdIqh3I0tzYfaQPBr3y2EwCbh6GR9YSMWhLiObwxLwIuq5YfSpXdtaYnsKMZSre4cO91FHS%2BGA1jscGvVdNIyROZJb8S%2F4OcWvUDeXO%2F5ns0pYhI1vsG6lq1wyVDOdjx0fv%2FBrdtX0B5O66rdVsWLuB4zfBPLaRrNdKU5NW8Jne2u3U0GCdmAE&X-Amz-Signature=55503a4e8124c622d497db2f5dd63dbb4704b11a32f0e7da00b9b8448a23bc77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD2EUDUZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcF1k%2F%2FReqX2bCfyUYzl8yQc8YPRZXp8hvMAvWmZb5FAiEA0y1NNFaIwy0mkdl6nuHs%2BxvfYu2L6WvDB0DUb4mRw8UqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMBoesvjtHATib1%2FCrcA7xzxD73c59Cb%2FUOUNGn26tyUUYRCCRaGq6Br0hSHkzbBF2zpE4WD8%2FCfdRfi%2FyADLNwSw7BpjjXgqdHdgSjep3zcB2ibZXKe5gZf0IJM3lxO3YjatsXpfyiiu8vuIJw6p2UQ%2FPFGp3NckyJ3IsfqRefjfOHe10VNCBFOIFLJcckKuyvYXvxec%2BkaSlcHdlcjUPPrx4ZHL30nClud8GoMHnK02JTYrJmi0isc%2FE9%2BIyn6S9JKQOTOBCJk8nWgRu4VdnbyNJP0XMsKe5bSjZrT4xX%2BC31KKxN1NDTzp86b0EuGyJGnJvK%2BSl5PyhQ0173t741k7Iy0C5w6B8C9vWzC9BYx6ZDNcBWX9OqR5GV8yXR95g59graWfZ7nlxnPBMYHqYLfo2skG%2FdAOHbrKBPVHf1VDl5XNt5CaUuydm282DdXTc5KCmsys1%2FOSiuGC7%2FvKHutmBDk3mJCHJmH3WOfM%2BomK5ERGjeb%2FOiBipnrbChdFA%2FWzw0OZALZ0nLjPZ%2FU3F5insoore5SXPJWrTaqpl2YtjMaYpURzDK%2FG29xrlQZCsDYzcVFeB51cxUw5QdIm54MMg2trGSDHKdNysmiulJ2t33EdJIG0bBOaOmEjGKDgZFJH9QsSby%2BzTiMPWU2ckGOqUBQZtY1DuPP74LYTpGiZB%2FcLTGtkvGbCMSV8cstNtdIqh3I0tzYfaQPBr3y2EwCbh6GR9YSMWhLiObwxLwIuq5YfSpXdtaYnsKMZSre4cO91FHS%2BGA1jscGvVdNIyROZJb8S%2F4OcWvUDeXO%2F5ns0pYhI1vsG6lq1wyVDOdjx0fv%2FBrdtX0B5O66rdVsWLuB4zfBPLaRrNdKU5NW8Jne2u3U0GCdmAE&X-Amz-Signature=5572bc9ae939ad020b1f2e98c0de5c99890c57210a8b2510d6da3ba3dbe5aebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

