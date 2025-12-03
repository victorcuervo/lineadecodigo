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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQNJEHN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDe0p9amUL6At8mnA%2FaCMQYkb45nEgKDntOwkfjF89XngIhAKKhX7eaOjb68UmMc5%2FBMP3Uyy9edGxBnMUbuhlAns8fKv8DCCsQABoMNjM3NDIzMTgzODA1IgwV0%2BKJBAzlf9%2Fp1U8q3APz4ZxqORmXUmdRhrr2ZLuHoG%2FQ2J3%2Fo3nT7Bh6C16oKnwZI2%2BdseGAow2CjgaiIl2YoYYQbecrMYiXd03TbJu2Esq5ngegFG128DKFnxAMPG7yOI%2FoMU3llZnWZ9gZaqade3Gzn7XwKUuAYccd7ABSz1p3%2FFdZQuU5d%2BuVzKS9YCMrxpSlgp7utUGn6jbvr95Q%2F30JwvSBTu6krz1TI2iwk8AHFJUFU57KnAue7oxHNg6VMs7NlE2WHnlz5oYkQQcU32qds%2B12uZRFxYAkElMLZtBP3b0AN7fLa0kZqZd2kv7rvkDOpdCLNgDNFz%2BP2izczg9BjgZglErzI3FpeG545ry9lDRAlvXuns60K2fpVedYKBCctpEEDOUVWLZg3wILA%2BhQ19bSnsMW7il%2FRA2zlLirWxQ1bMznQP%2B4%2FpvMCjfiqIDaUMHQr1i%2B0wxQ2Hnsj3Kvy59paEiEyHLK1wq2GFBMS0oHRb%2B3ILJb9ThK3V9%2Fts5CLHL7S21ukc4M25eafo9OkHNhMnQeocTDRE1418yRPWMcP4h1CwZH8IlFmJibDik7APzDO%2BKQDLfXRDOcjojqxMgWH%2BmkofNUUcp2Yr%2FgXMKsV%2BQ2y6qvGoReuazqgkOIr4REOKFJjTDsksDJBjqkAe0LSgaDX1qm0Ilee9zROybeM5s9toQyMaGB0csrmdGkB%2B7NfU3Eav0v6vVO4%2Fn3Gj5BWEGzbgryxl%2F40vgzKo2wq3fkmFCHAGzTi5OB4wUPtdyuovUqaz26%2BSbmnBYuA1GdTeyS4v%2BTG20%2BfqSi0oPFtaZcwPV5kI%2FDwMnkPOVF%2FDR1IroJDIVFHur%2BdFvVjRJw%2BVvr%2Fbjg7tTMqmHy0fmzh6rn&X-Amz-Signature=b676e4818c09f199d7a380f8dc68a4923c59b8446171b54c7264ebd7a88b61ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUQNJEHN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDe0p9amUL6At8mnA%2FaCMQYkb45nEgKDntOwkfjF89XngIhAKKhX7eaOjb68UmMc5%2FBMP3Uyy9edGxBnMUbuhlAns8fKv8DCCsQABoMNjM3NDIzMTgzODA1IgwV0%2BKJBAzlf9%2Fp1U8q3APz4ZxqORmXUmdRhrr2ZLuHoG%2FQ2J3%2Fo3nT7Bh6C16oKnwZI2%2BdseGAow2CjgaiIl2YoYYQbecrMYiXd03TbJu2Esq5ngegFG128DKFnxAMPG7yOI%2FoMU3llZnWZ9gZaqade3Gzn7XwKUuAYccd7ABSz1p3%2FFdZQuU5d%2BuVzKS9YCMrxpSlgp7utUGn6jbvr95Q%2F30JwvSBTu6krz1TI2iwk8AHFJUFU57KnAue7oxHNg6VMs7NlE2WHnlz5oYkQQcU32qds%2B12uZRFxYAkElMLZtBP3b0AN7fLa0kZqZd2kv7rvkDOpdCLNgDNFz%2BP2izczg9BjgZglErzI3FpeG545ry9lDRAlvXuns60K2fpVedYKBCctpEEDOUVWLZg3wILA%2BhQ19bSnsMW7il%2FRA2zlLirWxQ1bMznQP%2B4%2FpvMCjfiqIDaUMHQr1i%2B0wxQ2Hnsj3Kvy59paEiEyHLK1wq2GFBMS0oHRb%2B3ILJb9ThK3V9%2Fts5CLHL7S21ukc4M25eafo9OkHNhMnQeocTDRE1418yRPWMcP4h1CwZH8IlFmJibDik7APzDO%2BKQDLfXRDOcjojqxMgWH%2BmkofNUUcp2Yr%2FgXMKsV%2BQ2y6qvGoReuazqgkOIr4REOKFJjTDsksDJBjqkAe0LSgaDX1qm0Ilee9zROybeM5s9toQyMaGB0csrmdGkB%2B7NfU3Eav0v6vVO4%2Fn3Gj5BWEGzbgryxl%2F40vgzKo2wq3fkmFCHAGzTi5OB4wUPtdyuovUqaz26%2BSbmnBYuA1GdTeyS4v%2BTG20%2BfqSi0oPFtaZcwPV5kI%2FDwMnkPOVF%2FDR1IroJDIVFHur%2BdFvVjRJw%2BVvr%2Fbjg7tTMqmHy0fmzh6rn&X-Amz-Signature=70b5711adf6d9058e783a8fa9a68ecebd8ade3b164357711699a008569e2a558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

