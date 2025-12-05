---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCB6KIBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUFTgVOsyoXW421XAcbkIkyVN8E8pQCTCDK8%2BiC%2BbzlAiBnvA7of5qLNx76vctr%2FumjvVgWz9320Gj1780WLo9Tfir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDv%2Fr6MA4FFlK3NdSKtwDFKXW1kIIGIUJ0S6iGqR7xclzRjLs4yGYNcw%2B7popT3nLe0gbc8MAVW0JSx7rxzUTrermdlHdc2biNez0TqTgXmeBxi99xLiaInqsHzAVyWij%2BPh93LSHX6Bmdz%2Bcgu8c4PWrJG2x1muNl%2FdsESQ2x2omP8CGutiigNgofn%2F2Nb%2BDfrxYQX0RSdxQMLgTfB5yMDqCBV%2FTNVPgOqcKFUev0T0mi4C7SHzderHPXJ%2Bsn3BWkdlEgYRXt%2Fdz3Cq9jW96jmUaV3LzOXYNqf1ZwYRuzNsRP7Mj4ZdGnQmeUmCvcpECOq13CJMiBCRusVK3wcGVgJg5x76Pdy7n%2FId6vAf6Vdyh4lverNZEWhsqkHuNoZPlRPXLcja5kkhtf4dteAKgRF3RLKJoCiPTYKlyumgmXQ9xn578wroQNK1ePW4huaWUeubrW%2FLGQEGZgD3O6q3cxH1%2BqvMVUMPrta82agHu3tNwLfY%2FYILukO43HVOY6qZCED1LqEY6hjrDGVzUOOKuJtj4tNXessJ%2FExWpYKbo9G71J6VNMbY2pO6QMO5R0d0d5FnUnG70WGwEnDmHqOmHVTiyKDYGWyM9AVNiTp5UvtOGHCRohkkbaajk2zZeukIN5W9%2FN4ABz1VN0oAw6PbLyQY6pgErTkWrnbruKGwpWoOHZ9dtTZyObLUxJEG2t%2BiM%2FCqkqU3zCTFWAKJAXWhb%2ByPsSKaq%2BO9v%2FnCs%2BU90zw5HpeNX%2BHvD%2BnxCRNsLxdAndUoV0rdeW%2FbSW6R0%2Fftc8WuWReFdAbQ3qVzieH5k42rgdNntF12%2Fgcf9BNhyro8TUO46oOqvjVD3lNSi5Xy07bCJ0vbdAoy939rS7glzMYVDfGlRjRVaLX%2Bi&X-Amz-Signature=2c46ee00440bb67501b54447018448dfee4576da97f04b99695b7b35edd8728a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCB6KIBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUFTgVOsyoXW421XAcbkIkyVN8E8pQCTCDK8%2BiC%2BbzlAiBnvA7of5qLNx76vctr%2FumjvVgWz9320Gj1780WLo9Tfir%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMDv%2Fr6MA4FFlK3NdSKtwDFKXW1kIIGIUJ0S6iGqR7xclzRjLs4yGYNcw%2B7popT3nLe0gbc8MAVW0JSx7rxzUTrermdlHdc2biNez0TqTgXmeBxi99xLiaInqsHzAVyWij%2BPh93LSHX6Bmdz%2Bcgu8c4PWrJG2x1muNl%2FdsESQ2x2omP8CGutiigNgofn%2F2Nb%2BDfrxYQX0RSdxQMLgTfB5yMDqCBV%2FTNVPgOqcKFUev0T0mi4C7SHzderHPXJ%2Bsn3BWkdlEgYRXt%2Fdz3Cq9jW96jmUaV3LzOXYNqf1ZwYRuzNsRP7Mj4ZdGnQmeUmCvcpECOq13CJMiBCRusVK3wcGVgJg5x76Pdy7n%2FId6vAf6Vdyh4lverNZEWhsqkHuNoZPlRPXLcja5kkhtf4dteAKgRF3RLKJoCiPTYKlyumgmXQ9xn578wroQNK1ePW4huaWUeubrW%2FLGQEGZgD3O6q3cxH1%2BqvMVUMPrta82agHu3tNwLfY%2FYILukO43HVOY6qZCED1LqEY6hjrDGVzUOOKuJtj4tNXessJ%2FExWpYKbo9G71J6VNMbY2pO6QMO5R0d0d5FnUnG70WGwEnDmHqOmHVTiyKDYGWyM9AVNiTp5UvtOGHCRohkkbaajk2zZeukIN5W9%2FN4ABz1VN0oAw6PbLyQY6pgErTkWrnbruKGwpWoOHZ9dtTZyObLUxJEG2t%2BiM%2FCqkqU3zCTFWAKJAXWhb%2ByPsSKaq%2BO9v%2FnCs%2BU90zw5HpeNX%2BHvD%2BnxCRNsLxdAndUoV0rdeW%2FbSW6R0%2Fftc8WuWReFdAbQ3qVzieH5k42rgdNntF12%2Fgcf9BNhyro8TUO46oOqvjVD3lNSi5Xy07bCJ0vbdAoy939rS7glzMYVDfGlRjRVaLX%2Bi&X-Amz-Signature=ef85fb4def4a888af8533a3c5c13d3b61636330aad99b456de36904ccb59255b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

