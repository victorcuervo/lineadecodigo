---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATISPRG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjouO%2BwCRmY7GhjYv1wqiWcofNMyUm5DrOgngdsdWlCQIhALvGCUAmxKIfCdSF6Idpf6fJSIqugXjWEb2RTkfnQh1XKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoqvUbl%2BhkERinkA4q3AM7lbpYYyNVWPq7S9FdpPOjrnuXLlYVSPVse4B2cBPq1K99cEiW4P02f3uFzqU%2FYmLZNR9sI0FK%2Ftb9bOPfJAMtVTsGHiKFCyhEPAwAqs0Hs3bStRvb5kGwuXu9Hqn9OHuXwn7J1FDwhDyedPXvKcDSYvNHmNqijiJC0VpBs14lhc1RPG5gNKOeriAdcoh9KyL9JtXfDyZIVMX5m%2BaCpxTXl0xMWb%2BYCItdee4Y0P2BdzQA9pFwdFQRt3qenykoQE3mMlgUxAtpktWjrLMNRsUEOn5JknE5F4yfVek2UA4s8egACq10vdVT2MjypaU5FNwOas%2BaGZsRFAIKK4yNIWYm%2F7%2Bi62eH9fIlNyBruU5XcO8WYrpD11Aqkk2GwEolYlBX%2BZz0UM1sidTKnju%2F7yXkSwEH8yw5UNAdst0JOtqLB5Cog7i2jIHq9XZn%2F%2Bmo8cxkeFm3%2B3w%2Frxb%2Bf7AE3xTj6bPgn5z29%2BV9LU7c6HDSOYNNEGYtR8Jel%2FLDvbQOr%2BihpmeIIIxNwlfxqnFkVL5di7UdvRm6THDJGndpDPwvZdGdZ%2Fh4E0BM8IBBq%2BUZTU2vbVoMU7vkwhwEwl39CoWxCJqpDwMIEXOiN9FPOcPSijy2aL6HWnLpRM74ZjDLmdXJBjqkAWQhsg69YPzxOdaR7lFDE8VG6%2F0E33POOdlQ%2BDFOweMhkS46dmhhHibY%2FBpVvvNYwywH81sdVSV6yI1Bi6nQPnbEvaduL2S1P8p%2FNzlI1Uwjv5y8QciQmaKMhhw9zCqVcy2ZSyW9QWiKclAHZytmENIBBjd8031nLad%2FCojf%2F1NpQsCCFjAgY4bT083CyrLSQ1MNPFXPJVAxvvhwNu9zrVISzKRz&X-Amz-Signature=b9c41e04e8a44997cbb8e4f0825b8ebf3fc7614f5c02959c826911d03ead3fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TATISPRG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjouO%2BwCRmY7GhjYv1wqiWcofNMyUm5DrOgngdsdWlCQIhALvGCUAmxKIfCdSF6Idpf6fJSIqugXjWEb2RTkfnQh1XKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoqvUbl%2BhkERinkA4q3AM7lbpYYyNVWPq7S9FdpPOjrnuXLlYVSPVse4B2cBPq1K99cEiW4P02f3uFzqU%2FYmLZNR9sI0FK%2Ftb9bOPfJAMtVTsGHiKFCyhEPAwAqs0Hs3bStRvb5kGwuXu9Hqn9OHuXwn7J1FDwhDyedPXvKcDSYvNHmNqijiJC0VpBs14lhc1RPG5gNKOeriAdcoh9KyL9JtXfDyZIVMX5m%2BaCpxTXl0xMWb%2BYCItdee4Y0P2BdzQA9pFwdFQRt3qenykoQE3mMlgUxAtpktWjrLMNRsUEOn5JknE5F4yfVek2UA4s8egACq10vdVT2MjypaU5FNwOas%2BaGZsRFAIKK4yNIWYm%2F7%2Bi62eH9fIlNyBruU5XcO8WYrpD11Aqkk2GwEolYlBX%2BZz0UM1sidTKnju%2F7yXkSwEH8yw5UNAdst0JOtqLB5Cog7i2jIHq9XZn%2F%2Bmo8cxkeFm3%2B3w%2Frxb%2Bf7AE3xTj6bPgn5z29%2BV9LU7c6HDSOYNNEGYtR8Jel%2FLDvbQOr%2BihpmeIIIxNwlfxqnFkVL5di7UdvRm6THDJGndpDPwvZdGdZ%2Fh4E0BM8IBBq%2BUZTU2vbVoMU7vkwhwEwl39CoWxCJqpDwMIEXOiN9FPOcPSijy2aL6HWnLpRM74ZjDLmdXJBjqkAWQhsg69YPzxOdaR7lFDE8VG6%2F0E33POOdlQ%2BDFOweMhkS46dmhhHibY%2FBpVvvNYwywH81sdVSV6yI1Bi6nQPnbEvaduL2S1P8p%2FNzlI1Uwjv5y8QciQmaKMhhw9zCqVcy2ZSyW9QWiKclAHZytmENIBBjd8031nLad%2FCojf%2F1NpQsCCFjAgY4bT083CyrLSQ1MNPFXPJVAxvvhwNu9zrVISzKRz&X-Amz-Signature=99c5915bf520393ce99ebe3bf88694aafd6f04c14edd9ac5a7068d8d6d529f15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

