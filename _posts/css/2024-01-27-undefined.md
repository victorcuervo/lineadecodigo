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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22YNDN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEPUF%2FqxylWoz23KONtueGC5dD6hiNjazNF5oPTnZLD9AiAzjDgCDbKvrpKU5P87BKzrTKPjooD4iF19IuzbkNLneSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqKMNyqfgBpT7Pa4qKtwDJS0EQ3PYlboz%2FUF4bFXK%2F%2FOBhRXCroAimGQHPftzLYaLWp90Nq6tT9yU2Aoap39jEPGsxyaVJC6snFZqKrJuNn9WbRFWKczpn5kDxMFE5IIBf2DGbZ2%2FqTD6tGMzPOnkeVZkbIGlygU9Af7bvpj36HtLtx9UPu5SxM4L1g3YqZ11%2FzViAuPDv2d%2BVE1rmlP5DEWKBCxavVC95574uTjdbKsiqBregrmsSrpUj6juMek8jb3QkpotgVf3UvvIbuVT0Ap3cJP8KAdzINKmySl4gQvUVPwoLr0LS84WgD5kZwbXAXn3WO06AaFWCRb40P0iLKCuuf7smhxTFtSMweiXMLJdp1g9ni2JXfyzxwsBZ6rqKAtgtGagNIdXHgPKDd5LBww7zEJBAR2jrjJACpEYx8j576RNFHbIZra%2FS4Sq3%2Bdg4exJM6IQyiOUjSYmcSYVevLAI7xVAlCSLG0U42jRsYSTaoOBP0Kbirs%2BBt5G9Jk3%2F3NOj13NyP%2FLPaIF6CmVLcaKjpG57gdfKOe9mYlljRvEvUHtLmacojAY5w0HMMOqNfot4gxBXP2l0IxGdDxQ3%2BnJKyyhxVUx8Quyxn1nlvyrtRfsTqB1%2BFoLlcaKc5D7ckSieidQnYxOUSgw1pa%2ByQY6pgH1yMQDw8fBUNYNOGzij0iF9Ma8YE%2BpPltSwcaet%2FBW5aTOCZ1wTPmiROfP2Lksba3x3WQgpHHpfjmt%2BJ5mgNAQBl7MNLmzyxOv2KNGN7mW59iqGs6%2F75b28TleuoPBzkfXCpeo2IQcCRpi9LM%2Bpr8UHQ6Q0w7KaMmU4MIBwnCvHwWSKHtmbUX46QJ99EPw2rFw46iuqQPvNmNSO7DkFtVisaDfGM1x&X-Amz-Signature=a98edfe16edf54c9da9f310cc8e805807a26cb10b3af576018ad889eeafb97ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR22YNDN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T041125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEPUF%2FqxylWoz23KONtueGC5dD6hiNjazNF5oPTnZLD9AiAzjDgCDbKvrpKU5P87BKzrTKPjooD4iF19IuzbkNLneSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqKMNyqfgBpT7Pa4qKtwDJS0EQ3PYlboz%2FUF4bFXK%2F%2FOBhRXCroAimGQHPftzLYaLWp90Nq6tT9yU2Aoap39jEPGsxyaVJC6snFZqKrJuNn9WbRFWKczpn5kDxMFE5IIBf2DGbZ2%2FqTD6tGMzPOnkeVZkbIGlygU9Af7bvpj36HtLtx9UPu5SxM4L1g3YqZ11%2FzViAuPDv2d%2BVE1rmlP5DEWKBCxavVC95574uTjdbKsiqBregrmsSrpUj6juMek8jb3QkpotgVf3UvvIbuVT0Ap3cJP8KAdzINKmySl4gQvUVPwoLr0LS84WgD5kZwbXAXn3WO06AaFWCRb40P0iLKCuuf7smhxTFtSMweiXMLJdp1g9ni2JXfyzxwsBZ6rqKAtgtGagNIdXHgPKDd5LBww7zEJBAR2jrjJACpEYx8j576RNFHbIZra%2FS4Sq3%2Bdg4exJM6IQyiOUjSYmcSYVevLAI7xVAlCSLG0U42jRsYSTaoOBP0Kbirs%2BBt5G9Jk3%2F3NOj13NyP%2FLPaIF6CmVLcaKjpG57gdfKOe9mYlljRvEvUHtLmacojAY5w0HMMOqNfot4gxBXP2l0IxGdDxQ3%2BnJKyyhxVUx8Quyxn1nlvyrtRfsTqB1%2BFoLlcaKc5D7ckSieidQnYxOUSgw1pa%2ByQY6pgH1yMQDw8fBUNYNOGzij0iF9Ma8YE%2BpPltSwcaet%2FBW5aTOCZ1wTPmiROfP2Lksba3x3WQgpHHpfjmt%2BJ5mgNAQBl7MNLmzyxOv2KNGN7mW59iqGs6%2F75b28TleuoPBzkfXCpeo2IQcCRpi9LM%2Bpr8UHQ6Q0w7KaMmU4MIBwnCvHwWSKHtmbUX46QJ99EPw2rFw46iuqQPvNmNSO7DkFtVisaDfGM1x&X-Amz-Signature=aa7cea47652ed793c45d5970b9daf1516bc8688f4df8914b3d47174648334692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

