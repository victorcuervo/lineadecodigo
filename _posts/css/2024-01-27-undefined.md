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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTRQJ3Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCBNDTlQ4H1E7ZCXj9nrFRKKP4Wlj0LHBdwYF56yoaahAIgKwTI0yrds8FVgwEwetFEJgyEFNTqn2sXseE%2BpofRKw8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCTZLWpkGhlFT07N5SrcA%2F1tBVkCROS28UzsSy1TqLKkdF%2FU14qxIquKRTIKzxql54OY3JWY7KTFKSPqyNgSShk7ClOymM7We%2F08vnAgby%2BQFaCgaLHedUaWLToOhclVV0VcKmIMePXvSViK5wJYwBIlnS1z19QdwmYy5on5wbP%2BTQG90kNP6sH%2FasS87eMByQRbMkKS5FrDztFufnO3xW8eiHsFDTFu%2BCC0zr1mbHCbMRNuVts7HDaouifOuutzoOGqLr3NIZF1SzzzllgvxvOF9Nl7qNC2przXLt%2Fvc0fZqtrA3xLH%2B4jyD%2FU7mpKkijA5JVx1YFSyi6zNyJ4EqXsm7cV0%2F1VCfZsFaaorJxPk9UBUj5dYU%2Ft%2FMeG7qAKLX3ZmcNYZPofX9w%2FbDkLgrWaorHrUBxBRVejepDWRVvAaz9z6iQxl%2BZ3PVAVwtLu5kmwhCgK6fxHa8QwJ0BSV4nEano25Npg3qXxyFeHJFTxCpZpUabJ3%2F90w7zWHDmQmvMjVc5Ka6Uc2YaDJ%2BjLEPsXZbw8TZlsLrP3zgLANnxa8gg2puBe7yA6uon6OB6olzvZQ4p79h6LTjnctrBua1pA93n714xlOwnrOJOqV9NR3zSfXLgTN22qcHRbCkIbcesN9TX0kjxqykuQDMMTawckGOqUBgnijybb68slg1Dxjb5dzYktyW4WyAW5VJFuWzen6VVqr8kok1LaDzaGBQlr0qGAG0mkRI0z8Ci8Krhn4WyAfrnvblxlqESNGRmfIcdk2NAqnPOuj2zVDRPOsOwrl59VUWOl7il4LlcdTBxFi7Hnd%2BpGbu48xVx%2BRZ%2BAJYjMw%2FFNggGqcHBTu4YHC3txZatydCZsYmIXCrRP5ynODum%2BXwug0c1vR&X-Amz-Signature=9e30b17cfbf0de673fb3caa59a7883db2d4a393717fde5a404d1745d28a201b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DTRQJ3Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQCBNDTlQ4H1E7ZCXj9nrFRKKP4Wlj0LHBdwYF56yoaahAIgKwTI0yrds8FVgwEwetFEJgyEFNTqn2sXseE%2BpofRKw8q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCTZLWpkGhlFT07N5SrcA%2F1tBVkCROS28UzsSy1TqLKkdF%2FU14qxIquKRTIKzxql54OY3JWY7KTFKSPqyNgSShk7ClOymM7We%2F08vnAgby%2BQFaCgaLHedUaWLToOhclVV0VcKmIMePXvSViK5wJYwBIlnS1z19QdwmYy5on5wbP%2BTQG90kNP6sH%2FasS87eMByQRbMkKS5FrDztFufnO3xW8eiHsFDTFu%2BCC0zr1mbHCbMRNuVts7HDaouifOuutzoOGqLr3NIZF1SzzzllgvxvOF9Nl7qNC2przXLt%2Fvc0fZqtrA3xLH%2B4jyD%2FU7mpKkijA5JVx1YFSyi6zNyJ4EqXsm7cV0%2F1VCfZsFaaorJxPk9UBUj5dYU%2Ft%2FMeG7qAKLX3ZmcNYZPofX9w%2FbDkLgrWaorHrUBxBRVejepDWRVvAaz9z6iQxl%2BZ3PVAVwtLu5kmwhCgK6fxHa8QwJ0BSV4nEano25Npg3qXxyFeHJFTxCpZpUabJ3%2F90w7zWHDmQmvMjVc5Ka6Uc2YaDJ%2BjLEPsXZbw8TZlsLrP3zgLANnxa8gg2puBe7yA6uon6OB6olzvZQ4p79h6LTjnctrBua1pA93n714xlOwnrOJOqV9NR3zSfXLgTN22qcHRbCkIbcesN9TX0kjxqykuQDMMTawckGOqUBgnijybb68slg1Dxjb5dzYktyW4WyAW5VJFuWzen6VVqr8kok1LaDzaGBQlr0qGAG0mkRI0z8Ci8Krhn4WyAfrnvblxlqESNGRmfIcdk2NAqnPOuj2zVDRPOsOwrl59VUWOl7il4LlcdTBxFi7Hnd%2BpGbu48xVx%2BRZ%2BAJYjMw%2FFNggGqcHBTu4YHC3txZatydCZsYmIXCrRP5ynODum%2BXwug0c1vR&X-Amz-Signature=511e7c31dad88522bd78556e5501a68a3c8595b96c28abe4057198071e5c723d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

