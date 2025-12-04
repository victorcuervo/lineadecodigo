---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGV7RKTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC8eFgup6ZAQqyumAlpAbDIle%2FssEfZH6765YCaeGUskAiEA2IPTnuWsUC4sUjdhsTMiAHRRWK%2FNCvm6ZOzJNsIXP9Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFY%2Fol2xcqbq9ObD2ircA9WGNCw5YmHCJulKbjYqgdRfcTOX9nbrUedLDVlQcTR9IYPRWv2uYJKveUgvC2tzIIZIwZCiPVD3zlW6XaiWS06yjV0J4YoKLMnyev1HITnmawXyqr%2Fj9BlgwT7erj3ldXQPC5lQsUuckX061ljIGE%2B%2FgCdvXSJSoTRRaUjVbgTCMCwgLTGyPjsnYkqJmd5QhZdJuObBaljRZa3NBC03%2FurXQgT8WqUAxwsXA3mJZBCizrzUtM5G8cOFjA%2BxhVKn3QAfT0R1xaQYmmGqkK9CHXQt%2FIt8pApDpbsq%2FPlGEBM%2BroY41AllGREgjy7Qp5EZRO5qWwdC%2FN9%2BrGrPN9%2F8Qr%2Fhsohr%2FGxxV18QsE5jyTKYAknM64AyOTO%2FBNwHPT%2B11S2Lb4YhPWZGfdBBwBDlMdiXSYI3LxWBLu11KxHQPgepUbz4tb6NH1O7jwX07JRqSj5sFRO89%2BA3h1iDRYycmkqys9HCVVHtUvqHZEJBXoZc%2BPUV%2BnZJBhJRLO1E8XEYsxzQwLOznwGEGmZPPRWi%2BoebO3l%2FtOcmBTcjgFfxlXkrcC2RauU9qJ3S5z4rAtVbrulcDI6SZdauabsHDuB%2BqCOMW4kWYX%2FV6dZ9bHys1qIxjOTcTUFOJzUn8Cv5MMnnxMkGOqUB3XrQCpa59lLhhjnQdQnrv9iw2nuUtCAnnQjdqAMwZcc12eDtMYx5FJCEs7Y%2BYc9D4GQS1k4GKo%2FILbCFi5fJEMPKfJ4hZj5KRR0Zgw7tNsJULOgk2UrPULCogBn3G0ZiDOReoA5GLiSfErHe7PNHsjn%2FQ394oi%2Fv9mYGG2cw2jZHAgXaiZ%2B18rj02f5MnMx%2F%2FgpT%2FD%2F%2BbHQbNP89S0DH4jWsro0B&X-Amz-Signature=a4a23599b87bc74a7eb7e8db940d41eb33d0b806cf816b4c383d2458140bf62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGV7RKTP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIC8eFgup6ZAQqyumAlpAbDIle%2FssEfZH6765YCaeGUskAiEA2IPTnuWsUC4sUjdhsTMiAHRRWK%2FNCvm6ZOzJNsIXP9Yq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFY%2Fol2xcqbq9ObD2ircA9WGNCw5YmHCJulKbjYqgdRfcTOX9nbrUedLDVlQcTR9IYPRWv2uYJKveUgvC2tzIIZIwZCiPVD3zlW6XaiWS06yjV0J4YoKLMnyev1HITnmawXyqr%2Fj9BlgwT7erj3ldXQPC5lQsUuckX061ljIGE%2B%2FgCdvXSJSoTRRaUjVbgTCMCwgLTGyPjsnYkqJmd5QhZdJuObBaljRZa3NBC03%2FurXQgT8WqUAxwsXA3mJZBCizrzUtM5G8cOFjA%2BxhVKn3QAfT0R1xaQYmmGqkK9CHXQt%2FIt8pApDpbsq%2FPlGEBM%2BroY41AllGREgjy7Qp5EZRO5qWwdC%2FN9%2BrGrPN9%2F8Qr%2Fhsohr%2FGxxV18QsE5jyTKYAknM64AyOTO%2FBNwHPT%2B11S2Lb4YhPWZGfdBBwBDlMdiXSYI3LxWBLu11KxHQPgepUbz4tb6NH1O7jwX07JRqSj5sFRO89%2BA3h1iDRYycmkqys9HCVVHtUvqHZEJBXoZc%2BPUV%2BnZJBhJRLO1E8XEYsxzQwLOznwGEGmZPPRWi%2BoebO3l%2FtOcmBTcjgFfxlXkrcC2RauU9qJ3S5z4rAtVbrulcDI6SZdauabsHDuB%2BqCOMW4kWYX%2FV6dZ9bHys1qIxjOTcTUFOJzUn8Cv5MMnnxMkGOqUB3XrQCpa59lLhhjnQdQnrv9iw2nuUtCAnnQjdqAMwZcc12eDtMYx5FJCEs7Y%2BYc9D4GQS1k4GKo%2FILbCFi5fJEMPKfJ4hZj5KRR0Zgw7tNsJULOgk2UrPULCogBn3G0ZiDOReoA5GLiSfErHe7PNHsjn%2FQ394oi%2Fv9mYGG2cw2jZHAgXaiZ%2B18rj02f5MnMx%2F%2FgpT%2FD%2F%2BbHQbNP89S0DH4jWsro0B&X-Amz-Signature=7b7e0cd2e829d3cd35c1379c3112436ab719455797c84431c27e6ccd611a0081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

