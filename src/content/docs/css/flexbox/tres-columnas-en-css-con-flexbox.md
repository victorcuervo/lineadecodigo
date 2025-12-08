---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBHQRPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL3bwATDDjaWtWZkFFlyjO%2B3e%2BiFIZEdsOvISsWFZQ2AiEA4Cv6fLzCzWq3eGNenakes8wsovzeOEnBQ%2BzINJPwqeIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7h%2Bpvau2fzl72vOircA63zSqbBXAUrj7yLHgNpZ3dq7KLV4DFLwoNauHi3fGw4Y3B9%2F3U%2B7S6YdLMB8y%2B4tisMDpl8GMKhb%2FGnV4624LXOikXXKIaD7Yw%2FZZ2DDD%2Fv%2BEi8kZSTLQCVaeC%2B3%2BAHTPQEfHlHXlD34AWSTCOXB8lw87dwvb0Bodu%2FbMYEljKEUvmrSKb3fVUciXqjk84Z2BKISf%2BUyNaI1syNGuDIikAFH6YgeKp8OyY2LTdZ1olDz7i4uFEPcVJRku7fDUuHc9tb7s31ZS%2Fg06cnnrGo1Zhpb7W2nrx8qd0%2BclJx%2Fei6L21mtNgPm%2FqzI1BX0EfTVNMlUjGbWJKpZpaOcyFgixX2omHRNQR0nyUjySps8jth9ynK4F%2F12CAbS5TEKr0lMKxCkmvYqxsyo5PqePoni2CBHeVfOsPRtL8PXh9AlqjsRexpYk0y82VvQXDOUkeR5TLd3%2BNmCUmUFV5ZKWbI36WiS%2B%2FlNRAjro3mAcS%2FDki3b66ydNJodOGq4oobipB699jwn%2BaaDhKCNVbeElLR%2FqrgzluvO8p7Kbf%2FZPQqf4BRp5p4A4nCU9YKADz4qqfKFhLcZrGCOPHjxJp72nmDxEOXGfR3n2UhFer3gd38SSFq%2FIquLqVQ3OEvJB3SMLTk28kGOqUB2vcF%2FC0TV32cT4A0QsB%2F22OKRLPMATT%2BJmgeI%2FYTbAr1Kzdgtrdnm1t7TMUAHJKk8IvUvyeM6Gh6jmpEEnVCg%2FXBOD84W5AVinYjsSOT86Jxz2v0Fa9eUbqh19juaMYOYqauC8UbFMlnKNXm44UHfcm%2B0QzGGAWtXwRvWJ%2FDQyQhxD9STqVdEDI5HwAB%2F3JnYJdaQW1ykBy%2BWe7KinBaA82%2FRNIX&X-Amz-Signature=09e39a99b63c023690577644fbb2186d4149de7679708e5bb093bf12ed1bf593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDBHQRPL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICL3bwATDDjaWtWZkFFlyjO%2B3e%2BiFIZEdsOvISsWFZQ2AiEA4Cv6fLzCzWq3eGNenakes8wsovzeOEnBQ%2BzINJPwqeIqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7h%2Bpvau2fzl72vOircA63zSqbBXAUrj7yLHgNpZ3dq7KLV4DFLwoNauHi3fGw4Y3B9%2F3U%2B7S6YdLMB8y%2B4tisMDpl8GMKhb%2FGnV4624LXOikXXKIaD7Yw%2FZZ2DDD%2Fv%2BEi8kZSTLQCVaeC%2B3%2BAHTPQEfHlHXlD34AWSTCOXB8lw87dwvb0Bodu%2FbMYEljKEUvmrSKb3fVUciXqjk84Z2BKISf%2BUyNaI1syNGuDIikAFH6YgeKp8OyY2LTdZ1olDz7i4uFEPcVJRku7fDUuHc9tb7s31ZS%2Fg06cnnrGo1Zhpb7W2nrx8qd0%2BclJx%2Fei6L21mtNgPm%2FqzI1BX0EfTVNMlUjGbWJKpZpaOcyFgixX2omHRNQR0nyUjySps8jth9ynK4F%2F12CAbS5TEKr0lMKxCkmvYqxsyo5PqePoni2CBHeVfOsPRtL8PXh9AlqjsRexpYk0y82VvQXDOUkeR5TLd3%2BNmCUmUFV5ZKWbI36WiS%2B%2FlNRAjro3mAcS%2FDki3b66ydNJodOGq4oobipB699jwn%2BaaDhKCNVbeElLR%2FqrgzluvO8p7Kbf%2FZPQqf4BRp5p4A4nCU9YKADz4qqfKFhLcZrGCOPHjxJp72nmDxEOXGfR3n2UhFer3gd38SSFq%2FIquLqVQ3OEvJB3SMLTk28kGOqUB2vcF%2FC0TV32cT4A0QsB%2F22OKRLPMATT%2BJmgeI%2FYTbAr1Kzdgtrdnm1t7TMUAHJKk8IvUvyeM6Gh6jmpEEnVCg%2FXBOD84W5AVinYjsSOT86Jxz2v0Fa9eUbqh19juaMYOYqauC8UbFMlnKNXm44UHfcm%2B0QzGGAWtXwRvWJ%2FDQyQhxD9STqVdEDI5HwAB%2F3JnYJdaQW1ykBy%2BWe7KinBaA82%2FRNIX&X-Amz-Signature=2568c0dc069e26e28117623fa8340bbc7ac56973b118d3dfa231c889dec63841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

