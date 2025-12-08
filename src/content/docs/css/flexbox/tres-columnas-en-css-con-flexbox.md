---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARRG3RS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91ttNkaZ1SY0M50gaJPiLOUIU7lNstN4DIGNHTnlzrAIhANlG8CVBO7LnztT9DfOSNZacq66AFsLd0ArGeMAj17azKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys0G3km182%2B9lzgfkq3AMbqdhWxwMNFiDgaBnbzTkDKPZqIGIzzjYruvKkbFG83dEJS6H6BdKjptUftrCo3HuIb2uUddBTDiIEuMCjOtJ06sihnZ%2BiP1F%2FhSrF8UY3V3RcoAtB%2F3XPHP0N6%2F6iGPJXQVW8lKoVCI6DeDrvARCuKIGlBp%2FfpubfvSWdBbQ212OOPTlnS3EmOq2lTQlHzgBDMUMq5%2FjiaG1WRBo%2BcBf6pKfwFoctjYJQCWW%2BhqfGjwRpyG0ngQkcc%2FWTkKw29Akxxs8IGGH6zNDz7VA6P6ZoiKQyY7nCPv129xy2peezs%2FXsIYKYrJzEvBy0gXlqNVEGcb5GuahoYwuTt0XEGgjSHHbb4WxEfUEEEh4ozFqjpz3f8iCCd0vWNrvMQesePcXlrfIKaP%2B83NP6JQt5IaKWA6DPfpw%2Bt27nTjdjWGdCA1AtdNoQt9SRag5MAwr6EQ8m73AsmENaJqpaSsYQxGD5v1XiW%2BRg0CJRZbWD6jcvrDkcG5DIcdFGkeeniCVQpPbU1w9YLWxWMIHK6tLkYtXnFKTPfQ005hMJi0C%2F2jQcj%2BGicmsIenu20cRAU94%2BQNg0MPnCvo5PwHO7VNm3mf%2BP2S2E5F7If1jKbnPPUYkB1gMV9OBrzCfcGAODVDDDs9zJBjqkAUkBeMEJ4vxvZYI0jKQNmJaj4mDT7F5Nli4Jpdb4B4RldLsbmy2B%2BVi2BAnOeiApkkV90BEbrr3Qdj7fmNJWGIgH069A%2B0PuFlvbt539qA4Ozs474iEoRkJObp7emOVDRLPcnEzjc8EshwRaXpE%2BgHFcZ3GFn74Vs8Zaf2D2EZ%2ByZyRsUBuYy12r887GdRzlTiDtvrS4jJJ%2BcZo8sjfcAatChGmd&X-Amz-Signature=acd6a7a90816840b7deff0c4e2b819c6a6acafd3af3723c1468173acbfa22594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XARRG3RS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T194149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC91ttNkaZ1SY0M50gaJPiLOUIU7lNstN4DIGNHTnlzrAIhANlG8CVBO7LnztT9DfOSNZacq66AFsLd0ArGeMAj17azKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igys0G3km182%2B9lzgfkq3AMbqdhWxwMNFiDgaBnbzTkDKPZqIGIzzjYruvKkbFG83dEJS6H6BdKjptUftrCo3HuIb2uUddBTDiIEuMCjOtJ06sihnZ%2BiP1F%2FhSrF8UY3V3RcoAtB%2F3XPHP0N6%2F6iGPJXQVW8lKoVCI6DeDrvARCuKIGlBp%2FfpubfvSWdBbQ212OOPTlnS3EmOq2lTQlHzgBDMUMq5%2FjiaG1WRBo%2BcBf6pKfwFoctjYJQCWW%2BhqfGjwRpyG0ngQkcc%2FWTkKw29Akxxs8IGGH6zNDz7VA6P6ZoiKQyY7nCPv129xy2peezs%2FXsIYKYrJzEvBy0gXlqNVEGcb5GuahoYwuTt0XEGgjSHHbb4WxEfUEEEh4ozFqjpz3f8iCCd0vWNrvMQesePcXlrfIKaP%2B83NP6JQt5IaKWA6DPfpw%2Bt27nTjdjWGdCA1AtdNoQt9SRag5MAwr6EQ8m73AsmENaJqpaSsYQxGD5v1XiW%2BRg0CJRZbWD6jcvrDkcG5DIcdFGkeeniCVQpPbU1w9YLWxWMIHK6tLkYtXnFKTPfQ005hMJi0C%2F2jQcj%2BGicmsIenu20cRAU94%2BQNg0MPnCvo5PwHO7VNm3mf%2BP2S2E5F7If1jKbnPPUYkB1gMV9OBrzCfcGAODVDDDs9zJBjqkAUkBeMEJ4vxvZYI0jKQNmJaj4mDT7F5Nli4Jpdb4B4RldLsbmy2B%2BVi2BAnOeiApkkV90BEbrr3Qdj7fmNJWGIgH069A%2B0PuFlvbt539qA4Ozs474iEoRkJObp7emOVDRLPcnEzjc8EshwRaXpE%2BgHFcZ3GFn74Vs8Zaf2D2EZ%2ByZyRsUBuYy12r887GdRzlTiDtvrS4jJJ%2BcZo8sjfcAatChGmd&X-Amz-Signature=5848c212cd4a63dd68011369af0d829c232129c1f30d069c8e8407ad096a7e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

