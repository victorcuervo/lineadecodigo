---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPA34IX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDkj%2B63WcrahUyxyhdHDPnWi7bGytz2%2F5qJrUVOACuPiAIhAPhUCRGACpQRFojiaVVMoI2gq9CrYrXdQMcMSnqZO6p5Kv8DCDsQABoMNjM3NDIzMTgzODA1Igy4A5w6VuGSBSp%2Fxu0q3AMCVWQ%2F5EUiEpxY98mWlzAbwEQBbXKDUQlPGy1327A4v3WQksL%2F%2BcMtg0jkGfi71dd6IZiAMuOts%2FFT1LXrUbOZTnqixK1KTWzW%2Fma2HVoM1W5gqVuLFeI0uEnNSH9cNaVGMAjd1JuNB4vIab4egC%2Fg2pGzh0%2FNHr8XlhaM6K1bhDcoU5IHsgTAiwB%2FowKEGeIKRskhLqsdVbUcJe99ruIg2vOlZdVmR07qwtvuFj73A7tT2YYBDxLsaHhEtrFGc2PNhI74%2F2u9yY8zzK2EQr6mZOXEbcf8YgxpXIaaJGn%2B4x4hEdnhXQEw77uEDxhewBuYX3QCpV%2FfR3TRyVdTZeM%2FkLbQyVy6W1eTrLCGP9fgXGGbRKyy9UW%2F%2BSRK8OkspyLU%2FCWfugfGAC8N%2By2g0jZDZfSePmvkS3HkLCg5aTxKib2xmAQ9Kj2BVFbwVz6kmL96RYFUvYiZUDOwmgCK%2FGupN7oGtyGWB6%2FS%2Blh651GCni1jelLOY5n73CfIaeQUj8De3lqy1oY31g4jruQN%2FbwIMptuEh5d%2FdDvW14Ta0xKyO0tW7NkwAMFxre3s9enZClGBgXuNgMCsH5N4BkDHmja0fpwrgeeIdnr6Dn%2FkbBMDuSUHTuZ5TaeJRueYTC%2F1MPJBjqkAelZQR9ICTHA%2FRI0BGYMYEDcTtcD5HEvAq4AK1Yr7iddd3he8Hz5dYv%2BYUbniFDB6ZO0%2FSgqhlSuHEPnzKGlafnf032BrOIjJcDEeO6A27VBL%2FM84xjyOqddmTZ9AixSBiBwp08DKqHTSo%2Fm7ZBl2h5vdetn6T8TayTn5nw98homObMDu9GXIB%2FH%2FyQwf9VyrxGY%2BkOg61PhlN6G%2FP9EDXpNJeQp&X-Amz-Signature=6b1bc38ab8ca4390cdfd9277762bd36fce6289fa27a5b1d90bc2f33321215299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDPA34IX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQDkj%2B63WcrahUyxyhdHDPnWi7bGytz2%2F5qJrUVOACuPiAIhAPhUCRGACpQRFojiaVVMoI2gq9CrYrXdQMcMSnqZO6p5Kv8DCDsQABoMNjM3NDIzMTgzODA1Igy4A5w6VuGSBSp%2Fxu0q3AMCVWQ%2F5EUiEpxY98mWlzAbwEQBbXKDUQlPGy1327A4v3WQksL%2F%2BcMtg0jkGfi71dd6IZiAMuOts%2FFT1LXrUbOZTnqixK1KTWzW%2Fma2HVoM1W5gqVuLFeI0uEnNSH9cNaVGMAjd1JuNB4vIab4egC%2Fg2pGzh0%2FNHr8XlhaM6K1bhDcoU5IHsgTAiwB%2FowKEGeIKRskhLqsdVbUcJe99ruIg2vOlZdVmR07qwtvuFj73A7tT2YYBDxLsaHhEtrFGc2PNhI74%2F2u9yY8zzK2EQr6mZOXEbcf8YgxpXIaaJGn%2B4x4hEdnhXQEw77uEDxhewBuYX3QCpV%2FfR3TRyVdTZeM%2FkLbQyVy6W1eTrLCGP9fgXGGbRKyy9UW%2F%2BSRK8OkspyLU%2FCWfugfGAC8N%2By2g0jZDZfSePmvkS3HkLCg5aTxKib2xmAQ9Kj2BVFbwVz6kmL96RYFUvYiZUDOwmgCK%2FGupN7oGtyGWB6%2FS%2Blh651GCni1jelLOY5n73CfIaeQUj8De3lqy1oY31g4jruQN%2FbwIMptuEh5d%2FdDvW14Ta0xKyO0tW7NkwAMFxre3s9enZClGBgXuNgMCsH5N4BkDHmja0fpwrgeeIdnr6Dn%2FkbBMDuSUHTuZ5TaeJRueYTC%2F1MPJBjqkAelZQR9ICTHA%2FRI0BGYMYEDcTtcD5HEvAq4AK1Yr7iddd3he8Hz5dYv%2BYUbniFDB6ZO0%2FSgqhlSuHEPnzKGlafnf032BrOIjJcDEeO6A27VBL%2FM84xjyOqddmTZ9AixSBiBwp08DKqHTSo%2Fm7ZBl2h5vdetn6T8TayTn5nw98homObMDu9GXIB%2FH%2FyQwf9VyrxGY%2BkOg61PhlN6G%2FP9EDXpNJeQp&X-Amz-Signature=5a2104c7d2ebe996854eb57f0fab6372921e9fa27c6997b46c25d177432f0bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

