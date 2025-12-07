---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYHMVPX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5IONRVce1o1%2FmjPiln3gV2TmRdU1fndYim5NzLOAp9AiAwnRrN%2BSQJ6c1aKQ1kqF1CD8ajXoaXVELYx7QB2yOM3SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRZFKxqAsU1Lve5XKtwDv3cVwHg8FNLbwgO34V%2FbSJZrJyfEg4jc7hcaEC2kY6AHFSxgl%2BGHoy4vPtxLoDXo9Nf2e1RPRdTprYuIjM8Pj8ccKD%2BHQo2v9O%2F1Qybk1b66uiSp3eLP2OxsBV2AoVS0LpA7NaI8vh%2BBN2GYRgxFhWAeH769dzPDFBWMurVlb%2FJ4awkTMY4%2FLth2jhR9TGbL%2BH%2BpMWAiPX4BPXaiaCNvneGhW6yjgdtnRR86UFSBGR5zki%2FtpjLMM9lVorCbny5CeJQXVQR86IF68rUapOWN5%2FDo3ECOeLUeyNsi%2FQrB%2FCXlEzokxdaGGQuzwtIoMa176eG3nEbpHqZHrEYDOwksJOR0o3izQAMUulASPxuxMoq1kXOFuQbET00hCrsUlJPvNPuavyNpkH0msI%2Fyv4%2FCShbgL5DEKrdd2u05CGRK7zsjE5eGp5aeYzMP7%2Fb3GCYpi6RliK77r%2BxK0rrZUKe5HNad%2BvdWN3nBJihuhJ6NHSyFtA9yZ4VVf%2F91tDgVOQgcLUyzxTiEVPue%2BsfOEO6HhvJBaPtG3gP%2FjFJ1ZsTKsCAPt8UpRSVF%2BkItkPzAxXnZNz4cqFzQOHcQWKd%2BUQXmzHsdrBHsaKjUjkpYJ3ciBTuE8khFKrSiRw53z%2F8wv5nVyQY6pgFY0K8rfkcmzCJWNoIG8TYjNg0t%2B1DiojWS6Z3W0gsqP2bPtPn8oEmJzJWkQ4pS0Jp%2BMFxa07IsqAXMwSY11ThqSumHsuaeMh6m0b2tElCbiX825e2%2BKQfsjJt63%2Fs2aZwaw6Yx76VnXHJwAmpiWVbZ3x8bBjWFi2xMFoc5fUhmTVgqt2flv3D1OzGpYlD8OpPT8bqmJzWWFtKW9m8ngCAa81JtR6Jj&X-Amz-Signature=c602772ec0548da77ff561117d8abf76d91622c5ba7839c3a547bf69feed9afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYHMVPX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5IONRVce1o1%2FmjPiln3gV2TmRdU1fndYim5NzLOAp9AiAwnRrN%2BSQJ6c1aKQ1kqF1CD8ajXoaXVELYx7QB2yOM3SqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRZFKxqAsU1Lve5XKtwDv3cVwHg8FNLbwgO34V%2FbSJZrJyfEg4jc7hcaEC2kY6AHFSxgl%2BGHoy4vPtxLoDXo9Nf2e1RPRdTprYuIjM8Pj8ccKD%2BHQo2v9O%2F1Qybk1b66uiSp3eLP2OxsBV2AoVS0LpA7NaI8vh%2BBN2GYRgxFhWAeH769dzPDFBWMurVlb%2FJ4awkTMY4%2FLth2jhR9TGbL%2BH%2BpMWAiPX4BPXaiaCNvneGhW6yjgdtnRR86UFSBGR5zki%2FtpjLMM9lVorCbny5CeJQXVQR86IF68rUapOWN5%2FDo3ECOeLUeyNsi%2FQrB%2FCXlEzokxdaGGQuzwtIoMa176eG3nEbpHqZHrEYDOwksJOR0o3izQAMUulASPxuxMoq1kXOFuQbET00hCrsUlJPvNPuavyNpkH0msI%2Fyv4%2FCShbgL5DEKrdd2u05CGRK7zsjE5eGp5aeYzMP7%2Fb3GCYpi6RliK77r%2BxK0rrZUKe5HNad%2BvdWN3nBJihuhJ6NHSyFtA9yZ4VVf%2F91tDgVOQgcLUyzxTiEVPue%2BsfOEO6HhvJBaPtG3gP%2FjFJ1ZsTKsCAPt8UpRSVF%2BkItkPzAxXnZNz4cqFzQOHcQWKd%2BUQXmzHsdrBHsaKjUjkpYJ3ciBTuE8khFKrSiRw53z%2F8wv5nVyQY6pgFY0K8rfkcmzCJWNoIG8TYjNg0t%2B1DiojWS6Z3W0gsqP2bPtPn8oEmJzJWkQ4pS0Jp%2BMFxa07IsqAXMwSY11ThqSumHsuaeMh6m0b2tElCbiX825e2%2BKQfsjJt63%2Fs2aZwaw6Yx76VnXHJwAmpiWVbZ3x8bBjWFi2xMFoc5fUhmTVgqt2flv3D1OzGpYlD8OpPT8bqmJzWWFtKW9m8ngCAa81JtR6Jj&X-Amz-Signature=3d4cc871af613fc23e8ea07e6ad11603551edbc34bc2d34c3c7bae02833c81de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

