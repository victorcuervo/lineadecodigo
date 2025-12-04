---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4GP27R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCzyDNw0ph5L5UxWGxk5KqAtA9wrsT6yBm9QCuvr4Hf%2FQIhAPe9jvWQxDDlqsUeNPk1PIk0iCAmzkjhTC%2BChEtk6GiZKv8DCDsQABoMNjM3NDIzMTgzODA1Igyp5hEmk1jFj1GlJxoq3ANcC92udrajOwlmiYg7hgkIh%2BADOhMlHKU5SeA0cYACI3ab1paR82Goq7mreqsULVYDfmU%2FYVnfRsOX7KGC%2Fy4QeqIpBB5taWIOht29PtOIohnyRAIZ93QQVDkNiqP2rESn%2BYEjr%2BdRthwK855TBDKswfU71TmwRwtrSxr8eaOgJundqZqUSfj2ZkldK2nR3T%2FvjtK1cAfF2gpzmojqj3aUrFwYO2Sr5aBC%2BuwpxxvqyLrRi6hCyZmAnuIzjMUmu9u5jNpaHQpxMxGW1D3TVQgtM25llTmPTwpjr2Me%2FwoRIqfq3OummzopwD19LEMQOjJJb8rGVLOI9xRBL0Pumai4tfeQxWFKjUy0pKPEgIDvOkI5UjOzhhKiBHpeMyDyAw432ML1SoEz4NREX7TqdgtMyFeV83LZmhoTSSb44sGpNZP5rfsK%2BO4hikXoeR7ddLLVRwHuP5MLbe70nSlMT06B2SFKbjAuE8FLmjEdr6rOegT1y3SV5b2yhFWdMK0iN6MrifqKLZ41OtOL7PbaUdUEBHc74%2BDYiVHQk2DAYiAOlt14esXuQaXQ71fyEoJDHYlr5%2B0PyxIFj782MPtsKpG6xOSKnDkqmRd1JDw4YFv0YbVnXWp1h%2FnVU7aD2zCO1cPJBjqkAXYLdTFtQTLEIDwnbjbuv7rWOFRGhLc2IyVwpt3AsnpTw%2F1vSbrRM1Im9kruMyfA24oPPgiuGYVYKW90E2pqZ85JdpAtIwukCAtoiEZxXxxtCbwvrKy3opz7YRCOAv3UFsNZIWvcUbD9AphYtMfURANXY51l%2F7z2vnt8j5NlYJJsrXFzN580Zo1YKipF1mdwo8SfyAUPWNCzaqgYlwiZUdRTUhFx&X-Amz-Signature=0aed6ddacfd9d5a75c20fd27b2019f0a9acc745ac62607403c147e64a29372a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT4GP27R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCzyDNw0ph5L5UxWGxk5KqAtA9wrsT6yBm9QCuvr4Hf%2FQIhAPe9jvWQxDDlqsUeNPk1PIk0iCAmzkjhTC%2BChEtk6GiZKv8DCDsQABoMNjM3NDIzMTgzODA1Igyp5hEmk1jFj1GlJxoq3ANcC92udrajOwlmiYg7hgkIh%2BADOhMlHKU5SeA0cYACI3ab1paR82Goq7mreqsULVYDfmU%2FYVnfRsOX7KGC%2Fy4QeqIpBB5taWIOht29PtOIohnyRAIZ93QQVDkNiqP2rESn%2BYEjr%2BdRthwK855TBDKswfU71TmwRwtrSxr8eaOgJundqZqUSfj2ZkldK2nR3T%2FvjtK1cAfF2gpzmojqj3aUrFwYO2Sr5aBC%2BuwpxxvqyLrRi6hCyZmAnuIzjMUmu9u5jNpaHQpxMxGW1D3TVQgtM25llTmPTwpjr2Me%2FwoRIqfq3OummzopwD19LEMQOjJJb8rGVLOI9xRBL0Pumai4tfeQxWFKjUy0pKPEgIDvOkI5UjOzhhKiBHpeMyDyAw432ML1SoEz4NREX7TqdgtMyFeV83LZmhoTSSb44sGpNZP5rfsK%2BO4hikXoeR7ddLLVRwHuP5MLbe70nSlMT06B2SFKbjAuE8FLmjEdr6rOegT1y3SV5b2yhFWdMK0iN6MrifqKLZ41OtOL7PbaUdUEBHc74%2BDYiVHQk2DAYiAOlt14esXuQaXQ71fyEoJDHYlr5%2B0PyxIFj782MPtsKpG6xOSKnDkqmRd1JDw4YFv0YbVnXWp1h%2FnVU7aD2zCO1cPJBjqkAXYLdTFtQTLEIDwnbjbuv7rWOFRGhLc2IyVwpt3AsnpTw%2F1vSbrRM1Im9kruMyfA24oPPgiuGYVYKW90E2pqZ85JdpAtIwukCAtoiEZxXxxtCbwvrKy3opz7YRCOAv3UFsNZIWvcUbD9AphYtMfURANXY51l%2F7z2vnt8j5NlYJJsrXFzN580Zo1YKipF1mdwo8SfyAUPWNCzaqgYlwiZUdRTUhFx&X-Amz-Signature=6d9aa1587442d697f8c156942d798abf7e813bcbaa53a049eadb136467d19f42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

