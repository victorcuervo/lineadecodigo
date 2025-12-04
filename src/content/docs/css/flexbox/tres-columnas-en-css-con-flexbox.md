---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLULTQM2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD4Z3HeCAaFr8tcI1yOCoeOiziBdatF3tt0F5UeRNYVVQIgeWCrB%2FxXoBmsx%2FIQ16zRRaVx9Rj7E3uXLTFCsr5SDS4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGigXuvbCNbBvm4oeSrcA%2B1XapJ46SUUQMr8jE%2BANkynrDmCPeIOo25N%2BBLk62zo%2BEZxgl3zZifDxVAJ1Lem0nDcxFKzKmlVvJAzSwfstEtLK1AtxUfnq%2BCmp2vrKBIORV8f2YhVjXTBg%2FGMsAaKsb7HbRe7bIncGmtAlcdyRFaeX4HVCA2n67tieU9LtR4vufGYNj6TH4Kcc2aqOYvFF3pAMUBDdjFN49On3nxwwZlLSpiFgx%2FD6GJBXIukH0611Qev%2Bll2vGcjR9C1m74iHy1uTXDx8WSjHMUFTjUtFpSdUNXQCGfLgIJa9AS2eA4c%2BJ4nXBeYe5GxxU%2FBg0KV2TampxyhNIcKtOai%2FwYO5%2B%2FHFG8YclshPJuWj8yoDpkMyK4tXXwXxXUiSx8qaLhnLlPKRmlNMIX%2FQuflIksTdLEJGkdhGsVBZG%2B8O6n6XDa6ezyKZhrIuxzRw%2Fo%2BY3Eww2BaUuM6xzq1vJ%2Fxa8M6MtGZg7tJlrfD33tFVsBcgUD%2BzHKxE%2BichDc106ENkIAuQhtf9eTR2C4QHGNVyBYBN5hei4F7EwTv4vO%2FDy61tcGcpq0Xz%2F%2F0klOWNXnHr1nxz4zIYICHF5%2FEzZvFQlDtqxdXXaqw84oYki7EZ1SfoDwVGxhCSSj4tFIG%2FgGZMN%2FMxMkGOqUB6szZMrMf6KcYQEkVdmXXCYp5rhywVa8abQAufQYYQ0VPahBLq4sIyxHz%2BHy2uYQGzOhYENhinlqoVwE%2B57rPcgZiDLWM32kbFW%2Bh2UIhGYlchDg%2F1yqM55e97KzDlYepmkjaQ59zzfpDsLlqLuV6oZ%2FWTKdOch6qpoNB0eU0k6Sayqjj79g%2BFh%2FKLj8iU6CbiDgghIq5cBJzfK9dRgB2a%2FPOCBtx&X-Amz-Signature=b0ebedf821a1c05835f5b40636f167e2be422b8250f04724f1ac74263526fbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLULTQM2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD4Z3HeCAaFr8tcI1yOCoeOiziBdatF3tt0F5UeRNYVVQIgeWCrB%2FxXoBmsx%2FIQ16zRRaVx9Rj7E3uXLTFCsr5SDS4q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGigXuvbCNbBvm4oeSrcA%2B1XapJ46SUUQMr8jE%2BANkynrDmCPeIOo25N%2BBLk62zo%2BEZxgl3zZifDxVAJ1Lem0nDcxFKzKmlVvJAzSwfstEtLK1AtxUfnq%2BCmp2vrKBIORV8f2YhVjXTBg%2FGMsAaKsb7HbRe7bIncGmtAlcdyRFaeX4HVCA2n67tieU9LtR4vufGYNj6TH4Kcc2aqOYvFF3pAMUBDdjFN49On3nxwwZlLSpiFgx%2FD6GJBXIukH0611Qev%2Bll2vGcjR9C1m74iHy1uTXDx8WSjHMUFTjUtFpSdUNXQCGfLgIJa9AS2eA4c%2BJ4nXBeYe5GxxU%2FBg0KV2TampxyhNIcKtOai%2FwYO5%2B%2FHFG8YclshPJuWj8yoDpkMyK4tXXwXxXUiSx8qaLhnLlPKRmlNMIX%2FQuflIksTdLEJGkdhGsVBZG%2B8O6n6XDa6ezyKZhrIuxzRw%2Fo%2BY3Eww2BaUuM6xzq1vJ%2Fxa8M6MtGZg7tJlrfD33tFVsBcgUD%2BzHKxE%2BichDc106ENkIAuQhtf9eTR2C4QHGNVyBYBN5hei4F7EwTv4vO%2FDy61tcGcpq0Xz%2F%2F0klOWNXnHr1nxz4zIYICHF5%2FEzZvFQlDtqxdXXaqw84oYki7EZ1SfoDwVGxhCSSj4tFIG%2FgGZMN%2FMxMkGOqUB6szZMrMf6KcYQEkVdmXXCYp5rhywVa8abQAufQYYQ0VPahBLq4sIyxHz%2BHy2uYQGzOhYENhinlqoVwE%2B57rPcgZiDLWM32kbFW%2Bh2UIhGYlchDg%2F1yqM55e97KzDlYepmkjaQ59zzfpDsLlqLuV6oZ%2FWTKdOch6qpoNB0eU0k6Sayqjj79g%2BFh%2FKLj8iU6CbiDgghIq5cBJzfK9dRgB2a%2FPOCBtx&X-Amz-Signature=74481a9cdcca9a93fbef68b12a74462caefc4869b7bd76d750ad0257244b409b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

