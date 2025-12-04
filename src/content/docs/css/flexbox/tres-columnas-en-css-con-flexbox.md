---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIPW7DV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCp8rRX%2Fy82v9FV64DPIAX3rALa%2FX1qE72aXMjIeFQkbAIgBp7VKphfYgh88VROhS5bpwX8p5UlFnymYjLJbIgOKgAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKuFITiJNBdlSVe8NircA9BOizdY1bbJnfp4IabMuqc6HZfmB%2Fp46ruccfFg8mgTRLTMkQku%2FBXWDmuO7HKU7%2BSu4yAku%2BbOW5Ogw9AyvAM17NELN3EgthESCDIiUYcD4SQlbYwV9WzKW3jyQqLyoxYtgk0c6%2FFAyOpaohCuD6T7nwAXgVagJ8JyiR2JDUoCjETUSh4DJ0QSFLO56DQD1%2BjUPrxHv6uHRU2stytX%2Bb6vPLF%2FkX%2FyUa7BMZPwVQpVbKH9M5LiuGKxiLzYY%2By0KW57oUVUPuIPIfLmLi5Bo13m8XCySO%2BQFHrV3wVCw8y68T10Dsq2qKDx6GfdtbaNcmZ3uhQPnw5KBBLDmGqr%2FataHkyE2BgVw6gd%2Bqtys0Xqgitshzph4pQ855gqetc9lS5RrqIcZPvg7%2BfgEAk84Dv5zkDAK4kYbUOdflxi8ouupzJqDHGOFcYqxCednCxr1JmOSJa24ivo61Tg8Lv103EnqkMc3nTOacOhuVmnbnsN4xtun7lavF662ajGHOlIHa1c5Nt7dTcsnG1bnY8Dvwypc6qSWkISGcO0fJBXXl94jtOAaqGKJ8ziAYKfgPVw2zwoBrlTtGJNgc3TMxjSm65OZ41Hu46kO7JGZxDbfXkgtwDHeXmtG2U6d5LuMJGVw8kGOqUBI%2BV93IWqgVf4ILvjUJS8m%2BcxoiABev8IYrWLJZFbbh%2FK%2FRClgfyAo0yETz34BQbwV0PgeiO4z3i8r1f0IAX9UxhXtFtbX88jERNc2PDh7BG6zGRZ3kk0hkwBAqGXr7IxbNA7qZksMlCi36cQoWCNsoBgwvNXbZExfIQRgE%2B1VD3z79PbCh6kDfBoLsvLJ%2By39EzRneTY9jWvvCIL0L9CuBRtGx61&X-Amz-Signature=c27e00c98fcc746ee68245ec46944dfb383e0ec775f4067a0812776ec0fb1e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYIPW7DV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCp8rRX%2Fy82v9FV64DPIAX3rALa%2FX1qE72aXMjIeFQkbAIgBp7VKphfYgh88VROhS5bpwX8p5UlFnymYjLJbIgOKgAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDKuFITiJNBdlSVe8NircA9BOizdY1bbJnfp4IabMuqc6HZfmB%2Fp46ruccfFg8mgTRLTMkQku%2FBXWDmuO7HKU7%2BSu4yAku%2BbOW5Ogw9AyvAM17NELN3EgthESCDIiUYcD4SQlbYwV9WzKW3jyQqLyoxYtgk0c6%2FFAyOpaohCuD6T7nwAXgVagJ8JyiR2JDUoCjETUSh4DJ0QSFLO56DQD1%2BjUPrxHv6uHRU2stytX%2Bb6vPLF%2FkX%2FyUa7BMZPwVQpVbKH9M5LiuGKxiLzYY%2By0KW57oUVUPuIPIfLmLi5Bo13m8XCySO%2BQFHrV3wVCw8y68T10Dsq2qKDx6GfdtbaNcmZ3uhQPnw5KBBLDmGqr%2FataHkyE2BgVw6gd%2Bqtys0Xqgitshzph4pQ855gqetc9lS5RrqIcZPvg7%2BfgEAk84Dv5zkDAK4kYbUOdflxi8ouupzJqDHGOFcYqxCednCxr1JmOSJa24ivo61Tg8Lv103EnqkMc3nTOacOhuVmnbnsN4xtun7lavF662ajGHOlIHa1c5Nt7dTcsnG1bnY8Dvwypc6qSWkISGcO0fJBXXl94jtOAaqGKJ8ziAYKfgPVw2zwoBrlTtGJNgc3TMxjSm65OZ41Hu46kO7JGZxDbfXkgtwDHeXmtG2U6d5LuMJGVw8kGOqUBI%2BV93IWqgVf4ILvjUJS8m%2BcxoiABev8IYrWLJZFbbh%2FK%2FRClgfyAo0yETz34BQbwV0PgeiO4z3i8r1f0IAX9UxhXtFtbX88jERNc2PDh7BG6zGRZ3kk0hkwBAqGXr7IxbNA7qZksMlCi36cQoWCNsoBgwvNXbZExfIQRgE%2B1VD3z79PbCh6kDfBoLsvLJ%2By39EzRneTY9jWvvCIL0L9CuBRtGx61&X-Amz-Signature=8cc13f3c455fa67b1e38eef38348b65a728bacbd9834fba2379100f2c63b9b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

