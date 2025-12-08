---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AREJKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHah7TN94r2jgD8CYnSt90aBpUwdi7bxwGJqOf7B8WMAiAWJPRZPEx1Fgb7fcq%2B9gJBn2gcZ6ZtVoIgOgzIN0cesiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1B0aWnVfG77atOMKtwDTzPL4WcPPhmZ7t1zfcN2LDg1zerlFBrLLgyvfX9vnADGuD7kMbOxq9CxWaU78Y2AlfOmNtkrqDmu9LGGLK%2FY8utvDoQRP4eVeSePIluDNaBIsmRXbxfxc6B%2FQcdafICfMGIeRR5%2F0U%2FBre%2FLDrh%2BAHhG82CM8T5iaZhNqYkeWOR840mskavTTim8V4UpMbSJv6dywRmG8LoDgMTUp0sKq%2FO3fyatqVk8o9HXSyKlxyPHHZn4ihMjtrF%2BRTj4BmbZxMTF57ibZgC2Z8Y%2BCwOKXTV7vIsQRHoE5GuMGiq3ysKjP7MYkrcB6bqhLMT76HENWhkYjBINCBePglPmT7E7SJ2H4TMq7X33NgRFtfTHoGHGZdkMVPSUjP0uTnCwt93dr%2BCiKS%2BhS%2BfcO2MAerR9M9tSV%2F3rMnbLzLzBLvULZ%2BQeGyUjeRspQZOGVRjnfTGCYUcuhxEBLn0%2FYgPjWeDa7%2BsETRAW28AJmgkN1d6URfq4zm4iuTeZmL0k21foWOG6egKjcbGEaZ6WYp28tzv4tiGrvw6kA9e9hGhIxd7ziaJgJuFrkVemsskM%2BwMcVRIvq37nJlyog9IoeWjRmyQSuNnViXL6BM4y3AKVORJ8aSoPVfooedho4HX621wwm9HYyQY6pgFYJWktLxhAPmdECNV9xgyU9CS0LfJIFpP%2FGn7a05nFPlCwPFmls5JL%2FFbqEOEoE%2BxSF1Aw%2BPYJj70b4PW7b5TJVIC89H%2FIvk8ep1vH692QWx19r8DVLIIW7%2FHsNWSkkJ8x3iqWfscyhWkbWYMoZbr6lmQnYINXEcEIkCVEw6PQT%2BJml7h9ADFw%2FUz3qnlGeJatt8Ahs2J%2BRcMkiRPdiIUFh%2FfevO1E&X-Amz-Signature=5bd7e3f8e47b87befea04138b3b3e57799f57618136661a6dbe16870773e08b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664AREJKR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T015030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFHah7TN94r2jgD8CYnSt90aBpUwdi7bxwGJqOf7B8WMAiAWJPRZPEx1Fgb7fcq%2B9gJBn2gcZ6ZtVoIgOgzIN0cesiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq1B0aWnVfG77atOMKtwDTzPL4WcPPhmZ7t1zfcN2LDg1zerlFBrLLgyvfX9vnADGuD7kMbOxq9CxWaU78Y2AlfOmNtkrqDmu9LGGLK%2FY8utvDoQRP4eVeSePIluDNaBIsmRXbxfxc6B%2FQcdafICfMGIeRR5%2F0U%2FBre%2FLDrh%2BAHhG82CM8T5iaZhNqYkeWOR840mskavTTim8V4UpMbSJv6dywRmG8LoDgMTUp0sKq%2FO3fyatqVk8o9HXSyKlxyPHHZn4ihMjtrF%2BRTj4BmbZxMTF57ibZgC2Z8Y%2BCwOKXTV7vIsQRHoE5GuMGiq3ysKjP7MYkrcB6bqhLMT76HENWhkYjBINCBePglPmT7E7SJ2H4TMq7X33NgRFtfTHoGHGZdkMVPSUjP0uTnCwt93dr%2BCiKS%2BhS%2BfcO2MAerR9M9tSV%2F3rMnbLzLzBLvULZ%2BQeGyUjeRspQZOGVRjnfTGCYUcuhxEBLn0%2FYgPjWeDa7%2BsETRAW28AJmgkN1d6URfq4zm4iuTeZmL0k21foWOG6egKjcbGEaZ6WYp28tzv4tiGrvw6kA9e9hGhIxd7ziaJgJuFrkVemsskM%2BwMcVRIvq37nJlyog9IoeWjRmyQSuNnViXL6BM4y3AKVORJ8aSoPVfooedho4HX621wwm9HYyQY6pgFYJWktLxhAPmdECNV9xgyU9CS0LfJIFpP%2FGn7a05nFPlCwPFmls5JL%2FFbqEOEoE%2BxSF1Aw%2BPYJj70b4PW7b5TJVIC89H%2FIvk8ep1vH692QWx19r8DVLIIW7%2FHsNWSkkJ8x3iqWfscyhWkbWYMoZbr6lmQnYINXEcEIkCVEw6PQT%2BJml7h9ADFw%2FUz3qnlGeJatt8Ahs2J%2BRcMkiRPdiIUFh%2FfevO1E&X-Amz-Signature=34daa08e3caa6cec680f2b3fb828ca923abfe5076f32f6f9b29534b84d968569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

