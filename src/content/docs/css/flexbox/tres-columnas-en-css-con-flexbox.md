---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JH7QQWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfgphZCUlTxg56hM5m6wbFu0jFTqOFRr0D9SmsqAu3GwIgK%2Fz3ke3wIfw7ewMin4VLvNwDuq8J%2BkWSkGXQah8YvaEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs1qEfm1R25HZrQCrcA3k2f%2BwaQyDyT3onWtti5nUgTufytx0WgCURZqzgBg%2FgBUuuVsnXgprT7dtaLI%2FEUFGwlcD32EsUF8aV3Ftfqss8g5LcMXQLuM3hvzyIgkiGItk1VoAoEofNcDBuy3wwxhfjF8PxMH5SMTuT8gNJGiy8hiSTg4f50dPDSkK40JkkhcAu9x3CUZFsiUlobH5GmyzjYTb2MSv5wYMSlndMIQIK0zaWEVfA%2Bniwu96DuwiPrJ0kpiRafzBXdioELfyEgJiLmoe%2FElKwnfOIVl18T3aXhYe%2FpD5YlnNZ9Jy1epJUSDUJZP%2FCpWAOQa3BteQoEjqey2vCL%2FJ3Qg%2FctM9zS4YOQaJj8ryFQsHWbBQFNgZIt30EcrqC7U49ZX1W73mnLcLnkZAubxRfqoWCavTUWO5GvK9bpg%2F4BXiokulHRLCipmmmqqTjYc%2F4888Jr6fMgq8%2Fd7Ep8%2BJ25UW%2B%2FmnXUZ9bKTUvoK88popxABM1G9qq4duubGsgRnyOB8lXfZplaPAwe3JAxLV7C%2FzvQCRmu6ljCPTt8qJ8GLHooCeEKLAjK2qVRucq9WGwYcXtGjclCesx0uiUWKM%2FPCPkGZk677KGjMGwSFz6PBDg7sNph9yvCSncfP9bnq%2BqEsrhMI281skGOqUBb4wLTkfT3Ja1%2B%2BF5vOPa8qYil1dl2gohjX%2Fq3r51tgziikhSGsW5SJKKG6oPblt4yDpgn5kmjvXgtFzZIzRvBRYJiqcVmO34zt%2FLp5LUFFqt5F74PLQhGouectJpBDDxLNRzXhiTWh9PImXWR0liVQisxm0%2BZ9jkIMef3sVSqd2dqlU4YY1h87abs0MHt%2FIKiprb6RJD2RlK2eg2QN%2BfXTMy0JEz&X-Amz-Signature=0bebfb5783049b21df0c1a8b9b63f2da3afa2b2e183ea289dd95e836d8c46157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JH7QQWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfgphZCUlTxg56hM5m6wbFu0jFTqOFRr0D9SmsqAu3GwIgK%2Fz3ke3wIfw7ewMin4VLvNwDuq8J%2BkWSkGXQah8YvaEqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQs1qEfm1R25HZrQCrcA3k2f%2BwaQyDyT3onWtti5nUgTufytx0WgCURZqzgBg%2FgBUuuVsnXgprT7dtaLI%2FEUFGwlcD32EsUF8aV3Ftfqss8g5LcMXQLuM3hvzyIgkiGItk1VoAoEofNcDBuy3wwxhfjF8PxMH5SMTuT8gNJGiy8hiSTg4f50dPDSkK40JkkhcAu9x3CUZFsiUlobH5GmyzjYTb2MSv5wYMSlndMIQIK0zaWEVfA%2Bniwu96DuwiPrJ0kpiRafzBXdioELfyEgJiLmoe%2FElKwnfOIVl18T3aXhYe%2FpD5YlnNZ9Jy1epJUSDUJZP%2FCpWAOQa3BteQoEjqey2vCL%2FJ3Qg%2FctM9zS4YOQaJj8ryFQsHWbBQFNgZIt30EcrqC7U49ZX1W73mnLcLnkZAubxRfqoWCavTUWO5GvK9bpg%2F4BXiokulHRLCipmmmqqTjYc%2F4888Jr6fMgq8%2Fd7Ep8%2BJ25UW%2B%2FmnXUZ9bKTUvoK88popxABM1G9qq4duubGsgRnyOB8lXfZplaPAwe3JAxLV7C%2FzvQCRmu6ljCPTt8qJ8GLHooCeEKLAjK2qVRucq9WGwYcXtGjclCesx0uiUWKM%2FPCPkGZk677KGjMGwSFz6PBDg7sNph9yvCSncfP9bnq%2BqEsrhMI281skGOqUBb4wLTkfT3Ja1%2B%2BF5vOPa8qYil1dl2gohjX%2Fq3r51tgziikhSGsW5SJKKG6oPblt4yDpgn5kmjvXgtFzZIzRvBRYJiqcVmO34zt%2FLp5LUFFqt5F74PLQhGouectJpBDDxLNRzXhiTWh9PImXWR0liVQisxm0%2BZ9jkIMef3sVSqd2dqlU4YY1h87abs0MHt%2FIKiprb6RJD2RlK2eg2QN%2BfXTMy0JEz&X-Amz-Signature=4c96380ceee3bcd554d98a4f822b030f5af71c7802fb609663363cb76c4898e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

