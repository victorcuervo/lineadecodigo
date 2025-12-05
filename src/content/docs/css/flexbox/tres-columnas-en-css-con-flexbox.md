---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQHLHSD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUw904Kb4Zrjm5wFROjedTmVZHKNYAHjphQo3F0I8eEgIhAM4nAaVDFf9eD1%2FDfOTOs0vBuJQi6JjjG5ivr1vMJsknKv8DCGAQABoMNjM3NDIzMTgzODA1Igymt9VatdSwB1D71QYq3AOUR%2Fknq1PddgZ8SLwCbpvKZkdXBlBF2bcKuCL9Orpu9tx5uNRpsELWvdRKHNYUY%2F58sGr8OesAeKJlt65QNVM801GJ6QznVrMnnwnEye%2F9Fi927jHGLsC%2BNkHG7boF%2FC7TvbjNAURLqzZqGApsxDSpQIfVhvZ6A%2Fuy3uhyd6aAAPWk%2B0LbT2tW5%2F7fMB%2Fo285fXmmXUTM0SlVY61cYTIHz7Ln36IvR4Dr1j838xiHoSb3gKLqWKzwPjur1j0v0IdSI3Afgnmweli%2FiWqpAStywBL1VL8HtQNniNka5%2Bq9%2FLOf7XlngNmJVM5i6s5aa3OfWmtXmjQK%2F9S3towRpAKxxx%2FJOEXkCezOtRSNVFmlsRniypqoIHJn1B6h0xQ3Y9M1%2FRrXTZOWi5nQLY3ZV%2F%2FzfHcEegtudqLTGi9mtMeJ3izpNE53B6zpB829ek1aF1lgVrZtjOV28kdMmam8yNSmU5UEy7DF0KlvrdmeCt4FyN8px3jL1DhPqYbaKRPTLiD3mF4BcnxATRHJqa7UinwED%2B%2BJdYFHY%2FvnhjQpeGwlfHbON2di2RM%2FcufXfAKKU0LBBy6ewHf%2FxcT8%2BtABhh5uP%2Bb6tbFg8szN%2Bukd8gN37oAcuUvqoEQ7hKON7DDC78MvJBjqkAbjfxm975iVYzJT2kUF%2FZ%2BniUAwfFnDfIsSc9V3wYtgrh4dciQek0V3p4GzgPaq%2Bz%2BlkGWbC8dQCYAqlOK5GIyckFekAU4gcYf5urTZrlp6fFz%2Bf5Al%2BXLLVRugKh260qaHkmFZS%2BrXtFvN7ukwzA5xEolK9ze9f01PRx%2BSGGYYljEpyVITGSWA660pTIoSxE3bqFOBGryDb1Oc6x8x82m9ZoXfc&X-Amz-Signature=cb2e7341a65176c28ede909a564f870b4fda86d7f737f13b62738f18ff46bf5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NQHLHSD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUw904Kb4Zrjm5wFROjedTmVZHKNYAHjphQo3F0I8eEgIhAM4nAaVDFf9eD1%2FDfOTOs0vBuJQi6JjjG5ivr1vMJsknKv8DCGAQABoMNjM3NDIzMTgzODA1Igymt9VatdSwB1D71QYq3AOUR%2Fknq1PddgZ8SLwCbpvKZkdXBlBF2bcKuCL9Orpu9tx5uNRpsELWvdRKHNYUY%2F58sGr8OesAeKJlt65QNVM801GJ6QznVrMnnwnEye%2F9Fi927jHGLsC%2BNkHG7boF%2FC7TvbjNAURLqzZqGApsxDSpQIfVhvZ6A%2Fuy3uhyd6aAAPWk%2B0LbT2tW5%2F7fMB%2Fo285fXmmXUTM0SlVY61cYTIHz7Ln36IvR4Dr1j838xiHoSb3gKLqWKzwPjur1j0v0IdSI3Afgnmweli%2FiWqpAStywBL1VL8HtQNniNka5%2Bq9%2FLOf7XlngNmJVM5i6s5aa3OfWmtXmjQK%2F9S3towRpAKxxx%2FJOEXkCezOtRSNVFmlsRniypqoIHJn1B6h0xQ3Y9M1%2FRrXTZOWi5nQLY3ZV%2F%2FzfHcEegtudqLTGi9mtMeJ3izpNE53B6zpB829ek1aF1lgVrZtjOV28kdMmam8yNSmU5UEy7DF0KlvrdmeCt4FyN8px3jL1DhPqYbaKRPTLiD3mF4BcnxATRHJqa7UinwED%2B%2BJdYFHY%2FvnhjQpeGwlfHbON2di2RM%2FcufXfAKKU0LBBy6ewHf%2FxcT8%2BtABhh5uP%2Bb6tbFg8szN%2Bukd8gN37oAcuUvqoEQ7hKON7DDC78MvJBjqkAbjfxm975iVYzJT2kUF%2FZ%2BniUAwfFnDfIsSc9V3wYtgrh4dciQek0V3p4GzgPaq%2Bz%2BlkGWbC8dQCYAqlOK5GIyckFekAU4gcYf5urTZrlp6fFz%2Bf5Al%2BXLLVRugKh260qaHkmFZS%2BrXtFvN7ukwzA5xEolK9ze9f01PRx%2BSGGYYljEpyVITGSWA660pTIoSxE3bqFOBGryDb1Oc6x8x82m9ZoXfc&X-Amz-Signature=c02f8b6197c6fbf504e878f39a1becf2358e615b134a79f888eb46b3eb491db1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

