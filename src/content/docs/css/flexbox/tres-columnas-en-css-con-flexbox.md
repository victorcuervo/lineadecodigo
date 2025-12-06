---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSUF2VL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECXDIIE%2B1BHFX14l%2B7NJ0bFGLTc2nx1nAIlMT3epBjAiEAqyl0C6JHlO4juUqBFZK5f900COwnYbis1w9zcLZTxFoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM0spYqpO3Atp0VQoyrcA7gtvv3WQ9csLEDcN%2BMh68nVd9LY8DSChgZpJILDB08Agmfpj19MzW3y1Fek2TCwy35yTTvICDIHRkakQgw66oMz9KUuZjSp46ocknE1Yai5TPWxd51xRywhHbgCY0fPnHB3dM2scfGNlQjRItmAz1BDOmgrvNinUA4%2BucQUb9mxkJy97z8kGvjyjuN28atkpGCrVCb9t%2FlcX2X0%2Bdgf%2FXv1yT0c1IkbUXg4fif8IBQzlT4cgS8L2KHYBq4jB5h6BA%2F9r6HMzEMhZzLS6QarW4T40PImW%2FTyz4CTrh9lrdMw%2Bs9N6jjmoBZ9aGcdkDhDSVrpiY%2BGkRSIxCzJvSP4erQjTTSTgPvKG%2B92MNfdX81QJ0Alm55lB9udXWPFhJ%2FL2kGVWKXc4LgqSyy%2F0egOJyVupa0WGGFKohPteS20P%2BgZ4bkrh%2FnIwICTLSlDwkdyeg0gMVAdH70nPjpuKj6QJmz1FMhqkUCChXpR9CR73U0ispgmtisfMkjWg0X0bZHPRy1hgotoADaTBVe1gMddkVqYgx%2BmqhexxwBLtTO1qsrT53axG6eOGCjza5I2JYl22Yc9yaFwapdY2GBfp1fJgehiFXJZc3s0gFbQ5yTlOaFejfk6IxfevAp4WU4CMLHDzskGOqUB9y81%2BkuulWxRhWWJoCGUaK%2B0zDCZ4xmC36uRXwtRFAO4xSDVsMLzfbH10YARby3ijmlC%2F9hvt%2B404jFO6FsKZbt6ws%2FaHOslfQDsbd2%2Btbf%2FdLVsv2Y%2BiINpq1hSpNhw0muMeljKP5sBu3M95XaNATRNSu7W2%2BNf7K3iNlrzl8WbYRy2P33WTptMN%2FY3O5K0KEMisJ%2BtRmvs%2FIkbrvK1W1BJ8i9J&X-Amz-Signature=4d981d5193ab59243f54ac70600410ab8c1ac710fbd5c48c3098207e3732c628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSUF2VL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAECXDIIE%2B1BHFX14l%2B7NJ0bFGLTc2nx1nAIlMT3epBjAiEAqyl0C6JHlO4juUqBFZK5f900COwnYbis1w9zcLZTxFoq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDM0spYqpO3Atp0VQoyrcA7gtvv3WQ9csLEDcN%2BMh68nVd9LY8DSChgZpJILDB08Agmfpj19MzW3y1Fek2TCwy35yTTvICDIHRkakQgw66oMz9KUuZjSp46ocknE1Yai5TPWxd51xRywhHbgCY0fPnHB3dM2scfGNlQjRItmAz1BDOmgrvNinUA4%2BucQUb9mxkJy97z8kGvjyjuN28atkpGCrVCb9t%2FlcX2X0%2Bdgf%2FXv1yT0c1IkbUXg4fif8IBQzlT4cgS8L2KHYBq4jB5h6BA%2F9r6HMzEMhZzLS6QarW4T40PImW%2FTyz4CTrh9lrdMw%2Bs9N6jjmoBZ9aGcdkDhDSVrpiY%2BGkRSIxCzJvSP4erQjTTSTgPvKG%2B92MNfdX81QJ0Alm55lB9udXWPFhJ%2FL2kGVWKXc4LgqSyy%2F0egOJyVupa0WGGFKohPteS20P%2BgZ4bkrh%2FnIwICTLSlDwkdyeg0gMVAdH70nPjpuKj6QJmz1FMhqkUCChXpR9CR73U0ispgmtisfMkjWg0X0bZHPRy1hgotoADaTBVe1gMddkVqYgx%2BmqhexxwBLtTO1qsrT53axG6eOGCjza5I2JYl22Yc9yaFwapdY2GBfp1fJgehiFXJZc3s0gFbQ5yTlOaFejfk6IxfevAp4WU4CMLHDzskGOqUB9y81%2BkuulWxRhWWJoCGUaK%2B0zDCZ4xmC36uRXwtRFAO4xSDVsMLzfbH10YARby3ijmlC%2F9hvt%2B404jFO6FsKZbt6ws%2FaHOslfQDsbd2%2Btbf%2FdLVsv2Y%2BiINpq1hSpNhw0muMeljKP5sBu3M95XaNATRNSu7W2%2BNf7K3iNlrzl8WbYRy2P33WTptMN%2FY3O5K0KEMisJ%2BtRmvs%2FIkbrvK1W1BJ8i9J&X-Amz-Signature=d60e2a33e4069024e64ef8be23607123a6aa9900d075217abfe6f851a547a1a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

