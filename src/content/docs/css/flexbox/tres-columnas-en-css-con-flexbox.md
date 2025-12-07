---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIBGHDV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGufNUTWAm2GMM2FXrsdU%2FNmlBNpQqTGmHFQ%2Bv5J8ltAiB1Q%2F9Up4X6EuJ4T3gMDtKUM1gm2tx%2B6aWe7ciEA0p16yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKKc6zyYQMPRSBLkEKtwDeitMcnWgvHttGh1P73UN6oINoM20Vc63dkSN%2FgjjiMEfgxG3veof6PWAXhypqlJBe2ed9J0z4w1yXM2wYYnOhnOudfZJbFzjDKx%2B%2F17qo3zqCwSbzWcld7pXi0vJxSojckEXC1m21bwOE%2FxSATo1oa4BplMHeaaXD2NXf2kyPIB4emyil6i%2FIvIydbW4leaZVGaEdDa4TYUgPIgGP2G0GpWXeQZZpFhtjdrg4JCL1gNcOf7t6k2lz%2BAiHPM4%2B1rjGQhbH2Ml8xO4AU2P9qZz%2FXCox3TrtRdLczoAIc%2F1YdRwAVVN4wpBtWKJh2ipSX28Nb8NvjHj2q%2BSSWypBCjTsAOZh7xzfovRYi5ais2sqK1J1SSuxEQGJRnXYL%2FE5xKYpJQ0ZCCUz52td6Xti4HZ2FnFH34LicyHzdvg30FB1fgXvaK51%2FSG09kp3ALqKDt6nrYo19AlVwJdkjulV5hODTOcADIQ9o0NzGP4JN3lLbHBMaVu%2B1Bw0b1VMVINbYaIMpqkAC4frHDpzaxjTKhUBMjdrZe%2Fx8d8LBoSUVhE8BlwvXJDtpDeLwH3cd%2FbVTs%2Bb6lorhCoPjUB%2Fb6%2BTza2eTXvTzjdyki32VmHAz3CY93mv3t%2BgFip%2BRnp%2BJYwlZrVyQY6pgED%2BTI2NCWt4kAl%2FV%2BTH74QZfN%2Fmc2Xs%2FZC%2FZlsuXNJK3MOyWA41JjiSObcdCIQL%2FNUAF9b9LbkK6QdIVy1Lqn8aEs8W8wDmng6L2l4d3rQyPepD8i%2FwQjhHVd%2FSRdul%2BPDz9rblBjQuVE%2FcazLiM5cyUm%2FNlZWP2eIJcRZ4PIXROFDT1CTEuUFxWUDwbxKD%2BwPhVSd0y7oZrAyoGUvkpY%2FLHZ3D82G&X-Amz-Signature=a7f9923bdf9465f62df7143ff6481e062b655834f6d849897350dbbbaa85e7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIBGHDV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGufNUTWAm2GMM2FXrsdU%2FNmlBNpQqTGmHFQ%2Bv5J8ltAiB1Q%2F9Up4X6EuJ4T3gMDtKUM1gm2tx%2B6aWe7ciEA0p16yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKKc6zyYQMPRSBLkEKtwDeitMcnWgvHttGh1P73UN6oINoM20Vc63dkSN%2FgjjiMEfgxG3veof6PWAXhypqlJBe2ed9J0z4w1yXM2wYYnOhnOudfZJbFzjDKx%2B%2F17qo3zqCwSbzWcld7pXi0vJxSojckEXC1m21bwOE%2FxSATo1oa4BplMHeaaXD2NXf2kyPIB4emyil6i%2FIvIydbW4leaZVGaEdDa4TYUgPIgGP2G0GpWXeQZZpFhtjdrg4JCL1gNcOf7t6k2lz%2BAiHPM4%2B1rjGQhbH2Ml8xO4AU2P9qZz%2FXCox3TrtRdLczoAIc%2F1YdRwAVVN4wpBtWKJh2ipSX28Nb8NvjHj2q%2BSSWypBCjTsAOZh7xzfovRYi5ais2sqK1J1SSuxEQGJRnXYL%2FE5xKYpJQ0ZCCUz52td6Xti4HZ2FnFH34LicyHzdvg30FB1fgXvaK51%2FSG09kp3ALqKDt6nrYo19AlVwJdkjulV5hODTOcADIQ9o0NzGP4JN3lLbHBMaVu%2B1Bw0b1VMVINbYaIMpqkAC4frHDpzaxjTKhUBMjdrZe%2Fx8d8LBoSUVhE8BlwvXJDtpDeLwH3cd%2FbVTs%2Bb6lorhCoPjUB%2Fb6%2BTza2eTXvTzjdyki32VmHAz3CY93mv3t%2BgFip%2BRnp%2BJYwlZrVyQY6pgED%2BTI2NCWt4kAl%2FV%2BTH74QZfN%2Fmc2Xs%2FZC%2FZlsuXNJK3MOyWA41JjiSObcdCIQL%2FNUAF9b9LbkK6QdIVy1Lqn8aEs8W8wDmng6L2l4d3rQyPepD8i%2FwQjhHVd%2FSRdul%2BPDz9rblBjQuVE%2FcazLiM5cyUm%2FNlZWP2eIJcRZ4PIXROFDT1CTEuUFxWUDwbxKD%2BwPhVSd0y7oZrAyoGUvkpY%2FLHZ3D82G&X-Amz-Signature=3a5d7971425bb4777a5bcc74aa8ea649705c2c2cf4e507b02c66497f2bdd4b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

