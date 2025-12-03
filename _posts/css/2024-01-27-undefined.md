---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPCYL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDPVCDL7JYstPqLSLP8SIYu%2BvKBKXI0BsuPURgDiFFjBwIgd%2FHe%2FfTK162YNVzMDdqXSvvtnrSN712pC95OLFvmKAkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAR5fNnfqQlgRrRjxircA91Jxl7f3sErnNG7r2GrOqISlJVpACieGAsTiNJKuD5U2I2J0qINqUwkIKL9%2BIh8RdauXphXkVshOTDYOiFsjRpzRb2eDN6ptltdQitm%2Fanyt28br9wCbMBXFFRFj2qTInY%2FvPF%2BzZO8eStg6iWPPXY8biDBju0G85aZkK4aDR72%2F%2F2pej0FPsoTgDl5zd7MrlVxftpT142K3B0aJPpiSn%2BZwV9f1q2kxHJP8znXbqKRni8eGyYFAqEOISY6ceDbXXYzbyIUBekd%2FxJ7dVOTe37WjINKbwTJQmTc2UDls0KgrdcBKLmns1Wnd9ZBYwzQU2bPmsTfJQKBA6AnC8o8P3ax%2Ft8GT%2FCi1k7qaHXIOcjTfKMagDPzVOtJB8qoXjFgp4USFEILEdHJTV7mrIzb9TXs8jlHVB9qmGXt0YKRluLtkTQPhui%2BlKiCkTRU5BONg8b%2FjdWtqeibJnADe1iRglaK8S0YS7CHucuM9MSlm%2BsGK8zfnHygUDdBnxXEaeT27JpPgN72xkpzC8lnvBC5qvEP0cQygb%2FtQp5KK7lFtlZS3jsWEQIWJm6iEDLAjqBDYDT8glA8JBOJoo%2FWCeUqTUrIyU01rF60NcmdcgBiyqu%2BrBaJE8vNJjwAf5f8MODMwMkGOqUBAdK6bgJgKERMeMuK4l9Jc5ClSXps6zB4kiSfOM401qIxCYz3JSrn%2BsBbHbh9vJ%2FGeIxoMEFMrtiNgATbTC8lnV%2Bh4wiQ1tOldSSe3wF92c7Y2e%2Bx7k%2BX8Yllf6R64xs5S45K50xszd4FWn%2Bj9jCzXBwnZJAgvSfxDduBsxxIY5JaW1WvE4UE6yhgNbXVRP10G3k8VhPIjYZ1y7JT%2FF3UqcHOljaC&X-Amz-Signature=e7313140903835e44c563db4f47be7b054f161fd833abcce229f8838e4214076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D4FPCYL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDPVCDL7JYstPqLSLP8SIYu%2BvKBKXI0BsuPURgDiFFjBwIgd%2FHe%2FfTK162YNVzMDdqXSvvtnrSN712pC95OLFvmKAkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAR5fNnfqQlgRrRjxircA91Jxl7f3sErnNG7r2GrOqISlJVpACieGAsTiNJKuD5U2I2J0qINqUwkIKL9%2BIh8RdauXphXkVshOTDYOiFsjRpzRb2eDN6ptltdQitm%2Fanyt28br9wCbMBXFFRFj2qTInY%2FvPF%2BzZO8eStg6iWPPXY8biDBju0G85aZkK4aDR72%2F%2F2pej0FPsoTgDl5zd7MrlVxftpT142K3B0aJPpiSn%2BZwV9f1q2kxHJP8znXbqKRni8eGyYFAqEOISY6ceDbXXYzbyIUBekd%2FxJ7dVOTe37WjINKbwTJQmTc2UDls0KgrdcBKLmns1Wnd9ZBYwzQU2bPmsTfJQKBA6AnC8o8P3ax%2Ft8GT%2FCi1k7qaHXIOcjTfKMagDPzVOtJB8qoXjFgp4USFEILEdHJTV7mrIzb9TXs8jlHVB9qmGXt0YKRluLtkTQPhui%2BlKiCkTRU5BONg8b%2FjdWtqeibJnADe1iRglaK8S0YS7CHucuM9MSlm%2BsGK8zfnHygUDdBnxXEaeT27JpPgN72xkpzC8lnvBC5qvEP0cQygb%2FtQp5KK7lFtlZS3jsWEQIWJm6iEDLAjqBDYDT8glA8JBOJoo%2FWCeUqTUrIyU01rF60NcmdcgBiyqu%2BrBaJE8vNJjwAf5f8MODMwMkGOqUBAdK6bgJgKERMeMuK4l9Jc5ClSXps6zB4kiSfOM401qIxCYz3JSrn%2BsBbHbh9vJ%2FGeIxoMEFMrtiNgATbTC8lnV%2Bh4wiQ1tOldSSe3wF92c7Y2e%2Bx7k%2BX8Yllf6R64xs5S45K50xszd4FWn%2Bj9jCzXBwnZJAgvSfxDduBsxxIY5JaW1WvE4UE6yhgNbXVRP10G3k8VhPIjYZ1y7JT%2FF3UqcHOljaC&X-Amz-Signature=72ef692a7afc38ef3a617fbcf02f0cc4eb8eb6537e84082c159cbec490e4fca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

