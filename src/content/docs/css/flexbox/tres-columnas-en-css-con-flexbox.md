---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDICDFP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP6klj8UZa5OJ2css9snF%2BLoleqGbogtmYRTHuFcvOAAiEAyVlIubrznQxsk8zlQjrZRVlG4EpaxVmzdpwJ%2F38B2Ncq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKCmF2cFqu%2FGK3DYpSrcAz03uJrVy7QASOyksdL3dFIs9%2BpeJvyqjNQe5huPE6anGzpoD7pSCvYVleUVE4nWfS%2BOjEAKnU0%2FqMhc8vHMa93n6Hjy6LzmWLSsL%2BQaefPZS%2BuBJJkH4bnMdC3EzkcEKar%2FNkU7BjPQeSPF6xzcvdcjRTJHudewndVYVDo3AJl3x02PmYc%2BiIzaBUZgw28XYmE6T8HC77bbgPcaNUfTp0ZA6NUkboy%2FwAFlMi4f0XhNZxJ4lsQXPe6aqXD7dKUS2G2Ipup8%2F5JAaHfUOKiv9clj1z14ZeKGBcvf3kBuA9VkfL%2F%2BDeDPv2554nu5zOW2GNfCAWWlYQrnDGr%2By80oLkd474rkhHbn1HVZze6sYmS%2F5ghiSX1ODT1RA0cVg9mnOUtblza4ACxOqTQnHdXkLUG8OnFelVXf1is7JxjLjYYQjZxwIt6wm699HyfFa0zvMJniTDWpEJjMpL097UHC7bTbjQtov2tWNMm33bCLih%2Bzl2Ui2OjgdxP%2BcvviIrCePTQn5tW9jUFxH%2FeV%2B4gtc5qeCdzcGYYDOep%2FsN7LDPnm8FKOgI0dv0ytYmZsDHe5fN1Mhks5FH%2FCxppdEnXUkb1I9yCMY5iPXf4WI2Ac1v%2F09sBiTDWS5m%2FTYwi4ML2MyMkGOqUB%2BLzyFmVId1H%2FpflR6ENrzLJhHOcjddL3q2ECnIyyPqv0OlBu3ivLPkcOZNN5n6zo8GUqi554W1%2FmBqctMAurhorJPD0MsxCpSCUCbnIIOUXiQoN7LX0bQ0Mj7a%2BR%2FLnZk4GPy4X9Z%2B9uq4xp2qNSEczQMCSBwdgyqBaaFSksVZQTilJulS2Er1TKOD8Tjh2slsFPYbpmscOSbFwT9mBORlJm%2Bv0%2F&X-Amz-Signature=53df934db888a99a0123e75327e34350fb259e24718894737860d5930c73ef8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWDICDFP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T024516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAP6klj8UZa5OJ2css9snF%2BLoleqGbogtmYRTHuFcvOAAiEAyVlIubrznQxsk8zlQjrZRVlG4EpaxVmzdpwJ%2F38B2Ncq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKCmF2cFqu%2FGK3DYpSrcAz03uJrVy7QASOyksdL3dFIs9%2BpeJvyqjNQe5huPE6anGzpoD7pSCvYVleUVE4nWfS%2BOjEAKnU0%2FqMhc8vHMa93n6Hjy6LzmWLSsL%2BQaefPZS%2BuBJJkH4bnMdC3EzkcEKar%2FNkU7BjPQeSPF6xzcvdcjRTJHudewndVYVDo3AJl3x02PmYc%2BiIzaBUZgw28XYmE6T8HC77bbgPcaNUfTp0ZA6NUkboy%2FwAFlMi4f0XhNZxJ4lsQXPe6aqXD7dKUS2G2Ipup8%2F5JAaHfUOKiv9clj1z14ZeKGBcvf3kBuA9VkfL%2F%2BDeDPv2554nu5zOW2GNfCAWWlYQrnDGr%2By80oLkd474rkhHbn1HVZze6sYmS%2F5ghiSX1ODT1RA0cVg9mnOUtblza4ACxOqTQnHdXkLUG8OnFelVXf1is7JxjLjYYQjZxwIt6wm699HyfFa0zvMJniTDWpEJjMpL097UHC7bTbjQtov2tWNMm33bCLih%2Bzl2Ui2OjgdxP%2BcvviIrCePTQn5tW9jUFxH%2FeV%2B4gtc5qeCdzcGYYDOep%2FsN7LDPnm8FKOgI0dv0ytYmZsDHe5fN1Mhks5FH%2FCxppdEnXUkb1I9yCMY5iPXf4WI2Ac1v%2F09sBiTDWS5m%2FTYwi4ML2MyMkGOqUB%2BLzyFmVId1H%2FpflR6ENrzLJhHOcjddL3q2ECnIyyPqv0OlBu3ivLPkcOZNN5n6zo8GUqi554W1%2FmBqctMAurhorJPD0MsxCpSCUCbnIIOUXiQoN7LX0bQ0Mj7a%2BR%2FLnZk4GPy4X9Z%2B9uq4xp2qNSEczQMCSBwdgyqBaaFSksVZQTilJulS2Er1TKOD8Tjh2slsFPYbpmscOSbFwT9mBORlJm%2Bv0%2F&X-Amz-Signature=c76b25f06a098cf605c029a48390f4bfd14e8934d4843a09537c3512c3f6e041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

