---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZB74WS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSQwyfviZumLm535gtW7rbIjrEOIi8FSzmqvYlulctCAiANXFsc97L0vX9S%2Fcyz3CSCJu375jNSWUDTk8STo7XSVSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgYXiJr5cQB8mzdsKtwDCsG9fZErD2kgCd3oGNx4hUx636jcwkSKB4zCtq7ASvX3XkS9xTwy%2BC1lNkGniZiKl22Zc7eo68DO02V4nWASorp46VbVEfTZA4E9tnz%2B0ie%2BAxfv%2FC5%2FS6UgJxfJlIrHEEHKyyGjVc9rarJcRI87qq8hZ6tZDGGFGNDgnLqEImZhbrOkqouZGr5rR3jjRZHGIyI4bf6EfVZzmYyTeo7MqYg2%2BKBpAO8dUyJdpT67MW4d6JESkIQRfxCgcVkhZt0cyTZzvBfPLVKr7TAIna6qS0vICHyDPj7I7n0URTY8kxh60XWDP17EsPioTKqOw5NcEEq5ri8P40xCDNGV0MkLu34hyUxVn8TnPOWdVQ1xIUTZNpaX%2FhazgRDoaB%2F19Wb3crSguYCLnXU1GSc3hERK9GheotoHQqmtJ%2FtktRFNtRd74l79RHWXAyN1zMIS9BDYyUX%2FM%2BOmOQiir%2F%2BvvfAK%2FhvLJlGOSEZEnbA8vMo4nTU6YwWewv%2BGgLEt61XLwPQ0efp%2F1OKidD3fecVKJ8p1JK5E2O5GnAvPnZaNYTv1gn7l8%2FoXYnAm9jqDz%2B3T7kXkI1QxdGLb6l5Jz%2FoICX8MiZPMeCYXE3uDnK%2Bav6DJTLF9RjF9ZjBe%2BYj8WvAws%2BTbyQY6pgGDdJh4Kmpgk43D3keG2tR5ZyGNFtxQ7cAugUPGx2nmZ4DQtUDzL26MuowebbFQIat6YaiFeRKI8uOtuv3ShwnxOVeXkSSq2VEPjkKIym7Ycm8%2FEd%2FAQF2c%2FpfJppWGefdqVw2GpeTLOdmm6o3wTtLlQ5Jxj6T7njSt2ZR8L5LU0JrB6FdUVO3nKCilmOZ4jWwjz6y0p03qTN%2FdCmG7eFLUvR6iS6vZ&X-Amz-Signature=e0d271a2a943b627e2d46bd21d453bf895a30a09b8660930faf51180c4cc8094&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZB74WS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFSQwyfviZumLm535gtW7rbIjrEOIi8FSzmqvYlulctCAiANXFsc97L0vX9S%2Fcyz3CSCJu375jNSWUDTk8STo7XSVSqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkgYXiJr5cQB8mzdsKtwDCsG9fZErD2kgCd3oGNx4hUx636jcwkSKB4zCtq7ASvX3XkS9xTwy%2BC1lNkGniZiKl22Zc7eo68DO02V4nWASorp46VbVEfTZA4E9tnz%2B0ie%2BAxfv%2FC5%2FS6UgJxfJlIrHEEHKyyGjVc9rarJcRI87qq8hZ6tZDGGFGNDgnLqEImZhbrOkqouZGr5rR3jjRZHGIyI4bf6EfVZzmYyTeo7MqYg2%2BKBpAO8dUyJdpT67MW4d6JESkIQRfxCgcVkhZt0cyTZzvBfPLVKr7TAIna6qS0vICHyDPj7I7n0URTY8kxh60XWDP17EsPioTKqOw5NcEEq5ri8P40xCDNGV0MkLu34hyUxVn8TnPOWdVQ1xIUTZNpaX%2FhazgRDoaB%2F19Wb3crSguYCLnXU1GSc3hERK9GheotoHQqmtJ%2FtktRFNtRd74l79RHWXAyN1zMIS9BDYyUX%2FM%2BOmOQiir%2F%2BvvfAK%2FhvLJlGOSEZEnbA8vMo4nTU6YwWewv%2BGgLEt61XLwPQ0efp%2F1OKidD3fecVKJ8p1JK5E2O5GnAvPnZaNYTv1gn7l8%2FoXYnAm9jqDz%2B3T7kXkI1QxdGLb6l5Jz%2FoICX8MiZPMeCYXE3uDnK%2Bav6DJTLF9RjF9ZjBe%2BYj8WvAws%2BTbyQY6pgGDdJh4Kmpgk43D3keG2tR5ZyGNFtxQ7cAugUPGx2nmZ4DQtUDzL26MuowebbFQIat6YaiFeRKI8uOtuv3ShwnxOVeXkSSq2VEPjkKIym7Ycm8%2FEd%2FAQF2c%2FpfJppWGefdqVw2GpeTLOdmm6o3wTtLlQ5Jxj6T7njSt2ZR8L5LU0JrB6FdUVO3nKCilmOZ4jWwjz6y0p03qTN%2FdCmG7eFLUvR6iS6vZ&X-Amz-Signature=fd97ba563b06124453a3004955eebacb65f559ed8ec540e3070f5af76c0f8978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

