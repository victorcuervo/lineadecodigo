---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUYW246%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVoB9xg6TO6eY5r7JR1pXghVx505UtYCN4W0cDzO0HbAiAKWCui28JfYl6jLwarrBKjNlM5VbXjtleJoKqoz3IZZSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTUYiNLat93bOs54KtwDIgK7JQW0LqG4Qm2b8D41LK9kqUNHqR81Pyr1r4i5utYlgrkRkzKzKkciF6m6Q3tCmS5EphaSBnAi7JXpemSldl%2F1ZLfkSp6mIG882ccxSQyfOe%2BgRxdg8wpTubz5q8yWTDO3vqWHnD4b3lDDMNK766e8vSGf9oCteFwuENlaF2Av01CxGjsbZs2cqjNMZ74pGb7m8Ed5hKDHJpX5fVWyj1qiy%2BVMY3zArJXFR2gnXn16VNSYBbdozfSeH3dWWFySNd6m6X%2BgLL4KiRtPR9pwjahxpd0VElLwPwSS%2FjhaheKITimPBIZeAsmQAjTK%2FS0V7SJCkONXjU2DJvEuw644jFeFA3TOtOkBdcyzOFD1piGD8%2FtSJr8pim2akgYzknU3BZLa0Et01PXXCJjkZU6IMJvwegT33KqwtdgLyImuYNt%2FSTWClnHr4BVnaQ7HgHF7BfnrE32exmvGprmtzQMa8LcGCAc5rqPuEv0POnLJ8XSDIs8KBXdW0fE0MCr%2B5JML5X7VxekaHQgRswnZRLbVnnlaC6aR8f2iu7NLShCaAIhRu2JcrIzhvkkecXIRRW64leX0hVY0nZFjOdIXHyjmAGZQAjAoj193E75Sa6KBXcOXhH6B8pJP1f2OrE8w9OzZyQY6pgGzR8L7wBlXChvNPdfSPPnEyEUMaCagoOqJj8z%2BORYpIoMvfi2aiZefbDPAZfjaan0bodPx3nwP3SK5XwdyFL7ckEB8PGhiFUiV522Ger5MQhZg7vwUSACq%2B5hkJHY6zdQ84OIiwPxlU%2B3jNW%2B3V0Q7961qBL8qEvoqlXhjfNsxqobV6tOi%2BNdl6ERPXe5%2FPPij%2BUVKANbU07F%2FoC6smI8iVc2kbW8L&X-Amz-Signature=fee953ee720fb4a5cd1affdff9b2cd87946bf9d8a8e179cd3bdd4efbbc2c6b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EUYW246%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICVoB9xg6TO6eY5r7JR1pXghVx505UtYCN4W0cDzO0HbAiAKWCui28JfYl6jLwarrBKjNlM5VbXjtleJoKqoz3IZZSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQTUYiNLat93bOs54KtwDIgK7JQW0LqG4Qm2b8D41LK9kqUNHqR81Pyr1r4i5utYlgrkRkzKzKkciF6m6Q3tCmS5EphaSBnAi7JXpemSldl%2F1ZLfkSp6mIG882ccxSQyfOe%2BgRxdg8wpTubz5q8yWTDO3vqWHnD4b3lDDMNK766e8vSGf9oCteFwuENlaF2Av01CxGjsbZs2cqjNMZ74pGb7m8Ed5hKDHJpX5fVWyj1qiy%2BVMY3zArJXFR2gnXn16VNSYBbdozfSeH3dWWFySNd6m6X%2BgLL4KiRtPR9pwjahxpd0VElLwPwSS%2FjhaheKITimPBIZeAsmQAjTK%2FS0V7SJCkONXjU2DJvEuw644jFeFA3TOtOkBdcyzOFD1piGD8%2FtSJr8pim2akgYzknU3BZLa0Et01PXXCJjkZU6IMJvwegT33KqwtdgLyImuYNt%2FSTWClnHr4BVnaQ7HgHF7BfnrE32exmvGprmtzQMa8LcGCAc5rqPuEv0POnLJ8XSDIs8KBXdW0fE0MCr%2B5JML5X7VxekaHQgRswnZRLbVnnlaC6aR8f2iu7NLShCaAIhRu2JcrIzhvkkecXIRRW64leX0hVY0nZFjOdIXHyjmAGZQAjAoj193E75Sa6KBXcOXhH6B8pJP1f2OrE8w9OzZyQY6pgGzR8L7wBlXChvNPdfSPPnEyEUMaCagoOqJj8z%2BORYpIoMvfi2aiZefbDPAZfjaan0bodPx3nwP3SK5XwdyFL7ckEB8PGhiFUiV522Ger5MQhZg7vwUSACq%2B5hkJHY6zdQ84OIiwPxlU%2B3jNW%2B3V0Q7961qBL8qEvoqlXhjfNsxqobV6tOi%2BNdl6ERPXe5%2FPPij%2BUVKANbU07F%2FoC6smI8iVc2kbW8L&X-Amz-Signature=7f1b432dfb23137de649ab25d48b4de6a828ff0c15fb183d85d56ba649fc0e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

