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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEDRTIM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCV%2BoIv3P%2FnpovQiZkWVwOjPzdh312ij9K5UiiWFe7YOQIhAJ0sZKaLhJ4zE3Fu75RBq0CboNnuRrDrSexvFP%2BnVr%2FHKv8DCDEQABoMNjM3NDIzMTgzODA1IgxUEd2Lcs0OxccEuJIq3APpZFcTZAywkbIowMke%2B08dNCAPiwTFeDCXgejqff698f0L6p7qajrBrnN0KhOIR9goUSz1wzZzfd7d7RpeI7PeimJs%2FKJWFezhBOTRW5tQ8ARPmGQXwEiMO0cbkGKCfsd1z%2Bf237rNRkq2pEHSD0jFEdB4IYABvR3qkvlOnj7Wz4uew6HeDQsIqqjTEq8pd9Ef9fgNN91dc1geemP9icPaSGeKG86hntsS9xtnun2cPyW%2Bgy8oJpacjgGwOcCBlcH%2Bmfj4K7OkaDo1%2FwtDgDitT3xa%2BU8Akqy9rjDk3dUmnQbIAE7LbL5fKVrQITjdTaxUI381eeD%2FUPpqCdZxGcHf84ixi%2Bur1125vFA9WSreP9ZBLO0NYCg0JHDYR4bHnXlojnxuuyvhpXcRH78vvqGLojmpnTc%2FALPrxf%2BDcGraZZfLbmWd3MgNrSxtBmh8nWjauDkMb%2FDEr8gbIF9opCJFCo8xj3o6jR9hNb5Rw7IeqVPg6xjp0T%2BRuKIeeeC6K1xEgRR2L908F2rIy3yk6%2BWV4hyEPtEclvM5lCNqP4RltVvK4b1wK2zPv0FflZNWR6Y%2Fong92DjWT1lmVzkkV2E5YtNG5tfFana4AiB90Cp6p16nIU1bk%2BZSaxLz4TDlwcHJBjqkAa910lnSRVeF4XI1o%2BnxZujRVw4D8Nsgc4KB2v6TjZt6jd1iuxv%2FAYAUrvXMcn%2FBRgfTtMvpESY9%2F7AYNX5GL9YAK83f73mKsPZln7K72QaCinWdv2hBh%2FHgKGKqpzrrqZh0cPJIspsK83U3x84EZ58SuY6VqXyRqZEL7LR867AmzqEEoGtpcOe%2FkTL8HK47KRBacnFYBQSAHdiScU1Z9kL14KOa&X-Amz-Signature=9c33f54543c1bd7ce56a935fb655372910cb9d123b3d9d99ec6fea7bc9148949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSEDRTIM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQCV%2BoIv3P%2FnpovQiZkWVwOjPzdh312ij9K5UiiWFe7YOQIhAJ0sZKaLhJ4zE3Fu75RBq0CboNnuRrDrSexvFP%2BnVr%2FHKv8DCDEQABoMNjM3NDIzMTgzODA1IgxUEd2Lcs0OxccEuJIq3APpZFcTZAywkbIowMke%2B08dNCAPiwTFeDCXgejqff698f0L6p7qajrBrnN0KhOIR9goUSz1wzZzfd7d7RpeI7PeimJs%2FKJWFezhBOTRW5tQ8ARPmGQXwEiMO0cbkGKCfsd1z%2Bf237rNRkq2pEHSD0jFEdB4IYABvR3qkvlOnj7Wz4uew6HeDQsIqqjTEq8pd9Ef9fgNN91dc1geemP9icPaSGeKG86hntsS9xtnun2cPyW%2Bgy8oJpacjgGwOcCBlcH%2Bmfj4K7OkaDo1%2FwtDgDitT3xa%2BU8Akqy9rjDk3dUmnQbIAE7LbL5fKVrQITjdTaxUI381eeD%2FUPpqCdZxGcHf84ixi%2Bur1125vFA9WSreP9ZBLO0NYCg0JHDYR4bHnXlojnxuuyvhpXcRH78vvqGLojmpnTc%2FALPrxf%2BDcGraZZfLbmWd3MgNrSxtBmh8nWjauDkMb%2FDEr8gbIF9opCJFCo8xj3o6jR9hNb5Rw7IeqVPg6xjp0T%2BRuKIeeeC6K1xEgRR2L908F2rIy3yk6%2BWV4hyEPtEclvM5lCNqP4RltVvK4b1wK2zPv0FflZNWR6Y%2Fong92DjWT1lmVzkkV2E5YtNG5tfFana4AiB90Cp6p16nIU1bk%2BZSaxLz4TDlwcHJBjqkAa910lnSRVeF4XI1o%2BnxZujRVw4D8Nsgc4KB2v6TjZt6jd1iuxv%2FAYAUrvXMcn%2FBRgfTtMvpESY9%2F7AYNX5GL9YAK83f73mKsPZln7K72QaCinWdv2hBh%2FHgKGKqpzrrqZh0cPJIspsK83U3x84EZ58SuY6VqXyRqZEL7LR867AmzqEEoGtpcOe%2FkTL8HK47KRBacnFYBQSAHdiScU1Z9kL14KOa&X-Amz-Signature=2c6d2341fda03f8380e629e3011d9d42cef4e31410916a4169f4b4dea64b7051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

