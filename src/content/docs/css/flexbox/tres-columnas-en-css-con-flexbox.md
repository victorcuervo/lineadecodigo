---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSWKPZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1XNoORWjPJrQ5M%2BGSIxqFLXb0bCN%2Ba%2FXWXoKNZEioOAIhAL2ihhSEpJ2EDvrxn2jeH3g6%2F1DxEQ5%2F7LAH2idyf3DjKv8DCGEQABoMNjM3NDIzMTgzODA1Igz2284pPzGoDFU4JQkq3ANDKg%2B2GbOouDLYe5Rk%2BYFYWP%2FEPXHaZGay%2FhJzzFE5MZsZMf%2Fbk%2B0UlFttVZ0rhluep61AztWF2FPb43y6bHdEWcp6zMy2p97mFRa7QBMEo6Gd0Sqw%2Fxx0Qr3A%2BCX9cTZZj6dVB%2Fb2xdLv890MNChx0K3GN9pqPjoroLeyLRZOjKEEE9wmlkGPg7mjuJKXfu8JpyicLbjk6Y9NYEeMpHiXdbUeWHkrx8dBPkyxl1Z4dbKxVYpY1NCwyX8LaUVwvRrH1JQPfxpIJk%2BfVj0ZUON4Y%2FlAEnyHo%2FMuR70TlKyxe7zhi4UDayVerMx63aM2GDL4TASDz86beAH3vAP0c1wEkV2b46kIxEBMiVUSB56szbJJ9mBmSpw5wJWUmpGbo3m7A%2BL7GaY91Hj1d%2FdW4JelODfcLedImzKFHMEJkSv%2FqB5mwpQAIaZT9OvKXMTEPA9fVP7dmbppw64lbnNxXxMcT9tAdY1C23yROD%2FsLUvtsE1FLI0gb1QvepO%2FUGTVspctCBkJ4z9ragI174EojdNaKN2zJ8NJmp7CZCDM9e%2Bd6GxEDH5mwqIC2sddfDdaa60UYYJqpN3pzbvmVq1am1rXd04YaNhASU1dqFW9tyNtsyE6jco2HBl0kfjNJzCr88vJBjqkAcEaL%2FdqoOZOUMwDmXGQipf6XGP06KvmHomiQL%2Bb%2FtGTWvHXpX%2BfZPLCYVfyr5XGaoAAlFxTouxb%2B%2BCY%2BqVCng2h3bEmcpaicOfZpxDf7o9VsJvmkyCTUHM2iHKjwKi2BeS5WBIMLpesIAB3R5li02i2v5TTCwmW%2FxNSUuY1IuBE7eMkAIjHqwnq58BDSz4%2F8wGUL46ZhyE6NAI8ECADfz5aSd0A&X-Amz-Signature=14024a0d8f45c1dbce2d4b4126b8b7e4b899de53366aa8d43aaedf0e6835a5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RSWKPZG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T162044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1XNoORWjPJrQ5M%2BGSIxqFLXb0bCN%2Ba%2FXWXoKNZEioOAIhAL2ihhSEpJ2EDvrxn2jeH3g6%2F1DxEQ5%2F7LAH2idyf3DjKv8DCGEQABoMNjM3NDIzMTgzODA1Igz2284pPzGoDFU4JQkq3ANDKg%2B2GbOouDLYe5Rk%2BYFYWP%2FEPXHaZGay%2FhJzzFE5MZsZMf%2Fbk%2B0UlFttVZ0rhluep61AztWF2FPb43y6bHdEWcp6zMy2p97mFRa7QBMEo6Gd0Sqw%2Fxx0Qr3A%2BCX9cTZZj6dVB%2Fb2xdLv890MNChx0K3GN9pqPjoroLeyLRZOjKEEE9wmlkGPg7mjuJKXfu8JpyicLbjk6Y9NYEeMpHiXdbUeWHkrx8dBPkyxl1Z4dbKxVYpY1NCwyX8LaUVwvRrH1JQPfxpIJk%2BfVj0ZUON4Y%2FlAEnyHo%2FMuR70TlKyxe7zhi4UDayVerMx63aM2GDL4TASDz86beAH3vAP0c1wEkV2b46kIxEBMiVUSB56szbJJ9mBmSpw5wJWUmpGbo3m7A%2BL7GaY91Hj1d%2FdW4JelODfcLedImzKFHMEJkSv%2FqB5mwpQAIaZT9OvKXMTEPA9fVP7dmbppw64lbnNxXxMcT9tAdY1C23yROD%2FsLUvtsE1FLI0gb1QvepO%2FUGTVspctCBkJ4z9ragI174EojdNaKN2zJ8NJmp7CZCDM9e%2Bd6GxEDH5mwqIC2sddfDdaa60UYYJqpN3pzbvmVq1am1rXd04YaNhASU1dqFW9tyNtsyE6jco2HBl0kfjNJzCr88vJBjqkAcEaL%2FdqoOZOUMwDmXGQipf6XGP06KvmHomiQL%2Bb%2FtGTWvHXpX%2BfZPLCYVfyr5XGaoAAlFxTouxb%2B%2BCY%2BqVCng2h3bEmcpaicOfZpxDf7o9VsJvmkyCTUHM2iHKjwKi2BeS5WBIMLpesIAB3R5li02i2v5TTCwmW%2FxNSUuY1IuBE7eMkAIjHqwnq58BDSz4%2F8wGUL46ZhyE6NAI8ECADfz5aSd0A&X-Amz-Signature=c9f9de37efc1bfde000f68e548654206749c190b8bc283a2bc550e7db89b88c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

