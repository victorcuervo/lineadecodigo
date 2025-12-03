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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRY4XWE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDBgdCcZb8VD804eyOqzRlSfoDai0kx4d2LDR%2FLdkG9AQIgM%2FX2cxHiqtb7rdHpWnIGhXZKzVe1k%2FObjq%2FfPsPOS9Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPURsqTAOQieLWZCzircA%2FD373V8xQlS8hOdn3wuZ0nqFy7qIPSZQBfa%2B7hyeN7LMxoIQtIsNeabgGkSlbluo%2FOmfB3EwcNanLdFXeX00yyhcFxHwiRcYYt6lFmLY7Ml3BYYRnJrdr0gyp0WqjeQDyQjz5mPUSuuJSFc%2Fnbx1x5bvrtcZkyetGsUQ9tP38upa7SmjSmOewN2DFHOPkjUDh%2Btqww7rvcoIOEo%2BkW8Ikj5VO0MZmvAYRonCVX%2Fsv%2BlYUS3A0Mn3r%2FSQBXsJrDO4%2F7G5ZWGIZSaguquECy6apETWLU6VVJyYToo8s40MPGIxNcI27HdQarZyi%2FsM6aqCCpuMPyyJjPx7JdLhIO31Hx6bpzTRNl6y4TWtmegbUZxaHEqU1zLw2BQOJ8D8T5LaOPVtnx9grgzhe3iiccay0uAJ62aSfMH9YMyICeOFN9QCUoqeh1zGNk7uY1p%2FhOfDpmelqa%2FVtp926S2t6vOzeJd%2BUhWVXXr1Y7ZAiROf51jCSQtf5hGvzygUtJr952TQhUKqYiU7vkwiwW45rBXCua4%2FeFLkkZC5ElcqHM1Yn6SbNjufcbDLW7v8qnPzoPHVTd%2FtsYZVD5mXLjjXPmziBTaNgnu%2B8nB8hWJFl6qJd18JNQC75e0dRlwizw%2FMPD1v8kGOqUBlKKSMbyAGilggxXVJrZkdPNku1Wlfy%2FU3105HCV2wd0AbJyXvZDPrPvP9k0d7ClUeiPqZLk1fgPKvBYVMye729b8hMAuuFG0rmqpOhtaiLN893HFEvYjGSPyTe43t5oh0MlhWlP%2BmdCqsVqDADx8ayxwPCIIA0fLKSGUNIFq3cy7zMH7UX%2BhsSkLeOZer%2BHPvfw0hMNp3Qt2%2BARi8UylFVVoM6cg&X-Amz-Signature=3c7c43d44a8d8d975d5a066e92e5945fc3684615d174998360e17db0498dda76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IRY4XWE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDBgdCcZb8VD804eyOqzRlSfoDai0kx4d2LDR%2FLdkG9AQIgM%2FX2cxHiqtb7rdHpWnIGhXZKzVe1k%2FObjq%2FfPsPOS9Qq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPURsqTAOQieLWZCzircA%2FD373V8xQlS8hOdn3wuZ0nqFy7qIPSZQBfa%2B7hyeN7LMxoIQtIsNeabgGkSlbluo%2FOmfB3EwcNanLdFXeX00yyhcFxHwiRcYYt6lFmLY7Ml3BYYRnJrdr0gyp0WqjeQDyQjz5mPUSuuJSFc%2Fnbx1x5bvrtcZkyetGsUQ9tP38upa7SmjSmOewN2DFHOPkjUDh%2Btqww7rvcoIOEo%2BkW8Ikj5VO0MZmvAYRonCVX%2Fsv%2BlYUS3A0Mn3r%2FSQBXsJrDO4%2F7G5ZWGIZSaguquECy6apETWLU6VVJyYToo8s40MPGIxNcI27HdQarZyi%2FsM6aqCCpuMPyyJjPx7JdLhIO31Hx6bpzTRNl6y4TWtmegbUZxaHEqU1zLw2BQOJ8D8T5LaOPVtnx9grgzhe3iiccay0uAJ62aSfMH9YMyICeOFN9QCUoqeh1zGNk7uY1p%2FhOfDpmelqa%2FVtp926S2t6vOzeJd%2BUhWVXXr1Y7ZAiROf51jCSQtf5hGvzygUtJr952TQhUKqYiU7vkwiwW45rBXCua4%2FeFLkkZC5ElcqHM1Yn6SbNjufcbDLW7v8qnPzoPHVTd%2FtsYZVD5mXLjjXPmziBTaNgnu%2B8nB8hWJFl6qJd18JNQC75e0dRlwizw%2FMPD1v8kGOqUBlKKSMbyAGilggxXVJrZkdPNku1Wlfy%2FU3105HCV2wd0AbJyXvZDPrPvP9k0d7ClUeiPqZLk1fgPKvBYVMye729b8hMAuuFG0rmqpOhtaiLN893HFEvYjGSPyTe43t5oh0MlhWlP%2BmdCqsVqDADx8ayxwPCIIA0fLKSGUNIFq3cy7zMH7UX%2BhsSkLeOZer%2BHPvfw0hMNp3Qt2%2BARi8UylFVVoM6cg&X-Amz-Signature=ad661cc6986a84b9364a224de9dee1ced1378f03b1586f854caf5b81b346ddef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

