---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RU6YDZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9yEUVgs0QZ2Tm5VY%2FzNnJ03zu2KVIHj054b1yFAUu0AiEAwX7MsXnjg2xVCO7iXDA3hWZP9zgQTXGMDkwgnykp9YIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG87V9ULbhfh%2B6sHlSrcA%2BOKq1mq1ajyR2cam2MLeziDYK%2BTVX%2FK%2FedtesgFK%2Bs5MjIG6Wu95AsqenB58hGvZ2FRye9tzfyL81MgzQQR1lUu6J3UU59uKCSYtBFU4WPZ5JuPq8MRQvWkV7xyQkfx6Fu9BZ1CI1dn%2F0898wNUCc33tBcI%2FfwqDA5Itt9FHPti%2FPG1XQ5sBLRXs%2FuMo7RytjQE8h6B7PmMuV2foO2MxYJJ35f3r5fxoLy4FMx6v5ZcBaBVTMbTmqZ5BMy0WhRuC4B7ST9W5LeM923looGlDi6oRoBqDofb4tHUtG4CWL0l923N162uP9wbtyW3NT8OtulYLAr3HaSRmRqkxbQwP4i5EiNjKEtUNPBQfMZbzRCHMpLwBuKNe6V%2BYSe7R9FVTpVaKc9hv0BiRSF%2BRwG2CnI9KlbmM47KHnD7HBxRyxgLCN%2BPE3wS5mbkuHL7iP2%2F%2F4excC5TDWGoOhPm%2F7mFZgpj4%2Fs%2BubMJ65meMmzxn0I4pIU9zudXjHYzf6qBU99tnpuv6QBmSNQ9T2XISLAFUlYpySCdBocng92EKDT4WuDlIWuYp%2FIVPblkFbVk7fLJWGXGk03VJMQA1KIeof%2BmHXHA6uPV7ehgU7fl6ef1QEgmNjQue0pe3mD%2FYQhlMOym0MkGOqUBKavyO4mVwt%2BOYK7CWFWy7cyt%2B%2FUBtjRwE3ND3XxTz7uGs204jQk3YYciB%2Fq9ROuMNcmBa7RSmKyxGMlU3K6FSK6WU6usgXZ0sjcBtYv4rrDoB%2FHRzNDHBL9VwyAKoHCifTiFK4rfQSRNQg183QZtL%2Bh75%2FcftzY%2BuFlM3y%2FP4mFceAdDZ%2BPGkNWdBgV52xgs6kRy2oetl%2F0Pt3mv0yrMfyXEAigR&X-Amz-Signature=ebb50ed328becbc1d06ea65f649f07855e18d8020e746bba36e5319a39f46fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RU6YDZL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9yEUVgs0QZ2Tm5VY%2FzNnJ03zu2KVIHj054b1yFAUu0AiEAwX7MsXnjg2xVCO7iXDA3hWZP9zgQTXGMDkwgnykp9YIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG87V9ULbhfh%2B6sHlSrcA%2BOKq1mq1ajyR2cam2MLeziDYK%2BTVX%2FK%2FedtesgFK%2Bs5MjIG6Wu95AsqenB58hGvZ2FRye9tzfyL81MgzQQR1lUu6J3UU59uKCSYtBFU4WPZ5JuPq8MRQvWkV7xyQkfx6Fu9BZ1CI1dn%2F0898wNUCc33tBcI%2FfwqDA5Itt9FHPti%2FPG1XQ5sBLRXs%2FuMo7RytjQE8h6B7PmMuV2foO2MxYJJ35f3r5fxoLy4FMx6v5ZcBaBVTMbTmqZ5BMy0WhRuC4B7ST9W5LeM923looGlDi6oRoBqDofb4tHUtG4CWL0l923N162uP9wbtyW3NT8OtulYLAr3HaSRmRqkxbQwP4i5EiNjKEtUNPBQfMZbzRCHMpLwBuKNe6V%2BYSe7R9FVTpVaKc9hv0BiRSF%2BRwG2CnI9KlbmM47KHnD7HBxRyxgLCN%2BPE3wS5mbkuHL7iP2%2F%2F4excC5TDWGoOhPm%2F7mFZgpj4%2Fs%2BubMJ65meMmzxn0I4pIU9zudXjHYzf6qBU99tnpuv6QBmSNQ9T2XISLAFUlYpySCdBocng92EKDT4WuDlIWuYp%2FIVPblkFbVk7fLJWGXGk03VJMQA1KIeof%2BmHXHA6uPV7ehgU7fl6ef1QEgmNjQue0pe3mD%2FYQhlMOym0MkGOqUBKavyO4mVwt%2BOYK7CWFWy7cyt%2B%2FUBtjRwE3ND3XxTz7uGs204jQk3YYciB%2Fq9ROuMNcmBa7RSmKyxGMlU3K6FSK6WU6usgXZ0sjcBtYv4rrDoB%2FHRzNDHBL9VwyAKoHCifTiFK4rfQSRNQg183QZtL%2Bh75%2FcftzY%2BuFlM3y%2FP4mFceAdDZ%2BPGkNWdBgV52xgs6kRy2oetl%2F0Pt3mv0yrMfyXEAigR&X-Amz-Signature=dff6173dd15b37a02852aaa170cbf7a2e211badb809d5b79e564d28bf6ed6623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

