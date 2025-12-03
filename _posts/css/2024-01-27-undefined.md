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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFZG2YU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD9Wzecil%2FrUhqLgS9BESusCrbmw04mh%2FkwJhVq7eSPIAIhAJYekEtIb0fqi7eqcnGmZlcZ%2Fjny1nlpi2vtCgH4T2EtKv8DCC0QABoMNjM3NDIzMTgzODA1IgzI5Q17hGDvOZntoW0q3AOrM8wN4z38hOokpLFGMAaOtVhzh3RViHF1JrdjUuUu0bMWPyRU8kGfDS1R2A6VeDWdtwMkqUUwY2zMInPU6neVYdPXINWDvWlhG30fU2T6xWMK1PRDcquwzVokEZZLnepMe%2B%2BJt3XNuhC20iFxYjf7XcpfbocmnN%2Bq2oZwABkqtfP0snfIR1heOfrpyFsyzh6Y%2BsKkIKxTk7OAomwnvVe5tDPprtacsbbht%2F4dK6bSlRNF%2BBq%2B8sNLFtVWP8JiVIfWcY%2FWmoPnO%2FdUeqR314HrBdnCOY88qct3qN1UViMD%2B%2FDfmUPzxscRYDxjU2vROUdHlsfmKkAgtNRptRmf9oxxX4IcxKmoOWECwElHWBTAVvqkbHBndHJl0TAolipC4nYMXDCpY3iCVliogcSteOupp576sxAOR7%2BGr1GCrDwG1LY88L%2FOozM%2F7kttpRaY1d0zajiZXx%2FTM9Pql89gBEedCEjNXI0l2IwcyBiAMlruT3BhaGBZM8cyiy7hngg%2FLtosrZO3hKtpTX2ZMpvaOlrU2kdwm5BU4QC7d9lBn71lTpCyqwaadsHzNAt%2FUbxtb4F1VsR9vV5l0WJz9tF0g2tjiRQWhb0OHGxqpX4SpRCxJqXEg3uuAqqjC3zPNzCEzcDJBjqkAX5k3dsjPWy1hmtDCKx5QLvdX55IYun1uRhumhqNSx7JNR5T%2FyTlGODgBWwFu70ZjCwcX3ol43YIN%2FmdEl7bGtT3sMfWVQDymN8OmmVreQx7m1JNNmLKRwmTdk5wshqGltHucsf%2BhksATWI5hlIFq%2BpRKD85kADB1%2F0T1D4aprd2slcdQ%2F7MUyBbvBiVgZA9YsGVlsY3o9dTDJoXxkDu8Jb74h%2BY&X-Amz-Signature=6cd85b159ca88f1f671da49838d11a2d42526281d30594f280debc3dd13ba6ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLFZG2YU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T125932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQD9Wzecil%2FrUhqLgS9BESusCrbmw04mh%2FkwJhVq7eSPIAIhAJYekEtIb0fqi7eqcnGmZlcZ%2Fjny1nlpi2vtCgH4T2EtKv8DCC0QABoMNjM3NDIzMTgzODA1IgzI5Q17hGDvOZntoW0q3AOrM8wN4z38hOokpLFGMAaOtVhzh3RViHF1JrdjUuUu0bMWPyRU8kGfDS1R2A6VeDWdtwMkqUUwY2zMInPU6neVYdPXINWDvWlhG30fU2T6xWMK1PRDcquwzVokEZZLnepMe%2B%2BJt3XNuhC20iFxYjf7XcpfbocmnN%2Bq2oZwABkqtfP0snfIR1heOfrpyFsyzh6Y%2BsKkIKxTk7OAomwnvVe5tDPprtacsbbht%2F4dK6bSlRNF%2BBq%2B8sNLFtVWP8JiVIfWcY%2FWmoPnO%2FdUeqR314HrBdnCOY88qct3qN1UViMD%2B%2FDfmUPzxscRYDxjU2vROUdHlsfmKkAgtNRptRmf9oxxX4IcxKmoOWECwElHWBTAVvqkbHBndHJl0TAolipC4nYMXDCpY3iCVliogcSteOupp576sxAOR7%2BGr1GCrDwG1LY88L%2FOozM%2F7kttpRaY1d0zajiZXx%2FTM9Pql89gBEedCEjNXI0l2IwcyBiAMlruT3BhaGBZM8cyiy7hngg%2FLtosrZO3hKtpTX2ZMpvaOlrU2kdwm5BU4QC7d9lBn71lTpCyqwaadsHzNAt%2FUbxtb4F1VsR9vV5l0WJz9tF0g2tjiRQWhb0OHGxqpX4SpRCxJqXEg3uuAqqjC3zPNzCEzcDJBjqkAX5k3dsjPWy1hmtDCKx5QLvdX55IYun1uRhumhqNSx7JNR5T%2FyTlGODgBWwFu70ZjCwcX3ol43YIN%2FmdEl7bGtT3sMfWVQDymN8OmmVreQx7m1JNNmLKRwmTdk5wshqGltHucsf%2BhksATWI5hlIFq%2BpRKD85kADB1%2F0T1D4aprd2slcdQ%2F7MUyBbvBiVgZA9YsGVlsY3o9dTDJoXxkDu8Jb74h%2BY&X-Amz-Signature=3c2db2af1e0e6f63694b9acc91785f2747a1b707ff79cb4021d13ac8ac5cf41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

