---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKDEMGZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lpsXj0a9ABlO700dNCqEd1s8s8LXhdFdJmK10rf%2FlQIgZ3gRth6hE61cZT%2BTbBkd2EiwWJTjKGoAKSsuXS%2FfJh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCOj6VPjnIsXOpvIwCrcA2pKeAWtzJaH8iEArlGURldQL5c5sdvAm%2BEV207WB61VeWLo0M%2FTe3K%2F3KL1lXsaKYCDcYU4twKF5IaDKFCrfH0R%2BxwvV%2BKPUoh1skwDkY1WWK0ePyv3lrnmxxVOhpQ9A2mycqGrafeE13KgH2rJrtn8ydX7H83wG5FsDUz7ei8%2FXiolD%2BZJGGHrBCRc0IC%2F9DCjlosN84QD8Y3hfWMMtQjZ2JslvkNfNOeWpuFMM4qpk1rBAUFP85r0lQ6S6mDBEWtbfwjbgeaMT36dS2W6VRQSAx5y%2FUoiu6KoBNTa3XSq8t72yKw4jhlxvm3H9PAJeeer44QWQpJXnbPJpK7hl%2FTotbynQ3fj8KMWk%2FLg7SELxSXWSGCqAda4vGX950DiuZBxcaJVL%2FG9Hx2Uw3EjLZlJmGkj%2FRPLN%2Fh%2FUYNV%2FUjVgEy%2BH9U%2Fw6fJGg45DUTsiFvYfKeP8nRs8gBw3at8goY%2FrEjALkzMMt2%2FcxGOf4A69dw0L48HimxvKTGLWk3WL8uugcCG00ypv%2B%2BqxhZjveiWnta4LXKxGqlI5YUYhEvknKrRC8jtWazY%2FJ0taobGa0CZjDnTzLTr0tqSY9UFYpGMYbC3WolpJG3eZq7YG9mjHtt8NNDz%2FnMTLRloMNytyckGOqUBctSFfR5W1zutcDUtf2VZjqDyRq5X4XGbc27CeVKFhBfJobkF%2BhVQryMNxAlwgAnT9EJPkFccHXJXbmZkJxMvQgJfVYeNOxWRRx4Zyj14PMysahem9ngwKKxqsZo75WqK5HzbgzhGLgX9sAV78FjSLAuayAO9ke25r5sys%2BDylzQ58gBFNftOf6M6E670iVkUIf7hifimU4xdwh2DhitCluzbW0AW&X-Amz-Signature=8cecfadc286b920f0fa7cb9b350892cca1bcbc8277edebed0f476d0446810201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOKDEMGZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T060453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lpsXj0a9ABlO700dNCqEd1s8s8LXhdFdJmK10rf%2FlQIgZ3gRth6hE61cZT%2BTbBkd2EiwWJTjKGoAKSsuXS%2FfJh4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCOj6VPjnIsXOpvIwCrcA2pKeAWtzJaH8iEArlGURldQL5c5sdvAm%2BEV207WB61VeWLo0M%2FTe3K%2F3KL1lXsaKYCDcYU4twKF5IaDKFCrfH0R%2BxwvV%2BKPUoh1skwDkY1WWK0ePyv3lrnmxxVOhpQ9A2mycqGrafeE13KgH2rJrtn8ydX7H83wG5FsDUz7ei8%2FXiolD%2BZJGGHrBCRc0IC%2F9DCjlosN84QD8Y3hfWMMtQjZ2JslvkNfNOeWpuFMM4qpk1rBAUFP85r0lQ6S6mDBEWtbfwjbgeaMT36dS2W6VRQSAx5y%2FUoiu6KoBNTa3XSq8t72yKw4jhlxvm3H9PAJeeer44QWQpJXnbPJpK7hl%2FTotbynQ3fj8KMWk%2FLg7SELxSXWSGCqAda4vGX950DiuZBxcaJVL%2FG9Hx2Uw3EjLZlJmGkj%2FRPLN%2Fh%2FUYNV%2FUjVgEy%2BH9U%2Fw6fJGg45DUTsiFvYfKeP8nRs8gBw3at8goY%2FrEjALkzMMt2%2FcxGOf4A69dw0L48HimxvKTGLWk3WL8uugcCG00ypv%2B%2BqxhZjveiWnta4LXKxGqlI5YUYhEvknKrRC8jtWazY%2FJ0taobGa0CZjDnTzLTr0tqSY9UFYpGMYbC3WolpJG3eZq7YG9mjHtt8NNDz%2FnMTLRloMNytyckGOqUBctSFfR5W1zutcDUtf2VZjqDyRq5X4XGbc27CeVKFhBfJobkF%2BhVQryMNxAlwgAnT9EJPkFccHXJXbmZkJxMvQgJfVYeNOxWRRx4Zyj14PMysahem9ngwKKxqsZo75WqK5HzbgzhGLgX9sAV78FjSLAuayAO9ke25r5sys%2BDylzQ58gBFNftOf6M6E670iVkUIf7hifimU4xdwh2DhitCluzbW0AW&X-Amz-Signature=3b18872f3c81f43e77a93a345615a68de8348654f35bb46cecd9c605d9495b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

