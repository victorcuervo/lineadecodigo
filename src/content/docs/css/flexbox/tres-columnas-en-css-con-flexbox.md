---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFAFRM4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxPgputG8uhVidw%2FMQn1km%2Fr7yveLbNv2MGikUpoM5AAiEAm0KIpwBMQt0EhFDbHXnD4iHsfqu8vlzkjZC4oHxOfS0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPAAhVcCN8YNFwjLyircA%2B9oosSrTHptybZArCFNxbmXgm095p63ZeiQiKHJ4NR1nEVxPt33ClmeRrVbY7JROxjkiz9osfW2R7fyMNf5U11dLjRpNqYN961DsEs4NZjAdxRM6RSLqDDxM2v8OBopyHLFCNnekPpDUOMjyT9g4MQz1gv3g%2BCc8IXoDD2Q%2BWhQsC7UKh0J%2FPe%2BdeFjq6yNhlJoof360dipfqTl8azoHHoW0oeRQ67Bcpt9et38npZNsFZ4E4BT8Es5oTBVWUmNuzwoX%2BaV0hS%2FCi5jkBXDPoDRIfE3N6qC0O7QmYgJ543aqzGoNQnLBR5DQdoCKVFjvBQdjpr3FnxorQl4051OznV6ykpcymCjUPPoOgS8m1W0JytteGHe%2BzJkIHhrXAA6PIiyU1BicevoOgn0q1ykYLvm5caBFuLLm6Hpq1oneLpkaqrqwNOzeSaRNY6wRyrc1UUiZ0u2Vau%2BDC4YdbyvA97MKJmTtHeiz497rBX0hxslV%2FC9RPjgayeChfvOdy0aXguaHErXeQJHWRRChA%2BbKVBmXAClImvFbJgGd%2FD4xCZvXT4rJgGfWrIcmIdF6rnFIAPdbhX%2BquOMJj8vOcwd334vRDnPgj3%2F3XkaEepKis3XH6iK2jsju5HTn0BGMJP2y8kGOqUBtTTI2dPbgigrDEr1Oj1S9E%2BeWyCpLlTtxgG%2BWXKz7ZLcood48%2Btkm2TwJbxZvJCorG%2BqalITF%2BGwnVFYm%2BDdjIdaz5mNHm9hiJ77H7Q8x39lsfh5FyVeCY9BvSeaffNrcRITkZ%2BrVSfI74MnIsN1B%2BI5OlApugDgYrFIIbDdZ%2Fjyit%2BWYTXNa98SOqDdkG0dqBihSSrcuj1uX11swvMnT8SX1uCr&X-Amz-Signature=48f90e5c8995e0f29c0c2379d98e16d3fe23e1275d2905db0a27c600dd35f15b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFAFRM4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxPgputG8uhVidw%2FMQn1km%2Fr7yveLbNv2MGikUpoM5AAiEAm0KIpwBMQt0EhFDbHXnD4iHsfqu8vlzkjZC4oHxOfS0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPAAhVcCN8YNFwjLyircA%2B9oosSrTHptybZArCFNxbmXgm095p63ZeiQiKHJ4NR1nEVxPt33ClmeRrVbY7JROxjkiz9osfW2R7fyMNf5U11dLjRpNqYN961DsEs4NZjAdxRM6RSLqDDxM2v8OBopyHLFCNnekPpDUOMjyT9g4MQz1gv3g%2BCc8IXoDD2Q%2BWhQsC7UKh0J%2FPe%2BdeFjq6yNhlJoof360dipfqTl8azoHHoW0oeRQ67Bcpt9et38npZNsFZ4E4BT8Es5oTBVWUmNuzwoX%2BaV0hS%2FCi5jkBXDPoDRIfE3N6qC0O7QmYgJ543aqzGoNQnLBR5DQdoCKVFjvBQdjpr3FnxorQl4051OznV6ykpcymCjUPPoOgS8m1W0JytteGHe%2BzJkIHhrXAA6PIiyU1BicevoOgn0q1ykYLvm5caBFuLLm6Hpq1oneLpkaqrqwNOzeSaRNY6wRyrc1UUiZ0u2Vau%2BDC4YdbyvA97MKJmTtHeiz497rBX0hxslV%2FC9RPjgayeChfvOdy0aXguaHErXeQJHWRRChA%2BbKVBmXAClImvFbJgGd%2FD4xCZvXT4rJgGfWrIcmIdF6rnFIAPdbhX%2BquOMJj8vOcwd334vRDnPgj3%2F3XkaEepKis3XH6iK2jsju5HTn0BGMJP2y8kGOqUBtTTI2dPbgigrDEr1Oj1S9E%2BeWyCpLlTtxgG%2BWXKz7ZLcood48%2Btkm2TwJbxZvJCorG%2BqalITF%2BGwnVFYm%2BDdjIdaz5mNHm9hiJ77H7Q8x39lsfh5FyVeCY9BvSeaffNrcRITkZ%2BrVSfI74MnIsN1B%2BI5OlApugDgYrFIIbDdZ%2Fjyit%2BWYTXNa98SOqDdkG0dqBihSSrcuj1uX11swvMnT8SX1uCr&X-Amz-Signature=44e849d4b7d48a53eacf02245916b9cffba07354f0e93bcb250de81970541f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

