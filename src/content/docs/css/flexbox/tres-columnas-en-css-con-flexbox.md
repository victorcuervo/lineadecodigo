---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47I5TBP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIGP29Z1b7yI%2BHQ5mzOrLgXtzgeCShkormifmswBjAXAiBiHJwl3aG13QUXaaMvi%2Bc7b38%2Bj1O2DQYPyb6vEGOKkSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2BNbm8PcPZZAnw8caKtwDpnNlmXFAZIsiv0xilnp8ISNwfPY7g1fBLCFAKk%2FR6SnM5cFcGkNBHiDFUSXA583B%2FPA3ZGwTiQUjcfr5cqDRmXDrFus0vsu7tSmqZzQWK8igLLIFatfvFdwm32GmpqT3ayoHU86mwXOyytUtAEoa0jlDJeohrDKfEXFV%2B39gm6YiGIiJCD%2BV8OxmHthg5sx2oSMroOQjaXtjkt4cLQswLxI4m%2BxDuQafQHJSTXeHJM1w9Msip9uU4rGD3sqLs0kJ1iuAyp51rgs5kEgY9nmdpADTcIx5CQOg8ii2n8dLrGWotqBsklm78o2V6fcvPm8EXREybNcHqSt8Bkk2QhwCbTqb2hQHsqZk2%2FdG7Xl57hDPluMsNK0BYx3e4B1Eh6wjlSHkFGN3ouuaVy7zDpTz5vmJtnfIigIs0vQXx6HqCg1Mqdu4lNAVo2CCwfT7z%2FvfnQc%2BHs4fgy8nPGjyVlMemhKIJcQsbdlzTuzwoYypcJOqljXimV6VkEeWkmK4sHAcKWryySAgJvHMN6tcdj2nTVWECDxRsPntRHaubVrvUvvgWRhWSUFmBwsBZ4T4qBBU%2Fz0h6yChym%2FAdIVRIsjGHHqzCYIDOE%2FSs3v7K2VHObK0xdqoGrISIt3FRcgwuMnRyQY6pgH3nU5yKrqMwjzczyzlDJ4XjMeFbGlPyjxQBvM2N6x67pI50LauEHQxRMRbcTkJUVqH5nJEwvRT7aDNzukFD%2Ff6wO%2Btk6GMX%2B4g2M6QtnHZWrMX9HZoFR4dIeImPMrWp%2FDKbbRCXnycxerwKUdjhI02550o8vSUyTsjyNT8anDZEBbUJQ45A04iJLzoXWOTRMnEWRgZP424AvcscbSzYrU6ypuiZtS7&X-Amz-Signature=f780e379948a9184ba270260db792d1f1a29d4b6d6f8269ce12b11b8db01eba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z47I5TBP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T204455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIGP29Z1b7yI%2BHQ5mzOrLgXtzgeCShkormifmswBjAXAiBiHJwl3aG13QUXaaMvi%2Bc7b38%2Bj1O2DQYPyb6vEGOKkSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM%2BNbm8PcPZZAnw8caKtwDpnNlmXFAZIsiv0xilnp8ISNwfPY7g1fBLCFAKk%2FR6SnM5cFcGkNBHiDFUSXA583B%2FPA3ZGwTiQUjcfr5cqDRmXDrFus0vsu7tSmqZzQWK8igLLIFatfvFdwm32GmpqT3ayoHU86mwXOyytUtAEoa0jlDJeohrDKfEXFV%2B39gm6YiGIiJCD%2BV8OxmHthg5sx2oSMroOQjaXtjkt4cLQswLxI4m%2BxDuQafQHJSTXeHJM1w9Msip9uU4rGD3sqLs0kJ1iuAyp51rgs5kEgY9nmdpADTcIx5CQOg8ii2n8dLrGWotqBsklm78o2V6fcvPm8EXREybNcHqSt8Bkk2QhwCbTqb2hQHsqZk2%2FdG7Xl57hDPluMsNK0BYx3e4B1Eh6wjlSHkFGN3ouuaVy7zDpTz5vmJtnfIigIs0vQXx6HqCg1Mqdu4lNAVo2CCwfT7z%2FvfnQc%2BHs4fgy8nPGjyVlMemhKIJcQsbdlzTuzwoYypcJOqljXimV6VkEeWkmK4sHAcKWryySAgJvHMN6tcdj2nTVWECDxRsPntRHaubVrvUvvgWRhWSUFmBwsBZ4T4qBBU%2Fz0h6yChym%2FAdIVRIsjGHHqzCYIDOE%2FSs3v7K2VHObK0xdqoGrISIt3FRcgwuMnRyQY6pgH3nU5yKrqMwjzczyzlDJ4XjMeFbGlPyjxQBvM2N6x67pI50LauEHQxRMRbcTkJUVqH5nJEwvRT7aDNzukFD%2Ff6wO%2Btk6GMX%2B4g2M6QtnHZWrMX9HZoFR4dIeImPMrWp%2FDKbbRCXnycxerwKUdjhI02550o8vSUyTsjyNT8anDZEBbUJQ45A04iJLzoXWOTRMnEWRgZP424AvcscbSzYrU6ypuiZtS7&X-Amz-Signature=502efb72eaabd1120f2040ffd2ccba36fc3b02d3fe3eefb8592c6714e4182056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

