---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DL2CF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCQOi5bW%2ByQrA1ivOEtEpWvlwjBGDEcKDhjgp4KfwHRdgIhANl1hygXlycgx09deD7miDbFXrgIM%2Boo9IWGE0QtMKZ3Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzgUmVdoY%2Btv7%2BcSZUq3AOb0kr1RWL2Bmvi%2BzELliFi8fBpNrpNR2Knnd9rghjiaBc%2BgwbndocpR7DUYyW2joJaiQCKc6VHYS%2FQv6e19jrB%2ByHa1saNYnoXc4lHQL7RyPmm5EuaFs5ztA84m%2BSO0xzxa%2F9%2BH3eEtRGGqnI8l8GX5MuZXLbGCTXw6F9vju%2Ff4DB6e3eTD96%2B2eHnAOOYwmGC53TLEC93EP0fR7pwdPoca4qkSaphpi6Lbt%2B6FvJTA3OcxFRAZeEfGHgcBa7TZs9GQ5ImpRYX8c27zZMbcpaMVjTeCn4SYjVbbJ3NQHDzX8DAstgFJezl5D3DIz24ewMinFvHQoINJi98adeGzx5dm36KTPNIJ2dllEZnFARF5e8LFtXJDpa7T7XOhUQDDlnYhndzhRtdFYKKu712%2Bu5WhzmkK6TDVgvKqOYjBKsrCYQi4STUXuZmTdE2pILCqIOLfMuOVTmBM6WX8RA8l%2BG%2Bwas9lkgLfnKZcjpbqIn%2FfBP1%2FVBRv6p4oGTld4cwCLTQoQqPqG5mty0uO2DPTIp1wJ5pVt%2BjEL6f3VQ2KK%2BawKtzHO1PAyG7xxP98o2n9see9gkpHaq0cWRuAMd8tJbF6POIVvpKXGaMkK4f2j9%2FOEi8sefxyTa8GEUMAzCo%2BMLJBjqkAURLrI0ujd1qb%2FunbWMRSMFPIWjXuM7U%2FMtXWzKoE0AucwxNdaQi%2FiFABDoQQRLJYXEWZoUl5Kd7lr0dGrNZWSqucasQfdRwEIcR7gMXH3sKagzMrrl4EpZKncBwBgonZ1jrCnHXJcKLDQBonVlwtFl9lPh5bcGJ6uuFdXrJAN1kYYx7nz6vlEbwNpiEJ%2BauF7d7XZYjKNaJ1%2FD9nLk%2BGBkpcH5c&X-Amz-Signature=28b41f43632be522b26bf4b178e27c49109661509fe75c41b9554303d5b0c3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DL2CF5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCQOi5bW%2ByQrA1ivOEtEpWvlwjBGDEcKDhjgp4KfwHRdgIhANl1hygXlycgx09deD7miDbFXrgIM%2Boo9IWGE0QtMKZ3Kv8DCDgQABoMNjM3NDIzMTgzODA1IgzgUmVdoY%2Btv7%2BcSZUq3AOb0kr1RWL2Bmvi%2BzELliFi8fBpNrpNR2Knnd9rghjiaBc%2BgwbndocpR7DUYyW2joJaiQCKc6VHYS%2FQv6e19jrB%2ByHa1saNYnoXc4lHQL7RyPmm5EuaFs5ztA84m%2BSO0xzxa%2F9%2BH3eEtRGGqnI8l8GX5MuZXLbGCTXw6F9vju%2Ff4DB6e3eTD96%2B2eHnAOOYwmGC53TLEC93EP0fR7pwdPoca4qkSaphpi6Lbt%2B6FvJTA3OcxFRAZeEfGHgcBa7TZs9GQ5ImpRYX8c27zZMbcpaMVjTeCn4SYjVbbJ3NQHDzX8DAstgFJezl5D3DIz24ewMinFvHQoINJi98adeGzx5dm36KTPNIJ2dllEZnFARF5e8LFtXJDpa7T7XOhUQDDlnYhndzhRtdFYKKu712%2Bu5WhzmkK6TDVgvKqOYjBKsrCYQi4STUXuZmTdE2pILCqIOLfMuOVTmBM6WX8RA8l%2BG%2Bwas9lkgLfnKZcjpbqIn%2FfBP1%2FVBRv6p4oGTld4cwCLTQoQqPqG5mty0uO2DPTIp1wJ5pVt%2BjEL6f3VQ2KK%2BawKtzHO1PAyG7xxP98o2n9see9gkpHaq0cWRuAMd8tJbF6POIVvpKXGaMkK4f2j9%2FOEi8sefxyTa8GEUMAzCo%2BMLJBjqkAURLrI0ujd1qb%2FunbWMRSMFPIWjXuM7U%2FMtXWzKoE0AucwxNdaQi%2FiFABDoQQRLJYXEWZoUl5Kd7lr0dGrNZWSqucasQfdRwEIcR7gMXH3sKagzMrrl4EpZKncBwBgonZ1jrCnHXJcKLDQBonVlwtFl9lPh5bcGJ6uuFdXrJAN1kYYx7nz6vlEbwNpiEJ%2BauF7d7XZYjKNaJ1%2FD9nLk%2BGBkpcH5c&X-Amz-Signature=133f877d6a555b0f9d41eff9134d03c626885b2efead4db749aebcf02a66b1a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

