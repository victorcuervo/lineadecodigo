---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNPN52I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGSklSGDfNqLqEWmlbbE35dTYACbOONSiaqQxsg1nQowIhAMwNeI3yAQ8BlMSY%2BlcsIqipbPI3vpAKtashZP%2BCnLd8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEY2jjRuMpj6yBVugq3ANNVkraPq7DjRLaqzbgk0LKpMJ1rn625yEIVs1%2FY8flZKDNCLEu2OMpzgZXT8CDEp0Aze%2BzTeAUDgJ2Ec1cXbJ9xvAFcbnI0XizQOKyApI9CbNKPF6J4%2BL7stNNnsQRtJSqDMQHcc23wR2PLb%2BsMk0XMJJlICJQZ%2FTtuT%2F8dPfvouCMX9uwyjZj%2BedcV%2FjQpNZINNcx%2BNDuU8MCfVdD24V8cJOxivUQtj6zfIgZDG88US23UJxjVzbxrJzG%2F45TXKO7NNAjVS72wFj%2BEXipLir5onqd4gkc%2Bi20d8SDMu4E4cRpn7Xro8OHJhqVueU3%2BCUQWqNERVRGMFkt9LtWVScZqOg2cHc5B5bi8NdObG3tDiJP6j5CCBdIoIfKDVqlH%2BWsHH1uDCasiNn1Klu5Of4jsac8MfdT5LksmakoAyqlhqxim1n%2FR2roX6LZYySps9jhQVgI6QBDRn13BvPFZaYwomgZ6DnKcaKWY4wsXhO3CxSqKUwlGZQN9Jb7M4gGvbLA%2F4R1QnEyoclpgagbZZQJgiiHZqytSLIx9TzZQ3Rdl%2FJTQ%2BqtUZowjhhzSDvPm7ShPfTImdKw5hRbMyNfroT%2BG7hnCFXPDpf%2F8H5QDQMzxhCIkvWka5WxaUC41zCemdXJBjqkAf6s%2BL9yp1twUDGaTC%2B7rerf9CZDVuAjAWJ8WpGwiKNfOIzxYTyoXA93NLpBFDtbQQKtniiCHO2l%2FN7hHjdjuD0YocERqBz4jaQXEVlxVeS5w6anLM826NLRUTXcRlCyccCITgFYby81ZopCajgcS2wIPzZ%2FDok0r1vhoJSvdNjzxX1RH2XyBmkdc1KUSE3asX89%2FIn0r9hHguRn03Mzttoh10Ur&X-Amz-Signature=17491aab8378893845177f188911cd11cba7645a365f6db5f4d9ef343bb425aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZNPN52I%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGSklSGDfNqLqEWmlbbE35dTYACbOONSiaqQxsg1nQowIhAMwNeI3yAQ8BlMSY%2BlcsIqipbPI3vpAKtashZP%2BCnLd8KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEY2jjRuMpj6yBVugq3ANNVkraPq7DjRLaqzbgk0LKpMJ1rn625yEIVs1%2FY8flZKDNCLEu2OMpzgZXT8CDEp0Aze%2BzTeAUDgJ2Ec1cXbJ9xvAFcbnI0XizQOKyApI9CbNKPF6J4%2BL7stNNnsQRtJSqDMQHcc23wR2PLb%2BsMk0XMJJlICJQZ%2FTtuT%2F8dPfvouCMX9uwyjZj%2BedcV%2FjQpNZINNcx%2BNDuU8MCfVdD24V8cJOxivUQtj6zfIgZDG88US23UJxjVzbxrJzG%2F45TXKO7NNAjVS72wFj%2BEXipLir5onqd4gkc%2Bi20d8SDMu4E4cRpn7Xro8OHJhqVueU3%2BCUQWqNERVRGMFkt9LtWVScZqOg2cHc5B5bi8NdObG3tDiJP6j5CCBdIoIfKDVqlH%2BWsHH1uDCasiNn1Klu5Of4jsac8MfdT5LksmakoAyqlhqxim1n%2FR2roX6LZYySps9jhQVgI6QBDRn13BvPFZaYwomgZ6DnKcaKWY4wsXhO3CxSqKUwlGZQN9Jb7M4gGvbLA%2F4R1QnEyoclpgagbZZQJgiiHZqytSLIx9TzZQ3Rdl%2FJTQ%2BqtUZowjhhzSDvPm7ShPfTImdKw5hRbMyNfroT%2BG7hnCFXPDpf%2F8H5QDQMzxhCIkvWka5WxaUC41zCemdXJBjqkAf6s%2BL9yp1twUDGaTC%2B7rerf9CZDVuAjAWJ8WpGwiKNfOIzxYTyoXA93NLpBFDtbQQKtniiCHO2l%2FN7hHjdjuD0YocERqBz4jaQXEVlxVeS5w6anLM826NLRUTXcRlCyccCITgFYby81ZopCajgcS2wIPzZ%2FDok0r1vhoJSvdNjzxX1RH2XyBmkdc1KUSE3asX89%2FIn0r9hHguRn03Mzttoh10Ur&X-Amz-Signature=854ecd9d76d34ad7acb47b6ba35028cd88e9acf49817e8dea75dbce9479af67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

