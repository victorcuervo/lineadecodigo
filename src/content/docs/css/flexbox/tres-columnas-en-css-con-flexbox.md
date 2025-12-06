---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MO4N7TK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FMS2lbtHiOQ7ieuha9tFBsHf6ZLfXyOiNy9uLmbLb7AiEA5cvBhGg27%2BQ4Ka%2FdA4w4F1I8la6K799mSx0HOj7XY7kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDER0YvakS2A3%2BLUlACrcAynSkLYdxlcJJznnM0AiA7px%2FRBLbT92e8uVnxgRh0WnpMKAHf6gjVraGbmzqsrTmFdMlPwmG21vl0k7X79aBTbngXttpyjX1w0T3F1UPG4vNEAUZkImJE2jCCIfuPh2KlPwZYcuW4XJ9kyiLmTKQhr%2F2cUGCceUD1WfYWAo%2FHozUt%2BkqXrbryCICBTxO5%2B9c6fEFFSTitqpF3kOsavQ39gqTEc2QGdxbDMJzT6a6qZLBxqaSwX3DgxL8csVaAfL3PBbdPrcBceNs4UbtXHqpoN9bB9kb4llCU7xAE%2Fnwc4ncsaZlddDZGzTspH%2FMT7aNSnEY8wsQ9jAL1CRDvj8zXXNadbzkltxHmlT%2BT7NmVNovlOiKWpvWW9L%2B6DUY7%2FmdnJpFQNcf%2BQq51%2FK8ngwgcj6U9RzsEoaNZaooiuOZN%2FG%2FtPzEhAbOEaBdHZwYCpRqPb9qfoxyhZ7MHRZNHNydacBmHh7kvfAKxH7JzcLp37lX1z9BQDWvwg95DooFkZUj%2Bwb%2FIx4pFL7gSSFgottqvzy7h%2BmHBLZcg5n8E1VNZKDf0hBjs6ojWdGkSngq6XdSElm1dBZC3ujyCROtU7rbFPMLIzUvAPQ%2BzUocZvb23X%2FB5Rr%2BiXyiWdljfnQMKP9zskGOqUBztwGl7d1tA8Pw4TGqe5pQaS4QAxqnLTVuVOnu%2FN0W18JUSjrwWh%2FTgTPGcvi%2FRVr4rsHA3m%2Fm6k3XtnaowrSUY0kkJO4Ybdg1VJlubYWWj7Em780Z%2FErSKXIrRhoRfNl5pOP8msKD3u5P0%2FDeDXJWlcDkIWonJYx4YgvImNdICOwusFneR7GpeiMzzgxCoJFwhEgwzJxlkvMcW4w3DzUxhSPRhnO&X-Amz-Signature=7454de4cc4bf6701ecd458ac53ab6ce08e2f92fc102df30774bb59e3a7c2f651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MO4N7TK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2FMS2lbtHiOQ7ieuha9tFBsHf6ZLfXyOiNy9uLmbLb7AiEA5cvBhGg27%2BQ4Ka%2FdA4w4F1I8la6K799mSx0HOj7XY7kq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDER0YvakS2A3%2BLUlACrcAynSkLYdxlcJJznnM0AiA7px%2FRBLbT92e8uVnxgRh0WnpMKAHf6gjVraGbmzqsrTmFdMlPwmG21vl0k7X79aBTbngXttpyjX1w0T3F1UPG4vNEAUZkImJE2jCCIfuPh2KlPwZYcuW4XJ9kyiLmTKQhr%2F2cUGCceUD1WfYWAo%2FHozUt%2BkqXrbryCICBTxO5%2B9c6fEFFSTitqpF3kOsavQ39gqTEc2QGdxbDMJzT6a6qZLBxqaSwX3DgxL8csVaAfL3PBbdPrcBceNs4UbtXHqpoN9bB9kb4llCU7xAE%2Fnwc4ncsaZlddDZGzTspH%2FMT7aNSnEY8wsQ9jAL1CRDvj8zXXNadbzkltxHmlT%2BT7NmVNovlOiKWpvWW9L%2B6DUY7%2FmdnJpFQNcf%2BQq51%2FK8ngwgcj6U9RzsEoaNZaooiuOZN%2FG%2FtPzEhAbOEaBdHZwYCpRqPb9qfoxyhZ7MHRZNHNydacBmHh7kvfAKxH7JzcLp37lX1z9BQDWvwg95DooFkZUj%2Bwb%2FIx4pFL7gSSFgottqvzy7h%2BmHBLZcg5n8E1VNZKDf0hBjs6ojWdGkSngq6XdSElm1dBZC3ujyCROtU7rbFPMLIzUvAPQ%2BzUocZvb23X%2FB5Rr%2BiXyiWdljfnQMKP9zskGOqUBztwGl7d1tA8Pw4TGqe5pQaS4QAxqnLTVuVOnu%2FN0W18JUSjrwWh%2FTgTPGcvi%2FRVr4rsHA3m%2Fm6k3XtnaowrSUY0kkJO4Ybdg1VJlubYWWj7Em780Z%2FErSKXIrRhoRfNl5pOP8msKD3u5P0%2FDeDXJWlcDkIWonJYx4YgvImNdICOwusFneR7GpeiMzzgxCoJFwhEgwzJxlkvMcW4w3DzUxhSPRhnO&X-Amz-Signature=5fca2cbbec2c1a71ee9d7b8ad3472781d62b849cbd67f7c54cb3a06283575f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

