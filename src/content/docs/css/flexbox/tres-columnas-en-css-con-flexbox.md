---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIKYYUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYz3KwZedWVjU%2FeXKLthZZJ4e5B8U8G7rdGEVni2CIyAiBLKBFZxf5yXvaEoUtgEDO2Xa9Sg6FFL6SJZ1h2k47GVir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMOWJwUEWB4JuISIdxKtwDJDdwImRUCZVtXtKzbcKGC%2F0hK19GHCt%2BY3RdncwGF%2BxMRx1Fx5Hjw190aSRudj5nfzPBZ%2BbAuImB7VS3McOtLHMpb42%2B5Wv%2F3YqibPQHANzdGs7TqaMSd3FpFf%2BWmqEhcNke9uSQ8%2Bdz3VuTtSffaWabtus2vthE%2BM66JVBXfDlsA%2FFgYYUEWZ1bYG0P0gU6gL2D8GNgUGwvqJ%2BJ4ndEQ46iDcxUYoVO939Xv%2Fs8TlFP7bg%2BBwW5ur4PC8a744xNCD6vxYcBLAU8IrXgACE30XCvmF8aHDgyhhtm8p3UgQHbNHfWa7b4mXyJmUYeisFqf5L88WaiAROZFIVJPkrngPVlVowx5DWpcDBNSOYikv9LLIfaxQwJnYaEV7ztA1xgZ7VCIDpYpNfhTfKqPV0zIrR0jQrDZOzKAknv41ihMuU67s6B1VHo2YUBrAopsbYI9M%2FLJR006uKo4ffkgAXEPu2MMdXHcZvTc%2Fgad7VMccnDUpZNdGXyPOsJTmUf333cQ429JfHBRpAuEz2pAGCF2NCd17%2Fn4EPQgSEnSNewV8bM6g9OjIXZKzogPjRriUxdRy%2FMJLEbc4F4%2FN8RmhPHKzI3dob0j1IVT0T%2B%2BpJYxbWrK9%2F3Nzb%2B0IK9AL4wkqfQyQY6pgFu4OSHo6hOAZYfMea%2BjqbFfVPgVVdxI5CnB5AgHmtW45fQyRJGzCGjUryI7jCd8UTKHYwS%2B%2B0vOvUWufQppuzGhO%2Fx3UO9L5hJEoRwxcNDc4QgkiELkdWMm8ilWqvcsp5icUnJRXTWPdJTo59IyYCZNaGlpxQTxq3rDc7nP%2FC72OdMezmjBhlS%2FK0hJxsXf87%2BqcRqmU7yQuYXzH9KT8FdyUnw7C2o&X-Amz-Signature=83609146ddd0117a7e5e3a728f523d9a34716e6a990efe900ca46f022ac78103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNIKYYUF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYz3KwZedWVjU%2FeXKLthZZJ4e5B8U8G7rdGEVni2CIyAiBLKBFZxf5yXvaEoUtgEDO2Xa9Sg6FFL6SJZ1h2k47GVir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMOWJwUEWB4JuISIdxKtwDJDdwImRUCZVtXtKzbcKGC%2F0hK19GHCt%2BY3RdncwGF%2BxMRx1Fx5Hjw190aSRudj5nfzPBZ%2BbAuImB7VS3McOtLHMpb42%2B5Wv%2F3YqibPQHANzdGs7TqaMSd3FpFf%2BWmqEhcNke9uSQ8%2Bdz3VuTtSffaWabtus2vthE%2BM66JVBXfDlsA%2FFgYYUEWZ1bYG0P0gU6gL2D8GNgUGwvqJ%2BJ4ndEQ46iDcxUYoVO939Xv%2Fs8TlFP7bg%2BBwW5ur4PC8a744xNCD6vxYcBLAU8IrXgACE30XCvmF8aHDgyhhtm8p3UgQHbNHfWa7b4mXyJmUYeisFqf5L88WaiAROZFIVJPkrngPVlVowx5DWpcDBNSOYikv9LLIfaxQwJnYaEV7ztA1xgZ7VCIDpYpNfhTfKqPV0zIrR0jQrDZOzKAknv41ihMuU67s6B1VHo2YUBrAopsbYI9M%2FLJR006uKo4ffkgAXEPu2MMdXHcZvTc%2Fgad7VMccnDUpZNdGXyPOsJTmUf333cQ429JfHBRpAuEz2pAGCF2NCd17%2Fn4EPQgSEnSNewV8bM6g9OjIXZKzogPjRriUxdRy%2FMJLEbc4F4%2FN8RmhPHKzI3dob0j1IVT0T%2B%2BpJYxbWrK9%2F3Nzb%2B0IK9AL4wkqfQyQY6pgFu4OSHo6hOAZYfMea%2BjqbFfVPgVVdxI5CnB5AgHmtW45fQyRJGzCGjUryI7jCd8UTKHYwS%2B%2B0vOvUWufQppuzGhO%2Fx3UO9L5hJEoRwxcNDc4QgkiELkdWMm8ilWqvcsp5icUnJRXTWPdJTo59IyYCZNaGlpxQTxq3rDc7nP%2FC72OdMezmjBhlS%2FK0hJxsXf87%2BqcRqmU7yQuYXzH9KT8FdyUnw7C2o&X-Amz-Signature=078e8a29a93efad69ea6d380a8d336bddb54483e9ddfc7283c08fa9bba53837d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

