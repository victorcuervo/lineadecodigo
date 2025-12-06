---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74EVKZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagmhEAZlVtxS%2FAaS6kwNhX9kCgCp8ekTMZSH7Mh3gdAiBBhP0Q82ORBZVdKjqYKOeOj4oV2uWMVVnQ7B4OYCMG%2BSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMmWbWdEDwrHLLBJiJKtwDiyI7q3jgEUod%2BHMtaLbTrjY2YHJkd8%2FpU%2FYAH12bpx0OuBMjGc%2BIa8ycJ%2F1gHgknTDiK5oYLrzrNBGdWW5PXqZpyjOBCm48teznVCvDUUWfj%2BRvTadk6fJgBePz8NmI%2F5NQI5aU4xp%2FyiEJ%2FIpXSp5l7Qkf9NKSWx%2FqsDN0WPAfTPcbsqc%2F0FXqBmK8RHjLZ4VjuqDEPHUNzwj9cvCjZpfEnuzeJj5rR9POX8Xv4RTZwqbRdq%2FA8rvd1mM6%2F5FTwHetLbfO5VPK0BkA6aynx%2BvpmGvQeug5Zxzy%2B6S92ESvBS9pS5mQaCNTtG8u%2BxyBD6VakBOWVNGhmjfmreAVXrwX%2B1nj2y%2Ftv9BP0jGCgeWdwTeuyV5nbztKe%2BQSCU%2B8Cu%2FVznYblqLHoqD9829wdVCDIOkIDMFTbcCLZP4Fe%2FcVj%2FTi5e7tmG3Tftxha67fyko8bCjHj22NCKRR9tZFCafqFotPxy295%2BvKLPZxAHYXisi3bLTOoENMgU8W%2BnEVTIlNLXKJkYa%2BShXnMyBTzkO8f3c4hqrxZm2S5j3cjYYiJ4wfQnCNZrgk8NTNiUGalVriG2bnDRl5ve2XpF81IWUXujDf1v0yR7Nm%2Fp%2B7EXUJ%2BhCJ%2BpxjPRFTt6LgwyLzPyQY6pgHEtkIznLhH4CxUiBPUftF3FGPuDdO96cSc3S%2FZ%2B5%2F9c3CCM5vrXmhFG6kryMe6k89tx1ojMTDF2UBQsyNlJwL%2B6VETYfm3FF5SKPM8OkmUKtc1KL98LxCaUYgeIkQmJU3FX7RASyua6OmfGAhUFnGN3NNqRfOBinSi6DRKRun2rw7SxvCspdk6gh42upLYZh1YtWWY5P4M2NSbXGSDAttOYMHZNXUV&X-Amz-Signature=f8843a45a5c4a3aae486ec1462d36c9105a43d76214ffa4f92a4dfa346ca0de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U74EVKZW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHagmhEAZlVtxS%2FAaS6kwNhX9kCgCp8ekTMZSH7Mh3gdAiBBhP0Q82ORBZVdKjqYKOeOj4oV2uWMVVnQ7B4OYCMG%2BSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMmWbWdEDwrHLLBJiJKtwDiyI7q3jgEUod%2BHMtaLbTrjY2YHJkd8%2FpU%2FYAH12bpx0OuBMjGc%2BIa8ycJ%2F1gHgknTDiK5oYLrzrNBGdWW5PXqZpyjOBCm48teznVCvDUUWfj%2BRvTadk6fJgBePz8NmI%2F5NQI5aU4xp%2FyiEJ%2FIpXSp5l7Qkf9NKSWx%2FqsDN0WPAfTPcbsqc%2F0FXqBmK8RHjLZ4VjuqDEPHUNzwj9cvCjZpfEnuzeJj5rR9POX8Xv4RTZwqbRdq%2FA8rvd1mM6%2F5FTwHetLbfO5VPK0BkA6aynx%2BvpmGvQeug5Zxzy%2B6S92ESvBS9pS5mQaCNTtG8u%2BxyBD6VakBOWVNGhmjfmreAVXrwX%2B1nj2y%2Ftv9BP0jGCgeWdwTeuyV5nbztKe%2BQSCU%2B8Cu%2FVznYblqLHoqD9829wdVCDIOkIDMFTbcCLZP4Fe%2FcVj%2FTi5e7tmG3Tftxha67fyko8bCjHj22NCKRR9tZFCafqFotPxy295%2BvKLPZxAHYXisi3bLTOoENMgU8W%2BnEVTIlNLXKJkYa%2BShXnMyBTzkO8f3c4hqrxZm2S5j3cjYYiJ4wfQnCNZrgk8NTNiUGalVriG2bnDRl5ve2XpF81IWUXujDf1v0yR7Nm%2Fp%2B7EXUJ%2BhCJ%2BpxjPRFTt6LgwyLzPyQY6pgHEtkIznLhH4CxUiBPUftF3FGPuDdO96cSc3S%2FZ%2B5%2F9c3CCM5vrXmhFG6kryMe6k89tx1ojMTDF2UBQsyNlJwL%2B6VETYfm3FF5SKPM8OkmUKtc1KL98LxCaUYgeIkQmJU3FX7RASyua6OmfGAhUFnGN3NNqRfOBinSi6DRKRun2rw7SxvCspdk6gh42upLYZh1YtWWY5P4M2NSbXGSDAttOYMHZNXUV&X-Amz-Signature=45c5e6a929acc3ce9df845b702d158f4fa86c89c73cc46c763a6368c12dcdcbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

