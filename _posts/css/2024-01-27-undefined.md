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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMDMZTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDaddjwH6lUxpyhBPapppZdZI0EKFiADNCV7KbB9zA9zAIhAOASfGsXOcbZK7UQbuSLTrCyW16IvmqBhl%2FFry176yhKKv8DCC4QABoMNjM3NDIzMTgzODA1IgychRHx1FDQ%2BVVBRO0q3AMakQPyC4G8HfILck1iMZQ67LiKf%2F7PBXZsKY2l3i%2BPDuwxJxT7OcJeDRwAPsCZdTnYOkQHuQcTrXaYSsser1kwS1ZKgTQ3duk%2FDNCw8BrPE97sD8vvMXKMApCr0JGDk3ZpkB%2FC71UcATuw%2Bohn5%2FJucwAfkk6iVN7QLNJvHgKL%2BlYyVaDaPtZqNmI5lepoon1n0AS7ASPqey5IFWFdzMRseium3HZLycRVvuXVGqAwecc5V95Zf11%2BQefJQpLQivjwMBLkVrTVNeQDoXnO6%2B%2FlB9cGzMoihns50gChfSKEoai680gWQV886D4kRTQe%2FKebequ63KIr6rHZyt7N6hndq9E4s7fuOsrgZ4rvjEDKpxS%2FBJGrAn5Vj9iufRdefXufF8QxSjVWaYF6A%2FZ56UQNrBkkftKZYttIgweKNpt4DFJHLlWC4Tk5KFayYbZ4JXDeZozkbL%2FFNel3MbaDk66NLRUn0tjH77BNldioDn2QinRZ5KRypVgOptJpezRIllojQBP%2BLskVZU1XdobCBMAFT38yI0FEHrk9K31Zqj6dOylBO1ItrF0tnkxmT%2BU4ftQoyBL6SHGNR7Pdotdx0CmsYDhLiwgaNwyw9XrEnt3bztIH6FWUUm5ztMO3YjCs6cDJBjqkAc7KNDFxjCI8N5tSL%2BKze6A%2Fo%2BuhSQxnbq8QrrKfl19IOUjh0ooTiyu%2FK0XcnBlJWz2uHd4oVslmW8mM8cm9%2BMijp5gm1JYEVAM9ub9qt6Ahe4DKF%2Bee7dVLoJrErZ9aLjXW7hgFS9r5vme3i1nhbzABAMJTPhASghZGJebrjnkLTwJZmOtWkYZfwLk%2FbmAcEHQYQMoscScc5HeQhWfmUGzBkfzQ&X-Amz-Signature=dd164409969ea338dfcfda812ec9acadc2bff46e80fe76a59322da297c7f0144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLMDMZTI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDaddjwH6lUxpyhBPapppZdZI0EKFiADNCV7KbB9zA9zAIhAOASfGsXOcbZK7UQbuSLTrCyW16IvmqBhl%2FFry176yhKKv8DCC4QABoMNjM3NDIzMTgzODA1IgychRHx1FDQ%2BVVBRO0q3AMakQPyC4G8HfILck1iMZQ67LiKf%2F7PBXZsKY2l3i%2BPDuwxJxT7OcJeDRwAPsCZdTnYOkQHuQcTrXaYSsser1kwS1ZKgTQ3duk%2FDNCw8BrPE97sD8vvMXKMApCr0JGDk3ZpkB%2FC71UcATuw%2Bohn5%2FJucwAfkk6iVN7QLNJvHgKL%2BlYyVaDaPtZqNmI5lepoon1n0AS7ASPqey5IFWFdzMRseium3HZLycRVvuXVGqAwecc5V95Zf11%2BQefJQpLQivjwMBLkVrTVNeQDoXnO6%2B%2FlB9cGzMoihns50gChfSKEoai680gWQV886D4kRTQe%2FKebequ63KIr6rHZyt7N6hndq9E4s7fuOsrgZ4rvjEDKpxS%2FBJGrAn5Vj9iufRdefXufF8QxSjVWaYF6A%2FZ56UQNrBkkftKZYttIgweKNpt4DFJHLlWC4Tk5KFayYbZ4JXDeZozkbL%2FFNel3MbaDk66NLRUn0tjH77BNldioDn2QinRZ5KRypVgOptJpezRIllojQBP%2BLskVZU1XdobCBMAFT38yI0FEHrk9K31Zqj6dOylBO1ItrF0tnkxmT%2BU4ftQoyBL6SHGNR7Pdotdx0CmsYDhLiwgaNwyw9XrEnt3bztIH6FWUUm5ztMO3YjCs6cDJBjqkAc7KNDFxjCI8N5tSL%2BKze6A%2Fo%2BuhSQxnbq8QrrKfl19IOUjh0ooTiyu%2FK0XcnBlJWz2uHd4oVslmW8mM8cm9%2BMijp5gm1JYEVAM9ub9qt6Ahe4DKF%2Bee7dVLoJrErZ9aLjXW7hgFS9r5vme3i1nhbzABAMJTPhASghZGJebrjnkLTwJZmOtWkYZfwLk%2FbmAcEHQYQMoscScc5HeQhWfmUGzBkfzQ&X-Amz-Signature=3d2fb13bbdc93074777c9c97a901c314044478e4630cc5ee816e46ae853061b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

