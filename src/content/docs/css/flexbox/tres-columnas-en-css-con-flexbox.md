---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCBT5P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8dxmX8dQKTDcnhpkBdCON%2FhG8LAvqfbMGp8gNM8yUYwIgWWtvGHAQ1VkAQFcXHdN3yUHqd2x2nBsMh9lcLUeDqqYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3ms5zSZpMLiYs%2F4CrcA9ZpOONh177tUmOvjAuQFo6V44%2BTQfSRd0akl3yasJghfg1EDbPmihvgeSwF78A5eC8HHfPLwkKGCSwFCyMNfHsgJehhLg3v1IKsd9GOQbamOBTyttl1Mss6LS0ehGF2kJL9hj9iBRCPMBFvJMjbKFMn0KsBkvSCLl5Xphx3BPGpRZ80reqHyGzwALJ98rzPjx2ZqcXKu5IPpfmJEGycQDgwFkyzXO5kcwXfUjhGyBk9hv4RG7N77fKwHOBdArlPs6Wz2kV%2BmrrGsvNFP13feDnqRUh1ck5d3Oy2c3dfe1ykcOnD2R89kpvZRKGoDEbFsNx6jdUTSOrRjS3PxHQkP%2BWfuixtGhCAX1Gf0V2gxejU2sjUJEUOcTNJA6voKP9NuJj%2Fa4U7jSy9lmSda38%2F0tuuGywXBFiOA2axIlGjPdaJcsGay%2F%2Bo6Ut7Q%2FKZoKsz7uCPpE3EfMkLMJV5ai5Cj3Mj6nTbo8W%2BGhuJM%2Fkl%2Bf%2B%2F6Ae1kjBl9YgK5sMThEW357wRdbaPxjYvIndn8wuiKLESmDk8975jucUFt5IB0DfSSBKe09BYQkgps%2Flbp%2B1Bc7KCxZQ8mIW1KCpjbAdyyb6xgvm0QrZB%2BvaJrOWMsDjXNjYmNr5c0mVqUN6IMMHu2MkGOqUBTTrf%2FbLsmATL%2F3a7TZwYyNp2%2Bk3x%2F7C%2FfxxPF6rLGqajRHB9SuHjV3qSGE4VrcYImdXykq9qUMkFNR7kS%2FsJiLozTGr0BbCI1WKL8Qu93m9Ja%2BqsvsehA5Gg2MTgYmcM29B3o%2B6lnzMcHW3Y%2Fogkm%2BIB67Ce1%2Bi9HOQNIDvsywhoDW0uDq7GFAjmmpn7um2%2FNJO3rH2bLYRc23omy9kZ16LGjF%2BU&X-Amz-Signature=67e00fb165b36d4421061e30ca99b399eb6185d2e4228633ef7a51fce556ab2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYCBT5P6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T023821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8dxmX8dQKTDcnhpkBdCON%2FhG8LAvqfbMGp8gNM8yUYwIgWWtvGHAQ1VkAQFcXHdN3yUHqd2x2nBsMh9lcLUeDqqYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3ms5zSZpMLiYs%2F4CrcA9ZpOONh177tUmOvjAuQFo6V44%2BTQfSRd0akl3yasJghfg1EDbPmihvgeSwF78A5eC8HHfPLwkKGCSwFCyMNfHsgJehhLg3v1IKsd9GOQbamOBTyttl1Mss6LS0ehGF2kJL9hj9iBRCPMBFvJMjbKFMn0KsBkvSCLl5Xphx3BPGpRZ80reqHyGzwALJ98rzPjx2ZqcXKu5IPpfmJEGycQDgwFkyzXO5kcwXfUjhGyBk9hv4RG7N77fKwHOBdArlPs6Wz2kV%2BmrrGsvNFP13feDnqRUh1ck5d3Oy2c3dfe1ykcOnD2R89kpvZRKGoDEbFsNx6jdUTSOrRjS3PxHQkP%2BWfuixtGhCAX1Gf0V2gxejU2sjUJEUOcTNJA6voKP9NuJj%2Fa4U7jSy9lmSda38%2F0tuuGywXBFiOA2axIlGjPdaJcsGay%2F%2Bo6Ut7Q%2FKZoKsz7uCPpE3EfMkLMJV5ai5Cj3Mj6nTbo8W%2BGhuJM%2Fkl%2Bf%2B%2F6Ae1kjBl9YgK5sMThEW357wRdbaPxjYvIndn8wuiKLESmDk8975jucUFt5IB0DfSSBKe09BYQkgps%2Flbp%2B1Bc7KCxZQ8mIW1KCpjbAdyyb6xgvm0QrZB%2BvaJrOWMsDjXNjYmNr5c0mVqUN6IMMHu2MkGOqUBTTrf%2FbLsmATL%2F3a7TZwYyNp2%2Bk3x%2F7C%2FfxxPF6rLGqajRHB9SuHjV3qSGE4VrcYImdXykq9qUMkFNR7kS%2FsJiLozTGr0BbCI1WKL8Qu93m9Ja%2BqsvsehA5Gg2MTgYmcM29B3o%2B6lnzMcHW3Y%2Fogkm%2BIB67Ce1%2Bi9HOQNIDvsywhoDW0uDq7GFAjmmpn7um2%2FNJO3rH2bLYRc23omy9kZ16LGjF%2BU&X-Amz-Signature=1939a02a21cf12f0997fc5553455219975d1c6b67d8024b93337a7329ede0f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

