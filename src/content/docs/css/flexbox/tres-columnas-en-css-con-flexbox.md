---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A34KN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BQg4jh5ZF3klOT66qfewLtEpkmfFhxsiRkBo0WrVePAiEA9LKK6aSmfZHfbjsEt0lbim3IMLdLploknRX%2FiEiDa1Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJkYVCOH7%2B5j%2FeRf%2FircA4iPsv9CQmTmSJHKmyKZSDFKeuucveI%2FwP00kIBQzUnTo2XTWdATfd3DLkceMpLCknaTa5iwn1VNVvLZaHyMoUmPtlQBOzL9Pu3k2tn73woUguNs70XxKZX%2Bk87YXwuYSf6BMlTemlXoqc4FToW6fj10esTNoQDPcfEkbNM2UutcktiN3YPx0fldR9ZoHmmrHZFPI1wp11aWmVgb6Im%2BNgGXKyl4WBfrh03bDoR9PL35qf7DJkFu%2Bwmibo5jKxdb6nBvGccFHtO6%2FjA6vwLFcXeCXHif3WfqX9vgYMroRlx3c2X2vWKFHHIdfPG3Xe%2B%2BSEC1nleg%2BH2u0dYjT5%2FfeDTOqBo%2BsdjJ3Iw7kmjfVpBFGj%2BJ7FV6PlY9pX4wEdQLHofErli7oNsk%2BKN1kYHvfEEdIgBeuOeIWA9SXVUwdcAamcKyCxzb71hMU8tjj0WC8BEYFw4hoIaWUABuUcA2AGVGDOfdc83yH%2BcaVqdXyZ0YqexVhu4bN3MSGozDebgVaCHYVRQqfLOIUfABnIDEbhgYKXAMCneQ8H6ewLI9kYP7K8I%2BIPixDeSi8IL%2Fr5Zl2IHkWY38t9C4PdhRBFOFI2b8L69PQdSc5cII4FtSAO68jMCfbebXmcsbiUbnMPbD0ckGOqUBCGhPuZLTeC%2FgREAUBHuAICtn6b732wXCnvUlfbk%2BEa0eirc%2B1d7M98cBsurf5q%2B9ojQZrTGOiQILxxZ7w884l3V%2BhNza590tvjtZaK1V1ddpSn5bvau8AaQdhKFB7hX4lth89AEJPqAtNfqDTuanXEyMejXJro5vjNLkyuarjF5%2BeGTOxuQ7K8%2FUiJD3yDQElBDOIcZ%2FhKbdi%2BClfLQxUEsX1Fj1&X-Amz-Signature=9d3a3ede4ef5adc9f906d2652cf6e70b5a95d9b89c9cd3de589b56f1aff82e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7A34KN7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T201645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2BQg4jh5ZF3klOT66qfewLtEpkmfFhxsiRkBo0WrVePAiEA9LKK6aSmfZHfbjsEt0lbim3IMLdLploknRX%2FiEiDa1Iq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJkYVCOH7%2B5j%2FeRf%2FircA4iPsv9CQmTmSJHKmyKZSDFKeuucveI%2FwP00kIBQzUnTo2XTWdATfd3DLkceMpLCknaTa5iwn1VNVvLZaHyMoUmPtlQBOzL9Pu3k2tn73woUguNs70XxKZX%2Bk87YXwuYSf6BMlTemlXoqc4FToW6fj10esTNoQDPcfEkbNM2UutcktiN3YPx0fldR9ZoHmmrHZFPI1wp11aWmVgb6Im%2BNgGXKyl4WBfrh03bDoR9PL35qf7DJkFu%2Bwmibo5jKxdb6nBvGccFHtO6%2FjA6vwLFcXeCXHif3WfqX9vgYMroRlx3c2X2vWKFHHIdfPG3Xe%2B%2BSEC1nleg%2BH2u0dYjT5%2FfeDTOqBo%2BsdjJ3Iw7kmjfVpBFGj%2BJ7FV6PlY9pX4wEdQLHofErli7oNsk%2BKN1kYHvfEEdIgBeuOeIWA9SXVUwdcAamcKyCxzb71hMU8tjj0WC8BEYFw4hoIaWUABuUcA2AGVGDOfdc83yH%2BcaVqdXyZ0YqexVhu4bN3MSGozDebgVaCHYVRQqfLOIUfABnIDEbhgYKXAMCneQ8H6ewLI9kYP7K8I%2BIPixDeSi8IL%2Fr5Zl2IHkWY38t9C4PdhRBFOFI2b8L69PQdSc5cII4FtSAO68jMCfbebXmcsbiUbnMPbD0ckGOqUBCGhPuZLTeC%2FgREAUBHuAICtn6b732wXCnvUlfbk%2BEa0eirc%2B1d7M98cBsurf5q%2B9ojQZrTGOiQILxxZ7w884l3V%2BhNza590tvjtZaK1V1ddpSn5bvau8AaQdhKFB7hX4lth89AEJPqAtNfqDTuanXEyMejXJro5vjNLkyuarjF5%2BeGTOxuQ7K8%2FUiJD3yDQElBDOIcZ%2FhKbdi%2BClfLQxUEsX1Fj1&X-Amz-Signature=2e84b12867db17ba0e5a61fc41371469bc20f69b40095d1c32b34e37fe3ceaef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

