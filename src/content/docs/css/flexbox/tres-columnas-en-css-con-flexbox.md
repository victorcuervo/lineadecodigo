---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXUGHNM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANeZBatlmcVlHYH8AUIGXIo7VDgcBk4W1vjKBZqLF3UAiBLOdY0GyixglfeNhit7CCyzPLVv1ZtJ6YfevN7iVxCpiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2F7%2FMP6LCEV7MmaIKtwDKsiO1%2FbDFr91U%2Bo6U%2BU0hCVZgpxc1BB2letDro%2BGjgE1q8zfugQZxFyPzBrX3nMEHgw700p%2Fp24pHV2pWw7a%2FRuqGuhYd%2FPPqQwc9Bmuslq42hFZjPdT7b9zGuAZChCuNSYwyzTI1aegWQGy%2BVMjkSus8KYE7vUd%2FJp%2BUaf906gQXCLPMHtESHnhjCxb2d%2FuUjXdb%2B5qIw06p%2FWWhZ8uRy5FdhU%2BPDbJX%2BEGRMC4q3gpeVMS3ipllwAVE73ElNOgo2eXObXDLg5LYLoUpp9AsJ4Lwj8g4SpXOIfdAjIT7b5RIXfxUk5hjJuq8RO8C3ST4j0dxq1%2Btl3PZoPuXpNir6c578bJn8wWbBvNdbVi4DBxGOoKWteMgiHOCm3mOKVkJXpbGkt%2Fs1KscYh1jIMaEYDfUIJbaUeri%2FQJSwAyIz%2BvyAROHVD%2F19Q3q6N78wMHfUQh7STX6rvsgmVsFeoH0m%2BWmZTAvkephl3yKBlME6%2F37TMql1A3fGv1hvJA58uK%2B%2BoL0%2B2yYOO2r4pEj0dBewOkoxwnHTweoGJyObTA%2FdqcSSzXCpetGEzCUp1CEKtbpw5XB2wHuLDx53qFMZ4xasghMcrQIaOWJirhElhacocHaug4zwujoZZ9CBswtPTayQY6pgG%2BsWwvneg5DprnFjwPNer9oMGiZEUjBFwgFKqiKiGZG377zNec%2BGc5NU4BAwZPy6aIgvD0VG2AifVNl5XdAxRdE5ZOhDkL58esKM5u4ntSNKjbZsiMcmpJH%2FFzf9ZU09Dq6wFSG0KkG6DWwtOmgxxDZSqCa501CtsBwMBWCWCCMGWXmmQOczr4QzEZxLkB5rtglrB2F6Cyrrywwddg6JluDpTm4Hej&X-Amz-Signature=071721b13b68459d28b9f92dcd5155f4120887ed80cc0da53ad76bf9088fdb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXUGHNM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANeZBatlmcVlHYH8AUIGXIo7VDgcBk4W1vjKBZqLF3UAiBLOdY0GyixglfeNhit7CCyzPLVv1ZtJ6YfevN7iVxCpiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6%2F7%2FMP6LCEV7MmaIKtwDKsiO1%2FbDFr91U%2Bo6U%2BU0hCVZgpxc1BB2letDro%2BGjgE1q8zfugQZxFyPzBrX3nMEHgw700p%2Fp24pHV2pWw7a%2FRuqGuhYd%2FPPqQwc9Bmuslq42hFZjPdT7b9zGuAZChCuNSYwyzTI1aegWQGy%2BVMjkSus8KYE7vUd%2FJp%2BUaf906gQXCLPMHtESHnhjCxb2d%2FuUjXdb%2B5qIw06p%2FWWhZ8uRy5FdhU%2BPDbJX%2BEGRMC4q3gpeVMS3ipllwAVE73ElNOgo2eXObXDLg5LYLoUpp9AsJ4Lwj8g4SpXOIfdAjIT7b5RIXfxUk5hjJuq8RO8C3ST4j0dxq1%2Btl3PZoPuXpNir6c578bJn8wWbBvNdbVi4DBxGOoKWteMgiHOCm3mOKVkJXpbGkt%2Fs1KscYh1jIMaEYDfUIJbaUeri%2FQJSwAyIz%2BvyAROHVD%2F19Q3q6N78wMHfUQh7STX6rvsgmVsFeoH0m%2BWmZTAvkephl3yKBlME6%2F37TMql1A3fGv1hvJA58uK%2B%2BoL0%2B2yYOO2r4pEj0dBewOkoxwnHTweoGJyObTA%2FdqcSSzXCpetGEzCUp1CEKtbpw5XB2wHuLDx53qFMZ4xasghMcrQIaOWJirhElhacocHaug4zwujoZZ9CBswtPTayQY6pgG%2BsWwvneg5DprnFjwPNer9oMGiZEUjBFwgFKqiKiGZG377zNec%2BGc5NU4BAwZPy6aIgvD0VG2AifVNl5XdAxRdE5ZOhDkL58esKM5u4ntSNKjbZsiMcmpJH%2FFzf9ZU09Dq6wFSG0KkG6DWwtOmgxxDZSqCa501CtsBwMBWCWCCMGWXmmQOczr4QzEZxLkB5rtglrB2F6Cyrrywwddg6JluDpTm4Hej&X-Amz-Signature=367e03761b60d9e7f2e3f540da75bef9c58a015e63c3768bb1935b461e7bc912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

