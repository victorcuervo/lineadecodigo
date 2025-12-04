---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TIYZF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHWxxp4SMXxX%2BI4v%2BNSOpKNoVUSVUWF%2FWpfGejJFke9GAiBYXCQZBexUIX%2FHdyBm%2BsmbPN3aVAbox1TjPImLz%2FJ1iSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMEeazW7AKvmuas%2FqLKtwD%2FkpjHkfjgzmvzSpG9wEoiR9Dy98rlnEXUfp%2F%2FZ5jnrplW%2FKtmLLbxFrb7YCVOvAc0y6qWDtnojxhnkF%2BTBFvaBkAG1z2L6w2qz3k%2FK64qNgrTylB5FE4UdsZUSs6Ew7r6fLJukrqg4bLtwxZPBwlwh40R5%2BELJHF35Zpd7sTyNfU5pqsL3j3blu8NFMHHMWlsnjYXrOa97Img2%2BA4msYZu%2FWGgLZuD9Ad9v%2FyH0ZIf0%2FlY8CgKTAc%2F%2Bl01qnPIeHQnMChHDb9YOSOqJUFZ7aWNwHN56wB8V5AXOd9tro%2BHcgVSFOJWR2R3RLssQkQ9LiXh24P5ptvqRypFHL9NybyLZCONoJIeHsRw8%2F%2BetBrRIrlXI0BpE%2FHkbp3OEoJhRRKE7McHIYuOYHts6vhJxtOS%2BxrvIq4%2FB4GE9i92dgRFjmH8mIgMgBN0i7pGtCDwIOR83OgVihZIUyvIJ5QOFYJFyKtk87OQcqozSlV6zjzyD2yAP47pScmtMkjR55MoYsRgtrKwNGvdUWsIv%2BYprYq1djg4cl7bY1lMd%2BeL9680qrcWpDStf5a3phvMnDxoOf9cuZPe1%2BnDxN0hHCDddm4W6Z5mSDiiUwN2MlJmWi46hb8enrxB4Z6y6C2s4w%2BMjFyQY6pgEqVoQIyQYPs2Qn5VileKknLNSaTxJyqGs8x7fIxOJZJWeTPlVCKw9Ho5mT2W%2BN5pcyr9mE2fa3NCXhuzcomaimVwFyY64YbSK3LGMmMNq9oWRxFABOryWnwSyZy1x%2FOFXBRcCOqvljO8bcZEVHZhRG78%2BZVenJmYeiHb4KwZ%2FzzlYpvThXYFvd5I2s3kRUyMXe0rO8z4Wl8tKc%2BS71GzoAjfW6eaVs&X-Amz-Signature=f6d123ea94d53f99281c1d66ba33a53865edcf4eeef1146d0016e16eee5c0e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5TIYZF3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T112341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHWxxp4SMXxX%2BI4v%2BNSOpKNoVUSVUWF%2FWpfGejJFke9GAiBYXCQZBexUIX%2FHdyBm%2BsmbPN3aVAbox1TjPImLz%2FJ1iSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMEeazW7AKvmuas%2FqLKtwD%2FkpjHkfjgzmvzSpG9wEoiR9Dy98rlnEXUfp%2F%2FZ5jnrplW%2FKtmLLbxFrb7YCVOvAc0y6qWDtnojxhnkF%2BTBFvaBkAG1z2L6w2qz3k%2FK64qNgrTylB5FE4UdsZUSs6Ew7r6fLJukrqg4bLtwxZPBwlwh40R5%2BELJHF35Zpd7sTyNfU5pqsL3j3blu8NFMHHMWlsnjYXrOa97Img2%2BA4msYZu%2FWGgLZuD9Ad9v%2FyH0ZIf0%2FlY8CgKTAc%2F%2Bl01qnPIeHQnMChHDb9YOSOqJUFZ7aWNwHN56wB8V5AXOd9tro%2BHcgVSFOJWR2R3RLssQkQ9LiXh24P5ptvqRypFHL9NybyLZCONoJIeHsRw8%2F%2BetBrRIrlXI0BpE%2FHkbp3OEoJhRRKE7McHIYuOYHts6vhJxtOS%2BxrvIq4%2FB4GE9i92dgRFjmH8mIgMgBN0i7pGtCDwIOR83OgVihZIUyvIJ5QOFYJFyKtk87OQcqozSlV6zjzyD2yAP47pScmtMkjR55MoYsRgtrKwNGvdUWsIv%2BYprYq1djg4cl7bY1lMd%2BeL9680qrcWpDStf5a3phvMnDxoOf9cuZPe1%2BnDxN0hHCDddm4W6Z5mSDiiUwN2MlJmWi46hb8enrxB4Z6y6C2s4w%2BMjFyQY6pgEqVoQIyQYPs2Qn5VileKknLNSaTxJyqGs8x7fIxOJZJWeTPlVCKw9Ho5mT2W%2BN5pcyr9mE2fa3NCXhuzcomaimVwFyY64YbSK3LGMmMNq9oWRxFABOryWnwSyZy1x%2FOFXBRcCOqvljO8bcZEVHZhRG78%2BZVenJmYeiHb4KwZ%2FzzlYpvThXYFvd5I2s3kRUyMXe0rO8z4Wl8tKc%2BS71GzoAjfW6eaVs&X-Amz-Signature=bb65915c1d288e0bcaefeb0acb124ef0b97c999e4c7a483ddba7accb6260e53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

