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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMSODNR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICtKMZlz7LEKjVmm0kCCOxO4woCtniFHQRgBQMmUpGkuAiEA%2BMuw7PJ5P0mW7cuQFdP3KrxyX%2FBR7mvMStBa8qp2rwUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNxzAAr1%2Fgm78mVl7ircA2x14Y8jahxZla6OvIIVnnXJe%2FhOyiKXcHG2YHFsL3hYagMX9emSGz7VGPPcKo%2B6EX5OKMusXFj2sEML5loUjJ%2FSqCdrB4mkTwPJJsM%2BTgQhyNsrDeuLgIgWYqkSoBy9r84HcWq2bTJMsjhDInaIh9RynO0iVns1t4M%2FOtezEqAI6E0O%2Fd%2Bh1HBejfm1nZqA6EHb%2BF175HyhTxsnbwU46kiL0WTmhmRFMxbvpuVZWYj1TnyqV36Q9poc7Hs017QfOjJPTsEUm%2BOzEwsKsqqcUJchzYGUBsKaUa%2BrItTQZjpwY4TBKE1SCRANjvRLb6wk8i8%2FiTm16Jq0he5XrCVBizwj6sEdjiwR4IrDOoOgD5JA8Ei1dbSYTKM6EcE5BvfGs3eYaH%2BIj3eSAaz4uLDcmT4kCSlu6VxNF%2Bs9TAByxsf9qZvy4ANejris3OfsMH%2BA8YcDeG%2Byx%2F6%2BKtFglQPfTKmOEYMh0wfEiBZNGoa0k8LhKr6lDD8RVqVxvI5d0pijM99GgicPJED%2BHV%2FeTzLOOYaAI%2Fq%2F5%2FKitiwwtuH%2BOMmDWcEoAOFnri24Hb3k30R7t3Hqwy%2BFgi1o%2FXeg9CdGqxT6gdnA25CXoQN2%2FGdR8E2xxKHm5Kwqgf0XTOJsMOjowMkGOqUB0K3SEfOW6y%2Fby3DxJBBZYpo3p62M44gzIjHbU%2FQibq9GZ5pr29qYfc%2B3xybu%2BaVeouOrEbdsIxEpQxCP1BKvT5343O5D6c5kgVMdf0b%2FTzyTWLkY6FCOpEBp5gHTJRA%2FzOYxyJaEvLQH57bujYEx2JCqDb%2FfTv4UetEv5p%2BCaOHvPB6lSOne2WSmXuprzVUDdyqEMoH4dvsfNoZcx94vydmKgY%2FK&X-Amz-Signature=d44c5029477172b0e15eb8473f325ad2dc133396618ed85b52050617888f601b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CMSODNR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T130737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCICtKMZlz7LEKjVmm0kCCOxO4woCtniFHQRgBQMmUpGkuAiEA%2BMuw7PJ5P0mW7cuQFdP3KrxyX%2FBR7mvMStBa8qp2rwUq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNxzAAr1%2Fgm78mVl7ircA2x14Y8jahxZla6OvIIVnnXJe%2FhOyiKXcHG2YHFsL3hYagMX9emSGz7VGPPcKo%2B6EX5OKMusXFj2sEML5loUjJ%2FSqCdrB4mkTwPJJsM%2BTgQhyNsrDeuLgIgWYqkSoBy9r84HcWq2bTJMsjhDInaIh9RynO0iVns1t4M%2FOtezEqAI6E0O%2Fd%2Bh1HBejfm1nZqA6EHb%2BF175HyhTxsnbwU46kiL0WTmhmRFMxbvpuVZWYj1TnyqV36Q9poc7Hs017QfOjJPTsEUm%2BOzEwsKsqqcUJchzYGUBsKaUa%2BrItTQZjpwY4TBKE1SCRANjvRLb6wk8i8%2FiTm16Jq0he5XrCVBizwj6sEdjiwR4IrDOoOgD5JA8Ei1dbSYTKM6EcE5BvfGs3eYaH%2BIj3eSAaz4uLDcmT4kCSlu6VxNF%2Bs9TAByxsf9qZvy4ANejris3OfsMH%2BA8YcDeG%2Byx%2F6%2BKtFglQPfTKmOEYMh0wfEiBZNGoa0k8LhKr6lDD8RVqVxvI5d0pijM99GgicPJED%2BHV%2FeTzLOOYaAI%2Fq%2F5%2FKitiwwtuH%2BOMmDWcEoAOFnri24Hb3k30R7t3Hqwy%2BFgi1o%2FXeg9CdGqxT6gdnA25CXoQN2%2FGdR8E2xxKHm5Kwqgf0XTOJsMOjowMkGOqUB0K3SEfOW6y%2Fby3DxJBBZYpo3p62M44gzIjHbU%2FQibq9GZ5pr29qYfc%2B3xybu%2BaVeouOrEbdsIxEpQxCP1BKvT5343O5D6c5kgVMdf0b%2FTzyTWLkY6FCOpEBp5gHTJRA%2FzOYxyJaEvLQH57bujYEx2JCqDb%2FfTv4UetEv5p%2BCaOHvPB6lSOne2WSmXuprzVUDdyqEMoH4dvsfNoZcx94vydmKgY%2FK&X-Amz-Signature=26951fc750142d7f4508128231305afeb07336660b25940b41f23b9cf53726fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

