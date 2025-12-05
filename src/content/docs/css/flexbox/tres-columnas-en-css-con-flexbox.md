---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPCYWHW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHANyM2E6vNmX4RjHHgc84ycxT7epr3eMQBh0Yx6h%2FjgAiEAt584GfxgyZkobavkeOm7pL20wFRcdqkhmGsV4tj5R04q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFTY34n72XXz9uF0ACrcA8JUh0phcaFOK8BAUl7zON81VZDPn09i0020tp%2FvmaXJxkAWXs7YFrmhkSKotf%2FhzEQ%2Bi10IGjW0ydXNuotlKqPD4OLAfEGIMhPMT0anGURipezXGG1weLKOKJKXVrt%2BMUD2CS%2BbihFP3MM1v%2FEIxYJTQ59ywxPsKftaKBfSRD%2B4ST2jk2rbqnSQPncprR9jLPNcXojZ9HOSuAHM0a0TuQUgzAioh%2BEcgvRXSsJD%2B7qp23LASW6xGvI9z0mvxxd9DRVHnlhF3u6LLWMw2Mk3Zp5CuBd3ERBqKzgH9lzic9bcxkeh%2Flqsk430KIUqmjD7fDFwplObDtqPSA1j0wo3qvU0DDKZRInAufHfBaWJbkFKx5Cto6MAPJ18bdHZOutODD8rMOcD8qLPyDF3Lj7AtY%2BgDWnsg2ieuWQCmbpO2ZKjV9iXRV6Q5d7RPD0QX3d%2Bcc8UnPbqSB58HPBDYcp%2BkCYnSNLAIwKF%2BDBKxKT3vs74tgln106MseGnFfCiS5Jq8EodVwT5dZg9TVqyos%2FMGSFnpSXA1k%2FCap1CfnHtScQK89AjrdyuvjuHDzTkk5mjPgmIQuApnw1ousHc%2BOHa70IX5ul3pHG%2Fkty3XtUaVElAu9Vi4hlA3mvOjZofMPH8y8kGOqUBmHAnSq9RWoMgd%2F1IU9Dykw2gMPR5QHj%2BJLJhILu7V8OKJRZPlduObptzVj8HFZwtaULP9ymub0xKiq10w3pPGXvRHHp84RmhK2swCONmMdYbuwSqGInPJffsxvfK07qvDIv1abii2dL7qgMjLZBXKg8XynsEBc6b93PqPQuncpGL7OE5g4tQLbOnpMI6yzgNnDKepA%2FaMkX%2B67Efs5dvNQBT%2Bw7V&X-Amz-Signature=8bd55c4d9064a973bebcfed28da818cfbee03b3ef99411f58d7a7132b9dbbf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGPCYWHW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHANyM2E6vNmX4RjHHgc84ycxT7epr3eMQBh0Yx6h%2FjgAiEAt584GfxgyZkobavkeOm7pL20wFRcdqkhmGsV4tj5R04q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDFTY34n72XXz9uF0ACrcA8JUh0phcaFOK8BAUl7zON81VZDPn09i0020tp%2FvmaXJxkAWXs7YFrmhkSKotf%2FhzEQ%2Bi10IGjW0ydXNuotlKqPD4OLAfEGIMhPMT0anGURipezXGG1weLKOKJKXVrt%2BMUD2CS%2BbihFP3MM1v%2FEIxYJTQ59ywxPsKftaKBfSRD%2B4ST2jk2rbqnSQPncprR9jLPNcXojZ9HOSuAHM0a0TuQUgzAioh%2BEcgvRXSsJD%2B7qp23LASW6xGvI9z0mvxxd9DRVHnlhF3u6LLWMw2Mk3Zp5CuBd3ERBqKzgH9lzic9bcxkeh%2Flqsk430KIUqmjD7fDFwplObDtqPSA1j0wo3qvU0DDKZRInAufHfBaWJbkFKx5Cto6MAPJ18bdHZOutODD8rMOcD8qLPyDF3Lj7AtY%2BgDWnsg2ieuWQCmbpO2ZKjV9iXRV6Q5d7RPD0QX3d%2Bcc8UnPbqSB58HPBDYcp%2BkCYnSNLAIwKF%2BDBKxKT3vs74tgln106MseGnFfCiS5Jq8EodVwT5dZg9TVqyos%2FMGSFnpSXA1k%2FCap1CfnHtScQK89AjrdyuvjuHDzTkk5mjPgmIQuApnw1ousHc%2BOHa70IX5ul3pHG%2Fkty3XtUaVElAu9Vi4hlA3mvOjZofMPH8y8kGOqUBmHAnSq9RWoMgd%2F1IU9Dykw2gMPR5QHj%2BJLJhILu7V8OKJRZPlduObptzVj8HFZwtaULP9ymub0xKiq10w3pPGXvRHHp84RmhK2swCONmMdYbuwSqGInPJffsxvfK07qvDIv1abii2dL7qgMjLZBXKg8XynsEBc6b93PqPQuncpGL7OE5g4tQLbOnpMI6yzgNnDKepA%2FaMkX%2B67Efs5dvNQBT%2Bw7V&X-Amz-Signature=5551825754329a4d7bb7e7588ee878c915289ff85a37bde3edbf04238750bff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

