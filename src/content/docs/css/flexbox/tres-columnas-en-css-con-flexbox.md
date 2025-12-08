---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJVXRSO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVQrK4rGLh2UEtNaStx4em%2Fzg13EEjbV4pBNS4hG55MAiBe%2BM8qZJVkU%2BJpRVTopoU9eeVkVowh1gtVuiCyoSVQDiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSHhVGaxNTxAkfYNKtwDrcipKzPFDXD8QRsH8o8l37%2BDCKrXyA2JA1JMJSJdsuueS0%2B7efkhVdcs3XbFfJrcTWkj6CxxvIDgInZ7fAbeXGb3eT5ckSfJpGLFBAm8bnV42EqwLR1v0VzeEPdO6c4uxx%2FTrLPVB2wMWtYHgZvX9Y2kSQUaGeWsNYq0UxErP0paFs3u%2FNoTemDcWIa7cNf5qYNKqjhzqv1jaFXMwuPG5CCBhABSHPrz452QoB%2FNY%2FEAmbiXU6XA0BAY%2BxqzEP3VU0oQ1jgKfkG03Df9xWFHMUhmg7e1gzefoCEQVgpNTX68EWn7Yxzic9ibGqCtA7fkFG4%2FTzpRwIgD8PYeDWyBRwMcwu%2ByxXC7x0vkg0%2F6TNt5y3Fj9%2FxUuZQ147EzwuvnRuoIYYnl%2Faqkbf1uVd6T2OaB6VqMqZZrJukwkMPn7gDGPutNPRAYkyElTJi%2FRPyjg9mQOLbv3INorFZXAQPiF6K0b9sWIJqxRqyte1bBUe80Yk1sao8H6dh5OFRn%2Bvnn1UKUHcq1wvqGnbVUyJv3loQydMdio7Ga032A7GQZzxVjJhK2aIB6dvgWGzKjQLhlTqf5aHUJ1pnsDLvBZs3oDousOSrwoPxD7tHfof4nrGpn84QnDYRsr3fa0YowqO3ZyQY6pgGezySUvutXfflF2WaXiR4obLez3Jseeb4KLCdJL%2BV27J%2FfFmqiyqHGaRWW9Cjg%2F2R6sms4goWEIdif2D181viaOF25tv%2FTwFxxtmEBGWSYwNb%2Fxi9bXPIkz2AsICHLf%2BmjvkmtRUwS3vxoXLs1jW%2FoWaQvQCqYrKvbLwQHjMhAnFP2ua08aB%2B3CA%2BnKWAo2Jx88VC2491t%2B6TOzaLu9oJGoK5KsuL8&X-Amz-Signature=3fe1f8f9c4639a84965388fcd1964df89b144b2bd95782fae2948dbf8c633b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYJVXRSO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVQrK4rGLh2UEtNaStx4em%2Fzg13EEjbV4pBNS4hG55MAiBe%2BM8qZJVkU%2BJpRVTopoU9eeVkVowh1gtVuiCyoSVQDiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDSHhVGaxNTxAkfYNKtwDrcipKzPFDXD8QRsH8o8l37%2BDCKrXyA2JA1JMJSJdsuueS0%2B7efkhVdcs3XbFfJrcTWkj6CxxvIDgInZ7fAbeXGb3eT5ckSfJpGLFBAm8bnV42EqwLR1v0VzeEPdO6c4uxx%2FTrLPVB2wMWtYHgZvX9Y2kSQUaGeWsNYq0UxErP0paFs3u%2FNoTemDcWIa7cNf5qYNKqjhzqv1jaFXMwuPG5CCBhABSHPrz452QoB%2FNY%2FEAmbiXU6XA0BAY%2BxqzEP3VU0oQ1jgKfkG03Df9xWFHMUhmg7e1gzefoCEQVgpNTX68EWn7Yxzic9ibGqCtA7fkFG4%2FTzpRwIgD8PYeDWyBRwMcwu%2ByxXC7x0vkg0%2F6TNt5y3Fj9%2FxUuZQ147EzwuvnRuoIYYnl%2Faqkbf1uVd6T2OaB6VqMqZZrJukwkMPn7gDGPutNPRAYkyElTJi%2FRPyjg9mQOLbv3INorFZXAQPiF6K0b9sWIJqxRqyte1bBUe80Yk1sao8H6dh5OFRn%2Bvnn1UKUHcq1wvqGnbVUyJv3loQydMdio7Ga032A7GQZzxVjJhK2aIB6dvgWGzKjQLhlTqf5aHUJ1pnsDLvBZs3oDousOSrwoPxD7tHfof4nrGpn84QnDYRsr3fa0YowqO3ZyQY6pgGezySUvutXfflF2WaXiR4obLez3Jseeb4KLCdJL%2BV27J%2FfFmqiyqHGaRWW9Cjg%2F2R6sms4goWEIdif2D181viaOF25tv%2FTwFxxtmEBGWSYwNb%2Fxi9bXPIkz2AsICHLf%2BmjvkmtRUwS3vxoXLs1jW%2FoWaQvQCqYrKvbLwQHjMhAnFP2ua08aB%2B3CA%2BnKWAo2Jx88VC2491t%2B6TOzaLu9oJGoK5KsuL8&X-Amz-Signature=4fc5b7378ff7420ac3a2db105820f0c83bc6c215b24ab60baa1f1802fc1b8647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

