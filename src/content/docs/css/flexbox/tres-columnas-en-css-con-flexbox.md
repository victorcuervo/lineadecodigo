---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHHRI2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvonZFl%2BkSLZRO%2BzKtkB0X%2FcS2OcP2y2bnt4Su4BWMjAiALhQGY%2FHiZVNHKVtuHV2BQsuP%2FIA%2F%2F4KKamJ444Z0uryqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAL7BUABIbqoWCVOPKtwDY%2FGcmbFH3Y227bAMHj56ssBkU1rb4Y%2Bi7MJ3R6D1cQDiD3WO5bC4qkOmzOzA4cfphhdHAHMAZXfVqkxDDL8eqZzc3g%2F%2FXVmJSr%2FecQ45UWCEhJ0N8xCXAiWIC%2FnGdH2lrLlEE00slE%2BEP4VQGfsSciZ4ndGrzXbN95EGRuodYGl66lj15cKi6Su4P8FHmt7JdLRkugtFU0n56FtTZ0%2FPiNrkuIOSXM6Z5fYFyJ8HO54DwQhBQT%2BuIbDjsVMhdjn4YRvuouESoTXQ8DD7F6YY6hn1CmIKWcGbFmYResuBuPJbS9tqzai%2BrMR23pwfl7NyUYDltYkQ3fVH42wIqNvv%2BVPLHvfqwta2PjKQ7k2lFx9GKjLRbsff0si91XM8B6K9YSGP8gKJHdehlUIP7hVSqRc01FwezxSIlnnyWIfTH2DOamka8IlxOXyVS5zXFiSbwlG3LsVUs7PSqo9vVzvvucLny7Frvek6ArPcqjLQ1Z3zs%2BiCULInxWpD5uEf4%2FAP2zXmy5sd5R9ghBuDyXWuRbO0rG5deZ9GTGCaCxsmjs4qbWQsnnJmsi2SBKrfalmV0BysmhT2%2BdqrRzb%2BLbaNXZbSg8d7exfnasQoLsSuzthL%2B1NHT9GlvmjIgCQwwr%2FWyQY6pgFJ1I2Qa6%2BcA3Y4fJ2ObYOIVHP8G7um9E9qyZGspDg8PYQkCopkEIcWxd8tBu6wRPJUbBn5cBtyhY3utTW3BIUfkRZvzATU34tYJs5aoMKLPdfnRcq5ZPRB7nnM7CYBbcQ5%2BMyF4f2FiOi0wiU%2FCEge9OHV0JJcXimPAwzxJuf3qj65lcTKdPBTrtLP5XNdp8bi6Y5k36TmAT5L21YMdwH%2FkaRWveQ5&X-Amz-Signature=731b002a941453b4a977a7c2865e585a266a8247f0a780c021e7c35701e4b20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHHRI2A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvonZFl%2BkSLZRO%2BzKtkB0X%2FcS2OcP2y2bnt4Su4BWMjAiALhQGY%2FHiZVNHKVtuHV2BQsuP%2FIA%2F%2F4KKamJ444Z0uryqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAL7BUABIbqoWCVOPKtwDY%2FGcmbFH3Y227bAMHj56ssBkU1rb4Y%2Bi7MJ3R6D1cQDiD3WO5bC4qkOmzOzA4cfphhdHAHMAZXfVqkxDDL8eqZzc3g%2F%2FXVmJSr%2FecQ45UWCEhJ0N8xCXAiWIC%2FnGdH2lrLlEE00slE%2BEP4VQGfsSciZ4ndGrzXbN95EGRuodYGl66lj15cKi6Su4P8FHmt7JdLRkugtFU0n56FtTZ0%2FPiNrkuIOSXM6Z5fYFyJ8HO54DwQhBQT%2BuIbDjsVMhdjn4YRvuouESoTXQ8DD7F6YY6hn1CmIKWcGbFmYResuBuPJbS9tqzai%2BrMR23pwfl7NyUYDltYkQ3fVH42wIqNvv%2BVPLHvfqwta2PjKQ7k2lFx9GKjLRbsff0si91XM8B6K9YSGP8gKJHdehlUIP7hVSqRc01FwezxSIlnnyWIfTH2DOamka8IlxOXyVS5zXFiSbwlG3LsVUs7PSqo9vVzvvucLny7Frvek6ArPcqjLQ1Z3zs%2BiCULInxWpD5uEf4%2FAP2zXmy5sd5R9ghBuDyXWuRbO0rG5deZ9GTGCaCxsmjs4qbWQsnnJmsi2SBKrfalmV0BysmhT2%2BdqrRzb%2BLbaNXZbSg8d7exfnasQoLsSuzthL%2B1NHT9GlvmjIgCQwwr%2FWyQY6pgFJ1I2Qa6%2BcA3Y4fJ2ObYOIVHP8G7um9E9qyZGspDg8PYQkCopkEIcWxd8tBu6wRPJUbBn5cBtyhY3utTW3BIUfkRZvzATU34tYJs5aoMKLPdfnRcq5ZPRB7nnM7CYBbcQ5%2BMyF4f2FiOi0wiU%2FCEge9OHV0JJcXimPAwzxJuf3qj65lcTKdPBTrtLP5XNdp8bi6Y5k36TmAT5L21YMdwH%2FkaRWveQ5&X-Amz-Signature=9165e2c1ce92e6280ed116465fcab398b8f7a8b3f1415e67d2880b1f659970a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

