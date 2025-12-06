---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHATOC6Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwbSRzkvvcE5b6BSKd89Ikh2OUy47YU4N9wO3OvISL2QIgIFNEbugKmurXJ1DZSbX1dMEYQEmfs6o6tNEN9W4AMfsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP3toFPsO3fW1M%2FtqircA7CmQiXiva0uIs%2FGbCkZJofWN50UoBFaILX7Za9TCBRhL33dbi5Jf20e5Fg2wEsxwr36NCD7C5AyXgiz%2BbVv7eFOiPQ6Pw1d1DLbgZ5QlDUXULxecEGh24t2vYRTnkC4q5tDdK56%2B5FizWF1iQO6A69hMYBH4C9ZQ%2BXrZNbkltZR46q7DDbGXEN7y0Zt7lAQkh7wdsKFpZwKNQZ%2ByxsXG5%2FfLjzmBc0ZpDai%2BCpdPdSXaWqCO8UnbMFcYb%2B9wpLUBGf%2BkK7tiEO0Q4STvEQOM6miidn1BQYsDLWQ8EMEfDF2ZREVczcbST1if7nD2A4ZuCp%2BlPZJ8aio9E21TW0mfdl9VRZ68EfXL7dPbXyQe6q7PuCMbOOa5o%2BklK8ToFTSsd1w6gk2C5Zh6oHpn4NPlZlokHere4MaSGO%2BMqFEUf%2BhOaB4ujyYPITPVMr8fgqz15EI1SJyuGOc6Zrq9q4GTMcVTwBVF68liPDc8BaLW6GkqSNyd54az2wCCJ0%2B7jNd1coaYoM5%2B9%2FbWAC6krPhUdSXgXci4VB1fPgwhnCwQbjbrHaMbmoA9H79py4dZHg7xzMDxC1zw%2BLYELJvI8hZcq59gxUgABtsvM%2Fre8Q2OpTJiAa9DQUHkAsF6iAyMJS8z8kGOqUBsJNVTRPt3QfjOl3VStll%2FLlN0YjpI81MQ5s9sTBYxDBcmmI6boJKm6VkplThhTozRWJwJu7LZnCM%2BRardtfjIQIv1tWWPCki3cf5gxWUqPOseihc%2F39OyEVQgbiLCD4o0nk%2FjQPu8KYiANgs3bikYEF7L2iDy2aJsCH%2FLzu8e%2FWPuozH0F3dkJUdIW%2FHkkoCPc1fO2%2ByOvVaipKv5ZlJ3kmnymoi&X-Amz-Signature=c8d193a2622d88a673f3e713ed36cf5ce927021226e90ec1edc3a9b3cff6eaf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHATOC6Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwbSRzkvvcE5b6BSKd89Ikh2OUy47YU4N9wO3OvISL2QIgIFNEbugKmurXJ1DZSbX1dMEYQEmfs6o6tNEN9W4AMfsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDP3toFPsO3fW1M%2FtqircA7CmQiXiva0uIs%2FGbCkZJofWN50UoBFaILX7Za9TCBRhL33dbi5Jf20e5Fg2wEsxwr36NCD7C5AyXgiz%2BbVv7eFOiPQ6Pw1d1DLbgZ5QlDUXULxecEGh24t2vYRTnkC4q5tDdK56%2B5FizWF1iQO6A69hMYBH4C9ZQ%2BXrZNbkltZR46q7DDbGXEN7y0Zt7lAQkh7wdsKFpZwKNQZ%2ByxsXG5%2FfLjzmBc0ZpDai%2BCpdPdSXaWqCO8UnbMFcYb%2B9wpLUBGf%2BkK7tiEO0Q4STvEQOM6miidn1BQYsDLWQ8EMEfDF2ZREVczcbST1if7nD2A4ZuCp%2BlPZJ8aio9E21TW0mfdl9VRZ68EfXL7dPbXyQe6q7PuCMbOOa5o%2BklK8ToFTSsd1w6gk2C5Zh6oHpn4NPlZlokHere4MaSGO%2BMqFEUf%2BhOaB4ujyYPITPVMr8fgqz15EI1SJyuGOc6Zrq9q4GTMcVTwBVF68liPDc8BaLW6GkqSNyd54az2wCCJ0%2B7jNd1coaYoM5%2B9%2FbWAC6krPhUdSXgXci4VB1fPgwhnCwQbjbrHaMbmoA9H79py4dZHg7xzMDxC1zw%2BLYELJvI8hZcq59gxUgABtsvM%2Fre8Q2OpTJiAa9DQUHkAsF6iAyMJS8z8kGOqUBsJNVTRPt3QfjOl3VStll%2FLlN0YjpI81MQ5s9sTBYxDBcmmI6boJKm6VkplThhTozRWJwJu7LZnCM%2BRardtfjIQIv1tWWPCki3cf5gxWUqPOseihc%2F39OyEVQgbiLCD4o0nk%2FjQPu8KYiANgs3bikYEF7L2iDy2aJsCH%2FLzu8e%2FWPuozH0F3dkJUdIW%2FHkkoCPc1fO2%2ByOvVaipKv5ZlJ3kmnymoi&X-Amz-Signature=6a9b6bd165cef785762a40aa394aab3e89c2055808d97404ea64227b7a5f90a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

