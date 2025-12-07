---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEZH7Y6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzGFyVURCXcPWNblBKdsbuqL7ytjqXvgGOPpH1Ik5yvAiEA8rDbIbEnX3sthcZ9YP4caHiWvLoHvkBwiWpZrBKFYg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1vkU0K2wCOjYDtnyrcA3OssWUMWBSfyIuNPQCDClETtUSk0IjZzwhwDXK7RC%2Fw%2B5jjRtdoHHAUHDlGEQTiQxjWw%2Fr0uEx%2FJtjbh0vxiScDrCO043BfU3H9cuZbxl2j4Cmxx2Tupt6juO%2FBgrIrus0eiKMPcrroE%2FajuT%2BDJfM9UmVlO%2FUeGvao96FvqHyPq10icVakARjmtYnlzMRUkrgXoz%2FMYQxI%2BGCZpaxBb1k5zFI6c3d7vNRCo8k2JHPYQEQgg2fLhK7mkxvkMnneQ41oQ9rkThr3yMTAqYyDIONV5Ed5J2Zuih%2FB4qZzsOM1Q2F%2B05il3t5tNh0UnpW9ENcu8ZxmaWI6vk%2BFqYlZh57yX6j4qJJ1VfiMI0a9rEcslsIcs%2BLnni4uMAIAv9lmluwirBkZahQPr0Q3eiHwgZSt8sVzm2rc6lAC94JlxjTWmTt7A3TO%2B6yxdEjpT4r74cPWQJGaEbL4WdEZyNFzsY13tnf7u3Y14RqHdr1M3kvM8pBOcjAYYtzq6tC1yHm8vyR2fu6e7nVSRqzQdjEBTy1BWifHesEY6XYLyR4fZ1Eq3%2BOwJp%2F2%2FJOoGQWnYI2H8alDZm39Rzjf7EsiMZKZmtxLiEET%2Bwm9Jz%2FnuZEbBxCAPYYNGbjAJ%2BNxULzDMN790skGOqUBR2RsAFm7qm%2FCL9IVK04H%2FuyGgNEH70MoQgvDic0q33kNIHvvKw527uXpk261xHsX5hxPuKskgqQIiawb5bAV%2Bx%2FTnDH91n6bQRSDTTgX7ReFVRvag3ZToSQ63d7emoHXXlUdidAMd9MgKF%2Fdyq9ksTgMlpdCcE3p0OPPYfVh23UdsDklnLayvQy0z33oAEFR7W8MQXk0XIbcpjHMqCGQ2rJr%2FjHf&X-Amz-Signature=7bafec4b0de2ce5b80c59e6847b39e26841318aeb0684c7993f72e381c79cf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZEZH7Y6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T005918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBzGFyVURCXcPWNblBKdsbuqL7ytjqXvgGOPpH1Ik5yvAiEA8rDbIbEnX3sthcZ9YP4caHiWvLoHvkBwiWpZrBKFYg8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1vkU0K2wCOjYDtnyrcA3OssWUMWBSfyIuNPQCDClETtUSk0IjZzwhwDXK7RC%2Fw%2B5jjRtdoHHAUHDlGEQTiQxjWw%2Fr0uEx%2FJtjbh0vxiScDrCO043BfU3H9cuZbxl2j4Cmxx2Tupt6juO%2FBgrIrus0eiKMPcrroE%2FajuT%2BDJfM9UmVlO%2FUeGvao96FvqHyPq10icVakARjmtYnlzMRUkrgXoz%2FMYQxI%2BGCZpaxBb1k5zFI6c3d7vNRCo8k2JHPYQEQgg2fLhK7mkxvkMnneQ41oQ9rkThr3yMTAqYyDIONV5Ed5J2Zuih%2FB4qZzsOM1Q2F%2B05il3t5tNh0UnpW9ENcu8ZxmaWI6vk%2BFqYlZh57yX6j4qJJ1VfiMI0a9rEcslsIcs%2BLnni4uMAIAv9lmluwirBkZahQPr0Q3eiHwgZSt8sVzm2rc6lAC94JlxjTWmTt7A3TO%2B6yxdEjpT4r74cPWQJGaEbL4WdEZyNFzsY13tnf7u3Y14RqHdr1M3kvM8pBOcjAYYtzq6tC1yHm8vyR2fu6e7nVSRqzQdjEBTy1BWifHesEY6XYLyR4fZ1Eq3%2BOwJp%2F2%2FJOoGQWnYI2H8alDZm39Rzjf7EsiMZKZmtxLiEET%2Bwm9Jz%2FnuZEbBxCAPYYNGbjAJ%2BNxULzDMN790skGOqUBR2RsAFm7qm%2FCL9IVK04H%2FuyGgNEH70MoQgvDic0q33kNIHvvKw527uXpk261xHsX5hxPuKskgqQIiawb5bAV%2Bx%2FTnDH91n6bQRSDTTgX7ReFVRvag3ZToSQ63d7emoHXXlUdidAMd9MgKF%2Fdyq9ksTgMlpdCcE3p0OPPYfVh23UdsDklnLayvQy0z33oAEFR7W8MQXk0XIbcpjHMqCGQ2rJr%2FjHf&X-Amz-Signature=8cd9837df7b680a9059db5277121c123c40789cab32f0e587841e0b3b70ed964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

