---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDSGZR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyE11%2BFdjZW%2Bnn%2FHmfFu2FkAl9wJScAm71Wi%2FknSifcAiAj3TjH46Sg2%2Beg6AdwFCxfbZyrIPUcjgZSryx29P5lGCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXI4XnrRhrD1GwNH1KtwDh20B4O%2FiMAzxrbgsXwLLR64%2B6oParsPVQBXjX2w%2FkM%2FxylgV7LLW88XECznNxCeS%2FWo%2FXQZWTxusgipOtFmDAhiPdou6PuPVg5aumV3HxP7hKLigSiiW5RPGSixLHELFGW0DEVjqJJcq5ytMncMSFs8RIG1JDMNrPChia5hp28QV2ub%2BKTfxAfsUGTakb3AXLDFdbCtdHUixDQ8NIVO2PmBTSqyEpjp%2B%2Fn%2BqYZoBytbBdGxJwItt23NSSOWI2t7ueYWjEsPUto8HjSsk%2FA5Opo3FESPgB%2BTSoJ6FaPTpb4O1vTeVZC623t5uhgLLdXqTEggXEYls35lgFtkHh5nWR5P8A4ds0KHQ%2BgvvJhXDZPkPCw5%2BRO65OFPdJc0X31jCKWm9LOUCpytivhKpiKkD%2FabgKo35y0ggd4vpYYDW%2Ba9Vqg3wYUZQAX9VbkA2mAmoh%2FnyTVdQBkE%2FBCeOojKK5hy09p7rB9vMMcGS%2F5FjNJlQDaGbYR%2BGy0mA76rv%2BFjGNo6HyXyWtjCh3rF0jEmUjazeOE7Hg1B4ehwaOlhER9ydXnIKIqLvdQn5MvVBiBBaygYXDeXXI2gnYexUNG196tMrhStjEfj5jyVf39IB1iTIGF1ghRNIXpRXB70wrcnFyQY6pgHb2TfRc35fl2m%2FTLxprp0GOnoLen0WjBVY1bFgRPzQ6eaDIg9EOF8TB64jL4qdc7x7u%2FUw3lyl5qElgvJjdWerfx0NlGjGpf9P4fyHnVpfJ6NSIYLwnhacEAGl5pR%2BYx%2BpwCV33RGQ0bW1PbZIcY1Yj69aFafYK7x%2F71y%2B4kRL0Cr33EdL7ZHgGcC4mhD1Dvc4epKAD1E2Sql7R4LZEI39BCGafSAJ&X-Amz-Signature=7da83583e53fa95657d1394bdda579a5e8788f2cefe2fc1e23b5a7ecf0b5c864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JDSGZR4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T114154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIFyE11%2BFdjZW%2Bnn%2FHmfFu2FkAl9wJScAm71Wi%2FknSifcAiAj3TjH46Sg2%2Beg6AdwFCxfbZyrIPUcjgZSryx29P5lGCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMXI4XnrRhrD1GwNH1KtwDh20B4O%2FiMAzxrbgsXwLLR64%2B6oParsPVQBXjX2w%2FkM%2FxylgV7LLW88XECznNxCeS%2FWo%2FXQZWTxusgipOtFmDAhiPdou6PuPVg5aumV3HxP7hKLigSiiW5RPGSixLHELFGW0DEVjqJJcq5ytMncMSFs8RIG1JDMNrPChia5hp28QV2ub%2BKTfxAfsUGTakb3AXLDFdbCtdHUixDQ8NIVO2PmBTSqyEpjp%2B%2Fn%2BqYZoBytbBdGxJwItt23NSSOWI2t7ueYWjEsPUto8HjSsk%2FA5Opo3FESPgB%2BTSoJ6FaPTpb4O1vTeVZC623t5uhgLLdXqTEggXEYls35lgFtkHh5nWR5P8A4ds0KHQ%2BgvvJhXDZPkPCw5%2BRO65OFPdJc0X31jCKWm9LOUCpytivhKpiKkD%2FabgKo35y0ggd4vpYYDW%2Ba9Vqg3wYUZQAX9VbkA2mAmoh%2FnyTVdQBkE%2FBCeOojKK5hy09p7rB9vMMcGS%2F5FjNJlQDaGbYR%2BGy0mA76rv%2BFjGNo6HyXyWtjCh3rF0jEmUjazeOE7Hg1B4ehwaOlhER9ydXnIKIqLvdQn5MvVBiBBaygYXDeXXI2gnYexUNG196tMrhStjEfj5jyVf39IB1iTIGF1ghRNIXpRXB70wrcnFyQY6pgHb2TfRc35fl2m%2FTLxprp0GOnoLen0WjBVY1bFgRPzQ6eaDIg9EOF8TB64jL4qdc7x7u%2FUw3lyl5qElgvJjdWerfx0NlGjGpf9P4fyHnVpfJ6NSIYLwnhacEAGl5pR%2BYx%2BpwCV33RGQ0bW1PbZIcY1Yj69aFafYK7x%2F71y%2B4kRL0Cr33EdL7ZHgGcC4mhD1Dvc4epKAD1E2Sql7R4LZEI39BCGafSAJ&X-Amz-Signature=06e8817bbf46a505ceead4da19eed271f603fcdea6d2032e0eda7d7fd34c2d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

