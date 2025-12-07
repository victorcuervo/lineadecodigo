---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUGSR4W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fi9u3j3qKXLwljkU8PCA90qV2%2BLPzguk3zbqzVEvOLAiEA9UDCGNZJk704CrmH6%2Bku3582Tcr4cIEUf0Zk1UW05o4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxWTL%2FFvv2v0BYTdircA3HEJSrhcCUcxwimpOfvsG3BF0y1rpoQDjo8%2FWRkSCuaGVj80uTuPuJenJrO4aNgPciXbmCr5dO57W1ZekGujKFW%2Fj6Uw47hioVwFx3NtNAhysKtCTElCcd3hVsuaJAhNzYQH%2Btm0J6Eb0lbUZSNPhof6IHqeXF6Mtb9aXFHA6DEFe6%2B7T%2BNaBxAxpQ55aWOcGWA1dsxQ7R5bkW0E1ZPjD2VTMmiKg4VFlxGGO9%2BdKtG7DfEMl5SYyBw8PFXFnACtbnGfRnEdkyt8v%2FGN%2FB6lfyeRwUpNXvaBAa%2Fi3zCyXUIJ3D%2B8pLT%2FV8k3fEc0SYDqlEUhwiGNstJP0DexUnHEg%2FDEGW0R8eGyomUf4A4jFx4I%2BI4MQaijP4%2BODMP7Dh5jUUynZXP8Jpa8%2BIEkw7DXw%2B9MTpBI2xA9Gghvc6D%2BAA5UQj3bG311PTmFie8Pji9NqvpGp5b2AD%2F0M70pwOlHHD%2BQ4jHx%2Ba6%2F46jgKhH4B6x8PSQMzoF2noGRP%2BbDXfgGwmDybWpu4HiTl7910ivls5nbUfekz9GQ6LTNkB%2Bp2EwIbxyWgU3WZRlvCPgU9R6cbYy8oOyIF0xJ0GJYK4H3pJWVwxZ3sAF6xmnTUuQo9Mnay%2BHkvgjJxhUOAesMO691skGOqUBzlBfFFSjllPTcjJmMxvrkbKQnakv0yskVDFl%2FM4vFLBMjUmTBOfJCdtmIZzdVH52zHP%2BpywdY4gTe54v%2B7RKyG3fxjx4wPkIqwvRbTAxx9ZoqcrQ2NNqA7ewBBN3W5D6udOdZwo2SmB%2Bz5PobM3zVSOXFvbmw3pt%2FemYc6xiwj2mRao1WUUh0ekMnFD9ZWCEIC6qrt7YhROIplIc%2Fr3aCsW9cbGf&X-Amz-Signature=546cba8c7d71d8093aed1b6b5cc8d76d6328617d363640406c18efdefd5057e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PUGSR4W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID%2Fi9u3j3qKXLwljkU8PCA90qV2%2BLPzguk3zbqzVEvOLAiEA9UDCGNZJk704CrmH6%2Bku3582Tcr4cIEUf0Zk1UW05o4qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxWTL%2FFvv2v0BYTdircA3HEJSrhcCUcxwimpOfvsG3BF0y1rpoQDjo8%2FWRkSCuaGVj80uTuPuJenJrO4aNgPciXbmCr5dO57W1ZekGujKFW%2Fj6Uw47hioVwFx3NtNAhysKtCTElCcd3hVsuaJAhNzYQH%2Btm0J6Eb0lbUZSNPhof6IHqeXF6Mtb9aXFHA6DEFe6%2B7T%2BNaBxAxpQ55aWOcGWA1dsxQ7R5bkW0E1ZPjD2VTMmiKg4VFlxGGO9%2BdKtG7DfEMl5SYyBw8PFXFnACtbnGfRnEdkyt8v%2FGN%2FB6lfyeRwUpNXvaBAa%2Fi3zCyXUIJ3D%2B8pLT%2FV8k3fEc0SYDqlEUhwiGNstJP0DexUnHEg%2FDEGW0R8eGyomUf4A4jFx4I%2BI4MQaijP4%2BODMP7Dh5jUUynZXP8Jpa8%2BIEkw7DXw%2B9MTpBI2xA9Gghvc6D%2BAA5UQj3bG311PTmFie8Pji9NqvpGp5b2AD%2F0M70pwOlHHD%2BQ4jHx%2Ba6%2F46jgKhH4B6x8PSQMzoF2noGRP%2BbDXfgGwmDybWpu4HiTl7910ivls5nbUfekz9GQ6LTNkB%2Bp2EwIbxyWgU3WZRlvCPgU9R6cbYy8oOyIF0xJ0GJYK4H3pJWVwxZ3sAF6xmnTUuQo9Mnay%2BHkvgjJxhUOAesMO691skGOqUBzlBfFFSjllPTcjJmMxvrkbKQnakv0yskVDFl%2FM4vFLBMjUmTBOfJCdtmIZzdVH52zHP%2BpywdY4gTe54v%2B7RKyG3fxjx4wPkIqwvRbTAxx9ZoqcrQ2NNqA7ewBBN3W5D6udOdZwo2SmB%2Bz5PobM3zVSOXFvbmw3pt%2FemYc6xiwj2mRao1WUUh0ekMnFD9ZWCEIC6qrt7YhROIplIc%2Fr3aCsW9cbGf&X-Amz-Signature=d8711cc8a3ad61ef1db7e06140873546827eecde0ebd3bea51c7c3c5c97c43d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

