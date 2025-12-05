---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627P6LV5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXVhrAlAFrxJ%2F6dD0hahdRAozVGAyPl9tTQplU3fpSYQIgDOVaSyYiJvc%2B9WVD6wc0qDghzCrOmPC8atkvD6i53tAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFNcKj2hAViMTVUWjyrcA9XgMwybwndezTp4waAi0WLw2U1DC6qj1fDb8Y0w4JAwSMwoiqYOqlMbxZDS32KjjIyk%2Bhlr0foQMsEKHmRFindpKFMbF1wYtrx6Ls3d%2FtG9qN0GNHKeSlqcKUKFg%2BwbgNqIbZCf3dsOYhBzRAJSNl7LH3Akp4jAxbUqm%2BbRnjVW84h17tr0C521mIF%2FCUSz2iriYOj0wyU18z296fphBXCIORSC6hNZaxSACGaXDUrt5kQ4B9wwa63C9FLvbq93xgizKWKJj%2BFn5IIvgOa1w7P%2Fqk5yE0%2BGDzUpuu6UxkgstcTEN3Wah6nmBcDAsG3YBF7lXoADWj6fCnb65ZVqnGmUB5CVLoxV7LtvrMvn5i95z68P8EAKI7mZqgmPheSXwLueMq0%2FG8lfe3NCbvPKyCZ77oY45%2Bx%2F2Q%2FISLUBCVYbO8tyAGwK17ToIUmLaxp3PdHvPuuEuf255lL7s83bchkVBH55kkbSXQP2ReUW%2FhH3q7AVEC2wxfAOzchVICTlf%2B3k3b2gusVuwW0Q82NFeZOVxV5BpjcK3uNnEtdCnJ8mecmCellAt49XcFFHOyxvSGIdot%2BMC6sYAoBOZXaISqb0%2F1gbFExi838q2Bgt1eRByDzLqHhdP3CvwaqPMNPPyskGOqUBFU4vRFWXOTudWavldJTr1xGWB%2Fb5ROp7iROmcsWISGURZ0Dyyp%2Bdm2fHPigI8r3SNi2FbdPT5Nqf%2F9V143fRMkjj6RQfoIQfno1WLm6hv8C50CCnpK8Gpnhn3PXf%2FmpD1SRYBYSM342w%2FD8n8asE%2FGNwRDUQ%2Bs5WAGDH7U1IqfZ%2Bez6NBb2rfeYG8uvX8ej7SVEhSMUdjEv1G9xew4amK%2BrbINmn&X-Amz-Signature=bd440b0d471f0cdb90f1c01326f44b2feaabdc6d4bf9882776e8834ba14493c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627P6LV5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXVhrAlAFrxJ%2F6dD0hahdRAozVGAyPl9tTQplU3fpSYQIgDOVaSyYiJvc%2B9WVD6wc0qDghzCrOmPC8atkvD6i53tAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFNcKj2hAViMTVUWjyrcA9XgMwybwndezTp4waAi0WLw2U1DC6qj1fDb8Y0w4JAwSMwoiqYOqlMbxZDS32KjjIyk%2Bhlr0foQMsEKHmRFindpKFMbF1wYtrx6Ls3d%2FtG9qN0GNHKeSlqcKUKFg%2BwbgNqIbZCf3dsOYhBzRAJSNl7LH3Akp4jAxbUqm%2BbRnjVW84h17tr0C521mIF%2FCUSz2iriYOj0wyU18z296fphBXCIORSC6hNZaxSACGaXDUrt5kQ4B9wwa63C9FLvbq93xgizKWKJj%2BFn5IIvgOa1w7P%2Fqk5yE0%2BGDzUpuu6UxkgstcTEN3Wah6nmBcDAsG3YBF7lXoADWj6fCnb65ZVqnGmUB5CVLoxV7LtvrMvn5i95z68P8EAKI7mZqgmPheSXwLueMq0%2FG8lfe3NCbvPKyCZ77oY45%2Bx%2F2Q%2FISLUBCVYbO8tyAGwK17ToIUmLaxp3PdHvPuuEuf255lL7s83bchkVBH55kkbSXQP2ReUW%2FhH3q7AVEC2wxfAOzchVICTlf%2B3k3b2gusVuwW0Q82NFeZOVxV5BpjcK3uNnEtdCnJ8mecmCellAt49XcFFHOyxvSGIdot%2BMC6sYAoBOZXaISqb0%2F1gbFExi838q2Bgt1eRByDzLqHhdP3CvwaqPMNPPyskGOqUBFU4vRFWXOTudWavldJTr1xGWB%2Fb5ROp7iROmcsWISGURZ0Dyyp%2Bdm2fHPigI8r3SNi2FbdPT5Nqf%2F9V143fRMkjj6RQfoIQfno1WLm6hv8C50CCnpK8Gpnhn3PXf%2FmpD1SRYBYSM342w%2FD8n8asE%2FGNwRDUQ%2Bs5WAGDH7U1IqfZ%2Bez6NBb2rfeYG8uvX8ej7SVEhSMUdjEv1G9xew4amK%2BrbINmn&X-Amz-Signature=0f1d1382590f823a4e74dcb7bea214d999d212a9133176a1311dfb95a22f36b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

