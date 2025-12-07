---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSM5XXQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRcjwWy2dwmGYbhghgG5AgSeU5hixPt8MRSAfetTYERAiEAiaY1lmriOf2QwnKtzpkVct54MBQgvRX8dpCzGaX0kfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9dluPvAdSJJZs%2ByCrcA4i7lWkmqPVNtW3YncFlW2mngvUzhwhZXscgqY3fhUYAhqGZ1wPxv6kkuv%2Btv3QLJA0wy6XPQ5nS2817vC9H0SZtwwTguDkVc2Me2Xnwm2h4Wq1r2g7DDZ0FB6Cn8SgdCu6gYZxeZzFZoo1Sygu6Jrh%2FiXcQvZqfTryDQ%2Bhujf5aldkqVi0yYGfLbN7vIZFYx3e0hGdrfbL6cGdaU4Pknh38zSSAKCdfoKiz4ow8jIfYOBLSAq2n2%2Bus6bfngPK4ssDQQ1gtdByTzFYnLPc2RT5KEck66dpbU7QNsXTEHyArBV7VTc7r36gIOrGQECBI%2F6lKKYg7607b5kCEMWXbZZs2Jxt40OI9rB9ssTwzlgPy7wtObgNNaurcjLcEPwn%2F6pMlRDUCpHPf9xvxxWwHlNYXEyutq4RRrwWB4M7gyqhV%2BcHm7iWq8%2F8ARYUaibWDd4lxSozid4EwmiQfOWUUiLLgnRElb0sXJ9TPf5MZHdu8LP3bdHA7fKZeOskPKYjbXMMCDc3gB8K2J3CBKY57lLS2DTLnQdN3zte8Xi2l%2B78D0oSUtUmzNv9LmDFPG97MTjNAJj%2Bn%2B%2B3S8BOejoNtNJqv%2BEG6slLMCXmpMsQBr4rap4IxCjOkhd1gJSHgMPH90skGOqUBcvZAmCDVAWrXGDCN9ZM04Dpz5SDEzEJIubY6mUENVnqLpEPnVXSfQ4rUWr0ryZyDiisfXcRXd5BU%2B0wjbMckEeCXyqLUD46Q6boWUr%2FwpBBTgwNRyq3LZ7dAVRkHFSMFfGWxy1NONucYkpUfVMHkKDGHH9Hr3G6rgB0oZuVcZTdh7eDDsScOti64KnqS39uHNBTb%2BL2Vf909JqjogjNOfcm8p3h0&X-Amz-Signature=061a856c64dd8a63b84113baec873d07fa606cfab3e91ae8a2a533681a8e618c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUSM5XXQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRcjwWy2dwmGYbhghgG5AgSeU5hixPt8MRSAfetTYERAiEAiaY1lmriOf2QwnKtzpkVct54MBQgvRX8dpCzGaX0kfIqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9dluPvAdSJJZs%2ByCrcA4i7lWkmqPVNtW3YncFlW2mngvUzhwhZXscgqY3fhUYAhqGZ1wPxv6kkuv%2Btv3QLJA0wy6XPQ5nS2817vC9H0SZtwwTguDkVc2Me2Xnwm2h4Wq1r2g7DDZ0FB6Cn8SgdCu6gYZxeZzFZoo1Sygu6Jrh%2FiXcQvZqfTryDQ%2Bhujf5aldkqVi0yYGfLbN7vIZFYx3e0hGdrfbL6cGdaU4Pknh38zSSAKCdfoKiz4ow8jIfYOBLSAq2n2%2Bus6bfngPK4ssDQQ1gtdByTzFYnLPc2RT5KEck66dpbU7QNsXTEHyArBV7VTc7r36gIOrGQECBI%2F6lKKYg7607b5kCEMWXbZZs2Jxt40OI9rB9ssTwzlgPy7wtObgNNaurcjLcEPwn%2F6pMlRDUCpHPf9xvxxWwHlNYXEyutq4RRrwWB4M7gyqhV%2BcHm7iWq8%2F8ARYUaibWDd4lxSozid4EwmiQfOWUUiLLgnRElb0sXJ9TPf5MZHdu8LP3bdHA7fKZeOskPKYjbXMMCDc3gB8K2J3CBKY57lLS2DTLnQdN3zte8Xi2l%2B78D0oSUtUmzNv9LmDFPG97MTjNAJj%2Bn%2B%2B3S8BOejoNtNJqv%2BEG6slLMCXmpMsQBr4rap4IxCjOkhd1gJSHgMPH90skGOqUBcvZAmCDVAWrXGDCN9ZM04Dpz5SDEzEJIubY6mUENVnqLpEPnVXSfQ4rUWr0ryZyDiisfXcRXd5BU%2B0wjbMckEeCXyqLUD46Q6boWUr%2FwpBBTgwNRyq3LZ7dAVRkHFSMFfGWxy1NONucYkpUfVMHkKDGHH9Hr3G6rgB0oZuVcZTdh7eDDsScOti64KnqS39uHNBTb%2BL2Vf909JqjogjNOfcm8p3h0&X-Amz-Signature=89333308671b6caef69b3447335728135e8d580ed7f5d1ca6df141b6c212ff07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

