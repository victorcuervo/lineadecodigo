---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAO723E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6A1NA%2FXgrIfmcyITJpE3RkXh3Dj%2Bmd%2FZiOsl1J7c3BwIgNLDpaxjiyZQ2nXiFgyfWVL0aQD5mAALyX0hunENoCBoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuuZNPrdGMYvUd28CrcA74%2Fay90bHsDwvXsfrgy9MVhZ9SKGYqKqjFTHYQo7au3MMQ6qFxkYFWH%2F4hXSZ4Chg%2B6nwGICuffRDqXdC%2BGccUq%2F2NEed%2Fusw9ylbatAgbKC9qCHmYJ7rKOSRSPj2PEQcMcX0povWsoy2icZdy98uF77loxkWB7w4dOVwyZF1pvaUXQiVIH0IVoQ0XLgTZAe8WJnTxhjjoERa8aSJff%2FilL0%2Bf%2Fqqc3ut6Q9KPYBwvcUKnOFL9lAHBydnlZpQDCNWGQQwg7BL%2F1oyaKA9KDdU9igUz9xJWITSwWdwnxufJd0ARlbvNRrwYEmncy1%2FReNVcFpusImaeD6DKLNSabC%2FemD1eM32pKRVhfpLDnn%2BYxpG%2FzmqdbbhE6cRVQ0i%2FT2J5UvkJ22gmA0yjODHTAmtE0FO%2F8w7djm6L9Lh%2Flvi1hfgvXWL%2BFBxO6RPQiNzg9A1l6vRuS3G26wOzEypxndFKGW0ulHk468wd9ROH%2FcFbCj6ikq%2F8fAS5Gy7ZayMuGeu%2F32ci4wrx5iewFpKcbPMTs7T1EIZWe0Cj8ZRDrbxBK%2BP4Llyv4A8cxvetV50h4ctf7RQQ%2BWZUYVW1kbg7ELdW0E2a0j40DgJpF0%2FQzNSVKOfC6HppW%2B9HJvW1PMN%2Fsy8kGOqUBPTr9wVKwcAvqH8wxlamwMD81dEKAA1H5J25OaDWPofuPf4CQf9Pt4RvaJDXGbJdDN7roYKT%2Bv91Cvqfsz54nHmM1Sw%2F9omU%2FhIj6p%2FESfqh0gmR8GlTDs8kS8Ff2eoKp%2BOFaanHsOaydCymA8HqIXPn2dbaZ6a8lg8fTnRS%2B4Gub%2FkPkYGQ%2BSwt0RPzA2aIT1rxRmIyc6slCyc82L%2F%2BwVGBJdmvW&X-Amz-Signature=c31cf82441e52abb5781f18abf6a3b8d2a64071cf663153889176b2aac378830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZAO723E%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T192227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6A1NA%2FXgrIfmcyITJpE3RkXh3Dj%2Bmd%2FZiOsl1J7c3BwIgNLDpaxjiyZQ2nXiFgyfWVL0aQD5mAALyX0hunENoCBoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDAuuZNPrdGMYvUd28CrcA74%2Fay90bHsDwvXsfrgy9MVhZ9SKGYqKqjFTHYQo7au3MMQ6qFxkYFWH%2F4hXSZ4Chg%2B6nwGICuffRDqXdC%2BGccUq%2F2NEed%2Fusw9ylbatAgbKC9qCHmYJ7rKOSRSPj2PEQcMcX0povWsoy2icZdy98uF77loxkWB7w4dOVwyZF1pvaUXQiVIH0IVoQ0XLgTZAe8WJnTxhjjoERa8aSJff%2FilL0%2Bf%2Fqqc3ut6Q9KPYBwvcUKnOFL9lAHBydnlZpQDCNWGQQwg7BL%2F1oyaKA9KDdU9igUz9xJWITSwWdwnxufJd0ARlbvNRrwYEmncy1%2FReNVcFpusImaeD6DKLNSabC%2FemD1eM32pKRVhfpLDnn%2BYxpG%2FzmqdbbhE6cRVQ0i%2FT2J5UvkJ22gmA0yjODHTAmtE0FO%2F8w7djm6L9Lh%2Flvi1hfgvXWL%2BFBxO6RPQiNzg9A1l6vRuS3G26wOzEypxndFKGW0ulHk468wd9ROH%2FcFbCj6ikq%2F8fAS5Gy7ZayMuGeu%2F32ci4wrx5iewFpKcbPMTs7T1EIZWe0Cj8ZRDrbxBK%2BP4Llyv4A8cxvetV50h4ctf7RQQ%2BWZUYVW1kbg7ELdW0E2a0j40DgJpF0%2FQzNSVKOfC6HppW%2B9HJvW1PMN%2Fsy8kGOqUBPTr9wVKwcAvqH8wxlamwMD81dEKAA1H5J25OaDWPofuPf4CQf9Pt4RvaJDXGbJdDN7roYKT%2Bv91Cvqfsz54nHmM1Sw%2F9omU%2FhIj6p%2FESfqh0gmR8GlTDs8kS8Ff2eoKp%2BOFaanHsOaydCymA8HqIXPn2dbaZ6a8lg8fTnRS%2B4Gub%2FkPkYGQ%2BSwt0RPzA2aIT1rxRmIyc6slCyc82L%2F%2BwVGBJdmvW&X-Amz-Signature=1c001bcfdad24943486aa10adfef9fc5330e49b47a790c9a94ffa92a879739e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

