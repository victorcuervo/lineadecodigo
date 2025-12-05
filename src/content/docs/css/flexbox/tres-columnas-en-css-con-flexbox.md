---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=a7400cc808b49857132dd3094ccacb3652c805c81a61d9b663cd286584683975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AV74C5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBboA7xRLgrjYY6Tq%2FmaU9V0nOz7Zu7zXWrWy3rt%2BP2gAiEAi%2F4tRGZVToVeWe0JxZS%2BZzjRq8MDjZ8ABQ5zjo354Gwq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAp%2FC31VD8oXnmZWhircAwrhGS7wpI6uGiU4VT0bxdR3xa4D0jgToah%2Fvp9PN9taf%2FSJsIt7FBO1UIiKyT7PCg5NrjPVMPL%2BNKLeS1N%2BT5Lv5X87c5pG6bhEkPommnpB7N7qkjwVaUnNF%2FXDtawKtPpQwgiVTm4ss4rGJ5e36O48lkp1b172jEIzYK1YcauPwCLj4PG5cN9qGGA4pX3vB23TNH1oc%2FTdARL%2Fimt35yuRFFfM5ML85KFZQ%2F7AlIwmiuv7EJOL88ml0LZshnEqSlG8UnDxFMj5MH5lATCR8GMBUAa%2F4vP6wG2gdib1IJHuXtWkAKL7NhEBkyXydEZV8YqKFEFB8MPQILp1OgARe1nsPt2R0OmpCiRRqg3qdTMuEnCgLkl6Ls7LtQdvVI04gNIGXk9%2FPdVDUc96tdce8Uj9swJ49HYG6qyNljGb1SqK2LFaNnwewbxr8OQU2JyjdtinyXgahqL0sg16gseGEJFEGLoXkXU3D7%2FZBZHIspOtasuPEls1WR7UjHHv1cR%2FsOA%2F0K%2F3PxMqAo0yurBBANb1ixoVOUYY9YVlGUc4VqqHVr1qu0lkH%2BTA1GcRqOAj%2BSkkgXaaSfhVwXJ6TH0msRdaMQYzcdkenVolTVSWVZ%2FcFqg%2FS8%2Fv1wkK9c3KMNWyyckGOqUBtDvCTkTzayoQtwLdKQuFWmKKRSWG9sTx6ED6breUxs1vCp6ajDRBUfNgR5IkmwiUu820wTkBlWgLtxncuHHnFzLWj8w0yGJZMPeJOBIY2zPEhuNMFke%2Fqhmn9J%2BGw7N6CL8%2FGmSKrCqtB1CTMoaK7RmrA%2B%2Fz0UeKKaPeMvXon6MOjM7J1hWKVq%2F914wGYSsVJ%2FLj2wBNM%2FDvQ2lDDRYM538cckTh&X-Amz-Signature=e2c6b83bf637715be4fc28759a10cb5ba7339e1b02718e0f8936adc2de3df6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

