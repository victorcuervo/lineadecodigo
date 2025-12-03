---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPDE7AP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAoHTAJtRx%2BuRhwZlHkg6drsBIhLSe0tWRQjm1fJLpEOAiEAs0%2BYGuv3Ua5pwMvqdFJA0Xl9q23cB%2B9mUICJv6qtLxAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL7R8pRBBfKqxdCu2yrcA56xvULuLYJGDLQOCssw4CMiw5Ya489Tae%2FsRLZhNkoF8oF%2FdZ7LJTM2nlPYhqICXCeaw6ix4MCO4dmAPh0wbL%2FcFOfmpozksWy4XJHBzc6NRxA3ggxmLYLSkowbn7vhFiDUApNRk8HG4cISe4jMg7r3bp4xiCarO9iZKYUhO1oAsk2Q4KZrOBGyZbHhmzZdMmmCj3IUufpcXMu6tCI3j%2FXc9WXxO9h67o4hHtaZJOx6Wan6PUU2mat%2Foax9tMhv4sNXaE8AgA4RDV1mufbbb%2Fgjoq9hp4kR1EENJN%2BHpMX%2B0dyusERXg%2BsHgrmgAaNYk1Z6OZUVyJ%2FTWLSvPGE%2Bq5ok5GfpiAbvJiWba%2BHZT9Z2%2FHAIzveWq2kkIFkVvT2sNTMZ8O14lkeRPvsUwNkIF0Nq9drGOm4aFmJTzJv0%2BAN313Y%2FNCYMthl9f3fjyw3QpqRUuKh98b6hLCyKEGbsQtmS5ZHWQLjojRHpGyAJFOMDkbfkCycMyMRPPC9SWheGSOd%2FdH%2B0%2B3zc%2FZkaoBg%2FtzX6FNF3u6bT2aizO%2BNXXtMnApDU4FyDk93vsG%2BWriiFkGrCgQFprU2nu8csAKXZl%2B1ZmpZlRKUQS3N3CR185Zq5Wend9%2BOzO41SFSXRMPi9wskGOqUBUskPN36cwJJ8JGKt5XNfxm%2F2yL0fkwPPmMPwNSLiWNj2wNBwRHYEfgB8F4oK%2BNcFz20Y9tvMKK%2FD4ov36yRo0lEh6GByYKWT56xjPcDG9x8WJLOhmcuhQ7UKPv5BbTiLg4J1J3bO2N7C3Bwc1vY6GmRwT9UEiXveqk8X%2B3zLSXoskMt2aPdce8Sgq%2FG70rBc7jqu1wp1iT%2F%2Bh6JjEUqC1h9MIPBY&X-Amz-Signature=96fa66575ff53a661bbc62759cba009961233887bea25b8a081fedcf908b14a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VPDE7AP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIAoHTAJtRx%2BuRhwZlHkg6drsBIhLSe0tWRQjm1fJLpEOAiEAs0%2BYGuv3Ua5pwMvqdFJA0Xl9q23cB%2B9mUICJv6qtLxAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL7R8pRBBfKqxdCu2yrcA56xvULuLYJGDLQOCssw4CMiw5Ya489Tae%2FsRLZhNkoF8oF%2FdZ7LJTM2nlPYhqICXCeaw6ix4MCO4dmAPh0wbL%2FcFOfmpozksWy4XJHBzc6NRxA3ggxmLYLSkowbn7vhFiDUApNRk8HG4cISe4jMg7r3bp4xiCarO9iZKYUhO1oAsk2Q4KZrOBGyZbHhmzZdMmmCj3IUufpcXMu6tCI3j%2FXc9WXxO9h67o4hHtaZJOx6Wan6PUU2mat%2Foax9tMhv4sNXaE8AgA4RDV1mufbbb%2Fgjoq9hp4kR1EENJN%2BHpMX%2B0dyusERXg%2BsHgrmgAaNYk1Z6OZUVyJ%2FTWLSvPGE%2Bq5ok5GfpiAbvJiWba%2BHZT9Z2%2FHAIzveWq2kkIFkVvT2sNTMZ8O14lkeRPvsUwNkIF0Nq9drGOm4aFmJTzJv0%2BAN313Y%2FNCYMthl9f3fjyw3QpqRUuKh98b6hLCyKEGbsQtmS5ZHWQLjojRHpGyAJFOMDkbfkCycMyMRPPC9SWheGSOd%2FdH%2B0%2B3zc%2FZkaoBg%2FtzX6FNF3u6bT2aizO%2BNXXtMnApDU4FyDk93vsG%2BWriiFkGrCgQFprU2nu8csAKXZl%2B1ZmpZlRKUQS3N3CR185Zq5Wend9%2BOzO41SFSXRMPi9wskGOqUBUskPN36cwJJ8JGKt5XNfxm%2F2yL0fkwPPmMPwNSLiWNj2wNBwRHYEfgB8F4oK%2BNcFz20Y9tvMKK%2FD4ov36yRo0lEh6GByYKWT56xjPcDG9x8WJLOhmcuhQ7UKPv5BbTiLg4J1J3bO2N7C3Bwc1vY6GmRwT9UEiXveqk8X%2B3zLSXoskMt2aPdce8Sgq%2FG70rBc7jqu1wp1iT%2F%2Bh6JjEUqC1h9MIPBY&X-Amz-Signature=005d42177f01d3e6478f2b22305f8c44dfe0d3a8811dfea4635088fe48b8f352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

