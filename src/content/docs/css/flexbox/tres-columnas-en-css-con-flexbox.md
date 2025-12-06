---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTWRZ7UX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmi%2BHOPlNdXW0q4aDlUPzEjhikjoRcoI1YYjXrGCgA%2BAiBqpC6aGhc%2F74SFa%2BdhXG0I3a1b6Uwz9OLRcskc4P6qESr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMoxMQ4CTipufuwl5uKtwDxHU%2FF%2FTrn4n42xKJpcjle%2Fw6XNkFtELtIB9g2qgL33u8DZAppY%2Fxr87q56WmZT8KDBJRwBTJssv0GgbKpFefr5Gh5nZEYlXjnTRB0vQZu5GKcX%2BsFudQxC08F76hftGAQ222Eu0Qkd6AARYvYiIgYGdLhkLPyTdXUSA4n0aT%2FBB1SiuDIUNsiJql9Uy6xqwHffWNNxj5wXNNFd59vX82wzLNq0m9XgfLkX%2BSzqr5COpMPdrplHXe%2Br1f%2FtJlMkOLBFzW1%2FlLnTH1CNbcSYwPygBvoBFf7BNV3zGOqxmktrqMKsgzCqdp9veirdH8599F%2B0cGp6KGKNswAfim1YfCeRd%2FMCAf6qpotku%2FyvIxCE4ZmRYGRrdB%2FDuFMsklD0LcxFSjw4%2BTZuCc1fDqXmhsYJB2GnD51ZtzMML6Se2teZvF%2BaCpC1SCI9VWRErF8jeKsYHVuYLhPNDr2SYWH3Rm0dX3Q%2BUXZ8T6ZH2uaKGiavvK%2FEQFyIIdVjl0g6%2FLCu4HNaj3uNM3weiffxw4bqRFv3Fq%2B6waHnnqgbKEKxJFMXyhBZTuLjkt89F%2B6UlHMLyl1H7Ed1pKEsuqAtenZyF0ITLvc4NnNNJfhzf0%2B1RUGD89J0ByzW8JzYdgy%2B4wgKfQyQY6pgHbzvQF9jfgVDrnONLHOOrScH1CAXXQbQPjJeU9y8w89srhP1pfU6kKpVaP46rvp%2BVz4SanJ2gnwooYZkSOMS2PXoBVkeh7w3NL2mynN2H0QCXsZ%2B%2BcCVJdwUkNHT7disGkj41%2B5CVHY3DrjAKsWBtBfgNYMhqBFhQPK93jGIMQb7EUcjHT7Ew9W0mbWrBjm9qSZfVAIKxp4nHxuJag8GmYCYcc23VQ&X-Amz-Signature=78f053b359971aaa5bd2835ec0fca172366153131abd614e055ca78b47adc9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTWRZ7UX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEmi%2BHOPlNdXW0q4aDlUPzEjhikjoRcoI1YYjXrGCgA%2BAiBqpC6aGhc%2F74SFa%2BdhXG0I3a1b6Uwz9OLRcskc4P6qESr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMoxMQ4CTipufuwl5uKtwDxHU%2FF%2FTrn4n42xKJpcjle%2Fw6XNkFtELtIB9g2qgL33u8DZAppY%2Fxr87q56WmZT8KDBJRwBTJssv0GgbKpFefr5Gh5nZEYlXjnTRB0vQZu5GKcX%2BsFudQxC08F76hftGAQ222Eu0Qkd6AARYvYiIgYGdLhkLPyTdXUSA4n0aT%2FBB1SiuDIUNsiJql9Uy6xqwHffWNNxj5wXNNFd59vX82wzLNq0m9XgfLkX%2BSzqr5COpMPdrplHXe%2Br1f%2FtJlMkOLBFzW1%2FlLnTH1CNbcSYwPygBvoBFf7BNV3zGOqxmktrqMKsgzCqdp9veirdH8599F%2B0cGp6KGKNswAfim1YfCeRd%2FMCAf6qpotku%2FyvIxCE4ZmRYGRrdB%2FDuFMsklD0LcxFSjw4%2BTZuCc1fDqXmhsYJB2GnD51ZtzMML6Se2teZvF%2BaCpC1SCI9VWRErF8jeKsYHVuYLhPNDr2SYWH3Rm0dX3Q%2BUXZ8T6ZH2uaKGiavvK%2FEQFyIIdVjl0g6%2FLCu4HNaj3uNM3weiffxw4bqRFv3Fq%2B6waHnnqgbKEKxJFMXyhBZTuLjkt89F%2B6UlHMLyl1H7Ed1pKEsuqAtenZyF0ITLvc4NnNNJfhzf0%2B1RUGD89J0ByzW8JzYdgy%2B4wgKfQyQY6pgHbzvQF9jfgVDrnONLHOOrScH1CAXXQbQPjJeU9y8w89srhP1pfU6kKpVaP46rvp%2BVz4SanJ2gnwooYZkSOMS2PXoBVkeh7w3NL2mynN2H0QCXsZ%2B%2BcCVJdwUkNHT7disGkj41%2B5CVHY3DrjAKsWBtBfgNYMhqBFhQPK93jGIMQb7EUcjHT7Ew9W0mbWrBjm9qSZfVAIKxp4nHxuJag8GmYCYcc23VQ&X-Amz-Signature=01c3530b22126092796b2187b70d8ee242b4e47971fa9d5989297bbd8bd1e476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

