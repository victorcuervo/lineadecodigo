---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5LDOE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqmEivadt4hOTUHgwqcgw7HPGYbZMMyqT5CXwEIm%2BAgIgY86MWY5ldUX7FB%2FaI%2F9iDj8HIME%2FOmnxY1o4prygLpUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE1AuOrwQr1uB56ONyrcAzVXm2zOcZCpxrlPupp6Wn1LTNYHiU1TXAJBHLyiJRorkm5SsxeFjAzkw22nMkOaAR4YoFope%2BDMoffCoj4UFVhh9YnOPHgx52KMyQxWOa5kDNnNLb31OLHZUP7qS%2FehcwB94PMJ%2FSDu1swGAWpXbXBsSADR0mYZKQQsBCYnYgZqtNdQ1KobvwCWFEPvhgPh1thFw1HtAjoRYNlxztIefC2%2BN%2F1qVM2FyYSPzCXT%2BknK3BHAvh4ipqGsfaL0wKoeADi5MKiXkI5d93rVhSwm%2FdPL1zjghJdFunQlLrRWasGFWcUoCSfEmd2oqEzp7QWvh6lIL67u8Gon6fnSvRqhfeom1w0GO8hZFbJi9p3H42y%2Bsy4oz68t8xyzsmUfTkHtmaU1InAxkWP0ADBOQVYlgqUIgaDi9oaU%2BJIG7qKmj%2FES6bJwdat6R%2FFDKFCNuLnvcEhghrCTxjz2kPXTOA9wmaq%2FF184kRPGwybRLNbFQSQvczdYLA8Z55PIf%2FHCYsbpDodl2JmDmr9LmQ8LYGKVk8GJFEVBKqlAAb3LZk%2FanyPczs%2FwOMUZpxg0WRSbUH1%2BFmuFZa%2F04qwoPRbwJu3n%2F9Kl7wxACL35GdzD6Wi%2FWny%2FWCogLIqpAIpwCG4KMJ7iy8kGOqUBsqK1ulm33Lr1jtSWw4VPRvwhP4E4y7uYZazHAHFaCFz8DpNiEDqRRE%2Bu2ZO%2BpAMj%2FcB91sykRAhx5LzChouaz%2FAdcEdfUTLZQ%2BtEGrYn2N418ZwR0KjkhKDs5KeePOo8ksEOZ7gQ1T5t%2FC%2FEUciM8pCu83psoVlyDYksvtmhYB1Q5%2BpwUYQcNlOddmA6m7daVc4tYSpOi6ZSeLm2X%2BTSRL3yBp3B&X-Amz-Signature=086551cfd32a0bda05aca14a6a55871d5f0061984adf49d7fcd6268de74f8ca0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QG5LDOE6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeqmEivadt4hOTUHgwqcgw7HPGYbZMMyqT5CXwEIm%2BAgIgY86MWY5ldUX7FB%2FaI%2F9iDj8HIME%2FOmnxY1o4prygLpUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE1AuOrwQr1uB56ONyrcAzVXm2zOcZCpxrlPupp6Wn1LTNYHiU1TXAJBHLyiJRorkm5SsxeFjAzkw22nMkOaAR4YoFope%2BDMoffCoj4UFVhh9YnOPHgx52KMyQxWOa5kDNnNLb31OLHZUP7qS%2FehcwB94PMJ%2FSDu1swGAWpXbXBsSADR0mYZKQQsBCYnYgZqtNdQ1KobvwCWFEPvhgPh1thFw1HtAjoRYNlxztIefC2%2BN%2F1qVM2FyYSPzCXT%2BknK3BHAvh4ipqGsfaL0wKoeADi5MKiXkI5d93rVhSwm%2FdPL1zjghJdFunQlLrRWasGFWcUoCSfEmd2oqEzp7QWvh6lIL67u8Gon6fnSvRqhfeom1w0GO8hZFbJi9p3H42y%2Bsy4oz68t8xyzsmUfTkHtmaU1InAxkWP0ADBOQVYlgqUIgaDi9oaU%2BJIG7qKmj%2FES6bJwdat6R%2FFDKFCNuLnvcEhghrCTxjz2kPXTOA9wmaq%2FF184kRPGwybRLNbFQSQvczdYLA8Z55PIf%2FHCYsbpDodl2JmDmr9LmQ8LYGKVk8GJFEVBKqlAAb3LZk%2FanyPczs%2FwOMUZpxg0WRSbUH1%2BFmuFZa%2F04qwoPRbwJu3n%2F9Kl7wxACL35GdzD6Wi%2FWny%2FWCogLIqpAIpwCG4KMJ7iy8kGOqUBsqK1ulm33Lr1jtSWw4VPRvwhP4E4y7uYZazHAHFaCFz8DpNiEDqRRE%2Bu2ZO%2BpAMj%2FcB91sykRAhx5LzChouaz%2FAdcEdfUTLZQ%2BtEGrYn2N418ZwR0KjkhKDs5KeePOo8ksEOZ7gQ1T5t%2FC%2FEUciM8pCu83psoVlyDYksvtmhYB1Q5%2BpwUYQcNlOddmA6m7daVc4tYSpOi6ZSeLm2X%2BTSRL3yBp3B&X-Amz-Signature=5034c24915a5a75d45abb73d758d21369a3074719b0aadcd10f835361467644e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

