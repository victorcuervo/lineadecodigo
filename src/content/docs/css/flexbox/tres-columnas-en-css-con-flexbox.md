---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3GB3MO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHJfFFuPFlO8BTrL%2Bm%2F71rL%2Ft6Q0a%2FpJcDUoetN4shKOAiA57%2BOrAtYXg1w2SdSf1KZOP5bP9ZtgdBLmCTnINYiR%2Fir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV0d%2B4SJkaGdclKIZKtwDYSklumvftEmsB2mYPjxxMixIMfvIMeJoy7TeCj7pXEObhakSEVJzZThCVSmxc5J5oyxo8MWNWfyyQ%2BKuy76ZHM5lcSbNftw%2F8eywLkXOVtdgjRwnj38ubtcGwLlGjx3outsxaN8Ihv%2FNwZKqEFKnQmTTFwwfVAu4SqtawSJh3FPz%2BiciDUYXFBEHSIg6ax872c%2FqW9nj8D97HV%2FfYtuh72JCz%2BGFrlprzRcW2edPW2m4Cmdb7TNBaBTf8B8deVoRVfuWZlgLtI5hJJMoXjBORLA64i2g1gjivdQiRtFAmCUFd1XGxk6cHqa0LqR6X7zLlX74HTz4iBATLNXoZkIhidEKphWNi4Be8nw4lzAQYQXWoKSNa41FZnUfcON%2F45mIZZLGU4fSYmj%2FmmBHeJ563%2FBHwfbdXPOpK42e6S2Un8uMG1n%2FxaMwUjTkoGrus4rzwlxWMhzQfiJBTFzvVYdREq0jXF00yYy00WB2DQozot%2FqyRgAEr1VGXz%2FqR1t8y5coMpe6hEBkQa19uFltys7vBKtuI%2FfllLzazTT6P%2FqJUJnljlXG0O47T8qbpPy7f1At%2Bc%2F8Rkdn10qt9BU2fCcfy8tajj3AWeAnUMYSVTi0VuyT9CvuxfBGIoqIR4wxZDEyQY6pgFrMI5%2FFVum60BSjWEFD6%2BCMOzdhCGfXLHEZfhzmpMVSr33YuJwyIAsbDVN7Mv8Lfbw%2B0NNNDWl5tWlm4rk4DILaYYaGvoO5iX9iTK9IA4wsBFKjpWYHJP4T1%2Bw8V1tWOhxZnfvdSiCcQmIVnvqCa3tqbZcl36SkwtIlVkUGqNnIx%2F%2BXIWR%2FNIRaA7Fmhu3kL%2FOcSVmMGMeIrdz%2FAn8km7LYXmlUd8J&X-Amz-Signature=90af2549ccb0b32e87c474a0787547265628a19996f5f71c4f2f5d09f9ad8e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3GB3MO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHJfFFuPFlO8BTrL%2Bm%2F71rL%2Ft6Q0a%2FpJcDUoetN4shKOAiA57%2BOrAtYXg1w2SdSf1KZOP5bP9ZtgdBLmCTnINYiR%2Fir%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV0d%2B4SJkaGdclKIZKtwDYSklumvftEmsB2mYPjxxMixIMfvIMeJoy7TeCj7pXEObhakSEVJzZThCVSmxc5J5oyxo8MWNWfyyQ%2BKuy76ZHM5lcSbNftw%2F8eywLkXOVtdgjRwnj38ubtcGwLlGjx3outsxaN8Ihv%2FNwZKqEFKnQmTTFwwfVAu4SqtawSJh3FPz%2BiciDUYXFBEHSIg6ax872c%2FqW9nj8D97HV%2FfYtuh72JCz%2BGFrlprzRcW2edPW2m4Cmdb7TNBaBTf8B8deVoRVfuWZlgLtI5hJJMoXjBORLA64i2g1gjivdQiRtFAmCUFd1XGxk6cHqa0LqR6X7zLlX74HTz4iBATLNXoZkIhidEKphWNi4Be8nw4lzAQYQXWoKSNa41FZnUfcON%2F45mIZZLGU4fSYmj%2FmmBHeJ563%2FBHwfbdXPOpK42e6S2Un8uMG1n%2FxaMwUjTkoGrus4rzwlxWMhzQfiJBTFzvVYdREq0jXF00yYy00WB2DQozot%2FqyRgAEr1VGXz%2FqR1t8y5coMpe6hEBkQa19uFltys7vBKtuI%2FfllLzazTT6P%2FqJUJnljlXG0O47T8qbpPy7f1At%2Bc%2F8Rkdn10qt9BU2fCcfy8tajj3AWeAnUMYSVTi0VuyT9CvuxfBGIoqIR4wxZDEyQY6pgFrMI5%2FFVum60BSjWEFD6%2BCMOzdhCGfXLHEZfhzmpMVSr33YuJwyIAsbDVN7Mv8Lfbw%2B0NNNDWl5tWlm4rk4DILaYYaGvoO5iX9iTK9IA4wsBFKjpWYHJP4T1%2Bw8V1tWOhxZnfvdSiCcQmIVnvqCa3tqbZcl36SkwtIlVkUGqNnIx%2F%2BXIWR%2FNIRaA7Fmhu3kL%2FOcSVmMGMeIrdz%2FAn8km7LYXmlUd8J&X-Amz-Signature=3faaf94b388a4c72f13432a6951cf85596140b852ec77b6b7b4a28d74017d410&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

