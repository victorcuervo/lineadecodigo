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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBA56NMA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBhLe9Tq9EWwTPIOrMNpUrkEYI%2Fi1kWU1EsMaSYcU%2FzsAiEAp4oCm%2BywI5I8ojwWEoOQF3cbRnnZ0UzvmmKpIwDFREAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLLN5JtTmqOh%2Fi4gaircA4X%2FORD%2Fk2dEIJXeF%2BzgZtwoAw0ktcDrYs9AbT6kTz3Yx1OIVKv9sEAcEP3b82o9fqHC5cywvWyzVEz4D5IJEAoDrm%2BhjJG3g2TubaqeOvjZGwM7PEBJ%2FfzytPBkO9QUg0LK9U6bbkWpQu3N5P7MeNZTiR9a8kzPIY9MTLD9QSclwcdWSwa%2FK3paW1cXu4yxoUSV4uN9hoiXV8uu3YsoivQjpAGdG8rYfKzyl1HuahD4T%2Fs2aNXku%2BbDCMxIcFwLY0an%2FaGz%2BDnga2w5h57098Od0NmRsv47rGQCJKYx251N%2Bx%2F7zd%2FY7FbIV29ylckiM2ugYolURoTcoa0i5W8dEDDc8HxX5ePcVfQ0YhFS36yRBWu%2FtkzDFqDfnpCyrHF66TUSlgv1fgUQNyU3HsAqc0QWKTzEmcFhDVjSjH4YX%2BycO9UTYFuouBnGV9rlvs1RHtqtgBij7qftVuFATYMl3P1DYU0pdtT%2FDyfzm%2BHkjzWGa2o%2FkGDLCiYNXrvDEzG0ctnXXlh%2BMEQFXLqLYEOyx1lrTnrVvzuSlv5mgc9o21%2FoxAdkr4fVrW3hIrk87RIp22MmNNsGiFsIh7icPIcYae58wJct2p5G4MpzB35EJa74HarD5bukW5sxzQIuMKu4v8kGOqUBELp5AbDuZs4ZkqI0Ye95He5Js41VxXgi4VQQUmkoVvLZbo1VudivYATo8YzEwR6%2BcR9AVbIIrhJtBobnDBKV0KqRfroI0JNSe%2B1bz5Yc675uy2AVlxLF%2FMrHKbWgjCquND%2B8V8Mgxg59KJV1HATBGAkxaIaBwhhTC1evzYqP22owyRs3L6K4snxr%2BVIwb9nXV5iG7kp7z%2F3likjYPaQu57kkdIbX&X-Amz-Signature=192b0c97388b9f4bd4a205d3c617e2df45033d0546ddcd1c5066a17e549632ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBA56NMA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIBhLe9Tq9EWwTPIOrMNpUrkEYI%2Fi1kWU1EsMaSYcU%2FzsAiEAp4oCm%2BywI5I8ojwWEoOQF3cbRnnZ0UzvmmKpIwDFREAq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDLLN5JtTmqOh%2Fi4gaircA4X%2FORD%2Fk2dEIJXeF%2BzgZtwoAw0ktcDrYs9AbT6kTz3Yx1OIVKv9sEAcEP3b82o9fqHC5cywvWyzVEz4D5IJEAoDrm%2BhjJG3g2TubaqeOvjZGwM7PEBJ%2FfzytPBkO9QUg0LK9U6bbkWpQu3N5P7MeNZTiR9a8kzPIY9MTLD9QSclwcdWSwa%2FK3paW1cXu4yxoUSV4uN9hoiXV8uu3YsoivQjpAGdG8rYfKzyl1HuahD4T%2Fs2aNXku%2BbDCMxIcFwLY0an%2FaGz%2BDnga2w5h57098Od0NmRsv47rGQCJKYx251N%2Bx%2F7zd%2FY7FbIV29ylckiM2ugYolURoTcoa0i5W8dEDDc8HxX5ePcVfQ0YhFS36yRBWu%2FtkzDFqDfnpCyrHF66TUSlgv1fgUQNyU3HsAqc0QWKTzEmcFhDVjSjH4YX%2BycO9UTYFuouBnGV9rlvs1RHtqtgBij7qftVuFATYMl3P1DYU0pdtT%2FDyfzm%2BHkjzWGa2o%2FkGDLCiYNXrvDEzG0ctnXXlh%2BMEQFXLqLYEOyx1lrTnrVvzuSlv5mgc9o21%2FoxAdkr4fVrW3hIrk87RIp22MmNNsGiFsIh7icPIcYae58wJct2p5G4MpzB35EJa74HarD5bukW5sxzQIuMKu4v8kGOqUBELp5AbDuZs4ZkqI0Ye95He5Js41VxXgi4VQQUmkoVvLZbo1VudivYATo8YzEwR6%2BcR9AVbIIrhJtBobnDBKV0KqRfroI0JNSe%2B1bz5Yc675uy2AVlxLF%2FMrHKbWgjCquND%2B8V8Mgxg59KJV1HATBGAkxaIaBwhhTC1evzYqP22owyRs3L6K4snxr%2BVIwb9nXV5iG7kp7z%2F3likjYPaQu57kkdIbX&X-Amz-Signature=2439b6760cdbb75c40990d250eb2f00d11e0f0ced0fe9c82101311f16ff9bbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

