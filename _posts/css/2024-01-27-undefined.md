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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVBMMSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCaNkCrzw3xkIPIm19sa3SJL9xIT9RHfv8aHv7sbZPlMgIhAP5Pu1YfLeAUIoDOVCJiYipAkXNIc8busFaa61%2BBLp5GKv8DCCwQABoMNjM3NDIzMTgzODA1IgxXy%2BJVW3sII8yoe%2Fsq3AMAEIP99nUpIcDCQHPCVwSLiNnF4zmpS1fslGkeINioeEr8FT9xdjehMBZjKo5rN1PoOjhD6ycarZaYdHR1ZAmN0Ph1h0KErxhd3RmXwuuSHIef%2BS7OhV1QJ5o%2B9WnY7HjslUcSTNMOzZ2jkvBMlkFW4ONVV7SBDP%2BmaYyaioOF7%2FbnkOgaMEyF%2FHsFrDUvrI44DRPndniuoedgpt27ebjto7NH7GhEi6YNSAbMy43qTvV7oGClrvNiciDgoT6UkfhvNRoJzj2YEP7KaENutZ992tB7cjd4ax%2F2kGDe0yguP%2BOQ8H4nJFgqG5cdbXQ%2FFz9Eqjm9QlfobEfQHrUB446dbOwhh8ZTcDBgxbASVA929SfMtRhG1DsqSviqMREK2pIPAUOBZbYD5OOuxjwi7%2FvNAkG0eftP5CW5Um76R%2BGp7BYoh8DNwbmY1ZLV366W9lC7gB9HDCqnocYvVT1IMEtJAOpCRsztyP0hPj4MccnLXl9TwkPSqqxzMGxSX%2BuxAT5JTGLmc8DRtJvbINC77BHKVenvFdtEqutrmw5QOwOkSKOQvcV9%2FGMPyhKpz3072lHQzWFH7ktzVQPhFnqK1sTQgt%2FehviqMLa1l6SrJllhk7N9f1YsqAH4N6YOmDDVrsDJBjqkAeFw23Q89DcraQuC%2BqCOl%2BWx4JcOqehGGXFSeu%2B98AWWG8BtrwiDFSOOxA1i4Ci5UVuyrBQzFF6bCOcEXVmevUzVqZdmWE3o%2Fb2ClhS453%2BFOvnTDdxPXi76G%2BXxbhRlJg0jY7zkvRHojznR5lz7zHlhq6HsTvx3WZBdghQ2Rxrtjh%2FUtRoZesMUkYsHUYhUTpK3rL46jTpt2CqThN8uKYQ1%2BaHb&X-Amz-Signature=43a68f4849a6131ccb793bb6bd18734bd71f7f38d2e9608b9840ac87a169cf3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVBMMSF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T115955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCaNkCrzw3xkIPIm19sa3SJL9xIT9RHfv8aHv7sbZPlMgIhAP5Pu1YfLeAUIoDOVCJiYipAkXNIc8busFaa61%2BBLp5GKv8DCCwQABoMNjM3NDIzMTgzODA1IgxXy%2BJVW3sII8yoe%2Fsq3AMAEIP99nUpIcDCQHPCVwSLiNnF4zmpS1fslGkeINioeEr8FT9xdjehMBZjKo5rN1PoOjhD6ycarZaYdHR1ZAmN0Ph1h0KErxhd3RmXwuuSHIef%2BS7OhV1QJ5o%2B9WnY7HjslUcSTNMOzZ2jkvBMlkFW4ONVV7SBDP%2BmaYyaioOF7%2FbnkOgaMEyF%2FHsFrDUvrI44DRPndniuoedgpt27ebjto7NH7GhEi6YNSAbMy43qTvV7oGClrvNiciDgoT6UkfhvNRoJzj2YEP7KaENutZ992tB7cjd4ax%2F2kGDe0yguP%2BOQ8H4nJFgqG5cdbXQ%2FFz9Eqjm9QlfobEfQHrUB446dbOwhh8ZTcDBgxbASVA929SfMtRhG1DsqSviqMREK2pIPAUOBZbYD5OOuxjwi7%2FvNAkG0eftP5CW5Um76R%2BGp7BYoh8DNwbmY1ZLV366W9lC7gB9HDCqnocYvVT1IMEtJAOpCRsztyP0hPj4MccnLXl9TwkPSqqxzMGxSX%2BuxAT5JTGLmc8DRtJvbINC77BHKVenvFdtEqutrmw5QOwOkSKOQvcV9%2FGMPyhKpz3072lHQzWFH7ktzVQPhFnqK1sTQgt%2FehviqMLa1l6SrJllhk7N9f1YsqAH4N6YOmDDVrsDJBjqkAeFw23Q89DcraQuC%2BqCOl%2BWx4JcOqehGGXFSeu%2B98AWWG8BtrwiDFSOOxA1i4Ci5UVuyrBQzFF6bCOcEXVmevUzVqZdmWE3o%2Fb2ClhS453%2BFOvnTDdxPXi76G%2BXxbhRlJg0jY7zkvRHojznR5lz7zHlhq6HsTvx3WZBdghQ2Rxrtjh%2FUtRoZesMUkYsHUYhUTpK3rL46jTpt2CqThN8uKYQ1%2BaHb&X-Amz-Signature=f603976ffe366f03fa01a34718d6dbcd49490d33a588297d061deb87738ee87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

