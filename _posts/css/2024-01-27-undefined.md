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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEXD5QJ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFmd63nHvfYmnxbe3QTk1LyoLxZGFTz6ErzSIGF2CHqxAiEAycXRM89KL3So%2ByWGODAPs6GAjKW6SseTsBIuheix%2F8wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDum%2BXHeC8FYLWvlfSrcA7txaNFoHX5Fz1i%2FYXDXh%2FFroLrPkY%2BcB9Pj%2Fj1ZtFY0UVq0%2FINKlbc%2B2H9agKL3twcdrxMJTH%2B%2FNh%2BjXNh2dWlXrODS%2BpTQb%2FOXGrU3HqBOc3o9Pb0odssayo0hT3y%2BDUXC2lzXuy6a0qSa8Esut1Gv59kZm0KgBi%2B9GkVjwkGfnT220s9KlKtWCSqvWlpRmuh2OQBKv1pUbQ3B8zZPukF5VR%2Bq9%2FXmT8Vb3w3DtbJ%2BEipE6tVsz9BZyfCPQQ09I8mjjwkkYGaYaLxWdVjE0TxqU4A%2BUBomX6YOXEg7ZeblLZoK8RxPBv%2BBz4u0JEcGhInklRETRFUQQ5e2GpwvSkaxO3cHEuqO%2BdqPCUusKez5hBi4uXYntYF6jseNQXNN4EKJNonskNzlfmoWbVZRB2MJ%2FJUaJlIDfOJxizoeVf09etXj87dVLHVHDE0FYU4Zq6f%2B3uiZBhiV4dewBkbPoBuhO%2FM8VsWtLZ%2FYW0IFreCSOczaF4YppRqjHWq9YtlxzXS3D4L8P%2BopbYaU0%2B54aDwsFEalcX0yxDglcLkUq0IYGBlM56M7AUVdydVp4C1Q0H8w6xdrAeg2p1RBbu7ttYpfrxE2KSBe2WY6vnE%2Bmi157McZVv4HflOG2ku3MMmUvskGOqUBPze6mSbWTwIKddXa03YXQ13MCWUNgPRKQuXKUvV4NGDHAUANdBi1xJbzQZ24PuuVkwTqU74HCR6%2BSjt0y3LwPn9yZLTKC8fMZAPU97WSg2hpm4rVlxSYhneWs%2FbHt5MfF7I9RfNgicSpX%2FekciS%2F1pf3ICIL%2FTUnzEVZ3xhcBLTtWpnZwGTsIUzoZsRrLrF%2FPHOJIToZb0QWfWPwzZYFsmqVWgnp&X-Amz-Signature=99c624e9e9a1a77c118c5848fb4e46e8742a423a1de2bf7c2fd9e108652e751e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEXD5QJ5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIFmd63nHvfYmnxbe3QTk1LyoLxZGFTz6ErzSIGF2CHqxAiEAycXRM89KL3So%2ByWGODAPs6GAjKW6SseTsBIuheix%2F8wq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDum%2BXHeC8FYLWvlfSrcA7txaNFoHX5Fz1i%2FYXDXh%2FFroLrPkY%2BcB9Pj%2Fj1ZtFY0UVq0%2FINKlbc%2B2H9agKL3twcdrxMJTH%2B%2FNh%2BjXNh2dWlXrODS%2BpTQb%2FOXGrU3HqBOc3o9Pb0odssayo0hT3y%2BDUXC2lzXuy6a0qSa8Esut1Gv59kZm0KgBi%2B9GkVjwkGfnT220s9KlKtWCSqvWlpRmuh2OQBKv1pUbQ3B8zZPukF5VR%2Bq9%2FXmT8Vb3w3DtbJ%2BEipE6tVsz9BZyfCPQQ09I8mjjwkkYGaYaLxWdVjE0TxqU4A%2BUBomX6YOXEg7ZeblLZoK8RxPBv%2BBz4u0JEcGhInklRETRFUQQ5e2GpwvSkaxO3cHEuqO%2BdqPCUusKez5hBi4uXYntYF6jseNQXNN4EKJNonskNzlfmoWbVZRB2MJ%2FJUaJlIDfOJxizoeVf09etXj87dVLHVHDE0FYU4Zq6f%2B3uiZBhiV4dewBkbPoBuhO%2FM8VsWtLZ%2FYW0IFreCSOczaF4YppRqjHWq9YtlxzXS3D4L8P%2BopbYaU0%2B54aDwsFEalcX0yxDglcLkUq0IYGBlM56M7AUVdydVp4C1Q0H8w6xdrAeg2p1RBbu7ttYpfrxE2KSBe2WY6vnE%2Bmi157McZVv4HflOG2ku3MMmUvskGOqUBPze6mSbWTwIKddXa03YXQ13MCWUNgPRKQuXKUvV4NGDHAUANdBi1xJbzQZ24PuuVkwTqU74HCR6%2BSjt0y3LwPn9yZLTKC8fMZAPU97WSg2hpm4rVlxSYhneWs%2FbHt5MfF7I9RfNgicSpX%2FekciS%2F1pf3ICIL%2FTUnzEVZ3xhcBLTtWpnZwGTsIUzoZsRrLrF%2FPHOJIToZb0QWfWPwzZYFsmqVWgnp&X-Amz-Signature=c1ad222f26caa71042d7c60d23f9dd712bdfc44c7cf63143b98d70ba4626dce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

