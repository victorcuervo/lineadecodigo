---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZKSRGL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2Ft0KuBGVZ6WWaPeU3D2DyNDohe%2B91BTweYTvDSBRSAIhAKllVrDyXDZnk2iRL%2FF%2B25sPVt8IaLqTYN4nXKDNXwZDKv8DCFUQABoMNjM3NDIzMTgzODA1IgxmdEvC7SxlE4fL0i0q3APcRwsTxv9xVBWuB9W0Mf5k5I4%2BA5nqAugAvOikNiK38Ox5ZnFRo7gZ6e%2FC9EgPEtxGY2p18D0uIbtP1nCik4b5qS7l07R8Jm%2F9GeSGQlxLC7QU9YUnPCTbuw6PmNjQdLHlm2kYO9AqtCCaiLJKKTF9jfW7mbFj%2Bi4qzpzJ2ta7iuk9f93gV8YHNgbm0No51Kas3K2mzbRJuXnNzf4kXpxn%2BjAUTaoUJ4%2Bcs23eWemikMNHXGwA%2BipVhVnyu9c2FiltNfzQte%2BAU8DJGrRxMYkY1vxNbE7yFS%2BlufxYZP5IdJbEbYNAOJ0pKpMSfx9jkeMw%2BmEz7WdBuqYdbhNjY9RNKye%2Fnt%2B1uUi7pRmI86nxfPfa5fKlrLdkiN0Sp5%2B6e3vv4d7xRDgGbs8KVBrs2v6JqPDdfS8eNUzEnRSiMuGE0gzH148oZF63Xa8qvkKmbla4scE8ALv2CPwJtJ817ojfa3w0Orsd%2FQ0zpv%2FLkft8hoqf7Av0mmxiUsWQPyqOeGY6NB%2FmJwIhlV7H4gUp08KPm4eFxz0xCbE20BDUqOKIGy9luvPyamWIAPae6KrOk53e%2BuUnSI0JkZZE%2FLdSk96SuTEbTu2alfCOEV434V3EDL9aJRbjBmlbS8wRmDDEpsnJBjqkAWTgmS175PlratbXURfZaITZNAk6DIOEHGf%2F3evUen4yg9Wd8z4JxOHL6VdH7pvbMGZ0G6Q8Zncp7oUDX6qFH3YmERjz5PK8t%2Bwh8Yf6D4pw3Y5g7eVz7q3W6w8RKuGlAB4pA%2BuOZsYSY717Ari57nql93psvpdpp4JlMGJVt8fuREB7d2JgyoXU7KwOKLm4GoRd7GNweSaHuSp6vGR3zLgiAF9H&X-Amz-Signature=e6964e8682aa17fc0a9e98a718c86508299c7e7096247600de863c475001321e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQZKSRGL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi%2Ft0KuBGVZ6WWaPeU3D2DyNDohe%2B91BTweYTvDSBRSAIhAKllVrDyXDZnk2iRL%2FF%2B25sPVt8IaLqTYN4nXKDNXwZDKv8DCFUQABoMNjM3NDIzMTgzODA1IgxmdEvC7SxlE4fL0i0q3APcRwsTxv9xVBWuB9W0Mf5k5I4%2BA5nqAugAvOikNiK38Ox5ZnFRo7gZ6e%2FC9EgPEtxGY2p18D0uIbtP1nCik4b5qS7l07R8Jm%2F9GeSGQlxLC7QU9YUnPCTbuw6PmNjQdLHlm2kYO9AqtCCaiLJKKTF9jfW7mbFj%2Bi4qzpzJ2ta7iuk9f93gV8YHNgbm0No51Kas3K2mzbRJuXnNzf4kXpxn%2BjAUTaoUJ4%2Bcs23eWemikMNHXGwA%2BipVhVnyu9c2FiltNfzQte%2BAU8DJGrRxMYkY1vxNbE7yFS%2BlufxYZP5IdJbEbYNAOJ0pKpMSfx9jkeMw%2BmEz7WdBuqYdbhNjY9RNKye%2Fnt%2B1uUi7pRmI86nxfPfa5fKlrLdkiN0Sp5%2B6e3vv4d7xRDgGbs8KVBrs2v6JqPDdfS8eNUzEnRSiMuGE0gzH148oZF63Xa8qvkKmbla4scE8ALv2CPwJtJ817ojfa3w0Orsd%2FQ0zpv%2FLkft8hoqf7Av0mmxiUsWQPyqOeGY6NB%2FmJwIhlV7H4gUp08KPm4eFxz0xCbE20BDUqOKIGy9luvPyamWIAPae6KrOk53e%2BuUnSI0JkZZE%2FLdSk96SuTEbTu2alfCOEV434V3EDL9aJRbjBmlbS8wRmDDEpsnJBjqkAWTgmS175PlratbXURfZaITZNAk6DIOEHGf%2F3evUen4yg9Wd8z4JxOHL6VdH7pvbMGZ0G6Q8Zncp7oUDX6qFH3YmERjz5PK8t%2Bwh8Yf6D4pw3Y5g7eVz7q3W6w8RKuGlAB4pA%2BuOZsYSY717Ari57nql93psvpdpp4JlMGJVt8fuREB7d2JgyoXU7KwOKLm4GoRd7GNweSaHuSp6vGR3zLgiAF9H&X-Amz-Signature=b4b956873da109cc745a3fa451f07abdeaf9980b9ab68e326b5f98b81955564f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

