---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3XONAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCfEtT6ukHDLLS3qvFJpCrlLKsdRxwcE46beYrmsTPqfgIhAOh%2FAXJeh240IFvS%2F6cSqGL5Him79BvC5baA4MIf8e40Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxZEYKakc3sJskADwQq3AOn53vmf8LYGOsoLQNhvdOp%2FzLtVzUeso0MAUnOa14MtNyvJV65CE1XZjyrC5rx%2BgBQ%2BBovs3KC4z5Md2aWqFnVvUq4sEnUj8t9U%2Boe1ss1IVjLR8xXYBDbG9ycozF6s7O1pMkU8Iqizhk4DcoVRmsMcJRu9zQBvFquVNX3jbbC5ZVaYVFDT1DRxyvM8Bwfknj550rSpR0ps%2FdiRYlHQosfo2SE76uicbYmO4KgezFAJRlIViOJigstKEdxEc%2FaAH5bgY8FzDsCB1FQCMmY1hNJplkok1Sy5krWnehh7BId7%2BIQ%2BcSNMrmGbehFK3bqW%2F%2FMq6vZvkdRleMbu6tKuyQITUemAiQQC6AqwGBIR7MZkVPIcA2Wbgj5w5Wk6HTAITbIcv3GiGV4qmP0TWEOMnmCGbz2ZDHyJ%2FlFgaMBgz%2Bk4HPHhqDbyFqdIQv1wf6FBeB6rG2CSK53gD36hpnhb%2FJc7fpt%2Bl8LZDhEOWv%2FC8R7slF9f8uEJLblgu1bWzRpRNu5Q7k3JvwLyN%2F6ycRY3YPJ0kyQTBx3PNR6YoGVICNmA4HPiRINHQEmThOwlxz%2FndI1UTyDapH%2FU79T16rfSkkwooAeWuDpvHssrd28%2FvQ%2Btv35XEzRWRdfSuzBeTDTub%2FJBjqkAYX4ZFUB9715Y2a7KLCcXeSghC4JDczrCsZ56qIU0kjY0xfHtPKRXe8rLYlE%2BNr92N8K9PtKdx19nmhEK5ePGQ7O3vtSdnuKz%2BKEZmeAGT566kq5dEh64gaA8x4Gd%2Ftz%2BEFXqKyzXMQbZhn7D1a4fhF6cr2mMEQPPBQnp8JnHIPHUNVnvBrffgEaSNeJXLJRiE%2B6hCScKtFgLPwduW2g78l3FNNw&X-Amz-Signature=c6923721276559149ee0d1d17e03277cfd903dadef05208acbedfa1a8004610d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D3XONAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCfEtT6ukHDLLS3qvFJpCrlLKsdRxwcE46beYrmsTPqfgIhAOh%2FAXJeh240IFvS%2F6cSqGL5Him79BvC5baA4MIf8e40Kv8DCCgQABoMNjM3NDIzMTgzODA1IgxZEYKakc3sJskADwQq3AOn53vmf8LYGOsoLQNhvdOp%2FzLtVzUeso0MAUnOa14MtNyvJV65CE1XZjyrC5rx%2BgBQ%2BBovs3KC4z5Md2aWqFnVvUq4sEnUj8t9U%2Boe1ss1IVjLR8xXYBDbG9ycozF6s7O1pMkU8Iqizhk4DcoVRmsMcJRu9zQBvFquVNX3jbbC5ZVaYVFDT1DRxyvM8Bwfknj550rSpR0ps%2FdiRYlHQosfo2SE76uicbYmO4KgezFAJRlIViOJigstKEdxEc%2FaAH5bgY8FzDsCB1FQCMmY1hNJplkok1Sy5krWnehh7BId7%2BIQ%2BcSNMrmGbehFK3bqW%2F%2FMq6vZvkdRleMbu6tKuyQITUemAiQQC6AqwGBIR7MZkVPIcA2Wbgj5w5Wk6HTAITbIcv3GiGV4qmP0TWEOMnmCGbz2ZDHyJ%2FlFgaMBgz%2Bk4HPHhqDbyFqdIQv1wf6FBeB6rG2CSK53gD36hpnhb%2FJc7fpt%2Bl8LZDhEOWv%2FC8R7slF9f8uEJLblgu1bWzRpRNu5Q7k3JvwLyN%2F6ycRY3YPJ0kyQTBx3PNR6YoGVICNmA4HPiRINHQEmThOwlxz%2FndI1UTyDapH%2FU79T16rfSkkwooAeWuDpvHssrd28%2FvQ%2Btv35XEzRWRdfSuzBeTDTub%2FJBjqkAYX4ZFUB9715Y2a7KLCcXeSghC4JDczrCsZ56qIU0kjY0xfHtPKRXe8rLYlE%2BNr92N8K9PtKdx19nmhEK5ePGQ7O3vtSdnuKz%2BKEZmeAGT566kq5dEh64gaA8x4Gd%2Ftz%2BEFXqKyzXMQbZhn7D1a4fhF6cr2mMEQPPBQnp8JnHIPHUNVnvBrffgEaSNeJXLJRiE%2B6hCScKtFgLPwduW2g78l3FNNw&X-Amz-Signature=8118c70457018cbabc2f815b0cbe90309a5621928bacb9b9e43a0723e9d90752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

