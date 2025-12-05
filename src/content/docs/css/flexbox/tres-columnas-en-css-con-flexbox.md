---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KIY2XVX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVvnBCGW4Uy7jivvxjBnEzoSuOZW35W4AJYx2Tog54NAIhAOPUm%2FQB25fQrLtmg%2BdDHrcWNK6xCE%2FlaMByUk7rSF2mKv8DCGEQABoMNjM3NDIzMTgzODA1Igxmkcd6m%2FU45kPDAVMq3AMVCG9InONCxJ7drgGqLYsnh2efpvPhbbah9bV70HlJBLBb3B1pAT4rCrDSzyFIH0cHOpDALaB%2F4KFntIE7inUHIkmHAlFxrOc6g%2B2cT%2B0UJut2pcUSt33QdpN39D9E8aWiefWuR8aNodSL4Ijpe3yTTFxdpVHMNz3R5yAL82UBtcsQytauEa3YVRI5uum33scmzwUNfdrXx6ANhYXenHOpaPL3CWF8Z1VDbWjXdCB04Ud7aDN0ufnjIIDDfEvCGmuD4XFTiwCxFY6En%2Bxcrm733dKlWKJJw%2F1IgBtr%2Bwow%2FlW8o28fIFPAnAsy5MZgAcnZOy%2FH963eutYkxnwu5ZqSMZYE3puJxvBgP%2Fc%2F70pUh85%2BGq7Us7N3Xeb4ymrsai1CVVb2wFxJ1pD0PRAsyK%2Fyd8M0%2FIpDRJqNcW8%2B6y4WG4l2A9IcZwrk2vngqKYwZfi6rrbMIEeJIrFOauvTLBI%2FX8k1Rdu7u5saJf9Rs1MOji%2BYGVMFDot4HnCFVgIsiyiqyKR40rPmfzBHJJvRgN87S7yTcbuhlth%2BJpz0cGbYv9wMWd0B8TvqVuZAoSFmuqJPByH%2F20PvX0XGG%2BNoPY0xoL38yJ5BkJgkkqaTyN8pFzrn3g6BHJvUyCq2GDCz9svJBjqkAejbjEPh2%2BdZyPxdGUYhONzXRjig5iwf%2BlqTFNfud9mwo7kWKZhyN4oFLPkltj8fWY%2B2qANDbztDwpFxByuw8g7TyiJ90gsWIE7Tw8kBuG%2FdXP2f4pyySRF%2BJX5byeRDDUA7NJ51948INFjGihWNptoGPcUlyDUTCv69Sf8SIho4faqxEQcqJQmwFwWkZFKpqmY7IuZ0s0cexMV5t8HQsFYMaZ3t&X-Amz-Signature=8e127507171c4d160a64a2035fbfeaadd644929c44d9d96edba7198f6e514bd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KIY2XVX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVvnBCGW4Uy7jivvxjBnEzoSuOZW35W4AJYx2Tog54NAIhAOPUm%2FQB25fQrLtmg%2BdDHrcWNK6xCE%2FlaMByUk7rSF2mKv8DCGEQABoMNjM3NDIzMTgzODA1Igxmkcd6m%2FU45kPDAVMq3AMVCG9InONCxJ7drgGqLYsnh2efpvPhbbah9bV70HlJBLBb3B1pAT4rCrDSzyFIH0cHOpDALaB%2F4KFntIE7inUHIkmHAlFxrOc6g%2B2cT%2B0UJut2pcUSt33QdpN39D9E8aWiefWuR8aNodSL4Ijpe3yTTFxdpVHMNz3R5yAL82UBtcsQytauEa3YVRI5uum33scmzwUNfdrXx6ANhYXenHOpaPL3CWF8Z1VDbWjXdCB04Ud7aDN0ufnjIIDDfEvCGmuD4XFTiwCxFY6En%2Bxcrm733dKlWKJJw%2F1IgBtr%2Bwow%2FlW8o28fIFPAnAsy5MZgAcnZOy%2FH963eutYkxnwu5ZqSMZYE3puJxvBgP%2Fc%2F70pUh85%2BGq7Us7N3Xeb4ymrsai1CVVb2wFxJ1pD0PRAsyK%2Fyd8M0%2FIpDRJqNcW8%2B6y4WG4l2A9IcZwrk2vngqKYwZfi6rrbMIEeJIrFOauvTLBI%2FX8k1Rdu7u5saJf9Rs1MOji%2BYGVMFDot4HnCFVgIsiyiqyKR40rPmfzBHJJvRgN87S7yTcbuhlth%2BJpz0cGbYv9wMWd0B8TvqVuZAoSFmuqJPByH%2F20PvX0XGG%2BNoPY0xoL38yJ5BkJgkkqaTyN8pFzrn3g6BHJvUyCq2GDCz9svJBjqkAejbjEPh2%2BdZyPxdGUYhONzXRjig5iwf%2BlqTFNfud9mwo7kWKZhyN4oFLPkltj8fWY%2B2qANDbztDwpFxByuw8g7TyiJ90gsWIE7Tw8kBuG%2FdXP2f4pyySRF%2BJX5byeRDDUA7NJ51948INFjGihWNptoGPcUlyDUTCv69Sf8SIho4faqxEQcqJQmwFwWkZFKpqmY7IuZ0s0cexMV5t8HQsFYMaZ3t&X-Amz-Signature=be8d5c1ecfe4275ad1662f98e4255c39839182908d90fefe109195580c7feb36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

