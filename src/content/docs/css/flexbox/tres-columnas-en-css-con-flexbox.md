---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDA5JKCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH4nDgQ0m7kNVzKNieHRZiac4pMO9C4YZKNl62hvfPsmAiAGBG%2BGeJHH1w9Anmd%2FuHT6RQUezJOK%2BbRzFhFRZN9TuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM41TvUS%2F%2FRijlYpRUKtwDLrHzGqLRldkXi2jQa0JdNlGUIpZyeKNK%2FJKwTnQ7tg958gz%2BghjNBFeBE0QSNVSd%2FLtWuBv3eoY%2B7yN3HIWMpMHzkgVCXk8KHa8lMjMCLT8RUwwMuKCB2v4U4zujVMYynjNSTKYHxbUnlJIhJ%2FG1euSoDvaQNstr4HFNjjKn2QP%2BTVseDdgwktNI7b1nOu3CiCc0jRPEAJ4fJmpr0I3Q%2FYVGA4sf2c8H2%2BaXjI653aH%2BS4YXoM3jkMSK6%2Be2UZjrDyYZBJRLORjEG67Tr8Nvg89k03wcWoRzWlXlSGDSYgnEt1RF%2BaRgLRrZNcnLvFxiAJvnFEFpm87ifG6oo5ar4kdQpZ1JwFg6x0u8IR3T6Ig0DhWH0VYZDrV3yX7SGENTIeemPgh2UojZtlg0ofGZoT0Glc9F76RZG%2F5QhrWkC5C%2BiTQbAAqfQvJ1TpdfSHZcQbqW3WUne4q%2FtzHr9aS9P7Ad96%2BR2AXOotci%2BXFJPk91XLewhTk08jlM7ccUWMbc0UtlyIpruknhXmq%2FoyndQg4jQRY0ai%2F0PAjdh7TYyLTz1IfbPRltejJ0trzfQDudsnAjwtvPF3oVapHkH3%2FSbKgNtpK0R00IbKwYoK%2BFFOV2d7lD98npCluK7gIwyZDEyQY6pgHLpQN3BByoY3RxI2nTYfSdUVEIV2okzTaLr5sewwKFXeEOQZ7hMQaVMclwc95ul1w6DIHFnArt%2FGfJXJAkmLFd%2BqXJvQ0TPkub6TucGb1aSDc3qVKlhrdNctQpFPO%2FM7kIcLuG2o8fCZiKzg9wjgrMRqJL2MaZg84nfQJl5vmZOFNwIuYt3wi2YNt1lHhaWPdTkjaZQIjz4%2Fxp14lw2dxAkSMfiZGC&X-Amz-Signature=3e185fdc6c22e18eefe87ca23403edf0ca6db4505ba1cd5b58cca1937440852a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDA5JKCE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIH4nDgQ0m7kNVzKNieHRZiac4pMO9C4YZKNl62hvfPsmAiAGBG%2BGeJHH1w9Anmd%2FuHT6RQUezJOK%2BbRzFhFRZN9TuSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM41TvUS%2F%2FRijlYpRUKtwDLrHzGqLRldkXi2jQa0JdNlGUIpZyeKNK%2FJKwTnQ7tg958gz%2BghjNBFeBE0QSNVSd%2FLtWuBv3eoY%2B7yN3HIWMpMHzkgVCXk8KHa8lMjMCLT8RUwwMuKCB2v4U4zujVMYynjNSTKYHxbUnlJIhJ%2FG1euSoDvaQNstr4HFNjjKn2QP%2BTVseDdgwktNI7b1nOu3CiCc0jRPEAJ4fJmpr0I3Q%2FYVGA4sf2c8H2%2BaXjI653aH%2BS4YXoM3jkMSK6%2Be2UZjrDyYZBJRLORjEG67Tr8Nvg89k03wcWoRzWlXlSGDSYgnEt1RF%2BaRgLRrZNcnLvFxiAJvnFEFpm87ifG6oo5ar4kdQpZ1JwFg6x0u8IR3T6Ig0DhWH0VYZDrV3yX7SGENTIeemPgh2UojZtlg0ofGZoT0Glc9F76RZG%2F5QhrWkC5C%2BiTQbAAqfQvJ1TpdfSHZcQbqW3WUne4q%2FtzHr9aS9P7Ad96%2BR2AXOotci%2BXFJPk91XLewhTk08jlM7ccUWMbc0UtlyIpruknhXmq%2FoyndQg4jQRY0ai%2F0PAjdh7TYyLTz1IfbPRltejJ0trzfQDudsnAjwtvPF3oVapHkH3%2FSbKgNtpK0R00IbKwYoK%2BFFOV2d7lD98npCluK7gIwyZDEyQY6pgHLpQN3BByoY3RxI2nTYfSdUVEIV2okzTaLr5sewwKFXeEOQZ7hMQaVMclwc95ul1w6DIHFnArt%2FGfJXJAkmLFd%2BqXJvQ0TPkub6TucGb1aSDc3qVKlhrdNctQpFPO%2FM7kIcLuG2o8fCZiKzg9wjgrMRqJL2MaZg84nfQJl5vmZOFNwIuYt3wi2YNt1lHhaWPdTkjaZQIjz4%2Fxp14lw2dxAkSMfiZGC&X-Amz-Signature=38f0709eebbf3e71ae6ea2e39c7be622f90c8d5c0b47634408d279df34c79c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

