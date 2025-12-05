---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP37VMB5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiYAbEvDA5amMhe%2BZvCs5LffbTt%2BOz96yr8ENahFPTnAiAyB7TnLxb6T05AQ3FG4Jxu02tMibEnWnw%2B2Xw61D5eTCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMzr7pDyOE8vglcSTOKtwDPP8xXovAhqcjYT%2FzUlriDCN%2BB%2FYajjqGkcrnY1viUTdTRDY08LWqmdvLOydAW9SjpAZW9%2F%2FWA1%2FPaatNJXEyS8ZnI4lvr8iO60buBIXYRI0nQdBnb4r%2FzcXVzLXD8ZzmYaWljYVJpCBgZOlKkas1QE5Z4PGNoPoibaGG%2FaEMlVltHdq3Kn%2FJ4ebIditxzlFk35csdJOiDO%2BMGPZlUUl2pkhRT82pxe0DdhsghyhvvkQ1WeX4OIyY8mwPDluBhdpfODPpl%2B%2BprhBlcW1Bs%2BedQslc0wh2oUBkCtbYSh9JeAVe4QU3QvnKCkmdpOBpYFCXoVnschgIWaCx6xI8E5qJJYUPjbrtZ1mGqMNoTPBrJN20DokEYtu69ds9RUPC7wk4tvUa3p0k3x4PYTzkk%2Fe%2FwkioGkfeCNSiF%2BppF4IdWV9H6FhsXbXEI94jz%2FuJ5WTq%2FqFNkOoevsQn5maSk0fR8Iq9cDJDduXnEMb5arxl%2B4Uqg%2BXYuzjiol8cmY21OHumV5FV%2FSNxG5obfiAO85U0jzeyCzwUuX%2B2e6iS0OaumDVcatXsOBHsiR9SJS8nuSGFjPn4Axx6wYuy%2B5dnn%2BialJ27wbkPloz4VySdnCmb5IV7u9jgLQjZg5xBSJkw9MXNyQY6pgHPToYMxZXcnllzd9UAOfYByfPXLw8FxAUVLFYi3HTlJxC4aAj8Z7f6UjBaqQBbxuAHWfxonnjPn6STYxQUf3yguSooIeGo4jDih4OsrJPfcoXEKX%2FHusLZ61vDL%2BHl0e7LX2IYn6h%2FMZCaEnyULfzneJSsI45RpHMWZYb07YsjA8BW2caCvvmTAzTbYKd0AEHVNDWHgJSwMmfX3C9RMuinaUPm56xC&X-Amz-Signature=38096f96a1021c75722e5aecf971e0f0b3b8d482bbf56253c32e68256f73ef63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP37VMB5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiYAbEvDA5amMhe%2BZvCs5LffbTt%2BOz96yr8ENahFPTnAiAyB7TnLxb6T05AQ3FG4Jxu02tMibEnWnw%2B2Xw61D5eTCr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMzr7pDyOE8vglcSTOKtwDPP8xXovAhqcjYT%2FzUlriDCN%2BB%2FYajjqGkcrnY1viUTdTRDY08LWqmdvLOydAW9SjpAZW9%2F%2FWA1%2FPaatNJXEyS8ZnI4lvr8iO60buBIXYRI0nQdBnb4r%2FzcXVzLXD8ZzmYaWljYVJpCBgZOlKkas1QE5Z4PGNoPoibaGG%2FaEMlVltHdq3Kn%2FJ4ebIditxzlFk35csdJOiDO%2BMGPZlUUl2pkhRT82pxe0DdhsghyhvvkQ1WeX4OIyY8mwPDluBhdpfODPpl%2B%2BprhBlcW1Bs%2BedQslc0wh2oUBkCtbYSh9JeAVe4QU3QvnKCkmdpOBpYFCXoVnschgIWaCx6xI8E5qJJYUPjbrtZ1mGqMNoTPBrJN20DokEYtu69ds9RUPC7wk4tvUa3p0k3x4PYTzkk%2Fe%2FwkioGkfeCNSiF%2BppF4IdWV9H6FhsXbXEI94jz%2FuJ5WTq%2FqFNkOoevsQn5maSk0fR8Iq9cDJDduXnEMb5arxl%2B4Uqg%2BXYuzjiol8cmY21OHumV5FV%2FSNxG5obfiAO85U0jzeyCzwUuX%2B2e6iS0OaumDVcatXsOBHsiR9SJS8nuSGFjPn4Axx6wYuy%2B5dnn%2BialJ27wbkPloz4VySdnCmb5IV7u9jgLQjZg5xBSJkw9MXNyQY6pgHPToYMxZXcnllzd9UAOfYByfPXLw8FxAUVLFYi3HTlJxC4aAj8Z7f6UjBaqQBbxuAHWfxonnjPn6STYxQUf3yguSooIeGo4jDih4OsrJPfcoXEKX%2FHusLZ61vDL%2BHl0e7LX2IYn6h%2FMZCaEnyULfzneJSsI45RpHMWZYb07YsjA8BW2caCvvmTAzTbYKd0AEHVNDWHgJSwMmfX3C9RMuinaUPm56xC&X-Amz-Signature=4efc690dd3f2b99272540d441a203bec51f762b2a5478f43a24df1d8bd11ef48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

