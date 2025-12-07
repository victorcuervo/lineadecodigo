---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ISPX5C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMKB8y8pjgBHcF8IuJd5B0CeBOYVF2WMtBq6z0ku5LwIhAMBCQY%2BD28wMXyrIgHmC%2BFhvWChG%2FpCeCqw465wK3%2BQwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLGLtDivlzzA3BoUq3AMJlT50cZwcKJHYrbYDS6SEzBei%2FpXAdBZCSwnBwuw8UGHc%2FD4ffQJ9zuJP5QvdVHH3Vc%2B9yZRoeTiuvkNA7AurFhJg72IflzoFwz2lOPHHg4tJ8WlHtzke5Pz5yNqsuGlJgEObnPQnMdFNaI4%2F3FhNVBp3nLh0lr61uDCw3DFMK0k5MQ6%2Bxr1aD7aePRk%2FJXdOUbiuTMTXiVM2K4spHWBLLtPedNFp30vAVVR57wPrDFDqRQKIIKaLljsgWPzqV7Srlm3SZ3agDm1Q1csVz%2Bt4oPrX%2BF%2BmiHhzb%2B%2BqmPCxI9PMCju11MzmEeBl0HDXOfnXHsbBlzPnaTO1Q6z47X9LCbUaQpcjAE3AsVC4FUGX5%2FbIo2HS3q3%2BbnMDlN%2BpC2ubOqpstjJN4nf86GDe%2BCuv57RHAOMbNAiM1WJH91flgfM4aSYGhxu6AuhqlgfhmJyPJ3Cb%2BO5HmwCAIQvlhwb%2BC51I1M84Ggvp2jYqaHLomvJb%2FqF%2FRH7cwKTofv8OIoUMl2tfQJffjNcxa2GPEkKHxC6nhJg4ur2CSL3%2B2WIiFk4k%2FVzdoPWsRzInvCRKn%2FwB3FXpnDhUxXzX%2BRUrsSWNeFAlZ9E9o405UhHgH5DsNPvdna%2FL%2BZGL94gS9zDU%2FdLJBjqkAXEWpgpDTe0c93H66TRsvV88S6u0AwZnyiPMEAq2Lhk1LaMFm0TtlnO0u4znMQSFQ0U2trpsb7PVlK%2Bv8H746M2JWV90BUQcopwYTtkV488I1bBBDoIG7rs7tDx1lLmRkvTXFKBQkR8v8vieVDjxsW%2Bi13Pn0qwnKbMdrIluJ%2BaOj8mJqlbUaIFdMSqRa5IMvR9F5sg4ue%2BWRINk7P8%2FeeppP2if&X-Amz-Signature=e841c7231fc02a8de3c1255acdf9ceea15aa9c4f592904f2a6873605642ebbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646ISPX5C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTMKB8y8pjgBHcF8IuJd5B0CeBOYVF2WMtBq6z0ku5LwIhAMBCQY%2BD28wMXyrIgHmC%2BFhvWChG%2FpCeCqw465wK3%2BQwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwzLGLtDivlzzA3BoUq3AMJlT50cZwcKJHYrbYDS6SEzBei%2FpXAdBZCSwnBwuw8UGHc%2FD4ffQJ9zuJP5QvdVHH3Vc%2B9yZRoeTiuvkNA7AurFhJg72IflzoFwz2lOPHHg4tJ8WlHtzke5Pz5yNqsuGlJgEObnPQnMdFNaI4%2F3FhNVBp3nLh0lr61uDCw3DFMK0k5MQ6%2Bxr1aD7aePRk%2FJXdOUbiuTMTXiVM2K4spHWBLLtPedNFp30vAVVR57wPrDFDqRQKIIKaLljsgWPzqV7Srlm3SZ3agDm1Q1csVz%2Bt4oPrX%2BF%2BmiHhzb%2B%2BqmPCxI9PMCju11MzmEeBl0HDXOfnXHsbBlzPnaTO1Q6z47X9LCbUaQpcjAE3AsVC4FUGX5%2FbIo2HS3q3%2BbnMDlN%2BpC2ubOqpstjJN4nf86GDe%2BCuv57RHAOMbNAiM1WJH91flgfM4aSYGhxu6AuhqlgfhmJyPJ3Cb%2BO5HmwCAIQvlhwb%2BC51I1M84Ggvp2jYqaHLomvJb%2FqF%2FRH7cwKTofv8OIoUMl2tfQJffjNcxa2GPEkKHxC6nhJg4ur2CSL3%2B2WIiFk4k%2FVzdoPWsRzInvCRKn%2FwB3FXpnDhUxXzX%2BRUrsSWNeFAlZ9E9o405UhHgH5DsNPvdna%2FL%2BZGL94gS9zDU%2FdLJBjqkAXEWpgpDTe0c93H66TRsvV88S6u0AwZnyiPMEAq2Lhk1LaMFm0TtlnO0u4znMQSFQ0U2trpsb7PVlK%2Bv8H746M2JWV90BUQcopwYTtkV488I1bBBDoIG7rs7tDx1lLmRkvTXFKBQkR8v8vieVDjxsW%2Bi13Pn0qwnKbMdrIluJ%2BaOj8mJqlbUaIFdMSqRa5IMvR9F5sg4ue%2BWRINk7P8%2FeeppP2if&X-Amz-Signature=5778e8f6599c6b7d8b8a936b3d2cc9a66899a0ad08176479c80a8f328de0af8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

